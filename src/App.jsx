
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import Contact from './pages/contact/contact';
import Navbar from './components/Navbar';
import Themes from './components/Themes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
