
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    // console.log("Clicked menu");
    $("#mainListDiv").slideDown('slow', function(){
        $(this).toggleClass("show_list");
    });

});
