
import LayoutFullImage from '../components/Layout/LayoutFullImage';
import Layout1image from '../components/Layout/Layout1image';
import Layout2image from '../components/Layout/Layout2image';
import ExpertiseHome from '../components/ExpertiseHome';

import {switchtext} from './../components/textdivers';

import Carousel2 from '../components/Layout/Carousel2';

import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { getBlogs } from '../services/Blog';
const Home = ()=>{
    const [itemList,setItemList]= useState([])
    const useApi = false;
    function itemCarouselOld(image,col,url){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <Link to={url}>
                    <div className="mt-[20px] w-full flex center h-[100px] sm:h-[250px]"> <img src={image}  alt="CarouselItem" className='h-[100px] sm:h-[250px] w-fit'/></div>  
                    {switchtext(col)}    
                </Link>
            </div>
        </>)
    }
    useEffect(() => {
        const fetchData = async() => {
            const blogs = await getBlogs();
            setItemList(blogs)
            
        };
        if(useApi){fetchData();}
    }, [])
    
    let listCarousel = [
        itemCarouselOld("/images/Blog/vitaminec/vitaminec.png","VitamineC","/Blog/vitaminec"),
        itemCarouselOld("/images/Blog/cremesolaire/cremesolaire.png","CremeSolaire","/Blog/cremesolaire"),
        itemCarouselOld("/images/Blog/avoirunebellepeau/avoirunebellepeau.png","AvoirUneBellePeau","/Blog/avoirunebellepeau"),
        itemCarouselOld("/images/Blog/peauparfaite/peauparfaite.png","PeauParfaite","/Blog/peauparfaite")
    
    ]
    const BlogCarousel = useMemo(() =>
    { 
        let list = []
        if(useApi && Object.keys(itemList).length){itemList.map(blog=>{list.push(itemCarousel(blog.imagepresentation,blog.altimagepresentation,blog.title,blog.textpresentation,blog.altimagepresentation))})}
        if(!useApi ){list = listCarousel}
        return <Carousel2 props={{items:list,nbShow:1,ratio:25,showPoint:true}}/>
    }, [itemList])

    function itemCarousel(image,altimage,title,text,url){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <Link to={url}>
                    <div className="mt-[20px] w-full flex center h-[100px] sm:h-[250px]"> <img src={image}  alt={altimage} className='h-[100px] sm:h-[250px] w-fit'/></div>  
                    <div className="h-[100px] sm:h-[150px] flex center flex-col">
                        <p className="w-[90%] sm:w-[70%] mt-[6px] sm:mt-[20px] text-[8px] sm:text-[16px] font-mt-bold text-blue">{title}</p>    
                        <p className="w-[90%] sm:w-[70%] text-[8px] sm:text-[16px] mt-[5px] text-justify ">{text}</p>
                    </div>
                </Link>
            </div>
            </>)

    }


    
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
        {BlogCarousel}
        {/* <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div> */}
        <div className='mt-[20px]'></div>
        {/* <Carousel props={{titre:"Nos conseils...",col:switchtext("Carousel1")}} /> */}
        <ExpertiseHome />
       </>)
}

export default Home