---
layout: post
title:  "Javascript coding suggestions"
date:   2010-7-23 10:00:00 +0100
categories: habari
---
<p><img style="float: right; margin-right: -100px;" title="crockford.gif" src="http://wnas.nl/user/files/crockford_20100723081834.gif" border="0" alt="crockford" width="100" height="129" /> I am now working on some coding conventions for use at one of my clients. Having done some work on the HTML and CSS ones, I recently started with the javascript one. As I was working on it, I looked at the work done by others, like <a href="http://javascript.crockford.com/code.html">Douglas</a> <a href="http://developer.yahoo.com/yui/theater/video.php?v=crockonjs-3">Crockford</a>. Some of my co-workers suggested that we did this:</p>
<pre><code>var nameSpace = (function () {
    // declare all of your var's before using them..
	var config, init,x,doStuff;
    config = {
		a : 'a'
	};
	init = function ( arg ) {
		doStuff( arg );
	};
	x = '36';
	doStuff = function ( arg ) {
		// dostuff﻿
	};
	return {
		init:init
	};
}());</code></p></pre>
<p>While I initially agreed with this, as it seems nice and neat, I spotted a problem with it when it gets big. As you get a really big script and more people working on it, chances are that you will get someone to forget to declare a var in the beginning of the function, hence making it <strong>global</strong>.<br />Like this:</p>
<pre><code>var nameSpace = (function () {
	// declare all of your var's before using them..
	var config, init,x,doStuff;
	<strong>// we forgot to add <em>doMoreStuff</em></strong><br>
	config = {
		a : 'a'
	};
	init = function ( arg ) {
		doStuff( arg );
	};
	x = '36';
	doStuff = function ( arg ) {
		// dostuff
		doMoreStuff();
	};
	<strong style="color: red;">// doMoreStuff is <em>global</em><br>
	doMoreStuff = function () {
		alert( config.b );
	};</strong>
	return {
		init:init
	};
}());</code></p></pre>
<p>So I came up with a (not so revolutionary) way of avoiding this and I am curious what you think of it?<br />It goes like this:</p>
<pre><code>var nameSpace = (function () {
	// start with var to avoid global variables
	var config = {
		a : 'a',
		b : 'b'
	},
	// continue with a comma to stay in the same var declaration.
		init = function ( arg ) {
		doStuff( arg );
	},
		x = '3',
		doStuff = function ( arg ) {
		// dostuff﻿
	};
	// end with a semi colon.
	return {
		init:init
	};
}());</code></pre>
<p>I think that this has the advantage that when someone else continues with this code he can extend it easily, while not accidentally introducing globlal variables...</p>
<pre><code>var nameSpace = (function () {
	// start with var to avoid global variables
	var config = {
		a : 'a',
		b : 'b'
	},
	// continue with a comma to stay in the same var declaration.
		init = function ( arg ) {
		doStuff( arg );
	},
		x = '3',
		doStuff = function ( arg ) {
		// doStuff
	},
	<strong style="color: green;">// if you add a new var it's not global<br>
		doMoreStuff = function (){
		// do more stuff
	}</strong>;
	// end with a semi colon.
	return {
		init:init
	};
}());</code></pre>
<p>What do you think, is this a good way to structure your code or am I missing something?</p>