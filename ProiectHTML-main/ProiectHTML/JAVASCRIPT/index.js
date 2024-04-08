var debounceTimer;

window.addEventListener('scroll', function() {
  clearTimeout(debounceTimer);

    var Logo1 = document.getElementById('Logo1');
	var Menu = document.getElementById('menu');
	var open_menu = document.getElementById('open_menu');

    if (window.scrollY > 1) {
	  Logo1.classList.add('center'); 
      Logo1.classList.remove('decenter');
	  Menu.classList.add('appear');
	  Menu.classList.remove('disappear');
	  Top.classList.add('opened'); 
	  Top.classList.remove('unopened');
    } else {
	  Logo1.classList.remove('center'); // Remove classes when not scrolling
      Logo1.classList.add('decenter'); 
	  Menu.classList.add('disappear');
	  Menu.classList.remove('appear');
	  Menu.classList.remove('appeared');
	  Top.classList.remove('opened');
	  Top.classList.add('unopened');
    } // 1000 milliseconds = 1 second
 
});

var open_menu1 = document.getElementById('open-menu1');
var open_menu2 = document.getElementById('open-menu2');
var CloseButton = document.getElementById('CloseButton');
var Transp = document.getElementById('transparent');
var Menu = document.getElementById('menu');
var Lista = document.getElementById('lista');
var Body = document.getElementById('body');
var Logo = document.getElementById('Logo');
var preTop = document.getElementById('preTop');

function toggleMenu() {
		lista.classList.remove('unopened');
		lista.classList.add('opened');
		open_menu1.classList.remove('unopened');
		open_menu1.classList.add('opened');
		open_menu2.classList.remove('unopened');
		open_menu2.classList.add('opened');
		CloseButton.classList.remove('unopened');
		CloseButton.classList.add('opened');
		Transp.classList.remove('nontranspare');
		Transp.classList.add('transpare');
		Menu.classList.remove('appeared');
		Menu.classList.add('disappeared');
		Body.classList.remove('move');
		Body.classList.add('nonmove');
		Logo.classList.add('opened'); 
		Logo.classList.remove('unopened');
		preTop.classList.add('open'); 
		preTop.classList.remove('close');
	}
function unToggleMenu() {
		lista.classList.remove('opened');
		lista.classList.add('unopened');
		open_menu1.classList.remove('opened');
		open_menu1.classList.add('unopened');
		open_menu2.classList.remove('opened');
		open_menu2.classList.add('unopened');
		CloseButton.classList.remove('opened');
		CloseButton.classList.add('unopened');
		Transp.classList.remove('transpare');
		Transp.classList.add('nontranspare');
		Menu.classList.remove('disappeared');
		if (window.scrollY > 10)
		{Menu.classList.add('appeared');}
		Body.classList.remove('nonmove');
		Body.classList.add('move');
		Logo.classList.remove('opened');
		Logo.classList.add('unopened');
		preTop.classList.add('close'); 
		preTop.classList.remove('open');
	}
	
	

