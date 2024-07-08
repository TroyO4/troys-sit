import './App.css';
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Resume from './pages/resume1';
import {Route,Routes}from "react-router-dom"


function App() {



  return (
  <>
    <Navbar/>
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
      <Footer/>
    </div>
  </>
  );
}

export default App;
