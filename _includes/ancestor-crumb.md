{%- if ancestor_title -%}
    {%- assign ancestor_page = site.pages | where: "title", ancestor_title | first %}
    <li>
    {%- if ancestor_page -%}
        <a href="{{ancestor_page.url}}">{{ancestor_title}}</a>
    {%- else -%}
        {{ancestor_title}}
    {%- endif -%}
    </li>

    {%- assign ancestor_title = ancestor_page.ancestor -%}
    {%- include ancestor-crumb.md -%}
{%- endif -%}