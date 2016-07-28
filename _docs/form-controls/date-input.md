---
permalink: /components/form-controls/date-input/
layout: styleguide
type: form-control
title: Date Input
lead: See <a href="https://playbook.cio.gov/designstandards/form-controls/#date-input">US Web Design Standards</a> for design description.
---

<p>The date input form control allows you to genrate the USWDS date input form control.</p>
<div class="preview">
  <fieldset class="usa-fieldset-inputs">
    <legend>Date of birth</legend>
    <span class="usa-form-hint usa-datefield-hint" id="dobHint">For example: 04 28 1986</span>

    <div class="usa-date-of-birth">
      <div class="usa-datefield usa-form-group usa-form-group-month">
        <label for="date_of_birth_1">Month</label>
        <input aria-describedby="dobHint" class="usa-form-control" id="date_of_birth_1" name="date_of_birth_1" pattern="0?[1-9]|1[012]" type="number" min="1" max="12" value="">
      </div>
      <div class="usa-datefield usa-form-group usa-form-group-day">
        <label for="date_of_birth_2">Day</label>
        <input aria-describedby="dobHint" class="usa-form-control" id="date_of_birth_2" name="date_of_birth_2" pattern="0?[1-9]|1[0-9]|2[0-9]|3[01]" type="number" min="1" max="31" value="">
      </div>
      <div class="usa-datefield usa-form-group usa-form-group-year">
        <label for="date_of_birth_3">Year</label>
        <input aria-describedby="dobHint" class="usa-form-control" id="date_of_birth_3" name="date_of_birth_3" pattern="[0-9]{4}" type="number" min="1900" max="2000" value="">
      </div>
    </div>
  </fieldset>

  <div class="usa-input-error">
    <fieldset class="usa-fieldset-inputs">
      <legend class="usa-input-error-label">Date of birth</legend>
      <span id="date_of_birth-input-error" class="usa-input-error-message" role="alert">Helpful error message</span>
      <span class="usa-form-hint usa-datefield-hint" id="dobHint">For example: 04 28 1986</span>

      <div class="usa-date-of-birth">
        <div class="usa-datefield usa-form-group usa-form-group-month">
          <label for="date_of_birth_1">Month</label>
          <input aria-describedby="date_of_birth-input-error" class="usa-form-control" id="date_of_birth_1" name="date_of_birth_1" pattern="0?[1-9]|1[012]" type="number" min="1" max="12" value="">
        </div>
        <div class="usa-datefield usa-form-group usa-form-group-day">
          <label for="date_of_birth_2">Day</label>
          <input aria-describedby="date_of_birth-input-error" class="usa-form-control" id="date_of_birth_2" name="date_of_birth_2" pattern="0?[1-9]|1[0-9]|2[0-9]|3[01]" type="number" min="1" max="31" value="">
        </div>
        <div class="usa-datefield usa-form-group usa-form-group-year">
          <label for="date_of_birth_3">Year</label>
          <input aria-describedby="date_of_birth-input-error" class="usa-form-control" id="date_of_birth_3" name="date_of_birth_3" pattern="[0-9]{4}" type="number" min="1900" max="2000" value="">
        </div>
      </div>
    </fieldset>
  </div> 
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="false" aria-controls="collapsible-0">
    PHP Usage
  </button>
  <div id="collapsible-0" aria-hidden="true" class="usa-accordion-content">
<pre><code class="language-php">// render unescaped HTML string
echo SAMUIKit\FormControls::dateInput($config);</code></pre>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
  	<p>See the US Web Design Standards regarding implementation, accessibility, and usability related to date inputs and areas.</p>

{% include formcontroloverview.md %}
	
<p><strong>Note:</strong> The name will be appended with 1, 2, 3, for month, day, and year, respectively.</p>

	<h4 class="usa-heading">Date input</h4>
	<h5>Optional keys</h5>
	<ul>
	<li><strong>month:</strong> The value of the month field.</li>
	<li><strong>day:</strong> The value of the day field.</li>
	<li><strong>year:</strong> The value of the year field.</li>
	</ul>

  </div>
</div>
