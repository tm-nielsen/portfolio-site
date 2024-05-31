## Curl!
Curl is a video game that can be played with a brain computer interface. This enabled people with limited reliable control of their muscles and bodies to play. The project implements an integrated training scenario along with menus and gameplay built around switch access.

### Game Jam
Curl started as a project for the 2021 BCI Game Jam, designed and prototyped in 48 hours. The event was put on by BCI4Kids, a local pediatric research program focused on improving the lives of children with limited motor control using Brain-Computer Interface technology. They had run the even once before, but this was my introduction to the organization, technology, and event.

Initially titled Kerl, the game was built to be controlled with a single button and featured no integrated bci elements. Ideating on a theme of multiplayer, my small team of students looked mainly for an idea that would work with the control scheme. From what we'd seen, building something playable with one button would be the most straightforward, and simplified considerations of local multiplayer. Also notable was the reliability and response time of the input mechanism.

Given these constraints, we wanted something more methodical, where players would take turns and have plenty of time to make decisions and provide input. Curling came up on the topic of sports that might fit these criteria. Maybe not the first thing most kids would think of, but the form of the game fit so well with what we wanted. We spent even more time planning, sketching out game states and the flow between them, the different views that would be necessary, and delegating all these tasks to different members of the team. This was an unusual amount of preparation for a game jam that really paid off.

The final product starts with a join menu, where up to four players can press a button to register a human player slot. Each player uses their own key on a keyboard, which would be used through proxy by the organizers to enable the game to be tested with BCI. Depending on the amount, players would be split into teams with up to two players on each team. Once the game started, each team would take two turns performing two tasks. First, this round's skipper would select a trajectory. The game featured multiple views and a scoreboard reminiscent of sports broadcasting to communicate additional information to the player when choosing a target. A short animation plays showing the little character throwing the stone. Then, the brusher follows the stone down the sheet, managing it's speed to land the stone closest to the target. Both roles are performed by the same player if they are alone on a team, otherwise roles swap each turn. Once the stone reaches the end of the sheet, the camera pans out to a top angle to show the collisions. Any time input is available, the designated player number is displayed. After each side throws all their stones, the score is totalled up and a winner is chosen.

Personally, I handled character modelling, programming/engine work, and team organization. We won several categories in the gam, including prize money and an actual BCI headset that would both be used for the project as it grew.


### Grant
Following the jam, I was contacted by the primary organizer about the prospect of developing out little jam project into something more substantial. This was a very exciting concept. Shorty graduating university, I would even have the time to properly follow through on it. First, I had to figure out where I could actually go with this. Very helpfully, a contact I made through the Calgary Game Developer's association put me on to a local city arts grant that was open to video games. I set to work formulating a proper proposal with the same team from the jam. We put together written parts of the proposal, a proper design document, budget, project timeline, and other less formal plans. With a letter of support from the experts at BCI4Kids that organized the game jam where this all started, we secured what funding we could get and the project was underway in the summer through to the end of the year.

Two students stayed on with me through the project, providing valuable contributions in audio and secondary development. Beyond that, it came down to me as the one to model, animate, and implement most of the expanded game, along with organizing others on the project. We wrapped up the grant period with the game released into early access on Steam, happily able to report the accomplishment of our goals in the expected time-frame with only minor deviations.


### The Game
Expansion of the initial game project focused on three main areas: presentation, integration, and multiplayer. 

Most noticeable of these, presentation consisted of new and multiple character models, new maps, and a whole set of new menus to choose from these options and more. I modelled, rigged, animated, and implemented the characters and maps, and took the lead on menus as well with a team member providing the technical implementation of the switch-grid menu system we designed as a team, which is used in multiple places. This category of development would also include a vast array of general polish in both menus and gameplay.

Most important, integration was my primary focus and what I started working on first. The first milestone was to integrate the necessary, lengthy, and boring training process into the game. From that context, we could gamify it with an animated character. The process is further augmented with feedback designed to reinforce the context the controls being established would be used in. Integration more obviously extended to the direct use of this system as input with minimal user setup. Once the device is trained and the person who navigated the training menu presses "play", control is entirely with the BCI user. They can navigate a local lobby or join online, select their team, character, equipment, and vote on a map, and then play the game entirely on their own with interactions built on switch access. Unfortunately, this integration currently only supports Emotiv devices.

