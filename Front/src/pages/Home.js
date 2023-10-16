
import LayoutFullImage from '../components/Layout/LayoutFullImage';
import Layout1image from '../components/Layout/Layout1image';
import Layout2image from '../components/Layout/Layout2image';
import ExpertiseHome from '../components/ExpertiseHome';

import {switchtext} from './../components/textdivers';

import Carousel2 from '../components/Layout/Carousel2';

import { Link } from 'react-router-dom';
const Home = ()=>{
    function itemCarousel(image,col,url){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <Link to={url}>
                    <div className="mt-[20px] w-full flex center h-[100px] sm:h-[250px]"> <img src={image}  alt="CarouselItem" className='h-[100px] sm:h-[250px] w-fit'/></div>  
                    {switchtext(col)}    
                </Link>
            </div>
            </>)

    }
    function BlogCarousel(image,titre,url){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <Link to={url}>
                    <div className="mt-[20px] w-full flex center h-[100px] sm:h-[250px]"> <img src={image}  alt="CarouselItem" className='h-[100px] sm:h-[250px]'/></div>  
                    {/* <div className='absolute top-0 left-0 w-full h-full flex center flex-col'>
                        <p className='w-[80%] text-white mt-2 text-[7px] sm:text-[34px] font-mt-bold'>{titre}</p>
                        <p className='w-[80%] text-white text-[5px] sm:text-[20px] font-mt-bold'>{soustitre}</p>
                    </div>    */}
                    <p className="mt-[6px] sm:mt-[20px] text-[8px] sm:text-[16px] font-mt-bold text-blue">{titre} </p>    
  
                    
                </Link>
            </div>
            </>)
    }
    let listCarousel = [
        itemCarousel("/images/Blog/vitaminec/vitaminec.png","VitamineC","/Blog/vitaminec"),
        itemCarousel("/images/Blog/cremesolaire/cremesolaire.png","CremeSolaire","/Blog/cremesolaire"),
        itemCarousel("/images/visage/visage10.png","AvoirUneBellePeau","/Blog/avoirunebellepeau"),
        itemCarousel("/images/quisommesnous.png","PeauParfaite","/Blog/peauparfaite"),
    
    ]

    
    // let listBlogCarousel = [
    //     BlogCarousel("/images/Blog/vitaminec/vitaminec.png","La vitamine C","","/Blog/1"),
    //     BlogCarousel("/images/Blog/cremesolaire/cremesolaire.png","La creme solaire :","un indispensable pour votre routine skincare","/Blog/2"),
    //     BlogCarousel("/images/Blog/vitaminec/vitaminec.png","La vitamine C","","/Blog/1"),
    //     BlogCarousel("/images/Blog/cremesolaire/cremesolaire.png","La creme solaire","un indispensable pour votre routine skincare","/Blog/2")
    
    // ]

    return (<>
        <LayoutFullImage props={{titre:"DECOUVREZ VOTRE PEAU",button:<div className="absolute z-[1000] top-0 left-0 w-full h-full flex center"><div className='mt-[20%] w-fit h-fit p-2 text-white_coffee text-[12px] sm:text-[40px] flex center'><div className="w-fit py-2 px-6 bg-blue rounded-3xl" >Et révélez votre beauté naturelle</div></div></div>,image1:{url:"/images/visage/fullvisage.png",alt:"fullvisage"}}}/>
        <Layout1image props={{col1:switchtext("presentation"),image1:{url:"/images/visage/visage2.png",alt:"visage2"}}} />
        <Layout2image props={{col1:switchtext("apropos"),col2:switchtext("apropos2"),image1:{url:"/images/visage/visage7.png",alt:"visage7"},image2:{url:"/images/visage/visage8.png",alt:"visage8"}}} />
        {/* <div className='w-full flex center'>
            <div className='w-[80%]'>
                <Layout3image props={{titre:switchtext("produittitre"),col1:switchtext("produitcol1"),image1:{url:produit1,alt:"produit1",className:"h-[530px] w-fit"},col2:switchtext("produitcol2"),image2:{url:produit2,alt:"produit2",className:"h-[530px] w-fit"},col3:switchtext("produitcol3"),image3:{url:produit3,alt:"produit3",className:"h-[530px] w-fit"}}}/>
            </div>
        </div>
         <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div> */}
        <div><p className="mt-[30px] text-[12px] sm:text-[50px] font-mt-bold text-blue ">Nos conseils </p></div>
        <Carousel2 props={{items:listCarousel,nbShow:1,ratio:25,showPoint:true}}/>
        {/* <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div> */}
        <div className='mt-[20px]'></div>
        {/* <Carousel props={{titre:"Nos conseils...",col:switchtext("Carousel1")}} /> */}
        <ExpertiseHome />
       </>)
}

export default Home