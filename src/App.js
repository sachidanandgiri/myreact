import React from 'react';
import './App.css';
import Home from './components/Home'
import Sidebar from './components/SidebarComponent';
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Sidebar />
        <Contact />
        <About />
        <h5>Hello Sachin</h5>
        <h6>Hello Mania</h6>  
      </header>
    </div>
  );
}

export default App;
