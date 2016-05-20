

 data = "fruit.json";
 // Get the INPUT DATA from a JSON file and update the charts

//var color1 = "rgba(91, 136, 61, 0.2)"; //green
//var color2 = "rgba(247, 242, 90, 0.5)"; //yellow
ajaxcall();

 

//ADD EVENT LISTENER
//window.addEventListener('load', startup)
// document.getElementById("source").addEventListener("change", whichchart,false);





function whichchart () {
chartchosen = document.getElementById("source").value;
    if (chartchosen === "vegetables"){
        
        data = "veg.json";
        color1 = "rgba(255, 165, 0, 0.2)";
        color2 = "rgba(247, 242, 90, 0.5)";
       ajaxcall();
    } else {
    // fruit chart is chosen
        data = "";
        data = "fruit.json";
        ajaxcall();
    }

}

function ajaxcall () {
/* Javascript AJAX REQUEST TO JSON FILE */

// function salesfunction() {
  //  alert(data);
    data1 ="";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      data1 = xhttp.responseText;
     // alert(data1);
      data = JSON.parse(data1);
     //DATA PARSED NOW _ CARRY OUT ACTIONS ON THE DATA OBJECTS WITHIN HERE 
    // alert(data.sold[0]);
    // alert(data.label.length);
    // alert(data.label[0]);
      
      builddataset();
      drawchart();
 /* AJAX REQUEST END ******************************************************  */
    }
  };
  xhttp.open("GET", data, true);
  xhttp.send();
}  


function builddataset(){
     //BUILD DATASET WIRE JSON OBJECTS TO THE CHART DATA ARRAY
     // var dps = [{label:,y:2}];
    //var arrayB = new Array()
    
     dps = []; //Global variable by not adding var for local scope
    //LOOP THROUGH DATASET AND ADD DATA TO LINE CHART
       for(var i = 0; i < data.label.length; i++){
            var xval = data.label[i];  //TEXT
            var yval = parseInt(data.sold[i]); //NUMBER
     
          dps.push({label: xval, y: yval,});
        }
    //END LOOP    
}


       
    
/*  DRAW CHARTS START **********************************  */
function drawchart(){

	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Chart left"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "line",
			dataPoints: dps
		}
		]
	});
	chart.render();




	var chart = new CanvasJS.Chart("chartContainer1", {
		title:{
			text: "Chart middle"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "line",
			dataPoints: [
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  }
			]
		}
		]
	});
	chart.render();

}


/*
	$('tbody').empty();
	$('tbody').append('<tr><td></td><th>'+ data.Products[0]+'</th><th>'+data.Products[1]+'</th></tr>');

	for(var i = 0; i < data.Product1.length; i++){
		$('tbody').append('<tr><td>' + data.charLabels[i] + '</td><td>' + data.Product1[i] + '</td><td>' + data.Product2[i] + '</td></tr>')
	};

*/		
/*  DRAW CHARTS END **********************************  */


	


















 

  



  