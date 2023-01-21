import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})

export const getCharacter = async () => {
    let res = await api.get("/character")
    return res

}