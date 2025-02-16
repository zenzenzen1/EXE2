import mongoose from "mongoose";
import product, { ProductType } from "./product.js";

const paymentSchema = new mongoose.Schema({
    orderCode: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
        required: true,
    },
    transactionDateTime: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    paymentLinkId: {
        type: String,
        required: true,
    },
    product: {
        type: ProductType,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    delivery: {
        type: Number,
        required: false,
    },
    discount: {
        type: Number,
        required: false,
    },
    
},
    {

    });

export default mongoose.model('Payment', paymentSchema);