---
title: "Gridz Retrospective"
author: guillaumekuc
date: 2021-08-04
categories: 
layout: post
tags:
  - retrospective
  - product-development
  - tools
permalink: 
published: true
---

> *Edit (October 2026): this article was brought back from my older blog. It was originally published on August 4, 2021.*

### Burning Frustration

Do you know that feeling you get after you solve a difficult puzzle ? Can you picture that moment when you finally uncover the last missing piece. We call those Eureka moments. Whatever their name, claiming they are satisfying is an understatement. They feel glorious, pristine even.

“Gridz” is a project that resulted from such a moment. I’ve been drawing and painting for a while now. I’ve always had some fascination for the larger pieces ; landscapes, architectures, complete scenes. The more balls there is to juggle, the more challenging those paintings get. The reason is simple ; without a clear understanding of the grammar ; although each individual element might be painted well enough, they still wouldn’t function as a whole. Thus, a good understanding of the rules can’t be faked on such paintings. One of the most massive rules-set in drawing is called “Perspective”. As you might imagine, I’ve battled against perspective again and again for years. And even though my understanding slowly grew, there was still a problem I couldn’t fathom an elegant and practical solution to.

Rotations. When you think about perspective, you might picture some sort of very rigid grid with receding lines all over the place representing on a 2D plane a set of parallels and their orthogonals in the 3D space. And you would be right. Perspective grids are a really useful tool when drawing indeed. Yet they have one big limitation. Everything you draw using that grid has to be aligned with the grid. If you drop some boxes in your scene and rely purely on your grid ; all your boxes will be drawn facing the same direction. As a result they are going to be uncannily well arranged ; as if some sort of OCD stricken godlike figure put them there purposely. If you want to arrange them in any other way, anything more organic really ; you are asking for trouble.

Sure, there are methods. But they require so much construction that they are mostly useless in real-life situations. As an instant buzz-kill, realize that you would still need to draw your box to befit the grid before you can even begin the process of rotating it. This isn’t exactly what I would call an intuitive process, don’t you agree ?

Yet other people rely on intuition. They “feel it out”. They have the basics right ; rotating a box around the Z-axis would mean handing it a new set of two vanishing points that would both be on the horizon-line. But. Wait. That does not seem to answer all my questions. Where are those vanishing points supposed to be located relative to each other ? “I don’t know, just feel it out” would be the answer. Or in other words ; “train your intuition through 40 hours a day of drawing studies until you can fake it”.

It’s a bit unsatisfactory. So much so than the easiest solution for most people to that exact problem is to delegate the entire thing to a 3D software. Concept artists use what is called “Grey boxes layouts” all the time. The idea is simple : generate a bunch of simple geometry and use it as a foundation to draw over later. You will get perfect perspective every time. Only problem ; switching from drawing to modeling kills the groove a little bit. It feels more like a necessary evil than anything else.

With all that rambling I’m trying to communicate one thing only : that problem drove me slightly mad at times. Let me tell you, it’s no pic-nic being inhabited with such burning frustration for so long.

### Asking the pro

Turns out ; all I had to do was ask. Only caveat is I couldn’t ask just anybody. I needed an expert on perspective. Someone who had mastered it to the point where he could pull it off effortlessly every single time without even blinking once. The kind of guy everybody goes to when they need help with perspective. That person was Blender ; the free 3D software by the blender foundation.

I took a bunch of screenshots while methodically rotating a box and kept asking “where are the vanishing points ?”. I was looking for a rule governing how they move. And I found it. It can be summarized in a couple of observations.

##### One.

There is a scenario in which there is only one vanishing point. The box is perfectly aligned with the camera view. That point is located right at the center of the canvas. Let’s call it focus point.

##### Two.

When you rotate the box from there, you move the first vanishing point away from the focus point, and you introduce a second vanishing point, coming-in from infinitely far away on the other side.

##### Three.

As you rotate the cube up to 45°, you reach a point where the two vanishing points are as close from each other as they will ever be. They are also equally distant from the focus point on each side. Let’s call that distance the 45° landmarks for now. If you rotate further to 90°, the first vanishing point will eventually reach infinite distance and the second take center position. It is the mirror image from the initial position.

##### Fourh.

Comes the interesting parts. There is indeed a mathematical relation governing how those points move. Let’s exemplify it to understand.

If the left vanishing point is located 2/3 of the way from the focus point to the 45° landmark, the right vanishing point will be located 3/2 away from the focus point past its 45° landmark. If the left vanishing point is located 1/5 of the way from the focus point to the 45° landmark, the right vanishing point will be located 5/1 away from the focus point past its 45° landmark.

There is an inverse relationship between those two ratios. As a result, as you move one point towards the focus point, the other moves away much much faster. You can always know where is the second vanishing point based on the location of the first one if you know where are located those 45° landmarks.

##### Five.

The location of the 45° landmarks are not random. They are an indication of the field of view used by the camera. The larger the FoV, the closer to center those marks are. The smaller the Fov, the further away from center those marks are. For example, a 120° field of view corresponds to 45° degree landmarks located somewhere around 3/5 of the focus point to canvas border length. A 90° FoV would locate those marks right at the canvas borders.

##### Six.

We covered rotations around the Z or vertical axis. Rotation around the X axis follow exactly the same logic along a vertical line instead of the horizon line. The 45° landmarks are located at exactly the same distance as they were previously, only on the vertical axis this time. Rotations around the Y axis (depth) are a bit different. They are achieved by simply rotating the whole system, aka both the vertical axis and the horizon line, around the focus point.

