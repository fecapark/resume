export const mediaList = {
  images: ['/thumbnails/me.jpeg'] as const,
  videos: [
    `/thumbnails/inside-slushy/preview.webm`,
    `/thumbnails/mapleland-auction/preview.webm`,
    `/thumbnails/material-form/preview.webm`,
    `/thumbnails/metaball-interaction/preview.webm`,
    `/thumbnails/number-rolling/preview.webm`,
    `/thumbnails/time-timer/preview.webm`,
    `/thumbnails/yis/preview.webm`,
  ] as const,
} as const

export type MediaType = 'images' | 'videos'
export type VideoSrcList = (typeof mediaList.videos)[number]
export type ImageSrcList = (typeof mediaList.images)[number]
export type GetSrcListByType<T extends MediaType> = T extends 'images' ? ImageSrcList : VideoSrcList
export type GetSourceMapByType<TType extends MediaType> = Record<GetSrcListByType<TType>, string>
