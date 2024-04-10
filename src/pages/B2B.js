import { useContext, useState } from "react";
import HoverSwap from "../components/HoverSwap";
import { LanguageContext } from "../languages";
import { saveNewsletterExpert } from "../services/newsletter";
import { toast } from "react-toastify";

const B2B = () =>{

    const { dictionnaire} = useContext(LanguageContext);
    const [value, setValue] = useState();

    async function createUser(mail){
      const user = {
          email: mail
        };
      await saveNewsletterExpert(user).then(e=>{setValue("");toast.success(dictionnaire.Toast.newsletter_expert)});
    }
    function div1(titre){
        return <div className="absolute w-full h-fit bottom-0 ">
            <div className="w-full min-h-[90px] bg-white absolute bottom-0 opacity-[0.8] center p-1 text-black font-mt-bold">{titre}</div>
        </div>
    }
    function div2(titre,text,button,onClick){
        return <div className="w-full h-full relative flex flex-col bg-white opacity-[0.95] flex flex-col p-4">
            <div className="flex center px-[10%] font-mt-bold text-[20px]">{titre}</div>
            <div className="flex center px-[10%] text-[16px] my-[30px]">{text}</div>
            <div className="flex center mt-[40px] p-5"><div className="rounded-full px-4 py-2 bg-blue text-white_coffee text-[17px]" onClick={onClick}>{button.toUpperCase()}</div></div>
        </div>
    }
    return <div>
        <div className="relative">
            <img src={"/images/visage/fullvisage2.png"} alt={"fullimage"}  className="w-full object-fill h-full" />
            <div className="absolute top-0 left-1/2 w-1/2 h-full flex center ">
                <div className="w-fit h-fit bg-white_coffee rounded-3xl flex flex-col items-center p-4 gap-2 mr-[5%] " >
                    <div className="text-[26px] 3xl:text-[40px] font-mt-bold w-[90%]">{dictionnaire.B2B.discover}</div>
                    <div className="text-[14px] 3xl:text-[20px] w-[90%] p-2">{dictionnaire.B2B.presentation1}</div>
                    <div className="text-[14px] 3xl:text-[20px] w-[90%] p-2">{dictionnaire.B2B.presentation2}</div>
                    <div className="text-[14px] 3xl:text-[20px] w-[90%] p-2">{dictionnaire.B2B.presentation3}</div>
                    <p className="w-[90%] text-[18px] text-left mt-10  ">{dictionnaire.B2B.contactplaceholder}</p>
                    <div className="flex flex-row w-[90%] mb-[4px] ">
                        <input className="w-[70%] bg-[#83C5BE] text-[16px] lg:text-[18px] border-2 border-blue bg-white rounded-lg" placeholder={dictionnaire.NewsLetter.placeholder} value={value} onChange={e=>setValue(e.target.value)}></input>
                        <div className="w-[30%]"><div className="w-full ml-[10px] p-4 flex center border-2 rounded-xl bg-blue text-white text-[10px] 3xl:text-[18px] font-mt-bold " onClick={()=>createUser(value)}> {dictionnaire.B2B.contact}</div></div>
                    </div>
                </div>    
            </div>
        </div>
        <div className="grid grid-cols-3 gap-8 p-8 place-content-around">
            <HoverSwap  image={<img className="w-full h-full" src={'/images/B2B/B2B_1.png'} alt={'B2B'} />} div1={div1(dictionnaire.B2B.offre.offre1)} div2={div2(dictionnaire.B2B.offre.offre1,dictionnaire.B2B.offre.offre2,dictionnaire.B2B.offre.offre3)}/>
            <HoverSwap  image={<img className="w-full h-full" src={'/images/B2B/B2B_1.png'} alt={'B2B'} />} div1={div1(dictionnaire.B2B.offre.offre1)} div2={div2(dictionnaire.B2B.offre.offre1,dictionnaire.B2B.offre.offre2,dictionnaire.B2B.offre.offre3)}/>
            <HoverSwap  image={<img className="w-full h-full" src={'/images/B2B/B2B_1.png'} alt={'B2B'} />} div1={div1(dictionnaire.B2B.offre.offre1)} div2={div2(dictionnaire.B2B.offre.offre1,dictionnaire.B2B.offre.offre2,dictionnaire.B2B.offre.offre3)}/>
    
    </div>
    </div>
}
export default B2B;