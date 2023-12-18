import { useEffect, useMemo, useState } from "react";
import { useMatch, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getRdvOfExpert } from "../services/rdv";
import Carousel2 from './../components/Layout/Carousel2';

const MesRdv = ()=>{
    const [listRdvAvant,setListRdvAvant] = useState([]);
    const [listRdvApres,setListRdvApres] = useState([]);
    const [showRdv,setShowRdv] = useState(0)
    var weekday = new Array("Dimanche", "Lundi", "Mardi", "Mercredi",
    "Jeudi", "Vendredi", "Samedi");
    var months = new Array(
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        );
    const navigate = useNavigate();
    useEffect(() => {
      if(localStorage.length == 0){
        setTimeout(()=>{
            toast.info("Merci de vous connecter d'abord")
        },2000)
        navigate("/")
      }
      const fetchData = async ()=>{
        let res = await getRdvOfExpert(localStorage.getItem("userEmail"));
        if(res.status == 200){
            console.log('res.data : ', res.data)
            setListRdvAvant(res.data.filter(rdv => new Date(rdv.DateDebut) < new Date()).sort((a, b) => new Date(a.DateDebut).getTime() - new Date(b.DateDebut).getTime()));
            setListRdvApres(res.data.filter(rdv => new Date(rdv.DateDebut) >= new Date()).sort((a, b) => new Date(a.DateDebut).getTime() - new Date(b.DateDebut).getTime()));
        }
      }
      fetchData();
    }, [])
    function DateFormat(date,showMinutes){
        let local = new Date(date);
        return `${weekday[local.getDay()]} ${local.getDate()} ${months[local.getMonth()]} ${local.getFullYear()} ${showMinutes ? `à ${local.getHours()}h${local.getMinutes()<10?"0":""}${local.getMinutes()}`:""}`
    }
    function Heure(date){
        let local = new Date(date);
        return `${local.getHours()}h${local.getMinutes()<10?"0":""}${local.getMinutes()}`
    }
    function Recap(item){
        return <div className="flex flex-col w-[600px]"> 
            <div className="text-[22px] text-white bg-[#264C4D] py-4 px-8 rounded-t-2xl font-mt-bold">Récapitulatif de votre précédent rendez-vous</div>
            <div className="flex flex-col py-4 px-8 shadow rounded-b-2xl">
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-bold">Date :</span> {DateFormat(item.DateDebut,false)}</div>
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-bold">Heure :</span> {Heure(item.DateDebut,false)}</div>
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-bold">Expert :</span> {item.CompteExpert.firstname} {item.CompteExpert.lastname}</div>
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-bold">Motif :</span> {item.Type ? "Consultation de suivi avec votre expert":"Première consultation avec un expert."}</div>
                
            </div>
        </div> 
    }
    function NextRdv(item){
        return <div className="flex flex-col w-[600px]  "> 
            <div className="text-[22px] text-white bg-[#83C5BE] py-4 px-8 rounded-t-2xl font-mt-bold">Votre prochain rendez-vous</div>
            <div className="flex flex-col py-4 px-8 shadow rounded-b-2xl">
                <div className="text-left font-mt-bold text-[20px]"> {DateFormat(item.DateDebut,true)}</div>
                
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-bold">Motif :</span> {item.Type ? "Consultation de suivi avec votre expert":"Première consultation avec un expert."}</div>
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-bold">Expert :</span> {item.CompteExpert.firstname} {item.CompteExpert.lastname}</div>
                
            </div>
        </div> 
    }
    const Element = useMemo(()=>{
        
        console.log('listRdvAvant : ', listRdvAvant)
        return <div className="flex flex-col justify-left">
            {!!Object.keys(listRdvAvant).length && <Carousel2 props={{items:listRdvAvant.reverse().map(item=>{return Recap(item)}),nbShow:1,ratio:10,showPoint:false,start:Object.keys(listRdvAvant).length-1,setShow:setShowRdv}}/>}
            <div className="w-full h-full flex flex-col p-8">
            {!!Object.keys(listRdvAvant).length && <>
                {listRdvAvant[showRdv].Observation && <div className="text-[32px]  text-left font-mt-demi">Observations :</div>}
                <div className="text-[20px] text-left">{listRdvAvant[showRdv].Observation}</div></>
           }
            {!!Object.keys(listRdvApres).length && <>
            <div className="flex center mt-[30px]">{NextRdv(listRdvApres[0])}</div></>}
                </div>
        </div>
    },[listRdvAvant,listRdvApres,showRdv])
    return (
        <div className="">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full flex flex-row flex ">
                    <div className="w-[30%] h-[800px] relative flex center">
                        <img src={"/images/MesRdv.jpg"} alt={"MesRdv"} className="w-full h-full"/>
                        <div className="absolute top-0 left-0 w-full h-full flex center"><div className="text-[#EEE8E4] text-[48px] font-mt-bold">MON SUIVI</div></div>
        
                    </div>
                    <div className="w-[70%] h-[800px] p-[30px] ">
                        <div className="bg-white rounded-3xl w-full h-full  flex flex-col p-8">
                            
                            {Element}
                        </div>
                
                    </div>
                </div>

            </div>
        </div>
    )
}
export default MesRdv;