const makeMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2FydG9kYmluYyIsImEiOiJja202bHN2OXMwcGYzMnFrbmNkMzVwMG5rIn0.Zb3J4JTdJS-oYNXlR3nvnQ";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-118.52511096276204, 34.03758718678557],
    zoom: 9.8,
  });

  deck.carto.setDefaultCredentials({
    apiBaseUrl: "https://gcp-us-east1.api.carto.com",
    apiVersion: deck.carto.API_VERSIONS.V3,
    accessToken:
      "eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfenRha201amQiLCJqdGkiOiJlNzA3MzBkZCJ9.hy-ibRwoB2um6m94-Qng_0GBxcGccRfVgxOwwbuQ_50",
  });

  return map;
};

export { makeMap };
