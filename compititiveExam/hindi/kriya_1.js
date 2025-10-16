const questions = [
    {
        topHeading: "क्रिया पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. जिस क्रिया का फल कर्ता पर ही पड़ता है, वह क्रिया कहलाती है?",
        answers: shuffle([
            { text: "सकर्मक", correct: false },
            { text: "अकर्मक", correct: true },
            { text: "द्विकर्मक", correct: false },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अकर्मक क्रिया में कर्म का अभाव होता है, इसलिए क्रिया का सीधा प्रभाव या फल कर्ता पर ही पड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'राम सोता है।' "
    },
    {
        question: "प्रश्न 2. 'मोहन फल खाता है।' इस वाक्य में 'खाता है' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक क्रिया", correct: false },
            { text: "सकर्मक क्रिया", correct: true },
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'क्या खाता है?' का उत्तर 'फल' मिल रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'फल' कर्म है, इसलिए 'खाना' एक सकर्मक क्रिया है।"
    },
    {
        question: "प्रश्न 3. निम्नलिखित में से किस वाक्य में अकर्मक क्रिया है?",
        answers: shuffle([
            { text: "श्याम भात खाता है।", correct: false },
            { text: "ज्योति रोती है।", correct: true },
            { text: "मैंने उसे पुस्तक दी।", correct: false },
            { text: "उसकी कमीज है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोती है' क्रिया का कोई कर्म नहीं है और इसका फल सीधे कर्ता 'ज्योति' पर पड़ रहा है, इसलिए यह अकर्मक क्रिया है।"
    },
    {
        question: "प्रश्न 4. 'माँ ने बच्चे को खिलौने दिए।' इस वाक्य में कौन सी क्रिया है?",
        answers: shuffle([
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: false },
            { text: "द्विकर्मक", correct: true },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'क्या दिए?' का उत्तर 'खिलौने' (मुख्य कर्म) और 'किसको दिए?' का उत्तर 'बच्चे को' (गौण कर्म) मिल रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह द्विकर्मक क्रिया है।"
    },
    {
        question: "प्रश्न 5. 'जब कर्ता स्वयं कार्य न करके किसी दूसरे को कार्य करने के लिए प्रेरित करता है, तो उस क्रिया को कहते हैं?'",
        answers: shuffle([
            { text: "नामधातु क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रेरणार्थक क्रिया में कर्ता कार्य में सीधे सम्मिलित न होकर किसी और से कार्य करवाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'माँ ने नौकर से खाना बनवाया।' "
    },
    {
        question: "प्रश्न 6. 'हथियाना' शब्द में कौन सी क्रिया है?",
        answers: shuffle([
            { text: "प्रेरणार्थक", correct: false },
            { text: "नामधातु", correct: true },
            { text: "संयुक्त", correct: false },
            { text: "अनुकरणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जो क्रियाएँ संज्ञा, सर्वनाम या विशेषण शब्दों से बनती हैं, वे नामधातु क्रियाएँ कहलाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'हथियाना' क्रिया 'हाथ' (संज्ञा) शब्द से बनी है।"
    },
    {
        question: "प्रश्न 7. 'वह खाकर सो गया।' इस वाक्य में 'खाकर' कौन सी क्रिया है?",
        answers: shuffle([
            { text: "सहायक क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: true },
            { text: "नामबोधक क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कर्ता एक क्रिया समाप्त करके तत्काल कोई दूसरी क्रिया आरंभ करता है, तब पहली क्रिया को पूर्वकालिक क्रिया कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें धातु के साथ 'कर' या 'करके' लगता है।"
    },
    {
        question: "प्रश्न 8. निम्नलिखित में से कौन सी क्रिया सकर्मक है?",
        answers: shuffle([
            { text: "हँसना", correct: false },
            { text: "दौड़ना", correct: false },
            { text: "लिखना", correct: true },
            { text: "उठना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखना' क्रिया के साथ कर्म की अपेक्षा होती है, जैसे - पत्र लिखना, किताब लिखना।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि हँसना, दौड़ना और उठना अकर्मक क्रियाएँ हैं।"
    },
    {
        question: "प्रश्न 9. 'चिड़िया आकाश में उड़ रही है।' इस वाक्य में 'उड़ रही है' क्रिया है-",
        answers: shuffle([
            { text: "सकर्मक", correct: false },
            { text: "अकर्मक", correct: true },
            { text: "समापिका", correct: false },
            { text: "असमापिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उड़ना' क्रिया अकर्मक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'आकाश में' अधिकरण कारक है, कर्म नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> क्रिया का फल सीधे 'चिड़िया' (कर्ता) पर पड़ रहा है।"
    },
    {
        question: "प्रश्न 10. 'अध्यापक ने छात्र से पाठ पढ़वाया।' वाक्य में क्रिया का कौन सा रूप है?",
        answers: shuffle([
            { text: "प्रथम प्रेरणार्थक", correct: false },
            { text: "द्वितीय प्रेरणार्थक", correct: true },
            { text: "द्विकर्मक", correct: false },
            { text: "संयुक्त क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कर्ता स्वयं कार्य न करके किसी दूसरे को प्रेरित कर कार्य करवाता है, तो वह द्वितीय प्रेरणार्थक क्रिया होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ अध्यापक (कर्ता) ने छात्र (प्रेरित) से कार्य करवाया है।"
    },
    {
        question: "प्रश्न 11. 'राम लक्ष्मण से पत्र लिखवाता है।' इस वाक्य में क्रिया का कौन-सा रूप है?",
        answers: shuffle([
            { text: "पूर्णकालिक क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: true },
            { text: "संयुक्त क्रिया", correct: false },
            { text: "अपूर्ण क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में कर्ता 'राम' स्वयं पत्र न लिखकर 'लक्ष्मण' को लिखने के लिए प्रेरित कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह प्रेरणार्थक क्रिया है।"
    },
    {
        question: "प्रश्न 12. 'बतियाना' शब्द में कौन सी क्रिया है?",
        answers: shuffle([
            { text: "नामधातु", correct: true },
            { text: "कृदंत", correct: false },
            { text: "प्रेरणार्थक", correct: false },
            { text: "यौगिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बतियाना' क्रिया 'बात' (संज्ञा) शब्द में 'आना' प्रत्यय लगाकर बनी है।<br><br><i class='fa-solid fa-angles-right icon'></i> संज्ञा से बनने वाली क्रियाएँ नामधातु कहलाती हैं।"
    },
    {
        question: "प्रश्न 13. 'वह घर पहुँच गया।' इस वाक्य में 'पहुँच गया' निम्नांकित में से किस क्रिया का उदाहरण है?",
        answers: shuffle([
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "द्विकर्मक क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: true },
            { text: "पूर्वकालिक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब दो या दो से अधिक क्रियाएँ मिलकर एक पूर्ण क्रिया का बोध कराती हैं, तो उन्हें संयुक्त क्रिया कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पहुँच' और 'गया' दो क्रियाएँ मिलकर एक ही कार्य (पहुँचने) को व्यक्त कर रही हैं।"
    },
    {
        question: "प्रश्न 14. निम्नलिखित वाक्यों में से किसमें प्रेरणार्थक क्रिया का प्रयोग नहीं है?",
        answers: shuffle([
            { text: "पिता उसे पढ़ाते हैं।", correct: false },
            { text: "वे अध्यापक से पढ़वाते हैं।", correct: false },
            { text: "राम नहीं पढ़ता।", correct: true },
            { text: "यह अध्यापक परिश्रम कराते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में कर्ता 'राम' स्वयं ही क्रिया (पढ़ना) नहीं कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें प्रेरणा का भाव नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्पों में प्रेरणा का भाव है।"
    },
    {
        question: "प्रश्न 15. 'मीरा जोर से हँसी।' यह वाक्य किस क्रिया का समुचित उदाहरण है?",
        answers: shuffle([
            { text: "अकर्मक", correct: true },
            { text: "प्रेरणार्थक", correct: false },
            { text: "द्विकर्मक", correct: false },
            { text: "सकर्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हँसना' एक अकर्मक क्रिया है क्योंकि इसका कोई कर्म नहीं होता और इसका फल कर्ता 'मीरा' पर पड़ रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'जोर से' क्रिया की विशेषता बता रहा है, यह कर्म नहीं है।"
    },
    {
        question: "प्रश्न 16. 'लजाना' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "सकर्मक", correct: false },
            { text: "अकर्मक", correct: false },
            { text: "नामधातु", correct: true },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लजाना' क्रिया 'लाज' (संज्ञा) शब्द से बनी है, इसलिए यह नामधातु क्रिया है।"
    },
    {
        question: "प्रश्न 17. 'अब पढ़कर क्या होगा?' इस वाक्य में कौन-सी क्रिया है?",
        answers: shuffle([
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: true },
            { text: "द्विकर्मक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'पढ़कर' क्रिया पहले हुई है और उसके बाद 'क्या होगा' की बात हो रही है।<br><br><i class='fa-solid fa-angles-right icon'></i> धातु में 'कर' लगने से यह पूर्वकालिक क्रिया बनी है।"
    },
    {
        question: "प्रश्न 18. 'सकर्मक क्रिया वाला वाक्य छाँटिए।'",
        answers: shuffle([
            { text: "राजू सदा रोता रहता है।", correct: false },
            { text: "हरीश बस पर चढ़ गया।", correct: false },
            { text: "कैलाश छत से गिर पड़ा।", correct: false },
            { text: "सतीश ने केले खरीदे।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्या खरीदे?' का उत्तर 'केले' मिल रहा है, जो कि कर्म है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य वाक्यों में क्रियाएँ अकर्मक हैं।"
    },
    {
        question: "प्रश्न 19. 'खटखटाना' शब्द है-",
        answers: shuffle([
            { text: "नामधातु क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "अनुकरणात्मक क्रिया", correct: true },
            { text: "संयुक्त क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जो क्रियाएँ किसी ध्वनि के अनुकरण पर बनाई जाती हैं, वे अनुकरणात्मक क्रियाएँ कहलाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - खटखट से खटखटाना, हिनहिन से हिनहिनाना।"
    },
    {
        question: "प्रश्न 20. 'वह जाने लगा।' इस वाक्य में कौन सी क्रिया है?",
        answers: shuffle([
            { text: "अवकाशबोधक", correct: false },
            { text: "समाप्तिबोधक", correct: false },
            { text: "आरंभबोधक", correct: true },
            { text: "निश्चयबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस संयुक्त क्रिया से क्रिया के आरंभ होने का बोध होता है, उसे आरंभबोधक संयुक्त क्रिया कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'लगा', 'लगी', 'लगे' से इसका बोध होता है।"
    },
    {
        question: "प्रश्न 21. 'बच्चा सो रहा है।' वाक्य में क्रिया है-",
        answers: shuffle([
            { text: "सकर्मक", correct: false },
            { text: "अकर्मक", correct: true },
            { text: "द्विकर्मक", correct: false },
            { text: "यौगिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोना' क्रिया का फल कर्ता 'बच्चा' पर पड़ रहा है और इसका कोई कर्म नहीं है, अतः यह अकर्मक क्रिया है।"
    },
    {
        question: "प्रश्न 22. 'राजा ने ब्राह्मण को धन दिया।' वाक्य में कौन सी क्रिया है?",
        answers: shuffle([
            { text: "सकर्मक", correct: false },
            { text: "अकर्मक", correct: false },
            { text: "द्विकर्मक", correct: true },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस वाक्य में 'क्या दिया?' का उत्तर 'धन' (मुख्य कर्म) और 'किसको दिया?' का उत्तर 'ब्राह्मण को' (गौण कर्म) है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह द्विकर्मक क्रिया है।"
    },
    {
        question: "प्रश्न 23. 'पढ़ाना' क्रिया का प्रथम प्रेरणार्थक रूप क्या होगा?",
        answers: shuffle([
            { text: "पढ़ाना", correct: true },
            { text: "पढ़वाना", correct: false },
            { text: "पढ़ना", correct: false },
            { text: "पढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कर्ता स्वयं कार्य में सम्मिलित होकर प्रेरणा देता है तो वह प्रथम प्रेरणार्थक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'माँ बच्चे को पढ़ाती है।' "
    },
    {
        question: "प्रश्न 24. 'पढ़ाना' क्रिया का द्वितीय प्रेरणार्थक रूप क्या होगा?",
        answers: shuffle([
            { text: "पढ़ाना", correct: false },
            { text: "पढ़वाना", correct: true },
            { text: "पढ़ना", correct: false },
            { text: "पढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कर्ता स्वयं कार्य न करके किसी और को प्रेरित करता है तो वह द्वितीय प्रेरणार्थक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'उसने शिक्षक से बच्चे को पढ़वाया।' "
    },
    {
        question: "प्रश्न 25. 'वह उठकर चला गया।' में 'उठकर' है-",
        answers: shuffle([
            { text: "नामधातु", correct: false },
            { text: "पूर्वकालिक", correct: true },
            { text: "कृदंत", correct: false },
            { text: "सकर्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उठना' क्रिया पहले समाप्त हुई, फिर 'चलना' क्रिया हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> पहली क्रिया 'उठकर' पूर्वकालिक क्रिया है।"
    },
    {
        question: "प्रश्न 26. कौन-सा वाक्य सकर्मक क्रिया का उदाहरण है?",
        answers: shuffle([
            { text: "बच्चा रोता है।", correct: false },
            { text: "लड़का हँसता है।", correct: false },
            { text: "पक्षी उड़ते हैं।", correct: false },
            { text: "सीता वीणा बजा रही है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्या बजा रही है?' का उत्तर 'वीणा' मिल रहा है, जो कि कर्म है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'बजाना' सकर्मक क्रिया है।"
    },
    {
        question: "प्रश्न 27. 'गरमाना' शब्द में कौन सी क्रिया है?",
        answers: shuffle([
            { text: "यौगिक क्रिया", correct: false },
            { text: "नामधातु क्रिया", correct: true },
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गरमाना' क्रिया 'गरम' (विशेषण) शब्द से बनी है।<br><br><i class='fa-solid fa-angles-right icon'></i> संज्ञा या विशेषण से बनने वाली क्रियाएँ नामधातु होती हैं।"
    },
    {
        question: "प्रश्न 28. 'उसने नहाकर भोजन किया।' वाक्य में 'नहाकर' कौन सी क्रिया है?",
        answers: shuffle([
            { text: "संयुक्त क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: false },
            { text: "द्विकर्मक क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्ता ने 'नहाने' की क्रिया पहले समाप्त की, फिर 'भोजन करने' की क्रिया आरंभ की।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए 'नहाकर' पूर्वकालिक क्रिया है।"
    },
    {
        question: "प्रश्न 29. 'चलना, फिरना, दौड़ना' कैसी क्रिया है?",
        answers: shuffle([
            { text: "मुख्य क्रिया", correct: false },
            { text: "सहायक क्रिया", correct: false },
            { text: "अकर्मक क्रिया", correct: true },
            { text: "सकर्मक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन क्रियाओं को कर्म की आवश्यकता नहीं होती और इनका फल सीधे कर्ता पर पड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः ये सभी अकर्मक क्रियाएँ हैं।"
    },
    {
        question: "प्रश्न 30. 'क्रिया के मूल रूप को क्या कहते हैं?'",
        answers: shuffle([
            { text: "पद", correct: false },
            { text: "रूप", correct: false },
            { text: "धातु", correct: true },
            { text: "शब्द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया का मूल अंश ही धातु कहलाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'चलना' क्रिया में 'चल' धातु है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी में प्रत्यय लगाकर क्रिया के अन्य रूप बनाए जाते हैं।"
    },
    {
        question: "प्रश्न 31. 'मैं अभी सोकर उठा हूँ।' इस वाक्य में 'सोकर' है-",
        answers: shuffle([
            { text: "सकर्मक क्रिया", correct: false },
            { text: "द्विकर्मक क्रिया", correct: false },
            { text: "नामधातु क्रिया", correct: false },
            { text: "पूर्वकालिक क्रिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोने' की क्रिया समाप्त होने के बाद 'उठने' की क्रिया हुई है, इसलिए 'सोकर' पूर्वकालिक क्रिया है।"
    },
    {
        question: "प्रश्न 32. 'वह खाना खाकर सो गया।' रेखांकित शब्द में कौन सी क्रिया है?",
        answers: shuffle([
            { text: "द्विकर्मक", correct: false },
            { text: "प्रेरणार्थक", correct: false },
            { text: "पूर्वकालिक", correct: true },
            { text: "संयुक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कर्ता एक काम समाप्त करके दूसरा काम करता है तो पहली क्रिया पूर्वकालिक होती है।"
    },
    {
        question: "प्रश्न 33. 'रचना की दृष्टि से क्रिया के कितने भेद हैं?'",
        answers: shuffle([
            { text: "तीन", correct: false },
            { text: "दो", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रचना या बनावट की दृष्टि से क्रिया के सामान्यतः पाँच भेद माने जाते हैं: सामान्य क्रिया, संयुक्त क्रिया, नामधातु क्रिया, प्रेरणार्थक क्रिया और पूर्वकालिक क्रिया।"
    },
    {
        question: "प्रश्न 34. 'मोहन पिताजी को पत्र लिख रहा है।' वाक्य में क्रिया का _____ भेद प्रयुक्त हुआ है।",
        answers: shuffle([
            { text: "प्रेरणार्थक", correct: false },
            { text: "नामधातु", correct: false },
            { text: "अकर्मक", correct: false },
            { text: "सकर्मक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्या लिख रहा है?' का उत्तर 'पत्र' मिल रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः यह सकर्मक क्रिया है।"
    },
    {
        question: "प्रश्न 35. 'वह बहुत तेज दौड़ा।' इस वाक्य में क्रिया है-",
        answers: shuffle([
            { text: "सकर्मक", correct: false },
            { text: "अकर्मक", correct: true },
            { text: "प्रेरणार्थक", correct: false },
            { text: "नामधातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दौड़ना' एक अकर्मक क्रिया है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'बहुत तेज' क्रिया-विशेषण है, जो क्रिया की विशेषता बता रहा है, यह कर्म नहीं है।"
    },
    {
        question: "प्रश्न 36. 'क्रियार्थक संज्ञा' सदा किस रूप में रहती है?",
        answers: shuffle([
            { text: "बहुवचन पुल्लिंग", correct: false },
            { text: "एकवचन पुल्लिंग", correct: true },
            { text: "एकवचन स्त्रीलिंग", correct: false },
            { text: "बहुवचन स्त्रीलिंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब क्रिया संज्ञा की तरह व्यवहार में आती है तो उसे क्रियार्थक संज्ञा कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - 'टहलना स्वास्थ्य के लिए अच्छा है।'<br><br><i class='fa-solid fa-angles-right icon'></i> यह हमेशा एकवचन पुल्लिंग में होती है।"
    },
    {
        question: "प्रश्न 37. 'काम का नाम बताने वाले शब्द को क्या कहते हैं?'",
        answers: shuffle([
            { text: "संज्ञा", correct: false },
            { text: "सर्वनाम", correct: false },
            { text: "क्रिया", correct: true },
            { text: "क्रिया-विशेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस शब्द से किसी कार्य के करने या होने का बोध हो, उसे क्रिया कहते हैं।"
    },
    {
        question: "प्रश्न 38. 'मरमरा कर गिर पड़ा।' में 'मरमरा कर' कौन सी क्रिया है?",
        answers: shuffle([
            { text: "पूर्वकालिक", correct: true },
            { text: "नामबोधक", correct: false },
            { text: "संयुक्त", correct: false },
            { text: "ध्वन्यात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मरमराने' की क्रिया के बाद 'गिरने' की क्रिया हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> धातु के साथ 'कर' का प्रयोग इसे पूर्वकालिक बनाता है।"
    },
    {
        question: "प्रश्न 39. 'जागना' मूल रूप क्रिया का प्रथम प्रेरणार्थक रूप क्या होगा?",
        answers: shuffle([
            { text: "जगाना", correct: true },
            { text: "जगवाना", correct: false },
            { text: "जागवाना", correct: false },
            { text: "जाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जागना' (मूल क्रिया) का प्रथम प्रेरणार्थक रूप 'जगाना' होता है।"
    },
    {
        question: "प्रश्न 40. 'वह पढ़ता तो उत्तीर्ण हो जाता।' वाक्य में क्रिया किस काल की है?",
        answers: shuffle([
            { text: "संदिग्ध भूतकाल", correct: false },
            { text: "हेतुहेतुमद् भूतकाल", correct: true },
            { text: "सामान्य भूतकाल", correct: false },
            { text: "आसन्न भूतकाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब भूतकाल में एक क्रिया का होना दूसरी क्रिया पर निर्भर करता है, तो उसे हेतुहेतुमद् भूतकाल कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ उत्तीर्ण होना पढ़ने पर निर्भर था।"
    },
    {
        question: "प्रश्न 41. 'घोड़ा हिनहिनाता है।' में कौन सी क्रिया है?",
        answers: shuffle([
            { text: "नामधातु", correct: false },
            { text: "अनुकरणात्मक", correct: true },
            { text: "प्रेरणार्थक", correct: false },
            { text: "यौगिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिनहिनाना' क्रिया घोड़े की 'हिन-हिन' ध्वनि के अनुकरण से बनी है।"
    },
    {
        question: "प्रश्न 42. 'जब दो या दो से अधिक क्रियाएँ मिलकर एक पूर्ण क्रिया बनाती हैं, तो उसे कहते हैं-'",
        answers: shuffle([
            { text: "सामान्य क्रिया", correct: false },
            { text: "संयुक्त क्रिया", correct: true },
            { text: "नामधातु क्रिया", correct: false },
            { text: "प्रेरणार्थक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे - 'वह पढ़ चुका है।'<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पढ़' और 'चुकना' दो क्रियाएँ मिलकर एक क्रिया बना रही हैं।"
    },
    {
        question: "प्रश्न 43. 'पक्षी डाल पर बैठा है।' इस वाक्य में क्रिया है-",
        answers: shuffle([
            { text: "सकर्मक", correct: false },
            { text: "अकर्मक", correct: true },
            { text: "द्विकर्मक", correct: false },
            { text: "प्रेरणार्थक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बैठना' अकर्मक क्रिया है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'डाल पर' अधिकरण कारक है, कर्म नहीं।"
    },
    {
        question: "प्रश्न 44. 'जब क्रिया का होना दूसरी क्रिया पर निर्भर हो', उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "आज्ञार्थक क्रिया", correct: false },
            { text: "संकेतार्थक क्रिया", correct: true },
            { text: "इच्छार्थक क्रिया", correct: false },
            { text: "संभावनार्थक क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रकार की क्रिया में एक शर्त या संकेत होता है, जैसे - 'यदि तुम आओगे, तो मैं चलूँगा।'<br><br><i class='fa-solid fa-angles-right icon'></i> इसे हेतुहेतुमद् भी कहते हैं।"
    },
    {
        question: "प्रश्न 45. 'वह सोता ही रहता है।' वाक्य में 'रहता है' किस प्रकार की क्रिया है?",
        answers: shuffle([
            { text: "मुख्य क्रिया", correct: false },
            { text: "सहायक क्रिया", correct: false },
            { text: "रंजक क्रिया", correct: true },
            { text: "नामधातु क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त क्रिया में मुख्य क्रिया के अर्थ में विशेषता लाने वाली क्रिया को रंजक क्रिया कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'रहना' क्रिया 'सोने' की नित्यता बता रही है।"
    },
    {
        question: "प्रश्न 46. 'उसे पत्र लिखवाना है।' में कौन सी क्रिया है?",
        answers: shuffle([
            { text: "सकर्मक", correct: false },
            { text: "अकर्मक", correct: false },
            { text: "प्रेरणार्थक", correct: true },
            { text: "संयुक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखवाना' शब्द में कर्ता स्वयं कार्य न करके किसी और से करवाने का भाव प्रकट कर रहा है।"
    },
    {
        question: "प्रश्न 47. 'मैं नहा-धोकर नाश्ता करूँगा।' वाक्य में 'नहा-धोकर' क्रिया है-",
        answers: shuffle([
            { text: "नामधातु", correct: false },
            { text: "प्रेरणार्थक", correct: false },
            { text: "पूर्वकालिक", correct: true },
            { text: "सार्वनामिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नहाने-धोने' की क्रिया पहले होगी, उसके बाद 'नाश्ता करने' की क्रिया होगी।"
    },
    {
        question: "प्रश्न 48. 'लड़का सोता है।' यह वाक्य संबंधित है-",
        answers: shuffle([
            { text: "सकर्मक से", correct: false },
            { text: "अकर्मक से", correct: true },
            { text: "दोनों से", correct: false },
            { text: "किसी से नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोना' क्रिया का कर्म नहीं होता, इसलिए यह अकर्मक क्रिया है।"
    },
    {
        question: "प्रश्न 49. 'मुझे रोने दो।' वाक्य में क्रिया है-",
        answers: shuffle([
            { text: "इच्छाबोधक", correct: false },
            { text: "अनुमतिबोधक", correct: true },
            { text: "शक्तिबोधक", correct: false },
            { text: "अभ्यासबोधक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस संयुक्त क्रिया से कार्य करने की अनुमति दिए जाने का बोध हो, वह अनुमतिबोधक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'देना' क्रिया के योग से यह बनती है।"
    },
    {
        question: "प्रश्न 50. 'वह बोल सकता है।' में 'सकता है' है-",
        answers: shuffle([
            { text: "शक्तिबोधक संयुक्त क्रिया", correct: true },
            { text: "इच्छाबोधक संयुक्त क्रिया", correct: false },
            { text: "निश्चयबोधक संयुक्त क्रिया", correct: false },
            { text: "समाप्तिबोधक संयुक्त क्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सकना' क्रिया के योग से बनी संयुक्त क्रिया कार्य करने की शक्ति या सामर्थ्य का बोध कराती है।"
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