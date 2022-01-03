# The Style Guide for MSC Homepage v3

## 1 Overview
This style guide is intended to outline the standards and practices that inform 
the construction of this website. Use this guide to shape the way you maintain 
and build this website. However, it is important to remember that this guide is 
not a collection of rules, it is a collection of *guidelines*. **Make sure your 
code is readable and consistent with its surroundings**, no matter what guide 
you follow.



## 2 General
### 2.1 General Style Rules
#### 2.1.1 Protocol
Always use HTTPS (https:) for images and other media files, style sheets, and 
scripts, unless the respective files are not available over HTTPS.

```html
<!-- Not recommended: omits the protocol -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- Not recommended: uses HTTP -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- Recommended -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
```


### 2.2 General Formatting Rules
#### 2.2.1 Indentation
Indent by 2 spaces at a time.

Don't use tabs or mix tabs and spaces for indentation.

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>
```
```scss
.example {
  color: blue;
}
```

#### 2.2.2 Capitalisation
All code has to be lowercase: This applies to HTML element names, attributes, 
attribute values (unless text/CDATA), CSS selectors, properties, and property 
values (with the exception of strings).

```html
<!-- Not recommended -->
<A HREF="/">Home</A>

<!-- Recommended -->
<img src="google.png" alt="Google">
```
```scss
/* Not recommended */
color: #E5E5E5;

/* Recommended */
color: #e5e5e5;
```


### 2.3 General Meta Rules
#### 2.3.1 Encoding
Make sure your editor uses UTF-8 as character encoding, without a byte order 
mark (BOM).

#### 2.3.2 Comments
Explain code as needed, where possible.

Use comments to explain code: What does it cover, what purpose does it serve, 
why is respective solution used or preferred?

(This item is optional for larger files. In that case, just mark sections.)



## 3 HTML
### 3.1 HTML Style Rules
#### 3.1.1 Document Type
Use HTML5. `<!DOCTYPE html>`.

#### 3.1.2 HTML Validity
Use valid HTML where possible.

Unless dealing with bugs, use valid SCSS code.

#### 3.1.3 Semantics
Use HTML according to its purpose.

Use elements for what they have been created for. For example, use header 
elements for headings, `p` elements for paragraphs and so on.

Use semantic elements over non-semantic elements where possible.

```html
<!-- Not recommended -->
<div class="section"></div>

<!-- Recommended -->
<section></section>
```

#### 3.1.4 Multimedia Fallback
For multimedia, such as images, videos, animated objects via canvas, make sure 
to offer alternative access. For images that means use of meaningful 
alternative text (alt) and for video and audio transcripts and captions, if 
available.

(For images whose alt attributes would introduce redundancy, and for images 
whose purpose is purely decorative which you cannot immediately use CSS/SCSS 
for, use no alternative text, as in `alt=""`.)

#### 3.1.5 Entity References
There is no need to use entity references like `&mdash;`, `&rdquo;`, or 
`&#x263a;`, assuming the same encoding (UTF-8) is used for files and editors 
as well as among teams.

The only exceptions apply to characters with special meaning in HTML (like 
< and &) as well as control or “invisible” characters (like no-break spaces).

```html
<!-- Not recommended -->
The currency symbol for the Euro is &amp;ldquo;&amp;eur;&amp;rdquo;.

<!-- Recommended -->
The currency symbol for the Euro is “€”.
```

#### 3.1.6 Closing Void Elements
Do not close void elements. The HTML5 specification defines what elements do 
not have a closing tag.

```html
<!-- Not recommended -->
<br />

<!-- Recommended -->
<br>
```

#### 3.1.7 `type` Atrributes
Do not use type attributes for style sheets (unless not using CSS / SCSS) and 
scripts (unless not using JavaScript / TypeScript).

```html
<!-- Not recommended -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css" type="text/css">

<!-- Recommended -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css">
```


### 3.2 HTML Formatting Rules
#### 3.2.1 General Formatting
Use a new line for every block, list or table element, and indent every such 
child element.

```html
<ul>
  <li>Moe</li>
  <li>Larry</li>
  <li>Curly</li>
</ul>
```

#### 3.2.2 Line-Wrapping
While there is no column limit recommendation for HTML, you may consider 
wrapping long lines if it significantly improves readability.

When line-wrapping, each continuation line should be indented at least 4 
additional spaces from the original line.

```html
<md-progress-circular
    md-mode="indeterminate"
    class="md-accent"
    ng-show="ctrl.loading"
    md-diameter="35">
</md-progress-circular>
```

#### 3.2.3 Quotation Marks
Use double (`""`) rather than single quotation marks (`''`) around attribute 
values (except in HTML written in JavaScript / Typescript files).

```html
<!-- Not recommended -->
<a class='maia-button maia-button-secondary'>Sign in</a>

<!-- Recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>
```



