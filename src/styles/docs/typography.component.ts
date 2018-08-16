import { Component, forwardRef, ChangeDetectorRef, OnInit} from '@angular/core';
import { SamPageNextService, DataStore, layoutStore} from '@gsa-sam/sam-ui-elements';

const code_h1_markup = `
<h1 class="sam heading">
  <span class="intro">Section</span>
  Heading 1
</h1>
`;
const code_h1_type_styles = `
font-weight: 700;
font-size: 38px;
line-height: 42px;
letter-spacing: -1px;
`;
const code_h1_spacing_styles = `
padding-top: 25px;
padding-bottom: 20px;
margin: 0px;
`;
const code_intro_type_styles = `
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0px;
text-transform: uppercase;
`;


const code_h2_markup = `
<h2 class="sam heading">
  Heading 2
</h2>
`;
const code_h2_type_styles = `
font-weight: 700;
font-size: 32px;
line-height: 41px;
letter-spacing: -.8px;
`;
const code_h2_spacing_styles = `
padding-top: 20px;
padding-bottom: 15px;
margin: 0px;
`;


const code_h3_markup = `
<h3 class="sam heading">
  Heading 3
</h3>
`;
const code_h3_type_styles = `
font-weight: 600;
font-size: 24px;
line-height: 31px;
letter-spacing: 0px;
`;
const code_h3_spacing_styles = `
padding-top: 15px;
padding-bottom: 10px;
margin: 0px;
`;


const code_h4_markup = `
<h4 class="sam heading">
  Heading 4
</h4>
`;
const code_h4_type_styles = `
font-weight: 700;
font-size: 18px;
line-height: 25px;
letter-spacing: 0px;
`;
const code_h4_spacing_styles = `
padding-top: 10px;
padding-bottom: 5px;
margin: 0px;
`;


const code_lead_markup = `
<p class="sam lead">
  Lead paragraph
</p>
`;
const code_lead_type_styles = `
font-weight: 300;
font-size: 20px;
line-height: 26px;
letter-spacing: 0px;
`;
const code_lead_spacing_styles = `
padding-bottom: 30px;
margin: 0px;
`;


const code_body_markup = `
<p>
  Body copy. A series of sentences together which make a paragraph.
</p>
`;
const code_body_type_styles = `
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0px;
`;
const code_body_spacing_styles = `
padding-bottom: 15px;
margin: 0px;
`;


const code_small_markup = `
<p class="sam small">
  Small copy. A series of sentences together which make a paragraph.
</p>
`;
const code_small_type_styles = `
font-weight: 400;
font-size: 15px;
line-height: 22px;
letter-spacing: 0px;
`;
const code_small_spacing_styles = `
padding-bottom: 15px;
margin: 0px;
`;


@Component({
  templateUrl: 'typography.template.html',
  providers: [
    {
      provide: DataStore,
      useValue: layoutStore
    },
    forwardRef(() => SamPageNextService)
  ]
})
export class TypographyComponent implements OnInit {
  h1_markup = code_h1_markup.trim();
  h1_type_styles = code_h1_type_styles.trim();
  h1_spacing_styles = code_h1_spacing_styles.trim();
  intro_type_styles = code_intro_type_styles.trim();
  h2_markup = code_h2_markup.trim();
  h2_type_styles = code_h2_type_styles.trim();
  h2_spacing_styles = code_h2_spacing_styles.trim();
  h3_markup = code_h3_markup.trim();
  h3_type_styles = code_h3_type_styles.trim();
  h3_spacing_styles = code_h3_spacing_styles.trim();
  h4_markup = code_h4_markup.trim();
  h4_type_styles = code_h4_type_styles.trim();
  h4_spacing_styles = code_h4_spacing_styles.trim();
  lead_markup = code_lead_markup.trim();
  lead_type_styles = code_lead_type_styles.trim();
  lead_spacing_styles = code_lead_spacing_styles.trim();
  body_markup = code_body_markup.trim();
  body_type_styles = code_body_type_styles.trim();
  body_spacing_styles = code_body_spacing_styles.trim();
  small_markup = code_small_markup.trim();
  small_type_styles = code_small_type_styles.trim();
  small_spacing_styles = code_small_spacing_styles.trim();

  constructor (
    private _service: SamPageNextService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit() {

    this._service.model.properties.data.valueChanges.subscribe(
      data => { }
    );

    this.cdr.detectChanges();
  }


}
