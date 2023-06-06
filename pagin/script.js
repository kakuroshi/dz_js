import { GET } from "./modules/GET.js"
import { getArticles } from "./modules/getArticles.js"

let pageNumber = 1
let getArticle = await GET(pageNumber)

console.log(getArticle.data);

document.addEventListener('DOMContentLoaded', getArticles(getArticle.data))

document.querySelectorAll(".button").forEach(element => {
    element.addEventListener("click", () => {
        getArticles(getArticle.data)
    })
});

document.querySelector('.previousPage').addEventListener('click', async () => {
    if (pageNumber > 1) {
        pageNumber -= 1
        getArticle = await GET(pageNumber)
        document.querySelector('.numOfPage').textContent = pageNumber

        document.querySelector('.numOfPage').textContent = `Номер страницы: ${pageNumber}`

        document.querySelectorAll(".articleDiv").forEach((event) => {
            event.remove()
        })

        getArticles(getArticle.data)
    }

    pageNumber == 1 ? document.querySelector('.previousPage').setAttribute('disabled', true) : document.querySelector('.previousPage').removeAttribute('disabled');
    pageNumber != 245 ? document.querySelector('.nextPage').removeAttribute('disabled') : null;
})

document.querySelector('.nextPage').addEventListener('click', async () => {
    pageNumber += 1
    getArticle = await GET(pageNumber)
    document.querySelector('.numOfPage').textContent = `Номер страницы: ${pageNumber}`

    document.querySelector('.previousPage').removeAttribute('disabled')

    document.querySelectorAll(".articleDiv").forEach((event) => {
        event.remove()
    })

    getArticles(getArticle.data)

    pageNumber != 1 ? document.querySelector('.previousPage').removeAttribute('disabled') : null;
    pageNumber == 245 ? document.querySelector('.nextPage').setAttribute('disabled', true) : document.querySelector('.previousPage').removeAttribute('disabled');
})


document.querySelector('.inpBtn').addEventListener('click', async () => {
    pageNumber = Number(document.querySelector('.numInp').value)

    if (pageNumber > 245) {
        pageNumber = 245
    }

    if (pageNumber < 1) {
        pageNumber = 1
    }

    getArticle = await GET(pageNumber)
    document.querySelector('.numOfPage').textContent = `Номер страницы: ${pageNumber}`
    document.querySelector('.numInp').value = ''

    document.querySelectorAll(".articleDiv").forEach((event) => {
        event.remove()
    })

    getArticles(getArticle.data)

    if (pageNumber == 1) {
        document.querySelector('.previousPage').setAttribute('disabled', true)
    }
    if (pageNumber != 1) {
        document.querySelector('.previousPage').removeAttribute('disabled')
    }
    if (pageNumber == 245) {
        document.querySelector('.nextPage').setAttribute('disabled', true)
    }
    if (pageNumber != 245) {
        document.querySelector('.previousPage').removeAttribute('disabled');
    }
})