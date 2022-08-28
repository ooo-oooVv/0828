// $.noConflict();
// var bby$ = jQuery;

$(function(){
    var _classNm = 'next'
    var autoTimer = setInterval(function(){
        _setTimefun($('.timer').html(), _classNm)
        }, 1000)

        $('button').click(function(){
                // 다음 버튼 실행
                clearInterval(autoTimer); // autoTimer 기능 없애줘!
                _classNm = $(this).attr('class'); //class 이름 저장
                _setTimefun($('.timer').html(), _classNm);

                //버튼 snfmrh 1초뒤에 autoTimer 기능 생김~!~!
                //clearInterval(autoTimer);가 다시 실행되도록 변수 이름(autoTimer) 같아야함
                autoTimer = setInterval(function(){
                    _setTimefun($('.timer').html(), _classNm)
                }, 1000)
        })

    function _setTimefun(count, dir){
        if (dir == 'next') {
            if(count < 4) count++; else count = 0;
        }
        else{
            if(count > 0) count--; else count = 4;
        }
        
        $('.timer').html(count)
    }



})