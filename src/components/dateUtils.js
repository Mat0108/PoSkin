export function getDate(date){
    let datef = new Date(date);
    return `${datef.getMonth()+1>9?"":"0"}${datef.getMonth()+1}/${datef.getDate()>9?"":"0"}${datef.getDate()}`
}
export function getTime(datef){
    // let datef = new Date(date);
    return `${datef.getHours()>9?"":"0"}${datef.getHours()}h${datef.getMinutes()>9?"":"0"}${datef.getMinutes()}`
}
export function getDay(day){
    switch(day){
        case 2:
            return "Lundi";
        case 3:
            return "Mardi";
        case 4:
            return "Mercredi";
        case 5:
            return "Jeudi";
        case 6:
            return "Vendredi";
        }
}