import axios from "axios";
const idIgdb = '70oadvd4vttwv5y41hwoy4nhb0vv3g'
const accessToken = 'iy2q0rgq8l4rwuk1sy6gw58350iovh'
const typeToken = 'Bearer'

export default axios.create({
    baseURL: "https://api.igdb.com/v4/games",
    headers: {
        'Origin':"https://api.igdb.com/v4/games",
        'Accept': 'application/json',
        'Client-ID': idIgdb,
        'Authorization': `${typeToken} ${accessToken}`
    },
    //data: 'fields name; limit 10;'
});
