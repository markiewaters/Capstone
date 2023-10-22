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
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  // Hard Coded Locations
  if (state.view === "Home") {
    L.mapquest.key = process.env.MAPQUEST_API_KEY;

    let map = L.mapquest.map("map", {
      center: [38.134557, -100.634766],
      layers: L.mapquest.tileLayer("map"),
      zoom: 5
    });

    // Pinned Locations
    L.marker([37.86366, -122.58574], {
      icon: L.mapquest.icons.marker(),
      draggable: false
    })
      .bindPopup("Muir Beach")
      .addTo(map);

    L.marker([40.75227, -73.97794], {
      icon: L.mapquest.icons.marker(),
      draggable: false
    })
      .bindPopup("Grand Central Terminal")
      .addTo(map);

    L.marker([27.91567, -81.56601], {
      icon: L.mapquest.icons.marker(),
      draggable: false
    })
      .bindPopup("Muir Beach")
      .addTo(map);
  }
  // Displaying Reviews to Upload Page
  if (state.view === "Upload") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const reviewList = event.target.elements;
      console.log("Type your Review", reviewList);

      // Create a request body object to send to the API
      const requestData = {
        name: reviewList.name.value,
        message: reviewList.message.value
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.myAPI}/Upload`, requestData)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Upload.reviews.push(response.data);
          router.navigate("/Upload");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("", error);
        });
    });
  }
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
            `http://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      case "Upload":
        axios
          .get(`${process.env.photoloto_API_URL}/Upload`)
          .then(response => {
            // store response to state
            console.log("response", response);
            store.Upload.reviews = response.data;
            done();
          })
          .catch(error => {
            console.log("Whoopsie", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
