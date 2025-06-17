import { StrictMode } from 'react'
import { isMobile } from 'react-device-detect'
import 'core-js/stable'

import './styles/index.css'

import { createRoot } from 'react-dom/client'

import { config } from '@/components/config.ts'
import { ContentMinimap } from '@/components/ContentMinimap/index.tsx'
import { LocomotiveScrollLayout } from '@/components/layout/LocomotiveScrollLayout.tsx'
import { Providers } from '@/components/Providers/index.tsx'

import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <div className="size-full">
        {isMobile ? (
          <App />
        ) : config.printMode ? (
          <div className="w-full px-[10vw]">
            <App />
          </div>
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
    </Providers>
  </StrictMode>
)
