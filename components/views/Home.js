import html from "html-literal";
import travelImg from "/assets/img/walkImg.png";

export default (state) => html`
  <section class="Homepage">
      <h2 class="introDesc">
        Find your next journey here!
      </h2>
      <div class="headerImg">
        <img class="heroImg" src="${travelImg}" />
      </div>
      <div class="twoColumns">
        <div class="trackingList">
          Tracking List will go here(2 Column Section)
        </div>
        <div class="mapQuest">MapQuest will go here (2 Column Section)</div>
      </div>
    </div>
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </section>

`;
