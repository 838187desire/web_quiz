const questions = [
    {
        topHeading: "अव्यय (अविकारी शब्द) पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जिन शब्दों के रूप में लिंग, वचन, कारक आदि के कारण कोई परिवर्तन नहीं होता, उन्हें क्या कहते हैं?",
        answers: shuffle([
            { text: "क्रिया", correct: false },
            { text: "विशेषण", correct: false },
            { text: "अव्यय", correct: true },
            { text: "वाच्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अव्यय वे शब्द होते हैं जो वाक्य में प्रयोग होने पर लिंग, वचन, कारक, काल आदि के प्रभाव से अपना रूप नहीं बदलते।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें अविकारी शब्द भी कहते हैं।"
    },
    {
        question: "प्रश्न 2. 'वह धीरे-धीरे चलता है।' इस वाक्य में 'धीरे-धीरे' शब्द क्या है?",
        answers: shuffle([
            { text: "क्रिया", correct: false },
            { text: "क्रिया-विशेषण", correct: true },
            { text: "विशेषण", correct: false },
            { text: "सर्वनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'धीरे-धीरे' शब्द 'चलता है' क्रिया की विशेषता बता रहा है कि क्रिया किस ढंग या रीति से हो रही है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह रीतिवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 3. अव्यय के मुख्य रूप से कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अव्यय के मुख्य रूप से चार भेद माने जाते हैं: क्रिया-विशेषण, सम्बन्धबोधक, समुच्चयबोधक और विस्मयादिबोधक।<br><br><i class='fa-solid fa-angles-right icon'></i> निपात को भी कुछ विद्वान पाँचवें भेद के रूप में मानते हैं।"
    },
    {
        question: "प्रश्न 4. 'मैं आज विद्यालय नहीं जाऊँगा।' इस वाक्य में अव्यय है-",
        answers: shuffle([
            { text: "मैं", correct: false },
            { text: "आज", correct: true },
            { text: "विद्यालय", correct: false },
            { text: "जाऊँगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आज' शब्द कालवाचक क्रिया-विशेषण है, जो क्रिया के होने का समय बता रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक अविकारी शब्द है।"
    },
    {
        question: "प्रश्न 5. 'वाह! कितना सुंदर दृश्य है।' रेखांकित शब्द कौन-सा अव्यय है?",
        answers: shuffle([
            { text: "संबंधबोधक अव्यय", correct: false },
            { text: "समुच्चयबोधक अव्यय", correct: false },
            { text: "विस्मयादिबोधक अव्यय", correct: true },
            { text: "निपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाह!' शब्द हर्ष और आश्चर्य का भाव प्रकट कर रहा है, इसलिए यह विस्मयादिबोधक अव्यय है।"
    },
    {
        question: "प्रश्न 6. 'वह दिनभर काम करता रहा।' वाक्य में 'दिनभर' किस प्रकार का अव्यय है?",
        answers: shuffle([
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "कालवाचक क्रिया-विशेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिनभर' शब्द क्रिया के होने के समय (अवधि) का बोध करा रहा है, अतः यह कालवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 7. 'राम और श्याम भाई हैं।' इस वाक्य में 'और' शब्द है-",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "समुच्चयबोधक", correct: true },
            { text: "विस्मयादिबोधक", correct: false },
            { text: "क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'और' शब्द 'राम' तथा 'श्याम' दो शब्दों (संज्ञाओं) को जोड़ने का कार्य कर रहा है, इसलिए यह समानाधिकरण समुच्चयबोधक अव्यय है।"
    },
    {
        question: "प्रश्न 8. 'मेरे घर के सामने एक बगीचा है।' इस वाक्य में 'के सामने' क्या है?",
        answers: shuffle([
            { text: "क्रिया-विशेषण", correct: false },
            { text: "संबंधबोधक", correct: true },
            { text: "समुच्चयबोधक", correct: false },
            { text: "विस्मयादिबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'के सामने' अव्यय 'घर' (संज्ञा) का संबंध वाक्य के अन्य शब्दों ('बगीचा') से बता रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह संबंधबोधक अव्यय है।"
    },
    {
        question: "प्रश्न 9. निम्नलिखित में से कौन-सा शब्द रीतिवाचक क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "आज", correct: false },
            { text: "यहाँ", correct: false },
            { text: "बहुत", correct: false },
            { text: "अचानक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचानक' शब्द क्रिया के होने की रीति या ढंग को बताता है (क्रिया कैसे हुई)।<br><br><i class='fa-solid fa-angles-right icon'></i> 'आज' कालवाचक, 'यहाँ' स्थानवाचक और 'बहुत' परिमाणवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 10. 'तुम भी मेरे साथ चलो।' वाक्य में 'भी' कौन-सा अव्यय है?",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "समुच्चयबोधक", correct: false },
            { text: "विस्मयादिबोधक", correct: false },
            { text: "निपात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भी' शब्द वाक्य में 'तुम' पर बल देने का कार्य कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो अव्यय किसी शब्द या पद के बाद लगकर उसके अर्थ में विशेष बल लाते हैं, वे निपात कहलाते हैं।"
    },
    {
        question: "प्रश्न 11. 'वह बहुत बोलता है।' वाक्य में 'बहुत' क्या है?",
        answers: shuffle([
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहुत' शब्द 'बोलता है' क्रिया की मात्रा या परिमाण बता रहा है कि क्रिया कितनी मात्रा में हो रही है।"
    },
    {
        question: "प्रश्न 12. 'अरे! आप आ गए।' में 'अरे!' शब्द है-",
        answers: shuffle([
            { text: "क्रिया-विशेषण", correct: false },
            { text: "संबंधबोधक", correct: false },
            { text: "समुच्चयबोधक", correct: false },
            { text: "विस्मयादिबोधक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अरे!' शब्द आश्चर्य का भाव प्रकट कर रहा है, इसलिए यह विस्मयादिबोधक अव्यय है।"
    },
    {
        question: "प्रश्न 13. जो अव्यय दो वाक्यों को परस्पर जोड़ने का काम करते हैं, उन्हें कहते हैं-",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "विस्मयादिबोधक", correct: false },
            { text: "समुच्चयबोधक", correct: true },
            { text: "क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुच्चयबोधक अव्यय का कार्य दो शब्दों, वाक्यांशों या वाक्यों को जोड़ना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें योजक भी कहते हैं।"
    },
    {
        question: "प्रश्न 14. 'बच्चा बाहर खेल रहा है।' वाक्य में 'बाहर' किस प्रकार का क्रिया-विशेषण है?",
        answers: shuffle([
            { text: "कालवाचक", correct: false },
            { text: "स्थानवाचक", correct: true },
            { text: "रीतिवाचक", correct: false },
            { text: "परिमाणवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाहर' शब्द क्रिया के होने के स्थान का बोध करा रहा है (कहाँ खेल रहा है), अतः यह स्थानवाचक क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 15. 'धन के बिना कोई नहीं पूछता।' में 'के बिना' कौन-सा अव्यय है?",
        answers: shuffle([
            { text: "संबंधबोधक", correct: true },
            { text: "समुच्चयबोधक", correct: false },
            { text: "क्रिया-विशेषण", correct: false },
            { text: "निपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'के बिना' शब्द 'धन' (संज्ञा) का संबंध वाक्य के दूसरे हिस्से से जोड़ रहा है, अतः यह संबंधबोधक अव्यय है।"
    },
    {
        question: "प्रश्न 16. 'उसने कठिन परिश्रम किया ताकि वह सफल हो सके।' में 'ताकि' है-",
        answers: shuffle([
            { text: "समानाधिकरण समुच्चयबोधक", correct: false },
            { text: "व्यधिकरण समुच्चयबोधक", correct: true },
            { text: "संबंधबोधक", correct: false },
            { text: "विस्मयादिबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ताकि' शब्द एक मुख्य उपवाक्य को एक आश्रित उपवाक्य से जोड़ रहा है, इसलिए यह व्यधिकरण समुच्चयबोधक है।"
    },
    {
        question: "प्रश्न 17. 'खबरदार! आगे मत बढ़ना।' में 'खबरदार!' है-",
        answers: shuffle([
            { text: "आश्चर्यबोधक", correct: false },
            { text: "शोकबोधक", correct: false },
            { text: "हर्षबोधक", correct: false },
            { text: "चेतावनीबोधक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खबरदार!' शब्द चेतावनी का भाव व्यक्त कर रहा है, यह विस्मयादिबोधक अव्यय का एक प्रकार है।"
    },
    {
        question: "प्रश्न 18. 'तुम केवल पढ़ने के लिए यहाँ आए हो।' वाक्य में 'केवल' है-",
        answers: shuffle([
            { text: "क्रिया-विशेषण", correct: false },
            { text: "संबंधबोधक", correct: false },
            { text: "समुच्चयबोधक", correct: false },
            { text: "निपात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'केवल' शब्द 'पढ़ने के लिए' वाक्यांश पर बल दे रहा है और अर्थ को सीमित कर रहा है, अतः यह एक निपात है।"
    },
    {
        question: "प्रश्न 19. निम्नलिखित में से स्थानवाचक क्रिया-विशेषण कौन-सा है?",
        answers: shuffle([
            { text: "प्रतिदिन", correct: false },
            { text: "ऊपर", correct: true },
            { text: "थोड़ा", correct: false },
            { text: "अवश्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऊपर' शब्द क्रिया के होने के स्थान को सूचित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'प्रतिदिन' कालवाचक, 'थोड़ा' परिमाणवाचक और 'अवश्य' रीतिवाचक (निश्चयबोधक) क्रिया-विशेषण है।"
    },
    {
        question: "प्रश्न 20. 'वह आया और मैं चला गया।' यह वाक्य किस अव्यय से जुड़ा है?",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "समुच्चयबोधक", correct: true },
            { text: "विस्मयादिबोधक", correct: false },
            { text: "क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'और' शब्द 'वह आया' तथा 'मैं चला गया' इन दो स्वतंत्र वाक्यों को जोड़ रहा है, अतः यह समुच्चयबोधक है।"
    },
    {
        question: "प्रश्न 21. 'छिः! कितनी गंदगी है।' वाक्य में 'छिः!' कौन-सा अव्यय है?",
        answers: shuffle([
            { text: "हर्षबोधक", correct: false },
            { text: "तिरस्कारबोधक", correct: true },
            { text: "स्वीकारबोधक", correct: false },
            { text: "संबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छिः!' शब्द घृणा या तिरस्कार का भाव व्यक्त करता है, जो विस्मयादिबोधक अव्यय का एक भेद है।"
    },
    {
        question: "प्रश्न 22. 'सेनाएँ युद्ध क्षेत्र से आगे बढ़ीं।' इस वाक्य में संबंधबोधक शब्द बताइए।",
        answers: shuffle([
            { text: "सेनाएँ", correct: false },
            { text: "युद्ध क्षेत्र", correct: false },
            { text: "से आगे", correct: true },
            { text: "बढ़ीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'से आगे' अव्यय 'युद्ध क्षेत्र' का संबंध 'बढ़ना' क्रिया से बता रहा है, अतः यह संबंधबोधक है।"
    },
    {
        question: "प्रश्न 23. 'रातभर बारिश होती रही।' में 'रातभर' है-",
        answers: shuffle([
            { text: "कालवाचक क्रिया-विशेषण", correct: true },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रातभर' शब्द क्रिया के होने की अवधि (समय) को दर्शा रहा है।"
    },
    {
        question: "प्रश्न 24. 'यद्यपि वह गरीब है, तथापि ईमानदार है।' वाक्य में 'यद्यपि-तथापि' हैं-",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "विस्मयादिबोधक", correct: false },
            { text: "व्यधिकरण समुच्चयबोधक", correct: true },
            { text: "समानाधिकरण समुच्चयबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यद्यपि-तथापि' एक आश्रित उपवाक्य को मुख्य उपवाक्य से जोड़ने का कार्य करते हैं, जो व्यधिकरण समुच्चयबोधक की पहचान है।"
    },
    {
        question: "प्रश्न 25. इनमें से कौन-सा शब्द अव्यय नहीं है?",
        answers: shuffle([
            { text: "आज", correct: false },
            { text: "इधर", correct: false },
            { text: "किसे", correct: true },
            { text: "और", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किसे' एक प्रश्नवाचक सर्वनाम है, जो कारक के अनुसार बदलता है (जैसे - किसने, किसको)।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि 'आज', 'इधर' और 'और' अविकारी शब्द (अव्यय) हैं।"
    },
    {
        question: "प्रश्न 26. 'तुम उधर मत बैठो।' वाक्य में 'उधर' शब्द है-",
        answers: shuffle([
            { text: "स्थानवाचक क्रिया-विशेषण", correct: true },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उधर' शब्द बैठने की क्रिया के स्थान का बोध करा रहा है."
    },
    {
        question: "प्रश्न 27. 'वह इतना क्यों खाता है?' में 'इतना' क्या है?",
        answers: shuffle([
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: true },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इतना' शब्द खाने की क्रिया की मात्रा या परिमाण को दर्शा रहा है।"
    },
    {
        question: "प्रश्न 28. 'शाबाश! तुमने बहुत अच्छा काम किया।' वाक्य में 'शाबाश!' है-",
        answers: shuffle([
            { text: "शोकबोधक", correct: false },
            { text: "घृणाबोधक", correct: false },
            { text: "प्रशंसाबोधक", correct: true },
            { text: "भयबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शाबाश!' शब्द प्रशंसा या सराहना का भाव प्रकट करने वाला विस्मयादिबोधक अव्यय है।"
    },
    {
        question: "प्रश्न 29. 'मैं जानता हूँ कि वह ईमानदार है।' में 'कि' कौन-सा अव्यय है?",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "व्यधिकरण समुच्चयबोधक", correct: true },
            { text: "समानाधिकरण समुच्चयबोधक", correct: false },
            { text: "निपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कि' अव्यय एक मुख्य उपवाक्य ('मैं जानता हूँ') को एक आश्रित संज्ञा उपवाक्य ('वह ईमानदार है') से जोड़ रहा है।"
    },
    {
        question: "प्रश्न 30. 'ज्ञान के सहारे ही जीवन का उद्धार होता है।' वाक्य में संबंधबोधक अव्यय है-",
        answers: shuffle([
            { text: "ज्ञान", correct: false },
            { text: "के सहारे", correct: true },
            { text: "जीवन", correct: false },
            { text: "होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'के सहारे' अव्यय 'ज्ञान' (संज्ञा) का संबंध वाक्य के शेष भाग से स्थापित कर रहा है।"
    },
    {
        question: "प्रश्न 31. 'सदा सच बोलो।' वाक्य में 'सदा' है-",
        answers: shuffle([
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "कालवाचक क्रिया-विशेषण", correct: true },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सदा' (हमेशा) शब्द क्रिया के होने के समय का बोध कराता है।"
    },
    {
        question: "प्रश्न 32. 'आप जाएँगे या मैं आऊँ?' वाक्य में 'या' है-",
        answers: shuffle([
            { text: "विभाजक समुच्चयबोधक", correct: true },
            { text: "संयोजक समुच्चयबोधक", correct: false },
            { text: "विरोधदर्शक समुच्चयबोधक", correct: false },
            { text: "परिणामदर्शक समुच्चयबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'या' शब्द दो वाक्यों में से एक को चुनने का विकल्प दे रहा है, अतः यह विभाजक या विकल्पसूचक समानाधिकरण समुच्चयबोधक है।"
    },
    {
        question: "प्रश्न 33. 'वह मुझसे पहले पहुँचा।' में 'से पहले' है-",
        answers: shuffle([
            { text: "क्रिया-विशेषण", correct: false },
            { text: "संबंधबोधक", correct: true },
            { text: "समुच्चयबोधक", correct: false },
            { text: "विस्मयादिबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'से पहले' शब्द 'मुझसे' (सर्वनाम) का संबंध 'पहुँचा' (क्रिया) से बता रहा है।"
    },
    {
        question: "प्रश्न 34. 'हाय! अब मैं क्या करूँ।' वाक्य में 'हाय!' किस भाव का सूचक है?",
        answers: shuffle([
            { text: "हर्ष", correct: false },
            { text: "आश्चर्य", correct: false },
            { text: "शोक", correct: true },
            { text: "घृणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हाय!' शब्द पीड़ा, दुःख या शोक व्यक्त करने के लिए प्रयुक्त होता है।"
    },
    {
        question: "प्रश्न 35. 'तुम तो बहुत अच्छे हो।' वाक्य में 'तो' है-",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "समुच्चयबोधक", correct: false },
            { text: "निपात", correct: true },
            { text: "क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तो' शब्द यहाँ 'तुम' पर बल देने के लिए प्रयुक्त हुआ है, अतः यह एक निपात है।"
    },
    {
        question: "प्रश्न 36. 'घोड़ा तेज दौड़ता है।' वाक्य में 'तेज' है-",
        answers: shuffle([
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तेज' शब्द क्रिया के होने की रीति या ढंग (कैसे दौड़ता है) को बता रहा है।"
    },
    {
        question: "प्रश्न 37. 'राम की अपेक्षा श्याम अधिक बुद्धिमान है।' में 'की अपेक्षा' है-",
        answers: shuffle([
            { text: "व्यतिरेकवाचक संबंधबोधक", correct: false },
            { text: "तुलनावाचक संबंधबोधक", correct: true },
            { text: "साधनवाचक संबंधबोधक", correct: false },
            { text: "विरोधवाचक संबंधबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'की अपेक्षा' शब्द दो संज्ञाओं (राम और श्याम) के बीच तुलना करने का कार्य कर रहा है।"
    },
    {
        question: "प्रश्न 38. 'इसलिए' किस प्रकार का समुच्चयबोधक अव्यय है?",
        answers: shuffle([
            { text: "संयोजक", correct: false },
            { text: "विभाजक", correct: false },
            { text: "विरोधदर्शक", correct: false },
            { text: "परिणामदर्शक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इसलिए' शब्द पहले वाक्य के परिणाम को दूसरे वाक्य में दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'उसने मेहनत की, इसलिए सफल हुआ।'"
    },
    {
        question: "प्रश्न 39. 'वह घर के भीतर है।' में 'के भीतर' है-",
        answers: shuffle([
            { text: "क्रिया-विशेषण", correct: false },
            { text: "समुच्चयबोधक", correct: false },
            { text: "विस्मयादिबोधक", correct: false },
            { text: "संबंधबोधक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'के भीतर' अव्यय 'घर' (संज्ञा) का संबंध वाक्य के अन्य हिस्से से बता रहा है।"
    },
    {
        question: "प्रश्न 40. 'मोहन कल आएगा।' में 'कल' क्या है?",
        answers: shuffle([
            { text: "संज्ञा", correct: false },
            { text: "विशेषण", correct: false },
            { text: "कालवाचक क्रिया-विशेषण", correct: true },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कल' शब्द 'आएगा' क्रिया के होने के समय का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 41. 'सावधान!' किस प्रकार का विस्मयादिबोधक है?",
        answers: shuffle([
            { text: "चेतावनीबोधक", correct: true },
            { text: "शोकबोधक", correct: false },
            { text: "हर्षबोधक", correct: false },
            { text: "घृणाबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सावधान!' शब्द का प्रयोग किसी को सचेत करने या चेतावनी देने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 42. 'काम समाप्त हुआ और हम घर आ गए।' में 'और' है-",
        answers: shuffle([
            { text: "व्यधिकरण समुच्चयबोधक", correct: false },
            { text: "समानाधिकरण समुच्चयबोधक", correct: true },
            { text: "संबंधबोधक", correct: false },
            { text: "निपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'और' दो समान स्तर के (स्वतंत्र) उपवाक्यों को जोड़ रहा है।"
    },
    {
        question: "प्रश्न 43. 'तुम्हें यह काम मात्र करना है।' में 'मात्र' है-",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "निपात", correct: true },
            { text: "समुच्चयबोधक", correct: false },
            { text: "क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मात्र' शब्द वाक्य में 'यह काम' पर बल दे रहा है और उसे सीमित कर रहा है।"
    },
    {
        question: "प्रश्न 44. 'गाड़ी धीरे-धीरे स्टेशन पर आ पहुँची।' में 'धीरे-धीरे' क्या है?",
        answers: shuffle([
            { text: "रीतिवाचक क्रिया-विशेषण", correct: true },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "स्थानवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह शब्द क्रिया के होने के ढंग को स्पष्ट कर रहा है।"
    },
    {
        question: "प्रश्न 45. 'पिताजी के साथ मैं भी बाजार गया।' में 'के साथ' है-",
        answers: shuffle([
            { text: "समुच्चयबोधक", correct: false },
            { text: "संबंधबोधक", correct: true },
            { text: "क्रिया-विशेषण", correct: false },
            { text: "विस्मयादिबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'के साथ' अव्यय 'पिताजी' का संबंध वाक्य के शेष भाग से जोड़ रहा है।"
    },
    {
        question: "प्रश्न 46. 'उफ! कितनी गर्मी है।' में 'उफ!' है-",
        answers: shuffle([
            { text: "पीड़ाबोधक", correct: true },
            { text: "आश्चर्यबोधक", correct: false },
            { text: "हर्षबोधक", correct: false },
            { text: "घृणाबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उफ!' शब्द पीड़ा, कष्ट या बेचैनी का भाव व्यक्त करता है।"
    },
    {
        question: "प्रश्न 47. 'मैं तब ही जाऊँगा।' में 'ही' है-",
        answers: shuffle([
            { text: "संबंधबोधक", correct: false },
            { text: "निपात", correct: true },
            { text: "समुच्चयबोधक", correct: false },
            { text: "विस्मयादिबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ही' शब्द 'तब' पर विशेष बल देने का कार्य कर रहा है, अतः यह निपात है।"
    },
    {
        question: "प्रश्न 48. 'वह उधर गया है।' में 'उधर' है-",
        answers: shuffle([
            { text: "दिशावाचक क्रिया-विशेषण", correct: true },
            { text: "कालवाचक क्रिया-विशेषण", correct: false },
            { text: "रीतिवाचक क्रिया-विशेषण", correct: false },
            { text: "परिमाणवाचक क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उधर' शब्द क्रिया के होने की दिशा का बोध करा रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> दिशावाचक, स्थानवाचक का ही एक उपभेद है।"
    },
    {
        question: "प्रश्न 49. 'लेकिन, किन्तु, परन्तु' किस प्रकार के समुच्चयबोधक हैं?",
        answers: shuffle([
            { text: "संयोजक", correct: false },
            { text: "विभाजक", correct: false },
            { text: "विरोधदर्शक", correct: true },
            { text: "परिणामदर्शक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये शब्द दो वाक्यों को जोड़ते हुए उनमें विरोध का भाव प्रकट करते हैं।"
    },
    {
        question: "प्रश्न 50. 'वह रात को अचानक आया।' वाक्य में क्रिया-विशेषण है-",
        answers: shuffle([
            { text: "रात", correct: false },
            { text: "को", correct: false },
            { text: "अचानक", correct: true },
            { text: "आया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अचानक' शब्द 'आया' क्रिया की रीति बता रहा है।"
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