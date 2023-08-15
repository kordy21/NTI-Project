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
        h.classList.add("hidden")
        console.log(this.document.documentElement.scrollTop)
    }
    else{
        h.classList.remove("hidden")
    }
  })
//   
let total_project =document.querySelector("#total_project")
let Won =document.querySelector("#Won")
let Happy =document.querySelector("#Happy")
let exp =document.querySelector("#exp")
function counter (tag , endConter , time ,incre ){
    let i =0
        let set =setInterval(()=>{
            if (i==endConter) { 
                clearInterval(set)
            }
            tag.innerText = i
            i+=incre
        } ,time)

}
    var test =0
    window.addEventListener("scroll" ,function(){
        if (this.document.body.scrollTop > 900 || this.document.documentElement.scrollTop > 900 ){
            if (test==0){
                counter(total_project,8000 ,10 ,50)
                counter(Won,810 ,10 ,10)
                counter(Happy,2000 ,15 ,20)
                counter(exp,20 ,80 ,1)
                test++ 
            }
            }
})
