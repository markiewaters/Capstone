import html from "html-literal";

export default state => html`
  <section class="share-form">
    <form action="" method="POST">
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Type in your name"
        required
      />
      <h3>Type in your review!</h3>
      <div class="textDesc">
        <label for="message">Enter your message:</label>
        <textarea name="message" id="msg" cols="30" rows="10"></textarea>
      </div>

      <input type="submit" value="Submit" />
    </form>
  </section>
  ;
`;
