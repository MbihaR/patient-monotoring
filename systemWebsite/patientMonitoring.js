
//*******************************************END*****************************************************************//
function dateValidator1(){
	var startdate = document.getElementById("tempstartdate");
	var enddate = document.getElementById("tempenddate");
	
	var dateregex = /^(\d{4})(?:\-\d{2})(?:\-\d{2}) (?:\d{2}:\d{2}:\d{2})$/i;
	
	if(dateregex.test(startdate.value) == true && dateregex.test(enddate.value) == true){
		alert("valid date format");
		return true;
	}
	else if(dateregex.test(startdate.value) == false){
		alert("enter the required date format YYYY/MM/DD HH:MM:SS");
		startdate.focus();
		return false;
	}
	else if(dateregex.test(enddate.value) == false){
		alert("enter the required date format YYYY/MM/DD HH:MM:SS");
		enddate.focus();
		return false;
	}
	else{
		return false;
	}
		
}

function dateValidator2(){
	var startdate = document.getElementById("BPMstartdate");
	var enddate = document.getElementById("BPMenddate");
	
	var dateregex = /^(\d{4})(?:\-\d{2})(?:\-\d{2}) (?:\d{2}:\d{2}:\d{2})$/i;
	
	if(dateregex.test(startdate.value) == true && dateregex.test(enddate.value) == true){
		return true;
	}
	else if(dateregex.test(startdate.value) == false){
		alert("enter the required date format YYYY/MM/DD HH:MM:SS");
		startdate.focus();
		return false;
	}
	else if(dateregex.test(enddate.value) == false){
		alert("enter the required date format YYYY/MM/DD HH:MM:SS");
		enddate.focus();
		return false;
	}
	else{
		return false;
	}		
}

function dateValidator3(){
	var startdate = document.getElementById("tempstartdate2");
	var enddate = document.getElementById("tempenddate2");
	
	var dateregex = /^(\d{4})(?:\-\d{2})(?:\-\d{2}) (?:\d{2}:\d{2}:\d{2})$/i;
	
	if(dateregex.test(startdate.value) == true && dateregex.test(enddate.value) == true){
		return true;
	}
	else if(dateregex.test(startdate.value) == false){
		alert("enter the required date format YYYY/MM/DD HH:MM:SS");
		startdate.focus();
		return false;
	}
	else if(dateregex.test(enddate.value) == false){
		alert("enter the required date format YYYY/MM/DD HH:MM:SS");
		enddate.focus();
		return false;
	}
	else{
		return false;
	}
		
}

function dateValidator4(){
	var startdate = document.getElementById("BPMstartdate2");
	var enddate = document.getElementById("BPMenddate2");
	
	var dateregex = /^(\d{4})(?:\-\d{2})(?:\-\d{2}) (?:\d{2}:\d{2}:\d{2})$/i;
	
	if(dateregex.test(startdate.value) == true && dateregex.test(enddate.value) == true){
		return true;
	}
	else if(dateregex.test(startdate.value) == false){
		alert("enter the required date format YYYY/MM/DD HH:MM:SS");
		startdate.focus();
		return false;
	}
	else if(dateregex.test(enddate.value) == false){
		alert("enter the required date format YYYY/MM/DD HH:MM:SS");
		enddate.focus();
		return false;
	}
	else{
		return false;
	}		
}

//*******************************************END*****************************************************************//

function formValidator1(){

	var startdate = document.getElementById("tempstartdate");
	var enddate = document.getElementById("tempenddate");
	if (startdate.value == "" || enddate.value == ""){
		//alert user to fill all the fields
		alert("fill all date fields");
		var condition;
		
		//putting the empty fields into focus
		if (startdate.value == ""){
			condition = 1;
		}
		else if(enddate.value == ""){	
			condition = 2;
		}
		else {
			condition = 0;
		}
		
		switch(condition){
			
		case 1:
			startdate.focus();
			break;
		case 2:
			enddate.focus();
			break;
		default:
			break;
		}
		return false;
	}	
	if (startdate.value != "" && enddate.value != ""){
			if (dateValidator1() == true){
				alert("validation successful");
				return true;
			}
			else{
				return false;
			}
	}
}

