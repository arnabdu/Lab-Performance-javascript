function validateForm() {
  var nameE1 = document.getElementById('Name');
  if (nameE1.value == "") {
	  var obj = document.getElementById('msg');
	  obj.innerHTML("null submission");
	  obj.style.color="red";
   // alert("Name must be filled out");
	
    //return false;
  }
  else if(x=="a" && x=="A"){
	  alert("Name is filled");
	 
	  return true;
  }
  else if(x==1){
	  alert("Name must start with a letter");
	  
	  return false;
	  
  }
  
  
}
function f2(){
	var y =document.getElementById('Email').value;
	if(y==""){
		alert("Email must be filled with words");
		
		return false;
	}
	
}
function f3(){
	var genderE1 = document.getElementById('gender');
	if(genderE1.value==""){
		alert ("Please select any Option");
		return false;
	}
} 
function f4(){
	
	var  DOB1 =document.getElementById('Date  of birth');
	if(DOB1.value=""){
		var obj =document.getElementById('msg');
		obj.innerHTML('null submission');
	}
}