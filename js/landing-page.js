$(document).ready(function(){
    for (var i = 1; i <= 4; i++) {
    $("#t" + i).hover(function () { $("#p" + i).show() }, function () { $("#p" + i).hide() })
}
})

