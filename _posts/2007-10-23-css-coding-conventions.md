---
layout: post
title:  "CSS coding conventions / best practices"
date:   2007-10-23 10:00:00 +0100
categories: habari
---
CSS coding is easy and simple, people think. So you don't really need to think about it, people think. This is, as you may or may not know, wrong. In this piece I will tell you how I think you should think about CSS code, which first of all is real code, as in computer code.

I talk about it as real code, in contrast to <em>a nice styling trick</em>. It is a very valuable and necessary addition to the toolkit of anyone working with the front end of any website or web application. As it is more and more valuable, the need to professionalize this grows, hence my two cents, in the form of my own CSS coding conventions.

<!--more-->
<h3>Introduction</h3>
In my daily work I write and deal with a lot of html and css, sometimes from a lot of different parties, sometimes with a large team. These other parties vary in skill level and interest in html and css. In my own way I try to cope with that and some time ago, I started to sending the parties involved a piece of documentation, common enough in java development, the <strong>coding conventions</strong>. By doing I ensured that the code was always written more or less the same way, following the same rules. Most conventions are common enough, <em>use small-caps</em>, <em>use tabs set to four spaces to indent</em>, <em>place every selector on a seperate line</em> and more like that.

But a few are more abstract and in my opinion worth sharing. These describe the more global principles of good css developement. Here I will share some of my <em>conventions</em>, that I use daily and have been perfecting for quite some time now... No one of these are sacred and surely are open for <a href="#author">improvement</a>.
<h3>Start BIG</h3>
Begin with styling the main elements and then differentiate for the smaller elements. This will seem obvious, but it can prove quite a challenge, if you don't think your code through well enough.
<em>for instance;</em>

First set the padding and margin on the body element:
<pre><code>body {
	padding: 0;
	margin: 0;
}</code></pre>
And than set exceptions in smaller settings:
<pre><code>#content p {
	padding: 2px 6px;
}</code></pre>
Starting big also minimizes the need for code rewrites. When you define stuff like the width of elements, define these values as few times as possible. For instance, use 100% or automatically defined width for nested elements and let the width of the parent define that of it's children, this to ease maintanance.
<h3>END small</h3>
If you start big and end small, the further you dive into the DOM tree, the less code you should write. Use <a href="http://www.firebug.com/">firebug</a> to check you code, if you see a lot of striked through lines, you should rewrite and rethink you code. Please keep this in mind, especially if you use shorthand notation as it is tempting to do so quickly. But if you do, the need to re-specify something later on can be greater than needed.
<h3>Use <span title="shorthand">shrthnd</span></h3>
use shorthand notation when possible and appropiate see <a href="http://www.456bereastreet.com/">roger johansson</a> for an excellent <a href="http://www.456bereastreet.com/archive/200502/efficient_css_with_shorthand_properties/">article</a> on shorthand.
<em>do use when:</em>

<em>multiple declarations are necessary, like: </em>
<pre><code>
	padding: 6px 0 3px 12px;
	background: url(foo.gif) no-repeat 6px 12px #fff;
	also use short hand to write less code:
	padding: 0; instead of padding: 0 0 0 0;</code></pre>
<em>
do not use when only one value is to be set:</em>
<pre><code>
	padding-top: 4px;
	background-color: #CCC;</code></pre>
<h3>Prefix</h3>
in order to use and not get tangled by the CASCADE of css, use a prefix for different sections. For different sections start declarations with a starting selector of #foo, so they do not influence stuff outside it. With other words, using a 'prefix' lets you use the CASCADE, without being bothered by it too much. Nice for the ones among us who struggle with specifity...

Sections who use this technique will be marked with <strong>'PREFIXED'</strong> followed by the selector used as a prefix.
This section should be marked as such:
<pre><code>/*
	PREFIXED #foo
	comment that describes the section
*/
#foo {
	do: something;
}</code></pre>
Prefixed sections should end with;
<pre><code>
/*
	/PREFIXED #foo
*/</code></pre>
This way, the scope of the prefix is obvious. The start of the prefix is also the place to put comment about the section you are describing. The more you comment, the better it is maintainable. We stript the css of comment and such before production with cocoon, so go wild :). To easily spot your sections, you can now search for <em>PREFIXED</em>, or you can choose to indent your prefixed sections heavily to help you spot them in your code.
<h3>Semantic coding</h3>
This one I am going to give you is the most important one and it far supersedes it's initial meaning. It should influence the way you write your (x)html and javascript, as it forces you to think about the whole of your code and not only the css side of it...

It even has consequences on the very back-end of your application or site, as even the jsf or .NET code should be structured with this in mind. Be prepared to some heavy arguments over this one, as you will be stepping on someone elses toes.

The most superficial ones are in simple things like naming conventions, but those could provide an ample challenge, if you just started thinking this way. Avoid classnames and ID's that describe how things should look, always seek for names that describe what an element does. The visual aspect of things tend to change more often than the functional aspects.
<em>So do use names like:</em>
<pre><code>#content, .articleIntroduction and so on.</code></pre>
Do NOT use names like:
<pre><code>
#column456px, .blackLink and such bad ones.</code></pre>
Be very mindful of these rules, as it is easy to stray from the straight path...
<h3>Future proof</h3>
When writing css, do not be hindered by older browsers, use <a href="http://www.w3.org/TR/CSS21/">CSS 2.1</a> or even <a href="http://www.w3.org/Style/CSS/current-work">CSS 3</a> when appropiate. To accommodate 'older' browsers (ie 6 and below) write specific style-sheets that should be included using conditional comments. In this way we can be sure that future browsers are supported and older browsers not left out. Please be careful of maintenance pit-falls, as writing too much code to work around a (for instance) 'adjacent sibling selector' is not always a viable solution and should be decided on a case by case basis.

Even using javascript to resolve browser inabilities is something to be decided with caution, as there is no clear line between the good and the bad way to do this...

What I mean, is using a small script to select last children the right way when using it for small elements, or is there a certain size you should not exceed? If there is, is it set to 5 or 50 elements, I don't know. You should, in my opinion, rather use class-names set by your back-end and avoid the infamous <em>flash of un-styled content</em> which you will notice if you depend on javascript to much. Again, this decision you will have to make on a case per case basis.
<h3>Mind the GAP</h3>
When writing code, please comment thoroughly and think your logic through. In time your code will be maintained by someone else, who may or may not have your skills and knowledge. To help ease the transition, comment excessivly and please cite freely of the sources you use to reach your conclusions.

Follow the standards of the <a href="http://www.w3.org/">w3c</a> and describe when and WHY you use a 'hack' (or patch). Make sure that your code is valid css and html. If you have to write an invalid section, please comment on the why and how.
<h3>Afterthought</h3>
None of the first ones have any influence on the working of the code and can be easily solved by agreeing on a similar tool for coding. These rules, or guidelines, only have influence on the appearance of the code, not the working of it. Others mainly deal with how you structure your code ,ease maintenance or even speed things up in a browser.

The most important thing however is that if you work with more people on a project, you will need to communicate. As none of those conventions are any good, if not all of your team members comply with them.

This is especially true, if you have different people working on different sections of the site or application. If these people all work following the same conventions, you can have a team that is more than the sum of it's parts. This is because you have more freedom in self-set limitations, as it frees you do only think about the new problems, that inevitably will arise, not about inventing the wheel again.