import React from 'react'
import Content from './content/index'
import './app.css'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className={'app'}>
        <Content></Content>
      </div>
    </Router>
  )
}

export default App