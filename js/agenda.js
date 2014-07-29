// var container = document.querySelector('.container2');
// var msnry = new Masonry( container, {
//   // options
//   columnWidth: 100,
//   itemSelector: '.item'
// });

$(document).ready(function() {
	$(".class1").click(function() {
		$(".class-selector-j1").fadeToggle();
	});
	$(".class2").click(function() {
		$(".class-selector-j2").fadeToggle();
	});
	$(".class3").click(function() {
		$(".class-selector-j3").fadeToggle();
	});
	$(".class4").click(function() {
		$(".class-selector-s1").fadeToggle();
	});
	$(".class5").click(function() {
		$(".class-selector-s2").fadeToggle();
	});
	$(".class6").click(function() {
		$(".class-selector-s3").fadeToggle();
	});
});