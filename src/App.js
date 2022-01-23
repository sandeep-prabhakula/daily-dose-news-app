import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6
  constructor(){
    super()
    this.state = {
      progress:0,
      mode:'light'
    }
  }
  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      })
    } else {
      this.setState({
        mode: 'light'
      })
    }
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
        <LoadingBar
          height={this.state.mode==='light'?2:3}
          color={this.state.mode==='light'?'#f11946':'#8800ff'}
          progress={this.state.progress}
        />
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} key='general' pageSize={this.pageSize} country='in' category='general' mode={this.state.mode} />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} key='business' pageSize={this.pageSize} country='in' category='business' mode={this.state.mode} />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' mode={this.state.mode} />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} key='health' pageSize={this.pageSize} country='in' category='health' mode={this.state.mode} />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} key='science' pageSize={this.pageSize} country='in' category='science' mode={this.state.mode} />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country='in' category='sports' mode={this.state.mode} />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country='in' category='technology' mode={this.state.mode} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

