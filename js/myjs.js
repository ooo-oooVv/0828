$(document).ready(function(){
   $('a.scrollPage').click(function(e){
     e.preventDefault(); //책갈피기능 막기
     $('body, html').animate({ 
        scrollTop : $($(this).attr('href')).offset().top
        }, 400, "linear", function(){

     })

   })
})