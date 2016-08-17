{% capture code_preview %}
<h6>Borderless</h6>
<div class="usa-accordion">
  <ul class="usa-unstyled-list">
    <li>
      <button class="usa-button-unstyled" aria-expanded="false" aria-controls="collapsible-1">Collapsed Accordion 1</button>
      <div id="collapsible-1" aria-hidden="true" class="usa-accordion-content">
        <ol>
          <li>This</li>
          <li>accordion</li>
          <li>was</li>
          <li>collapsed</li>
          <li>initially.</li>
        </ol>
      </div>
    </li>
    <li>
      <button class="usa-button-unstyled" aria-expanded="true" aria-controls="collapsible-0">Expanded Accordion 1</button>
      <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
        <p>This accordion started expanded.</p>
      </div>
    </li>
  </ul>
</div>

<h6>Bordered</h6>
<div class="usa-accordion-bordered">
  <ul class="usa-unstyled-list">
    <li>
      <button class="usa-button-unstyled" aria-expanded="false" aria-controls="collapsible-1">Collapsed Accordion 1</button>
      <div id="collapsible-1" aria-hidden="true" class="usa-accordion-content">
        <ul>
          <li>This</li>
          <li>accordion</li>
          <li>was</li>
          <li>collapsed</li>
          <li>initially.</li>
        </ul>
      </div>
    </li>
    <li>
      <button class="usa-button-unstyled" aria-expanded="true" aria-controls="collapsible-0">Expanded Accordion 1</button>
      <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
        <p>This accordion started expanded.</p>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
