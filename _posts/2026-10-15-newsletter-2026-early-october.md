---
title: "[Newsletter] Possession in Vilja, a Music Notebook, and the Fuzz Pedal"
author: guillaumekuc
date: 2026-10-15
categories: 
layout: post
tags:
  - newsletter
  - vilja
  - game-development
  - tools
  - music-theory
  - music-gear
permalink: 
published: true
---

Bonjour,

The newsletter is filling-up fast this month. I am thus publishing it at the mid-point and will do an other one by the end of the month. The Vilja prototype gained a defining swarm control mechanic, along with tactical tiles, MIDI-based timekeeping and harmonic elaborations. Furthermore, a new music notebook tool was born out of personal need and of nostalgia for a long gone platform. 

## Vilja prototype

Working hands-on with a prototype brings out different ideas than planning it in advance does.

### Possession mechanics

The most noteworthy update to come out of this work is a proper mind-control mechanic, 

In the [world-building](https://guillaumekuc.art/pdf/vilja_dossierArtistique.pdf) of the project, melodurgy is mind control: as melodurges, the characters can control others through music. The gameplay as described, however, was not fully exploiting this idea yet. The antagonist possessed units and turned them hostile, but the player character only used melodurgy to break the spell and free the possessed units. This put the player in a defensive role, and the mechanics were closer to a regular shooter.

The core change is that explicit mind control has been granted to the player. The mechanic borrows the swarm management of [Pikmin](https://en.wikipedia.org/wiki/Pikmin) and puts it in an arena-shooter context. A correct musical hit now possesses, or captures, the hostile instead of clearing it.

![Correct notes capture hostiles, which turn blue](/blog/assets/newsletter-202610/vilja-capture.gif)

The player accumulates a swarm of controlled units that they can move through the arena by pointing. The player character stays immobile as long as units are under control; releasing the swarm lets them move again. This creates a trade-off between controlling the swarm and the hero's own mobility.

![Pointing moves the swarm while the hero stays put; clicking the hero releases the swarm](/blog/assets/newsletter-202610/vilja-swarm-move.gif)

The swarm can be used to physically intercept hostile units, which produces casualties on both sides.

![The swarm intercepts incoming hostiles; the casualty counter goes up](/blog/assets/newsletter-202610/vilja-swarm-intercept.gif)

The game keeps score of how many casualties occurred and how many units were successfully freed, which puts the moral weight back on the player's shoulders. They are not being babysat.

### Space-control mechanics

The other important change is the addition of special tiles that reward positioning. The inspiration comes from my memories of [Dofus Arena](https://en.wikipedia.org/wiki/Dofus_Arena) and of tactics games. Tiles count time in turns, and a turn is equivalent to a beat, which means they adapt to the game's tempo.

Ten different tiles have been implemented so far.

**Hit modifiers**

- **Sweep**: one correct note captures every matching hostile, not just one.
  ![Sweep tile](/blog/assets/newsletter-202610/vilja-tile-sweep.gif)
- **Range**: the hero captures the farthest match instead of the nearest. Stepping on the tile also pushes nearby units away and stuns hostiles.
  ![Range tile](/blog/assets/newsletter-202610/vilja-tile-range.gif)
- **Wild Card**: any note captures.
  ![Wild Card tile](/blog/assets/newsletter-202610/vilja-tile-wildcard.gif)

**Buffs**

- **Haste**: the hero moves twice as fast.
  ![Haste tile](/blog/assets/newsletter-202610/vilja-tile-haste.gif)
- **Resistance**: temporary shields on top of your hearts, shared with your allies.
  ![Resistance tile](/blog/assets/newsletter-202610/vilja-tile-resistance.gif)

**Traps** (any unit can set them off)

- **Lethal**: explodes two turns later and kills everything right next to it.
  ![Lethal trap](/blog/assets/newsletter-202610/vilja-tile-lethal.gif)
- **Damage**: same timing and a wider reach, but it only takes one heart.
  ![Damage trap](/blog/assets/newsletter-202610/vilja-tile-damage.gif)

**Utility**

- **Bullet-Time**: everything slows to a third of normal speed.
  ![Bullet-Time tile](/blog/assets/newsletter-202610/vilja-tile-bullettime.gif)
- **Warp**: a pair of pads that teleport any unit to the other one.
  ![Warp pads](/blog/assets/newsletter-202610/vilja-tile-warp.gif)
- **Regeneration**: heals one heart per turn while a unit stands on it.
  ![Regeneration tile](/blog/assets/newsletter-202610/vilja-tile-regeneration.gif)

Later implementations will add cooldowns and limits to these tiles.

### MIDI-aligned timekeeping

One feature that will matter for the scalability of this project is the ability to author levels in a MIDI editor. MIDI is a native representation for musical material, so a composer will be able to work autonomously, without the difficulties of handing everything off to a programmer.

The time unit in MIDI is not the millisecond but the tick. Ticks are independent of tempo: a quarter note is always the same fixed number of ticks (the file's [resolution](https://en.wikipedia.org/wiki/Pulses_per_quarter_note)). A level then carries a tempo map, which converts ticks to seconds, and a meter map, which indicates how beats are grouped into bars (four beats per bar versus six, for example).

The game can now import tempo maps and meter maps from a MIDI file, an important first step.

![HUD following a MIDI file's meter and tempo changes: 4/4, 3/4, 6/8 at 140 BPM, then 4/4 at 80 and 120 BPM](/blog/assets/newsletter-202610/vilja-midi-timing.gif)

### Harmonic mode

I also began implementing the game's harmonic mode, in which intervals are measured against an anchor chord's root rather than against the previous note played.

A level's chord progressions are generated from the bits of theory I have already been exploring on this blog around [chord relationships](https://guillaumekuc.github.io/blog/2025/10/27/harmonic-relativity-and-chord-relationships.html); see the [Chordex](https://guillaumekuc.github.io/chordex/) project for reference. Harmonic definitions are written in JSON. At present they include a collection of chord relationships from which the game draws at random, a harmonic rhythm that decides how often chords change, and a palette of intervals for each chord quality (major, minor, diminished, augmented) that the game uses to generate new hostiles while that chord is playing.

The hostiles already on the board get relabelled when the chord changes: their note is measured against the new anchor. When the new interval is not part of the permitted set, they snap to the nearest available interval.

![Harmonic mode: on each chord change, hostiles are relabelled against the new root; snapped ones flash orange](/blog/assets/newsletter-202610/vilja-harmonic.gif)

## Music Notebook

### The legacy of my.vexflow.com

This is a different project that started as a revival of Vex Fretboard. [Vex Fretboard](https://github.com/0xfe/vex-fretboard) is an older open-source JavaScript library created by Mohit Muthanna Cheppudira in 2013. It parses a text syntax and draws a fretboard onto a canvas using [Paper.js](http://paperjs.org/).

![Typing a fretboard diagram in Music Notebook](/blog/assets/newsletter-202610/notebook-fretboard.gif)

At the time, Vex Fretboard was hosted on a cloud platform, my.vexflow.com. Users could type text strings in a simple syntax to instantly draw chord shapes or scale patterns on a virtual neck. They could log in, save their custom fretboard diagrams, organise them and export them. my.vexflow.com also covered standard music notation and guitar tablature, through [VexFlow](https://www.vexflow.com/) and [VexTab](https://github.com/0xfe/vextab), as well as Markdown files.

The platform was eventually shut down, as it had become a burden to run as a side project. I was personally invested in it, having used it to produce the fretboard diagrams of my e-book [All-fourths tuning – Improvisation](https://www.amazon.fr/All-fourths-tuning-Improvisation-English-ebook/dp/B07F89CW6V) in 2018, and I was disappointed to see it gone.

### Reimplementation

This project takes the Vex Fretboard and VexFlow JavaScript libraries and gives them a web interface again. Storage is local-first, for personal use, rather than cloud-hosted; [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) is used for this purpose. Text notes are simple Markdown files, rendered with the [marked](https://marked.js.org/) library.

![Markdown note with an embedded fretboard](/blog/assets/newsletter-202610/notebook-markdown.gif)

Music notation builds on VexFlow, a notation renderer, and on [EasyScore](https://github.com/0xfe/vexflow/wiki/Using-EasyScore), the syntax that accompanies it. That syntax was extended here to cover the gaps; when in doubt, I aligned it with [LilyPond](https://lilypond.org/) syntax.

![Standard notation typed as text](/blog/assets/newsletter-202610/notebook-notation.gif)

### Extensions

#### MIDI numbers input

The notation syntax was changed to support MIDI numbers as well as note names, which makes it easier to think intervallically.

![The same major third four times: standard staff versus chromatic staff written in MIDI numbers](/blog/assets/newsletter-202610/notebook-chromatic.gif)

#### Chromatic notation support

And because it's me, and I am unsatisfied with standard notation, the project also extends the syntax to render as chromatic notation.

A word about chromatic notations (the [Music Notation Project](https://musicnotation.org/) catalogues many of them). Standard, diatonic music notation is built around the seven-note major and minor scales. It is irregular: some steps are a whole tone and others a semitone, with the black keys pushed off into accidentals (sharps and flats). Chromatic notation ensures that the distance on the page always matches the physical and acoustic distance in the music. A minor third, a major third or a tritone always keeps the exact same shape and spacing. And because each of the twelve semitones in an octave has its own dedicated line or space, key signatures and accidentals are eliminated outright. The trade-off is that more vertical space is needed and then of course, at present you’d have interoperability limitations. 

This chromatic staff implementation uses [Klaus Lieber](https://musicnotation.org/system/untitled-by-klaus-lieber/)'s design:

- **One position per semitone.** Lines are a whole step apart, six per octave.
- **Bold C lines** separate the octaves. A range value defines which octaves are shown, with ledger lines beyond the outermost lines.
- **No clef, key signature or accidentals.** An octave number (3, 4, 5…) appears at the start of each line of music instead.
- **Notes on lines are solid and notes in spaces are hollow**, which helps with fast interval recognition. Colour is under-used as a feature in standard musical notation.
- **Half notes get a double stem.** Hollow no longer means "half note", so the extra stem marks the duration instead.

#### Chord grids & chord relationships

The latest addition is the chord grid, the simple bar-by-bar chart that musicians use to write down a song's harmony. The twist is that each chord also shows its chord relationship: how it moves from the chord before it.

The idea behind [chord relationships](https://guillaumekuc.github.io/blog/2025/10/27/harmonic-relativity-and-chord-relationships.html) is that a progression's character lives in the movements between chords more than in the chords themselves. Showing the relationship under each chord symbol makes those movements visible in any chart. The same movement looks the same in every key, so it becomes easier to spot what a song borrows from another, or to carry an idea over into a different key.

A grid can also be written with relationships alone, without committing to a key. That is closer to how I think about harmony when composing: as a series of movements first, with the actual chords decided later. Picking a starting root then spells out the chords. Finally, grids can be played back, so a progression found in [Chordex](https://guillaumekuc.github.io/chordex/) can be sketched and heard in a few seconds.

![A chord grid typed as relationships only; adding a root spells out Am, F, C, G, then it plays back](/blog/assets/newsletter-202610/notebook-progression.gif)

## Guitar practice

I have been rediscovering the fuzz with better ears.

Back in the day, my entry door to music was [The White Stripes](https://en.wikipedia.org/wiki/The_White_Stripes), a duo made of an electric guitar player and vocalist, and a drummer, playing garage rock and blues rock. Their sound was carried by the [fuzz](https://en.wikipedia.org/wiki/Distortion_(music)#Fuzz) pedal.

The fuzz pedal has a reputation for being so harsh and messy that it borders on unusable. However, it has qualities I find desirable. The fuzz responds maximally to the player's dynamics. Rolling off the volume cleans it up, and touch dynamics can drive it below or above breakup from one gesture to the next.

I also have a bass-cut tone pot on my guitar ([PTB wiring](https://www.premierguitar.com/diy/mod-garage/wire-a-passive-treble-and-bass-circuit), for Passive Treble Bass). The low register carries the most energy and drives the signal amplitude the most, so it has an outsized effect on how the fuzz responds.

The fuzz also adds complex overtones to the signal depending on playing dynamics. It is almost a conversion from dynamics to harmonic complexity: forte playing does not merely come out louder, it sounds almost re-orchestrated, as the harmonic texture changes. The timbral variety that a fuzz can achieve with upstream continuous controls alone is very large.

For this to work, though, the chaos of the fuzz needs to be tamed further down the signal chain, with compression, multiband compression and EQ.
