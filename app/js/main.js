/*jshint esversion: 6 */
const db = firebase.firestore();
const memberList = [];
let memberListReady = false;
let currentUser;

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
  buildUserNameSelector();
}

function setUpNavEvents() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      const navValue = event.target.dataset.optionValue;

      document.querySelectorAll(".active").forEach((each) => {
        each.classList.remove("active");
      });
      document.querySelector(`section.${navValue}`).classList.add("active");
    })
  })
}

function buildUserNameSelector() {
  const usersNameSelector = document.querySelector(".users-name-selector");

  memberList.forEach((member) => {
    const memberName = member.name.nick || member.name.first;

    const userNameOption = document.createElement("li");
    userNameOption.classList.add("user-name-option");
    userNameOption.setAttribute("data-user-name-option", member.id)

    const userFullName = document.createElement("h2");
    userFullName.innerText = memberName;
    userNameOption.appendChild(userFullName);

    userNameOption.addEventListener("click", (event) => {
      currentUser = event.target.dataset.userNameOption
      console.log("currentUser: ", currentUser);
    });

    usersNameSelector.appendChild(userNameOption);
  })
}