Lastly, we aimed to implement peer-to-peer online multiplayer. This was a bit ambitious, but we felt it was very important to the spirit of the project; letting people play together. Through integration with steam, this is surprisingly easy to do. Technically. Implementing multiplayer in any game introduces a general miasma of issues with synchronization. Ultimately, the multiplayer is often functional, but can also be the buggy mess associated with other early-access titles.

The project has largely gone untouched following release due to my own mental health issues and focus on other projects. It received one significant update in the form of a properly advanced settings menu mirroring what I built for the 2022 BCI game jam compilation project, which you can read about lower down on this page. I'd really like to return to the project one day, to see it through to be a quality video game that genuinely disrupts what people understand as feasible for accessibility. Hats and all. For now, I can't make any promises.


### Emotiv Plugin
As part of the "integration" area of development, I ended up segmenting what I could of my work into a modular [Unity package][0]. Consulting with the experts I had met at the game jam, integration of Emotiv devices with their dedicated Cortex application seemed the most feasible. What ended up being the package started from the official support. I looked through what was already built, which was notable but lacking two major areas I considered vital.

Firstly, it couldn't support multiple headsets simultaneously. While this scenario would be largely impractical given training and setup considerations, it was a deal breaker to the spirit of the project. Secondly, I didn't at all like the structure of the code. Accessing methods and information was wrapped up in all sorts of different places and most functionality couldn't effect in engine objects as it was triggered off the main thread by a websocket connection. It was reasonably built, but impractical to use. Additionally, it was distributed as a git submodule. This is, again, reasonable. However, for a package build specifically to add functionality to a Unity project, it made much more sense to distribute as a Unity package.

To address these design decisions that were issues for me, I rewrote a mirror of the same tool, implementing a differently limited wrapper of the Cortex websocket API. My version of the Emotiv Cortex package is structured slightly differently in such a way that it doesn't provide the same restriction on multiple simultaneous headsets. Additionally, methods and data subscription are accessed through a static class, making the whole thing much easier to use. This was a change made in the official support shortly after I made my own work public. Completely unrelated to my own work, I just thought it was humorous that the same conclusion was reached. Additionally, I wrote functionality to buffer websocket messaged into the main thread as events to remove the restriction on functionality. My implementation is suboptimal. I took messages from the websocket into dedicated functions which I then buffered into access methods. In hindsight, it would be simpler to buffer all websocket messages into the main thread before handling them directly.

In hopes that others might actually be able to use this tool, if that were ever to happen, I wrote mediocre but extant [documentation][1] to accompany the package.


## Web Projects
Along with my games, I've made a few websites. Purposes vary, but I built all of them in React because I learned that for my University capstone project and it worked to I kept using it. Back ends are similar but for Express.

