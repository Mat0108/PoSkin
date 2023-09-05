    // import Routine from '../images/Routine.png'
    // import skincare from '../images/skincare.png'

import logo from '../images/logo.png';
import React, { useMemo, useState } from 'react';
//import { Badge } from "@material-ui/core";
//import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import { mobile } from "../responsive";
import pointwhite from "../images/pointwhite.png";
import pointhidden from "../images/pointhidden.png";
const Navbar = () =>{
    const [aproposbool,setAproposbool] = useState(false);
    const [conseilbool,setConseilbool] = useState(false);
    const [expertisebool,setExpertisebool] = useState(false);
    const [communitybool,setCommunitybool] = useState(false);
    const cmhover = "text-black hover:bg-[#264C4D] hover:text-white px-4 py-2  rounded-full "
    const cm = "text-black bg-red hover:bg-[#264C4D] hover:text-white px-4 py-2  rounded-full "
    
    const apropos = useMemo(()=>{
        if(aproposbool){
            return <div><a href={"/APropos"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={pointwhite} alt={"pw"} /></div><div> A propos</div></div></a></div>
        }else{
            return <div><a href={"/APropos"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={pointhidden} alt={"pw"}/></div><div> A propos</div></div></a></div>
        }
    },[aproposbool])
    const conseil = useMemo(()=>{
        if(conseilbool){
            return <div><a href={"/Expertise"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={pointwhite} alt={"pw"} /></div><div> Expertise</div></div></a></div>
        }else{
            return <div><a href={"/Expertise"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={pointhidden} alt={"pw"}/></div><div> Expertise</div></div></a></div>
        }
    },[conseilbool])
    const expertise = useMemo(()=>{
        if(expertisebool){
            return <div><a href={"/Conseils"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={pointwhite} alt={"pw"} /></div><div> Conseils</div></div></a></div>
        }else{
            return <div><a href={"/Conseils"} ><div className={`flex flex-row w-[130px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={pointhidden} alt={"pw"}/></div><div> Conseils</div></div></a></div>
        }
    },[expertisebool])
    const community = useMemo(()=>{
        if(communitybool){
            return <div><a href={"/Community"} ><div className={`flex flex-row w-[140px] ${cmhover}`}><div className='flex center w-fit mr-[10px]'><img src={pointwhite} alt={"pw"} /></div><div> Community</div></div></a></div>
        }else{
            return <div><a href={"/Community"} ><div className={`flex flex-row w-[140px] ${cmhover}`}><div className='flex center w-fit mr-[10px] bg-[#EEE8E4]'><img src={pointhidden} alt={"pw"}/></div><div> Community</div></div></a></div>
        }
    },[communitybool])
    return (
    <>
    
    <div className='w-full h-[80px] border-b-2 border-white grid grid-cols-5 bg-[#EEE8E4] p-2'>
        <div className='col-start-1 ml-[35px] mt-[12px] p-x-2 flex items-start ' ><a href="/" className='w-fit h-full'><img src={logo} alt="logo" className='h-[70%] '/></a></div>
        <div className='col-start-4 col-span-2 flex '>
            <div className='w-full flex flex-row text-lg space-x-2 mr-[100px] center justify-end '>
                <div onMouseEnter={()=>{setAproposbool(true)}}
                onMouseLeave={()=>{setAproposbool(false)}}>{apropos}</div>
                <div onMouseEnter={()=>{setConseilbool(true)}}
                onMouseLeave={()=>{setConseilbool(false)}}>{conseil}</div>
                <div onMouseEnter={()=>{setExpertisebool(true)}}
                onMouseLeave={()=>{setExpertisebool(false)}}>{expertise}</div>
                <div onMouseEnter={()=>{setCommunitybool(true)}}
                onMouseLeave={()=>{setCommunitybool(false)}}>{community}</div>

            </div>
        </div>
    </div>
    </>)
}
export default Navbar;