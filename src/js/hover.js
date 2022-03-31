import { add_popup_to_map, clear_popups } from "./popups";

const add_popup_to_tazs = (map) => {
  map.on("mousemove", "taz-total", (e) => {
    clear_popups();
    let msg =
      "<p>" +
      Number.parseFloat(e.features[0].properties.population).toFixed(0) +
      " additional residents</p>";

    msg +=
      "<p>" +
      Number.parseFloat(e.features[0].properties.total_employment).toFixed(0) +
      " additional jobs</p>";

    add_popup_to_map(map, msg, e);
  });
  map.on("mouseleave", "taz-total", () => {
    clear_popups();
  });

  map.on("mousemove", "rr-stations", (e) => {
    clear_popups();
    let props = e.features[0].properties;
    let msg =
      "<h3>" + props.Station_Na + "</h3> <p>" + props.Line_Name + "</p>";

    add_popup_to_map(map, msg, e);
  });
  map.on("mouseleave", "rr-stations", () => {
    clear_popups();
  });
};

const wire_mouse_hover = (map) => {
  add_popup_to_tazs(map);
};

export { wire_mouse_hover };
