---
title: Clack
static_cover_url: https://img.itch.zone/aW1nLzE2NDI0MjQwLmdpZg==/315x250%23cm/Q4GWMY.gif
tags:
 - jam
 - fun
 - arcade
 - current
tools:
 - Godot
 - Piskel
roles:
 - programming
 - pixel art
 - animation
 - design
 - coordination
ancestor: Bungee Buster
---

## About
Clack is a juicy little video game video game made for the 2024 Calgary Game Developers Association Arcade Game Jam. It is also the third entry in the retrospective "Twig Goes Hard" trilogy of jam games, also including ET-Skate and Jugghoul.

## The Journey
The point of the jam was to make little games that could and would actually be showcased on physical arcade machine throughout the city and at different events. We were given the theme: "coin-operated". Fairly strange as far as themes go, but I'm very happy with where I took it. Bouncing off other clumps in brainstorming, one main idea was reached: coins as health. Coins would also be necessary to attack. A sort of background currency. With [my favourite audio guy][0] on board remotely, we were too large of a group, so I split off from the wonderful people I drew these plans with to do my own thing.

Working on my own project now, I came to two pillars. First, the image of throwing a coin and it bouncing around off enemies like pinball. Second, and only by the end of the first night, that I could simply make the character a stack of coins. Collecting a coin would make the stack bigger and throwing/spending a coin would diminish it. I was making Knack. This excited me.

A secret third aspect introduced itself introduced itself as the game took shape. A vision. I had made all the art in simple one or two colour blobs of pixels with simple, jumpy animation. Colours could easily be swapped out on the fly. Spending a significant amount of my limited time, I implemented the functionality to dynamically and suddenly swap the entire game's entire palette on score thresholds, including the start of the game.

The effect was electrifying, and is among the best of the notable quantities of juice I managed to sneak in by the end of the jam. Additional palettes were snagged from coolors.co at the suggestion of another jammer, which made it so, so much easier to make that many palettes with only the one small brain I have.

The game was done by the final day, basically. However, there was a single nagging idea I had left to implement that I knew I had to do. So far, all I had was basic enemies that walked at the player. In a horde they could be interesting, but not very stimulating. Vore. This is what my brain said to me. During brainstorming, I had tried to think of different enemies to make. A few had come up: one that would take two hits to kill, an invincible roving hazard, and an enemy that would eat any coin it found on the ground. Of course, if given the time to properly stew, these are all the same idea.

The only remaining worry what how to design this creature. After a notable amount of procrastination, I sketched out something between a goose and a shoebill with this delightfully smug expression. Animations was well, with a separate idle state clearly showing a coin lodged in the devil's thin neck. Implementation, thankfully, went incredibly smoothly. The creature was a perfect addition to spice things up. I knew I did good when, after sharing the game with a friend: "~~~er ATE my hockey puck". Vindication!

Audio came in after the deadline but before the actual deadline of the live showcase. It was fantastic as always, and I managed to get everything in the game for the showcase. I love working with [this man][0].

Being my 20-something-ith game jam, knowing what I was doing, barely having to coordinate with a team, and sleeping only a few hours each night on site and going hard at it every waking hour, I had an abundance of time to playtest. This was an enormous boon. Playtesting is always important, but being able to do so much of it with so many different people shaped and improved the game significantly. I am very thankful to all the other on site jammers who contributed in this way.

## What I Learned
I kinda went off with this one. I used tools I already knew, implementing the same solutions to problems I've solved so many times already. Made art in ways I already know. Though no revelation, the project was another step forward in my design ability. The foremost consideration of an arcade game: unconventional controls, high-scores, grabbing attention, that special kind of looks easy but really grinds you down once you get going, calibrating a difficulty curve to accommodate a first playthrough and a twentieth. A very good fit for my direct, percussive inclinations.

## The Future
I am thankful to have received such a heartening wash of positive feedback for the project both at the jam and after. Such rave reviews 've got me thinking that maybe I should take this thing a little further. The game is fun, we had aught to make more of it.

## Arcade Port
Following the jam, I implemented a number of refinements in preparation for the game's long term deployment on unmoderated cabinets. After drafting a proper plan for an extended production project, I dedicated a short sprint to this work. This largely consisted of visual or mechanical polish, with special attention paid to the proper function of the project on the cabinets. No playable content was added.

On top of experience planning a project, this latest sprint was good practice in establishing modular and scalable solutions for a long term project.

[0]: https://roboplomat.bandcamp.com