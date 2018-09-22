$("ul").on("click",".del-item", function (e) {
    $(this).css("background-color", "#232323");
    $(this).parent("li").fadeOut(1000, function (e) {
        $(this).remove();
    });
    e.stopPropagation();
});


$("ul").on("click",".items", function (e) {
    $(this).toggleClass("tasks-done");
});

$("#todo-add").on("keypress",function(e){
    if(e.which === 13){
        // alert("Enter pressed!");   
        console.log($(this).val());
        $("ul").append('<li class="items"><span class="del-item"><i class="far fa-trash-alt"></i></span> '  + $(this).val() + "</li>");
        $(this).val("");
    }
});