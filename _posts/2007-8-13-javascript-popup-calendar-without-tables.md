---
layout: post
title:  "Javascript popup calendar without tables."
date:   2007-8-13 10:00:00 +0100
categories: habari
---
<p>The last couple of years I have been using other people's JavaScript popup calendar's, for use in different projects. Almost all of them did the job nicely, but they all had a disadvantage. All of them used tables to layout the popup calendar, something that seems logical if you see the layout. But it isn't, a calendar is not tabular data, it is a simple list...<br />So I went out and created a different rendering method...</p>
<!--more-->

<p>To be honest, that was about everything me and a colleague (eric de vries) did. We based our calendar on the fine work by Matt Kruse that you can find <a href="http://www.mattkruse.com/javascript/calendarpopup/">here</a>. A couple of thing were off and those we added and changed.</p><p>We for instance were obliged to show three different fields, one for the days, one for the months and the last on for the years. Those had to followed by an icon of a calendar, that should popup a calendar field where our users could visually select a date.</p><p>The trouble we had with this set up was that is just wasn't semantically sound. Especially if javascript was turned of for instance... We had to render three input fields, which had the purpose to collect a simple date. We had to render an icon, that could not work without javascript. Our solution, dom-scripting.</p><p>We start out with just one input field in our jsf code, simply hooked with a class dateField, like this:</p><code>&#60;input type="text" class="dateField" id="someId" /&#62;</code><p>With that as a starting point we where semantically sound, a user without javascript could see a simple text field where he can input a date and send it back to the server to be processed. But with javascript a whole different interface presents itself...</p><p>We take the input field allready present and use its class of dateField to act as a hook for our javascript...</p><p><strong>Take a look at the finished result at <a href="http://www.wnas.nl/wp-content/uploads/2007/08/calendar/Contact.html">this</a> page and if you come back I will show you what the (only) interesting bit of the code is...</strong></p><p>Welcome back, I hope that you liked what you saw, the real interesting is this one bit...</p><pre><code>function CreateCalendar(element) {
	var html = '\
		&#60;input type="text" class="datum dag autoTab" value="DD" maxLength="2" /&#62;\
        &#60;input type="text" class="datum maand autoTab" value="MM" maxLength="2" /&#62;\
        &#60;input type="text" class="datum jaar" value="JJJJ" maxLenght="4" /&#62;\
		&#60;span class="calendarTrigger"&#62;Selecteer datum&#60;/span&#62;\
		&#60;div class="calendar hidetrue"&#62;\
			&#60;div class="header"&#62;\
				&#60;ul&#62;\
					&#60;li class="back"&#62;&gt;&#60;/li&#62;\
					&#60;li class="forward"&#62;&lt;&#60;/li&#62;\
					&#60;li class="month"&#62;\
						&#60;span&#62;&#60;/span&#62;\
						&#60;ol class="month-select"&#62;\
							&#60;li&#62;januari&#60;/li&#62;\
							&#60;li&#62;februari&#60;/li&#62;\
							&#60;li&#62;maart&#60;/li&#62;\
							&#60;li&#62;april&#60;/li&#62;\
							&#60;li&#62;mei&#60;/li&#62;\
							&#60;li&#62;juni&#60;/li&#62;\
							&#60;li&#62;juli&#60;/li&#62;\
							&#60;li&#62;augustus&#60;/li&#62;\
							&#60;li&#62;september&#60;/li&#62;\
							&#60;li&#62;oktober&#60;/li&#62;\
							&#60;li&#62;november&#60;/li&#62;\
							&#60;li&#62;december&#60;/li&#62;\
						&#60;/ol&#62;\
					&#60;/li&#62;\
					&#60;li class="year"&#62;\
						&#60;span&#62;&#60;/span&#62;\
						&#60;ol class="year-select"&#62;\
							&#60;li class="previous"&#62;-&#60;/li&#62;\
							&#60;li class="years"&#62;\
								&#60;ol class="scroller"&#62;\
									&#60;li&#62;&#60;/li&#62;\
									&#60;li&#62;&#60;/li&#62;\
									&#60;li&#62;&#60;/li&#62;\
									&#60;li&#62;&#60;/li&#62;\
									&#60;li&#62;&#60;/li&#62;\
									&#60;li&#62;&#60;/li&#62;\
									&#60;li&#62;&#60;/li&#62;\
								&#60;/ol&#62;\
							&#60;li class="next"&#62;+&#60;/li&#62;\
						&#60;/ol&#62;\
					&#60;/li&#62;\
				&#60;/ul&#62;\
				&#60;span class="close"&#62;sluit kalender&#60;/span&#62;\
			&#60;/div&#62;\
			&#60;div class="body"&#62;\
				&#60;ol class="weeknumbers"&#62;&#60;/ol&#62;\
				&#60;ol class="weekdays"&#62;\
					&#60;li&#62;ma&#60;/li&#62;\
					&#60;li&#62;di&#60;/li&#62;\
					&#60;li&#62;wo&#60;/li&#62;\
					&#60;li&#62;do&#60;/li&#62;\
					&#60;li&#62;vr&#60;/li&#62;\
					&#60;li&#62;za&#60;/li&#62;\
					&#60;li&#62;zo&#60;/li&#62;\
				&#60;/ol&#62;\
				&#60;ol class="days"&#62;&#60;/ol&#62;\
			&#60;/div&#62;\
			&#60;div class="footer"&#62;\
				Vandaag is het &#60;span class="today-link"&#62;&#60;/span&#62;\
			&#60;/div&#62;\
		&#60;/div&#62;';
	element.innerHTML += html;
	return element;
}
</code></pre><p>All of the enriched content is being generated with javascript with no presentation mixed in. All of that is being done in the css.</p><pre><code>.hidetrue {
	display: none;
}
input {
	border: 1px solid #CCC;
}
label, input {
	float: left;
	clear: none;
}
label {
	width: 150px;
}
.dag,
.maand {
	width: 24px;
}
.jaar {
	width: 48px;
}
/*
	trigger voor de calendar
*/
span.calendarTrigger {
	float: left;
	clear: none;
	overflow: hidden!important;
	height: 20px;
	width: 20px;
	text-indent: 20px;
	line-height: 20px;
	background: url(../img/calendar.png) no-repeat 2px 0;
}
/*
	PREFIXED

	.calendar
*/
.calendar {
    border :1px solid #002280;
	font-size: 10px;
	font-family: verdana, arial, sans-serif;
	position: absolute;
	font-size: 10px;
	background-color: #FFF;
}
div.calendar,
div.calendar div,
.persoonsgegevens fieldset div.calendar {
	padding: 0;
	margin: 0;
}
div.calendar,
.persoonsgegevens fieldset div.calendar {
	width: 200px;
}
.persoonsgegevens fieldset div.calendar {
	margin-left: 220px;
}
.persoonsgegevens fieldset div.calendar span {
	float: none;
}
.calendar li {
    list-style: none;
	float: left;
	clear: none;
}
.calendar li,
.calendar ul,
.calendar ol {
	padding: 0;
	margin: 0;
}
.calendar .header,
.calendar .body,
.calendar .footer {
    float: left;
	clear: left;
	width: 100%;
}
/*
	header
*/
.calendar .header {
	background-color: #002280;
}
.calendar .header li {
    float: left;
	clear: none;
	height: 16px;
	color: #FFF;
	font-weight: bold;
}
.calendar .header .month,
.calendar .header .year {
    background: no-repeat top right;
	width: 70px;
}
.calendar .header .month {
    background-image: url(../img/month.png);
}
.calendar .header li ol {
	display: none;
	background-color: #FFF;
	border: 1px solid #d9deec;
	width: 60px;
}
.calendar .header li ol li {
	clear: left;
	padding: 1px 3px;
	color: #000;
}
.calendar .header li.hover ol {
	display: block;
	position: absolute;
}
.calendar .header li li.years {
	height: 112px;
	padding: 0;
	border-width: 1px 0;
}
.calendar .header li li.years li {
	height: 14px;
}
.calendar .header .year {
    background-image: url(../img/year.png);
}
.calendar .header .back,
.calendar .header .forward,
.calendar .header .close {
    background-repeat: no-repeat;
	width: 18px;
	height: 16px;
	text-indent: 25px;
	overflow: hidden;
}
.calendar .header .back {
    background-image: url(../img/back.png);
}
.calendar .header .forward {
    background-image: url(../img/forward.png);
}
.calendar .header .close {
	background-image: url(../img/cancel.png);
	float: right;
}
/*
	/header
*/
/*
	body
*/

