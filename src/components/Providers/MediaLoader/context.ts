import { createContext } from 'react'

import { VideoSrcList } from '@/components/Providers/MediaLoader/type'

interface MediaLoaderContextProps {
  videos: Record<VideoSrcList, string | undefined>
}

export const MediaLoaderContext = createContext<MediaLoaderContextProps>({
  videos: Object.fromEntries(
    Array.from({ length: 10 }, (_, i) => [`/thumbnails/video-${i}/preview.webm`, undefined])
  ) as Record<VideoSrcList, string | undefined>,
})
