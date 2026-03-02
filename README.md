


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:getElementById() is one of the most commonly used methods in JavaScript.It selects a single element based on its unique ID.
Whereas getElementsByClassName() allows you to select elements by their class name.It selects multiple elements on a page that have same class name.It returns HTMLcollection.
querySelector() and querySelectorAll() are modern methods for selecting elements using CSS selectors.querySelector() provides first matching element and querySelectorAll() provides all matching elements in the DOM as a NodeList.


### 2. How do you create and insert a new element into the DOM?

Answer: I create a new element by using document.createElement() method and then I use element.append() for mixing text and elements also element.appendChild() for only DOM nodes to insert into the DOM.

### 3. What is Event Bubbling? And how does it work?

Answer:Event Bubbling is a type of event propagation in the HTML DOM.It propagates on a nested element from child to its ancestors in the DOM tree. When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.Let's say 3 elements like form,div,p in a nest first of all runs on p then div then form.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer:Event Delegation is a process in JavaScript for handling event efficiently.In this process there are many many advantages.For example, it improves performance,efficient coding,elements added automatically.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:preventDefault() Stops the browser's default action whereas  stopPropagation() Stops the event flow through the DOM tree. By using  preventDefault() we can continue event to bubble.On the other hand, stopPropagation() is used for stops event from reaching ancestors or descendents.

