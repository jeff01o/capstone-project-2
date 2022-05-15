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