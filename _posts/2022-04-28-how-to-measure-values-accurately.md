---
title: "Measuring Values Accurately"
author: guillaumekuc
date: 2022-04-28
categories: 
layout: post
tags:
  - visual-arts
  - painting
  - values
permalink: 
published: true
---

> *Edit (October 2026): this article was brought back from my older blog. It was originally published on April 28, 2022.*

Digital painting grammar is fascinating. There are many rule-sets that function together to produce believable images. We could talk length about perspective and the mathematics behind it that make it possible to create the illusion of depth on a 2D surface. We could talk about the rules governing how lighting impact colors of the illuminated objects. But today what I want to talk about is values, and how to properly measure them.

### Measuring values

Values in a nutshell is a term used to designate how light or dark a color is. After drawing and structure, values is the most important component in the recipe for a realistic painting. Colors could be all wrong, the image would still be perfectly readable if the values were accurate. Twist it backwards and the equation falls apart : colors cannot create the illusion of life on their own. In fact Craig Mullins said it best ; drawing is usually off 80% of the time, values are off 19%, and the other 1%, we should not worry too much about.

Now that we’ve established how important values are, let’s dive in. The way to start thinking about them is to use a value-scale ranging from 0 to 10, with 0 being pitch dark, and 10 being pure white.

![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427133906.png)

Switching to a number system allows for accurate measurements which is a prerequisite in our effort to later intuitively paint good values ourselves. The heart of science is measurements. We can’t manipulate what we can’t properly measure and we cannot at the beginner stage rely on our eyes to do so. Therefore, we need a tool. Fortunately, as digital painters, we dispose of a really convenient tool to study values : the color picker.

![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427140028.png)

### HSB sliders limitation

There is a caveat though. You might have noticed that in your favorite painting software, each color can be expressed as HSB sliders. That B in HSB stands for brightness, and you would be forgiven to think that it closely resemble our idea of values. I would stop you there however and vouch against using this slider for measurements.

Let me demonstrate by first picking a yellow hue, and then a blue hue. For both those hues, let’s crank up the Brightness parameter up to a hundred. Let’s then place both those colors next to each other and pause for a second.

![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427134151.png)

Do you see it the same way I do ? Do those two colors look like they are equally bright to you ?<br>
To make this even more obvious, we can grayscale the whole thing using the shortcut ctrl+Y in Photoshop after setting it to Gamma Grey 2.2 in Proof setup.

![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427134256.png)

I hope we can all agree that this blue color is way darker than the yellow one. Yet if we listen to the sliders, they are both equally light.<br>
This is because that Brigthness slider represents how much power needs to go to the led that constitute your screen to produce that color, it does not tell anything about how that color is perceived by human eyes.

![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427133705.png) ![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427133736.png)

### HSL sliders work-around

So in order to properly measure values, we are going to need an other set of sliders. This set would ideally be HSL, which stands for Hue, Saturation, Luminosity. In HSL, a L parameter set to 100 would give you pure white as you would expect, and that same parameter would output a pitch black color, as you would expect. And most importantly, all colors for a same Luminosity parameter, would indeed be very close in value. The other two sliders, we know already ; we would get our familiar hue and saturation sliders. See the difference for yourself.

![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427140717.png) ![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427140842.png)

Unfortunately Photoshop does not have HSL sliders, but it does have LAB sliders. LAB stands for Luminosity, and then you’ve got an A channel and a B channel. The A channel is a scale ranging from green to magenta with gray in the middle, and the B channel is a scale ranging from a blue to a yellow hue with gray in the middle. As you would have understood by now, the interesting part for us is that Luminosity slider. It will translate very well to value painting.

![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427141111.png)

I would strongly encourage you to set your sliders to Lab and then spend time color picking everything you can looking for patterns and useful pieces of logic. Once again ; measurement is the heart of science. I know however that those Hue and Saturation sliders where very convenient and equally important parameters to have access to and that the Lab sliders are not optimal for that specific reason. Here is a bit of a workaround I use. I simply use a second picker. In that case it is Colorwheel by [Christian Dulson](https://christiandulson.gumroad.com/)

![](/blog/assets/old-blog/how-to-measure-values-accurately/Pasted-image-20220427142614.png)

With this layout I can easily set-up my hues and saturation on the top picker which is perfect for that purpose with its circular layout, and then set-up my measure and set my values with precision using the built-in picker set on LAB mode.

### That’s it, start picking

On a future post, I’ll start discussing the sort of rules that can be discovered once the measuring tools are all set-up and we dare walking into that playground. There’s a lot to be learned.

How does direct light impact values ? What is a value range ? How does various lighting scenarios impact the value range of a subject ? How does atmospheric perspective impact the value range of a subject ? How do materials impact the value range of an object ?

I promise, there are all sorts of fascinating questions that deserve answers. But, I’ll stop there for today.
