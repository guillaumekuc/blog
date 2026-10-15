---
title: "The Problem with Traditional Music Notation"
author: guillaumekuc
date: 2022-05-26
categories: 
layout: post
tags:
  - music-theory
  - music-notation
  - instrument-design
permalink: 
published: true
---

> *Edit (October 2026): this article was brought back from my older blog. It was originally published on May 26, 2022.*

I am a guitar player. Guitar players are notorious for lagging behind when it comes to reading music notation. I am no exception to that rule. In fact I have put in very little effort in trying to learn it. Why ? Well, because learning traditional music notation is stupidly inefficient, that is why. In fact it has been said by many and will be said again for as long as it remains so. I will quote Schoenberg for a second :

> “The need for a new notation, or a radical improvement of the old, is greater than it seems, and the number of ingenious minds that have tackled the problem is greater than one might think.”

I will make it clear how traditional music notation makes reading music way more difficult than it needs to be and then will strongly encourage you to take a look at an alternative called chromatic notation.

### Absolute vs relative

The heart of the matter is that Traditional Music Notation is capable of representing note pitches absolutely, yes, but does so in a way that obscure the relative relationships between them. Trouble is ; we only ear notes relatively (unless you are one of those folks with perfect pitch). Let me explain.

Absolute thinking is about identifying notes by their note names alone, regardless of any context. You would hear sentences such as “a C chord contains the notes C, E and G”. With such instructions, we are indeed capable to produce a C chord given we have mapped already where the C, E and G notes are located on our instrument.

But the better way to think and understand music is relativistic in nature. Instead of a map, a more useful analogy would be that of a ruler measuring distances between notes. Our C chord from the previous example would then be described as a root note followed by a major 3<sup>rd</sup> and a perfect 5<sup>th</sup> ; R · 3 · 5. Those numbers are what we call intervals.

Now, most of us are not able to identify the absolute pitch of the notes we ear. We have absolutely no way to know whether the notes played where C, E and G or else. However we are able to recognize the sound of a major chord whenever we hear it, despite having no clue what notes where played. That is because we are able to perceive the interval relationship between the notes of the chord. We hear that there is a major 3<sup>rd</sup>, we hear that there is a perfect 5<sup>th</sup>. That is relative pitch.

Having established that, common sense dictates that we should adopt a musical notation capable of accurately representing the relative relationship between notes as to match our perception of music. But History would have it otherwise as we will see.

### TN obscures intervals

Let’s first examine how a major scale would be represented on a traditional score.

![](/blog/assets/old-blog/why-is-traditional-music-notation-problematic/Pasted-image-20220511104856.png)

As a quick refresher ; a major scale is a series that could be described as ‘w-w-h-w-w-w-h’ where ‘w’ stands for whole step and ‘h’ for half steps. In other words, a major scale is an irregular pattern of alternating whole and half steps. So, why is its representation on the score so evenly spaced and regular ?

Let’s continue with our second example.

![](/blog/assets/old-blog/why-is-traditional-music-notation-problematic/Pasted-image-20220511105258.png)

This is the whole-tone scale. A whole-tone scale is as its name might suggest a succession of only whole steps all the way up. That scale, which is perfectly regular and symmetrical is represented on the score with a bunch of accidentals and irregular spacing.

I imagine you are starting to see where I am going with this. Traditional notation quite simply does not care for accurate display of interval relationships. It is not possible at first sight to decipher whether the following intervals are major or minor 3<sup>rds</sup>. That should be uncovered only after we’ve taken into account the current clef sign, key signature, and accidentals. And evidently, that drama goes on for all intervals.

![](/blog/assets/old-blog/why-is-traditional-music-notation-problematic/Pasted-image-20220511105759.png)

TN obliges us to calculate the individual notes names before we can even have a shot at deducing their interval relationship. Relative reading is subjugated to absolute reading.

Let’s recall, most people don’t have absolute pitch, right ? We hear and understand music with a relative ear, right ? Yet we notate it in a way that does not worry the least bit about representing intervals reliably ? Right. Well, that certainly does not make any sense to me whatsoever.

### Chromatic notation ; one note, one spot

There is an array of reasons why music notation evolved the way it did. But for today, let’s not waste space and move on straight to the solution with my remaining two hundred words or so. That solution is called “chromatic notation”. Here you have a notation system that exists for the sole purpose of offering us an accurate representation of the intervals.

In chromatic notation, each note has its own line or space on the staff. Half-steps are always either one note on a line and the second on the neighboring space or vice versa. Whole-steps are always two notes on two neighboring lines or spaces. And this continues like this for all intervals ; the vertical distance between notes consistently represents intervals. There is no ambiguity. Key signatures and accidentals are thus not required.

Below is a representation of the chromatic scale ; a succession of half-steps.

![](/blog/assets/old-blog/why-is-traditional-music-notation-problematic/Pasted-image-20220511110541.png)

As a further step, we can use black and white note heads to help identify intervals and pitches.

![](/blog/assets/old-blog/why-is-traditional-music-notation-problematic/Pasted-image-20220511111056.png)

That fix comes from the idea that the most striking feature of any given note is its color, and that that property has been poorly used in TN (it merely distinguishes half-notes from quarter notes). Maybe, just maybe, it could be better employed to help indicate a note’s pitch. In that case a new symbol would be needed for half notes :

![](/blog/assets/old-blog/why-is-traditional-music-notation-problematic/Pasted-image-20220511111157.png)

What we get in exchange for those tweaks is a dramatic speed-up of the interval recognition feature.

![](/blog/assets/old-blog/why-is-traditional-music-notation-problematic/Pasted-image-20220511111247.png)

Oh and did I mention, octaves are consistent and can be stacked like legos. We’ll just indicate with a number the octave we’re working with in replacement for old clef symbols and we’re good to go. C4 (aka middle C) would be located on the line in between the two staves in the following example (the C major scale spread on two octaves).

![](/blog/assets/old-blog/why-is-traditional-music-notation-problematic/Pasted-image-20220511113310.png)

### Mass adoption nowhere in sight

As you can see, it doesn’t take much to turn TN into a more user-friendly system ; there’s no longer any need for gargantuan memorization in order to get started reading, intervals are now easy to read, and down the road its conducive to better understanding of music.<br>
For those of you curious enough ; different variations upon the idea of a Chromatic Staff exist and have been documented on the website [musicnotation.org](http://musicnotation.org). Unfortunately there are many obstacles before chromatic notation is generalized. One of those is that all past music has been written in TN, which means you cannot pass on TN if you want access to those. An other one is the lack of software to output chromatic notation. The example in this article were produced with Lilypond which is far from straightforward to use.<br>
I do believe however that chromatic notation is objectively better than its traditional counterpart and will keep advocating for it !
