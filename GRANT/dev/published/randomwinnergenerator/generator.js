//BUTTON EVENT LISTENERS
 document.getElementById("btn1").addEventListener('click',function(x){addtoarray(lab19input.value)},false);
 document.getElementById("btn2").addEventListener('click',randomarray,false);

//DECLARE ARRAY
var myArray = [];
   
//ADD TO ARRAY
function addtoarray(x) {
myArray.push(x);
//show array on webpage horizontally
// document.getElementById("lab19result").innerHTML = myArray.join(", ");
//invoke the display array function
displayarray();
}	

//DISPLAY ARRAY VALUES	
function displayarray(){	
var index;
var text = "<ul>";
for (index = 0; index < myArray.length; index++) {

if (index === 0){
text += "<div><span>The entries are:</span><li>" + myArray[index] + "</li></div>";
}
else {
text += "<div><li>" + myArray[index] + "</li></div>";
    
}

}
text += "</ul>";
document.getElementById("output1").innerHTML = text;
}


//SELECT RANDOM MEMBER IN ARRAY
function randomarray() {
//RANDOM select a member of the array
var show = myArray[Math.floor(Math.random() * myArray.length)];
var winner = "<div id='winnerimage'><h1 id='thewinner'>" + show + " !" + "</h1></div>";
//alert(show);
//OUTPUT onto Webpage
document.getElementById("randomwinner").innerHTML = winner;
	
}