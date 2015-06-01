var main = function() {
$('.article').click(function() {
    $('.article').removeClass('current')
    $('.description').hide();
    $(this).addClass('current')
    $(this).children('.description').show();

});
}

$(document).ready(main);

var main = function() {
    $('.icon-menu').click(function() {
    $('.menu').animate({
        left: '0px'
    }, 200);
    
    $('body').animate({
        left: '285px'
    }, 200);
    
    });
    
    $('.icon-close').click(function() {
    $('.menu').animate({
        left: '-285px'
    }, 200);
    
    $('body').animate({
        left: '0px'
    }, 200);
});
    
};
        

$(document).ready(main);