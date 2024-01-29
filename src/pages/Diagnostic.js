import { Link } from "react-router-dom";
import { dictionnaire } from "../data";

const Diagnostic = ()=>{
    return (<>
        <div className="">
            <div className="w-full h-[870px] flex flex-row">
                <div className="w-1/3 h-full relative">
                    <img src={"/images/visage/visage21.png"} alt={"visage21"} className="w-full h-full"/>
                </div>
                <div className="w-2/3 h-full bg-[#264C4D]">
                    <div><p className="mt-[160px] text-white text-[50px] font-mt-extra-bold">{dictionnaire.Diagnostic.Diagnostic.toUpperCase()}</p></div>
                    <div className="w-full flex center mt-[120px]">
                        <div className="bg-[#EEE8E4] hover:bg-[#264C4D] border-2 border-[#EEE8E4] w-[330px] rounded-full"><Link to={"/Diagnostic/start/"} className="text-[40px] text-[#264C4D] hover:text-[#EEE8E4]">{dictionnaire.Diagnostic.Go}</Link></div>
                        <p></p>
                    </div>
                    <div className="w-full flex center mt-[30px]">
                        <div className="w-[60%] text-xl text-white">
                            {dictionnaire.Diagnostic.Info1}
                            {dictionnaire.Diagnostic.Info2}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="w-full h-full ">
                <div className="flex flex-col center mt-[80px]">
                    <div><p className="text-[50px] text-[#264C4D]">{dictionnaire.Diagnostic.Po}</p></div>
                    <div className="w-[800px] mt-[30px]"><p>{dictionnaire.Diagnostic.Info3}</p></div>
                    <div className="w-[800px] mt-[30px] mb-[80px]"><p>{dictionnaire.Diagnostic.Info4}</p></div>
                </div>
            </div>
        </>
    )
}
export default Diagnostic;