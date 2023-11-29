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
