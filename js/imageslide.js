let flag=0;
function Control(x){
  flag=flag+x;
    Slide(flag);
}

Slide(flag);
function Slide(num){
    let s=document.getElementsByClassName("slide");
    if(num==s.length){
        flag=0;
        num=0;
    }
    else if(num<0){
        flag=s.length-1;
        num=s.length-1;

    }
    
    for(y of s){
        y.style.display="none";
    }
    s[num].style.display='block';
}