## 4 SCSS
### 4.1 SCSS Style Rules
#### 4.1.1 SCSS Validity
Use valid SCSS where possible.

Unless dealing with bugs, use valid SCSS code.

#### 4.1.2 ID and Class Naming
Use meaningful or generic ID and class names.

When referring to components, try to refer to the section they belong to.

```scss
// Not recommended: meaningless
#yee-1901 {}

// Recommended: specific
#search-bar {}
```

#### 4.1.3 ID and Class Name Style
Use ID and class names that are as short as possible but as long as necessary.

Try to convey what an ID or class is about while being as brief as possible.

If referring to a section, abbreviation is allowed.

```scss
// Not recommended
#navigation {}
.search-suggestions-site-category

// Recommended
#nav {}
.ss-site-category {}
```

#### 4.1.4 Shorthand Properties
Use shorthand properties where possible.

```scss
// Not recommended
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

// Recommended
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

#### 4.1.5 0 and Units
Do not use units after `0` unless they are required.

```scss
flex: 0px; /* This flex-basis component requires a unit. */
flex: 1 1 0px; /* Not ambiguous without the unit, but needed in IE11. */
margin: 0;
padding: 0;
```

#### 4.1.6 ID and Class Name Delimiters
Separate words in ID and class names by a hyphen.

Do not concatenate words and abbreviations in selectors by any characters
(including none a l) other than hyphens, in order to improve understanding 
and scannability.

```scss
// Not recommended: does not separate the words “demo” and “image”
.demoimage {}

// Recommended
#video-id {}
```

#### 4.1.7 Hierarchy
Do not have more than three levels in a selector.

Separate 3+ level selectors at major points (e.g. parent, child1 and child2) 
or at major classes / IDs (e.g. section, `section .footer`), rather than at 
arbitrary points.

```scss
// Not recommended: too many levels
main {
  section {
    p {
      span {}
    }
  }
  
  div {
    p {
      span {}
    }
  }
}

// Not recommended: arbitrary split
main {
  section {
    p {}
  }
  
  div {
    p {}
  }
}

main section p span {}
main div p span {}


// Recommended
main {}

main section {
  p {
    span {}
  }
}

main div {
  p {
    span {}
  }
}
```


### 4.2 SCSS Formatting Rules
#### 4.2.1 Declaration Order
Declare `@extend`s at the top of the rule, separate from other declarations.

Declare `@include`s at the bottom of the rule, separate from other 
declarations.

Group similar properties together. Separate with an empty line if group has 
more than 3 declarations

```scss
@extend p;
@extend %flex;

background: fuschia;

border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;

padding: 5px;
width: 100px;
height: 50px;

@include transition(6px);
```

#### 4.2.2 Block Content Indentation
Indent all bloack content, that is rules within rules as well as declarations, 
so to relfect hierarchy and improve understanding.

```scss
// Not recommended
main {
p {}
}

// Recommended
main {
  p {}
}
```

#### 4.2.3 Declaration Stops
Use a semicolon after every declaration.

End every declaration with a semicolon for consistency and extensibility 
reasons.
```scss
// Not recommended
.test {
  display: block;
  height: 100px
}

// Recommended
.test {
  display: block;
  height: 100px;
}
```

#### 4.2.4 Property Name Stops
Always use a single space between property and value (but no space between 
property and colon) for consistency reasons.

```scss
// Not recommended
h3 {
  font-weight:bold;
  color : blue;
}

// Recommended
h3 {
  font-weight: bold;
}
```

#### 4.2.5 Declaration Block Separation
Always use a single space between the last selector and the opening brace 
that begins the declaration block.

The opening brace should be on the same line as the last selector in a given 
rule.

```scss
// Not recommended: missing space
#video{
margin-top: 1em;
}

// Not recommended: unnecessary line break
#video
{
margin-top: 1em;
}

// Recommended
#video {
margin-top: 1em;
}
```

#### 4.2.7 Rule Separation
Always put a blank line (two line breaks) between rules.

```scss
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

#### 4.2.8 Quotation Marks
Use single (`''`) rather than double (`""`) quotation marks for attribute 
selectors and property values.

Do not use quotation marks in URI values (`url()`).

Exception: If you do need to use the `@charset` rule, use double quotation 
marks; single quotation marks are not permitted.

```scss
/* Not recommended */
@import url("https://www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}

/* Recommended */
@import url(https://www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}
```


### 4.3 SCSS Meta Rules
#### 4.3.1 Section Comments
Group sections by a section comment.

Separate sections with 4 blank lines.

```scss
/********************
       INPUTS
********************/
input {
  & {}
  &:hover {}
  &:focus {}
  &[type='submit'] {}
}
```



## 5 TypeScript
### 5.1 General Rules
Follow the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
where possible.

### 5.2 Type Rules
#### 5.2.1 Type Separation
Place a space after the colon.

```ts
let name: string;
```