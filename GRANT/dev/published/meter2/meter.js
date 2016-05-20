    
       //ADD EVENT LISTENERS
      document.getElementById("btn2").addEventListener("click", loadmeters,false);
   
     function loadmeters() {
		// *** GENERATE a random number for each blood type to act as the starting reserve
        arn = parseInt((Math.random()* 100),10);
		 brn = parseInt((Math.random()* 100),10);
		 orn = parseInt((Math.random()* 100),10);
			
		//	alert(arn);
			
        // *** COLLECT blood type and amount values from user
          var theamount = parseInt(document.getElementById("amount").value);
          var thetype = document.getElementById("bt").value;
         
          
         //** ADD AMOUNT TOGETHER 
        // alert(typeof(a) + " " + a);

        //Depending on blood type selected add to the amount 
           if (thetype === "Type A" ) {
              alert("Type A");
              arn = arn + theamount;
               
           } else if (thetype === "Type B") {
              alert("Type B");
              brn = brn + theamount;
         }
             else { 
             alert("Type O");
             orn = orn + theamount;
             }



        //BASIC VALIDATION    
           if (theamount > 100) {
               alert("Your value must be less than 100");
         } else if (isNaN(theamount) || (theamount === " ")) {
             alert("A number value less than 100 must be entered for the amount");
         } else { 
             
       //PASSED VALIDATION SO DISPLAY

// Display reserves
document.getElementById("meterheading").innerHTML = "<div id=mtr><h3>Current reserves</h3></div>";      
document.getElementById("ameter").innerHTML = "<div id=mtr><p>Type A</p> <meter id=meter1 value=" + arn + " min='0' max='100'></meter></div>";
   
document.getElementById("bmeter").innerHTML = "<div id=mtr><p>Type B</p><meter id=meter2 value=" + brn + " min='0' max='100'>2 out of </meter>";
      
document.getElementById("ometer").innerHTML = "<div id=mtr><p>Type O</p><meter id=meter3 value=" + orn + " min='0' max='100'>2 out of 10</meter>";

document.getElementById("userinputs").style.display = "none";

//Display thank and hide user inputs
//var bb = document.getElementsByClassName('bloodbox');
//for (i = 0; i < bb.length; i++) { 
//    document.getElementsByClassName('bloodbox')[i].style.visibility='hidden';
//}
document.getElementById("meterblurb").innerHTML = "<h3>Thank you for your donation !</h3>";          
         
 }
    }
        
  
   