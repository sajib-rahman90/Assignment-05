6.  **Answer the following questions clearly:**

1.  What is the difference between **getElementById, getElementsByClassName, and querySelector/ querySelectorAll**

    **Ans of 1:** getElementById finds only one element that has a specific ID. Since IDs are unique, so it always returns just one element.

    getElementsByClassName finds all elements that have a specific class name. It returns a list (like an array) of elements.

    querySelector finds the first element that matches a CSS selector.

    querySelectorAll finds all elements that match a CSS selector and returns them as a list.

2.  How do you **create and insert a new element into the DOM**?

    **Ans of 2:** To create and insert a new element into the DOM, so then i can use some JavaScript methods explain in below.
    First, i create the element using document.createElement().
    Then, i can add text inside it if needed using textContent or innerHTML.and finally insert it into the page using methods like appendChild() or append().

    Example:

         let Para = document.createElement("p");
         Para.textContent = "This is a new paragraph.";
         document.body.appendChild(Para);

3.  What is **Event Bubbling** and how does it work?

    **Ans of 3:** Event Bubbling in JavaScript is when an event on an element first happens on that element and then “bubbles up” to its parent elements, all the way to the top of the page.
    For example, if you click a button inside a <div>, the click event happens on the button first, then on the <div>, then on its parent elements, until it reaches the document or body.Event bubbling is important because it allows event delegation, where one parent element can handle events for many children.

    This is how it works:

    You click on an element.
    The event runs on that element.
    The same event moves up to the parent, and keeps going up.

4.  What is **Event Delegation** in JavaScript? Why is it useful?

    **Ans of 4:** Event Delegation in JavaScript means handling events for many child elements by adding just one event listener to their parent element.
    Instead of adding separate event listeners to every button or list item, you put one listener on the parent, and use it to check which child was clicked.

    it is usefull for,,
    It makes the code cleaner and faster.
    You don’t need to add or remove listeners for every child element.
    It works even if new elements are added later.

5.  What is the difference between **preventDefault() and stopPropagation()** methods?

    **Ans of 5:** preventDefault() and stopPropagation() are two different methods used in JavaScript to control events.
    preventDefault() stops the browser’s default action for an event. For example, if you click a link, the browser normally goes to that URL. Using preventDefault() will stop it.

    stopPropagation() stops the event from “bubbling up” to parent elements. The event still happens on the element, but it won’t trigger listeners on parents.
