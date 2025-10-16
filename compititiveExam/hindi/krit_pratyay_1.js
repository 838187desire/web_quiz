const questions = [
    {
        topHeading: "कृत्प्रत्यय पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1: 'लेखक' शब्द में कौन-सा कृत् प्रत्यय लगा है?",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "अक", correct: true },
            { text: "इक", correct: false },
            { text: "यक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लेखक' शब्द 'लिख्' धातु में 'अक' प्रत्यय लगने से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कर्तृवाचक कृत्प्रत्यय है, जो क्रिया के करने वाले का बोध कराता है।"
    },
    {
        question: "प्रश्न 2: 'तैराक' शब्द में मूल धातु और प्रत्यय का सही विकल्प कौन-सा है?",
        answers: shuffle([
            { text: "तैर + आक", correct: true },
            { text: "तैरा + क", correct: false },
            { text: "तैर + अक", correct: false },
            { text: "तै + राक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तैराक' शब्द 'तैर' (तैरना) क्रिया की धातु में 'आक' प्रत्यय जुड़ने से बना है, जिसका अर्थ है 'तैरने वाला'।"
    },
    {
        question: "प्रश्न 3: 'भुलक्कड़' शब्द में किस प्रत्यय का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "ड़", correct: false },
            { text: "क्कड़", correct: false },
            { text: "अक्कड़", correct: true },
            { text: "अकड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भुलक्कड़' शब्द 'भूल' धातु में 'अक्कड़' प्रत्यय लगने से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कर्तृवाचक कृत्प्रत्यय का उदाहरण है।"
    },
    {
        question: "प्रश्न 4: 'होनहार' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "र", correct: false },
            { text: "हार", correct: true },
            { text: "नहार", correct: false },
            { text: "आर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'होनहार' शब्द 'होना' क्रिया की धातु 'हो' में 'हार' प्रत्यय के योग से बना है, जो 'करने वाला' का अर्थ देता है।"
    },
    {
        question: "प्रश्न 5: निम्नलिखित में से कर्तृवाचक कृत्प्रत्यय वाला शब्द कौन-सा है?",
        answers: shuffle([
            { text: "मिलावट", correct: false },
            { text: "सजावट", correct: false },
            { text: "लिखावट", correct: false },
            { text: "पालनहार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पालनहार' शब्द 'पालन' क्रिया में 'हार' प्रत्यय लगने से बना है, जो कर्ता (पालन करने वाला) का बोध करा रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्प भाववाचक कृत्प्रत्यय के उदाहरण हैं।"
    },
    {
        question: "प्रश्न 6: 'लड़ाकू' शब्द में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "कू", correct: false },
            { text: "डाकू", correct: false },
            { text: "ऊ", correct: false },
            { text: "आकू", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़ाकू' शब्द 'लड़' धातु में 'आकू' प्रत्यय जुड़ने से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कर्ता की विशेषता बताने वाला कृदंत शब्द है।"
    },
    {
        question: "प्रश्न 7: 'बिकाऊ' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ऊ", correct: false },
            { text: "काऊ", correct: false },
            { text: "आऊ", correct: true },
            { text: "उ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिकाऊ' शब्द 'बिक' (बिकना) धातु में 'आऊ' प्रत्यय लगने से बना है, जिसका अर्थ है 'बिकने योग्य'।"
    },
    {
        question: "प्रश्न 8: 'गवैया' शब्द में मूल क्रिया और प्रत्यय हैं-",
        answers: shuffle([
            { text: "गव + ऐया", correct: false },
            { text: "गा + वैया", correct: false },
            { text: "गा + ऐया", correct: true },
            { text: "ग + वैया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गवैया' शब्द 'गा' (गाना) धातु में 'ऐया' प्रत्यय लगने से बना है, जिसका अर्थ है 'गाने वाला'।"
    },
    {
        question: "प्रश्न 9: 'खिलौना' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ना", correct: false },
            { text: "औना", correct: true },
            { text: "लौना", correct: false },
            { text: "ओना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खिलौना' शब्द 'खेल' धातु में 'औना' प्रत्यय लगने से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कर्मवाचक कृत्प्रत्यय है, जो क्रिया के कर्म का बोध कराता है।"
    },
    {
        question: "प्रश्न 10: 'बिछौना' में मूल धातु क्या है?",
        answers: shuffle([
            { text: "बिछ", correct: false },
            { text: "बिछा", correct: true },
            { text: "बिछौ", correct: false },
            { text: "बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिछौना' शब्द 'बिछा' (बिछाना) धातु में 'औना' प्रत्यय जुड़ने से बना है।"
    },
    {
        question: "प्रश्न 11: 'पढ़ना' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ना", correct: true },
            { text: "अना", correct: false },
            { text: "पढ़", correct: false },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पढ़ना' क्रिया 'पढ़' धातु में कर्मवाचक कृत्प्रत्यय 'ना' लगने से बनी है।"
    },
    {
        question: "प्रश्न 12: 'बेलन' शब्द में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "न", correct: true },
            { text: "अन", correct: false },
            { text: "लन", correct: false },
            { text: "बेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेलन' शब्द 'बेल' (बेलना) धातु में 'न' प्रत्यय लगने से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह करणवाचक कृत्प्रत्यय है, जो क्रिया के साधन का बोध कराता है।"
    },
    {
        question: "प्रश्न 13: 'झाड़ू' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ड़ू", correct: false },
            { text: "ऊ", correct: true },
            { text: "आड़ू", correct: false },
            { text: "झा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झाड़ू' शब्द 'झाड़' (झाड़ना) धातु में 'ऊ' प्रत्यय लगने से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्रिया के साधन (करण) का बोध कराता है।"
    },
    {
        question: "प्रश्न 14: निम्नलिखित में से करणवाचक कृत्प्रत्यय का उदाहरण कौन-सा है?",
        answers: shuffle([
            { text: "पढ़ाई", correct: false },
            { text: "हँसोड़", correct: false },
            { text: "कतरनी", correct: true },
            { text: "भगोड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कतरनी' शब्द 'कतर' धातु में 'नी' प्रत्यय लगने से बना है, जो काटने के साधन का बोध करा रहा है।"
    },
    {
        question: "प्रश्न 15: 'झूला' शब्द का निर्माण किस प्रत्यय से हुआ है?",
        answers: shuffle([
            { text: "ला", correct: false },
            { text: "आ", correct: true },
            { text: "ऊला", correct: false },
            { text: "उला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झूला' शब्द 'झूल' धातु में 'आ' प्रत्यय लगने से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह करणवाचक कृत्प्रत्यय है।"
    },
    {
        question: "प्रश्न 16: 'लिखाई' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: false },
            { text: "आई", correct: true },
            { text: "लिखाई", correct: false },
            { text: "खाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखाई' शब्द 'लिख' धातु में 'आई' प्रत्यय लगने से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भाववाचक कृत्प्रत्यय है, जो क्रिया के भाव का बोध कराता है।"
    },
    {
        question: "प्रश्न 17: 'उड़ान' शब्द में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "न", correct: false },
            { text: "आन", correct: true },
            { text: "अन", correct: false },
            { text: "ड़ान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उड़ान' शब्द 'उड़' (उड़ना) धातु में 'आन' प्रत्यय के योग से बना एक भाववाचक संज्ञा शब्द है।"
    },
    {
        question: "प्रश्न 18: 'चुनाव' में कौन-सा प्रत्यय लगा है?",
        answers: shuffle([
            { text: "व", correct: false },
            { text: "नाव", correct: false },
            { text: "आव", correct: true },
            { text: "अव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चुनाव' शब्द 'चुन' (चुनना) धातु में 'आव' प्रत्यय के जुड़ने से बना है, जो एक भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 19: 'सजावट' शब्द का प्रत्यय बताइए।",
        answers: shuffle([
            { text: "ट", correct: false },
            { text: "वट", correct: false },
            { text: "आवट", correct: true },
            { text: "जावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सजावट' शब्द 'सज' (सजना) धातु में 'आवट' प्रत्यय लगने से निर्मित भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 20: 'मुस्कराहट' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ट", correct: false },
            { text: "हट", correct: false },
            { text: "आहट", correct: true },
            { text: "राहट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुस्कराहट' शब्द 'मुस्करा' धातु में 'आहट' प्रत्यय लगने से बना भाववाचक कृदंत शब्द है।"
    },
    {
        question: "प्रश्न 21: 'समझौता' शब्द में प्रत्यय है-",
        answers: shuffle([
            { text: "ता", correct: false },
            { text: "औता", correct: true },
            { text: "झौता", correct: false },
            { text: "अता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समझौता' शब्द 'समझ' धातु में 'औता' प्रत्यय के योग से बना है।"
    },
    {
        question: "प्रश्न 22: 'हँसी' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: true },
            { text: "सी", correct: false },
            { text: "इ", correct: false },
            { text: "असी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हँसी' शब्द 'हँस' धातु में 'ई' प्रत्यय लगने से बनी भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 23: 'लूट' शब्द किस प्रत्यय के योग से बना है?",
        answers: shuffle([
            { text: "ट", correct: false },
            { text: "ऊट", correct: false },
            { text: "अ", correct: false },
            { text: "शून्य प्रत्यय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लूट' शब्द 'लूट' धातु से ही बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ क्रिया का भाव प्रकट करने के लिए किसी अतिरिक्त प्रत्यय का योग नहीं हुआ है, इसे शून्य प्रत्यय माना जाता है।"
    },
    {
        question: "प्रश्न 24: 'बैठक' में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "क", correct: true },
            { text: "अक", correct: false },
            { text: "ठक", correct: false },
            { text: "इक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बैठक' शब्द 'बैठ' धातु में 'क' प्रत्यय लगने से बना है, जो एक भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 25: 'बहता हुआ' में 'बहता' शब्द क्या है?",
        answers: shuffle([
            { text: "संज्ञा", correct: false },
            { text: "सर्वनाम", correct: false },
            { text: "क्रिया", correct: false },
            { text: "कृदंत विशेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'बहता' शब्द 'बह' धातु में 'ता' प्रत्यय लगने से बना है और यह आगे आने वाले संज्ञा शब्द (जैसे - पानी) की विशेषता बता रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्रियावाचक कृत्प्रत्यय का उदाहरण है।"
    },
    {
        question: "प्रश्न 26: 'मरियल' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ल", correct: false },
            { text: "अल", correct: false },
            { text: "इयल", correct: true },
            { text: "रीयल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मरियल' शब्द 'मर' धातु में 'इयल' प्रत्यय लगने से बना है, जो 'मरा हुआ सा' का अर्थ देता है।"
    },
    {
        question: "प्रश्न 27: 'पियक्कड़' शब्द में मूल धातु है-",
        answers: shuffle([
            { text: "पिय", correct: false },
            { text: "पी", correct: true },
            { text: "पियक्क", correct: false },
            { text: "पियक्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पियक्कड़' शब्द 'पी' (पीना) धातु में 'अक्कड़' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 28: 'राखनवाला' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ला", correct: false },
            { text: "आला", correct: false },
            { text: "वाला", correct: true },
            { text: "नवाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राखनवाला' शब्द 'राखना' क्रिया में 'वाला' प्रत्यय लगने से बना है, जिसका अर्थ है 'रक्षा करने वाला'।"
    },
    {
        question: "प्रश्न 29: 'चढ़ाई' में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "ई", correct: false },
            { text: "आई", correct: true },
            { text: "ढाई", correct: false },
            { text: "चढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चढ़ाई' शब्द 'चढ़' धातु में 'आई' प्रत्यय लगने से बनी भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 30: 'घुमक्कड़' में प्रत्यय है-",
        answers: shuffle([
            { text: "ड़", correct: false },
            { text: "अक्कड़", correct: true },
            { text: "कक्कड़", correct: false },
            { text: "मक्कड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घुमक्कड़' शब्द 'घूम' धातु में 'अक्कड़' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 31: 'घटिया' शब्द में कौन-सा प्रत्यय लगा है?",
        answers: shuffle([
            { text: "या", correct: false },
            { text: "इया", correct: true },
            { text: "टिया", correct: false },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घटिया' शब्द 'घट' (घटना) धातु में 'इया' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 32: 'खाया' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "या", correct: true },
            { text: "आ", correct: false },
            { text: "आया", correct: false },
            { text: "य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खाया' भूतकालिक कृदंत है, जो 'खा' धातु में 'या' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 33: 'मिलनसार' में कृत् प्रत्यय है-",
        answers: shuffle([
            { text: "र", correct: false },
            { text: "आर", correct: false },
            { text: "सार", correct: true },
            { text: "नसार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलनसार' शब्द 'मिलन' (मिलना क्रिया से बनी संज्ञा) में 'सार' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 34: 'चमक' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "अक", correct: false },
            { text: "मक", correct: false },
            { text: "शून्य प्रत्यय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चमक' शब्द 'चमक' धातु से ही बनी भाववाचक संज्ञा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें कोई अतिरिक्त प्रत्यय नहीं जुड़ा है।"
    },
    {
        question: "प्रश्न 35: 'लड़ाका' शब्द किस प्रत्यय के योग से बना है?",
        answers: shuffle([
            { text: "का", correct: false },
            { text: "आका", correct: true },
            { text: "डाका", correct: false },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़ाका' शब्द 'लड़' धातु में 'आका' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 36: 'पढ़ाकू' में प्रत्यय है-",
        answers: shuffle([
            { text: "कू", correct: false },
            { text: "आकू", correct: true },
            { text: "ऊ", correct: false },
            { text: "डाकू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पढ़ाकू' शब्द 'पढ़' धातु में 'आकू' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 37: 'मिलावट' में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "ट", correct: false },
            { text: "वट", correct: false },
            { text: "आवट", correct: true },
            { text: "लावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलावट' शब्द 'मिल' धातु में 'आवट' प्रत्यय लगने से बनी भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 38: 'बढ़िया' शब्द में प्रत्यय है-",
        answers: shuffle([
            { text: "या", correct: false },
            { text: "इया", correct: true },
            { text: "ढ़िया", correct: false },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बढ़िया' शब्द 'बढ़' धातु में 'इया' प्रत्यय लगने से बना विशेषण है।"
    },
    {
        question: "प्रश्न 39: 'कथनी' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: false },
            { text: "नी", correct: false },
            { text: "अनी", correct: true },
            { text: "य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कथनी' शब्द 'कथ्' धातु में 'अनीय' प्रत्यय का संक्षिप्त रूप 'अनी' लगने से बना है।"
    },
    {
        question: "प्रश्न 40: 'रटंत' शब्द में प्रत्यय है-",
        answers: shuffle([
            { text: "त", correct: false },
            { text: "अंत", correct: true },
            { text: "तंत", correct: false },
            { text: "र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रटंत' शब्द 'रट' धातु में 'अंत' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 41: 'थकान' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "न", correct: false },
            { text: "अन", correct: false },
            { text: "आन", correct: true },
            { text: "कान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'थकान' शब्द 'थक' धातु में 'आन' प्रत्यय लगने से बनी भाववाचक संज्ञा है।"
    },
    {
        question: "प्रश्न 42: 'चाल' शब्द में प्रत्यय है-",
        answers: shuffle([
            { text: "ल", correct: false },
            { text: "आल", correct: false },
            { text: "शून्य प्रत्यय", correct: true },
            { text: "अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चाल' शब्द 'चल' धातु से ही बनी भाववाचक संज्ञा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें कोई अतिरिक्त प्रत्यय नहीं जुड़ा है।"
    },
    {
        question: "प्रश्न 43: 'मँगनी' शब्द में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: false },
            { text: "नी", correct: true },
            { text: "अनी", correct: false },
            { text: "गी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मँगनी' शब्द 'माँग' धातु में 'नी' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 44: 'पावक' शब्द में प्रत्यय है-",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "अक", correct: true },
            { text: "आवक", correct: false },
            { text: "वक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पावक' शब्द 'पौ' धातु में 'अक' प्रत्यय के योग से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> अयादि संधि के नियम से 'औ' का 'आव' हो गया है।"
    },
    {
        question: "प्रश्न 45: 'होनहार' किस प्रकार का कृदंत शब्द है?",
        answers: shuffle([
            { text: "भाववाचक", correct: false },
            { text: "करणवाचक", correct: false },
            { text: "कर्मवाचक", correct: false },
            { text: "कर्तृवाचक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'होनहार' शब्द 'होना' क्रिया को करने वाले की विशेषता बता रहा है, अतः यह कर्तृवाचक कृदंत है।"
    },
    {
        question: "प्रश्न 46: 'सोहन' शब्द में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "न", correct: false },
            { text: "अन", correct: true },
            { text: "हन", correct: false },
            { text: "इन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोहन' शब्द 'सोह' (सोहना) धातु में 'अन' प्रत्यय के योग से बना है।"
    },
    {
        question: "प्रश्न 47: 'छुटौती' में प्रयुक्त प्रत्यय है-",
        answers: shuffle([
            { text: "टी", correct: false },
            { text: "ती", correct: false },
            { text: "औती", correct: true },
            { text: "उती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छुटौती' शब्द 'छूट' धातु में 'औती' प्रत्यय के योग से बना है।"
    },
    {
        question: "प्रश्न 48: 'भगोड़ा' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "डा", correct: false },
            { text: "आ", correct: false },
            { text: "ओड़ा", correct: true },
            { text: "गौड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भगोड़ा' शब्द 'भाग' धातु में 'ओड़ा' प्रत्यय लगने से बना है।"
    },
    {
        question: "प्रश्न 49: 'लिखावट' किस प्रकार का कृदंत है?",
        answers: shuffle([
            { text: "कर्तृवाचक", correct: false },
            { text: "भाववाचक", correct: true },
            { text: "करणवाचक", correct: false },
            { text: "कर्मवाचक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखावट' शब्द 'लिख' धातु से लिखने के भाव का बोध करा रहा है, अतः यह भाववाचक कृदंत है।"
    },
    {
        question: "प्रश्न 50: 'अड़ियल' में मूल धातु और प्रत्यय हैं-",
        answers: shuffle([
            { text: "अड़ि + यल", correct: false },
            { text: "अड़ + इयल", correct: true },
            { text: "अ + ड़ियल", correct: false },
            { text: "अड़ी + ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अड़ियल' शब्द 'अड़' (अड़ना) धातु में 'इयल' प्रत्यय लगने से बना है।"
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