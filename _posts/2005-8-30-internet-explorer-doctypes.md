---
layout: post
title:  "Internet Explorer doctypes"
date:   2005-8-30 10:00:00 +0100
categories: habari
---
<style type="text/css">
<!--
body, table {
  font: 11px verdana, arial, sans-serif;
	}
table { width: 300px; }
th {
  text-align: left;
}
.wrong { color: #F00; }
.correct { color: green; }
-->
</style>

<table summary="doctypes in ie">
<thead>
  <tr>
    <th>Label</th><th>Definition</th><th>URL</th><th>no URL</th>
	</tr>
</thead>
<tbody>
<tr>
<td>No</td><td>!DOCTYPE present</td><td class="wrong">Off</td><td class="wrong">Off</td>
</tr>
<tr>
<td>HTML</td><td>(No Version Present)</td><td class="wrong">Off</td><td class="wrong">Off</td>
</tr>
<tr>
<td>HTML 2.0</td><td></td><td class="wrong">Off</td><td class="wrong">Off</td>
</tr>
<tr>
<td>HTML 3.0</td><td></td><td class="wrong">Off</td><td class="wrong">Off</td>
</tr>
<tr>
<td>HTML 3.2</td><td></td><td class="wrong">Off</td><td class="wrong">Off</td>
</tr>
<tr>
<td>HTML 4.0</td><td>No Definition Present</td><td class="correct">On</td><td class="correct">On</td>
</tr>
<tr>
<td>HTML 4.0</td><td>Frameset</td><td class="correct">On</td><td class="wrong">Off</td>
</tr>
<tr>
<td>HTML 4.0</td><td>Transitional</td><td class="correct">On</td><td class="wrong">Off</td>
</tr>
<tr>
<td>HTML 4.0</td><td>Strict</td><td class="correct">On</td><td class="correct">On</td>
</tr>
<tr>
<td>XHTML </td><td></td><td class="correct">On</td><td class="correct">On</td>
</tr>
<tr>
<td>XML</td><td></td><td class="correct">On</td><td class="correct">On</td>
</tr>
<tr>
<td>Unrecognized !DOCTYPE </td><td></td><td class="correct">On</td><td class="correct">On</td>
</tr>
</tbody>
</table>


The preceding table shows that standards-compliant mode is switched off when the !DOCTYPE declaration is not present in the document, when the Label in the declaration doesn't specify a version of the HTML specification, or when it specifies a version earlier than HTML 4.0. When you specify the Frameset or Transitional Definition of HTML 4.0 in your !DOCTYPE declaration, the table shows that standards-compliant mode is switched on only when you include the URL. Standards-compliant mode is also switched on when you specify the Strict Definition of HTML 4.0 in your !DOCTYPE declaration, and when you specify HTML 4.0 with no Definition.

To allow for the creation of new DTDs, such as HiDad 11.22, standards-compliant mode is switched on when the !DOCTYPE declaration is not recognized. Standards-compliant mode is also switched on when you specify a version of HTML that is not listed in the table, such as HTML 1.0 or HTML 3.22.

source (<a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnie60/html/cssenhancements.asp">
/msdn.microsoft.com</a>