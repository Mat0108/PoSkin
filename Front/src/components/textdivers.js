import buy from "../images/buy.png";
import visage5 from "../images/visage/visage5.png"
import skincare from "../images/SkinCare1.png"
const switchtext=(params)=>{
  switch(params){
    case "presentation":
      return presentation();
    case "apropos":
      return apropos();
    case "apropos2":
      return apropos2();
    case "produittitre":
      return produittitre();
    case "produitcol1":
      return produitcol1()
    case "produitcol2":
      return produitcol2(); 
    case "produitcol3":
      return produitcol3();
    case "quisommesnous":
      return quisommesnous();
    case "quisommesnous2":
      return quisommesnous2();
    case "quisommesnous3":
      return quisommesnous3();
    case "quisommesnous4":
      return quisommesnous4();
    case "Carousel1":
      return Carousel1();
    case "Carousel2":
      return Carousel2();
    case "Carousel3":
      return Carousel3();
    case "NotreHistoire":
      return NotreHistoire();
    case "EcoleDelphine":
      return EcoleDelphine();
    case "Commu":
      return Commu();
    case "Commu1":
      return Commu1();
    case "Expertise1":
      return Expertise1();
    case "Expertise2":
      return Expertise2();
    case "Expertise3":
      return Expertise3();
    case "ConseilCarousel1Image1":
      return ConseilCarousel1Image1();
    case "ConseilCarousel2Image1":
      return ConseilCarousel2Image1();
    case "ConseilCarousel2Image2":
      return ConseilCarousel2Image2();
    case "ConseilCarousel2Image3":
      return ConseilCarousel2Image3();
    case "ConseilCarousel4Image1":
      return ConseilCarousel4Image1();
    case "ConseilCarousel4Image2":
      return ConseilCarousel4Image2();
    case "ConseilCarousel4Image3":
      return ConseilCarousel4Image3();
    case "ExpertisePassion":
      return ExpertisePassion();
    default:
      break;
  }
}
const presentation = ()=>{
    return (<>
      <p className="text-[100px] font-av-bold text-blue text-left ">Po.</p>
      <p className="text-[50px] font-av-bold text-blue text-left ">Pour une belle peau</p>
      <p className="mt-[30px] text-[16px] text-left ">
      Chez Po. nous sommes convaincus que prendre soin de sa peau devrait être à la portée de tous et de toutes.
      </p><p className="mt-[10px] text-[16px] text-left ">C’est pour cela que nous voulons rendre accessible les soins, les conseils, les expertises.
      </p>
      <p className="mt-[30px] text-[16px] text-left ">
      Nous sommes fiers de mettre à votre disposition des formules de soins cleans et de vous mettre en contact avec  nos partenaires expert dans les problèmes de peaux. 
      </p>
      </>
    )
  }
const apropos=()=>{
    return (<>
    <p className="mt-[35px] text-[60px] font-av-bold text-blue text-left w-[600px]">A propos...</p>
    <p className="mt-[20px] text-[16px] text-left w-[600px]">Nous avons choisi de collaborer avec des experts facialistes pour VOUS !</p>
    <p className="text-[16px] text-left w-[600px]">Pour que vous puissez bénéficier d’un diagnostic fiable et personnalisé.</p>
    <p className="text-[16px] text-left w-[600px]">Vous pourrez donc vous orienter vers ce dont vous avez réellement besoin.</p>
    <div className="mt-[20px] text-[30px] w-fit px-8 py-2 bg-[#83C5BE] rounded-full font-av-bold text-blue text-left hover:text-white hover:bg-blue"><p>En savoir plus</p></div>
    </>)
  }
const apropos2=()=>{
    return(<>
    <p className="mt-[20px] text-[16px] text-left w-[600px]"> En plus de pouvoir bénéficier d’un savoir-faire hors-pair, profitez également d’une technologie hors-pair !</p>
    <p className="mt-[20px] text-[16px]  text-left w-[600px]">L’Intelligence Artificielle saura parfaire votre diagnostic afin de le rendre encore   plus précis !
    Un simple selfie servira à déterminer la ligne directrice de votre diagnostic.</p>
    <div className="mt-[40px] text-[30px] w-fit px-8 py-2 bg-[#83C5BE] rounded-full font-av-bold text-blue text-left w-[600px] hover:text-white hover:bg-blue"><p>En savoir plus</p></div>            
    </>)
}

