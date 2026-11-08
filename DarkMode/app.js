const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

// toggle btn to change theme
toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
})

// import data 
// display articles
const articlesData = articles.map((article) => {
    // console.log(article);
    const { title, date, length, snippet } = article;

    // format date with moment.js
    const formatDate = moment(date).format('MMM DAY YYYY')

    // return html 
    return `
    <article class="post">
      <h2>${title}</h2>
      <div class="post-info">
        <span>${formatDate}</span>
        <span>${length} min read</span>
      </div>
      <p>
        ${snippet}
      </p>
    </article>`
}).join('');

articlesContainer.innerHTML = articlesData;

console.log(moment);