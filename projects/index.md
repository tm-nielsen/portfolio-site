---
project: false
title: Projects
---

{% assign project_pages = site.pages | where: "project", true %}
{% for item in project_pages %}
    {%- include link-item.html -%}
{% endfor %}