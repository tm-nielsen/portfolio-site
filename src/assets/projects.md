## Curl!
Curl! is a video game that can be played with a brain computer interface. This includes an integrated training scenario along with accessible menus and gameplay.

### Game Jam
Curl! started as a project for the 2021 BCI Game Jam, designed and prototyped in 48 hours. Initially titled Kerl, the game was built to be controlled with a single button and featured no integrated bci elements.

- local multiplayer as per theme
- spent lots of time planning which paid off
  - outlined game states and flow
  - sketched game views
  - assigned roles

### Grant
got a grant

- contact with CDGA?
- budget
- written proposal
- timeline / planning
- support from experts at BCI4Kids
- gathering other support material
- final report

### The Game
I made it with help

- worked with team
- more assets/content
- polish
- online multiplayer
- menus/settings

### Emotiv Plugin
I made cool thing [here][0] with [documentation] [1], too

- started from the official support
  - needed multiple headsets
  - didn't like the way you had to access methods
- based on a websocket connection to the Emotiv Cortex app
- everything runs as events based on websocket messages
  - buffered into the main thread
  - should've just implemented a global buffer and sorted through websocket messages on the main thread
- packaged into a modular Unity package
- wrote mediocre but extant documentation


## Web Projects
Along with my games, I've made a few websites. Purposes vary, but I built all of them in React because I learned that for my University capstone project and it worked to I kept using it. Back ends are similar but for Express.

### Portfolio site
You're already here, hello and welcome!
I started the first iteration of this site in the final year of my degree, wanting a place to show off my games. After some initial work, I shelved the project indefinitely to focus on whatever was in front of me at the time. Looking for work again in spring 2024 was a perfect excuse to revive the project. Having even more projects to write about and show off didn't hurt and was ultimately what got things moving. The site exists for the Games page and, secondarily, the projects. The main page is obligatory. This order of priority is naturally reflected in the complexity of and effort put into each page. Like anything I make, I also wanted to learn something and have a little fun with it. To this end, I also used the project as an excuse to learn typescript, which ended up being really straightforward and also pretty cool.

#### Custom Markdown Tokenizer
This page is formatted a bit strangely. I started writing it out in jsx, but realized quickly that the amount of text I wanted to include would make that format unreasonable. I pivoted towards markdown, as it it so easy to write in and there are a wealth of tools available to convert the raw text directly into jsx. However, like most of my art (if you will grant me that this remotely counts), I was presented with a vision of what this page could be, then had to find a way to make it like that. I wanted everything in collapsed sections, hoping that way you could read only what you want and not have the rest of it to scroll past. I don't think this was or is a great design decision for anyone. I do think it would be somewhat dishonest to fix it now. This was a problem, as I would need to nest sections as children of their headers. Additionally, I only wanted a certain tier of header to still capture. Looked through available packages. Naturally, There wasn't anything directly applicable to the task, but many things very close. A number of markdown tokenizers presented themselves as useful, but were too featured for my uses. It would be very possible to just not use all the data they provided, but they seemed a bit confusing. I could do this myself, right? I write my own simplified tokenizer, which ended up being a fair bit of work with the requisite helping of grief but generally straightforward, especially in typescript. Along with this I wrote a simple algorithm to nest a list of tokens into trees as I desired. This all gets turned into jsx in a similarly scaled down manner. Ultimately, I could've applied the same nesting algorithm to an existing markdown package. The entire problem was entirely unnecessary and probably made the site worse, but that doesn't conflict with my goals for the project.

- completely unnecessary/solved problem
- wanted to write page content in a simpler manner
- also wanted to nest content in collapsed sections
  - needed to treat headers as parents and capturing groups
- a little grief but ultimately really straightforward
- generating jsx from tokens - also a solved problem

#### Games Page
The games page is why this website exists. I poked around a bit when I was younger, but started properly making games in 2018, my first year of University. Since then I've made many, many games, most of which are available on [itch.io][2], a wonderful platform for sharing and selling games. It also has an API. The original conceit of this project was to make a nice display for that API response. I believe I've accomplished that. In addition to the base information provided: title, release date, cover image, summary description, platforms, and more, I wanted to include a bit of writing on each title with a longer description and what I learned. This serves a dual purpose, effectively displaying the notable extent of technical and professional development I've gained from such projects, and a little personal scrapbook. This is accomplished by supplementing the API with extra json data from a local file. A relatively simple task, but it stretched my limited understanding typescript to integrate an explicit data type with optional members, with a second data type known to me but unknown to the code, into a third explicitly defined data type. A pretty simple task in retrospect, but a wonderful learning opportunity. Custom tags are also included in the extra json data, specifying my roles on a project, the tools I used, and general flavour. This all has to be integrated into a tile view, which was an engaging challenge to style responsively, or at all, but I'm quite content with how it turned out. The implementation of sorting and filtering also provided a classic problem to relearn in typescript. The end result may be slightly unorthodox, but I am very happy to have it implemented arbitrarily based only on tags in the extra json data. Static alternatives are also provided in the json for games with animated cover images, to respect motion preferences. Apparently, you can check for that in a line or two with a media query, so that's pretty cool. The site technically has a back end, which hides my API key and slightly cleans the results.

