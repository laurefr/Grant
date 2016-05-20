
       
       //ADD EVENT LISTENERS
       // document.getElementById("but1").addEventListener("click", function(){lab19(lab19input.value)},false);
    //    document.getElementById("btn1").addEventListener("click", rand,false);
      document.getElementById("btn2").addEventListener("click", checkguess,false);
    window.addEventListener('load', rand)

       // *** CREATE a global counter variable to store the number of guesses
        var counter = 0;     
       
    
        // *** GENERATE a random number
        function rand(){
        //GLOBAL scope variable (var) not indicated meand auto global
        rn = parseInt((Math.random()* 100),10);
       //  document.getElementById("rnresult").innerHTML = rn;
      
		return rn;
        }
        
        
        
        function checkguess() {
             // alert(rn);
        // *** Access global variable test 
        //alert(rn);
			
        // *** COLLECT and display user guess, convert to number type
            userguess = parseInt(document.getElementById("guess").value);
            //alert(userguess);
            
            if (isNaN(userguess)) {
              //  alert("You entered a NaN!");
            document.getElementById("compareresult").innerHTML = "You must enter a number!";
            }
            else {
            //A number has been entered so now we can run the test
            testguess();
            } 
            
          //  document.getElementById("resultguess").innerHTML = "You guessed " + userguess;
            
        }
         
         
         
         
            
           function testguess() {  
            // *** TEST guess and return result and add counter
            if (userguess === rn){
                 document.getElementById("compareresult").innerHTML = "Correct guess!";
                 counter = counter + 1;
                 document.getElementById("counterresult").innerHTML = "You had " + counter + " attempts!";
                
       
            } else if (userguess > rn){
                 document.getElementById("compareresult").innerHTML = "Your guess is too big" + "<br><br>" + "<h2>Have another try!</h2>";
                 counter = counter + 1;
            } else {
                 document.getElementById("compareresult").innerHTML = "Your guess is too small" + "<br><br>" + "<h2>Have another try!</h2>";
                 counter = counter + 1;
            }
           
        }
   