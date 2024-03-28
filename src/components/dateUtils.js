import moment from "moment";

var weekday = ["Dimanche", "Lundi", "Mardi", "Mercredi",
"Jeudi", "Vendredi", "Samedi"];
var months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];


export function DateFormat(date,showMinutes){
    let local = moment(date)
    return `${weekday[local.day()]} ${local.date()} ${months[local.month()]} ${local.year()} ${showMinutes ? `à ${local.hour()}h${local.minute()<10?"0":""}${local.minute()}`:""}`
}
export function Heure(date){
    let local = new Date(date);
    return `${local.getHours()}h${local.getMinutes()<10?"0":""}${local.getMinutes()}`
}