import React, { useState } from "react";
import { login, register } from "../services/user";

const Register = (props) => {
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
        const resLogin = await login({email:user.email,password:user.password})
        if(resLogin.status === 200){
          props.close()
        }  
      }
    } else {
      alert("Please fill all the fields!");
    }
  };

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

  return (
    <div className="w-fit h-fit flex flex-row">
      <div className="w-[34px] h-[34px] bg-[#264C4D] flex center hover:cursor-pointer" onClick={props.close}><img src={"/images/icon_close.png"} alt={"close"}/></div>
      <div className="w-fit h-fit bg-[#264C4D] grid grid-cols-2">
          <div><img src={"/images/visage/visage30.png"} alt={"visage"} className="h-full"/> </div>
          <div className="flex flex-col center">
            <img src={"/images/logowhite.png"} alt={"logo"} className="w-[66px] h-[56px] mt-[30px]"/>
            <p className="text-[16px] text-center text-white mt-[20px]">Rejoignez le mouvement et découvrez</p>
            <p className="text-[16px] text-center text-white">  votre nouvelle peau</p>
            <div className="grid grid-cols-2 w-full mt-[22px]">
              <div className={`${props.type === false ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center`}>
                <div className={`${props.type === true ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-bold hover:cursor-pointer`}>INSCRIPTION</div>
              </div>
              <div className={`${props.type === true ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center`}>
                <div className={`${props.type === false ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-bold hover:cursor-pointer`} onClick={props.login}>DÈJA INSCRIT </div>
              </div>
            </div>
            <div className="w-full h-fit bg-white flex flex-col px-[60px] py-[30px] gap-8">
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
            </div>
        <form className="relative w-full h-fit bg-[#EEE8E4] px-[60px] py-[30px] flex flex-col gap-4">
           <h2 className="text-[20px] font-av-bold text-[#264C4D] font-mt-bold ">
            CRÉER UN COMPTE
          </h2>
          <div className="relative w-full flex flex-row gap-2">
          <input
              className="w-full rounded-lg bg-gray-700 border-[#264C4D] border-2 py-2 px-4 focus:border-blue-500 focus:bg-black-800 focus:outline-none form-control Cinput"
              type="text"
              onChange={onChangeHandler}
              value={user.firstname}
              placeholder="Prenom*"
              id="firstname"
              required
            />
             <input
              className="rounded-lg bg-gray-700 border-[#264C4D] border-2 py-2 px-4 focus:border-blue-500 focus:bg-black-800 focus:outline-none form-control Cinput"
              type="text"
              onChange={onChangeHandler}
              value={user.lastname}
              placeholder="Nom*"
              id="lastname"
              required
            />
          </div>   
          <input
            className="w-full rounded-lg bg-gray-700 border-[#264C4D] border-2 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-black-800 focus:outline-none form-control Cinput"
            type="text"
            onChange={onChangeHandler}
            value={user.email}
            placeholder="E-mail*"
            id="email"
            required
          />
          <input
            className="w-full p-2 rounded-lg bg-gray-700 border-[#264C4D] border-2 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-gray-800 focus:outline-none form-control Cinput"
            type="password"
            onChange={onChangeHandler}
            value={user.password}
            placeholder="Mot de passe*"
            id="password"
            required
          />
          <input
            className="w-full p-2 rounded-lg bg-gray-700 border-[#264C4D] border-2 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-gray-800 focus:outline-none form-control Cinput"
            type="password"
            onChange={onChangeHandler}
            value={user.confirmpassword}
            placeholder="Confirmer mot de passe*"
            id="confirmpassword"
            required
          />
          
          <button
              className="w-full mt-3 py-3 bg-blue text-white font-mt-bold rounded-full text-[20px] hover:cursor-pointer"
              onClick={onClick}
            >
            S'INCRIRE
          </button>
          <div className="w-full h-full grid grid-cols-2"></div>
          

        </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
