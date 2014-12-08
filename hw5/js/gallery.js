(function() {
    var count = 1;
    $("#comment-submit").click(function() {
        var $comment = $("#comment-text");
        if($comment.val().length < 4) {
            alert("Sorry, more than 4 words in need");
        }
        else {
            $("#comments-ul").append("<li><p></p></li>");
            $("#comments-ul li:last-child").addClass("comment-item").children().text($comment.val());
            var text = $("#comments-ul li:last-child").children().text();
            $comment.val("");
            count++;
            $("#countNum").text(count);
        }
    })

    
})();
