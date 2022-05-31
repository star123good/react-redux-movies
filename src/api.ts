import { BASE_URL } from "./config";

export const fetchApi = async (path: string) => {
    try {
        const url = `${BASE_URL}${path}`;
        const res = await fetch(url);
        const json = await res.json();
        // console.log("[fetchApi] response", res, json);
        return json;
    }
    catch(e) {
        console.error("[fetchApi] error", e);
        return null;
    }
};