
import LayoutFullImage from '../components/Layout/LayoutFullImage';
import Layout1image from '../components/Layout/Layout1image';
import Layout2image from '../components/Layout/Layout2image';
import ExpertiseHome from '../components/ExpertiseHome';

import {switchtext} from './../components/textdivers';

import fullvisage from "./../images/visage/fullvisage.png";
import visage2 from "./../images/visage/visage2.png";
import visage7 from "./../images/visage/visage7.png";
import visage8 from "./../images/visage/visage8.png";
import visage5 from "./../images/visage/visage5.png";

import visage22 from "./../images/visage/visage22.png";
import visage23 from "./../images/visage/visage23.png";

import Carousel2 from '../components/Layout/Carousel2';

import vitaminec from "./../images/Blog/vitaminec.png";
import cremesolaire from "./../images/Blog/cremesolaire.png";
import { Link } from 'react-router-dom';
const Home = ()=>{
    function itemCarousel(image,col){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <div>
                    <div className="mt-[20px] w-full flex center h-[250px]"> <img src={image}  alt="CarouselItem" className='h-[250px]'/></div>  
                    {switchtext(col)}    
                </div>
            </div>
            </>)

    }
    let listCarousel = [
        itemCarousel(visage5,"Carousel1"),
        itemCarousel(visage22,"Carousel2"),
        itemCarousel(visage23,"Carousel3")
    ]
    function BlogCarousel(image,titre,url){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <Link to={url}>
                    <div className="mt-[20px] w-full flex center h-[250px]"> <img src={image}  alt="CarouselItem" className='h-[250px]'/></div>  
                    <div className='absolute top-0 left-0 w-full h-full flex center'><p className='text-white mt-2 text-[30px] font-av-bold'>{titre}</p></div>    
                </Link>
            </div>
            </>)
    }
    let listBlogCarousel = [
        BlogCarousel(vitaminec,"","/Blog/1"),
        BlogCarousel(cremesolaire,"La creme solaire","/Blog/2"),
        BlogCarousel(vitaminec,"","/Blog/1"),
        BlogCarousel(cremesolaire,"La creme solaire","/Blog/2")
    ]

    return (<>
        <LayoutFullImage props={{titre:"DECOUVREZ VOTRE PEAU",button:<div className="absolute z-[1000] top-0 left-0 w-full h-full flex center"><div className='mt-[20%] w-fit h-fit p-2 text-white_coffee text-[40px] flex center'><div className="w-fit py-2 px-6 bg-blue rounded-3xl" >Et révélez votre beauté naturelle</div></div></div>,image1:{url:fullvisage,alt:"fullvisage"}}}/>
        <Layout1image props={{col1:switchtext("presentation"),image1:{url:visage2,alt:"visage2"}}} />
        <Layout2image props={{col1:switchtext("apropos"),col2:switchtext("apropos2"),image1:{url:visage7,alt:"visage7"},image2:{url:visage8,alt:"visage8"}}} />
        {/* <div className='w-full flex center'>
            <div className='w-[80%]'>
                <Layout3image props={{titre:switchtext("produittitre"),col1:switchtext("produitcol1"),image1:{url:produit1,alt:"produit1",className:"h-[530px] w-fit"},col2:switchtext("produitcol2"),image2:{url:produit2,alt:"produit2",className:"h-[530px] w-fit"},col3:switchtext("produitcol3"),image3:{url:produit3,alt:"produit3",className:"h-[530px] w-fit"}}}/>
            </div>
        </div>
         <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div> */}
        <div><p className="mt-[30px] text-[50px] font-av-bold text-blue ">Nos conseils </p></div>
        <Carousel2 props={{items:listCarousel,nbShow:1,ratio:25,showPoint:true}}/>
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        <div><p className="mt-[30px] text-[50px] font-av-bold text-blue ">Notre blog </p></div>
        <Carousel2 props={{items:listBlogCarousel,nbShow:2,ratio:25,showPoint:true}}/>
        
        <div className='mt-[20px]'></div>
        {/* <Carousel props={{titre:"Nos conseils...",col:switchtext("Carousel1")}} /> */}
        <ExpertiseHome />
       </>)
}

export default Home