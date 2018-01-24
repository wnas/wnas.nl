---
layout: post
title:  "using javascript to plug holes in the dom (part 1)"
date:   2006-8-15 10:00:00 +0100
categories: habari
---
oke, I will start with an excuse to jeremy keith, after outright stealing his lecture title for an somewhat lesser (quality) article, but I am trying... But his lecture gave me inspiration to give you a series of small tricks on how to use 'advanced' css selectors together with javascript snippets on how to make it work in IE..

First of, <strong>last child selectors</strong>.

Sometimes you have to put a special emphasis on something like say a last list item. With good css you would do something like this...
<pre>#foo li:last-child {
do: something;
}</pre>
but wait, I hear you say, IE doesn't support last-child, so I can't use it. No, but now javascript comes to the rescue!

After hearing the great <a title="adactio" href="http://adactio.com/">jeremy keith</a> speak on javascript and how it is <a title="podcast" href="http://www.vivabit.com/atmedia2006/blog/index.php/jeremy-keith-using-dom-scripting-to-plug-holes-in-css-podcast/">good for you</a>, I decided to take on the dom my self. After all, I have been frustrated by the lack of standards support in IE for a long time now. Time to strike back.

so javascript to the rescue.
<pre>function lastListItem () {
var k = document.getElementById('foo');
if (k) {
var last = k.lastChild;
last.className += "InExLIlast";
}
}</pre>
all we have to do now is extend our style sheet with the ie className, which we have given a prefix to distinguise it from the normal (read correct) css classes. So our css becomes:
<pre>#foo li.InExLIlast,  #foo li:last-child {
do: something;
}</pre>
<strong>Update</strong>

Kevin, in response to your question, the function is called in the following way.
<pre>function include() {
lastListItem()
someOtherFunction()
}
window.attachEvent("onload", include);</pre>
There you go, one more trick up your sleeve.

If you have any comments, questions or something like that let me know.