function formValidator2(){

	var startdate = document.getElementById("BPMstartdate");
	var enddate = document.getElementById("BPMenddate");
	if (startdate.value == "" || enddate.value == ""){
		//alert user to fill all the fields
		alert("fill all date fields");
		var condition;
		
		//putting the empty fields into focus
		if (startdate.value == ""){
			condition = 1;
		}
		else if(enddate.value == ""){	
			condition = 2;
		}
		else {
			condition = 0;
		}
		
		switch(condition){
			
		case 1:
			startdate.focus();
			break;
		case 2:
			enddate.focus();
			break;
		default:
			break;
		}
		return false;
	}	
	if (startdate.value != "" && enddate.value != ""){
			if (dateValidator2() == true){
				alert("validation successful");
				return true;
			}
			else{
				return false;
			}
	}
}
function formValidator3(){

	var startdate = document.getElementById("tempstartdate2");
	var enddate = document.getElementById("tempenddate2");
	if (startdate.value == "" || enddate.value == ""){
		//alert user to fill all the fields
		alert("fill all date fields");
		var condition;
		
		//putting the empty fields into focus
		if (startdate.value == ""){
			condition = 1;
		}
		else if(enddate.value == ""){	
			condition = 2;
		}
		else {
			condition = 0;
		}
		
		switch(condition){
			
		case 1:
			startdate.focus();
			break;
		case 2:
			enddate.focus();
			break;
		default:
			break;
		}
		return false;
	}	
	if (startdate.value != "" && enddate.value != ""){
			if (dateValidator3() == true){
				return true;
			}
			else{
				return false;
			}
	}
}

function formValidator4(){

	var startdate = document.getElementById("BPMstartdate2");
	var enddate = document.getElementById("BPMenddate2");
	if (startdate.value == "" || enddate.value == ""){
		//alert user to fill all the fields
		alert("fill all date fields");
		var condition;
		
		//putting the empty fields into focus
		if (startdate.value == ""){
			condition = 1;
		}
		else if(enddate.value == ""){	
			condition = 2;
		}
		else {
			condition = 0;
		}
		
		switch(condition){
			
		case 1:
			startdate.focus();
			break;
		case 2:
			enddate.focus();
			break;
		default:
			break;
		}
		return false;
	}	
	if (startdate.value != "" && enddate.value != ""){
			if (dateValidator4() == true){
				return true;
			}
			else{
				return false;
			}
	}
}

//*******************************************END*****************************************************************//

function loadNewTempChart(){
	var startdate = document.getElementById('tempstartdate').value;
	var enddate = document.getElementById('tempenddate').value;
	
    startdate = startdate.replace(/ /g, "%20");
	enddate = enddate.replace(/ /g, "%20");

	console.log(startdate);
	console.log(enddate);
	
	var tempchart = document.getElementById('tempchart');
	var url = "https://api.thingspeak.com/channels/1086298/charts/1?api_key=R901OAPXWIZFDQYI&title=Body%20Temp&color=FF69B0&width=450&height=400&xaxis=Time&timezone=Africa%2FNairobi"+
	"&start=" + startdate + "&end=" + enddate;
	//var src = url.concat('&start',startdate,'&end=',enddate);
	//console.log(src);
	tempchart.src = url;
	return false;
}

function loadNewTempChart2(){
	var startdate = document.getElementById('tempstartdate2').value;
	var enddate = document.getElementById('tempenddate2').value;
	
    startdate = startdate.replace(/ /g, "%20");
	enddate = enddate.replace(/ /g, "%20");

	console.log(startdate);
	console.log(enddate);
	
	var tempchart = document.getElementById('tempchart2');
	var url = "https://api.thingspeak.com/channels/1086298/charts/3?api_key=R901OAPXWIZFDQYI&title=Body%20Temp&color=FF69B0&width=450&height=400&xaxis=Time&timezone=Africa%2FNairobi"+
	"&start=" + startdate + "&end=" + enddate;
	//var src = url.concat('&start',startdate,'&end=',enddate);
	//console.log(src);
	tempchart.src = url;
	return false;
}

