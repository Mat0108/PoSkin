
import { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';


import Carousel2 from '../components/Layout/Carousel2';

import VitamineC0 from "./../images/Blog/vitaminec.png";
import VitamineC1 from "./../images/Blog/vitaminec1.png";
import VitamineC2 from "./../images/Blog/vitaminec2.png";
import VitamineC3 from "./../images/Blog/vitaminec3.png";
import VitamineC4 from "./../images/Blog/vitaminec4.png";
import cremesolaire from "./../images/Blog/cremesolaire.png";
const Blog = () =>{
    const params = useParams();
    
    const [image,setImage] = useState();
    const [titre1,setTitre1] = useState();
    const [image1,setImage1] = useState();
    const [text1,setText1] = useState();
    const [titre2,setTitre2] = useState();
    const [text2,setText2] = useState();
    const [titre3,setTitre3] = useState();
    const [text3,setText3] = useState();
    const [image3,setImage3] = useState();
    const [titre4,setTitre4] = useState();
    const [text4,setText4] = useState();
    const [image4,setImage4] = useState();
    const [titre5,setTitre5] = useState();
    const [text5,setText5] = useState();
    const [image5,setImage5] = useState();
    const [titre6,setTitre6] = useState();
    const [text6,setText6] = useState();
    const [image6,setImage6] = useState();
    function BlogCarousel(image,titre,url){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <Link to={url}>
                    <div className="mt-[20px] w-full flex center h-[250px]"> <img src={image}  alt="image" className='h-[250px]'/></div>  
                    <div className='absolute top-0 left-0 w-full h-full flex center'><p className='text-white mt-2 text-[30px] font-av-bold'>{titre}</p></div>    
                </Link>
            </div>
            </>)
    }
    let listBlogCarousel = [
        BlogCarousel(VitamineC0,"","/Blog/1"),
        BlogCarousel(cremesolaire,"La creme solaire","/Blog/2")
    ]


    useEffect(()=>{
        switch(params.BlogId){
            case "1":
                setImage(VitamineC0)
                setTitre1(null);
                setImage1(VitamineC1)
                setText1("La vitamine C est depuis longtemps considérée comme un nutriment essentiel pour notre santé globale. Mais saviez-vous que cette vitamine joue également un rôle crucial dans le maintien d'une peau saine et radieuse ? La vitamine C est devenue un ingrédient incontournable dans de nombreux produits de soin de la peau, et pour de bonnes raisons. Dans cet article, nous explorerons les nombreux bienfaits de la vitamine C pour la peau et pourquoi vous devriez l'incorporer dans votre routine de soins.")
                setTitre2("1. Un puissant antioxydant :")
                setText2("La vitamine C est un antioxydant puissant qui aide à neutraliser les radicaux libres dans notre peau. Ces radicaux libres sont des molécules instables qui endommagent les cellules de la peau, entraînant un vieillissement prématuré et des problèmes cutanés. En utilisant des produits contenant de la vitamine C, vous pouvez protéger votre peau contre ces dommages et prévenir les signes du vieillissement tels que les rides, les ridules et les taches pigmentaires.")
                setTitre3("2. Une peau plus lumineuse et éclatante :")
                setText3("La vitamine C joue un rôle clé dans la production de collagène, une protéine essentielle qui maintient la structure et l'élasticité de la peau. En stimulant la production de collagène, la vitamine C aide à lisser la texture de la peau, à réduire les taches sombres et à donner à votre teint un éclat sain et lumineux. Vous remarquerez une amélioration globale de la qualité de votre peau, avec une apparence plus jeune et plus radieuse.")
                setImage3(VitamineC2)
                setTitre4("3. Une protection contre les dommages causés par le soleil :")
                setText4("Bien que la vitamine C ne remplace pas un écran solaire, elle peut aider à renforcer la protection de votre peau contre les dommages causés par les rayons UV. En combinaison avec un écran solaire, la vitamine C peut réduire les effets néfastes du soleil tels que les coups de soleil, les taches de vieillesse et le photovieillissement. Elle aide également à atténuer les rougeurs causées par l'exposition au soleil, laissant votre peau apaisée et revitalisée.")
                setImage4(null)
                setTitre5("4. Une action anti-inflammatoire :")
                setText5("La vitamine C possède des propriétés anti-inflammatoires qui peuvent apaiser les irritations de la peau et réduire les rougeurs. Si vous avez une peau sensible ou sujette à l'acné, l'utilisation de produits à base de vitamine C peut aider à calmer les inflammations et à améliorer l'apparence globale de votre peau.       La vitamine C est un ingrédient précieux pour votre routine de soins de la peau. En tant qu'antioxydant puissant, elle protège votre peau des radicaux libres et prévient les signes du vieillissement. Elle améliore également la texture de la peau, lui donnant un éclat sain et lumineux. Avec ses propriétés anti-inflammatoires, la vitamine C apaise les irritations cutanées et aide à réduire les rougeurs. Alors, pourquoi ne pas intégrer ce super ingrédient dans votre routine quotidienne et offrir à votre peau tous les bienfaits qu'elle mérite ?")
                setImage5(VitamineC3)
                setTitre5("4. Une action anti-inflammatoire :")
                setText5("La vitamine C possède des propriétés anti-inflammatoires qui peuvent apaiser les irritations de la peau et réduire les rougeurs. Si vous avez une peau sensible ou sujette à l'acné, l'utilisation de produits à base de vitamine C peut aider à calmer les inflammations et à améliorer l'apparence globale de votre peau.       La vitamine C est un ingrédient précieux pour votre routine de soins de la peau. En tant qu'antioxydant puissant, elle protège votre peau des radicaux libres et prévient les signes du vieillissement. Elle améliore également la texture de la peau, lui donnant un éclat sain et lumineux. Avec ses propriétés anti-inflammatoires, la vitamine C apaise les irritations cutanées et aide à réduire les rougeurs. Alors, pourquoi ne pas intégrer ce super ingrédient dans votre routine quotidienne et offrir à votre peau tous les bienfaits qu'elle mérite ?")
                setImage6(VitamineC4)
                setTitre6("Comment appliquer la vitamine C et l'écran solaire ? ")
                setText6("Pour une utilisation optimale de la vitamine C et de l'écran solaire, nettoyez votre visage, appliquez délicatement le sérum à base de vitamine C en massant doucement, puis appliquez généreusement l'écran solaire pour une protection complète contre les rayons UV. Répétez cette routine chaque matin pour préserver la santé et la beauté de votre peau.")
                break;
            default:
                setTitre1(null);
            
        }
    },[params])
    return (<div className='w-full h-full flex center flex-col'>
        {!!image && <img className='w-full h-fit ' src={VitamineC0} alt={"image"}></img>} 
        <div className='w-[86%] m-8 h-full flex center gap-8 flex-col'>
            {!!titre1 && <div className='w-full h-[100px] bg-blue'></div>}        
            {(!!image1 || !!text1) && <div className='flex center w-full h-fit gap-8  '>
                {!!image1 && <div className='w-1/3 h-[400px] flex center'><img src={image1} alt={"image1"} className='w-fit h-full'></img></div>}
                {!!text1 && <div className='w-2/3 h-[400px] flex center'><div className='mx-auto w-[90%] text-[22px] text-justify'>{text1}</div></div>}
            </div>}
            {!!titre2 &&<div className='w-full h-fit my-8'><p className='text-left text-[50px] text-blue font-av-bold'>{titre2}</p></div>}
            {!!text2 &&<div className='w-full h-fit'><p className='text-left text-[20px] text-justify'>{text2}</p></div>}
            {!!titre3 &&<div className='w-full h-fit my-8'><p className='text-left text-[50px] text-blue font-av-bold'>{titre3}</p></div>}
            {!!text3 &&<div className='w-full h-fit'><p className='text-left text-[20px] text-justify'>{text3}</p></div>}
        </div>
        {!!image3 && <img className='w-full h-fit ' src={image3} alt={"image3"}></img>} 
        
        <div className='w-[86%] m-8 h-full flex center gap-8 flex-col'>
            {!!titre4 &&<div className='w-full h-fit my-8'><p className='text-left text-[50px] text-blue font-av-bold'>{titre4}</p></div>}
            {!!text4 &&<div className='w-full h-fit'><p className='text-left text-[20px] text-justify'>{text4}</p></div>}
            
            {!!titre5 &&<div className='w-full h-fit my-8'><p className='text-left text-[50px] text-blue font-av-bold'>{titre5}</p></div>}
            
            <div className='flex center w-full h-fit '>
                {!!text5 && <div className='w-2/3 h-[400px] flex center'><div className='mx-auto w-[90%] text-[22px] text-justify'>{text5}</div></div>}
                {!!image5 && <div className='w-1/3 h-[400px] flex center'><img src={image5} alt={"image5"} className='w-fit h-full'></img></div>}
            </div>
            {!!titre6 &&<div className='w-full h-fit my-8'><p className='text-left text-[50px] text-blue font-av-bold'>{titre6}</p></div>}
            
            <div className='flex center w-full h-fit mt-8'>
                {!!image6 && <div className='w-1/3 h-[400px] flex center'><img src={image6} alt={"image6"} className='w-fit h-full'></img></div>}
                {!!text6 && <div className='w-2/3 h-[400px] flex center'><div className='mx-auto w-[90%] text-[22px] text-justify '>{text6}</div></div>}
               
            </div>
        </div>
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        <div><p className="mt-[50px] text-[50px] font-av-bold text-blue ">Articles connexes :</p></div>
        <Carousel2 props={{items:listBlogCarousel,nbShow:1,ratio:25,showPoint:true}}/>
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        
    </div>)
    
}
export default Blog;