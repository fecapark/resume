import { useContext, useState } from 'react'
import { Scroll as ScrollType } from 'react-locomotive-scroll'

import { LocomotiveScrollInstanceContext } from '@/components/Providers/LocomotiveScrollInstanceProvider/context'

export const LocomotiveScrollInstanceProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [locomotiveScrollInstance, setLocomotiveScrollInstance] = useState<ScrollType | undefined>(
    undefined
  )

  return (
    <LocomotiveScrollInstanceContext.Provider
      value={{
        scroll: locomotiveScrollInstance,
        setScroll: setLocomotiveScrollInstance,
      }}
    >
      {children}
    </LocomotiveScrollInstanceContext.Provider>
  )
}

export const useLocomotiveScrollInstance = () => {
  return useContext(LocomotiveScrollInstanceContext)
}