const produittitre = ()=>{
  return(<>
    <div className="row-start-1 flex flex-col center">
      <p className="text-blue text-[50px] font-av-bold">Les iconiques</p>
      <p className="text-blue text-[16px]">Découvrez notre gamme “Iconiques” avec nos produits incontournables, recommandés par notre fidèle communauté </p>
  </div></>)
}

const produitcol1 = ()=>{
  return(<>
  <p className="mx-auto mt-[35px] w-[350px] text-[30px] font-av-bold text-blue text-left">Sérum Yeux</p>
  <p className="mx-auto mt-[20px] w-[350px] text-[16px] text-left">Caféine 5% + Niacinamide 5%</p>
  <p className="mx-auto mt-[10px] w-[350px] text-[16px] text-left">Favorise la microcirculation sanguine et lymphatique pour atténuer les cernes.  </p>
  <div className="w-[270px] mt-[30px] flex flex-row center">
      {/* <div className="w-[40px] ml-[10px] my-auto"> <img src={buy}  /></div>         */}
      <div className="text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-av-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>Je découvre</p></div>    
  </div>
  </>)
}

const produitcol2 = ()=>{
  return (<>
  <p className="mx-auto mt-[35px] w-[350px] text-[30px] font-av-bold text-blue text-left">Assemblage botanique </p>
  <p className="mx-auto text-[30px] w-[350px] font-av-bold text-blue text-left">tenseurau nopal</p>
  <p className="mx-auto mt-[10px] w-[350px] text-[16px] text-left ">7 extraits botaniques pour tonifier et régénérer la peau pendant la nuit. Sérum de nuit visage et cou.</p>
  <div className="w-[340px] mt-[10px] flex flex-row center">
      {/* <div className="w-[40px] ml-[10px] my-auto"> <img src={buy}  /></div>         */}
      <div className="text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-av-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>Je découvre</p></div>    
  </div>
  </>)
}

const produitcol3 = () =>{
  return (<>
  <p className="mx-auto mt-[35px] w-[350px] text-[30px] font-av-bold text-blue text-left">Gel nettoyant exfoliant</p>
  <p className="mx-auto mt-[20px] w-[350px] text-[16px] text-left ">PHA 5% + aloe vera</p>
  <p className="mx-auto mt-[10px] w-[350px] text-[16px] text-left ">Micro-exfolie la peau et stimule le renouvellement cellulaire pour désincruster les pores et unifier le teint.</p>
  <div className="w-[330px] mt-[10px] flex flex-row center">
      {/* <div className="w-[40px] ml-[10px] my-auto"> <img src={buy}  /></div>         */}
      <div className="text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-av-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>Je découvre</p></div>    
  </div>
  </>)
}


