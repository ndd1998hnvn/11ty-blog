---
layout: layout.njk
---

# POST

<!-- <h1>My blog</h1> -->

<ul>
{% for post in collections.blog %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>