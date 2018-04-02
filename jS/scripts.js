$("#lamp1").change(function(event){
    if (this.checked){
        $("#result1").empty();
        $("#result1").text("You have added lamp 1");
        $("#result1").css("background-color", "lightblue");
    } else {
        $("#result1").text("You have removed lamp 1");
        $("#result1").css("background-color", "lightgrey");
    }
});
