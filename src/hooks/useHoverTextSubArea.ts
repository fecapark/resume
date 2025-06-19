import { useEffect, useRef, useState } from 'react'

import { OnHoveringListener } from '@/components/HoveringText'
import { useLocomotiveScrollInstance } from '@/components/Providers/LocomotiveScrollInstanceProvider'

export const useHoverTextSubArea = <T extends HTMLElement>() => {
  const subAreaDatasetKey = 'data-hover-target'

  const { locomotiveScrollSectionRef } = useLocomotiveScrollInstance()
  const [hoverTarget, setHoverTarget] = useState<HTMLElement | null>(null)
  const hoverAreaRef = useRef<T>(null)

  const onHoveringComplete: OnHoveringListener = ({ containerElement, isMinimapContent }) => {
    if (isMinimapContent || !containerElement) {
      setHoverTarget(null)
      return
    }
    const target = containerElement.querySelector(`[${subAreaDatasetKey}]`) as null | T
    setHoverTarget(target)
  }

  useEffect(() => {
    const hoverArea = hoverAreaRef.current
    if (!hoverTarget || !hoverArea) {
      return
    }

    const onResize = () => {
      const scrollContainer = locomotiveScrollSectionRef.current
      if (!scrollContainer) {
        return
      }

      const scrollMatrix = scrollContainer.style.transform
      const y = Number(scrollMatrix?.split(',').at(-3)?.trim() ?? '0') * -1

      const { left, top, width, height } = hoverTarget.getBoundingClientRect()

      hoverArea.style.left = `${left}px`
      hoverArea.style.top = `${top + y}px`
      hoverArea.style.width = `${width}px`
      hoverArea.style.height = `${height}px`
    }

    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [hoverTarget])

  return {
    hoverTarget,
    hoverAreaRef,
    onHoveringComplete,
    hoverTargetKey: {
      [subAreaDatasetKey]: true,
    },
  }
}
