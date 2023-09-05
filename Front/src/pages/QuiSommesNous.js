import Layout1imageinv from "../components/Layout/Layout1imageinv"
import LayoutFullImage from "../components/Layout/LayoutFullImage"
import Layout2col from "../components/Layout/Layout2col";

import {switchtext} from './../components/textdivers';

import qsn from "./../images/quisommenous.png";
import v9 from "./../images/visage/visage9.png";
import v10 from "./../images/visage/visage10.png";
import v11 from "./../images/visage/visage11.png";
import v12 from "./../images/visage/visage12.png";

import skincare from "../images/SkinCare1.png";
import v24 from "../images/visage/visage24.png";
import v25 from "../images/visage/visage25.png";
import Carousel2 from "../components/Layout/Carousel2";

const QuiSommesNous = () =>{
    function Item(props){
        return (
        <div className="w-[686px] h-[300px] flex flex-row">
            <div className="w-[343px] h-full bg-white rounded-l-2xl">
              <p className="text-[30px] mt-[20px]">{props.titre}</p>
              <p className="text-[14px] mx-auto mt-[20px] w-[90%] text-justify">{props.text}</p>
            </div>
            <div className="w-[343px] h-[300px] bg-white flex center">

              <img src={props.image.src} alt={props.image.alt} />
            </div>
        </div>
        )
    }
    const itemCarousel=[
        Item({titre:"Marie du pont",text:"Je suis totalement bluffé par l'efficacité de Po. En suivant leurs conseils, ma peau a retrouvé son éclat naturel et mes problèmes de peau ont disparu. J'adore l'approche personnalisée de Po, qui s'adapte parfaitement à mes besoins.. ",image:{src:skincare,alt:"skincare"}}),
        Item({titre:"Marie ",text:"Après avoir utilisé l'application de solution de soin de peau, je suis impressionné par les résultats obtenus. Ma peau est plus claire, plus lisse et plus radieuse. Les problèmes cutanés que je rencontrais auparavant, tels que l'acné et les rougeurs, se sont considérablement atténués. Je me sens tellement plus confiante et à l'aise dans ma peau.",image:{src:v24,alt:"v24"}}),
        Item({titre:"Matthieu",text:"En tant qu'homme, j'ai toujours été un peu réticent à l'idée d'utiliser des produits de soin de peau. Cependant, après avoir essayé votre solution de soin de peau, je suis agréablement surpris par les résultats. Ma peau est devenue plus nette, plus lisse et plus saine. Je remarque également une diminution des irritations et des imperfections. ",image:{src:v25,alt:"v25"}})
    
    ]
    return (<>
    <LayoutFullImage props={{titre:"QUI SOMMES NOUS ?",image1:{url:qsn,alt:"quisommenous"}}}/>
    <Layout1imageinv props={{col1:switchtext("quisommesnous"),image1:{url:v9,alt:"visage9"}}} />
    <div className="w-full">
        <img src={v10} alt={"visage10"} className="w-full"/>
    </div>
    <Layout2col props={{titre:switchtext("quisommesnous2"),col1:switchtext("quisommesnous3"),image1:{url:v11,alt:"visage11",className:"mt-[60px]"},col2:switchtext("quisommesnous4"),image2:{url:v12,alt:"visage12",className:"mt-[60px]"}}}/>
    <div className="w-full text-center"><p className="mt-[30px] mb-[10px] text-[50px] font-av-bold text-blue ">Témoignages</p></div>
    <Carousel2 props={{items:itemCarousel,nbShow:1,ratio:20,showPoint:true}}/>
    <div className="mb-[40px]"></div>
    </>)
}

export default QuiSommesNous