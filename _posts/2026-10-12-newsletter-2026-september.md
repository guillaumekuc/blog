---
title: "[Newsletter] Vilja Dossier Delivered, its Art and Music, and a Fretboard Tool for Reaper"
author: guillaumekuc
date: 2026-10-12
categories: 
layout: post
tags:
  - newsletter
  - vilja
  - game-development
  - visual-arts
  - music-production
  - music-composition
  - tools
permalink: 
published: true
---

Bonjour,

it has been a while since my last post. Over the past months I put the blinders on to finish the CNC proposal for Vilja before its deadline: single-task, single focus. Blog writing was deprioritized as a result. The project is now complete, so the writing returns.

## Vilja: the dossier

![](/blog/assets/newsletter-202609/vilja-dossier_p01.jpg)

**→ [Read the full Vilja dossier (French PDF)](https://guillaumekuc.art/pdf/vilja_dossierArtistique.pdf)**

Although I didn't post anything here, I did gather feedback on the proposal from a small group of people. It helped me calibrate the order in which information was presented and the register of the language. It also pointed to the parts of the design that were underserved and needed more explanation to land as intended, and to the ones that felt overinvested and could be cut. It was an exercise in clear communication.

I built the dossier with [Affinity](https://www.affinity.studio/), a new tool for me since I had always been an [InDesign](https://www.adobe.com/products/indesign.html) user. Affinity still has its quirks and some unintuitive workflows, and they slowed me down significantly until I had mapped them all out. Affinity prefers linked imports of .docx files, so I needed a conversion pipeline to keep my Markdown files as the single source of truth. One thing I did appreciate is its pre-export validation. It flags things like non-proportional transforms on images, or text blocks that use characters the font doesn't cover. My experience at [Visioglobe](https://visioglobe.com/) already had taught me that validators are underrated.

I paid special attention to typography and to the hierarchy of information, so that the gist would come across even when skim-reading. I used the full toolbox: emphasis, lists, blockquotes, indentation and drop caps. My visual reference for layout and typography was the old [Dofus Mag](https://fr.wikipedia.org/wiki/Dofus_Mag)[^dofus], although I didn't have enough time to push the polish as far as they did back then. Some of the SVG diagrams were generated from code rather than assembled by hand. On that note, I also experimented with [building a font from SVG sources](https://github.com/jaywcjlove/svgtofont), so that a set of symbols could be used across applications.

### Illustrations

![](/blog/assets/newsletter-202609/vilja-dossier_p07.jpg)

I produced a number of illustrations for the dossier, and the time budget was spent unevenly between them. The key art received the most attention and was fully painted. It is also the most complex piece: five full-body characters, with their faces and ten hands, a view of a city, several musical instruments, sound horns and other background elements.

Pieces with isolated subjects were much faster to paint, a reminder that completion time doesn't grow linearly with complexity. Other pieces went for a quicker, more graphic two-tone rendering (lit and shadow) in a comics tradition along the lines of [Mike Mignola](https://en.wikipedia.org/wiki/Mike_Mignola)[^mignola]. Most of the pieces used a vignette treatment, which let me focus my time on the elements that actually carry the world-building.

### Music

I also produced a piece of music to explore the project's musical direction. It has distinct sections in different tempos, and I used metric modulation to move smoothly between them. A rhythmic value shared by both sections acts as a pivot and is reinterpreted in the new tempo, which is an exact ratio of the old one[^metric].

<audio controls>
  <source src="/blog/assets/newsletter-202609/vilja-exploratory-track.mp3" type="audio/mpeg">
  Your browser does not support the audio element. <a href="/blog/assets/newsletter-202609/vilja-exploratory-track.mp3">Download the audio file</a>.
</audio>

It was also a chance to set up the templates for Vilja's music: bowed strings, electric guitars, melodica, piano and synths, which meant some VST hunting. The output is entirely MIDI. To make that work, I spent time on articulations, ghost notes, pitch movement (vibrato, bends, whammy), accent patterns and velocity contours. That last point mattered especially for the melodica, which should feel like it is being breathed into.

The baritone guitar tone comes from [RealStrat](https://www.musiclab.com/products/realstrat-info.html) fed into [AmpliTube](https://www.ikmultimedia.com/products/amplitube5/). Getting that range out of a VST designed for standard tuning takes a back-and-forth transposition trick with formant shifting[^formant]. A band compressor[^bandcomp] then stabilizes the low end. After that it's mostly a classic fuzz-into-amp setup, with a twangy reverb that keeps the notes alive even in a MIDI composition. The amp pushes the mids, which puts the guitar at the center of the mix. On the melodica, I rounded the tone with EQ to push it a little toward accordion territory, with less harsh highs and more low mids. Harmonically, the track has colorful moves and chromatic melodic lines.

### Game design and pipeline

The dossier builds on the early game prototyping I started earlier in the year. Documenting the game design was an opportunity to look well ahead and describe a number of mechanics that haven't been prototyped yet. I also sketched out a technical pipeline that reuses existing, proven tools and converts their output into the target formats[^tools]:

- [Tiled](https://www.mapeditor.org/) → [Houdini](https://www.sidefx.com/products/houdini/) → 3D isometric levels
- MIDI → JSON contract → in-game level events
- [Twine](https://twinery.org/) → in-game dialogue and scenes

A dossier like this also carries significant administrative overhead. Overall it took longer than I expected, as [Hofstadter's Law](https://en.wikipedia.org/wiki/Hofstadter%27s_law)[^hofstadter] predicts. But I had buffers in place, and the deadline was met rather smoothly.

## Side project: a fretboard input GUI for Reaper

MIDI editors default to two representations: a piano keyboard and a MIDI grid. They work fine, but as a guitar player I am most fluent on the fretboard, and specifically in all-fourths tuning rather than standard tuning[^allfourths]. So I built a fretboard input tool for [Reaper](https://www.reaper.fm/).

Its UX borrows from [Guitar Pro](https://www.guitar-pro.com/) and [Dorico](https://www.steinberg.net/dorico/). Dorico is notation software that is really a DAW under the hood, so it already has a hybrid logic. From Guitar Pro I took the tab-like numeric input: the up and down arrows select a string, and typing a number selects a fret and enters the note. Context notes can be shown per beat, per bar, or for the current beat plus the next.

![](/blog/assets/newsletter-202609/Fretboard-MIDI-Controller_02.gif)

From Dorico I took the way you move through time: the left and right arrows move the caret one grid step backward or forward, independently of the note length, which is set separately.

![](/blog/assets/newsletter-202609/Fretboard-MIDI-Controller_03.gif)

Chord input mode is mapped to Q, as in Dorico. I also added a WASD mode for left-hand navigation.

The project was speed-coded with [Claude Code](https://www.claude.com/product/claude-code), and very little of it was manual work. It is written in [Lua](https://www.lua.org/) against the [ReaScript API](https://www.reaper.fm/sdk/reascript/reascript.php)[^reascript], a language I'm only faintly familiar with. My contribution was mainly the initiative and the UI/UX decisions. For now, I don't plan to expand or polish it further, since it already meets the immediate need.

[^dofus]: Ankama's print magazine (2007–2014) for its Dofus and Wakfu games: half magazine, half artbook, with dense illustrated layouts.
[^mignola]: Hellboy's creator, known for flat color, large masses of solid black shadow and minimal midtones.
[^metric]: For example, a triplet eighth in the old tempo becomes a plain eighth in the new one, so the new tempo is the old one × 1.5. The pulse the ear already hears carries across the seam.
[^formant]: Formants are the fixed resonances that give an instrument its body. Plain pitch-shifting drags them along (the "chipmunk" effect). Formant shifting moves the pitch while keeping the timbre plausible.
[^bandcomp]: A band (multiband) compressor compresses only one frequency range, here the lows, and leaves the rest untouched.
[^tools]: Tiled is a 2D tile-map editor. Twine is a branching-narrative authoring tool. Houdini is procedural 3D software, where geometry is generated from rules rather than modelled by hand.
[^hofstadter]: "It always takes longer than you expect, even when you take into account Hofstadter's Law."
[^allfourths]: In all-fourths tuning, every pair of adjacent strings is a perfect fourth apart (E A D G C F). Standard tuning breaks the pattern with one major third (G–B). Removing it makes every shape identical across the neck.
[^reascript]: ReaScript is Reaper's scripting interface (Lua, EEL2, Python) for extending the DAW from inside.
