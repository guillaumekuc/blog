---
title: Newsletter - November 2025
author: guillaumekuc
date: 2025-12-02
categories: 
layout: post
tags:
  - newsletter
  - product-development
  - music-theory
  - web-development
  - tools
  - game-development
  - infrastructure
  - visual-arts
permalink: 
published: true
---

Hello !

This month has been markedly lighter than the previous one, as I was without a computer for just over a week. This derailed my plan, and I did not get the time I counted on to rectify my time-sheet imbalances before the end of the month. I also did not bring the various active projects to as stable a state as I would have liked. Never-the-less, progress was made !

![](/blog/assets/newsletter-202511/time-sheet.png)

## General & Administrative

I ordered a replacement for my deceased laptop, waited for delivery, and took the time to fully set up and equip the new unit with all the software it needs.

I also ordered parts to fix the old one, as the hardware defect it suffered is minor. Recent events were a stark reminder of the importance of maintaining redundancies for everything.

Some G&A budget was spent stabilizing my Perforce/VPS setup. Perforce has a centralized model: it stores data on the remote first and keeps an inventory of the states of each machine. That requires a heavier overhead than what I am accustomed to with Git, where each user has a fully complete and autonomous copy of the repository. This led to some technical headaches, which are now resolved.

## Production

I started the month with a digital-painting attempt. I am unsure if I will return to this piece, as it does not fully land for me so far. I disclose it here as proof of work even though I am not sure wither it is worth finishing. At minimum it clarified for me what I need to do differently in my next attempts.

![](/blog/assets/newsletter-202511/PalaceHall_CrownedGuitarist%26MelodicaPlayer.jpg)

There is also this quick one done as a warm-up.

![](/blog/assets/newsletter-202511/RockyDesert_Building.jpg)

## Product Development

### Chordex

As foreshadowed in the previous newsletter, the tool now supports multi-selects and has a chord-progressions generator that sequences the selected chord relationships coherently. Generated progressions can be exported as MIDI files for external work in a DAW. The [Midi Writer JS](https://github.com/grimmdude/MidiWriterJS) library was used for this purpose.

![](/blog/assets/newsletter-202511/chordex-chord-generator.gif)

Other improvements include animations on hover for the piano visualizers. I also began adding default tags to chord relationships. Good defaults can make the tool practically useful. For now, the system automatically categorizes chord relationships derived from diatonic scales as dark, light, or ambiguous based on circle-of-fifths logic. More work on default tags remains and will require a more granular approach moving forward.

Overall, the generator needs to become more flexible. This will continue next month.

### Chord Relationships Analyzer

This project took a turn: I have been adding game mechanics to it. It is in a very early Proof-of-Concept stage. The idea is to turn it into a training app for chord-relationships internalization. Enemies spawn and move toward the player, each labeled with a chord relationship. The user plays chords; when a chord motion matches an enemy’s label, that enemy is removed. The goal is to clear enemies by playing the correct motions before collision. The most direct inspiration is [Z-type](https://zty.pe/): a simple browser typing game I encountered a long while ago.

![](/blog/assets/newsletter-202511/cr-analyzer-game-mechanics.gif)

The game-rendering logic is handled by [Phaser](https://phaser.io/).

Eventually, the gameplay has to extend into simpler modes: interval recognition, scale and mode practice, individual chords recognition, and only then chord-relationship motions. Chord relationships build upon prior knowledge that needs to be seeded first. 

There is ample room to expand this project.

## Marketing

A large chunk of time went into the development of my portfolio website, which I would like to have up and running sooner rather than later, as it is a bottleneck to reaching out to anyone. 

Rather than starting from scratch, I took on the task of rehabilitating the old code from the previous iteration of the website. The markup at the time was kept together with PHP includes, styles lived in a monolithic CSS file, and the logic similarly was all in one giant JavaScript file. It was not a polite code-base: it lacked separation of concerns, adherence to the single-responsibility principle, and modularity.

I migrated first away from PHP to Vite, and then to a component-based architecture using [Svelte](https://svelte.dev/). Svelte is a younger JavaScript framework with only minimal syntax additions that relies on a compiler to output code that is not bloated. This was heavy-duty refactoring work, and [Cursor](https://cursor.com/?from=home) proved itself very useful again for tasks like this.

The previous mock-ups are not fully implemented yet, however, some streamlining occurred. I removed the section-selector screen and moved the filtering logic directly to the navigation on the splash-screen. The header was also simplified to a single-line nav bar, leaving out the social links. 

![](/blog/assets/newsletter-202511/portfolio-wip-demo.gif)

The remaining work is less structural than what has been done this month. I expect a faster pace moving forward.


## Learning

The good news is that I spent quite a bit of time drawing in a sketchbook with technical pens as I was forced away from the computer. These are low-pressure, quick throwaway sketches. I think of it as rehab work: just getting myself back into a routine. Below are some samples extracted from the sketchbook. 

![](/blog/assets/newsletter-202511/sketchbook-tour.gif)
![](/blog/assets/newsletter-202511/nov-sketchbook-compilation.jpg)

I also continued familiarizing myself with Houdini some before the laptop gave out, but it is still a timid toe dip. It will require a deeper dive at some point.


---

**Next Steps**

I hope to bring both product-development projects and the website overhaul to a stable state. These three pieces together should demonstrate overall web app development competency, music theory understanding, and advance some ideas I care about a bit. Once complete, time blocks should be available for the next projects, which I'm waiting for.