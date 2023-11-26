import react,{ useEffect,useState } from "react";
import { GetAllExperts, getRdvOfExpert } from "../services/rdv";

const PriseDeRdv = ()=>{
    const [experts,setExperts] = useState([]);
    const [listRdv,setListRdv] = useState([])
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
        date20.setDate(date20.getDate() + 20);
        if(Object.keys(experts).length){
            async function fetchData(email){
                let data = await getRdvOfExpert(email);
                if(data.status == 200){
                    if(Object.keys(data.data).length){
                        console.log('data.data : ', data.data)
                        data.data.map(rdv=>{
                            const dateRdv = new Date(rdv.DateDebut);
                            if(dateRdv >= new Date() && dateRdv <= date20){
                                listRdvLocal.push(rdv)
                               
                            }
                        })
                    }
                }
            }
            const promises = experts.map(expert=>fetchData(expert.email))
            Promise.all(promises).then(() => {
                setListRdv(listRdvLocal);
            });
            
        }
       
    }, [experts])
    useEffect(() => {

    console.log('listRdv : ', listRdv)
    }, [listRdv])
    
    
    return (
        <div className="">
            <div className="w-full h-[850px] flex flex-col">
                <div className="w-full h-[150px] bg-cyan drop-shadow-2">
                    <div className="text-[32px] font-mt-demi mt-[50px]">Prenez votre rendez-vous en ligne </div>
                    <div className="text-[20px] font-mt-demi">Renseignez les informations suivantes : </div>
                    
                </div>
                <div className="w-full h-[700px] flex flex-col">
                    <div className="w-1/3 h-full relative">
                        <img src={"/images/Compte/Compte1.jpg"} alt={"visage21"} className="w-full h-full"/>
                        {/* <div className="absolute top-0 left-0 w-full h-full flex center"><div className="text-white text-[48px] font-mt-bold">VOS DIAGNOSTICS</div></div> */}
                    </div>
                    <div className="w-2/3 h-full p-[30px]">
                        <div className="bg-white rounded-3xl w-full h-full flex flex-col ">

                        </div>
                
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PriseDeRdv;