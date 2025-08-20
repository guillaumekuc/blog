---
title: C2 Baritone Strat Setup
author: guillaumekuc
date: 2025-08-20
categories: 
layout: post
tags:
  - music-gear
  - fingerstyle-technique
  - instrument-design
  - music-improvisation
  - guitar-mods
  - sound-design
  - diy
  - baritone
permalink: 
published: true
---

I have long sought to craft my instrument into the most versatile version of itself it can be. An instrument is an interface between a player and music, and it should be able to support any idea that might cross one's mind in real time. I play an electric guitar, which is already quite a versatile tool. It handles polyphony and harmony, and fits nicely into both rhythm and lead parts, with its respectable four-octave span.

I've changed the pickup configuration on my particular Stratocaster to feature two humbuckers and a single coil pickup (HSH) for maximum timbral range. Its palette is able to cover any tone from jazz and country to hard rock and heavy metal. On top of that, I've modified its circuitry to feature two master tone knobs—a treble cut and a bass cut—for on-the-fly EQ adjustments. All this is to say that my quest for a guitar that does it all has been ongoing for a long time.

My path eventually led me to down-tune my guitar to C2, two full steps below standard tuning. That’s also the same lowest note as the cello. The cello is itself quite a versatile instrument within the bowed strings family: able to move elegantly from bass, to harmonic and rhythmic support, to melodies and counterpoint. I figured that, since in chamber orchestras the bass lines are usually covered by a cellist alone, tuning down to C should be sufficient to expand my guitar into another role—bass foundation—without compromising too much on the high register, as there is still ample room up the neck to catch soaring notes.

Moreover, I had witnessed strong proofs of concept for what guitars in lower registers can produce. Mark Lettieri comes to mind, with his baritone funk series, proving that low tunings aren’t the sole domain of metalheads. Enticed by the possibilities, so began my adventure into baritone guitar territory. Of course, the journey didn’t come without its fair share of hiccups; every solution brings with it new problems.

## Balancing Strings Tension

First one in line: detuning a guitar inexorably lowers the string tension. The most common string set used on electric guitar is 10-46 (10s). This gauge in standard tuning on a regular scale length Stratocaster results in an overall tension of to 46.5 kg (102.5lb). If we were to simply start detuning down to C, which is to say, move down 4 semitones, the overall tension would drop to a mere 29.3 kg (64.6lb). That is simply unplayable. It would feel extremely loose, buzzy and unstable. A player can reasonably get away with down tuning a half step or two as is commonly seen in Blues and Rock genres, but more than that without accommodations is really pushing it. 

