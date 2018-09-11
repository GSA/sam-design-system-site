import { Component } from '@angular/core';

const code_normal_label_markup = `
<span class="sam label">Normal</span>
`;

const code_normal_icons_label_markup = `
<span class="sam label">
  Normal with icon
  <button class="sam button tertiary">
    <span class="fa fa-close" aria-hidden="true"></span>
  </button>
</span>
`;

const code_label_markup = `
<span class="sam green status label">Published</span>
<span class="sam gray status label">Cancelled</span>
<span class="sam dark gray status label ">Inactive</span>
<span class="sam yellow status label">Awaiting Review</span>
<span class="sam light blue status label">Draft</span>
<span class="sam red status label">Expired</span>
`;

@Component({
  templateUrl: 'labels.template.html',
})
export class LabelsComponent {
  label_normal_markup = code_normal_label_markup.trim();
  label_normal_icons_markup = code_normal_icons_label_markup.trim();
  label_markup = code_label_markup.trim();
}
