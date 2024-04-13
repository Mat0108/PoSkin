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
            <div className="absolute bottom-0 flex w-[calc(100%-32px)] center  py-10"><div className="rounded-full px-4 py-2 bg-blue text-white_coffee text-[17px]" onClick={onClick}>{button.toUpperCase()}</div></div>
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
                        <div className="w-[30%]"><div className="w-full ml-[10px] p-4 flex center border-2 rounded-xl bg-blue text-white text-[10px] 3xl:text-[14px] font-mt-bold " onClick={()=>createUser(value)}> {dictionnaire.B2B.contact}</div></div>
                    </div>
                </div>    
            </div>
        </div>
        <div className="p-10 ">
            <div className="flex center font-mt-bold text-[36px]">{dictionnaire.B2B.discover2.toUpperCase()}</div>
            <div className="flex center text-[20px]">{dictionnaire.B2B.Po}</div>
            <div className="flex justify-between mt-[50px]">
                <HoverSwap  image={<img className="w-full h-full" src={'/images/B2B/B2B_1.png'} alt={'B2B1'} />} div1={div1(dictionnaire.B2B.offre.offre1)} div2={div2(dictionnaire.B2B.offre.offre1,dictionnaire.B2B.offre.offre2,dictionnaire.B2B.offre.offre3)}/>
                <HoverSwap  image={<img className="w-full h-full" src={'/images/B2B/B2B_2.png'} alt={'B2B2'} />} div1={div1(dictionnaire.B2B.reserver.reserver1)} div2={div2(dictionnaire.B2B.reserver.reserver1,dictionnaire.B2B.reserver.reserver2,dictionnaire.B2B.reserver.reserver3)}/>
                <HoverSwap  image={<img className="w-full h-full" src={'/images/B2B/B2B_3.png'} alt={'B2B3'} />} div1={div1(dictionnaire.B2B.discoverhs.discover1)} div2={div2(dictionnaire.B2B.discoverhs.discover1,dictionnaire.B2B.discoverhs.discover2,dictionnaire.B2B.discoverhs.discover3)}/>
            </div>
            <div className="flex mt-10 relative ">
                <img className="w-full h-full" src={'/images/B2B/B2B_4.png'} alt={'B2B4'}/>
                <div className="absolute  top-0 left-0 w-1/2 h-full p-[50px]">
                    <div className="w-full h-full relative flex flex-col">

                        <div className="flex font-mt-bold text-[36px] text-left">{dictionnaire.B2B.expert.expert1.toUpperCase()}</div>
                        <div className="flex flex-col center h-[calc(100%-270px)]">
                            <div>
                                <div className="flex text-[16px] text-left ">{dictionnaire.B2B.expert.expert2}</div>
                            
                                <div className="flex text-[16px] text-left mt-[26px]"><img src={"/images/check.png"} alt={"check"}/>{dictionnaire.B2B.expert.expert3}</div>
                                <div className="flex text-[16px] text-left"><img src={"/images/check.png"} alt={"check"}/>{dictionnaire.B2B.expert.expert4}</div>
                                <div className="flex text-[16px] text-left"><img src={"/images/check.png"} alt={"check"}/>{dictionnaire.B2B.expert.expert5}</div>
                                <div className="flex text-[16px] text-left"><img src={"/images/check.png"} alt={"check"}/>{dictionnaire.B2B.expert.expert6}</div>
                                <div className="flex text-[16px] text-left"><img src={"/images/check.png"} alt={"check"}/>{dictionnaire.B2B.expert.expert7}</div>
                                <div className="flex text-[16px] text-left"><img src={"/images/check.png"} alt={"check"}/>{dictionnaire.B2B.expert.expert8}</div>        
                            </div>
                        </div>
                        <div className="absolute bottom-10 flex center w-full "><div className="rounded-full px-4 py-2 bg-blue text-white_coffee font-mt-bold text-[20px]" >{dictionnaire.B2B.expert.expert9.toUpperCase()}</div></div>
                    </div>        
                </div>
            </div>
        </div>
    </div>
}
export default B2B;