import { createContext } from 'react'

import { GetSourceMapByType } from '@/components/Providers/MediaLoader/type'

interface MediaLoaderContextProps {
  images: GetSourceMapByType<'images'>
  videos: GetSourceMapByType<'videos'>
}

export const MediaLoaderContext = createContext<MediaLoaderContextProps>({
  images: {} as GetSourceMapByType<'images'>,
  videos: {} as GetSourceMapByType<'videos'>,
})
