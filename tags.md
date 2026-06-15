---
layout: default
title: Tags
permalink: /tags/
---

<h2>Tags</h2>

{%- assign sort_keys = "" | split: "" -%}
{%- for tag in site.tags -%}
  {%- assign padded = "0000" | append: tag[1].size | slice: -4, 4 -%}
  {%- assign sort_key = padded | append: "|" | append: tag[0] -%}
  {%- assign sort_keys = sort_keys | push: sort_key -%}
{%- endfor -%}
{%- assign sort_keys = sort_keys | sort | reverse -%}
{%- for key in sort_keys -%}
  {%- assign tag_name = key | split: "|" | last -%}
  {%- assign tag_posts = site.tags[tag_name] -%}
<details class="tag-group">
  <summary id="{{ tag_name }}">{{ tag_name }} <span class="archive-count">({{ tag_posts | size }})</span></summary>
  <ul class="post-list">
    {%- for post in tag_posts -%}
    <li>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | replace: '] ', 'XCLS' | replace: ']', ']</span>' | replace: '[', '<span class="title-tag">[' | replace: 'XCLS', ']</span>' }}</a>
    </li>
    {%- endfor -%}
  </ul>
</details>
{%- endfor -%}
