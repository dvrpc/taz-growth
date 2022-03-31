import { add_popup_to_map, clear_popups } from "./popups";

const titleCase = (str) => {
  // from https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

const add_popup_to_tazs = (map) => {
  [
    "taz-total-pop",
    "taz-total-emp-positive",
    "taz-total-emp-negative",
    "taz-pct-pop",
    "taz-pct-emp-positive",
    "taz-pct-emp-negative",
  ].forEach((layername) => {
    map.on("mousemove", layername, (e) => {
      clear_popups();
      let props = e.features[0].properties;
      let pop = "";
      let emp = "";
      if (layername.includes("pct")) {
        pop =
          Number.parseFloat(props.population).toFixed(2) +
          "% growth in residential population";
        emp =
          Number.parseFloat(props.total_employment).toFixed(2) +
          "% growth in employment";
      } else {
        pop =
          Number.parseFloat(props.population).toFixed(0) +
          " additional residents";
        emp =
          Number.parseFloat(props.total_employment).toFixed(0) +
          " additional jobs";
      }

      let msg =
        "<h3> TAZ #" +
        props.tazt +
        "</h3>" +
        "<p>" +
        titleCase(props.mun_name) +
        ", " +
        props.co_name +
        " County</p><ul><li>" +
        pop +
        "</li><li>" +
        emp +
        " </li></ul>";

      add_popup_to_map(map, msg, e);
    });
    map.on("mouseleave", layername, () => {
      clear_popups();
    });
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
