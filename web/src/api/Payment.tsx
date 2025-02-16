import httpClient from "../configurations/HttpClient";

export const getPaymentInofrmation = async (orderCode: string)   => {
    httpClient.get("/payment-info?orderCode=" + orderCode)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}