function validation(){
	var name=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var mail=document.getElementById("email").value;
	var areas=document.getElementById("areas").value;
	var num=document.getElementById("number").value;
	var amount=document.getElementById("amt").value;
	var msg=document.getElementById("cmt").value;
	var digit=/[0-9]/g;
	
	if(name==""){
		alert(" first name missing");
		return false;
	}
	if(name.match(digit)){
		alert("name has number");
		return false;
	}
	if(mail==""){
		alert("email missing");
		return false;
	}
	if(lname==""){
		alert("last name missing");
		return false;
	}
	if(lname.match(digit)){
		alert("name has number");
		return false;
	}
	if(areas==""){
		alert("area code missing");
		return false;
	}
	if(areas.length>4){
		alert("area code has max 3 digits");
		return false;
	}
	if(num==""){
		alert("mobile number missing");
		return false;
	}
	if(num.length!=10){
		alert("number less than or greater than 10");
		return false;
	}
	
	if(amount==""){
		alert("amount not entered");
		return false;
	}
	if(msg==""){
		alert("provide message");
		return false;
	}
	
}