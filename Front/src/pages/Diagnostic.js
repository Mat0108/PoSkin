
import v21 from "./../images/visage/visage21.png";
const Diagnostic = ()=>{
    return (<>
        <div className="">
            <div className="w-full h-[870px] flex flex-row">
                <div className="w-1/3 h-full relative">
                    <img src={v21} alt={"visage21"} className="w-full h-full"/>
                </div>
                <div className="w-2/3 h-full bg-[#264C4D]">
                    <div><p className="mt-[160px] text-white text-[50px] font-av-bold">FAIRE MON DIAGNOSTIC</p></div>
                    <div className="w-full flex center mt-[120px]">
                        <div className="bg-[#EEE8E4] w-[330px] rounded-full"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf7xeWz4iVPFQisVw0mE06KPANSVaX8PBV51AavnBavW7m6_A/viewform" className="text-[40px] text-[#264C4D]">C'est parti !</a></div>
                        <p></p>
                    </div>
                    <div className="w-full flex center mt-[30px]">
                        <div className="w-[60%] text-xl text-white">En complétant ce formulaire, vous autorisez Po. à utiliser vos données personnelles, à vous adresser des 
offres et communications par email ou par SMS.En savoir plus </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="w-full h-full ">
                <div className="flex flex-col center mt-[80px]">
                    <div><p className="text-[50px] text-[#264C4D]">Po. pour une belle peau </p></div>
                    <div className="w-[800px] mt-[30px]"><p>Chez Po. nous sommes convaincus que prendre soin de sa peau devrait être à la portée de tous et de toutes. C’est pour cela que nous voulons rendre accessible les soins, les conseils, les expertises.</p></div>

                    <div className="w-[800px] mt-[30px] mb-[80px]"><p>Nous sommes fiers de mettre à votre disposition des formules de soins cleans et de vous mettre en contact avec  nos partenaires expert dans les problèmes de peaux. </p></div>
                </div>
            </div>
        </>
    )
}
export default Diagnostic;