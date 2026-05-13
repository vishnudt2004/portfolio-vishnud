const Loader = ({ text = "LOADING" }) => (
  <div
    className="relative grid min-h-svh place-items-center font-semibold tracking-widest text-(--text-color-g)/50"
    role="status"
    aria-live="polite"
    aria-busy="true"
  >
    <span>{text}</span>
    <span className="loader-animation absolute top-1/2 left-1/2 -translate-1/2 overflow-hidden text-(--text-color-g)">
      {text}
    </span>
  </div>
);

export default Loader;
