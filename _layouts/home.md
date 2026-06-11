---
layout: default
title: Home
---

<div class="home">
  {{ content }}
  
  <h2 class="post-list-heading">Archive</h2>

  {%- assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" -%}
  {%- for year in postsByYear -%}
  <details class="archive-year" open>
    <summary>{{ year.name }} <span class="archive-count">({{ year.items | size }})</span></summary>
    {%- assign postsByMonth = year.items | group_by_exp: "post", "post.date | date: '%B'" -%}
    {%- for month in postsByMonth -%}
    <details class="archive-month" open>
      <summary>{{ month.name }} <span class="archive-count">({{ month.items | size }})</span></summary>
      <ul class="post-list">
        {%- for post in month.items -%}
        <li>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | replace: '] ', 'XCLS' | replace: ']', ']</span>' | replace: '[', '<span class="title-tag">[' | replace: 'XCLS', ']</span>' }}</a>
        </li>
        {%- endfor -%}
      </ul>
    </details>
    {%- endfor -%}
  </details>
  {%- endfor -%}
</div>