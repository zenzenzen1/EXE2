import { useLocation, useNavigate } from "react-router-dom";
import httpClient from "../../configurations/HttpClient";
import { PaymentInformationType, PaymentStatus } from "../../types/Checkout";
import { useEffect } from "react";

function PaymentSuccess() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        httpClient.get("/payment-info?orderCode=" + queryParams.get("orderCode"))
            .then((res) => {
                const payment = res.data as PaymentInformationType;
                console.log(payment);
                if (payment.status === PaymentStatus.SUCCESS) {
                    navigate("/", { state: { paymentStatus: PaymentStatus.SUCCESS } });
                    httpClient.post("/order/success", {payment})
                        .then(_res => {
                            
                        })
                        .catch(_err => {
                            
                        })
                    ;
                }
                    
            })
            .catch((_err) => {
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div></div>
    )
}

export default PaymentSuccess