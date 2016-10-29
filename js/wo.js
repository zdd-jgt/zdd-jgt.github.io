$(document).ready(function(){
    //daohang
    $(".nav_zhao").each(function(index){
        $(this).hover(function(){
            $(".nav_zhao").removeClass("nav_zhao_fir")
            $(".nav_zhao").eq(index).addClass("nav_zhao_fir")
        },function(){

        })
    }) 
    
    
    
    
    
    
})
