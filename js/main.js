$(document).ready(function(){
    //Función del menu
    var about = $('.about').offset().top;
    var images = $('.images').offset().top;
    var buy = $('.buy').offset().top;

    $('#about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about -150
        }, 1000);
    });

    $('#images').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: images -150
        }, 1000);
    });

    $('#buy').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: buy -150
        }, 1000);
    });

    //Función de click
    var ps = $('#ps');
    var price = $('.price');

    ps.on('click', function(e){
        e.preventDefault();
        window.open("https://www.playstation.com/es-ar/network/?gclid=CjwKCAiA-_L9BRBQEiwA-bm5fq2NavQC0U4HN12Hx7rnGoKyXZvSKQKrxjndJtUiL8xnsCdSRXnG2hoCfsoQAvD_BwE");
    });

    price.on('click', function(e){
        e.preventDefault();
        window.open("https://store.playstation.com/es-mx/product/UP9000-CUSA07408_00-00000000GODOFWAR");
    });
});