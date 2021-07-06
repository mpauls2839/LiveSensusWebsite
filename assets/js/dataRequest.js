
function dataInsightsRequest(e) {
       e.preventDefault();
       var name = document.getElementById("name-input").value;
       var email = document.getElementById("email-input").value;
       var desc = "giftCard Request";

	   if (name=="" || email=="")
        {
            alert("If Requesting Data Insights, Please Fill Out All Required Fields");
            return false;
        }

		nameRE = /^[A-Z]{1}[a-z]{2,20}[ ]{1}[A-Z]{1}[a-z]{2,20}/;
		if(!nameRE.test(name)) {
			alert("Please provide your first and last name");
				return false;
		}

		emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!emailRE.test(email)) {
			alert("Email Address entered, is not valid");
				return false;
		}
    var data = {
       name : name,
       email : email,
       desc : desc
     };

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST", "https://iq5bydndnj.execute-api.us-east-1.amazonaws.com/realProduction/contact");
		xmlhttp.setRequestHeader("Content-Type", "application/json");
		xmlhttp.send(JSON.stringify(data));
		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4) {
			var response = JSON.parse(xmlhttp.responseText);
			if (xmlhttp.status === 200 ) {
				console.log('successful');
				document.getElementById("data-form").innerHTML = '<h1>Thank you for entering our gift card raffle. Good Luck!</h1>';
		    } else {
			    console.log('failed');
			}
		}
	}

	document.getElementById('data-form').reset();

	}
