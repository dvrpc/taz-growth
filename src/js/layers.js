const loadLayers = (map) => {
  map.addLayer({
    id: "taz-polys",
    type: "line",
    source: "taz",
    "source-layer": "taz_polygons",
    paint: {
      "line-opacity": 0.2,
      "line-width": 0.2,
      "line-color": "blue",
    },
  });

  map.addLayer({
    id: "rr-routes",
    type: "line",
    source: "rail-lines",
    paint: {
      "line-opacity": 1,
      "line-width": 1.5,
    },
  });

  map.addLayer({
    id: "rr-stations",
    type: "circle",
    source: "rail-stations",
    paint: {
      "circle-opacity": 1,
      "circle-radius": 4,
    },
  });

  map.addLayer({
    id: "taz-total",
    type: "circle",
    source: "taz",
    "source-layer": "taz_centroids_w_total_change",
    paint: {
      "circle-opacity": 0.1,
      "circle-radius": ["/", ["get", "population"], 100],
      "circle-stroke-opacity": 0.5,
      "circle-stroke-width": 1,
    },
  });
};

export { loadLayers };
