"use strict";

$(() => {

	var carClassesSlide = [
		{
			'class': [
							{
								'imgUrl': './assets/image/citroen/minimum.jpg'
							},
							{
								'imgUrl': './assets/image/citroen/standart.jpg'
							},
							{
								'imgUrl': './assets/image/citroen/standart-plus.jpg'
							},
							{
								'imgUrl': './assets/image/citroen/standart-plus-plus.jpg'
							},
							{
								'imgUrl': './assets/image/citroen/standart-plus-plus-plus.jpg'
							},
							{
								'imgUrl': './assets/image/citroen/wholly.jpg'
							},
							{
								'imgUrl': './assets/image/citroen/pure.jpg'
							},
						],
		},				
		{
			'class': [
							{
								'imgUrl': './assets/image/mazda/minimum.jpg'
							},
							{
								'imgUrl': './assets/image/mazda/standart.jpg'
							},
							{
								'imgUrl': './assets/image/mazda/standart-plus.jpg'
							},
							{
								'imgUrl': './assets/image/mazda/standart-plus-plus.jpg'
							},
							{
								'imgUrl': './assets/image/mazda/standart-plus-plus-plus.jpg'
							},
							{
								'imgUrl': './assets/image/mazda/wholly.jpg'
							},
							{
								'imgUrl': './assets/image/mazda/pure.jpg'
							},
						],
		},
		{
			'class': [
							{
								'imgUrl': './assets/image/mercedes/minimum.jpg'
							},
							{
								'imgUrl': './assets/image/mercedes/standart.jpg'
							},
							{
								'imgUrl': './assets/image/mercedes/standart-plus.jpg'
							},
							{
								'imgUrl': './assets/image/mercedes/standart-plus-plus.jpg'
							},
							{
								'imgUrl': './assets/image/mercedes/standart-plus-plus-plus.jpg'
							},
							{
								'imgUrl': './assets/image/mercedes/wholly.jpg'
							},
							{
								'imgUrl': './assets/image/mercedes/pure.jpg'
							},
						]
		}
	];

	var indexMenu = 0;
	var indexServicePlan = 3;
	var arrowDown = $('.selector-arrow-down');
	var indexCarClass = 2;

	function addClassArrowDown () {
		$(arrowDown).eq([indexCarClass]).addClass('current-selector');
	};
	addClassArrowDown ();

	function selectCarClass () {
		$('.car-block').on('click', function (event) {
			$(arrowDown).removeClass('current-selector');
			indexCarClass = $(this).index();
			addClassArrowDown ();
			defaultServicePlan();
			createCarSlide ();
		});
	};
	selectCarClass ();

	function createCarSlide () {
		$('#main-img').replaceWith(`
				<div class="main-img" id="main-img">
					<img src="${carClassesSlide[indexCarClass].class[indexServicePlan].imgUrl}">
				</div>	
			`)
	};
	createCarSlide ();

	function defaultServicePlan () {
		$('#service-plans li').removeClass('current-plan-hover');
		$('#service-plans span').removeClass('current-item-menu');
		$('#service-plans li[title = "Standart++"]').addClass('current-plan-hover');
		$('#service-plans li[title = "Standart++"] span').addClass('current-item-menu')
	}
	defaultServicePlan();

	var menuItem = $('#service-plans ul').children('.menuItem')

	function addClassCurrentMenuItem () {
		$(menuItem).removeClass('current-plan-hover');
		$('#service-plans span').removeClass('current-item-menu');
		$(menuItem).eq([indexMenu]).addClass('current-plan-hover');
		$('#service-plans span').eq([indexMenu]).addClass('current-item-menu');
	};

	$(menuItem).on('mouseover', function(event) {
		indexMenu = $(this).index();
		addClassCurrentMenuItem ();
		indexServicePlan = $(this).index();
		createCarSlide ();
	});

	function activeInPartsMenu () {
		$('#in-part-item span, i').toggleClass('in-part-active');
		$('#in-parts-dropdown-hover').toggleClass('in-parts-dropdown-hover');
		$('#fa-angle-down').hasClass('in-part-active') 
				? $('#fa-angle-down').addClass('fa-angle-down-rotate')
				: $('#fa-angle-down').removeClass('fa-angle-down-rotate');
	};

	$('#in-part-item').on('click', function(event) {
		event.preventDefault();
		activeInPartsMenu ();
		$('.list-car-parts').slideToggle();
	});

	var carParts = [
		{
			'id': 'headlight',
			'imgPartsUrl' : './assets/image/car-moduls/headlight.png',
			'title': 'Фары'

		},
		{
			'id': 'threshold',
			'imgPartsUrl' : './assets/image/car-moduls/threshold.png',
			'title': 'Пороги'
		},
		{
			'id': 'mirror',
			'imgPartsUrl' : './assets/image/car-moduls/mirror.png',
			'title': 'Зеркала'
		},
		{
			'id': 'doors',
			'imgPartsUrl' : './assets/image/car-moduls/door.png',
			'title': 'Двери'
		},
		{
			'id': 'fender',
			'imgPartsUrl' : './assets/image/car-moduls/fender.png',
			'title': 'Крылья'
		},
		{
			'id': 'hood',
			'imgPartsUrl' : './assets/image/car-moduls/hood.png',
			'title': 'Капот'
		},
		{
			'id': 'front-bumper',
			'imgPartsUrl' : './assets/image/car-moduls/front-bumper.png',
			'title': 'Передний бампер'
		},
		{
			'id': 'back-bumper',
			'imgPartsUrl' : './assets/image/car-moduls/back-bumper.png',
			'title': 'Задний бампер'
		},
	];

	function addCarPart (index) {
		for (var item of carParts) {
			if (index === item.id) { 	 	
				$('#car-moduls-wraper').append(`
				<div  class="${item.id}">
					<div class="moduls-img">
						<img src="${item.imgPartsUrl}">
					</div>
					<div class="moduls-title">
						<p>${item.title}</p>
					</div>
				</div>	
				`)
			}
		}
	};

	$('#list-car-parts li').on('click', function(event) {
		event.preventDefault();
		console.log($('#car-moduls-wraper').children().attr('class') == event.currentTarget.id)
			if ($('#car-moduls-wraper').children().attr('class') != event.currentTarget.id) {
				addCarPart (event.currentTarget.id)
			} else {
				
				$(`div.${event.currentTarget.id}`).remove()
			}
	});




	




});