// loader.js

const title = document.querySelector("title").innerText;

const webDev = ["about", "experience", "webDev", "contact", "home", "skills"];
const dataAnalyst = [
  "about",
  "experience",
  "dataAna",
  "contact",
  "home",
  "skills",
];
const job = ["about", "experience", "blog", "contact", "home", "skills"];

function loadSection(sectionId) {
  fetch(`assets/pages/${sectionId}.html`)
    .then((res) => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
    })
    .then((html) => {
      const section = document.getElementById(sectionId);
      if (section) section.innerHTML = html;
    })
    .catch(() => {
      document.getElementById(sectionId).innerHTML = "<p>Section not found</p>";
    });
}

if (title === "Portfolio-dataAnalyst") {
  dataAnalyst.forEach(loadSection);
} else if (title === "Portfolio-webDev") {
  webDev.forEach(loadSection);
} else {
  job.forEach(loadSection);
}

// Load all sections dynamically
