const db = firebase.firestore();

const members = db.collection("members");

members.doc("marie-dennis").set({
  name: {
    first: "Marie",
    middle: "Adele",
    last: "Dennis",
    nick: "Grand",
    full: "Marie Dennis"
  },
  family: "Dennis",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("bethann-slater").set({
  name: {
    first: "Elizabeth",
    middle: "Ann",
    last: "Slater",
    nick: "BethAnn",
    full: "BethAnn Slater"
  },
  family: "Slater",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("rucker-slater").set({
  name: {
    first: "Robert",
    middle: "Rucker",
    last: "Slater",
    nick: "Rucker",
    full: "Rucker Slater"
  },
  family: "Slater",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("cassella-slater").set({
  name: {
    first: "Cassella",
    middle: "Marie",
    last: "Slater",
    full: "Cassella Slater"
  },
  family: "Slater",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("megann-smith").set({
  name: {
    first: "Margaret",
    middle: "Ann",
    last: "Smith",
    nick: "MegAnn",
    full: "MegAnn Smith"
  },
  family: "Slater",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("adam-smith").set({
  name: {
    first: "Adam",
    last: "Smith",
    full: "Adam Smith"
  },
  family: "Slater",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("cati-adele-slater").set({
  name: {
    first: "Catherine",
    middle: "Adele",
    last: "Slater",
    nick: "Cati Adele",
    full: "Cati Adele Slater"
  },
  family: "Slater",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("bobby-slater").set({
  name: {
    first: "Robert",
    middle: "Rucker",
    last: "Slater",
    nick: "Bobby",
    full: "Bobby Slater"
  },
  family: "Slater",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("cathi-grosso").set({
  name: {
    first: "Catherine",
    middle: "Marie",
    last: "Grosso",
    nick: "Cathi",
    full: "Cathi Grosso"
  },
  family: "Grosso-Gasteyer",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("stephen-gasteyer").set({
  name: {
    first: "Stephen",
    last: "Gasteyer",
    full: "Stephen Gasteyer"
  },
  family: "Grosso-Gasteyer",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("marie-adele-gasteyer-grosso").set({
  name: {
    first: "Marie Adele",
    last: "Gasteyer Grosso",
    full: "Marie Adele Gasteyer Grosso"
  },
  family: "Grosso-Gasteyer",
  secretSanta: {
    pool: "kids"
  }
});

members.doc("michael-grosso").set({
  name: {
    first: "Michael",
    middle: "Edward",
    last: "Grosso",
    full: "Michael Grosso"
  },
  family: "Grosso",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("lesley-grosso").set({
  name: {
    first: "Lesley",
    last: "Grosso",
    full: "Lesley Grosso"
  },
  family: "Grosso",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("felix-grosso").set({
  name: {
    first: "Felix",
    last: "Grosso",
    full: "Felix Grosso"
  },
  family: "Grosso",
  secretSanta: {
    pool: "kids"
  }
});

members.doc("david-grosso").set({
  name: {
    first: "David",
    middle: "Paul",
    last: "Grosso",
    full: "David Grosso"
  },
  family: "Grosso-Sippel",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("serra-sippel").set({
  name: {
    first: "Serra",
    last: "Sippel",
    full: "Serra Sippel"
  },
  family: "Grosso-Sippel",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("christine-patrick").set({
  name: {
    first: "Christine",
    middle: "A",
    last: "Patrick",
    full: "Christine Patrick"
  },
  family: "Patrick",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("brian-patrick").set({
  name: {
    first: "Christopher",
    middle: "Brian",
    last: "Patrick",
    nick: "Brian",
    full: "Brian Patrick"
  },
  family: "Patrick",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("lauren-patrick").set({
  name: {
    first: "Lauren",
    middle: "Madeline",
    last: "Patrick",
    full: "Lauren Patrick"
  },
  family: "Patrick",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("jonathon-patrick").set({
  name: {
    first: "Jonathon",
    last: "Patrick",
    full: "Jonathon Patrick"
  },
  family: "Patrick",
  secretSanta: {
    pool: "kids"
  }
});

members.doc("matthew-grosso").set({
  name: {
    first: "Matthew",
    middle: "John",
    last: "Grosso",
    nick: "Matt",
    full: "Matthew Grosso"
  },
  family: "Grosso-Seltzer",
  secretSanta: {
    pool: "adults"
  }
});

  members.doc("carrie-seltzer").set({
  name: {
    first: "Carrie",
    middle: "Elizabeth",
    last: "Seltzer",
    full: "Carrie Seltzer"
  },
  family: "Grosso-Seltzer",
  secretSanta: {
    pool: "adults"
  }
});

members.doc("natalie-grosso").set({
  name: {
    first: "Natalie",
    middle: "Rose",
    last: "Grosso",
    full: "Natalie Grosso"
  },
  family: "Grosso-Seltzer",
  secretSanta: {
    pool: "kids"
  }
});
