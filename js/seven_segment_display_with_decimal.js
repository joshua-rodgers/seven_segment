var canvas = document.getElementById("sim");
ctx = canvas.getContext("2d");

function Seven_segment_display_with_decimal(){
  var _SEG_WIDTH = 10;
  var _H_SEG_LEN = 130;
  var _V_SEG_LEN = 120;
  
  var _pin_array = [0, 0, 0, 0, 0, 0, 0, 0];
  var _valid_chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  
  var _update_button = document.getElementById("update_button");
  var _update_field = document.getElementById("input_field");
  var _error_msg = document.getElementById("error_msg");
  
  var _display_body = {
    _a_seg: {
      state: function(){return _pin_array[0]},
      x: 20,
      y: 10,
      width: _H_SEG_LEN,
      height: _SEG_WIDTH
    },
    _b_seg: {
      state: function(){return _pin_array[1]},
      x: 140,
      y: 25,
      width: _SEG_WIDTH,
      height: _V_SEG_LEN
    },
    _c_seg: {
      state: function(){return _pin_array[2]},
      x: 140,
      y: 150,
      width: _SEG_WIDTH,
      height:_V_SEG_LEN
    },
    _d_seg: {
      state: function(){return _pin_array[3]},
      x: 20,
      y: 275,
      width: _H_SEG_LEN,
      height: _SEG_WIDTH
    },
    _e_seg: {
      state: function(){return _pin_array[4]},
      x: 20,
      y: 150,
      width: _SEG_WIDTH,
      height: _V_SEG_LEN
    },
    _f_seg: {
      state: function(){return _pin_array[5]},
      x: 20,
      y: 25,
      width: _SEG_WIDTH,
      height: _V_SEG_LEN
    },
    _g_seg: {
      state: function(){return _pin_array[6]},
      x: 35,
      y: 140,
      width: _H_SEG_LEN - 30,
      height: _SEG_WIDTH
    },
    _dp_seg: {
      state: function(){return _pin_array[7]},
      x: 170,
      y: 275,
      width: 10,
      height: 10
    }
  };
  
  var _char_dictionary = {
	"0": [1, 1, 1, 1, 1, 1, 0, 0],
	"1": [0, 1, 1, 0, 0, 0, 0, 0],
	"2": [1, 1, 0, 1, 1, 0, 1, 0],
	"3": [1, 1, 1, 1, 0, 0, 1, 0],
	"4": [0, 1, 1, 0, 0, 1, 1, 0],
	"5": [1, 0, 1, 1, 0, 1, 1, 0],
	"6": [1, 0, 1, 1, 1, 1, 1, 0],
	"7": [1, 1, 1, 0, 0, 0, 0, 0],
	"8": [1, 1, 1, 1, 1, 1, 1, 0],
	"9": [1, 1, 1, 0, 0, 1, 1, 0],
	"A": [1, 1, 1, 0, 1, 1, 1, 0],
	"B": [0, 0, 1, 1, 1, 1, 1, 0],
	"C": [0, 0, 0, 1, 1, 0, 1, 0],
	"D": [0, 1, 1, 1, 1, 0, 1, 0],
	"E": [1, 0, 0, 1, 1, 1, 1, 0],
	"F": [1, 0, 0, 0, 1, 1, 1, 0]
  }
  
  var _draw_display = function(){
    for(seg in _display_body){
      //console.log(seg);
      if(_display_body[seg].state() == 1){
        //console.log("here");
        ctx.fillStyle = "limegreen";
      }else {
      	ctx.fillStyle = "lightgray";
      }
      ctx.fillRect(_display_body[seg].x, _display_body[seg].y, _display_body[seg].width, _display_body[seg].height);
      //console.log(_display_body[seg].x);
    }
  }
  
  this.init_display = function(){
    _draw_display();
    _update_button.addEventListener('click', function(){ _update(); });
  }
  
  var _update = function(){
    if(_valid_chars.includes(_update_field.value)){
      _pin_array = _char_dictionary[_update_field.value];
    }else {
      _error_msg.innerText = "Invalid Character.";
    }
    
    _draw_display();
    //console.log(_pin_array);
    //console.log(_display_body["_b_seg"].state());
  }
}
