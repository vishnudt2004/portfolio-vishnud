import { useEffect } from "react";

const useClickOutside = ({
  refs, // Accepts a single ref or a ref containing an array of DOM references to detect inside clicks
  callback, // Function to run on outside click
  active = false, // Boolean or array of booleans. Activates listener only if true / all true.
}) => {
  useEffect(() => {
    const isActive = Array.isArray(active) ? active.every(Boolean) : active;
    if (!isActive) return;

    if (!callback || typeof callback !== "function") {
      throw new Error("[useClickOutside]: callback must be a valid function.");
    }

    const handleClickOutside = (e) => {
      const refsArray = Array.isArray(refs?.current)
        ? refs.current
        : [refs?.current];

      const validRefs =
        !refsArray || refsArray.length === 0 || refsArray.every((ref) => !ref);
      if (validRefs) {
        throw new Error(
          "[useClickOutside]: Invalid or missing refs. Make sure the ref(s) are attached to DOM elements.",
        );
      }

      const clickedInside = refsArray.some((ref) => ref?.contains(e.target));

      if (!clickedInside) callback(e);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, callback, active]);
};

export default useClickOutside;
