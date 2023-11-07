import './App.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';

import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Newsletter from './components/newsletter';
import Diagnostic from './pages/Diagnostic';
import DiagnosticStart from './pages/DiagnosticStart';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';
function App() {

  return (
    <div className="App w-full h-full relative bg-[#EEE8E4] font-mt">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/Diagnostic' element={<Diagnostic/>}></Route>
          <Route path="/Diagnostic/start/" element={<DiagnosticStart/>}></Route>
          <Route path="/Blog/:BlogId" element={<Blog/>}></Route> 
        </Routes>
        <Newsletter />
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
