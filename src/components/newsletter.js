import { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { toast } from "react-toastify";
// import env from "react-dotenv";
const Newsletter =()=>{
    const [value, setValue] = useState();
    const firebaseConfig = {
        apiKey: "AIzaSyA44Ehyz0Fu6pISrwKaI5rALkfAUr-LpQ8",
        authDomain: "landingpage-5f8fe.firebaseapp.com",
        projectId: "landingpage-5f8fe",
        storageBucket: "landingpage-5f8fe.appspot.com",
        messagingSenderId: "868071044023",
        appId: "1:868071044023:web:92d849caa07464ee2d6e32"
      };
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      async function createUser(mail){
        const user = {
            mail: mail
          };
        // await db.collection('User').doc('User').set(user);
        await setDoc(doc(db, "User", mail), user).then(e=>{setValue("");toast.success("Email inscript pour la newsletter")});
      }
      
    return (<>

        <div className="relative w-full h-[100px] sm:h-[260px] grid grid-cols-6 bg-[#83C5BE]">
            <div className="col-start-1 col-span-2 flex flex-col text-center my-auto ml-[40px]">
                <p className="text-[12px] sm:text-[30px] w-[80%] sm:w-[90%]">NEWSLETTER</p>
                <p className="w-[90%] sm:w-[60%] text-[7px] sm:text-[14px] text-justify mx-auto">Suivez notre actualité et ne manquez aucune de nos nouveautés en vous inscrivant à notre newsletter </p>
            </div>
            <div className="col-start-3 col-span-4 flex flex-col center ">
                <p className="text-[12px] sm:text-[30px] ">Votre adresse mail:</p>
                <div className="flex flex-row w-[90%]">
                    <input className="w-[80%] bg-[#83C5BE] border-b-2 mt-5 text-[16px] sm:text-[18px]" placeholder="votre mail " value={value} onChange={e=>setValue(e.target.value)}></input>
                    <div className="w-[20%]"><div className="mt-[20px] w-[20px] sm:w-[40px] ml-[10px] flex center border-2 " onClick={()=>createUser(value)}> <img src={"/images/fleche.png"} alt={"fleche"} /></div></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Newsletter