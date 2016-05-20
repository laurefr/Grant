    
       //ADD EVENT LISTENERS
      document.getElementById("btn2").addEventListener("click", loadmeters,false);
   
     function loadmeters() {
		// *** GENERATE a random number for each blood type to act as the starting reserve
        arn = parseInt((Math.random()* 100),10);
		 brn = parseInt((Math.random()* 100),10);
		 orn = parseInt((Math.random()* 100),10);
			
		//	alert(arn);
			
        // *** COLLECT blood type value from user
            var a = parseInt(document.getElementById("typea").value);
            var b = parseInt(document.getElementById("typeb").value);
            var o = parseInt(document.getElementById("typeo").value);
         
         //** ADD AMOUNTS TOGETHER
         arn = arn + a;
         brn = brn + b;
         orn = orn + o;
         
        //	alert(a);
          
        // alert(typeof(a) + " " + a);
        // alert(typeof(b) + " " + b);
        //     alert(typeof(o) + " " + o);
         //    alert(isNaN(a));
        
        //BASIC VALIDATION    
           if (a > 100 || b > 100 || o > 100) {
               alert("Your value must be less than 100");
         } else if (isNaN(a) || (a === " ") || isNaN(b) || (b === " ") || isNaN(o) || (o === " ")) {
             alert("A number value less than 100 must be entered for each blood type");
         } else if (a === 0 && b === 0 && o === 0) {
             alert("At least one blood type value must be entered");
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
        
  
   