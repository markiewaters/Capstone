import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;
  afterRender();
  router.updatePageLinks();
}

function afterRender() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  // if (state.view === "Home") {
  //   /*
  //     Please refer to the documentation:
  //     https://developer.mapquest.com/documentation/mapquest-js/v1.3/
  //   */

  //   L.mapquest.key = "KEY";

  //   // 'map' refers to a <div> element with the ID map
  //   L.mapquest.map("map", {
  //     center: [37.7749, -122.4194],
  //     layers: L.mapquest.tileLayer("map"),
  //     zoom: 12,
  //   });

  //   L.mapquest.key = process.env.MAPQUEST_API_KEY;

  //   const baseLayer = L.mapquest.tileLayer("map");
  //   const precipitationLayer = L.tileLayer(
  //     `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
  //     { layer: "precipitation_new" }
  //   );
  //   const temperatureLayer = L.tileLayer(
  //     `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
  //     { layer: "temp_new" }
  //   );
  //   const windLayer = L.tileLayer(
  //     `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
  //     { layer: "wind_new" }
  //   );

  //   // 'map' refers to a <div> element with the ID map
  //   const map = L.mapquest.map("map", {
  //     center: [42, -71],
  //     layers: baseLayer,
  //     zoom: 5,
  //   });

  //   L.mapquest
  //     .textMarker([42, -71], {
  //       text: "Sample Marker",
  //       subtext: "Click Here for More Details",
  //       position: "right",
  //       type: "marker",
  //       hover: "Howdy",
  //       icon: {
  //         primaryColor: "#333333",
  //         secondaryColor: "#333333",
  //         size: "sm",
  //       },
  //     })
  //     .addTo(map);

  //   L.marker([30, -90], {
  //     icon: L.mapquest.icons.marker({
  //       primaryColor: "#22407F",
  //       secondaryColor: "#3B5998",
  //       shadow: true,
  //       size: "md",
  //       // symbol: 'T'
  //     }),
  //   }).addTo(map);

  //   map.addControl(L.mapquest.control());

  //   L.mapquest
  //     .directionsControl({
  //       routeSummary: {
  //         enabled: false,
  //       },
  //       narrativeControl: {
  //         enabled: true,
  //         compactResults: false,
  //       },
  //     })
  //     .addTo(map);

  //   // https://leafletjs.com/reference.html#control-layers
  //   L.control
  //     .layers(
  //       {},
  //       {
  //         Temperature: temperatureLayer,
  //         Precipitation: precipitationLayer,
  //         Wind: windLayer,
  //       }
  //     )
  //     .addTo(map);
  // }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=knoxville`
          )
          .then((response) => {
            const kelvinToFahrenheit = (kelvinTemp) =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main,
            };
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: (params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  },
});

router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();
