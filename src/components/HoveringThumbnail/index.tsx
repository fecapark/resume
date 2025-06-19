import clsx from 'clsx'
import { HTMLMotionProps, motion, useMotionValue, useSpring } from 'motion/react'
import { RefObject, useRef, useState } from 'react'

import { config } from '@/components/config'
import { useHoverThumbnailInfo } from '@/components/Providers/HoverThumbnailInfoProvider'

type HoveringThumbnailProps = HTMLMotionProps<'div'> & {
  ref?: RefObject<HTMLDivElement | null>
  src?: string
  thumbnailType: 'image' | 'video'
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
  const [isHovering, setIsHovering] = useState(false)
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })

  const realRef = ref || motionRef

  if (config.printMode) {
    return children
  }

  return (
    <motion.div
      className={clsx('absolute', className)}
      onHoverEnd={(e, i) => {
        setIsHovering(false)
        onHoverEnd?.(e, i)
      }}
      onHoverStart={(e, i) => {
        if (!realRef.current) {
          return
        }
        const { top, left } = realRef.current.getBoundingClientRect()
        x.jump(e.clientX - left)
        y.jump(e.clientY - top)
        setIsHovering(true)
        onHover()
        onHoverStart?.(e, i)
      }}
      onPointerMove={(e) => {
        if (!realRef.current) {
          return
        }
        const { top, left } = realRef.current.getBoundingClientRect()
        x.set(e.clientX - left)
        y.set(e.clientY - top)
        onPointerMove?.(e)
      }}
      ref={realRef}
      {...props}
    >
      {children}
      {isHovering && src && (
        <motion.div
          className="pointer-events-none absolute top-2 left-2 z-50 select-none"
          style={{ x, y }}
        >
          {thumbnailType === 'image' ? (
            <div className="shadow-dialog max-w-[35vw] overflow-hidden rounded-xl">
              <img className="object-contain" src={src} />
            </div>
          ) : (
            <div className="shadow-dialog h-fit w-[35vw] overflow-hidden rounded-xl">
              <video autoPlay className="object-contain" loop muted src={src} />
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
