import { useRef, useEffect } from "react";
import { useVideoListing } from "../../../context";

const ToggleLatestPalette = ({
  setTogglelatestpalette,
  toggleLatestPalette,
}) => {
  const LatestRef = useRef();
  useEffect(() => {
    const closePalette = (e) => {
      if (
        toggleLatestPalette &&
        LatestRef.current &&
        !LatestRef.current.contains(e.target)
      ) {
        setTogglelatestpalette(false);
      }
    };
    document.addEventListener("mousedown", closePalette);
    return () => document.removeEventListener("mousedown", closePalette);
  }, [setTogglelatestpalette]);

  const {
    videolistingState: { sortBy },
    videolistingDispatch,
  } = useVideoListing();
  return (
    <div className="toggleLatest" ref={LatestRef}>
      <label>
        <input
          type="radio"
          name="latest"
          checked={sortBy === "latesttooldest"}
          value="latesttooldest"
          onChange={(e) => {
            videolistingDispatch({
              type: "SORT_BY_DATE",
              payload: { sortBy: e.target.value },
            });
          }}
        ></input>
        Sort By Latest
      </label>
      <label>
        <input
          type="radio"
          name="latest"
         checked={sortBy === "oldesttolatest"}
          value="oldesttolatest"
          onChange={(e) => {
            videolistingDispatch({
              type: "SORT_BY_DATE",
              payload: { sortBy: e.target.value },
            });
          }}
        ></input>
        Sort By Oldest
      </label>
      <span
        class="material-icons modal_icon latest_close"
        onClick={() => setTogglelatestpalette(false)}
      >
        highlight_off
      </span>
    </div>
  );
};
export { ToggleLatestPalette };
