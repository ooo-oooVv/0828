$(document).ready(function(){
   $('a.scrollPage').on('click',function(e){
     e.preventDefault(); //책갈피기능 막기
   //   $('#gnb .navia').removeClass('on') // 클릭하자마자 활성화 
   //   $(this).addClass('on') // 클릭하자마자 활성화 
     $('body, html').animate({ 
        scrollTop : $($(this).attr('href')).offset().top
        }, 400, "linear", () => { // 화살표함수 ES2015+
         if( $(this).hasClass('navia')){ // navia 클래스를 가지고 있다면
             $('#gnb .navia').removeClass('on') // 모든 네비게이션 스타일 빼고
             $(this).addClass('on') // 지금 클릭한 너만 스타일넣어
         }
     })
   }) //// a.scrollPage click

   $('.section').each(function(){ // each 메서드는 다중처리 프로그래밍을 짧게 해주는 효율적인 메서드
      $(this).attr('data-pos', $(this).offset().top)
      //각자 .section들은 data-pos속성을 만들고 각자의 body상단에서 떨어지는 상단위치를 저장해라
   })

   $(window).on('scroll' , function(){
      var scrollPos = $(window).scrollTop(); 
      //스크롤위치 스크롤할때마다 값이 바뀐다.
      $('.section').each(function(){ //section마다 스크롤위치가 나의 상단위치랑 비교
         var thisPos = $(this).offset().top;  // 나의 상단위치
         if( scrollPos > thisPos - 100 ){ // 스크롤위치가 나의 상단위치보다 커지면
            // 다른 말로 내가 화면에 나오고 있다는 뜻
            $('#gnb .navia').removeClass('on')
            $('a[href="#'+$(this).attr('id')+'"]').addClass('on')
            //그러면 나의 아이디랑 똑같은 href값을 가진 a태그를 활성화해라.
         }
      })

   })

})
///////////////////////////// 신의한수 : 클래스삽입해서 편하게 짜다~

// $(this).attr('href')  -> #aboutus  -> $('#aboutus') 
// $(this).attr('id')  -> aboutus -> $('[href="#aboutus"]')