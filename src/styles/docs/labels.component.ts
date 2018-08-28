import { Component } from '@angular/core';

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
  label_markup = code_label_markup.trim();
}
