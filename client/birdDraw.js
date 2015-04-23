"use strict";
//Draws bird relative to canvas passed in
var birdDraw = {
  wing: function(canvas, ctx, type){
    var x = canvas.width/2;
    var y = canvas.height/2;
    var r = canvas.height/8;
    
    ctx.save();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = canvas.height/150;

    switch(type) {
      case "Crecent":
        ctx.beginPath();
        ctx.arc(x - y/7, y + y/3.8, r*.9, 0, Math.PI, false);
        ctx.lineTo(x - y/7, y + y/3.8)
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        break;
      case "Angular":
        ctx.beginPath();
        ctx.moveTo(x - y/7,y + y/6);
        ctx.lineTo(x - y/3,y + y*.7);
        ctx.lineTo(x + y/10,y + y*.3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        break;
      default:
        ctx.translate(x - y/7,y + y/2.5);
        ctx.rotate(-Math.PI/3);
        ctx.scale(1.3,1);
        ctx.beginPath();
        ctx.arc(0, 0, r*.8, Math.PI/6, Math.PI*2 - Math.PI/6, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        break;
    }
    ctx.restore();
  },

  beak: function(canvas, ctx, type){
    var x = canvas.width/2 + canvas.height/10;
    var y = canvas.height/2;
    var r = canvas.height/8;
    
    ctx.save();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = canvas.height/150;
    
    switch(type) {
      case "Thin":
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x + r*3, y);
        ctx.lineTo(x, y - r/2);
        ctx.moveTo(x, y + r/2);
        ctx.lineTo(x + r*3, y);
        ctx.stroke();
        ctx.closePath();
        break;
      case "Short":
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x + r*1.6, y);
        ctx.lineTo(x + r/5, y - r);
        ctx.moveTo(x + r/5, y + r);
        ctx.lineTo(x + r*1.6, y);
        ctx.stroke();
        ctx.closePath();
        break;
      default:
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x + r*2, y);
        ctx.lineTo(x, y - r*0.9);
        ctx.moveTo(x, y + r*0.9);
        ctx.lineTo(x + r*2, y);
        ctx.stroke();
        ctx.closePath();
        break;
    }
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x + r/3, y - r/3, r/10, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.restore();
  },

  body: function(canvas, ctx, type){
    var x = canvas.width/2;
    var y = canvas.height/2;
    var r = canvas.height/8;
    
    ctx.save();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = canvas.height/150;

    ctx.save();
    ctx.translate(x - y/10,y + y/3.5);
    ctx.rotate(Math.PI/3);
    ctx.scale(1,1.7);

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    switch(type) {
      case "Angular":
        ctx.beginPath();
        ctx.moveTo(x - y*.4,y + y/2);
        ctx.lineTo(x -y,y + y*.4);
        ctx.lineTo(x -y*.45,y + y*.35);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(x - y*.35,y + y*.55);
        ctx.lineTo(x -y*.8,y + y*.45);
        ctx.lineTo(x -y*.45,y + y*.4);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        break;
      default:
        ctx.save();
        ctx.translate(x - y*.7,y + y/2.4);
        ctx.scale(1.8,.9);
        ctx.beginPath();
        ctx.arc(0, 0, r*.5, Math.PI/6, Math.PI*2 - Math.PI/6, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        ctx.save();
        ctx.translate(x - y*.7,y + y/2.7);
        ctx.scale(2.1,.9);
        ctx.beginPath();
        ctx.arc(0, 0, r*.5, Math.PI/6, Math.PI*2 - Math.PI/6, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        ctx.save();
        ctx.translate(x - y*.65,y + y/2.4);
        ctx.scale(1.9,1);
        ctx.beginPath();
        ctx.arc(0, 0, r*.5, Math.PI/6, Math.PI*2 - Math.PI/6, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        
        break;
    }

    ctx.restore();
  },

  render: function(canvas, ctx, values){
    console.log(values.body);
    this.body(canvas, ctx, values.body);
    this.wing(canvas, ctx, values.wing);
    this.beak(canvas, ctx, values.beak);
  }
}