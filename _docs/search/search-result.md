---
permalink: /components/search/search-result/
layout: styleguide
type: component
title: Search result
lead: Displayed to users after performing a search.
---

<p>The search result component wraps a Resource in a containing <code>div</code> with a class of "usa-grid usa-search-result".</p>

<div class="preview">

  <h6>Without metadata</h6>
  <div class="usa-grid usa-search-result">
  <div class="usa-width-one-whole">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula pulvinar elit.</p>
  </div>
  </div>
  <h6>With metadata</h6>
  <div class="usa-grid usa-search-result">
  <div class="usa-width-two-thirds">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula pulvinar elit.</p>
  </div>
  <div class="usa-width-one-third">
    <p><strong>Metadata 1:</strong> This is a piece of metadata.</p>
  </div>
  </div>

  <h6>With metadata and action</h6>
  <div class="usa-grid usa-search-result">
  <div class="usa-width-two-thirds">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula pulvinar elit.</p>
  </div>
  <div class="usa-width-one-third">
    <p><span class="usa-label">New</span></p>
    <p><strong>Metadata 1:</strong> This is a piece of metadata.</p>
    <div class="usa-width-one-whole">
      <div class="usa-action-container">
        <span><a href="#"><i class="fa fa-archive"></i>Archive</a></span>
      </div>
      <div class="usa-action-container">
        <span><a href="#"><i class="fa fa-pencil-square"></i>Edit</a></span>
      </div>
      <div class="usa-action-container delete">
        <span><a href="#"><i class="fa fa-trash"></i>Delete</a></span>
      </div>
    </div>
  </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="false" aria-controls="collapsible-0">
    PHP Usage
  </button>
  <div id="collapsible-0" aria-hidden="true" class="usa-accordion-content">
<pre><code>// render unescaped HTML string
echo SAMUIKit\Search::result($config);</code></pre>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Search result</h4>
    <p>See <a href="{{ site.baseurl }}/other/resource">Resource</a> for configuration.</p>
  </div>
</div>
