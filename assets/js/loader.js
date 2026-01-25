// loader.js
function loadSection(sectionId) {
  fetch(`assets/pages/${sectionId}.html`)
    .then(res => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
    })
    .then(html => {
      const section = document.getElementById(sectionId);
      if (section) section.innerHTML = html;
    })
    .catch(() => {
      document.getElementById(sectionId).innerHTML = "<p>Section not found</p>";
    });
}

// Load all sections dynamically
["about", "experience",  "projects", "contact",'home'].forEach(loadSection);
