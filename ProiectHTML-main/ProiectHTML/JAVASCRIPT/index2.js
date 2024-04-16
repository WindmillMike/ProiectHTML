var Headgear = document.getElementById('headgear')
var Gear = document.getElementById('gear')
var Attachments = document.getElementById('attachments')
var Writing = document.getElementById('writing')
var Buton2 = document.getElementById('buton')
var Buton = document.getElementById('buton2')

function addHoverClass() {
 Headgear.classList.remove('unhovered');
 Headgear.classList.add('hovered');
}

function removeHoverClass() {
  Headgear.classList.remove('hovered');
  Headgear.classList.add('unhovered');
}

function addHover(){Gear.classList.remove('unhovered');Gear.classList.add('hovered');}
function removeHover() {Gear.classList.remove('hovered');Gear.classList.add('unhovered');}

function add(){Attachments.classList.remove('unhovered');Attachments.classList.add('hovered');}
function remove() {Attachments.classList.remove('hovered');Attachments.classList.add('unhovered');}

window.addEventListener('scroll', function() {
  clearTimeout(debounceTimer)

if (window.scrollY > 110) {
	Writing.classList.remove('go');
	Writing.classList.add('stop');
	Buton.classList.remove('go');
	Buton.classList.add('stop');
}
else {
	Writing.classList.remove('stop');
	Writing.classList.add('go');
	Buton.classList.remove('stop');
	Buton.classList.add('go');
}
});

window.addEventListener('scroll', function() {
  clearTimeout(debounceTimer)

if (window.scrollY > 1) {
	Buton2.classList.remove('decolor');
	Buton2.classList.add('color');
}
else {
	Buton2.classList.remove('color');
	Buton2.classList.add('decolor');
	Buton.classList.remove('go');
	Buton.classList.remove('stop');
}
});

var Plus = document.getElementById('plus')



function Hovered() {
 Plus.classList.remove('unrotate');
 Plus.classList.add('rotate');
}

function removeHovered() {
  Plus.classList.remove('rotate');
  Plus.classList.add('unrotate');
}

