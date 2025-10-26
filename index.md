---
layout: base
---

<h1 class="drop-shadow"> Twig <sub>(she/her)</sub></h1>
*Developer (Software, BCI, Gaming) at the University of Calgary*

[tmnielsen33@gmail.com](mailto:tmnielsen33@gmail.com)  
[Github: tm-nielsen](https://github.com/tm-nielsen)

<details>
    <summary>Professional Summary</summary>
    <p>
    A capable developer passionate about creating engaging and accessible experiences. I've completed 30+ game jams, several long term game projects, and web schemes using tools like React; Express; and Jekyll.
    </p>
</details>

## [Games](/games)
## Featured Projects
<ul>
{% for item in site.data.featured -%}
    {% include link-item.html %}
{% endfor -%}
</ul>