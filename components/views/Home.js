import html from "html-literal";

export default state => html`
  <section class="Homepage">
    <h2 class="introDesc">
      Find your next journey here!
    </h2>
    <div class="mapContainer">
      <div id="map"></div>
    </div>
    <br />
    <div class="trackingList"></div>
  </section>
  <section class="eventList">
    <h2 class="">Nearby Events Happening!</h2>
    <div class="eventTitle">
      <ul>
        <h3>Event 1#</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </ul>
      <ul>
        <h3>Event 2#</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </ul>
      <ul>
        <h3>Event 3#</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </ul>
    </div>
    <div></div>
  </section>
`;
