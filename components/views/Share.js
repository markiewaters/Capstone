import html from "html-literal";

export default state => html`
  <section class="share-form">
    <form action="" method="POST">
      <h3>Type in your review!</h3>
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Type in your name"
        required
      />

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

      <input type="submit" value="Submit" />
    </form>
  </section>
  ;
`;
