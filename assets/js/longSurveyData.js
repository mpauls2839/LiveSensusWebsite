
function saveUserData(e) {
       e.preventDefault();
//       var URL = "API Gateway";
      var age = document.getElementById("age").value;
      var gender = document.getElementById("gender").value;
      var terms = document.getElementById("terms").checked;

      var listening_device =  document.getElementById("Output Audio Type").value;
      if (document.getElementById('Speaker').checked) {
        listening_device = document.getElementById('Speaker').value;
      }
      if (document.getElementById('Headphone/Earbuds').checked) {
        listening_device = document.getElementById('Headphone/Earbuds').value;
      }

      console.log(listening_device);


      if (age == "" || gender == "" || !(terms) || listening_device == null){
        alert("Please Fill Out All Required Fields");
        return false;
      }

      if (age == "under18" || age == "70+"){ //add logic to test for ip/device type and repeat users
        var url = 'invalid14.html';
        window.location.href = url;
      } else {
        //move to next page
        var url = 'instruct2.html';
      }

      //var width = window.screen.width;
      //var height = window.screen.height;
      var deviceType = "Desktop";
      if (isMobileTablet()){
        deviceType = "Tablet";
      }
      if (isMobile()){
        deviceType = "Mobile";
      }
      //console.log(deviceType);
      localStorage.setItem('Age', age);
      localStorage.setItem('Gender', gender);
      localStorage.setItem('DeviceType', deviceType);
      localStorage.setItem('Listening_Output_Device', listening_device);
        //localStorage.setItem('ScreenResolution', resolution);
        //localStorage.setItem('UserID', userID);

      window.location.href = url;
	}

// function to tell you whether this is a moble device or laptop/computer
        // false if not mobile
        //https://gist.github.com/BashCloud/2feb9975fa0fb0620ba030857f4f8fe6#file-ismobile-js
