import axios from "axios" 

export default async function handler(req, res) {
    let response
    let { name, evolveLink } = req.query
    try {
        response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + name)
        evolveLink = response.data.evolution_chain.url
        response = await axios.get(evolveLink)  
    } catch (error) {
        console.log("error")
        return
    }
    let evolution = response.data.chain.evolves_to[0].evolves_to[0].species.name
    return res.status(200).json({ evolution });
}