import { HoverThumbnailInfoProvider } from '@/components/Providers/HoverThumbnailInfoProvider'
import { LocomotiveScrollInstanceProvider } from '@/components/Providers/LocomotiveScrollInstanceProvider'

export const Providers = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <LocomotiveScrollInstanceProvider>
      <HoverThumbnailInfoProvider>{children}</HoverThumbnailInfoProvider>
    </LocomotiveScrollInstanceProvider>
  )
}
