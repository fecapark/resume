import { useContext, useEffect, useState } from 'react'

import { MediaLoaderContext } from '@/components/Providers/MediaLoader/context'
import { mediaList, VideoSrcList } from '@/components/Providers/MediaLoader/type'

export const MediaLoader = ({ children }: React.PropsWithChildren<unknown>) => {
  const [progressList, setProgressList] = useState<number[]>(Array(mediaList.videos.length).fill(0))
  const [loadedMedias, setLoadedMedias] = useState<{
    videos: Record<VideoSrcList, string | undefined>
  }>({
    videos: Object.fromEntries(mediaList.videos.map((v) => [v, undefined])) as Record<
      VideoSrcList,
      string | undefined
    >,
  })
  const [loaded, setLoaded] = useState(false)
  const [showChildren, setShowChildren] = useState(false)

  const loadVideo = (src: VideoSrcList, index: number) => {
    const xmlReq = new XMLHttpRequest()
    xmlReq.open('GET', src, true)
    xmlReq.responseType = 'arraybuffer'

    xmlReq.onloadstart = () => {
      setProgressList((prev) => {
        const newProgress = [...prev]
        newProgress[index] = 0
        return newProgress
      })
    }

    xmlReq.onprogress = (e) => {
      setProgressList((prev) => {
        const newProgress = [...prev]
        newProgress[index] = e.total !== 0 ? e.loaded / e.total : 0
        return newProgress
      })
    }

    xmlReq.onload = () => {
      const blob = new Blob([xmlReq.response], { type: 'video/webm' })

      setLoadedMedias((prev) => ({
        ...prev,
        videos: {
          ...prev.videos,
          [src]: window.URL.createObjectURL(blob),
        },
      }))

      setProgressList((prev) => {
        const newProgress = [...prev]
        newProgress[index] = 1
        return newProgress
      })
    }

    xmlReq.send()
  }

  useEffect(() => {
    mediaList.videos.forEach((video, index) => {
      loadVideo(video, index)
    })
  }, [])

  useEffect(() => {
    if (Object.values(loadedMedias.videos).every((v) => v !== undefined)) {
      setLoaded(true)
    }
  }, [loadedMedias.videos])

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setShowChildren(true)
      }, 500)
    }
  }, [loaded])

  return (
    <>
      <div className="fixed top-0 left-0 -z-1 flex size-full items-center justify-center">
        <div className="overflow-hidden text-lg font-medium">
          <div
            className=""
            style={
              loaded
                ? {
                    transform: 'translate3d(0, -100%, 0)',
                    transition: 'transform cubic-bezier(0.7, 0, 0.84, 0) 1.2s',
                  }
                : {}
            }
          >
            {Math.ceil(
              (progressList.reduce((cur, acc) => {
                return cur + acc
              }, 0) /
                mediaList.videos.length) *
                100
            )}
            %
          </div>
        </div>
      </div>

      {showChildren && (
        <MediaLoaderContext.Provider value={{ videos: loadedMedias.videos }}>
          {children}
        </MediaLoaderContext.Provider>
      )}
    </>
  )
}

export const useLoadedVideoSources = () => {
  const { videos } = useContext(MediaLoaderContext)

  if (!videos) {
    throw new Error('useLoadedVideoSources는 MediaLoaderContext 하위에서만 사용할 수 있어요.')
  }

  return videos
}
