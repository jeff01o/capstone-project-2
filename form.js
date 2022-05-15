// for the password
function myFunction() {
	var x = document.getElementById('myinput');
	if (x.type === "password"){
        x.type = "text"
        document.getElementById('hide').style.display="inline-block"
        document.getElementById('show').style.display="none"

	}

	else{
		x.type = "password"
		document.getElementById('hide').style.display="none"
        document.getElementById('show').style.display="inline-block"
	}
}


// for navbar


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


// for validation


function validate() {
	var errTxt;
	var errBox=document.getElementById("error_message");
	errBox.style.padding="10px";
	var username=document.getElementById("username").value;
	var email=document.getElementById("email").value;
	var number=document.getElementById("number").value;
	var myinput=document.getElementById("myinput").value;
	var confirm=document.getElementById("confirm").value;


	if (username=="" || email=="" || number=="" || myinput=="" || confirm==""){
		errTxt="fill all field!";
		errBox.innerHTML = errTxt;
		return false;
	} else if(username.length<5){
		errTxt="name is too short!";
		errBox.innerHTML = errTxt;
		return false;

	}else if(email.indexOf("@")==-1){
		errTxt="enter a vali email address";
		errBox.innerHTML = errTxt;
		return false;
	}
	else{
		alert("you have successfully registered");
		errBox.style.display="none";
		return true
	}



}