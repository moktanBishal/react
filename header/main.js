$(window).scroll(function(){
    if($(this).scrollTop()> 150) 
    {
        $("nav").addClass("sticky")
    } else {
        $("nav").removeClass("sticky")
    }
})