
import ExpertiseHome from "../components/ExpertiseHome";
import Layout1image from "../components/Layout/Layout1image";
import Layout1imageinv from "../components/Layout/Layout1imageinv";
import Layout3image from "../components/Layout/Layout3image";
import LayoutFullImage from "../components/Layout/LayoutFullImage";
import { switchtext } from "../components/textdivers";
import v13 from "./../images/visage/visage13.png";
import v14 from "./../images/visage/visage14.png";
import v15 from "./../images/visage/visage15.png";
import v16 from "./../images/visage/visage16.png";
import v26 from "./../images/visage/visage26.png";
import v27 from "./../images/visage/visage27.png";
import v28 from "./../images/visage/visage28.png";
const Expertise = ()=>{
   
    return (<>
        <LayoutFullImage props={{titre:"NOTRE EXPERTISE",image1:{url:v13,alt:"visage13"}}}/>
        <Layout1image props={{col1:switchtext("NotreHistoire"),image1:{url:v14,alt:"visage14"}}} />
        <ExpertiseHome/>
        <Layout1imageinv props={{col1:switchtext("EcoleDelphine"),image1:{url:v15,alt:"visage15"}}}/>
        <Layout1image props={{col1:switchtext("ExpertisePassion"),image1:{url:v16,alt:"visage16"}}} />
        <div className="relative w-full h-0.5 mt-[60px] bg-[#10264C4D]"></div>
        <Layout3image props={{col1:switchtext("Expertise1"),image1:{url:v26,alt:"visage26",className:"w-[80%] bg-[#264C4D]"},col2:switchtext("Expertise2"),image2:{url:v27,alt:"visage27",className:"w-[80%] bg-[#264C4D]"},col3:switchtext("Expertise3"),image3:{url:v28,alt:"visage28",className:"w-[80%] bg-[#264C4D]"}}}/>
        <div className="w-full flex flex-row my-[60px]">
            <div className="relative w-[20%] h-0.5 mt-[60px] bg-[#10264C4D]"></div>
            <div className="w-[60%] text-[64px] font-av-bold ">Faites nous confiance</div>
            <div className="relative w-[20%] h-0.5 mt-[60px] bg-[#10264C4D]"></div>
        </div>
        </>
    )
}
export default Expertise;