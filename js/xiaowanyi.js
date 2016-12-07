$(".portfolioFilter li").each(function(i,v){
//  console.log(i,v)
    $(this).on('click',function(){
        console.log($(this).attr("data-filter"))
        $(".portfolioFilter li").removeClass("active");
        $(this).addClass("active");
        
        if($(this).attr("data-filter")==='photo'){
            $('.mix_all').queue(function(){
                $('.portfolio-item,.mix_all')
                .css({"transition":"all .3s ease-in-out",
                "transform":" scale(0)",
                "opacity":0})
                .dequeue();
            }).delay(300).css({"display":"none"});
            $('.photo')
            .css({"display":"block"}).delay(300)
            .queue(function(){
                $(this).css({"transition":"all .3s ease-in-out",
                "transform":" scale(1)",
                "opacity":1})
                .dequeue();
            })
        }else if($(this).attr("data-filter")==='illustrations'){
//          $('.mix_all').css({
//              "display":"none",
//              "opacity":0
//          })
            $('.mix_all').queue(function(){
                $('.portfolio-item,.mix_all')
                .css({"transition":"all .3s ease-in-out",
                "transform":" scale(0)",
                "opacity":0})
                .dequeue();
            }).delay(300).css({"display":"none"});
            $('.illustrations')
            .css({"display":"block"}).delay(300)
            .queue(function(){
                $(this).css({"transition":"all .3s ease-in-out",
                "transform":" scale(1)",
                "opacity":1})
                .dequeue();
            })
        }else if($(this).attr("data-filter")==='websites'){
//          $('.mix_all').css({
//              "display":"none",
//              "opacity":0})
            $('.illustrations').queue(function(){
                $('.portfolio-item,.mix_all')
                .css({"transition":"all .3s ease-in-out",
                "transform":" scale(0)",
                "opacity":0})
                .dequeue();
            }).delay(300).css({"display":"none"});
            $('.photo').queue(function(){
                $('.portfolio-item,.mix_all')
                .css({"transition":"all .3s ease-in-out",
                "transform":" scale(0)",
                "opacity":0})
                .dequeue();
            }).delay(300).css({"display":"none"});
            $('.websites')
            .css({"display":"block"}).delay(300)
            .queue(function(){
                $(this).css({"transition":"all .3s ease-in-out",
                "transform":" scale(1)",
                "opacity":1})
                .dequeue();
            })
        }else if($(this).attr("data-filter")==='all'){
            console.log("all")
            $('.mix_all')
             .queue(function(){
                 $('.mix_all').css({"display":"block"})
                .dequeue();
                 
             }).delay(300).css({"transition":"all .3s ease-in-out",
                "transform":" scale(1)",
                "opacity":1})
        }
    })
    if($(this).attr("data-filter")==='all'){
       
//          $('.mix_all').css({"display":"inline-block","opacity":1})
             $('.mix_all')
             .queue(function(){
                 $('.mix_all').css({"display":"block"})
                .dequeue();
                 
             }).delay(300).css({"transition":"all .3s ease-in-out",
                "transform":" scale(1)",
                "opacity":1})
    }
})