function loadNewBPMChart(){
	var startdate = document.getElementById('BPMstartdate').value;
	var enddate = document.getElementById('BPMenddate').value;
	
    startdate = startdate.replace(/ /g, "%20");
	enddate = enddate.replace(/ /g, "%20");

	console.log(startdate);
	console.log(enddate);
	
	var BPMchart = document.getElementById('BPMchart');
	var url = "https://api.thingspeak.com/channels/1086298/charts/2?api_key=R901OAPXWIZFDQYI&title=BPM&color=FF69B0&width=450&height=400&xaxis=Time&timezone=Africa%2FNairobi"+
	"&start=" + startdate + "&end=" + enddate;
	BPMchart.src = url;
	return false;
}

function loadNewBPMChart2(){
	var startdate = document.getElementById('BPMstartdate2').value;
	var enddate = document.getElementById('BPMenddate2').value;
	
    startdate = startdate.replace(/ /g, "%20");
	enddate = enddate.replace(/ /g, "%20");

	console.log(startdate);
	console.log(enddate);
	
	var BPMchart = document.getElementById('BPMchart2');
	var url = "https://api.thingspeak.com/channels/1086298/charts/4?api_key=R901OAPXWIZFDQYI&title=BPM&color=FF69B0&width=450&height=400&xaxis=Time&timezone=Africa%2FNairobi"+
	"&start=" + startdate + "&end=" + enddate;
	BPMchart.src = url;
	return false;
}

//*******************************************END*****************************************************************//

function loadInitialCharts(){
	//getting todays date
	var today = new Date();
	
	var month = (today.getMonth()+1);
	var date = today.getDate();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	//hide the second patient information
	var patientbheader = document.getElementById("patientbheader");
	var patientbdiv = document.getElementById("patientbdiv");
	patientbheader.style.display = "none"
	patientbdiv.style.display = "none";
	
	console.log(month.toString().length);
	
	if (month.toString().length == 1){
		month = "0"+month;
		console.log(month);
	} 
	if (date.toString().length == 1){
		date = "0"+date;
	}
	if(hours.toString().length == 1){
		hours = "0"+hours;
	}
	if (minutes.toString().length == 1){
		minutes = "0"+minutes;
	}
	if (seconds.toString().length == 1){
		seconds = "0"+seconds;
	}
	
	var enddate = today.getFullYear() + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
	//substracting 1 hour from the current hour to get the startdate time
	var starthour = hours - 1;
	
	if(starthour.toString().length == 1){
		starthour = "0"+starthour;
	}
	
	var startdate = today.getFullYear() + "-" + month + "-" + date + " " + starthour + ":" + minutes + ":" + seconds;
	
	//setting the value of start date field to the startdate and allow it to be editable
	var tempstartdateField = document.getElementById('tempstartdate');
	tempstartdateField.value = startdate;
	tempstartdateField.editable = true;
	
	var tempstartdateField2 = document.getElementById('tempstartdate2');
	tempstartdateField2.value = startdate;
	tempstartdateField2.editable = true;
	
	//setting the value of end date field to the enddate and allow it to be editable
	var tempenddateField = document.getElementById('tempenddate');
	tempenddateField.value = enddate;
	tempenddateField.editable = true;
	
	var tempenddateField2 = document.getElementById('tempenddate2');
	tempenddateField2.value = enddate;
	tempenddateField2.editable = true;
	
	tempstartdate = startdate.replace(/ /g, "%20");
	tempenddate = enddate.replace(/ /g, "%20");
	
	//setting the value of start date field to the startdate and allow it to be editable
	var BPMstartdateField = document.getElementById('BPMstartdate');
	BPMstartdateField.value = startdate;
	BPMstartdateField.editable = true;
	
	var BPMstartdateField2 = document.getElementById('BPMstartdate2');
	BPMstartdateField2.value = startdate;
	BPMstartdateField2.editable = true;
	
	//setting the value of end date field to the enddate and allow it to be editable
	var BPMenddateField = document.getElementById('BPMenddate');
	BPMenddateField.value = enddate;
	BPMenddateField.editable = true;
	
	var BPMenddateField2 = document.getElementById('BPMenddate2');
	BPMenddateField2.value = enddate;
	BPMenddateField2.editable = true;
	
	BPMstartdate = startdate.replace(/ /g, "%20");
	BPMenddate = enddate.replace(/ /g, "%20");
	
	var url1 = "https://api.thingspeak.com/channels/1086298/charts/1?api_key=R901OAPXWIZFDQYI&title=Body%20Temperature&color=FF69B0&width=470&height=400&xaxis=Time&timezone=Africa%2FNairobi"+
	"&start=" + tempstartdate + "&end=" + tempenddate;
	var tempchart = document.getElementById('tempchart');
	tempchart.src = url1;
	
	var url3 = "https://api.thingspeak.com/channels/1086298/charts/3?api_key=R901OAPXWIZFDQYI&title=Body%20Temperature&color=FF69B0&width=470&height=400&xaxis=Time&timezone=Africa%2FNairobi"+
	"&start=" + tempstartdate + "&end=" + tempenddate;
	var tempchart2 = document.getElementById('tempchart2');
	tempchart2.src = url3;
	
	var url2 = "https://api.thingspeak.com/channels/1086298/charts/2?api_key=R901OAPXWIZFDQYI&title=BPM&color=FF69B0&width=470&height=400&xaxis=Time&timezone=Africa%2FNairobi"+
	"&start=" + startdate + "&end=" + enddate;
	var BPMchart = document.getElementById('BPMchart');
	BPMchart.src = url2;
	
	var url4 = "https://api.thingspeak.com/channels/1086298/charts/4?api_key=R901OAPXWIZFDQYI&title=BPM&color=FF69B0&width=470&height=400&xaxis=Time&timezone=Africa%2FNairobi"+
	"&start=" + startdate + "&end=" + enddate;
	var BPMchart2 = document.getElementById('BPMchart2');
	BPMchart2.src = url4;
}