const quisommesnous = () =>{
  return (<>
    
    <p className="text-[50px] font-av-bold text-blue text-left w-[50%] mt-[4%] ">Notre histoire</p>
    <p className="text-[50px] font-av-bold text-blue text-left w-[50%]">et votre histoire</p>
    <div className="w-[85%] h-full text-left text-[16px]">
      <p className="mt-[20px]">Chez Po, nous mettons tout en œuvre pour vous offrir une expérience de soin de peau exceptionnelle. Notre équipe dévouée d'experts en skincare est là pour vous accompagner à chaque étape de votre parcours. Que vous cherchiez à résoudre des problèmes de peau spécifiques, à améliorer votre routine existante ou à découvrir de nouveaux produits, nous sommes là pour vous guider.</p>
      <p className="mt-[20px]">Grâce à notre expertise et à notre passion pour la peau, nous vous proposons des conseils personnalisés, des recommandations de produits adaptés à votre type de peau et des informations de qualité basées sur des recherches scientifiques. Nous croyons en l'importance de la transparence et de l'éducation, c'est pourquoi nous partageons des ressources utiles et des guides d'achat détaillés pour vous aider à prendre des décisions éclairées.</p>
      <p className="mt-[20px]">En nous rejoignant, vous bénéficierez également de l'accès à notre communauté d'experts facialistes et d'autres passionnés de skincare. Vous pourrez échanger des conseils, partager votre expérience et trouver du soutien tout au long de votre parcours de soin de peau.</p> 
      <p className="mt-[20px]">Chez Po, nous sommes là pour vous aider à atteindre une peau saine, équilibrée et rayonnante.</p>
    </div>
  <div className="absolute bottom-0 left-0 w-full"><div className="w-[70%]  flex center"><div className="ml-[10px] text-[30px] w-fit px-6 py-2 bg-[#83C5BE] rounded-full font-av-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>En savoir plus</p></div></div>   
  </div>
  </>)
}
const quisommesnous2 = () =>{
  return (<>
    <p className="text-[50px] font-av-bold text-blue text-center w-full">NOTRE CONCEPT & NOTRE TEAM</p>
      
  </>)
}
const quisommesnous3 = () =>{
  return (<div className="w-[450px]">
    <p className="mt-[32px] mb-[32px] text-[24px] font-av-bold text-blue text-center w-full">CONCEPT</p>
    <div className=""><p className="mt-[32px] mb-[32px] text-[16px] font-av-bold text-blue text-center w-full">Po. est bien plus qu'une simple application de soins de la peau, c'est une véritable solution complète pour vous accompagner dans votre parcours de beauté. Avec Po, vous avez accès à une multitude d'outils et de ressources pour prendre soin de votre peau de manière personnalisée et efficace.</p>
    </div>
      
  </div>)
}
const quisommesnous4 = () =>{
  return (<div className="w-[450px]">
    <p className="mt-[32px] mb-[32px] text-[24px] font-av-bold text-blue text-center w-full">TEAM</p>
    <div className=""><p className="mt-[32px] mb-[32px] text-[16px] font-av-bold text-blue text-center w-full">Nous sommes une équipe passionnée et dévouée, composée d'experts en soins de la peau, de spécialistes en technologie et de professionnels du marketing. Notre objectif principal est de vous offrir une expérience personnalisée et de haute qualité, en vous proposant les meilleurs conseils, produits et services pour prendre soin de votre peau.</p>
    </div>
  </div>)
}

const Carousel1 = () =>{
  return (<>
  <p className="mt-[20px] text-[16px] font-av-bold text-blue">4 types de peau, 4 types de soins </p>    
  <div className=" h-[120px]"><p className="text-[16px] mt-[5px]">Quel nettoyant choisir ? quel serum vous correspond ? </p>
  <p className="text-[16px]">Comprenez et accepter la nature de votre peau grâce à nos conseils ciblés pour vous.</p>  
  </div>
  </>)
}

const Carousel2 = () =>{
  return (<>
  <p className="mt-[20px] text-[16px] font-av-bold text-blue"> Bien choisir son masque  </p>    
  <p className="text-[16px] w-[80%] mx-auto mt-[5px] h-[120px]">Les masques sont devenus un incontournable de nos routines de soins de la peau, offrant une expérience indulgente et des bienfaits immédiats. Que vous recherchiez une hydratation intense, une purification en profondeur ou un éclat instantané, il existe un masque adapté à vos besoins spécifiques.</p>
  
  </>)
}
const Carousel3 = () =>{
  return (<>
  <p className="mt-[20px] text-[16px] font-av-bold text-blue">Une solution contre l'acné ?</p>    
  <p className="text-[16px]  w-[80%] mx-auto mt-[5px] h-[120px]">L'acné est un problème de peau courant qui peut affecter notre confiance en nous. Mais saviez-vous qu'il existe des solutions naturelles pour traiter l'acné et retrouver une peau saine et équilibrée. Nous allons explorer les remèdes naturels les plus efficaces pour lutter contre l'acné, en mettant l'accent sur des ingrédients naturels et des méthodes douces pour apaiser et réduire les imperfections cutanées.</p>
  </>)
}

