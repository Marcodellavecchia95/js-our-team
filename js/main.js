// ELEMENTI
const containerEl = document.querySelector(".container");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];
const member = teamMembers[0];
// CARD CREATE FUNCTION
const cardCreateHTML = (name, role, email, img) => {
  return `<div class= "team-card">
          <div class= "card-image">
          <img src ="${img}" alt= "${name}"/>
          </div>
          <div class = "card-text">
          <h3>${name}</h3>
          <p>${role}</p>
          <p>${email}</p>
          </div>
          </div>`;
};

for (const member of teamMembers) {
  const { name, role, email, img } = member;
  containerEl.innerHTML += cardCreateHTML(name, role, email, img);
}
