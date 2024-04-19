import { useContext } from "react";
import { LanguageContext } from "../../../languages";
import { Months } from "../../dateUtils";

const PrestationItem = ({prestation})=> {
    const { dictionnaire } = useContext(LanguageContext);
    let months = Months()
    return ( 
    <div className="flex flex-col w-full h-fit" key={`${prestation.prestation}-${prestation.horaire}`}>
        <div className="w-full h-[52px] bg-blue rounded-t-[15px] flex flex-row text-white flex center justify-between px-[25px] ">
            <div className="text-[14px]">{prestation.prestation}</div>
            <div className="text-[32px] font-mt-extra-bold">{prestation.DateDebut.format('HH[H]mm')}</div>
        </div>
        <div className="w-full h-[120px] bg-white_coffee rounded-b-[15px] flex flex-col p-4">
            <div className="flex flex-row justify-between">  
                <div className="text-gray-cool text-[14px]">{dictionnaire.B2B.rdv}<span className="text-black font-mt-extra-bold text-[20px]">{prestation.DateDebut.format('DD')} {months[prestation.DateDebut.month()].toUpperCase()}</span> {dictionnaire.B2B.with} <span className="text-cyan text-[20px] font-mt-bold">{prestation.firstname.toUpperCase()} {prestation.lastname.toUpperCase()}</span></div>
                <div className="flex flex-col">
                    <div className="text-gray-cool text-[14px]">{dictionnaire.B2B.total} <span className="text-black font-mt-extra-bold text-[20px]">{prestation.prixttc} {dictionnaire.B2B.TTC}</span> </div>
                    <div className="text-gray-cool text-[14px] text-right mt-[-4px]">{prestation.prixht} {dictionnaire.B2B.HT}</div>
                </div>
            </div>        
            <div className="w-full h-[50px] bg-white border-2 border-gray rounded-[15px] text-left px-8 py-2">{prestation.description}</div>
        </div>
        <div>
           
        </div>
    </div>)

}

export default PrestationItem