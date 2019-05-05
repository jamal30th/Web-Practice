$('document').ready(function () {
    $('.contentBox').click(function () {
        $('.contentBox').animate({
            width: '500px',
            height: '300px'
        }, 1000);
        $('.contentAfter').show().animate({opacity: 1},5000)
    }) 
    




});