import moment from "moment";
import axios from "axios";
import CryptoJS from "crypto-js";

const config = {
    app_id: "2554",
    key1: "sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn",
    key2: "trMrHtvjo6myautxDUiAcYsVtaeQ8nhf",
    endpoint: "https://sb-openapi.zalopay.vn/v2/create"
};

const Zalopay = () => {
    const handleClick = () => {
        const embed_data = {
            redirecturl: "https://nemthanhnam-ejchbecma3brchce.canadacentral-01.azurewebsites.net/about",
        };

        const items = [{}];
        const transID = Math.floor(Math.random() * 1000000);
        const order = {
            app_id: config.app_id,
            app_trans_id: `${moment().format('YYMMDD')}_${transID}`, // translation missing: vi.docs.shared.sample_code.comments.app_trans_id
            app_user: "user123",
            app_time: Date.now(), // miliseconds
            item: JSON.stringify(items),
            embed_data: JSON.stringify(embed_data),
            amount: 50000,
            description: `Lazada - Payment for the order #${transID}`,
            bank_code: "",
            mac: "",
            
        };

        // appid|app_trans_id|appuser|amount|apptime|embeddata|item
        const data = config.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
        order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

        axios.post(config.endpoint, null, { params: order })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <button onClick={handleClick}>Pay</button>
        </div>
    )
}

export default Zalopay;