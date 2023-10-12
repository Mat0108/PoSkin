
import { useEffect, useState } from 'react';
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
    ]


    useEffect(()=>{
        switch(params.BlogId){
            case "vitaminec":
                setImage("/images/Blog/vitaminec/vitaminec.png")
                setTitre("La vitamine C")
                setTitre1(null);
                setImage1("/images/Blog/vitaminec/vitaminec1.png")
                setText1("La vitamine C est depuis longtemps considérée comme un nutriment essentiel pour notre santé globale. Mais saviez-vous que cette vitamine joue également un rôle crucial dans le maintien d'une peau saine et radieuse ? La vitamine C est devenue un ingrédient incontournable dans de nombreux produits de soin de la peau, et pour de bonnes raisons. Dans cet article, nous explorerons les nombreux bienfaits de la vitamine C pour la peau et pourquoi vous devriez l'incorporer dans votre routine de soins.")
                setTitre2("1. Un puissant antioxydant :")
                setText2("La vitamine C est un antioxydant puissant qui aide à neutraliser les radicaux libres dans notre peau. Ces radicaux libres sont des molécules instables qui endommagent les cellules de la peau, entraînant un vieillissement prématuré et des problèmes cutanés. En utilisant des produits contenant de la vitamine C, vous pouvez protéger votre peau contre ces dommages et prévenir les signes du vieillissement tels que les rides, les ridules et les taches pigmentaires.")
                setTitre3("2. Une peau plus lumineuse et éclatante :")
                setText3("La vitamine C joue un rôle clé dans la production de collagène, une protéine essentielle qui maintient la structure et l'élasticité de la peau. En stimulant la production de collagène, la vitamine C aide à lisser la texture de la peau, à réduire les taches sombres et à donner à votre teint un éclat sain et lumineux. Vous remarquerez une amélioration globale de la qualité de votre peau, avec une apparence plus jeune et plus radieuse.")
                setImage3("/images/Blog/vitaminec/vitaminec2.png")
                setTitre4("3. Une protection contre les dommages causés par le soleil :")
                setText4("Bien que la vitamine C ne remplace pas un écran solaire, elle peut aider à renforcer la protection de votre peau contre les dommages causés par les rayons UV. En combinaison avec un écran solaire, la vitamine C peut réduire les effets néfastes du soleil tels que les coups de soleil, les taches de vieillesse et le photovieillissement. Elle aide également à atténuer les rougeurs causées par l'exposition au soleil, laissant votre peau apaisée et revitalisée.")
                setImage4(null);
                setTitre5("4. Une action anti-inflammatoire :")
                setText5("La vitamine C possède des propriétés anti-inflammatoires qui peuvent apaiser les irritations de la peau et réduire les rougeurs. Si vous avez une peau sensible ou sujette à l'acné, l'utilisation de produits à base de vitamine C peut aider à calmer les inflammations et à améliorer l'apparence globale de votre peau.       La vitamine C est un ingrédient précieux pour votre routine de soins de la peau. En tant qu'antioxydant puissant, elle protège votre peau des radicaux libres et prévient les signes du vieillissement. Elle améliore également la texture de la peau, lui donnant un éclat sain et lumineux. Avec ses propriétés anti-inflammatoires, la vitamine C apaise les irritations cutanées et aide à réduire les rougeurs. Alors, pourquoi ne pas intégrer ce super ingrédient dans votre routine quotidienne et offrir à votre peau tous les bienfaits qu'elle mérite ?")
                setImage5("/images/Blog/vitaminec/vitaminec3.png")
                setTitre5("4. Une action anti-inflammatoire :")
                setText5("La vitamine C possède des propriétés anti-inflammatoires qui peuvent apaiser les irritations de la peau et réduire les rougeurs. Si vous avez une peau sensible ou sujette à l'acné, l'utilisation de produits à base de vitamine C peut aider à calmer les inflammations et à améliorer l'apparence globale de votre peau.       La vitamine C est un ingrédient précieux pour votre routine de soins de la peau. En tant qu'antioxydant puissant, elle protège votre peau des radicaux libres et prévient les signes du vieillissement. Elle améliore également la texture de la peau, lui donnant un éclat sain et lumineux. Avec ses propriétés anti-inflammatoires, la vitamine C apaise les irritations cutanées et aide à réduire les rougeurs. Alors, pourquoi ne pas intégrer ce super ingrédient dans votre routine quotidienne et offrir à votre peau tous les bienfaits qu'elle mérite ?")
                setImage6("/images/Blog/vitaminec/vitaminec4.png")
                setTitre6("Comment appliquer la vitamine C et l'écran solaire ? ")
                setText6("Pour une utilisation optimale de la vitamine C et de l'écran solaire, nettoyez votre visage, appliquez délicatement le sérum à base de vitamine C en massant doucement, puis appliquez généreusement l'écran solaire pour une protection complète contre les rayons UV. Répétez cette routine chaque matin pour préserver la santé et la beauté de votre peau.")
                setImage7(null);
                setTitre7(null);
                setText7(null);
                setImage8(null);
                setTitre8(null);
                setText8(null);
                setConclusion(null);
                break;
            case "cremesolaire":
                setImage("/images/Blog/cremesolaire/cremesolaire.png");
                setTitre("La creme solaire : un indispensable pour votre routine skincare")
                setText("Il est recommandé de se créer une routine pour prendre soin de soi de façon régulière avec les produits adaptés à ton type de peau. L'ordre d'utilisation des soins va influencer leur efficacité. Ici, on vous aide à établir votre routine skincare pour satisfaire les besoins de votre peau.")
                setTitre1("1. L’importance des bons gestes et produits dans une skincare routine");
                setImage1("/images/Blog/cremesolaire/cremesolaire1.png")
                setText1("Une routine beauté est essentielle pour prendre soin de sa peau, quelque soit son type. Des bonnes habitudes au quotidien peuvent offrir de beaux résultats rapidement et sur le long terme. Il faudra toutefois être plus ou moins patientes selon les exigences de son type de peau. Une routine beauté est une expression adoptée par beaucoup de personnes afin d’affiner leur grain de peau. Une routine beauté c’est tout simplement lorsque nous suivons un rituel de beauté singulier au quotidien. Chaque matin et chaque soir, nous avons donc des gestes précis et des produits adaptés pour prendre soin de notre visage, ou de notre corps.")
                setTitre2("2. Le rôle de la crème solaire dans une routine skincare adaptée");
                setText2("Dans le monde des soins de la peau, il existe un produit incontournable qui ne devrait pas être négligé : la crème solaire. Que vous soyez adepte d'une routine skincare complexe ou que vous préfériez une routine plus simple, l'utilisation quotidienne d'une crème solaire est essentielle pour maintenir une peau saine et protégée contre toutes agressions et pollutions. Les rayons du soleil sont une source importante de dommages cutanés, tels que le vieillissement prématuré de la peau, les taches brunes, les rides, l’hyperpigmentation et même le risque de cancer de la peau. C'est pourquoi il est primordial de se protéger en utilisant une crème solaire adaptée. Lorsque vous choisissez une crème solaire, assurez vous qu'elle offre une protection à large spectre contre les rayons UVA et UVB. Les rayons UVA sont responsables du vieillissement cutané, tandis que les rayons UVB sont à l'origine des coups de soleil. Optez également pour un indice de protection solaire (SPF) d'au moins 30 pour une protection efficace.");
                setImage3("/images/Blog/cremesolaire/cremesolaire2.png")
                setText3b("La crème solaire doit être appliquée généreusement sur l'ensemble du visage et du corps, environ 15 minutes avant toute exposition au soleil. N'oubliez pas de réappliquer toutes les deux heures, ou plus fréquemment si vous transpirez ou vous baignez. Certaines crèmes solaires sont spécialement formulées pour répondre aux besoins spécifiques de chaque type de peau, que vous ayez la peau sèche, grasse, sensible ou sujette à l'acné. Il existe également des options teintées pour ceux qui souhaitent unifier leur teint tout en se protégeant du soleil. N'oubliez pas que la crème solaire ne doit pas être réservée uniquement aux journées ensoleillées d'été. Les rayons UV sont présents toute l'année, même par temps nuageux, et peuvent pénétrer à travers les fenêtres. Il est donc important d'intégrer la crème solaire à votre routine quotidienne, quelle que soit la saison.")
                setTitre3(null);
                setText3(null);
                setTitre4(null);
                setText4(null);
                setImage4(null);
                setTitre5("4. Les différents indices de protection solaire (SPF)");
                setText5("L'indice de protection solaire (SPF), également connu sous le nom de facteur de protection solaire, est une mesure utilisée pour évaluer l'efficacité d'un produit de protection solaire contre les rayons ultraviolets (UV) du soleil.");
                setImage5("/images/Blog/cremesolaire/cremesolaire3.png");
                setImage6(null);
                setTitre6(null);
                setText6("L'indice SPF est généralement exprimé par un numéro, tel que SPF 15, SPF 30, SPF 50, etc. Ce numéro indique le niveau de protection offert par le produit. Plus le numéro est élevé, plus la protection est forte. Par exemple, un produit avec un SPF 15 signifie qu'il prendra environ 15 fois plus de temps pour que votre peau brûle par rapport à une exposition sans protection. Un produit avec un SPF 30 offre une protection deux fois plus longue qu'un produit avec un SPF 15, et ainsi de suite. En conclusion, la crème solaire est un élément essentiel de votre routine skincare. Protéger votre peau contre les rayons du soleil vous aidera à prévenir les dommages cutanés à long terme et à maintenir une peau saine et radieuse. Alors n'oubliez pas d'ajouter ce produit indispensable à votre trousse de beauté et profitez pleinement du soleil en toute sécurité !");
                setImage7(null);
                setTitre7(null);
                setText7(null);
                setImage8(null);
                setTitre8(null);
                setText8(null);
                setConclusion(null);
                break;
        
            case "avoirunebellepeau":
                setImage(null);
                setTitre1("Les gestes à éviter pour avoir une belle peau");
                setText("Avoir une belle peau, c'est l’objectif de beaucoup d'entre nous. Pourtant, il est parfois plus difficile de savoir ce qu'il faut éviter que ce qu'il faut faire pour obtenir une peau radieuse. Dans cet article, nous allons passer en revue les gestes à éviter absolument pour préserver la santé et la beauté de votre peau.");
                setImage1(null);
                setText1(null);
                setTitre2("1. Se coucher sans se démaquiller le visage");
                setText2("C'est l'une des erreurs les plus courantes et les plus néfastes pour la peau. Le maquillage, la saleté, la pollution et les impuretés qui s'accumulent sur votre visage tout au long de la journée obstruent les pores et peuvent provoquer des problèmes de peau tels que l'acné. Assurez vous de vous démaquiller chaque soir avec un produit adapté à votre type de peau et à vos besoins.");
                setTitre3("2. Trop se laver le visage");
                setText3("Bien que le nettoyage du visage soit essentiel, il est tout aussi important de ne pas en abuser. Se laver le visage excessivement peut perturber la flore, l'équilibre naturel de la peau et la priver de ses huiles essentielles. Optez pour un nettoyage doux, matin et soir, pour éviter de dessécher votre peau.");
                setImage3(null);
                setTitre4("3. Négliger la protection solaire");
                setText4("L'exposition au soleil sans protection adéquate est l'une des principales causes du vieillissement prématuré de la peau et des problèmes de pigmentation. Même par temps nuageux, il est essentiel d'appliquer un écran solaire avec un SPF approprié pour protéger votre peau des rayons UV nocifs.");
                setImage4(null);
                setTitre5("4. Presser les boutons");
                setText5("Nous avons tous été tentés de presser un bouton disgracieux, mais cela peut aggraver la situation en provoquant des cicatrices, des taches noires ou des infections. Il vaut mieux laisser la peau guérir naturellement ou consulter un professionnel de la dermatologie pour des traitements appropriés et approfondis si nécessaire.");
                setImage5(null);
                setTitre6("5. Utiliser des produits inadaptés");
                setText6("L'utilisation de produits qui ne conviennent pas à votre type de peau peut avoir des conséquences très néfastes sur votre peau. Que vous ayez une peau grasse, sèche, mixte ou sensible, choisissez des produits conçus spécifiquement pour répondre à vos besoins.");
                setImage6(null);
                setTitre7("6. Ignorer votre alimentation");
                setText7("Votre alimentation joue un rôle crucial dans la santé de votre peau. Une alimentation équilibrée riche en fruits, fibres, légumes, et en acides gras essentiels contribue à maintenir une peau saine et lumineuse. Évitez les excès de sucre, de graisses et d'aliments transformés, qui peuvent provoquer des problèmes cutanés.");
                setImage7(null);
                setTitre8("7. Fumer et abuser de l'alcool");
                setText8("Le tabagisme et la consommation excessive d'alcool sont deux habitudes qui ont un impact négatif sur la peau. Ils réduisent la circulation sanguine, privant ainsi la peau d'oxygène et de nutriments essentiels, ce qui entraîne un teint terne et des rides prématurées.");
 
                setConclusion("En conclusion, obtenir une belle peau nécessite de prendre soin d'elle au quotidien, mais il est tout aussi important de connaître les gestes à éviter. En évitant ces erreurs courantes, vous pouvez préserver la santé et la jeunesse de votre peau, pour un teint radieux et éclatant de beauté. N'oubliez pas que chaque peau est unique, alors adaptez votre routine en fonction de vos besoins spécifiques, de votre type de peau, et n'hésitez pas à consulter un spécialiste si vous avez des préoccupations particulières concernant votre peau.");
                break;
            case "peauparfaite":
                setImage(null);
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
    return (<div className='w-full h-full flex center flex-col'>
        {!!image && <div className='relative w-full h-fit'>
            <img className='w-full ' src={image} alt={"background"}></img>
            {!!titre && <div className='absolute top-0 left-0 w-full h-full flex center'><p className='w-[60%] text-white mt-2 text-[20px] sm:text-[50px] font-mt-bold'>{titre}</p></div>}
        </div>} 
        <div className='w-[90%] sm:w-[86%] m-2 sm:m-8 h-full flex center flex-col'>
            {!!text &&<div className='w-full h-fit my-2 sm:my-8'><p className='text-left text-[10px] sm:text-[20px] text-justify'>{text}</p></div>}
            {!!titre1 &&<div className='w-full h-fit my-2 sm:my-8'><h1 className='text-left text-[20px] sm:text-[50px] text-blue font-mt-bold'>{titre1}</h1></div>}
            {(!!image1 || !!text1) && <div className='flex center w-full h-fit gap-2 sm:gap-8  '>
                {!!image1 && <div className={`${text1 ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image1} alt={"image1"} className='w-fit h-full'></img></div>}
                {!!text1 && <div className={`${image1 ? "w-2/3" : "w-full"} h-fit flex center`}><div className='mx-auto w-[90%] text-[8px] sm:text-[22px] text-justify'>{text1}</div></div>}
            </div>}
            {!!titre2 &&<div className='w-full h-fit my-2 sm:my-8'><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre2}</h1></div>}
            {!!text2 &&<div className='w-full h-fit'><p className='text-left text-[8px] sm:text-[20px] text-justify'>{text2}</p></div>}
            {!!titre3 &&<div className='w-full h-fit my-2 sm:my-8'><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre3}</h1></div>}
            {!!text3 &&<div className='w-full h-fit'><p className='text-left text-[8px] sm:text-[20px] text-justify'>{text3}</p></div>}
        </div>
        {!!image3 && <img className='w-full h-fit ' src={image3} alt={"image3"}></img>} 
        <div className='w-[90%] sm:w-[86%] m-2 sm:m-8 h-full flex center gap-2 sm:gap-8 flex-col'>
            {!!text3b &&<div className='w-full h-fit my-2 sm:my-8'><p className='text-left text-[8px] sm:text-[20px] text-justify'>{text3b}</p></div>}
            {!!titre4 &&<div className='w-full h-fit my-2 sm:my-8'><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre4}</h1></div>}
            {!!text4 &&<div className='w-full h-fit'><p className='text-left text-[8px] sm:text-[20px] text-justify'>{text4}</p></div>}
            
            {!!titre5 &&<div className='w-full h-fit my-2 sm:my-8'><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre5}</h1></div>}
            <div className='flex center w-full h-fit '>
                {!!text5 && <div className={`${image5 ? "w-2/3" : "w-full"} h-fit flex center`}><div className='mx-auto w-[90%] text-[8px] sm:text-[20px] text-justify'>{text5}</div></div>}
                {!!image5 && <div className={`${text5 ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image5} alt={"image5"} className='w-fit h-full'></img></div>}
            </div>

            {!!titre6 &&<div className='w-full h-fit my-8'><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre6}</h1></div>}
            <div className='flex center w-full h-fit mt-2 sm:mt-8'>
                {!!image6 && <div className={`${text6 ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image6} alt={"image6"} className='w-fit h-full'></img></div>}
                {!!text6 && <div className={`${image6 ? "w-2/3" : "w-full"} h-fit flex center`}><div className='mx-auto w-[90%] text-[8px] sm:text-[20px] text-justify '>{text6}</div></div>}
            </div>

            {!!titre7 &&<div className='w-full h-fit my-8'><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre7}</h1></div>}
            <div className='flex center w-full h-fit mt-2 sm:mt-8'>
                {!!image7 && <div className={`${text7 ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image7} alt={"image7"} className='w-fit h-full'></img></div>}
                {!!text7 && <div className={`${image7 ? "w-2/3" : "w-full"} h-fit flex center`}><div className='mx-auto w-[90%] text-[8px] sm:text-[20px] text-justify '>{text7}</div></div>}
            </div>

            {!!titre8 &&<div className='w-full h-fit my-8'><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre8}</h1></div>}
            <div className='flex center w-full h-fit mt-2 sm:mt-8'>
                {!!image8 && <div className={`${text8 ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image8} alt={"image6"} className='w-fit h-full'></img></div>}
                {!!text8 && <div className={`${image8 ? "w-2/3" : "w-full"} h-fit flex center`}><div className='mx-auto w-[90%] text-[8px] sm:text-[20px] text-justify '>{text8}</div></div>}
            </div>

            {!!titre9 &&<div className='w-full h-fit my-8'><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre9}</h1></div>}
            <div className='flex center w-full h-fit mt-2 sm:mt-8'>
                {!!image8 && <div className={`${text9 ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image9} alt={"image6"} className='w-fit h-full'></img></div>}
                {!!text8 && <div className={`${image9 ? "w-2/3" : "w-full"} h-fit flex center`}><div className='mx-auto w-[90%] text-[8px] sm:text-[20px] text-justify '>{text9}</div></div>}
            </div>
            
            {!!titre10 &&<div className='w-full h-fit my-8'><h1 className='text-left text-[12px] sm:text-[50px] text-blue font-mt-bold'>{titre10}</h1></div>}
            <div className='flex center w-full h-fit mt-2 sm:mt-8'>
                {!!image8 && <div className={`${text10 ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image10} alt={"image6"} className='w-fit h-full'></img></div>}
                {!!text8 && <div className={`${image10 ? "w-2/3" : "w-full"} h-fit flex center`}><div className='mx-auto w-[90%] text-[8px] sm:text-[20px] text-justify '>{text10}</div></div>}
            </div>    
        </div>
        {!!conclusion && <div className={`w-full h-fit flex center`}><div className='mx-auto w-[90%] text-[8px] sm:text-[20px] text-justify '>{conclusion}</div></div>}
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        <div><h1 className="mt-[12px] sm:mt-[30px] text-[12px] sm:text-[50px] font-mt-bold text-blue ">Articles connexes :</h1></div>
        <Carousel2 props={{items:listCarousel,nbShow:1,ratio:25,showPoint:true}}/>
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        
    </div>)
    
}
export default Blog;