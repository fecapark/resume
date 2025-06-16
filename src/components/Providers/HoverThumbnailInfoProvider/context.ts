import { createContext, Dispatch, SetStateAction } from 'react'

interface HoverThumbnailInfoContextType {
  onHover: () => void
  setInfoOnce: Dispatch<SetStateAction<boolean>>
}

export const HoverThumbnailInfoContext = createContext<HoverThumbnailInfoContextType>({
  onHover: () => {},
  setInfoOnce: () => {},
})
