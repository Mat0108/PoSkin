import B2B_menu from "../components/B2B/B2B_menu"
import Prestations from "../components/B2B/Prestations/Prestations"

const TableauDeBord = ()=>{
    return (
    <div className="w-full h-full bg-white flex flex-row">
        <B2B_menu />
        <div className="w-1/2 h-full p-4"><Prestations /></div>
    </div>)
}
export default TableauDeBord