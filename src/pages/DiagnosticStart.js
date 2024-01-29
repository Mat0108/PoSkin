import { useContext, useEffect, useMemo, useState } from "react";
import { DiagnosticData } from "../constants/DiagnosticData";
import { getW } from "../components/TailwindUtils";
import { toast } from "react-toastify";
import { saveDiagnostic } from "../services/Diagnostic";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { LanguageContext } from "../data";
const DiagnosticStart = (props)=>{

    const { dictionnaire } = useContext(LanguageContext);
    const [cookies, setCookies] = useCookies(["user"]);
    const [selected,setSelected] = useState(DiagnosticData.map(()=>{return new Array()}))
    const [i,setI] = useState(0)
    const [mail, setMail] = useState("")
    const navigate = useNavigate();
    
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
        return <div className={`${data.width !== "" ? data.width : "w-fit"}  mt-[20px]`} key={`diagnostic-${pos}`}>
            <div className={`${(selected[i].includes(pos)) ? "bg-[#264C4D] text-[#EEE8E4]":"hover:bg-[#264C4D] bg-[#EEE8E4] text-[#264C4D] hover:text-[#EEE8E4]" } border-2 border-[#264C4D] ${data.width !== "" ? data.width : "w-fit"} px-4 py-2 ${data.rounded !== "" ? data.rounded : "rounded-full"}`} onClick={()=>{UpdateArray(pos)}}>
                <a className="text-[20px] ">{text}</a>
            </div>
            
        </div>
    }
    function valider(){
        if(i < DiagnosticData.length-1){
            if(Object.keys(selected[i]).length){
                setI(i+1)
            }else{
                toast.info("Merci de selectionner une réponse")
            }
        }
        
    }
    async function Envoyer(){
        let response = await saveDiagnostic({question1:selected[0],question2:selected[1],question3:selected[2],question4:selected[3],question5:selected[4],mail:typeof cookies.user == "object" ? cookies.user.email :mail,selected:selected})
        if(response.status === 200){
            if(typeof cookies.user == "object"){
                toast.success("Diagnostic sauvegadé")
            }else{
                toast.success("Mail envoyé !")
            }
        }else{
            toast.error("Erreur api")
        }
    } 
    /* eslint-disable no-unused-expressions */
    const Element = useMemo(() =>{        
        return <div className="flex flex-col">
            <div className="w-full h-3 bg-[#EEE8E4]">
                <div className={`${getW(parseInt(100*(i+1)/DiagnosticData.length))} h-full bg-[#264C4D]`}></div>
                
            </div>
            <div className="w-full h-[870px] flex flex-row">
                <div className="w-1/3 h-full relative">
                    <img src={DiagnosticData[i].image} alt={DiagnosticData[i].image} className="w-full h-full"/>
                </div>
                <div className="w-2/3 h-full ml-[10%] bg-[#EEE8E4]">

                    <div><h2 className={`w-[70%] mt-[40px] text-[32px] text-[#264C4D] text-justify h-[120px] ${i===DiagnosticData.length-1 ? "font-mt-demi":""}`}>{(i === DiagnosticData.length-1 && typeof cookies.user === "object" ) ?"Pour garder une trace de votre diagnostic :" : DiagnosticData[i].title}</h2></div>
                    <div className="w-full flex flex-col">
                        {i === DiagnosticData.length-1 ? "" :<div className={`w-[80%] max-h-[280px] grid ${DiagnosticData[i].reponses.length > 4 ? "grid-cols-2":"grid-cols-1"}`}>
                            {Object.keys(DiagnosticData[i].reponses).length ? DiagnosticData[i].reponses.map((item,pos)=>{return Button(item,pos,DiagnosticData[i])}):""}
                        </div>}

                        <div>
                            {i === DiagnosticData.length-1 ?<div className="flex flex-col">
                                {typeof cookies.user === "object" ? <>
                                <div className="text-[20px] text-[#264C4D] text-left mt-[10px]">{dictionnaire.DiagnosticStart.copie}</div>
                                <input
                                    className="rounded-lg w-[500px] bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                                    type="text"
                                    onChange={(e)=>{setMail(e.target.value)}}
                                    value={mail}
                                    placeholder="Email*"
                                    required
                                />
                                <div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#264C4D] rounded-full text-[24px] px-16 py-2 text-white hover:cursor-pointer" onClick={()=>{Envoyer()}}>{dictionnaire.send}</div> </div>
                                <div className="text-[24px] font-mt-demi w-[70%] text-justify mt-[20px] ">{dictionnaire.DiagnosticStart.connect}</div>
                                <div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#264C4D] rounded-full text-[24px] px-16 py-2 text-white hover:cursor-pointer" onClick={()=>{props.login({question1:selected[0],question2:selected[1],question3:selected[2],question4:selected[3],question5:selected[4],selected:selected})}}>{dictionnaire.connect}</div> </div>
                                
                                </> : <><div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#83C5BE] rounded-full text-[24px] px-16 py-2 text-[#264C4D] hover:cursor-pointer" onClick={()=>{Envoyer()}}>{dictionnaire.DiagnosticStart.save}</div> </div>
                                <div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#264C4D] rounded-full text-[24px] px-16 py-2 text-white hover:cursor-pointer" onClick={()=>{navigate("/PriseDeRdv")}}>{dictionnaire.DiagnosticStart.rdv}</div> </div>
                                </>
                                }
                                
                            </div>:""}

                            <div className="w-full flex flex-row justify-between mt-[50px] pr-[20%] ">
                                <div className={`bg-[#83C5BE] rounded-full  text-[24px] px-8 py-2 hover:cursor-pointer`} onClick={()=>{i === 0 ? null:setI(i - 1)}}>
                                    {dictionnaire.previous}
                                </div>
                                 <div className={`bg-[#264C4D] rounded-full text-[24px] px-16 py-2 ${i === DiagnosticData.length-1 ? "text-[#264C4D]":"text-white"}  hover:cursor-pointer`} onClick={()=>{valider()}}>
                                     {dictionnaire.next}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>}, [i,mail,DiagnosticData,selected])
    return (<>
        {Element}
        </>
    )
}
export default DiagnosticStart;