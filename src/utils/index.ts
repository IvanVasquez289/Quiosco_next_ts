export function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(value);
}

export const getImagePath = (imagePath: string) => {
    const baseUrl = "https://res.cloudinary.com"

    if(imagePath.startsWith(baseUrl)){
        return imagePath
    }else{
        return `/products/${imagePath}.jpg`
    }
};