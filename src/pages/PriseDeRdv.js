import react,{ useEffect,useState } from "react";
import { GetAllExperts, getRdvOfExpert } from "../services/rdv";
import { getDate, getTime, getDay } from "../components/dateUtils";
import { useMemo } from "react";
import {getGrid} from "../components/TailwindUtils"

const PriseDeRdv = ()=>{
    const [experts,setExperts] = useState([]);
    const [listRdv,setListRdv] = useState([]);
    const [listRdvLibre, setListRdvLibre] = useState([]);
    const [newRdv,setNewRdv] = useState({
        DateDebut:"",
        Confirmation:"",
        Type:"",
        CompteClient:"",
        CompteExpert:""
    });
    const [global,setGlobal] = useState(1);
    const [selectDate,setSelectDate] = useState("")
    const [month,setMonth] = useState(new Date().getMonth()+1);
    const dateplus = 30;
    
    useEffect(() => {
        async function fetchData(){
            let data = await GetAllExperts();
            setExperts(data.data.users)
          }
          fetchData()
    }, [])
    useEffect(() => {
        let listRdvLocal = []
        const date20 = new Date();
        const currentDate = new Date();
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        date20.setDate(date20.getDate() + dateplus);
        if(Object.keys(experts).length){
            async function fetchData(email){
                let data = await getRdvOfExpert(email);
                if(data.status == 200){
                    if(Object.keys(data.data).length){
                        data.data.map(rdv=>{
                            const dateRdv = new Date(rdv.DateDebut);
                            console.log('dateRdv : ', dateRdv)
                            console.log('firstDay : ', firstDay)
                            console.log('lastDay : ', lastDay)
                            console.log('dateRdv : ', dateRdv >= firstDay, dateRdv <= lastDay)
                            if(dateRdv >= firstDay && dateRdv <= lastDay){
                                console.log("push")
                                listRdvLocal.push(rdv)
                               
                            }
                        })
                    }
                }
            }
            const promises = experts.map(expert=>fetchData(expert.email))
            console.log('experts : ', experts)
            Promise.all(promises).then(() => {
                console.log('listRdvLocal : ', listRdvLocal)
                setListRdv(listRdvLocal);
            });
            
        }
       
    }, [experts])
    useEffect(() => {
        let listRdvAll = []
        const currentDate = new Date();
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        for(let i=0;i<lastDay.getDate();i++){
            let datei = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            datei.setDate(datei.getDate()+i)
            
            if(datei.getDay() != 0 && datei.getDay() != 6){
                         
            listRdvAll[getDate(datei)] = new Array();
            for(let j=10;j<=18;j++){
                if(j!=12){
                    for(let k = 0;k<3;k++){
                            listRdvAll[getDate(datei)][`${j>9?j:`0${j}`}h${k*2}0`] = new Array()
                            let rdv = listRdv.filter(rdv =>{
                                return getDate(new Date(rdv.DateDebut)) == getDate(datei) && getTime(new Date(rdv.DateDebut)) == `${j>9?j:`0${j}`}h00`
                            })
                            let expert = experts.filter(expert=>{
                                let cond = true;
                                rdv.map(rdvvar=>{
                                    if(rdvvar.CompteExpert._id == expert._id){
                                        cond = false;
                                    }
                                })
                                return cond;
                            })
                            
                            listRdvAll[getDate(datei)][`${j>9?j:`0${j}`}h${k*2}0`] = expert;
                           
                        }
                    }
                }
            }
        }
        
        // listRdvAll['11/30']['13h00'] = []
        console.log('listRdvAll : ', listRdvAll)
        setListRdvLibre(listRdvAll)
    }, [listRdv])
    const element = useMemo(() => {
        if(Object.keys(listRdvLibre).length){
            // console.log('listRdvLibre : ', listRdvLibre)
            let whitediv = []
            
            // for(let i = 0;i<new Date(Object.entries(listRdvLibre[0][0])).getDay()-2;i++){
            //     whitediv.push(<div></div>)
            // }
            switch(global){
                case 0:
                    return <div className="relative w-full h-full flex p-4 flex flex-col gap-8">
                        <div className="absolute top-3 left-3 ">
                         <div className="bg-cyan rounded-full text-[24px] text-center text-black font-mt-demi"><img src={"/images/fleche.png"} alt={"fleche"} className={"scale-[-0.75]"}/></div>
                       
                        </div>
                        <div className="w-full text-[28px] text-center font-mt-bold mt-[10px]"> Choisissiez votre motif de consultation</div>
                        <div className="w-full flex center">
                            <div className="bg-blue px-10 py-6 rounded-full text-[24px] w-[600px] text-center text-white font-mt-demi hover:cursor-pointer" onClick={()=>{setNewRdv({...newRdv,Type:true})}}> Consultation de suivi avec votre expert</div>
                        </div>
                        <div className="w-full flex center">
                            <div className="bg-blue px-10 py-6 rounded-full text-[24px] w-[600px] text-center text-white font-mt-demi hover:cursor-pointer" onClick={()=>{setNewRdv({...newRdv,Type:false})}}> Première consultation avec un expert</div>
                        </div>
                        <div className="w-full flex center">
                            <div className="bg-cyan px-8 py-2 rounded-full text-[24px] text-center text-black font-mt-demi mt-[30px] hover:cursor-pointer" onClick={()=>{setGlobal(global+1)}}> Suivant</div>
                        </div>
                    </div>  
                case 1:
                    return <div className="relative w-full h-full flex p-4 flex flex-col gap-8">
                        <div className="absolute top-3 left-3 ">
                         <div className="bg-cyan rounded-full text-[24px] text-center text-black font-mt-demi hover:cursor-pointer" onClick={()=>{setGlobal(global-1)}}><img src={"/images/fleche.png"} alt={"fleche"} className={"scale-[-0.75]"}/></div>
                       
                        </div>
                        <div className="w-full text-[28px] text-center font-mt-bold mt-[10px]"> Choisissiez la date</div>
                        <div className="w-full h-fit grid grid-cols-5 center gap-4">
                            {whitediv.map(item=>{return item})}
                            {selectDate != "" && Object.entries(listRdvLibre).map((posrdv,rdv)=>{
                                if(posrdv[0] == selectDate){
                                    return <div className={`w-full h-fit ${getGrid(parseInt(((rdv+new Date().getDay()-1)/5)+1)*2+1,false)} col-span-5 grid grid-cols-8 gap-4`}>
                                        {Object.entries(posrdv[1]).map((poshours,pos2)=>{
                                            return <div className={`w-full h-fit ${Object.keys(poshours[1]).length ? "bg-green":"bg-red"} px-2 py-2 rounded-full text-[20px] text-center text-white font-mt-demi hover:cursor-pointer flex flex-col`} key={rdv} ><div>{getTime(new Date(2000,1,1,poshours[0].split("h")[0],poshours[0].split("h")[1]))}</div><div className="text-[14px]">{!Object.keys(poshours[1]).length ? "0 expert":`${Object.keys(poshours[1]).length} experts`}</div></div>
                            
                                        })}
                                    </div>
                                }
                            })}
                            {Object.entries(listRdvLibre).map((posrdv,rdv)=>{
                                let nbCreneau = 0;
                                Object.entries(posrdv[1]).map((posrdv2)=>{
                                    Object.entries(posrdv2[1]).map(()=>{nbCreneau++})
                                })
                                
                                
                                return <div className={`w-full h-fit ${getGrid(parseInt(((rdv+new Date().getDay()-1)/5)+1)*2,false)} ${getGrid(parseInt((rdv+new Date().getDay()-1)%5+1),true)} bg-blue px-4 py-4 rounded-full text-[24px] text-center text-white font-mt-demi hover:cursor-pointer flex flex-col`} key={rdv} onClick={()=>{setSelectDate(selectDate == posrdv[0] ? "":posrdv[0])}} ><div>{getDay(new Date(posrdv).getDay())} {posrdv}</div></div>
                            })}
                        </div>
                        
                        <div className="w-full flex center">
                            <div className="bg-cyan px-8 py-2 rounded-full text-[24px] text-center text-black font-mt-demi my-[30px] "> Suivant</div>
                        </div>
                    </div>  
            }
        }
        
    }, [global,listRdvLibre,selectDate])
    useEffect(() => {
        // console.log('selectDate : ', selectDate)
    }, [selectDate])
    
    return (
        <div className="">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-[150px] bg-cyan drop-shadow-2">
                    <div className="text-[32px] font-mt-demi mt-[50px]">Prenez votre rendez-vous en ligne </div>
                    <div className="text-[20px] font-mt-demi">Renseignez les informations suivantes : </div>
                    
                </div>
                <div className="w-full h-full flex flex-row">
                    <div className="w-1/3 h-full relative">
                        <img src={"/images/Compte/Compte1.jpg"} alt={"visage21"} className="w-full h-full"/>
                    </div>
                    <div className="w-full h-full p-[30px] ">
                        <div className="bg-white rounded-3xl w-full h-full  flex flex-col overflow-hidden hover:overflow-auto">
                            {element}
                        </div>
                
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PriseDeRdv;