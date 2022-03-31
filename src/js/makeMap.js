const makeMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2FydG9kYmluYyIsImEiOiJja202bHN2OXMwcGYzMnFrbmNkMzVwMG5rIn0.Zb3J4JTdJS-oYNXlR3nvnQ";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-75.17096222221605, 39.95641131210537],
    zoom: 9.4,
  });

  return map;
};

export { makeMap };
