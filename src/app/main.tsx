import './scss/global.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import TestChamber from './test-chamber/TestChamber.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TestChamber />
  </React.StrictMode>,
);