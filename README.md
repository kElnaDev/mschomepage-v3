# MSC Homepage v3
https://github.com/kElnaDev/mschomepage-v3


## Overview
The third version of the NBSC Manly Selective Campus Homepage was created to further refine the concepts of the second version, as well as to explore the use of the SASS and TypeScript preprocessors.



## Technical Comments
- load-sites.ts employs client-side rendering because of a trade-off between easy of development and loading time.
- The following must be named according to `phraseToId()`:
  - Section IDs => `phraseToId(CATEGORY-NAME, false)`
  - Button wrappers => `phraseToId(CATEGORY-NAME, false)` + "-wrapper"
  - Unique logos => `phraseToId(SITE-NAME, false)`
  - Image folders => "resources/images/" + `phraseToId(CATEGORY-NAME, false)`
- The file types of unique logos are stored in JSON as `imageType`.
- The names of repeated logos are stored in JSON as `image`.
- The `addAutoComplete()` function is currently commented out because of CORS issues. We will be implementing a fix soon.
- The node_module folder in the resources/scripts folder is there for JQuery TypeScript support.
- The order of the fonts in _globals.scss is an artifact of a previous font order. I couldn't be bothered to refactor it.
- search.scss is a mess because I didn't initially account for adding logos to the search function.
- A survey deemed `.current-page` "cooler" and "clearer" than `.disabled`. `.disabled` remains in case a future developer finds it more appealing.



## Credits
This version of the homepage, like the second, is a student project.

### Technical
- The majority of the website was coded by Kaelan Carlos of G24 (a.k.a. kElnaDev).
- Code taken from other sources are marked as such in the code.
- Other contributions can be found on GitHub.
- The website is proudly hosted by OggyP.

### Assets
- `globals.$blue`, `globals.$turquoise` and `globals.$ice` were all taken from the NBSC Manly Selective Campus logo.
- All fonts used were created and are owned by Google.
- All icons used in the left navigation bar (except the OggyP Chess logo) were created and are owned by Google.
- All logos used are owned by their respective companies / organisations.
- STYLEGUIDE.md borrows heavily from [Google's HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html).

### Concepts
- Most of the concepts used in this page are inspired by the [MSC Homepage v2](https://mschomepage.oggyp.com/) created by Ben Pratley and Oliver Springhall of G24.
- The left navigation bar concept is taken from a [video](https://youtu.be/biOMz4puGt8) by YouTuber [Fireship](https://www.youtube.com/c/Fireship).
- The search bar concept is inspired by a suggestion from Oscar Pritchard of G24.

### Special Thanks
I would like to give special thanks to OggyP, not only for graciously hosting the website for free, but also for helping me troubleshoot issues and for giving valuable feedback.



## See Also
- OggyP's GitHub profile: https://github.com/OggyP
- MSC Homepage v1: https://homepage.nbscmanlys-h.schools.nsw.edu.au/
- MSC Homepage v2: https://mschomepage.oggyp.com/
