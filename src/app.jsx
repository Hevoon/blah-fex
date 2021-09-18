import React from 'react'
import Content from './content/index'
import './app.css'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  RecoilRoot,
} from 'recoil'
function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className={'app'}>
          <Content></Content>
        </div>
      </Router>
    </RecoilRoot>
  )
}

export default App
