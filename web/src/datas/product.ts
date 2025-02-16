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
        imageUrl: string;
    }
    
}

export const products: ProductType[] = [
    {
        product: {
            name: 'Bacardi 151',
            category: "Brandy",
            price: "100",
            salePrice: "50",
            imageUrl: "/images/products/z6249529759773_b352e0f71326e80b4bed81969013b2f2.jpg"
        },
        // sale: {
        //     className: "sale",
        //     text: "sale"
        // }
    },
    {
        product: {
            name: 'Jim Beam Kentucky Straight',
            category: "Gin",
            price: "$69.00",
            imageUrl: "/images/products/z6249449077408_69eaa4ad1982a689e60f27080ff03a21.jpg"
        },
        // sale: {
        //     className: "seller",
        //     text: "Best Seller"
        // }
    },
    {
        product: {
            name: "Citadelle",
            category: "Rum",
            price: "$69.00",
            imageUrl: "/images/products/z6249539376177_4602879ceb3d63a536a299d38f3406d0.jpg"
        },
        // sale: {
        //     className: "new",
        //     text: "New Arrival"
        // }
    }
]

export const productInformation = {
    price: 60000,
    maxQuantity: 100,
    minQuantity: 1,
    name: "Nem Nắm Tryền Thống Nam Định",
    delivery: 0,
    discount: 0,
}