import http from "../http-config";

export default function useUsersServices() {
    const get = (id) =>  http.get(`/users/${id}`)

    const getAll = () =>  http.get("/users")

   // const create = (data) =>  http.post("/quotes", data)

    //const update = (id, data) =>  http.put(`/quotes/${id}`, data)

    //const delete = (id) =>  http.get(`quotes/${id}`)

    //const deleteAll = () =>  http.get("/quotes")

    //const findByTitle(title) = () =>  http.get(`/tutorials?title=${title}`)
    return{ get, getAll }
}
