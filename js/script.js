// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // capture the text input value in a variable
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

guestInput.addEventListener("keydown", function (e) {
  const key = e.key;
  // capture the "key" value from the keydown event parameter "e"
  if (key === "Enter") {
    // if the key value = "Enter"
    let guest = guestInput.value;
    // then capture the input value in a variable
    if (guest !== "") {
      addToList(guest);
      clearInput();
      updateGuestCount();
      // if that input != an empty value then run the functions
    }
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "Chips",
    "Guacamole",
    "Salsa",
    "Pizza",
    "Vegan sushi rolls",
    "Sweet Hyrdration",
    "Veggie sandwiches",
    "Luau",
    "Rice",
    "Poke",
    "Potato Salad",
    "Vegan chili",
    "Fruit Salad"
  ];
  // assign a new array

  const allGuests = document.querySelectorAll(".guest-list li");
  // select all li elements in the .guest-list ul and return a list of all li elements

  for (let guest of allGuests) {
    // for each li element in the list/array of all li elements
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    // create a random WHOLE number that is within the index length of the potluckItems array
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    // get a random li element from the potluckItems array based on the random index number
    let listItem = document.createElement("li");
    // create a new li element
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    // new li element innerText = template literal statement with innerText of each guest li element and random li element from potluckItems array
    assignedItems.append(listItem);
    // add new li element to "assignedItems" ul

    potluckItems.splice(randomPotluckIndex, 1);
    // remove the random item from the potluckItems array so it is not reused
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  // runs function after assignButton is clicked
  assignButton.disabled = true;
  // disables button after activation
});
