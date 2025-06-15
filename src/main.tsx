import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'core-js/stable'

import './styles/index.css'

import { LocomotiveScrollProvider } from '@/components/Providers/LocomotiveProvider'

import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocomotiveScrollProvider>
      <App />
    </LocomotiveScrollProvider>
  </StrictMode>
)
