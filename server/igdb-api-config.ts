import axios from "axios";
const idIgdb = '70oadvd4vttwv5y41hwoy4nhb0vv3g'
const accessToken = 'ng8oauq95kuoaee3vod5xajfwt5t2t'
const typeToken = 'Bearer'
const headers = {
    "Content-Type": "text/plain",
    'Origin':"https://api.igdb.com/v4/games",
    'Accept': 'application/json',
    'Client-ID': idIgdb,
    'Authorization': `${typeToken} ${accessToken}`
}
export const httpGame = axios.create({
    baseURL: "https://api.igdb.com/v4/games",
    headers,
    //data: 'fields name; limit 10;'
});

export const httpDate = axios.create({
    baseURL: "https://api.igdb.com/v4/release_dates",
    headers,
    //data: 'fields name; limit 10;'
});
