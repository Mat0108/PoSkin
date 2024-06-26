import React, { useContext, useEffect, useMemo, useState } from 'react';
import { pdfjs, Document, Page,  } from 'react-pdf';
import { getDiagnosticPDF } from '../services/Diagnostic';
import { LanguageContext } from '../languages';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export const PdfViewer = (props) => {
    
    const isMobile = window.screen.width < 600
    const {userLanguage} = useContext(LanguageContext);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdf,setPdf]=useState("");

    useEffect(() => {
        async function fetchData(){
            let data64 = await getDiagnosticPDF(props.pdfId,userLanguage);
            setPdf(data64.data)
        }
        if(props.pdfId){fetchData()}
    }, [props.pdfId])
    
    function ReturnPDF(pdfurl){
        return <Document file={pdfurl}>
            <Page 
            renderTextLayer={false}
            renderAnnotationLayer={true}
            pageNumber={pageNumber} 
            scale={isMobile ? 0.6 : 1}/>
        </Document>
    }
    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = pdf
        link.download = props.filename;
        link.click();
    };
    const element = useMemo(() => {
        
        return <div className='relative'>
        <div className='w-full text-white text-[12px] sm:text-[20px] text-center mb-3 mr-3' >
            {props.title}
        </div>
        <div className="absolute -top-2 -right-2 flex center gap-4">
            
          
            <div className="w-fit h-fit bg-russet p-2 rounded-lg" onClick={downloadPdf}><img src={"/images/downloads.png"} alt={"downloads"} className="w-3 sm:w-6 h-3 sm:h-6"/></div>
            <div className="w-fit h-fit bg-green p-2 rounded-lg" onClick={()=>props.closeModal(true)} ><img src={"/images/icon_close.png"} alt={"close"} className="w-3 sm:w-6 h-3 sm:h-6"/></div>
            
        </div>
        {ReturnPDF(pdf)}  
       
    </div>
    }, [pdf])
    return (
      <div className='bg-blue p-4 rounded-3xl w-fit h-fit'>

        {element}
      </div>
    )
}
