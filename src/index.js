import { makeMap } from "./js/makeMap";
// import { loadSources } from "./js/sources";
// import { loadLayers } from "./js/layers";

import "./js/accordion";
import "./style.css";

const map = makeMap();
// const floatingGraphs = document.getElementById("floating-graphs");

map.on("load", async () => {
  //   await loadSources(map);
  //   loadLayers(map);
});
