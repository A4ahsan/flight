export default function toHoursAndMinutes(totalMinutes, todo) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    if(todo === true){
        return `${padTo2Digits(hours)} H ${padTo2Digits(minutes)} MIN`;
    }else if(todo === "full"){
        if(!minutes){
            return `${hours}H`;
        } else {
            return `${hours}H ${minutes}M`;
        }
    }
     else{
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
    }
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}