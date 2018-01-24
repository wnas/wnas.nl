---
layout: post
title:  "css grid debugging"
date:   2005-12-6 10:00:00 +0100
categories: habari
---
If you have ever faced a challenge to create a page containing a complex layout with lots of elements. Say, a complex form.

Then you know how difficult it can be to get is pixel perfect.
My method is adding a div with a grid image in it. (a 10 x 10 pixels image with a point on one corner.)
here is the code needed...
(for moz/firefox, with ie hacks added.)
<code>
div.grid {
			background: url(opmaak/afb/grid.gif) 0 0;
			position: absolute;
			z-index: 100;
			top: 145px;
			bottom: 40px;
			left: 183px;
			right: 20px;
			_width: 800px;
			_height: 600px;
			opacity: 0.2;
			_filter:alpha(opacity=20);
		}
</code>