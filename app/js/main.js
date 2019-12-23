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
