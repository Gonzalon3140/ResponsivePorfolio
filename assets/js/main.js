$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {

    //the issue you were having her is that your classes for opening that nav were not being removed

    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $('.nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      keyframes, {
        scrollTop: $($(this).attr("href")).offset().top - 100
      },
      options,
      2000
    );
  });

  $("#up").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 10);
  });





  //this issue with your aos was that you had it as Aos.init(), the aos had to be all caps
  AOS.init({
    easing: "ease",
    duration: 1800
  });

});