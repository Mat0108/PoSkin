import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';

import Home from './pages/Home';
import Expertise from './pages/Expertise';
import QuiSommesNous from './pages/QuiSommesNous'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Newsletter from './components/newsletter';
import Commu from './pages/Commu';
import Diagnostic from './pages/Diagnostic';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Conseils from './pages/Conseils';
function App() {
  return (
    <div className="App w-full h-full relative bg-[#EEE8E4]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Expertise" element={<Expertise/>}></Route> 
          <Route path="/APropos" element={<QuiSommesNous />}></Route>
          <Route path="/Community" element={<Commu/>}></Route>
          <Route path='/Diagnostic' element={<Diagnostic/>}></Route>
          <Route path='/Conseils' element={<Conseils/>}></Route>
        </Routes>
        <Newsletter />
        <Footer />
        <ToastContainer
          position="top-center"
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
