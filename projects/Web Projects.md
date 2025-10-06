---
permalink: :path/web-projects
title: Web Projects
description: Some of the websites and services I've built.
---

Along with my games, I've made a few websites. Purposes vary, but I built all of them in React because I learned that for my University capstone project and it worked to I kept using it. Back ends are similar but for Express.

## Curl! Website
There is [a website for Curl][0], which I made as part of the greater grant project, but mainly to have [somewhere][1] to point people to for a better explanation of BCI. When trying to explain what I was working on, I often found it difficult to get across the reality of the project. It's really cool, but I really can't read your mind. There is a degree of technological impotency that tends to be ignored by most popular understandings of scientific advancement.

To this end, the ["About BCI" page][1] hosts three separate explanations of our integration of BCI technology in the project. One explanation is very simple and only a few sentences long, the next is a few short paragraphs and is closer to verbal explanations I've given. Both include explanations of BCI technology as a whole. The last explanation: "as much detail as I can muster", attempts to accomplish the promise of the label. It focuses on implementation, design considerations, and a number of specific input schemes. All three explanations are toggled between, listed in order of complexity.

The main page also exists, but is focused on the consumer side of the game and is thus uninteresting. Mostly copied from the steam page.

This was the first proper website I made. It learned me good on actually using React to do whatever I wanted, and the terror of responsive styling. It is filled with mistakes. I love it dearly

Recently, I went through a proper accessibility audit of the site with help from a friend. Fixed a few semantic issues, font sizes, and respected motion preferences. Wasn't as bad as I thought it would be, but I'm glad to have shaped it up a bit either way.


## Wart dot Gay
I love making art and learning new things, but it can be hard to find "reasons" to do so. In the fall of 2020, I started running a weekly art prompt for the student Game Design club at the UofC. This was an excellent excuse for me to make a little something every week, learning new tools and mediums. Also, supposedly, other people could do it to.

Initially from a random word generator, I switched to selecting prompts from suggestions on a google doc with a python script (I manually copied into a text file, the least fancy). Suboptimal. After handing the activity off for a bit after graduating, I decided to revive the activity in fall 2023.

After making the announcement, I spent the following week making [wart.gay][2], a dedicated web app for suggesting, selecting, voting on and otherwise managing a pool of prompts. This consists of a simple front end in React, and an express back end managing an sqlite database. Things get more complex with the password-protected admin page and methods for more direct control, including the ability to select a new prompt at random.

Ideally, I wanted to start the database with all current suggestions and every prompt that had previously been selected. I trawled through my weekly prompt announcements and the edit history of the suggestion document to manually enter every prompt with it's suggestion and selection date into a json table.

With the project mostly finished, I was presented with a terrible vision: what if users could "endorse" prompts? I could weight the random selection by these endorsements, making more popular prompts more likely to be selected. I wasn't sure if I wanted to bother including it, but naturally it ended up being the most popular feature of the site.

Overall, I'm very happy with how the site turned out and how easy it was to use. With one exception. For all the time I was running prompts off the site, I was hosting the back end off my laptop. This became a problem when I wanted to actually use the machine and, worse, when I accidentally deleted the prompt database. 

This was an excellent excuse to finally give the server a proper home. I touched up some admin methods to make the restoration of the database a bit easier, but the work was mostly in migration. The back end now lives in a docker container on a raspberry pi.


## Capstone Project
To finish off their degree, every student in the UofC engineering undergraduate program participates in a year long pseudo-professional project; a capstone.

For many students, this project represents a serious achievement and a worthwhile display of their capabilities. This was not the case for me. I lucked into a team who already had a project, able to do the software side of an electrical engineering project. What little technical work I had was finished in less than a work week, spread over the course of the project.

The project isn't worth describing. My contributions were worthwhile, and there was plenty more work on proposals, reports, and the like. The technical work was just so insignificant to me. This is due in large part to our preparations as a team. Our lead, who also worked on the software side, got the both of us to learn React before the course started. This went over really well and was the most valuable part of the entire project for me. However, this also meant I had a functional prototype together before the school year had even begun, finished in a few hours.

Also a major factor was the sheer volume of extracurricular projects I'd been actively working on throughout my entire degree. Mostly in the form of games. I genuinely felt comically ahead in all software oriented classes, just learning the common terms for concepts I was already familiar with, until technical electives in the final year when I got to learn some really cool stuff I didn't already know.


## Back End Setup
If you got here via twig.skin, you were redirected from the device I'm currently using to host any of my web project's back ends.

Wanting to give the proper home to the WArt backend after doing a little prank on myself (deleting the wart prompts database), I started looking into alternatives. Web hosting would likely be more professionally applicable, but self hosting has always been so much more interesting to me. I managed to get an old pi from a friend that sealed the deal.

My intention was to set any services up in docker containers routed to by a reverse proxy that I could hide behind whatever I wanted. I didn't and don't expect security to be an issue to deployments of such a minute scale, but I might as well do the thing properly. This was an ideal. Something I expected to attempt, stumble on, and ultimately compromise on. Fortunately, the wealth of time that comes from being unemployed provided all the brain gas I need to get everything set up exactly the way I wanted.

This started with the pi itself, which meant...
- figuring out how to get it connected to my local network
- installing node and docker
- realizing that the version of node on the distribution registry isn't exactly up to date
- figuring out how docker works
- somehow breaking my installation by uninstalling
- realizing that I didn't actually really need node installed at all with containers but I would still really like to have a working node installation on the machine and I would probably need to do a full reset and that's easier to do before you're properly set up
- messing with sd card adaptors
- everything just working perfectly the second time
- figuring out how to set things up in docker but this time I actually get it, figuring out how to set things up as composed services
- setting up a reverse proxy to get them all talking
...and finally it all just kinda worked.
A whole adventure.

At some point along the way, I realized I could just have a single "back end domain name" and direct to specific services as subdomains. The whole setup is wonderful, I can manage the reverse proxy through a web interface over the local network, ssh into the pi, and update or deploy a new service with two commands (and maybe a little setup for a dockerfile and whatnot). It's awesome.


[0]: https://teamcurl.ca
[1]: https://teamcurl.ca/bci
[2]: https://wart.gay