1/27/23 - revision
In the last version, passed in an `onOff` property to the box component that contained a boolean based on the state of the array of objects. Each instance of the Box component was managing its own `onOff` state. This is called Derived State and is not recommended practice (https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html). Instead, this version of the app keeps one copy of state in the App component (instead of two copies, one in App and a local copy for each Box instance).

The toggle function in App returns a new array with an updated value for the `on` property for the box that gets clicked (based on box.id). The Box components receive a toggle property that contains a callback function that calls the `toggle` function and passes in the current box id as an argument. This creates a closure where each instance of Box will have its own `toggle` function that knows its corresponding box id based on the current box element we are iterating through from the App component.

1/26/23

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

Yes, you could easily do this with event listeners and toggle between two classes but I wanted to test my knowledge of React, useState, and passing properties.