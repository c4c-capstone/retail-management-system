$(document).ready(function(){
    $(".detes").prop('disabled', true);
    $("#edit").click(function(){
        $(".detes").prop('disabled', false);
    });
});