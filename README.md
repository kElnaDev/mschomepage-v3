# MSC Homepage v3
https://github.com/kElnaDev/mschomepage-v3


## Overview
The third version of the NBSC Manly Selective Campus Homepage was created 
to further refine the concepts of the second version, as well as to explore 
the use of the SASS and TypeScript preprocessors.



## Technical Comments
- Because the search feature already requires a list of all the information of 
every listed site, it was pointless to duplicate this in HTML. That would mean 
having to change two separate files when wanting to add, alter or remove a 
listed site. This is the reason for load-sites.ts.
- sites.json is an array of objects for ease of indexing.
- categories.json is an array of strings for ease of indexing. It is also 
for this reason that section IDs and their associated button wrappers **must** 
be a lowercase version of the real category name where hyphens replace spaces.
Check using `categoryAsId()`.
- Unique logos are stored in the resources/images/CATEGORY-AS-ID folder, named 
in the same format as category IDs. Check using the `categoryAsId()` function. 
The file types of these images are stored in the sites.json as `imageType`.
- Repeated logos are stored in the resources/images/general folder. The file 
path of these images are stored in the sites.json as `image`.
- The `addAutoComplete()` function is commented out because the DuckDuckGo 
autocomplete API does not play nice with CORS. The Google autocomplete API 
is not used instead because it requires OAuth 2 authentication via a token 
that I am not willing to pay for. We did attempt to circumvent the Same 
Origin policy by requesting from our own custom API but, alas, it failed.
- The node_module folder in the resources/scripts folder is there for JQuery 
TypeScript support.
- The order of the fonts in _globals.scss is an artifact of a previous font 
order. I couldn't be bothered to refactor it.
- search.scss is a mess because I didn't initially account for adding logos to 
the search function.



## Credits
This version of the homepage, like the second, is a student project.

### Technical
- The majority of the website was coded by Kaelan Carlos of G24 (a.k.a. Jam).
- Code taken from other sources are marked as such.
- Other contributions can be found on GitHub.
- The website is proudly hosted by OggyP.

### Assets
- `globals.$blue`, `globals.$turquoise` and `globals.$ice` were all taken
  from the NBSC Manly Selective Campus logo.
- All fonts used were created and are owned by Google.
- All icons used in the left navigation bar (except the OggyP Chess logo) 
were created and are owned by Google.
- All logos used are owned by their respective companies / organisations
- STYLEGUIDE.md borrows heavily from 
[Google's HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

### Concepts
- Most of the concepts used in this page are inspired by the 
[MSC Homepage v2](https://mschomepage.oggyp.com/)
  created by Ben Pratley and Oliver Springhall of G24.
- The left navigation bar concept is taken from a video by YouTuber
  [Fireship](https://www.youtube.com/c/Fireship).
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