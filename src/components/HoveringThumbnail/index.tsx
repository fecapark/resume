import clsx from 'clsx'
import { HTMLMotionProps, motion, useMotionValue, useSpring, Variants } from 'motion/react'
import { RefObject, useEffect, useRef, useState } from 'react'

import * as Portal from '@radix-ui/react-portal'

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
  const [isHovering, setIsHovering] = useState(false)

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

  return (
    <div className={clsx('relative cursor-none', className)} ref={realRef}>
      <motion.div
        className="size-full"
        onHoverEnd={(e, i) => {
          setIsHovering(false)
          onHoverEnd?.(e, i)
        }}
        onHoverStart={(e, i) => {
          // const bottom = e.clientY + mediaHeight
          // const isReversed = bottom > stageHeight

          x.jump(0)
          y.jump(0)
          onHoverStart?.(e, i)
          setIsHovering(true)
        }}
        onPointerMove={(e) => {
          // const bottom = e.clientY + mediaHeight
          // const isReversed = bottom > stageHeight

          x.set(e.nativeEvent.offsetX * 0.3)
          y.set(e.nativeEvent.offsetY * 0.3)
          onPointerMove?.(e)
        }}
        {...props}
      >
        {children}
        {src && (
          <Portal.Root>
            <motion.div
              animate={isHovering ? 'animate' : 'initial'}
              className="pointer-events-none fixed top-1/2 left-1/2 z-50 -translate-1/2 select-none"
              initial="initial"
              style={{ x, y }}
              variants={exitVariants}
            >
              {thumbnailType === 'image' ? (
                <div className="shadow-dialog max-w-[35vw] overflow-hidden rounded-xl">
                  <img className="object-contain" src={src} />
                </div>
              ) : (
                <div className="shadow-dialog overflow-hidden rounded-xl">
                  <video className="object-cover" loop muted ref={videoRef} src={src} />
                </div>
              )}
            </motion.div>
          </Portal.Root>
        )}
      </motion.div>
    </div>
  )
}
