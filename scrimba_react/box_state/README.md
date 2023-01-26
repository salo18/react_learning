This project is a little recap of what I learned this week in Scrimba's intro to React course.

There are a few concepts at work here:
- I have a boxes.js starter file that exports an object
- The app is run through App.jsx, which uses array destructuring to initialize an array of objects `boxArr` and set it to point to the initial values from the boxes.js file. All future state changes occur on `boxArr` and not on the original object imported into App.jsx by boxes.js.
  - App.jsx creates an array of divs based on each object in `boxArr`, which is then rendered in the App. Each element in the array is transformed with Array.prototype.map into a Box component, which is controlled by the Box.jsx file. We pass in a few properties to each Box element like `key` and the state of the box `onOff`.
- In the Box.jsx file, we pass in the properties from App.jsx and initialize and assign the value of `onOff` to control the state of the application (on or off).
  - This component returns a div element that has an event listener for a click event. The event listener calls the setter method that changes the value of `onOff`, which then flows down to the DOM element through the `style` property.

This was a fun little project that encapsulated all the concepts that I learned this week in the course. Excited to dig deeper into React!

Ideas for extending this project in the future:
- create two counter states that keep track of how many boxes are on and off
- practice a bit of CSS with transformations when each box is clicked
- practice state management by rendering a list of values like a letter of the alphabet. Foe example, each time a box is clicked, start with 'a' and iterate all the way to 'z' and then loop back to 'a'?