import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { forgotPassword, patchUser } from "../services/user";
import { toast } from "react-toastify";

const Compte = (props) =>{
    const [user, setUser] = useState({
        firstname:localStorage.getItem("userFirstname"),
        lastname:localStorage.getItem("userLastname"),
        email: localStorage.getItem("userEmail"),
      });
    const [edit,setEdit] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      if(localStorage.length == 0){
        navigate("/")
      }
    }, [])
    const handleChangePassword = async (event) => {
      event.preventDefault();
      const response = await forgotPassword({email:user.email});
      if(response.status === 200){
        toast.success("Mail de réinitialisation de mot de passe envoyé !")
      }
    };
    const onClick = async (event) => {
        event.preventDefault();
        console.log(!(user.firstname === localStorage.getItem("userFirstname") &&
        user.lastname === localStorage.getItem("userLastname") &&
        user.email === localStorage.getItem("userEmail")))
        if (!(user.firstname === localStorage.getItem("userFirstname") &&
        user.lastname === localStorage.getItem("userLastname") &&
        user.email === localStorage.getItem("userEmail"))) {
          const userData = await patchUser(localStorage.getItem('userId'),user);
          console.log('userData : ', userData)
          if(userData.status === 200){
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userId", userData.data.user._id);
            localStorage.setItem("userFirstname", userData.data.user.firstname);
            localStorage.setItem("userLastname", userData.data.user.lastname);
            localStorage.setItem("userConnected", userData.data.user.connected);
            toast.success("Vos informations ont bien été modifié !")
          }
        }
        else {
          toast.info("Merci de modifier au moins un des champs !");
        }
      };
    const onChangeHandler = (event) => {
        const { id, value } = event.target;
        setUser({ ...user, [id]: value });
      };
    const element = useMemo(() => {
        return <><div className=" w-1/2 flex flex-col gap-3">
                <div className="flex flex-col">
                  <label className="text-left font-mt-demi text-[20px]">NOM</label>
                  <input
                  className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.firstname}
                  placeholder="Votre nom"
                  id="firstname"
                  />  
                </div>
                <div className="flex flex-col">
                  <label className="text-left font-mt-demi text-[20px]">PRÉNOM</label>
                  <input
                  className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.lastname}
                  placeholder="Votre prénom"
                  id="lastname"
                  />
                </div>
                <div className="flex flex-col">
            
                  <label className="text-left font-mt-demi text-[20px]">E-MAIL</label>
                  <input
                  className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.email}
                  placeholder="Votre émail"
                  id="email"
                  />
                </div>  
                
           </div>
           
            </>
    }, [edit,user])
    return <div className="">
    <div className="w-full h-[870px] flex flex-row">
        <div className="w-1/3 h-full relative">
            <img src={"/images/Compte/Compte1.jpg"} alt={"visage21"} className="w-full h-full"/>
            <div className="absolute top-0 left-0 w-full h-full flex center"><div className="text-white text-[48px] font-mt-bold">MON COMPTE</div></div>
        </div>
        <div className="w-2/3 h-full p-[30px]">
            <div className="bg-white rounded-3xl w-full h-full flex flex-col ">
                <div className="font-mt-bold text-[40px] mt-[40px]">{`BIENVENUE ${localStorage.getItem("userFirstname") && localStorage.getItem("userFirstname").toUpperCase()}`}</div>
                <div className="text-[20px] mt-[10px]">{`Po. vous remercie pour votre confiance`}</div>
                <div className="flex center mt-[35px] gap-8"> 
                    <div className="bg-[#83C5BE] px-8 py-2 w-[270px] h-fit rounded-full text-[24px] font-mt-demi">Mon suivi</div>
                    <div className="bg-[#83C5BE] px-8 py-2 w-[270px] h-fit rounded-full text-[24px] font-mt-demi">Mes diagnostic</div>
                </div>
                <div className="text-[32px] mt-[40px] font-mt-demi">{`MES INFORMATIONS `}</div>
                <div className="w-full flex flex-row center"> 
                    {element}
                    
                </div>
                <div className="flex center mt-[30px]"> <div className="bg-[#264C4D] px-8 py-2 w-fit h-fit rounded-full text-[24px] font-mt-demi text-white hover:cursor-pointer" onClick={onClick}>Modifier mes informations</div></div>
                <div className="flex center mt-[20px]"> <div className="bg-[#264C4D] px-8 py-2 w-fit h-fit rounded-full text-[24px] font-mt-demi text-white hover:cursor-pointer" onClick={handleChangePassword}>Réinitialisation du mot de passe</div></div>
            </div>

        </div>
    </div>

</div>
}
export default Compte;
