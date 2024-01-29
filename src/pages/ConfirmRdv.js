import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { confirmRdv, getRdv } from "../services/rdv";
import { DateFormat } from "../components/dateUtils";
import { BG } from "../components/TailwindUtils";
import { url } from "../services/config";
import { LanguageContext } from "../data";

const ConfirmRdv = ()=>{
    
    const { dictionnaire } = useContext(LanguageContext);
    const {rdvId} = useParams();
    console.log('rdvId : ', rdvId)
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const success = queryParams.get('success');
    const [rdv,setRdv] = useState()

    useEffect(()=>{
        const fetchData = async ()=>{
            let res = await getRdv(rdvId)
            if(res.status == 200){
                if(success == "true"){
                    let confirm = await confirmRdv(rdvId);
                    if(confirm.status == 200){
                        setRdv(res.data)
                    }
                }
            }
        }
        fetchData()
    },[rdvId])
    const element = useMemo(() => {
        
        if(rdv && success == "true"){

            return <div className="relative w-full h-full flex p-4 flex flex-col ">
            <h1 className="text-[38px] font-mt-extra-bold mt-[44px]">{dictionnaire.RdvConfirm.Confirm} </h1>
            <h2 className="text-[20px] mt-[25px]">{dictionnaire.RdvConfirm.Reservation}</h2>
            <h2 className="text-[32px] mt-[52px]">{dictionnaire.RdvConfirm.Info}</h2>
            <div className="w-full h-fit mt-[39px] flex flex-row  center gap-20">
                <div className="w-fit flex flex-col px-8 ">
                    <div className="text-[20px] text-left"> <span className="font-mt-bold"> {dictionnaire.Compte.Nom} :</span> {rdv.CompteClient.lastname} </div>
                    <div className="text-[20px] text-left"> <span className="font-mt-bold"> {dictionnaire.Compte.Prenom} :</span> {rdv.CompteClient.firstname} </div>
                </div>
                <div className="w-fit flex flex-col px-8">
                    <div className="text-[20px] text-left"> <span className="font-mt-bold"> {dictionnaire.Compte.Email} :</span> {rdv.CompteClient.email} </div>
                    <div className="text-[20px] text-left"> <span className="font-mt-bold"> {dictionnaire.RdvConfirm.Genre} :</span> {rdv.CompteClient.sexe}</div>
                </div>
            </div>
            <h2 className="text-[24px] mt-[53px]">Vous avez rendez-vous le : </h2>
            <h1 className="text-[40px] font-mt-extra-bold">{DateFormat(rdv.DateDebut,true)}</h1>
            <div className="font-mt-demi text-[20px] mt-[10px]"> <span className="font-mt-extra-bold">{dictionnaire.RdvConfirm.Motif} :</span> {rdv.Type ? "Consultation de suivi avec votre expert":"Première consultation avec un expert."}</div>
            <div className="font-mt-demi text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.RdvConfirm.Expert} :</span> {rdv.CompteExpert.firstname} {rdv.CompteExpert.lastname}</div>
            <div className="w-full flex center"><div onClick={()=>{navigate("/MesRdv")}} className={`${BG("cyan","light-blue")} px-8 py-2 rounded-full text-[14px] xl:text-[18px] 3xl:text-[24px] text-center text-black font-mt-bold my-[30px] `} > Mon suivi</div></div>            
                
        </div>
        }else if(success == "false"){
            return <div className="relative w-full h-full flex p-4 flex flex-col center">
                <h1 className="text-[38px] font-mt-extra-bold mt-[44px]">{dictionnaire.RdvConfirm.RdvNotConfirm}</h1>
                <h2 className="text-[20px] mt-[25px] w-[80%]">{dictionnaire.RdvConfirm.error_payement} </h2>
                <h2 className="text-[20px] w-[80%]">{dictionnaire.RdvConfirm.check_payement}</h2>

                <form className="" action={`${url}/create-checkout-session/${rdvId}`} method="POST">
                    <button className={`${BG("cyan","light-blue")} px-8 py-2 rounded-full text-[14px] xl:text-[18px] 3xl:text-[24px] text-center text-black font-mt-demi my-[30px] `} > {dictionnaire.RdvConfirm.payement}</button>
                    
                </form>
                </div>
        }
        
    }, [rdvId,rdv])
    return <div className="">
    <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-row flex ">
            <div className="w-[30%] h-[800px] relative flex center">
                <img src={"/images/Diagnostic/diagnostic1.png"} alt={"visage21"} className="w-full h-full"/>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col center">
                    <p className="text-white text-[48px] font-mt-extra-bold">{dictionnaire.votre.toUpperCase()}</p> 
                    <p className="text-white text-[48px] font-mt-extra-bold">{dictionnaire.rdv.toUpperCase()}</p>
                </div>
            </div>
            <div className="w-[70%] h-[800px] p-[30px] ">
                <div className="bg-white rounded-3xl w-full h-full  flex flex-col">
                    {element}
                </div>
        
            </div>
        </div>

    </div>
</div>
}
export default ConfirmRdv;