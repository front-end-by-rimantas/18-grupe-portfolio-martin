function renderBlogs(selector, blogsData) {
  //validation

  //logic
  const DOM = document.querySelector(selector);
  let html = '';
  const size = blogsData.data.length;
  for (let i = 0; i < size; i++) {
    const rez = blogsData.data[i];
      html += `<div class="blogs">
      <div>
        <img class="imghover" src="${rez.imagesPath}"></img>
      </div>
        <span>${rez.date}</span>
        <h5 class="blog-yours">${rez.linkYours}</h5>
        <p>${rez.description}</p>
        <a class="blog-more" href="#">${rez.readMore}</a>
      </div>`;
    }
  return DOM.innerHTML = html;
}

export { renderBlogs };
