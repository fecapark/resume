import { LocomotiveScrollInstanceProvider } from '@/components/Providers/LocomotiveScrollInstanceProvider'

export const Providers = ({ children }: React.PropsWithChildren<unknown>) => {
  return <LocomotiveScrollInstanceProvider>{children}</LocomotiveScrollInstanceProvider>
}
