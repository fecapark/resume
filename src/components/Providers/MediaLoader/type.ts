export const previewNames = [
  'inside-slushy',
  'mapleland-auction',
  'material-form',
  'metaball-interaction',
  'number-rolling',
  'time-timer',
  'yis',
] as const
export const mediaList = {
  images: ['/thumbnails/me.jpeg'] as const,
  videos: previewNames.map((v) => `/thumbnails/${v}/preview.webm`) as VideoSrcList[],
} as const
export type VideoSrcList = `/thumbnails/${(typeof previewNames)[number]}/preview.webm`
