---
layout: post
title:  "another jQuery plugin"
date:   2010-1-11 10:00:00 +0100
categories: habari
---
<p>A nice and small plugin to create a semanticly step list.</p>
<h3>Javascript</h3>
```
(function($) {
  $.fn.extend({
    steps : function() {
      $(this).find('li').each( function ( i ){
        $(this).prepend('&#60;span class="step"&#62;'+(i+1)+'&#60;/span&#62;');
      })
    }
  });
})(jQuery);

$('ol.steps').steps();
```
<h3>CSS</h3>

```
ol.steps li {
  float: left;
  padding: 5px;
}
ol.steps li span.step {
  border: 1px solid red;
  -webkit-border-radius: 20px;
  -moz-border-radius: 10px;
  line-height:18px;
  width: 20px;
  height:20px;
  margin-right: 5px;
  display:inline-block;
  text-align:center;
  color:#fff;
  font-weight:bold;
  background-color:#f00;
}
```
<img src="http://media.tumblr.com/tumblr_kw3qkxGZhh1qz6slb.png" alt="example of steps in action">
