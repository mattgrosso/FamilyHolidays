/*jshint esversion: 6 */

var db = firebase.firestore();

var members = db.collection("members");

members.doc().set({
  name: {
    first: "Marie",
    middle: "Adele",
    last: "Dennis",
    nick: "Grand",
    full: "Marie Dennis"
  },
  family: "Dennis"
});

members.doc().set({
  name: {
    first: "Elizabeth",
    middle: "Ann",
    last: "Slater",
    nick: "BethAnn",
    full: "BethAnn Slater"
  },
  family: "Slater"
});

members.doc().set({
  name: {
    first: "Robert",
    middle: "Rucker",
    last: "Slater",
    nick: "Rucker",
    full: "Rucker Slater"
  },
  family: "Slater"
});

members.doc().set({
  name: {
    first: "Cassella",
    middle: "Marie",
    last: "Slater",
    full: "Cassella Slater"
  },
  family: "Slater"
});

members.doc().set({
  name: {
    first: "Margaret",
    middle: "Ann",
    last: "Smith",
    nick: "MegAnn",
    full: "MegAnn Smith"
  },
  family: "Slater"
});

members.doc().set({
  name: {
    first: "Adam",
    last: "Smith",
    full: "Adam Smith"
  },
  family: "Slater"
});

members.doc().set({
  name: {
    first: "Catherine",
    middle: "Adele",
    last: "Slater",
    nick: "Cati Adele",
    full: "Cati Adele Slater"
  },
  family: "Slater"
});

members.doc().set({
  name: {
    first: "Robert",
    middle: "Rucker",
    last: "Slater",
    nick: "Bobby",
    full: "Bobby Slater"
  },
  family: "Slater"
});

members.doc().set({
  name: {
    first: "Catherine",
    middle: "Marie",
    last: "Grosso",
    nick: "Cathi",
    full: "Cathi Grosso"
  },
  family: "Grosso-Gasteyer"
});

members.doc().set({
  name: {
    first: "Stephen",
    last: "Gasteyer",
    full: "Stephen Gasteyer"
  },
  family: "Grosso-Gasteyer"
});

members.doc().set({
  name: {
    first: "Marie Adele",
    last: "Gasteyer Grosso",
    full: "Marie Adele Gasteyer Grosso"
  },
  family: "Grosso-Gasteyer"
});

members.doc().set({
  name: {
    first: "Michael",
    middle: "Edward",
    last: "Grosso",
    full: "Michael Grosso"
  },
  family: "Grosso"
});

members.doc().set({
  name: {
    first: "Lesley",
    last: "Grosso",
    full: "Lesley Grosso"
  },
  family: "Grosso"
});

members.doc().set({
  name: {
    first: "Felix",
    last: "Grosso",
    full: "Felix Grosso"
  },
  family: "Grosso"
});

members.doc().set({
  name: {
    first: "David",
    middle: "Paul",
    last: "Grosso",
    full: "David Grosso"
  },
  family: "Grosso-Sippel"
});

members.doc().set({
  name: {
    first: "Serra",
    last: "Sippel",
    full: "Serra Sippel"
  },
  family: "Grosso-Sippel"
});

members.doc().set({
  name: {
    first: "Christine",
    middle: "A",
    last: "Patrick",
    full: "Christine Patrick"
  },
  family: "Patrick"
});

members.doc().set({
  name: {
    first: "Christopher",
    middle: "Brian",
    last: "Patrick",
    nick: "Brian",
    full: "Brian Patrick"
  },
  family: "Patrick"
});

members.doc().set({
  name: {
    first: "Lauren",
    middle: "Madeline",
    last: "Patrick",
    full: "Lauren Patrick"
  },
  family: "Patrick"
});

members.doc().set({
  name: {
    first: "Jonathon",
    last: "Patrick",
    full: "Jonathon Patrick"
  },
  family: "Patrick"
});

members.doc().set({
  name: {
    first: "Matthew",
    middle: "John",
    last: "Grosso",
    nick: "Matt",
    full: "Matthew Grosso"
  },
  family: "Grosso-Seltzer"
});

members.doc().set({
  name: {
    first: "Carrie",
    middle: "Elizabeth",
    last: "Seltzer",
    full: "Carrie Seltzer"
  },
  family: "Grosso-Seltzer"
});

members.doc().set({
  name: {
    first: "Natalie",
    middle: "Rose",
    last: "Grosso",
    full: "Natalie Grosso"
  },
  family: "Grosso-Seltzer"
});

members.get().then((members) => {
  members.forEach((member) => {
    console.log("member.data(): ", member.data());
  })
})
