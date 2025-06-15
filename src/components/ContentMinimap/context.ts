import { createContext, Dispatch, SetStateAction } from 'react'

interface ContentMinimapContextType {
  renderTarget: React.ReactNode
  setRenderTarget: Dispatch<SetStateAction<React.ReactNode>>
  setTargetElement: Dispatch<SetStateAction<HTMLElement | null>>
  targetElement: HTMLElement | null
}

export const ContentMinimapContext = createContext<ContentMinimapContextType>({
  targetElement: null,
  renderTarget: undefined,
  setTargetElement: () => {},
  setRenderTarget: () => {},
})
