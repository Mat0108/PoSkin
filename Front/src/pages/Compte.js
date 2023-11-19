import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

const Compte = (props) =>{
    const [user, setUser] = useState({
        firstname:localStorage.getItem("userFirstname"),
        lastname:localStorage.getItem("userLastname"),
        email: localStorage.getItem("userEmail"),
        oldpassword:"",
        password: "",
        confirmpassword:""
      });
    const [edit,setEdit] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      if(localStorage.length == 0){
        navigate("/")
      }
    }, [])
    const onChangeHandler = (event) => {
        if(edit){
            const { id, value } = event.target;
            setUser({ ...user, [id]: value });
        }
      };
    const element = useMemo(() => {
        return <><div className="px-[50px] w-1/2 flex flex-col">
                <label className="text-left font-mt-demi text-[20px] mt-4">NOM</label>
            
                <input
                className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                type="text"
                onChange={onChangeHandler}
                value={user.firstname}
                placeholder="Votre nom"
                id="firstname"
                />
                <label className="text-left font-mt-demi text-[20px] mt-4">PRÉNOM</label>
                <input
                className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                type="text"
                onChange={onChangeHandler}
                value={user.lastname}
                placeholder="Votre prénom"
                id="lastname"
                />
                <label className="text-left font-mt-demi text-[20px] mt-4">E-MAIL</label>
                <input
                className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                type="text"
                onChange={onChangeHandler}
                value={user.email}
                placeholder="Votre émail"
                id="email"
                />
            </div>
            {edit ?<div className="px-[50px] w-1/2 flex flex-col">
                <label className="text-left font-mt-demi text-[20px] mt-4">MODICATION DU MOT DE PASSE</label>
            
                <input
                className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                type="text"
                onChange={onChangeHandler}
                value={user.oldpassword}
                placeholder="Votre mot de passe actuel"
                id="oldpassword"
                />
                {/* <label className="text-left font-mt-demi text-[20px] mt-4">PRÉNOM</label> */}
                <input
                className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3] mt-[50px]"
                type="text"
                onChange={onChangeHandler}
                value={user.password}
                placeholder="Votre nouveau mot de passe"
                id="password"
                />
                {/* <label className="text-left font-mt-demi text-[20px] mt-4">E-MAIL</label> */}
                <input
                className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3] mt-[50px]"
                type="text"
                onChange={onChangeHandler}
                value={user.confirmpassword}
                placeholder="Confirmez votre mot de passe "
                id="confirmpassword"
                />
            </div> : ""}
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
                <div className="font-mt-bold text-[40px] mt-[60px]">{`BIENVENUE ${localStorage.getItem("userFirstname").toUpperCase()}`}</div>
                <div className="text-[20px] mt-[20px]">{`Po. vous remercie pour votre confiance`}</div>
                <div className="flex center mt-[45px]"> <div className="bg-[#83C5BE] px-8 py-2 w-fit h-fit rounded-full text-[24px] font-mt-demi">Mon suivi</div></div>
                <div className="text-[32px] mt-[40px] font-mt-demi">{`MES INFORMATIONS `}</div>
                <div className="w-full flex flex-row center"> 
                    {element}
                    
                </div>
                <div className="flex center mt-[45px]"> <div className="bg-[#264C4D] px-8 py-2 w-fit h-fit rounded-full text-[24px] font-mt-demi text-white hover:cursor-pointer" onClick={()=>{setEdit(!edit)}}>Modifier mes informations</div></div>
                
            </div>

        </div>
    </div>

</div>
}
export default Compte;
