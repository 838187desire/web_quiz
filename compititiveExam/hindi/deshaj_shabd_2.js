const questions = [
    {
        topHeading: "देशज शब्द पर आधारित 46 बहुविकल्पीय प्रश्न part 2 (quiz_no.29)"
    },
    {
        question: "'लुगदी' शब्द किस प्रकार का है?",
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
    },
    {
        question: "'सटपट' शब्द क्या है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सटपट' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'चूड़ियाँ' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चूड़ियाँ' शब्द भारतीय स्थानीय भाषाओं से उत्पन्न हुआ है और इसका कोई ज्ञात संस्कृत मूल नहीं है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'फुनगी' किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फुनगी' शब्द भारतीय बोलियों से लिया गया है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'छैला' शब्द किस प्रकार का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छैला' एक भारतीय शब्द है जिसका उपयोग अक्सर ग्रामीण क्षेत्रों में होता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'बड़बड़ाना' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बड़बड़ाना' क्रियापद स्थानीय बोलियों से उत्पन्न हुआ है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'कलाई' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कलाई' शब्द की उत्पत्ति का कोई ज्ञात संस्कृत मूल नहीं है और यह भारतीय बोलियों में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'खुरपाती' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुरपाती' शब्द भारतीय स्थानीय भाषाओं से लिया गया है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'झोला' शब्द का संबंध किस प्रकार के शब्द से है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झोला' शब्द की उत्पत्ति भारतीय स्थानीय भाषाओं से हुई है, इसलिए यह एक देशज शब्द है।"
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
        question: "'लुगा' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुगा' शब्द की उत्पत्ति का कोई ज्ञात स्रोत नहीं है और यह भारतीय बोलियों में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'ददुआ' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ददुआ' शब्द भारतीय स्थानीय भाषाओं से उत्पन्न हुआ है, इसलिए यह एक देशज शब्द है।"
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
        question: "'लोटा' शब्द किस प्रकार का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोटा' शब्द की उत्पत्ति का कोई ज्ञात स्रोत नहीं है और यह स्थानीय भाषाओं में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'कचर-पचर' किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कचर-पचर' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'चूल्हा' शब्द का संबंध किस प्रकार के शब्द से है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चूल्हा' शब्द की उत्पत्ति स्थानीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'बगड़' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बगड़' शब्द भारतीय स्थानीय भाषाओं से लिया गया है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'झुग्गी' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झुग्गी' शब्द की उत्पत्ति भारतीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'कटाव' शब्द क्या है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कटाव' शब्द की उत्पत्ति स्थानीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'खुरपी' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खुरपी' शब्द की उत्पत्ति भारतीय स्थानीय भाषाओं से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'अंड-बंड' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंड-बंड' शब्द स्थानीय बोलियों से उत्पन्न हुआ है और इसका कोई ज्ञात संस्कृत मूल नहीं है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'अड़बड़' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अड़बड़' शब्द भारतीय बोलियों में प्रचलित है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'लुका-छिपी' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुका-छिपी' एक स्थानीय खेल का नाम है और इसका मूल अज्ञात है, इसलिए यह एक देशज शब्द है।"
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
        question: "'बौखलाना' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बौखलाना' क्रियापद भारतीय स्थानीय भाषाओं से उत्पन्न हुआ है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'गदगद' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गदगद' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'पड़ोस' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पड़ोस' शब्द की उत्पत्ति भारतीय बोलियों से हुई है और इसका कोई ज्ञात संस्कृत मूल नहीं है।"
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
        question: "'सोनार' शब्द किस प्रकार का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: true },
            { text: "देशज", correct: false },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोनार' शब्द 'स्वर्णकार' का तद्भव रूप है।"
    },
    {
        question: "'चूचू' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चूचू' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'ढूँढ़ना' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ढूँढ़ना' क्रियापद स्थानीय बोलियों से उत्पन्न हुआ है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'पिल्ला' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पिल्ला' शब्द की उत्पत्ति भारतीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'झंझट' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झंझट' शब्द की उत्पत्ति का कोई ज्ञात स्रोत नहीं है और यह भारतीय बोलियों में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'ठग' शब्द का प्रकार बताएं।",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ठग' शब्द की उत्पत्ति भारतीय स्थानीय भाषाओं से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'दाल' शब्द किस प्रकार का है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दाल' शब्द का मूल अज्ञात है और यह भारतीय बोलियों में प्रचलित है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'गप-शप' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गप-शप' एक अनुकरणात्मक शब्द है जो ध्वनि को दर्शाता है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'चटपट' किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चटपट' एक अनुकरणात्मक शब्द है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'चहचहाना' शब्द का संबंध किस प्रकार के शब्द से है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चहचहाना' क्रियापद ध्वनि अनुकरणात्मक है और इसका कोई ज्ञात संस्कृत मूल नहीं है, अतः यह एक देशज शब्द है।"
    },
    {
        question: "'घूँसा' किस प्रकार का शब्द है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "संकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घूँसा' शब्द की उत्पत्ति स्थानीय बोलियों से हुई है, इसलिए यह एक देशज शब्द है।"
    },
    {
        question: "'पगड़ा' शब्द किस श्रेणी में आता है?",
        answers: shuffle([
            { text: "तत्सम", correct: false },
            { text: "तद्भव", correct: false },
            { text: "देशज", correct: true },
            { text: "विदेशज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पगड़ा' शब्द भारतीय बोलियों में प्रचलित है, इसलिए यह एक देशज शब्द है।"
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