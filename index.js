const endDate = "12 November 2023 12:01 AM";
const now = document.querySelector(".now");
now.innerHTML = endDate;

function clock(){
    const end = new Date(endDate);
    let present = new Date();
    let diff = end-present;
    if(diff<0) return;
    const result = document.querySelectorAll(".box");
    let days  = diff/24/60/60/1000;
    result[0].innerHTML = Math.floor(days);
    let hours = 24 * (days - Math.floor(days));
    result[1].innerHTML = Math.floor(hours);
    let minutes = (hours - Math.floor(hours))*60;
    result[2].innerHTML = Math.floor(minutes);
    let second = (minutes - Math.floor(minutes))*60;
    result[3].innerHTML = Math.floor(second);
}

setInterval(()=>{
    clock();
},1000);