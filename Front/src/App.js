import './App.css';

import React, { useMemo, useState } from 'react';
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
import { logout } from './services/user';
import Register from './pages/Register';
import Modal from 'react-modal';
import PasswordForgot from './pages/PasswordForgot';
import PasswordEdit from './pages/PasswordEdit';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [divModal,setDivModal] = useState(<></>)
  const [connected,setConnected] = useState(false)
  
  const customStyles = {
    overlay: {zIndex: 1000}
  };
  const openModal = (element) => {
    console.log('element : ', element)

    setIsModalOpen(true);
    setDivModal(element);
  };

  const closeModal = (Login) => {
    setConnected(Login)
    setIsModalOpen(false);
    setDivModal(<></>)
  };
  async function Logout(){
    let res = await logout(localStorage.getItem("userId"));
    if(res.status === "200"){
      setConnected(false);
      localStorage.clear()
    }
  } 

  let register = <Register type={false} close={()=>closeModal()} login={()=>{}}/>
  let login = <Login type={true} close={()=>closeModal()} login={()=>closeModal(true)} register={()=>{openModal(register)}}/>

  register = <Register type={false} close={()=>closeModal()} login={()=>{openModal(login)}}/>
  
  let password = <PasswordForgot type={false} close={()=>closeModal()} login={()=>openModal(login)} register={()=>{openModal(register)}}/>
  
  login = <Login type={true} close={()=>closeModal()} login={()=>closeModal(true)} register={()=>{openModal(register)}} password_forgot={()=>{openModal(password)}}/>
  function LoginDiagnostic(data){
    openModal(<Login type={true} close={()=>closeModal()} login={()=>closeModal(true)} register={()=>{openModal(register)}} password_forgot={()=>{openModal(password)}} diagnostic_data={data}/>)
  }
  const Nav = useMemo(() => 
  {return <Navbar Login={()=>openModal(login)} LoginCond={connected} Logout={()=>{Logout()}} />
}
  , [connected,login])
  return (
    <div className="App w-full h-full relative bg-[#EEE8E4] font-mt">
      <Router>
        <ScrollToTop />
        {Nav}
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
          <Route path='/ForgotPassword/:TokenId' element={<PasswordEdit login={()=>openModal(login)} password={()=>openModal(password)}/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/Diagnostic' element={<Diagnostic/>}></Route>
          <Route path="/Diagnostic/start/" element={<DiagnosticStart login={LoginDiagnostic}/>}></Route>
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
          className={"w-fit"}
          // toastClassName={() => "w-full bg-[#264C4D] rounded-t-2xl"}
          // toastClassName={" relative bg-[#264C4D] flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"}
          // bodyClassName={() => "text-[14px] text-white font-mt-bold"}
          // closeClassName={"bg-white"}
        />
      </Router>
    </div>
  );
}

export default App;