- Made many games
- fetching from the itch api
- added tags and descriptions
- static alternatives
- tile view
- sorting/filtering

### Curl! Website
There is [a curl website] [3], which I made as part of the greater grant project, but mainly to have [somewhere][4] to point people to for a better explanation of BCI. When trying to explain what I was working on, I often found it difficult to get across the reality of the project. It's really cool, but I really can't read your mind. There is a degree of technological impotency that tends to be ignored by most popular understandings of scientific advancement. To this end, [the "About BCI" page][4] hosts three separate explanations of our integration of BCI technology in the project. One explanation is very simple and only a few sentences long, the next is a few short paragraphs and is closer to verbal explanations I've given. Both include explanations of BCI technology as a whole. The last explanation: "as much detail as I can muster", attempts to accomplish the promise of the label. It focuses on implementation, design considerations, and a number of specific input schemes. All three explanations are toggled between, listed in order of complexity. The main page also exists, but is focused on the consumer side of the game and thus is uninteresting. Mostly copied from the steam page. This was the first proper website I made. It learned me good on actually using React to do whatever I wanted, and the terror of responsive styling. It is filled with mistakes. I love it dearly. Recently, I went through a proper accessibility audit of the site with help from a friend. Fixed a few semantic breaks, font sizes, and respected motion preferences. Wasn't as bad as I thought it would be, glad to have shaped it up a bit either way.

- made website for curl
- mainly just copied from the steam page
- bci explanation page
- first proper react or web project
  - learned alot about functionality and styling
  - filled with mistakes
- recently went back through and updated the site for accessibility
  - help from a friend
  - fixed html semantics (did pretty good the first time)
  - fixed base text size (and had to fix every other font size)
  - respected motion preferences

### Wart dot Gay
I love making art and learning new things, but it can be hard to do without a reason. In the fall of 2020, I started running a weekly art prompt for the student Game Design club. This was an excellent excuse for me to make a little something every week, learning new tools and mediums. Also, supposedly, other people could do it to. Initially from a random word generator, I switched to selecting from suggestions on a google doc with a python script (I manually copied into a text file, the least fancy). Suboptimal. After handing the activity off for a bit after graduating, I decided to revive the activity in fall 2023. After making the announcement, I spent the following week making [wart.gay][5], a dedicated web app for suggesting, selecting, voting on and otherwise managing a pool of prompts. This consists of a simple front end in React, and an express back end managing an sqlite database. Things get more complex with the password-protected admin page and methods for more direct control and the ability to select a new prompt at random. Ideally, I wanted to start the database with all current suggestions and every prompt that had previously been selected. I trawled through my weekly prompt announcements and the edit history of the suggestion document to manually enter every prompt with it's suggestion and selection date into a json table. Mostly done the project, the idea came up to add the ability to "endorse" prompts. I could weight the random selection by these endorsements, making more popular prompts more likely to be selected. I wasn't sure if I wanted to bother including it, but it ended up being the most popular feature of the site. Overall, I'm very happy with how the site turned out and how easy it was to use. With one exception. For all the time I was running prompts off the site, I was hosting the back end off my laptop. This became a problem when I wanted to actually use my laptop and, worse, when I accidentally deleted the prompt database when resetting it. However, this was an excellent excuse to finally give the server a proper home. I touched up some admin methods to make the restoration of the database a bit easier, but most of that project is covered in another section. The back end now lives in a docker container on a raspberry pi.

- what wart is
- running from a google doc and python script
- made to automate suggestions and approval
- made in just over a week
- ended up adding a vote feature on the second to last day which ended up being the most popular thing
- manual data entry into json for all past prompts and suggestions
- accidentally deleted the database when resetting laptop
- updated with new functionality to help restore things manually

### Capstone Project
To finish off their degree, every student in the UofC engineering undergraduate program participates in a year long pseudo-professional project; a capstone. For many students, this project represents a serious achievement and a worthwhile display of their capabilities. This was not the case for me. I lucked into a team who already had a project, able to do the software side of an electrical engineering project. I finished what little technical work I had in less than a work week, spread over the course of the project. The project isn't worth describing. My contributions were worthwhile, and I still had plenty to contribute on proposals, reports, and the like, just the technical work was nothing to me. This is due in large part to our preparations as a team. Our lead, who also worked on the software side, got the both of us to learn React before the course started. This went over really well and was the most valuable part of the entire project for me, but also meant that I had a functional prototype together in a couple afternoons before the school year had even begun. Also a major factor was the sheer volume of extracurricular projects I'd been actively working on throughout my entire degree, in the form of games. I genuinely felt comically ahead in all software oriented classes, just learning the common terms for concepts I was already familiar with, until technical electives in the final year when I learned some cool stuff I didn't already know.

