import html from "html-literal";

export default state => html`
  <section class="reviewBlock">
    <h3 class="reviewHeader">Reviews</h3>
    <div class="reviewList">
      ${state.reviews.map(review => {
        return html`
          <ul>
            <ul>
              ${review.name}, ${review.message}
            </ul>
          </ul>
        `;
      })}
    </div>
  </section>
  ;
`;
