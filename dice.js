var x=Math.floor(Math.random()*6)+1;
var z=Math.floor(Math.random()*6)+1;
console.log(x);
var i1=document.querySelectorAll("img")[0];
var i2=document.querySelectorAll("img")[1];
var y="images/"+"dice"+x+".png";
var w="images/"+"dice"+z+".png";
i1.setAttribute("src",y);
i2.setAttribute("src",w);
if(x>z){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(z>x){
    document.querySelector("h1").innerHTML="player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="match draw";
}