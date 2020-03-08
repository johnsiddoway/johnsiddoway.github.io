---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<ul class="list-unstyled">
  {% for post in site.posts limit:5 %}
    <h3 class="text-primary"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <div class="border-dark border-top border-bottom mb-3">
        <div class="d-inline">
            <i class="fa fa-calendar-alt"></i>
            <time>{{ post.date | date_to_string }}</time>
        </div>
        <ul class="list-inline float-right">
            {% for tag in post.tags %}
            <li class="list-inline-item">{{ tag }}</li>
            {% endfor %}
        </ul>
    </div>
    <div class="mb-3">
    {{ post.description }}
    </div>
  {% endfor %}
</ul>

{% if site.posts.size > 5 %}
<div class="text-center">
  <h3><a href="{{ '/archive.html' | relative_url }}">Blog Archive</a></h3>
</div>
{% endif %}