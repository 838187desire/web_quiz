const questions = [
    {
        topHeading: "समोच्चरित भिन्नार्थक शब्दों पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अलि' और 'आलि' शब्द-युग्म का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "सखी, भौंरा", correct: false },
            { text: "भौंरा, सखी", correct: true },
            { text: "कली, भौंरा", correct: false },
            { text: "भौंरा, कली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अलि' का अर्थ भौंरा होता है, जबकि 'आलि' का अर्थ सखी या सहेली होता है।"
    },
    {
        question: "प्रश्न 2. 'अंस' और 'अंश' शब्द-युग्म का सही अर्थ भेद क्या है?",
        answers: shuffle([
            { text: "हिस्सा, कंधा", correct: false },
            { text: "कंधा, हिस्सा", correct: true },
            { text: "अंक, संख्या", correct: false },
            { text: "संख्या, अंक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंस' का अर्थ कंधा होता है और 'अंश' का अर्थ हिस्सा या भाग होता है।"
    },
    {
        question: "प्रश्न 3. 'अनल' और 'अनिल' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "हवा, आग", correct: false },
            { text: "पानी, हवा", correct: false },
            { text: "आग, हवा", correct: true },
            { text: "जंगल, आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनल' का अर्थ आग होता है तथा 'अनिल' का अर्थ हवा होता है।"
    },
    {
        question: "प्रश्न 4. 'अम्बुज' और 'अम्बुद' में क्या भेद है?",
        answers: shuffle([
            { text: "कमल, बादल", correct: true },
            { text: "बादल, कमल", correct: false },
            { text: "समुद्र, कमल", correct: false },
            { text: "कमल, समुद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अम्बुज' (जल में जन्मा) का अर्थ कमल है और 'अम्बुद' (जल देने वाला) का अर्थ बादल है।"
    },
    {
        question: "प्रश्न 5. 'अपेक्षा' और 'उपेक्षा' का सही अर्थ है?",
        answers: shuffle([
            { text: "निरादर, आशा", correct: false },
            { text: "आशा, तिरस्कार", correct: true },
            { text: "तिरस्कार, आवश्यकता", correct: false },
            { text: "आवश्यकता, निरादर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपेक्षा' का अर्थ आशा या तुलना में होता है और 'उपेक्षा' का अर्थ तिरस्कार या निरादर होता है।"
    },
    {
        question: "प्रश्न 6. 'अगम' और 'आगम' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "दुर्लभ, शास्त्र", correct: true },
            { text: "शास्त्र, दुर्लभ", correct: false },
            { text: "पहुँचना, ज्ञान", correct: false },
            { text: "ज्ञान, न पहुँचना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अगम' का अर्थ है जहाँ पहुँचा न जा सके या दुर्लभ, और 'आगम' का अर्थ शास्त्र या आगमन होता है।"
    },
    {
        question: "प्रश्न 7. 'अविराम' और 'अभिराम' का क्रमशः सही अर्थ है-",
        answers: shuffle([
            { text: "सुंदर, लगातार", correct: false },
            { text: "लगातार, सुंदर", correct: true },
            { text: "रुकना, सुंदर", correct: false },
            { text: "सुंदर, रुकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अविराम' का अर्थ बिना रुके अर्थात लगातार होता है और 'अभिराम' का अर्थ सुंदर होता है।"
    },
    {
        question: "प्रश्न 8. 'कुल' और 'कूल' शब्द-युग्म का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "वंश, किनारा", correct: true },
            { text: "किनारा, वंश", correct: false },
            { text: "सब, ठंडा", correct: false },
            { text: "ठंडा, सब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुल' का अर्थ वंश या 'सब' होता है, जबकि 'कूल' का अर्थ नदी का किनारा होता है।"
    },
    {
        question: "प्रश्न 9. 'प्रसाद' और 'प्रासाद' का अर्थ भेद क्या है?",
        answers: shuffle([
            { text: "कृपा, महल", correct: true },
            { text: "महल, कृपा", correct: false },
            { text: "भोग, पूजा", correct: false },
            { text: "पूजा, भोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रसाद' का अर्थ कृपा या भोग होता है और 'प्रासाद' का अर्थ महल होता है।"
    },
    {
        question: "प्रश्न 10. 'तरणि' और 'तरणी' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "नाव, सूर्य", correct: false },
            { text: "सूर्य, नाव", correct: true },
            { text: "युवती, नाव", correct: false },
            { text: "नाव, युवती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तरणि' (छोटी 'णि' की मात्रा) का अर्थ सूर्य होता है और 'तरणी' (बड़ी 'णी' की मात्रा) का अर्थ नाव होता है।"
    },
    {
        question: "प्रश्न 11. 'द्वीप' और 'द्विप' का सही अर्थ है-",
        answers: shuffle([
            { text: "हाथी, टापू", correct: false },
            { text: "टापू, हाथी", correct: true },
            { text: "दीपक, हाथी", correct: false },
            { text: "हाथी, दीपक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्वीप' का अर्थ टापू (जल से घिरा भू-भाग) होता है और 'द्विप' का अर्थ हाथी होता है।"
    },
    {
        question: "प्रश्न 12. 'निर्झर' और 'निर्जर' शब्द-युग्म का अर्थ है-",
        answers: shuffle([
            { text: "देवता, झरना", correct: false },
            { text: "झरना, देवता", correct: true },
            { text: "युवा, झरना", correct: false },
            { text: "झरना, युवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्झर' का अर्थ झरना होता है और 'निर्जर' (जो बूढ़ा न हो) का अर्थ देवता होता है।"
    },
    {
        question: "प्रश्न 13. 'पवन' और 'पावन' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "पवित्र, हवा", correct: false },
            { text: "हवा, पवित्र", correct: true },
            { text: "आग, पवित्र", correct: false },
            { text: "पवित्र, आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पवन' का अर्थ हवा है और 'पावन' का अर्थ पवित्र है।"
    },
    {
        question: "प्रश्न 14. 'अन्न' और 'अन्य' का क्रमशः अर्थ है-",
        answers: shuffle([
            { text: "दूसरा, अनाज", correct: false },
            { text: "अनाज, दूसरा", correct: true },
            { text: "फल, दूसरा", correct: false },
            { text: "अनाज, फल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अन्न' का अर्थ अनाज होता है और 'अन्य' का अर्थ दूसरा होता है।"
    },
    {
        question: "प्रश्न 15. 'ग्रह' और 'गृह' का सही अर्थ है-",
        answers: shuffle([
            { text: "घर, नक्षत्र", correct: false },
            { text: "नक्षत्र, घर", correct: true },
            { text: "गाँव, नक्षत्र", correct: false },
            { text: "नक्षत्र, गाँव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रह' का अर्थ नक्षत्र (जैसे- पृथ्वी, मंगल) होता है और 'गृह' का अर्थ घर होता है।"
    },
    {
        question: "प्रश्न 16. 'चर्म' और 'चरम' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "अंतिम, चमड़ा", correct: false },
            { text: "चमड़ा, अंतिम", correct: true },
            { text: "ऊँचा, चमड़ा", correct: false },
            { text: "चमड़ा, ऊँचा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चर्म' का अर्थ चमड़ा होता है और 'चरम' का अर्थ अंतिम या पराकाष्ठा होता है।"
    },
    {
        question: "प्रश्न 17. 'दिन' और 'दीन' शब्द-युग्म का अर्थ है-",
        answers: shuffle([
            { text: "गरीब, दिवस", correct: false },
            { text: "दिवस, गरीब", correct: true },
            { text: "अमीर, दिवस", correct: false },
            { text: "दिवस, अमीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिन' का अर्थ दिवस होता है और 'दीन' का अर्थ गरीब या असहाय होता है।"
    },
    {
        question: "प्रश्न 18. 'द्रव' और 'द्रव्य' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "पदार्थ, तरल", correct: false },
            { text: "तरल, पदार्थ", correct: false },
            { text: "धन, तरल", correct: false },
            { text: "तरल, धन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्रव' का अर्थ तरल पदार्थ (liquid) होता है, जबकि 'द्रव्य' का अर्थ पदार्थ या धन होता है।"
    },
    {
        question: "प्रश्न 19. 'नियत' और 'नीयत' का अर्थ है-",
        answers: shuffle([
            { text: "इरादा, निश्चित", correct: false },
            { text: "निश्चित, इरादा", correct: true },
            { text: "भाग्य, निश्चित", correct: false },
            { text: "निश्चित, भाग्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नियत' का अर्थ निश्चित या तय होता है और 'नीयत' का अर्थ इरादा या मंशा होता है।"
    },
    {
        question: "प्रश्न 20. 'परिणाम' और 'परिमाण' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "मात्रा, फल", correct: false },
            { text: "फल, मात्रा", correct: true },
            { text: "दूरी, फल", correct: false },
            { text: "फल, दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिणाम' का अर्थ नतीजा या फल होता है और 'परिमाण' का अर्थ मात्रा (quantity) होता है।"
    },
    {
        question: "प्रश्न 21. 'बलि' और 'बली' का सही अर्थ है-",
        answers: shuffle([
            { text: "वीर, बलिदान", correct: false },
            { text: "बलिदान, वीर", correct: true },
            { text: "कर, वीर", correct: false },
            { text: "बलिदान, कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बलि' का अर्थ बलिदान या भेंट होता है और 'बली' का अर्थ वीर या शक्तिशाली होता है।"
    },
    {
        question: "प्रश्न 22. 'भारतीय' और 'भारती' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "सरस्वती, भारत का", correct: false },
            { text: "भारत का, सरस्वती", correct: true },
            { text: "भारत माता, भारत का", correct: false },
            { text: "भारत का, भारत माता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भारतीय' का अर्थ भारत का रहने वाला होता है और 'भारती' माँ सरस्वती का एक नाम है।"
    },
    {
        question: "प्रश्न 23. 'भवन' और 'भुवन' का अर्थ है-",
        answers: shuffle([
            { text: "संसार, घर", correct: false },
            { text: "घर, संसार", correct: true },
            { text: "महल, संसार", correct: false },
            { text: "संसार, महल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भवन' का अर्थ घर या इमारत होता है और 'भुवन' का अर्थ संसार या लोक होता है।"
    },
    {
        question: "प्रश्न 24. 'मूल' और 'मूल्य' का सही अर्थ है-",
        answers: shuffle([
            { text: "कीमत, जड़", correct: false },
            { text: "जड़, कीमत", correct: true },
            { text: "आधार, कीमत", correct: false },
            { text: "जड़, आधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मूल' का अर्थ जड़ या आधार होता है और 'मूल्य' का अर्थ कीमत होता है।"
    },
    {
        question: "प्रश्न 25. 'लक्ष' और 'लक्ष्य' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "लाख, उद्देश्य", correct: true },
            { text: "उद्देश्य, लाख", correct: false },
            { text: "देखना, उद्देश्य", correct: false },
            { text: "लाख, देखना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लक्ष' का अर्थ लाख (संख्या) होता है और 'लक्ष्य' का अर्थ उद्देश्य या निशाना होता है।"
    },
    {
        question: "प्रश्न 26. 'शम' और 'सम' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "समान, शांति", correct: false },
            { text: "शांति, समान", correct: true },
            { text: "चावल, शांति", correct: false },
            { text: "शांति, चावल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शम' का अर्थ शांति या संयम होता है और 'सम' का अर्थ समान या बराबर होता है।"
    },
    {
        question: "प्रश्न 27. 'सर' और 'शर' का अर्थ है-",
        answers: shuffle([
            { text: "बाण, तालाब", correct: false },
            { text: "तालाब, बाण", correct: true },
            { text: "सिर, बाण", correct: false },
            { text: "बाण, सिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सर' का अर्थ तालाब होता है और 'शर' का अर्थ बाण होता है।"
    },
    {
        question: "प्रश्न 28. 'शुल्क' और 'शुक्ल' का सही अर्थ है-",
        answers: shuffle([
            { text: "उजला, फीस", correct: false },
            { text: "फीस, उजला", correct: true },
            { text: "साफ, फीस", correct: false },
            { text: "फीस, साफ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शुल्क' का अर्थ फीस होता है और 'शुक्ल' का अर्थ उजला या सफेद होता है (जैसे- शुक्ल पक्ष)।"
    },
    {
        question: "प्रश्न 29. 'अध्ययन' और 'अध्यापन' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "पढ़ाना, पढ़ना", correct: false },
            { text: "पढ़ना, पढ़ाना", correct: true },
            { text: "लिखना, पढ़ना", correct: false },
            { text: "पढ़ना, लिखना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्ययन' का अर्थ पढ़ना (स्वयं के लिए) होता है और 'अध्यापन' का अर्थ पढ़ाना (दूसरों को) होता है।"
    },
    {
        question: "प्रश्न 30. 'आधि' और 'व्याधि' का क्रमशः अर्थ है-",
        answers: shuffle([
            { text: "शारीरिक कष्ट, मानसिक कष्ट", correct: false },
            { text: "मानसिक कष्ट, शारीरिक कष्ट", correct: true },
            { text: "रोग, शोक", correct: false },
            { text: "शोक, रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आधि' का अर्थ मानसिक पीड़ा होता है और 'व्याधि' का अर्थ शारीरिक रोग या कष्ट होता है।"
    },
    {
        question: "प्रश्न 31. 'कृति' और 'कृती' का सही अर्थ भेद क्या है?",
        answers: shuffle([
            { text: "रचना, रचनाकार", correct: true },
            { text: "रचनाकार, रचना", correct: false },
            { text: "कार्य, करने वाला", correct: false },
            { text: "करने वाला, कार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृति' का अर्थ रचना होता है और 'कृती' का अर्थ रचनाकार या पुण्यात्मा होता है।"
    },
    {
        question: "प्रश्न 32. 'प्रणय' और 'परिणय' का सही अर्थ है-",
        answers: shuffle([
            { text: "विवाह, प्रेम", correct: false },
            { text: "प्रेम, विवाह", correct: true },
            { text: "मिलाप, प्रेम", correct: false },
            { text: "प्रेम, मिलाप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रणय' का अर्थ प्रेम होता है और 'परिणय' का अर्थ विवाह होता है।"
    },
    {
        question: "प्रश्न 33. 'जलद' और 'जलज' शब्द-युग्म का सही अर्थ है-",
        answers: shuffle([
            { text: "कमल, बादल", correct: false },
            { text: "बादल, कमल", correct: true },
            { text: "समुद्र, कमल", correct: false },
            { text: "बादल, समुद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलद' (जल देने वाला) का अर्थ बादल होता है और 'जलज' (जल में जन्मा) का अर्थ कमल होता है।"
    },
    {
        question: "प्रश्न 34. 'अंगना' और 'अँगना' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "आँगन, स्त्री", correct: false },
            { text: "स्त्री, आँगन", correct: true },
            { text: "शरीर, आँगन", correct: false },
            { text: "आँगन, शरीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंगना' का अर्थ स्त्री होता है, जबकि 'अँगना' (चंद्रबिंदु के साथ) का अर्थ घर का आँगन होता है।"
    },
    {
        question: "प्रश्न 35. 'अपकार' और 'उपकार' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "भलाई, बुराई", correct: false },
            { text: "बुराई, भलाई", correct: true },
            { text: "निंदा, स्तुति", correct: false },
            { text: "स्तुति, निंदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपकार' का अर्थ बुराई या अहित करना होता है और 'उपकार' का अर्थ भलाई करना होता है।"
    },
    {
        question: "प्रश्न 36. 'अवधि' और 'अवधी' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "एक भाषा, समय-सीमा", correct: false },
            { text: "समय-सीमा, एक भाषा", correct: true },
            { text: "काल, भाषा", correct: false },
            { text: "भाषा, काल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवधि' (छोटी 'धि' की मात्रा) का अर्थ समय-सीमा या काल होता है, जबकि 'अवधी' (बड़ी 'धी' की मात्रा) अवध क्षेत्र की एक भाषा है।"
    },
    {
        question: "प्रश्न 37. 'सकल' और 'शकल' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "टुकड़ा, सम्पूर्ण", correct: false },
            { text: "सम्पूर्ण, टुकड़ा", correct: true },
            { text: "अंश, सारा", correct: false },
            { text: "सारा, अंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सकल' का अर्थ सम्पूर्ण या सारा होता है, जबकि 'शकल' का अर्थ टुकड़ा या अंश होता है।"
    },
    {
        question: "प्रश्न 38. 'इत्र' और 'इतर' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "दूसरा, सुगंध", correct: false },
            { text: "सुगंध, दूसरा", correct: true },
            { text: "मित्र, सुगंध", correct: false },
            { text: "सुगंध, मित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इत्र' का अर्थ सुगंधित पदार्थ होता है और 'इतर' का अर्थ 'अन्य' या 'दूसरा' होता है।"
    },
    {
        question: "प्रश्न 39. 'कंकाल' और 'कंगाल' का सही अर्थ है-",
        answers: shuffle([
            { text: "दरिद्र, हड्डियों का ढाँचा", correct: false },
            { text: "हड्डियों का ढाँचा, दरिद्र", correct: true },
            { text: "गरीब, शरीर", correct: false },
            { text: "शरीर, गरीब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कंकाल' का अर्थ हड्डियों का ढाँचा होता है और 'कंगाल' का अर्थ अत्यंत निर्धन या दरिद्र होता है।"
    },
    {
        question: "प्रश्न 40. 'कलि' और 'कली' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "फूल का प्रारंभिक रूप, कलियुग", correct: false },
            { text: "कलियुग, फूल का प्रारंभिक रूप", correct: true },
            { text: "दुःख, फूल", correct: false },
            { text: "कलियुग, दुःख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलि' का अर्थ कलियुग या दुःख होता है और 'कली' का अर्थ फूल का अविकसित रूप होता है।"
    },
    {
        question: "प्रश्न 41. 'कृपण' और 'कृपाण' का सही अर्थ है-",
        answers: shuffle([
            { text: "कटार, कंजूस", correct: false },
            { text: "कंजूस, कटार", correct: true },
            { text: "दानी, कटार", correct: false },
            { text: "कटार, दानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृपण' का अर्थ कंजूस होता है और 'कृपाण' का अर्थ कटार या तलवार होता है।"
    },
    {
        question: "प्रश्न 42. 'कोटि' और 'कोटी' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "श्रेणी, करोड़", correct: false },
            { text: "करोड़, श्रेणी", correct: true },
            { text: "कमर, करोड़", correct: false },
            { text: "करोड़, कमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोटि' का अर्थ करोड़ (संख्या) होता है और 'कोटी' का अर्थ श्रेणी या प्रकार होता है।"
    },
    {
        question: "प्रश्न 43. 'खल' और 'खलु' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "निश्चय ही, दुष्ट", correct: false },
            { text: "दुष्ट, निश्चय ही", correct: true },
            { text: "दुर्जन, मित्र", correct: false },
            { text: "मित्र, दुर्जन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खल' का अर्थ दुष्ट या दुर्जन होता है और 'खलु' एक अव्यय है जिसका अर्थ 'निश्चय ही' होता है।"
    },
    {
        question: "प्रश्न 44. 'गण' और 'गण्य' का सही अर्थ है-",
        answers: shuffle([
            { text: "गिनने योग्य, समूह", correct: false },
            { text: "समूह, गिनने योग्य", correct: true },
            { text: "देवता, समूह", correct: false },
            { text: "समूह, देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गण' का अर्थ समूह होता है और 'गण्य' का अर्थ गिनने योग्य होता है।"
    },
    {
        question: "प्रश्न 45. 'चिर' और 'चीर' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "वस्त्र, पुराना", correct: false },
            { text: "पुराना, वस्त्र", correct: true },
            { text: "लंबा, वस्त्र", correct: false },
            { text: "पुराना, लंबा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिर' का अर्थ पुराना या दीर्घकाल होता है और 'चीर' का अर्थ वस्त्र या कपड़ा होता है।"
    },
    {
        question: "प्रश्न 46. 'चपत' और 'चंपत' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "गायब होना, थप्पड़", correct: false },
            { text: "थप्पड़, गायब होना", correct: true },
            { text: "चोट, भागना", correct: false },
            { text: "भागना, चोट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चपत' का अर्थ थप्पड़ होता है और 'चंपत' का अर्थ गायब हो जाना या भाग जाना होता है।"
    },
    {
        question: "प्रश्न 47. 'छात्र' और 'क्षात्र' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "क्षत्रिय संबंधी, विद्यार्थी", correct: false },
            { text: "विद्यार्थी, क्षत्रिय संबंधी", correct: true },
            { text: "छाता, क्षत्रिय", correct: false },
            { text: "क्षत्रिय, छाता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छात्र' का अर्थ विद्यार्थी होता है और 'क्षात्र' का अर्थ क्षत्रिय से संबंधित होता है (जैसे- क्षात्र धर्म)।"
    },
    {
        question: "प्रश्न 48. 'तरंग' और 'तुरंग' का सही अर्थ है-",
        answers: shuffle([
            { text: "घोड़ा, लहर", correct: false },
            { text: "लहर, घोड़ा", correct: true },
            { text: "मन, घोड़ा", correct: false },
            { text: "लहर, मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तरंग' का अर्थ लहर होता है और 'तुरंग' का अर्थ घोड़ा होता है।"
    },
    {
        question: "प्रश्न 49. 'दशा' और 'दिशा' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "ओर, हालत", correct: false },
            { text: "हालत, ओर", correct: true },
            { text: "अवस्था, दिशा", correct: false },
            { text: "दिशा, अवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दशा' का अर्थ हालत या अवस्था होता है और 'दिशा' का अर्थ 'ओर' या 'तरफ' होता है।"
    },
    {
        question: "प्रश्न 50. 'दारु' और 'दारू' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "शराब, लकड़ी", correct: false },
            { text: "लकड़ी, शराब", correct: true },
            { text: "दवा, लकड़ी", correct: false },
            { text: "लकड़ी, दवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दारु' (छोटा 'रु') का अर्थ लकड़ी या देवदार होता है और 'दारू' (बड़ा 'रू') का अर्थ शराब या मदिरा होता है।"
    }
];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }