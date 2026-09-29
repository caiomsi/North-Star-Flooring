# North Star Flooring & Construction

Real-client site for North Star Flooring & Construction, South Salt Lake, Utah.
Static HTML/CSS/JS, no build step. Lead flow is click-to-call / SMS only (no form, by client choice).
Live preview: https://caiomsi.github.io/North-Star-Flooring/ . Facts and audit of the old site: `research.md`. Design: `DESIGN.md`.

## Launch gate

Do not point the real domain until every box is checked.

- [ ] Client has reviewed and approved the site.
- [ ] Confirm every fact marked UNKNOWN in `research.md`, and remove or fix the copy that depends on it:
  - [ ] Contractor license number (BuildZoom could not verify one; check Utah DOPL)
  - [ ] Insurance
  - [ ] Warranty
  - [ ] "Free estimate" wording (their site never says "free")
  - [ ] Service towns / area (only "across the state" is known)
  - [ ] Google review count and rating (22 / 5.0 is from TrailBlaze, unverified) and the Google review link
  - [ ] Real social URLs (Facebook page, Instagram @thenorthstarflooring; their site links to generic platform homepages)
  - [ ] Owners' last names, founding year, brand-dealer status (SAR Floors)
- [ ] Higher-resolution originals received and swapped in (see `images/README.md`).
- [ ] Domain cutover: add a `CNAME` file containing `thenorthstarflooring.com`, point DNS at GitHub Pages, then update canonical, Open Graph/Twitter URLs, `sitemap.xml`, `robots.txt` and JSON-LD URLs from `caiomsi.github.io/North-Star-Flooring` to the real domain (and 404.html's `/North-Star-Flooring/` paths to `/`).
- [ ] Raise with the client: their current `/about` page is copied from another company (Florida Venetian Plastering, Wellington FL, owner Douglas Roth). It is live and damaging to trust and SEO; make sure it is removed when the old site is retired.
