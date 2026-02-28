import { request } from "./httpClient";

export const getUsers = () => request("/users")

export const getUsersById = (id) => {
    request(`/users/${id}`)
}

export const createUser = (user) => {
    request("/users", {
        method: "POST",
        body: JSON.stringify(user)
    })
}

export const updateUser = (id, user) => {
    request(`/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(user)
    })
}

export const deleteUser = (id) => {
    request(`/users/${id}`, {
        method: "DELETE"
    })
}