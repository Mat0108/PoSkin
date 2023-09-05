import logobig from "../images/logobig.png"
import tiktok from "../images/tiktok.png"
import instagram from "../images/instagram.png"
import pinterest from "../images/pinterest.png"
const Footer = ()=>{
    return (
    <footer className="p-4 pb-10 bg-white_coffee flex w-full">
        <div className="w-[20%] flex flex-col center ">
            <div>
                    <div className="mt-[20px]"> <img src={logobig} className="w-[65%]"/></div>
                    <p className="text-[14px] mt-[5px] text-left">Découvrez votre peau.</p>
   
            </div>  
        </div>
        <div className="w-[18%]"></div>
        <div className="w-[12%] mt-[20px] text-left "> 
            <div>
                <p className="font-av-bold text-[24px]">Menu</p>
                <p className="mt-[10px] text-[12px]">Expert facialiste</p>
                {/* <p className="text-[12px]">Diagnostiques</p> */}
                <p className="text-[12px]">Soins</p>
                <p className="text-[12px]" href="/Conseils">Conseils</p>
            </div>
        </div>
            <div className="w-[15%] mt-[20px] text-left "> 
            <div>
                <p className="font-av-bold text-[24px]">Découvrir Po.</p>
                <p className="mt-[10px] text-[12px]">Notre histoire</p>
                <p className="text-[12px]">Charte de formulation</p>
                
            </div>
        </div>   
        <div className="w-[19%] mt-[20px] text-left "> 
            <div>
                <p className="font-av-bold text-[24px]">Avis et évaluations</p>
                <p className="mt-[10px] text-[12px]">Expertise</p>
                <p className="text-[12px]">Avis Clients</p>
            </div>
        </div> 
        <div className="w-[16%] mt-[20px] text-left "> 
            <div>
                <p className="font-av-bold text-[24px]">Nous rejoindre</p>
                <p className="mt-[10px] text-[12px]">Rejoindre l'équipe</p>
                <p className="text-[12px]">Affilation</p>
                <p className="text-[12px]">Communauté</p>
                <p className="text-[16px] my-[10px]">REJOIGNEZ PO. SUR :</p>

                <div className="grid grid-cols-3 gap-2 w-[60%]">
                        <div className="col-start-1"><a href="https://www.tiktok.com/@po.skin_?is_from_webapp=1&sender_device=pc"> <img src={tiktok}  /></a></div>
                        <div className="col-start-2"><a href="https://instagram.com/po.skin__?igshid=MzRlODBiNWFlZA=="> <img src={instagram}  /></a></div>
                        <div className="col-start-3"><a href="https://www.pinterest.fr/poskinnn/?invite_code=20394619d86b4527a76a7cb5758afad2&sender=1093671228167842742"> <img src={pinterest}  /></a></div>
                    </div>
            </div>
        </div> 
    </footer>
    )
}
export default Footer;