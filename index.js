// Add your code here
function submitData(name, email) {
    const userDetails = {
        name: name,
        email: email
    }
    const configData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userDetails)
    };

    return fetch("http://localhost:3000/users", configData)
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML += `<p>New ID: ${data.id}</p>`
        })
        .catch(error => {
            console.error("Error", error);
            document.body.innerHTML += `<p>Error Message: ${error.message}</p>`

        });
}
submitData();
