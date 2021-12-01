import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <div>
     <Header />
      <Navbar />
      <div className="row">
        {/* <Content /> */}
        <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
