import { useEffect, useState } from 'react'

interface StageSizeType {
  stageHeight: number
  stageWidth: number
}

export const useStageSize = () => {
  const [{ stageWidth, stageHeight }, setStageSize] = useState<StageSizeType>({
    stageWidth: 0,
    stageHeight: 0,
  })
  const stageAspectRatio = stageWidth / stageHeight

  useEffect(() => {
    const onResize = () => {
      setStageSize({
        stageWidth: window.innerWidth,
        stageHeight: window.innerHeight,
      })
    }

    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [setStageSize])

  return { stageWidth, stageHeight, stageAspectRatio }
}
