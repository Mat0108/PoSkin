
import LayoutFullImage from '../components/Layout/LayoutFullImage';
import Layout1image from '../components/Layout/Layout1image';
import Layout2image from '../components/Layout/Layout2image';
import ExpertiseHome from '../components/ExpertiseHome';

import {switchtext} from './../components/textdivers';

import Carousel2 from '../components/Layout/Carousel2';

import { Link, useNavigate, useParams,useLocation  } from 'react-router-dom';
import { useContext, useEffect, useMemo, useState } from 'react';
import { getBlogs } from '../services/Blog';
import { activateAccount, logout } from '../services/user';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { LanguageContext } from '../languages';
const Home = (props)=>{
    
    const { dictionnaire } = useContext(LanguageContext);
    const [cookies, setCookies] = useCookies(["user"]);
    const [itemList,setItemList]= useState([]);
    const params = useParams()
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const fetchData = async() => {
            const blogs = await getBlogs();
            setItemList(blogs)
            
        };
        fetchData();
        if(location.pathname === "/Logout"){
            async function Logout(){
                let res = await logout(typeof cookies.user === "object"  ? cookies.user._id : null);
                if(res.status === 200){
                  toast.success(dictionnaire.Toast.logout);
                  localStorage.clear()
                  navigate("/")
                }
              } 
            Logout();
        }
        
        if(params.userId){
            async function activate(){
                let res = await activateAccount(params.userId);
                console.log('res : ', res,res.status === 200)
                if(res.status === 200){
                    toast.success(dictionnaire.Toast.confirm_accont);
                    navigate("/");
                }
            };
            activate();
            
        }
        
        
    }, [])
    

    const BlogCarousel = useMemo(() =>
    { 
        let list = []
        if(Object.keys(itemList).length){itemList.map(blog=>{list.push(itemCarousel(blog.imagepresentation,blog.altimagepresentation,blog.title,blog.textpresentation,`/Blog/${blog.altimagepresentation}`))})}
        return <Carousel2 props={{items:list,nbShow:1,ratio:25,showPoint:true}}/>
    }, [itemList])

    function itemCarousel(image,altimage,title,text,url){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center" key={url}>
                <Link to={url}>
                    <div className="mt-[20px] w-full flex center h-[100px] sm:h-[250px]"> <img src={image}  alt={altimage} className='h-[100px] sm:h-[250px] w-fit'/></div>  
                    <div className="h-[120px] sm:h-[150px] flex center flex-col">
                        <p className="w-[90%] sm:w-[70%] mt-[6px] sm:mt-[20px] text-[8px] sm:text-[16px] font-mt-extra-bold text-blue">{title}</p>    
                        <p className="w-[90%] sm:w-[70%] text-[8px] sm:text-[16px] mt-[5px] text-justify ">{text}</p>
                       </div>
                </Link>
            </div>
            </>)

    }

    
    let buttondiv = <div className="absolute z-[100] top-0 left-0 w-full h-full flex flex-col center">
        <div className='mt-[20%] w-fit h-fit p-2 text-white_coffee text-[12px] sm:text-[40px] flex center'> {dictionnaire.Home.key1}</div>
        <Link to="/Diagnostic" className="mt-[10px] w-fit h-fit p-2 text-white_coffee text-[12px] sm:text-[40px] font-mt-extra-bold py-2 px-6 bg-blue rounded-3xl" >{dictionnaire.Home.key2}</Link>
    </div>
    
    return (<div>
        {/* <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className={"bg-transparent w-screen h-screen z-[10000] flex center"}
          style={customStyles}
        >
          {divModal}
        </Modal> */}
        <LayoutFullImage props={{titre:dictionnaire.Home.Title,button:buttondiv,image1:{url:"/images/visage/fullvisage.png",alt:"fullvisage"}}}/>
        <Layout1image props={{col1:switchtext("presentation",props.scroll),image1:{url:"/images/visage/visage2.png",alt:"visage2"}}} />
        <Layout2image props={{col1:switchtext("apropos"),col2:switchtext("apropos2"),image1:{url:"/images/visage/visage7.png",alt:"visage7"},image2:{url:"/images/visage/visage8.png",alt:"visage8"}}} />
        {/* <div className='w-full flex center'>
            <div className='w-[80%]'>
                <Layout3image props={{titre:switchtext("produittitre"),col1:switchtext("produitcol1"),image1:{url:produit1,alt:"produit1",className:"h-[530px] w-fit"},col2:switchtext("produitcol2"),image2:{url:produit2,alt:"produit2",className:"h-[530px] w-fit"},col3:switchtext("produitcol3"),image3:{url:produit3,alt:"produit3",className:"h-[530px] w-fit"}}}/>
            </div>
        </div>
         <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div> */}
        <div><p className="mt-[30px] text-[12px] sm:text-[50px] font-mt-extra-bold text-blue ">{dictionnaire.Home.Conseil} </p></div>
        {BlogCarousel}
        {/* <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div> */}
        <div className='mt-[20px]'></div>
        {/* <Carousel props={{titre:"Nos conseils...",col:switchtext("Carousel1")}} /> */}
        <ExpertiseHome />
       </div>)
}

export default Home