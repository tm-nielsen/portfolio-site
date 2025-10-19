---
permalink: :path/big-boy-beach-ball
title: Big Boy Beach Ball
tools:
 - Processing
 - Godot
roles:
 - programming
 - design
ancestor: YUT YUT
---

## About
A game about Big Boys playing Beach ball; a simple 2D volleyball game. Contains a tournament mode, local pvp and coop and an underdeveloped overworld with two minigames and basic character customization.

This is ultimately a scrap of what was imagined as a much grander project, which would've been my second released game. I still have the vague plans for a story around in notes somewhere. The game is fun, though and recently I've started work on a sort of revival in Godot. The base gameplay is the same (I stand by it's simplicity), but I've shifted focus to the seed of an idea hiding below the surface of the original: character customization in a very weird way.

In the original project, characters are defined as a set of SVG paths (hardcoded programmatically, not in files), and what little customization there was either swaps between opponent designs or a small set of defined features. But this is SVG, I could access these as shapes directly, I could save and load them from files, I could dynamically distort them at runtime.

So of course I had to make an entire stripped down svg editor disguised as a character creation screen, and write code to save, import, and dynamically squash and stretch any given set of shapes as a character in the game, in accordance with the official file specification (which is fully implemented).

In addition to this, I think the game would be a fantastic candidate for casual multiplayer. With steam workshop support, I could very easily facilitate the sharing and use of any and all character models. You could see the zaniest little guys in a random match! This project is currently on a back burner, but it is hot.

## What I Learned
From the initial version of this project, I learned about the limits of how far ideas can take you without a plan. I learned about scope and about paying attention to what works in a project. In the revival, I've learned about the SVG file specification, flexed my animation knowledge making some joyfully squishy boy orbs, figured out how to properly and efficiently distort a set of points into a few different shaped as required by the animation, and gotten some really good practice in UI/UX design