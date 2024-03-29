var debounceTimer;

window.addEventListener('scroll', function() {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(function() {
    var Logo = document.getElementById('Logo');
	var Logo1 = document.getElementById('Logo1');
  
    if (window.scrollY > 10) {
	  Logo1.classList.add('center'); 
      Logo1.classList.remove('decenter');
    } else {
	  Logo1.classList.remove('center'); // Remove classes when not scrolling
      Logo1.classList.add('decenter'); 
    }
  }, 100); // 1000 milliseconds = 1 second
});