//ADD EVENT LISTENERS
window.addEventListener("load", start, false);

function start(){
 document.getElementById("submitbtn").addEventListener("click", ajaxcall,false);

}
      
      
function ps(){
    
    
cityval = document.getElementById('thecity').value;

data = "http://api.openweathermap.org/data/2.5/weather?q=" + cityval + "&APPID=afe24dbc851567b6dd99613b06c61f1f";
//alert(data);
document.getElementById("cityoutput").innerHTML = cityval;
 

//alert(cityval);
  //  document.getElementById("personselected").innerHTML = personSelected
  ajaxcall();

}



//data for moscow call to api using city ID
/*** EXAMPLE 1 WORKS ***/ 
//var data = "http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=afe24dbc851567b6dd99613b06c61f1f";

/*** EXAMPLE 2 WORKS ***/ 
//var data = "http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=afe24dbc851567b6dd99613b06c61f1f";


/*** EXAMPLE 3 WORKS ***/ 
//var data = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=afe24dbc851567b6dd99613b06c61f1f";





function ajaxcall () {
    
/* Javascript AJAX REQUEST TO JSON FILE */


var  cityval = document.getElementById('thecity').value;
alert (cityval);

data = "http://api.openweathermap.org/data/2.5/weather?q=" + cityval + "&APPID=afe24dbc851567b6dd99613b06c61f1f";
alert (data);
  
    
var data1 = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      data1 = xhttp.responseText;
      alert(data1);
      data2 = JSON.parse(data1);
     //DATA PARSED NOW _ CARRY OUT ACTIONS ON THE DATA OBJECTS WITHIN HERE 
     
/*** EXAMPLE 1 WORKS ***/ 
//   alert(data.city.name);
   
   
/*** EXAMPLE 2 WORKS ***/ 
//   alert(data.coord.lon);
//   alert(data.weather[0].main); //clouds
//   alert(data.weather[0].description); //clouds
//   alert(data.base); //clouds
//   alert(data.main.temp + " , " + data.id + " , " +  data.name);

//   alert(data.label.length);
//   alert(data.label[0]);
//   alert(data);

/*** EXAMPLE 3 WORKS ***/ 
//document.getElementById("cityoutput").innerHTML = data2.name;

//STORE the data as local variables
alert(data2);
//theid = data2.id;
//thelon = data2.coord.lon;

//alert (thename + theid + thelon);


      
 /* AJAX REQUEST END ******************************************************  */
    }
  };
  xhttp.open("GET", data, true);
  xhttp.send();
}  





