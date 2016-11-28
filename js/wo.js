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
    //放大镜
    var xiao_box=$("#xiao-box");
    var zhao=$("#zhao");
    var da_box=$("#da-box");
    var da_img=$("#da-img")
    var xiao_img=$("#xiao-img")
    var zw=zhao.width();
    var zh=zhao.height();
    var dw=da_box.width();
    var xiaoH=xiao_img.height();
    var bili=dw/zw;
    var xw=xiao_box.width();
    var xh=xiao_box.height();
    da_img.css("height",xiaoH*bili);
    xiao_box.hover(function(){
        zhao.css("display","block");
    },function(){
        zhao.css("display","none");
    });
    xiao_box.on("mousemove",function(e){
        var ox=e.offsetX;
        var oy=e.offsetY;
        var left=ox-zw/2;
        var top=oy-zh/2;
        if(left<=0){
            left=0;
        }
        if(top<=0){
            top=0;
        }
        if(top>=xh-zh){
            top=xh-zh
        }
        if(left>=xw-zw){
            left=xw-zw
        }
        zhao.css("left",left);
        zhao.css("top",top);
        da_img.css("margin-left",-left*bili);
        da_img.css("margin-top",-top*bili);
    });
    
    
    
});
