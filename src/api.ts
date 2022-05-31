export const fetchApi = async (url: string) => {
    try {
        const res = await fetch(url);
        // console.log("[fetchApi] response", res);
        const json = await res.json();
        // console.log("[fetchApi] response", json);
        return json;
    }
    catch(e) {
        console.error("[fetchApi] error", e);
        return null;
    }
};