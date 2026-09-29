// SELECT ITEMS
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
    // GET DATA ID
    const id = e.target.dataset.id;

    if (id) {
        // REMOVE ACTIVE CLASS
        btns.forEach(function (btn) {
            btn.classList.remove('active');

            // ADD ACTIVE CLASS
            e.target.classList.add('active');
        })

        // HIDE OTHER ARTICLES
        articles.forEach(function (article) {
            article.classList.remove('active');
        })
        const element = document.getElementById(id);

        element.classList.add('active');
    }
})