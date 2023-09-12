# General requirements
- The solution structure and code should be developed using best practices.
- Use design patterns acceptable for React and TypeScript.
- Add at least one test
- Use best practices to split the application into components.
- Optional - Add some simple visualization (such as downloading an image for a floor or a sound for when the elevator arrives).

# Preferred tools, technologies, and packages:
- React, Typescript, HTML, CSS
- Responsive design, styled-components
- Styled System, MUI, react-form-hook
- Vite package manager
- Jest/Vitest testing package

## You are required to write an elevator control software that contains the following parts:

### UI: 
It should display a building with floors separated by numbers and an elevator image. 
When a floor is clicked, the elevator should be called to that floor. 
The UI should display a moving elevator that stops at a particular floor.

### Logic: 
When the first person calls the elevator, it starts to move. 
So, a non-limited number of people on different floors can call the elevator, 
and the elevator will arrive at the floor in the order it was called. 
When multiple elevators exist in the same building, and a person calls an elevator, 
you should detect the one that can arrive faster.

### Example 1:
A person calls the elevator on floor 7, and it is moving. 
Elevator number 1 starts moving and is now passing floor 2. 
Another person calls the elevator on floor 5, but since elevator 1 needs to arrive 
at floor 7 first, elevator 2 starts moving.

### Example 2:
A person calls the elevator on floor 7, and elevator number 1 has now stopped at 
floor 7. Another person calls the elevator on floor 5. In this case, elevator 
number 1 is closer to the person, and they will be picked up from floor 5.

### The solution should be dynamic, so the UI should be able to display a dynamic number of buildings with a dynamic number of elevators.
