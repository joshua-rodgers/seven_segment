# seven_segment
Emulation of a seven segment display.
## 11/10/2019 10:09AM
Looked up a datasheet for a seven segment display to get information about 
their implementation. It looks like I'll be doing a common anode display (only just learning what that means).
To start I'm just trying to get something on the screen by building the 
basic class structure and defining the methods/functions that draw the body
of the display to the canvas element. This first commit was me testing whether 
my vision of the model is valid, the `Seven_segment` class' `init_display()`
method calls the _private_ function `draw_display()` that draws the 'segments'
to the canvas in their respective positions. One of the things this first commits tests out
is the validity of the data model of each of the segments. To begin, I will implement 
the segements such that they may be simply be turned on and off by calling a method, 
passing in a value to represent. However, the ultimate goal is to generalize the model 
into an actual emulation of the real-life component, exposing its pins and their states 
as the mechanism for controlling the display. I'm not sure how far I'll take this, 
possibly to actually emulating the flow of electricity and voltages. I do intend to 
implement a BCD encoder/decoder (not sure of the correct terminology yet) chip and 
driver to control it so I may revise the model as I go, generalizing it as necessary.
The hardest part so far has been getting something on the 'paper'. I had a bit of confusion 
with using `for( in )` in the form of not understanding what exactly was returned when 
iterating over a JS object, turns out its the key, only just the key, not the object even if
the key points to an object as I assumed. Once I had that sorted, I was on my way. I'm 
attempting to make the drawing operations as exstensible as possible, storing the lengths 
and widths of the segments as constants and making each segment a separate object. This 
will likely be generalized by defining a segment class and simply instantiating the segments with
their own values in a future version. Right now, I just needed the verbosity of this iteration 
to help me get started :smile:


