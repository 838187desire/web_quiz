const questions = [
    {
        topHeading: "अनेकार्थी शब्दों पर आधारित 50 MCQs, part_3 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'चाँद' का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "चंद्रमा", correct: false },
            { text: "सिर का एक गहना", correct: false },
            { text: "कपूर", correct: false },
            { text: "सूर्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाँद' का अर्थ चंद्रमा, सिर का एक गहना (चाँद-तारा) और कपूर होता है।"
    },
    {
        question: "प्रश्न 2. 'संग' का अनेकार्थी है-",
        answers: shuffle([
            { text: "साथ", correct: false },
            { text: "पत्थर", correct: false },
            { text: "आसक्ति", correct: false },
            { text: "(अ) और (स) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संग' का अर्थ साथ और आसक्ति (मोह) होता है।"
    },
    {
        question: "प्रश्न 3. 'संकर' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "मिश्रित", correct: false },
            { text: "दोगला", correct: false },
            { text: "एक जाति", correct: false },
            { text: "शुद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संकर' का अर्थ मिश्रित, दोगला और एक जाति होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'शुद्ध' इसका विलोम है।"
    },
    {
        question: "प्रश्न 4. 'सैंधव' का अनेकार्थी है-",
        answers: shuffle([
            { text: "घोड़ा", correct: false },
            { text: "नमक", correct: false },
            { text: "सिंधु देश का निवासी", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सैंधव' का अर्थ घोड़ा, एक प्रकार का नमक और सिंधु देश का निवासी होता है।"
    },
    {
        question: "प्रश्न 5. 'स्थूल' का क्या अर्थ नहीं है?",
        answers: shuffle([
            { text: "मोटा", correct: false },
            { text: "सहज में दिखाई देने वाला", correct: false },
            { text: "निश्चित", correct: false },
            { text: "सूक्ष्म", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्थूल' का अर्थ मोटा, सहज में दिखाई या समझ में आने वाला होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सूक्ष्म' इसका विलोम है।"
    },
    {
        question: "प्रश्न 6. 'सूरत' का एक अर्थ 'चेहरा' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "बनावट", correct: false },
            { text: "उपाय", correct: false },
            { text: "हालत", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूरत' का अर्थ चेहरा, बनावट, उपाय और हालत होता है।"
    },
    {
        question: "प्रश्न 7. 'हेतु' का अनेकार्थी है-",
        answers: shuffle([
            { text: "कारण", correct: false },
            { text: "उद्देश्य", correct: false },
            { text: "प्रयोजन", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हेतु' का अर्थ कारण, उद्देश्य और प्रयोजन होता है।"
    },
    {
        question: "प्रश्न 8. 'क्षुद्र' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "नीच", correct: false },
            { text: "कंजूस", correct: false },
            { text: "छोटा", correct: false },
            { text: "महान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्षुद्र' का अर्थ नीच, कंजूस और छोटा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'महान' इसका विलोम है।"
    },
    {
        question: "प्रश्न 9. 'तिमिर' का अनेकार्थी है-",
        answers: shuffle([
            { text: "(अ) अंधकार", correct: false },
            { text: "(ब) एक रोग", correct: false },
            { text: "(स) धुंध", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तिमिर' का अर्थ अंधकार और आँखों का एक रोग (रतौंधी) होता है।"
    },
    {
        question: "प्रश्न 10. 'तोय' शब्द का अर्थ है-",
        answers: shuffle([
            { text: "जल", correct: true },
            { text: "बादल", correct: false },
            { text: "नदी", correct: false },
            { text: "समुद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तोय' जल का पर्यायवाची है, लेकिन अनेकार्थी के रूप में भी पूछा जाता है।"
    },
    {
        question: "प्रश्न 11. 'धर्म' का एक अर्थ 'कर्तव्य' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "स्वभाव", correct: false },
            { text: "प्रकृति", correct: false },
            { text: "संप्रदाय", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धर्म' का अर्थ कर्तव्य, स्वभाव, प्रकृति और संप्रदाय होता है।"
    },
    {
        question: "प्रश्न 12. 'ध्रुव' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "स्थिर", correct: false },
            { text: "निश्चित", correct: false },
            { text: "एक तारा", correct: false },
            { text: "चलायमान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ध्रुव' का अर्थ स्थिर, निश्चित और एक प्रसिद्ध तारा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'चलायमान' इसका विलोम है।"
    },
    {
        question: "प्रश्न 13. 'धार' का अनेकार्थी है-",
        answers: shuffle([
            { text: "प्रवाह", correct: false },
            { text: "सेना", correct: false },
            { text: "किनारा", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धार' का अर्थ प्रवाह, सेना और किसी वस्तु का किनारा (जैसे- तलवार की धार) होता है।"
    },
    {
        question: "प्रश्न 14. 'नग' का अनेकार्थी है-",
        answers: shuffle([
            { text: "पर्वत", correct: false },
            { text: "वृक्ष", correct: false },
            { text: "रत्न", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नग' का अर्थ पर्वत, वृक्ष, रत्न और संख्या होता है।"
    },
    {
        question: "प्रश्न 15. 'पयोधर' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "बादल", correct: false },
            { text: "स्तन", correct: false },
            { text: "पर्वत", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पयोधर' (पय/जल धारण करने वाला) का अर्थ बादल, स्तन और पर्वत होता है।"
    },
    {
        question: "प्रश्न 16. 'पानी' का अर्थ 'चमक' किस संदर्भ में प्रयुक्त होता है?",
        answers: shuffle([
            { text: "मोती", correct: true },
            { text: "आटा", correct: false },
            { text: "मनुष्य", correct: false },
            { text: "आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मोती का पानी' का अर्थ मोती की चमक या आब होता है।"
    },
    {
        question: "प्रश्न 17. 'मंडल' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "वृत्त", correct: false },
            { text: "सूर्य का घेरा", correct: false },
            { text: "एक प्रशासनिक इकाई", correct: false },
            { text: "रेखा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मंडल' का अर्थ वृत्त, सूर्य या चंद्रमा का घेरा और एक प्रशासनिक इकाई (कमिश्नरी) होता है।"
    },
    {
        question: "प्रश्न 18. 'रसूल' का अनेकार्थी है-",
        answers: shuffle([
            { text: "दूत", correct: false },
            { text: "पैगंबर", correct: false },
            { text: "समाचार वाहक", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रसूल' का अर्थ दूत, पैगंबर और समाचार लाने वाला होता है।"
    },
    {
        question: "प्रश्न 19. 'लय' का एक अर्थ 'ताल' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "(अ) धुन", correct: false },
            { text: "(ब) मग्न होना", correct: false },
            { text: "(स) प्रलय", correct: false },
            { text: "(ब) और (स) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लय' का अर्थ संगीत की ताल या धुन, किसी काम में मग्न होना (तल्लीन) और प्रलय होता है।"
    },
    {
        question: "प्रश्न 20. 'उमा' का अनेकार्थी है-",
        answers: shuffle([
            { text: "पार्वती", correct: false },
            { text: "हल्दी", correct: false },
            { text: "कीर्ति", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उमा' का अर्थ पार्वती, हल्दी और कीर्ति होता है।"
    },
    {
        question: "प्रश्न 21. 'कला' का एक अर्थ 'गुण' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "अंश", correct: false },
            { text: "चंद्रमा का सोलहवाँ भाग", correct: false },
            { text: "समय का एक भाग", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कला' का अर्थ गुण, अंश, चंद्रमा का भाग और समय का एक भाग होता है।"
    },
    {
        question: "प्रश्न 22. 'कोटि' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "करोड़", correct: false },
            { text: "श्रेणी", correct: false },
            { text: "धनुष का सिरा", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोटि' का अर्थ करोड़, श्रेणी (उच्च कोटि) और धनुष का सिरा होता है।"
    },
    {
        question: "प्रश्न 23. 'गोली' शब्द का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "दवा की टिकिया", correct: false },
            { text: "बंदूक की गोली", correct: false },
            { text: "कंचा", correct: false },
            { text: "समूह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गोली' का अर्थ दवा की टिकिया, बंदूक की गोली और खेलने वाला कंचा होता है।"
    },
    {
        question: "प्रश्न 24. 'जायज' का अनेकार्थी है-",
        answers: shuffle([
            { text: "उचित", correct: false },
            { text: "कानूनी", correct: false },
            { text: "वैध", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जायज' का अर्थ उचित, कानूनी और वैध होता है।"
    },
    {
        question: "प्रश्न 25. 'जेष्ठ' का एक अर्थ 'बड़ा भाई' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "श्रेष्ठ", correct: false },
            { text: "एक महीना", correct: false },
            { text: "पति का बड़ा भाई", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्येष्ठ' का अर्थ बड़ा, श्रेष्ठ और हिंदी पंचांग का एक महीना होता है।"
    },
    {
        question: "प्रश्न 26. 'ढाल' का अनेकार्थी है-",
        answers: shuffle([
            { text: "रक्षक अस्त्र", correct: false },
            { text: "उतार", correct: false },
            { text: "ढब", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढाल' का अर्थ रक्षक अस्त्र, उतार (ढलान) और ढब (तरीका) होता है।"
    },
    {
        question: "प्रश्न 27. 'धाम' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "घर", correct: false },
            { text: "शरीर", correct: false },
            { text: "तीर्थ स्थान", correct: false },
            { text: "धन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धाम' का अर्थ घर, शरीर और तीर्थ स्थान (जैसे- चार धाम) होता है।"
    },
    {
        question: "प्रश्न 28. 'निशाना' का अनेकार्थी है-",
        answers: shuffle([
            { text: "लक्ष्य", correct: false },
            { text: "चिह्न", correct: false },
            { text: "वार करने की जगह", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निशाना' का अर्थ लक्ष्य, चिह्न और वार करने की जगह होता है।"
    },
    {
        question: "प्रश्न 29. 'पर' का एक अर्थ 'पंख' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "ऊपर", correct: false },
            { text: "किंतु", correct: false },
            { text: "बाद का", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर' का अर्थ पंख, ऊपर, किंतु और बाद का होता है।"
    },
    {
        question: "प्रश्न 30. 'भाग' का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "हिस्सा", correct: false },
            { text: "दौड़ना", correct: true },
            { text: "भाग्य", correct: false },
            { text: "विभाजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भाग' का अर्थ हिस्सा, भाग्य और विभाजन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दौड़ना' एक क्रिया है, जिसका रूप 'भागना' होता है।"
    },
    {
        question: "प्रश्न 31. 'भीर' का अनेकार्थी है-",
        answers: shuffle([
            { text: "(अ) भीड़", correct: false },
            { text: "(ब) कायर", correct: false },
            { text: "(स) संकट", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भीर' का अर्थ भीड़ और कायर (भीरु) होता है।"
    },
    {
        question: "प्रश्न 32. 'मानक' का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "श्रेष्ठ", correct: false },
            { text: "प्रामाणिक", correct: false },
            { text: "आदर्श", correct: false },
            { text: "मन का", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मानक' का अर्थ श्रेष्ठ, प्रामाणिक और आदर्श होता है।"
    },
    {
        question: "प्रश्न 33. 'झाड़' का एक अर्थ 'गुल्म' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "डाँट-फटकार", correct: false },
            { text: "एक प्रकार का चिराग", correct: false },
            { text: "सफाई", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झाड़' का अर्थ गुल्म, डाँट-फटकार और एक प्रकार का चिराग (फानूस) होता है।"
    },
    {
        question: "प्रश्न 34. 'टीका' का एक अर्थ 'व्याख्या' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "तिलक", correct: false },
            { text: "फलदान", correct: false },
            { text: "आलोचना", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टीका' का अर्थ व्याख्या, तिलक, फलदान और आलोचना (टीका-टिप्पणी) होता है।"
    },
    {
        question: "प्रश्न 35. 'लहर' का एक अर्थ 'तरंग' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "उमंग", correct: false },
            { text: "झोंका", correct: false },
            { text: "मौज", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लहर' का अर्थ तरंग, उमंग, झोंका और मौज होता है।"
    },
    {
        question: "प्रश्न 36. 'वाम' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "बायाँ", correct: false },
            { text: "प्रतिकूल", correct: false },
            { text: "सुंदर स्त्री", correct: false },
            { text: "सीधा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाम' का अर्थ बायाँ, प्रतिकूल और सुंदर स्त्री होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सीधा' इसका विलोम है।"
    },
    {
        question: "प्रश्न 37. 'शून्य' का अनेकार्थी है-",
        answers: shuffle([
            { text: "आकाश", correct: false },
            { text: "अभाव", correct: false },
            { text: "ईश्वर", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शून्य' का अर्थ आकाश, अभाव, ईश्वर और कुछ नहीं होता है।"
    },
    {
        question: "प्रश्न 38. 'ठोकना' का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "कील गाड़ना", correct: false },
            { text: "मारना", correct: false },
            { text: "मुकदमा करना", correct: false },
            { text: "निकालना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठोकना' का अर्थ कील गाड़ना, मारना और मुकदमा करना (दावा ठोकना) होता है।"
    },
    {
        question: "प्रश्न 39. 'सुधा' का अनेकार्थी है-",
        answers: shuffle([
            { text: "अमृत", correct: false },
            { text: "जल", correct: false },
            { text: "दूध", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुधा' का अर्थ अमृत, जल और दूध होता है।"
    },
    {
        question: "प्रश्न 40. 'सुरभि' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "सुगंध", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "गाय", correct: false },
            { text: "राक्षस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुरभि' का अर्थ सुगंध, पृथ्वी, गाय और वसंत ऋतु होता है।"
    },
    {
        question: "प्रश्न 41. 'ताल' का एक अर्थ 'तालाब' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "संगीत का ताल", correct: false },
            { text: "ताड़ का पेड़", correct: false },
            { text: "हथेली", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ताल' का अर्थ तालाब, संगीत का ताल, ताड़ का पेड़ और हथेली होता है।"
    },
    {
        question: "प्रश्न 42. 'घट' का अनेकार्थी है-",
        answers: shuffle([
            { text: "घड़ा", correct: false },
            { text: "शरीर", correct: false },
            { text: "हृदय", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घट' का अर्थ घड़ा, शरीर, हृदय और कम होना होता है।"
    },
    {
        question: "प्रश्न 43. 'चक्र' शब्द का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "पहिया", correct: false },
            { text: "विष्णु का अस्त्र", correct: false },
            { text: "घेरा", correct: false },
            { text: "सीधा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चक्र' का अर्थ पहिया, विष्णु का अस्त्र (सुदर्शन चक्र) और घेरा होता है।"
    },
    {
        question: "प्रश्न 44. 'जरा' का एक अर्थ 'बुढ़ापा' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "थोड़ा", correct: true },
            { text: "ज्वार", correct: false },
            { text: "जलना", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जरा' (ज में नुक्ता) का अर्थ 'थोड़ा' होता है और 'जरा' (बिना नुक्ते के) का अर्थ 'बुढ़ापा' होता है।"
    },
    {
        question: "प्रश्न 45. 'टूट' का अनेकार्थी है-",
        answers: shuffle([
            { text: "कमी", correct: false },
            { text: "घाटा", correct: false },
            { text: "दरिद्रता", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टूट' का अर्थ कमी, घाटा और दरिद्रता होता है।"
    },
    {
        question: "प्रश्न 46. 'तान' का एक अर्थ 'संगीत का सुर' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "खींचना", correct: false },
            { text: "विस्तार", correct: false },
            { text: "ऐंठ", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तान' का अर्थ संगीत का सुर, खींचना और विस्तार होता है।"
    },
    {
        question: "प्रश्न 47. 'पूत' का अनेकार्थी शब्द नहीं है-",
        answers: shuffle([
            { text: "पुत्र", correct: false },
            { text: "पवित्र", correct: false },
            { text: "शंख", correct: false },
            { text: "पुत्री", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पूत' का अर्थ पुत्र, पवित्र और शंख होता है।"
    },
    {
        question: "प्रश्न 48. 'पेशी' का अनेकार्थी है-",
        answers: shuffle([
            { text: "तलवार की म्यान", correct: false },
            { text: "मांस का टुकड़ा", correct: false },
            { text: "अदालत में उपस्थिति", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेशी' का अर्थ तलवार की म्यान, मांस का टुकड़ा और अदालत में उपस्थिति होता है।"
    },
    {
        question: "प्रश्न 49. 'बंधन' का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "कैद", correct: false },
            { text: "बाँध", correct: false },
            { text: "नियम", correct: false },
            { text: "मोक्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बंधन' का अर्थ कैद, बाँध और नियम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'मोक्ष' इसका विलोम है।"
    },
    {
        question: "प्रश्न 50. 'मधुकर' का अनेकार्थी है-",
        answers: shuffle([
            { text: "भौंरा", correct: false },
            { text: "एक राग", correct: false },
            { text: "प्रेमी", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मधुकर' का अर्थ भौंरा, एक राग और प्रेमी होता है।"
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