//  this is for loading effect (start)
  $(window).on("load",function(){
    setTimeout(() => {
        $("#myload").fadeOut("slow");
        $("body").css("overflow-y", "scroll")
    }, 1500);
  
});
//  this is for loading effect (end)



// this is for scrollBtn (start)
window.onscroll = function () {
    scrollFunction();
  
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $(".scrollBtn").css(
            "bottom", "3%"
        )
  
    } else {
        $(".scrollBtn").css(
            "bottom", "-150px"
        )
    }
  }
  
  
  
  $(".scrollBtn").click(function () {
    toTop();
    
  
  })
  
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
// this is for scrollBtn (end)

$(".contact-click").click(function(){
  var headerText=document.querySelector(".header-contact");
  console.log(headerText)
  headerText.classList.toggle("active")
});


$(".closeButtonHeader").click(function () {
  $(".header-contact").removeClass("active")
})
