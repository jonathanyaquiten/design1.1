var slideIndex = 0;
function slider(){
	var i;
	var x = document.getElementsByClassName("carousel-move");
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("slide-in");
		x[i].classList.remove("slide-out");
		x[i].className += " slide-out";
	}
	slideIndex++;
	if (slideIndex > x.length){
		slideIndex = 1
	}
	x[slideIndex - 1].classList.remove("slide-out");
	x[slideIndex - 1].style.display = "inline";
	x[slideIndex - 1].className += " slide-in";
	setTimeout(slider, 5000);
}
slider();