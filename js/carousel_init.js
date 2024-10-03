$(document).ready(function(){
    var team_carousel = $('#team-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,   // 1 item for mobile
          center: false
        },
        768: {
          items: 2,   // 2 items for tablets
          center: false
        },
        1024: {
          items: 2,   // 2 items for smaller desktops
          center: false 
        },
        1920: {
          items: 3,   // 3 items for larger screens
          center: true
        }
      }
    });

    $('.owl-prev').click(function() {
      team_carousel.trigger('prev.owl.carousel');
    });

    $('.owl-next').click(function() {
      team_carousel.trigger('next.owl.carousel');
    });

    var testimonials_carousel = $('#testimonials-carousel').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      items:3,
      center: true,
      mouseDrag: false,
      touchDrag: false,
      responsive: {
        0: {
          items: 1,   // 1 item for mobile
        },
        1024: {
          items: 3,   // 3 items for larger screens
        }
      }

    });
    $('#testimonial-prev').click(function() {
      testimonials_carousel.trigger('prev.owl.carousel');
      switch_person_details();
    });

    $('#testimonial-next').click(function() {
      testimonials_carousel.trigger('next.owl.carousel');
      switch_person_details();
    });
    const switch_person_details = () => {
      var testimonials_carousel_div = document.getElementById("testimonials-carousel");

      var centered_testimonial = testimonials_carousel_div.querySelector(".center").querySelector(".item");

      console.log(document.querySelector("#testimonials").querySelector(".person-name"));
      console.log(centered_testimonial);
      document.querySelector("#testimonials").querySelector(".person-name").innerText = `${centered_testimonial.getAttribute("name")}`;
      document.querySelector("#testimonials").querySelector("#company-name").innerText = `${centered_testimonial.getAttribute("company-name")}`;
      document.querySelector("#testimonials").querySelector("#testimonial-text").innerText = `${centered_testimonial.getAttribute("desc")}`;
    };
    
});