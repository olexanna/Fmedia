import "@styles/fonts.scss"
import "@styles/reset.scss"
import "@styles/main.scss"
import "@styles/ware.scss"
import "@styles/slider.scss"
import "@styles/basket.scss"
import "@styles/manual.scss"
import "@styles/media.scss"

const TimerEnd = (+new Date()) + 55 * 60 * 1000 + 11 * 1000;
const Timer = function(){

	const elems = {
		hours: document.getElementsByClassName( "timer-hours-count" )[ 0 ],
		minutes: document.getElementsByClassName( "timer-minutes-count" )[ 0 ],
		seconds: document.getElementsByClassName( "timer-seconds-count" )[ 0 ]
	};

	if( !elems.hours || !elems.minutes || !elems.seconds )
		return;

	let interval = setInterval(() => {

		let time = +new Date();
		let deltaTime = TimerEnd - time;

		if( deltaTime < 0 ){
			clearInterval( interval );
			return;
		};

		let currentTime = new Date( deltaTime );
		elems.hours.innerHTML = currentTime.getUTCHours();
		elems.minutes.innerHTML = currentTime.getUTCMinutes();
		elems.seconds.innerHTML = currentTime.getUTCSeconds();

	}, 100 );

};

const Counter = function(){

	const elems = {
		less: document.getElementsByClassName( "count-items-btn-left" )[ 0 ],
		value: document.getElementsByClassName( "count-items-units" )[ 0 ],
		more: document.getElementsByClassName( "count-items-btn-right" )[ 0 ]
	};

	if( !elems.less || !elems.value || !elems.more )
		return;

	elems.less.addEventListener( "click", () => {

		let v = parseInt( elems.value.innerHTML ) || 0;
		v -= 1;

		if( v < 0 )
			v = 0;

		elems.value.innerHTML = v;

	});
	elems.more.addEventListener( "click", () => {

		let v = parseInt( elems.value.innerHTML ) || 0;
		v += 1;
		elems.value.innerHTML = v;

	});

};

const SliderSelect = function( elems, needle, selected ){

	if( !needle )
		return;

	selected.classList.remove( "slider-view-selected" );
	needle.classList.add( "slider-view-selected" );

	let index = needle.getAttribute( "index" ) || 1;
	elems.image.style.backgroundImage = "url('/assets/dynamic/slider-" + index + ".png')";

}
const Slider = function(){

	const elems = {
		left: document.getElementsByClassName( "slider-view-left" )[ 0 ],
		image: document.getElementsByClassName( "slider-display-img" )[ 0 ],
		right: document.getElementsByClassName( "slider-view-right" )[ 0 ],
		list: document.getElementsByClassName( "slider-view-wrap" )[ 0 ]
	};

	if( !elems.left || !elems.image || !elems.right || !elems.list )
		return;

	elems.right.addEventListener( "click", () => {

		let selected = document.getElementsByClassName( "slider-view-selected" )[ 0 ];

		if( !selected )
			return;

		let needle = selected.nextElementSibling || elems.list.firstElementChild;

		SliderSelect( elems, needle, selected );

	});
	elems.left.addEventListener( "click", () => {

		let selected = document.getElementsByClassName( "slider-view-selected" )[ 0 ];

		if( !selected )
			return;

		let needle = selected.previousElementSibling || elems.list.lastElementChild;

		SliderSelect( elems, needle, selected );

	});

	for( const elem of elems.list.childNodes ){
		elem.addEventListener( "click", () => {

			let selected = document.getElementsByClassName( "slider-view-selected" )[ 0 ];

			if( !selected )
				return;

			SliderSelect( elems, elem, selected );

		});
	};

};

const Ready = (function(){
	Timer();
	Counter();
	Slider();
})();