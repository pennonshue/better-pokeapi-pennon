import axios from "axios"

export default async function handler(req, res) {
    let response;
    let { name, level } = req.query
    let growthRate
    try {
        response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + name)
        growthRate = response.data.growth_rate.name
    } catch (error) {
        console.log("error")
    }
    let experience;
    if (growthRate == "slow") {
        experience = (5 * level ** 3)/4
    } else if (growthRate == "medium" ) {
        experience = level ** 3
    } else if (growthRate == "fast") {
        experience = (4 * level ** 3)/5
    } else if (growthRate == 'medium-slow') {
        experience = (6/5) * level ** 3 - 15 * level ** 2 + 100 * level -140
    } else if (growthRate = "slow-then-very-fast") {
        if (level < 50) {
            experience = (level ** 3)(100 - n)/50
        } else if ((level <= 50) && level < 68) {
            experience = (level ** 3)(150 - level)/100
        } else if ((level <= 68) && (level < 98)) {
            experience = (level ** 3)((1911 - 10 * level)/3)/500
        } else {
            experience = (level ** 3)(160 - level)/100
        }
    } else if (growthRate = 'fast-then-very-slow') {
        if (level < 15) {
            experience = (level **3((level + 1)/3) + 24)/50
        } else if ((level <= 15) && (level < 36)) {
            experience = (level ** 3)(n + 14)/50
        } else if ((level <= 36) && (level < 100)) {
            experience = (level ** 3)(1/2 * level)/50
        }
    }
    return res.status(200).json({ experience })
}
