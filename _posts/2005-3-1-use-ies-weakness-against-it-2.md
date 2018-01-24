---
layout: post
title:  "Use IE's weakness against it!"
date:   2005-3-1 10:00:00 +0100
categories: habari
---
We all know that IE is the most popular browser (for the moment...) and we all know and hate all of its bugs and quirks.
What a lot of people do not know is how to use some bugs to solve others. I will show you how you can use IE's own bugs to solve other ones and still keep people with decent browsers happy...

For this case suppose that you have an element that display right in Firefox and wrong in IE.
You can than use the !important declaration to set the correct behaviour for FireFox and set the IE declaration below it. FireFox ignores the declaration below the !important as it is supposed to do, IE doesn't do anything with the !imporant attribute and uses the lowest declaration.

Here is a test case you can use to test this behaviour.
<code>.test {
  width: 100px !important; /* this is the behaviour Firefox uses */
	width: 300px; /* IE ignores the !important and uses this... */
	border: 25px solid #CCC;
}</code>

This was tested on IE 6.0 and firefox 0.9.1 on win xp.
And on safari, firefox, ie 5.0, netscape 7.2 and opera 7.5.4 on OS X.
<strong>Only IE on windows gets it wrong...</strong>

why oh why is the majority of the users using the wrong browser :(