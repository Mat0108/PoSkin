import './App.css';

import React, { useMemo, useState,useRef, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';

import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Newsletter from './components/newsletter';
import Diagnostic from './pages/Diagnostic';
import DiagnosticStart from './pages/DiagnosticStart';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import { logout } from './services/user';
import Register from './pages/Register';
import Modal from 'react-modal';
import PasswordForgot from './pages/PasswordForgot';
import PasswordEdit from './pages/PasswordEdit';
import Compte from './pages/Compte';
import MesDiagnostics from './pages/MesDiagnostics';
import PriseDeRdv from './pages/PriseDeRdv';
import MesRdv from './pages/MesRdv';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [divModal,setDivModal] = useState(<></>)
  const [connected,setConnected] = useState(false)
  const newsletterRef = useRef();
  const customStyles = {
    overlay: {zIndex: 1000}
  };
  const openModal = (element) => {
   
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
    if(res.status === 200){
      setConnected(false);
      toast.success("Vous êtes deconnecté !")
      localStorage.clear()
    }
  } 
  useEffect(() => {
    if(!connected){
      localStorage.clear()
    }
  }, [connected])
  

  let register = <Register type={false} close={()=>closeModal()} login={()=>{}}/>
  let login = <Login type={true} close={()=>closeModal()} login={()=>closeModal(true)} register={()=>{openModal(register)}}/>

  register = <Register type={false} close={()=>closeModal()} login={()=>{openModal(login)}}/>
  
  let password = <PasswordForgot type={false} close={()=>closeModal()} login={()=>openModal(login)} register={()=>{openModal(register)}}/>
  
  login = <Login type={true} close={()=>closeModal()} login={()=>closeModal(true)} register={()=>{openModal(register)}} password_forgot={()=>{openModal(password)}}/>
  function LoginDiagnostic(data){
    let register = <Register type={false} close={()=>closeModal()} login={()=>{}} diagnostic_data={data}/>
    let login = <Login type={true} close={()=>closeModal()} login={()=>closeModal(true)} register={()=>{openModal(register)}} diagnostic_data={data}/>
  
    register = <Register type={false} close={()=>closeModal()} login={()=>{openModal(login)}} diagnostic_data={data}/>
    
    let password = <PasswordForgot type={false} close={()=>closeModal()} login={()=>openModal(login)} register={()=>{openModal(register)}} diagnostic_data={data}/>
    
    login = <Login type={true} close={()=>closeModal()} login={()=>closeModal(true)} register={()=>{openModal(register)}} password_forgot={()=>{openModal(password)}} diagnostic_data={data}/>
    openModal(login)
  }
  const Nav = useMemo(() => 
  {return <Navbar Login={()=>openModal(login)} LoginCond={connected} Logout={()=>{Logout()}} />
}
  , [connected,login])

  function ScrollNewsletter(){
    if (newsletterRef.current) {
        newsletterRef.current.scrollIntoView({
          behavior: 'smooth', // Vous pouvez également utiliser 'auto' à la place de 'smooth'
          block: 'start', // Vous pouvez utiliser 'start', 'center', 'end', ou 'nearest'
        });
    }
}
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
          <Route exact path="/Activate/:userId" element={<Home scroll={()=>{ScrollNewsletter()}}/>}></Route>
          <Route exact path="/Blog/:BlogId" element={<Blog/>}></Route> 
          {/* <Route path="/Expertise" element={<Expertise/>}></Route> 
          <Route path="/APropos" element={<QuiSommesNous />}></Route>
          <Route path="/Community" element={<Commu/>}></Route>
          <Route path='/Conseils' element={<Conseils/>}></Route>*/}
          <Route exact path='/ForgotPassword/:TokenId' element={<PasswordEdit login={()=>openModal(login)} password={()=>openModal(password)}/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/Diagnostic' element={<Diagnostic/>}></Route>
          <Route path="/Diagnostic/start/" element={<DiagnosticStart login={LoginDiagnostic}/>}></Route>
          <Route path="/Compte" element={<Compte/>}></Route> 
          <Route path="/MesDiagnostics" element={<MesDiagnostics openModal={openModal} closeModal={closeModal}/>} ></Route> 
          <Route path="/PriseDeRdv" element={<PriseDeRdv />}></Route>
          <Route path="/MesRdv" element={<MesRdv />}></Route>
          <Route exact path="/" element={<Home scroll={()=>{ScrollNewsletter()}}/>}></Route>
          <Route exact path="/Logout" element={<Home scroll={()=>{ScrollNewsletter()}}/>}></Route>
          
        </Routes>
        <div ref={newsletterRef}></div>
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
