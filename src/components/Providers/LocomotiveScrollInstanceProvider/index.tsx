import { useContext, useRef, useState } from 'react'
import { Scroll as ScrollType } from 'react-locomotive-scroll'

import { LocomotiveScrollInstanceContext } from '@/components/Providers/LocomotiveScrollInstanceProvider/context'

export const LocomotiveScrollInstanceProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [locomotiveScrollInstance, setLocomotiveScrollInstance] = useState<ScrollType | undefined>(
    undefined
  )
  const locomotiveScrollContainerRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollSectionRef = useRef<HTMLDivElement>(null)

  return (
    <LocomotiveScrollInstanceContext.Provider
      value={{
        scroll: locomotiveScrollInstance,
        locomotiveScrollContainerRef,
        locomotiveScrollSectionRef,
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
