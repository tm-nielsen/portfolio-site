---
title: Trolley Problem
tags:
 - jam
 - fun
tools:
 - Godot
 - Krita
roles:
 - programming
 - design
 - technical art
 - animation
---

## About
My 30th jam game, made for the 2025 Alberta Game Jam.

Spent a weekend screeching monkey noises into my laptop so that you could too.

## The Process
This time around I wanted to take things easy and make something as simple as I possibly could. Didn't have any intentions, but expected to end up in a group one way or another. Delighted to see so many new and returning friendly faces.

After the announcement, I made an effort to facilitate the exchange of a rich idea stew using the vomit funnel method between whoever hadn't already siloed themselves. Just the way Craig Pfau taught me. Truthfully I did a fairly lacklustre job of explaining anything or executing any sort of management or even guidance. Despite this, the ideas flowed, forming squads around them.

### Creating Life
The theme "Onomatopoeia" conjured a devil on my shoulder, and his name was John. What if players could control a very basic fighting game by rapidly shouting commands like "Scat" "Bip" "Bop" "Skadoo"?

I think that'd be very silly and pretty cool. I also think it would be somewhat cruel to lead anyone else down the treacherous path of implementing speech recognition in a game jam. So I was solo (on site), with the wonderful exception of [my favourite collaborator][0] doing audio.

I spend Friday evening validating what I could do with speech to text. Started looking in Godot, where I am most comfortable, but open to the possibility of building something in C/C++ or other tools if I found a fitting library. Surprisingly, there are a few functional options available. They would compile, but face an engine-level error at runtime. Strange.

#### Compiling Godot
Turns out my laptop microphone outputs 4 channel audio. Though not unheard of, this isn't exactly standard and isn't currently supported by Godot. I figured this out by finding an open pull request to fix the issue. I new what I needed to do, but also what it would cost.

Naive (in my view) users of open-source software often note how they could simply patch an issue with the program themselves if they run into one. Better yet, they can share that fix with others. The very human organizational considerations of managing or contributing to an open source project rarely facilitate this on the common user level. But here I was, cloning the source repository to build it from source with some tiny niche patch like some kinda FOSShead.

It was actually incredibly straightforward, using the high level cross-platform build tool I've never heard of. Just took like an hour or two sitting around waiting for the thing to compile to see if this speech to text thing was even worth using. That and another few hours compiling and recompiling export templates which apparently you also have to do.

#### The Result
"give me skin give me skin give me skin"

...and the like. A screaming nightmare machine only vaguely influenced by the live input audio. Hilarious, but incredibly inaccurate with way too much latency. It wasn't the tool for the job. After all, what I really needed was something to detect the difference between a set number of vowel sounds, not transcribe audio.

### A New Focus
I figured broad vowel classification should be as simple as tracking changes to pitch and magnitude, but I wasn't about to start reading papers on vocal processing. What could I do with just pitch. Plenty, is what.

Another group was already doing a game about fighting chickens, so I guess it was monkeys. Which was prefect; the two classic monkey noises, grunting and screeching, fit very well into high and low bands. Some sample noises from my fellow jammers were tested on a spectrogram to establish a target range. Basically just the normative human vocal range, if you can believe it.

The rest of the weekend was spent making a game around it, enriching the event atmosphere with Jungle noises late into the night.

(thank you and sorry to everyone else who stayed overnight)

[0]: https://roboplomat.bandcamp.com