$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#navbar").addClass("scrolled");
    } else {
      $("#navbar").removeClass("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navbarHeight = document.querySelector(".navbar").offsetHeight;

  var sections = document.querySelectorAll("section[id]");

  sections.forEach(function (section) {
    var sectionId = section.getAttribute("id");
    var navbarLinks = document.querySelectorAll(
      '.navbar-nav a[href="#' + sectionId + '"]'
    );

    navbarLinks.forEach(function (navbarLink) {
      navbarLink.addEventListener("click", function (e) {
        e.preventDefault();
        var targetSection = document.getElementById(sectionId);
        var targetSectionTop = targetSection.offsetTop;
        window.scrollTo({
          top: targetSectionTop - navbarHeight,
          behavior: "smooth",
        });
      });
    });
  });
});

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
