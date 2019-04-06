"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Angelina Stilphen
   Date:   4.5.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

// loads setupCart() function 
window.addEventListener("load", setupCart);

// defines the event handlers to the add order buttons 
function setupCart() {
      var addButtons = document.getElementsByClassName("addButton");

      // runs the code to add an item to the costumers checkout 
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem; 
      }  
}

// adds the items clicked in costumers cart 
function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.getAttribute("id");
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;

      // runs the code to 
      for (var n = cartBox.firstChild; n = n.nextSibling; n !== null) {
            if (n.id === foodID) {
                  duplicateOrder = true; 
                  n.firstChild.textContent++;
                  break;
            }
      }

      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = "1";
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            cartBox.appendChild(foodDescription);
      }
} 