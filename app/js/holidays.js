const db = firebase.firestore();

const hosting = db.collection("hosting");

hosting.doc("thanksgiving").set({
  "2019": "Patricks",
  "2020": "Grosso Seltzers",
  "2021": "Grand",
  "2022": "Slaters",
  "2023": "Grosso Gasteyers",
  "2024": "Grossos",
  "2025": "Grosso Sippels",
  "2026": "Patricks",
  "2027": "Grosso Seltzers",
  "2028": "Grand",
  "2029": "Slaters",
  "2030": "Grosso Gasteyers"
});

hosting.doc("christmas-eve").set({
  "2019": "Grossos",
  "2020": "Grosso Sippels",
  "2021": "Patricks",
  "2022": "Grosso Seltzers",
  "2023": "Grand",
  "2024": "Slaters",
  "2025": "Grosso Gasteyers",
  "2026": "Grossos",
  "2027": "Grosso Sippels",
  "2028": "Patricks",
  "2029": "Grosso Seltzers",
  "2030": "Grand"
});
