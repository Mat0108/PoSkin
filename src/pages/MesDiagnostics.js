import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { forgotPassword, patchUser } from "../services/user";
import { toast } from "react-toastify";
import { getAllDiagnostic, getDiagnosticPDF } from "../services/Diagnostic";
import { PdfViewer } from "../components/PdfViewer";
import { useCookies } from "react-cookie";
import { LanguageContext } from "../languages";

const MesDiagnostics = (props) =>{
  
    const isMobile = window.screen.width < 600
    const { dictionnaire, userLanguage } = useContext(LanguageContext);
    const [diagnostic,setDiagnostic]= useState([])
    const [cookies, setCookies] = useCookies(["user"]);
    const navigate = useNavigate();
    const [pdf,setPdf] = useState("")
    useEffect(() => {
      if(typeof cookies.user !== "object"){
        navigate("/")
      }else{
        async function fetchData(){
          let data = await getAllDiagnostic({email:typeof cookies.user === "object"  ? cookies.user.email:null})
          setDiagnostic(data.data)
        }
        fetchData()
      }
    }, [])

    useEffect(() => {
       
        async function fetchData(){
          let data64 = await getDiagnosticPDF(diagnostic[0]._id,userLanguage);
          setPdf(data64.data)
        }
        if(Object.keys(diagnostic).length){fetchData()}
     
    }, [diagnostic])

    const downloadPdf = (pdfId,filename) => {
      async function fetchData(){
        let data64 = await getDiagnosticPDF(pdfId, userLanguage);
        if(data64.status == 200){
          const link = document.createElement('a');
          link.href = pdf
          link.download = filename;
          link.click();
        }
      }
      fetchData()
      
  };
    const showPDF = useMemo(() =>{
      if(Object.keys(diagnostic).length){
        return <div className="py-4 sm:py-8 px-8 sm:px-16 mb-[30px] flex flex-col gap-5 overflow-hidden hover:overflow-auto" key={"diagnostic"}>
          {diagnostic.map((item,pos)=>{
            let date= new Date(item.date)
            return <div className={` h-[60px] bg-blue  flex rounded-2xl  `} key={`diagnostic-${pos}`}>
                <div className="flex w-1/2">
                  <div className="col-start-1 ml-[15px] sm:ml-[30px]  flex center text-white text-[8px] sm:text-[20px] font-mt-extra-bold">
                  {`${dictionnaire.Diagnostic.Info5} ${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${
                date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getFullYear()}`}
                  </div> 
                </div>
                <div className="flex w-1/2 justify-end mr-[30px] p-2">
                  <div className="flex center gap-4">
                    <div className="w-fit h-fit bg-green p-2 rounded-lg" onClick={()=>props.openModal(
                    <PdfViewer 
                      pdfId={item._id} 
                      title={`${dictionnaire.Diagnostic.Info5} ${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getFullYear()}`} 
                      closeModal={props.closeModal} 
                      filename={`Diagnostic_${date.getDate() < 10 ? '0' : ''}${date.getDate()}.${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}.${date.getFullYear()}.pdf`}/>)}
                    >
                    <img src={"/images/show.png"} alt={"show"} className="w-3 sm:w-6 h-3 sm:h-6"/></div>
                    <div className="w-fit h-fit bg-russet p-2 rounded-lg" onClick={()=>{downloadPdf(item._id,`Diagnostic_${date.getDate() < 10 ? '0' : ''}${date.getDate()}.${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}.${date.getFullYear()}.pdf`)}}><img src={"/images/downloads.png"} alt={"downloads"} className="w-3 sm:w-6 h-3 sm:h-6"/></div>
                  </div>
                </div>
              
            </div>
          })}
           
          
          </div>
        }
        // if(pdf){return <PdfViewer pdfString={pdf} />}
        

    }, [pdf,dictionnaire])
    
    return (
    <div className="">
      <div className="w-full h-fit sm:h-[870px] flex flex-col sm:flex-row">
          
          <div className="w-fit h-full relative">
              <img src={isMobile ? "images/Blog/bienfaitsmasques/bienfaitsmasques1.png":"/images/Compte/Compte1.jpg"} alt={"visage21"} className="w-fit h-full"/>
              <div className="absolute top-0 left-0 w-full h-full flex center"><div className="text-white text-[24px] sm:text-[48px] font-mt-extra-bold">{dictionnaire.diagnostic.toUpperCase()}</div></div>
          </div>
          <div className="w-full h-full p-[15px] sm:p-[30px]">
              <div className="bg-white rounded-3xl w-full h-full flex flex-col ">
                  {showPDF}
              </div>

          </div>
      </div>

  </div>
  )}
export default MesDiagnostics;
