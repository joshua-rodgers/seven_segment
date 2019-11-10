var canvas = document.getElementById("sim");
ctx = canvas.getContext("2d");

function Seven_segment(){
  var _SEG_WIDTH = 10;
  var _H_SEG_LEN = 100;
  var _V_SEG_LEN = 130;
  
  var _display_body = {
    _a_seg: {
      state: 0,
      x: 20,
      y: 10,
      width: _H_SEG_LEN,
      height: _SEG_WIDTH
    },
    _b_seg: {
      state: 0,
      x: 110,
      y: 10,
      width: _SEG_WIDTH,
      height: _V_SEG_LEN
    },
    _c_seg: {
      state: 0,
      x: 110,
      y: 140,
      width: _SEG_WIDTH,
      height:_V_SEG_LEN
    }
  };
  //var _a_seg = 0;
  //var _b_seg = 0;
  //var _c_seg = 0;
  var _d_seg = 0;
  var _e_seg = 0;
  var _f_seg = 0;
  var _g_seg = 0;
  
  this.init_display = function(){
    _draw_display();
  }
  
  var _draw_display = function(){
    
    for(seg in _display_body){
      ctx.strokeRect(_display_body[seg].x, _display_body[seg].y, _display_body[seg].width, _display_body[seg].height);
      //console.log(_display_body[seg].x);
    }
  }
}
