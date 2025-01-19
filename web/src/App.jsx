// import "./App.css";
// import "primereact/resources/primereact.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";

// import "../css/animate.css";
// import "../css/owl.carousel.min.css";
// import "../css/owl.theme.default.min.css";
// import "../css/magnific-popup.css";
// import "../css/flaticon.css";
// import "../css/style.css";

import Products from "./components/main/Products";
import Contact from "./components/main/Contact";
import About from "./components/main/About";
import OwlCarousel from "./components/common/OwlCarousel";
import Blog from "./components/main/Blog";
import { indexStyle } from "./include/include";
import { useMemo } from "react";

function App() {

    useMemo(() => {
        let l = [];
        // Link for head
        [...indexStyle].forEach((linkHref) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = linkHref;
            document.head.appendChild(link);
            l.push(link);

        });

        return () => {
            console.log(l.length);
            l.forEach((link) => {
                document.head.removeChild(link); // Cleanup
            });
        };
    }, []);
    
    

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/owl" element={<OwlCarousel />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
