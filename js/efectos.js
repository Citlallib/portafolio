$(document).ready(function(){
    //Efecto para el menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        }, 1500+(index*500));
    });
    //Efecto para los textos del header
    if ($(window).width()>800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }
    //Efectos Scroll del menú
        //Acerca-de
        var acercaDe = $('#acerca-de').offset().top,
            habilidades =  $('#lenguajes').offset().top,
            proyectos = $('#proyectos').offset().top,
            contacto = $('#contacto').offset().top;

        $('#btn-acerca-de').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 335
            });
        });
        //habilidades
        $('#btn-habilidades').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: habilidades
            });
        });
        //Proyectos
        $('#btn-proyectos').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: proyectos
            });
        });
        //Contacto
        $('#btn-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto
            });
        });
});