const NotreHistoire = ()=>{
  return <div className="w-[90%]">
      <p className="text-[50px] font-av-bold text-left ">Nos experts</p>
      <p className="text-[16px] text-justify mt-[50px]">Plongez dans l'univers de nos experts facialistes passionnés, dévoués à l'amélioration de votre peau. Leur expertise approfondie et leur savoir-faire leur permettent de vous offrir des soins personnalisés, adaptés à vos besoins spécifiques. Grâce à une combinaison de techniques avancées et de produits de qualité, nos facialistes travailleront avec vous pour révéler l'éclat naturel de votre peau. Que vous recherchiez une hydratation intense, une réduction des rides ou une solution pour les problèmes de peau spécifiques, nos experts sauront vous guider avec professionnalisme et attention. En plus de leur expertise technique, nos facialistes créent un environnement chaleureux et accueillant pour vous offrir une expérience de soin relaxante et revitalisante. Faites confiance à nos experts facialistes pour vous accompagner dans votre voyage vers une peau saine, radieuse et épanouie.</p>
      </div>
}
const ExpertisePassion = ()=>{
return <div className="w-[90%]">
      <p className="text-[50px] font-av-bold text-left ">Une expertise, une passion</p>
      <p className="text-[16px] text-justify mt-[40px]">Nos experts facialistes sont des professionnels hautement qualifiés et expérimentés dans le domaine des soins de la peau. Leur expertise repose sur une formation rigoureuse et une connaissance approfondie des techniques et des produits adaptés à chaque type de peau. </p>
      <p className="text-[16px] text-justify mt-[10px]">Grâce à leur expérience pratique et à leur sensibilité aux besoins individuels, nos experts facialistes sont en mesure de proposer des soins personnalisés et efficaces pour améliorer la santé et l'apparence de votre peau. Leur passion pour les soins de la peau se reflète dans leur approche attentionnée et leur volonté de vous offrir une expérience de soin exceptionnelle.</p> 
      <p className="text-[16px] text-justify  mt-[10px]">Faites confiance à nos experts facialistes pour vous guider vers une peau saine, éclatante et radieuse.</p>
  </div>
}
const EcoleDelphine = ()=>{
  return <div className="w-[80%] ml-[30px]">
      <p className="text-[40px] font-av-bold text-left ">École Delphine Langlois - </p>
      <p className="text-[40px] font-av-bold text-left ">Facialiste Paris</p>
      <p className="text-[16px] text-justify mt-[30px]">Nos experts en soins de la peau sont tous diplômés de l'École Delphine Langlois - Facialiste Paris, une référence dans le domaine de l'esthétique et des soins de la peau. Cette formation de renommée internationale garantit que nos clients bénéficient des compétences et des connaissances les plus pointues en matière de soins de la peau. </p>
      <p className="text-[16px] text-justify mt-[10px]">En collaborant avec des experts formés par cette prestigieuse école, nous nous assurons de vous offrir des conseils et des traitements de qualité, adaptés à vos besoins spécifiques. Faites confiance à notre équipe d'experts qualifiés pour prendre soin de votre peau et vous offrir une expérience de soin exceptionnelle.</p>
      <div className="flex center"><div className="mt-[20px] text-[30px] w-fit px-8 py-4 bg-[#83C5BE] rounded-full font-av-bold text-blue text-left hover:text-white hover:bg-blue"><p>En savoir plus</p></div>
      </div>
  </div>
}

const Commu = ()=>{
  return <div className="w-[100%] mt-[10px]">
    <p className="text-[22px]">
    Notre communauté est un espace dédié aux passionnés de soins de la peau qui voudraient des conseils beauté et skincare, où vous pouvez partager vos expériences, poser des questions, échanger des conseils et trouver une source d'inspiration pour prendre soin de votre peau et vous acceptez vous-mêmes. Ici, nous encourageons l'ouverture d'esprit, le respect mutuel et l'entraide. 
Vous êtes le bienvenu pour contribuer à agrandir notre communauté.
    </p>
 </div>
}
const Commu1 = ()=>{
  return <>
  <div className="font-av-bold text-[28px]">
    Gagnez de la confiance en soi malgré votre acné
  </div>
  <div className="text-[22px] mt-[10px]">
    Votre beauté ne se résume pas à votre peau. L'acné peut être un défi, mais vous êtes bien plus que cela. Apprenez à vous aimer et à embrasser votre individualité. La confiance en soi ne dépend pas de votre apparence, mais de la façon dont vous vous percevez et vous affirmez. 
  </div>
  </>
}
const Expertise1 = ()=>{
  return<div className="w-full flex flex-col center">
   <p className="text-[30px] bg-[#264C4D] font-av-bold text-center text-white w-[312px] p-2">Personnalisé</p>
   <p className="text-[16px] bg-[#264C4D] font-av-bold text-justify  text-white w-[312px] h-[280px] px-4 pb-10">Chez Po, nous comprenons que chaque peau est unique. C'est pourquoi nous vous offrons des recommandations personnalisées en fonction de votre type de peau, de vos préoccupations et de vos objectifs. Notre approche sur mesure vous permet d'obtenir les meilleurs résultats pour votre peau.</p>
   
  </div>
}
const Expertise2 = ()=>{
  return<div className="w-full flex flex-col center">
   <p className="text-[30px] bg-[#264C4D] font-av-bold text-center text-white w-[312px] p-2">Accompagnement</p>
   <p className="text-[16px] bg-[#264C4D] font-av-bold text-justify  text-white w-[312px] h-[280px] px-4 pb-10">Nous offrons un accompagnement personnalisé pour vous aider à retrouver une peau saine et éclatante. Notre équipe d'experts est là pour vous écouter, vous conseiller et vous soutenir tout au long de votre parcours de soins de la peau, afin que vous puissiez retrouver confiance en vous et vous sentir bien dans votre peau.</p>
   
  </div>
}
const Expertise3 = ()=>{
  return<div className="w-full flex flex-col center">
   <p className="text-[30px] bg-[#264C4D] font-av-bold text-center text-white w-[312px] p-2">Suivi</p>
   <p className="text-[16px] bg-[#264C4D] font-av-bold text-justify  text-white w-[312px] h-[280px] px-4 pb-10">Votre progression est importante pour nous. Nous restons en contact régulier avec vous pour suivre l'évolution de votre peau. Nous ajustons votre routine au besoin, vous offrons des conseils personnalisés et nous assurons que vous atteignez vos objectifs de beauté et de santé de la peau.</p>
   
  </div>
}

