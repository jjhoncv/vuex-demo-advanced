const url = `https://www.json-generator.com/api/json/get/bUScAOfrkO?indent=2`

export class Users {
    async getUid (user, pass) {
        let response =  await fetch(url)
        let data = await response.json()
        return data.filter(item => item.uid == user && item.pass == pass )
    }

    async getUser (token) {
        let response =  await fetch(url)
        let data = await response.json()
        return data.filter(item => item.id == token )
    }

    async getUsers () {
        let response =  await fetch(url)
        return  await response.json()
    }
}

