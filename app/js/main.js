/*jshint esversion: 6 */
const db = firebase.firestore();
const memberList = [];
let memberListReady = false;
let currentUser = localStorage.getItem("user");

db.collection("members").get()
  .then((members) => {
    members.forEach((member) => {
      memberList.push({id: member.id, ...member.data()});
    })

    memberListReady = true;
    initialize();
  })
  .catch((error) => {
    console.error(error);
  })

const initialize = () => {
  setUpNavEvents();
  initializeChristmasDrawSection();
}

function setUpNavEvents() {
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    const menu = document.querySelector(".header .hamburger-menu");

    menu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      const navValue = event.target.dataset.optionValue;

      document.querySelectorAll("section.active").forEach((each) => {
        each.classList.remove("active");
      });
      document.querySelector(`section.${navValue}`).classList.add("active");
      document.querySelector(".hamburger-menu").classList.remove("active");
    })
  })
}

function initializeChristmasDrawSection() {
  const christmasDrawingSection = document.querySelector(".christmas-drawing");
  const christmasDrawingHeadline = document.querySelector(".christmas-drawing h2");
  const christmasDrawingSubline = document.querySelector(".christmas-drawing h3");

  while (christmasDrawingSection.childElementCount > 3) {
    christmasDrawingSection.removeChild(christmasDrawingSection.lastChild);
  }

  if (!currentUser) {
    christmasDrawingSection.classList.remove('user');
    christmasDrawingSection.classList.add('no-user');
    christmasDrawingHeadline.innerText = "Please select your name"
    christmasDrawingSubline.innerText = "(no cheating)"
    buildUserSelector();
  } else {
    christmasDrawingSection.classList.remove('no-user');
    christmasDrawingSection.classList.add('user');
    christmasDrawingHeadline.innerText = ""
    christmasDrawingSubline.innerText = ""
    buildNameRevealerFor(currentUser);
  }
}

function buildUserSelector() {
  const usersNameSelector = document.querySelector(".users-name-selector");

  memberList.forEach((member) => {
    const memberName = member.name.nick || member.name.first;

    const userNameOption = document.createElement("li");
    userNameOption.classList.add("user-name-option");
    userNameOption.setAttribute("data-user-name-option", member.id)

    const userFullName = document.createElement("h4");
    userFullName.innerText = memberName;
    userNameOption.appendChild(userFullName);

    userNameOption.addEventListener("click", (event) => {
      currentUser = event.target.dataset.userNameOption;
      window.localStorage.setItem("user", currentUser);
      initializeChristmasDrawSection();
    });

    usersNameSelector.appendChild(userNameOption);
  })
}

function buildNameRevealerFor(userId) {
  const user = memberList.find((member) => {
    return member.id === userId;
  })
  const christmasDrawingSection = document.querySelector(".christmas-drawing");
  const christmasDrawingHeadline = document.querySelector(".christmas-drawing h2");
  const christmasDrawingSubline = document.querySelector(".christmas-drawing h3");

  christmasDrawingHeadline.innerText = `${user.name.full}`
  christmasDrawingSubline.innerText = `If you're not ${user.name.nick || user.name.first}, you're in the wrong place.`

  const revealerElement = document.createElement("div");
  revealerElement.classList.add("christmas-drawing-revealer");

  const thatIsMeButton = document.createElement("button");
  thatIsMeButton.innerText = "That is me";
  thatIsMeButton.classList.add("yes-me");

  thatIsMeButton.addEventListener("click", () => {
    revealerElement.classList.add("hidden");
    christmasDrawingHeadline.innerText = `${user.name.nick || user.name.first}`
    christmasDrawingSubline.classList.add("hidden");
    document.querySelector(".drawn-name").classList.remove("hidden");
  })

  const notMeButton = document.createElement("button");
  notMeButton.innerText = "That is not me";
  notMeButton.classList.add("not-me");

  notMeButton.addEventListener("click", () => {
    currentUser = null;
    initializeChristmasDrawSection();
  })

  revealerElement.appendChild(thatIsMeButton);
  revealerElement.appendChild(notMeButton);

  const drawnNameSection = document.createElement("div");
  drawnNameSection.classList.add("drawn-name", "hidden");

  const drawnNameHeadline = document.createElement("h4");
  drawnNameHeadline.innerText = "you drew";

  const drawnNameElement = document.createElement("h2");
  drawnNameElement.innerText = `${user.secretSanta.currentDrawing}`;

  drawnNameSection.appendChild(drawnNameHeadline);
  drawnNameSection.appendChild(drawnNameElement);

  christmasDrawingSection.appendChild(revealerElement);
  christmasDrawingSection.appendChild(drawnNameSection);
}
