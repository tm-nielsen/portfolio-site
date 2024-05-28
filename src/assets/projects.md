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
I started the first iteration of this site in the final year of my degree, wanting a place to show off my games. After some initial work, I shelved the project indefinitely to focus on whatever was in front of me at the time. Looking for work again in spring 2024 was a perfect excuse to revive the project. Having even more projects to write about and show off didn't hurt and was ultimately what got things moving. The site exists for the Games page and, secondarily, the projects. The main page is obligatory. This order of priority is naturally reflected in the complexity of and effort put into each page. Also I used this as an excuse to learn typescript, which ended up being really straightforward and also pretty cool.

#### Custom Markdown Tokenizer
I wrote this to nest stuff

- completely unnecessary/solved problem
- wanted to write page content in a simpler manner
- also wanted to nest content in collapsed sections
  - needed to treat headers as parents and capturing groups
- a little grief but ultimately really straightforward
- generating jsx from tokens - also a solved problem

#### Games Page
This is the reason I made the site and where you should probably be reading right now.

- Made many games
- fetching from the itch api
- added tags and descriptions
- static alternatives
- tile view
- sorting/filtering

### Curl! Website
there is [a curl website] [2]

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
[lol][3]

- what wart is
- running from a google doc and python script
- made to automate suggestions and approval
- made in just over a week
- ended up adding a vote feature on the second to last day which ended up being the most popular thing
- manual data entry into json for all past prompts and suggestions
- accidentally deleted the database when resetting laptop
- updated with new functionality to help restore things manually

### Capstone Project
literal joke of a project

- lucked into a team and project
- learned react/express
- mostly electrical project in theory
- did my part in maybe a week
- I had already learned so much from doing projects that only the reports were of any consequence
  - similar experience with most of school

### Back End Setup
docker behind a reverse proxy on a pi

- running the wart server off laptop
- actually started using laptop
- got an old pi from a friend
- wanted to set up everything in docker containers behind a reverse proxy behind cloudflare
  - intended as lofty goal
  - in the end it all worked out perfectly and is fantastic
- actually just use subdomains

## BCI Game Jam 2022
### What I made
mutant clash

- send units down three lanes
- p300
- last minute
- no balance
- little thing I could throw together
- making the little dudes fly around when they get killed

### Work on Minigame collection
I also helped with that

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
[2]: https://teamcurl.ca
[3]: https://wart.gay