import { useContext, useEffect } from 'react'

import { ContentMinimapContext } from '@/components/ContentMinimap/context'

export const ContentMinimapTarget = ({ children }: React.PropsWithChildren<unknown>) => {
  const { setTargetElement, setRenderTarget } = useContext(ContentMinimapContext)

  useEffect(() => {
    setRenderTarget(children)
  }, [children, setRenderTarget])

  return <div ref={setTargetElement}>{children}</div>
}
