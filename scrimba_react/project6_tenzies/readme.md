2/1/23

This was the final project in my React Basics course and was a great project to tie in all the concepts I have learned over the past 10 days.

I had to fall back on Launch School's PEDAC solving process to really break down each aspect of the application into small problems that I could solve without getting overwhelmed.

Some of my struggles as I was thinking about this project:
  - I started with an `array` variable that contained the state of the ten dice. I soon realized that I would need to use an array of objects instead of an array of integers.
  - Related to the above point, I was debating how to handle the state of each die and realized that I needed to pass properties down from App.jsx to each Die component and could better accomplish that with an array of objects. I nearly fell into the bad habit of using Derived State but remembered the techniques for avoiding this and made sure to pass state down to the child components through the `props` object.

Once I had that 'aha' moment, it was just a matter of coding in the remaining features.

Implemented the `useEffect` hook to check for changes to the state of the `array`.



Extend the app :
-- add a counter that tells you how many times you have clicked the roll button
-- add the ability to adjust how high / low the number goes to make it harder or easier to win
-- add a sound when the user wins?
-- track how long it took to win the game
-- save the best time / lowest number of rolls to local storage
