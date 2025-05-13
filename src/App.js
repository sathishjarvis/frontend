import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Directory from './Directory';
import Userform from './UserForm';
import Hospitality from './Hospitality';
import Brokerage from './Brokerage';
import Contact from './Contact';
import Footer from './Footer';
import DisplayDirectory from './DisplayDirectory';
import Login from './Login';
import Service from './Service';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/Display" element={<DisplayDirectory />} />
          <Route path="/directory/add" element={<Userform />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/brokerage" element={<Brokerage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
