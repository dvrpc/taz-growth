const loadLayers = (map) => {
  map.addLayer({
    id: "taz-polys",
    type: "line",
    source: "taz",
    "source-layer": "taz_polygons",
    paint: {
      "line-opacity": 0.2,
      "line-width": 0.4,
      "line-color": "gray",
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
    id: "taz-total-pop",
    type: "circle",
    source: "taz",
    "source-layer": "taz_centroids_w_total_change",
    paint: {
      "circle-opacity": 0.1,
      "circle-stroke-opacity": 0.5,
      "circle-radius": ["/", ["get", "population"], 100],
      "circle-stroke-width": 1,
      "circle-color": "blue",
      "circle-stroke-color": "blue",
    },
    filter: [">", "population", 0],
  });

  map.addLayer({
    id: "taz-total-emp-positive",
    type: "circle",
    source: "taz",
    "source-layer": "taz_centroids_w_total_change",
    paint: {
      "circle-opacity": 0.1,
      "circle-stroke-opacity": 0.5,
      "circle-radius": ["/", ["get", "total_employment"], 100],
      "circle-stroke-width": 1,
      "circle-color": "blue",
      "circle-stroke-color": "blue",
    },
    layout: {
      visibility: "none",
    },

    filter: [">", "total_employment", 0],
  });

  map.addLayer({
    id: "taz-total-emp-negative",
    type: "circle",
    source: "taz",
    "source-layer": "taz_centroids_w_total_change",
    paint: {
      "circle-opacity": 0.2,
      "circle-stroke-opacity": 0.6,
      "circle-radius": ["/", ["get", "total_employment"], -100],
      "circle-stroke-width": 1,
      "circle-color": "red",
      "circle-stroke-color": "red",
    },
    layout: {
      visibility: "none",
    },

    filter: ["<=", "total_employment", -1],
  });

  map.addLayer({
    id: "taz-pct-pop",
    type: "circle",
    source: "taz",
    "source-layer": "taz_centroids_w_pct_change",
    paint: {
      "circle-opacity": 0.1,
      "circle-stroke-opacity": 0.5,
      "circle-radius": ["/", ["get", "population"], 100],
      "circle-stroke-width": 1,
      "circle-color": "blue",
      "circle-stroke-color": "blue",
    },
    layout: {
      visibility: "none",
    },

    filter: [">", "population", 0],
  });

  map.addLayer({
    id: "taz-pct-emp-positive",
    type: "circle",
    source: "taz",
    "source-layer": "taz_centroids_w_pct_change",
    paint: {
      "circle-opacity": 0.1,
      "circle-stroke-opacity": 0.5,
      "circle-radius": ["min", ["/", ["get", "total_employment"], 100], 300],
      "circle-stroke-width": 1,
      "circle-color": "blue",
      "circle-stroke-color": "blue",
    },
    layout: {
      visibility: "none",
    },

    filter: [">", "total_employment", 0],
  });

  map.addLayer({
    id: "taz-pct-emp-negative",
    type: "circle",
    source: "taz",
    "source-layer": "taz_centroids_w_pct_change",
    paint: {
      "circle-opacity": 0.2,
      "circle-stroke-opacity": 0.6,
      "circle-radius": ["/", ["get", "total_employment"], -100],
      "circle-stroke-width": 1,
      "circle-color": "red",
      "circle-stroke-color": "red",
    },
    layout: {
      visibility: "none",
    },

    filter: ["<=", "total_employment", -1],
  });
};

export { loadLayers };
