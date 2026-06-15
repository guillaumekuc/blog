Live: https://guillaumekuc.github.io/blog — v2.1

## About

Personal blog.

## Technology

Built with Jekyll
Base theme: Minimal
Hosted on GitHub Pages
Markdown-based content

## Setup

Jekyll requires Ruby and Bundler to run locally. If `bundle exec jekyll serve` doesn't work, you likely need to install Ruby first.

### Windows Installation

1. **Install Ruby:**
   - Download RubyInstaller from https://rubyinstaller.org/
   - Choose the **Ruby+Devkit** version (recommended)
   - Run the installer and follow the prompts
   - **Important:** After installation, close and reopen your terminal/PowerShell for PATH changes to take effect

2. **Verify Ruby installation:**
   ```powershell
   ruby --version
   ```

3. **Install Bundler (global install, can be run from any directory):**
   ```powershell
   gem install bundler
   ```

4. **Install Jekyll dependencies (run from project directory):**
   ```powershell
   bundle install
   ```

5. **Run Jekyll (from project directory):**
   ```powershell
   bundle exec jekyll serve
   ```

### Troubleshooting

- If `bundle` or `ruby` commands are not recognized, Ruby is not installed or not in your PATH
- Make sure to restart your terminal after installing Ruby
- On Windows, the Gemfile includes platform-specific gems (`tzinfo-data`, `wdm`) for better compatibility

## Workflow

- Local dev: `bundle exec jekyll serve`
- `_config.yml` propagates via Jekyll/Liquid templating system
- 2 branches: development & main

## Configuration

Key fields in `_config.yml`:
- `version` — semantic version number, displayed in footer
- `year` — copyright year, displayed in footer
- `credits` — author/credits string (year and version composed around it in the template)
- `colors` — theme color palette

### Features

- **Typography system** — brand fonts matching main portfolio website
  - Crimson Pro (`--ffCrimson`) for body text and in-article headings (weights 400/500/600)
  - M PLUS Rounded 1c (`--ffRounded`) for UI elements, sidebar, and post title (weights 300/400/500)
  - Minor Third (×1.2) typographic scale from 18px base: 18 / 22 / 26 / 31 / 37px
  - In-article headings decorated with ◈ prefix and theme-color `border-bottom`
- **Three-column layout**
  - Fixed sidebar (navigation, search, socials)
  - Scrollable content column
  - Fixed right column with background portrait artwork
- **Feed page** — paginated post list with post headers (title, date, tags, reading time)
- **Archive page** — posts grouped by year and month, collapsible
- **Tags page** — posts grouped by tag, collapsible groups closed by default, tag search
- **Interactive Avatar** — profile/logo + link
  - Handmade SVG emblem/logo
  - Hover state
- **Back to Top Button**
  - Scroll-triggered visibility
  - Bounce animation on hover: squash and stretch
  - Smooth scroll back to top
- **Search bar** — expandable, live filtering
- **Reading time indicator**
- **Color theme switch**
  - 5 hues of equal lightness value (Lab color mode): Teal, Coral, Olive, Lavender, Bronze
  - Natural-looking color variants (hue and value shifts mimicking shadows using precise Lab color mode calculations)
  - Dynamic favicon replacement using current active color
  - Session persistence via localStorage
- **Copy Link button** in blog articles
- **Image Lightbox**
  - Click any image or GIF in blog posts to view full size
  - Gallery navigation with keyboard arrows or on-screen buttons
  - Touch/swipe support for mobile devices
  - Automatic image wrapping (no need to modify markdown)
  - Uses GLightbox library (loaded via CDN)
- **Background artwork** — Right-column illustration + abstract generated mid-column background
- **Version tracking** — `version` and `year` fields in `_config.yml`, rendered in footer
- **Overall style**
  - Steps animations, approximating 12fps animation style (ref trad anim/retro games)
  - Print design inspiration / content-first
  - Half-tones

### Features Candidates

- Dark theme
- Keep-alive animations
- Lightness value slider
- Pinned articles
- Shortcuts system
- Color picker (copy colors under cursor)

## Bug queue

- Portfolio link on avatar not working.

## Contact

guillaume@guillaumekuc.com
