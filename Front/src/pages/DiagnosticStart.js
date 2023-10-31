import { useEffect, useMemo, useState } from "react";
import { DiagnosticData } from "../constants/DiagnosticData";

const DiagnosticStart = ()=>{

    const [selected,setSelected] = useState(DiagnosticData.map(()=>{return new Array()}))
    const [i,setI] = useState(0)
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
    function Button(text,pos){
        return <div className="w-fit mt-[20px]" key={`diagnostic-${pos}`}>
            <div className={`${(selected[i].includes(pos)) ? "bg-[#264C4D] text-[#EEE8E4]":"hover:bg-[#264C4D] bg-[#EEE8E4] text-[#264C4D] hover:text-[#EEE8E4]" }  border-2 border-[#264C4D]  w-fit px-4 py-2  rounded-full`} onClick={()=>{UpdateArray(pos)}}>
                <a className="text-[20px] ">{text}</a>
            </div>
            
        </div>
    }
    const Element = useMemo(() =>{
        return <div className="">
            <div className="w-full h-[870px] flex flex-row">
                <div className="w-1/3 h-full relative">
                    <img src={DiagnosticData[i].image} alt={DiagnosticData[i].image} className="w-full h-full"/>
                </div>
                <div className="w-2/3 h-[80%] ml-[10%] bg-[#EEE8E4]">
                    <div><h2 className="mt-[40px] text-[40px] text-[#264C4D] w-fit">{DiagnosticData[i].title}</h2></div>
                    <div className="w-full flex flex-col">
                        <div className="w-[60%]">
                            {DiagnosticData[i].reponses.map((item,pos)=>{return Button(item,pos)})}
                        </div>
                        <div>
                            <div className="w-fit flex flex-row mt-[30px] ">
                                <div className="bg-[#83C5BE] rounded-l-full text-[24px] px-4 py-2" onClick={()=>{i == 0 ? "":setI(i-1)}}>
                                    PRÉCÉDENT
                                </div>
                                <div className="bg-[#264C4D] rounded-r-full text-[24px] px-4 py-2 text-white" onClick={()=>{i == DiagnosticData.length-1 ? "":setI(i+1)}}>
                                    {i == DiagnosticData.length-1 ? "VALIDER":"SUIVANT"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>}, [i,DiagnosticData,selected])
    return (<>
        {Element}
        </>
    )
}
export default DiagnosticStart;