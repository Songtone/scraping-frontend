import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

export const fetchMtgCardData = async (cardName) => {
    const data = await axios.get(API_URL + '/mtg/price/' + cardName);
    return data.data;
}

export const fetchMtgCards = async () => {
    const data = await axios.get(API_URL + '/mtg/')
    return data.data;
}

export const saveMtgCard = async (url) => {
    console.log(url);
    console.log('123');
    await axios.post(API_URL + '/mtg/save', {
        url: url,
    })

}