export const toVndCurrency = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
        // .replace(/\./g, ',')
        ;

}

export const toNumberWithDecimals = (number: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'decimal' }).format(number)
        // .replace(/\./g, ',')
        ;

}
