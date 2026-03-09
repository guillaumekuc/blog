---
title: Newsletter - February 2026
author: guillaumekuc
date: 2026-03-09
categories: 
layout: post
tags:
  - newsletter
  - learning
  - music-production
  - product-development
  - marketing
  - ai
  - tools
permalink: 
published: true
---

Bonjour!

February is a short month, especially since it began late for me from last month’s spillover. The timesheet is also a bit contaminated by that spill over. That being said, progress with [Houdini](https://www.sidefx.com/products/houdini/) in particular saw a phase change lately. March starts on good footing. Sunlight made its return !

## LRN

![](/blog/assets/newsletter-202602/20260309_LRN_HoudiniStratocaster.gif)

This month I did a proper deep dive with [Houdini](https://www.sidefx.com/products/houdini/) as there’s been a phase change. The software now feels usable. I went through the steepest early phase of the learning (mapping the interface and concepts), and now have enough of a model of how everything fits so that I can build with it.

I began working on a procedural model of a guitar. The idea is to drive it with a few input shapes and get a fully modeled and detailed 3d model as an output. At the moment it is being modeled after a Stratocaster but because it is procedural, many variations could be produced with a few changes to the inputs.

![](/blog/assets/newsletter-202602/20260309_LRN_HoudiniStratocaster_baseShapes.gif)

Because everything is procedural, with a few parameter tweaks we can drive changes across the whole model. As an example, changing the string count has repercussions across the tuning pegs, the pickups, and the fret-board inlays.

![](/blog/assets/newsletter-202602/20260309_LRN_HoudiniStratocaster_stringCount.gif)

A lot of what I did at my [previous job](https://visioglobe.com/) (writing plugins for our Map Editor and using things like [paper.js](http://paperjs.org/); an svg and geometry library) and on past personal projects (Gridz plugin; a rotatable perspective grids generator for Photoshop resting on trigonometry logic) transfers pleasantly well to Houdini. Those are similar geometry problems, similarly expressed through code (this time in [VEX](https://www.sidefx.com/docs/houdini/vex/index.html), a C like language).

![](/blog/assets/newsletter-202602/20260309_LRN_HoudiniStratocaster_nodes.gif)

![](/blog/assets/newsletter-202602/20260309_LRN_HoudiniStratocaster_attribWrangle.gif)

There is still work left to do on this project. However, the next Houdini project after that will need not be classified into the LRN bucket anymore as it has became usable for production.

## PROD

<audio controls>
  <source src="/blog/assets/newsletter-202602/Songo_wip01.mp3" type="audio/mpeg">
  Your browser does not support the audio element. <a href="/blog/assets/newsletter-202602/Songo_wip01.mp3">Download the audio file</a>.
</audio>

I have been working on an other piece of music. Back to midi composition. I didn’t want to risk the time control hazards I experienced with the recording constraints last time. The piece is at a stage akin to a lead sheet: melody + chord and rhythms indication. It’s a compressed version that will need to be unpacked, fully arranged and orchestrated at a further stage. I am considering waiting for several pieces to reach this stage and queue before batching the labor of arranging and orchestrating in order to ensure cohesiveness across a corpus of a few.

![](/blog/assets/newsletter-202602/20260309_PROD_ScoreForm&Harmony.gif)

About this one, I had fun writing an outside solo section using super-imposed harmony techniques. I used temp rhodes VST sounds as they are neutral enough to be used for sketching, at the preproduction stage.

I also began working on a visual piece that is not yet ready for show. It can be expected for next month’s newsletter.

## MKTG

I published an [article](https://guillaumekuc.github.io/blog/digital-indoor-mapping-experience/) that is a quick compression of my experience at my last workplace, covering tool dev in a production context and small team constraints. For anyone wondering what I’ve been up to the past few years.

![](/blog/assets/newsletter-202602/20260309_MKTG_VgXPArticle.gif)

## G&A

I began experiments with [OpenClaw](https://openclaw.ai/), an open source agent system that acts as a scaffold around llm models. At the moment it runs on a [Virtualbox](https://www.virtualbox.org/) virtual machine on my computer and can be interacted with through [Telegram](https://www.telegram.org/). It has access to tools and things like my [Obsidian](https://obsidian.md/) PKM or calendar. Expect to see a more consequent update in March discussing this setup in more details as I continue exploring the possibilities offered by such a setup and its limitations. For now I would say it is still early and requires quite a bit of infrastructure setup, I wouldn’t advise going into it casually.

---

March’s ratios will look very different; I need to rebalance at the quarter scale.
