<!-- This lesson was taken from a workshop by Cameron Gale (mentor for DM13).
https://github.com/CameronEldonGale -->

scrollTop can be used to achieve parallax effect by watching for scroll events
and then moving layers at speeds that are based on how far the user has scrolled
down the page. By creating different formulas for each layer, you can make each
layer travel at a different speed, creating the illusion of parallax.

This repo has some CSS styling, but none of it is essential to this method.
The effect is achieved entirely through the jQuery code in parallax.js.
jQuery watches for a scroll event, then changes styles based on amount of scroll.

The steps (after setting up the files and bringing in jQuery):
  1. Use a jQuery selector to select the window, then call the .scroll method.
  2. Capture the scrollTop value in a variable. (This value is equal to how far
     down the page the user has scrolled.)
  3. Use a jQuery selector and the .css method to change an element's CSS.
     Don't forget to incorporate value stored in variable when changing CSS.

scrollTop is good for more than parallax effects. It can be used for any CSS
changes you wish to make in situations where scrolling alters things. You
can make elements fade in or out of view as you scroll, for example, or you
make it so elements spin as you scroll. In this repository, the jQuery causes
Vader to spin while the tree branches slide up at different speeds.
