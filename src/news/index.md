---
title: News
---

<ul>
{% for item in news.articles %}
  <li><h2><a href="{{item.url}}" target=_blank>{{ item.title }}</a></h2></li>
  <span> {{ item.source.name}} - <time> {{ item.publishedAt | custom_date }}</time></span>
{% endfor %}
</ul>