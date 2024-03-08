import react,{ useContext, useEffect,useState } from "react";
import { CreateRdv, GetAllExperts, getRdvOfExpert } from "../services/rdv";
import { getDate, getTime, getShowDate } from "../components/dateUtils";
import { useMemo } from "react";
import {BG, getBorder, getGrid} from "../components/TailwindUtils"
import { getBG } from './../components/TailwindUtils';
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import MoreInfo from "./MoreInfo";
import { url } from "../services/config";
import { useCookies } from "react-cookie";
import { LanguageContext } from '../languages/index';

const PriseDeRdv = ()=>{
    const { dictionnaire } = useContext(LanguageContext);
    const [experts,setExperts] = useState([]);
    const [listRdv,setListRdv] = useState([]);
    const [listRdvLibre, setListRdvLibre] = useState([]);
    const [suiviRdv,setSuiviRdv] = useState([]);
    const [suiviRdvLibre,setSuiviRdvLibre] = useState([]);
    const [cookies, setCookies] = useCookies(["user"]);
    const [newRdv,setNewRdv] = useState({
        DateDebut:"",
        Confirmation:false,
        Type:"null",
        CompteClient:typeof cookies.user === "object" ? cookies.user.email : "",
        CompteExpert:"",
        listExpert:""
    });
    const [global,setGlobal] = useState(0);
    const [selectDate,setSelectDate] = useState("")
    const [month,setMonth] = useState(new Date(new Date().getFullYear(),new Date().getMonth()-1,new Date().getDate()));
    const [rdvId,setRdvId] = useState("")
    const firstDay = useMemo(()=>{return new Date(month.getFullYear(), month.getMonth()+1, 1)   },[month])
    const lastDay = useMemo(()=>{return new Date(month.getFullYear(), month.getMonth()+2, 0)},[month])
    const dateplus = useMemo(()=>{return lastDay.getDate()},[month])

    var weekday = new Array(dictionnaire.Week.sunday, dictionnaire.Week.monday, dictionnaire.Week.tuesday, dictionnaire.Week.wednesday,
                    dictionnaire.Week.friday, dictionnaire.Week.friday, dictionnaire.Week.saturday);
    var months = new Array(dictionnaire.Month.january,dictionnaire.Month.february,dictionnaire.Month.march,
        dictionnaire.Month.april,dictionnaire.Month.may,dictionnaire.Month.june,dictionnaire.Month.july,
        dictionnaire.Month.august,dictionnaire.Month.september,dictionnaire.Month.october,dictionnaire.Month.november,dictionnaire.Month.december
        );
    const navigate = useNavigate();
    useEffect(() => {
      if(typeof cookies.user != "object"){
        setTimeout(()=>{
            toast.info(dictionnaire.Toast.first_login);
        },2000)
        navigate("/")
      }
    }, [])
    useEffect(() => {
        async function fetchData(){
            let data = await GetAllExperts();
            setExperts(data.data.users)
          }
          fetchData()
    }, [])
    function consoleRdv(list){
        list.map(item=>{console.log({DateDebut:item.DateDebut,expert:item.CompteExpert.email})})
        
        
    }
    useEffect(() => {
        let listRdvLocal = [];
        let listRdvExpert = [];
        const date20 = new Date();
       

        date20.setDate(date20.getDate() + dateplus);
        if(Object.keys(experts).length){
            async function fetchData(email){
                let data = await getRdvOfExpert(email);
                
                if(data.status === 200){
                    if(Object.keys(data.data).length){
                        data.data.map(rdv=>{
                            const dateRdv = new Date(rdv.DateDebut);
                            if(dateRdv >= firstDay && dateRdv <= lastDay){
                                listRdvLocal.push(rdv)
                               
                            }
                        })
                    }
                }
            }
            async function fetchCompte(){
                let rdvClient = await getRdvOfExpert(typeof cookies.user === "object"  ? cookies.user.email : null);
                if(rdvClient.status === 200 && Object.keys(rdvClient.data).length){
                    let rdvExpert = await getRdvOfExpert(rdvClient.data[0].CompteExpert.email);
                    if(rdvExpert.status === 200){
                        setSuiviRdv(rdvExpert.data.map(item=>{return {DateDebut:item.DateDebut,expert:item.CompteExpert.email}}));
                    }
                    
            }
            }
            fetchCompte();
            const promises = experts.map(expert=>fetchData(expert.email))
            // console.log('experts : ', experts)
            Promise.all(promises).then(() => {
                setListRdv(listRdvLocal)
            });
            
        }
       
    }, [experts,firstDay])
    useEffect(() => {
        let listRdvAll = []
        let suiviRdvAll = []
        const currentDate = new Date(firstDay.getTime());
        console.log('currentDate : ', currentDate)
        for(let i=0;i<lastDay.getDate();i++){
            let datei = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            datei.setDate(datei.getDate()+i)
             
            if(datei.getDay() !== 0 && datei.getDay() !== 6){
            suiviRdvAll[getDate(datei)] = new Array();        
            listRdvAll[getDate(datei)] = new Array();
            for(let j=9;j<=16;j++){
                if(j!==11){
                    for(let k = 0;k<3;k++){
                            let rdv = listRdv.filter(rdv =>{
                                datei.setHours(j+1);
                                datei.setMinutes(k*20);
                                let datedebut = new Date(rdv.DateDebut);
                                datedebut.setHours(datedebut.getHours()-1)
                                return datedebut.getTime() === datei.getTime()
                            })
                            let expert = experts.filter(expert=>{
                                let cond = true;
                                rdv.map(rdvvar=>{
                                    if(rdvvar.CompteExpert._id === expert._id){
                                        cond = false;
                                    }
                                })
                                return cond;
                            })
                            // console.log('expert : ',`${j>9?j:`0${j}`}h${k*2}0`, expert)
                            if (Object.keys(expert).length){                                
                                // listRdvAll[getDate(datei)][`${j>9?j+1:`0${j+1}`}h${k*2}0`] = new Array()
                                listRdvAll[getDate(datei)][`${j>8?j+1:`0${j+1}`}h${k*2}0`] = expert;
                           
                            }
                            if(Object.keys(suiviRdv).length){
                                let filter = suiviRdv.filter(item=>new Date(item.DateDebut).getTime() === new Date(`${getDate(datei)}T${j>8?j+1:`0${j+1}`}:${k*2}0:00`).getTime())
                                if(!Object.keys(filter).length){
                                    suiviRdvAll[getDate(datei)][`${j>8?j+1:`0${j+1}`}h${k*2}0`] = [suiviRdv[0].expert] ;
                                }
                            }
                        }
                    }
                }
            }
        }
        
        // listRdvAll['11/30']['13h00'] = []
        // console.log('listRdvAll : ', listRdvAll)
        
        setSuiviRdvLibre(suiviRdvAll);
        setListRdvLibre(listRdvAll);
    }, [listRdv,month,suiviRdv])
    function NextMonth(){
        const newMonth = new Date(month);
        newMonth.setMonth(newMonth.getMonth() + 1);
        if (newMonth.getMonth() === 10) {
            newMonth.setFullYear(newMonth.getFullYear() + 1);
        }
        setMonth(newMonth);
    }
    function PreviousMonth(){
        const newMonth = new Date(month);
        newMonth.setMonth(newMonth.getMonth() - 1);
        if (newMonth.getMonth() === 11) {
            newMonth.setFullYear(newMonth.getFullYear() - 1);
        }
        setMonth(newMonth);    
    }
    // useEffect(() => {
    //   console.log('newRdv : ', newRdv)
    // }, [newRdv])
    async function CreateNewRdv(){
        const res = await CreateRdv({
            DateDebut:newRdv.DateDebut,
            Confirmation:false,
            Type:newRdv.Type,
            CompteClient: typeof cookies.user === "object"  ? cookies.user.email : null,
            CompteExpert:newRdv.CompteExpert})
        if(res.status === 200){
            toast.success(dictionnaire.Toast.created_rdv);
            setRdvId(res.data.summary.id);
            if(newRdv.Type == true){
                setGlobal(global + 2);
            }else{
                setGlobal(global+1)
            }
            }
    }
    const element = useMemo(() => {
        
        let selected = "bg-light-blue border-4 border-light-blue hover:border-blue";
        let unselected = "bg-blue border-4 border-blue hover:border-light-blue";
        if(Object.keys(listRdvLibre).length){

            
            switch(global){
                case 0:
                    return <div className="relative w-full h-full flex p-4 flex flex-col gap-8">
                        <div className="w-full text-[28px] text-center font-mt-extra-bold mt-[10px]">{dictionnaire.Rdv.motif}</div>
                        <div className="w-full flex center">
                            <div className={`${newRdv.Type === true ? BG("light-blue","blue") : BG("blue","light-blue")}  px-10 py-3 rounded-full text-[24px] w-[600px] text-center text-white font-mt-demi hover:cursor-pointer `} onClick={()=>{setNewRdv({...newRdv,Type:true})}}> {dictionnaire.Rdv.suivi}</div>
                        </div>
                        <div className="w-full flex center">
                            <div className={`${newRdv.Type === false ? BG("light-blue","blue") : BG("blue","light-blue")}  px-10 py-3 rounded-full text-[24px] w-[600px] text-center text-white font-mt-demi hover:cursor-pointer  `} onClick={()=>{setNewRdv({...newRdv,Type:false})}}>{dictionnaire.Rdv.first_suivi}</div>
                        </div>
                        <div className="w-full flex center">
                            <div className= {`${BG("cyan","light-blue")} border-cyan px-8 py-2 rounded-full text-[24px] text-center text-black font-mt-demi mt-[30px] hover:cursor-pointer`} onClick={()=>{newRdv.Type === "null" ? toast.info(dictionnaire.Toast.selected_motif):setGlobal(newRdv.Type ? global+2:global+1)}}> {dictionnaire.next}</div>
                        </div>
                    </div>  
                case 1:
                    
                    return <MoreInfo back={()=>{setGlobal(global - 1)}} next={()=>{setGlobal(global + 1)}}/>
                case 2:
                    let incrementx = firstDay.getDay()-1;
                    if(incrementx === -1){incrementx++;}
                    let incrementy = 1;
                    let incrementx2 = firstDay.getDay()-1;
                    if(incrementx2 === -1){incrementx2++;}
                    
                    let incrementy2 = 1;
                    let datebefore = [];
                    if(incrementx2>=1){
                        for(let i = 1;i<=incrementx2;i++){
                            let date = new Date(firstDay.getTime());
                            date.setDate(date.getDate()-i)
                            datebefore.push({date,i:5-i})
                        }
                    }
                    let last = lastDay.getDay();
                    if(last === -1){last++;}
                    let dateafter = [];
                    if(last <= 5 && last >= 1){
          
                        for(let i = 1;i<=5-last;i++){
                            let date = new Date(lastDay.getTime());
                            date.setDate(date.getDate()+i)
                            dateafter.push({date,i:i+last})
                        }
                    }
                    datebefore.reverse();
                    
                    return <div className="relative w-full h-full flex p-4 flex flex-col gap-6">
                        <div className="absolute top-3 left-3 ">
                         <div className={`${BG("cyan","light-blue")} w-[50px] h-[50px] rounded-full text-[24px] text-center text-black font-mt-demi hover:cursor-pointer`} onClick={()=>{setGlobal(newRdv.Type === true ? global-2: global-1)}}><img src={"/images/fleche.png"} alt={"fleche"} className={"scale-[-0.75] w-fit h-fit"}/></div>
                       
                        </div>
  
                        <div className="w-full text-[28px] text-center font-mt-extra-bold mt-[10px]" key={"title"}> {dictionnaire.Rdv.date}</div>
                        <div className="w-full h-fit flex flex-row">
                            <div className="w-1/3 flex ">
                                <div className={`${BG("cyan","light-blue")} px-8 py-1 rounded-full text-[24px] text-center text-black font-mt-demi `} onClick={()=>{PreviousMonth()}} key={"backmonth"}> {dictionnaire.Rdv.mois_precedent}</div>
                            </div>
                            <div className="w-1/3 flex ">
                                <div className="w-full text-[28px] text-center text-black font-mt-extra-bold " > {months[firstDay.getMonth()]}</div>
                            </div>
                            <div className="w-1/3 flex justify-end">
                                <div className={`${BG("cyan","light-blue")} px-8 py-1 rounded-full text-[24px] text-center text-black font-mt-demi `} onClick={()=>{NextMonth()}} key={"nextmonth"}> {dictionnaire.Rdv.mois_suivant}</div>
                            </div>
                        </div>
                        <div className="h-[450px] overflow-hidden hover:overflow-auto">
                            <div className="w-full h-fit grid grid-cols-5 center gap-2 ">
                            {datebefore && datebefore.map((item,pos)=>{
                                return <div key={`datebefore-${pos}`} className={`w-full h-fit bg-gray px-4 py-2 rounded-full text-[14px] xl:text-[18px] 3xl:text-[24px] text-center text-white font-mt-demi hover:cursor-pointer flex flex-col`} ><div>{weekday[item.i-1]} {getShowDate(item.date)}</div></div>
                            })}
                            {selectDate !== "" && (newRdv.Type === false ? Object.entries(listRdvLibre) : Object.entries(suiviRdvLibre)).map((posrdv,rdv)=>{
                                incrementx++;
                                if(incrementx === 6){
                                    incrementx = 1;
                                    incrementy += 2;
                                }

                                if(posrdv[0] === selectDate){
                                    return <div className={`w-full h-fit ${incrementy} ${getGrid(incrementy+1,false)} col-span-5 grid grid-cols-8 gap-4`}>
                                        {Object.entries(posrdv[1]).map((poshours,pos2)=>{
                                            let today = new Date().getTime();
                                            let date = `${posrdv[0]}T${poshours[0].split("h")[0]}:${poshours[0].split("h")[1]}:00`
                                            
                                            if(today < new Date(date).getTime()){

                                                return <div onClick={()=> {
                                                    newRdv.Type === true ? setNewRdv({...newRdv,DateDebut:new Date(date),CompteExpert:poshours[1][0],listExpert:poshours[1]}):setNewRdv({...newRdv,DateDebut:new Date(date),listExpert:poshours[1]})
                                                }} key={`hours-${poshours}`} className={`w-full h-fit ${newRdv.DateDebut !== "" && newRdv.DateDebut.getTime() === new Date(date).getTime() ?  BG("light-blue","blue") : newRdv.Type === true ? BG("green","blue") : Object.keys(poshours[1]).length ? Object.keys(poshours[1]).length === Object.keys(experts).length ?  BG("green","blue") :  BG("vivid_tangerine","blue") :"bg-red"} px-2 py-2 rounded-full text-[20px] text-center text-white font-mt-demi hover:cursor-pointer flex flex-col`} ><div>{getTime(new Date(2000,1,1,poshours[0].split("h")[0],poshours[0].split("h")[1]))}</div><div className="text-[14px]">{newRdv.Type === true ? "":`${Object.keys(poshours[1]).length} experts`}</div></div>
                                
                                            }
                                        })}
                                    </div>
                                }
                            })}
                            {(newRdv.Type === false ? Object.entries(listRdvLibre) : Object.entries(suiviRdvLibre)).map((rdv,pos)=>{
                                
                                let nbCreneau = 0;
                                Object.entries(rdv[1]).map((posrdv2)=>{
                                    Object.entries(posrdv2[1]).map(()=>{nbCreneau++})
                                })
                                incrementx2++;
                                if(incrementx2 === 6){
                                    incrementx2 = 1;
                                    incrementy2 += 2;
                                }
                                let today = new Date();
                                today.setDate(today.getDate() -1);
                                // console.log('new Date(rdv[0]).getTime() < today.getTime() : ', rdv[0],new Date(rdv[0]).getTime() < today.getTime())
                               return <div key={`rdv-${rdv}`} className={`w-full h-fit ${getGrid(incrementy2,false)} ${getGrid(incrementx2,true)} ${new Date(rdv[0]).getTime() < today.getTime() ? "bg-gray" :selectDate !== "" && selectDate === rdv[0] ? BG("light-blue","blue") :BG("blue","light-blue") }  px-4 py-2 rounded-full text-[14px] xl:text-[18px] 3xl:text-[24px] text-center text-white font-mt-demi hover:cursor-pointer flex flex-col`}  onClick={()=>{setSelectDate(selectDate === rdv[0] ? "":rdv[0])}} ><div>{weekday[incrementx2]} {getShowDate(rdv)}</div></div>
                            })}
                            {dateafter && dateafter.map((item,pos)=>{
                                return <div key={`datebefore-${pos}`} className={`w-full h-fit ${getGrid(incrementy2,false)}  bg-gray px-4 py-2 rounded-full text-[14px] xl:text-[18px] 3xl:text-[24px] text-center text-white font-mt-demi hover:cursor-pointer flex flex-col`} ><div>{weekday[item.i]} {getShowDate(item.date)}</div></div>
                            })}
                        </div>
                        </div>
                        
                        
                        <div className="w-full h-[60px] flex center">
                            <div className={`${BG("cyan","light-blue")} px-8 py-2 rounded-full text-[14px] xl:text-[18px] 3xl:text-[24px] text-center text-black font-mt-demi my-[30px] `} onClick={()=>{selectDate === "" ? toast.info(dictionnaire.Toast.selected_date): newRdv.DateDebut === "" ? toast.info(dictionnaire.Toast.selected_rdv)  :  newRdv.Type === true ? CreateNewRdv():setGlobal(global+1)}}>{dictionnaire.next}</div>
                        </div>
                    </div>  
            case 3:
                return <div className="relative w-full h-full flex p-4 flex flex-col gap-8">
                        <div className="absolute top-3 left-3 ">
                         <div className={`${BG("cyan","light-blue")} w-[50px] h-[50px] rounded-full text-[24px] text-center text-black font-mt-demi hover:cursor-pointer`} onClick={()=>{setGlobal(global-1)}}><img src={"/images/fleche.png"} alt={"fleche"} className={"scale-[-0.75] w-fit h-fit"}/></div>
                       
                        </div>
                        <div className="w-full text-[28px] text-center font-mt-extra-bold mt-[10px]"> {dictionnaire.Rdv.choose_expert}</div>
                        <div className="w-full grid grid-cols-3 place-content-start">
                            {newRdv.listExpert.map(expert=>{
                                return <div className="w-full flex center">
                                        <div className={`p-4 w-fit ${newRdv.CompteExpert !== "" && newRdv.CompteExpert === expert.email ? BG("light-blue","blue"):BG("white_coffee","blue")} flex flex-col rounded-3xl`} onClick={()=>{setNewRdv({...newRdv,CompteExpert:expert.email})}}>
                                        <div><img src={expert.imageBase64} alt={`${expert.firstname}-${expert.lastname}-image`} className={`${newRdv.CompteExpert !== "" && newRdv.CompteExpert === expert.email ? "bg-light-blue":"bg-white_coffee"} rounded-lg`}/></div>
                                        <div className="pt-4 text-[16px] text-center font-mt-demi">{`${expert.firstname} ${expert.lastname}`}</div>
                                    </div>
                                </div>
                            })}
                            
                        </div>
                        <div className="w-full h-[60px] flex center">
                            <div className={`${BG("cyan","light-blue")} px-8 py-2 rounded-full text-[14px] 3xl:text-[20px] text-center text-black font-mt-demi my-[30px] `} onClick={()=>{newRdv.CompteExpert === "" ? toast.info(dictionnaire.Toast.selected_expert):CreateNewRdv()}}> Suivant</div>
                        </div>
                    </div>  
            case 4:
                return <div className="relative w-full h-full flex p-4 flex flex-col center">
                        <h1 className="text-[38px] font-mt-extra-bold mb-[30px]">{dictionnaire.Rdv.confirm1} </h1>
                        <h2 className="text-[20px] w-[50%]">{dictionnaire.Rdv.confirm2}</h2>

                        <h2 className="text-[20px] w-[50%] text-justify">{dictionnaire.Rdv.confirm3}  </h2>    
                        <form className="" action={`${url}/create-checkout-session/${rdvId}`} method="POST">
                            <button className={`${BG("cyan","light-blue")} px-4 py-2 rounded-full text-[14px]  3xl:text-[20px] text-center text-black font-mt-demi my-[30px] `} >{dictionnaire.RdvConfirm.payement}</button>
                            
                        </form>
                </div>
                
            }
        }
        
    }, [global,listRdvLibre,suiviRdvLibre,selectDate,firstDay,newRdv,rdvId,dictionnaire])
    useEffect(() => {
        // console.log('selectDate : ', selectDate)
    }, [selectDate])
    
    return (
        <div className="">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full flex flex-row flex ">
                    <div className="w-[25%] h-[800px] relative flex center">
                        <img src={"/images/Diagnostic/diagnostic1.png"} alt={"visage21"} className="w-full h-full"/>
                        <div className="absolute top-0 left-0 w-full h-full flex center"><div className="text-white text-[48px] font-mt-extra-bold">{dictionnaire.Rdv.rdv.toUpperCase()}</div></div>
                    </div>
                    <div className="w-[75%] h-[800px] p-[30px] ">
                        <div className="bg-white rounded-3xl w-full h-full  flex flex-col">
                            {element}
                        </div>
                
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PriseDeRdv;