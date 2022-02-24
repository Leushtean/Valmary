const swiper = new Swiper('.card-swiper', {
	observer: true,
	observeParents: true,
	speed: 800,
	slidesPerView: 3,
	spaceBetween: 55,
	loop: true,
	

	navigation: {
		nextEl: '.card-swiper-next',
		prevEl: '.card-swiper-prev',
	},

	pagination: {
		el: '.card-swiper-pagination',
		type: 'bullets',
		clickable: true,
	  },

	
});
