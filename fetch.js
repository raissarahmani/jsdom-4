const url = 'https://jsonplaceholder.typicode.com/users'

async function fetchData() {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error (`Error: ${response.status}`)
        }

        const data = await response.json()
        const outputDiv = document.querySelector("#output")

        data.forEach (user => {
            const userInfo = document.createElement("div")
            userInfo.style.border = "1px dashed #000"
            userInfo.style.borderRadius = "6px"
            userInfo.style.marginBottom = "1vh"
            userInfo.style.padding = "1vh 1vw"
            userInfo.innerHTML = `
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>`
            outputDiv.appendChild(userInfo)
        })
    } catch (error) {
        const outputDiv = document.querySelector("#output")
        outputDiv.innerHTML = `<p style="color: red;">Failed to fetch data: ${error.message}</p>`;
    }
}
fetchData()