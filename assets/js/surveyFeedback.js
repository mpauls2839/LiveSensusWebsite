
function submitToSurveyAPI(e) {
       e.preventDefault();
       var desc = document.getElementById("description-input").value;
	   if (desc=="")
        {
            alert("Please Fill Out The Feedback Form");
            return false;
        }
    var data = {
          name : "SURVEY FEEDBACK",
          email : "NULL",
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
				document.getElementById("survey-feedback-form").innerHTML = "<h1>Thank you for your feedback!</h1>";
		    } else {
			    console.log('failed');
			}
		}
	}

	document.getElementById('survey-feedback-form').reset();

	}
