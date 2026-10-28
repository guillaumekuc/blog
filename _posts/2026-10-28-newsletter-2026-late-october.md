---
title: "[Newsletter] Prospection, Red Queen Dynamics, Artificial Scarcity"
author: guillaumekuc
date: 2026-10-28
categories: 
layout: post
tags:
  - newsletter
  - ai
  - tools
  - economics
  - prospection
permalink: 
published: true
---

Bonjour,

The last few weeks since the last article have been dedicated to truly booting a prospection routine, finally. Besides a good few days off spent traveling nearby, near 100% of the time was spent in the sales bucket. AI economic effects are also top of mind, and given I have few artifacts to share for this issue, I'll take the opportunity to unpack some of those thoughts.

Claude Code is proving useful for prospection: scheduled tasks, direct handling of files (my homemade CRM lives in Obsidian), complex web searches. It is speeding up or improving a lot of the prospecting process. List-building of candidate companies is efficient, and it really helps in getting to know more about the companies one is reaching out to, in a more manageable amount of time.

![Obsidian artisanal CRM](/blog/assets/newsletter-202610/crm-us-tabletop.gif)

However, these gains are more than nullified by the Red Queen dynamics at play: an arms race where everyone has to keep running faster just to stay in the same place. Because everybody can volume-send more easily, inboxes reach saturation fast and people tune out. I came across an article sharing its data and claiming that [cold email is dying](https://sales.co/research/cold-email-is-dying). The human reply rate per contact went from 2.36% (Apr 2025) to 0.45% (Sep 2026), about 5× lower; the positive reply rate from 0.72% to 0.18%, almost 4× lower. Something else I found interesting in their analysis: personalizing the mail pickup lines had no effect, or even an adverse effect. An AI-personalized first line got 0.53% replies vs 1.00% for a plain template. They tried swapping content in various manners; the writing changes had no effect.

I also came across this testimony of a developer having [automated his job hunt](https://www.youtube.com/watch?v=SMj48-Ftyg): his bot-software applied to 1,200 jobs for him, fully personalizing resumes and cover letters. The problem is bulk-sending. And yet, with lower odds per reach-out, the rational move for many individual actors is to increase volume: a self-defeating loop.

I once asked myself about competitive dynamics within and across human societies. Surely it appears strange having a species undermine itself rather than cooperate? That is until you realize that there is no other species on the planet that shares an ecological niche as overlapping with one's own as other humans do. We depend on the exact same resources and opportunities. This becomes starker when opportunities erode ([Microsoft 1/4th of its workforce layoff](https://www.theguardian.com/technology/2026/oct/26/microsoft-buyout-offers-ai-cuts) is in the news cycle at the moment) and competition increases (a widespread capability boost through LLMs reduces entry barriers).

This is possibly a transition period. Here is how it could resolve: email communication becomes LLM-mediated on both ends. In response to bulk sending, everybody adapts by setting LLM-mediated filters, which means every online content must now be optimized for LLM reading. The optimistic read: it could resolve in very high-quality match-making, through a larger-scoped search process at both ends. What it doesn't solve: winner-take-most dynamics (the Matthew effect) are already prevalent on the internet. Existing trust and reputation become more precious in a sea of dubious contacts, but new trust and reputation become heavily gated. A cold-start problem; chicken and egg.

We might partially retreat to in-person trust formation as the primary pass-through. An old tech. It doesn't scale nearly at all (Dunbar's number: a limit of roughly 150 stable social relationships that a human can maintain at any given time; my personal number is probably a lot lower than that), and that's the point.

This all points towards possibly smaller groups, tribes, moving forward, as opposed to giant companies. Fewer people needed to do the work. Fewer inter-dependencies: AI can provide what others once did for a lot of digital applications, and robotics should follow. Less outside trust, as web-based coordination channels degrade. Downsizing as a response.

On the topic of LLMs, I came back to Uncle Bob, the author of Clean Code and its sibling series of books (Clean Architecture etc.), to see [where his head is at](https://www.youtube.com/watch?v=zcLPGC-tvgk) under this new paradigm that we are walking into. Validation, human attention, has become the bottleneck, so he's been working on removing the need for him to even read agent-written code at all. Instead, he designed a gauntlet of automated checks and constraints to deterministically ensure that the code meets the quality bar he sets for himself: unit tests derived from Gherkin acceptance tests (Given/When/Then feature descriptions in plain language), automated complexity analysis on functions aiming to stay below a threshold, module size limits, dependency structure analysis, and other such guardrails. This gauntlet allows him to trust the agent-generated code (trust: that word again). Such a battery of QA processes is expensive for a human, but cheap at agent-scale capacity. Setups like this allow for mass code-production. Industrial logic: the machine to build the machines to build the things. One layer up.

All worthwhile ideas to implement in one's own workflows, and not just for coding tasks; this generalizes. But none of this solves the demand-side problem: who is going to absorb that much capacity for new software?

In fact, even older, existing software that should have its demand secured is facing trouble. We are seeing a lot of LLM-enabled software cloning at the moment. Adobe products were cloned into [ArtCraft](https://www.phoronix.com/news/Photocraft-Filmcraft-AI), an open-source project built in Rust (side note: Rust is having its moment), with Photoshop, Illustrator and Premiere alternatives. [Steam games are being cloned](https://games.gg/news/ai-vibe-coding-clone-bury-games/) within weeks; game clones were already a problem before, but it is gaining ground. There is even a ["Reverse Engineer Anything" (REA)](https://infoq.com/news/2026/10/reverse-engineer-anything) open-source tool now.

Software was always relying on artificial scarcity: code replication and distribution has near-null marginal cost. That's why the business models shifted to selling access rights instead of the code directly (the SaaS business model). Code is kept in a box, on private servers, and legislation was also backing it up. But artificial scarcity is becoming harder to enforce. Even trapped data can now be migrated to other software more cheaply, using LLM automation. What remains: network effects, brand/reputation, liability. Not technical problems at all. And all three are subject to the same winner-take-most/Matthew effect dynamics.

Still on the topic of LLMs, a noticeable piece of news has occupied some headlines lately: OpenAI [released hundreds (700+) of results and mathematical proofs](https://yourstory.com/ai-story/openai-ai-open-maths-problems-solved), for problems a great many of which had remained unsolved for decades. I've been watching some of the reactions from mathematicians, and here is the silver lining. Industrial-scale maths might take over on the output side and replace the lone-genius trope ([Terence Tao](https://www.youtube.com/watch?v=bAnwMdfcMVw)). But the craft part should survive in the education pipelines: teaching survives. That's because the value of maths isn't fully located in its output. Just like arts or sports, it is also, if not primarily, about shaping the person who is doing it. Skill-building (cognitive fitness) and enjoyment can't be automated away ([3Blue1Brown](https://www.youtube.com/watch?v=LKrwhjOI8Nc)).

I was also fortuitously reminded, while scanning a blog article, that our own time and attention is indeed the scarce resource, as it's always been, and to follow passion insofar as possible. A useful compass when everything is shifting and it's easy to get lost.

> "The most valuable thing we all have in life is our time. The older I get, the more this comes into focus. I want to spend my time chasing after things I have a passion for." — Jason Glover
