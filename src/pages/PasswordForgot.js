import React, { useContext, useState } from 'react';
import { forgotPassword } from '../services/user';
import { toast } from 'react-toastify';
import { LanguageContext } from '../languages';


function PasswordForgot(props) {
  
  const isMobile = window.screen.width < 600
  const { dictionnaire } = useContext(LanguageContext);
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    const response = await forgotPassword({email:email});
    if(response.status === 200){
      toast.success(dictionnaire.Toast.send_mail);
    }
  };

  return (

      <div className="w-fit h-fit flex flex-row  p-4 sm:p-0">
        <div className="relative w-[320px] sm:w-full h-fit bg-[#264C4D] ">
            {isMobile ? "":<div><img src={"/images/visage/visage29.png"} alt={"visage"} className="w-[530px] h-[680px]"/> </div>}
            <div className="flex flex-col center w-full sm:w-[530px] h-fit sm:h-[680px] text-[12px] sm:text-[16px]">
              <img src={"/images/logowhite.png"} alt={"logo"} className="w-[33px] sm:w-[66px] h-[28px] sm:h-[56px] mt-[15px] sm:mt-[30px]"/>
              <p className="text-center text-white mt-[20px]">{dictionnaire.Login.mouvement}</p>
              <p className="text-center text-white"> {dictionnaire.Login.peau}</p>
              <div className="grid grid-cols-2 w-full mt-[22px]">
                <div className={`${props.type === true ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center`}>
                  <div className={`${props.type === false ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-extra-bold hover:cursor-pointer`} onClick={props.register} >{dictionnaire.register.toUpperCase()}</div>
                </div>
                <div className={`${props.type === true ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center`}>
                  <div className={`${props.type === false ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-extra-bold hover:cursor-pointer`} onClick={props.login} > {dictionnaire.Login.registered.toUpperCase()} </div>
                </div>
              </div>

              <form className="text-[12px] sm:text-[20px] w-full h-full bg-[#EEE8E4] px-[30px] sm:px-[60px] py-[15px] sm:py-[30px] border-[6px] border-red-Venetian">
                <h2 className="font-av-bold text-[#264C4D] font-mt-extra-bold ">
                  {dictionnaire.passwordforgot.toUpperCase()}
                </h2>

                
                <div className="flex flex-col text-black py-2 mb-2">
                  <input
                    className="rounded-lg bg-gray-700 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-black-800 focus:outline-none form-control Cinput"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dictionnaire.Password.email}
                  />
                </div>

                <button
                  className="text-[10px] sm:text-[20px] w-full my-5 py-2 bg-blue shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
                  onClick={handleForgotPassword}
                >
                  {dictionnaire.Password.ask}
                </button>


              </form>
            </div>

        </div>
        <div className="w-[34px] h-[34px] bg-[#264C4D] flex center hover:cursor-pointer" onClick={props.close}><img src={"/images/icon_close.png"} alt={"close"}/></div>
        
      </div>
  );
}

export default PasswordForgot;
