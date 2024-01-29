import { useEffect, useMemo, useState } from "react";
import { useMatch, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getRdvOfExpert } from "../services/rdv";
import Carousel2 from './../components/Layout/Carousel2';
import { DateFormat, Heure } from "../components/dateUtils";
import { useCookies } from "react-cookie";
import { dictionnaire } from "../data";

const MesRdv = ()=>{
    const [listRdvAvant,setListRdvAvant] = useState([]);
    const [listRdvApres,setListRdvApres] = useState([]);
    const [showRdv,setShowRdv] = useState(0)

    const [cookies, setCookies] = useCookies(["user"]);
    const navigate = useNavigate();
    useEffect(() => {
      if(typeof cookies.user !== "object" ){
        setTimeout(()=>{
            toast.info("Merci de vous connecter d'abord")
        },2000)
        navigate("/")
      }
      const fetchData = async ()=>{
        let res = await getRdvOfExpert(typeof cookies.user === "object"  ? cookies.user.email : null);
        if(res.status == 200){
            setListRdvAvant(res.data.filter(rdv => new Date(rdv.DateDebut) < new Date()).sort((a, b) => new Date(a.DateDebut).getTime() - new Date(b.DateDebut).getTime()));
            setListRdvApres(res.data.filter(rdv => new Date(rdv.DateDebut) >= new Date()).sort((a, b) => new Date(a.DateDebut).getTime() - new Date(b.DateDebut).getTime()));
        }
      }
      fetchData();
    }, [])
    
    function Recap(item){
        return <div className="flex flex-col w-full" key={`${item.DateDebut}`}> 
            <div className="text-[22px] text-white bg-[#264C4D] py-4 px-8 rounded-t-2xl font-mt-extra-bold">{dictionnaire.Rdv.recap}</div>
            <div className="flex flex-col py-4 px-8 shadow rounded-b-2xl">
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.date} :</span> {DateFormat(item.DateDebut,false)}</div>
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.heure} :</span> {Heure(item.DateDebut,false)}</div>
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.expert} :</span> {item.CompteExpert.firstname} {item.CompteExpert.lastname}</div>
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.motif} :</span> {item.Type ? dictionnaire.Rdv.suivi:dictionnaire.Rdv.first_suivi}</div>
                
            </div>
        </div> 
    }
    function NextRdv(item){
        return <div className="flex flex-col w-full  "> 
            <div className="text-[22px] text-white bg-[#83C5BE] py-4 px-8 rounded-t-2xl font-mt-extra-bold">{dictionnaire.Rdv.recap}</div>
            <div className="flex flex-col py-4 px-8 shadow rounded-b-2xl">
                <div className="text-left font-mt-extra-bold text-[20px]"> {DateFormat(item.DateDebut,true)}</div>
                
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.motif} :</span> {item.Type ? dictionnaire.Rdv.suivi:dictionnaire.Rdv.first_suivi}</div>
                <div className="text-left font-mt-demi text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.expert} :</span> {item.CompteExpert.firstname} {item.CompteExpert.lastname}</div>
                
            </div>
        </div> 
    }
    const Element = useMemo(()=>{
        
        return <div className="flex flex-col justify-left">
            {!!Object.keys(listRdvAvant).length && <Carousel2 props={{items:listRdvAvant.reverse().map(item=>{return Recap(item)}),nbShow:1,ratio:10,showPoint:false,start:Object.keys(listRdvAvant).length-1,setShow:setShowRdv}}/>}
            <div className="w-[80%] h-[180px] overflow-hidden hover:overflow-auto flex flex-col mt-[30px] mx-[10%]">
            {!!Object.keys(listRdvAvant).length && <>
                {listRdvAvant[showRdv].Observation && <div className="text-[32px] mt-[20px] text-left font-mt-demi">{dictionnaire.observations} :</div>}
                <div className="text-[20px] text-justify ">{listRdvAvant[showRdv].Observation}</div></>
           }
            </div>
            {!!Object.keys(listRdvApres).length && <>
            <div className="flex center mt-[40px] mx-[10%]">{NextRdv(listRdvApres[0])}</div></>}
        </div>
    },[listRdvAvant,listRdvApres,showRdv])
    return (
        <div className="">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full flex flex-row flex ">
                    <div className="w-[30%] h-[800px] relative flex center">
                        <img src={"/images/MesRdv.jpg"} alt={"MesRdv"} className="w-full h-full"/>
                        <div className="absolute top-0 left-0 w-full h-full flex center"><div className="text-black text-[48px] font-mt-extra-bold">{dictionnaire.Rdv.mon_suivi}</div></div>
        
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