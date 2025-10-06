---
permalink: :path/curl
title: Curl!
description: A space themed curling video game you can play with your thoughts.
---

[Curl is a video game that can be played with a brain computer interface][0]. This enables people with limited reliable control of their muscles and bodies to play. The project implements an integrated training scenario along with menus and gameplay built around switch access.

## Game Jam
Curl started as a project for the 2021 BCI Game Jam, designed and prototyped in 48 hours. The event was put on by BCI4Kids, a local pediatric research program focused on improving the lives of children with limited motor control using Brain-Computer Interface technology. They had run the even once before, but this was my introduction to the organization, technology, and event.

Initially titled Kerl, the game was built to be controlled with a single button and featured no integrated bci elements. Ideating on a theme of multiplayer, my small team of students looked mainly for an idea that would work with the control scheme. From what we'd seen, building something playable with one button would be the most straightforward, and simplified considerations of local multiplayer. Also notable was the reliability and response time of the input mechanism.

Given these constraints, we wanted something more methodical, where players would take turns and have plenty of time to make decisions and provide input. Curling came up on the topic of sports that might fit these criteria. Maybe not the first thing most kids would think of, but the form of the game fit so well with what we wanted. We spent even more time planning, sketching out game states and the flow between them, the different views that would be necessary, and delegating all these tasks to different members of the team. This was an unusual amount of preparation for a game jam that really paid off.

The final product starts with a join menu, where up to four players can press a button to register a human player slot. Each player uses their own key on a keyboard, which would be used through proxy by the organizers to enable the game to be tested with BCI. Depending on the amount, players would be split into teams with up to two players on each team. Once the game started, each team would take two turns performing two tasks. First, this round's skipper would select a trajectory. The game featured multiple views and a scoreboard reminiscent of sports broadcasting to communicate additional information to the player when choosing a target. A short animation plays showing the little character throwing the stone. Then, the brusher follows the stone down the sheet, managing it's speed to land the stone closest to the target. Both roles are performed by the same player if they are alone on a team, otherwise roles swap each turn. Once the stone reaches the end of the sheet, the camera pans out to a top angle to show the collisions. Any time input is available, the designated player number is displayed. After each side throws all their stones, the score is totalled up and a winner is chosen.

Personally, I handled character modelling, programming/engine work, and team organization. We won several categories in the gam, including prize money and an actual BCI headset that would both be used for the project as it grew.


## Grant
Following the jam, I was contacted by the primary organizer about the prospect of developing out little jam project into something more substantial. This was a very exciting concept. Shorty graduating university, I would even have the time to properly follow through on it. First, I had to figure out where I could actually go with this. Very helpfully, a contact I made through the Calgary Game Developer's association put me on to a local city arts grant that was open to video games. I set to work formulating a proper proposal with the same team from the jam. We put together written parts of the proposal, a proper design document, budget, project timeline, and other less formal plans. With a letter of support from the experts at BCI4Kids that organized the game jam where this all started, we secured what funding we could get and the project was underway in the summer through to the end of the year.

Two students stayed on with me through the project, providing valuable contributions in audio and secondary development. Beyond that, it came down to me as the one to model, animate, and implement most of the expanded game, along with organizing others on the project. We wrapped up the grant period with the game released into early access on Steam, happily able to report the accomplishment of our goals in the expected time-frame with only minor deviations.


## The Game
Expansion of the initial game project focused on three main areas: presentation, integration, and multiplayer. 

Most noticeable of these, presentation consisted of new and multiple character models, new maps, and a whole set of new menus to choose from these options and more. I modelled, rigged, animated, and implemented the characters and maps, and took the lead on menus as well with a team member providing the technical implementation of the switch-grid menu system we designed as a team, which is used in multiple places. This category of development would also include a vast array of general polish in both menus and gameplay.

Most important, integration was my primary focus and what I started working on first. The first milestone was to integrate the necessary, lengthy, and boring training process into the game. From that context, we could gamify it with an animated character. The process is further augmented with feedback designed to reinforce the context the controls being established would be used in. Integration more obviously extended to the direct use of this system as input with minimal user setup. Once the device is trained and the person who navigated the training menu presses "play", control is entirely with the BCI user. They can navigate a local lobby or join online, select their team, character, equipment, and vote on a map, and then play the game entirely on their own with interactions built on switch access. Unfortunately, this integration currently only supports Emotiv devices.

Lastly, we aimed to implement peer-to-peer online multiplayer. This was a bit ambitious, but we felt it was very important to the spirit of the project; letting people play together. Through integration with steam, this is surprisingly easy to do. Technically. Implementing multiplayer in any game introduces a general miasma of issues with synchronization. Ultimately, the multiplayer is often functional, but can also be the buggy mess associated with other early-access titles.

The project has largely gone untouched following release due to my own mental health issues and focus on other projects. It received one significant update in the form of a properly advanced settings menu mirroring what I built for the 2022 BCI game jam compilation project, which you can read about lower down on this page. I'd really like to return to the project one day, to see it through to be a quality video game that genuinely disrupts what people understand as feasible for accessibility. Hats and all. For now, I can't make any promises.


## Emotiv Plugin
As part of the "integration" area of development, I ended up segmenting what I could of my work into a modular [Unity package][1]. Consulting with the experts I had met at the game jam, integration of Emotiv devices with their dedicated Cortex application seemed the most feasible. What ended up being the package started from the official support. I looked through what was already built, which was notable but lacking two major areas I considered vital.

Firstly, it couldn't support multiple headsets simultaneously. While this scenario would be largely impractical given training and setup considerations, it was a deal breaker to the spirit of the project. Secondly, I didn't at all like the structure of the code. Accessing methods and information was wrapped up in all sorts of different places and most functionality couldn't effect in engine objects as it was triggered off the main thread by a websocket connection. It was reasonably built, but impractical to use. Additionally, it was distributed as a git submodule. This is, again, reasonable. However, for a package build specifically to add functionality to a Unity project, it made much more sense to distribute as a Unity package.

To address these design decisions that were issues for me, I rewrote a mirror of the same tool, implementing a differently limited wrapper of the Cortex websocket API. My version of the Emotiv Cortex package is structured slightly differently in such a way that it doesn't provide the same restriction on multiple simultaneous headsets. Additionally, methods and data subscription are accessed through a static class, making the whole thing much easier to use. This was a change made in the official support shortly after I made my own work public. Completely unrelated to my own work, I just thought it was humorous that the same conclusion was reached. Additionally, I wrote functionality to buffer websocket messaged into the main thread as events to remove the restriction on functionality. My implementation is suboptimal. I took messages from the websocket into dedicated functions which I then buffered into access methods. In hindsight, it would be simpler to buffer all websocket messages into the main thread before handling them directly.

In hopes that others might actually be able to use this tool, if that were ever to happen, I wrote mediocre but extant [documentation][2] to accompany the package.


[0]: https://teamcurl.ca
[1]: https://github.com/tm-nielsen/CortexPlugin
[2]: https://bonspiel-games.gitbook.io/cortex-unity-plugin/