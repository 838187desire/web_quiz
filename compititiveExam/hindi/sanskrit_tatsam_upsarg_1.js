const questions = [
    {
        topHeading: "संस्कृत तत्सम उपसर्ग पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'अत्यधिक' शब्द में कौन-सा उपसर्ग लगा है?",
        answers: shuffle([
            { text: "अत्", correct: false },
            { text: "अधि", correct: false },
            { text: "अति", correct: true },
            { text: "अत्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अत्यधिक' शब्द 'अति' उपसर्ग और 'अधिक' मूल शब्द के योग से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ यण संधि के अनुसार 'इ + अ = य' हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अति' का अर्थ 'बहुत ज्यादा' या 'सीमा से परे' होता है।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से किस शब्द में 'अति' उपसर्ग का प्रयोग नहीं हुआ है?",
        answers: shuffle([
            { text: "अत्याचार", correct: false },
            { text: "अतिरिक्त", correct: false },
            { text: "अतिथि", correct: true },
            { text: "अत्यंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अतिथि' शब्द में 'अ' उपसर्ग है, जिसका अर्थ 'नहीं' होता है और 'तिथि' मूल शब्द है, अर्थात जिसके आने की कोई तिथि न हो।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्दों (अति + आचार, अति + रिक्त, अति + अंत) में 'अति' उपसर्ग है।"
    },
    {
        question: "प्रश्न 3. 'अतीन्द्रिय' शब्द में प्रयुक्त उपसर्ग कौन-सा है?",
        answers: shuffle([
            { text: "अत", correct: false },
            { text: "अती", correct: false },
            { text: "अति", correct: true },
            { text: "अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अतीन्द्रिय' शब्द का संधि विच्छेद 'अति + इन्द्रिय' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ दीर्घ संधि के नियम से 'इ + इ = ई' हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है 'जो इन्द्रियों से परे हो'।"
    },
    {
        question: "प्रश्न 4. 'अध्यक्ष' शब्द में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "अध्", correct: false },
            { text: "अधि", correct: true },
            { text: "अक्ष", correct: false },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्यक्ष' शब्द 'अधि' उपसर्ग और 'अक्ष' मूल शब्द से मिलकर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें यण संधि (इ + अ = य) हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अधि' का अर्थ 'प्रधान' या 'श्रेष्ठ' होता है।"
    },
    {
        question: "प्रश्न 5. 'अध्यादेश' शब्द में उपसर्ग बताइए।",
        answers: shuffle([
            { text: "अधि", correct: true },
            { text: "अध्य", correct: false },
            { text: "आ", correct: false },
            { text: "अध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्यादेश' शब्द का निर्माण 'अधि' उपसर्ग और 'आदेश' मूल शब्द से हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> (अधि + आदेश = अध्यादेश)।"
    },
    {
        question: "प्रश्न 6. 'स्वदेश' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "सु", correct: false },
            { text: "स्व", correct: true },
            { text: "स", correct: false },
            { text: "देश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वदेश' शब्द 'स्व' (अपना) उपसर्ग और 'देश' मूल शब्द से बना है।"
    },
    {
        question: "प्रश्न 7. 'अनुचर' शब्द में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अन्", correct: false },
            { text: "अनु", correct: true },
            { text: "चर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुचर' शब्द 'अनु' उपसर्ग और 'चर' (चलने वाला) मूल शब्द के योग से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अनु' का अर्थ 'पीछे' या 'समान' होता है, अतः 'अनुचर' का अर्थ है 'पीछे चलने वाला' या 'सेवक'।"
    },
    {
        question: "प्रश्न 8. 'अन्वेषण' शब्द का उपसर्ग क्या है?",
        answers: shuffle([
            { text: "अन्", correct: false },
            { text: "अ", correct: false },
            { text: "अनु", correct: true },
            { text: "अनवे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अन्वेषण' शब्द का संधि विच्छेद 'अनु + एषण' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें यण संधि है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अनु' उपसर्ग का अर्थ यहाँ 'पीछे' या 'बाद में' है।"
    },
    {
        question: "प्रश्न 9. किस शब्द में 'अनु' उपसर्ग का प्रयोग नहीं हुआ है?",
        answers: shuffle([
            { text: "अनुवाद", correct: false },
            { text: "अनुर्वर", correct: true },
            { text: "अनुशासन", correct: false },
            { text: "अनुराग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुर्वर' शब्द 'अन्' उपसर्ग और 'उर्वर' मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अन्' का अर्थ 'नहीं' है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेष सभी शब्दों में 'अनु' उपसर्ग है।"
    },
    {
        question: "प्रश्न 10. 'अपमान' शब्द में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अप", correct: true },
            { text: "मान", correct: false },
            { text: "अप्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपमान' शब्द 'अप' उपसर्ग और 'मान' मूल शब्द से मिलकर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अप' उपसर्ग का अर्थ 'बुरा', 'हीन' या 'विरुद्ध' होता है।"
    },
    {
        question: "प्रश्न 11. 'अपहरण' में कौन-सा उपसर्ग प्रयुक्त हुआ है?",
        answers: shuffle([
            { text: "अप", correct: true },
            { text: "आ", correct: false },
            { text: "हरण", correct: false },
            { text: "अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपहरण' शब्द में 'अप' उपसर्ग और 'हरण' मूल शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अप' का अर्थ 'बुरा' या 'विरुद्ध' है।"
    },
    {
        question: "प्रश्न 12. निम्नलिखित में से 'अप' उपसर्ग युक्त शब्द कौन-सा नहीं है?",
        answers: shuffle([
            { text: "अपयश", correct: false },
            { text: "अपशब्द", correct: false },
            { text: "अपकीर्ति", correct: false },
            { text: "अपरोक्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपरोक्ष' शब्द 'अ' + 'परोक्ष' से बना है, जिसका अर्थ है 'जो परोक्ष न हो'।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्दों में 'अप' उपसर्ग लगा है।"
    },
    {
        question: "प्रश्न 13. 'अभ्यागत' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "अभि", correct: true },
            { text: "अभ्य", correct: false },
            { text: "अ", correct: false },
            { text: "आगत्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभ्यागत' शब्द 'अभि' उपसर्ग और 'आगत' मूल शब्द के मेल से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> (अभि + आगत = अभ्यागत)।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अभि' का अर्थ 'सामने' या 'पास' होता है।"
    },
    {
        question: "प्रश्न 14. 'अभिमान' शब्द में मूल शब्द और उपसर्ग को अलग कीजिए।",
        answers: shuffle([
            { text: "अभि + मान", correct: true },
            { text: "अभ + ईमान", correct: false },
            { text: "अ + भिमान", correct: false },
            { text: "अभी + मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिमान' शब्द में 'अभि' उपसर्ग है और 'मान' मूल शब्द है।"
    },
    {
        question: "प्रश्न 15. 'अभि' उपसर्ग किस अर्थ में प्रयुक्त होता है?",
        answers: shuffle([
            { text: "सामने, पास, ओर", correct: true },
            { text: "पीछे, समान", correct: false },
            { text: "बुरा, हीन", correct: false },
            { text: "नीचे, अनादर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभि' उपसर्ग का प्रयोग सामने, पास, ओर, इच्छा प्रकट करना आदि अर्थों में होता है, जैसे - अभिमुख, अभिलाषा, अभिनय।"
    },
    {
        question: "प्रश्न 16. 'अवमूल्यन' शब्द में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अव", correct: true },
            { text: "अमू", correct: false },
            { text: "अवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवमूल्यन' शब्द 'अव' उपसर्ग और 'मूल्यन' शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अव' का अर्थ 'हीनता', 'गिरावट' या 'नीचे' होता है।"
    },
    {
        question: "प्रश्न 17. 'अवज्ञा' शब्द में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "अव", correct: true },
            { text: "अ", correct: false },
            { text: "ज्ञा", correct: false },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवज्ञा' शब्द 'अव' उपसर्ग और 'ज्ञा' (जानना) धातु से बने शब्द के साथ जुड़कर बना है, जिसका अर्थ है 'आज्ञा न मानना' या 'तिरस्कार'।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से किस शब्द में 'अव' उपसर्ग नहीं है?",
        answers: shuffle([
            { text: "अवसर", correct: false },
            { text: "अवनति", correct: false },
            { text: "अवशेष", correct: false },
            { text: "अवध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवध' एक स्थान का नाम है, यह एक रूढ़ शब्द है, इसमें कोई उपसर्ग नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्दों में 'अव' उपसर्ग का प्रयोग हुआ है।"
    },
    {
        question: "प्रश्न 19. 'आजीवन' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "आ", correct: true },
            { text: "आज", correct: false },
            { text: "अ", correct: false },
            { text: "जीवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आजीवन' शब्द 'आ' उपसर्ग और 'जीवन' मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'आ' उपसर्ग 'तक', 'से', 'पर्यंत' या 'समेत' अर्थ देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ इसका अर्थ 'जीवन भर' है।"
    },
    {
        question: "प्रश्न 20. 'आकर्षण' शब्द में कौन-सा उपसर्ग लगा है?",
        answers: shuffle([
            { text: "अक", correct: false },
            { text: "आ", correct: true },
            { text: "अ", correct: false },
            { text: "कर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकर्षण' शब्द में 'आ' उपसर्ग और 'कर्षण' मूल शब्द है।"
    },
    {
        question: "प्रश्न 21. 'आ' उपसर्ग से बना शब्द निम्न में से कौन-सा नहीं है?",
        answers: shuffle([
            { text: "आमरण", correct: false },
            { text: "आक्रमण", correct: false },
            { text: "आजानु", correct: false },
            { text: "आस्तिक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आस्तिक' शब्द में 'अस्ति' (है) और 'क' प्रत्यय का योग है, इसमें 'आ' उपसर्ग नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेष सभी शब्दों में 'आ' उपसर्ग है।"
    },
    {
        question: "प्रश्न 22. 'उन्नति' शब्द में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "उत्", correct: true },
            { text: "उद्", correct: false },
            { text: "उन", correct: false },
            { text: "उ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उन्नति' का संधि विच्छेद 'उत् + नति' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> व्यंजन संधि के नियमानुसार 'त्' के बाद 'न' आने पर 'त्' भी 'न्' में बदल जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'उत्' उपसर्ग का अर्थ 'ऊपर' या 'श्रेष्ठ' होता है।"
    },
    {
        question: "प्रश्न 23. 'उद्गम' शब्द में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "उद्", correct: true },
            { text: "उत्", correct: false },
            { text: "उ", correct: false },
            { text: "उद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उद्गम' शब्द 'उद्' उपसर्ग और 'गम' (जाना) मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'उद्' का अर्थ 'ऊपर' या 'उत्पत्ति' है।"
    },
    {
        question: "प्रश्न 24. 'उत्कर्ष' शब्द में उपसर्ग बताइए।",
        answers: shuffle([
            { text: "उद्", correct: false },
            { text: "उ", correct: false },
            { text: "उत्", correct: true },
            { text: "उतक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्कर्ष' शब्द 'उत्' उपसर्ग और 'कर्ष' मूल शब्द से मिलकर बना है।"
    },
    {
        question: "प्रश्न 25. 'उपाध्यक्ष' में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "उप", correct: true },
            { text: "उपा", correct: false },
            { text: "आ", correct: false },
            { text: "अक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपाध्यक्ष' शब्द 'उप' उपसर्ग और 'अध्यक्ष' शब्द के योग से बना है (उप + अध्यक्ष)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें दीर्घ संधि हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'उप' का अर्थ 'सहायक' या 'गौण' होता है।"
    },
    {
        question: "प्रश्न 26. 'उपकार' शब्द में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "उ", correct: false },
            { text: "उप", correct: true },
            { text: "अप", correct: false },
            { text: "कार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपकार' शब्द में 'उप' उपसर्ग और 'कार' मूल शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'उप' का अर्थ 'भलाई' या 'सहायता' है।"
    },
    {
        question: "प्रश्न 27. निम्नलिखित में से 'उप' उपसर्ग युक्त शब्द कौन-सा है?",
        answers: shuffle([
            { text: "ऊपर", correct: false },
            { text: "उपाधि", correct: true },
            { text: "उपला", correct: false },
            { text: "उड़ान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपाधि' शब्द 'उप' उपसर्ग और 'आधि' शब्द से मिलकर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य विकल्पों में 'उप' उपसर्ग नहीं है।"
    },
    {
        question: "प्रश्न 28. 'दुर्जन' शब्द में कौन-सा उपसर्ग लगा है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दूर", correct: false },
            { text: "दुर्", correct: true },
            { text: "जन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुर्जन' शब्द 'दुर्' उपसर्ग और 'जन' मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दुर्' का अर्थ 'बुरा' या 'कठिन' होता है।"
    },
    {
        question: "प्रश्न 29. 'अंतरात्मा' में प्रयुक्त उपसर्ग कौन-सा है?",
        answers: shuffle([
            { text: "अंतः", correct: false },
            { text: "अंतर", correct: false },
            { text: "अंतर्", correct: true },
            { text: "अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतरात्मा' शब्द 'अंतर्' (भीतर) उपसर्ग और 'आत्मा' शब्द से बना है।"
    },
    {
        question: "प्रश्न 30. किस शब्द में 'दुर्' उपसर्ग नहीं है?",
        answers: shuffle([
            { text: "दुर्दशा", correct: false },
            { text: "दुर्लभ", correct: false },
            { text: "दुर्गम", correct: false },
            { text: "दुलारा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुलारा' शब्द में 'दु' (बुरा) उपसर्ग नहीं है, यह 'दुलार' से बना तद्भव शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> शेष सभी में 'दुर्' उपसर्ग है।"
    },
    {
        question: "प्रश्न 31. 'निर्भय' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "नि", correct: false },
            { text: "निर", correct: false },
            { text: "निर्", correct: true },
            { text: "भय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्भय' शब्द 'निर्' उपसर्ग और 'भय' मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'निर्' का अर्थ 'बिना' या 'रहित' होता है, अतः निर्भय का अर्थ है 'भय रहित'।"
    },
    {
        question: "प्रश्न 32. 'निष्काम' में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: false },
            { text: "निष", correct: false },
            { text: "निस्", correct: true },
            { text: "काम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निष्काम' शब्द का निर्माण 'निस्' उपसर्ग और 'काम' मूल शब्द से हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> संधि के नियमानुसार 'स्' के बाद 'क्' आने पर 'स्', 'ष्' में बदल जाता है।"
    },
    {
        question: "प्रश्न 33. निम्नलिखित में से 'निर्' उपसर्ग से बना शब्द कौन-सा नहीं है?",
        answers: shuffle([
            { text: "निरपराध", correct: false },
            { text: "निराकार", correct: false },
            { text: "निहत्था", correct: true },
            { text: "निर्दोष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निहत्था' एक तद्भव शब्द है जिसमें 'नि' (बिना) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि शेष शब्द 'निर्' (निर् + अपराध, निर् + आकार, निर् + दोष) उपसर्ग से बने हैं।"
    },
    {
        question: "प्रश्न 34. 'नियोग' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "न", correct: false },
            { text: "नि", correct: true },
            { text: "निर्", correct: false },
            { text: "योंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नियोग' शब्द 'नि' उपसर्ग और 'योग' मूल शब्द के योग से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'नि' उपसर्ग का अर्थ 'विशेष', 'भीतर' या 'अतिरिक्त' होता है।"
    },
    {
        question: "प्रश्न 35. 'बहिष्कार' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "बहि", correct: false },
            { text: "बहिर", correct: false },
            { text: "बहिस्", correct: true },
            { text: "कार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहिष्कार' शब्द 'बहिस्' उपसर्ग और 'कार' मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> संधि के नियमानुसार 'स्', 'ष्' में बदल गया है।"
    },
    {
        question: "प्रश्न 36. 'पराजय' में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "पर", correct: false },
            { text: "प", correct: false },
            { text: "परा", correct: true },
            { text: "जय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराजय' शब्द 'परा' उपसर्ग और 'जय' मूल शब्द से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'परा' का अर्थ 'उल्टा' या 'विपरीत' होता है।"
    },
    {
        question: "प्रश्न 37. 'पराक्रम' शब्द में उपसर्ग और मूल शब्द का सही विकल्प है-",
        answers: shuffle([
            { text: "परा + क्रम", correct: true },
            { text: "पर + आक्रम", correct: false },
            { text: "प + राक्रम", correct: false },
            { text: "पराक्र + म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराक्रम' शब्द में 'परा' उपसर्ग और 'क्रम' मूल शब्द है।"
    },
    {
        question: "प्रश्न 38. 'परामर्श' में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "प", correct: false },
            { text: "पर", correct: false },
            { text: "परा", correct: true },
            { text: "मर्श", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परामर्श' शब्द 'परा' उपसर्ग और 'मर्श' मूल शब्द से मिलकर बना है।"
    },
    {
        question: "प्रश्न 39. 'पर्यावरण' शब्द में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "परि", correct: true },
            { text: "पर", correct: false },
            { text: "पयार्", correct: false },
            { text: "आवरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पर्यावरण' शब्द 'परि' उपसर्ग और 'आवरण' मूल शब्द से मिलकर बना है (परि + आवरण)।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ यण संधि हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'परि' का अर्थ 'चारों ओर' होता है।"
    },
    {
        question: "प्रश्न 40. 'परिजन' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "प", correct: false },
            { text: "पर", correct: false },
            { text: "परि", correct: true },
            { text: "जन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिजन' शब्द में 'परि' उपसर्ग और 'जन' मूल शब्द है।"
    },
    {
        question: "प्रश्न 41. 'प्रत्यक्ष' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "प्र", correct: false },
            { text: "प्रति", correct: true },
            { text: "प्रत", correct: false },
            { text: "अक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रत्यक्ष' शब्द 'प्रति' उपसर्ग और 'अक्षि' (आँख) शब्द से बना है (प्रति + अक्षि)।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है 'आँखों के सामने'।"
    },
    {
        question: "प्रश्न 42. 'प्रतिकूल' में कौन-सा उपसर्ग प्रयुक्त हुआ है?",
        answers: shuffle([
            { text: "प्र", correct: false },
            { text: "परि", correct: false },
            { text: "प्रति", correct: true },
            { text: "कुल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिकूल' शब्द में 'प्रति' उपसर्ग और 'कूल' (किनारा, पक्ष) मूल शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'प्रति' का अर्थ 'विरुद्ध' या 'उल्टा' होता है।"
    },
    {
        question: "प्रश्न 43. 'प्र' उपसर्ग का अर्थ है-",
        answers: shuffle([
            { text: "अधिक, आगे", correct: true },
            { text: "पीछे, समान", correct: false },
            { text: "चारों ओर", correct: false },
            { text: "बुरा, हीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्र' उपसर्ग का प्रयोग 'अधिक, आगे, यश' आदि अर्थों में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे - प्रबल, प्रगति, प्रताप।"
    },
    {
        question: "प्रश्न 44. 'प्रख्यात' में प्रयुक्त उपसर्ग है-",
        answers: shuffle([
            { text: "प्र", correct: true },
            { text: "प्रख", correct: false },
            { text: "यात", correct: false },
            { text: "प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रख्यात' शब्द 'प्र' उपसर्ग और 'ख्यात' (प्रसिद्ध) मूल शब्द से बना है।"
    },
    {
        question: "प्रश्न 45. 'विज्ञान' शब्द में कौन-सा उपसर्ग है?",
        answers: shuffle([
            { text: "वि", correct: true },
            { text: "विज्ञ", correct: false },
            { text: "विज्ञा", correct: false },
            { text: "अन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विज्ञान' शब्द 'वि' उपसर्ग और 'ज्ञान' मूल शब्द के मेल से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'वि' का अर्थ 'विशेष' है।"
    },
    {
        question: "प्रश्न 46. 'विदेश' शब्द में उपसर्ग बताइए।",
        answers: shuffle([
            { text: "व", correct: false },
            { text: "वि", correct: true },
            { text: "देश", correct: false },
            { text: "विद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विदेश' शब्द में 'वि' उपसर्ग और 'देश' मूल शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'वि' का अर्थ 'दूसरा' या 'भिन्न' है।"
    },
    {
        question: "प्रश्न 47. 'सहपाठी' में कौन-सा उपसर्ग प्रयुक्त हुआ है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सह", correct: true },
            { text: "सु", correct: false },
            { text: "सहपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सहपाठी' शब्द में 'सह' (साथ) उपसर्ग और 'पाठी' (पढ़ने वाला) शब्द है।"
    },
    {
        question: "प्रश्न 48. 'संगम' शब्द में किस उपसर्ग का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "सन्", correct: false },
            { text: "सम्", correct: true },
            { text: "स", correct: false },
            { text: "गम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संगम' शब्द 'सम्' उपसर्ग और 'गम' मूल शब्द से बना है (सम् + गम)।<br><br><i class='fa-solid fa-angles-right icon'></i> व्यंजन संधि के नियम से 'म्' अनुस्वार में बदल गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सम्' का अर्थ 'अच्छी तरह' या 'साथ' होता है।"
    },
    {
        question: "प्रश्न 49. 'संस्कार' शब्द में उपसर्ग है-",
        answers: shuffle([
            { text: "सम्", correct: true },
            { text: "सन्", correct: false },
            { text: "सु", correct: false },
            { text: "सार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संस्कार' शब्द 'सम्' उपसर्ग और 'कार' मूल शब्द से बना है।"
    },
    {
        question: "प्रश्न 50. 'संतोष' का उपसर्ग क्या है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सन्", correct: false },
            { text: "सम्", correct: true },
            { text: "तोष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संतोष' का संधि विच्छेद 'सम् + तोष' होता है।"
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