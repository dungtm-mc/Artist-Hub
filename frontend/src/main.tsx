import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/index.tsx'
import { MantineProvider } from '@mantine/core'
import React from 'react'
import LoginLayout from './layouts/login/index.tsx'
import LoginRoster from './pages/login/roster/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<LoginLayout />}>
            <Route path="" element={<Login />} />
            <Route path="roster" element={<LoginRoster />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
