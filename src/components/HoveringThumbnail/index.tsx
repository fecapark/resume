import clsx from 'clsx'
import { HTMLMotionProps, motion, useMotionValue } from 'motion/react'
import { RefObject, useRef, useState } from 'react'

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
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const realRef = ref || motionRef

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
        x.set(e.clientX - left)
        y.set(e.clientY - top)
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
        <motion.div className="absolute top-2 left-2 z-50" style={{ x, y }}>
          {thumbnailType === 'image' ? (
            <div className="border-grey300 max-w-[35vw] overflow-hidden rounded-xl border-[1px]">
              <img className="object-contain" src={src} />
            </div>
          ) : (
            <div className="border-grey600 h-fit w-[35vw] overflow-hidden rounded-xl border-[1px]">
              <video autoPlay className="object-contain" loop muted src={src} />
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
