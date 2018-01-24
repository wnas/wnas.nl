---
layout: post
title:  "w3c validator broken"
date:   2007-1-12 10:00:00 +0100
categories: habari
---
Just a short question today.

Is the <a title="w3c html validator" href="http://validator.w3.org/">W3C html validator</a> broken? Today, I got a piece of code a jsp tag is rendering for a results table. It contains a tfoot for some information that is supposed to go below the results, so it is semanticly  correct. But according to the w3c validator it isn't valid HTML...<!--more-->

The code is as follows:

<code>
&#60;table&#62;
&#60;thead&#62;
&#60;tr&#62;&#60;th&#62;header&#60;/th&#62;&#60;/tr&#62;
&#60;/thead&#62;
&#60;tbody&#62;
&#60;tr&#62;&#60;td&#62;results&#60;/td&#62;&#60;/tr&#62;
&#60;/tbody&#62;
&#60;tfoot&#62;
&#60;tr&#62;&#60;td&#62;results&#60;/td&#62;&#60;/tr&#62;
&#60;/tfoot&#62;
&#60;/table&#62;
</code>

Yet the message I get from the (#$%@) validator is that is not allowed there. After some browsing I came up with a solution which suprised me and maybe will be of some use for others...The code above is indeed not as valid as it may seem. The tfoot is supposed to go after the thead and before the tbody. Having read the section of the w3c <a title="table specification" href="http://www.w3.org/TR/html4/struct/tables.html">specifications</a> about it, it does makes sense.

<em><a class="noxref" href="http://www.w3.org/TR/html4/struct/tables.html#edef-TFOOT"><samp class="einst"> TFOOT</samp></a> must appear before <a class="noxref" href="http://www.w3.org/TR/html4/struct/tables.html#edef-TBODY"><samp class="einst">TBODY</samp></a> within a <a class="noxref" href="http://www.w3.org/TR/html4/struct/tables.html#edef-TABLE"><samp class="einst">TABLE</samp></a> definition so that user agents can render the foot before receiving all of the (potentially numerous) rows of data.</em>

So to conclude, after more than 10 years of web development, you can still learn something.

In the future I (and hopefully you too) will mark up my tables like this

<code>
&#60;table&#62;
&#60;thead&#62;
&#60;tr&#62;&#60;th&#62;header&#60;/th&#62;&#60;/tr&#62;
&#60;/thead&#62;
&#60;tfoot&#62;
&#60;tr&#62;&#60;td&#62;results&#60;/td&#62;&#60;/tr&#62;
&#60;/tfoot&#62;
&#60;tbody&#62;
&#60;tr&#62;&#60;td&#62;results&#60;/td&#62;&#60;/tr&#62;
&#60;/tbody&#62;
&#60;/table&#62;
</code>

I hope this was helpfull for all of my readers...