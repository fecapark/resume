import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'core-js/stable'

import './styles/index.css'

import { ContentMinimap } from '@/components/ContentMinimap/index.tsx'
import { LocomotiveScrollLayout } from '@/components/layout/LocomotiveScrollLayout.tsx'
import { Providers } from '@/components/Providers/index.tsx'

import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <div className="size-full">
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
      </div>
    </Providers>
  </StrictMode>
)
