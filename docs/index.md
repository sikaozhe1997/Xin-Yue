---
layout: default
title: 索引
---

# 全部页面

收集的页面索引

{% for file in site.static_files %}
    {% if file.name == "index.html" or file.name == "index.htm"%}
    
* [{{ file.path | remove: file.name | remove: "/" }}]({{ site.baseurl | append: file.path }})
    {% endif %}
{% endfor %}