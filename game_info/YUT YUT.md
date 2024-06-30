---
title: YUT YUT
tags:
 - fun
 - bad
tools:
 - Processing
roles:
 - programming
 - design
 - coordination
---

# About
This was the first proper game I ever made. In my first year of university, as I exposed to the wonders of programming, I started to make random little games in a little program called Processing, which is largely an IDE and graphics library for Java. You could find worse ways to make a game. The thought of remaking Wii Tanks snowballed with more and more zany and sadistic ideas into a year long project and eventual steam release. I worked with a classmate who provided ideas and made all the levels while I made the game part with tools to speed up the level design process. The levels were made in order, with each intended to be difficult, by someone who had continual practice with the game and increasing standard for difficulty as it went on. The game is genuinely evil. There are 19 different types of enemy tank including predictive shots, mortars, moles that cannot be hurt when burrowing beneath the ground, and the final type that will clear the entire screen with a massive laser if you spend more than three seconds in their line of sight. To (slightly) compensate for this there are 7 different player tanks, some of which are arguably a disadvantage, and which each level only allows a single type. 120 levels are split into 5 worlds, each with a boss. There is also a full sandbox level editor that unlocks tank types as you encounter them, which was actually made to aid level creation. There is a hardcore mode, where you have to get through every world without dying or your progress resets, and an arcade mode where you have to beat the whole game without dying. There is a independent timer for each level and collective timer. There is a death count. Beating a level without shooting gives you a special red star on that level. There is a specific setting to stop drawing the background, smearing the whole screen. Beating a level with this setting enabled gives you a special red star. There is a setting that removes the rounded corners from some wall blocks which increases performance by 4x. Each tile in the level select screen has a little box in the corner that will pull up a preview os that level if you hover over it. There are 5 hidden minigames that can only be accessed by clicking on tiny obscure places in different menu screens. It is the foundation of my development philosophy and a treasured gem of my artistic output. It will be remade.

# What I Learned
This project is largely how I learned to program, being naturally introduced to many of the fundamental and advanced concepts and patterns of software engineering. I genuinely feel like I skipped two years of my degree with this project, learning in class the name for ideas I was already familiar with. As such, the code is filled with beautiful and horrifying growing pains. All the UI is custom written and hardcoded. Every level in the game is declared explicitly in two-dimensional integer arrays in files thousands of lines long, one for walls and one for tanks. The game is saved to separate CSVs in the local directory, so when I wanted to fix a game breaking resource issue by switching audio libraries on the steam build, the only thing I could do was reset every player's save file. The impact on my technical development is too great to properly express.