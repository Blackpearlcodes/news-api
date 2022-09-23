const news = document.getElementById("news")
$.get(
"https://newsapi.org/v2/everything?q=Apple&from=2022-09-23&sortBy=popularity&apiKey=5c6eae8d52cc49ac8478bba16c34b657",
(dataObj) => {
    dataObj.articles.forEach(data => {
        const card = document.createElement("div")
        card.className = 'cards-ch'
