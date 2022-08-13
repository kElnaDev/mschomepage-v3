# How To Use
MSC Homepage v3


## Preamble
Much of the design of this site is focused on making the majority of the developer's job easier. I assumed this to be things like adding or removing a listed website, adding a new page, or editing the sidebar. As such, these things are easy to do, but fixing a small visual bug with the site loader may not be.


## Key
Display name - The name shown to users
Canonical name - `phraseToId()` used on the display name


## Adding A Website
The site lists can be found in resources/scripts/json. sites.json is the site list for students and teacher-sites.json is for teachers. Each site list is an array of objects.

Each site object requires a `name` (the site's display name), a `url` and a `category` (display name). Sites may have a `subcategory` (display name). These do not need to be consistent across site lists.

The logo of every site is stored in resources/images/logos. Images can be named anything, but most are named using the site's canonical name. Images named this way use `imageType` in the site list. Other images use `image`.

### Example: Google Docs
Here, its logo is stored as "google-docs.png".
```json
{
  "name": "Google Docs",
  "url": "https://docs.google.com/document/u/0/?tgif=c",
  "category": "G Suite",
  "imageType": "png"
}
```


## Adding A Category / Subcategory
Categories and subcategories are generated as they appear in the relevant site list. To add one, simply add a site with that category or subcategory.

**Note: Do *not* duplicate category or subcategory names within site lists.**
You can have the same category in two different site lists, but not two categories of the same name in one site list.