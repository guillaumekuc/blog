---
title: Newsletter - December 2025
author: guillaumekuc
date: 2026-01-01
categories: 
layout: post
tags:
  - newsletter
  - visual-arts
  - web-development
  - game-development
  - music-theory
  - tools
permalink: 
published: true
---

Bonjour !

Last newsletter of 2025: a painting out, portfolio website v2.0 out, new game mode for the relative harmony trainer game prototype, photoshop scripts and plugin tweaks.
Happy New Year 2026!

![](/blog/assets/newsletter-202512/202512-timesheet.png)
## Production

I present the following visual piece this month. 

![](/blog/assets/newsletter-202512/funk-you-cable-car-madakos-mSize.jpg)

Overall, a bit more prep went in than last time: some world-building was written first, and appropriate reference gathering was done before starting.  

I switched to using a vignette style compositions to reduce the surface area to paint, thinking that if it worked for [Dean Cornwell](https://www.google.com/search?q=Dean+Cornwell+vignette&udm=2), I should probably try that too. This let me hit the effect of a full scene and all the aspects of digital paintings that I care to train (composition, perspective, values, colors: the grammar) while cutting down some on iteration time. 

In passing I also tried out [Nano Banana](https://deepmind.google/models/gemini-image/). I attempted to find it a spot within my workflow: generating flat silhouette shapes as assets to then use as PS custom shapes in a [Sparth](http://www.sparth.com/) like workflow. I also tried to use Nano Banana to advance one step at a time: generating blocking shapes from the sketch/line art (base, flat colors shapes ready to be lit/rendered). My experience so far, is that it is still a very limited tool, despite the slight improvements in instruction following and targeted interventions compared to previous generation image models. 

## Marketing

### [Portfolio Website](https://www.guillaumekuc.art)

This month, the MKTG bucket was once again the largest one as I needed to complete the portfolio website overhaul. 

![](/blog/assets/newsletter-202512/portfolio-website-splashscreen.gif)
![](/blog/assets/newsletter-202512/portfolio-website-about.gif)
![](/blog/assets/newsletter-202512/portfolio-website-galleries-metadata.gif)

It is now out as a v2.0: the website has been migrated to the [Svelte](https://svelte.dev/) framework. The architecture is more durable, easier to maintain. Content and metadatas are stored as json and markdown files, making it straightforward to update the portfolio in the near future. This iteration builds upon systems that were established in the previous one: the navigation system, the music player system, and the shortcuts system. Responsiveness tweaks and fine-tuning were made, multiple edge-cases were polished away. Attention was given to keeping the initial load time light. The copies – and especially the about section copy – were updated to better reflect my current outlook. 

On a side note, I experimented with an interactive animated background which responds to mouse movement by propagating a symbol cycling command around. 

![](/blog/assets/newsletter-202512/ripple-propagation-background.gif)

A second experiment used a vector field to guide particles motion, leaving trails behind them, for an animated flowy lines effect.  

![](/blog/assets/newsletter-202512/flowy-lines-animated-background.gif)

I ended up not keeping these animated backgrounds for the sake of simplicity, but it was interesting none-the-less.  

The codebase is now available for consultation on [github](https://github.com/guillaumekuc/portfolio). Line count sits at around 9000, which reflects the SPA (Single Page Application) and the multidisciplinary nature of the portfolio. Time allocated to the MKTG bucket should drop significantly in the coming months to make space for other projects. 

## Product Development

### [Relative Harmony Trainer Game](https://github.com/guillaumekuc/chord-relationships-analyzer)

The now game has undergone a significant refactor to make space for other play modes besides Chord Relationships. It also underwent some simplifying: many of the setting knobs are abstracted away to present a more minimal set of configs to the user than what is available under the hood. 

![](/blog/assets/newsletter-202512/relative-harmony-trainer-configs.gif)

A new game mode has been added. As a reminder, the previous game loop presented entities at the player that he has to clear by playing their associated Chord Relationship (CR). An “Intervals” game mode has been added in which enemies are tagged with intervals instead. The engine recognizes intervals played in succession rather than CRs as a way to check for matches. This mode is significantly easier than the Chord Relationships mode and didactically upstream of the concept of CRs. Other modes will be added progressively. 
I also implemented an adaptive tempo algorithm and exposed the hit dealt/received ratio in the UI.

![](/blog/assets/newsletter-202512/relative-harmony-trainer.gif)

Overall not all that much time went into PD this month. More polish is still needed all around. 
## General & Administrative

Some necessary paperwork, exchanges and meetings with our dear french institutions occurred.
I extended my time collection script in [Obsidian](https://obsidian.md/) to also collect times per Project across the weekly notes automatically. I wrote a few checklists for myself for consistency of process upstream of digital painting (planning and reference collection phase in particular). 

### [Photoshop Toolkit](https://github.com/guillaumekuc/photoshop-toolkit)

Besides those, I assembled a little collection of jsx scripts for Photoshop, including a AutoHotKey script to map tools and actions relevant to digital painting firmly in the left of the keyboard, and on an external numpad placed on the left side.
The numpad mappings are used to adjust the active color on the fly by Lightness (Value), Saturation, or Hue. The script uses the Lab color space for perception accurate Lightness value. The collection has been documented and is available on [github](https://github.com/guillaumekuc/photoshop-toolkit). It is meant to be modified overtime.  

### Gridz

![](/blog/assets/newsletter-202512/gridz-y-rotations.gif)

I have also been tweaking my old Gridz plugin for photoshop for robustness as I’ve found some instabilities on my current Photoshop setup. Gridz is a plugin that generates dynamic perspective grids that can be reoriented on the fly to accurately draw objects in any orientation within a scene. The occasional bugs appear to be fixed now, but the update is not yet published. On a side note, Adobe moved on from CEP to UXP in 2022, a new extension architecture, which means that the plugin would benefit from a carriage for future-proofing. This is something I have to keep in mind for later.

