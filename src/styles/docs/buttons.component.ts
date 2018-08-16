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

}
