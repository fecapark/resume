import { AnimatePresence, motion, Variants } from 'motion/react'
import { useContext, useState } from 'react'
import { useStorageState } from 'react-simplikit'

import { HoverThumbnailInfoContext } from '@/components/Providers/HoverThumbnailInfoProvider/context'
import { motionEasing } from '@/utils/motion'
import { safeSessionStorage } from '@toss/storage'

const infoFadeVariants: Variants = {
  initial: {
    opacity: 0.7,
    x: '5%',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: motionEasing.materialBase,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: '10%',
    transition: {
      ease: motionEasing.materialAccel,
      duration: 0.35,
    },
  },
}

const infoTextFadeVariants: Variants = {
  initial: {
    opacity: 0,
    x: '3%',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: motionEasing.materialBase,
      duration: 0.3,
      delay: 0.1,
    },
  },
}

export const HoverThumbnailInfoProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [infoOnce, setInfoOnce] = useStorageState('infohoverthumbnail-once', {
    storage: safeSessionStorage,
    defaultValue: false,
  })
  const [showInfo, setShowInfo] = useState(false)

  const onHover = () => {
    if (!infoOnce) {
      setInfoOnce(true)
      setShowInfo(true)
      setTimeout(() => {
        setShowInfo(false)
      }, 6500)
    }
  }

  return (
    <>
      <HoverThumbnailInfoContext.Provider value={{ onHover, setInfoOnce }}>
        {children}
      </HoverThumbnailInfoContext.Provider>
      <AnimatePresence>
        {showInfo && (
          <motion.div
            animate="animate"
            className="bg-grey800 text-grey100 fixed top-[10vh] right-0 min-w-[22em] rounded-l-lg px-[1.6em] py-[0.95vw] text-[0.752vw] leading-[1.7] font-medium max-[1724px]:text-[1.152vw] max-[890px]:text-[1.852vw]"
            exit="exit"
            initial="initial"
            variants={infoFadeVariants}
          >
            <motion.div
              animate="animate"
              className="leading-[1.7] font-medium"
              initial="initial"
              style={{ opacity: 0 }}
              variants={infoTextFadeVariants}
            >
              <div className="text-blue500 relative inline-block font-semibold">
                이런 텍스트
                <div className="bg-blue500 absolute bottom-0 h-[0.086vw] w-full" />
              </div>{' '}
              에 마우스를 올리면
              <br />
              관련 정보나 썸네일을 볼 수 있습니다.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export const useHoverThumbnailInfo = () => {
  const context = useContext(HoverThumbnailInfoContext)
  if (!context) {
    throw new Error(
      'useHoverThumbnailInfoContext는 HoverThumbnailInfoProvider 하위에서만 사용할 수 있어요.'
    )
  }
  return context
}
