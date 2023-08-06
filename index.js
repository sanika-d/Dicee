var no1= (Math.floor(Math.random()*6)+1);
var randomImage1= "images/dice"+no1+".png";

var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage1);




var no2= (Math.floor(Math.random()*6)+1);
var randomImage2= "images/dice"+no2+".png";

var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2);



if(no1>no2){
    document.querySelector("h1").innerHTML="Player 1 wins!"
}

else if(no1===no2){
    document.querySelector("h1").innerHTML="It's a tie."
}

else{
    document.querySelector("h1").innerHTML="Player 2 wins!"
}