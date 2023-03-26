import axios from 'axios';


const characterApi= axios.create({
    baseURL: 'https://pokeapi.co/api/v2'

})


export default characterApi;