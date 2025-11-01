// ===== Dark Mode Toggle =====
const btn = document.querySelector("nav button");

btn.onclick = () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
};

// ===== Smooth Scroll Fix for Sticky Header =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      const top = target.offsetTop - 70; // adjust for sticky header
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});
