Forms should act like forms: Maintain the default browser behavior. 

Inline validation: Validating a form or form field prior to submitting the form.

Validators are triggered based on the state of the form control (invalid, valid, dirty, and so on) or length of the form (longer forms have inline validation).
    - Invalid fields will not self-correct upon correction by user. Only resubmitting the form will run the validations and change the state of the form control.

Short, long, indefinite alert messages upon form submission:
    - Short: 5 seconds.
    - Long: 10 seconds.
    - Indefinite: default - does not fade.

From submission should result in the user being moved to the top of the form with an alert for added feedback.

2. Alert notifications of success or other notifications provided to users
    a. Short alert messages such as Success or Failure alert notifications will remain on screen for 5 secs and then disappear after the set time has been lapsed
    b. Longer messages should be provided on screen for at least 10 secs and then disappear after the set time has been lapsed
    c. Alert display length can be variable depending on how long a specific alert needs to be provided for and can be handled on a case by case basis