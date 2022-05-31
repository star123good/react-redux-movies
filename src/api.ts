import { BASE_URL } from "./config";

export const fetchApi = async (path: string) => {
    const url = `${BASE_URL}${path}`;
    const res = await fetch(url, {
        mode: 'no-cors' // 'cors' by default
    });
    const json = await res.json();
    console.log("[fetchApi] response", res, json);
    return json;
};