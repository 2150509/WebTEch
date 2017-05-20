/* toggle for drop down*/
$('.button_menu').click(function () {
    $("#css-preference-content").toggle();
    if ($('.button_menu').hasClass('active')) {
        $('.button_menu').removeClass('active');
        $('.menu-container').removeClass('show');
        setTimeout(function () {
            $('.content_menu').removeClass('active');
        }, 1000);

    } else {
        $('.button_menu').addClass('active');
        $('.menu-container').addClass('show');
        setTimeout(function () {
            $('.content_menu').addClass('active');
        }, 1000);

    }
});

/*drop down menu*/
$('.content_on_menu').click(function () {
    $('.button_menu').removeClass('active');
    $('.menu-container').removeClass('show');
    setTimeout(function () {
        $('.content_menu').removeClass('active');
    }, 1000);
})

/* home */
$('.HOME').click(function () {
    $('.main').removeClass('hide');
    $('.container_box').fadeIn(400);
    $('.PRELIMS').fadeOut(0);
    $('.MIDTERMS').fadeOut(0);
    $('.FINALS').fadeOut(0);
})

/*prelims */
$('.PRELIM').click(function () {
    $('.main').addClass('hide');
    $('.PRELIMS').fadeIn(400);
    $('.MIDTERMS').fadeOut(0);
    $('.FINALS').fadeOut(0);
    
})
/* midterms */
$('.MIDTERM').click(function () {
    $('.main').addClass('hide');
    $('.PRELIMS').fadeOut(0);
    $('.MIDTERMS').fadeIn(400);
    $('.FINALS').fadeOut(0);
})

/* finals */
$('.FINAL').click(function () {
    $('.main').addClass('hide');
    $('.PRELIMS').fadeOut(0);
    $('.MIDTERMS').fadeOut(0);
    $('.FINALS').fadeIn(400);
})



var x = document.getElementById("java-scripts");
var y = document.getElementById("php-scripts")
var z = document.getElementById("node-scripts");
var v = document.getElementById('owasp-scripts');
function showjava() {
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
        v.style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}

function showphp() {
    if (y.style.display == 'none') {
        y.style.display = 'block';
        x.style.display = 'none';
        z.style.display = 'none';
        v.style.display = 'none';
    } else {
        y.style.display = 'none';
    }
}

function shownode() {
    if (z.style.display == 'none') {
        y.style.display = 'none';
        x.style.display = 'none';
        z.style.display = 'block';
        v.style.display = 'none';
    } else {
        z.style.display = 'none';
    }
}
function showasp(){
    var v = document.getElementById('owasp-scripts');
    if(v.style.display == 'none'){
         y.style.display = 'none';
        x.style.display = 'none';
        z.style.display = 'none';
        v.style.display = 'block';}
    else{
        v.style.display = 'none';}
}