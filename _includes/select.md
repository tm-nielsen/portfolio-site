<label>
    {{include.label}}
    <select name="{{include.name}}" id="{{include.id}}"
        {%- if include.multiple %} multiple{%- endif -%}
    >
    {%- unless include.exclude_any %}
        <option value="">any</option>
    {%- endunless -%}
    {%- for item in include.items %}
        {%- if item.label and item.value %}
        <option value="{{item.value}}">{{item.label}}</option>
        {%- else %}
        <option value="{{item}}">{{item}}</option>
        {%- endif -%}
    {%- endfor %}
    </select>
</label>