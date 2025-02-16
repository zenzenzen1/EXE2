const express = require('express');
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const PayOS = require('@payos/node');
const { default: router } = require('./src/routers/router');
const { default: product } = require('./src/model/product');
const { connectDb } = require('./src/config/db');
const mongoose = require('mongoose');
const { default: payment } = require('./src/model/payment');

const payos = new PayOS("98634d18-0884-4ef3-a3c5-538fcd840aad", "3164439a-3d38-4762-acfe-392601c4e968", "99751b6228e2ed042d8240dabdd9e92af8bf1f2b6d574a7ed15a5e1c117e896a");
const app = express();
app.use(express.static('public'));
app.use(express.json());

app.use(cors());

// const domain = "https://nemthanhnam-nodejs.azurewebsites.net";
const port = 3001;
const domain = "http://localhost:" + port;
const WEB_DOMAIN = "http://localhost:5173";
const RETURN_URL = WEB_DOMAIN + "/order/success";
const CANCEL_URL = WEB_DOMAIN + "/order/cancel";

connectDb();

app.get('/products', async (req, res) => {
    var ObjectId = mongoose.Types.ObjectId;
    const products = await product.findById(new ObjectId("67b1af2a75b4d259a840c148"));
    // var query = { campaign_id: new ObjectId(campaign._id) };
    // product({ name: "Iphone 13", price: 10000000 }).save();
    payment({ orderCode: "6176861681", amount: 5000, description: "CSM1W5K8S37 Thanh Toan", accountNumber: "V3CAS8854359196", currency: "VND", 
        paymentLinkId: "9bcd4389a2a14edda42c62ccc39a1900", status: "PENDING", 
        transactionDateTime: Date.now().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
        product: products,
        quantity: 1
    })
        .save();
    res.status(200).json(products);
});

app.post('/create-payment-link', async (req, res) => {
    // const paymentLink = req.body;
    const orderCode = Number(parseInt(crypto.randomBytes(5).toString("hex"), 16).toString().slice(0, 10));
    const order = {
        amount: req.body.amount,
        description: req.body.description,
        orderCode: orderCode,
        returnUrl: `${RETURN_URL}`,
        cancelUrl: `${CANCEL_URL}`,
    };
    if (req.body.buyerName) {
        order["buyerName"] = req.body.buyerName;
    }
    if (req.body.buyerEmail) {
        order["buyerEmail"] = req.body.buyerEmail;
    }
    if (req.body.buyerPhone) {
        order["buyerPhone"] = req.body.buyerPhone;
    }
    if (req.body.buyerAddress) {
        order["buyerAddress"] = req.body.buyerAddress;
    }
    if (req.body.items && req.body.items.length > 0) {
        order["items"] = req.body.items;
    }
    console.log(orderCode);

    payos.createPaymentLink(order)
        .then((paymentLink) => {
            res.status(200).json(paymentLink);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(error);
        });
    // return res.status(200).json(paymentLink);
});
/*
{
    "bin": "970418",
    "accountNumber": "V3CAS8854359196",
    "accountName": "NGUYEN XUAN TRUONG",
    "amount": 5000,
    "description": "CSM1W5K8S37 Thanh Toan",
    "orderCode": 6176861681,
    "currency": "VND",
    "paymentLinkId": "9bcd4389a2a14edda42c62ccc39a1900",
    "status": "PENDING",
    "checkoutUrl": "https://pay.payos.vn/web/9bcd4389a2a14edda42c62ccc39a1900",
    "qrCode": "00020101021238590010A000000727012900069704180115V3CAS88543591960208QRIBFTTA5303704540450005802VN62260822CSM1W5K8S37 Thanh Toan6304D35C"
}

*/

app.get('/order/success', async (req, res) => {
    console.log(req.query);
    res.status(200).send();
});



app.get('/order/cancel', async (req, res) => {
    console.log(req.query);
    res.status(200).send();
});
/*
{
  code: '00',
  id: '9bcd4389a2a14edda42c62ccc39a1900',
  cancel: 'true',
  status: 'CANCELLED',
  orderCode: '6176861681'
}
*/

app.get("/payment-info", async (req, res) => {
    payos.getPaymentLinkInformation(req.query.orderCode)
        .then((paymentLinkInfo) => {
            res.status(200).json(paymentLinkInfo);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(error);
        });
    // res.status(200).json(paymentLinkInfo);
});

//https://f87f-125-235-235-218.ngrok-free.app
app.post(domain + "/receive-hook", async (req, res) => {
    console.log(req.body);
    res.status(200).send();
});

app.use("/test", router);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});