---
project: false
title: Projects
---

{% assign project_pages = site.pages | where: "project", true %}
<ul>
{% for item in project_pages %}
    {%- include link-item.html -%}
{% endfor %}
</ul>