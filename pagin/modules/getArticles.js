export function getArticles(array) {


    document.querySelectorAll(".articleDiv").forEach((event) => {
        event.remove()
    })

    let articlesDiv = document.querySelector(".articles")
    
    for (let i = 0; i < array.length; i++) {
        try {
            let articleDiv = document.createElement("div")
            articleDiv.classList.add("articleDiv")

            let title = document.createElement('h1')
            title.classList.add("title")
            title.textContent = array[i].title

            // let body = document.createElement("p")
            // body.classList.add("articleBody")
            // body.textContent = array[i].body

            articleDiv.append(title)
            articlesDiv.append(articleDiv)
        } catch{}
    }

    document.querySelectorAll('.title').forEach((el, index) => el.addEventListener("click", () => {
        window.location.href = `./page.html?id=${array[index].id}`
    }))
}