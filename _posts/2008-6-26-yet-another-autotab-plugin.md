---
layout: post
title:  "jQuery plugin - autotab"
date:   2008-6-26 10:00:00 +0100
categories: habari
---
<h3>Autotab</h3>
<p>I recently came across a itch in jquery plugins. They are too well written, with tons of attributes and files to edit in order to configure them.
I don't want that, so I wrote a simple plug in just for auto tab.</p>
<h3>HTML</h3>
<p>The itch was caused by a project where the client wanted three fields for the date and wanted autotab from day to month to year. After that the user should tab himself further... I searched for a plugin as I am a lazy bastard, but the plugins available where too much for me. Some even had me giving id's to the input fields, something that I could not do as they are placed by jsf that <em>generates</em> id's for you. So I wanted a simple solution based on my situation, which is not an uncommon one I think.</p>
<p>I have three input fields on the page, with maxlength attributes so that the user could not enter wrong dates.</p><pre><code>&#60;input type="text" maxlength="2 /&#62;
&#60;input type="text" maxlength="2" /&#62;
&#60;input type="text" maxlength="4" /&#62;
</code></pre>
<p>As a user would want to have autotab on the page they would have to change the html to have a class of <code> autotab </code> on the input's that he wanted to have autotab, like this:</p><pre><code>&#60;input type="text" maxlength="2" class="autotab" /&#62;
&#60;input type="text" maxlength="2" class="autotab" /&#62;
&#60;input type="text" maxlength="4" /&#62;
</code></pre>
<p>Note that we need the <strong>maxlength</strong> attribute to make this work. I will explain later why...</p>
<p>All a user has to do to use the plugin is, include jquery on your page and the plugin, than write in you own code in the document ready function:</p>
<pre><code>jQuery(document).ready(function() {
  jQuery('input.autotab').autotab();
});</code></pre>
<strong>Presto</strong> you are done, let the script take over and relax.
<h3>the plugin</h3>
<p>The plugin works like this, first we define that it is a plug in, something that I picked up reading this article.</p>
<pre><code>
jQuery.fn.autotab = function (){
</code></pre>
<p>Then we set it up to trigger on key up, as we need to measure the amount of code entered <em>after</em> his input.</p><pre><code> jQuery(this).keyup(function(e){</code></pre>
<p>We then set up a couple of keys to be ignored as they only get in the way. For instance, if you let the tab key trigger the function it will not let you enter the field using shift tab. So no undo for you buddy...</p>
<pre><code>switch(e.keyCode){
    // ignore the following keys
      case 9: // tab
        return false;
      case 16: // shift
        return false;
      case 20: // capslock
        return false;</code></pre><p>Once we have that sorted, we can decide it is time for action, so we will begin</p>
      <pre><code>default: // any other keyup actions will trigger </code></pre>
<p>First off we read out the maxlength of the targeted element and put it into a variable</p>
        <pre><code>var maxlength = jQuery(this).attr('maxlength');
        // get maxlength value</code></pre><p>Once we have the maximum of characters, we seek the current amount entered. (here is why we do key<strong>up</strong> instead of key<strong>down</strong>.)</p><pre><code>var inputlength = jQuery(this).val().length;
        // get the length of the text</code></pre><p>If the amount of characters is equal or more than the max length</p>
        <pre><code>if ( inputlength &#62;= maxlength ){
          // if the text is equal or more
          // than the max length</code></pre>
<p>Set the focus on the next field</p>
          <pre><code>jQuery(this).next('input[type="text"]').focus();
          // set focus to the next text field</code></pre>
<h3>Enjoy</h3>
<p>Go and get the code <a href="http://www.wnas.nl/js/plugins/autotab/autotab.js" title="autotab.js">with comments</a> here or <a href="http://www.wnas.nl/js/plugins/autotab/autotab.min.js" title="autotab.min.js">minified</a>, let me know what you think of it...</p>
<p><em>And thanks for reading this far... :)</em></p>

<!-- Technorati Tags Start -->
<p>Technorati Tags:
<a href="http://technorati.com/tag/javascript" rel="tag">javascript</a>, <a href="http://technorati.com/tag/jquery" rel="tag">jquery</a>, <a href="http://technorati.com/tag/userinterfacedesign" rel="tag">userinterfacedesign</a>
</p>
<!-- Technorati Tags End -->