const lastUpdate = document.getElementById("lastUpdate");

if (lastUpdate) {
  lastUpdate.textContent = new Date(document.lastModified).toLocaleDateString();
}

const toggle = document.getElementById("navToggle");
const wrap = document.getElementById("navWrap");

if (toggle && wrap) {
  toggle.addEventListener("click", () => {
    const open = wrap.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
