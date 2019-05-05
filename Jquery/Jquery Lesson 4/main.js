$(document).ready(function(){
    $('#btnFadeOut').click(function () {
        $('#box').fadeOut(3000);
    })
    $('#btnFadeIn').click(function () {
        $('#box').fadeIn(3000)
    })
    $('#btnFadeTog').click(function () {
        $('#box').fadeToggle()
    })
    $('#btnSlideUp').click(function () {
        $('#box').slideUp(3000)
    })
    $('#btnSlideDown').click(function () {
        $('#box').slideDown(3000)
    })
    $('#btnSlideTog').click(function () {
        $('#box').slideToggle(1000)
    })
    $('#btnStop').click(function () {
        $('#box').stop()
    })
    $('#btnMoveRight').click(function () {
        $('#box1').animate({
            left: 500,
            height: '500px',
            width: '500px',
            opacity: '.5'
          

        })
    })
    $('#btnMoveLeft').click(function () {
        $('#box1').animate({
            left: 0,
            width: '100px',
            height: '100px',
            opacity: '1'
        })
    })
    $('#btnMoveAround').click(function (){
        var box = $('#box1');
        box.animate({ left: 300 });
        box.animate({ top: 300 });
        box.animate({ left: 0, top:300 });
        box.animate({ left: 0, top:0 });
    })
  });