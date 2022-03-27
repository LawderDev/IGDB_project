import http from "../http-config";

export default function useIgdbServices() {
    const getAllGames = () =>  http.post("/igdb")
    const getMostRatingGames = (limit:number) =>  http.post("/igdb/mostRatings", {limit})
    return{ getAllGames, getMostRatingGames }
}
