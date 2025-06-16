import { useContext, useEffect } from 'react'

import { ContentMinimapContext } from '@/components/ContentMinimap/context'

export const ContentMinimapTarget = ({ children }: React.PropsWithChildren<unknown>) => {
  const { setTargetElement, setRenderTarget } = useContext(ContentMinimapContext)

  useEffect(() => {
    setRenderTarget(children)
  }, [children, setRenderTarget])

  return (
    <div
      ref={(v) => {
        if (!v) {
          return
        }
        if (v.childElementCount !== 1) {
          throw new Error('ContentMinimap의 children은 하나의 노드로 이루어져야해요.')
        }
        setTargetElement(v?.firstChild as HTMLElement | null)
      }}
    >
      {children}
    </div>
  )
}
