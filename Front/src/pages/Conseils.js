import Layout1imageinv from "../components/Layout/Layout1imageinv"
import LayoutFullImage from "../components/Layout/LayoutFullImage"
import Layout2col from "../components/Layout/Layout2col";

import cb from "./../images/conseils/Conseil-banner.png";

import I1C1 from "./../images/conseils/Carousel1/Image1C1.png";

import I1C2 from "./../images/conseils/Carousel2/Image1C2.png";
import I2C2 from "./../images/conseils/Carousel2/Image2C2.png";
import I3C2 from "./../images/conseils/Carousel2/Image3C2.png";

import MQ from "./../images/conseils/Carousel3/maquillage.png";
import NU from "./../images/conseils/Carousel3/routines.png";
import RT from "./../images/conseils/Carousel3/nutrition.png";

import I1C4 from "./../images/conseils/Carousel4/Image1C4.png";
import I2C4 from "./../images/conseils/Carousel4/Image2C4.png";
import I3C4 from "./../images/conseils/Carousel4/Image3C4.png";

import {switchtext} from './../components/textdivers';
import Carousel2 from "../components/Layout/Carousel2";


const Conseils = () =>{
    function itemCarousel(image,col){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <div>
                    <div className="mt-[20px] w-full flex center"> <img src={image.src}  alt={image.alt} className={image.className}/></div>  
                    {col}
                </div>
            </div>
            </>)

    }
    let listCarousel = [
        itemCarousel({src:I1C1,alt:"E1C1"},switchtext("ConseilCarousel1Image1")),
        itemCarousel({src:I1C1,alt:"I1C1"},switchtext("ConseilCarousel1Image1")),
        itemCarousel({src:I1C1,alt:"I1C1"},switchtext("ConseilCarousel1Image1"))
    ]
    let listCarousel2 = [
        itemCarousel({src:I1C2,alt:"I1C2"},switchtext("ConseilCarousel2Image1")),
        itemCarousel({src:I2C2,alt:"I2C2"},switchtext("ConseilCarousel2Image2")),
        itemCarousel({src:I3C2,alt:"I3C2"},switchtext("ConseilCarousel2Image3")),
        itemCarousel({src:I2C2,alt:"I2C2"},switchtext("ConseilCarousel2Image1")),
        itemCarousel({src:I1C2,alt:"I1C2"},switchtext("ConseilCarousel2Image2")),
        itemCarousel({src:I3C2,alt:"I3C2"},switchtext("ConseilCarousel2Image3"))
    ]
    let listCarousel3 = [
        itemCarousel({src:MQ,alt:"MQ"}),
        itemCarousel({src:RT,alt:"RT"}),
        itemCarousel({src:NU,alt:"NU"}),
        itemCarousel({src:MQ,alt:"MQ"}),
        itemCarousel({src:RT,alt:"RT"}),
        itemCarousel({src:NU,alt:"NU"})
    ]
    let listCarousel4 = [
        itemCarousel({src:I1C4,alt:"I1C4",className:"w-[70%]"},switchtext("ConseilCarousel4Image1")),
        itemCarousel({src:I2C4,alt:"I2C4",className:"w-[70%]"},switchtext("ConseilCarousel4Image2")),
        itemCarousel({src:I3C4,alt:"I3C4",className:"w-[70%]"},switchtext("ConseilCarousel4Image3")),
        itemCarousel({src:I1C4,alt:"I1C4",className:"w-[70%]"},switchtext("ConseilCarousel4Image1")),
        itemCarousel({src:I2C4,alt:"I2C4",className:"w-[70%]"},switchtext("ConseilCarousel4Image2")),
        itemCarousel({src:I3C4,alt:"I3C4",className:"w-[70%]"},switchtext("ConseilCarousel4Image3"))
    ]
    return (<>

    <LayoutFullImage props={{image1:{url:cb,alt:"Conseil-banner"}}}/>  

    <div className="w-full text-center text-[50px]  mt-[50px] font-av-bold text-blue">Nos conseils</div>
    <Carousel2 props={{items:listCarousel,nbShow:1,ratio:20,showPoint:true}}/>

    <div className="relative w-full h-0.5 mt-[100px] mb-[100px] bg-[#10264C4D]"></div>

    <div className="w-full text-left text-[50px] mt-[20px] ml-[155px] font-av-bold text-blue">Les derniers tutos...</div>
    <Carousel2 props={{items:listCarousel2,nbShow:3,ratio:10,showPoint:false,disableClic:true}}/>

    <div className="relative w-full h-0.5 mt-[100px] mb-[100px] bg-[#10264C4D]"></div>

    <div className="w-full text-left text-[50px] mt-[20px] ml-[165px] font-av-bold text-blue">Catégories</div>
    <Carousel2 props={{items:listCarousel3,nbShow:3,ratio:10,showPoint:false,disableClic:true}}/>

    <div className="relative w-full h-0.5 mt-[100px] mb-[100px] bg-[#10264C4D]"></div>

    <div className="w-full text-left text-[50px] mt-[20px] ml-[155px] font-av-bold text-blue">Interviews</div>
    <div className="w-full text-left text-[30px] ml-[155px] text-blue">Des personnes inspirants et qui vous ressemblent</div>
    <Carousel2 props={{items:listCarousel4,nbShow:3,ratio:10,showPoint:false,disableClic:true}}/>
    <div className="w-full h-[20px]"></div>
    </>)
}

export default Conseils