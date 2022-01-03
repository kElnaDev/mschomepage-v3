# MSC Homepage v3


## Overview
The third version of the NBSC Manly Selective Campus Homepage was created 
to further refine the concepts of the second version, as well as to explore 
the use of the SASS and TypeScript preprocessors.



## Technical Comments
- sites.json is an array of objects for ease of indexing.
- categories.json is an array of strings for ease of indexing. It is also 
for this reason that section IDs **must** be a lowercase version of the real 
category name where hyphens replace spaces. (e.g. The "G Suite" section has 
`id="g-suite"`).
- The `addAutoComplete()` function is commented out because the DuckDuckGo 
autocomplete API does not play nice with CORS. The Google autocomplete API 
is not used instead because it requires OAuth 2 authentication via a token 
that I am not willing to pay for. We did attempt to circumvent the Same 
Origin policy by requesting from our own custom API but, alas, it failed.
- The node_module folder in the resources/scripts folder is there for JQuery 
TypeScript support.
- The order of the fonts in _globals.scss is an artifact of a previous font 
order. I couldn't be bothered to refactor it.



## Credits
This version of the homepage, like the second, is a student project.

### Technical
- The coding of the page was done solely by Kaelan Carlos of G24 (a.k.a.
  Jam) unless otherwise specified.
- The website is proudly hosted by OggyP.

### Assets
- `globals.$blue`, `globals.$turquoise` and `globals.$ice` were all taken
  from the NBSC Manly Selective Campus logo.
- All fonts used were created and are owned by Google.
- All icons used in the left navigation bar (except the OggyP Chess logo) 
were created and are owned by Google.
- All logos used are owned by their respective companies / organisations

### Concepts
- Most of the concepts used in this page are inspired by the MSC Homepage v2
  created by Ben Pratley and Oliver Springhall of G24.
- The left navigation bar concept is taken from a video by YouTuber
  fireship.io.
- The search bar concept is inspired by a suggestion from Oscar Pritchard
  of G24.

### Special Thanks
I would like to give special thanks to OggyP, not only for graciously hosting 
the website for free, but also for supporting me, for helping me troubleshoot 
issues and for giving valuable feedback.



## See Also
- OggyP's GitHub profile: https://github.com/OggyP
- MSC Homepage v1: https://homepage.nbscmanlys-h.schools.nsw.edu.au/
- MSC Homepage v2: https://mschomepage.oggyp.com/