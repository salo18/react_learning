Playing around with forms and making sure that each input is a controlled.
https://beta.reactjs.org/learn/sharing-state-between-components#controlled-and-uncontrolled-components

Here's what I did:
- created a `formData` object and a setter method using the `useState` hook.

- created a form with the appropriate attributes for the type of input
  - each input gets a name attribute that must match the key used in the state object
  - the first three inputs get a `value` attribute that is set to the corresponding value in the state object. This ensures that the state dictates the value of the input and not the input itself. This is what makes for a controlled component otherwise there would be two copies of state.
    - used a `checked` attribuet for the checkbox instead of a `value` attribute

- created the `handleChange` function that is invoked after the `onChange` event fires. This is active on any keystrokes so we capture data as the user types (and not at the very end on submission).
  - inside `handleChange`, the object referenced by `event.target` is destructured and four variables are initialized and declared to point to the values with the corresponding keys in the object.
  - `setFormData` is called and a new object is returned with all previous form data except for a replaced key value pair that matches the `name` attribute of the input elements

- `handleSubmit` function is declared
  - call `event.preventDefault()` to prevent the page from refreshing and the form data to be appended to the url
  