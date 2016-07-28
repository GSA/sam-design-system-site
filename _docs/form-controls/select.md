---
permalink: /components/form-controls/select/
layout: styleguide
type: form-control
title: Select
---

<p class="usa-font-lead">See US Web Design Standards for design description. Covers: <a href="https://playbook.cio.gov/designstandards/form-controls/#dropdown">dropdown</a>, <a href="https://playbook.cio.gov/designstandards/form-controls/#checkboxes">checkboxes</a>, and <a href="https://playbook.cio.gov/designstandards/form-controls/#radiobuttons">radio buttons</a>.</p>

<p>The select form control allows you to generate <code>select</code>, <code>checkbox</code>, and <code>radio</code> form controls.</p>

<div class="preview">
<form>
	<div>
		<label for="options">Dropdown label</label>
		<select name="options" id="options">
			<option value="value1">Option A</option>
			<option value="value2">Option B</option>
			<option value="value3">Option C</option>
		</select>
	</div>
</form>

<form>
	<div class="usa-input-error">
		<label for="options" class="usa-input-error-label">Dropdown label</label>
		<span id="options-input-error" class="usa-input-error-message" role="alert">Helpful error message</span>
		<select name="options2" id="options" aria-describedby="options-input-error">
			<option value="value1">Option A</option>
			<option value="value2">Option B</option>
			<option value="value3">Option C</option>
		</select>
	</div>
</form>

<div>
<fieldset class="usa-fieldset-inputs usa-sans">
	<legend>Historical figures 1</legend>

	<ul class="usa-unstyled-list">
		<li>
			<input id="apple-pie" type="checkbox" name="pies[]" value="apple-pie" checked />
			<label for="apple-pie">Sojourner Truth</label>
		</li>
		<li>
			<input id="key-lime-pie" type="checkbox" name="pies[]" value="key-lime-pie">
			<label for="key-lime-pie">Frederick Douglass</label>
		</li>
		<li>
			<input id="peach-pie" type="checkbox" name="pies[]" value="peach-pie">
			<label for="peach-pie">Booker T. Washington</label>
		</li>
		<li>
			<input id="disabled" type="checkbox" disabled />
			<label for="disabled">George Washington Carver</label>
		</li>
	</ul>
</fieldset>
</div>

<div class="usa-input-error">
	<fieldset class="usa-fieldset-inputs usa-sans">
		<span id="pies-input-error" class="usa-input-error-message" role="alert">Helpful error message</span>
		<legend class="usa-input-error-label">Historical figures 1</legend>

		<ul class="usa-unstyled-list">
			<li>
				<input id="apple-pie2" type="checkbox" name="pies2[]" value="apple-pie" checked />
				<label for="apple-pie2">Sojourner Truth</label>
			</li>
			<li>
				<input id="key-lime-pie2" aria-describedby="pies-input-error" type="checkbox" name="pies2[]" value="key-lime-pie">
				<label for="key-lime-pie2">Frederick Douglass</label>
			</li>
			<li>
				<input id="peach-pie2" aria-describedby="pies-input-error" type="checkbox" name="pies2[]" value="peach-pie">
				<label for="peach-pie2">Booker T. Washington</label>
			</li>
			<li>
				<input id="disabled" aria-describedby="pies-input-error" type="checkbox" disabled />
				<label for="disabled">George Washington Carver</label>
			</li>
		</ul>

	</fieldset> 
</div>

<div>
	<fieldset class="usa-fieldset-inputs usa-sans">

		<legend>Historical figures 2</legend>

		<ul class="usa-unstyled-list">
			<li>
				<input id="pea-soup" type="radio" checked name="soup" value="pea">
				<label for="pea-soup">Elizabeth Cady Stanton</label>
			</li>
			<li>
				<input id="chicken-noodle" type="radio" name="soup" value="chicken-noodle">
				<label for="chicken-noodle">Susan B. Anthony</label>
			</li>
			<li>
				<input id="tomato" type="radio" name="soup" value="tomato">
				<label for="tomato">Harriet Tubman</label>
			</li>
		</ul>

	</fieldset>
</div>

<div class="usa-input-error">
	<fieldset class="usa-fieldset-inputs usa-sans">

		<legend class="usa-input-error-label">Historical figures 2</legend>
		<span id="soup-input-error" class="usa-input-error-message" role="alert">Helpful error message</span>
		<ul class="usa-unstyled-list">
			<li>
				<input id="pea-soup2" aria-describedby="soup-input-error" type="radio" checked name="soup2" value="pea">
				<label for="pea-soup2">Elizabeth Cady Stanton</label>
			</li>
			<li>
				<input id="chicken-noodle2" aria-describedby="soup-input-error" type="radio" name="soup2" value="chicken-noodle">
				<label for="chicken-noodle2">Susan B. Anthony</label>
			</li>
			<li>
				<input id="tomato2" aria-describedby="soup-input-error" type="radio" name="soup2" value="tomato">
				<label for="tomato2">Harriet Tubman</label>
			</li>
		</ul>

	</fieldset>  
</div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="false" aria-controls="collapsible-0">
    PHP Usage
  </button>
  <div id="collapsible-0" aria-hidden="true" class="usa-accordion-content">
<pre><code class="language-php">// Returns unescaped HTML output without instantiating an object.
SAMUIKit\FormControls::select($config);</code></pre>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">

{% include formcontroloverview.md %}
	
	<h4 class="usa-heading">Select</h4>
	<h5>Required keys</h5>
	<ul>
	<li><strong>type:</strong> dropdown|checkbox|radio</li>
	<li><strong>options:</strong> An array of key-value pairs where the "key" is the option POST/GET value and "value" is the label for the option.</li>
	</ul>

	<h5>Optional keys</h5>
	<ul>
	<li><strong>selected:</strong> An array of option values to mark as selected/checked. Note: Only the checkbox type allows multiple selections.</li>
	<li><strong>disabled:</strong> An array of option value to mark as disabled. Note: Only the checkbox type allows multiple selections.</li>
	</ul>

  </div>
</div>
