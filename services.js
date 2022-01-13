var box = document.querySelectorAll(".services-box")

var openBox = document.querySelectorAll(".services-text")

for (let myBoxes of box) {
  myBoxes.onclick = function () {

    const boxAttr = Number(myBoxes.getAttribute("att"));
    //  console.log(boxAttr)

      for (let myOpens of openBox) {

        myOpens.classList.remove("active")
        const openAttr=Number(myOpens.getAttribute("attr"))

        if(boxAttr == openAttr) {
          myOpens.classList.toggle("active")
        }

      }




      // this.nextElementSibling.classList.toggle("active")

    }
  }

  $(".closeButton").click(function () {
    $(".services-text").removeClass("active")
  })

  $('.partner-slick').slick({
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

