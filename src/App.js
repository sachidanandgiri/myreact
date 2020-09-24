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
        <Sidebar name="Asha" gender="female" />
        <Sidebar name="Rahul" gender="male" />
        <Sidebar name="Kapil" gender="male" />
        <Contact />
        <About name="Sachin" nickName="Giri" />
        <About name="Sweta" nickName="Lattu" />
        <About name="Myra" nickName="Shona" />
      </header>
    </div>
  );
}

export default App;