### Portfolio Site
Hello and welcome!
(you're already here)

I started the first iteration of this site in the final year of my degree, wanting a place to show off my games. After some initial work, I shelved the project indefinitely to focus on whatever was in front of me at the time. Looking for work again in spring 2024 was a perfect excuse to revive the project. Having even more projects to write about and show off didn't hurt and was ultimately what got things moving.

The site exists for the Games page and, secondarily, the projects. The main page is obligatory. This order of priority is naturally reflected in the complexity of and effort put into each page. Like anything I make, I also wanted to learn something and have a little fun with it. To this end, I also used the project as an excuse to learn typescript, which ended up being really straightforward and also pretty cool.

#### Custom Markdown Tokenizer
This page is formatted a bit strangely.

I started writing it out in jsx, but realized quickly that the amount of text I wanted to include would make that format unreasonable. I pivoted towards markdown, as it is so wonderfully easy to write in. There are a wealth of tools available to convert the raw text directly into jsx. However, like most of my art (if you will grant me that this remotely counts), I was presented with a vision of what this page could be, then had to find a way to make it like that.

I wanted everything in collapsed sections, hoping that way you could read only what you want and not have the rest of it to scroll past. I don't think this was or is a great design decision for anyone. I do think it would be somewhat dishonest to fix it now. This was a problem, as I would need to nest sections as children of their headers. Additionally, I only wanted a certain tier of header to capture "children" is a collapsed section.

I Looked through available packages. Naturally, There wasn't anything directly applicable to the task, but many things very close. A number of markdown tokenizers presented themselves as useful, but were too featured for my uses. It would be very possible to just not use all the data they provided, but they seemed a bit confusing. I could do this myself, right? I wrote my own simplified tokenizer, which ended up being a fair bit of work with the requisite helping of grief but generally straightforward overall, especially in typescript. Along with this I wrote a simple algorithm to nest a list of tokens into trees as I desired. This all gets turned into jsx in a similarly scaled down manner.

Ultimately, I could've applied the same nesting algorithm to an existing markdown package. The entire problem was entirely unnecessary and probably made the site worse, but that doesn't conflict with my goals for the project.

#### Games Page
The games page is why this website exists. I poked around a bit when I was younger, but started properly making games in 2018, my first year of University. Since then I've made many, many games, most of which are available on [itch.io][2], a wonderful platform for sharing and selling games. It also has an API. The original conceit of this project was to make a nice display for that API response. I believe I've accomplished that.

In addition to the base information provided: title, release date, cover image, summary description, platforms, and a bit more, I wanted to include a bit of writing on each title with a longer description and what I learned from making it. This serves a dual purpose, effectively displaying the notable extent of technical and professional development I've gained from such projects, and a little personal scrapbook.

This is accomplished by supplementing the API with extra json data from a local file. A relatively simple task, but it stretched my limited understanding typescript to integrate an explicit data type with optional members, with a second data type known to me but unknown to the code, into a third explicitly defined data type. A wonderful learning opportunity.

Custom tags are also included in the extra json data, specifying my roles on a project, the tools I used, and general flavour. This all has to be integrated into a tile view, which was an engaging challenge to style responsively, or at all, but I'm quite content with how it turned out. The implementation of sorting and filtering also provided a classic problem to relearn in typescript. The end result may be slightly unorthodox, but I am very happy to have it implemented arbitrarily based only on tags in the extra json data.

Static alternatives are also provided in the json for games with animated cover images, to respect motion preferences. Apparently, you can check for that in a line or two with a media query, so that's pretty cool. The site has a very simple back end, which hides my API key and slightly cleans the base API response.


### Curl! Website
There is [a website for Curl][3], which I made as part of the greater grant project, but mainly to have [somewhere][4] to point people to for a better explanation of BCI. When trying to explain what I was working on, I often found it difficult to get across the reality of the project. It's really cool, but I really can't read your mind. There is a degree of technological impotency that tends to be ignored by most popular understandings of scientific advancement.

To this end, the ["About BCI" page][4] hosts three separate explanations of our integration of BCI technology in the project. One explanation is very simple and only a few sentences long, the next is a few short paragraphs and is closer to verbal explanations I've given. Both include explanations of BCI technology as a whole. The last explanation: "as much detail as I can muster", attempts to accomplish the promise of the label. It focuses on implementation, design considerations, and a number of specific input schemes. All three explanations are toggled between, listed in order of complexity.

The main page also exists, but is focused on the consumer side of the game and is thus uninteresting. Mostly copied from the steam page.

This was the first proper website I made. It learned me good on actually using React to do whatever I wanted, and the terror of responsive styling. It is filled with mistakes. I love it dearly

Recently, I went through a proper accessibility audit of the site with help from a friend. Fixed a few semantic issues, font sizes, and respected motion preferences. Wasn't as bad as I thought it would be, but I'm glad to have shaped it up a bit either way.


### Wart dot Gay
I love making art and learning new things, but it can be hard to find "reasons" to do so. In the fall of 2020, I started running a weekly art prompt for the student Game Design club at the UofC. This was an excellent excuse for me to make a little something every week, learning new tools and mediums. Also, supposedly, other people could do it to.

Initially from a random word generator, I switched to selecting prompts from suggestions on a google doc with a python script (I manually copied into a text file, the least fancy). Suboptimal. After handing the activity off for a bit after graduating, I decided to revive the activity in fall 2023.

After making the announcement, I spent the following week making [wart.gay][5], a dedicated web app for suggesting, selecting, voting on and otherwise managing a pool of prompts. This consists of a simple front end in React, and an express back end managing an sqlite database. Things get more complex with the password-protected admin page and methods for more direct control, including the ability to select a new prompt at random.

Ideally, I wanted to start the database with all current suggestions and every prompt that had previously been selected. I trawled through my weekly prompt announcements and the edit history of the suggestion document to manually enter every prompt with it's suggestion and selection date into a json table.

With the project mostly finished, I was presented with a terrible vision: what if users could "endorse" prompts? I could weight the random selection by these endorsements, making more popular prompts more likely to be selected. I wasn't sure if I wanted to bother including it, but naturally it ended up being the most popular feature of the site.

Overall, I'm very happy with how the site turned out and how easy it was to use. With one exception. For all the time I was running prompts off the site, I was hosting the back end off my laptop. This became a problem when I wanted to actually use the machine and, worse, when I accidentally deleted the prompt database. 

This was an excellent excuse to finally give the server a proper home. I touched up some admin methods to make the restoration of the database a bit easier, but the work was mostly in migration. The back end now lives in a docker container on a raspberry pi.


### Capstone Project
To finish off their degree, every student in the UofC engineering undergraduate program participates in a year long pseudo-professional project; a capstone.

For many students, this project represents a serious achievement and a worthwhile display of their capabilities. This was not the case for me. I lucked into a team who already had a project, able to do the software side of an electrical engineering project. What little technical work I had was finished in less than a work week, spread over the course of the project.

The project isn't worth describing. My contributions were worthwhile, and there was plenty more work on proposals, reports, and the like. The technical work was just so insignificant to me. This is due in large part to our preparations as a team. Our lead, who also worked on the software side, got the both of us to learn React before the course started. This went over really well and was the most valuable part of the entire project for me. However, this also meant I had a functional prototype together before the school year had even begun, finished in a few hours.

Also a major factor was the sheer volume of extracurricular projects I'd been actively working on throughout my entire degree. Mostly in the form of games. I genuinely felt comically ahead in all software oriented classes, just learning the common terms for concepts I was already familiar with, until technical electives in the final year when I got to learn some really cool stuff I didn't already know.


### Back End Setup
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


## BCI Game Jam 2022
### What I Made
There was another BCI game jam in 2022, the same event where Curl started. I was there partly involved with the organizers but also hoping to participate. I gave a short talk on how I'd integrated BCI with Curl, showed some people the game, and helped facilitate an online match between a player in Calgary and Edmonton at different jam sites.

I also managed to find a bit of time to throw together something small. The whole theme of the jam, after-all, was "mini-games". The intention, and final outcome, was to collect all the jam games into a single project so that device setup and training could be done in one place and used for multiple short sessions of different games.

With ample experience with a control scheme based on motor imagery, I wanted to try something else. I decided to use a p300 setup. This input method is named for the reliable response the brain displays 300ms in response to a pointed, focused stimulus. By flashing a number of different options at random, recorded intervals, the option a player is focused on can be detected by lining up these reactions with the times stimulus was provided for each option and selecting the one that lines up.

"Mutant Clash" is a simple strategy game where two players send units down three lanes, attempting to reach the other player's side to score points. There are four units to choose from, each having a movement speed, health, damage, and delay before you can summon the next unit. I hoped this could provide some depth to the gameplay, but didn't really get the chance to balance the game at all. To make up for this, I made sure to make the characters bounce around all dramatically when they get pushed over. Cover up the lack of substance with a nice bit of juice.


### Work on Mini-Game collection
After the game jam, the organizers had a collection of games they wanted to coagulate into one "BCI mega-game". Integration of the games themselves into the Unity project was done by others, but I was brought onto a short contract to help get some ui set up in engine and make everything look a bit nicer.

I got some good experience doing requirements elicitation and am proud of the work that I did. Using what I learned working on Curl, I made everything that I could switch-accessible. Created game tiles, menus, and a training environment that are comfortable and legible; useable and pretty.

My work also extended to adding a proper settings menu. There were a number of parameters exposed to the engine by the integrated BCI system, but these weren't usable in a built game. Wanting something useable, accessible, and extendable, I decided to save these settings in a human readable text file. Settings are organized into categories, each with a name, description, and suggested range fo values. These settings are primarily accessed through an integrated menu, which can read and edit an arbitrary set of categories and settings within them, provide descriptions on hover, and a button to open the settings file directly. The collection of settings is defined by a scriptable object, and is built to be easily understood and added to. 

As my final task, I put together a short instructional pdf documenting the implementation and extension of this system.


[0]: https://github.com/tm-nielsen/CortexPlugin
[1]: https://bonspiel-games.gitbook.io/cortex-unity-plugin/
[2]: https://klungore.itch.io
[3]: https://teamcurl.ca
[4]: https://teamcurl.ca/bci
[5]: https://wart.gay