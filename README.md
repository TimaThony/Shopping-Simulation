# Shopping-Simulation
This program simulates online shopping through the use of HTML, CSS, and JavaScript.

**Brief Overview:**

This program is a simulation of an online shopping website where you can buy a specified number of goods through a simple user interface and will then total up the goods bought and the total price of the purchase.

**Usage:**
1. The website will load, giving the user 6 items to choose to buy. There should be an image, description, price, quantity dropdown, and buy button accompanying each item.
2. The user can then choose a quantity to buy on any item of their choosing.
3. The user can then press the buy button respective to the item they wish to buy.
4. Steps 2 and 3 may be completed on however many items the user would like to buy
5. The user can then press the "Checkout" button at the bottom of the page when they are done shopping.
6. The page will multiply the quantity of each good along with its respective price, and add up the values to come out with a final price for the purchase.
7. The website will display the total price of the purchase, along with how many of each item was purchased.
8. The user may continue to shop, or close the website.

**File structure:**

index.html - This file contains the overall structure and order that the elements display.

style.css - This file helps give the website a polished, organized look. It is used to organize the items into 3 evenly spaced columns, as well as center the checkout button using Flexbox. It also contains styling attributes for the images, descriptions, and prices of goods.

main.js - This file contains the logic of the program. It holds all the variables and calculations that the website must run in order to give functionality to the purchasing system. This file is given responsibility over both the input and output of the file by using eventlisteners and DOM manipulation (through means such as innerhtml and getElementById()) allowing the program to generate the checkout button, calculate the total price, and display the purchasing overview.

/images - This folder holds every image used within the program including each item's photo and the checkout button.

**Variable System:**

The program uses object variables for each item, including 
-scooter 
-dogBed
-catSprings
-fishingLure
-rcCar
-lego
Each object variable has 3 properties, including
-photo
-desc
-price

The program lists the number of cents for pricing in integers instead of listing dollars as floats, because floats can often lead to inaccuracies in JavaScript programs.

For the user's item quantity inputs, the program uses the suffix SelectedValue, creating variables: 
-scooterSelectedValue
-dogBedSelectedValue
-catSpringsSelectedValue
-fishingLureSelectedValue
-rcCarSelectedValue
-legoSelectedValue

The variable totalPrice is calculated by using a "$" string, followed by each quantity selectedValue multiplied by the [item object].price, with each being added, and finally with the sum being divided by 100 to convert cents to dollars.
