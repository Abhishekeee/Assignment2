const data = [
  {
    id: 4450,
    name: "Bala Tagore",
    email: "tagore_bala@muller-fahey.io",
    gender: "male",
    status: "active",
  },
  {
    id: 4449,
    name: "Dron Ahluwalia",
    email: "ahluwalia_dron@thiel-hamill.info",
    gender: "female",
    status: "active",
  },
  {
    id: 4447,
    name: "Dr. Mukesh Marar",
    email: "dr_mukesh_marar@schmidt.net",
    gender: "male",
    status: "inactive",
  },
  {
    id: 4446,
    name: "Gov. Anagh Shah",
    email: "gov_shah_anagh@wehner.name",
    gender: "female",
    status: "active",
  },
  {
    id: 4445,
    name: "Dhara Bhattacharya",
    email: "dhara_bhattacharya@dicki.org",
    gender: "female",
    status: "active",
  },
  {
    id: 4444,
    name: "Chitramala Patil",
    email: "patil_chitramala@stracke-halvorson.info",
    gender: "female",
    status: "active",
  },
  {
    id: 4443,
    name: "Gayatri Gandhi III",
    email: "gayatri_gandhi_iii@pagac.io",
    gender: "male",
    status: "inactive",
  },
];

function genderCount(obj) {
  const male = obj.reduce((sum, curVal) => sum + (curVal.gender === "male"), 0);
  return { male, female: obj.length - male };
}

console.log("Male=", genderCount(data));
