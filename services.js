

var box = document.querySelectorAll(".services-box")

var openBox = document.querySelectorAll(".services-text")

for (let i = 0; i < box.length; i++) {
   box[i].onclick =function(){

    for (let j =0; j < openBox.length; j++) {
        
    openBox[j].classList.remove("active")
        
    }

    
    this.nextElementSibling.classList.toggle("active")

   }
}

$(".closeButton").click(function(){
    $(".services-text").removeClass("active")
})



$('.service-slick').slick({
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

