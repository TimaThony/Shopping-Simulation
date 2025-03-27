//The following objects are made up of properties and values that help organize the variables into a more readable and accessable format 
let scooter = {
    price: 6999,
    photo: "images/scooter.jpg",
    desc: "Kick Scooter for Ages 6+,Kid, Teens & Adults. Max Load 240 LBS. Foldable, Lightweight, 8IN Big Wheels for Kids, Teen and Adults, 4 Adjustable Levels. Bearing ABEC9",
}

let dogBed = {
    price: 3374,
    photo: "images/dogBed.jpg",
    desc: "EHEYCIGA Orthopedic Dog Beds Large Sized Dog, Waterproof Memory Foam Pet Bed with Sides, Non-Slip Bottom Large Pet Bed with Washable Removable Cover, Grey",
}
let catSprings = {
    price: 599,
    photo: "images/catSprings.jpg",
    desc: "Andiker Cat Spiral Spring, 12 Pc Cat Creative Toy to Kill Time and Keep Fit Interactive Cat Toy Sturdy Heavy Plastic Spring Colorful Springs Cat Toy for Swatting, Biting, Hunting Kitten Toys",
}

let fishingLure = {
    price: 1999,
    photo: "images/fishingLure.jpg",
    desc: "TRUSCEND Swimmax for Saltwater and Freshwater, Realistic Fishing Lures for Bass Trout Crappie Walleye Pike Bluegill Salmon, Swimbait for Bass Fishing, Amazing Fishing Gear Gifts for Family Fishing",
}

let rcCar = {
    price: 3199,
    photo: "images/rcCar.jpg",
    desc: "Threeking RC Stunt Cars Remote Control Car Double-Sided Driving 360-degree Flips Rotating Car Toy, Green",
}

let lego = {
    price: 15995,
    photo: "images/lego.jpg",
    desc: "LEGO Architecture Trevi Fountain Building Set - Collectible 3D Puzzle of Italian Landmark Model for Display - DIY Arts and Craft for Adults - Gift Idea for Men and Women - 21062",
}

//Defining variables for later so that they are global and can be used outside of the function
let scooterSelectedValue = 0;
let dogBedSelectedValue = 0;
let catSpringsSelectedValue = 0;
let fishingLureSelectedValue = 0;
let rcCarSelectedValue = 0;
let legoSelectedValue = 0;

//All the following DOM manipulations put the variables onto the HTML page and organize the page 
document.getElementById("scooterDisplay").innerHTML = `
    <img class="pdisplay" src=${scooter.photo}>
    <div class="desc"> ${scooter.desc} </div>
    <div class="price">Price: $${scooter.price / 100}</div>
    <button id="scooterCollect">Buy!</button>
`;

document.getElementById("dogBedDisplay").innerHTML = `
    <img class="pdisplay" src=${dogBed.photo}>
    <div class="desc"> ${dogBed.desc} </div>
    <div class="price">Price: $${dogBed.price / 100}</div>
    <button id="dogBedCollect">Buy!</button>
`;

document.getElementById("catSpringsDisplay").innerHTML = `
    <img class="pdisplay" src=${catSprings.photo}>
    <div class="desc"> ${catSprings.desc} </div>
    <div class="price">Price: $${catSprings.price / 100}</div>
    <button id="catSpringsCollect">Buy!</button>
`;

document.getElementById("fishingLureDisplay").innerHTML = `
    <img class="pdisplay" src=${fishingLure.photo}>
    <div class="desc"> ${fishingLure.desc} </div>
    <div class="price">Price: $${fishingLure.price / 100}</div>
    <button id="fishingLureCollect">Buy!</button>
`;

document.getElementById("rcCarDisplay").innerHTML = `
    <img class="pdisplay" src=${rcCar.photo}>
    <div class="desc"> ${rcCar.desc} </div>
    <div class="price">Price: $${rcCar.price / 100}</div>
    <button id="rcCarCollect">Buy!</button>
`;

document.getElementById("legoDisplay").innerHTML = `
    <img class="pdisplay" src=${lego.photo}>
    <div class="desc"> ${lego.desc} </div>
    <div class="price">Price: $${lego.price / 100}</div>
    <button id="legoCollect">Buy!</button>
`;

