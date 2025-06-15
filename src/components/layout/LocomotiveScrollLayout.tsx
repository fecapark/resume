import { useRef } from 'react'
import {
  LocomotiveScrollProviderProps,
  LocomotiveScrollProvider as PrimitiveLocomotiveScrollProvider,
  Scroll as ScrollType,
} from 'react-locomotive-scroll'

import { useLocomotiveScrollInstance } from '@/components/Providers/LocomotiveScrollInstanceProvider'

const locomotiveOptions = {
  smooth: true,
  lerp: 0.08,
  multiplier: 1.2,
}

export const LocomotiveScrollLayout = ({ children }: React.PropsWithChildren<unknown>) => {
  const locomotiveContainerRef = useRef<HTMLDivElement>(null)
  const { setScroll } = useLocomotiveScrollInstance()

  const onUpdate: LocomotiveScrollProviderProps['onUpdate'] = (scroll: ScrollType) => {
    setScroll(scroll)
  }

  return (
    <PrimitiveLocomotiveScrollProvider
      containerRef={locomotiveContainerRef}
      onUpdate={onUpdate}
      options={locomotiveOptions}
      watch={[]}
    >
      <div
        className="size-full overflow-y-scroll"
        data-scroll-container
        ref={locomotiveContainerRef}
      >
        <div className="size-full" data-scroll-section>
          {children}
        </div>
      </div>
    </PrimitiveLocomotiveScrollProvider>
  )
}