// PAGES CONSEILS & ASTUCES

//Carousel1
const ConseilCarousel1Image1 = () =>{
  return (<>
  <p className="mt-[20px] text-[25px] font-av-bold text-blue">Vitamine C pour la peau : les bienfaits</p>    
  <p className="text-[16px]">Quel nettoyant choisir ? Quel serum vous correspond ? </p>
  <p className="text-[16px]">Comprenez et accepter la nature de votre peau grâce à nos conseils ciblés pour vous.</p>  
  </>)
}

//Carousel2
const ConseilCarousel2Image1 = () =>{
  return (<>
  <p className="mt-[20px] text-[25px] font-av-bold text-blue">Choisissez la bonne skincare</p>    
  <p className="text-[16px]">Une bonne skincare permet à votre peau de rester hydrater et en bonne santé ...</p>  
  </>)
}
const ConseilCarousel2Image2 = () =>{
  return (<>
  <p className="mt-[20px] text-[25px] font-av-bold text-blue">Prenez soin de vos cheveux</p>    
  <p className="text-[16px]">On rêve tous de beaux cheveux mais il faut une bonne routine pour leur  santé ...</p>
  </>)
}
const ConseilCarousel2Image3 = () =>{
  return (<>
  <p className="mt-[20px] text-[25px] font-av-bold text-blue">5 min maquillage idéale</p>    
  <p className="text-[16px]">Une technique de maquillage  avec des produits adaptés n’affecte pas votre peau ...</p>
  </>)
}

// Carousel 3

//Carousel 4
const ConseilCarousel4Image1 = () =>{
  return (<div className="w-full flex center">
    <div className="w-[70%]">  
      <p className="mt-[20px] text-[25px] font-av-bold text-blue">Marie ROBERT</p>    
      <p className="text-[16px]">Mon expérience avec Po. est la meilleure de ma vie. Une marque qui se soucie de votre peau, de votre bien être en vous donnant des conseils appropriés.</p>
    </div>
  </div>)
}
const ConseilCarousel4Image2 = () =>{
  return (<div className="w-full flex center">
  <div className="w-[70%]">
      <p className="mt-[20px] text-[25px] font-av-bold text-blue">Dr Agathe AOUN</p>    
      <p className="text-[16px]">Situé à Fort de France en Martinique, le Dr Agathe, dermathologue a voulu  apprendre les spécificités des peaux noires.</p>
    </div>
  </div>)
}
const ConseilCarousel4Image3 = () =>{
  return (<div className="w-full flex center">
  <div className="w-[70%]">
    <p className="mt-[20px] text-[25px] font-av-bold text-blue">Augustinus Bader</p>    
    <p className="text-[16px]">Interview d’un professeur qui révolutionne la skincare avec sa marque de cosmétiques adaptée pour les peaux</p>
    </div>
  </div>)
}
// PAGES CONSEILS & ASTUCES
export {switchtext}