---
permalink: :path/big-boy-balance-beam
title: Big Boy Balance Beam
static_cover_url: https://img.itch.zone/aW1nLzE3OTAyMDI3LmdpZg==/315x250%23cm/bAdrV2.gif
tags:
 - fun
 - arcade
tools:
 - Godot
roles:
 - programming
 - design
 - technical art
---

## About
A simple little PvP physics game built for the CGDA arcade cabinets where you jump around as a squishy little orb character to knock your opponent into the water. This is both a remake of a minigame from Big Boy Balance Beam and a splinter off the remake of the base project that has become Boy Maker.

Following the 2024 arcade game jam, its organizers expressed interest in including other local projects that satisfied certain minor functional requirements and a general standard of polish. Becoming slightly obsessed with the design constraint of the arcade context, I could identify many small projects in my portfolio that could be expanded or redesigned to fit with relative ease. After cleaning up my initial entry to the game jam: Clack, this was my second arcade project.

## Implementation
The core shape drawing and squishing functionality could all be ported more or less directly from what is now Boy Maker, but was slightly improved in a number of areas. I expanded/adjusted the custom physics system, adding the titular balance beam and choosing to ignore the shape of a ball, using simple circular collisions that are all factored in before applying resultant forces. I generalized the character shape loading and drawing to swap out and scale dynamically.

I created several playable characters and a juicy screen to select them from. Characters scroll through a carousel, squishing along the way. The player can select one by pressing a button when they appear or using the joystick for precise selection. Available characters can be selected from the default set, or an arbitrary of others included as SVG files in a folder alongside the game. This is intended to include any number of custom characters created with Boy Maker or any other vector editor *(with limited support)*.

There was also the whole game to make around that, largely consisting of juice. I made some cool shader water and metaball splashes. When hitting the water hard, a single big drop will shoot back up out of the water, which was a happy accident of applying metaball logic to warp the water's surface.

Backgrounds are rendered separately in 3D. Unsure of what to put back there, I tried out some simple textures to see if anything stuck. I really loved the grungy mixed media look and leaned into it immediately.

## What I Learned
This project was quality experience with porting/reusing legacy code, and sticking to very limited scope. There are many things I intend to improve about the implementation I reused. However, I took a very low commitment game jam attitude going into this project. It was created explicitly as a short tangent: something small and silly to build quickly, put out, and never touch again.