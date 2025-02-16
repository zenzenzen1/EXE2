import { CartType } from "./cart"

export type PaymentRequestType = {
    amount: number,
    buyerName: string,
    buyerEmail: string,
    buyerPhone: string,
    buyerAddress: string,
    items: {
        name: string,
        quantity: number,
        price: number
    }
    
}
export type CheckoutType = {
    name: string
    phone: string
    email: string
    address: string
    additionalAddress: string
    phoneNumber: string
    priceInformation: CartType
}

export type PaymentInformationType = {
    "id": string,
    "orderCode": number,
    "amount": number,
    "amountPaid": number,
    "amountRemaining": number,
    "status": string,
    "createdAt": Date,
    "transactions"?: any[],
    "canceledAt"?: any,
    "cancellationReason"?: any
}

export const PaymentStatus = {
    SUCCESS: "success",
    CANCEL: "CANCELLED",
    PENDING: "pending",
    PROCESSING: "processing"
}