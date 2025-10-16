const questions = [
    {
        topHeading: "समोच्चरित भिन्नार्थक शब्दों पर आधारित 50 MCQs, part_3 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'पानी' और 'पाणि' का सही अर्थ है-",
        answers: shuffle([
            { text: "हाथ, जल", correct: false },
            { text: "जल, हाथ", correct: true },
            { text: "पीना, हाथ", correct: false },
            { text: "हाथ, पीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पानी' का अर्थ जल होता है और 'पाणि' का अर्थ हाथ होता है (जैसे- वीणापाणि)।"
    },
    {
        question: "प्रश्न 2. 'बंदर' और 'बंदरगाह' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "एक पशु, जहाँ जहाज़ ठहरते हैं", correct: true },
            { text: "जहाँ जहाज़ ठहरते हैं, एक पशु", correct: false },
            { text: "दोनों का अर्थ पशु है", correct: false },
            { text: "दोनों का अर्थ स्थान है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बंदर' एक पशु है, जबकि 'बंदरगाह' वह स्थान है जहाँ समुद्री जहाज़ रुकते हैं।"
    },
    {
        question: "प्रश्न 3. 'मधु' और 'मधुप' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "शहद, भौंरा", correct: true },
            { text: "भौंरा, शहद", correct: false },
            { text: "मदिरा, भौंरा", correct: false },
            { text: "भौंरा, मदिरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मधु' का अर्थ शहद या मदिरा होता है और 'मधुप' (मधु पीने वाला) का अर्थ भौंरा होता है।"
    },
    {
        question: "प्रश्न 4. 'योग' और 'योग्य' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "लायक, मेल", correct: false },
            { text: "मेल, लायक", correct: true },
            { text: "ध्यान, लायक", correct: false },
            { text: "मेल, ध्यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'योग' का अर्थ मेल या जुड़ना होता है और 'योग्य' का अर्थ लायक या काबिल होता है।"
    },
    {
        question: "प्रश्न 5. 'रात' और 'रत' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "लगा हुआ, रात्रि", correct: false },
            { text: "रात्रि, लगा हुआ", correct: true },
            { text: "खून, रात्रि", correct: false },
            { text: "रात्रि, खून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रात' का अर्थ रात्रि होता है और 'रत' का अर्थ किसी काम में लगा हुआ या मग्न होता है।"
    },
    {
        question: "प्रश्न 6. 'वस्तु' और 'वास्तु' का सही अर्थ है-",
        answers: shuffle([
            { text: "भवन निर्माण कला, चीज़", correct: false },
            { text: "चीज़, भवन निर्माण कला", correct: true },
            { text: "सामान, मकान", correct: false },
            { text: "मकान, सामान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वस्तु' का अर्थ कोई चीज़ या पदार्थ होता है और 'वास्तु' का संबंध भवन निर्माण कला (वास्तु शास्त्र) से है।"
    },
    {
        question: "प्रश्न 7. 'व्रण' और 'वर्ण' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "रंग, घाव", correct: false },
            { text: "घाव, रंग", correct: true },
            { text: "घाव, अक्षर", correct: false },
            { text: "घाव, जाति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व्रण' का अर्थ घाव होता है, जबकि 'वर्ण' का अर्थ रंग, अक्षर या जाति होता है।"
    },
    {
        question: "प्रश्न 8. 'शहर' और 'सहर' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "सुबह, नगर", correct: false },
            { text: "नगर, सुबह", correct: true },
            { text: "दोपहर, नगर", correct: false },
            { text: "नगर, दोपहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शहर' का अर्थ नगर होता है और 'सहर' का अर्थ सुबह या भोर होता है।"
    },
    {
        question: "प्रश्न 9. 'शती' और 'सती' का सही अर्थ है-",
        answers: shuffle([
            { text: "पतिव्रता स्त्री, सौ वर्ष", correct: false },
            { text: "सौ वर्ष, पतिव्रता स्त्री", correct: true },
            { text: "शताब्दी, साध्वी", correct: false },
            { text: "पतिव्रता स्त्री, शताब्दी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शती' का अर्थ सौ वर्षों का समूह (शताब्दी) होता है और 'सती' का अर्थ पतिव्रता स्त्री होता है।"
    },
    {
        question: "प्रश्न 10. 'श्वपच' और 'स्वपच' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "चांडाल, स्वयं भोजन पकाने वाला", correct: true },
            { text: "स्वयं भोजन पकाने वाला, चांडाल", correct: false },
            { text: "कुत्ता, चांडाल", correct: false },
            { text: "चांडाल, कुत्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्वपच' का अर्थ कुत्ते का मांस खाने वाला अर्थात चांडाल होता है और 'स्वपच' का अर्थ स्वयं भोजन पकाने वाला होता है।"
    },
    {
        question: "प्रश्न 11. 'सजा' और 'सज़ा' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "दंड, सजावट", correct: false },
            { text: "सजावट, दंड", correct: true },
            { text: "अलंकृत, दंड", correct: false },
            { text: "दंड, अलंकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सजा' (बिना नुक्ते के) का अर्थ सजावट होता है, जबकि 'सज़ा' (नुक्ते के साथ) का अर्थ दंड होता है।"
    },
    {
        question: "प्रश्न 12. 'हुति' और 'हूति' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "बुलावा, हवन", correct: false },
            { text: "हवन, बुलावा", correct: true },
            { text: "आहुति, बुलाना", correct: false },
            { text: "हवन, यज्ञ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हुति' का अर्थ हवन या आहुति होता है और 'हूति' का अर्थ बुलावा या आह्वान होता है।"
    },
    {
        question: "प्रश्न 13. 'अभय' और 'उभय' का सही अर्थ है-",
        answers: shuffle([
            { text: "दोनों, निर्भय", correct: false },
            { text: "निर्भय, दोनों", correct: true },
            { text: "भयभीत, दोनों", correct: false },
            { text: "दोनों, भयभीत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभय' का अर्थ भय रहित अर्थात निर्भय होता है और 'उभय' का अर्थ दोनों होता है।"
    },
    {
        question: "प्रश्न 14. 'असित' और 'अशित' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "खाया हुआ, काला", correct: false },
            { text: "काला, खाया हुआ", correct: true },
            { text: "तेज, काला", correct: false },
            { text: "काला, तेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'असित' का अर्थ काला या श्याम होता है, जबकि 'अशित' का अर्थ खाया हुआ होता है।"
    },
    {
        question: "प्रश्न 15. 'इंदिरा' और 'इंद्रा' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "इंद्राणी, लक्ष्मी", correct: false },
            { text: "लक्ष्मी, इंद्राणी", correct: true },
            { text: "सरस्वती, इंद्राणी", correct: false },
            { text: "इंद्राणी, सरस्वती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इंदिरा' देवी लक्ष्मी का नाम है, जबकि 'इंद्रा' इंद्र की पत्नी, इंद्राणी का नाम है।"
    },
    {
        question: "प्रश्न 16. 'उपधान' और 'अवधान' का सही अर्थ है-",
        answers: shuffle([
            { text: "ध्यान, तकिया", correct: false },
            { text: "तकिया, ध्यान", correct: true },
            { text: "समाधान, तकिया", correct: false },
            { text: "तकिया, समाधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपधान' का अर्थ तकिया होता है और 'अवधान' का अर्थ ध्यान या मनोयोग होता है।"
    },
    {
        question: "प्रश्न 17. 'कटिबंध' और 'कटिबद्ध' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "तैयार, कमरबंद", correct: false },
            { text: "कमरबंद, तैयार", correct: false },
            { text: "करधनी, तत्पर", correct: false },
            { text: "कमरबंद, तत्पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटिबंध' का अर्थ कमरबंद या करधनी होता है और 'कटिबद्ध' का अर्थ किसी काम के लिए तैयार या तत्पर होता है।"
    },
    {
        question: "प्रश्न 18. 'कलुष' और 'कुलिश' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "वज्र, पाप", correct: false },
            { text: "पाप, वज्र", correct: true },
            { text: "कठोर, पाप", correct: false },
            { text: "पाप, कठोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलुष' का अर्थ पाप या मैल होता है और 'कुलिश' का अर्थ वज्र या हीरा होता है।"
    },
    {
        question: "प्रश्न 19. 'कोष' और 'कोश' का सही अर्थ है-",
        answers: shuffle([
            { text: "शब्द-संग्रह, खजाना", correct: false },
            { text: "खजाना, शब्द-संग्रह", correct: true },
            { text: "दूरी, खजाना", correct: false },
            { text: "खजाना, दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कोष' का अर्थ खजाना होता है और 'कोश' का अर्थ शब्द-संग्रह (dictionary) होता है।"
    },
    {
        question: "प्रश्न 20. 'चतुष्पद' और 'चतुष्पथ' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "चौराहा, जानवर", correct: false },
            { text: "जानवर, चौराहा", correct: true },
            { text: "चार पैर, चौराहा", correct: false },
            { text: "जानवर, चार रास्ते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुष्पद' का अर्थ चार पैरों वाला अर्थात जानवर होता है और 'चतुष्पथ' का अर्थ चौराहा होता है।"
    },
    {
        question: "प्रश्न 21. 'ढक्का' और 'धक्का' का सही अर्थ है-",
        answers: shuffle([
            { text: "बड़ा ढोल, टक्कर", correct: true },
            { text: "टक्कर, बड़ा ढोल", correct: false },
            { text: "आघात, ढोल", correct: false },
            { text: "ढोल, आघात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढक्का' एक बड़ा ढोल या नगाड़ा होता है, जबकि 'धक्का' का अर्थ टक्कर या आघात होता है।"
    },
    {
        question: "प्रश्न 22. 'तोश' और 'तोष' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "संतोष, हिंसा", correct: false },
            { text: "हिंसा, संतोष", correct: true },
            { text: "बल, संतोष", correct: false },
            { text: "संतोष, बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तोश' का अर्थ हिंसा या क्रोध होता है, जबकि 'तोष' का अर्थ संतोष या तृप्ति होता है।"
    },
    {
        question: "प्रश्न 23. 'द्रोण' और 'द्रोणी' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "द्रोणाचार्य, कटोरी", correct: false },
            { text: "दोना, द्रोणाचार्य", correct: false },
            { text: "एक माप, दोना", correct: true },
            { text: "द्रोणाचार्य, एक माप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्रोण' एक प्राचीन माप और गुरु द्रोणाचार्य का नाम है, जबकि 'द्रोणी' का अर्थ दोना या काठ का बर्तन होता है।"
    },
    {
        question: "प्रश्न 24. 'नमित' और 'निमित्त' का सही अर्थ है-",
        answers: shuffle([
            { text: "हेतु, झुका हुआ", correct: false },
            { text: "झुका हुआ, हेतु", correct: true },
            { text: "कारण, झुका हुआ", correct: false },
            { text: "झुका हुआ, कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नमित' का अर्थ झुका हुआ होता है और 'निमित्त' का अर्थ हेतु या कारण होता है।"
    },
    {
        question: "प्रश्न 25. 'प्रवाद' और 'प्रमाद' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "आलस्य, अपयश", correct: false },
            { text: "अपयश, आलस्य", correct: true },
            { text: "जनश्रुति, नशा", correct: false },
            { text: "नशा, जनश्रुति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रवाद' का अर्थ लोक-निंदा, अपयश या अफवाह होता है और 'प्रमाद' का अर्थ आलस्य या नशा होता है।"
    },
    {
        question: "प्रश्न 26. 'बाह्य' और 'बाहु' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "भुजा, बाहरी", correct: false },
            { text: "बाहरी, भुजा", correct: true },
            { text: "बाहर, हाथ", correct: false },
            { text: "हाथ, बाहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाह्य' का अर्थ बाहरी होता है और 'बाहु' का अर्थ भुजा या हाथ होता है।"
    },
    {
        question: "प्रश्न 27. 'मनुज' और 'मनोज' का सही अर्थ है-",
        answers: shuffle([
            { text: "कामदेव, मानव", correct: false },
            { text: "मानव, कामदेव", correct: true },
            { text: "मनुष्य, सुंदर", correct: false },
            { text: "सुंदर, मनुष्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मनुज' (मनु से जन्मा) का अर्थ मानव होता है और 'मनोज' (मन में जन्मा) कामदेव का पर्यायवाची है।"
    },
    {
        question: "प्रश्न 28. 'यति' और 'यती' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "संन्यासी, विराम", correct: false },
            { text: "विराम, संन्यासी", correct: true },
            { text: "विधवा, संन्यासी", correct: false },
            { text: "संन्यासी, विधवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यति' का अर्थ विराम या ठहराव (विशेषकर छंद में) होता है और 'यती' का अर्थ संन्यासी होता है।"
    },
    {
        question: "प्रश्न 29. 'शती' और 'सती' का सही अर्थ है-",
        answers: shuffle([
            { text: "पतिव्रता स्त्री, सौ का समूह", correct: false },
            { text: "सौ का समूह, पतिव्रता स्त्री", correct: true },
            { text: "शताब्दी, साध्वी", correct: false },
            { text: "पतिव्रता स्त्री, शताब्दी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शती' का अर्थ सौ का समूह (शताब्दी) होता है और 'सती' का अर्थ पतिव्रता स्त्री होता है।"
    },
    {
        question: "प्रश्न 30. 'शवल' और 'शबल' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "चितकबरा, शव", correct: false },
            { text: "शव, चितकबरा", correct: true },
            { text: "रात्रि, चितकबरा", correct: false },
            { text: "चितकबरा, रात्रि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शवल' का अर्थ शव या लाश होता है, जबकि 'शबल' का अर्थ चितकबरा या रंग-बिरंगा होता है।"
    },
    {
        question: "प्रश्न 31. 'शिखा' और 'शिखि' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "मोर, चोटी", correct: false },
            { text: "चोटी, मोर", correct: true },
            { text: "आग, मोर", correct: false },
            { text: "मोर, आग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिखा' का अर्थ चोटी या आग की लपट होता है और 'शिखि' का अर्थ मोर होता है।"
    },
    {
        question: "प्रश्न 32. 'संभ्रम' और 'सम्भ्रम' का सही अर्थ है-",
        answers: shuffle([
            { text: "आदर, संदेह", correct: false },
            { text: "संदेह, आदर", correct: true },
            { text: "भय, आदर", correct: false },
            { text: "आदर, भय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संभ्रम' का अर्थ संदेह या घबराहट होता है, जबकि 'सम्भ्रम' का अर्थ आदर या सम्मान होता है।"
    },
    {
        question: "प्रश्न 33. 'हुंकार' और 'हुँकार' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "ललकार, पुकार", correct: false },
            { text: "पुकार, ललकार", correct: true },
            { text: "गुंजन, ललकार", correct: false },
            { text: "ललकार, गुंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हुंकार' (बिना चंद्रबिंदु) सामान्य पुकार है, जबकि 'हुँकार' (चंद्रबिंदु के साथ) गर्व या क्रोधपूर्ण ललकार को दर्शाता है।"
    },
    {
        question: "प्रश्न 34. 'आभरण' और 'आमरण' का सही अर्थ है-",
        answers: shuffle([
            { text: "मृत्यु तक, गहना", correct: false },
            { text: "गहना, मृत्यु तक", correct: true },
            { text: "भरण-पोषण, गहना", correct: false },
            { text: "गहना, भरण-पोषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आभरण' का अर्थ गहना या आभूषण होता है और 'आमरण' का अर्थ मृत्यु तक होता है।"
    },
    {
        question: "प्रश्न 35. 'उपल' और 'उत्पल' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "कमल, पत्थर", correct: false },
            { text: "पत्थर, कमल", correct: false },
            { text: "ओला, कमल", correct: true },
            { text: "कमल, ओला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपल' का अर्थ ओला या पत्थर होता है और 'उत्पल' का अर्थ कमल होता है."
    },
    {
        question: "प्रश्न 36. 'कटक' और 'कंटक' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "काँटा, सेना", correct: false },
            { text: "सेना, काँटा", correct: true },
            { text: "कड़ा, काँटा", correct: false },
            { text: "काँटा, कड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटक' का अर्थ सेना या शिविर होता है और 'कंटक' का अर्थ काँटा होता है।"
    },
    {
        question: "प्रश्न 37. 'कुजन' और 'कूजन' का सही अर्थ है-",
        answers: shuffle([
            { text: "पक्षियों का कलरव, दुष्ट व्यक्ति", correct: false },
            { text: "दुष्ट व्यक्ति, पक्षियों का कलरव", correct: true },
            { text: "बुरा दिन, पक्षियों का कलरव", correct: false },
            { text: "दुष्ट व्यक्ति, बुरा दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुजन' (कु + जन) का अर्थ दुष्ट व्यक्ति होता है और 'कूजन' का अर्थ पक्षियों का चहचहाना या कलरव होता है।"
    },
    {
        question: "प्रश्न 38. 'चिरि' और 'चिरी' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "चिड़िया, दासी", correct: true },
            { text: "दासी, चिड़िया", correct: false },
            { text: "तोता, चिड़िया", correct: false },
            { text: "चिड़िया, तोता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिरि' का अर्थ चिड़िया होता है और 'चिरी' का अर्थ दासी या सेविका होता है।"
    },
    {
        question: "प्रश्न 39. 'तनु' और 'तनू' का सही अर्थ है-",
        answers: shuffle([
            { text: "पुत्र, शरीर", correct: false },
            { text: "शरीर, पुत्र", correct: false },
            { text: "पतला, शरीर", correct: true },
            { text: "शरीर, पतला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तनु' का अर्थ पतला या दुबला होता है और 'तनू' का अर्थ शरीर होता है।"
    },
    {
        question: "प्रश्न 40. 'देव' और 'दैव' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "भाग्य, देवता", correct: false },
            { text: "देवता, भाग्य", correct: true },
            { text: "दानव, देवता", correct: false },
            { text: "देवता, दानव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देव' का अर्थ देवता होता है और 'दैव' का अर्थ भाग्य या प्रारब्ध होता है।"
    },
    {
        question: "प्रश्न 41. 'नहर' और 'नाहर' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "सिंह, सिंचाई का साधन", correct: false },
            { text: "सिंचाई का साधन, सिंह", correct: true },
            { text: "नदी, सिंह", correct: false },
            { text: "सिंह, नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नहर' सिंचाई के लिए बनाया गया कृत्रिम जलमार्ग है और 'नाहर' का अर्थ सिंह या शेर होता है।"
    },
    {
        question: "प्रश्न 42. 'प्रस्तर' और 'प्रस्तार' का सही अर्थ है-",
        answers: shuffle([
            { text: "फैलाव, पत्थर", correct: false },
            { text: "पत्थर, फैलाव", correct: true },
            { text: "स्तर, पत्थर", correct: false },
            { text: "पत्थर, स्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रस्तर' का अर्थ पत्थर होता है और 'प्रस्तार' का अर्थ फैलाव या विस्तार होता है।"
    },
    {
        question: "प्रश्न 43. 'बोर' और 'बौर' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "आम का फूल, डूबना", correct: false },
            { text: "डूबना, आम का फूल", correct: true },
            { text: "एक फल, आम का फूल", correct: false },
            { text: "आम का फूल, एक फल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बोर' का अर्थ पानी में बोरना या डुबाना है, जबकि 'बौर' आम के फूल को कहते हैं।"
    },
    {
        question: "प्रश्न 44. 'लिप्त' और 'लिप्त' का सही अर्थ है-",
        answers: shuffle([
            { text: "लगा हुआ, रंगा हुआ", correct: false },
            { text: "रंगा हुआ, लगा हुआ", correct: false },
            { text: "दोनों का अर्थ 'लगा हुआ' है", correct: true },
            { text: "दोनों का अर्थ 'रंगा हुआ' है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिप्त' और 'लिप्त' दोनों का ही अर्थ किसी चीज में लगा हुआ या सना हुआ होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक त्रुटिपूर्ण युग्म है, व्यावहारिक रूप से कोई भेद नहीं है।"
    },
    {
        question: "प्रश्न 45. 'विज़न' और 'व्यजन' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "पंखा, सुनसान", correct: false },
            { text: "सुनसान, पंखा", correct: true },
            { text: "व्यंजन, पंखा", correct: false },
            { text: "पंखा, व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विज़न' का अर्थ एकांत या सुनसान होता है और 'व्यजन' का अर्थ पंखा होता है।"
    },
    {
        question: "प्रश्न 46. 'शांत' और 'सान्त' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "अंत सहित, चुप", correct: false },
            { text: "चुप, अंत सहित", correct: false },
            { text: "मौन, अंत वाला", correct: false },
            { text: "चुप, अंत वाला", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शांत' का अर्थ चुप या स्थिर होता है और 'सान्त' (स + अंत) का अर्थ अंत सहित या अंत वाला होता है।"
    },
    {
        question: "प्रश्न 47. 'अपत्य' और 'अपथ्य' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "अहितकर, संतान", correct: false },
            { text: "संतान, अहितकर", correct: true },
            { text: "पुत्र, अहितकर", correct: false },
            { text: "संतान, बुरा रास्ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपत्य' का अर्थ संतान होता है, जबकि 'अपथ्य' का अर्थ अहितकर भोजन या परहेज के विरुद्ध होता है।"
    },
    {
        question: "प्रश्न 48. 'अर्घ' और 'अर्घ्य' का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "मूल्य, पूजा की सामग्री", correct: false },
            { text: "पूजा की सामग्री, मूल्य", correct: false },
            { text: "जलदान, मूल्य", correct: false },
            { text: "मूल्य, जलदान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्घ' का अर्थ मूल्य या कीमत होता है और 'अर्घ्य' का अर्थ देवताओं को दिया जाने वाला जलदान होता है।"
    },
    {
        question: "प्रश्न 49. 'आतप' और 'आपद' का सही अर्थ है-",
        answers: shuffle([
            { text: "संकट, धूप", correct: false },
            { text: "धूप, संकट", correct: true },
            { text: "गर्मी, संकट", correct: false },
            { text: "धूप, आपदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आतप' का अर्थ धूप या गर्मी होता है और 'आपद' का अर्थ संकट या मुसीबत होता है।"
    },
    {
        question: "प्रश्न 50. 'कुच' और 'कूच' का सही अर्थ भेद है-",
        answers: shuffle([
            { text: "प्रस्थान, स्तन", correct: false },
            { text: "स्तन, प्रस्थान", correct: true },
            { text: "सेना, स्तन", correct: false },
            { text: "स्तन, सेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कुच' का अर्थ स्त्री का स्तन होता है, जबकि 'कूच' का अर्थ प्रस्थान करना होता है।"
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