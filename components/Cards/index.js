// STEP 3: Create article cards.
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
// Write a function that returns the following markup:
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
// Use your function to create a card for each of the articles and add the card to the DOM.

function articleMaker(article) {
  const articles = article.data.articles;
  const javascriptArticles = articles.javascript;
  const bootstrapArticles = articles.bootstrap;
  const techArticles = articles.technology;
  const jqueryArticles = articles.jquery;
  const nodeArticles = articles.node;
  const cards = [];
  const jsCards = javascriptArticles.map((article) => {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const by = document.createElement("span");
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(by);
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    by.textContent = article.authorName;
    cards.push(card);
  });

  const bootCards = bootstrapArticles.map((article) => {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const by = document.createElement("span");
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(by);
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    by.textContent = article.authorName;
    cards.push(card);
  });
  const techCards = techArticles.map((article) => {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const by = document.createElement("span");
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(by);
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    by.textContent = article.authorName;
    cards.push(card);
  });
  const jqueryCards = jqueryArticles.map((article) => {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const by = document.createElement("span");
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(by);
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    by.textContent = article.authorName;
    cards.push(card);
  });
  const nodeCards = nodeArticles.map((article) => {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const by = document.createElement("span");
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(by);
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    by.textContent = article.authorName;
    cards.push(card);
  });

  return cards;
}

const cardsContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles").then((res) => {
  articleMaker(res).forEach((card) => {
    cardsContainer.append(card);
  });
});
