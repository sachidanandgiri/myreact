import React from 'react';
import './App.css';
import Home from './components/Home'
import Sidebar from './components/SidebarComponent';
import Contact from './components/Contact'
import About from './components/About'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreet from './components/UserGreet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserGreet />
        {/* <Home />
        <Message />
        <FunctionClick />
        <ClassClick />
        <ParentComponent />
        <EventBind />
        <Counter increment={2}/>
        <Sidebar name="Asha" gender="female" /> */}
        {/* <Sidebar name="Rahul" gender="male" /> */}
        {/* <Sidebar name="Kapil" gender="male" /> */}
        {/* <Contact name="Kapil" nickName="Momo"/> */}
        {/* <About name="Sachin" nickName="Giri" /> */}
        {/* <About name="Sweta" nickName="Lattu" /> */}
        {/* <About name="Myra" nickName="Shona" /> */}
      </header>
    </div>
  );
}

export default App;
