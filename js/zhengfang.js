$(function(){
    $('.jintai-nei').on('click','.bian',function(){
        var index=$(this).index();
        $('.jintai-nei div').toggleClass("nei-active");
        $('.jintai-nei div').last().toggleClass("bianL-active");
        $('.jintai-nei:first div').first().toggleClass("bianF-active");
        $('.bian a').toggleClass("bian-a-active");
    })
    
})
