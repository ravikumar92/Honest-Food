import axios from 'axios';

export const locateResturant = async (address) => {
    try{
        const {data={}} = await axios.get(`${process.env.REACT_APP_API_URL}/?location=${address}`);
        return data;
    }catch(err) {
        console.log(err)
    }
    
}