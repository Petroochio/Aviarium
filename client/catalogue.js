"use strict";

$(document).ready(function() {

  var allBirds = $('.birdBox');
  //loop through and draw the birds
  for(var i = 0; i < allBirds.length; i++) {
    //resize the canvas properly
    var box = allBirds[i];
    box.children[1].width=box.offsetWidth;
    box.children[1].height=box.offsetHeight;

    var canvas = box.children[1];
    var ctx = canvas.getContext('2d');

    var birdObj = {
      wing: box.dataset.wing,
      beak: box.dataset.beak,
      body: box.dataset.body
    }

    birdDraw.render(canvas, ctx, birdObj);

  }

  console.log('ready');
});