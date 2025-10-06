// Scroll & Overflow Utilities

const scrollIntoTop = (e) => {
  e && e.preventDefault();
  window.scrollTo(0, 0);
};

const scrollIntoSection = (e, id, offset = -65) => {
  e?.preventDefault();

  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const setHTMLOverflowY = (condition) => {
  document.documentElement.style.overflowY = condition ? "hidden" : "auto";
};

function addArtificialDelay(action = () => {}, delay = 200) {
  setTimeout(action, delay);
}

export {
  scrollIntoTop,
  scrollIntoSection,
  setHTMLOverflowY,
  addArtificialDelay,
};
