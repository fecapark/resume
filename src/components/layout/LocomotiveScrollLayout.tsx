import {
  LocomotiveScrollProviderProps,
  LocomotiveScrollProvider as PrimitiveLocomotiveScrollProvider,
  Scroll as ScrollType,
} from 'react-locomotive-scroll'

import { useLocomotiveScrollInstance } from '@/components/Providers/LocomotiveScrollInstanceProvider'

// https://github.com/locomotivemtl/locomotive-scroll/issues/438
const locomotiveOptions = {
  smooth: true,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
  lerp: 0.08,
  multiplier: 1.2,
}

export const LocomotiveScrollLayout = ({ children }: React.PropsWithChildren<unknown>) => {
  const { setScroll, locomotiveScrollContainerRef, locomotiveScrollSectionRef } =
    useLocomotiveScrollInstance()

  const onUpdate: LocomotiveScrollProviderProps['onUpdate'] = (scroll: ScrollType) => {
    setScroll(scroll)
  }

  return (
    <PrimitiveLocomotiveScrollProvider
      containerRef={locomotiveScrollContainerRef}
      onUpdate={onUpdate}
      options={locomotiveOptions}
      watch={[]}
    >
      <div
        className="size-full overflow-y-scroll"
        data-scroll-container
        ref={locomotiveScrollContainerRef}
      >
        <div className="size-full" data-scroll-section ref={locomotiveScrollSectionRef}>
          {children}
        </div>
      </div>
    </PrimitiveLocomotiveScrollProvider>
  )
}
