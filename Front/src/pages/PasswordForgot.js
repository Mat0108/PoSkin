import React, { useState } from 'react';
import { forgotPassword } from '../services/user';
import { toast } from 'react-toastify';


function PasswordForgot(props) {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    console.log('email : ', email)
    const response = await forgotPassword({email:email});
    if(response.status === 200){
      toast.success("Mail envoyé !")
    }
  };

  return (

      <div className="w-fit h-fit flex flex-row">
        <div className="w-[34px] h-[34px] bg-[#264C4D] flex center hover:cursor-pointer" onClick={props.close}><img src={"/images/icon_close.png"} alt={"close"}/></div>
        <div className="w-fit h-fit bg-[#264C4D] grid grid-cols-2">
            <div><img src={"/images/visage/visage29.png"} alt={"visage"} className="h-full"/> </div>
            <div className="flex flex-col center">
              <img src={"/images/logowhite.png"} alt={"logo"} className="w-[66px] h-[56px] mt-[30px]"/>
              <p className="text-[16px] text-center text-white mt-[20px]">Rejoignez le mouvement et découvrez</p>
              <p className="text-[16px] text-center text-white">  votre nouvelle peau</p>
              <div className="grid grid-cols-2 w-full mt-[22px]">
                <div className={`${props.type === false ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center`}>
                  <div className={`${props.type === true ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-bold hover:cursor-pointer`} onClick={props.register} >INSCRIPTION</div>
                </div>
                <div className={`${props.type === false ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center`}>
                  <div className={`${props.type === true ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-bold hover:cursor-pointer`} onClick={props.login} >DÈJA INSCRIT </div>
                </div>
              </div>

              <form className="w-full h-full bg-[#EEE8E4] px-[60px] py-[30px]">
                <h2 className="text-[20px] font-av-bold text-[#264C4D] font-mt-bold ">
                  MOT DE PASSE OUBLIÉ
                </h2>

                
                <div className="flex flex-col text-black py-2 mb-2">
                  <input
                    className="rounded-lg bg-gray-700 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-black-800 focus:outline-none form-control Cinput"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrez votre adresse e-mail"
                  />
                </div>

                <button
                  className="w-full my-5 py-2 bg-blue shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
                  onClick={handleForgotPassword}
                >
                  Demander un lien de réinitialisation
                </button>


              </form>
            </div>

        </div>
      </div>
  );
}

export default PasswordForgot;
