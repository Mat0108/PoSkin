var weekday = new Array("Dimanche", "Lundi", "Mardi", "Mercredi",
"Jeudi", "Vendredi", "Samedi");
var months = new Array(
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
);
export function getDate(date){
    let datef = new Date(date);
    return `${datef.getFullYear()}-${datef.getMonth()+1>9?"":"0"}${datef.getMonth()+1}-${datef.getDate()>9?"":"0"}${datef.getDate()}`
}
export function getShowDate(date){
    let datef = new Date(date);
    return `${datef.getDate()>9?"":"0"}${datef.getDate()}/${datef.getMonth()+1>9?"":"0"}${datef.getMonth()+1}`
}
export function getTime(datef){
    // let datef = new Date(date);
    return `${datef.getHours()>9?"":"0"}${datef.getHours()}h${datef.getMinutes()>9?"":"0"}${datef.getMinutes()}`
}

export function DateFormat(date,showMinutes){
    let local = new Date(date);
    return `${weekday[local.getDay()]} ${local.getDate()} ${months[local.getMonth()]} ${local.getFullYear()} ${showMinutes ? `à ${local.getHours()}h${local.getMinutes()<10?"0":""}${local.getMinutes()}`:""}`
}
export function Heure(date){
    let local = new Date(date);
    return `${local.getHours()}h${local.getMinutes()<10?"0":""}${local.getMinutes()}`
}