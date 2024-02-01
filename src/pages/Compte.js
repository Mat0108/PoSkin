import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { forgotPassword, patchUser } from "../services/user";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { LanguageContext } from "../languages";

const Compte = (props) =>{
    const { dictionnaire } = useContext(LanguageContext);
    const [cookies, setCookies] = useCookies(["user"]);
    const [user, setUser] = useState(typeof cookies.user === "object"  ? cookies.user : null);
    const [edit,setEdit] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      if(typeof cookies.user !== "object" ){
        navigate("/")
      }
    }, [])
    const handleChangePassword = async (event) => {
      event.preventDefault();
      const response = await forgotPassword({email:user.email});
      if(response.status === 200){
        toast.success(dictionnaire.Toast.reset_passord);
      }
    };
    const onClick = async (event) => {
        event.preventDefault();
        if (typeof cookies.user === "object" ) {
          const userData = await patchUser(typeof cookies.user === "object"  ? cookies.user._id : null,user);
          if(userData.status === 200){
            setCookies("user", userData.data.user, { path: "/" });
            
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userId", userData.data.user._id);
            localStorage.setItem("userFirstname", userData.data.user.firstname);
            localStorage.setItem("userLastname", userData.data.user.lastname);
            localStorage.setItem("userConnected", userData.data.user.connected);
            toast.success(dictionnaire.Toast.info_modif);
          }
        }
        else {
          toast.info(dictionnaire.Toast.required_field);
        }
      };
    const onChangeHandler = (event) => {
        const { id, value } = event.target;
        setUser({ ...user, [id]: value });
      };
    const element = useMemo(() => {
        return <><div className=" w-1/2 flex flex-col gap-3">
                <div className="flex flex-col">
                  <label className="text-left font-mt-demi text-[20px]">{dictionnaire.Compte.Nom.toUpperCase()}</label>
                  <input
                  className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.firstname}
                  placeholder={dictionnaire.Compte.VNom}
                  id="firstname"
                  />  
                </div>
                <div className="flex flex-col">
                  <label className="text-left font-mt-demi text-[20px]">{dictionnaire.Compte.Prenom.toUpperCase()}</label>
                  <input
                  className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.lastname}
                  placeholder={dictionnaire.Compte.VPrenom}
                  id="lastname"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-left font-mt-demi text-[20px]">{dictionnaire.Compte.Email.toUpperCase()}</label>
                  <input
                  className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.email}
                  placeholder={dictionnaire.Compte.VEmail}
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
            <div className="absolute top-0 left-0 w-full h-full flex center"><div className="text-white text-[48px] font-mt-extra-bold">{dictionnaire.Compte.Compte}</div></div>
        </div>
        <div className="w-2/3 h-full p-[30px]">
            <div className="bg-white rounded-3xl w-full h-full flex flex-col ">
                <div className="font-mt-extra-bold text-[40px] mt-[40px]">{`BIENVENUE ${typeof cookies.user === "object"  ? cookies.user.firstname.toUpperCase() : ""}`}</div>
                <div className="text-[20px] mt-[10px]">{`Po. vous remercie pour votre confiance`}</div>
                <div className="flex center mt-[35px] gap-8"> 
                    <div className="bg-[#83C5BE] px-8 py-2 w-[270px] h-fit rounded-full text-[24px] font-mt-demi hover:cursor-pointer" onClick={()=>{navigate("/MesRdv")}}>{dictionnaire.Compte.Suivi}</div>
                    <div className="bg-[#83C5BE] px-8 py-2 w-[270px] h-fit rounded-full text-[24px] font-mt-demi hover:cursor-pointer" onClick={()=>{navigate("/MesDiagnostics")}}>{dictionnaire.Compte.Diagnostics}</div>
                </div>
                <div className="text-[32px] mt-[40px] font-mt-demi">{`MES INFORMATIONS `}</div>
                <div className="w-full flex flex-row center"> 
                    {element}
                    
                </div>
                <div className="flex center mt-[30px]"> <div className="bg-[#264C4D] px-8 py-2 w-fit h-fit rounded-full text-[24px] font-mt-demi text-white hover:cursor-pointer" onClick={onClick}>{dictionnaire.Compte.Info}</div></div>
                <div className="flex center mt-[20px]"> <div className="bg-[#264C4D] px-8 py-2 w-fit h-fit rounded-full text-[24px] font-mt-demi text-white hover:cursor-pointer" onClick={handleChangePassword}>{dictionnaire.Compte.Motdepasse}</div></div>
            </div>

        </div>
    </div>

</div>
}
export default Compte;
