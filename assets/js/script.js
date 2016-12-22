$(document).ready(function(){
    $(".js-modal").fancybox({
		minWidth	: 310,
		fitToView	: true,
		width		: '100%',
		height		: '100%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
        padding: 0
	});
    
    $(".js-feedback").fancybox({
		maxWidth	: 443,
        maxHeight   : 424,
		fitToView	: true,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
        padding: 0
	});
    
    $(".b-hamburger").click(function(event){
        event.preventDefault();
        $("span").toggleClass("active");
        $(".menu").slideToggle("active-m");
    });
    if ( $('.details__gallery').length ) {
	    $('.details__gallery').slick({
	        prevArrow: '<img class="b-left" src="assets/img/ic-arr-left.png">',
	        nextArrow: '<img class="b-right" src="assets/img/ic-arr-right.png">'
	    });
	}
});