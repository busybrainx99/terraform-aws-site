const simulate = document.getElementById("sim_btn");
const stop = document.getElementById("stop_btn");
const refresh = document.getElementById("refresh_btn");

//Creating the function that controls the order in which the traffic lights comes on
 const trafficSim = simulate.onclick = function () {

   function firstOne() {
    greenLight();
    redLightOff();
    walkLightOff();
   } firstOne();
    setTimeout("greenLightOff()",  10000);
    function asyncYellow() {
        return new Promise ((resolve, reject) => {
            setTimeout( () => {
                resolve(yellowLight());},10000);
            });
        }
        async function callUpRed() {
            await asyncYellow();
            setTimeout("yellowLightOff()", 5000);
            setTimeout("redLight()", 5000);
            setTimeout("walkLight()", 5000);
        }
        callUpRed()
        callSetInterval();
    }
//Creating a set Interval method to make the trafic simulation work continuously
    let intervalId; 
    let intervalId_array=[]    

function callSetInterval() {

    intervalId = setInterval( trafficSim, 25000);
    intervalId_array.push(intervalId);

} 
   
//function to keep track of the various values of the set interval method and stopping it from working working continuously
stop.onclick = function stopInterval() {

    for(var i=0;i<intervalId_array.length;i++){
        clearInterval(intervalId_array[i]);         
     } 

}

//Button to refresh the page
refresh.onclick = function () {
    location.reload();
}


//Manipulating the background colors
function greenLight() {
    document.getElementById("green").style.backgroundColor = "green";
}


function yellowLight() {
    document.getElementById("yellow").style.backgroundColor = "yellow"; 
}


function redLight() {
    document.getElementById("red").style.backgroundColor = "red";
}

function walkLight() {
    document.getElementById("walk").style.backgroundColor = "green";
}


function greenLightOff() {
    document.getElementById("green").style.backgroundColor = "transparent";
}

function yellowLightOff() {
    document.getElementById("yellow").style.backgroundColor = "transparent";
}

function redLightOff() {
    document.getElementById("red").style.backgroundColor = "transparent";
}

function walkLightOff() {
    document.getElementById("walk").style.backgroundColor = "transparent";
}



