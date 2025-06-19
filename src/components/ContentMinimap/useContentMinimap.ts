import { useContext, useEffect, useState } from 'react'
import { LocomotiveScrollEvent } from 'react-locomotive-scroll'

import { ContentMinimapContext } from '@/components/ContentMinimap/context'
import { useLocomotiveScrollInstance } from '@/components/Providers/LocomotiveScrollInstanceProvider'
import { useStageSize } from '@/hooks/useStageSize'

export const useContentMinimap = () => {
  const { targetElement } = useContext(ContentMinimapContext)

  const { stageWidth, stageHeight } = useStageSize()
  const { scroll, locomotiveScrollSectionRef } = useLocomotiveScrollInstance()

  const [scrollHeight, setScrollHeight] = useState(0)
  const [scrollYRatio, setScrollYRatio] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const [contentPaddingTop, setContentPaddingTop] = useState(0)
  const [contentPaddingRight, setContentPaddingRight] = useState(0)

  const minimapWidth = stageWidth * 0.145
  const minimapScale = isNaN(minimapWidth / stageWidth) ? 0 : minimapWidth / stageWidth
  const minimapScreenHeight = stageHeight * minimapScale
  const minimapScreenY = (stageHeight - contentPaddingTop - minimapScreenHeight) * scrollYRatio
  const minimapPaddingLeft = (contentPaddingRight * minimapScale) / 2

  const getMinimapY = () => {
    const minimapHeight = contentHeight * minimapScale
    const viewableMinimapHeight = stageHeight - contentPaddingTop
    const leftMinimapHeight = minimapHeight - viewableMinimapHeight

    return leftMinimapHeight * scrollYRatio
  }

  const onMinimapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scroll) {
      return
    }
    if (!targetElement) {
      return
    }

    const contentClicked = (e.target as HTMLElement).closest('[data-content-minimap]')

    if (contentClicked) {
      const minimapOffsetY = e.clientY - contentPaddingTop + getMinimapY()
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
    const onResize = () => {
      if (!targetElement) {
        return
      }

      const { paddingTop, paddingRight } = window.getComputedStyle(targetElement)
      const { width, height } = targetElement.getBoundingClientRect()
      const scrollHeight = Math.max(height - stageHeight, 0)

      setScrollHeight(scrollHeight)
      setContentWidth(width)
      setContentHeight(height)
      setContentPaddingTop(parseFloat(paddingTop.replace('px', '')))
      setContentPaddingRight(parseFloat(paddingRight.replace('px', '')))
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [targetElement])

  /* 
    scrollTo 메서드와 유저 스크롤간 불일치 문제 해결 이펙트
  */
  useEffect(() => {
    if (!scroll) {
      return () => {}
    }

    const onScroll = (e: LocomotiveScrollEvent) => {
      const scrollSection = locomotiveScrollSectionRef.current
      if (!scrollSection) {
        return
      }

      const { transform } = window.getComputedStyle(scrollSection)
      const transformY = parseFloat(transform.split(',')[5].replace(')', ''))
      const newTransform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${e.scroll.y}, 0, 1)`

      const scrollYInt = Math.abs(Math.floor(e.scroll.y))
      const transformYInt = Math.abs(Math.floor(transformY))

      if (scrollYInt !== transformYInt) {
        scrollSection.style.setProperty('transform', newTransform)
      }
      setScrollYRatio(e.scroll.y / scrollHeight)
    }

    scroll.on('scroll', onScroll)

    return () => {
      scroll.off('scroll', onScroll)
    }
  }, [scroll, scrollHeight])

  return {
    contentWidth,
    contentPaddingTop,
    minimapWidth,
    minimapScreenHeight,
    minimapPaddingLeft,
    minimapScale,
    minimapY: getMinimapY(),
    minimapScreenY,
    onMinimapClick,
  }
}
