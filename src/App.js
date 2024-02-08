import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header/header';
import Sidebar from './Header/sidebar';
import Footer from './Header/footer';
import Content from './Header/content';

function App() {
  return (

    <BrowserRouter>
      <div className='px-5'>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <Content title="Home" />
}

function About() {
  return <Content title="About" />
}

function Contact() {
  return <Content title="Contact" />
}

export default App;
