import React from 'react'
import Navbar from './components/Navbar'
import Tabs from './components/Tabs'
import Hovermenu from './components/Hovermenu'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
    <div className="wraaper w-full h-screen bg-black md:flex overflow-y-hidden">
      <Navbar/>
      <Sidebar/>
      <Tabs/>
      <Main/>
      <Hovermenu/>
    </div>
    </>
  )
}

export default App