//generates the checkout button with classes that are then modified in style.css
document.getElementById("checkOut").innerHTML = `
    <button id="checkOutButton"> <img id="checkOutIcon" src="images/checkOutButton.png"></button>
`;

//SCOOTER QUANTITY SELECT AND BUTTON
const scooterSelectElement = document.createElement("select");
scooterSelectElement.id = "scooterNumberDropdown"; //inputs new ID for quantity chosen

//Creates options and append them to the select element
const scooterDefaultOption = document.createElement("option");
scooterDefaultOption.value = "0";
scooterDefaultOption.textContent = "Quantity";
scooterSelectElement.appendChild(scooterDefaultOption);

for (let i = 1; i <= 10; i++) {
  const scooterOption = document.createElement("option");
  scooterOption.value = i.toString(); //changes i variable into a string
  scooterOption.textContent = i.toString();
  scooterSelectElement.appendChild(scooterOption);
}

//adds the select element into a container in HTML
const scooterContainer = document.getElementById("scooterDisplay"); 
scooterContainer.appendChild(scooterSelectElement);

//allows the element's value to be called on later
const scooterCollectButton = document.getElementById("scooterCollect"); 

scooterCollectButton.addEventListener("click", function() {
  scooterSelectedValue = scooterSelectElement.value; //retrieves value
  console.log(scooterSelectedValue);
});


//DOGBED QUANTITY SELECT AND BUTTON

const dogBedSelectElement = document.createElement("select");
dogBedSelectElement.id = "dogBedNumberDropdown"; //inputs new ID for quantity chosen

//create options and add to select element for user to choose quantity to buy
const dogBedDefaultOption = document.createElement("option");
dogBedDefaultOption.value = "0";
dogBedDefaultOption.textContent = "Quantity";
dogBedSelectElement.appendChild(dogBedDefaultOption);

for (let i = 1; i <= 10; i++) {
  const dogBedOption = document.createElement("option");
  dogBedOption.value = i.toString(); //changes i variable into a string
  dogBedOption.textContent = i.toString();
  dogBedSelectElement.appendChild(dogBedOption);
}

//adds the select element into a container in HTML
const dogBedContainer = document.getElementById("dogBedDisplay"); 
dogBedContainer.appendChild(dogBedSelectElement);

//allows the element's value to be called on later
const dogBedCollectButton = document.getElementById("dogBedCollect"); 

dogBedCollectButton.addEventListener("click", function() {
  dogBedSelectedValue = dogBedSelectElement.value; //retrieves value
  console.log(dogBedSelectedValue);
});

//CATSPRINGS QUANTITY SELECT AND BUTTON

const catSpringsSelectElement = document.createElement("select");
catSpringsSelectElement.id = "catSpringsNumberDropdown";

//create options and add to select element for user to choose quantity to buy
const catSpringsDefaultOption = document.createElement("option");
catSpringsDefaultOption.value = "0";
catSpringsDefaultOption.textContent = "Quantity";
catSpringsSelectElement.appendChild(catSpringsDefaultOption);

for (let i = 1; i <= 10; i++) {
  const catSpringsOption = document.createElement("option");
  catSpringsOption.value = i.toString(); //changes i variable into a string
  catSpringsOption.textContent = i.toString();
  catSpringsSelectElement.appendChild(catSpringsOption);
}

//adds the select element into a container in HTML
const catSpringsContainer = document.getElementById("catSpringsDisplay"); 
catSpringsContainer.appendChild(catSpringsSelectElement);

//allows the element's value to be called on later
const catSpringsCollectButton = document.getElementById("catSpringsCollect"); 

catSpringsCollectButton.addEventListener("click", function() {
  catSpringsSelectedValue = catSpringsSelectElement.value; //retrieves value
  console.log(catSpringsSelectedValue);
});

//FISHINGLURE QUANTITY SELECT AND BUTTON

const fishingLureSelectElement = document.createElement("select");
fishingLureSelectElement.id = "fishingLureNumberDropdown";

