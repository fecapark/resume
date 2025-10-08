import { Variants } from 'motion'
import { motion } from 'motion/react'
import 'core-js/stable'

import './styles/index.css'

import { StrictMode } from 'react'
import { isMobile } from 'react-device-detect'
import { createRoot } from 'react-dom/client'

import { config } from '@/components/config.ts'
import { ContentMinimap } from '@/components/ContentMinimap/index.tsx'
import { LocomotiveScrollLayout } from '@/components/layout/LocomotiveScrollLayout.tsx'
import { Providers } from '@/components/Providers/index.tsx'
import { MediaLoader } from '@/components/Providers/MediaLoader/index.tsx'
import { motionEasing } from '@/utils/motion.ts'

import { App } from './App.tsx'

const hoveringVariants: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: motionEasing.expoOut,
      delay: 0.3,
    },
  },
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <MediaLoader>
        <div className="size-full">
          {isMobile ? (
            <App />
          ) : config.printMode ? (
            <motion.div
              animate="animate"
              className="w-full px-[10vw]"
              initial="initial"
              style={{
                scale: 'calc(1300px / max(1300px, 100vw))',
                transformOrigin: 'top center',
                height: 'calc((1300px / max(1300px, 100vw)) * 100dvh)',
              }}
              variants={hoveringVariants}
            >
              <App />
            </motion.div>
          ) : (
            <ContentMinimap>
              <ContentMinimap.View />

              <LocomotiveScrollLayout>
                <div className="w-full pl-[40.7vw]">
                  <ContentMinimap.Target>
                    <App />
                  </ContentMinimap.Target>
                </div>
              </LocomotiveScrollLayout>
            </ContentMinimap>
          )}
        </div>
      </MediaLoader>
    </Providers>
  </StrictMode>
)
