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
        var birdObj = {};
        birdObj.name = $("#birdName").val();
        birdObj.wing = $("#wing").val();
        birdObj.beak = $("#beak").val();
        birdObj.body = $("#body").val();
        console.log(birdObj);
        
        sendAjax($("#birdForm").attr("action"), birdObj);
        
        return false;
    });

    var canvas = document.querySelector('.birdCanvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    
});