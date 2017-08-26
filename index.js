	function myPkmn(){
		var userName = prompt("What's yout pokémon's name?","Enter it's name");
		alert(userName+", I choose you!!!");
		document.getElementById("message1").style.display = "block";
		document.getElementById("magi").style.display = "block";
	}
	
	function splash(){
		document.getElementById("message1").style.display="none";
		document.getElementById("message2").style.display="none";
		checkSplash(); 
		setTimeout(checkSplash,100); 
		setTimeout(checkSplash,200); 
		setTimeout(checkSplash,300); 
		setTimeout(checkSplash,400); 
		setTimeout(checkSplash,500); 
		setTimeout(showMessage,550);	
	}

	function showMessage(){
		document.getElementById("message2").style.display="block";	
	}

	function checkSplash(){
		if(document.getElementById("magi").style.marginTop == "10vh"){
			document.getElementById("magi").style.marginTop = "25vh";
		} else {
			document.getElementById("magi").style.marginTop = "10vh";
		}

	}
