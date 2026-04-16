---
title: Newsletter - March 2026
author: guillaumekuc
date: 2026-04-09
categories: 
layout: post
tags:
  - newsletter
  - music-production
  - ai
  - 3d
  - vr
  - sales
permalink: 
published: true
---

Bonjour!

This month, an unexpected inbound query took precedence over other projects as it was about a potential upcoming collaboration and called for time-sensitive pre-sales work. Outside of that, some music progress and 3D side quests happened, along with AI experiments spanning OpenClaw to Suno.

## PROD

I moved forward on last month’s score by one increment. Last time it was in a lead-sheet state: melody was written, while harmony and rhythm were only suggested. Now the harmony has been fully unpacked into proper SATB writing. SATB stands for Soprano/Alto/Tenor/Bass, a standard method for composing contrapuntal lines (interwoven melodies).

<audio controls>
  <source src="/blog/assets/newsletter-202603/202602-i03-SatbSketch.mp3" type="audio/mpeg">
  Your browser does not support the audio element. <a href="/blog/assets/newsletter-202603/202602-i03-SatbSketch.mp3">Download the audio file</a>.
</audio>

As an experiment, I fed that complete musical sketch to [Suno AI](https://suno.com/) as an input. I am finding out that Suno can follow a template and produce a fully "rendered" version of it. It feels equivalent to handing a score to a professional arranger/orchestrator and producer/sound designer, minus a few artifacts and deviations, and with an enormous speed and cost differential.

This is a similarly troubling feeling to what I had with [Nano Banana](https://gemini.google/ch/overview/image-generation): authorship stops at the hand-off. My role as composer in these pieces is still mostly intact, but not that of orchestrator or producer. These technology leaps open many questions along with new opportunities, and I will need time to process both.

Below are three different Suno renders of the same input in distinct styles, ranging from glitchy hyperpop to cartoonish symphonic.

<audio controls>
  <source src="/blog/assets/newsletter-202603/202602-i03-Suno-GlitchyHyperpop.mp3" type="audio/mpeg">
  Your browser does not support the audio element. <a href="/blog/assets/newsletter-202603/202602-i03-Suno-GlitchyHyperpop.mp3">Download the audio file</a>.
</audio>

<audio controls>
  <source src="/blog/assets/newsletter-202603/202602-i03-Suno-CartoonishSymphonic.mp3" type="audio/mpeg">
  Your browser does not support the audio element. <a href="/blog/assets/newsletter-202603/202602-i03-Suno-CartoonishSymphonic.mp3">Download the audio file</a>.
</audio>

<audio controls>
  <source src="/blog/assets/newsletter-202603/202602-i03-Suno-Romantic.mp3" type="audio/mpeg">
  Your browser does not support the audio element. <a href="/blog/assets/newsletter-202603/202602-i03-Suno-Romantic.mp3">Download the audio file</a>.
</audio>

As a side quest, and because I want to equip my flat with a platform bed to free up storage space, I ended up building an in-context functional model of the bed in [Blender](https://www.blender.org/). The model describes the framework and the lumber sections (53 x 75 mm pieces) required for construction. The design should save around 3 cubic meters of space and reuse two 80 x 60 x 60 IKEA units, fitted with casters and stored under the bed.

<video controls>
  <source src="/blog/assets/newsletter-202603/PlatformBedModel.mp4" type="video/mp4">
  Your browser does not support the video element. <a href="/blog/assets/newsletter-202603/PlatformBedModel.mp4">Download the video file</a>.
</video>

![](/blog/assets/newsletter-202603/20260407-BedFrame.gif)

Similarly, I have been reproducing a piano key in Blender for 3D printing. I previously modified a MIDI keyboard to change the key layout from the standard 7-5 pattern to a 6-6 layout. The 6-6 layout spaces intervals regularly, so the same fingering always yields the same interval structure, making vocabulary acquisition more efficient. For more details, I recommend [Le nouveau clavier](https://www.le-nouveau-clavier.fr/en/).

## SALES

I unexpectedly received an incoming request this month and dedicated time to conduct a feasibility study for a potential VR collaboration in [Unity](https://unity.com/fr). Examining that request took the spotlight this month, and much of that research was logged into the learning bucket.

This led to quick trials and evaluations of tools like [Character Creator](https://www.reallusion.com/character-creator/), [Meta Human](https://www.metahuman.com/), and others for human character generation. I also tested motion-capture tools to speed up the animation stage. I was impressed in particular by [QuickMagic](https://www.quickmagic.ai/), as it produces exploitable results from a single camera angle.

![](/blog/assets/newsletter-202603/QuickMagic-2DAnimationRefinement.gif)
![](/blog/assets/newsletter-202603/QuickMagic-DancingExample.gif)

The asset path from DCC to Unity to a VR headset ([Meta Quest 3S](https://www.meta.com/fr/quest/quest-3s/), standalone and PCVR mode) has been fully tested. I also explored sourcing options for assets. We are trying to anticipate a full pipeline, identify potential roadblocks early, and keep both schedule and budget manageable.

It has been an interesting pipeline-solving exercise so far.

## G&A

I mentioned it in passing last month: I got curious about [OpenClaw](https://openclaw.ai/) and set it up myself on a VirtualBox instance on my computer. The bot can be messaged from Telegram (including from a phone), and it operates on PKM and project folders, calendar, and emails (under its own address). The possibilities are broader than what I have explored so far, but it can already function as an assistant reachable anytime on the go.

There are security issues, but proper containment seems to be a large part of the solution. Treating OpenClaw as a third party means security practices used for humans apply here too. Rather than direct access, it needs separate accounts for email, files, and calendar. This is classic access-control and backup logic.

In fact, setting up OpenClaw is a useful test of infrastructure maturity. If it works cleanly with OpenClaw in the loop, it is probably ready for collaborators.

Although this system can conduct some operations autonomously, "old school" automation still seems preferable wherever possible, because running code locally is cheaper than sending and receiving tokens from an LLM provider. Costs can climb fast on large-scale refactors and file operations. Tools like Cursor invested heavily in reducing token traffic (for example via their fine-tuned Composer model), while this optimization layer is not available out of the box with OpenClaw.

I do believe inference costs should continue to decrease by next year, especially following recent optimization findings from DeepSeek. For more context: [Two Minute Papers: DeepSeek Just Fixed One Of the Biggest Problems With AI](https://www.youtube.com/watch?v=DmtoVnTkQnM).

---

