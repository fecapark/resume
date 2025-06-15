import { useEffect, useState } from 'react'
import { LocomotiveScrollEvent } from 'react-locomotive-scroll'

import { useLocomotiveScrollInstance } from '@/components/Providers/LocomotiveScrollInstanceProvider'
import { useStageSize } from '@/hooks/useStageSize'

interface LocomotiveScrollValueProps {
  element: HTMLElement | null
}

export const useLocomotiveScrollValue = ({ element }: LocomotiveScrollValueProps) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollYRatio, setScrollYRatio] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const { scroll } = useLocomotiveScrollInstance()
  const { stageHeight } = useStageSize()

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
      if (!element) {
        return
      }

      const { height } = element.getBoundingClientRect()
      setScrollHeight(Math.max(height - stageHeight, 0))
    }

    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [element, stageHeight])

  return { scrollY, scrollYRatio, scroll }
}
