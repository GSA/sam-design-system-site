import { Component } from '@angular/core';

const code_color_variables = `
// Foreground variables
$foreground: (
  text:         #212121,
  light-text:   #aeb0b5,
  link:         #0071bc,
  headers:      #323a45,
  divider:      #d6d7d9,
);

// Background variables
$background: (
  accordion:         #ffffff,
  accordion-hover:   #f1f1f1,
  sidenav:           #ffffff,
  table:             #ffffff,
);
`;

const code_color_example = `
.accordion {
  color: sam-color($foreground, text);
  background: sam-color($background, accordion);
}
`;

@Component({
  templateUrl: 'colors.template.html',
})
export class ColorsComponent {
  color_variables = code_color_variables.trim();
  color_example = code_color_example.trim();
}
