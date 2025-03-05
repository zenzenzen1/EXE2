// import "./App.css";
// import "primereact/resources/primereact.min.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";

// import "../css/animate.css";
// import "../css/owl.carousel.min.css";
// import "../css/owl.theme.default.min.css";
// import "../css/magnific-popup.css";
// import "../css/flaticon.css";
// import "../css/style.css";

import { useMemo, useState } from "react";
import OwlCarousel from "./components/common/OwlCarousel";
import About from "./components/main/About";
import Blog from "./components/main/Blog";
import Contact from "./components/main/Contact";
import Products from "./components/main/Products";
import Zalopay from "./components/payment/Zalopay";
import Vnpay from "./components/payment/Vnpay";
import Cart from "./components/main/Cart";
import Checkout from "./components/main/Checkout";
import PayOS from "./components/payment/PayOS";
import PaymentSuccess from "./components/payment/PaymentSuccess";
import PaymentCancel from "./components/payment/PaymentCancel";
import Demo from "./components/demo/Demo";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { LanguageProvider } from "./providers/LanguageProvider";
import { getLanguage, LanguageTypes } from "./configurations/language";
import LanguageHandler from "./providers/LanguageHandler";

// import "./App.css";

function App() {

    useMemo(() => {
        // let l: HTMLLinkElement[] = [];
        // Link for head
        // [...indexStyle].forEach((linkHref) => {
        //     const link = document.createElement('link');
        //     link.rel = 'stylesheet';
        //     link.href = linkHref;
        //     document.head.appendChild(link);
        //     // l.push(link);
        // });

        return () => {
            // console.log(l.length);
            // l.forEach((link) => {
            //     document.head.removeChild(link); // Cleanup
            // });
        };
    }, []);
    const [language, setLanguage] = useState(getLanguage());

    // Function to update the theme
    const handleLanguageChange = (language: LanguageTypes) => {
        setLanguage(language);
    };



    return (
        <>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/products" element={<Products />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/owl" element={<OwlCarousel />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/zalopay" element={<Zalopay />} />
                                <Route path="/vnpay" element={<Vnpay />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/payos" element={<PayOS />} />
                                <Route path="/order/success" element={<PaymentSuccess />} />
                                <Route path="/order/cancel" element={<PaymentCancel />} />
                                <Route path="/demo" element={<Demo />} />

                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
                        </BrowserRouter>
                    </PersistGate>
                </Provider>
        </>
    )
}

export default App
