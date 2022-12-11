//ready event handler
$(document).ready(function(){
    //waits for a click on a link
    $("a").click(function(){
        //stores the clicked link in a variable
        const clicked_link = $(this)
        //stores the above div in a variable
        const above_div = clicked_link.prev()
        //stores the result of hasClass when it looks for hide; returns True or False
        var has_class = $(above_div).hasClass("hide")
        
        //checks if the result of has_class was true or false so it change the displayed text
        if (has_class == true)
        {
            $(clicked_link).text("Show less")
        }
        else
        {
            $(clicked_link).text("Show more")
        }
        //we use toggleClass to switch between eliminating the class hide or adding it to de above div
        $(above_div).toggleClass("hide")
      
    });
  });  