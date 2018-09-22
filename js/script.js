$(".del-item").on("click", function (e) {
    $(this).css("background-color", "#232323");
});


$(".items").on("click", function (e) {
   $(this).toggleClass("tasks-done");
})