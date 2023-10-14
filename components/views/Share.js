import html from "html-literal";

export default (state) => html`
  <section class="share-form">
    <form action="" method="POST">
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        required
      />

      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="you@somewhere.com"
      />

      <div class="textDesc">
        <label for="msg">Enter your message:</label>
        <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
      </div>

      <input type="submit" value="Submit" />
    </form>
  </section>
  ;
`;
