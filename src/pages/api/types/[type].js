import axios from "axios"

export default async function handler(req, res) {
    let response
    let { type } = req.query
    try {
        response = await axios.get('https://pokeapi.co/api/v2/type/' + type)
    } catch (error) {
        console.log("error")
    }

    let pokemon = []
    for (let i =0; i < response.data.pokemon.length; i++) {
        pokemon.push(response.data.pokemon[i].pokemon.name)
    }
    return res.json({ pokemon })
}