import moment from "moment"
import PrestationItem from "./PrestationItem"
import { useContext } from "react";
import { LanguageContext } from "../../../languages";

const Prestations = () => {
    
    const { dictionnaire } = useContext(LanguageContext);
    let presta = [1,2,3,4,5]
    return (
        <div className="w-full h-full">
            <div className="text-left text-[16px] font-mt-bold">{dictionnaire.B2B.prestations}</div>
            <div className="w-full h-[550px] flex flex-col overflow-hidden hover:overflow-auto gap-[12px]">
                {presta.map(item=>{
                    return  <PrestationItem prestation={{prestation:"NOM DE LA PRESTATION",firstname:"Matthieu",lastname:"Barnabé",DateDebut:moment(),prixttc:"35,00", prixht:"35,00",description:`Bonjour,
                    Je souhaiterai connaître mon type de peau.`}}/>
                })}
            </div>
            <div className="w-full h-[50px] bg-white_coffee rounded-[10px] flex flex-row p-2">
                <div className="w-[30px] h-[30px] rounded-full border-2 border-blue text-blue text-[20px] font-mt-extra-bold"> <div className=" mt-[-3px] ">+</div></div>
                <div className="text-blue text-[20px] font-mt-bold ml-2">{dictionnaire.B2B.add}</div>
            </div>
            <div className="w-full text-right text-[20px] text-blue font-mt-bold">{dictionnaire.B2B.more} {">"}</div>
           
        </div>
    )
}
export default Prestations