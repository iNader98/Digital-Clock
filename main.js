let section = document.querySelector("section"),
 icons = document.querySelector(".icons");

 icons.onclick = () => {
    section.classList.toggle("dark");
 }


// creating a function and calling it in every seconds  (to create a clock)


setInterval(() => {
    let date =  new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();




    // if hour is smaller than 12 then its value will be AM 
    // else its value will be PM
    let d;
    d = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour ; // if hour value is greater than 12 then substract from 12
    hour = hour == 0 ? hour = 12 : hour ; // if hour value is 0 then the hour value will be 12

   // adding 0 to all values if they will be les than 10 
   sec =  sec < 10 ? "0" + sec : sec;
   hour = hour < 10 ? "0" + hour : hour;
   min =  min < 10 ? "0" + min : min;

document.querySelector(".hour-num").innerText = hour;
document.querySelector(".min-num").innerText = min;
document.querySelector(".sec-num").innerText = sec;
document.querySelector(".am_pm").innerText = d;
}, 1000); // 1000 in milliseconds = 1s