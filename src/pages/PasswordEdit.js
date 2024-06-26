import React, { useContext, useEffect, useMemo, useState } from 'react';
import { forgotPasswordCheckToken, forgotPasswordValider } from '../services/user';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LanguageContext } from '../languages';


function PasswordEdit(props) {
  
  const isMobile = window.screen.width < 600
  const { dictionnaire } = useContext(LanguageContext);
  const [user, setUser] = useState({
    password1: "",
    password2: ""
  });
  const [condToken, setCondToken] = useState('')
  const [id,setId] = useState()
  let params = useParams()
  const navigate = useNavigate();
  useEffect(() => {
  const fetchData = async() => {
    const cond = await forgotPasswordCheckToken(params.TokenId);
    setId(cond.status.id)
    setCondToken(cond.data.status)

  };
  if(params.TokenId){fetchData()};
  }, [params])
  
  const handleForgotPassword = async (event) => {
    event.preventDefault();
    // console.log('email : ', email)
    if(user.password1 !== "" && user.password2 !== ""){
    if(user.password1 === user.password2){
      const response = await forgotPasswordValider({resetToken:params.TokenId,newPassword:user.password1});
  
      if(response.status === 200 && response.data.status === true){
        toast.success(dictionnaire.Toast.modif_password);
        navigate("/")
        props.login()
      }else{
        toast.error(dictionnaire.Toast.error_api); 
      } 
    }else{
      toast.info(dictionnaire.Toast.different_password); 
    }
   
  }else{
    toast.info(dictionnaire.Toast.required_field_all);
    }
  }
  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

  const element = useMemo(() => {
    if(!condToken){
      return (
      <form className="w-full h-full bg-[#EEE8E4] px-[30px] sm:px-[60px] py-[15px] sm:py-[30px] border-[6px] border-cyan_medium">
        <h2 className="text-[12px] sm:text-[20px] font-av-bold text-[#264C4D] font-mt-extra-bold ">
          {dictionnaire.Password.edit}
        </h2>
        <div className="flex flex-col text-black py-2 mb-2">
          <input
            className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
            type="password"
            onChange={onChangeHandler}
            value={user.password1}
            placeholder={dictionnaire.Password.password}
            id="password1"
            required
          />
        </div>
        <div className="flex flex-col text-black py-2 mb-2">
          <input
            className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
            type="password"
            onChange={onChangeHandler}
            value={user.password2}
            placeholder={dictionnaire.Login.confirmpassword}
            id="password2"
            required
          />
        </div>
        <Link to="/">
          <button 
            
            className="w-full my-5 py-2 bg-blue shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            onClick={handleForgotPassword}
          >
            {dictionnaire.connect}
          </button>
        </Link>

      </form>)
      }else{
        return <div className="w-full h-full flex flex-col center bg-[#EEE8E4] border-[6px] border-cyan_medium">
          <h2 className="w-full mb-[30px] mt-3 sm:mt-0 text-[10px] sm:text-[18px] font-av-bold text-[#264C4D] font-mt-extra-bold ">
            {dictionnaire.Password.not_valide} 
          </h2>
          <Link
          to="/"
          className="w-fit px-10 mb-3 py-3 bg-blue text-white font-mt-extra-bold rounded-full text-[10px] sm:text-[20px] hover:cursor-pointer flex flex-col"
          onClick={props.password}
        >
         <a>{dictionnaire.Password.new_request} </a>
            <a>{dictionnaire.passwordforgot.toLowerCase()}  </a>
        </Link>
          </div>}
    }, [condToken,user,id])
  return (
    <div className='w-full h-fit flex center p-4 sm:p-0'>

      <div className="w-fit h-fit flex flex-row text-[12px] sm:text-[16px] ">
        <div className="w-fit h-fit bg-[#264C4D] grid grid-cols-1 sm:grid-cols-2 ">
            {isMobile ? "":<div><img src={"/images/visage/visage29.png"} alt={"visage"} className="w-[530px] h-[680px]"/> </div>}
            <div className="flex flex-col center w-[320px] sm:w-[530px] h-fit sm:h-[680px]  ">
              <img src={"/images/logowhite.png"} alt={"logo"} className="w-[66px] h-[56px] mt-[30px]"/>
              <p className="text-center text-white mt-[20px]">{dictionnaire.Password.rejoignez}</p>
              <p className="text-center text-white"> {dictionnaire.Login.peau}</p>
              <div className="grid grid-cols-1 w-full mt-[22px] ">
                {/* <div className={`${props.type === false ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center`}>
                  <div className={`${props.type === true ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-extra-bold hover:cursor-pointer`} onClick={props.register} >INSCRIPTION</div>
                </div> */}
                <div className={`${props.type === false ? "bg-[#EEE8E4]":"bg-[#264C4D]"} w-full h-[60px] flex center`}>
                  <div className={`${props.type === true ? "text-[#EEE8E4]":"text-[#264C4D]"} font-mt-extra-bold hover:cursor-pointer`} onClick={props.login} >{dictionnaire.Login.registered} </div>
                </div>
              </div>
              {element}
            </div>

        </div>
        <Link to="/" className="w-[34px] h-[34px] bg-[#264C4D] flex center hover:cursor-pointer" ><img src={"/images/icon_close.png"} alt={"close"}/></Link>
        
      </div>
    </div>
  );
}

export default PasswordEdit;
