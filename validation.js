function validation(){
//	var name=document.forms["form"]["name"].value;
	//var pass=document.forms["form"]["password"].value;
	//var username=document.forms["form"]["username"].value;
	//var email=document.forms["form"]["email"].value;
	//var cpassword=document.forms["form"]["cpassword"].value;
	//var date=document.forms["form"]["date"].value;
    var digit=/[0-9]/g;
	var lower=/[a-z]/g;
	var upper=/[A-Z]/g;
	var special=/[!@#$&*~^]/g;
	var number=document.forms["form"]["number"].value;
	/*
if(name==""){
	alert("enter name");
	return false;
}
if(name.length<5){
	alert("name too short");
	return false;
}
 if(name.match(digit)){
	alert("no digit allowed in name");
	return false;
}
 if(!pass.match(special)){
	alert("Password has no special char");
	return false;
}
if(pass==""){
	alert("enter password");
	return false;
}
 if(!pass.match(digit)){
	alert("Password has no digit");
	return false;
}
if(!pass.match(upper)){
	alert("Password has no upper case");
	return false;
}
if(!pass.match(lower)){
	alert("Password has no lower case");
	return false;
}
if(number>9 ) {
	alert("incorrect mobile number less then 10 digit");
	return false;
}
if(number.match(lower)){
	alert("alplabets");
	return false;
}
if(number.match(upper)){
	alert("capital alphabets");
	return false;
}
 if(number.match(special)){
	alert("special char");
	return false;
}
 
 if( email.endsWith(.com)==false){
	alert("doesnot contain .com");
	return false;

 if(username==""){
	alert("enter username");
	return false;
}
*/
document.write("Hello");
}



function changeimg(){
	pic = "bbb.jpg";
	document.getElementById('imgg').src = pic;
}
function changeimgg(){
	pic = "aaa.jpg";
	document.getElementById('imgg').src = pic;
}
