---
layout: post
title:  "HTML5 safe usage 2"
date:   2010-9-8 10:00:00 +0100
categories: habari
---
<h1>Input elements</h1>
<p>Input elements are interesting enough for a much longer and more extensive post than I have time for now, but here is one little tidbit I haven't read anywhere else. If you use an unsupported input type in a browser it falls back to text, <del>what I didn't knew is that reading the type with JavaScript fails also</del><ins> Turns out, I was wrong, see <a href="http://www.wnas.nl/html5-safe-usage-3">here</a> who to detect it...</ins>. CSS attribute selectors are fine, only no JavaScript detection. See for yourself below...</p>
<form id="input-test" action="http://wnas.nl">
<div><label for="f1">Text input:</label><input id="f1" type="text" /></div>
<div><label for="pw">Password input:</label><input id="pw" type="password" value="password" /></div>
<div><label for="f2">Radio input:</label><input id="f2" type="radio" /></div>
<div><label for="f3">Checkbox input:</label><input id="f3" type="checkbox" /></div>
<div><label for="f6">Input Button:</label> <input id="f6" type="button" value="button text" /></div>
<div><label for="f7">Email field:</label><input id="f7" type="email" /></div>
<div><label for="f8">URL field:</label><input id="f8" type="url" /></div>
<div><label for="f9">range field:</label><input id="f9" type="range" /></div>
<div><label for="f10">number field:</label><input id="f10" type="number" /></div>
<div><label for="f11">week field:</label><input id="f11" type="week" value="1970-W01" /></div>
<div><label for="f12">month field:</label><input id="f12" type="month" /></div>
<div><label for="f13">time field:</label><input id="f13" type="time" /></div>
<div><label for="f14">date field:</label><input id="f14" type="date" /></div>
<div><label for="f15">date-time local field:</label><input id="f15" type="datetime-local" /></div>
<div><label for="f16">date-time field:</label><input id="f16" type="datetime" /></div>
<div><label for="f17">search field:</label><input id="f17" type="search" /></div>
<div><label for="f18">telephone field:</label><input id="f18" type="tel" /></div>
<div><label for="f19">color field:</label><input id="f19" type="color" /></div>
<div><input type="submit" /></div>
</form>
<p>Go and compare it with different browsers, just to see which does what.</p>