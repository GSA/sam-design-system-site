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
        {% include partials/formcontroloverview.html %}
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
    <h4 class="usa-heading">Additions to the US Web Design Standards</h4>
    <h5>Implementation</h5>
    <ul>
      <li>All form controls are required to have a label to aid assistive technology users.</li>
      <li>All labels should identify the form control being referenced (using <code>for</code> and <code>id</code> attributes).</li>
    </ul>

    <h4 class="usa-heading">Required and optional markings</h4>
    <p>It may be necessary to mark form controls within a form as &ldquo;required&rdquo; or &ldquo;optional&rdquo; using the <code>usa-additional_text</code> class. See the <a href="{{ site.baseurl }}/components/form-templates/#name-form">Name form</a> and <a href="{{ site.baseurl }}/components/form-templates/#address-form">Address form</a> for examles.</p>
    <h5>When to use</h5>
    <ul>
      <li>If your form consists of all required fields, it is not necessary to mark fields as required or optional.</li>
      <li>If your form consists of more required fields than optional fields, mark the optional fields, but not the required fields.</li>
      <li>If your form consists of more optional fields than required, mark the required fields, but not the optional fields.</li>
    </ul>

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
      <li>Set Instructional Text at a 132 Character Count.</li>
    </ul>
  </div>
</div>

{% include documentation/elements/text-input.html %}

{% include documentation/elements/select.html %}

{% include documentation/elements/date-input.html %}
