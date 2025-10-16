const questions = [
    {
        topHeading: "अनेकार्थी शब्दों पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अंबर' शब्द का एक अर्थ 'आकाश' है, इसका दूसरा अर्थ क्या है?",
        answers: shuffle([
            { text: "वस्त्र", correct: true },
            { text: "सूर्य", correct: false },
            { text: "जल", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंबर' के दो प्रमुख अनेकार्थी अर्थ हैं - आकाश और वस्त्र।"
    },
    {
        question: "प्रश्न 2. 'कर' शब्द का कौन-सा अर्थ निम्नलिखित में से नहीं है?",
        answers: shuffle([
            { text: "हाथ", correct: false },
            { text: "किरण", correct: false },
            { text: "टैक्स", correct: false },
            { text: "काम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर' का अर्थ हाथ, हाथी की सूँड़, किरण और टैक्स (शुल्क) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> परन्तु 'काम' नहीं होता।"
    },
    {
        question: "प्रश्न 3. 'कनक' का एक अर्थ 'सोना' है, तो दूसरा अर्थ क्या होगा?",
        answers: shuffle([
            { text: "धतूरा", correct: true },
            { text: "चाँदी", correct: false },
            { text: "हीरा", correct: false },
            { text: "पलाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कनक' के प्रसिद्ध अनेकार्थी अर्थ सोना, धतूरा और गेहूँ हैं।"
    },
    {
        question: "प्रश्न 4. 'अक्षर' शब्द का अनेकार्थी रूप निम्नलिखित में से कौन-सा नहीं है?",
        answers: shuffle([
            { text: "वर्ण", correct: false },
            { text: "ईश्वर", correct: false },
            { text: "अविनाशी", correct: false },
            { text: "शब्द", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अक्षर' का अर्थ वर्ण, ईश्वर, अविनाशी, आत्मा और नित्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन 'शब्द' वर्णों का समूह होता है।"
    },
    {
        question: "प्रश्न 5. 'अलि' शब्द का एक अर्थ 'भौंरा' होता है, इसका अन्य अर्थ क्या है?",
        answers: shuffle([
            { text: "सखी", correct: true },
            { text: "कली", correct: false },
            { text: "पक्षी", correct: false },
            { text: "बिच्छू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अलि' के अनेकार्थी शब्द भौंरा, सखी, कोयल और बिच्छू हैं।"
    },
    {
        question: "प्रश्न 6. 'अर्क' के लिए दिए गए विकल्पों में से कौन-सा अर्थ अनुपयुक्त है?",
        answers: shuffle([
            { text: "सूर्य", correct: false },
            { text: "रस", correct: false },
            { text: "काढ़ा", correct: false },
            { text: "अंतर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्क' का अर्थ सूर्य, रस, काढ़ा, इंद्र और मदार का पौधा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अंतर' इसका अर्थ नहीं है।"
    },
    {
        question: "प्रश्न 7. 'कलम' का एक अर्थ 'लेखनी' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "पेड़-पौधे की टहनी", correct: false },
            { text: "चित्र बनाने की कूची", correct: false },
            { text: "कनपटी के बाल", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलम' का अर्थ लेखनी, टहनी (पेड़ की), कूची और कनपटी के बाल होता है।"
    },
    {
        question: "प्रश्न 8. 'उत्तर' शब्द का अनेकार्थी रूप है-",
        answers: shuffle([
            { text: "जवाब", correct: false },
            { text: "एक दिशा", correct: false },
            { text: "बाद का", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्तर' का अर्थ जवाब देना, एक दिशा (उत्तर दिशा) और बाद का (जैसे- उत्तर-वैदिक काल) होता है।"
    },
    {
        question: "प्रश्न 9. 'काल' शब्द का एक अर्थ 'समय' है, दूसरा प्रसिद्ध अर्थ क्या है?",
        answers: shuffle([
            { text: "मृत्यु", correct: true },
            { text: "सोना", correct: false },
            { text: "काम", correct: false },
            { text: "युग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काल' के प्रमुख अर्थ समय, मृत्यु और यमराज हैं।"
    },
    {
        question: "प्रश्न 10. 'गुण' शब्द का अनेकार्थी शब्द समूह कौन-सा है?",
        answers: shuffle([
            { text: "विशेषता, रस्सी, धनुष की डोरी", correct: true },
            { text: "अच्छा, स्वभाव, धर्म", correct: false },
            { text: "क्रिया, विशेषता, प्रभाव", correct: false },
            { text: "रस्सी, स्वभाव, बाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुण' का अर्थ किसी वस्तु की विशेषता, रस्सी और धनुष की डोरी (प्रत्यंचा) होता है।"
    },
    {
        question: "प्रश्न 11. 'गुरु' शब्द का कौन-सा एक अर्थ नहीं है?",
        answers: shuffle([
            { text: "शिक्षक", correct: false },
            { text: "भारी", correct: false },
            { text: "श्रेष्ठ", correct: false },
            { text: "हल्का", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुरु' का अर्थ शिक्षक, भारी, श्रेष्ठ, बृहस्पति ग्रह और पूज्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'हल्का' इसका विलोम है।"
    },
    {
        question: "प्रश्न 12. 'गति' शब्द का एक अर्थ 'चाल' है, दूसरा अर्थ चुनें।",
        answers: shuffle([
            { text: "मोक्ष", correct: true },
            { text: "रास्ता", correct: false },
            { text: "समय", correct: false },
            { text: "पहिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गति' के अनेकार्थी अर्थ चाल, हालत (बुरी गति), और मोक्ष (सद्गति) हैं।"
    },
    {
        question: "प्रश्न 13. 'जड़' का एक अर्थ 'वृक्ष का मूल' है, तो इसका अन्य अर्थ क्या है?",
        answers: shuffle([
            { text: "मूर्ख", correct: true },
            { text: "चेतन", correct: false },
            { text: "पत्ता", correct: false },
            { text: "तना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जड़' का अर्थ वृक्ष का मूल (जड़), अचेतन और मूर्ख (जड़-बुद्धि) होता है।"
    },
    {
        question: "प्रश्न 14. 'जलज' शब्द किसके लिए प्रयुक्त होता है?",
        answers: shuffle([
            { text: "कमल", correct: false },
            { text: "मोती", correct: false },
            { text: "मछली", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जलज' (जल में जन्मा) का अर्थ कमल, मोती, मछली, शंख और चंद्रमा होता है।"
    },
    {
        question: "प्रश्न 15. 'तीर' का अनेकार्थी शब्द समूह है-",
        answers: shuffle([
            { text: "बाण, किनारा, तट", correct: true },
            { text: "बाण, तालाब, नदी", correct: false },
            { text: "किनारा, सीमा, रेखा", correct: false },
            { text: "तट, नदी, धारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तीर' का अर्थ बाण और नदी का किनारा या तट होता है।"
    },
    {
        question: "प्रश्न 16. 'दल' शब्द का निम्नलिखित में से कौन-सा अर्थ नहीं है?",
        answers: shuffle([
            { text: "समूह", correct: false },
            { text: "पत्ता", correct: false },
            { text: "सेना", correct: false },
            { text: "बल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दल' का अर्थ समूह, पत्ता, सेना और पक्ष होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'बल' का अर्थ शक्ति होता है।"
    },
    {
        question: "प्रश्न 17. 'नाग' का एक अर्थ 'साँप' है, तो दूसरा अर्थ क्या है?",
        answers: shuffle([
            { text: "हाथी", correct: false },
            { text: "पर्वत", correct: false },
            { text: "बादल", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नाग' के अनेकार्थी अर्थ साँप, हाथी, पर्वत, बादल और एक जाति विशेष हैं।"
    },
    {
        question: "प्रश्न 18. 'पत्र' शब्द का सही अनेकार्थी रूप कौन-सा है?",
        answers: shuffle([
            { text: "पत्ता, चिट्ठी, पंख", correct: true },
            { text: "पानी, पत्ता, सूर्य", correct: false },
            { text: "चिट्ठी, पवित्र, लेख", correct: false },
            { text: "पंख, लिखना, संदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पत्र' का अर्थ पेड़ का पत्ता, चिट्ठी और पंख होता है।"
    },
    {
        question: "प्रश्न 19. 'पय' शब्द का अर्थ है-",
        answers: shuffle([
            { text: "(अ) दूध", correct: false },
            { text: "(ब) जल", correct: false },
            { text: "अन्न", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पय' के अनेकार्थी शब्द दूध और जल हैं।"
    },
    {
        question: "प्रश्न 20. 'फल' शब्द का कौन-सा अर्थ नहीं है?",
        answers: shuffle([
            { text: "परिणाम", correct: false },
            { text: "खाने वाला फल", correct: false },
            { text: "भाले की नोक", correct: false },
            { text: "हल्का", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फल' का अर्थ परिणाम (परीक्षाफल), खाने वाला फल और भाले या तीर की नोक होता है।"
    },
    {
        question: "प्रश्न 21. 'मधु' का एक अर्थ 'शहद' है, दूसरा अर्थ क्या है?",
        answers: shuffle([
            { text: "शराब", correct: true },
            { text: "दूध", correct: false },
            { text: "मीठा", correct: false },
            { text: "जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मधु' का अर्थ शहद, शराब, मीठा और वसंत ऋतु होता है।"
    },
    {
        question: "प्रश्न 22. 'रस' के अनेकार्थी शब्द समूह को पहचानिए।",
        answers: shuffle([
            { text: "स्वाद, आनंद, फलों का निचोड़", correct: true },
            { text: "प्रेम, जल, पारा", correct: false },
            { text: "स्वाद, साहित्य, संगीत", correct: false },
            { text: "आनंद, निचोड़, रूप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रस' का अर्थ स्वाद, आनंद (काव्य रस), फलों का निचोड़ (गन्ने का रस) और धातु का सार होता है।"
    },
    {
        question: "प्रश्न 23. 'वर्ण' शब्द का अर्थ नहीं होता है-",
        answers: shuffle([
            { text: "रंग", correct: false },
            { text: "अक्षर", correct: false },
            { text: "जाति", correct: false },
            { text: "आकाश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वर्ण' का अर्थ रंग, अक्षर और जाति (ब्राह्मण, क्षत्रिय आदि) होता है।"
    },
    {
        question: "प्रश्न 24. 'हरि' शब्द का अनेकार्थी है-",
        answers: shuffle([
            { text: "विष्णु", correct: false },
            { text: "बंदर", correct: false },
            { text: "सिंह", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हरि' के बहुत से अर्थ हैं, जैसे- विष्णु, बंदर, सिंह, सर्प, इंद्र, सूर्य, चंद्रमा, हवा आदि।"
    },
    {
        question: "प्रश्न 25. 'अंक' का एक अर्थ 'संख्या' है, तो दूसरा क्या है?",
        answers: shuffle([
            { text: "गोद", correct: false },
            { text: "अध्याय", correct: false },
            { text: "चिह्न", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंक' का अर्थ संख्या, गोद, नाटक का अध्याय और चिह्न होता है।"
    },
    {
        question: "प्रश्न 26. 'अतिथि' का अनेकार्थी शब्द कौन-सा नहीं है?",
        answers: shuffle([
            { text: "मेहमान", correct: false },
            { text: "साधु", correct: false },
            { text: "यात्री", correct: false },
            { text: "देव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अतिथि' का अर्थ मेहमान, साधु, यात्री और अपरिचित व्यक्ति होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'देव' इसका सीधा अर्थ नहीं है।"
    },
    {
        question: "प्रश्न 27. 'अपेक्षा' का एक अर्थ 'आशा' है, दूसरा अर्थ क्या है?",
        answers: shuffle([
            { text: "(अ) तुलना में", correct: false },
            { text: "निराशा", correct: false },
            { text: "(स) आवश्यकता", correct: false },
            { text: "(अ) और (स) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपेक्षा' का अर्थ आशा/इच्छा, आवश्यकता और 'की तुलना में' (राम की अपेक्षा श्याम अधिक बुद्धिमान है) होता है।"
    },
    {
        question: "प्रश्न 28. 'अरुण' शब्द का अनेकार्थी है-",
        answers: shuffle([
            { text: "लाल रंग", correct: false },
            { text: "सूर्य का सारथी", correct: false },
            { text: "सिंदूर", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अरुण' का अर्थ लाल रंग, सूर्य, सूर्य का सारथी और सिंदूर होता है।"
    },
    {
        question: "प्रश्न 29. 'अर्थ' शब्द का कौन-सा अर्थ नहीं है?",
        answers: shuffle([
            { text: "धन", correct: false },
            { text: "मतलब", correct: false },
            { text: "कारण", correct: false },
            { text: "शब्द", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्थ' का अर्थ धन, मतलब, कारण और 'के लिए' (जैसे- ज्ञानार्थ) होता है।"
    },
    {
        question: "प्रश्न 30. 'आराम' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "विश्राम", correct: false },
            { text: "बगीचा", correct: false },
            { text: "राहत", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आराम' का अर्थ विश्राम, राहत, सुविधा और बगीचा (जैसे- आराम बाग) होता है।"
    },
    {
        question: "प्रश्न 31. 'जीवन' का एक अर्थ 'जिंदगी' है, तो दूसरा क्या है?",
        answers: shuffle([
            { text: "जल", correct: false },
            { text: "प्राण", correct: false },
            { text: "पुत्र", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जीवन' का अर्थ जिंदगी, प्राण, जल और पुत्र होता है।"
    },
    {
        question: "प्रश्न 32. 'तात' शब्द किसके लिए प्रयुक्त नहीं होता?",
        answers: shuffle([
            { text: "पिता", correct: false },
            { text: "भाई", correct: false },
            { text: "गुरु", correct: false },
            { text: "माता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तात' शब्द पिता, भाई, गुरु, मित्र और पूज्य व्यक्ति के लिए प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 33. 'द्विज' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "ब्राह्मण", correct: false },
            { text: "पक्षी", correct: false },
            { text: "दाँत", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'द्विज' (दो बार जन्म लेने वाला) का अर्थ ब्राह्मण, पक्षी और दाँत होता है।"
    },
    {
        question: "प्रश्न 34. 'धन' का एक अर्थ 'संपत्ति' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "जोड़ (गणित)", correct: true },
            { text: "बादल", correct: false },
            { text: "भूमि", correct: false },
            { text: "शुभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धन' का अर्थ संपत्ति और गणित में जोड़ का चिह्न (+) होता है।"
    },
    {
        question: "प्रश्न 35. 'पद' शब्द का कौन-सा अर्थ नहीं है?",
        answers: shuffle([
            { text: "पैर", correct: false },
            { text: "ओहदा", correct: false },
            { text: "कविता का चरण", correct: false },
            { text: "जल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद' का अर्थ पैर, ओहदा (पदवी), कविता का चरण और चिह्न होता है।"
    },
    {
        question: "प्रश्न 36. 'पतंग' शब्द का अनेकार्थी रूप पहचानिए।",
        answers: shuffle([
            { text: "सूर्य", correct: false },
            { text: "पक्षी", correct: false },
            { text: "गुड्डी (कनकौआ)", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पतंग' का अर्थ सूर्य, पक्षी, गुड्डी (कनकौआ) और एक कीड़ा होता है।"
    },
    {
        question: "प्रश्न 37. 'पृष्ठ' का एक अर्थ 'पीठ' है, दूसरा अर्थ क्या है?",
        answers: shuffle([
            { text: "पन्ना", correct: true },
            { text: "सामने", correct: false },
            { text: "ऊपर", correct: false },
            { text: "पीछे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पृष्ठ' का अर्थ पीठ और पुस्तक का पन्ना होता है।"
    },
    {
        question: "प्रश्न 38. 'प्रभाव' शब्द का कौन-सा अर्थ नहीं है?",
        answers: shuffle([
            { text: "असर", correct: false },
            { text: "सामर्थ्य", correct: false },
            { text: "महिमा", correct: false },
            { text: "दबाव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रभाव' का अर्थ असर, सामर्थ्य और महिमा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दबाव' एक अलग अर्थ रखता है, हालांकि प्रभाव से उत्पन्न हो सकता है।"
    },
    {
        question: "प्रश्न 39. 'बल' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "शक्ति", correct: false },
            { text: "सेना", correct: false },
            { text: "बलराम", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बल' का अर्थ शक्ति, सेना और बलराम होता है।"
    },
    {
        question: "प्रश्न 40. 'मत' का एक अर्थ 'राय' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "वोट", correct: false },
            { text: "नहीं", correct: false },
            { text: "संप्रदाय", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मत' का अर्थ राय (विचार), वोट (मतदान) और 'नहीं' (मत जाओ) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी संप्रदाय (जैसे- शैव मत) को भी दर्शाता है।"
    },
    {
        question: "प्रश्न 41. 'मित्र' का अनेकार्थी है-",
        answers: shuffle([
            { text: "(अ) दोस्त", correct: false },
            { text: "(ब) सूर्य", correct: false },
            { text: "(स) प्रिय", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मित्र' का अर्थ दोस्त और सूर्य होता है।"
    },
    {
        question: "प्रश्न 42. 'मुद्रा' शब्द का कौन-सा अर्थ अनुपयुक्त है?",
        answers: shuffle([
            { text: "सिक्का", correct: false },
            { text: "अंगूठी", correct: false },
            { text: "मुख का भाव", correct: false },
            { text: "भाग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुद्रा' का अर्थ सिक्का, अंगूठी, मुख का भाव और शरीर की विशेष स्थिति (योग मुद्रा) होता है।"
    },
    {
        question: "प्रश्न 43. 'लक्ष्य' का एक अर्थ 'उद्देश्य' है, दूसरा क्या है?",
        answers: shuffle([
            { text: "निशाना", correct: true },
            { text: "देखना", correct: false },
            { text: "ध्यान", correct: false },
            { text: "लाख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लक्ष्य' का अर्थ उद्देश्य और निशाना होता है।"
    },
    {
        question: "प्रश्न 44. 'वन' का अनेकार्थी शब्द समूह है-",
        answers: shuffle([
            { text: "जंगल, जल, फूलों का गुच्छा", correct: true },
            { text: "जंगल, घर, बाग", correct: false },
            { text: "जल, कानन, उपवन", correct: false },
            { text: "उपवन, फूल, समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वन' का अर्थ जंगल, जल और फूलों का गुच्छा (पुष्प-वन) होता है।"
    },
    {
        question: "प्रश्न 45. 'विधि' शब्द का कौन-सा अर्थ नहीं है?",
        answers: shuffle([
            { text: "तरीका", correct: false },
            { text: "कानून", correct: false },
            { text: "ब्रह्मा", correct: false },
            { text: "अवधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विधि' का अर्थ तरीका, कानून, ब्रह्मा और भाग्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अवधि' का अर्थ समय-सीमा होता है।"
    },
    {
        question: "प्रश्न 46. 'शिव' का अनेकार्थी है-",
        answers: shuffle([
            { text: "महादेव", correct: false },
            { text: "कल्याण", correct: false },
            { text: "मंगल", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शिव' का अर्थ महादेव, कल्याण, मंगल और भाग्यशाली होता है।"
    },
    {
        question: "प्रश्न 47. 'शुद्ध' शब्द का अनेकार्थी नहीं है-",
        answers: shuffle([
            { text: "पवित्र", correct: false },
            { text: "ठीक", correct: false },
            { text: "केवल", correct: false },
            { text: "शांत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शुद्ध' का अर्थ पवित्र, ठीक, केवल और जिसमें मिलावट न हो, होता है।"
    },
    {
        question: "प्रश्न 48. 'कैफियत' का अनेकार्थी है-",
        answers: shuffle([
            { text: "हाल", correct: false },
            { text: "विवरण", correct: false },
            { text: "नशा", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कैफियत' का अर्थ हाल, विवरण और नशा होता है।"
    },
    {
        question: "प्रश्न 49. 'सारंग' शब्द का अनेकार्थी है-",
        answers: shuffle([
            { text: "मोर", correct: false },
            { text: "सर्प", correct: false },
            { text: "बादल", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सारंग' हिंदी का सबसे अधिक अर्थ वाला शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके अर्थ मोर, सर्प, बादल, हिरण, सिंह, कामदेव, दीपक, स्त्री, कमल आदि हैं।"
    },
    {
        question: "प्रश्न 50. 'सोना' का अनेकार्थी शब्द है-",
        answers: shuffle([
            { text: "(अ) एक धातु", correct: false },
            { text: "(ब) नींद लेना", correct: false },
            { text: "सुंदर", correct: false },
            { text: "(अ) और (ब) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोना' एक बहुमूल्य धातु (स्वर्ण) और नींद लेने की क्रिया, दोनों है।"
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