//https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
function isMobile() {
  var check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
    check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// tell you if this is a tablet
//https://gist.github.com/BashCloud/c7a82db12a91f5cede468099bdf971e0#file-ismobiletable-js
function isMobileTablet(){
  var check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
      check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function sendUserData(e) {
  e.preventDefault();
  var score = document.getElementById("myRange").value;
  localStorage.setItem('audio5_0_score', score);

  var data = {
    age: localStorage.getItem('Age'),
    gender: localStorage.getItem('Gender'),
    device: localStorage.getItem('DeviceType'),
    Listening_Output_Device: localStorage.getItem('Listening_Output_Device'),

    EnglishScore: localStorage.getItem('english_score'),
    EnglishTime: localStorage.getItem('english_time'),

    AudioID1_0: localStorage.getItem('audio1_0'),
    AudioScore1_0: localStorage.getItem('audio1_0_score'),
    AudioTime1_0: localStorage.getItem('audio1_0_time'),
    AudioID1_1: localStorage.getItem('audio1_1'),
    AudioScore1_1: localStorage.getItem('audio1_1_score'),
    AudioTime1_1: localStorage.getItem('audio1_1_time'),
    AudioID1_2: localStorage.getItem('audio1_2'),
    AudioScore1_2: localStorage.getItem('audio1_2_score'),
    AudioTime1_2: localStorage.getItem('audio1_2_time'),
    AudioID1_3: localStorage.getItem('audio1_3'),
    AudioScore1_3: localStorage.getItem('audio1_3_score'),
    AudioTime1_3: localStorage.getItem('audio1_3_time'),
    AudioID1_4: localStorage.getItem('audio1_4'),
    AudioScore1_4: localStorage.getItem('audio1_4_score'),
    AudioTime1_4: localStorage.getItem('audio1_4_time'),
    AudioID1_5: localStorage.getItem('audio1_5'),
    AudioScore1_5: localStorage.getItem('audio1_5_score'),
    AudioTime1_5: localStorage.getItem('audio1_5_time'),
    AudioID1_6: localStorage.getItem('audio1_6'),
    AudioScore1_6: localStorage.getItem('audio1_6_score'),
    AudioTime1_6: localStorage.getItem('audio1_6_time'),
    AudioID1_7: localStorage.getItem('audio1_7'),
    AudioScore1_7: localStorage.getItem('audio1_7_score'),
    AudioTime1_7: localStorage.getItem('audio1_7_time'),
    AudioID1_8: localStorage.getItem('audio1_8'),
    AudioScore1_8: localStorage.getItem('audio1_8_score'),
    AudioTime1_8: localStorage.getItem('audio1_8_time'),
    AudioID1_9: localStorage.getItem('audio1_9'),
    AudioScore1_9: localStorage.getItem('audio1_9_score'),
    AudioTime1_9: localStorage.getItem('audio1_9_time'),

    AudioID2_0: localStorage.getItem('audio2_0'),
    AudioScore2_0: localStorage.getItem('audio2_0_score'),
    AudioTime2_0: localStorage.getItem('audio2_0_time'),
    AudioID2_1: localStorage.getItem('audio2_1'),
    AudioScore2_1: localStorage.getItem('audio2_1_score'),
    AudioTime2_1: localStorage.getItem('audio2_1_time'),
    AudioID2_2: localStorage.getItem('audio2_2'),
    AudioScore2_2: localStorage.getItem('audio2_2_score'),
    AudioTime2_2: localStorage.getItem('audio2_2_time'),
    AudioID2_3: localStorage.getItem('audio2_3'),
    AudioScore2_3: localStorage.getItem('audio2_3_score'),
    AudioTime2_3: localStorage.getItem('audio2_3_time'),
    AudioID2_4: localStorage.getItem('audio2_4'),
    AudioScore2_4: localStorage.getItem('audio2_4_score'),
    AudioTime2_4: localStorage.getItem('audio2_4_time'),
    AudioID2_5: localStorage.getItem('audio2_5'),
    AudioScore2_5: localStorage.getItem('audio2_5_score'),
    AudioTime2_5: localStorage.getItem('audio2_5_time'),
    AudioID2_6: localStorage.getItem('audio2_6'),
    AudioScore2_6: localStorage.getItem('audio2_6_score'),
    AudioTime2_6: localStorage.getItem('audio2_6_time'),
    AudioID2_7: localStorage.getItem('audio2_7'),
    AudioScore2_7: localStorage.getItem('audio2_7_score'),
    AudioTime2_7: localStorage.getItem('audio2_7_time'),
    AudioID2_8: localStorage.getItem('audio2_8'),
    AudioScore2_8: localStorage.getItem('audio2_8_score'),
    AudioTime2_8: localStorage.getItem('audio2_8_time'),
    AudioID2_9: localStorage.getItem('audio2_9'),
    AudioScore2_9: localStorage.getItem('audio2_9_score'),
    AudioTime2_9: localStorage.getItem('audio2_9_time'),
    AudioID2_10: localStorage.getItem('audio2_10'),
    AudioScore2_10: localStorage.getItem('audio2_10_score'),
    AudioTime2_10: localStorage.getItem('audio2_10_time'),
    AudioID2_11: localStorage.getItem('audio2_11'),
    AudioScore2_11: localStorage.getItem('audio2_11_score'),
    AudioTime2_11: localStorage.getItem('audio2_11_time'),
    AudioID2_12: localStorage.getItem('audio2_12'),
    AudioScore2_12: localStorage.getItem('audio2_12_score'),
    AudioTime2_12: localStorage.getItem('audio2_12_time'),
    AudioID2_13: localStorage.getItem('audio2_13'),
    AudioScore2_13: localStorage.getItem('audio2_13_score'),
    AudioTime2_13: localStorage.getItem('audio2_13_time'),
    AudioID2_14: localStorage.getItem('audio2_14'),
    AudioScore2_14: localStorage.getItem('audio2_14_score'),
    AudioTime2_14: localStorage.getItem('audio2_14_time'),
    AudioID2_15: localStorage.getItem('audio2_15'),
    AudioScore2_15: localStorage.getItem('audio2_15_score'),
    AudioTime2_15: localStorage.getItem('audio2_15_time'),

    AudioID3_0: localStorage.getItem('audio3_0'),
    AudioScore3_0: localStorage.getItem('audio3_0_score'),
    AudioTime3_0: localStorage.getItem('audio3_0_time'),
    AudioID3_1: localStorage.getItem('audio3_1'),
    AudioScore3_1: localStorage.getItem('audio3_1_score'),
    AudioTime3_1: localStorage.getItem('audio3_1_time'),

    AudioID4_0: localStorage.getItem('audio4_0'),
    AudioScore4_0: localStorage.getItem('audio4_0_score'),
    AudioTime4_0: localStorage.getItem('audio4_0_time'),
    AudioID4_1: localStorage.getItem('audio4_1'),
    AudioScore4_1: localStorage.getItem('audio4_1_score'),
    AudioTime4_1: localStorage.getItem('audio4_1_time'),

    AudioID5_0: localStorage.getItem('audio5_0'),
    AudioScore5_0: localStorage.getItem('audio5_0_score'),
    AudioTime5_0: localStorage.getItem('audio5_0_time')

  };
  console.log(data);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "https://84ufpal0l3.execute-api.us-east-1.amazonaws.com/prod/logdata");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(data));
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      var response = JSON.parse(xmlhttp.responseText);
      if (xmlhttp.status === 200 ) {
        console.log('successful');
        var url = 'endThanks15.html';
        window.location.href = url;
         } else {
          console.log('failed');
         }
      }
  }

}
