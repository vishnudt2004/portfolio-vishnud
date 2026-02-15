// Scroll & Overflow Utilities

const scrollIntoTop = (e) => {
  e && e.preventDefault();
  window.scrollTo(0, 0);
};

const scrollToSection = (id, offset = -65) => {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const setHTMLOverflowY = (condition) => {
  document.documentElement.style.overflowY = condition ? "hidden" : "auto";
};

const take = (arr, max) => (max ? arr.slice(0, max) : arr);

export { scrollIntoTop, scrollToSection, setHTMLOverflowY, take };
