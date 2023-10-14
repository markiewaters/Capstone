import html from "html-literal";

export default (state) => html`
  <section class="upload-page">
    <div class="">
      <h2>See through others</h2>
    </div>
    <div aria-label="sliderImages">
      <div class="slider" data-slider>
        <button class="backButton" data-slider-button="previous"></button>
        <button class="nextButton" data-slider-button="next"></button>
        <ul data-slides>
          <li class="slide" data-active>
            <img src="/Images/Red.png" alt="" />
          </li>
          <li class="slide">
            <img src="/Images/Yellow.png" alt="" />
          </li>
          <li class="slide">
            <img src="/Images/Blue.png" alt="" />
          </li>
          <li class="slide">
            <img src="/Images/Green.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class=""></div>
  </section>
`;
