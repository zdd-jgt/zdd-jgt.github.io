$(document).ready(function(){
    //daohang
    $(".nav_zhao").each(function(index){
        $(this).hover(function(){
            $(".nav_zhao").removeClass("nav_zhao_fir")
            $(".nav_zhao").eq(index).addClass("nav_zhao_fir")
        },function(){

        })
    }); 
    
    $(".nav_zhao:eq(0)").on("click",function(){
        $(".jianjie").removeClass("active");
        $(".jingtai").removeClass("active");
        $(".nav").removeClass("nav_active");
        $(".biaoti").removeClass("banner_active");
    });
    $(".nav_zhao:eq(1)").on("click",function(){
        $(".jianjie").addClass("active");
        $(".jingtai").removeClass("active");
        $(".nav").addClass("nav_active");
        $(".biaoti").addClass("banner_active");
    });
   
    $(".nav_zhao:eq(2)").on("click",function(){
        $(".jianjie").removeClass("active");
        $(".jingtai").addClass("active");
        $(".nav").addClass("nav_active");
        $(".biaoti").addClass("banner_active");
    });
    
    
    
    
});
