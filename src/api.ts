export const fetchApi = async (url: string) => {
    try {
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