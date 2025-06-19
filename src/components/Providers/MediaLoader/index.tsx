import clsx from 'clsx'
import { useContext, useState } from 'react'

import { MediaLoaderContext } from '@/components/Providers/MediaLoader/context'
import { useLoadMediaWithProgress } from '@/components/Providers/MediaLoader/hook'
import { GetSourceMapByType, mediaList, MediaType } from '@/components/Providers/MediaLoader/type'
import { useEffectOnce } from '@/hooks/useEffectOnce'

export const MediaLoader = ({ children }: React.PropsWithChildren<unknown>) => {
  const loadMedia = useLoadMediaWithProgress()

  const [progressList, setProgressList] = useState<{
    images: number[]
    videos: number[]
  }>({
    images: Array(mediaList.images.length).fill(0),
    videos: Array(mediaList.videos.length).fill(0),
  })
  const [loadedMedias, setLoadedMedias] = useState<
    | undefined
    | {
        images: GetSourceMapByType<'images'>
        videos: GetSourceMapByType<'videos'>
      }
  >(undefined)

  const [showChildren, setShowChildren] = useState(false)

  const getTotalLoadPercentage = () => {
    const videoProgress = progressList.videos.reduce((cur, acc) => cur + acc, 0)
    const imageProgress = progressList.images.reduce((cur, acc) => cur + acc, 0)
    const totalProgress = imageProgress + videoProgress
    const totalAmount = mediaList.images.length + mediaList.videos.length
    return Math.ceil((totalProgress / totalAmount) * 100)
  }

  const setProgressOf = (index: number, type: MediaType) => (progress: number) =>
    setProgressList((prev) => {
      const newProgress = [...prev[type]]
      newProgress[index] = progress
      return {
        ...prev,
        [type]: newProgress,
      }
    })

  const onAllMediaLoaded = ({
    allVideoSources,
    allImageSources,
  }: {
    allImageSources: string[]
    allVideoSources: string[]
  }) => {
    const getSourceMap = <TType extends MediaType>(sources: string[], type: TType) =>
      Object.fromEntries(
        sources.map((src, index) => [mediaList[type][index], src])
      ) as GetSourceMapByType<TType>

    setLoadedMedias({
      images: getSourceMap(allImageSources, 'images'),
      videos: getSourceMap(allVideoSources, 'videos'),
    })

    setTimeout(() => setShowChildren(true), 550)
  }

  useEffectOnce(() => {
    ;(async () => {
      const allSources = await Promise.all(
        [...mediaList.images, ...mediaList.videos].map(async (src, index) => {
          const onProgressChange = setProgressOf(index, 'videos')
          return loadMedia({ src, onProgressChange })
        })
      )
      onAllMediaLoaded({
        allImageSources: allSources.slice(0, mediaList.images.length),
        allVideoSources: allSources.slice(mediaList.images.length),
      })
    })()
  })

  return (
    <>
      <div className="fixed top-0 left-0 -z-1 flex size-full items-center justify-center">
        <div className="overflow-hidden text-lg font-medium">
          <div
            className={clsx(
              'will-change-transform',
              loadedMedias &&
                '-translate-y-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.7,0,0.84,0)]'
            )}
          >
            {getTotalLoadPercentage()}%
          </div>
        </div>
      </div>

      {showChildren && loadedMedias && (
        <MediaLoaderContext.Provider
          value={{ images: loadedMedias.images, videos: loadedMedias.videos }}
        >
          {children}
        </MediaLoaderContext.Provider>
      )}
    </>
  )
}

export const useLoadedMediaSources = () => {
  const sources = useContext(MediaLoaderContext)

  if (!sources) {
    throw new Error('useLoadedMediaSources MediaLoaderContext 하위에서만 사용할 수 있어요.')
  }

  return sources
}
