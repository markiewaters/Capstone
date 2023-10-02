import html from "html-literal";

export default (state) => html`
  <section class="Homepage">
    <div></div>
      <p class="introDesc">
        Find your next journey here!
      </p>
      <div class="headerImg">
        <img
          src="docs/pexels-leah-kelley-3935702.jpg"
          alt="girl looking at travel map"
          class="headerPhoto"
        />
      </div>
      <div class="twoColumns">
        <div class="trackingList">
          Tracking List will go here(2 Column Section)
        </div>
        <div class="mapQuest">MapQuest will go here (2 Column Section)</div>
      </div>
    </div>
  </section>
`;
