// =====================
// Part 1: Basics
// =====================

// Variables, conditionals, user input
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = "You are eligible to vote!";
  } else if (age > 0) {
    result = "You are not eligible yet.";
  } else {
    result = "Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = result;
}


// =====================
// Part 2: Functions
// =====================

// Example function 1: Calculate total
function calculateTotal(a, b) {
  let sum = a + b;
  document.getElementById("calcResult").innerText = "The total is: " + sum;
}

// Example function 2: Toggle visibility of text
function toggleMessage() {
  let textElement = document.getElementById("toggleText");
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}


// =====================
// Part 3: Loops
// =====================

// Example loop 1: Display numbers 1-5
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = "Number " + i;
    list.appendChild(li);
  }
}

// Example loop 2: Countdown using while loop
function countdown() {
  let num = 5;
  let output = "";
  while (num > 0) {
    output += num + " ";
    num--;
  }
  document.getElementById("countdownResult").innerText = output;
}


// =====================
// Part 4: DOM Manipulation
// =====================

// DOM Event Listener: Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "#f9f9f9" : "lightblue";
});

// DOM Event Listener: Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.innerText = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
});

// Another DOM example: Change intro text on load
window.onload = function() {
  document.getElementById("intro").innerText += " (This text was modified with JavaScript!)";
};
