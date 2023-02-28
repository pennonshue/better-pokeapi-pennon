import axios from 'axios' 

export default async function handler(req, res) {
    let name = req.body.pokemon
    let caught = false

    try {
        response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name)
        let id = response.data.id
        id = req.body.pokemon
        response = await axios.get('https://pokeapi.co/api/v2/characteristic/' + id)
        let statUrl = response.data.highest_stat.url
        statUrl = req.body.pokemon
        response = await axios.get(statUrl)
        let hpMax = response.data[names.length]
        hpMax++
        
        let n = Math.round(Math.random() * 256)
        let ball = Math.round(Math.random() * 256)
        let hpCurrent = Math.round(Math.random() * hpMax)
        let f = (hpMax * 255 * 4)/(hpCurrent * ball)
        if (f >= n) {
            caught = true
        }
        return res(200).json({ caught })
    } catch (error) {
        console.log("error")
    }
}
