const beep = new Audio('beep.webm');

const pole_noty = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
const pole_noty_natural = ["A","B","C","D","E","F","G"];

let ake_noty = true;

function vsetky()
{
    ake_noty = true;
}
function natural()
{   
    ake_noty = false;
}

let cas = document.getElementById("Range").value;
let cas_range = document.getElementById("Range").value;

function casovac()
{
    if(cas<4)
        document.getElementById("casovac").style.color = "red";
    else 
        document.getElementById("casovac").style.color= "green";

    if(cas<1)
    {
        document.getElementById("casovac").innerHTML = "Time out!";
        beep.currentTime = 0;
        beep.play();
        cas_range = document.getElementById("Range").value;
    }
    else
        document.getElementById("casovac").innerHTML = cas;

    if(cas>cas_range-1)
    {
        if(ake_noty)
            document.getElementById("nota").innerHTML = pole_noty[Math.floor(Math.random() * 12)];
        else 
            document.getElementById("nota").innerHTML = pole_noty_natural[Math.floor(Math.random() * 7)];
    }
        
    cas=cas-1;

    if(cas<0)
        cas=cas_range;
}

let fun = true;

function startovanie()
{
    if(fun)
    {
        casovac();
        setInterval(casovac,1000);
    }
    fun = false;
}