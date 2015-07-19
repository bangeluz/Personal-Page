$(window).scroll(function () {
      $(this).scrollTop() < 400 ?
            $('.trans-1').removeClass('hidden'):
    		$('.trans-1').addClass('hidden');

      $(this).scrollTop() < 1100 ?
            $('.trans-2').removeClass('hidden-2'):
        $('.trans-2').addClass('hidden-2');

        $(this).scrollTop() < 900 ?
              $('.trans-5').removeClass('desatura'):
          $('.trans-5').addClass('desatura');

      $(this).scrollTop() < 1400 ?
            $('.trans-3').removeClass('hidden'):
        $('.trans-3').addClass('hidden');
});

$(function(){
  $(".slides").slidesjs({ 
    play: {
      active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 10000,
        // [number] Time spent on each slide in milliseconds.
      auto: true,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    }
  });
});
