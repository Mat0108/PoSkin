import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LanguageContext } from "../languages";
import { useLocation } from 'react-router-dom';
import { saveNewsletter } from "../services/newsletter";
const Newsletter =(props)=>{
    const { dictionnaire } = useContext(LanguageContext);
    const location = useLocation();
    const [display,setDisplay] = useState(true);
    const [value, setValue] = useState();

    async function createUser(mail){
      const user = {
          email: mail
        };
      await saveNewsletter(user).then(e=>{setValue("");toast.success(dictionnaire.Toast.newsletter)});
    }
      
      useEffect(()=>{
        if(location.pathname.includes('PanelExpert')){
            setDisplay(false);
          }else{
            setDisplay(true)
          }
      },[location])
    return (<>
        {display && 
        <div className="relative w-full h-[100px] sm:h-[260px] grid grid-cols-6 bg-[#83C5BE]" >
            <div className="col-start-1 col-span-2 flex flex-col text-center my-auto ml-[40px]">
                <p className="text-[12px] sm:text-[30px] w-[80%] sm:w-[90%]">NEWSLETTER</p>
                <p className="w-[90%] sm:w-[60%] text-[7px] sm:text-[14px] text-justify mx-auto">{dictionnaire.NewsLetter.info} </p>
            </div>
            <div className="col-start-3 col-span-4 flex flex-col center ">
                <p className="text-[12px] sm:text-[30px] ">{dictionnaire.NewsLetter.mail}</p>
                <div className="flex flex-row w-[90%]">
                    <input className="w-[80%] bg-[#83C5BE] mt-5 text-[16px] sm:text-[18px] border-2 border-blue bg-white rounded-lg" placeholder={dictionnaire.NewsLetter.placeholder} value={value} onChange={e=>setValue(e.target.value)}></input>
                    <div className="w-[20%]"><div className="mt-[20px] w-[20px] sm:w-[40px] ml-[10px] flex center border-2 rounded-lg " onClick={()=>createUser(value)}> <img src={"/images/fleche.png"} alt={"fleche"} /></div></div>
                </div>
            </div>
        </div>}
        </>
    )
}
export default Newsletter