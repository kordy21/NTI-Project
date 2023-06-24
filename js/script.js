$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:2 ,
        nav:true ,
        navText:["<i class='fa-solid fa-arrow-left-long' id ='first-arrow'></i>","<i class='fa-solid fa-arrow-right-long' ></i>"]
    });
  });

  h=document.querySelector("#c-scroll")
  window.addEventListener('scroll',function(){
    if (this.document.body.scrollTop > 40 || this.document.documentElement.scrollTop > 40 ){
        console.log(h)
        h.classList.add("hidden")
    }
    else{
        h.classList.remove("hidden")
    }
  })
