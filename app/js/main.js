/*jshint esversion: 6 */
const db = firebase.firestore();
const memberList = [];
let memberListReady = false;

db.collection("members").get()
  .then((members) => {
    members.forEach((member) => {
      memberList.push(member.data());
    })

    memberListReady = true;
    initialize();
  })
  .catch((error) => {
    console.error(error);
  })

const initialize = () => {
  document.querySelector(".user-form-button").addEventListener("click", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector(".name-input");
    const nameElement = document.querySelector(".user-info .name");
    const familyElement = document.querySelector(".user-info .family");

    const name = nameInput.value;

    const foundMember = memberList.find((member) => {
      return member.name.full.toLowerCase().includes(name)
    })

    nameElement.innerText = foundMember.name.full;
    familyElement.innerText = foundMember.family;
  })
}
