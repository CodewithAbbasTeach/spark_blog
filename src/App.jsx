import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import BlogList from './Components/BlogList/BlogList';

function App() {

  return (
    <>
      <div className='app'>
       <Header/>
       <div className="content">
        <Sidebar />
        <main className="main">
          <BlogList />
        </main>
      </div>
    </div>
    </>
  )
}

export default App
