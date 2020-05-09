const $photoDiv = $("#photos");
$("#dropDown").change(function(){
    var selectedItem = $("#dropDown :selected").text();

    $.getJSON({
    dataType: "jsonp",
    url: "https://api.flickr.com/services/feeds/photos_public.gne?",
    data: {
        jsoncallback: "processData",
        format:"json",
        tags: selectedItem
    }
});
})

const processData = function(data) {
    $("#photos").html("")
    for(var i= 0; i < data.items.length; i++) {
        var $img = $("<img>");
        $img.attr("src", data.items[i].media.m)
        $("#photos").append($img)
 
        
//        var $link = $("<a>");
//        $link.attr("href", data.items[i].link)
//        $img.append($link);
//        $img.wrap($link);
        
  
         $img.wrap("<a href=" + data.items[i].link + "</a>")
    }
}
                  
