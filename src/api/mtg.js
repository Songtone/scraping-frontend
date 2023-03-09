import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

export const fetchMtgCards = async () => {
    const data = await axios.get(API_URL + '/mtg/');
    return data.data;
}

export const saveMtgCard = async (url) => {
    await axios.post(API_URL + '/mtg/save', {
        url: url,
    });
}

export const deleteMtgCard = async (id) => {
    await axios.delete(API_URL + '/mtg/delete/' + id);
}