/* tslint:disable */
import { Component } from '@angular/core';

const code_input_text_markup = `
<form>
  <label class="sam input label" for="input-type-text">Text input label</label>
  <input class="sam input" id="input-type-text" name="input-type-text" type="text">
  
  <label class="sam input label" for="input-focus">Text input focused</label>
  <input class="sam input focus" id="input-focus" name="input-focus" type="text">
  
  <label class="sam input label"  for="input-error">Text input error</label>
  <span class="sam input error message" id="input-error-message" role="alert">
    <span class="fa fa-exclamation-circle" aria-hidden="true"></span>
    Helpful error message
  </span>
  <input class="sam input error" id="input-error" name="input-error" type="text" aria-describedby="input-error-message">
  
  <label class="sam input label" for="input-type-optional">
    Text input optional
    <span class="sam input label optional">(Optional)</span>
  </label>
  <input class="sam input" id="input-type-optional" name="input-type-optional" type="text">
  
  <label class="sam input label" for="input-type-help">Text input with help</label>
  <p class="sam small content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin 
    aliquam consequat diam sed gravida. Praesent ultricies eros lectus, 
    vehicula congue libero ultricies at. Cras in sodales mauris.
  </p>
  <input class="sam input" id="input-type-help" name="input-type-help" type="text">
</form>
`;

const code_input_text_area_markup =`
<label for="textarea1">Example textarea</label>
<textarea class="sam" id="textarea1" rows="2"></textarea>
`;

const code_input_select_markup = `
<label for="options">Dropdown label</label>
<select class="sam" name="options" id="options">
  <option value>- Select -</option>
  <option value="value1">Option A</option>
  <option value="value2">Option B</option>
  <option value="value3">Option C</option>
</select>
`;

const code_input_checkbox_markup = `
<input class="sam" id="truth" type="checkbox" name="historical-figures-1" value="truth" checked>
<label for="truth">Sojourner Truth</label>

<input class="sam" id="douglass" type="checkbox" name="historical-figures-1" value="douglass">
<label for="douglass">Frederick Douglass</label>

<input class="sam"  id="washington" type="checkbox" name="historical-figures-1" value="washington">
<label for="washington">Booker T. Washington</label>

<input class="sam"  id="carver" type="checkbox" name="historical-figures-1" disabled>
<label for="carver">George Washington Carver</label>
`;

const code_input_radio_markup = `
<input class="sam" id="stanton" type="radio" checked name="historical-figures-2" value="stanton">
<label for="stanton">Elizabeth Cady Stanton</label>

<input class="sam"  id="anthony" type="radio" name="historical-figures-2" value="anthony">
<label for="anthony">Susan B. Anthony</label>

<input class="sam"  id="tubman" type="radio" name="historical-figures-2" value="tubman">
<label for="tubman">Harriet Tubman</label>

<input class="sam"  id="tanton" type="radio" name="historical-figures-2" value="tanton" disabled>
<label for="tubman">Susan Tanton</label>
`;

@Component({
  templateUrl: 'formcontrols.template.html',
})
export class FormControlsComponent {
  input_text_markup = code_input_text_markup.trim();
  input_checkbox_markup = code_input_checkbox_markup.trim();
  input_text_area_markup = code_input_text_area_markup.trim();
  input_select_markup = code_input_select_markup.trim();
  input_radio_markup = code_input_radio_markup.trim();
}
