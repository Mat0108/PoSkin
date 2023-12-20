import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MesDiagnostics from './../pages/MesDiagnostics';

const Navbar = (props) => {
//   const [aproposbool, setAproposbool] = useState(false);
//   const [conseilbool, setConseilbool] = useState(false);
//   const [expertisebool, setExpertisebool] = useState(false);
//   const [communitybool, setCommunitybool] = useState(false);
//   const [registerbool, setRegisterbool] = useState(false);
  const [login, setLogin] = useState(false);
  const [compte, setCompte] = useState(false);  
  const [diagnostic, setDiagnostic] = useState(false);
  const [takeRdv,setTakeRdv] = useState(false);
  const [rdv,setRdv] = useState(false);

    const cmhover = "text-black hover:bg-[#264C4D] hover:text-white px-4 py-2 hover:cursor-pointer rounded-full "
    // const apropos = useMemo(()=>{
    //     if(aproposbool){
    //         return <div><a href={"/APropos"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointhidden.png"} alt={"pw"} /></div><div> A propos</div></div></a></div>
    //     }else{
    //         return <div><a href={"/APropos"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div> A propos</div></div></a></div>
    //     }
    // },[aproposbool])
    // const conseil = useMemo(()=>{
    //     if(conseilbool){
    //         return <div><a href={"/Expertise"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointhidden.png"} alt={"pw"} /></div><div> Expertise</div></div></a></div>
    //     }else{
    //         return <div><a href={"/Expertise"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div> Expertise</div></div></a></div>
    //     }
    // },[conseilbool])
    // const expertise = useMemo(()=>{
    //     if(expertisebool){
    //         return <div><a href={"/Conseils"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointhidden.png"} alt={"pw"} /></div><div> Conseils</div></div></a></div>
    //     }else{
    //         return <div><a href={"/Conseils"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div> Conseils</div></div></a></div>
    //     }
    // },[expertisebool])
    // const community = useMemo(()=>{
    //     if(communitybool){
    //         return <div><a href={"/Community"} ><div className={`flex flex-row w-[140px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointhidden.png"} alt={"pw"} /></div><div> Community</div></div></a></div>
    //     }else{
    //         return <div><a href={"/Community"} ><div className={`flex flex-row w-[140px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div> Community</div></div></a></div>
    //     }
    // },[communitybool])
    // const Register = useMemo(()=>{
    //     if(registerbool){
    //         return <div onClick={props.Register}><div className={`flex flex-row w-[140px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointhidden.png"} alt={"pw"} /></div><div>Register</div></div></div>
    //     }else{
    //         return <div onClick={props.Register}><div className={`flex flex-row w-[140px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div>Register</div></div></div>
    //     }
    // },[registerbool])
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
         if(location.pathname === "/Login"){
            props.Login();
            navigate("/");
        }else if(location.pathname === "/Register"){
            props.Register();
            navigate("/");
        }
    },[])
    const Login = useMemo(()=>{
        if(login){
            return <div onClick={props.LoginCond ? props.Logout: props.Login}><div className={`flex flex-row w-[200px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointwhite.png"} alt={"pw"} /></div><div>{props.LoginCond ? "Se deconnecter" : "Se connecter"}</div></div></div>
        }else{
            return <div onClick={props.LoginCond ? props.Logout: props.Login}><div className={`flex flex-row w-[200px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div>{props.LoginCond ? "Se deconnecter" : "Se connecter"}</div></div></div>
        }
    },[login,props])
    const Compte = useMemo(()=>{
        if(compte){
            return <Link to="/Compte" ><div className={`flex flex-row w-[200px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointwhite.png"} alt={"pw"} /></div><div>Mon compte</div></div></Link>
        }else{
            return <Link to="/Compte" ><div className={`flex flex-row w-[200px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div>Mon Compte</div></div></Link>
        }
    },[compte])
    const MesDiagnostics = useMemo(()=>{
        if(diagnostic){
            return <Link to="/MesDiagnostics" ><div className={`flex flex-row w-[200px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointwhite.png"} alt={"pw"} /></div><div>Mes Diagnostics</div></div></Link>
        }else{
            return <Link to="/MesDiagnostics" ><div className={`flex flex-row w-[200px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div>Mes Diagnostics</div></div></Link>
        }
    },[diagnostic])
    const TakeRdv = useMemo(()=>{
        if(takeRdv){
            return <Link to="/PriseDeRdv" ><div className={`flex flex-row w-[250px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointwhite.png"} alt={"pw"} /></div><div>Prendre rendez vous</div></div></Link>
        }else{
            return <Link to="/PriseDeRdv" ><div className={`flex flex-row w-[250px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div>Prendre rendez vous</div></div></Link>
        }
    },[takeRdv])
    const Rdv = useMemo(()=>{
        if(rdv){
            return <Link to="/MesRdv" ><div className={`flex flex-row w-[200px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={"/images/pointwhite.png"} alt={"pw"} /></div><div>Mes rendez vous</div></div></Link>
        }else{
            return <Link to="/MesRdv" ><div className={`flex flex-row w-[200px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={"/images/pointhidden.png"} alt={"pw"}/></div><div>Mes rendez vous</div></div></Link>
        }
    },[rdv])
    
    return (
    <>
    <div className='w-full h-[40px] sm:h-[80px] border-b-2 border-white grid grid-cols-5 bg-[#EEE8E4] p-2'>
        <div className='col-start-1 ml-[20px]  sm:ml-[35px] mt-[4px] sm:mt-[12px] p-x-2 flex items-start ' ><a href="/" className='w-fit h-full'><img src={'/images/logo.png'} alt="logo" className='h-[30%] sm:h-[70%] '/></a></div>
        <div className='col-start-4 col-span-2 flex '>
            <div className='w-full flex flex-row text-lg space-x-2 mr-[100px] center justify-end '>
                {/* <div onMouseEnter={()=>{setRegisterbool(true)}}
                onMouseLeave={()=>{setRegisterbool(false)}}>{Register}</div> */}
                {props.LoginCond ? <>
                <div onMouseEnter={()=>{setTakeRdv(true)}}
                onMouseLeave={()=>{setTakeRdv(false)}}>{TakeRdv}</div>
                <div onMouseEnter={()=>{setRdv(true)}}
                onMouseLeave={()=>{setRdv(false)}}>{Rdv}</div>
                <div onMouseEnter={()=>{setDiagnostic(true)}}
                onMouseLeave={()=>{setDiagnostic(false)}}>{MesDiagnostics}</div>
                <div onMouseEnter={()=>{setCompte(true)}}
                onMouseLeave={()=>{setCompte(false)}}>{Compte}</div></>:"" }
                <div onMouseEnter={()=>{setLogin(true)}}
                onMouseLeave={()=>{setLogin(false)}}>{Login}</div>
                
                {/* <div onMouseEnter={()=>{setAproposbool(true)}}
                onMouseLeave={()=>{setAproposbool(false)}}>{apropos}</div>
                <div onMouseEnter={()=>{setConseilbool(true)}}
                onMouseLeave={()=>{setConseilbool(false)}}>{conseil}</div>
                <div onMouseEnter={()=>{setExpertisebool(true)}}
                onMouseLeave={()=>{setExpertisebool(false)}}>{expertise}</div>
                <div onMouseEnter={()=>{setCommunitybool(true)}}
                onMouseLeave={()=>{setCommunitybool(false)}}>{community}</div> */}

            </div>
        </div>
    </div>
    </>)
}
export default Navbar;