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
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Conseils from './pages/Conseils';
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
          {/* <Route path="/Expertise" element={<Expertise/>}></Route> 
          <Route path="/APropos" element={<QuiSommesNous />}></Route>
          <Route path="/Community" element={<Commu/>}></Route>
          <Route path='/Diagnostic' element={<Diagnostic/>}></Route>
          <Route path='/Conseils' element={<Conseils/>}></Route>*/}
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
