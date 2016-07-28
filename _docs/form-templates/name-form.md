---
permalink: /components/form-templates/name-form/
layout: styleguide
type: component
title: Name Form
lead: See <a href="https://standards.usa.gov/form-templates/#name-form">US Web Design Standards</a> for design description.
---

<div class="preview">
  <form class="usa-form-large">
    <div>
      <fieldset>
        <legend>Name</legend>

        <label for="name-title">Title</label>
        <input id="name-title" class="usa-input-tiny" name="name-title" type="text">

        <label for="name-first-name">First name <span class="usa-additional_text">Required</span></label>
        <input id="name-first-name" name="name-first-name" type="text" required="required" aria-required="true">

        <label for="name-middle-name">Middle name</label>
        <input id="name-middle-name" name="name-middle-name" type="text">

        <label for="name-last-name">Last name <span class="usa-additional_text">Required</span></label>
        <input id="name-last-name" name="name-last-name" type="text" required="required" aria-required="true">

        <label for="name-suffix">Suffix</label>
        <input id="name-suffix" class="usa-input-tiny" name="name-suffix" type="text">
      </fieldset>
    </div>
  </form>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="false" aria-controls="collapsible-0">
    PHP Usage
  </button>
  <div id="collapsible-0" aria-hidden="true" class="usa-accordion-content">
<pre><code class="language-php">// render unescaped HTML string
echo SAMUIKit\FormTemplate::nameForm($config);</code></pre>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Name form</h4>
  <h5>Required keys</h5>
  <ul>
  <li><strong>label:</strong> The label for the form.</li>
  <li><strong>name:</strong> The name value for each form input.</li>
  </ul>
  </div>
</div>
