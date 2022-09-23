const news = document.getElementById("news")
$.get(
"https://newsapi.org/v2/everything?q=Apple&from=2022-09-23&sortBy=popularity&apiKey=5c6eae8d52cc49ac8478bba16c34b657",
(dataObj) => {
    dataObj.articles.forEach(data => {
        const card = document.createElement("div")
        card.className = 'cards-ch'

        const title = document.createElement("h1")
        title.className = 'title'
        title.id = 'title'  
        title.textContent = data.title
        card.append(title)

        const img = document.createElement("img")
        img.src = data.urlToImage
        img.style.maxWidth = '95%'
        img.style.margin = '35px auto'
        card.append(img)

        const source = document.createElement("div")
        source.className = 'source'
        source.id = 'source'
        source.textContent = data.source.name
        card.append(source)

        const content = document.createElement("div")
        content.className = 'content'
        content.id = 'content'
        content.textContent = data.description
        card.append(content)

        const link = document.createElement('a')
        link.className = 'linkToNews'
        link.href = data.url
        link.textContent = 'Read More'
        card.append(link)
        
        news.append(card)
    });
})