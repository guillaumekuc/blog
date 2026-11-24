---
title: "[Newsletter] A Canvas for LLM Agents, a Base-12 Notation, and Tone Chasing"
author: guillaumekuc
date: 2026-11-24
categories: 
layout: post
tags:
  - newsletter
  - tools
  - ai
  - music-theory
  - guitar
permalink: 
published: true
---

Bonjour,

This issue covers three things: an Obsidian  [canvas](https://obsidian.md/canvas) plugin for working with LLM agents, a custom notation in the music notebook, and a little bit of guitar tone chasing.

## A canvas for working with LLM agents

### Why?

The direction of travel suggests we will be using LLM agents more and more. Working with them inherently implies some level of parallelism and multitasking: back and forths, waiting for task completions while directing the next agent on its next task. And tasks typically split into subtasks and sub-subtasks: task trees, an arborescent structure.

Existing UIs are linear and flat: a sidebar list, or terminal-style tabs and split panes (2–4 sessions at most). Within each session, everything is chronological. One common complaint with today's LLM UIs: losing track of some thread.

### Hypothesis: the canvas

My hypothesis is that mind maps and canvas representations are better candidates for thinking with and directing LLM agents.

The mind natively thinks in graphs and associations. We are very good at [spatial memory](https://en.wikipedia.org/wiki/Spatial_memory); that's why the memory palace[^palace] technique works. The equivalent here is anchoring linear, sequential pieces of information to a spatial (2D) representation: macro orientation and local depth. It also offloads working memory onto the canvas.

This is already used in node-based software like [Houdini](https://www.sidefx.com/products/houdini/), [Blender](https://www.blender.org/), Unreal Engine [Blueprints](https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine) or [n8n](https://n8n.io/)[^nodes]. Programming is graph-like, so whenever programming logic needs a visual representation, nodes and 2D representations appear. And managing LLM agents is programming-like, only less deterministic (soft systems and orchestration).

### The workflow

Cards are tasks or wishes. Arrows are pointers.

![A Kanvas board: cards are tasks, arrows point to context, the color is the state](/blog/assets/newsletter-202611/kanvas-overview.gif)

Pointing is surprisingly primitive capacity: infants begin [pointing](https://en.wikipedia.org/wiki/Pointing) in their first year of life. It is a pre-linguistic mechanism for sharing attention and intent, and it is a lot faster to point than to spell it out. Agents need relevant context to work effectively: just point them to it, rather than copy-pasting large blocks of text all the time.

Color coding functionally turns the canvas into a [Kanban board](https://en.wikipedia.org/wiki/Kanban_board)[^kanban]. Cards move through Inbox / Planning / Ready / In Progress / Review / Done / Blocked / Discarded. Cards that need attention are identifiable at a glance: yellow, for review.

![The starter board: what each color means, and the first steps](/blog/assets/newsletter-202611/kanvas-starter.png)

![Coloring a wish: cyan for the agent to do it, purple for it to plan it](/blog/assets/newsletter-202611/kanvas-color.gif)

Hitting "Process canvas" transmits the actionable cards (things to plan, things to do) and their linked contexts (the arrows) to an LLM agent, which then sets those cards orange for in progress, and returns them either yellow for review or green for done. Each pass runs as a single agent session covering all actionable cards. Parallelization was considered but dropped. The workflow is asynchronous and bottlenecked by review, not agent speed, so extra completion time costs nothing. Parallel sessions would also resend the base context each time, raising usage costs. Further use will provide more feedback.

![A pass: the agent turns the cards it takes orange, then hands them back green (done) or yellow (review)](/blog/assets/newsletter-202611/kanvas-pass.gif)

![](/blog/assets/newsletter-202611/kanvas-settings.gif)

The planning and reporting is done within linked task notes, themselves referenced in project notes. The canvas stays a map rather than content.

An archival system (that allows cards to be restored at their previous position on the board) helps keep the board clean: at 100+ cards, the board becomes more difficult to scan. Other aids: merging cards, packing them into subcanvases, folding hierarchies, filtering by color or tag, search. Of course, everything is mappable to hotkeys using Obsidian's native design. Procedural memory is an even cheaper asset to maintain than spatial memory, once acquired.

![Folding a branch away and unfolding it a level at a time](/blog/assets/newsletter-202611/kanvas-fold.gif)

![The filter pane: hiding cards by color](/blog/assets/newsletter-202611/kanvas-filter.gif)

![](/blog/assets/newsletter-202611/kanvas-pack.gif)

### Payoff

Agents working on the PKM[^pkm] leave traces and artifacts that accumulate and become available context for further agents. By comparison, regular chat conversations are bounded and lost.

Cards can be saved as templates and reused. They become like macros for LLM workflows. This is [chunking](https://en.wikipedia.org/wiki/Chunking_(psychology))[^chunking], the same thing that allows very fluent improvisation on guitar, or in drawing. For example, you could store a whole suite of verification tasks as a single template (a collection of cards) and call them back anytime for your next project.

### Convergence

I've stumbled upon the project of [this 3D artist](https://www.youtube.com/watch?v=68kzhZHkPf0), who developed software to solve that same interface problem, but in his 3D workflow. AI is becoming 3D capable, but he felt that the text-first interface (prompting) is not appropriate for 3D work. Instead, he built software to annotate directly in a 3D viewport: blockout, scribbles painted on the surface, notes attached to geometry, reference images per part, and "hero" cameras (double-click an image to recover its camera). A 3D brief. See the release post: [Go get a Mule! – Official Open Source Release](https://www.youtube.com/watch?v=_I35lzvzHvs).

AI workflows would benefit from interfaces better fitted to their medium, not just a prompt box.

## Music notebook: a base-12 notation

I have added support for a custom notation in the music notebook.

I found myself thinking that note names as usual are a pain to write in, because they are an absolute notation, whereas music is better conceived relatively (intervals). On the other side of it, you have [MIDI notation](https://en.wikipedia.org/wiki/MIDI_tuning_standard)[^midi]: just plain numbers, and you can do some arithmetic with them. For example, adding 7 gives you a perfect fifth. However, MIDI notation loses the name and octave of a note. It can be recovered, but it requires thinking in modulo 12: C4 is MIDI 60, C5 is MIDI 72, C6 is MIDI 84, and so on.

The question is simple: for music in [EDO-12](https://en.wikipedia.org/wiki/12_equal_temperament)[^edo] (the standard splitting of the octave), wouldn't it make sense to count in a [duodecimal](https://en.wikipedia.org/wiki/Duodecimal) system (base-12)[^base12] instead?

Each note gets its own digit (A and B are added to cover 10 and 11 in decimal equivalent). A C note will always have the digit 0, while an E will always be 4: the mapping is stable. The next column then becomes a representation of the octave. For example, 10 is C1, 40 would be C4, and 44 would be E4.

![A C major scale typed in dozenal: 0 is always C, 4 always E, the first digit is the octave](/blog/assets/newsletter-202611/notebook-dozenal.gif)

This solves the mapping to absolute note names: the notation tells you the note name and its octave without having to perform modulo arithmetic. And it preserves the advantage for thinking with intervals: adding 7 is still equivalent to a perfect fifth.

## Tone chasing

I've indulged in a little bit of guitar tone chasing lately. It's prep work for an upcoming recording, as I would like to update the performance videos on my website.

### New pickups and soldering

I've been setting up parallel wiring in the in-between positions of the electric guitar. Parallel wiring produces lower output and a higher resonant peak (a brighter, cleaner, more open, chimey tone) compared to series wiring, which boosts the low mids.

In addition, because the pickups sample the strings at different positions, their signals differ and are out of phase: at the same instant, one pickup can see the string moving up and the other down. Harmonics moving in the same direction at both pickups are reinforced, while harmonics moving in opposite directions cancel out, carving deep frequency notches into the output. This produces what is called [comb filtering](https://en.wikipedia.org/wiki/Comb_filter)[^comb], which acts as complex EQ and alters the overall timbre of the instrument. The specific timbre depends on the distance between the pickups.

Position 4 on this guitar is already wired for the middle pickup + a split coil[^split] in parallel. That's a classic [Strat](https://en.wikipedia.org/wiki/Fender_Stratocaster) position, known for a "quacky" sound, with a snappy attack and lots of clarity and separation. A scooped, funky, percussive tone (it's the home position for [Cory Wong](https://en.wikipedia.org/wiki/Cory_Wong), for example).

![](/blog/assets/newsletter-202611/wiring-a-5way.png)

To be continued with a super-switch[^superswitch], which will then allow me to wire position 2 of the 5-way pickup selector into split coil bridge + split coil neck in parallel. This combines a coil from the neck and one from the bridge pickup, which are a larger distance apart. It's reminiscent of a [Telecaster](https://en.wikipedia.org/wiki/Fender_Telecaster) middle position: another flavor of scooped tone. Its comb filtering is subtler, so it keeps a fuller, more acoustic-like tone than position 4. This guitar aims at maximum versatility; wide-spacing comb filtering is the missing piece, so it's next on the list.

![](/blog/assets/newsletter-202611/wiring-b-superswitch.png)

### Getting a bit opinionated about electric guitar tones

I take acoustic instruments as the source of truth of what a natural frequency spectrum should look like.

Steel strings + an electromagnetic pickup = a flawed capture. It picks up on string motion, not air waves. Sharp attacks and upper mids are overemphasized, so are boxy mids, while the body is largely under-emphasized (missing low end).

The result: the electric guitar feels like a disembodied instrument, with a very unnatural frequency spectrum. It kind of works on recordings, where there are other instruments and a mix engineer to assemble parts into a coherent composite body. It doesn't work in a chamber music setting, where each instrument must stand on its own.

EQ should compensate for that, rather than push it further into imbalance.

[^agent]: LLM agent: a language model that carries out tasks on its own with tools (reads and edits files, runs commands), rather than only answering in a chat.
[^palace]: Memory palace ([method of loci](https://en.wikipedia.org/wiki/Method_of_loci)) anchors abstract information to the memories of physical places in one's mind.
[^nodes]: n8n: an automation platform. Blueprints: Unreal Engine's visual scripting system.
[^kanban]: Kanban board: columns of cards, one per stage of work; a card moves from column to column as it progresses. Here the color plays the role of the column.
[^pkm]: PKM: personal knowledge management, here an Obsidian vault of notes.
[^chunking]: Chunking: grouping several pieces of information into one unit, recalled and used as a whole.
[^midi]: MIDI note numbers: one number per semitone, C4 = 60.
[^edo]: EDO-12: 12 equal divisions of the octave, the standard tuning of Western music.
[^base12]: Base-12 counts with twelve digits, 0–9 then A (ten) and B (eleven), so "10" means twelve.
[^comb]: Comb filter: a signal added to a delayed copy of itself; its frequency response has evenly spaced notches, like the teeth of a comb.
[^split]: Split coil: using only one of the two coils of a humbucker pickup, which sounds closer to a single coil.
[^superswitch]: Super-switch: a pickup selector with more poles than the standard 5-way switch, so each position can be wired freely.
