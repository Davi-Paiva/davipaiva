import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
