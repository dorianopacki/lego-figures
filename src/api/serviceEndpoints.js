import axios from 'axios'
import API_KEY from '../apikey';

export async function getMinifig(id) {
    try {
        const response = await axios.all([
            axios.get(`https://rebrickable.com/api/v3/lego/minifigs/${id}/?key=${API_KEY}`),
            axios.get(`https://rebrickable.com/api/v3/lego/minifigs/${id}/parts/?key=${API_KEY}`)
        ]);
        return { figureInfo: response[0].data, partsInfo: response[1].data }
    }
    catch (error) {
        console.error(error)
    }
};


export async function getFiguresList() {
    try {
        const response = await axios.get(`https://rebrickable.com/api/v3/lego/minifigs/?key=${API_KEY}&search=harry%20potter`)
        return response
    }
    catch (error) {
        console.error(error)
    }
};


export async function setShippingRequest(body) {
    try {
        axios.post(`blahblahblah.. /endpoint`, {
            body
        })
    }
    catch (error) {
        console.error(error)
    }
}