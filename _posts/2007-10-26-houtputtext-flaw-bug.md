---
layout: post
title:  "h:outputText flaw / bug ?"
date:   2007-10-26 10:00:00 +0100
categories: habari
---
<p>
I recently came across something that I can only describe as a flaw or a bug in the myFaces implementation of a tag. The tag in question is the <strong>h:outputText</strong> of the tomahawk myFaces tags. It seems like a straightforward tag as you look at it, or use it.</p>
<pre><code>&#60;h:outputText id="tagId"
	value="#{dna.project.projectPart.value}"
	converter="converters.valueConverter"/&#62;</code></pre>
<p>
What it renders is almost as simple:
</p>
<pre><code>&#60;span id="jsfGen:tagId"&#62;value&#60;/span&#62;</code></pre>
<p>Nothing to it, you might say. A simple way of putting data on a page, using a simple tag.
</p>
<p>But, if you have some sloppy coding and someone forgets to put an id on the tag, something weird happens</p>

<!--more-->

<h3>Problem</h3>
<p>The <strong>span</strong> surrounding the data, a simple html tag which you might use to style it according to some degree, simply disappears. So if you do this:</p>
<pre><code>&#60;h:outputText <span style="
	text-decoration: line-through;">id="tagId"</span>
	value="#{dna.project.projectPart.value}"
	converter="converters.valueConverter"/&#62;</code></pre>
<p>It leaves you with nothing more than this:</p>
<pre><code>value</code></pre><p>So what I hear you ask, the data is still there and that is true. But missing the span tag can cause serious trouble for the front ender how is styling you application. If you do not know that omitting the <strong>id</strong> causes the tag to render without a span, you have some serious searching ahead of you, as the missing id is the only thing that is different. In the example above it is easily spotted, but in real life, you often have to search through multiple lines of code in multiple xhtml documents, making it easy to overlook.</p><p>As I found it, it is kinda logical, as the output text tag only outputs text and nothing more. Only when it needs a tag to apply the id to, it renders one. But doing this results in unpredictable html rendering, where the styling or the javascript can be harmed as they both want a predictable result of html to address.</p>
<h3>Solution</h3>
<p>The quickest way to solve this problem in an existing project is to agree on <strong>Coding conventions</strong> in which you set that you always set an ID on h:outputText. By doing this, you will easily spot the mistakes and will be able to correct them.</p>
<p>What I propose is a very simple solution, rebuild the tag in a subtle manner so that it always renders the span. In that way we do not have unpredictable results in our html and everybody lives happily everafter...</p>
<h3>How?</h3>
<p>What I think is that rewriting the tag in order to always creates a span surrounding the data, leaves us with a more simple tag and should not need much work...</p><p>Now, I need to figure out how to rewrite a tag, anybody out there who can help me...</p>