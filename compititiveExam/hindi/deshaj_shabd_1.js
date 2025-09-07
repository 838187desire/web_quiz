const questions = [
    {
        topHeading: "देशज शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 1 (quiz_no.28)"
    },
    {
        question: "'गड़बड़' शब्द किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गड़बड़' शब्द स्थानीय बोलियों से उत्पन्न हुआ है और इसका मूल संस्कृत में नहीं मिलता, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'डिबिया' शब्द का संबंध किस प्रकार के शब्द से है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डिबिया' शब्द भारत की स्थानीय भाषाओं से लिया गया है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'पगड़ी' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पगड़ी' एक देशज शब्द है, क्योंकि यह भारत की बोलियों में प्रचलित है और इसका कोई ज्ञात संस्कृत मूल नहीं है।"
    },
    {
        question: "निम्नलिखित में से कौन-सा शब्द देशज है?",
        answers: shuffle([
            { text: "स्कूल", correct: false },
            { text: "लोटा", correct: true },
            { text: "रेल", correct: false },
            { text: "कमरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोटा' शब्द की उत्पत्ति का कोई ज्ञात स्रोत नहीं है और यह स्थानीय भाषाओं में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'खिचड़ी' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खिचड़ी' शब्द एक स्थानीय बोली से लिया गया है और इसका मूल अज्ञात है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'ढोंगी' शब्द क्या है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढोंगी' शब्द की उत्पत्ति भारत की स्थानीय भाषाओं में हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'जूता' शब्द किस प्रकार का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जूता' शब्द की उत्पत्ति का कोई ज्ञात स्रोत नहीं है और यह स्थानीय बोलियों में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'पेट' शब्द किस प्रकार का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेट' शब्द एक देशज शब्द है क्योंकि यह भारतीय बोलियों से लिया गया है और इसका कोई ज्ञात संस्कृत मूल नहीं है।"
    },
    {
        question: "'खटपट' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खटपट' एक देशज शब्द है जो अनुकरणात्मक ध्वनि से बना है और स्थानीय भाषाओं में प्रयोग होता है।"
    },
    {
        question: "'पगड़ी' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पगड़ी' भारत की स्थानीय बोलियों से उत्पन्न हुआ है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'लूट' शब्द किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लूट' शब्द की उत्पत्ति भारत की ग्रामीण बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'ढक्कन' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढक्कन' एक ध्वनि अनुकरणात्मक शब्द है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'झोला' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झोला' शब्द की उत्पत्ति भारतीय स्थानीय भाषाओं से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'ठुमरी' शब्द किस प्रकार का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठुमरी' भारतीय संगीत की एक शैली का नाम है, जिसका उद्भव स्थानीय स्तर पर हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'ठेंगा' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठेंगा' शब्द की उत्पत्ति स्थानीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'झाड़ू' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झाड़ू' शब्द का मूल अज्ञात है और यह भारतीय स्थानीय भाषाओं में प्रचलित है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'लड़का' शब्द किस श्रेणी का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़का' शब्द की उत्पत्ति भारतीय बोलियों से हुई है और इसका कोई ज्ञात संस्कृत मूल नहीं है।"
    },
    {
        question: "'पेटू' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेटू' शब्द 'पेट' से बना है, जो कि एक देशज शब्द है, इसलिए यह भी देशज है।"
    },
    {
        question: "'ठुमका' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठुमका' भारतीय नृत्य और संगीत से जुड़ा एक शब्द है, जिसका उद्भव स्थानीय स्तर पर हुआ है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'पेट' शब्द की उत्पत्ति का मूल क्या है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेट' एक देशज शब्द है, क्योंकि यह भारतीय बोलियों से लिया गया है और इसका कोई ज्ञात संस्कृत मूल नहीं है।"
    },
    {
        question: "'टांग' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टांग' शब्द की उत्पत्ति भारतीय स्थानीय भाषाओं से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'रोटी' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोटी' शब्द का कोई ज्ञात संस्कृत मूल नहीं है और यह भारतीय बोलियों में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'खुरापाती' शब्द का संबंध किस प्रकार के शब्द से है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुरापाती' शब्द भारतीय स्थानीय भाषाओं से लिया गया है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'लपकना' शब्द क्या है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लपकना' क्रियापद स्थानीय बोलियों से उत्पन्न हुआ है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'झटपट' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झटपट' एक अनुकरणात्मक शब्द है और इसका कोई ज्ञात संस्कृत मूल नहीं है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'लुल्ल' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुल्ल' शब्द की उत्पत्ति स्थानीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'अंट-शंट' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंट-शंट' शब्द स्थानीय बोलियों से उत्पन्न हुआ है और इसका कोई ज्ञात संस्कृत मूल नहीं है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'चमचम' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चमचम' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'ठेस' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठेस' शब्द की उत्पत्ति स्थानीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'गच्चा' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गच्चा' शब्द का प्रयोग भारतीय बोलियों में आम है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'खूंटी' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खूंटी' शब्द की उत्पत्ति का कोई ज्ञात स्रोत नहीं है और यह स्थानीय भाषाओं में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'डंका' शब्द का संबंध किस प्रकार के शब्द से है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'डंका' एक अनुकरणात्मक शब्द है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'पिलपिला' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिलपिला' शब्द की उत्पत्ति भारतीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'गुड़गुड़' शब्द क्या है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुड़गुड़' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'ढोल' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढोल' शब्द का मूल अज्ञात है और यह भारतीय स्थानीय भाषाओं में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'फफूँद' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फफूँद' शब्द की उत्पत्ति भारतीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'फटाफट' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फटाफट' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'अंगोछा' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंगोछा' शब्द की उत्पत्ति स्थानीय बोलियों से हुई है और इसका कोई ज्ञात संस्कृत मूल नहीं है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'खचाखच' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खचाखच' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'खर्राटा' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खर्राटा' शब्द की उत्पत्ति भारतीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'फुरफुरी' शब्द का संबंध किस प्रकार के शब्द से है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फुरफुरी' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'चस्का' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चस्का' शब्द की उत्पत्ति भारतीय बोलियों से हुई है और इसका कोई ज्ञात संस्कृत मूल नहीं है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'छप्पर' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छप्पर' शब्द की उत्पत्ति का कोई ज्ञात संस्कृत मूल नहीं है और यह भारतीय बोलियों में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'कटाना' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटाना' क्रियापद स्थानीय बोलियों से उत्पन्न हुआ है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'टिमटिम' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'टिमटिम' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'लुगदी' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुगदी' शब्द की उत्पत्ति भारतीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'खुरपा' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुरपा' शब्द की उत्पत्ति भारतीय स्थानीय भाषाओं से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'पपड़ी' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पपड़ी' शब्द का मूल अज्ञात है और यह भारतीय बोलियों में प्रचलित है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'घपला' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घपला' शब्द की उत्पत्ति स्थानीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'चमचा' शब्द का संबंध किस प्रकार के शब्द से है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चमचा' शब्द भारतीय बोलियों में प्रचलित है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
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