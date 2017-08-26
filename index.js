	function myPkmn(){
		var userName = prompt("What's yout pokémon's name?","Enter it's name");
		alert(userName+", I choose you!!!");
		document.getElementById("message1").style.display = "block";
		document.getElementById("magi").style.display = "block";

		
	}
	
	function splash(){
		document.getElementById("message1").style.display="none";
/*
		var x = 0;

		time = setInterval(checkSplash,300);
		
		if(time == 300){
			x++;
		}

		if(x==4){
			clearInterval(time);
		}
*/
splash1();

			
	}

	function splash1(){
		document.getElementById("message2").style.display="none";
		document.getElementById("magi").style.marginTop = "10vh";
		setTimeout(splash2,200);
		setTimeout(showMessage,400);
	}

	function splash2(){
		document.getElementById("magi").style.marginTop = "25vh";

				
	}

	function showMessage(){
		document.getElementById("message2").style.display="block";	
	}

	function checkSplash(){
		if(document.getElementById("magi").style.marginTop == "25vh"){
			document.getElementById("magi").style.marginTop = "10vh";
		} else {
			document.getElementById("magi").style.marginTop = "25vh";
		}

	}
