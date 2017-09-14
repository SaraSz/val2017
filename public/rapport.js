$(function () {
            let socket = io();
        
    $("form").submit(function(){
                
            var msg = {
              lokal: $("#lokalinput").val(),
              parti: $("#partiinput").val(),
              antal: $("#antalinput").val()
            }
             
            socket.emit("rapport", msg);
        });
});