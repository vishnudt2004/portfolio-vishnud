// Scroll & Overflow Utilities

const scrollIntoTop = (e) => {
  e && e.preventDefault();
  window.scrollTo(0, 0);
};

const scrollIntoSection = (
  e,
  id, // HTML id attribute
) => {
  e && e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const scrollDown = (
  top = window.innerHeight, // defalut: 100vh
) => {
  window.scrollBy({ top, behavior: "smooth" });
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
  scrollDown,
  setHTMLOverflowY,
  addArtificialDelay,
};
