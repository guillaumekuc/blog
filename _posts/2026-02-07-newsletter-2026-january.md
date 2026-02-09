---
title: Newsletter - January 2026
author: guillaumekuc
date: 2026-02-07
categories: 
layout: post
tags:
  - newsletter
  - music-composition
  - music-theory
  - visual-arts
  - ai
  - tools
  - web-development
  - learning
permalink: 
published: true
---

Bonjour ! 

This month's work competed with external commitments (flat move, repairs), resulting in fewer logged hours and output. I gave priority to a music track and a digital artwork pieces in an attempt to obtain tangible artifacts to present within the limited time. The Chordex project also moved forward a modest but important bit. 

![](/blog/assets/newsletter-202601/timesheet-202601.png)

## Production

### Music

<audio controls>
  <source src="/blog/assets/newsletter-202601/laidback-guitars&synth-january.mp3" type="audio/wav">
  Your browser does not support the audio element. <a href="/blog/assets/newsletter-202601/laidback-guitars&synth-january.mp3">Download the audio file</a>.
</audio>

For this month track, I aimed to record my guitar directly instead of composing in MIDI. The hypothesis: recorded improvisation would recruit trained reflexes and beat note-by-note MIDI entry in speed. Reality was messier.

Improvisation relies on “transient hypofrontality”: attenuated self-monitoring, loosened executive control, and temporal dilation. As a result: time management is severely impaired, to put it bluntly. 

Next time, I need a clearer separation of roles: improviser vs. editor/composer. They do not mesh. I still got somewhere and picked up a few more audio production tricks in passing, such as: using a multiband compressor to highlight the low fundamentals of a low tuned guitar, paired with a bass amp sim to preserve the low-end, as an example ([Reaper](https://www.reaper.fm/), [Amplitube](https://www.ikmultimedia.com/products/amplitube5/), [Melda Production](https://www.meldaproduction.com/))

In parallel, I’ve been experimenting with “harmonic glyphs”: labeled sets of three Chord Relationships (four chords). The goal is to compose and improvise with these glyphs. That’s classic chunking: it reduces the short-term memory load to support coherent macro-form composition in real-time. So far it is promising, I mainly need to grow the size of the accessible glyph library (active vocabulary) progressively.

### Painting

I also worked on a digital painting and revisited [Google Nano Banana](https://gemini.google/overview/image-generation/) with a different approach. This time, I took care of structure and delegated the surface to the diffusion model. My focus was on story, perspective, forms, base colors. The “blueprint” was passed to Nano Banana for lighting & rendering. 

![](/blog/assets/newsletter-202601/guitarPlayer-horseRider-madakos-forest_aiRenders.gif)


Turns out: Nano Banana is relatively steerable under this scenario. 
However I must establish a clear **limit to authorship**: I am not responsible for any pixel in these images, so the results do not feel mine. I present multiple renderings of the same blueprint because they feel subjectively swappable and cheap: I am not attached to any single one. What feels authored is what is common across them: the underlying structure, rather than the surface realization. 

![](/blog/assets/newsletter-202601/guitarPlayer-horseRider-madakos-forest_blueprint.jpg)

A post-production step could be added for targeted fixes and some more appropriation. I remain (very) ambivalent about this workflow.

## Product Development 

### Chordex

Affect-based tags for Chord Relationships (relative notation for moves between chords) were added to Chordex. These tags are required to navigate the 192 relationships efficiently and make the system usable out of the box.

![](/blog/assets/newsletter-202601/chordex-affect-tags.gif)

To derive them, I used LLMs and the [Agent Skills](https://agentskills.io/home) architecture, which is slowly standardizing. Skills bundle long, reusable prompts with scripts, references, and contextual information so an LLM can perform a task reliably.

The objective was to avoid my own subjective bias and instead source affect tags from global consensus. The internet corpus served as the source of truth.

I used [Perplexity Deep Research](https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research) capabilities to review many sources. The main constraint: while the information exists, it is rarely encoded in the same notation format. For each Chord Relationship, the LLM systematically searched for absolute notation equivalents (e.g., “C to Db” instead of M ♭II M), natural-language descriptions (“movement from major chord to a major chord a minor second above”), Roman numeral analysis, and other symbolic encodings.

Searches were conducted in batches of 16 Chord Relationships. The process required more steering than this summary suggests (LLM output variance remains high) but it successfully attributed tags to just under 1/3 of the 192 relationships. The remainder are under-determined due to a lack of online discussion, suggesting that roughly 2/3 of the harmonic space is either under-explored or non-pertinent in practice.

![](/blog/assets/newsletter-202601/chordex-all-raw-affect-tags.gif)

A final compression step was needed: the raw tags were too granular to be useful for sorting (many applied to only a single relationship). I looked for an irreducible affect taxonomy and found the [Valence–Arousal–Dominance (VAD) model](https://www.emergentmind.com/topics/valence-arousal-dominance-vad-dimensional-framework). It covers three axes: valence (pleasure/displeasure), arousal (activation), dominance (control/submission). Using binary splits, we surface eight affect labels: Anger/Defiance, Calm/Safe, Content/Assured, Excited/Uplifted, Grim/Control, Joy/Triumph, Sadness/Melancholy, Fear/Tension. LLMs were then used to map the many raw tags onto this reduced set semantically.

## Marketing

Following last month’s portfolio launch, I made additional polish tweaks here and there. Most notably, The splashscreen is less static; subtle keep-alive animations and animated grain were added.  

The music playlist section is also undergoing a redesign pass to replace the previous photo-based layout, but this is not yet finished or published.

## Sales

I began rehabilitating a simple [Obsidian](https://obsidian.md/)-based CRM (Customer Relationship Management) system prepared earlier (~400 company entries collected for later use).

I was pleased to find out that Obsidian now includes a native [“Base”](https://help.obsidian.md/bases) format, enabling dynamic databases similar to [Notion](https://www.notion.com/). This functionality previously required third-party plugins (Dataview).

## Learning

A decent amount of time went into learning [Houdini](https://www.sidefx.com/products/houdini/). The progress is still invisible, however, the knowledge is starting to form a coherent picture. It should eventually become usable. I have some concrete experiments queued. 

—

Hopefully, next month I’ll slid back into my rhythm as it existed before this month’s interruptions. Until next time !