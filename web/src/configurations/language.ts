import { RootState, store } from "../redux/store"

type languageElements = {
    nav: {
        home: string,
        product: string,
        blog: string,
        about?: string,
        contact?: string
    },
    smallDescription: {
        support: {
            title: string,
            desctiption: string
        },
        refund: {
            title: string,
            desctiption: string
        },
        shipping: {
            title: string,
            desctiption: string
        },
    },
    slogan: string,
    about: string,

    footer: {
        contact: string,
        address: string
    },
    payment: {
        button: {
            googleInformation: string,
            address: string,
            confirm: string,
        },
        input: {
            name: {
                label: string,
                placeholder: string
            },
            phone: {
                label: string,
                placeholder: string
            },
            address: {
                label: string,
                placeholder: string
            },
            additionAddress: {
                label: string,
                placeholder: string
            },
            note?: {
                label: string,
                placeholder: string
            },
            email: {
                label: string,
                placeholder: string
            },

        },
        orderInformation: {
            title: string,
            name: string,
            shipping: string,
            discount: string,
            total: string,
        },
        paymentMethod: {
            title: string,
            online: string,
            cod: string
        },
    }
}

const vnLanguage: languageElements = {
    nav: {
        home: "Trang chủ",
        about: 'Về chúng tôi',
        contact: 'Liên hệ',
        product: 'Sản phẩm',
        blog: 'Tin tức',
    },
    smallDescription: {
        support: {
            title: "Hỗ trợ 24/7",
            desctiption: "Chúng tôi luôn sẵn lòng hỗ trợ bạn mọi lúc mọi nơi."
        },
        refund: {
            title: "Bảo hành hoàn trả",
            desctiption: "Chúng tôi cam kết hoàn trả tiền nếu bạn không hài lòng."
        },
        shipping: {
            title: "Miễn phí vận chuyển",
            desctiption: "Chúng tôi cam kết giao hàng miễn phí."
        }
    },
    slogan: "<span>Nem Thành Nam - Hương Vị Truyền Thống Nam Định</span>",
    about: `<h2 className="mb-4">Chào mừng bạn đến với Nem Thành Nam!</h2>
            <p>
                Nem Thành Nam tự hào là thương hiệu nem nắm truyền thống Giao Thuỷ, mang đến hương vị đậm đà, thơm ngon đúng chất quê hương.
                Với bí quyết gia truyền cùng nguyên liệu tươi ngon, mỗi miếng nem của chúng tôi là sự kết hợp hoàn hảo giữa vị chua thanh,
                ngọt dịu và hương thơm đặc trưng của thịt, bì, và gia vị đặc biệt.
            </p>
            <h2 className="mb-4">Tại sao chọn Nem Thành Nam?</h2>
            <p className='mb-0'>
                Chất lượng đảm bảo: Nem được làm từ nguyên liệu sạch, không chất bảo quản.
            </p>
            <p className='mb-0'>
                Hương vị truyền thống: Đúng chuẩn nem nắm Nam Định, thơm ngon khó cưỡng.
            </p>
            <p className='mb-0'>
                Tiện lợi: Đặt hàng online, giao hàng tận nơi, dễ dàng thưởng thức mọi lúc mọi nơi.
            </p>
            <p className='mb-0'>
                Khám phá ngay các sản phẩm của chúng tôi và trải nghiệm hương vị đặc biệt của Nem Thành Nam!
            </p>`,
    footer: {
        contact: "Liên hệ với chúng tôi qua các kênh thông tin dưới đây.",
        address: "Địa chỉ của chúng tôi"
    },
    payment: {
        button: {
            googleInformation: "Lấy thông tin từ Google",
            address: "Địa chỉ của bạn",
            confirm: "Xác nhận đăt hàng",
        },
        input: {
            name: {
                label: "Tên",
                placeholder: "",
            },
            phone: {
                label: "SĐT",
                placeholder: "",
            },
            email: {
                label: "Email",
                placeholder: "",
            },
            additionAddress: {
                label: "Thông tin thêm về địa chỉ của bạn",
                placeholder: "số nhà, Tòa nhà, tầng, đường, phường, quận, thành phố"
            },
            address: {
                label: "Địa chỉ",
                placeholder: ""
            },
        },
        orderInformation: {
            title: "Thông tin đơn hàng",
            name: "Tiền Sản Phẩm",
            shipping: "Vận chuyển",
            discount: "Giảm giá",
            total: "Tổng",
        },
        paymentMethod: {
            title: "Phương thức thanh toán",
            online: "Thanh toán online",
            cod: "Thanh toán khi nhận hàng"
        }
    }
}

const enLanguage = {

    nav: {
        home: "Home",
        product: 'Product',
        blog: 'Blog',
    },
    smallDescription: {
        support: {
            title: "24/7 Support",
            desctiption: "We always support you 24/7"
        },
        refund: {
            title: "Refund Guarantee",
            desctiption: "We guarantee your money back if you are not satisfied."
        },
        shipping: {
            title: "Free Shipping",
            desctiption: "We guarantee free shipping."
        }
    },
    slogan: "<span>Nem Thành Nam - Traditional Flavors of Nam Dinh</span>",
    about: `<h2 className="mb-4">Welcome to Nem Thành Nam!</h2>
                <p>
                    Nem Thành Nam is proud to be a traditional Giao Thuy nem brand, bringing the rich, delicious flavor of the homeland.
                    With traditional family recipes and fresh ingredients, each piece of our nem is a perfect combination of sour, sweet, and the unique aroma of meat, skin, and special spices.
                    </p>
                    <h2 className="mb-4">Why choose Nem Thành Nam?</h2>
                    <p className='mb-0'>
                    Guaranteed quality: Nem is made from clean ingredients, no preservatives.
                    </p>
                    <p className='mb-0'>
                    Traditional flavor: True to the Nam Dinh nem standard, irresistibly delicious.
                    </p>
                    <p className='mb-0'>
                    Convenience: Order online, delivery to your door, easy to enjoy anytime, anywhere.
                    </p>
                    <p className='mb-0'>
                    Discover our products now and experience the special flavor of Nem Thành Nam!
                    </p>`,
    footer: {
        contact: "Contact us through the information channels below.",
        address: "Our address"
    }
    ,
}
export default { en: enLanguage, vi: vnLanguage };
export type LanguageTypes = "vi" | "en";


export const getLanguage = (): LanguageTypes => {
    const state: RootState = store.getState();
    return state.language.value === "vi" ? "vi" : "en";
    // const language = localStorage.getItem('language');
    // if (!language) return "vi";
    // if (language === 'en')
    //     return 'en';
    // return 'vi';
}