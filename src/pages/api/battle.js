import axios from "axios"

export default async function handler(req, res) {
    let response1
    let response2
    let name1 = req.body.pokemon1
    let name2 = req.body.pokemon2
    let winner
    try {

        response1 = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name1)
        response2 = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name2)        
    } catch (error) {
        console.log("error")
    }
    let pokemon1Stat = response1.data.stats[0].base_stat
    let pokemon2Stat = response2.data.stats[0].base_stat
    if (pokemon1Stat > pokemon2Stat) {
        winner = name1
    } else {
        winner = name2
    }
    return res.status(200).json({ winner })
}