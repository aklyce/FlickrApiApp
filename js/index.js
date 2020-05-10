const $photoDiv = $("#photos");
var photoName;
$("#dropDown").change(function(){
    var selectedItem = $("#dropDown :selected").text();
    photoName = selectedItem;
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
        $img.attr("id", i)
        $("#photos").append($img)
 
        
        var $link = $("<a>");
        $link.attr("href", data.items[i].link)
        $img.append($link);
        $img.wrap($link);
        $("#pictureIntro").html("Check out "+ photoName +" photos!")
        
  
//         $img.wrap("<a href=" + data.items[i].link + "</a>")
    }
}
                  
