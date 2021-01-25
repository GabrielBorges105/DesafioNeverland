document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-slider', {
        arrows: false,
    }).mount();
    new Splide( '#card-slider2', {
        perPage    : 3,
        arrows: true,
        pagination: false,
		breakpoints: {
			600: {
				perPage: 1,
			}
        }
    } ).mount();

} );