.calendar .body .weeknumbers  {
	width: 25px;
	padding-top: 14px;
	float: left;
	clear: none;
}
.calendar .body li {
    width: 20px;
	padding-right: 5px;
	height: 14px;
	text-align: right;
}
.calendar .body .weekdays,
.calendar .body .weeknumbers {
	background-color: #edeff6;
}
.calendar .body .weekdays {
	border-bottom: 1px solid #002280;
	height: 13px;
}
.calendar .body .weekdays li,
.calendar .body .weeknumbers li{
    font-weight: bold;

}
.calendar .body .weekend {
    font-style: italic;
}
.calendar .body .sunday {
    margin-left: 150px;
}
.calendar .body .saturday {
    margin-left: 125px;
}
.calendar .body .friday {
    margin-left: 100px;
}
.calendar .body .thursday {
    margin-left: 75px;
}
.calendar .body .wednesday {
    margin-left: 50px;
}
.calendar .body .tuesday {
    margin-left: 25px;
}


.calendar .body .days li.calendar-today {
	font-weight: bold;
	background-color: #FFC;
}
/*
	/.calendar
*/</code></pre><p>There you have it, a semanticly correct javascript popup calendar, which does not mix structure, presentation and behaviour at all.<br />The may be some that (and rightfully so) could claim that generating to much of the html with javascript is not the way to go. But I find that in my case, it can be excused..</p><p>Go ahead, and give it a try in your own pages as all of the code is yours to download and use at your leisure...</p><p>If you use it, please let me know as I want to know, or if you run into problems I could be persuaded to help...</p><p><em>No responsibility is taken...</em>
<em>Thanks go out to <a href="http://www.famfamfam.com">Mark James</a> for his great icons...</em></p>