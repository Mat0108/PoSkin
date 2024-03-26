import React, { useContext, useState } from "react";
import { register } from "../services/user";
import { toast } from "react-toastify";
import { saveDiagnostic } from "../services/Diagnostic";
import { LanguageContext } from "../languages";

const Register = (props) => {
  
  const isMobile = window.screen.width < 600
  const { dictionnaire, userLanguage } = useContext(LanguageContext);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword:""
  });



  const onClick = async (event) => {
    event.preventDefault();

    if (user.email !== "" && user.password !== "" && user.confirmpassword !== "" && user.password === user.confirmpassword && user.firstname !== "" && user.lastname !== "") {
      const res = await register(user);
      if (res.status === 200) {
        if(props.diagnostic_data){
          let response = await saveDiagnostic({mail:user.email,language:userLanguage,...props.diagnostic_data})
          if(response.status === 200){      
              toast.success(dictionnaire.Toast.send_confirm_mail);
          }else{
              toast.error(dictionnaire.Toast.error_api)
          }
        }
        props.close()
      }
    } else {
      toast.info(dictionnaire.Toast.required_field_all);
    }
  };

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

  return (
    <div className="w-fit h-fit flex flex-row p-4 sm:p-0">
      <div className="w-[320px] sm:w-full h-fit bg-[#264C4D] flex flex-row">
          {isMobile ? "":<div><img src={"/images/visage/visage30.png"} alt={"visage"} className="w-[530px] h-[770px]"/> </div>}
          <div className="flex flex-col center w-full sm:w-[530px] h-fit sm:h-[770px]">
            <img src={"/images/logowhite.png"} alt={"logo"} className="w-[33px] sm:w-[66px] h-[28px] sm:h-[56px] mt-[15px] sm:mt-[30px]"/>
            <p className="text-[12px] sm:text-[16px] text-center text-white mt-[20px]">{dictionnaire.Login.mouvement}</p>
            <p className="text-[12px] sm:text-[16px] text-center text-white">  {dictionnaire.Login.peau}</p>
            <div className="grid grid-cols-2 w-full mt-[22px]">
              <div className={`${props.type === false ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center border-t-[6px] border-x-[6px] border-red-Venetian`}>
                <div className={`${props.type === true ? "text-[#EEE8E4]":"text-[#264C4D]"} text-[12px] sm:text-[16px] font-mt-extra-bold hover:cursor-pointer`}>{dictionnaire.Login.inscription.toUpperCase()}</div>
              </div>
              <div className={`${props.type === true ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center border-b-[6px] border-red-Venetian` }>
                <div className={`${props.type === false ? "text-[#EEE8E4]":"text-[#264C4D]"} text-[12px] sm:text-[16px] font-mt-extra-bold hover:cursor-pointer `} onClick={props.login}>{dictionnaire.Login.registered.toUpperCase()} </div>
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
            <form className="w-full h-full bg-[#EEE8E4] text-[12px] sm:text-[20px] px-[30px] sm:px-[60px] py-[15px] sm:py-[30px] border-b-[6px] border-x-[6px] border-red-Venetian">
              <h2 className="text-[14px] sm:text-[20px] font-av-bold text-[#264C4D] font-mt-extra-bold ">
                {dictionnaire.Login.create_account.toUpperCase()}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex flex-col text-black py-2 ">
                {/* <label className="py-1">Email :</label> */}
                <input
                  className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.firstname}
                  placeholder={`${dictionnaire.Compte.Prenom}*`}
                  id="firstname"
                  required
                />
              </div>
              <div className="flex flex-col text-black py-2 ">
                {/* <label className="py-1">Email :</label> */}
                <input
                  className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.lastname}
                  placeholder={`${dictionnaire.Compte.Nom}*`}
                  id="lastname"
                  required
                />
              </div>
              </div>

              <div className="flex flex-col text-black py-2 ">
                {/* <label className="py-1">Email :</label> */}
                <input
                  className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                  type="text"
                  onChange={onChangeHandler}
                  value={user.email}
                  placeholder={`${dictionnaire.Compte.Email}*`}
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col text-black py-2 ">
                {/* <label className="py-1">Email :</label> */}
                <input
                  className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                  type="password"
                  onChange={onChangeHandler}
                  value={user.password}
                  placeholder={`${dictionnaire.Login.password}*`}
                  id="password"
                  required
                />
              </div>
              <div className="flex flex-col text-black py-2 ">
                {/* <label className="py-1">Email :</label> */}
                <input
                  className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                  type="password"
                  onChange={onChangeHandler}
                  value={user.password}
                  placeholder={`${dictionnaire.Login.password}*`}
                  id="password"
                  required
                />
              </div>
              <div className="flex flex-col text-black py-2 ">
                {/* <label className="py-1">Email :</label> */}
                <input
                  className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                  type="password"
                  onChange={onChangeHandler}
                  value={user.confirmpassword}
                  placeholder={`${dictionnaire.Login.confirmpassword}*`}
                  id="confirmpassword"
                  required
                />
              </div>
              <button
                className="w-full my-2 py-3 bg-blue text-white font-mt-extra-bold rounded-full "
                onClick={onClick}
              >
                {dictionnaire.register.toUpperCase()}
              </button>
              



            </form>
     
        </div>
      </div>
      <div className="w-[34px] h-[34px] bg-[#264C4D] flex center hover:cursor-pointer" onClick={props.close}><img src={"/images/icon_close.png"} alt={"close"}/></div>
      
    </div>
  );
};

export default Register;
