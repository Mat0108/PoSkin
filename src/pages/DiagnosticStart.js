import { useContext, useMemo, useState } from "react";
import { getW } from "../components/TailwindUtils";
import { toast } from "react-toastify";
import { saveDiagnostic } from "../services/Diagnostic";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { LanguageContext } from "../languages";
import { Diagnostic } from "../constants/Diagnostic";
const DiagnosticStart = (props)=>{
    const DiagnosticData = Diagnostic();
    const { dictionnaire, userLanguage } = useContext(LanguageContext);
    const [cookies] = useCookies(["user"]);
    const [selected,setSelected] = useState(DiagnosticData.map(()=>{return []}))
    const [i,setI] = useState(0)
    const [mail, setMail] = useState("")
    const navigate = useNavigate();
    const isMobile = window.screen.width < 600
    function UpdateArray(pos){
        if(DiagnosticData[i].type === "multi"){
            if(selected[i].includes(pos)){
                selected[i] = selected[i].filter(function(e) { return e !== pos })
            }else{
                selected[i].push(pos)
            }
            
        }else{
            selected[i] = [pos]
        }
        setSelected(selected => [...selected]);
    }
    function Button(text,pos,data){
        return <div className={`${isMobile ? "w-full h-full":"w-fit h-full"} `} key={`diagnostic-${pos}`}>
        <div className={`flex center h-full ${(selected[i].includes(pos)) ? "bg-[#264C4D] text-[#EEE8E4]":"hover:bg-[#264C4D] bg-[#EEE8E4] text-[#264C4D] hover:text-[#EEE8E4] " } text-[14px] sm:text-[20px] border-2 border-[#264C4D] px-4 py-2 ${data.rounded !== "" ? data.rounded : isMobile ? "rounded-xl":"rounded-2xl"}`} onClick={()=>{UpdateArray(pos)}}>
                <div>{text}</div>
            </div>
            
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
        console.log(parseInt(100*(i+1)/DiagnosticData.length))
        return <div className="flex flex-col">
            <div className="w-full h-3 bg-[#EEE8E4]">
                <div className={`${getW(parseInt(100*(i+1)/DiagnosticData.length),true)} h-full bg-[#264C4D] rounded-r-2xl`}></div>
                
            </div>
            <div className="w-full h-full sm:h-[870px] flex flex-row">
                <div className="invisible sm:visible w-0 sm:w-1/3 h-full relative">
                    <img src={DiagnosticData[i].image} alt={DiagnosticData[i].image} className="w-full h-full"/>
                </div>
                <div className="w-full sm:w-2/3 h-full ml-[10%] bg-[#EEE8E4]">

                    <div><h2 className={`w-[70%] mt-[10px] sm:mt-[40px] mb-[10px] text-[16px] sm:text-[32px] text-[#264C4D] text-justify h-fit sm:h-[120px] ${i===DiagnosticData.length-1 ? "font-mt-demi":""}`}>{(i === DiagnosticData.length-1 && typeof cookies.user === "object" ) ?dictionnaire.DiagnosticStart.trace : DiagnosticData[i].title}</h2></div>
                    <div className="w-full flex flex-col">
                        {i === DiagnosticData.length-1 ? "" :<div className={`w-[90%] sm:max-h-[280px] gap-4 relative grid ${DiagnosticData[i].reponses.length > 4 ? "grid-cols-2":"grid-cols-1"}`}>
                            {Object.keys(DiagnosticData[i].reponses).length ? DiagnosticData[i].reponses.map((item,pos)=>{return Button(item,pos,DiagnosticData[i])}):""}
                        </div>}

                        <div>
                            {i === DiagnosticData.length-1 ?<div className="flex flex-col">
                                {typeof cookies.user !== "object" ? <>
                                <div className="text-[14px] sm:text-[20px] text-[#264C4D] text-left mt-[10px]">{dictionnaire.DiagnosticStart.copie}</div>
                                <input
                                    className="rounded-lg w-[500px] bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
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

                            <div className="w-full flex flex-row justify-between mt-[50px] pr-[20%] mb-[10px] gap-4 ">
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