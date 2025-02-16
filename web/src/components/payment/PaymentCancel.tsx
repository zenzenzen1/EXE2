import { useLocation, useNavigate } from "react-router-dom";
import httpClient from "../../configurations/HttpClient";
import { PaymentInformationType, PaymentStatus } from "../../types/Checkout";
import { useEffect } from "react";

function PaymentCancel() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    // queryParams.forEach((value, key) => {
    //     console.log(key, value);
    // });
    // console.log(queryParams.get("orderCode"));
    // getPaymentInofrmation(queryParams.get("orderCode") || "5166519980")
    //     .then((res )  => {
    //         console.log(res as any);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    useEffect(() => {
        httpClient.get("/payment-info?orderCode=" + queryParams.get("orderCode"))
            .then((res) => {
                const payment = res.data as PaymentInformationType;
                console.log(payment);
                payment.status === PaymentStatus.CANCEL && navigate("/cart", {state : {paymentStatus: PaymentStatus.CANCEL}});
            })
            .catch((_err) => {
            });
    }, []);
    return (
        <>
            <div>PaymentCancel</div>
        </>
    )
}


export default PaymentCancel