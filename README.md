# lift
This is a lift simulation project that can generate upto 3 floors and 1 lift.
When you click on the link the user gets the page where he/she is asked to input the no.of floors and lift.
When the user clicks the simulate button , 2nd page is displayed.
In the second page there are up and down buttons and lifts are displayed dynamically on the fly,when the users clicks up or down button the lift goes to the respective floor where it is been called.
When the user clicks on reset button he/she is taken to the 1st page.
Features:
This lift simulator generates 3 floors.
Lift simulator can have one lift .
Gate closes and opens in 2.5seconds.
Lift moves to the floors in 3.5s
Functions:
hideSecondPage(): Hides the second page of the simulation interface and shows the first page.
makingFloors(): Generates the floors and elevators based on user inputs and sets up event listeners for user interactions.
moveLift(liftno, floorNo, oldFloorValue): Animates the movement of an elevator to a specified floor, including door animations and a delay before making the elevator available again.
gateopenclose(liftno): Simulates the opening and closing of elevator doors using CSS transitions.
deletingFloors(): Removes the floor divs from the interface, effectively resetting the simulation when restarting.

AddEventListener:
addEventListener is a method used to attach an event handler function to a DOM element. 
An event handler is a JavaScript function that gets executed when a specific event occurs on the element. 

QuerySelector:
querySelector is a method used to select a single DOM element that matches a specific CSS selector. 
It allows you to retrieve a reference to a DOM element so that you can manipulate or interact with it using JavaScript.

Both addEventListener and querySelector are fundamental tools for interacting with web page elements using JavaScript.
They allow you to create dynamic and interactive web applications by responding to user interactions and modifying the content or behavior of your web page.