##### Seven.

If the whole system can rotate full circle ; it is best to understand the 45° landmarks as a 45° circle. Or an FoV circle even since it is a good indication of the field of view used.

In practical terms ; if I wanted to set-up a canvas with enough information to draw anything in correct perspective ; I would need a point representing the focus point, and a circle, representing the FoV used.

When drawing my first object in the scene, I could place a vanishing point literally anywhere on the page and deduce the position of its paired vanishing point. Indeed, it is located on a line crossing the focus point, on the other side, at a distance inverse to the distance between the focus point and the first point relative to the circle. Again ; 1/3 of the way to the circle on one side means 3 times the distance to the circle on the other side. 4/3 of the way to the circle on one side means 3/4 of the way on the other side. The third vanishing point can be placed anywhere on the other axis. This is how you draw objects accurately in perspective with full control over their orientation in space with close to no construction past a point (the FoV circle doesn’t even need to be drawn to be understood to be there).

I know it might feel a bit obscure in written form, but to me it was crystal clear. I rushed to my sketchbooks and tried it out under all sorts of scenarios to see if it checked out. It checks out.

### Tool-making

At that point I realized all that geometry could be translated into some sort of plugin for Photoshop. I now understood how the vanishing points dance to produce all the stuff we can see in a 3D space which was a really good first step.

Plus, I also understood it could be done. There’s a well known plugin for Photoshop called “Perspective Tools” written and sold by Sergey Kritsky. It can produce perspective grids using the built-in pen tools functions. This is essentially all the skinning I need, the rest is math and geometry. Digging deeper I found that such plugins are written in Javascript using a Photoshop API and then dressed up with some HTML and CSS. They made it as accessible as they could, even though it still requires digging through a ton of documentation to get through with it.

I had some knowledge of web languages, although mostly HTML, CSS and a pinch of PHP. Javascript was still mostly unknown to me, but I also knew programing languages are more similar than they are different. Compared to something like PHP, we’re talking mostly about syntax differences more than anything else. I knew the code wouldn’t need much shenanigans, beside producing a bunch of lines and some simple tasks, all there is is math.

Good thing I have a background in math and science from my teen years, even though I went into arts later. The least I can say is that this knowledge proved itself useful in this instance. For those of you who are still young and facing math teachers every week, thinking to yourself “mats aren’t ever going to be useful to me” ; well, you never know. In this case, this project is pure trigonometry ; and although my memory was very blurry regarding the topic, I was confident I could figure it out and apply it to my current problem. After all I did figure it out once while I was at school.

And so it follows that I installed the software Geogebra back on my computer and started to get to work. This software allowed me to visualize my formulas prior to coding. I was tasked with translating all my logic into math terms. And I must say, it was a really good idea to make sure my Math added up before moving on to coding rather than trying to do both at the same time. That would have honestly drove me nuts, especially with my very limited Javascript experience. I would have had trouble identifying what was coding mistakes from the math mistakes. Fortunately I did things in order.

The idea was to generate a perspective grid that the users could rotate as they were drawing to fit the different objects they needed to include in their scene. I quickly realized I would need more than one way to interact with the grid. You can tackle the problem through several entries. Input angles and deduce the grid. Move a point and deduce where the other points go. input a grid and deduce the values. I nick-named them Construct, Grab and Match.

After a first translation from geometry to math, I then went from math to code after I coded an interface for my plugin as an introduction to both Javascript and the Photoshop API. I started to get the basics. The major hurdle was that the communication processes between the plugin’s panel and the Photoshop side of things isn’t really intuitive to say the least. I needed to keep values and coordinates up to date in two different places to be able to properly display them on the panel and properly render them on the grid. The flow of information, the carrying of variables all the way to where they needed to go. Ultimately I got the hang of it.

And so the whole thing felt ‘doable but arduous’. An optimal challenge. I got into flow. A lot. Several weeks of staying in an hyper alert and intensely focused mode. I went to bed thinking about the problem, I woke up thinking about the problem. Or should I say the problems. Coding is fun in that tasks that are quite intuitive for us human need to be insanely specified for Javascript to understand. Don’t draw the grid outside the canvas. Yeah well, now you need to calculate where the canvas borders are, which ones of those borders are relevant for any given line, and where the line intersects with said borders. Bumps in the road like that are manifolds and you really wouldn’t think about any of them before you try and implement the thing. This was intensely interesting.

In some places I had to compromise. There are limitations inherent to the technologies used that I couldn’t circumvent. A major one was that I initially envisioned a live grid that would update in real time as you would slide the rotation values up and down. Ideally we would see the grid move as we do in 3D software. However the Photoshop command that produces the lines is stupidly slow and so when I tried to keep it live ; it would make the whole thing laggy to a fault. I would have needed lower level access that I did not have from the vintage point of a plugin interacting with the software through an API. Therefore I chose to update the grid on mouse release instead. Once the user is done tweaking the value, and only then, is the grid updated. As a consequence it is rendered once instead of a hundred times. That was a bummer. But it did get done and it got done in what felt like one giant several weeks long sitting.

> *Edited-out part*

In any case, “Gridz” is available on Gumroad [here](https://guillaumekuc.gumroad.com/), for those interested !
