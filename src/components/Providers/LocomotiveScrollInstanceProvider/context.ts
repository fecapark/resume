import { createContext, Dispatch, SetStateAction } from 'react'
import { Scroll as ScrollType } from 'react-locomotive-scroll'

interface LocomotiveScrollInstanceProviderProps {
  scroll: ScrollType | undefined
  setScroll: Dispatch<SetStateAction<ScrollType | undefined>>
}

export const LocomotiveScrollInstanceContext = createContext<LocomotiveScrollInstanceProviderProps>(
  {
    scroll: undefined,
    setScroll: () => {},
  }
)
