$('document').ready(function () {
    $('#left').click(function () {
        $('.box').animate({
            left: '-=200px',
        })

    }) 
    $('#right').click(function () {
        $('.box').animate({
            right: '-=200px'
        })
    })
    $('#up').click(function () {
        $('.box').animate({
            top: '-=200px'
        })
    })
    $('#down').click(function () {
        $('.box').animate({
            bottom: '-=200px'
        })
    })
})


