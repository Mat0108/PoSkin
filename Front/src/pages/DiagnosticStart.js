import { useEffect, useMemo, useState } from "react";
import { DiagnosticData } from "../constants/DiagnosticData";
import { getW } from "../components/TailwindUtils";
import { toast } from "react-toastify";
import { saveDiagnostic } from "../services/Blog";
const DiagnosticStart = (props)=>{

    const [selected,setSelected] = useState(DiagnosticData.map(()=>{return new Array()}))
    const [i,setI] = useState(0)
    const [mail, setMail] = useState("")
    
    function UpdateArray(pos){
        if(DiagnosticData[i].type == "multi"){
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
        return <div className={`${data.width != "" ? data.width : "w-fit"}  mt-[20px]`} key={`diagnostic-${pos}`}>
            <div className={`${(selected[i].includes(pos)) ? "bg-[#264C4D] text-[#EEE8E4]":"hover:bg-[#264C4D] bg-[#EEE8E4] text-[#264C4D] hover:text-[#EEE8E4]" } border-2 border-[#264C4D] ${data.width != "" ? data.width : "w-fit"} px-4 py-2 ${data.rounded != "" ? data.rounded : "rounded-full"}`} onClick={()=>{UpdateArray(pos)}}>
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
    function Envoyer(){
        let result = saveDiagnostic({question1:selected[0],question2:selected[1],question3:selected[2],question4:selected[3],question5:selected[4],mail:mail,selected:selected})
        if(result.status == "200"){
            toast.success("Diagnostic envoyé par mail");
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
                    <div><h2 className="w-[80%] mt-[40px] text-[32px] text-[#264C4D] text-left h-[120px] ">{DiagnosticData[i].title}</h2></div>
                    <div className="w-full flex flex-col">
                        {i == DiagnosticData.length-1 ? "" :<div className={`w-[80%] max-h-[280px] grid ${DiagnosticData[i].reponses.length > 4 ? "grid-cols-2":"grid-cols-1"}`}>
                            {Object.keys(DiagnosticData[i].reponses).length ? DiagnosticData[i].reponses.map((item,pos)=>{return Button(item,pos,DiagnosticData[i])}):""}
                        </div>}

                        <div>
                            {i == DiagnosticData.length-1 ?<div className="flex flex-col">
                                <div className="text-[20px] text-[#264C4D] text-left mt-[20px]">Vous recevrez une copie de votre diagnostic de peau prochainement</div>
                                <input
                                    className="rounded-lg w-[500px] bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                                    type="text"
                                    onChange={(e)=>{setMail(e.target.value)}}
                                    value={mail}
                                    placeholder="Email*"
                                    required
                                />

                            </div>:""}
                            <div className="w-fit flex flex-row mt-[50px] ">
                                <div className="bg-[#83C5BE] rounded-l-full text-[24px] px-8 py-2 hover:cursor-pointer" onClick={()=>{i === 0 ? null:setI(i - 1)}}>
                                    PRÉCÉDENT
                                </div>
                                 <div className="bg-[#264C4D] rounded-r-full text-[24px] px-16 py-2 text-white hover:cursor-pointer" onClick={()=>{i == DiagnosticData.length-1 ? Envoyer():valider()}}>
                                    {i == DiagnosticData.length-1 ? "ENVOYER":"SUIVANT"}
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