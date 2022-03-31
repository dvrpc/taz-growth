let select_variable = document.getElementById("variable");

const update_map_style = (map) => {
  select_variable.addEventListener("change", () => {
    map.setPaintProperty("taz-total", "circle-radius", [
      "/",
      ["get", select_variable.value],
      100,
    ]);
  });
};

export { update_map_style };
