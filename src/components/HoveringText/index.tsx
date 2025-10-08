/* eslint no-param-reassign: 0 */

import clsx from 'clsx'
import { motion, Variants } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import SplitType, { SplitTypeOptions } from 'split-type'
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid'

import { config } from '@/components/config'
import { motionEasing } from '@/utils/motion'
import { debounce } from '@/utils/performance'

export type OnHoveringListener = ({
  isMinimapContent,
  containerElement,
}: {
  containerElement: HTMLDivElement | null
  isMinimapContent: boolean
}) => void

interface HoveringTextProps {
  className?: string
  onHoveringComplete?: OnHoveringListener
  onHoveringStart?: OnHoveringListener
}

const hoveringVariants: Variants = {
  initial: {
    y: '100%',
    transition: { duration: 0 },
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: motionEasing.expoOut,
      delay: 0.1,
    },
  },
}

const textKeyNameSpace = uuidv4()

export const HoveringText = ({
  children,
  className,
  onHoveringComplete,
  onHoveringStart,
}: React.PropsWithChildren<HoveringTextProps>) => {
  const [lines, setLines] = useState<React.ReactElement[] | undefined>(undefined)
  const [isLineSetted, setIsLineSetted] = useState(false)
  const [showingLines] = useState(true)
  const [isMinimapContent, setIsMinimapContent] = useState(false)

  const textRef = useRef<HTMLDivElement>(null)
  // const observerRef = useIntersectionObserver<HTMLDivElement>(
  //   (entry) => {
  //     const { intersectionRatio } = entry
  //     const canShow = intersectionRatio > 0.1

  //     if (isMinimapContent || !canShow) {
  //       return
  //     }
  //     setShowingLines(true)
  //   },
  //   {
  //     rootMargin: `${document.body.clientHeight}px 0px 0px 0px`,
  //     threshold: [0, 0.1],
  //   }
  // )

  const updateTextRef = (element: HTMLDivElement | null) => {
    textRef.current = element
    // observerRef(element)

    const isMinimap = !!element?.closest('[data-content-minimap]')
    setIsMinimapContent(isMinimap)
  }

  /*
    렌더링된 텍스트를 라인 단위로 쪼개는 이펙트
  */
  useEffect(() => {
    if (!textRef.current) {
      return undefined
    }
    if (isMinimapContent) {
      return undefined
    }

    const splitOption: Partial<SplitTypeOptions> = { types: 'lines' }
    const st = new SplitType(textRef.current, splitOption)

    const injectHiddenToLines = (lineElements: HTMLElement[]) =>
      lineElements.map((aLine) => (
        <div className="overflow-hidden" key={uuidv5(aLine.innerHTML, textKeyNameSpace)}>
          <motion.div
            dangerouslySetInnerHTML={{ __html: aLine.innerHTML }}
            variants={hoveringVariants}
          />
        </div>
      ))

    const onResize = () => {
      st.split(splitOption)
      setLines(injectHiddenToLines(st.lines ?? []))
      setIsLineSetted(true)
    }

    const beforeDebounce = () => {
      setIsLineSetted(false)
    }
    const debouncedResize = debounce(onResize, 300, beforeDebounce)

    window.addEventListener('resize', debouncedResize)
    onResize()

    return () => {
      st.revert()
      window.removeEventListener('resize', debouncedResize)
    }
  }, [isMinimapContent])

  if (isMinimapContent || config.printMode) {
    return (
      <div className={className} ref={updateTextRef}>
        {children}
      </div>
    )
  }

  return (
    <div className="relative w-fit" data-hovering-text-container>
      <div
        className={clsx(
          className,
          'pointer-events-none invisible',
          isLineSetted ? 'absolute' : 'static'
        )}
        data-hovering-text-dummy
        ref={(v) => {
          if (isLineSetted) {
            return
          }
          updateTextRef(v)
        }}
      >
        {children}
      </div>
      {isLineSetted && (
        <motion.div
          animate={showingLines ? 'animate' : 'initial'}
          className={className}
          initial="initial"
          onAnimationComplete={() => {
            onHoveringComplete?.({
              isMinimapContent,
              containerElement: textRef.current,
            })
          }}
          onAnimationStart={() => {
            onHoveringStart?.({
              isMinimapContent,
              containerElement: textRef.current,
            })
          }}
          ref={updateTextRef}
          style={{ fontKerning: 'none' }}
        >
          {lines}
        </motion.div>
      )}
    </div>
  )
}
