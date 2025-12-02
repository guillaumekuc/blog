---
title: Newsletter - October 2025
author: guillaumekuc
date: 2025-10-29
categories: 
layout: post
tags:
  - newsletter
  - music-composition
  - music-theory
  - web-development
  - tools
  - infrastructure
  - productivity
permalink: 
published: true
---

Hello,

Here is a brief summary of the past few weeks since I wrapped up my previous role at [Visioglobe](https://visioglobe.com/).
I maintained a time log for the month and divided it into broad activity types, which the chart summarizes.

![](https://www.guillaumekuc.com/newsletter/2025-10/assets/Time%20sheet%20October%202025.png)


---

# Production

I started working on a demo music composition. It is still unfinished but the composition itself is mostly complete. Created in [Reaper](https://www.reaper.fm/).

![](https://www.guillaumekuc.com/newsletter/2025-10/assets/Score.gif)

<audio controls>
  <source src="https://guillaumekuc.com/newsletter/2025-10/assets/october-track-prez01.wav" type="audio/wav">
  Your browser does not support the audio element. <a href="https://guillaumekuc.com/newsletter/2025-10/assets/october-track-prez01.wav">Download the audio file</a>.
</audio>

The orchestration still needs decisions; for now, everything is exported as bowed strings. Articulations and production also require refinement. The piece is meant to loop, which explains the abrupt ending in this version. Eventually, it will return from the end back to after the introductory motif.

I also resumed drawing practice, though nothing is ready to show yet.

# Product Development

Most of the technical work this month focused on building music-related utilities.

## Chordex

[https://guillaumekuc.github.io/chordex/](https://guillaumekuc.github.io/chordex/) — source: [https://github.com/guillaumekuc/chordex](https://github.com/guillaumekuc/chordex)

This tool catalogs chord relationships. It allows browsing, visualization, auditioning, searching, filtering, annotation, tagging, and JSON import/export for backups. These relationships serve as building blocks when composing, hence the value of a structured catalog. Future improvements may include multi-selection and automatic chord-progression generation.

![](https://www.guillaumekuc.com/newsletter/2025-10/assets/chordex-search-01.gif)

![](https://www.guillaumekuc.com/newsletter/2025-10/assets/chordex-annotate-02.gif)

## Chord Relationships Analyzer

[https://guillaumekuc.github.io/chord-relationships-analyzer/](https://guillaumekuc.github.io/chord-relationships-analyzer/) — source: [https://github.com/guillaumekuc/chord-relationships-analyzer](https://github.com/guillaumekuc/chord-relationships-analyzer)

This tool provides a playable piano interface, usable with an external MIDI device, the computer keyboard, or the mouse. It supports both a traditional keyboard layout and a 6/6 isomorphic layout, where each key is separated by a semitone and visual patterns remain consistent across the keyboard. It can analyze what is being played and identify the corresponding chord relationships.

![](https://www.guillaumekuc.com/newsletter/2025-10/assets/analyzer-01.gif)

![](https://www.guillaumekuc.com/newsletter/2025-10/assets/analyzer-02.gif)

Both utilities were built with Vue 3 and Pinia, with Pico.css for a quick interface base. This stack differs from the earlier exposure I had to Vue 2 and Vuex, so part of the month was spent adapting. I also tested [Cursor](https://cursor.com/home), a code editor with integrated LLM features, which proved usable and useful for bulk cleanups and refactors.

The tools remain open to future improvements, but the technical foundations are in place.

# Marketing

Two main items:

- I published a [blog post](https://guillaumekuc.github.io/blog/harmonic-relativity-and-chord-relationships.html) introducing a music-theory tool known as chord relationships. It provides useful context for some recent development work and clarifies several theoretical points.

![](https://guillaumekuc.com/newsletter/2025-10/assets/blog-scroll.gif)

- I began designing the next iteration of my portfolio website. [Figma](https://www.figma.com/fr-fr/design/) proved pleasant to use, apart from the fact that it's cloud-based.
    

![](https://www.guillaumekuc.com/newsletter/2025-10/assets/website-redesign-splashscreen-01.png)  
![](https://www.guillaumekuc.com/newsletter/2025-10/assets/website-redesign-about-01.png)

The images are placeholders. The splash art comes from an older piece of mine that will need retouching, and I will eventually create new visuals. The second image is a placeholder photograph of the bridge of l'Île d'Amour, near where I live in Grenoble metropolitan area (France).

Another marketing-related task was writing this newsletter.

# General & Administrative

A substantial part of the month went into general administrative and infrastructure work. I spent more time on these tasks than planned, but it was an opportunity to learn several useful things.

- Set up new directories and backed up external drives.
- Created a local-first Wiki using [Obsidian](https://obsidian.md/).
    - Wrote automation scripts to simplify time tracking.
- Rented and configured a Virtual Private Server (VPS) at [OVH](https://www.ovhcloud.com/fr/vps/).
    - Installed [Perforce](https://www.perforce.com/products/helix-core) for managing large files and assets.
    - Set up a self-hosted [Nextcloud](https://nextcloud.com/) instance for storage and synchronization.
    - Deployed [Syncthing](https://syncthing.net/) for folder syncing across devices.

# Learning

Limited time went into pure learning this month. I have a bias towards deliverables as a priority, and new subjects require a period where no concrete output is produced. Still, I started exploring the basics of [Houdini](https://www.sidefx.com/products/houdini/) for procedural 3D and intend to continue.

# Sales

This area was largely inactive. It is still early to reach out to potential clients or partners, as the current projects are not yet polished enough to present.

---

Progress was slower than planned, but things are moving forward. I have several ideas for November, though I prefer sharing results rather than intentions.

I am sending this update slightly early because I will be traveling to Italy for a few days. A short break will be welcome.

Until next time.