const BASE_URL = "https://jsonplaceholder.typicode.com";

export const request = async (endpoints, options = {}) => {
    try {
        const res = await fetch(BASE_URL + endpoints, {
            headers: {
                "Content-Type": "application/json"
            },
            ...options
        })
        const data = await res.json()
        if (!res.ok) {
            throw new Error(data?.message)
        }
        return data
    } catch (error) {
        throw error
    }
}