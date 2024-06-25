const slides = [
	{
	   "image": "slide1.jpg",
	   "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	   "image": "slide2.jpg",
	   "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	   "image": "slide3.jpg",
	   "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	   "image": "slide4.png",
	   "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
 ];
 
 let currentSlide = 0;
 
 function changeSlide(direction) {
	currentSlide += direction;
 
	if (currentSlide < 0) {
	   currentSlide = slides.length - 1;
	} else if (currentSlide >= slides.length) {
	   currentSlide = 0;
	}
 
	updateSlide();
	updateDots();
 }
 
 function updateSlide() {
	const bannerImage = document.querySelector('.banner-img');
	const tagLine = document.querySelector('#banner p');
 
	bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	tagLine.innerHTML = slides[currentSlide].tagLine;
 }
 
 function createDots() {
	const dotsContainer = document.querySelector('.dots');
 
	slides.forEach((_, index) => {
	   const dot = document.createElement('span');
	   dot.classList.add('dot');
	   dot.addEventListener('click', () => onDotClick(index));
	   dotsContainer.appendChild(dot);
	});
 
	updateDots();
 }
 
 function onDotClick(index) {
	currentSlide = index;
	updateSlide();
	updateDots();
 }
 
 function updateDots() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
	   if (index === currentSlide) {
		  dot.classList.add('active');
	   } else {
		  dot.classList.remove('active');
	   }
	});
 }
 
 createDots();
 
 document.querySelector('.left-arrow').addEventListener('click', function () {
	changeSlide(0);
 });
 
 document.querySelector('.right-arrow').addEventListener('click', function () {
	changeSlide(0);
 });
 