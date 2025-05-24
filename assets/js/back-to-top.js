const backToTopBtn=document.querySelector('#back-to-top');


window.addEventListener("scroll", setVisible);
backToTopBtn.addEventListener("click", scrollToTop);

function setVisible() {
	console.log('onScroll');
	if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

function scrollToTop(){
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}