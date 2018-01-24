---
layout: post
title:  "MAX-WIDTH and flexible layout with short lines [usability, accessibility]"
date:   2005-10-16 10:00:00 +0100
categories: habari
---
<a href="http://www.smackthemouse.com/20031007#h22">MAX-WIDTH and flexible layout with short lines [usability, accessibility]</a>
function maxWidthIE()
{
var agt=navigator.userAgent.toLowerCase();
var is_ie = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
if (is_ie == true)
{
if(document.getElementsByTagName)
{
window.onresize = new Function("window.location.reload()")
var divs = document.getElementsByTagName("div");
for (var i=0; i<divs .length; i  )
{
var div = divs[i];
if (div.getAttribute("id").substring(0,2) == "ie")
{
var maxPix = div.getAttribute("id").substring(2,4) * 16;
var maxWidth = div.getAttribute("id").substring(2,4)
var width;
if (document.body.clientWidth > (maxPix/12) * parseInt(document.body.currentStyle.fontSize))
{
width = maxWidth   "em";
}
else
{
width = "auto";
}
div.style.width = width;
}
}
}
}
}</divs>