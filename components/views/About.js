import html from "html-literal";
import myImage from "/assets/img/myImage.jpg";

export default state => html`
  <section class="about-page">
    <div class="about-wrapper">
      <div class="selfDesc">
        <p class="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="about -imgContainer">
        <img
          src="${myImage}"
          class="about-img"
          alt="portrait image of Mark Reed"
        />
      </div>
    </div>
  </section>
`;
