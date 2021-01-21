//timer function
setInterval(timeUpdate , 1000)
function timeUpdate(){
    minute = document.querySelector("#clock-minute").innerText;
    second = document.querySelector("#clock-second").innerText;
 
    if(parseInt(second)===59)
    {
        var newMin = (parseInt(minute) + 1).toString();
        if(newMin<10)
            newMin="0" + newMin;
        document.querySelector("#clock-minute").innerHTML = newMin;
        document.querySelector("#clock-second").innerHTML = "00";
    } else {
        newSec = (parseInt(second) + 1).toString();
        if(newSec<10)
            newSec="0" + newSec;
        document.querySelector("#clock-second").innerHTML = newSec;
    }
}