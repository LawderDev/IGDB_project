import http from "../http-config";

export default function useIgdbServices() {

    const getAllGames = (search:string) =>  http.post("/igdb", {search})
    const getMostRatingGames = (limit:number) =>  http.post("/igdb/mostRatings", {limit})
    const getLastReleasedGames = (limit:number) => http.post("/igdb/lastReleased", {limit})
    const getHypesGames = (limit:number) => http.post("/igdb/mostHyping", {limit})
    const getGameById = (id:number) => http.post("/igdb/games",  {id})

    return{ getAllGames, getMostRatingGames, getLastReleasedGames, getHypesGames, getGameById }
}
