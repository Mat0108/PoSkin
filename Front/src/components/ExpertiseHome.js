import visage from "../images/visage/visage6.png"
import partenaire1 from "../images/partenaire1.png"
import partenaire2 from "../images/partenaire2.png"
import partenaire3 from "../images/partenaire3.png"

const ExpertiseHome =()=>{
    return (<>
        <div className="relative w-full h-fit p-[10px] grid grid-cols-4 bg-blue">
            <div className="col-start-1">
                <div className="p-[40px] w-full flex center"> <div><img src={visage} alt={"visage"} /></div></div>  
            </div>
            <div className="col-start-2 col-span-3">
                <p className="mt-[40px] text-[20px] text-white font-av-bold">NOTRE EXPERTISE</p>
                <p className="ml-[10%] mt-[30px] w-[80%] text-white">Nos partenaires sont diplômés et reconnus comme des Experts dans leur domaine et garantissent une prise en charge honnête et réfléchie</p>
                <div className="w-[100%] mt-[80px] grid grid-cols-3 ">
                    <div className="col-start-1 flex flex-col items-center">
                        <p className="text-white text-[16px] w-[60%]">Certification - Académie des Facialistes - Paris</p>
                        <div className="mt-[20px]"> <img src={partenaire1}  /></div>  
                    </div>
                    <div className="col-start-2 flex flex-col items-center ">
                        <p className="text-white w-[300px] text-[16px] w-[60%] ">Certification - École Delphine Langlois - Facialiste Paris</p>
                        <div className="mt-[20px]"> <img src={partenaire2}  /></div>  
                    </div>
                    <div className="col-start-3 flex flex-col items-center">
                        <p className="text-white w-[220px] text-[16px] w-[60%]">Tous nos produits sont testés et certifiés cruelty free</p>
                        <div className="mt-[20px]"> <img src={partenaire3}  /></div>  
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default ExpertiseHome