import html from "html-literal";

export default (links) => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          (link) =>
            `<nav>
              <i class="fas fa-bars"></i>
              <ul class="hidden--mobile nav-links">
                <ul>
                  <a href="">About</a>
                </ul>
                <ul>
                  <a href="">Upload</a>
                </ul>
                <ul>
                  <a href="">Share</a>
                </ul>
              </ul>
            </nav>`
        )
        .join("")}
    </ul>
  </nav>
`;

// export default (links) => html`
//   <nav>
//     <i class="fas fa-bars"></i>
//     <ul class="hidden--mobile nav-links">
//       ${links
//         .map(
//           (link) =>
//             `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
//         )
//         .join("")}
//     </ul>
//   </nav>
// `;
