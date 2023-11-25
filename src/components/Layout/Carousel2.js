
import { useState,useEffect, useMemo } from "react";
import { getW } from "../TailwindUtils";
const Carousel2 =({props})=>{
    // props : {{items,nbShow}}
    const [show,setShow]= useState(0)
    const [pos,setPos]= useState(0)
    const [items,setItems] = useState()
    const [ratio,setRatio] = useState(15)
    
    const [Mratio,setMRatio] = useState(10)
    
    useEffect(() => {
        if(props.items){
            let i;
            let list = [];
            for (i=show;i<props.nbShow+show;i++){
                if(i>=Object.keys(props.items).length){
                    list.push(props.items[i-Object.keys(props.items).length])
                }else{
                    list.push(props.items[i])
                }
            }
            setItems(list)
        
        }
        if(props.ratio) {setRatio(props.ratio)}
        }, [props,show])
    const point = useMemo(() => {
        return (
            <>
            <img src={pos===0 ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point0"}/>
            <img src={pos===1 ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point1"}/>
            <img src={pos===2 ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point2"}/>
            </>
        )
    }, [pos])
    return (
        <div className="w-full flex flex-col">       
            <div className="flex flex-row w-full">
                <div className={`${getW(Mratio)} sm:${getW(ratio)} flex center`}>
                {!props.disableClic && <p className="text-5xl" onClick={()=>{setShow(show === 0 ? Object.keys(props.items).length-1 :show-1);setPos(pos === 0 ? 2:pos-1);}}>{"<"}</p>}
                </div>
                <div className={`flex flex-row ${getW(100-2*Mratio)} sm:${getW(100-2*ratio)}  h-full ${props.nbShow === 1 ? "center":"justify-between space-x-4"}`}>
                    {items}
                </div>
                <div className={`${getW(Mratio)} sm:${getW(ratio)} flex center`}>
                    {!props.disableClic &&<p className="text-5xl" onClick={()=>{setShow(show>=Object.keys(props.items).length-1 ? 0:show+1);setPos(pos >= 2 ? 0:pos+1);}}>{">"}</p>}
                </div>

            </div>
            {props.showPoint && <div className="w-full flex center mt-[20px]">
                <div className="w-fit flex flex-row space-x-2">
                    {point}
                    {/* {props.items.map((e,pos)=>{return <div className="w-[9px] sm:w-[18px] h-[10px] sm:h-[21px]"><img src={pos===show ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point"}/></div>})}         */}
                </div>
                
            </div>}
        </div>
    )
}
export default Carousel2