import http from "../http-config";

export default function useQuotesServices() {
    const get = (id) =>  http.get(`quotes/${id}`)

    const getAll = () =>  http.get("/quotes")

    const getRandom = () =>  http.get("/quotes/random")

   // const create = (data) =>  http.post("/quotes", data)

    //const update = (id, data) =>  http.put(`/quotes/${id}`, data)

    //const delete = (id) =>  http.get(`quotes/${id}`)

    //const deleteAll = () =>  http.get("/quotes")

    //const findByTitle(title) = () =>  http.get(`/tutorials?title=${title}`)
    return{ get, getAll, getRandom}
}
