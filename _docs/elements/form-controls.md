---
permalink: /elements/form-controls/
layout: styleguide
category: Element
type: element
title: Form controls
---

<div class="usa-accordion-bordered usa-accordion-docs">
  <ul class="usa-unstyled-list">
    <li>
      <button class="usa-button-unstyled" aria-expanded="true" aria-controls="collapsible-2">
        UI kit documentation
      </button>
      <div id="collapsible-2" class="usa-accordion-content" aria-hidden="true">
        {% include code/partials/form-controls-overview.html %}
      </div>
    </li>    
  </ul>
</div>

<div class="usa-accordion-bordered">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <p class="usa-font-lead">See <a class="usa-external_link" href="https://playbook.cio.gov/designstandards/form-controls/">US Web Design Standards</a> for details regarding when to use these elements.</p>

    <h4 class="usa-heading">Inline help (hint)</h4>
    <p>Eeach form control element is able to incorporate inline help text.</p>
    <h5>When to use</h5>
    <ul>
      <li>When forms ask for unfamiliar information</li>
      <li>When people question why information they are being ask for specific data.</li>
      <li>When concerns regarding security or privacy of information exist.</li>
      <li>When there are recommended formats for information.</li>
    </ul> 

    <h5>When to consider something else</h5>
    <ul>
      <li>Desired instructions are longer than the guidance allows.</li>
    </ul>

    <h5>Guidance</h5>
    <ul>
      <li>Please set Instructional Text at a 132 Character Count.</li>
    </ul>
  </div>
</div>

{% include standards/elements/text-input.html %}

{% include standards/elements/select.html %}

{% include standards/elements/date-input.html %}
