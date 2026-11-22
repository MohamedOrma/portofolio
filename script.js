var menuBtn = document.getElementById("menu-btn");
var links = document.querySelector(".links");
var linkItems = document.querySelectorAll(".links a");

menuBtn.addEventListener("click", function () {
  links.classList.toggle("open");
});

for (var i = 0; i < linkItems.length; i++) {
  linkItems[i].addEventListener("click", function () {
    links.classList.remove("open");
  });
}

var helloBtn = document.getElementById("hello-btn");
var welcome = document.getElementById("welcome");

helloBtn.addEventListener("click", function () {
  var name = prompt("What is your name?");

  if (name === null) {
    welcome.textContent = "You canceled, but welcome to my portfolio anyway!";
  } else if (name.trim() === "") {
    welcome.textContent = "You didn't enter a name, but welcome visitor!";
  } else {
    welcome.textContent = "Hello, " + name.trim() + "! Welcome to my portfolio.";
  }
});

var skillInput = document.getElementById("skill-input");
var addSkillBtn = document.getElementById("add-skill-btn");
var skillMsg = document.getElementById("skill-msg");
var haveBadges = document.getElementById("have-badges");

function addRemoveButton(badge) {
  var x = document.createElement("span");
  x.textContent = " ✕";
  x.classList.add("remove-x");
  x.addEventListener("click", function () {
    badge.remove();
  });
  badge.appendChild(x);
}

var oldBadges = haveBadges.querySelectorAll(".badge");
for (var j = 0; j < oldBadges.length; j++) {
  addRemoveButton(oldBadges[j]);
}

addSkillBtn.addEventListener("click", function () {
  var skill = skillInput.value.trim();

  if (skill === "") {
    skillMsg.textContent = "Please enter a skill first!";
    return;
  }

  skillMsg.textContent = "";

  var newBadge = document.createElement("span");
  newBadge.classList.add("badge");
  newBadge.classList.add("have");
  newBadge.textContent = skill;
  addRemoveButton(newBadge);
  haveBadges.appendChild(newBadge);

  skillInput.value = "";
});

var form = document.getElementById("contact-form");
var formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill in all the fields!";
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    formMsg.style.color = "red";
    formMsg.textContent = "Please enter a valid email!";
  } else {
    formMsg.style.color = "lightgreen";
    formMsg.textContent = "Thank you " + name + ", your message was sent successfully!";
    form.reset();
  }
});

var windowSize = document.getElementById("window-size");
var pageUrl = document.getElementById("page-url");
var topBtn = document.getElementById("top-btn");

function showWindowSize() {
  windowSize.textContent = "Window size: " + window.innerWidth + " x " + window.innerHeight;
}

showWindowSize();
window.addEventListener("resize", showWindowSize);

pageUrl.textContent = "Page URL: " + window.location.href;

topBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

var cards = document.querySelectorAll(".card");
var hobbyMsg = document.getElementById("hobby-msg");

for (var k = 0; k < cards.length; k++) {
  cards[k].addEventListener("click", function () {
    var hobby = this.querySelector("h4").textContent;
    hobbyMsg.textContent = "You clicked on " + hobby + "! I really enjoy it.";
  });

  cards[k].addEventListener("mouseover", function () {
    this.style.backgroundColor = "rgba(0, 212, 255, 0.25)";
  });

  cards[k].addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
}

var themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "Dark Mode";
  } else {
    themeBtn.textContent = "Light Mode";
  }
});