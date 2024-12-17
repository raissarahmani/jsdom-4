const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error (`Error: ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        console.log(data)

        const outputDiv = document.querySelector("#output")
        outputDiv.innerHTML = data.map(data => {
            return `<li>${data.username}</li>`
        }).join('');
    })
    .catch(err => {
        console.error('There was a problem while fetching data', err)

        const outputDiv = document.querySelector("#output")
        outputDiv.innerHTML = `<p style="color: red;">Failed to fetch data: ${error.message}</p>`;
    })