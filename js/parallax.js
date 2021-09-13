$(document).ready(function(){
    $(window).scroll(function(){
        var tamanoVentana = $(window).width(); /*Saber el tamaño de la pantalla*/
        if(tamanoVentana>800){
            var scroll = $(window).scrollTop(); /*Saber la posicion del Scroll*/

			$('header .textos').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
            });
            
            $('.acerca-de article').css({
				'transform': 'translate(0px,-' + scroll / 4 + '%)'
			});
        }
    });

    $(window).resize(function(){
        var tamanoVentana = $(window).width();
        if(tamanoVentana<800){
            var scroll = $(window).scrollTop(); /*Saber la posicion del Scroll*/
            $('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
        }
    });
});