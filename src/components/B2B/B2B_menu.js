import { useState } from "react";
import { Link } from "react-router-dom";
function Label(text1,text2){
    return <div className="flex flex-col"><div>{text1}</div><div>{text2}</div></div>
}
const menu = [
    {
        item:'TABLEAU DE BORD',
        label:Label('TABLEAU','DE BORD'),
        href:'TableauDeBord'
    },
    {
        item:'GESTION DES PATIENTS',
        label:Label('GESTION','DES PATIENTS'),
        href:'GestionPatients'
    },
    {
        item:'FACTURES',
        label:Label('FACTURES'),
        href:'Factures',
    },
    {
        item:'EMAILS',
        label:Label('EMAILS'),
        href:'Emails'
    },
    {
        item:'IMPORT DE DOCUMENTS',
        label:Label('IMPORT','DE DOCUMENTS'),
        href:'Documents'
    },
    {
        item:'NOTES',
        label:Label('NOTES'),
        href:'Notes'
    },
    {
        item:'COMMUNAUTÉ PO.',
        label:Label('COMMUNAUTÉ PO.'),
        href:'Communauté'
    }
]
const B2B_menu = () =>{
    const [selected,setSelected] = useState(menu[0].item)
    function item(element,selected){
        return <Link to={`/PanelExpert/${element.href}`} onClick={()=>setSelected(element.item)} className={`w-[160px] ml-[10px] pl-[20px] h-[70px] rounded-l-[30px] ${selected ? "bg-white text-blue":"text-white z-[10]"} relative flex items-center font-mt-extra-bold text-[14px] text-left`}>
            {element.label}
            {selected ? <>
            <div className="absolute w-[53px] h-[53px] bg-white top-[-53px] right-0"></div>
            <div className="absolute w-[53px] h-[53px] bg-blue rounded-br-full top-[-53px] right-0"></div>
            <div className="absolute w-[53px] h-[53px] bg-white bottom-[-53px] right-0"></div>
            <div className="absolute w-[53px] h-[53px] bg-blue rounded-tr-full bottom-[-53px] right-0"></div>
            
        
            </>:''}
        </Link>
    }
    return <div className="w-[170px] h-screen overflow-auto flex flex-col bg-blue gap-4">
        <Link to={'/'}className="flex center"><img src={"/images/logowhite.png"} alt={"logo"} className="w-[66px] h-[56px] mt-[10px] sm:mt-[30px] z-10 "/></Link>
        {menu.map(element =>{return item(element,element.item === selected)})}

    </div>
}
export default B2B_menu;