---
---

# Twig <sub>(she/her)</sub>
*Developer (Software, BCI, Gaming) at the University of Calgary*

[tmnielsen33@gmail.com](mailto:tmnielsen33@gmail.com)  
[Github: tm-nielsen](https://github.com/tm-nielsen)

{% include text-details.html summary="Professional Summary" content="A capable developer passionate about creating engaging and accessible experiences. I've completed 30+ game jams, several long term game projects, and web schemes using tools like React; Express; and Jekyll. *Every web project has been a step towards plain html.*" %}

## [Games](/games)
## Featured Projects
<ul>
{% for project in site.data.featured_projects %}
    {% include featured-project.html project=project %}
{% endfor %}
</ul>