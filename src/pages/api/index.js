import axios from "axios";

export default async function handler(req, res) {
    let response;
    try {
        response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + Math.round(Math.random() * 1008))
    } catch (error) {
        console.log(error)
        return
    }

        let name = response.data.species.name
        let sprite = response.data.sprites.other["official-artwork"].front_default
        let types = []

        for (let i = 0; i < response.data.types.length; i ++) {
            types.push(response.data.types[i].type.name)
        }
        return res.status(200).json({ name, sprite, types }); 
    }