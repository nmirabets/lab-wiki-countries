import axios from 'axios';

export const getCountryData = async () => {

    return await axios.get('https://restcountries.eu/rest/v2/all').then((res) => { return res.data})

}