import { createContext, Dispatch, RefObject, SetStateAction } from 'react'
import { Scroll as ScrollType } from 'react-locomotive-scroll'

interface LocomotiveScrollInstanceProviderProps {
  locomotiveScrollContainerRef: RefObject<HTMLDivElement | null>
  locomotiveScrollSectionRef: RefObject<HTMLDivElement | null>
  scroll: ScrollType | undefined
  setScroll: Dispatch<SetStateAction<ScrollType | undefined>>
}

export const LocomotiveScrollInstanceContext = createContext<LocomotiveScrollInstanceProviderProps>(
  {
    scroll: undefined,
    locomotiveScrollContainerRef: { current: null },
    locomotiveScrollSectionRef: { current: null },
    setScroll: () => {},
  }
)
