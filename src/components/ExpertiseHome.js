const ExpertiseHome =()=>{
    return (<>
        <div className="relative w-full h-fit p-[10px] grid grid-cols-4 bg-blue">
            <div className="col-start-1">
                <div className="p-2 sm:p-[40px] w-full h-full flex center"> <div><img src={"./images/visage/visage6.png"} alt={"visage"} /></div></div>  
            </div>
            <div className="col-start-2 col-span-3">
                <p className="mt-[10px] sm:mt-[40px] text-[10px] sm:text-[20px] text-white font-mt-bold">NOTRE EXPERTISE</p>
                <p className="ml-[10%] mt-[10px] sm:mt-[30px] w-[80%] text-white text-[6px] sm:text-[16px]">Nos partenaires sont diplômés et reconnus comme des Experts dans leur domaine et garantissent une prise en charge honnête et réfléchie</p>
                <div className="w-[100%] mt-[15px] sm:mt-[80px] grid grid-cols-3 ">
                    <div className="col-start-1 flex flex-col items-center">
                        <p className="text-white text-[6px] sm:text-[16px] w-[90%] sm:w-[60%]">Certification - Académie des Facialistes - Paris</p>
                        <div className="mt-[5px] sm:mt-[20px] p-4"> <img src={"./images/partenaire1.png"} alt={"partenaire1"}  /></div>  
                    </div>
                    <div className="col-start-2 flex flex-col items-center ">
                        <p className="text-white text-[6px] sm:text-[16px] w-[90%] sm:w-[60%] ">Certification - École Delphine Langlois - Facialiste Paris</p>
                        <div className="mt-[5px] sm:mt-[20px] p-4"> <img src={"./images/partenaire2.png"}  alt={"partenaire2"}/></div>  
                    </div>
                    <div className="col-start-3 flex flex-col items-center">
                        <p className="text-white text-[6px] sm:text-[16px] w-[90%] sm:w-[60%]">Tous nos produits sont testés et certifiés cruelty free</p>
                        <div className="mt-[5px] sm:mt-[20px] p-4"> <img src={"./images/partenaire3.png"} alt={"partenaire3"}  /></div>  
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default ExpertiseHome