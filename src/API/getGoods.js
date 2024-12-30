const url = "https://fakestoreapi.com/products";

export const getGoods = async () => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Failed to fetch goods.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching goods:", error);
        return [];
    }
};


