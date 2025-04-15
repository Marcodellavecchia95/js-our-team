// ELEMENTI
const rowEl = document.querySelector(".row");
const inputForm = document.getElementById("input-form");
const formButton = document.getElementById("form-button");
const formName = document.getElementById("name-input");
const formRole = document.getElementById("role-input");
const formEmail = document.getElementById("email-input");
const formImage = document.getElementById("image-input");

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
  return `
          <div class = "col-lg-4 col-md-6 col-sm-12">
          <div class= "card bg-black text-white my-3 py-3"   style="width: 18rem;"  >
          <div class= "card-image">
          <img src ="${img}" alt= "${name}"/>
          </div>
          <div class = "card-text " >
          <h3>${name}</h3>
          <p>${role}</p>
          <a class = "fw-bold" href="#">${email}</a>
          </div>
          </div>
          </div>`;
};

for (const member of teamMembers) {
  const { name, role, email, img } = member;
  rowEl.innerHTML += cardCreateHTML(name, role, email, img);
}

// INPUT;

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = formName.value;
  const role = formRole.value;
  const email = formEmail.value;
  const img = formImage.value;

  let newMember = {
    name,
    role,
    email,
    img,
  };

  rowEl.innerHTML += cardCreateHTML(name, role, email, img);
});
