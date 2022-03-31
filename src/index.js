import { makeMap } from "./js/makeMap";
import { loadSources } from "./js/sources";
import { loadLayers } from "./js/layers";
import { wire_mouse_hover } from "./js/hover";
import { update_map_style } from "./js/click";

import "./js/accordion";
import "./js/click";
import "./style.css";

const map = makeMap();
// const floatingGraphs = document.getElementById("floating-graphs");

map.on("load", async () => {
  await loadSources(map);
  loadLayers(map);
  wire_mouse_hover(map);

  update_map_style(map);
});
