---
layout: post
title:  "jQuery UI slider"
date:   2008-7-16 10:00:00 +0100
categories: habari
---
<p>The past few weeks I had a lot of fun playing with <a href="http://ui.jquery.com">jQuery UI</a> for a client. They wanted to replace some elements in an application, sliders and such, with a more accessible solution. For that I turned to jQuery UI, as I had previously introduced <a href="http://jquery.com">jQuery</a> as the standard javascript library for them.</p><p>As I started to play with the code I couldn't helped but be impressed by the great work that has been done by the UI <a href="http://ui.jquery.com/about">team</a> on this project. But as I looked at it more closely I found some things that could be improved.</p>
<p>So here are some of my grieves with it and a possible way to solve them. I am going to concentrate on the slider ( <a href="http://docs.jquery.com/UI/Slider">docs</a> / <a href="http://dev.jquery.com/view/tags/ui/1.5b2/demos/ui.slider.html">demo</a> ), as it was with that widget that I started to notice some things missing.</p><p>The way you use it is in a true jquery fashion nice and unobtrusive, once you have included the correct javascript files (for that see the documentation), you just do:</p>
<pre><code>$("#slider").slider();</code></pre><p>And shazaam, <code>#slider</code> has turned into a slider, nice... But, what happens to the input that people provide...</p><p>This solution is nothing without javascript, so in my book it is a nono. I can not imagine that I could use this widget on my sony erikkson k800 phone. So accessible it is not, at least not in the way the demo shows us. And as most people will just copy and paste from demo's, most sliders will not be accessible.</p><p>So what you say, a slider can never be accessible, rubbish I say. Stick with me and I will show you a very simple way to make this accessible. <em>And in a few day I will put up some example sliders to accompany the code as suggested by <a href="http://twitter.com/danny_l">Danny Lagrouw.</a></em></p>





<!--more-->





<h3>Improvement</h3><p>First we will look at what a slider does, it provides a user the possibility to enter data. Whoa, a whole new concept... eh <strong>no</strong>.</p><p>Lets start with an simple <code>&#60; input type="text" /&#62;</code> that gives people a good opportunity to enter a value, no? But what about <a href="#steps">stepping</a> you say, that we can solve with a few <code>&#60; input type="radio" /&#62;</code>. All we have to do is write javascript that sends the value of the slider to the input and when the form is submitted, the server can sort it out.</p><p>If a user has no javascript a viable alternative is provided. So not only advantages on the user level, but did you notice that we just solved the data to server problem, in a way that requires us to write <strong>zero</strong> I admit it is boring but if you want your fancy interface to do something, it has to interface with the back-end as well.</p><p>So we start with the html, as that is the base for accessible solutions, we set up a free form slider. As we do this, we make sure that we create a fully functional option for everybody. That is, the purpose of the slider is to set a value.</p>
<pre><code>&#60;div class="slider free" id="slider"&#62;
  &#60;label for="text"&#62;
    label
  &#60;/label&#62;
  &#60;input type="text" id="text" /&#62;
&#60;/div&#62;</code></pre><p>As you see a nice and clean solution where data can be entered and processed. What we miss is the fancy slider, which we will create with javascript like this:</p>
<pre><code>
// add a slider container div
// add a slider handle to slider container
// place a span to recieve the value
// and add a class to the container
// find and set the input to readonly
jQuery('.slider')
  .append('&#60;div class="slideContainer"&#62; // br
      &#60;div class="ui-slider-handle""&#62; // br
      &#60;/div&#62; // br
    &#60;/div&#62; // br
    &#60;span class="value"&#62;&#60;/span&#62;') //br
  .addClass('sliding') // br
  .find('input').attr("readonly","readonly");
// linebreaks (br) added for readability</code></pre>
<p>There you have it, an <strong>accessible</strong> solution for a slider, simple as that.</p><p>But wait, what if I have 5 steps that I want people to choose from. That I cannot do, so your solution sucks and I still am stuck with a pure javascript solution says the sceptic (I know who you are...). Oke, the second one is a slider with steps for you.</p><p>First let us see what that is, it is simply a option you choose from a limited number of options isn't it. The html solution for this is really easy, <strong>radio buttons</strong>. So of we go with html</p>
<pre id="steps"><code>
&#60;div class="slider steps" id="slider2"&#62;
 &#60;fieldset class="radios"&#62;
   &#60;legend&#62;legend&#60;/legend&#62;
   &#60;input type="radio" name="radio" value="0" id="v0" /&#62;
   &#60;label for="v0"&#62;zero&#60;/label&#62;
   &#60;input type="radio" name="radio" value="1" id="v1" /&#62;
   &#60;label for="v1"&#62;one&#60;/label&#62;
   &#60;input type="radio" name="radio" value="2" id="v2" /&#62;
   &#60;label for="v2"&#62;two&#60;/label&#62;
   &#60;input type="radio" name="radio" value="3" id="v3" /&#62;
   &#60;label for="v3"&#62;three&#60;/label&#62;
   &#60;input type="radio" name="radio" value="4" id="v4" /&#62;
   &#60;label for="v4"&#62;four&#60;/label&#62;
 &#60;/fieldset&#62;
&#60;/div&#62;</code></pre><p>Just like that we have a viable and accessible solution in plain old semantic html, now for the javascript.</p>
<pre><code>var sliderSteps = {
 radiobuttons : ((jQuery(this) //br
   .find('input[type="radio"]') //br
   .length)-1) //br
   .toFixed(0),
   init : function(targ){
     sliderSteps.createSlider(targ);
     sliderSteps.set(targ)
   },
   set : function(targ){
     var w = (100/((sliderSteps.radiobuttons*1)+1));
     jQuery(targ) //br
       .find('label, .ui-slider-handle') //br
       .width(w+'%');
     },
     createSlider : function(targ){
     jQuery(targ).slider({
       // zoveel stappen als er radio button zijn...
       steps : sliderSteps.radiobuttons,
       change:function(e,ui){
         var x = jQuery(this).slider('value');
         var a = (x/100*((jQuery(this). //br
          find('input[type="radio"]').//br
          length)-1)).toFixed(0);
         // set the value somewhere...
         jQuery(this).find('.value').text(a);
         // check the radiobutton.
         var t = jQuery(this). //br
          find('input[@type="radio"]')[a];
         jQuery(t).attr('checked','true');
       }}
     );
   }
 }
 sliderSteps.init('#slider2.steps');
// linebreaks (br) added for readability
</code></pre>
<p>So there you have it, a nice clean and <strong>accessible</strong> slider solution for the folks at jquery ui to include in their demos. And for everybody else to look at and maybe even use. So have fun with it and let me know if you like it.</p><p><em>If you see any faults in the code please let me know, but as I am on holiday now, don't except me to rush...</em></p>
<p>Here is all the demo code zip file <a href="http://www.wnas.nl/files/jquery-ui-slider/wnslider.zip" title="wn.slider.zip">wn.slider.zip</a> for you to play with.</p>
