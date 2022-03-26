$(document).ready(function(){
    
    // Progress bar 
    $(window).scroll(function(){
        // Get Percentage of the window
        percent = ($(window).scrollTop() / ($(document).height() - $(window).innerHeight()) *100) ;
        $(".progress-bar").css({
            "width": percent +"%",
        });

        // Hide or Show To Top Button
        if($(window).scrollTop() > 100){
            $(".toTop").fadeIn();

            // Show Nav Background
            $(".navbar").css({
                "background-color": "#f5f5f5",
                "color":"#191919"
            });
        }
        else{
            $(".toTop").fadeOut();

            // Hide Background of nav
            $(".navbar").css({
                "background-color": "transparent",
                "color":"white"

            });
        }

        
    });

    // Move to Top
    $(".toTop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },500);
      }); 
  


  });