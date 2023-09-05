
import ExpertiseHome from "../components/ExpertiseHome";
import Layout1image from "../components/Layout/Layout1image";
import Layout1imageinv from "../components/Layout/Layout1imageinv";
import LayoutFullImage from "../components/Layout/LayoutFullImage";
import { switchtext } from "../components/textdivers";
import v15 from "./../images/visage/visage15.png";
import v16 from "./../images/visage/visage16.png";
import v17 from "./../images/visage/visage17.png";
import v18 from "./../images/visage/visage18.png";
import v19 from "./../images/visage/visage19.png";
import v14 from "./../images/visage/visage14.png";
import v2 from "./../images/visage/visage2.png";
import v3 from "./../images/visage/visage3.png";
import v4 from "./../images/visage/visage4.png";
import v7 from "./../images/visage/visage7.png";
import v8 from "./../images/visage/visage8.png";
import search from "./../images/search.png";
import love from "./../images/love.png";
import partage from "./../images/partage.png";
import comment from "./../images/comment.png";

import v20 from "./../images/visage/visage20.png";
import Carousel2 from './../components/Layout/Carousel2';
import C1 from "./../images/Commu/Commu1.png";
import C2 from "./../images/Commu/Commu2.png";
import C3 from "./../images/Commu/Commu3.png";
import C4 from "./../images/Commu/Commu4.png";
import { useState } from "react";
const Commu = ()=>{
    const [fil,setFil] = useState(true)
    function itemCarousel(image,titre){
        return (<div className="relative w-[250px] h-[200px]" key={`item-${titre}`}>
            <img src={image} alt={titre} className="w-full h-full rounded-2xl"/>
            <div className="absolute top-0 left-0 h-full w-full flex center ">
                <div className="h-fit w-[80%] mt-[30px] text-white text-[36px] font-av-bold">{titre}</div>

            </div>

        </div>)

    }
    let listCarousel = [
        itemCarousel(C1,"Découvrez nos conseils"),
        itemCarousel(C2,"Rencontrez nos experts"),
        itemCarousel(C3,"Une communauté pour vous"),
        itemCarousel(C4,"partager votre expérience"),

        
    ]
    function item(item){
        return <div className="w-[240px] h-[70px] bg-[#264C4D] rounded-3xl flex center">
            <p className="text-[25px] text-white">{item}</p>
        </div>
    }
    function explorerItem(image,text,value,categorie){
        return(
            <div className="w-full h-[480px] mb-[20px] flex rounded-[40px] mt-[40px]">
                <div className="w-[30%] h-full">
                    <img src={image} alt={image} className="w-full h-full rounded-l-[40px]"/>
                </div>
                <div className="w-[70%] h-full relative flex flex-col border-r-2 border-y-2 border-black rounded-r-[40px] p-8">
                    <div className="w-full h-[75%] text-[18px] text-left">
                        {text}
                    </div>
                    <div className="w-full h-[15%] mt-[5px]">
                        <p className="text-left text-[18px] ">Catégorie : {categorie}</p>
                    </div>
                    <div className="w-[250px] h-[40px] flex flex-row justify-between">
                        <div className="flex flex-row">
                            <img src={love} alt={"love"} className="w-[40px] h-[40px]"/>
                            <div className="flex content-end"><p className="ml-[5px] w-fit h-fit" >{value.love ? value.love : 0}</p></div>
                        </div>
                        <div className="flex flex-row">
                            <img src={comment} alt={"comment"} className="w-[40px] h-[40px]"/>
                            <div className="flex content-end"><p className="ml-[5px] w-fit h-fit" >{value.comment ? value.comment : 0}</p></div>
                        </div>
                        <div className="flex flex-row">
                            <img src={partage} alt={"partage"} className="w-[40px] h-[40px]"/>
                            <div className="flex content-end"><p className="ml-[5px] w-fit h-fit" >{value.partage ? value.partage : 0}</p></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    return (<>
        <LayoutFullImage props={{titre:"MA COMMUNAUTÉ",image1:{url:v17,alt:"visage17"}}}/>
        <div className="w-full flex center mt-[100px]">
            <div className="w-[80%] flex flex-col ">
                <p className="text-[50px]">La communauté qui te ressemble</p>
                <div className='w-full flex center mt-[60px]'><img src={v18} alt={"v18"} className="w-full"/></div>
                <div className="w-full flex center ">{switchtext("Commu")}</div>
                <div className="flex center mt-[60px]"><div className="text-[40px]  w-fit px-16 py-6 bg-[#264C4D] rounded-full font-av-bold text-white text-left"><p>Rejoigner la communauté</p></div></div>
                <div className="flex flex-row center mt-[80px] mb-[80px] ">

                    <div className="w-[220px] h-[220px] bg-[#D9D9D9] rounded-l-3xl">
                    <img src={v19} alt="v19" className="w-full h-full rounded-3xl"/>
                </div>
                <div className="w-[1100px] h-[220px]  p-4 flex flex-col bg-[#D9D9D9] rounded-r-3xl">
                    <div className="text-[36px] font-av-bold text-left">Nouveau venu ?</div>
                    <div className="h-[10px]"></div>
                    <div className="text-[30px] mt-[1Opx] font-av-bold text-left">On vous montre comment ça marche ?</div>
                </div>
                </div>
            </div>
        </div>
        <div className="w-[80%] flex flex-col mx-auto mb-[20px]">
            <p className="text-[50px] text-left text-blue font-av-bold">Pour bien démarrer sur la commununauté</p>
        </div>
        <Carousel2 props={{items:listCarousel,nbShow:4,ratio:10,showPoint:false}}/>
        <div className="w-[80%] mx-auto mt-[50px]">
            <p className="text-[40px] text-left text-blue font-av-bold">Explorer</p>
            <div className="border-2 border-blue rounded-3xl w-full h-[62px] flex flex-row relative">
                <div className="w-[10%] h-fit p-4 flex center relative">
                    <img src={search} alt={search} height={30} width={30}/>
                </div>
                <div className="w-[90%] h-fit flex relative items-center">
                    <p className="text-black text-[22px] mt-[10px]">Recherche dans la communauté</p>
                </div>
            </div>
            <div className="w-full h-full my-[30px] flex flex-row justify-between space-x-4 ">
                {item("Diagnostic")}
                {item("Conseil")}
                {item("Soin")}
                {item("Produits")}
                {item("Acnès")}
            </div>
        </div>
        <div className="w-full h-[150px] flex flex col">
            <div className="w-1/2 h-full flex center">
                <div className="text-[50px]">Fil d'actualité</div>
            </div>
            <div className="w-1/2 h-full flex center">
                <div className="text-[50px]">La communauté aime</div>
            </div>
            
        </div>
        <div className="w-full h-[3px] bg-gray mb-[5px]"></div>

        <div className="w-full h-fit ">
            <div className="w-[60%] mx-auto mt-[40px]">
                <div className="border-2 border-blue rounded-full w-[740px] h-[62px] px-8 py-2 flex flex-row relative"> 
                    <div className="w-full h-fit flex relative">
                        <p className="text-black text-[28px]"><span className="text-blue font-av-bold text-[29px] ">Léa community manager :</span> à posté une photo</p>
                    </div>
                </div>
                <div className="h-[520px] overflow-hidden hover:overflow-auto mb-[20px]">
                {explorerItem(v20,switchtext("Commu1"),{love:25,comment:18,partage:10},"Acnès & soins")}
                {/* {explorerItem(v19,"",{love:14,comment:38,partage:4},"Soins")} */}

                </div>
            </div>

            </div>
            
        </>
    )
}
export default Commu;