import clsx from 'clsx'
import { HTMLMotionProps, motion, useMotionValue, useSpring, Variants } from 'motion/react'
import { RefObject, useEffect, useRef, useState } from 'react'

import { config } from '@/components/config'
import { useHoverThumbnailInfo } from '@/components/Providers/HoverThumbnailInfoProvider'
import { useStageSize } from '@/hooks/useStageSize'

type HoveringThumbnailProps = HTMLMotionProps<'div'> & {
  ref?: RefObject<HTMLDivElement | null>
  src?: string
  thumbnailType: 'image' | 'video'
}

const exitVariants: Variants = {
  initial: {
    opacity: 0,
    visibility: 'hidden',
    transition: { duration: 0.1 },
  },
  animate: {
    opacity: 1,
    visibility: 'visible',
    transition: { duration: 0.2 },
  },
}

export const HoveringThumbnail = ({
  className,
  onHoverEnd,
  onHoverStart,
  onPointerMove,
  ref,
  src,
  thumbnailType,
  children,
  ...props
}: React.PropsWithChildren<HoveringThumbnailProps>) => {
  const motionRef = useRef<HTMLDivElement>(null)
  const { onHover } = useHoverThumbnailInfo()
  const { stageHeight } = useStageSize()
  const [isHovering, setIsHovering] = useState(false)
  const [mediaHeight, setMediaHeight] = useState(0)

  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })

  const realRef = ref || motionRef
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) {
      return
    }
    if (thumbnailType !== 'video') {
      return
    }
    if (isHovering) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isHovering, thumbnailType])

  if (config.printMode) {
    return children
  }

  return (
    <div className={clsx('absolute', className)} ref={realRef}>
      <motion.div
        className="size-full"
        onHoverEnd={(e, i) => {
          setIsHovering(false)
          onHoverEnd?.(e, i)
        }}
        onHoverStart={(e, i) => {
          const bottom = e.clientY + mediaHeight
          const isReversed = bottom > stageHeight

          x.jump(e.offsetX)
          y.jump(isReversed ? e.offsetY - mediaHeight : e.offsetY)
          onHover()
          onHoverStart?.(e, i)
          setIsHovering(true)
        }}
        onPointerMove={(e) => {
          const bottom = e.clientY + mediaHeight
          const isReversed = bottom > stageHeight

          x.set(e.nativeEvent.offsetX)
          y.set(isReversed ? e.nativeEvent.offsetY - mediaHeight : e.nativeEvent.offsetY)
          onPointerMove?.(e)
        }}
        {...props}
      >
        {children}
        {src && (
          <motion.div
            animate={isHovering ? 'animate' : 'initial'}
            className="pointer-events-none absolute top-2 left-2 z-50 select-none"
            initial="initial"
            style={{ x, y }}
            variants={exitVariants}
          >
            {thumbnailType === 'image' ? (
              <div className="shadow-dialog max-w-[35vw] overflow-hidden rounded-xl">
                <img
                  className="object-contain"
                  onLoad={(e) => {
                    const { height } = e.currentTarget.getBoundingClientRect()
                    setMediaHeight(height)
                  }}
                  src={src}
                />
              </div>
            ) : (
              <div className="shadow-dialog h-fit w-[35vw] overflow-hidden rounded-xl">
                <video
                  className="object-contain"
                  loop
                  muted
                  onCanPlay={(e) => {
                    const { height } = e.currentTarget.getBoundingClientRect()
                    setMediaHeight(height)
                  }}
                  ref={videoRef}
                  src={src}
                />
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
