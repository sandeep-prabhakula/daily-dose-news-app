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

const App = () => {
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
          <Route exact path='/' element={<News setProgress={changeProgress} category='all' mode={mode} />} />
          <Route exact path='/business' element={<News setProgress={changeProgress} key='business' category='business' mode={mode} />} />
          <Route exact path='/entertainment' element={<News setProgress={changeProgress} key='entertainment'category='entertainment' mode={mode} />} />
          <Route exact path='/politics' element={<News setProgress={changeProgress} key='politics'category='politics' mode={mode} />} />
          <Route exact path='/science' element={<News setProgress={changeProgress}  key='science' category='science' mode={mode} />} />
          <Route exact path='/sports' element={<News setProgress={changeProgress}  key='sports' category='sports' mode={mode} />} />
          <Route exact path='/technology' element={<News setProgress={changeProgress}  key='technology' category='technology' mode={mode} />} />
          <Route exact path='/automobile' element={<News setProgress={changeProgress} key='automobile' category='automobile' mode = {mode}/>} />
          <Route exact path='/startup' element={<News setProgress={changeProgress} key='startup' category='startup' mode = {mode}/>} key='startup' category='startup' mode = {mode}/>
          <Route exact path='/india' element={<News setProgress={changeProgress} key='india' category='india' mode = {mode}/>} />
          <Route exact path='/world' element={<News setProgress={changeProgress} key='world' category='world' mode = {mode}/>} />
          <Route exact path='/hatke' element={<News setProgress={changeProgress} key='hatke' category='hatke' mode = {mode}/>} />
          <Route exact path='/misc' element={<News setProgress={changeProgress} key='miscellaneous' category='miscellaneous' mode = {mode}/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
