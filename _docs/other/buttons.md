---
permalink: /components/other/buttons/
layout: styleguide
type: element
title: Buttons
lead: See <a href="https://standards.usa.gov/buttons/">US Web Design Standards</a> for design and accessbiility description.
---

<div class="preview">
  
  <h6>Primary Buttons</h6>
  <div class="button_wrapper">
    <button>Default</button>
    <button class="usa-button-active">Active</button>
    <button class="usa-button-hover">Hover</button>
  </div>
  <div class="button_wrapper">
    <button class="usa-button-primary-alt">Default</button>
    <button class="usa-button-primary-alt usa-button-active">Active</button>
    <button class="usa-button-primary-alt usa-button-hover">Hover</button>
  </div>

  <h6>Secondary Buttons</h6>
  <div class="button_wrapper">
    <button class="usa-button-secondary">Default</button>
    <button class="usa-button-secondary usa-button-active">Active</button>
    <button class="usa-button-secondary usa-button-hover">Hover</button>
  </div>

  <div class="button_wrapper">
    <button class="usa-button-gray">Default</button>
    <button class="usa-button-gray usa-button-active">Active</button>
    <button class="usa-button-gray usa-button-hover">Hover</button>
  </div>

  <div class="button_wrapper">
    <button class="usa-button-outline" type="button">Default</button>
    <button class="usa-button-outline usa-button-active">Active</button>
    <button class="usa-button-outline usa-button-hover">Hover</button>
  </div>

  <div class="button_wrapper button_wrapper-dark">
    <button class="usa-button-outline-inverse" type="button">Default</button>
    <button class="usa-button-outline-inverse usa-button-active">Active</button>
    <button class="usa-button-outline-inverse usa-button-hover">Hover</button>
  </div>

  <h6>Button Focus</h6>
  <div class="button_wrapper">
    <button class="usa-button-focus">Default</button>
    <button class="usa-button-primary-alt usa-button-focus">Default</button>
    <button class="usa-button-secondary usa-button-focus">Default</button>
  </div>

  <h6>Disabled Button</h6>
  <div class="button_wrapper">
    <button class="usa-button-disabled">Default</button>
  </div>

  <h6>Big Button</h6>
  <div class="button_wrapper">
    <button class="usa-button-big" type="button">Default</button>
  </div>

  <h6>Button with cancel</h6>
  <div class="button_wrapper">
    <a class="usa-cancel" href="#">cancel</a> <button>Cancel</button>
  </div>

  <h6>Dismiss Button</h6>
  <div class="button_wrapper">
    <button class="usa-button-dismiss"><span class="usa-sr-only">Dismiss</span></button>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="false" aria-controls="collapsible-0">
    PHP Usage
  </button>
  <div id="collapsible-0" aria-hidden="true" class="usa-accordion-content">
<pre><code class="language-php">// render unescaped HTML string
echo SAMUIKit\Other::button($config);</code></pre>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Buttons</h4>
    <h5>Required keys</h5>
    <ul>
      <li><strong>title:</strong> The text to display within the button.</li>
    </ul>
    <h5>Optional keys</h5>
    <ul>
      <li><strong>type:</strong> primary|alt|secondary|gray|outline|outline-inverse|big|disabled (default is primary).</li>
      <li><strong>cancel:</strong> Anchor href target for the cancel link. Usually not necessary.</li>
  </ul>
  </div>
</div>
