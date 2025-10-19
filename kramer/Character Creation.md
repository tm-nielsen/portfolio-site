---
permalink: :path/character-creation
title: Character Creation
---
<script src="/scripts/input_cookies.js" defer></script>

- [ ] Connection to the College
- <label>Attribute 1: <input type="text"/></label>
- <label>Attribute 2: <input type="text"/></label>
- <label>Attribute 3: <input type="text"/></label>
- [ ] Name + Pronouns

## Backgrounds
One way or another, your character needs to be at Kramer County Community College. While any halfway plausible explanation you might think of is valid, you can also roll for a general character background. *(or just something to use as a starting point)*

Pick a category *(or roll 1d8)*, then roll 1d8 to select a discipline.

<ol>
{% for category in site.data.kramer.backgrounds %}
    <li>
        {% include list-details.html summary=category.title items=category.items %}
    </li>
{% endfor %}
</ol>

## [Attributes](system#attributes)
> Every character consists of three unique stats, each with a name and a colour. These ***Attributes*** are your character's core personality traits, convictions, features, and interests.

To create your character, you must invent and name these three ***Attributes***.

### [Attribute Names](system#names)
> You may name ***Attributes*** in any way, from 'Crystal Girlie' to 'Beatboxing' to 'My old Co-Worker Brendan'. Poetry, Unicode characters, drawings, or anything else you can think of to meaningfully represent an aspect of your character are also valid.

> These names are critically important, as all three represent your character entirely!
> Whatever you choose, have a clear idea of what these ***Attributes*** represent, and how to communicate that with your facilitator as needed.


### [Attribute Colours](system#colours) {% include image.html src="colour words.png" width="12rem" max-width="40vw" align="right" %}
> ***Attribute*** colours are entirely vibe-based, though a rough guide is provided in the *Colour Words* graphic. Each ***Attribute*** must be a different colour. Attempting to balance or concentrate a character around the wheel may help guide their formation, but take care to avoid using one of the guiding colour words as an ***Attribute***. While allowed, you won't have much fun playing a boring character!

## Guiding Questions
*I don't need your answers to these questions, and neither do you.  
They are meant to get the process started.*
- What does your character smell like?
- How old is their phone?
- What kind of bread do they eat?
- What impression do they leave on other people?
- Why is your character in community college?
	- What are they studying?
	- What is their job?
	- What do they do on campus if not study or work?
- How old are they?
	- *roll 1d100 + 10*
- Do they own an air fryer?
	- Do they use it?
	- Would they like to?

## Examples
*Do you disagree with any of these?  
Good.  
Use the spite as creative fuel.*

### Gus Pysch
- 🟦 Pharmaceutical Salesman
- 🟨 🙄
- 🟥 "Did you hear about Pluto?"

### Lucy Ricardo
- 🟩 Housewife
- 🟨 Desperate for the Stage
- 🟪 Schemes 💅

### Jeff Community
- 🟥 Speech
- 🟪 Fake Lawyer
- 🟧 Crossing his Arms While Looking at Someone Sarcastically

### Jake Peralta
- 🟧 Man Child
- 🟩 Daddy Issues
- 🟦 Cop

## Notes
While the name and colour of an ***Attribute*** are typically permanent, your first session with a character is a chance to feel out who they are through play. You may adjust names and colours as appropriate before they are locked in for any future sessions.

***Attributes*** are not shared with other players by default. They are as secret as you'd like them to be. Sharing them is fun, but more impactful if saved for a fitting character moment.