- lucked into a team and project
- learned react/express
- mostly electrical project in theory
- did my part in maybe a week
- I had already learned so much from doing projects that only the reports were of any consequence
  - similar experience with most of school

### Back End Setup
If you got here via twig.skin, you were redirected from the device I'm currently using to host any of my web project's back ends. Wanting to give the proper home to the WArt backend after doing a little prank on myself, I started looking into alternatives. Web hosting would likely be more professionally applicable, but self hosting has always been so much more interesting to me. I managed to get an old pi from a friend that sealed the deal. My intention was to set any services up in docker containers routed to by a reverse proxy that I could hide behind whatever I wanted. I didn't and don't expect security to be an issue to deployments of such a minute scale, but I might as well do the thing properly. This was an ideal. Something I expected to attempt, stumble on, and ultimately compromise on. Fortunately, the wealth of time that comes from being unemployed provided all the power I need to get everything set up exactly the way I wanted. This started with setting up the pi, which meant figuring out how to get it connected to my local network, installing node and docker, realizing that the version of node on the distribution registry isn't exactly up to date, figuring out how docker works, somehow breaking my installation by uninstalling, realizing that I didn't actually really need node installed at all with containers but I would still really like to have a working node installation on the machine and I would probably need to do a full reset and that's easier to do before you're properly set up, to messing with sd card adaptors, to everything just working perfectly the second time, figuring out how to set things up in docker but this time I actually get it, figuring out how to set things up as composed services, setting up a reverse proxy to get them all talking, and finally it all just kinda worked. A whole adventure. At some point along the way, I realized I could just have a single "back end domain name" and direct to specific services as subdomains. The whole setup is wonderful, I can manage the reverse proxy through a web interface over the local network, ssh into the pi, and update or deploy a new service with two commands (and maybe a little setup if I need to set up and dockerfile or whatever). It's awesome.

- running the wart server off laptop
- actually started using laptop
- got an old pi from a friend
- wanted to set up everything in docker containers behind a reverse proxy behind cloudflare
  - intended as lofty goal
  - in the end it all worked out perfectly and is fantastic
- actually just use subdomains

## BCI Game Jam 2022
### What I made
There was another BCI game jam in 2022, the same event where Curl! started. I was there partly involved with the organizers but also hoping to participate. I gave a short talk on how I'd integrated BCI with Curl!, showed some people the game, and helped facilitate an online match between a player in Calgary and Edmonton at different jam sites. I also managed to find a bit of time to throw together something small. The whole theme of the jam, after-all, was "mini-games". The intention, and final outcome, was to collect all the jam games into a single project so that device setup and training could be done in one place and used for multiple short sessions of different games. With ample experience with a control scheme based on motor imagery, I wanted to try something else. I decided to use a p300 setup. This input method is named for the reliable response the brain displays 300ms in response to a pointed, focused stimulus. By flashing a number of different options at random, recorded intervals, the option a player is focused on can be detected by lining up these reactions with the times stimulus was provided for each option and selecting the one that lines up. "Mutant Clash" is a simple strategy game where two players send units down three lanes, attempting to reach the other player's side to score points. There are four units to choose from, each having a movement speed, health, damage, and delay before you can summon the next unit. I hoped with could provide some depth to the gameplay, but didn't really get the chance to balance the game at all. To make up for this, I made sure to make the characters bounce around all dramatically when they get pushed over. Cover up the lack of substance with a nice flavour.

- send units down three lanes
- p300
- last minute
- no balance
- little thing I could throw together
- making the little dudes fly around when they get killed

### Work on Minigame collection
After the game jam, the organizers had a collection of games they wanted to coagulate into one "BCI mega-game". Integration of the games themselves into the Unity project was done by others, but I was brought onto a short contract to help get some ui set up in engine and make everything look a bit nicer. I got some good experience doing requirements elicitation in a directly applicable context, and am proud of the work that I did. Using what I learned working on Curl, I made everything that I could switch-accessible. Created game tiles, menus, and a training environment that are comfortable and legible; useable and pretty. My work also extended to adding a proper settings menu. There were a number of parameters exposed to the engine by the integrated BCI system, but these weren't usable in a built game. Wanting something useable, accessible, and extendable, I decided to save these settings in a human readable text file. Settings are organized into categories, each with a name, description, and suggested range fo values. These settings are primarily accessed through an integrated menu, which can read and edit an arbitrary set of categories and settings within them, provide descriptions on hover, and a button to open the settings file directly. The set of settings is defined by a scriptable object, and is built to be easily understood and added to. As my final task, I put together a short instructional pdf documenting the implementation and extension of this system.

- contract work
- requirements elicitation
- ui work in unity
- making things useable and pretty
- settings menu and implementation
  - written to human readable text file
  - arbitrary settings
  - extendable

[0]: https://github.com/tm-nielsen/CortexPlugin
[1]: https://bonspiel-games.gitbook.io/cortex-unity-plugin/
[2]: https://klungore.itch.io
[3]: https://teamcurl.ca
[4]: https://teamcurl.ca/bci
[5]: https://wart.gay