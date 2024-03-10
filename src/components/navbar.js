import React, { useState, useMemo, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSelector from "../constants/LanguageSelector";
import { LanguageContext } from "../languages";
import MenuSelector from "./MenuSelector";

const Navbar = (props) => {
  const { dictionnaire, userLanguage } = useContext(LanguageContext);
  const [login, setLogin] = useState(false);
  const [takeRdv, setTakeRdv] = useState(false);
  const isMobile = window.screen.width < 600
  const cmhover =
    "text-black hover:bg-[#264C4D] hover:text-white px-4 py-2 hover:cursor-pointer rounded-full ";

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/Login") {
      props.Login();
      navigate("/");
    } else if (location.pathname === "/Register") {
      props.Register();
      navigate("/");
    }else if (location.pathname === "/Logout") {
      props.Logout();
      setLogin(false);
      navigate("/");
    }
  }, [location,navigate,props]);


  function BoutonMemo(action,setAction, link,name,width){
    return useMemo(()=>{
      let html = (
      <div className={`flex flex-row ${width} ${cmhover}`}>
        <div className="flex center w-fit mr-[10px]">
          
          {action ?   <img src={"/images/pointwhite.png"} alt={"pw"} /> : <img src={"/images/pointhidden.png"} alt={"pw"} />}
        </div>
        <div>
          {name}
        </div>
      </div>)
    let htmlNoAction = (
    <div className={`flex flex-row ${width} ${cmhover}`}>
      <div className="flex center w-fit mr-[10px] bg-[#EEE8E4]">
        <img src={"/images/pointhidden.png"} alt={"pw"} />
      </div>
      <div>
        {name}
      </div>
    </div>)      
        if(link){
            return (
              <Link to={link}>{html}</Link>
            )
          }else{
            return (
              <div onClick={setAction}>{html}</div>
            );
          }
      

    },[action,setAction,link,name,width])
  } 

  const Login = useMemo(()=>{
    const MobileOptions=[
      {to:"/Compte",name:dictionnaire.Navbar.account},
      {to:"/MesDiagnostics",name:dictionnaire.Navbar.diagnostic},
      {to:"/MesRdv",name:dictionnaire.Navbar.rdv},
      {to:"/takeRdv",name:dictionnaire.Navbar.take_rdv},
      {to:"/Logout",name:dictionnaire.Navbar.logout},
    ]
    const options = [
      {to:"/Compte",name:dictionnaire.Navbar.account},
      {to:"/MesDiagnostics",name:dictionnaire.Navbar.diagnostic},
      {to:"/MesRdv",name:dictionnaire.Navbar.rdv},
      {to:"/Logout",name:dictionnaire.Navbar.logout},
    ]
    
    if(props.LoginCond){
      return <MenuSelector title={dictionnaire.Navbar.account} options={isMobile ? MobileOptions : options}/>
    }else{
        return (<div className={`flex flex-row w-[180px] ${cmhover}`} onClick={props.Login}>
        <div className="flex center w-fit mr-[10px]">
          {login ? <img src={"/images/pointwhite.png"} alt={"pw"} /> : <img src={"/images/pointhidden.png"} alt={"pw"} />}
        </div>
        <div>
          {dictionnaire.Navbar.login}
        </div>
      </div>)    
    }
  },[props,dictionnaire,login])
  const TakeRdv = BoutonMemo(takeRdv,null,"/takeRdv",dictionnaire.Navbar.take_rdv,userLanguage === "en" ? "w-[270px]" : "w-[240px]") 
  


  return (
    <>
      <div className="w-full h-[40px] sm:h-[80px] border-b-2 border-white grid grid-cols-5 bg-[#EEE8E4] p-2">
        <div className="col-start-1 ml-[20px] sm:ml-[35px] mt-[4px] sm:mt-[12px] p-x-2 flex items-start ">
          <a className="w-fit h-full">
            <img
              src={"/images/logo.png"}
              alt="logo"
              className="h-[30%] sm:h-[70%] "
              onClick={() => {
                navigate("/");
              }}
            />
          </a>
        </div>
        <div className="col-start-4 col-span-2 flex ">
          <div className="w-full h-fit sm:h-full flex flex-row text-[12px] sm:text-lg space-x-2 mr-[100px] center justify-end ">
            <LanguageSelector />
            {/*
                <div onMouseEnter={()=>{setRegisterbool(true)}}
                onMouseLeave={()=>{setRegisterbool(false)}}>{Register}</div> */}
            {props.LoginCond  ? (
              <>
              {!isMobile ? 
                <div
                  onMouseEnter={() => {
                    setTakeRdv(true);
                  }}
                  onMouseLeave={() => {
                    setTakeRdv(false);
                  }}
                >
                  {TakeRdv}
                </div>:""}
              </>
            ) : (
              ""
            )}
            <div
              onMouseEnter={() => {
                setLogin(true);
              }}
              onMouseLeave={() => {
                setLogin(false);
              }}
            >
              {Login}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
