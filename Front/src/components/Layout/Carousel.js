
import point from "../../images/point.png"
const Carousel =({props})=>{
    return (<>
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        <div className="relative w-full h-fit mt-[10px] flex center">
            <div>
                <p className="mt-[30px] text-[50px] font-av-bold text-blue ">{props.titre}</p>
                {props.col}
                <div className="mt-[20px] w-full flex center"> <img src={point}  /></div>  
                    
            </div>
        </div>
        </>
    )
}
export default Carousel