//*******************************************END*****************************************************************//

function loadRecentTempValue(){
	
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
		//variable to store the raw json data senet from thingspeak
		var data = xhttp.responseText;
		//variable to store parsed json data -- parsing data helps to convert the raw json into usable js objects 
		var dataObj = JSON.parse(data);
	//to view the raw json data use the following code
    //document.getElementById("json").innerHTML = xhttp.responseText; 
	
	//the following code displays the most recent temp value fetched form the temp field
	  var tempbar = document.getElementById("tempbar");
	  tempbar.innerHTML = dataObj.field1;
	  console.log(dataObj.field1);
	//setting the color of the label to red if the temp value is in dangerous levels
	
	if(dataObj.field1 < 36.5 || dataObj.field1 > 37.2){
		//set tempbar background color to warning
		tempbar.style.backgroundColor = "#dc3545";
	}
	else{
		//set tepbar background color to info
		tempbar.style.backgroundColor = "#17a2b8";
	}
    }
  };
  
  xhttp.open("GET","https://api.thingspeak.com/channels/1086298/fields/1/last.json?api_key=R901OAPXWIZFDQYI",true);
  xhttp.send();
}

function loadRecentTempValue2(){
	
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
		//variable to store the raw json data senet from thingspeak
		var data = xhttp.responseText;
		//variable to store parsed json data -- parsing data helps to convert the raw json into usable js objects 
		var dataObj = JSON.parse(data);
	//to view the raw json data use the following code
    //document.getElementById("json").innerHTML = xhttp.responseText; 
	
	//the following code displays the most recent temp value fetched form the temp field
	  var tempbar = document.getElementById("tempbar2");
	  //tempbar.innerHTML = dataObj.field1;
	  tempbar.innerHTML = 37;
	  console.log(dataObj.field1);
	//setting the color of the label to red if the temp value is in dangerous levels
	
	if(dataObj.field1 < 36.5 || dataObj.field1 > 37.2){
		//set tempbar background color to warning
		tempbar.style.backgroundColor = "#dc3545";
	}
	else{
		//set tepbar background color to info
		tempbar.style.backgroundColor = "#17a2b8";
	}
    }
  };
  
  xhttp.open("GET","https://api.thingspeak.com/channels/1086298/fields/3/last.json?api_key=R901OAPXWIZFDQYI",true);
  xhttp.send();
}

