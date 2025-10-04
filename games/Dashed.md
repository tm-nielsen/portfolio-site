---
title: Dashed
static_cover_url: https://img.itch.zone/aW1nLzczOTE4NTAuZ2lm/315x250%23cm/MmN7B0.gif
tags:
 - jam
tools:
 - Godot
 - Blender
roles:
 - programming
 - modelling
 - design
---

# About
A local multiplayer boat racing game inspired by Hydro Thunder, made for the 2021 Games Den Quick Game Jam. The boat driving is complicated by the addition of planing into the handling model: at a certain speed, the boat will flatten on the surface of the water and go much faster.

# What I Learned
The focus of this project was to learn how to implement online multiplayer. Boat racing was chosen as an vague idea I'd had around for a while that applied to the theme. After getting the handling model together, it turned out that I could implement multiplayer functionality really easily simply by synchronizing the positions of every boat. Each would still pass through checkpoints and make progress. Even without a definitive authoritative state across clients, everyone would end up with the same results. The other challenge was creating a course. With no experience modelling or implementing environments, I essentially ended up cutting a tube out of a big slab using techniques I know from character modelling. I learned a few things about optimizing mesh collision (avoiding it), when putting the track in engine.