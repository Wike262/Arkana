var slideNow = 1;
var translateWidth = 0;
var slideInterval = 5000;
var slideCount = $('#slidewrapper').children().length;
var navButtonId = 0;
$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);
    $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
        'background-color': '#000000'
    });
    $('#viewport').hover(function(){
        clearInterval(switchInterval);
    },function(){
        switchInterval = setInterval(nextSlide, slideInterval);
    });
});
function nextSlide()
{
    if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount)
    {
        $('#slidewrapper').css('transform','translate(0,0)');
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#ffffff'
        });
        slideNow = 1;
        clearInterval(slideInterval);
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#000000'
        });
    } else
    {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#ffffff'
        });
        slideNow++;
        clearInterval(slideInterval);
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#000000'
        });
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount)
    {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css ({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#ffffff'
        });
        slideNow = slideCount;
        clearInterval(slideInterval);
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#000000'
        });

    } else 
    {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#ffffff'
        });
        slideNow--;
        clearInterval(slideInterval);
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#000000'
        });

    }
}
$('#next-button').click(function(){
    nextSlide();
});
$('#prev-button').click(function(){
    prevSlide();
});
$('.slide-nav-button').click(function() {
    navButtonId = $(this).index();
    if (navButtonId + 1 != slideNow)
    {
        translateWidth = -$('#viewport').width() * (navButtonId);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#ffffff'
        });
        slideNow = navButtonId + 1;
        clearInterval(slideInterval);
        $('.slide-nav-button' + ':nth-child(' + slideNow + ')').css({
            'background-color': '#000000'
        });
    }
})