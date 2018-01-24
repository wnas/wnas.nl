---
layout: post
title:  "Text rotation in css"
date:   2009-7-30 10:00:00 +0100
categories: habari
---
<p>a nice article by <a href="snook.ca">Jonathan Snook</a> on <strong>Cross browser</strong> text rotation. Please go and read it the  <a href="http://snook.ca/archives/html_and_css/css-text-rotation">full article</a> with examples and stuff.</p></
<p>All the needed code is here:</p>
<h4>HTML</h4>

```
&#60;div class="example-date"&#62;
  &#60;span class="day"&#62;31&#60;/span&#62;
  &#60;span class="month"&#62;July&#60;/span&#62;
  &#60;span class="year"&#62;2009&#60;/span&#62;
&#60;/div&#62;
```
<h4>CSS</h4>
```
-webkit-transform: rotate(-90deg);
-moz-transform: rotate(-90deg);
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
```
