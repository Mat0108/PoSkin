import { useEffect, useMemo, useState } from "react";
import { BG } from "../components/TailwindUtils";
import { toast } from "react-toastify";
import { patchUser } from "../services/user";
import { useCookies } from "react-cookie";
import { dictionnaire } from "../languages";

const MoreInfo = (props)=>{
    
    const [cookies, setCookies] = useCookies(["user"]);
    const [user, setUser] = useState({
        firstname: typeof cookies.user === "object"  ? cookies.user.firstname : null,
        lastname: typeof cookies.user === "object"  ? cookies.user.lastname : null,
        email: typeof cookies.user === "object"  ? cookies.user.email : null,
        adresse:"",
        ville:"",
        codepostal:"",
        telephone:"",
        showDermatoloque:"null",
        allergiestype:"null",
        allergies:"",
        sexe:""
      });
    const onChangeHandler = (event) => {
        const { id, value } = event.target;
        setUser({ ...user, [id]: value });

      };

    // useEffect(()=>{
    //     console.log(user)
    // },[user])
    function Input(value,name,id,type,placeholder){
        return <div className="flex flex-col text-black py-2 mb-2">
        <label className="pt-1 text-left">{name}</label>
        <input
          className="rounded-lg bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
          type={type}
          onChange={onChangeHandler}
          value={value}
          placeholder={placeholder}
          id={id}
          required
        />
      </div>
    }
    function Select(question,set1,set2,value){
        return (<div className="w-full flex flex-col mt-[30px] ml-[10px]">
            <div className="text-left text-[16px] font-mt-demi">{question}</div>
            <div className="w-[60%] flex flex-row gap-8 mt-4">
                <div className="flex flex-row " onClick={set1}>
                    <div className={`w-4 h-4 mt-1 mr-3 rounded-full border-2 ${value == true ? "bg-cyan":"bg-white" } border-black `}></div>
                    <div className="text-[16px] font-mt-demi">OUI</div>
                </div>
                <div className="flex flex-row " onClick={set2}>
                    <div className={`w-4 h-4 mt-1 mr-3 rounded-full border-2 ${value == false ? "bg-cyan":"bg-white" } border-black `}></div>
                    <div className="text-[16px] font-mt-demi ">NON</div>
                </div>
            </div>
        </div>)
    }
    async function NextFunction(){
        const isUserValid = Object.values(user).slice(0, Object.keys(user).length - 1).every((value) => value !== "" && value !== "null");
        
        if(isUserValid && user.allergiestype == true ? user.allergies != "" : isUserValid){
            const userData = await patchUser(typeof cookies.user === "object"  ? cookies.user._id : null,user);
            if(userData.status == 200){
                toast.success(dictionnaire.Toast.save_info);
                setTimeout(()=>{
                    props.next();   
                },200)
            }
        }else{
            toast.info(dictionnaire.Toast.required_field_all);
        }
    
    }
    const element = useMemo(() => {
        return( 
        <div className="relative grid grid-cols-3 gap-4 p-4">
            <div className="absolute top-3 left-3 ">
                <div className={`${BG("cyan","light-blue")} w-[50px] h-[50px] rounded-full text-[24px] text-center text-black font-mt-demi hover:cursor-pointer`} onClick={props.back}><img src={"/images/fleche.png"} alt={"fleche"} className={"scale-[-0.75] w-fit h-fit"}/></div>
                       
            </div>
            <div className="col-span-3 text-center text-[24px] mt-[20px]">Nous souhaitons vous connaître un peu plus... </div>
            {Input(user.lastname,"NOM","lastname","text","Votre nom")}
            {Input(user.telephone,"TELEPHONE","telephone","text","Votre telephone")} 
            {Select("AVEZ-VOUS DÉJÀ VU UN DERMATOLOQUE ?",()=>setUser({ ...user, showDermatoloque: true }),()=>setUser({ ...user, showDermatoloque: false }),user.showDermatoloque)}
            {Input(user.firstname,"PRENOM","firstname","text","Votre prenom")}
            {Input(user.adresse,"ADRESSE","adresse","text","Votre adresse ")}
            {Select("AVEZ-VOUS DES ALLERGIES ?",()=>setUser({ ...user, allergiestype: true }),()=>setUser({ ...user, allergiestype: false }),user.allergiestype)}
            
            {Input(user.sexe,"SEXE","sexe","text","Votre sexe")}  
            {Input(user.ville,"VILLE","ville","text","Votre ville")} 
            <div className="flex flex-row  ">
                <div className="text-[16px] font-mt-demi mt-3 mr-4">Si oui, lesquels ? : </div>
                <input
                    className="rounded-lg h-[36px] bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                    type={"text"}
                    onChange={onChangeHandler}
                    value={user.allergies}
                    placeholder={""}
                    id={"allergies"}
                    required
                    />
            </div>
            
            {Input(user.email,"EMAIL","email","text","Votre email")}
            {Input(user.codepostal,"CODE POSTAL","codepostal","text","Vote code postal")}
            <div className="col-start-3">
                <div className="w-full h-[60px] flex center mt-[30px]">
                    <div className={`${BG("cyan","light-blue")} px-8 py-2 rounded-full text-[14px] xl:text-[18px] 3xl:text-[24px] text-center text-black font-mt-demi my-[30px] `} onClick={()=>{NextFunction()}}> Suivant</div>
                </div>
            </div>     
        </div>
    )}
    , [user]);
    return element;

}
export default MoreInfo;