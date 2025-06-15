import { useEffect, useState } from 'react'
import { LocomotiveScrollEvent } from 'react-locomotive-scroll'

import { useLocomotiveScrollInstance } from '@/components/Providers/LocomotiveProvider'
import { useStageSize } from '@/hooks/useStageSize'

interface LocomotiveScrollValueProps {
  ref: React.RefObject<HTMLElement>
}

export const useLocomotiveScrollValue = ({ ref }: LocomotiveScrollValueProps) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollYRatio, setScrollYRatio] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const { scroll } = useLocomotiveScrollInstance()
  const { isStageSetted, stageHeight } = useStageSize()

  useEffect(() => {
    if (!scroll) {
      return () => {}
    }

    const onScroll = (e: LocomotiveScrollEvent) => {
      const scrollYFromTop = e.scroll.y

      setScrollY(scrollYFromTop)
      setScrollYRatio(scrollYFromTop / scrollHeight)
    }

    scroll.on('scroll', onScroll)

    return () => {
      scroll.off('scroll', onScroll)
    }
  }, [scroll, scrollHeight])

  useEffect(() => {
    const onResize = () => {
      if (!ref.current) {
        return
      }
      if (!isStageSetted) {
        return
      }

      const { height } = ref.current.getBoundingClientRect()
      setScrollHeight(Math.max(height - stageHeight, 0))
    }

    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [ref, stageHeight, isStageSetted])

  return { scrollY, scrollYRatio, scroll }
}
