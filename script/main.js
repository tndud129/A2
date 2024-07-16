$(function(){

    //메뉴
    $(".h_menu, .sub").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    }, function(){
        $(".sub, .sub_bg").stop().slideUp();
    })

    //이미지슬라이드
    var n=0; //0 1 left: -1200px  2 left: -2400px 
    setInterval(function(){
        if(n == 2){
            n=0;
        }else{
            n++;
        }
        console.log(n);

        pos = n * (-1200) + "px"
        $(".left_move").animate({left:pos} , 500)
    },3000)

    //팝업
    $(".p_click").click(function(){
        $(".modal , .pop").show();
    }) //click

    $(".close").click(function(){
        $(".modal , .pop").hide();
    }) //click



}) //jQuery