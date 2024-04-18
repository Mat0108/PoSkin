
import ExpertiseHome from "../components/ExpertiseHome";
import Layout1image from "../components/Layout/Layout1image";
import Layout1imageinv from "../components/Layout/Layout1imageinv";
import Layout2image from "../components/Layout/Layout2image";
import Layout3image from "../components/Layout/Layout3image";
import LayoutFullImage from "../components/Layout/LayoutFullImage";
import { switchtext } from "../components/textdivers";

const Expertise = ()=>{
   
    return (<>
        <LayoutFullImage props={{titre:"NOTRE EXPERTISE",image1:{url:"/images/visage/visage13.png",alt:"visage13"}}}/>
        <Layout1image props={{col1:switchtext("NotreHistoire"),image1:{url:"/images/visage/visage14.png",alt:"visage14"}}} />
        <ExpertiseHome/>
        <Layout1imageinv props={{col1:switchtext("EcoleDelphine"),image1:{url:"/images/visage/visage15.png",alt:"visage15"}}}/>
        <Layout1image props={{col1:switchtext("ExpertisePassion"),image1:{url:"/images/visage/visage16.png",alt:"visage16"}}} />
        <div className="relative w-full h-0.5 mt-[60px] bg-[#10264C4D]"></div>
        <Layout3image props={{col1:switchtext("Expertise1"),image1:{url:"/images/visage/visage26.png",alt:"visage26",className:"w-[80%] bg-[#264C4D]"},col2:switchtext("Expertise2"),image2:{url:"/images/visage/visage27.png",alt:"visage27",className:"w-[80%] bg-[#264C4D]"},col3:switchtext("Expertise3"),image3:{url:"/images/visage/visage28.png",alt:"visage28",className:"w-[80%] bg-[#264C4D]"}}}/>
        <div className="w-full flex flex-row my-[60px]">
            <div className="relative w-[20%] h-0.5 mt-[60px] bg-[#10264C4D]"></div>
            <div className="w-[60%] text-[32px] sm:text-[64px] font-mt-extra-bold ">Faites nous confiance</div>
            <div className="relative w-[20%] h-0.5 mt-[60px] bg-[#10264C4D]"></div>
        </div>
        </>
    )
}
export default Expertise;