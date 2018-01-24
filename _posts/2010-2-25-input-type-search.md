---
layout: post
title:  "input type=search"
date:   2010-2-25 10:00:00 +0100
categories: habari
---
<p>In this site I use several html5 elements and attributes. One of them is <code>&#60;input type="<strong>search</strong>" /&#62;</code> which gives me (for instance) a search button on my Iphone. It degrades to an <em>text</em> kinda input so it's backwards compatible.</p><p>What it also does is look kinda ugly in safari, with rounded corners and a frigging shadow and so on.</p>
<dl class="images"><dt>Default rendering in safari 4 os x</dt><dd><img src="http://wnas.nl/files/input-search/default-search.png" alt="default rendering of search" /></dd><dt>Custom rendering</dt><dd><img src="http://wnas.nl/files/input-search/custom-search.png" alt="custom rendering of search" /></dd></dl>
<p> The way to render this is this one line of css:</p>
<pre><code>input[type="search"]{
  -webkit-appearance:textfield;
  /* textfield instead of searchbox */
  border: 1px solid #39c;
  /* and a border of course but that's not relevant :) */ 
}</code></pre> 
<p>But for now that's it, on simple line in your css and apple no longers controls the style of your search field and you can style it (semi) consistent over browsers. A complete list of webkit specific styles can be found <a href="http://qooxdoo.org/documentation/general/webkit_css_styles">on Qooxdoo.org</a>.</p>
<p><em>As I know, one disadvantage is that the search box does not longer appear as the default one in safari. But in my opinion the search box is not in usage as of now, so people are now more baffled by a strange box than they recognize the search box. In the future, however I think that this trick is no longer needed nor wanted.</em></p>