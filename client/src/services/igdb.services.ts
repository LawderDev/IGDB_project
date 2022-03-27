import http from "../http-config";

export default function useUsersServices() {
    const getAll = () =>  http.get("/igdb")

    return{ getAll }
}
