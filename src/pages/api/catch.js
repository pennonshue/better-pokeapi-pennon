import axios from 'axios' 

export default async function handler(req, res) {
    let name = req.body.pokemon
    let response;
    try {
        response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name)
    } catch (error) {
        console.log("error")
        return
    }

    let hpMax = response.data.stats[0].base_stat
    let n = Math.floor(Math.random() * 256)
    let ball = Math.floor(Math.random() * 256)
    let hpCurrent = Math.floor(Math.random() * (hpMax + 1))
    let f = (hpMax * 255 * 4)/(hpCurrent * ball)
    
    if (f >= n) {
        let caught = true
        return res.status(200).json({ caught})
    } else {
        let caught = false
        return res.status(200).json({ caught})
    }
}
