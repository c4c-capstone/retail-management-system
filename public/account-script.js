$(document).ready(function(){
    
    $(".detes").prop('disabled', true);
    
    $('#savin').hide();
    
    $("#edit").click(function(){
        $(".detes").prop('disabled', false);
        $('#savin').show();
    });
    
    
});