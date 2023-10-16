
import { useEffect, useMemo, useState } from 'react';
import {Link, useParams } from 'react-router-dom';


import Carousel2 from '../components/Layout/Carousel2';
import { switchtext } from '../components/textdivers';



const Blog = () =>{
    const params = useParams();
    
    const [image,setImage] = useState();
    const [text,setText] = useState();
    const [titre,setTitre] = useState();
    const [titre1,setTitre1] = useState();
    const [image1,setImage1] = useState();

    const [text1,setText1] = useState();
    const [titre2,setTitre2] = useState();
    const [text2,setText2] = useState();
    const [titre3,setTitre3] = useState();
    const [text3,setText3] = useState();
    const [text3b,setText3b] = useState();
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
    const [titre7,setTitre7] = useState();
    const [text7,setText7] = useState();
    const [image7,setImage7] = useState();
    const [titre8,setTitre8] = useState();
    const [text8,setText8] = useState();
    const [image8,setImage8] = useState();
    const [titre9,setTitre9] = useState();
    const [text9,setText9] = useState();
    const [image9,setImage9] = useState();
    const [titre10,setTitre10] = useState();
    const [text10,setText10] = useState();
    const [image10,setImage10] = useState();
    const [conclusion, setConclusion] = useState();

    const [margin,setMargin] = useState("my-2 sm:my-8");

    const [listItem,setListItem] = useState({
        titre:[],
        text:[],
        image:[],
        atlimage:[],
        textcolor:[],
        layout:[]
    });
    //Layout list : IF -> fullimage, IFT -> fullimage avec un titre, IFD -> image avec du text en dessous, IFTD combine IFT && IFD , TF -> fulltext, TL -> layout avec text à gauche et image à droite, TR -> layout avec image à gauche et text à droite
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

    let listCarousel = [
        itemCarousel("/images/Blog/vitaminec/vitaminec.png","VitamineC","/Blog/vitaminec"),
        itemCarousel("/images/Blog/cremesolaire/cremesolaire.png","CremeSolaire","/Blog/cremesolaire"),
        itemCarousel("/images/visage/visage10.png","AvoirUneBellePeau","/Blog/avoirunebellepeau"),
        itemCarousel("/images/quisommesnous.png","PeauParfaite","/Blog/peauparfaite"),
    ]

    
    useEffect(()=>{
        switch(params.BlogId){
            case "vitaminec":
                setListItem({
                    titre:["La vitamine C","","1. Un puissant antioxydant :","2. Une peau plus lumineuse et éclatante :","","3. Une protection contre les dommages causés par le soleil ","4. Une action anti-inflammatoire :","Comment appliquer la vitamine C et l'écran solaire ? "],
                    text:["","La vitamine C est depuis longtemps considérée comme un nutriment essentiel pour notre santé globale. Mais saviez-vous que cette vitamine joue également un rôle crucial dans le maintien d'une peau saine et radieuse ? La vitamine C est devenue un ingrédient incontournable dans de nombreux produits de soin de la peau, et pour de bonnes raisons. Dans cet article, nous explorerons les nombreux bienfaits de la vitamine C pour la peau et pourquoi vous devriez l'incorporer dans votre routine de soins.",
                        "La vitamine C est un antioxydant puissant qui aide à neutraliser les radicaux libres dans notre peau. Ces radicaux libres sont des molécules instables qui endommagent les cellules de la peau, entraînant un vieillissement prématuré et des problèmes cutanés. En utilisant des produits contenant de la vitamine C, vous pouvez protéger votre peau contre ces dommages et prévenir les signes du vieillissement tels que les rides, les ridules et les taches pigmentaires.",
                        "La vitamine C joue un rôle clé dans la production de collagène, une protéine essentielle qui maintient la structure et l'élasticité de la peau. En stimulant la production de collagène, la vitamine C aide à lisser la texture de la peau, à réduire les taches sombres et à donner à votre teint un éclat sain et lumineux. Vous remarquerez une amélioration globale de la qualité de votre peau, avec une apparence plus jeune et plus radieuse.",
                        "","Bien que la vitamine C ne remplace pas un écran solaire, elle peut aider à renforcer la protection de votre peau contre les dommages causés par les rayons UV. En combinaison avec un écran solaire, la vitamine C peut réduire les effets néfastes du soleil tels que les coups de soleil, les taches de vieillesse et le photovieillissement. Elle aide également à atténuer les rougeurs causées par l'exposition au soleil, laissant votre peau apaisée et revitalisée",
                        "La vitamine C possède des propriétés anti-inflammatoires qui peuvent apaiser les irritations de la peau et réduire les rougeurs. Si vous avez une peau sensible ou sujette à l'acné, l'utilisation de produits à base de vitamine C peut aider à calmer les inflammations et à améliorer l'apparence globale de votre peau. La vitamine C est un ingrédient précieux pour votre routine de soins de la peau. En tant qu'antioxydant puissant, elle protège votre peau des radicaux libres et prévient les signes du vieillissement. Elle améliore également la texture de la peau, lui donnant un éclat sain et lumineux. Avec ses propriétés anti-inflammatoires, la vitamine C apaise les irritations cutanées et aide à réduire les rougeurs. Alors, pourquoi ne pas intégrer ce super ingrédient dans votre routine quotidienne et offrir à votre peau tous les bienfaits qu'elle mérite ?",
                        "Pour une utilisation optimale de la vitamine C et de l'écran solaire, nettoyez votre visage, appliquez délicatement le sérum à base de vitamine C en massant doucement, puis appliquez généreusement l'écran solaire pour une protection complète contre les rayons UV. Répétez cette routine chaque matin pour préserver la santé et la beauté de votre peau."],
                    image:["/images/Blog/vitaminec/vitaminec.png","/images/Blog/vitaminec/vitaminec1.png","","","/images/Blog/vitaminec/vitaminec2.png","","/images/Blog/vitaminec/vitaminec3.png","/images/Blog/vitaminec/vitaminec4.png"],
                    atlimage:["vitaminec","vitaminec1","","","vitaminec2","","vitaminec3","vitaminec4"],
                    textcolor:["","","","","","","",""],
                    layout:["IFT","TL","TF","TF","IF","TF","TR","TL"]
                })
                setConclusion(null);
                setMargin("my-2 sm:my-6");
                break;
            case "cremesolaire":
                setListItem({
                    titre:["La creme solaire : un indispensable pour votre routine skincare","","1. L’importance des bons gestes et produits dans une skincare routine","2. Le rôle de la crème solaire dans une routine skincare adaptée","","3. Les différents indices de protection solaire (SPF)"],
                    text:["","Il est recommandé de se créer une routine pour prendre soin de soi de façon régulière avec les produits adaptés à ton type de peau. L'ordre d'utilisation des soins va influencer leur efficacité. Ici, on vous aide à établir votre routine skincare pour satisfaire les besoins de votre peau.",
                        "Une routine beauté est essentielle pour prendre soin de sa peau, quelque soit son type. Des bonnes habitudes au quotidien peuvent offrir de beaux résultats rapidement et sur le long terme. Il faudra toutefois être plus ou moins patientes selon les exigences de son type de peau. Une routine beauté est une expression adoptée par beaucoup de personnes afin d’affiner leur grain de peau. Une routine beauté c’est tout simplement lorsque nous suivons un rituel de beauté singulier au quotidien. Chaque matin et chaque soir, nous avons donc des gestes précis et des produits adaptés pour prendre soin de notre visage, ou de notre corps.",
                        "Dans le monde des soins de la peau, il existe un produit incontournable qui ne devrait pas être négligé : la crème solaire. Que vous soyez adepte d'une routine skincare complexe ou que vous préfériez une routine plus simple, l'utilisation quotidienne d'une crème solaire est essentielle pour maintenir une peau saine et protégée contre toutes agressions et pollutions. Les rayons du soleil sont une source importante de dommages cutanés, tels que le vieillissement prématuré de la peau, les taches brunes, les rides, l’hyperpigmentation et même le risque de cancer de la peau. C'est pourquoi il est primordial de se protéger en utilisant une crème solaire adaptée. Lorsque vous choisissez une crème solaire, assurez vous qu'elle offre une protection à large spectre contre les rayons UVA et UVB. Les rayons UVA sont responsables du vieillissement cutané, tandis que les rayons UVB sont à l'origine des coups de soleil. Optez également pour un indice de protection solaire (SPF) d'au moins 30 pour une protection efficace.",
                        "La crème solaire doit être appliquée généreusement sur l'ensemble du visage et du corps, environ 15 minutes avant toute exposition au soleil. N'oubliez pas de réappliquer toutes les deux heures, ou plus fréquemment si vous transpirez ou vous baignez. Certaines crèmes solaires sont spécialement formulées pour répondre aux besoins spécifiques de chaque type de peau, que vous ayez la peau sèche, grasse, sensible ou sujette à l'acné. Il existe également des options teintées pour ceux qui souhaitent unifier leur teint tout en se protégeant du soleil. N'oubliez pas que la crème solaire ne doit pas être réservée uniquement aux journées ensoleillées d'été. Les rayons UV sont présents toute l'année, même par temps nuageux, et peuvent pénétrer à travers les fenêtres. Il est donc important d'intégrer la crème solaire à votre routine quotidienne, quelle que soit la saison.",
                        "L'indice de protection solaire (SPF), également connu sous le nom de facteur de protection solaire, est une mesure utilisée pour évaluer l'efficacité d'un produit de protection solaire contre les rayons ultraviolets (UV) du soleil.",
                        "L'indice SPF est généralement exprimé par un numéro, tel que SPF 15, SPF 30, SPF 50, etc. Ce numéro indique le niveau de protection offert par le produit. Plus le numéro est élevé, plus la protection est forte. Par exemple, un produit avec un SPF 15 signifie qu'il prendra environ 15 fois plus de temps pour que votre peau brûle par rapport à une exposition sans protection. Un produit avec un SPF 30 offre une protection deux fois plus longue qu'un produit avec un SPF 15, et ainsi de suite. En conclusion, la crème solaire est un élément essentiel de votre routine skincare. Protéger votre peau contre les rayons du soleil vous aidera à prévenir les dommages cutanés à long terme et à maintenir une peau saine et radieuse. Alors n'oubliez pas d'ajouter ce produit indispensable à votre trousse de beauté et profitez pleinement du soleil en toute sécurité !"],
                    image:["/images/Blog/cremesolaire/cremesolaire.png","","/images/Blog/cremesolaire/cremesolaire1.png","","/images/Blog/cremesolaire/cremesolaire2.png","/images/Blog/cremesolaire/cremesolaire3.png"],
                    atlimage:["cremesolaire","cremesolaire1","","cremesolaire2","cremesolaire3"],
                    textcolor:["","","","","","","",""],
                    layout:["IFT","TF","TL","TF","IFD","TR","TF"]
                })
                
                setMargin("my-2 sm:my-8");
                break;
        
            case "avoirunebellepeau":
                setListItem({
                    titre:["Les gestes à éviter pour avoir une belle peau","1. Se coucher sans se démaquiller le visage","2. Trop se laver le visage","3. Négliger la protection solaire","4. Presser les boutons","","5. Utiliser des produits inadaptés","6. Ignorer votre alimentation","7. Fumer et abuser de l'alcool"],
                    text:["Avoir une belle peau, c'est l’objectif de beaucoup d'entre nous. Pourtant, il est parfois plus difficile de savoir ce qu'il faut éviter que ce qu'il faut faire pour obtenir une peau radieuse. Dans cet article, nous allons passer en revue les gestes à éviter absolument pour préserver la santé et la beauté de votre peau.",
                        "C'est l'une des erreurs les plus courantes et les plus néfastes pour la peau. Le maquillage, la saleté, la pollution et les impuretés qui s'accumulent sur votre visage tout au long de la journée obstruent les pores et peuvent provoquer des problèmes de peau tels que l'acné. Assurez vous de vous démaquiller chaque soir avec un produit adapté à votre type de peau et à vos besoins.",
                        "Bien que le nettoyage du visage soit essentiel, il est tout aussi important de ne pas en abuser. Se laver le visage excessivement peut perturber la flore, l'équilibre naturel de la peau et la priver de ses huiles essentielles. Optez pour un nettoyage doux, matin et soir, pour éviter de dessécher votre peau.",
                        "L'exposition au soleil sans protection adéquate est l'une des principales causes du vieillissement prématuré de la peau et des problèmes de pigmentation. Même par temps nuageux, il est essentiel d'appliquer un écran solaire avec un SPF approprié pour protéger votre peau des rayons UV nocifs.",
                        "Nous avons tous été tentés de presser un bouton disgracieux, mais cela peut aggraver la situation en provoquant des cicatrices, des taches noires ou des infections. Il vaut mieux laisser la peau guérir naturellement ou consulter un professionnel de la dermatologie pour des traitements appropriés et approfondis si nécessaire.",
                        "","L'utilisation de produits qui ne conviennent pas à votre type de peau peut avoir des conséquences très néfastes sur votre peau. Que vous ayez une peau grasse, sèche, mixte ou sensible, choisissez des produits conçus spécifiquement pour répondre à vos besoins.",
                        "Votre alimentation joue un rôle crucial dans la santé de votre peau. Une alimentation équilibrée riche en fruits, fibres, légumes, et en acides gras essentiels contribue à maintenir une peau saine et lumineuse. Évitez les excès de sucre, de graisses et d'aliments transformés, qui peuvent provoquer des problèmes cutanés.",
                        "Le tabagisme et la consommation excessive d'alcool sont deux habitudes qui ont un impact négatif sur la peau. Ils réduisent la circulation sanguine, privant ainsi la peau d'oxygène et de nutriments essentiels, ce qui entraîne un teint terne et des rides prématurées.",
                        "En conclusion, obtenir une belle peau nécessite de prendre soin d'elle au quotidien, mais il est tout aussi important de connaître les gestes à éviter. En évitant ces erreurs courantes, vous pouvez préserver la santé et la jeunesse de votre peau, pour un teint radieux et éclatant de beauté. N'oubliez pas que chaque peau est unique, alors adaptez votre routine en fonction de vos besoins spécifiques, de votre type de peau, et n'hésitez pas à consulter un spécialiste si vous avez des préoccupations particulières concernant votre peau."],
                    image:["/images/Blog/avoirunebellepeau/avoirunebellepeau.png","","","","","/images/Blog/avoirunebellepeau/avoirunebellepeau2.png",""],
                    atlimage:["avoirunebellepeau","","","","","avoirunebellepeau2",""],
                    textcolor:["text-black","","","","","",""],
                    layout:["IFTD","TF","TF","TF","TF","IF","TF","TF","TF","TF"]
                })
                setMargin("my-2 sm:my-4");
                break;
            case "peauparfaite":
                setImage("/images/quisommesnous.png");
                setText(null);
                setTitre1("Les 10 étapes d'une routine de soin pour une peau parfaite");
                setImage1(null);
                setText1("Prendre soin de sa peau est un acte d'amour envers soi-même. Une routine de soin de la peau bien établie peut vous aider à maintenir une peau saine, lumineuse et belle. Pour qu’une routine visage soit efficace, il y a quelques règles et étapes à respecter. Des étapes que l’on oublie, que l’on néglige, ou simplement que l’on ne connaît pas parfois. On vous dévoile ici les différentes étapes pour avoir une peau saine et éclatante !")
                setTitre2("1. Le démaquillage :");
                setText2("Si vous portez du maquillage, retirez-le soigneusement à l'aide d'un démaquillant doux. Assurez-vous de ne laisser aucune trace de maquillage.");
                setTitre3("2. Le nettoyage :");
                setText3("La première étape consiste à nettoyer votre visage matin et soir. Choisissez un nettoyant adapté à votre type de peau pour éliminer les impuretés, le reste de maquillage et l'excès de sébum.")
                setImage3(null);
                setTitre4("3. L'exfoliation :");
                setText4("Exfoliez votre peau une à deux fois par semaine pour éliminer les cellules mortes et favoriser le renouvellement cellulaire. Utilisez un gommage ou un exfoliant chimique selon vos préférences.");
                setImage4(null);
                setTitre5("4. Le tonique : ");
                setText5("Appliquez un tonique pour rééquilibrer le pH de votre peau et préparer votre épiderme à absorber les produits qui suivront.");
                setImage5(null);
                setTitre5("5. Le sérum :");
                setText5("Les sérums sont des produits concentrés en actifs. Choisissez un sérum adapté à vos besoins spécifiques, qu'il s'agisse d'hydratation, d'anti-âge, de pigmentation, ou autre.");
                setImage6(null);
                setTitre6("6. L'hydratation : ");
                setText6("Hydratez votre peau avec une crème adaptée à votre type de peau. L'hydratation est cruciale pour maintenir une barrière cutanée saine et pour éviter la sensation de tiraillement ou de fini gras.");
                setImage7(null);
                setTitre7("7. Le contour des yeux :");
                setText7("Appliquez une crème spécifique pour le contour des yeux pour hydrater cette zone délicate et prévenir les ridules. Faites attention aux composants des produits que vous mettez autour des yeux. Prenez l’avis des spécialistes.");
                setImage8(null);
                setTitre8("8. La protection solaire :");
                setText8("Même les jours nuageux, protégez votre peau des rayons UV en utilisant un écran solaire avec un SPF approprié. C'est l'un des moyens les plus efficaces pour prévenir le vieillissement prématuré et les problèmes de pigmentation.");
                setImage9(null);
                setTitre9("9. Les soins ciblés : ");
                setText9("Si vous avez des problèmes de peau spécifiques, comme l'acné ou la rosacée, appliquez les traitements adaptés après le sérum, mais avant l'hydratant.");
                setImage10(null);
                setTitre10("10. Le repos : ");
                setText10("Enfin, ne sous-estimez pas l'importance du sommeil. Une nuit de repos réparateur contribue grandement à la régénération de la peau et lui donne un aspect plus reposant et éclatant.");
                setConclusion(null);
                setMargin("my-2 sm:my-4");
                break;
            default:
                setImage(null);
                setText(null);
                setTitre1(null);
                setImage1(null);
                setText1(null);
                setTitre2(null);
                setText2(null);
                setTitre3(null);
                setText3(null);
                setImage3(null);
                setTitre4(null);
                setText4(null);
                setImage4(null);
                setTitre5(null);
                setText5(null);
                setImage5(null);
                setTitre5(null);
                setText5(null);
                setImage6(null);
                setTitre6(null);
                setText6(null);
                setImage7(null);
                setTitre7(null);
                setText7(null);
                setImage8(null);
                setTitre8(null);
                setText8(null);
                setImage9(null);
                setTitre9(null);
                setText9(null);
                setImage10(null);
                setTitre10(null);
                setText10(null);
                setConclusion(null);
        }
    },[params])

    function returnTextWithImage(titre,text,image,altimage,pos){
        if(pos == false){
            return <div className={`w-[90%] sm:w-[86%] h-fit ${margin}`}>
                {!!titre &&<div className={`w-full h-fit ${margin}`}><h1 className='text-left text-[20px] sm:text-[50px] text-blue font-mt-bold'>{titre}</h1></div>}
                {(!!image || !!text) && <div className={`flex center w-full h-fit gap-2 sm:gap-8`}>
                    {!!image && <div className={`${text ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image} alt={altimage} className='w-fit h-full'></img></div>}
                    {!!text && <div className={`${image ? "w-2/3" : "w-full"} h-fit flex center`}><div className='mx-auto text-[8px] sm:text-[22px] text-justify'>{text}</div></div>}
                </div>}</div>
        }else{
            return <div className={`w-[90%] sm:w-[86%] h-fit ${margin}`}>
                {!!titre &&<div className={`w-full h-fit ${margin}`}><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre}</h1></div>}
                {(!!image ||!!text ) && <div className={`flex center w-full h-fit gap-2 sm:gap-8`}>
                {!!text && <div className={`${image ? "w-2/3" : "w-full"} h-fit flex center`}><div className='mx-auto text-[8px] sm:text-[20px] text-justify'>{text}</div></div>}
                {!!image && <div className={`${text ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image} alt={altimage} className='w-fit h-full'></img></div>}
            </div>}
            </div>
        }
    }
    function returnFullImageWithTitre(titre,image,altimage,textcolor){
        return <>{!!image && <div className='relative w-full h-fit'>
            <img className='w-full h-fit' src={image} alt={altimage}></img>
            {!!titre && <div className='absolute top-0 left-0 w-full h-full flex center'><p className={`w-[60%] ${textcolor ? textcolor : "text-white"} mt-2 text-[20px] sm:text-[50px] font-mt-bold`}>{titre}</p></div>}
        </div>}</>
    }
    function returnFullImage(image,altimage){
        return <>{!!image && <div className='relative w-full h-fit'>
            <img className='w-full h-fit ' src={image} alt={altimage}></img>
        </div>} </>
    }
    function returnImageWithTextDown(text,image,altimage){
        return <div className={`w-full h-fit ${margin}`}>
        {(!!image ||!!text ) && <div className={`flex center flex-col w-full h-full  gap-2 sm:gap-8`}>
            {!!image && <div className={`w-full h-fit flex center`}><img src={image} alt={altimage} className='w-full h-fit'></img></div>}
            {!!text && <div className={`w-[90%] sm:w-[86%] h-fit flex center`}><div className='mx-auto text-[8px] sm:text-[20px] text-justify'>{text}</div></div>}
        </div>}
        </div>
    }
    function returnFullImageWithTitreAndTextDown(titre,text,image,altimage,textcolor){
        return <div className={`w-full h-fit ${margin}`}>
        {(!!image ||!!text ) && <div className={`flex center flex-col w-full h-full  gap-2 sm:gap-8`}>
            {!!image && <div className='relative w-full h-fit'>
            <img className='w-full h-fit' src={image} alt={altimage}></img>
            {!!titre && <div className='absolute top-0 left-0 w-full h-full flex center'><p className={`w-[60%] ${textcolor ? textcolor : "text-white"} mt-2 text-[20px] sm:text-[50px] font-mt-bold`}>{titre}</p></div>}
            </div>}
            {!!text && <div className={`w-[90%] sm:w-[86%] h-fit flex center`}><div className='mx-auto text-[8px] sm:text-[20px] text-justify'>{text}</div></div>}
        </div>}
        </div>
        return <>{!!image && <div className='relative w-full h-fit'>
            <img className='w-full h-fit' src={image} alt={altimage}></img>
            {!!titre && <div className='absolute top-0 left-0 w-full h-full flex center'><p className={`w-[60%] ${textcolor ? textcolor : "text-white"} mt-2 text-[20px] sm:text-[50px] font-mt-bold`}>{titre}</p></div>}
        </div>}</>
    }
    function switchLayout(layout,titre,text,image,altimage,textcolor){
        // console.log('layout : ', layout,titre,image,altimage)
        // console.log('text : ', text)
        
        switch(layout){
            case "IF":
                return returnFullImage(image,altimage);
            case "IFT":
                return returnFullImageWithTitre(titre,image,altimage,textcolor);
            case "IFD":
                return returnImageWithTextDown(text,image,altimage);
            case "IFTD":
                return returnFullImageWithTitreAndTextDown(titre,text,image,altimage,textcolor)
            case "TF":
                return returnTextWithImage(titre,text,null,null,false);
            case "TL":
                return returnTextWithImage(titre,text,image,altimage,false);
            case "TR":
                return returnTextWithImage(titre,text,image,altimage,true);
            default:
                return <></>
        }
    }

    //Layout list : IF -> fullimage, IFT -> fullimage avec un titre, TF -> fulltext, TL -> layout avec text à gauche et image à droite, TR -> layout avec image à gauche et text à droite
    
    
    return (<div className='w-full h-full flex center flex-col'>
        {Object.keys(listItem).length && listItem.layout.map((itemLayout,posLayout)=>{return switchLayout(itemLayout,listItem.titre[posLayout],listItem.text[posLayout],listItem.image[posLayout],listItem.atlimage[posLayout],listItem.textcolor[posLayout])})}
    
    
        
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        <div><h1 className="mt-[12px] sm:mt-[30px] text-[12px] sm:text-[50px] font-mt-bold text-blue ">Articles connexes :</h1></div>
        <Carousel2 props={{items:listCarousel,nbShow:1,ratio:25,showPoint:true}}/>
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        
    </div>)
    
}
export default Blog;