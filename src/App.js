// import { Router } from '@mui/icons-material'
import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResponsiveDrawer from './components/Navbar/MenuPanel'
import Moli from './components/UsesTate/useState'
import List from "./components/useReduce/list"
import Text from "./components//text/text"

export default function App() {
  return (
    <>

      <Router>
      <ResponsiveDrawer />
        <Routes>
          <Route path='/create' element={<Moli />} />
          <Route path='/card' element={<List />} />
          <Route path='/hello' element={<Text />} />
        </Routes>
      </Router>
    </>
  )
}
