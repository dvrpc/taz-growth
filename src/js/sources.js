const loadSources = async (map) => {
  map.addSource("taz", {
    type: "vector",
    url: "https://tiles.dvrpc.org/data/taz-growth.json",
  });

  map.addSource("rail-stations", {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/cf49c62fbc17430aa818e900556d207e_0.geojson",
  });

  map.addSource("rail-lines", {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/7ebff6bc356d4fa28d4a7e4147d03b32_0.geojson",
  });
};

export { loadSources };
