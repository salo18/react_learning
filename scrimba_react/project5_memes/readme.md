1/31/23

This was a really fun project! My first truly interactive app.

It's a simple one page meme generator that uses an API request from 'https://api.imgflip.com/get_memes' to get the top 100 meme images, saves them to state and then selects a random image. The user has the ability to add text to the top and bottom of the image.

In this project, I utilized `useState` and learned how to handle operations external to React (like the API call) with `useEffect`. useEffect has a few nuances like the optional dependencies array and the optional cleanup function that can be returned. I did not need to use those for this project but it was good to learn about for future projects.

I also learned about Forms in React and how to make form inputs controlled components. The form input states are tracked by one object referenced by the variable `meme` rather than by each input element. The `onChange` event made it really easy to update the state of the app on each change in the form vs waiting until the form is submitted to collect all the information. That is how the image updates with each character that is typed into the top and bottom text fields.

Extend this app:
  - add the ability to download the photo to local storage
  - add a share button that gives users the ability to share a link to the meme they created
    - each shared photo would be saved to a unique url that gets saved and matched with the three data points (photo, top text, bottom text)

Documentation I used for this project:
https://beta.reactjs.org/reference/react/useEffect

https://beta.reactjs.org/reference/react-dom/components/input#im-getting-an-error-a-component-is-changing-an-uncontrolled-input-to-be-controlled

https://beta.reactjs.org/reference/react/useState

https://reactjs.org/docs/dom-elements.html#onchange
