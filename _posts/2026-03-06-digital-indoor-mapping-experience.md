---
title: Notes from my Experience in Digital Indoor Mapping
author: guillaumekuc
date: 2026-03-06
categories: 
layout: post
tags:
  - production
  - tooling
  - learnings
  - processes
  - visioglobe
permalink: /blog/digital-indoor-mapping-experience/
published: true
---

# Notes from my Experience in Digital Indoor Mapping

The last job I worked in was a 15-20 people Saas company which produced and sold digital indoor maps and associated software. I was hired as part of the production team and eventually doubled as an internal tools developer. I stayed there 3+ years. 
The following notes are a compression of the core learning I got from that place, its constraints and its people. 
## Developer Constraints

As a tech-reliant company, the first bottleneck we were repeatedly faced with was simply limited supply and availability of developers. The production team and I faced deadline constraints and could often benefit from software upgrades and specific features to speed up our workflow. However, a very finite development team cannot allocate effort everywhere at once.
Developers are also not necessarily fungible across codebases. Each product has its own code-base and necessitate a learning ramp up before a dev can be effective within it. The Map Editor in particular, in addition to having its own architecture, benefited from user-side familiarity to make sense of, and from an affinity with geometry problems. 
Internal tickets would queue as they were understandably not primary concerns against client-facing features. This delay in implementation did not match the speed of the Production environment. Solutions might arrive after the problems had been manually solved. 
Delayed internal tickets translated directly into extra manual passes on the production floor, so planning assumed a certain level of unfinished tooling.

## Production Constraints

Within the map production team, we had scaling and deadline problems to deal with. 

Consistency was a major concern. A team needs to be able to produce as one. The results must be predictable and survive individuals variance and preferences. We relied on detailed SOPs (Standardized Operating Procedures) and checklists. We also ensured at least two pairs of eyes on every map: an operator and a quality checker. That pairing worked: the operator stayed head-down while a second—with validators and checklists—took the slower pass that kept quality predictable. 

Another thing you learn in a production context is that speed versus quality is a false dichotomy. Speed gains free bandwidth that can be reinvested into quality. It shifts the frontier of what is feasible within budget. The constraint is usually not skill but time availability. 

This predictability fed directly into planning. We relied on proper time estimates for our planning and sales. These estimates are made using historical data and simple cross products (parametric estimating). This method explicitly assumes consistency of process. Without it, they become unreliable as noise becomes greater than signal. 
Proper estimates and an alignment between the Sales and Production teams are critical to prevent crunch and ensure a sustainable throughput regime.

## Sales Constraints

Accurate quoting became infrastructure in its own right—misaligned estimates immediately reintroduced crunch and eroded the slack needed for tooling. Clear, shared estimates kept Sales honest about capacity while giving Production the buffer needed to deliver without fire drills. Process improvement (and tooling) only happened when Sales and Production kept margins intact upstream, so preventing scope creep was effectively how the automation budget stayed alive. Preserving that slack upstream is what makes the tooling work below viable.

Whenever the official tooling queue lagged, I wrote small helpers to stop the same tedious steps from eroding focus.

## Tools

I ended up being well positioned, as a tool user with technical curiosity and free from the R&D client-first constraints, to learn my way around the Editor’s code base and write production scripts and plugins when the need arose.

Developing tools from the production front-lines –while still being responsible for meeting deadlines– brings a strict ROI calculation front and center. A tool is usually justified if its development time is inferior to the time saved per action automated, multiplied by the number of repetitions, times the horizon of expected continued use. 
In practice, I often had to recoup the development time within the same project or I’d fail to meet my deadline. 

From the formula, you get a sense that tiny optimizations matter when the repetition volume is large. Micro frictions compound into hours and days within projects. That is even truer for batch projects were the same steps repeat across many similar instances, or when a tool gets reused at team scale. By contrast, a common failure is to attempt to automate/solve too big a chunk of the problem. In a production setting, the norm is edge-cases, not textbook situations.

I found that tiny helpers with singular predictable actions or localized batch ops to be pragmatically useful, especially when paired with a shortcut-first UX (high click-rate often indicates automation/compression opportunities). I would trust the operator to orchestrate among a pool of available actions in situ rather than attempt to substitute for it.  An other, perhaps surprising category of tools that proved very useful were validators. Checking work is a needle in the haystack problems, it can easily consume lots of time for an unforeseeable payoff, yet is critical for quality control.
The editor had to stay friendly for casual customers yet expose deeper actions and shortcuts for the in-house team; we kept the UI quiet and expanded the capabilities underneath.

As to how to manage the development time itself, an iterative/staged envelopment process proved appropriate. I would build a minimum viable version first. That often meant a simple script. As many scripts accumulate, I would compress them into a small utility. Later yet, I would refactor into a full-on plugin with genuine architecture, dependencies and compilation steps. Only last would I internalize these new actions and capabilities into the main software itself. This is “Just in Time” development, which is about avoiding to solve problems before they arise. Plan for migration paths, but do not execute on them just yet. 

A lot of what constitutes development speed is also a function of how much you understand the codebase and context you are working with. I would do opportunistic development. After I learned a few bricks, I would build many things from them, and expand the available vocabulary progressively, rather than wait for a perfect and complete sight of the codebase. 
Once the helpers existed, their usefulness hinged on mundane follow-through: documenting where they fit in the SOPs, training operators, and monitoring their actual effect on production for further adjustments.

## Small team economics

At a scale of less than 20 people, it’s difficult to forget that a company is nothing but a collection of people.

One of the main challenges at that scale is proper attention allocation. Time allocated to one problem is unavailable for another. Opportunity cost is salient. No amount of heroics can compensate for poor judgement. Choosing what to pursue and what not to pursue is genuinely a hard problem. Transparent, open-handed and consensus-driven decision making reduces the weight of it.

Small teams reward complementarity more so than they do topping each others. The dynamics are collaborative rather than competitive. There is no point replicating the functions that are already covered in the company. Instead, it is more productive to find out the spots and constraints that remain unaddressed or under addressed, then acquire the capabilities needed to fill that spot. Complementarity unlocks the highest expected value/coverage out of a limited number of people.

In my case, that meant providing internal tooling within the production team and filling the technical gap there.

With low redundancy comes a hidden vulnerability. Individualized institutional knowledge/expertise can become single points of failure. Sharing knowledge and externalizing memory is an essential mitigation strategy. Written documentation, recorded demos, team training, shared ownership of systems: all matter.

People should be excellent, but never indispensable.

In such a setting you’d also find that “company culture” is legitimate infrastructure. Informal rituals, such as morning coffee conversations, shared meals, team events, appear inefficient at first glance. They are not: they build trust. When trust is present, everything flows smoothly and the work appears to take care of itself. The absence of it manifests as friction everywhere.

Humans evolved for tribes. We live and work best in tribes. Transparency, consensus, rituals, alignment and shared identity all matter.

These notes capture the operating conditions of a 15–20 person indoor-mapping shop: constrained developer bandwidth, deadline-driven production, micro-tools built on the fly, and the need for shared institutional memory.
