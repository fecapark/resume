import { useEffect, useState } from 'react'

interface StageSizeType {
  isStageSetted: boolean
  stageHeight: number
  stageWidth: number
}

export const useStageSize = () => {
  const [{ stageWidth, stageHeight, isStageSetted }, setStageSize] = useState<StageSizeType>({
    stageWidth: 0,
    stageHeight: 0,
    isStageSetted: false,
  })
  const stageAspectRatio = stageWidth / stageHeight

  useEffect(() => {
    const onResize = () => {
      setStageSize({
        stageWidth: window.innerWidth,
        stageHeight: window.innerHeight,
        isStageSetted: true,
      })
    }

    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [setStageSize])

  return { stageWidth, stageHeight, stageAspectRatio, isStageSetted }
}
