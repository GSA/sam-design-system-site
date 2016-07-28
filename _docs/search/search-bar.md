---
permalink: /components/search/search-bar/
layout: styleguide
type: component
title: Search bar
lead: A block that allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation
---

<div class="preview preview-search-bar">
<h6>Search big</h6>
  <form class="usa-search usa-search-big">
    <div role="search">
      <label class="usa-sr-only" for="search-field-big">Search label</label>
      <input id="search-field-big" type="search" name="search">
      <button type="submit">
        <span class="usa-search-submit-text">Search</span>
      </button>
    </div>
  </form>

<h6>Search medium</h6>
  <form class="usa-search">
    <div role="search">
      <label class="usa-sr-only" for="search-field">Search label</label>
      <input id="search-field" type="search" name="search">
      <button type="submit">
        <span class="usa-search-submit-text">Search</span>
      </button>
    </div>
  </form>

<h6>Search small</h6>
  <form class="usa-search usa-search-small">
    <div role="search">
      <label class="usa-sr-only" for="search-field-small">Search label</label>
      <input id="search-field-small" type="search" name="search">
      <button type="submit">
        <span class="usa-sr-only">Search</span>
      </button>
    </div>
  </form>
<h6>Search big with filters</h6>
  <div class="usa-grid">
    <form class="usa-search usa-search-big">
      <div role="search">
      <label class="usa-sr-only" for="search-field-big">Search label</label>
      <input id="search-field-big" type="search" name="search">
        <button type="submit">
          <span class="usa-search-submit-text">Search</span>
        </button>     
        <div class="usa-width-one-half" style="margin-right: 7px;">
          <div>
            <label for="filter_name">Filter label</label>
            <select id="filter_name" name="filter_name">
              <option value="f1opt1">Option 1</option>
              <option value="f1opt2">Option 2</option>
              <option value="f1opt3">Option 3</option>
            </select>
          </div>
        </div>
        <div class="usa-width-one-half" style="margin-right: 7px;">
          <div>
            <label for="filter_name_2">More filtes - pre-selected</label>
            <select id="filter_name_2" name="filter_name_2">
              <option value="f2opt1">Option 1</option>
              <option value="f2opt2" selected="selected">Option 2</option>
              <option value="f2opt3">Option 3</option>
            </select>
          </div>
        </div>
        <div class="usa-width-one-whole">
          <div>
            <fieldset class="usa-fieldset-inputs">
              <legend class="usa-sr-only">Toggle-like application of checkbox</legend>
              <ul class="usa-unstyled-list">
                <li>
                  <input id="f3opt1-filter_name_3" type="checkbox" name="filter_name_3[]" value="f3opt1">
                  <label for="f3opt1-filter_name_3">Exclude historical data?</label>
                </li>
              </ul>
            </fieldset>
          </div>
        </div>         
      </div>      
    </form>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="false" aria-controls="collapsible-0">
    PHP Usage
  </button>
  <div id="collapsible-0" aria-hidden="true" class="usa-accordion-content">
  
  <pre><code>SAMUIKit\Search::searchBar($config);</code></pre>

  <p>Returns unescaped HTML output without instantiating an object.</p>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
  <h4 class="usa-heading">Search bar</h4>

  <h5>Required keys</h5>
  <ul>
    <li><strong>label:</strong> Label text - not displayed.</li>
    <li><strong>type:</strong> big|medium|small</li>
    <li><strong>action:</strong> The path for the form to go to when submitted.</li>
  </ul>

  <h5>Optional keys</h5>
  <ul>
    <li><strong>method:</strong> POST|GET (default is GET). Not case-sensitive.</li>  
    <li><strong>keywords:</strong> An array of keywords to place within the search field. Will be converted to spaced-separated string.</li>
    <li><strong>filters:</strong> Array of form control Select configurations. See <a href="{{ site.baseurl }}/form-controls/select">Form Controls Select</a>.</li>
  </ul>
</div>
