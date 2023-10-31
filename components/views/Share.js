import html from "html-literal";

export default state => html`
  <section class="share-form">
    <form action="" method="POST">
      <h3 class="reviewHeader">Share your review!</h3>
      <div class="nameBar">
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
        />
      </div>

      <div class="textDesc">
        <label for="message"></label>
        <textarea
          name="message"
          id="message"
          cols="70"
          rows="10"
          placeholder="Enter Your message"
        ></textarea>
      </div>

      <input type="submit" value="Submit" id="submitButton" />
    </form>
  </section>
  ;
`;
