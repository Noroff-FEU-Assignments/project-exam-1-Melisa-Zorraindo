export function createListOfPosts(data) {
  const content = document.querySelector(".article-box");
  const loadMoreBtn = document.querySelector(".cta");
  content.innerHTML = "";

  //display button
  loadMoreBtn.style.display = "block";

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      content.innerHTML = `<article class="ft-post-article">
                              <a class="ft-post-box" href="../pages/article.html?id=${data[0].id}">
                              <h3 class="card-heading">${data[0].title.rendered}</h3>
                                  <div>
                                      <img
                                          alt="${data[0].acf.featured_img.alt}"
                                          class="ft-post-img"
                                          src="${data[0].acf.featured_img.url}"
                                      />
                                  </div>
                                  <div>
                                      <div>
                                          <span class="tags">#${data[0].acf.tag_1}</span>
                                          <span class="tags">#${data[0].acf.tag_2}</span>
                                      </div>
                                      <p>
                                          ${data[0].acf.brief}
                                      </p>
                                  </div>
                                  </a>
                               </article>`;
    } else if (i > 0 && i < 10) {
      content.innerHTML += `<article class="post-card">
                                <a href="../pages/article.html?id=${data[i].id}">
                                <h3 class="card-heading">${data[i].title.rendered}</h3>
                                      <div>
                                          <img
                                          alt="${data[i].acf.featured_img.alt}"
                                          class="post-img"
                                          src="${data[i].acf.featured_img.url}"
                                          />
                                      </div>
                                      <div>
                                          <div>
                                            <span class="tags">#${data[i].acf.tag_1}</span>
                                            <span class="tags">#${data[i].acf.tag_2}</span>
                                          </div>
                                          <p>
                                          ${data[i].acf.brief}
                                          </p>
                                      </div>
                                      </a>
                                 </article>
                                 `;
    } else if (i >= 10 && i < data.length) {
      content.innerHTML += `<article class="post-card hidden">
                                <a href="../pages/article.html?id=${data[i].id}">
                                <h3 class="card-heading">${data[i].title.rendered}</h3>
                                      <div>
                                          <img
                                          alt="${data[i].acf.featured_img.alt}"
                                          class="post-img"
                                          src="${data[i].acf.featured_img.url}"
                                          />
                                      </div>
                                      <div>
                                          <div>
                                            <span class="tags">#${data[i].acf.tag_1}</span>
                                            <span class="tags">#${data[i].acf.tag_2}</span>
                                          </div>
                                          <p>
                                          ${data[i].acf.brief}
                                          </p>
                                      </div>
                                      </a>
                                 </article>
                                 `;
    }
  }
}
