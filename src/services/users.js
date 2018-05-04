const url = `https://www.json-generator.com/api/json/get/cfnzTBQTTm?indent=2`

// async function loadUser (user) {
//     let response = await fetch(url)
//     let data = await response.json()
//     return data.filter(user => user.uid == user)
// }

export class Users {
    getUser (user, pass) {
        return fetch(url).then(resp => resp.json())
    }
}

