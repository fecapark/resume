import { useContext, useEffect, useRef, useState } from 'react'
import { LocomotiveScrollEvent } from 'react-locomotive-scroll'

import { ContentMinimapContext } from '@/components/ContentMinimap/context'
import { useLocomotiveScrollInstance } from '@/components/Providers/LocomotiveScrollInstanceProvider'
import { useLocomotiveScrollValue } from '@/hooks/useLocomotiveScrollValue'
import { useStageSize } from '@/hooks/useStageSize'

export const useContentMinimap = () => {
  const { targetElement } = useContext(ContentMinimapContext)

  const { stageWidth, stageHeight } = useStageSize()
  const { scrollHeight } = useLocomotiveScrollValue({ element: targetElement })
  const { scroll } = useLocomotiveScrollInstance()

  const [scrollYRatio, setScrollYRatio] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const [contentPaddingTop, setContentPaddingTop] = useState(0)
  const [contentPaddingRight, setContentPaddingRight] = useState(0)
  const [minimapY, setminimapY] = useState(0)
  const scrollContainerRef = useRef<Element | null>(null)
  // const minimapWidth = stageWidth * 0.138528 <- is origin
  const minimapWidth = stageWidth * 0.145
  const minimapScale = isNaN(minimapWidth / stageWidth) ? 0 : minimapWidth / stageWidth
  const minimapScreenHeight = stageHeight * minimapScale
  const minimapScreenY = (stageHeight - contentPaddingTop - minimapScreenHeight) * scrollYRatio
  const minimapPaddingLeft = (contentPaddingRight * minimapScale) / 2

  const onMinimapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scroll) {
      return
    }
    if (!targetElement) {
      return
    }

    const contentClicked = (e.target as HTMLElement).closest('[data-content-minimap]')

    if (contentClicked) {
      const minimapOffsetY = e.clientY - contentPaddingTop + minimapY
      const clickedOffsetY = Math.max(minimapOffsetY / minimapScale, 0)

      scroll.scrollTo(0, {
        offset: clickedOffsetY - stageHeight / 2,
        duration: 4,
      })
    } else {
      scroll.scrollTo(0, {
        offset: 0,
        duration: 4,
      })
    }
  }

  useEffect(() => {
    if (!scroll) {
      return
    }
    scrollContainerRef.current = document.querySelector('[data-scroll-section-inview]')
  }, [scroll])

  /* 
    scrollTo 메서드와 유저 스크롤간 불일치 문제 해결 이펙트
  */
  useEffect(() => {
    if (!scroll) {
      return () => {}
    }

    const onScroll = (e: LocomotiveScrollEvent) => {
      if (!scrollContainerRef.current) {
        return
      }

      const { transform } = window.getComputedStyle(scrollContainerRef.current)
      const transformY = parseFloat(transform.split(',')[5].replace(')', ''))
      const newTransform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${e.scroll.y}, 0, 1)`

      const scrollYInt = Math.abs(Math.floor(e.scroll.y))
      const transformYInt = Math.abs(Math.floor(transformY))

      if (scrollYInt !== transformYInt) {
        ;(scrollContainerRef.current as HTMLElement).style.transform = newTransform
      }
      setScrollYRatio(e.scroll.y / scrollHeight)
    }

    scroll.on('scroll', onScroll)

    return () => {
      scroll.off('scroll', onScroll)
    }
  }, [scroll, scrollHeight])

  useEffect(() => {
    if (!targetElement) {
      return
    }

    const { paddingTop, paddingRight } = window.getComputedStyle(targetElement)
    const { width, height } = targetElement.getBoundingClientRect()
    setContentWidth(width)
    setContentHeight(height)
    setContentPaddingTop(parseFloat(paddingTop.replace('px', '')))
    setContentPaddingRight(parseFloat(paddingRight.replace('px', '')))

    // stageSize에 따라 targetElement가 변경되므로 stageSize 값들을 의존성 배열에 추가해요.
  }, [targetElement, stageWidth, stageHeight])

  useEffect(() => {
    const minimapHeight = contentHeight * minimapScale
    const viewableMinimapHeight = stageHeight - contentPaddingTop
    const leftMinimapHeight = minimapHeight - viewableMinimapHeight

    setminimapY(leftMinimapHeight * scrollYRatio)
  }, [scrollYRatio, stageHeight, contentHeight, contentPaddingTop, minimapScale])

  return {
    contentWidth,
    contentPaddingTop,
    minimapWidth,
    minimapScreenHeight,
    minimapPaddingLeft,
    minimapScale,
    minimapY,
    minimapScreenY,
    onMinimapClick,
  }
}
