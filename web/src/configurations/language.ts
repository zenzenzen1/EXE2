type languageElements = {
    nav :{
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
    }
}

export default {
    en: {
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
        }
    } as languageElements,
    vi: {
        nav: {
            home: "Trang chủ",
            about: 'Về chúng tôi',
            contact: 'Liên hệ',
            product: 'Sản phẩm',
            blog: 'Tin tức',
        },
        smallDescription : {
            support: {
                title: "Hỗ trợ 24/7",
                desctiption: "Chúng tôi luôn sẵn lòng hỗ trợ bạn mọi lúc mọi nơi."
            },
            refund: {
                title: "Bảo hành hoàn tiền",
                desctiption: "Chúng tôi bảo hành hoàn tiền nếu bạn không hài lòng."
            },
            shipping: {
                title: "Miễn phí vận chuyển",
                desctiption: "Chúng tôi bảo hành vận chuyển miễn phí."
            }
        }
    } as languageElements
}

export type LanguageTypes = "vi" | "en";


export const getLanguage = () : LanguageTypes => {
    const language = localStorage.getItem('language');
    if(!language)  return "vi";
    if(language === 'en') 
        return 'en';
    return 'vi';
}