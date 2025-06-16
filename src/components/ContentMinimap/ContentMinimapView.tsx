import { motion, Variants } from 'motion/react'
import { useContext } from 'react'

import { ContentMinimapContext } from '@/components/ContentMinimap/context'
import { useContentMinimap } from '@/components/ContentMinimap/useContentMinimap'
import { motionEasing } from '@/utils/motion'

const minimapScreenFadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: motionEasing.materialBase,
      duration: 1,
      delay: 0.7,
    },
  },
}

const minimapContentFadeVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: motionEasing.expoOut,
      delay: 0.5,
      duration: 1.3,
    },
  },
}

export const ContentMinimapView = () => {
  const { renderTarget } = useContext(ContentMinimapContext)

  const {
    contentWidth,
    contentPaddingTop,
    minimapWidth,
    minimapScreenHeight,
    minimapPaddingLeft,
    minimapScale,
    minimapY,
    minimapScreenY,
    onMinimapClick,
  } = useContentMinimap()

  return (
    <div
      aria-hidden
      className="absolute z-[10000] ml-[2.782vw] h-full w-fit"
      onClick={onMinimapClick}
      style={{
        width: minimapWidth,
        paddingTop: contentPaddingTop,
      }}
    >
      <motion.div
        animate="animate"
        className="pointer-events-none absolute z-10 w-full rounded-sm border-[1px] border-[#00000033] mix-blend-difference"
        data-screen-minimap
        initial="initial"
        style={{
          willChange: 'transform',
          height: minimapScreenHeight,
          transform: `translateY(${minimapScreenY}px)`,
        }}
        variants={minimapScreenFadeVariants}
      />

      <div
        className="absolute left-1/2 select-none"
        data-content-minimap
        style={{
          willChange: 'transform',
          transformOrigin: 'top center',
          width: contentWidth,
          transform: `translateX(calc(-50% + ${minimapPaddingLeft}px)) translateY(${-minimapY}px) scale(${minimapScale})`,
        }}
      >
        <motion.div
          animate="animate"
          className="pointer-events-none size-fit opacity-85"
          initial="initial"
          variants={minimapContentFadeVariants}
        >
          {renderTarget}
        </motion.div>
      </div>
    </div>
  )
}
