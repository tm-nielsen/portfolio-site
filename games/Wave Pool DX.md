---
title: Wave Pool DX
static_cover_url: https://img.itch.zone/aW1nLzE2NjM3NzI0LmdpZg==/315x250%23cm/In6zVL.gif
tags:
 - fun
tools:
 - Raylib
roles:
 - programming
 - design
---

## About
This project is a remake of a remake of a little toy I made years ago to see if I could.

### Original project
I had to take a wave physics course in my second year of University. This seeded a vision, which I manifested in that wonderful, terrible artistic birthplace of mine called Processing. A grid of dots distorted by waves.

Poorly written and poorlier optimized, but properly expressed. You could right click to cycle between 3 modes. In the first mode, you could click to make a ripple. In the second, you could hold down to continuously make smaller ripples. These small ripples pleasantly mirrored the way that the surface of water parts and distorts around an object moving through it. The final mode would rapidly spawn ripples in random places throughout the grid, mimicking rainfall on a pond. It was a fun little project. However, it stuck with me. I kept it on my desktop for years and would just play with it sometimes.

### The First Remake
Years later, I remade the project in Monogame for a jam. This first remake is also up on my itch and thus on this page, too. I had lost the original and had been looking for an excuse to remake it for some time. A local student jam with the theme "recovery" was the perfect excuse. The project even gained new, musical life. Couldn't export to web though.

### The Third Remake
I really wanted to get this project on web. It was prefect for that. Even on desktop, I had problems with window scaling that I never really addressed causing cropping issues that still bother me. It shouldn't be that hard to port it, right? I looked into other tools, but ultimately settled on raylib. If only I could manage to configure a proper C/C++ development setup on Windows. Hah!

It wasn't that bad. Actually, with the help of a cool little thing called win64 devkit, it was actually very straightforward. A portable payload of all the compiler binaries I could need, precompiled libraries for web, and overall far better documentation to what I remember bouncing off of the last time I tried setting up raylib made the whole thing not only possible but relatively painless.

After the simple task of porting, I had two main objectives. First, to get responsive scaling to work properly. Second, to get everything to work nice and look good on a web build that would play nice with phones. The first was going quite well until I realized that I could make the window transparent. This snowballed. Without the default window controls, and the possibility for a transparent background, dangerous thoughts brewed.

I made my own window management buttons. You can resize and move the window with these. Of course, for this I implemented my own UI from scratch with is always a terrible idea which I would never recommend to anyone but I've done it before and this time it worked out pretty well. The instrument guides and functionality will also squash to one dimension or the other if the window gets to thin. I made a whole settings page. Saving and loading things to a file using strings in C++. Yay.

The UI was a greater burden. Buttons are one thing, but I needed sliders and even the ability to select colours. I scaled myself down as far as I could handle, opting for a text entry field with a preview. It looks fine and supports common shorthand. For this I had to make a whole text entry field and then a specialized child of that specifically for hex codes. This, of course, implied all the functionality to turn those codes into useable colours and back into something I could save to and load from a file consistently. Also, I had to make everything scale properly with the window. Shortcuts were taken, but nothing egregious. When you design a system well, it is kind to you.

Building for web wasn't especially laborious so much as it is that one little thing that breaks everything. Starting with spread, grasping directives, I am glad to have split things into discrete application wrappers for the different platforms that make everything so much cleaner. Getting everything to fit into, fill, and scale the the available window space was a bit trickier. I have no idea how it works, but I managed to use some sort of macro with emscripten that could get me the screen size, which is all I needed. This also necessitated a bit of tweaking the base html shell.

I am very satisfied with this project. Taking about two weeks overall, I think I managed to nurture the inkling of an idea into the zen little desktop buddy that it always deserved to be.

## What I Learned
This was a good refresher on C++, good software design, and setting up a development environment. Practice, also, in my artistic practice; following my thoughts around as a project informs itself.