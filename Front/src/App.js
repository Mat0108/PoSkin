import './App.css';

import React, { useState } from 'react';
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
import Login from './pages/Login';
import { register } from './services/user';
import { login } from './services/user';
import Register from './pages/Register';
import Modal from 'react-modal';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [divModal,setDivModal] = useState(<></>)

  const customStyles = {

    
    overlay: {zIndex: 1000}
  };
  
  const openModal = (element,test) => {
    console.log(test)
    setIsModalOpen(true);
    setDivModal(element);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDivModal(<></>)
  };
  let register = <Register type={false} close={()=>closeModal()} login={()=>{}}/>
  let login = <Login type={true} close={()=>closeModal()} register={()=>{openModal(register)}}/>
  register = <Register type={false} close={()=>closeModal()} login={()=>{openModal(login,"test")}}/>
  login = <Login type={true} close={()=>closeModal()} register={()=>{openModal(register,"test")}}/>
  return (
    <div className="App w-full h-full relative bg-[#EEE8E4] font-mt">
      <Router>
        <Navbar Login={()=>openModal(login)} Register={()=>openModal(register)}/>
        <ScrollToTop />

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className={"bg-transparent w-screen h-screen z-[10000] flex center"}
          style={customStyles}
        >
          {divModal}
        </Modal>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/Expertise" element={<Expertise/>}></Route> 
          <Route path="/APropos" element={<QuiSommesNous />}></Route>
          <Route path="/Community" element={<Commu/>}></Route>
          <Route path='/Conseils' element={<Conseils/>}></Route>*/}
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
