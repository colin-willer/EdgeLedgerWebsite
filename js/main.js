// Navbar scroll effect to be transparent until you scroll 100px down the page
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function() {
	if (window.pageYOffset > 100) {
		navbar.classList.remove('top');
		if (!scrolled) {
			navbar.style.transform = 'translateY(-25px)';
		}
		setTimeout(function() {
			navbar.style.transform = 'translateY(0)';
			scrolled = true;
		}, 200);
	} else {
		navbar.classList.add('top');
		scolled = false;
	}
};
