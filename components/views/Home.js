import html from "html-literal";
import myImage from "/assets/img/pexels-leah-kelley-3935702.jpg";

export default (state) => html`
  <section class="Homepage">
      <p class="introDesc">
        Find your next journey here!
      </p>
      <div class="headerImg">
        <img class="heroImg" src="${myImage}" />
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
