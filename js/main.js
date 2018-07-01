$(document).ready(function (){

$('.my-pra').scrolly({bgParallax: true});
    
 

        $(".owl-carousel").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
        });

        /*================================= scroll up*/
        $(window).scroll(function(){
                if ($(this).scrollTop()>500) {
                        $('.uparro').fadeIn();
                }else{
                        $('.uparro').fadeOut();
                };
        });
        $('.uparro').click(function(){
                $('html').animate({
                        scrollTop:0
                },1000);
        })
        /*================================= scroll up*/

        $("#down-pos").click(function(){
                var hash =this.hash;
                var position = $(hash).offset().top;
                $('html').animate({
                        scrollTop:position
                },2000);
        });






        /*================================= scroll down*/

wow = new WOW(
{
}) 
.init();

$(".mydemo").viewer();








});






