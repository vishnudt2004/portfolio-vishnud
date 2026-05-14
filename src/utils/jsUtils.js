// TEMP: Consolidated utils — split by domain when scale or reuse increases.

const scrollToSection = (id, offset = -65) => {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const take = (arr, max) => (max ? arr.slice(0, max) : arr);

export { scrollToSection, take };
