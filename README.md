Live: https://guillaumekuc.github.io/blog

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

- Local dev: 'bundle exec jekyll serve'
- '_config.yml' propagates w/ Jekyll/Liquid templating system.
- 2 branches: developement & main

### Features

- Interactive Avatar: profile/logo + link
	- Handmade svg emblem/logo
	- Hover state
- Back to Top Button
	- Scroll triggered visibility
	- Bounce animation on hover: squash and stretch
	- Smooth scroll back to top
- Search bar
	- Expandable
- Reading time indicator
- Tags
- Color theme switch
	- 5 Hues of equal lightness value (Lab color mode): Teal, Coral, Olive, Lavander, Bronze
	- Natural looking color variants (hue and value shifts mimicking shadows using precise Lab color mode calculations)
	- Dynamic fav icon replacement using current active color
	- Session persistence via localStorage
- Copy Link button in blog articles
- Abstract flowy Background
	- Discreete Light grey gradient
	- Midjourney generated abstract motif
- Overall style
	- Steps animations, approximating 12fps animation style (ref trad anim/retro games)
	- Print design inspiration/Content first
	- Half-tones

### Features Candidates

- Dark theme
- Keep alive animations
- Animated background
- Lightness value slider
- Tag pages
- Pinned articles
- Proper archive page
- Shortcuts system
- Color picker (copy colors under cursor)

## Bug queue

- Portfolio link on avatar not working.

## Contact

guillaume@guillaumekuc.com