For C2 tuning, a heavier string set is required. Common choices include 11-56[^1] and 12-60[^2] sets. D'addario's online [string tension calculator](https://www.daddario.com/string-tension-pro/?srsltid=AfmBOoqBUOBTgIftg63MC5Wh_INiWxqvN2nTEPtsOP4D41YIHuOTeUEF) is an excellent reference point when trying to pick and design string sets. At a glance we can see that the 11-56 would produce an overall tension of 39.7kg (87.5lb) in C standard. Still noticeably looser than the usual 10-46 in standard tuning, but also firmly in playable territory. This set favors expressiveness and comfort at the expense of stability. 12-60 offers an overall tension of 45.7kg (100lb) which is directly comparable to the standard setup reference. It favors more robust tonal precision and sustain. Looking at these two sets gets us in the ballpark.

But for me, I have some additional factors to balance out. First, I am not exactly tuned to C standard but rather to C All-fourths. All-fourths tuning brings in consistency of intervallic relationships across the entire neck, turning it into a logical and isomorphic layout. It is ideal for improvisation and harmonic navigation. But as this tweak removes the major third interval between the 2nd and 3rd string in favor of a perfect fourth, the two highest strings are tuned half a step higher than would otherwise be expected. The notes are C, F, Bb, Eb, Ab, Db instead of C, F, Bb, Eb, G, C. Premade string sets can feel uneven because of the added tension on those two strings. 

A second consideration, is that I am a fingerstyle player rather than a pick player. Fingerstyle setups tend to lean towards lighter gauges because direct finger-to-string contact can only achieve maximal dynamic range on reduced tension. String sets that are too tight can prove unresponsive to variations in finger attack dynamics as fingerstyle players do not benefit from a pick's forceful attack. Fingerstyle players also seek out a smooth, predictable gradient in tension from lowest to highest string: as their technique relies on predictable resistance.

The solution I came up with was to mix and match strings from both sets. The final set is 60, 46, 32, 20, 14, 11, landing on an overall tension of 43.5kg (95.8lb). Starting from the heavier set, I swapped the 1st and 2nd strings for their lighter equivalent, thus reducing their tension from 7.5kg (16.5lb) each to 6.3 and 5.7kg respectively (13.9 and 12.6lb). This makes for a more predictable step-down from the 6.6kg (14.5lb) of the 3rd string and promotes high string bendings and vibratos. 
I also swapped the 4th string from a 34 in the heavy set, to the 32 from the lighter set, moving its tension down from (8.8kg) 19.3lb to 7.9kg (17.4lb). This similarly smooths out the transition from the lower 5th string at 8.6kg (19lb) tension to the above 3rd string at 6.6kg (19.3lb).
I kept the bottom strings from the heavier set as the low range of the instrument really benefits from their tightness and stability.


| String | Pitch | Gauge | Construction | Tension (kg) | Tension (lb) |     |
| ------ | ----- | ----- | ------------ | ------------ | ------------ | --- |
| 1      | Db    | .011  | Plain        | 6.3          | 13.9         |     |
| 2      | Ab    | .014  | Plain        | 5.7          | 12.6         |     |
| 3      | Eb    | .020  | Plain        | 6.6          | 14.5         |     |
| 4      | Bb    | .032  | Wound        | 7.9          | 17.4         |     |
| 5      | F     | .046  | Wound        | 8.6          | 19.0         |     |
| 6      | C2    | .060  | Wound        | 8.4          | 18.5         |     |
| Total  |       | 11-60 |              | 43.5         | 95.8         |     |


Overall, this setup feels properly graduated, with top strings that are light on the fingers, expressive and easy to bend, and a tight, authoritative bottom end. Slinky highs, sturdy lows. In further exporation, I might swap the plain 3rd plain for a 22 round single, which should keep similar tension but bend easier and responds better harmonically, since 20 sits near the practical limit for plain strings.

## Second Order Consequences

There are several second order consequences of downtuning this way that might require additional setup.

First, the floating tremolo system is gone. As we've seen the block receives less tension than it was set-up for in standard tuning with a regular gauge. The spring tension, as it is, is no longer balanced by the strings tension, which isn't sufficient anymore to retain the block in floating position. The tremolo naturally becomes decked: the bridge plate sits flush against the guitar body. The bar can only be pushed down, not pulled up. 
The solution here is to actually lean into it. For low tunings, a floating trem is often too much of a threat to tuning stability: the overall lower tension makes the strings more sensitive to variations. A decked bridge or even blocked bridge is protective: it provides a solid home to return to. The full body contact also propagate sustain a bit better. 
We'll accept a downward only motion, simply setting it up so that it feels right: it should feel firm but not stiff. It is done by adjusting the spring count and claw angles to taste.

Second, the guitar will benefit from a bit of an intonation setup. Different string gauge alter the actual vibrating length needed. For each string, the harmonic at the 12th fret and at the nut should match under close scrutiny (use a precise tuner). The saddles need to be adjusted to make that happen. If the harmonic is sharp, we should move the saddle back as the string is too short. If the harmonic is flat, we should conversely move the saddle forward. For C2 tuning, saddles will likely need to move back a bit. More than 5 cents error is noticeable. More than 10 might really compromise the sound too much for proper recordings, especially the further down the neck you play. So this intonation work is very much worth doing. 

Finally, C2 sits at 65Hz in the frequency spectrum. Amps and speakers are built for standard E at 82Hz. The added low-frequencies energy can be difficult to tame. It can produce a muddy sound, especially when there are competing instruments in an ensemble. Here, the bass-cut knob I added to this guitar proves especially useful, even more so than it did in E tuning. Rolling it out a bit depending on situation is a quick and effective way to thin-out or de-mud the signal. Distortion effects also tend to respond disproportionally to bass content, making it a potent tone shaping control. It really allows the guitar to move between roles in a way that is musically appropriate and to do its job without friction.

## A Versatile Guitar

My C2 All-fourths Baritone Stratocaster in its current state fills most of my needs. It offers the versatility I seeked out through its adaptive range, carefully calibrated tension gradient, HSH pickup configuration, dual tone controls, and all-fourths tuning. The guitar now feels equally at home anchoring the low end and grounding the rhythm as it does soloing or singing melodies through the middle and upper registers. It took some technical trades and cascading modifications, but I can sense that I am getting progressively closer to what I envision this instrument can be.
My fingerstyle technique was a determining factor in my setup decisions. A different player might have made entirely different choices. It's about pursuing intentional design wherever possible rather than accepting the default solution and the compromises they bring with them. 

Until the next mod. 


[^1]: [11-56 String Set from D'addario](https://www.daddario.com/products/guitar/electric-guitar/xl-nickel/exl117-nickel-wound-medium-topextra-heavy-bottom-11-56/)
[^2]: [12-60 String Set from D'addario](https://www.daddario.com/products/guitar/electric-guitar/xl-nickel/exl148-nickel-wound-extra-heavy-12-60/)