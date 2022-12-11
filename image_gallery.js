$(document).ready(function(){
    $("#image_list li >a").each(function(){
        let link= $(this).attr("href");
        let text = $(this).attr("title");
        console.log(link + " "+ text);
    });
    $("#image_list li >a").click(function(evt){
        evt.preventDefault();
        //store the clicked link in a variable
         const clicked_link = $(this)
        let link= $(this).attr("href");
        let text = $(this).attr("title");
        $("#caption").text(text);
        $("#image").attr("src",link);
    });
    $("#image_list li >a:first").focus();
  });