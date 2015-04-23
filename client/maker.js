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
    
        if($("#birdName").val() == '') {
            handleError("Bird Must Have Name");
            return false;
        }
        var birdObj = {};
        birdObj.name = $("#birdName").val();
        birdObj.wing = $("#wing").val();
        birdObj.beak = $("#beak").val();
        birdObj.body = $("#body").val();
        
        sendAjax($("#birdForm").attr("action"), birdObj);
        
        return false;
    });
    //Get a reference to the canvas
    var canvas = document.querySelector('.birdCanvas');
    var ctx = canvas.getContext('2d');
    //size the canvas to match the screen
    var resizeCanvas = function() {
        var canvasHolder = document.querySelector('#birdView');

        canvas.height = canvasHolder.offsetHeight;
        canvas.width = canvasHolder.offsetWidth;
    };

    $(window).resize( resizeCanvas );
    //Draw function for rendering the bird
    var renderBird = function(){
        //get values
        var birdObj = {};
        birdObj.wing = $("#wing").val();
        birdObj.beak = $("#beak").val();
        birdObj.body = $("#body").val();

        ctx.clearRect(0,0,canvas.width,canvas.height);
        birdDraw.render(canvas, ctx, birdObj);
    }
    //size the canvas properly
    resizeCanvas();
    //Draw the bird
    renderBird();
    //When the bird values change redraw
    $("#wing").on('change', renderBird);
    $("#beak").on('change', renderBird);
    $("#body").on('change', renderBird);
});