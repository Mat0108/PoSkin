import { useContext, useMemo, useState } from "react";
import { getW } from "../components/TailwindUtils";
import { toast } from "react-toastify";
import { saveDiagnostic } from "../services/Diagnostic";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { LanguageContext } from "../languages";
import { Diagnostic } from "../constants/Diagnostic";
import { secret } from "parse";
const DiagnosticStart = (props)=>{
    const DiagnosticData = Diagnostic();
    const { dictionnaire, userLanguage } = useContext(LanguageContext);
    const [cookies] = useCookies(["user"]);
    const [selected,setSelected] = useState(DiagnosticData.map(()=>{return []}))
    const [i,setI] = useState(0);
    const [mail, setMail] = useState("")
    const navigate = useNavigate();
    const isMobile = window.screen.width < 600
    let total=[]
    DiagnosticData.map((item,pos)=>{
        if(total[item.section]){
            total[item.section] = total[item.section]+1
        }else{
            total[item.section] = 1    
        }   
        })
    function UpdateArray(pos){
        if(DiagnosticData[i].type === "multi"){
            if(selected[i].includes(pos)){
                selected[i] = selected[i].filter(function(e) { return e !== pos })
            }else{
                selected[i].push(pos)
            }
            
        }else{
            if(selected[i].length !== 0){
                selected[i] = []
            }else{
                selected[i] = [pos]
            }
        }
        setSelected(selected => [...selected]);
    }
    function Button(text,pos,data){
        return <div  key={`diagnostic-${pos}`} className={`flex center ${(selected[i].includes(pos)) ? "border-cyan hover:bg-cyan  ":" " } border-[4px] px-[16px] py-[8px] bg-white_smoke text-blue hover:bg-blue  hover:text-white_smoke text-[14px] sm:text-[20px] border-2 border-[#264C4D]  ${data.rounded !== "" ? data.rounded : isMobile ? "rounded-lg":"rounded-2xl"}`} onClick={()=>{UpdateArray(pos)}}>
                <div>{text}</div>
            </div>
    }
    function valider(){
        if(i < DiagnosticData.length-1){
            if(Object.keys(selected[i]).length){
                setI(i+1)
            }else{
                toast.info(dictionnaire.Toast.required_answer);
            }
        }
        
    }
    async function Envoyer(){
        let response = await saveDiagnostic({question1:selected[0],question2:selected[1],question3:selected[2],question4:selected[3],question5:selected[4],mail:typeof cookies.user === "object" ? cookies.user.email :mail,selected:selected,language:userLanguage})
        if(response.status === 200){
            if(typeof cookies.user === "object"){
                toast.success(dictionnaire.Toast.save_diagnostic);
            }else{
                toast.success(dictionnaire.Toast.send_mail);
            }
        }else{
            toast.error(dictionnaire.Toast.error_api);
        }
    } 
    /* eslint-disable no-unused-expressions */
    const Element = useMemo(() =>{        
        return <div className="flex flex-col h-[calc(100%-250px)]  sm:h-full ">
            
            <div className="w-full h-full sm:h-[870px] flex flex-row">
                <div className="invisible sm:visible w-0 sm:w-1/3 h-full relative">
                    <img src={"/images/Diagnostic/diagnostic5.png"} alt={DiagnosticData[i].image} className="w-full h-full"/>
                </div>
                <div className="w-full sm:w-2/3 h-full bg-[#EEE8E4] relative">
                    <div className="w-full h-3 bg-gray">
                        <div className={`${getW(parseInt(100*(i+1)/DiagnosticData.length),true)} h-full bg-[#264C4D] rounded-r-2xl`}></div>
                    </div>
                    <div className="w-full h-3 bg-gray">
                        <div className={`${getW(parseInt(100*(i+1)/DiagnosticData.length),true)} h-full bg-[#264C4D] rounded-r-2xl`}></div>
                    </div>
                    <div className="ml-[2%] sm:ml-[5%] flex flex-col">
                        <div><h2 className={`w-[90%] mt-[10px] sm:mt-[40px]  text-[16px] sm:text-[32px] text-[#264C4D] text-left h-fit mb-[10px] ${i===DiagnosticData.length-1 ? "font-mt-demi":""}`}><span className="font-mt-bold">{(i === DiagnosticData.length-1 && typeof cookies.user === "object" ) ? dictionnaire.DiagnosticStart.trace : `${DiagnosticData[i].section} : `}</span>{(i === DiagnosticData.length-1 && typeof cookies.user === "object" ) ? "": DiagnosticData[i].titre} </h2></div>
                    <div><h2 className={`w-[90%] mb-[10px] text-[10px] sm:text-[20px] text-[#264C4D] text-left h-fit mb-[10px] ${i===DiagnosticData.length-1 ? "font-mt-demi":""}`}>{(i === DiagnosticData.length-1 && typeof cookies.user === "object" ) ? "dictionnaire.DiagnosticStart.trace ": `${DiagnosticData[i].question }`} </h2></div>
                    
                    <div className="w-full h-full flex flex-col">
                        {i === DiagnosticData.length-1 ? "" :<div className={`w-[96%] sm:w-[90%] h-[calc(100%-100px)] gap-4 mb-[20px] relative grid ${DiagnosticData[i].format === "2" ? "grid-cols-2":"grid-cols-1"} grid-flow-row auto-cols-max `}>
                            {Object.keys(DiagnosticData[i].reponses).length ? DiagnosticData[i].reponses.map((item,pos)=>{return Button(item,pos,DiagnosticData[i])}):""}
                        </div>}

                        <div>
                            {i === DiagnosticData.length-1 ?<div className="flex flex-col">
                                {typeof cookies.user !== "object" ? <>
                                <div className="text-[14px] sm:text-[20px] text-[#264C4D] text-left mt-[10px]">{dictionnaire.DiagnosticStart.copie}</div>
                                <input
                                    className="rounded-lg w-[98%] sm:w-[500px] bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                                    type="text"
                                        onChange={(e)=>{setMail(e.target.value)}}
                                    value={mail}
                                    placeholder="Email*"
                                    required
                                />
                                <div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#264C4D] rounded-full text-[12px] sm:text-[24px] px-16 py-2 text-white hover:cursor-pointer" onClick={()=>{Envoyer()}}>{dictionnaire.send}</div> </div>
                                <div className="text-[12px] sm:text-[24px] font-mt-demi w-[70%] text-justify mt-[20px] ">{dictionnaire.DiagnosticStart.connect}</div>
                                <div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#264C4D] rounded-full text-[12px] sm:text-[24px] px-16 py-2 text-white hover:cursor-pointer" onClick={()=>{props.login({question1:selected[0],question2:selected[1],question3:selected[2],question4:selected[3],question5:selected[4],selected:selected})}}>{dictionnaire.connect}</div> </div>
                                
                                </> : <><div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#83C5BE] rounded-full text-[12px] sm:text-[24px] px-16 py-2 text-[#264C4D] hover:cursor-pointer" onClick={()=>{Envoyer()}}>{dictionnaire.DiagnosticStart.save}</div> </div>
                                <div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#264C4D] rounded-full text-[12px] sm:text-[24px] px-16 py-2 text-white hover:cursor-pointer" onClick={()=>{navigate("/PriseDeRdv")}}>{dictionnaire.DiagnosticStart.rdv}</div> </div>
                                </>
                                }
                                
                            </div>:""}
                            </div>
                        <div className="w-[90%] h-fit flex flex-row justify-between  mb-[10px]  ">
                            <div className={`bg-[#83C5BE] rounded-full  text-[12px] sm:text-[24px] px-8 py-2 hover:cursor-pointer`} onClick={()=>{i === 0 ? null:setI(i - 1)}}>
                                {dictionnaire.previous}
                            </div>
                            <div className={`bg-[#264C4D] rounded-full text-[12px] sm:text-[24px] px-10 py-2 ${i === DiagnosticData.length-1 ? "text-[#264C4D]":"text-white"}  hover:cursor-pointer`} onClick={()=>{valider()}}>
                                {dictionnaire.next}
                            </div>
                        </div>
                       
                    </div>
                    </div>
                    
                </div>
            </div>

    </div>}, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i,mail,DiagnosticData,selected,cookies,dictionnaire,props])
    return (<>
        {Element}
        </>
    )
}
export default DiagnosticStart;