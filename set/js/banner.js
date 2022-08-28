// $.noConflict();
// var bby$ = jQuery;

$(function(){ // = 화면 실행 직후 터짐 (=doucument.ready)
    const mySwiper = {
        imginfo : [
            {
                "imgSrc" : "img/event.png",
                "imgLink" : "http://www.naver.com"
            },{
                "imgSrc" : "img/normal.gif",
                "imgLink" : "http://www.daum.net"
            },{
                "imgSrc" : "img/season.gif",
                "imgLink" : "http://www.google.com"
            }
        ],
        bannerEa : () => imginfo.length,
        innerDiv : function(num){
            var slideitem = '';
            var slideBtn = '';
            for(const i in this.imginfo){
                slideitem += `<div class='slide-item' data-key='${i}'>
                                    <a href='${this.imginfo[i].imgLink}'>
                                        <img src='${this.imginfo[i].imgSrc}'>
                                    </a>
                                </div>`;

                slideBtn += `<button data-key='${i}'>${parseInt(i) + 1}</button>`;
            }
            $(".slide-wrapper").html(slideitem);
            //여기서만 이미지 높이 가져올 수 있다.
            $('.indicate').html(slideBtn);
        },
        activeStatu : function(num){
                        $('.indicate button').eq(num).addClass('act').siblings().removeClass('act');
                        $('.slide-item').eq(num).addClass('act').siblings().removeClass('act');
                    }

    }
    var s_count = 0;
    mySwiper.innerDiv();//1회 처리 태그 세팅
    mySwiper.activeStatu(s_count);

    var autoBanner = setInterval(function(){ //3초마다 주기적으로 활성화
                        if(mySwiper.dir == 'next'){
                            if(s_count < 2) s_count++; else s_count=0;
                        }else{
                            if(s_count > 0) s_count--; else s_count=2;
                        }
                        mySwiper.activeStatu(s_count);
                        }, 3000)

    $('.btns button').click(function(){
        clearInterval(autoBanner);
        if($(this).hasClass('next')){
            if(s_count < 2) s_count++; else s_count=0;
        }else{
            if(s_count > 0) s_count--; else s_count=2;
        }
        mySwiper.activeStatu(s_count);
        autoBanner = setInterval(function(){ //3초마다 주기적으로 활성화
            if(mySwiper.dir == 'next'){
                if(s_count < 2) s_count++; else s_count=0;
            }else{
                if(s_count > 0) s_count--; else s_count=2;
            }
            mySwiper.activeStatu(s_count);
            }, 3000)

    })

    // 인디케이트를 클릭하면 -> 통적객체 -> on메서드 쓰기
    $('.indicate').on('click', 'button', function(){
        clearInterval(autoBanner);//자동롤링 멈춤
        s_count = $(this).index();
        mySwiper.activeStatu(s_count);

        autoBanner = setInterval(function(){ //3초마다 주기적으로 활성화
            if(mySwiper.dir == 'next'){
                if(s_count < 2) s_count++; else s_count=0;
            }else{
                if(s_count > 0) s_count--; else s_count=2;
            }
            mySwiper.activeStatu(s_count);
            }, 3000)
})
})