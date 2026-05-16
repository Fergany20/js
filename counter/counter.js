let count=0;
document.getElementById("counter").textContent=count;

document.getElementById("increase").onclick=function(){
    document.getElementById("counter").textContent=count+=1;
}
// ---------------------------------------------------
document.getElementById("reset").onclick=function(){
    document.getElementById("counter").textContent=count=0;
}
// ---------------------------------------------------
document.getElementById("decrease").onclick=function(){
    document.getElementById("counter").textContent=count-=1;
}
// ---------------------------------------------------
