---
permalink: :path/bci-game-jam-2022
title: BCI Game Jam 2022
description: My work on the 2022 BCI Game Jam and subsequent contract.
---

## What I Made
There was another BCI game jam in 2022, the same event where Curl started. I was there partly involved with the organizers but also hoping to participate. I gave a short talk on how I'd integrated BCI with Curl, showed some people the game, and helped facilitate an online match between a player in Calgary and Edmonton at different jam sites.

I also managed to find a bit of time to throw together something small. The whole theme of the jam, after-all, was "mini-games". The intention, and final outcome, was to collect all the jam games into a single project so that device setup and training could be done in one place and used for multiple short sessions of different games.

With ample experience with a control scheme based on motor imagery, I wanted to try something else. I decided to use a p300 setup. This input method is named for the reliable response the brain displays 300ms in response to a pointed, focused stimulus. By flashing a number of different options at random, recorded intervals, the option a player is focused on can be detected by lining up these reactions with the times stimulus was provided for each option and selecting the one that lines up.

"Mutant Clash" is a simple strategy game where two players send units down three lanes, attempting to reach the other player's side to score points. There are four units to choose from, each having a movement speed, health, damage, and delay before you can summon the next unit. I hoped this could provide some depth to the gameplay, but didn't really get the chance to balance the game at all. To make up for this, I made sure to make the characters bounce around all dramatically when they get pushed over. Cover up the lack of substance with a nice bit of juice.


## Work on Mini-Game collection
After the game jam, the organizers had a collection of games they wanted to coagulate into one "BCI mega-game". Integration of the games themselves into the Unity project was done by others, but I was brought onto a short contract to help get some ui set up in engine and make everything look a bit nicer.

I got some good experience doing requirements elicitation and am proud of the work that I did. Using what I learned working on Curl, I made everything that I could switch-accessible. Created game tiles, menus, and a training environment that are comfortable and legible; useable and pretty.

My work also extended to adding a proper settings menu. There were a number of parameters exposed to the engine by the integrated BCI system, but these weren't usable in a built game. Wanting something useable, accessible, and extendable, I decided to save these settings in a human readable text file. Settings are organized into categories, each with a name, description, and suggested range fo values. These settings are primarily accessed through an integrated menu, which can read and edit an arbitrary set of categories and settings within them, provide descriptions on hover, and a button to open the settings file directly. The collection of settings is defined by a scriptable object, and is built to be easily understood and added to. 

As my final task, I put together a short instructional pdf documenting the implementation and extension of this system.