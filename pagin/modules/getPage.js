

document.addEventListener("DOMContentLoaded", async () => {
    id = Number(window.location.href.split("id=")[1])
    async function GETfunc(id) {
        let response = await fetch(`https://gorest.co.in/public-api/posts/${id}`, {
                method: "GET"
            });
                

            response = await response.json()

            return response.data
        }

    let test = await GETfunc(id)
    console.log(test)

    document.querySelector('h1').textContent = test.title
    document.querySelector('p').textContent = test.body
})

