// $.noConflict();
// var bby$ = jQuery;

$(function(){ // = 화면 실행 직후 터짐 (=doucument.ready)
    const mySwiper = {
        imginfo = [
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
        bannerEa : this.imginfo.length,
        slideitem : "",
        innerDiv : () =>{
            for(const i in this.imginfo){
                this.Slideitem += `<div class'slide-item'>${i}</div>`
            }
        }

    }
    mySwiper.innerDiv();
    $(".slide-wrapper").html()
})