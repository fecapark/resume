import { createContext, useContext, useRef, useState } from 'react'
import {
  LocomotiveScrollProviderProps,
  LocomotiveScrollProvider as PrimitiveLocomotiveScrollProvider,
  Scroll as ScrollType,
} from 'react-locomotive-scroll'

const locomotiveOptions = {
  smooth: true,
  lerp: 0.1,
  multiplier: 1.2,
}

const LocomotiveScrollContext = createContext<ScrollType | undefined>(undefined)

export const LocomotiveScrollProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const locomotiveContainerRef = useRef<HTMLDivElement>(null)
  const [locomotiveScrollInstance, setLocomotiveScrollInstance] = useState<ScrollType | undefined>(
    undefined
  )

  const onUpdate: LocomotiveScrollProviderProps['onUpdate'] = (scroll: ScrollType) => {
    setLocomotiveScrollInstance(scroll)
  }

  return (
    <PrimitiveLocomotiveScrollProvider
      containerRef={locomotiveContainerRef}
      onUpdate={onUpdate}
      options={locomotiveOptions}
      watch={[]}
    >
      <LocomotiveScrollContext.Provider value={locomotiveScrollInstance}>
        <div className="overflow-y-scroll" data-scroll-container ref={locomotiveContainerRef}>
          <div data-scroll-section>{children}</div>
        </div>
      </LocomotiveScrollContext.Provider>
    </PrimitiveLocomotiveScrollProvider>
  )
}

export const useLocomotiveScrollInstance = () => {
  const scroll = useContext(LocomotiveScrollContext)

  if (!scroll) {
    throw new Error(
      'useLocomotiveScrollInstance는 LocomotiveScrollProvider 하위에서만 사용할 수 있어요.'
    )
  }

  return { scroll }
}
