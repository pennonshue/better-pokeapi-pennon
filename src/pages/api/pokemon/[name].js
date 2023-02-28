import axios from "axios"

export default async function handler(req, res) {
    let response;
    let { name } = req.query
    try {
        response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name)
    } catch (error) {
        console.log(error)
        return
    }
    let pokemonName = response.data.name
    let sprite = response.data.sprites.other["official-artwork"].front_default
    let types = []

    for (let i = 0; i < response.data.types.length; i ++) {
        types.push(response.data.types[i].type.name)
    }
    return res.status(200).json({ pokemonName, sprite, types }); 
}