//*******************************************END*****************************************************************//

function loadRecentBPMValue(){
	
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
		//variable to store the raw json data senet from thingspeak
		var data = xhttp.responseText;
		//variable to store parsed json data -- parsing data helps to convert the raw json into usable js objects 
		var dataObj = JSON.parse(data);
	//to view the raw json data use the following code
    //document.getElementById("json").innerHTML = xhttp.responseText; 
	
	//the following code displays the most recent temp value fetched form the temp field
	  var BPMbar = document.getElementById("BPMbar");
	  BPMbar.innerHTML = dataObj.field2;
	  
	  console.log(dataObj.field2);
	//setting the color of the label to red if the temp value is in dangerous levels
	
	if(dataObj.field2 < 60 || dataObj.field2 > 100){
		//set tempbar background color to warning
		BPMbar.style.backgroundColor = "#dc3545";
	}
	else{
		//set tepbar background color to info
		BPMbar.style.backgroundColor = "#17a2b8";
	}
    }
  };
  
  xhttp.open("GET","https://api.thingspeak.com/channels/1086298/fields/2/last.json?api_key=R901OAPXWIZFDQYI",true);
  xhttp.send();
}

function loadRecentBPMValue2(){
	
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
		//variable to store the raw json data senet from thingspeak
		var data = xhttp.responseText;
		//variable to store parsed json data -- parsing data helps to convert the raw json into usable js objects 
		var dataObj = JSON.parse(data);
	//to view the raw json data use the following code
    //document.getElementById("json").innerHTML = xhttp.responseText; 
	
	//the following code displays the most recent temp value fetched form the temp field
	  var BPMbar = document.getElementById("BPMbar2");
	  //BPMbar.innerHTML = dataObj.field2;
	  BPMbar.innerHTML = 68;
	  console.log(dataObj.field2);
	//setting the color of the label to red if the temp value is in dangerous levels
	
	if(dataObj.field2 < 60 || dataObj.field2 > 100){
		//set tempbar background color to warning
		BPMbar.style.backgroundColor = "#dc3545";
	}
	else{
		//set tepbar background color to info
		BPMbar.style.backgroundColor = "#17a2b8";
	}
    }
  };
  
  xhttp.open("GET","https://api.thingspeak.com/channels/1086298/fields/4/last.json?api_key=R901OAPXWIZFDQYI",true);
  xhttp.send();
}

//*******************************************END*****************************************************************//
function heart(){
	var heart = document.getElementById("heart");
	heart.style.fontSize = "50px";
	var heart = document.getElementById("heart2");
	heart.style.fontSize = "50px";
}
function heartBeat(){
	setTimeout("heart()",200);
	var heart = document.getElementById("heart");
	var heart2 = document.getElementById("heart2");
	heart.style.fontSize = "60px";
	heart2.style.fontSize = "60px";
}

function onloadFunctions(){
	//load intitial charts from thingspeak
	loadInitialCharts();
	
	//load the recent values and keep repeating with an interval of 3secs
	loadRecentTempValue();
	loadRecentBPMValue();
	loadRecentTempValue2();
	loadRecentBPMValue2();
	heartBeat();
	setInterval("loadRecentTempValue()",1000);
	setInterval("loadRecentBPMValue()",1000);
	setInterval("loadRecentTempValue2()",1000);
	setInterval("loadRecentBPMValue2()",1000);
	setInterval("heartBeat()",1000);
	return false;
}

//*******************************************END*****************************************************************//

//********************************************add patient functions**************************************************//
function addPatient(){
	var patientbheader = document.getElementById("patientbheader");
	var patientbdiv = document.getElementById("patientbdiv");
	var BPMchart2 = document.getElementById('BPMchart2');
	var BPMchart2 = document.getElementById('tempchart2');
	patientbheader.style.display = "block";
	patientbdiv.style.display = "flex";
}

function removePatient(){
	var patientbheader = document.getElementById("patientbheader");
	var patientbdiv = document.getElementById("patientbdiv");
	patientbheader.style.display = "none";
	patientbdiv.style.display = "none";
}
//*******************************************END*****************************************************************//