<!doctype html>
<html lang="en">
  <head>
    {% include head.html %}
  </head>
  <body id="styleguide" class="{{ page.title | slugify }}">
  	{% include site-navigation/navprimary.html %}

  	{% include sidenav.html %}

    <div id="main-content" class="usa-grid main-content">
      <div class="styleguide-content usa-content">
        <h1 id="{{ page.title | slugify }}">{{ page.title }}</h1>
        <p class="usa-font-lead">{{ page.lead }}</p>
        {{ content }}
      </div>

      {% capture my-include %}{% include acronyms.md %}{% endcapture %}
      {{ my-include | markdownify }}

    </div>
    {% include footer.html %}

    {% include analytics.html %}

    {% include scripts.html %}

  </body>

</html>
