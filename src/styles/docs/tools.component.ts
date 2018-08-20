import { Component } from '@angular/core';

const code_button_tool_markup = `
<button class="sam button tool" type="button">Default</button>
`;
const code_button_tool_dark_markup = `
<button class="sam button inverted tool" type="button">Default</button>
`;
const code_button_tool_sizes_markup = `
<button class="sam button tool" type="button">Normal</button>
<button class="sam button tool small" type="button">Small</button>
`;

const code_button_tool_icons_markup = `
<button class="sam button tool" type="button">
  <span class="fa fa-download" aria-hidden="true"></span>
  Download
</button>
<button class="sam button tool" type="button">
  <span class="fa fa-share-alt" aria-hidden="true"></span>
  Share
</button>
<button class="sam button tool" type="button">
  <span class="fa fa-save" aria-hidden="true"></span>
  Save
</button>
`;

@Component({
  templateUrl: 'tools.template.html',
})
export class ToolsComponent {
  button_tool_markup = code_button_tool_markup.trim();
  button_tool_dark_markup = code_button_tool_dark_markup.trim();
  button_tool_sizes_markup = code_button_tool_sizes_markup.trim();
  button_tool_icons_markup = code_button_tool_icons_markup.trim();
}
