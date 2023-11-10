import html from "html-literal";

export default state => html`
  <section class="reviewBlock">
    <h3 class="reviewHeader">Reviews</h3>
    <div class="reviewList">
      ${state.reviews.map(review => {
        return html`
          <div class="reviewSubmission">
            <ul>
              <p class="revName">${review.name}</p>
              <div class="revMsg">${review.message}</div>
            </ul>
          </div>
        `;
      })}
    </div>
  </section>
  ;
`;
