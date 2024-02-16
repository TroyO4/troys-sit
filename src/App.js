import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
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
      </Routes>
      <Header/>
      <Footer/>
    </div>
  </>
  );
}

export default App;
