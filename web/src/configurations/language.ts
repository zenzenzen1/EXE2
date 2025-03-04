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

export const getLanguage = () : "vi" | "en" => {
    const language = localStorage.getItem('language');
    if(!language)  return "vi";
    if(language === 'vi') 
        return 'vi';
    return 'en';
}