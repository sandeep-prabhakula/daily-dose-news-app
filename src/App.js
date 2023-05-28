import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import DetailedArticle from './components/DetailedArticle';

const App = () => {
  let pageSize = 6
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }
  const changeProgress = (progress) => {
    setProgress(progress)
  }
  return (
    <div>
      <LoadingBar
        height={mode === 'light' ? 2 : 3}
        color={mode === 'light' ? '#f11946' : '#8800ff'}
        progress={progress}
      />
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path='/' element={<News setProgress={changeProgress} apiKey={apiKey} key='all' pageSize={pageSize} country='in' category='all' mode={mode} />} />
          <Route exact path='/business' element={<News setProgress={changeProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='business' mode={mode} />} />
          <Route exact path='/entertainment' element={<News setProgress={changeProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment' mode={mode} />} />
          <Route exact path='/politics' element={<News setProgress={changeProgress} apiKey={apiKey} key='politics' pageSize={pageSize} country='in' category='politics' mode={mode} />} />
          <Route exact path='/science' element={<News setProgress={changeProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science' mode={mode} />} />
          <Route exact path='/sports' element={<News setProgress={changeProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports' mode={mode} />} />
          <Route exact path='/technology' element={<News setProgress={changeProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology' mode={mode} />} />

        </Routes>
      </Router>
    </div>
  )
}
export default App
