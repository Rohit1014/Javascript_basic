var hr=0;
var min=0;
var sec=0;
var msec=0;
var timer=false;
var count=0

function Start(){
    timer=true;
    count=1
    Stopwatch();


}
function Stop(){
    count=0
    timer=false;

}
function Reset(){
    timer=false;
    count=0
    Resetting();

}
function Stopwatch(){
    if(timer=true&&count==1){
        msec=msec+1;

    if(msec==100){
        sec=sec+1;
        msec=0;
    }
    if(sec==60){
        min=min+1;
        sec=0;
    }
    if(min==60){
        hr=hr+1;
        min=0;
        sec=0;
    }
    

    
    document.getElementById("ms").innerHTML=msec;
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("min").innerHTML=min;
    document.getElementById("hr").innerHTML=hr;

    setTimeout("Stopwatch()",10);
}
}
function Resetting(){
    document.getElementById("ms").innerHTML=0;
    document.getElementById("sec").innerHTML=0;
    document.getElementById("min").innerHTML=0;
    document.getElementById("hr").innerHTML=0;

}

