export default {
    en: {
        nav: {
            home: "Home",
            product: 'Product',
            blog: 'Blog',
        }
    },
    vi: {
        nav: {
            home: "Trang chủ",
            about: 'Về chúng tôi',
            contact: 'Liên hệ',
            product: 'Sản phẩm',
            blog: 'Tin tức',
        }
    }
}

export type LanguageTypes = "vi" | "en";


export const getLanguage = () : LanguageTypes => {
    const language = localStorage.getItem('language');
    if(!language)  return "vi";
    if(language === 'en') 
        return 'en';
    return 'vi';
}