"use strict";

$(document).ready(function() {

    function handleError(message) {
        $("#errorMessage").text(message);
        $("#birdMessage").animate({width:'toggle'},350);
    }
    
    function sendAjax(action, data) {
        $.ajax({
            cache: false,
            type: "POST",
            url: action,
            data: data,
            dataType: "json",
            success: function(result, status, xhr) {
                $("#birdMessage").animate({width:'hide'},350);

                window.location = result.redirect;
            },
            error: function(xhr, status, error) {
                var messageObj = JSON.parse(xhr.responseText);
            
                handleError(messageObj.error);
            }
        });        
    }
    
    $("#makeBirdSubmit").on("click", function(e) {
        e.preventDefault();
    
        $("#birdMessage").animate({width:'hide'},350);
    
        if($("#birdName").val() == '' || $("#birdAge").val() == '') {
            handleError("RAWR! All fields are required");
            return false;
        }

        //sendAjax($("#birdForm").attr("action"), $("#birdForm").serialize());
        
        return false;
    });
    
});