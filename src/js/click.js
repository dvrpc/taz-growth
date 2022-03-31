let select_variable = document.getElementById("variable");

const update_map_style = (map) => {
  select_variable.addEventListener("change", () => {
    if (select_variable.value == "total population") {
      map.setLayoutProperty("taz-total-pop", "visibility", "visible");
      map.setLayoutProperty("taz-total-emp-positive", "visibility", "none");
      map.setLayoutProperty("taz-total-emp-negative", "visibility", "none");
      map.setLayoutProperty("taz-pct-pop", "visibility", "none");
      map.setLayoutProperty("taz-pct-emp-positive", "visibility", "none");
      map.setLayoutProperty("taz-pct-emp-negative", "visibility", "none");
    } else if (select_variable.value == "total employment") {
      map.setLayoutProperty("taz-total-pop", "visibility", "none");
      map.setLayoutProperty("taz-total-emp-positive", "visibility", "visible");
      map.setLayoutProperty("taz-total-emp-negative", "visibility", "visible");
      map.setLayoutProperty("taz-pct-pop", "visibility", "none");
      map.setLayoutProperty("taz-pct-emp-positive", "visibility", "none");
      map.setLayoutProperty("taz-pct-emp-negative", "visibility", "none");
    } else if (select_variable.value == "pct population") {
      map.setLayoutProperty("taz-total-pop", "visibility", "none");
      map.setLayoutProperty("taz-total-emp-positive", "visibility", "none");
      map.setLayoutProperty("taz-total-emp-negative", "visibility", "none");
      map.setLayoutProperty("taz-pct-pop", "visibility", "visible");
      map.setLayoutProperty("taz-pct-emp-positive", "visibility", "none");
      map.setLayoutProperty("taz-pct-emp-negative", "visibility", "none");
    } else if (select_variable.value == "pct employment") {
      map.setLayoutProperty("taz-total-pop", "visibility", "none");
      map.setLayoutProperty("taz-total-emp-positive", "visibility", "none");
      map.setLayoutProperty("taz-total-emp-negative", "visibility", "none");
      map.setLayoutProperty("taz-pct-pop", "visibility", "none");
      map.setLayoutProperty("taz-pct-emp-positive", "visibility", "visible");
      map.setLayoutProperty("taz-pct-emp-negative", "visibility", "visible");
    }
  });
};

export { update_map_style };
