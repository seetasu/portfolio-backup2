// var main = function(){
// 	// $('.hidden').hide();
// }

// var showorhide = function(){
// 	$('.btn').click(function(){
// 		$('.full-text').toggleClass("hidden",1000,"easeOutCubic");
// 		$('.preview').toggleClass("hidden",1000,"easeOutCubic");
// 		$('.btn-up').toggleClass("hidden",1000,"easeOutCubic");
// 		$('.btn-down').toggleClass("hidden",1000,"easeOutCubic");
// 	});
// }



// $(document).ready(main);
// $(document).ready(showorhide);


$(document).ready(function(){
	// $('.hidden').hide();
	// $('.btn-up').hide();
	$('.beef .expand-btn').click(function(){
		$('.beef .article-content .full-text').toggleClass("hidden",1000,"easeOutCubic");
		$('.beef .article-content .preview').toggleClass("hidden",1000,"easeOutCubic");
		$('.beef .expand-btn .btn-up').toggleClass("hidden",1000,"easeOutCubic");
		$('.beef .expand-btn .btn-down').toggleClass("hidden",1000,"easeOutCubic");
	});	

	$('.hallstatt .expand-btn').click(function(){
		$('.hallstatt .article-content .full-text').toggleClass("hidden",1000,"easeOutCubic");
		$('.hallstatt .article-content .preview').toggleClass("hidden",1000,"easeOutCubic");
		$('.hallstatt .expand-btn .btn-up').toggleClass("hidden",1000,"easeOutCubic");
		$('.hallstatt .expand-btn .btn-down').toggleClass("hidden",1000,"easeOutCubic");
	});	

	$('.reflection_el .expand-btn').click(function(){
		$('.reflection_el .article-content .full-text').toggleClass("hidden",1000,"easeOutCubic");
		$('.reflection_el .article-content .preview').toggleClass("hidden",1000,"easeOutCubic");
		$('.reflection_el .expand-btn .btn-up').toggleClass("hidden",1000,"easeOutCubic");
		$('.reflection_el .expand-btn .btn-down').toggleClass("hidden",1000,"easeOutCubic");
	});	


	// $('#hallstatt.btn').click(function(){
	// 	$('.full-text').toggleClass("hidden");
	// 	$('.preview').toggleClass("hidden");
	// 	$('.btn-up').toggleClass("hidden");
	// 	$('.btn-down').toggleClass("hidden");
	// });	
})