"use strict";

var birdDraw = {
  wing: function(canvas, ctx, type){

  },

  beak: function(canvas, ctx, type){

  },

  body: function(canvas, ctx, type){

  },

  drawBird: function(canvas, ctx, values){
    this.wing(canvas, ctx, values.wing);
    this.body(canvas, ctx, values.body);
    this.beak(canvas, ctx, values.beak);
  }
}