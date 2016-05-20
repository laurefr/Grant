	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

	var barChartData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data :  [32,42,52,23,3,34,55]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data : [32,42,52,23,3,34,55]
			}
		]

	}
	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});
	}
    

//BUTTON EVENT LISTENERS
 document.getElementById("btn1").addEventListener('click',function(x){addtoarray(input1.value,input2.value)},false);


//DECLARE ARRAY
var myArray = [];
   
//ADD TO ARRAY
function addtoarray(x,y) {
myArray.push(x);
myArray.push(y);
//show array on webpage horizontally
// document.getElementById("lab19result").innerHTML = myArray.join(", ");
//invoke the display array function

alert(x);
displayarray();
}	

//DISPLAY ARRAY VALUES	
function displayarray(){	
var index;
var text = "<ul>";
for (index = 0; index < myArray.length; index++) {
text += "<li>" + myArray[index] + "</li>";
}
text += "</ul>";
document.getElementById("output1").innerHTML = text;


}


