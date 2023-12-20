import React, { useState } from "react";
import { login } from "../services/user";
import { toast } from "react-toastify";
import { saveDiagnostic } from "../services/Diagnostic";


const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });



  const onClick = async (event) => {
    event.preventDefault();
    if (user.password !== "" && user.email !== "") {
      const userData = await login({email:user.email,password:user.password});
      if(userData.status === 200){
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("userId", userData.data.user._id);
        localStorage.setItem("userFirstname", userData.data.user.firstname);
        localStorage.setItem("userLastname", userData.data.user.lastname);
        localStorage.setItem("userConnected", userData.data.user.connected);
        toast.success("Vous êtes connecté !")
        if(props.diagnostic_data){
          let response = await saveDiagnostic({mail:userData.data.email,...props.diagnostic_data})
          if(response.status === 200){
            toast.success("Mail envoyé !")
          }else{
            toast.error("Erreur api")
          }
        }
        props.login()
      } else {
        toast.error("Le compte n'existe pas !");
      }
    } else {
      toast.info("Merci de remplir tous les champs !");
    }
  };

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

  return (
    <div className="w-fit h-fit flex flex-row">
      <div className="w-fit h-fit bg-[#264C4D] flex flex-row">
          <div><img src={"/images/visage/visage29.png"} alt={"visage"} className="w-[530px] h-[680px]"/> </div>
          <div className="flex flex-col center w-[530px] h-[680px]">
            <img src={"/images/logowhite.png"} alt={"logo"} className="w-[66px] h-[56px] mt-[30px]"/>
            <p className="text-[16px] text-center text-white mt-[20px]">Rejoignez le mouvement et découvrez</p>
            <p className="text-[16px] text-center text-white">  votre nouvelle peau</p>
            <div className="grid grid-cols-2 w-full mt-[22px]">
              <div className={`${props.type === false ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center border-b-[6px] border-red-Venetian`}>
                <div className={`${props.type === true ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-bold hover:cursor-pointer`} onClick={props.register} >INSCRIPTION</div>
              </div>
              <div className={`${props.type === true ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center border-t-[6px] border-x-[6px] border-red-Venetian`}>
                <div className={`${props.type === false ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-bold hover:cursor-pointer`}>DÈJA INSCRIT </div>
              </div>
            </div>
            {/* <div className="w-full h-fit bg-white flex flex-col px-[60px] py-[30px] gap-8">
              <div className="flex flex row center gap-4 border-2 p-2  ">
                <img src={"/images/icon_google.png"} alt={"google"} />
                <div className="text-[16px] text-[#A29F9F]">Continuer avec Google</div>
              </div>
              <div className="flex flex row center gap-4 border-2 p-2  ">
                <img src={"/images/icon_facebook.png"} alt={"facebook"} />
                <div className="text-[16px] text-[#A29F9F]">Continuer avec Facebook</div>
              </div>
              <div className="flex flex row center gap-4 border-2 p-2  ">
                <img src={"/images/icon_apple.png"} alt={"apple"} />
                <div className="text-[16px] text-[#A29F9F]">Continuer avec Apple</div>
              </div>
            </div> */}
            <form className="w-full h-full bg-[#EEE8E4] px-[60px] py-[30px] border-b-[6px] border-x-[6px] border-red-Venetian">
              <h2 className="text-[20px] font-av-bold text-[#264C4D] font-mt-bold ">
                CONNEXION
              </h2>

              <div className="flex flex-col text-black py-2 mb-2">
                {/* <label className="py-1">Email :</label> */}
                <input
                  className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.email}
                  placeholder="Email*"
                  id="email"
                  required
                />
              </div>

              <div className="flex flex-col text-black py-2 mb-2">
                {/* <label className="py-1">Password :</label> */}
                <input
                  className="py-2 px-4 rounded-lg bg-gray-700 border-[#264C4D] border-2 focus:bg-gray-800 focus:outline-none form-control"
                  type="password"
                  onChange={onChangeHandler}
                  value={user.password}
                  placeholder="Password*"
                  id="password"
                  required
                />
              </div>

              <button
                className="w-full my-2 py-3 bg-blue text-white font-mt-bold rounded-full text-[20px]"
                onClick={onClick}
              >
                SE CONNECTER
              </button>
              
              <button
                className="w-full mt-3 mb-3 py-3 bg-blue text-white font-mt-bold rounded-full text-[20px] hover:cursor-pointer"
                onClick={props.password_forgot}
              >
              MOT DE PASSE OUBLIÉ
            </button>


            </form>
          </div>

      </div>
      <div className="w-[34px] h-[34px] bg-[#264C4D] flex center hover:cursor-pointer" onClick={props.close}><img src={"/images/icon_close.png"} alt={"close"}/></div>
      
    </div>
    
  );
};

export default Login;
