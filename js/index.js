"use strict";

$(() => {

	var carClassesSlide = [
		{
			carClass: 'mini',
			imgUrl: ['./assets/image/citroen/minimum.jpg', './assets/image/citroen/standart.jpg',
					'./assets/image/citroen/standart-plus.jpg', './assets/image/citroen/standart-plus-plus.jpg',
					'./assets/image/citroen/standart-plus-plus-plus.jpg', './assets/image/citroen/wholly.jpg',
					'./assets/image/citroen/pure.jpg'],
			partsImgUrl : ['./assets/image/citroen/headlights.jpg', './assets/image/citroen/threshold-inner.jpg',
						'./assets/image/citroen/threshold-outer.jpg', './assets/image/citroen/doors.jpg',
						'./assets/image/citroen/back-fender.jpg', './assets/image/citroen/hood.jpg',
						'./assets/image/citroen/front-bumper.jpg', './assets/image/citroen/back-bumper.jpg']
		},				
		{
			carClass: 'midle',
			imgUrl: ['./assets/image/mazda/minimum.jpg', './assets/image/mazda/standart.jpg',
					'./assets/image/mazda/standart-plus.jpg', './assets/image/mazda/standart-plus-plus.jpg',
					'./assets/image/mazda/standart-plus-plus-plus.jpg', './assets/image/mazda/wholly.jpg',
					'./assets/image/mazda/pure.jpg'],
			partsImgUrl : ['./assets/image/mazda/headlights.jpg', './assets/image/mazda/threshold-inner.jpg',
						'./assets/image/mazda/threshold-outer.jpg', './assets/image/mazda/doors.jpg',
						'./assets/image/mazda/back-fender.jpg', './assets/image/mazda/hood.jpg',
						'./assets/image/mazda/front-bumper.jpg', './assets/image/mazda/back-bumper.jpg']
		},
		{
			carClass: 'premium',
			imgUrl: ['./assets/image/mercedes/minimum.jpg', './assets/image/mercedes/standart.jpg',
					'./assets/image/mercedes/standart-plus.jpg', './assets/image/mercedes/standart-plus-plus.jpg',
					'./assets/image/mercedes/standart-plus-plus-plus.jpg', './assets/image/mercedes/wholly.jpg',
					'./assets/image/mercedes/pure.jpg'],
			partsImgUrl : ['./assets/image/mercedes/headlights.jpg', './assets/image/mercedes/threshold-inner.jpg',
						'./assets/image/mercedes/threshold-outer.jpg', './assets/image/mercedes/doors.jpg',
						'./assets/image/mercedes/back-fender.jpg', './assets/image/mercedes/hood.jpg',
						'./assets/image/mercedes/front-bumper.jpg', './assets/image/mercedes/back-bumper.jpg']
		},
	];

	var indexMenu = 0;
	var indexServicePlan = 3;
	var indexCarClass = 0;
	var indexPart = 0;
	var indexPartMenu = 0;

	var images = new Array;
	function preload(url) {
	    for (var i = 0; i < url.length; i++) {
	        images[i] = new Image()
	        images[i].src = url[i]
	    }
	};
	preload (['./assets/image/citroen/minimum.jpg', './assets/image/citroen/standart.jpg',
				'./assets/image/citroen/standart-plus.jpg', './assets/image/citroen/standart-plus-plus.jpg',
				'./assets/image/citroen/standart-plus-plus-plus.jpg', './assets/image/citroen/wholly.jpg',
				'./assets/image/citroen/pure.jpg', './assets/image/citroen/headlights.jpg', './assets/image/citroen/threshold-inner.jpg',
				'./assets/image/citroen/threshold-outer.jpg', './assets/image/citroen/doors.jpg',
				'./assets/image/citroen/back-fender.jpg', './assets/image/citroen/hood.jpg',
				'./assets/image/citroen/front-bumper.jpg', './assets/image/citroen/back-bumper.jpg', './assets/image/mazda/minimum.jpg', './assets/image/mazda/standart.jpg',
				'./assets/image/mazda/standart-plus.jpg', './assets/image/mazda/standart-plus-plus.jpg',
				'./assets/image/mazda/standart-plus-plus-plus.jpg', './assets/image/mazda/wholly.jpg',
				'./assets/image/mazda/pure.jpg', './assets/image/mazda/headlights.jpg', './assets/image/mazda/threshold-inner.jpg',
				'./assets/image/mazda/threshold-outer.jpg', './assets/image/mazda/doors.jpg',
				'./assets/image/mazda/back-fender.jpg', './assets/image/mazda/hood.jpg',
				'./assets/image/mazda/front-bumper.jpg', './assets/image/mazda/back-bumper.jpg', './assets/image/mercedes/minimum.jpg', './assets/image/mercedes/standart.jpg',
				'./assets/image/mercedes/standart-plus.jpg', './assets/image/mercedes/standart-plus-plus.jpg',
				'./assets/image/mercedes/standart-plus-plus-plus.jpg', './assets/image/mercedes/wholly.jpg',
				'./assets/image/mercedes/pure.jpg', './assets/image/mercedes/headlights.jpg', './assets/image/mercedes/threshold-inner.jpg',
				'./assets/image/mercedes/threshold-outer.jpg', './assets/image/mercedes/doors.jpg',
				'./assets/image/mercedes/back-fender.jpg', './assets/image/mercedes/hood.jpg',
				'./assets/image/mercedes/front-bumper.jpg', './assets/image/mercedes/back-bumper.jpg'
					]);

	function addClassArrowDown () {
		$('.car-block').removeClass('car-block-selector')
		$('.car-block').eq([indexCarClass]).addClass('car-block-selector')
	};
	addClassArrowDown ();

	function createCarSlide () {
		$('#main-img').replaceWith(`
				<div class="main-img" id="main-img">
					<img src="${carClassesSlide[indexCarClass].imgUrl[indexServicePlan]}">
				</div>	
			`)
	};
	createCarSlide ();

	function addClassPartBlock () {
		$('.car-moduls-block').removeClass('cur-car-moduls-block')
		$('.car-moduls-block').eq([indexServicePlan]).addClass('cur-car-moduls-block')
	}
	addClassPartBlock ();

	function defaultServicePlan () {
		$('#service-plans li').removeClass('current-plan-hover');
		$('#service-plans span').removeClass('current-item-menu');
		$('#service-plans li[title = "Standart++"]').addClass('current-plan-hover');
		$('#service-plans li[title = "Standart++"] span').addClass('current-item-menu')
	}
	defaultServicePlan();

	function selectCarClass () {
		$('.car-block').on('click', function (event) {
			$('.selector-arrow-down').removeClass('current-selector');
			indexCarClass = $(this).index();
			addClassArrowDown ();
			defaultServicePlan();
			createCarSlide ();
		});
	};
	selectCarClass ();

	var menuItem = $('#service-plans ul').children('.menuItem');

	function addClassCurrentMenuItem () {
		$(menuItem).removeClass('current-plan-hover');
		$('#service-plans span').removeClass('current-item-menu');
		$(menuItem).eq([indexMenu]).addClass('current-plan-hover');
		$('#service-plans span').eq([indexMenu]).addClass('current-item-menu');
	};

	$('#in-part-item').on('click', function(event) {
		event.preventDefault();
		$('#fa-angle-down').toggleClass('fa-angle-down-rotate')
		$('.list-car-parts').slideToggle();
	});

	function createPartSlide () {
		$('#main-img').replaceWith(`
				<div class="main-img" id="main-img">
					<img src="${carClassesSlide[indexCarClass].partsImgUrl[indexPart]}">
				</div>	
			`)
	};

	var menuParts = $('#list-car-parts').children('.parts');

	function addClassCurrentPart () {
		$(menuParts).removeClass('list-car-part');
		$('#list-car-parts a').removeClass('current-item-menu');
		$(menuParts).eq([indexPartMenu]).addClass('list-car-part');
		$('#list-car-parts a').eq([indexPartMenu]).addClass('current-item-menu');	
	};
	
	$('#service-plans ul li span').on('mouseover', function(event) {	
		if ($(this).parent().hasClass('menuItem')) {
			$(menuParts).removeClass('list-car-part');
			$('#list-car-parts a').removeClass('current-item-menu');
			indexMenu = $(this).parent().index();
			addClassCurrentMenuItem ();
			indexServicePlan = $(this).parent().index();
			createCarSlide ();
			addClassPartBlock ();
		}
	});

	$('#list-car-parts li a').on('mouseover', function(event) {	
		$(menuItem).removeClass('current-plan-hover');
		$('#service-plans span').removeClass('current-item-menu');
		indexPartMenu = $(this).parent().index();
		addClassCurrentPart ();
		indexPart = $(this).parent().index();
		createPartSlide ();
	});


});