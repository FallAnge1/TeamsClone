import React from 'react'

import { Route, Routes } from 'react-router'
import Start from './pages/Start'
import Avar from './pages/Avar'
import Bvar from './pages/Bvar'
import Cvar from './pages/Cvar'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Start />}
      />
      <Route
        path="/avar"
        element={<Avar />}
      />
      <Route
        path="/bvar"
        element={<Bvar />}
      />
      <Route
        path="/cvar"
        element={<Cvar />}
      />
    </Routes>
  )
}

export default App
