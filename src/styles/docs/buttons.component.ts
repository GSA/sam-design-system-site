import { Component } from '@angular/core';

const code_button_primary_markup = `
<button class="sam button primary" type="button">Default</button>
`;
const code_button_primary_sizes_markup = `
<button class="sam button primary" type="button">Normal</button>
<button class="sam button primary small" type="button">Small</button>
`;

const code_button_secondary_markup = `
<button class="sam button secondary" type="button">Default</button>
`;
const code_button_secondary_dark_markup = `
<button class="sam button inverted secondary" type="button">Default</button>
`;
const code_button_secondary_sizes_markup = `
<button class="sam button secondary" type="button">Normal</button>
<button class="sam button secondary small" type="button">Small</button>
`;

const code_button_icon_sizes_markup = `
<button class="sam button secondary" type="button">
  <span class="fa fa-user" aria-hidden="true"></span>
  Normal
</button>
<button class="sam button secondary small" type="button">
  <span class="fa fa-user" aria-hidden="true"></span>
  Small
</button>
`;

const code_button_tertiary_markup = `
<button class="sam button tertiary" type="button">Default</button>
`;
const code_button_tertiary_dark_markup = `
<button class="sam button inverted tertiary" type="button">Default</button>
`;
const code_button_tertiary_sizes_markup = `
<button class="sam button tertiary" type="button">Normal</button>
<button class="sam button tertiary small" type="button">Small</button>
`;

const code_button_tertiary_icons_markup = `
<button class="sam button tertiary" type="button">
  <span class="fa fa-download" aria-hidden="true"></span>
  Download
</button>
<button class="sam button tertiary" type="button">
  <span class="fa fa-share-alt" aria-hidden="true"></span>
  Share
</button>
<button class="sam button tertiary" type="button">
  <span class="fa fa-save" aria-hidden="true"></span>
  Save
</button>
`;

@Component({
  templateUrl: 'buttons.template.html',
})
export class ButtonsComponent {

  button_primary_markup = code_button_primary_markup.trim();
  button_primary_sizes_markup = code_button_primary_sizes_markup.trim();
  button_secondary_markup = code_button_secondary_markup.trim();
  button_secondary_dark_markup = code_button_secondary_dark_markup.trim();
  button_secondary_sizes_markup = code_button_secondary_sizes_markup.trim();
  button_icon_sizes_markup = code_button_icon_sizes_markup.trim();
  button_tertiary_markup = code_button_tertiary_markup.trim();
  button_tertiary_dark_markup = code_button_tertiary_dark_markup.trim();
  button_tertiary_sizes_markup = code_button_tertiary_sizes_markup.trim();
  button_tertiary_icons_markup = code_button_tertiary_icons_markup.trim();

}
