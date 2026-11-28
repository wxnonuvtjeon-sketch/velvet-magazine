const $ = (selector) => document.querySelector(selector);
const teamGrid = $("#teamGrid");
const departmentFilter = $("#departmentFilter");
const teamSearch = $("#teamSearch");
const profileDialog = $("#profileDialog");

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

function renderDepartments() {
  siteData.departments.forEach(dept => {
    const option = document.createElement("option");
    option.value = dept.name;
    option.textContent = dept.name;
    departmentFilter.append(option);
  });
  $("#departmentGrid").innerHTML = siteData.departments.map((dept, index) => `
    <article class="department-card">
      <span>0${index + 1}</span><h3>${escapeHTML(dept.name)}</h3>
      <p>${escapeHTML(dept.description)}</p>
    </article>`).join("");
}

function employeeCard(employee, index) {
  const portrait = employee.photo
    ? `<img src="${escapeHTML(employee.photo)}" alt="${escapeHTML(employee.name)}">`
    : `<span>${escapeHTML(employee.initials || employee.name.split(" ").map(n => n[0]).join("").slice(0,2))}</span>`;
  return `<button class="person-card" data-person="${index}" aria-label="View ${escapeHTML(employee.name)} profile">
    <div class="person-photo">${portrait}<span class="photo-number">V / ${String(index + 1).padStart(2,"0")}</span></div>
    <div class="person-meta"><h3>${escapeHTML(employee.name)}</h3><p>${escapeHTML(employee.role)}</p><small>${escapeHTML(employee.department)}</small></div>
  </button>`;
}

function renderTeam() {
  const search = teamSearch.value.trim().toLowerCase();
  const dept = departmentFilter.value;
  const filtered = siteData.employees
    .map((employee, index) => ({ employee, index }))
    .filter(({employee}) => (dept === "All" || employee.department === dept))
    .filter(({employee}) => `${employee.name} ${employee.role} ${employee.department}`.toLowerCase().includes(search));

  teamGrid.innerHTML = filtered.length
    ? filtered.map(({employee,index}) => employeeCard(employee,index)).join("")
    : `<p class="empty-state">No team members found. Try another search.</p>`;

  teamGrid.querySelectorAll("[data-person]").forEach(button => {
    button.addEventListener("click", () => openProfile(Number(button.dataset.person)));
  });
}

function openProfile(index) {
  const person = siteData.employees[index];
  if (!person) return;
  const portrait = person.photo
    ? `<img class="dialog-portrait" src="${escapeHTML(person.photo)}" alt="${escapeHTML(person.name)}">`
    : `<div class="dialog-portrait portrait-placeholder">${escapeHTML(person.initials || "V")}</div>`;
  $("#profileContent").innerHTML = `
    <div class="profile-layout">${portrait}<div class="profile-details">
      <p class="eyebrow">VELVET PEOPLE / ${escapeHTML(person.department)}</p>
      <h2>${escapeHTML(person.name)}</h2><p class="profile-role">${escapeHTML(person.role)}</p>
      <p class="profile-bio">${escapeHTML(person.bio)}</p>
      <dl><dt>JOINED VELVET</dt><dd>${escapeHTML(person.joined || "—")}</dd>
      <dt>EDUCATION</dt><dd>${escapeHTML(person.education || "To be announced.")}</dd>
      <dt>CORE SKILLS</dt><dd>${(person.skills || []).map(escapeHTML).join(" · ") || "To be announced."}</dd></dl>
    </div></div>`;
  profileDialog.showModal();
}

teamSearch.addEventListener("input", renderTeam);
departmentFilter.addEventListener("change", renderTeam);
$("#dialogClose").addEventListener("click", () => profileDialog.close());
profileDialog.addEventListener("click", event => {
  if (event.target === profileDialog) profileDialog.close();
});
$("#menuToggle").addEventListener("click", () => $("#mainNav").classList.toggle("open"));
$("#mainNav").querySelectorAll("a").forEach(link => link.addEventListener("click", () => $("#mainNav").classList.remove("open")));

renderDepartments();
renderTeam();
