//event pada saat diklik
/*$('.page-scroll').on('click',function () {
    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen yang bersangkuta
    var elementTujuan = $(tujuan);
    //pindah scroll
    $('body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1000,'swing');
});*/
$(".page-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
        event.preventDefault();

      // Store hash
        var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, 'swing', function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
    } // End if
    });

    //parallax
    $(window).scrollTop(function () {
        wScroll = $(this).scrollTop();

        /*$('.jumbotron img').css({
            'transform' : 'translate(0px, '+ wScroll/4 +'%)'
        });

        $('.jumbotron h1').css({
            'transform' : 'translate(0px, '+ wScroll/2 +'%)'
        });

        $('.jumbotron p').css({
            'transform' : 'translate(0px, '+ wScroll +'%)'
        });*/

        //portfolio
        if(wScroll > $('.portfolio').offset().top - 250){
            $('.portfolio .thumbnail').each(function(){
                setTimeout(function(){
                    console.log('ok');
                }, 2000);
            });
            
            //$('.portfolio .thumbnail').addClass('muncul')
        }
    });
