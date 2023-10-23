import html from "html-literal";

export default state => html`
  <section class="upload-form">
    <form action="" method="POST">
      <label for="file">Upload Your Picture:</label>
      <input type="file" name="file" id="file" />

      <input type="submit" value="Submit" />
    </form>
  </section>
  <section class="reviewBlock">
    <div class="reviewList">
      ${state.reviews.map(review => {
        return html`
          <ul>
            <li>
              ${review.name}, ${review.message}
            </li>
          </ul>
        `;
      })}
    </div>
  </section>
  ;
`;
