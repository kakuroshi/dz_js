export async function GET(id) {
    let response = await fetch(`https://gorest.co.in/public-api/posts?page=${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json()
}

// export async function GET() {
//     let response = await fetch(`https://gorest.co.in/public-api/posts`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     return response.json()
// }