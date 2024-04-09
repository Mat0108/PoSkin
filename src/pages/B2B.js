import { useContext } from "react";
import HoverSwap from "../components/HoverSwap";
import { LanguageContext } from "../languages";

const B2B = () =>{

    const { dictionnaire} = useContext(LanguageContext);
    function div1(titre){
        return <div className="absolute w-full h-fit bottom-0 ">
            <div className="w-full min-h-[90px] bg-white absolute bottom-0 opacity-[0.8] center p-1 text-black font-mt-bold">{titre}</div>
        </div>
    }
    function div2(titre,text,button,onClick){
        return <div className="w-full h-full relative flex flex-col bg-white opacity-[0.95] flex flex-col p-4">
            <div className="flex center px-[10%] font-mt-bold text-[20px]">{titre}</div>
            <div className="flex center px-[10%] text-[16px] my-[30px]">{text}</div>
            <div className="flex center p-5"><div className="rounded-full p-2 bg-blue text-white_coffee text-[17px]" onClick={onClick}></div>{button.toUpperCase()}</div>
        </div>
    }
    return <div className="grid grid-cols-3">
        <HoverSwap  image={<img className="w-full h-full" src={'/images/B2B/B2B_1.png'} alt={'B2B'} />} div1={div1(dictionnaire.B2B.offre.offre1)} div2={div2(dictionnaire.B2B.offre.offre1,dictionnaire.B2B.offre.offre2,dictionnaire.B2B.offre.offre3)}/>
    </div>
}
export default B2B;