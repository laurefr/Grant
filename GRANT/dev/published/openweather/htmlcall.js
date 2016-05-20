//ADD EVENT LISTENERS
window.addEventListener("load", start, false);

function start(){
 document.getElementById("btn1").addEventListener("click", loadData,false);
}


function loadData() {
    //GET City Value from user
    cityval = document.getElementById('thecity').value;
    //STORE City in the string
    htmldata = "http://api.openweathermap.org/data/2.5/weather?q=" + cityval + "&mode=html&APPID=afe24dbc851567b6dd99613b06c61f1f";
    
    //SEND Ajax 
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //Write the response to the HTML document    
     // document.getElementById("demo").innerHTML = xhttp.responseText;
     var data1 = xhttp.responseText;
     document.getElementById("demo").innerHTML = data1;
     
     var data2 = JSON.parse(data1);
     document.getElementById("demo2").innerHTML = data2;
     document.getElementById("demo3").innerHTML = data2.name;
     
    }
  };
  xhttp.open("GET", htmldata, true);
  xhttp.send();
}