//create options and add to select element for user to choose quantity to buy
const fishingLureDefaultOption = document.createElement("option");
fishingLureDefaultOption.value = "0";
fishingLureDefaultOption.textContent = "Quantity";
fishingLureSelectElement.appendChild(fishingLureDefaultOption);

for (let i = 1; i <= 10; i++) {
  const fishingLureOption = document.createElement("option");
  fishingLureOption.value = i.toString(); //changes i variable into a string
  fishingLureOption.textContent = i.toString();
  fishingLureSelectElement.appendChild(fishingLureOption);
}

//adds the select element into a container in HTML
const fishingLureContainer = document.getElementById("fishingLureDisplay"); 
fishingLureContainer.appendChild(fishingLureSelectElement);

//allows the element's value to be called on later
const fishingLureCollectButton = document.getElementById("fishingLureCollect"); 

fishingLureCollectButton.addEventListener("click", function() {
  fishingLureSelectedValue = fishingLureSelectElement.value; //retrieves value
  console.log(fishingLureSelectedValue);
});


//RCCAR QUANTITY SELECT AND BUTTON

const rcCarSelectElement = document.createElement("select");
rcCarSelectElement.id = "rcCarNumberDropdown";

//create options and add to select element for user to choose quantity to buy
const rcCarDefaultOption = document.createElement("option");
rcCarDefaultOption.value = "0";
rcCarDefaultOption.textContent = "Quantity";
rcCarSelectElement.appendChild(rcCarDefaultOption);

for (let i = 1; i <= 10; i++) {
  const rcCarOption = document.createElement("option");
  rcCarOption.value = i.toString(); //changes i variable into a string
  rcCarOption.textContent = i.toString();
  rcCarSelectElement.appendChild(rcCarOption);
}

//adds the select element into a container in HTML
const rcCarContainer = document.getElementById("rcCarDisplay"); 
rcCarContainer.appendChild(rcCarSelectElement);

//allows the element's value to be called on later
const rcCarCollectButton = document.getElementById("rcCarCollect"); 

rcCarCollectButton.addEventListener("click", function() {
  rcCarSelectedValue = rcCarSelectElement.value; //retrieves value
  console.log(rcCarSelectedValue);
});

//LEGOS QUANTITY SELECT AND BUTTON

const legoSelectElement = document.createElement("select");
legoSelectElement.id = "legoNumberDropdown";

//create options and add to select element for user to choose quantity to buy
const legoDefaultOption = document.createElement("option");
legoDefaultOption.value = "0";
legoDefaultOption.textContent = "Quantity";
legoSelectElement.appendChild(legoDefaultOption);

for (let i = 1; i <= 10; i++) {
  const legoOption = document.createElement("option");
  legoOption.value = i.toString(); //changes i variable into a string
  legoOption.textContent = i.toString();
  legoSelectElement.appendChild(legoOption);
}

//adds the select element into a container in HTML
const legoContainer = document.getElementById("legoDisplay"); 
legoContainer.appendChild(legoSelectElement);

//allows the element's value to be called on later
const legoCollectButton = document.getElementById("legoCollect"); 

legoCollectButton.addEventListener("click", function() {
  legoSelectedValue = legoSelectElement.value; //retrieves value
  console.log(legoSelectedValue);
});

checkOutButton.addEventListener("click", function() {
    let totalPrice = "$" + (((scooterSelectedValue*scooter.price) 
    + (dogBedSelectedValue*dogBed.price) 
    + (catSpringsSelectedValue*catSprings.price) 
    + (fishingLureSelectedValue*fishingLure.price) 
    + (rcCarSelectedValue*rcCar.price) 
    + (legoSelectedValue*lego.price))/100);
    console.log(totalPrice);
    document.getElementById("checkOutText").innerHTML = `
    <p> <b>You spent: ${totalPrice}!</b> </br>
    <u>You bought:</u> </br>
    ${scooterSelectedValue} Scooters </br>
    ${dogBedSelectedValue} Dog Beds</br>
    ${catSpringsSelectedValue} Cat Springs</br>
    ${fishingLureSelectedValue} Fishing Lures</br>
    ${rcCarSelectedValue} RC Cars</br>
    ${legoSelectedValue} Legos</br>
`;
});
