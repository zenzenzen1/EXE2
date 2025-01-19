export const productCategorySelection = [{
    name: "food1" },
    { name: "food2" },
    { name: "food3" },
    { name: "food4" },

];

export type ProductType = {
    sale?: {
        className: string;
        text: string;
    };
    product: {
        name: string;
        price: string | number;
        salePrice?: string | number;
        category?: string;
    }
    
}