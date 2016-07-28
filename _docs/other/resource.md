---
permalink: /components/other/resource/
layout: styleguide
type: component
title: Resource
lead: A resource displays content and metadata related to single object. Ex. Article, Opportunity, Alert, and so on.
---

<p>Content is placed to the left of metadata in accordance with our responsive design, mobile-first, approach to keep the content above the metadata when on a narrower screen. Further, actions are placed under the metadata for the same reason. Finally, this is also in accordance with our informaiton architecture approach.</p>

<div class="preview">

  <h6>Without metadata</h6>
  <div class="usa-grid">
  <div class="usa-width-one-whole">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula pulvinar elit rhoncus tempor eget lacinia arcu. In sodales nunc tellus, et egestas purus hendrerit nec. Nunc at velit tristique purus auctor convallis a a mi. Phasellus condimentum venenatis felis, ac laoreet tortor scelerisque quis. Aliquam sodales leo a dui vestibulum, rhoncus imperdiet massa imperdiet. Proin sodales, odio euismod tempus posuere, arcu risus sodales enim, in ornare ex tortor eu sapien. Aliquam commodo tempor iaculis. Morbi lobortis purus nibh, sed pulvinar ex iaculis nec. Integer a pharetra velit. Donec sagittis faucibus massa maximus vulputate. Pellentesque posuere interdum dui, eu varius quam faucibus quis. Integer non eros justo. Etiam vulputate odio quis massa efficitur, rutrum fringilla justo iaculis. Vivamus vel ullamcorper tellus, eget sagittis nulla. Phasellus euismod, mauris ut scelerisque molestie, quam enim tincidunt ex, nec facilisis arcu nisl sit amet nunc. Cras tincidunt tellus quam.</p>
  </div>
  </div>
  <h6>With metadata</h6>
  <div class="usa-grid">
  <div class="usa-width-two-thirds">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula pulvinar elit rhoncus tempor eget lacinia arcu. In sodales nunc tellus, et egestas purus hendrerit nec. Nunc at velit tristique purus auctor convallis a a mi. Phasellus condimentum venenatis felis, ac laoreet tortor scelerisque quis. Aliquam sodales leo a dui vestibulum, rhoncus imperdiet massa imperdiet. Proin sodales, odio euismod tempus posuere, arcu risus sodales enim, in ornare ex tortor eu sapien. Aliquam commodo tempor iaculis. Morbi lobortis purus nibh, sed pulvinar ex iaculis nec. Integer a pharetra velit. Donec sagittis faucibus massa maximus vulputate. Pellentesque posuere interdum dui, eu varius quam faucibus quis. Integer non eros justo. Etiam vulputate odio quis massa efficitur, rutrum fringilla justo iaculis. Vivamus vel ullamcorper tellus, eget sagittis nulla. Phasellus euismod, mauris ut scelerisque molestie, quam enim tincidunt ex, nec facilisis arcu nisl sit amet nunc. Cras tincidunt tellus quam.</p>
  </div>
  <div class="usa-width-one-third">
    <p><strong>Metadata 1:</strong> This is a piece of metadata.</p>
  </div>
  </div>

  <h6>With metadata and action</h6>
  <div class="usa-grid">
  <div class="usa-width-two-thirds">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula pulvinar elit rhoncus tempor eget lacinia arcu. In sodales nunc tellus, et egestas purus hendrerit nec. Nunc at velit tristique purus auctor convallis a a mi. Phasellus condimentum venenatis felis, ac laoreet tortor scelerisque quis. Aliquam sodales leo a dui vestibulum, rhoncus imperdiet massa imperdiet. Proin sodales, odio euismod tempus posuere, arcu risus sodales enim, in ornare ex tortor eu sapien. Aliquam commodo tempor iaculis. Morbi lobortis purus nibh, sed pulvinar ex iaculis nec. Integer a pharetra velit. Donec sagittis faucibus massa maximus vulputate. Pellentesque posuere interdum dui, eu varius quam faucibus quis. Integer non eros justo. Etiam vulputate odio quis massa efficitur, rutrum fringilla justo iaculis. Vivamus vel ullamcorper tellus, eget sagittis nulla. Phasellus euismod, mauris ut scelerisque molestie, quam enim tincidunt ex, nec facilisis arcu nisl sit amet nunc. Cras tincidunt tellus quam.</p>
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
<pre><code class="language-php">// render unescaped HTML string
echo SAMUIKit\Other::resource($config);

// render the third example
echo SAMUIKit\Other::resource([
  'content' => [
    '&lt;p&gt;[lipsum]&lt;/p&gt;'
  ],
  'metadata' => [
    [
      'template' => 'Other|label',
      'config' => 
      [
        'title' => 'New',
        'surround' => '&lt;p&gt;|&lt;/p&gt;'
      ]
    ],  
    '&lt;p&gt;&lt;strong&gt;Metadata 1:&lt;/strong&gt; This is a piece of metadata.&lt;/p&gt;'
  ],
  'actions' => [
    [
      'type' => 'archive',
      'target' => '#'
    ],
    [
      'type' => 'edit',
      'target' => '#'
    ],
    [
      'type' => 'delete',
      'target' => '#'
    ]
  ]
]);</code></pre>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Resources</h4>
    <p>Note: The <code>div</code> with the class of "usa-grid" is not returned by the component and is used for previewing only.</p>
    <h5>Required keys</h5>
    <ul>
      <li><strong>content:</strong> An array of HTML strings to display in the content area of the search result.</li>
    </ul>

    <h5>Optional keys</h5>
    <ul>
      <li><strong>metadata:</strong> An array of HTML strings, or components to display in the meta data area of the resource.</li>
      <li><strong>actions:</strong> An array of Action configurations. See Action.</li>
    </ul>

    <h5>Metadata component required keys</h5>
    <ul>
      <li><strong>template:</strong> UI kit builder class name|function name. ex. "Other|label", is equivalent to SAMUIKit\Other::label() in PHP.</li>
      <li><strong>config:</strong> The configuration of the component. See the component details for required and optional keys.</li>
    </ul>
  </div>
</div>
