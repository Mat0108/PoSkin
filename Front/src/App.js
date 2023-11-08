import './App.css';

import React from 'react';
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
import DiagnosticStart from './pages/DiagnosticStart';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Conseils from './pages/Conseils';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import { register } from './services/user';
import { login } from './services/user';
import Register from './pages/Register';
import ForgotPassword from './pages/PasswordForgot';


function App() {
  return (
    <div className="App w-full h-full relative bg-[#EEE8E4] font-mt">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/Expertise" element={<Expertise/>}></Route> 
          <Route path="/APropos" element={<QuiSommesNous />}></Route>
          <Route path="/Community" element={<Commu/>}></Route>
          <Route path='/Conseils' element={<Conseils/>}></Route>*/}
          <Route path='/PasswordForgot' element={<ForgotPassword/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
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
