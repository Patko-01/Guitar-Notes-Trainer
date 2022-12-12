const beep = new Audio('beep.webm');

const pole_noty = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

let ake_noty = true;

function vsetky()
{
    const pole_noty = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
    ake_noty = true;
}
function natural()
{
    const pole_noty = ["A","B","C","D","E","F","G"];
    ake_noty = false;
}

let cas = 10;

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
    }
    else
        document.getElementById("casovac").innerHTML = cas;

    if(cas>9)
    {
        if(ake_noty)
            document.getElementById("nota").innerHTML = pole_noty[Math.floor(Math.random() * 12)];
        else 
            document.getElementById("nota").innerHTML = pole_noty[Math.floor(Math.random() * 7)];
    }
        
    cas=cas-1;
    if(cas<0)
        cas=10;
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