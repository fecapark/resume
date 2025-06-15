import { useState } from 'react'

import { ContentMinimapTarget } from '@/components/ContentMinimap/ContentMinimapTarget'
import { ContentMinimapView } from '@/components/ContentMinimap/ContentMinimapView'
import { ContentMinimapContext } from '@/components/ContentMinimap/context'

export const ContentMinimap = ({ children }: React.PropsWithChildren<unknown>) => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null)
  const [renderTarget, setRenderTarget] = useState<React.ReactNode>(undefined)

  return (
    <ContentMinimapContext.Provider
      value={{ targetElement, renderTarget, setTargetElement, setRenderTarget }}
    >
      {children}
    </ContentMinimapContext.Provider>
  )
}

ContentMinimap.View = ContentMinimapView
ContentMinimap.Target = ContentMinimapTarget
