# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

**dawn-omega** is a custom Ghost theme for [The Tea Stand](https://www.theteastand.org), a community tea project in Brooklyn. It extends Ghost's official Dawn theme with site-specific pages, a membership/signup flow, a Google Calendar events page, and custom homepage content.

## Commands

```bash
# Install dependencies
npm install        # or: yarn

# Build CSS/JS and watch for changes (development)
npm run dev        # or: yarn dev

# Validate the theme against Ghost specs
npm test           # or: yarn test   (runs gscan)

# Build and package the theme into dist/dawn-omega.zip for upload
npm run zip        # or: yarn zip
```

CSS and JS source files compile to `assets/built/` — never edit files there directly.

## Architecture

### Template System (Handlebars / `.hbs`)
Ghost uses Handlebars. All templates extend `default.hbs` via `{{!< default}}`. Key templates:
- `default.hbs` — site shell (head, nav, footer); loads jQuery + `built/main.min.js`
- `index.hbs` — post feed listing
- `post.hbs` — single post with related posts and comments
- `signup.hbs` — custom membership signup page with Stripe integration via `https://teastand-backend.vercel.app`
- `signup-success.hbs` / `perpetual-brew.hbs` — standalone pages
- `events.hbs` — calendar page (loads `assets/js/events.js` directly, not through the build pipeline)

Partials live in `partials/`. Notable ones:
- `cover.hbs` — homepage hero; loads `settings.js` and `homepage.js`
- `content.hbs` — full single-post layout with feature image and prev/next nav
- `featured-posts.hbs` — Owl Carousel of featured posts

### CSS (`assets/css/`)
`screen.css` is the entry point and imports everything via PostCSS `@import`. Organized into subdirectories:
- `general/` — fonts, base styles, buttons, forms, icons
- `site/` — layout, header, cover/hero
- `blog/` — feed, single post, author, tag, share, navigation, related posts, comments
- `misc/` — Owl Carousel, utilities, animations, dark mode
- `subscriptions/` — signup and signup-success pages
- `events/` — events calendar page

### JavaScript (`assets/js/`)
The Gulp build concatenates shared Ghost theme assets + `assets/js/lib/*.js` + `assets/js/main.js` into `assets/built/main.min.js`.

| File | Purpose |
|---|---|
| `main.js` | Entry point; initializes Owl Carousel for featured posts and infinite scroll pagination |
| `settings.js` | **Site content config** — edit this to change homepage text, cards, and signup page copy |
| `homepage.js` | Reads variables from `settings.js` and injects them into the DOM on the home page |
| `signup.js` | Reads variables from `settings.js` and injects signup/members description text |
| `events.js` | Fetches events from Google Calendar API and renders them; loaded directly by `events.hbs` (not bundled) |
| `lib/owl.carousel.min.js` | Owl Carousel library |

### Custom Routes (`routes.yaml`)
Routes must be kept in sync with Ghost Admin → Settings → Labs → Routes:
```
/signup/          → signup template
/signup-success/  → signup-success template
/events/          → events template
/perpetual-brew-2/ → perpetual-brew template
```

### Ghost Theme Customization (in `package.json` → `config.custom`)
Ghost Admin exposes these settings to the theme:
- `navigation_layout`: Logo on the left / Logo in the middle / Stacked
- `title_font` / `body_font`: Modern sans-serif / Elegant serif
- `color_scheme`: Auto / Light / Dark (controls `theme-dark`/`theme-light` class on `<html>`)
- `white_logo_for_dark_mode`: alternate logo image for dark mode
- `show_author` / `show_related_posts`: post-level toggles
- `card_section_title`: text label for the homepage card grid section

## Updating Site Content

All homepage text, card data, and signup page copy is configured in **`assets/js/settings.js`**. This is a plain JS file (not a build artifact) with documented variables at the top. Edit it directly to change:
- `description` — hero text on the home page
- `articlesTitle` / `programmingSubtitle` / `newsletterSubtitle` — homepage section labels
- `cards` — modality card grid (title, image URL, link URL)
- `signupDescription` / `membersDescription` — signup page copy
