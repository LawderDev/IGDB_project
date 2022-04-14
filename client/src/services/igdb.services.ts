import http from "../http-config";

export default function useIgdbServices() {
    const getAllGames = () =>  http.post("/igdb")
    const getMostRatingGames = (limit:number) =>  http.post("/igdb/mostRatings", {limit})
    const getLastReleasedGames = (limit:number) => http.post("/igdb/lastReleased", {limit})
    const getHypesGames = (limit:number) => http.post("/igdb/mostHyping", {limit})
    return{ getAllGames, getMostRatingGames, getLastReleasedGames, getHypesGames }
}
