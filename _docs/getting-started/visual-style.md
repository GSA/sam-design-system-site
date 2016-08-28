---
permalink: /getting-started/visual-style/
title: For visual designers
layout: styleguide
category: Getting started
lead: See <a class="usa-external_link" href="https://standards.usa.gov/visual-style">US Web Design Standards</a> for design considerations.
---

<h2 class="usa-heading" id="logo-and-usage">Logo and Usage</h2>

[insert logo pages from branding style guide]

<h2 class="usa-heading" id="typography">Typography</h2>

The Standards use the Source Sans Pro <a class="usa-external_link" href="https://standards.usa.gov/typography/#pairings-and-styles">pairing and style</a> and <a class="usa-external_link" href="https://standards.usa.gov/typography/#typesetting">typesetting</a> defined by the US Web Design Standards.

{% include standards/partials/typography.html %}

<h2 id="iconography" class="usa-heading">Iconography</h2>

The Standards include <a class="usa-external_link" href="https://fortawesome.github.io/Font-Awesome/">Font Awesome</a> for the majority of icon decisions. If you cannot locate a desirable icon from Font Awesome, either [create an issue]({{ site.repos[0].url }}/issues) or modify the [Icon component]({{ site.baseurl }}/elements/action-icons/) and submit a pull request.

<h2 class="usa-heading" id="imagery">Imagery</h2>

You have the ability to surf the Internet on multiple devices, with multiple resolutions (low, medium, high, extra high, and so on), and the ability to make the browser almost any size you want. It is disappointing when a site dictates how you should use it or when the graphics are fuzzy because they are not accounting for the resolution capabilities of your display.

 * Use Scalable Vector Graphics (SVG) when possible, especially flat artwork.
 * Use Portable Network Graphics (PNG) for flat artwork, images with transparency, or photographs.
 * Create and save images at 100 pixels per inch and two times the rendered dimensions; this does not apply to SVG.
 * Avoid imagery not directly related to the content being presented.
 * Avoid clip art style images.

[text and examples of image types and usage]

<h2 id="animation" class="usa-heading">Animation</h2>

The Internet, as a platform, has come a long way in a short time, relatively speaking. The modern Web holds few boundaries when it comes to what can be accomplished; however, just because something can be done, does not mean it should be done.

Gratuitous animations that do not contribute to user feedback and goals become annoying, causing a speed bump. Animated graphics (or static imagery) that does not aid the communication of the content are distracting and make it difficult to navigate the site. The Web, generally speaking, is a silent world.  Sound (even as part of a video) should be optional.

<h2 id="colors" class="usa-heading">Colors</h2>

See the <a class="usa-external_link" href="https://standards.usa.gov/colors/">US Web Design Standards - Colors</a>

<h2 id="text-accessibility" class="usa-heading">Text accessibility</h2>

See the <a class="usa-external_link" href="https://standards.usa.gov/colors/">US Web Design Standards - Text accessibility</a>

{% include standards/partials/grid_system.html %}

{% include standards/partials/mobile_first.html %}
