import { useContext } from "react";
import { LanguageContext } from "../languages";

const Footer = ()=>{
    const { dictionnaire } = useContext(LanguageContext);
    return (
    <footer className="px-4 py-2 sm:p-4 pb-10 bg-white_coffee flex w-full">
        <div className="w-[20%] flex flex-col center ">
            <div>
                    <div className="mt-[20px]"> <img src={"/images/logobig.png"} alt={"logo"} className="w-[40px] sm:w-[65%]"/></div>
                    <p className="text-[8px] sm:text-[14px] mt-[5px] text-left">{dictionnaire.Footer.peau}</p>
   
            </div>  
        </div>
        <div className="w-[14%] sm:w-[14%]"></div>
        <div className="w-[12%] mt-[20px] text-left "> 
            <div>
                <p className="h-[30px] sm:h-fit font-mt-extra-bold text-[10px] sm:text-[24px]">{dictionnaire.Footer.menu}</p>
                <p className="mt-[10px] text-[6px] sm:text-[12px]">{dictionnaire.Footer.expert}</p>
                {/* <p className="text-[12px]">Diagnostiques</p> */}
                <p className="text-[6px] sm:text-[12px]">{dictionnaire.Footer.soins}</p>
                <p className="text-[6px] sm:text-[12px]" href="/Conseils">{dictionnaire.Footer.conseil}</p>
            </div>
        </div>
            <div className="w-[16%] sm:w-[16%] mt-[20px] text-left "> 
            <div>
                <p className="font-mt-extra-bold text-[10px] sm:text-[24px]">{dictionnaire.Footer.Po}</p>
                <p className="mt-[10px] text-[6px] sm:text-[12px]">{dictionnaire.Footer.histoire}</p>
                <p className="text-[6px] sm:text-[12px]">{dictionnaire.Footer.charte}</p>
                
            </div>
        </div>   
        <div className="w-[22%] mt-[20px] text-left "> 
            <div>
                <p className="font-mt-extra-bold text-[10px] sm:text-[24px]">{dictionnaire.Footer.avis}</p>
                <p className="mt-[10px] text-[6px] sm:text-[12px]">{dictionnaire.Footer.expertise}</p>
                <p className="text-[6px] sm:text-[12px]">{dictionnaire.Footer.avis2}</p>
            </div>
        </div> 
        <div className="w-[16%] mt-[20px] text-left "> 
            <div>
                <p className="font-mt-extra-bold text-[10px] sm:text-[24px]">{dictionnaire.Footer.rejoindre}</p>
                <p className="mt-[10px] text-[6px] sm:text-[12px]">{dictionnaire.Footer.equipe}</p>
                <p className="text-[6px] sm:text-[12px]">{dictionnaire.Footer.affilation}</p>
                <p className="text-[6px] sm:text-[12px]">{dictionnaire.Footer.communauté}</p>
                <p className="text-[8px] sm:text-[16px] my-[6px] sm:my-[10px]">{dictionnaire.rejoindrepo}</p>

                <div className="grid grid-cols-3 gap-2 w-full sm:w-[60%]">
                        <div className="col-start-1"><a href="https://www.tiktok.com/@po.skin_?is_from_webapp=1&sender_device=pc"> <img src={"/images/tiktok.png"} alt={"tiktok"}  /></a></div>
                        <div className="col-start-2"><a href="https://instagram.com/po.skin__?igshid=MzRlODBiNWFlZA=="> <img src={"/images/instagram.png"} alt={"instagram"}  /></a></div>
                        <div className="col-start-3"><a href="https://www.pinterest.fr/poskinnn/?invite_code=20394619d86b4527a76a7cb5758afad2&sender=1093671228167842742"> <img src={"/images/pinterest.png"}  alt={"pinterest"} /></a></div>
                    </div>
            </div>
        </div> 
    </footer>
    )
}
export default Footer;