// $.noConflict();
// var bby$ = jQuery;

$(function(){ // = 화면 실행 직후 터짐 (=doucument.ready)
    var _classNm = 'next'
    var autoTimer = setInterval(function(){
        _setTimefun($('.timer').html(), _classNm)
        }, 1000)

        $('button').click(function(){ //다음 버튼 클릭 시 실행
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
        // 함수의 용도 -> 두가지 다른 배반적 조건에 숫자출력
        // 앞뒤버튼이 있어서 증가, 혹은 가감 숫자 출력.
        // 첫번째 인자는 숫자자리, 두번째 인자는 next 값이 true or false
        if (dir == 'next') {
            if(count < 4) count++; else count = 0;
        }
        else{
            if(count > 0) count--; else count = 4;
        }
        
        $('.timer').html(count)
    }



})