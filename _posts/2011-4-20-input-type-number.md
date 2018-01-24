---
layout: post
title:  "input type number"
date:   2011-4-20 10:00:00 +0100
categories: habari
---
<p>If you use the new html5 input types, like I do, you may encounter some differences in the way browsers style them. I wrote about the search field <a href="http://wnas.nl/input-type-search">last year</a>. Today I came across the input type="number". In safari, chrome and opera there appears a spinner beside it, a spinner that the client didn't want.</p><p><input type="number"></p> <p>So to remove that, we go:</p>
<pre><code>input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}</code></pre><p>And <strong>presto</strong> we're done. Now the input looks like a text field in chrome and safari.</p><p><input type="number" id="nospinner"></p><style>#nospinner::-webkit-inner-spin-button,
#nospinner::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}</style><p>The only loose end we have now is Opera, if anyone knows of a trick to remove the spinner there, I would love to hear it.</p>