
const LayoutFullImage =({props})=>{
    return (<>
        <div className="relative w-full h-fit bg-[#DEE4E4]">
            <div className='w-full flex center'><img src={props.image1.url} alt={props.image1.alt} className="w-full"/></div>
            <div className="absolute z-[100]  top-[24%] sm:top-[30%] w-full h-[30px] text-white_coffee font-mt-bold text-[18px] sm:text-[70px] flex center"><p className="">{props.titre}</p></div>
            {props.button && props.button}
            {props.text1 && <div className="absolute top-[680px] w-full h-[60px] text-white_coffee text-[15px] flex center"><p className="w-[70%]">{props.text1}</p> </div>}
        
        </div>
  
    </>
    )
}
export default LayoutFullImage