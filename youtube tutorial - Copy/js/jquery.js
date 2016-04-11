'use strict';

$(function(){
var width = 720;
var animationSpeed = 1000;
var pause = 3000;

var currentSlide = 1;
// cache DOM
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

var interval;

function startSlider(){
interval = setInterval(function(){
	$slideContainer.animate({'margin-left':'-='+width},animationSpeed , function(){
	
		currentSlide++;
		if(currentSlide === $slides.length){
		currentSlide = 1;
		$slideContainer.css('margin-left', 0);
		}
		});
},pause);
	}
	
	function stopSlider(){
	clearInterval(interval);
	}
	
	$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);
	
	// listen for mouse enter and pause
	//resume on mouse leave
	
	startSlider();
});


// found video and source for slider https://www.youtube.com/watch?v=KkzVFB3Ba_o    : http://jsfiddle.net/EjZzs/15/
