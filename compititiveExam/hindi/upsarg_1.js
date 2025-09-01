const questions = [
    {
        topHeading: "उपसर्ग  पर आधारित 50 बहुविकल्पीय प्रश्न part 1 (quiz_no.21)"
    },
    {
        question: "किस शब्द में 'निर्' उपसर्ग का प्रयोग हुआ है?",
        answers: shuffle([
            { text: "निरोग", correct: false },
            { text: "निडर", correct: false },
            { text: "निर्बल", correct: true },
            { text: "निरीह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्बल' शब्द में 'निर्' (बिना) उपसर्ग है, जिसका अर्थ 'बिना बल के' होता है।"
    },
    {
        question: "'दुर्भाग्य' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुर्", correct: true },
            { text: "दुस्", correct: false },
            { text: "दुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुर्भाग्य' में 'दुर्' उपसर्ग है, जिसका अर्थ 'बुरा' या 'कठिन' होता है।"
    },
    {
        question: "'सम्मान' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सन्", correct: false },
            { text: "सम", correct: false },
            { text: "सम्", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सम्मान' में 'सम्' उपसर्ग है, जिसका अर्थ 'सहित' या 'अच्छा' होता है।"
    },
    {
        question: "'पराक्रम' शब्द में उपसर्ग और मूल शब्द क्या हैं?",
        answers: shuffle([
            { text: "परा + क्रम", correct: true },
            { text: "पर + आक्रम", correct: false },
            { text: "परा + कर्म", correct: false },
            { text: "पर + क्रम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराक्रम' में 'परा' (उल्टा/विपरीत) उपसर्ग और 'क्रम' मूल शब्द है।"
    },
    {
        question: "'प्रगति' शब्द में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प्र", correct: true },
            { text: "परा", correct: false },
            { text: "प्रति", correct: false },
            { text: "प्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रगति' में 'प्र' (आगे) उपसर्ग है।"
    },
    {
        question: "किस शब्द में 'आ' उपसर्ग का प्रयोग नहीं हुआ है?",
        answers: shuffle([
            { text: "आजीवन", correct: false },
            { text: "आगमन", correct: false },
            { text: "आधुनिक", correct: true },
            { text: "आरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आधुनिक' मूल शब्द है, इसमें कोई उपसर्ग नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी में 'आ' उपसर्ग है।"
    },
    {
        question: "'विजय' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "वि", correct: true },
            { text: "विज", correct: false },
            { text: "विज्", correct: false },
            { text: "वि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विजय' में 'वि' (विशेष) उपसर्ग है, जिसका अर्थ 'विशेष जय' होता है।"
    },
    {
        question: "'दुस्साहस' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दुस्", correct: true },
            { text: "दुर्", correct: false },
            { text: "दुस", correct: false },
            { text: "दु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुस्साहस' में 'दुस्' (बुरा) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब 'दुस्' के बाद 'स्' या 'श' आता है, तो 'स्' का 'स्' या 'श' हो जाता है।"
    },
    {
        question: "'अपमान' में उपसर्ग और मूल शब्द क्या हैं?",
        answers: shuffle([
            { text: "अप + मान", correct: true },
            { text: "अपा + मान", correct: false },
            { text: "अप + मन", correct: false },
            { text: "अप + अमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपमान' में 'अप' (बुरा) उपसर्ग और 'मान' मूल शब्द है।"
    },
    {
        question: "'निरपराध' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: false },
            { text: "निर्", correct: true },
            { text: "निर", correct: false },
            { text: "निरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निरपराध' में 'निर्' उपसर्ग है, जिसका विग्रह 'निर् + अपराध' होता है।"
    },
    {
        question: "'दुराचार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दुरा", correct: false },
            { text: "दुर्", correct: true },
            { text: "दुस्", correct: false },
            { text: "दु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुराचार' में 'दुर्' उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दुर् + आचार' से 'दुराचार' बनता है।"
    },
    {
        question: "'संकल्प' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सन्", correct: false },
            { text: "सम", correct: false },
            { text: "सम्", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संकल्प' में 'सम्' उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब 'सम्' के बाद 'क्' आता है, तो 'म्' का 'ङ्' होकर अनुस्वार में बदल जाता है।"
    },
    {
        question: "'अपमान' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अप", correct: true },
            { text: "अपा", correct: false },
            { text: "अ", correct: false },
            { text: "मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपमान' में 'अप' (बुरा) उपसर्ग है।"
    },
    {
        question: "'पराभव' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प", correct: false },
            { text: "परा", correct: true },
            { text: "पर", correct: false },
            { text: "प्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराभव' में 'परा' (उल्टा) उपसर्ग है।"
    },
    {
        question: "'अविकसित' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अवि", correct: true },
            { text: "अव", correct: false },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अविकसित' में 'अवि' उपसर्ग है, जो 'अ' और 'वि' उपसर्गों का योग है।"
    },
    {
        question: "'प्रलय' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प्र", correct: true },
            { text: "प्रा", correct: false },
            { text: "पला", correct: false },
            { text: "लय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रलय' में 'प्र' (आगे) उपसर्ग है।"
    },
    {
        question: "'निःशुल्क' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: false },
            { text: "निः", correct: true },
            { text: "निर", correct: false },
            { text: "निस्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निःशुल्क' में 'निः' (बिना) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> विसर्ग के बाद 'श्' आने पर विसर्ग 'श्' में बदल जाता है।"
    },
    {
        question: "'अविचल' शब्द में उपसर्ग और मूल शब्द क्या हैं?",
        answers: shuffle([
            { text: "अ + विच + ल", correct: false },
            { text: "अवि + चल", correct: true },
            { text: "अवि + अचल", correct: false },
            { text: "अ + विचल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अविचल' में 'अवि' उपसर्ग और 'चल' मूल शब्द है।"
    },
    {
        question: "'दुश्चिंता' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुस्", correct: true },
            { text: "दुर्", correct: false },
            { text: "दुश्च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुश्चिंता' में 'दुस्' उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दुस् + चिंता' से 'दुश्चिंता' बनता है।"
    },
    {
        question: "'प्रगति' शब्द में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प्र", correct: true },
            { text: "परा", correct: false },
            { text: "प्रति", correct: false },
            { text: "प्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रगति' में 'प्र' (आगे) उपसर्ग है।"
    },
    {
        question: "'आ' उपसर्ग का अर्थ क्या है?",
        answers: shuffle([
            { text: "सहित", correct: false },
            { text: "तक/सहित", correct: true },
            { text: "सामने", correct: false },
            { text: "बिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आ' उपसर्ग का प्रयोग 'तक', 'सहित' या 'भर' के अर्थ में होता है, जैसे 'आजीवन', 'आकंठ'।"
    },
    {
        question: "'दुर्जन' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दुर्", correct: true },
            { text: "दु", correct: false },
            { text: "दुज्", correct: false },
            { text: "दुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुर्जन' में 'दुर्' (बुरा) उपसर्ग है।"
    },
    {
        question: "'निस्सार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: false },
            { text: "निः", correct: true },
            { text: "निस", correct: false },
            { text: "निस्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निस्सार' में 'निः' (बिना) उपसर्ग है।"
    },
    {
        question: "'अविस्मरणीय' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अवि", correct: true },
            { text: "अविस्", correct: false },
            { text: "अविस्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अविस्मरणीय' में 'अवि' उपसर्ग है।"
    },
    {
        question: "'संलग्न' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "सं", correct: false },
            { text: "सम", correct: false },
            { text: "स", correct: false },
            { text: "सम्", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संलग्न' में 'सम्' (सहित) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सम् + लग्न' से 'संलग्न' बनता है।"
    },
    {
        question: "'अपहरण' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अप", correct: true },
            { text: "अपरा", correct: false },
            { text: "अपह", correct: false },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपहरण' में 'अप' (बुरा) उपसर्ग है।"
    },
    {
        question: "'पराजय' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "परा", correct: true },
            { text: "पर", correct: false },
            { text: "प्र", correct: false },
            { text: "पराज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराजय' में 'परा' (उल्टा) उपसर्ग है।"
    },
    {
        question: "'प्रबल' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प्र", correct: true },
            { text: "प", correct: false },
            { text: "प्रा", correct: false },
            { text: "पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रबल' में 'प्र' (अधिक) उपसर्ग है।"
    },
    {
        question: "'निर्दोष' में उपसर्ग और मूल शब्द क्या हैं?",
        answers: shuffle([
            { text: "नि + दोष", correct: false },
            { text: "निर् + दोष", correct: true },
            { text: "निर + दोष", correct: false },
            { text: "नि + अदोष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्दोष' में 'निर्' (बिना) उपसर्ग और 'दोष' मूल शब्द है।"
    },
    {
        question: "'दुर्लभ' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुर्", correct: true },
            { text: "दुस्", correct: false },
            { text: "दुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुर्लभ' में 'दुर्' (कठिन) उपसर्ग है।"
    },
    {
        question: "'संगम' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सं", correct: false },
            { text: "सम्", correct: true },
            { text: "स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संगम' में 'सम्' (सहित) उपसर्ग है।"
    },
    {
        question: "'अपकीर्ति' में उपसर्ग और मूल शब्द क्या हैं?",
        answers: shuffle([
            { text: "अप + कीर्ति", correct: true },
            { text: "अपा + कीर्ति", correct: false },
            { text: "अप + कृति", correct: false },
            { text: "अप + कीर्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपकीर्ति' में 'अप' (बुरा) उपसर्ग और 'कीर्ति' मूल शब्द है।"
    },
    {
        question: "'पराभूत' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "पर", correct: false },
            { text: "परा", correct: true },
            { text: "प्रा", correct: false },
            { text: "भू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराभूत' में 'परा' (उल्टा) उपसर्ग है।"
    },
    {
        question: "'प्रयत्न' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प्र", correct: true },
            { text: "प", correct: false },
            { text: "प्रा", correct: false },
            { text: "प्रयत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रयत्न' में 'प्र' (विशेष) उपसर्ग है।"
    },
    {
        question: "'निःसंदेह' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: false },
            { text: "निः", correct: true },
            { text: "निस्", correct: false },
            { text: "निस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निःसंदेह' में 'निः' (बिना) उपसर्ग है।"
    },
    {
        question: "'अविचलित' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अवि", correct: true },
            { text: "विच", correct: false },
            { text: "चलित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अविचलित' में 'अवि' उपसर्ग है।"
    },
    {
        question: "'दुर्व्यवहार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुर्", correct: true },
            { text: "दुर्व्य", correct: false },
            { text: "दुस्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुर्व्यवहार' में 'दुर्' (बुरा) उपसर्ग है।"
    },
    {
        question: "'आकार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "आ", correct: true },
            { text: "आक", correct: false },
            { text: "आका", correct: false },
            { text: "अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकार' में 'आ' (सहित) उपसर्ग है।"
    },
    {
        question: "'वि' उपसर्ग से बना शब्द है:",
        answers: shuffle([
            { text: "विकास", correct: false },
            { text: "विमुख", correct: false },
            { text: "विवाद", correct: false },
            { text: "सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिए गए सभी शब्दों में 'वि' उपसर्ग का प्रयोग हुआ है।"
    },
    {
        question: "'पराजय' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "परा", correct: true },
            { text: "प्र", correct: false },
            { text: "पराज", correct: false },
            { text: "जय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराजय' में 'परा' (उल्टा) उपसर्ग है।"
    },
    {
        question: "'निराकार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: false },
            { text: "निर", correct: true },
            { text: "निरि", correct: false },
            { text: "निस्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निराकार' में 'निर' (बिना) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'निर + आकार' से 'निराकार' बनता है।"
    },
    {
        question: "'अपशब्द' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अप", correct: true },
            { text: "अ", correct: false },
            { text: "अपश", correct: false },
            { text: "अब्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपशब्द' में 'अप' (बुरा) उपसर्ग है।"
    },
    {
        question: "'आगमन' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "आ", correct: true },
            { text: "आग", correct: false },
            { text: "अग", correct: false },
            { text: "अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आगमन' में 'आ' (सहित) उपसर्ग है।"
    },
    {
        question: "'संयोग' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सम", correct: false },
            { text: "सन्", correct: false },
            { text: "सम्", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संयोग' में 'सम्' (सहित) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सम् + योग' से 'संयोग' बनता है।"
    },
    {
        question: "'पराधीन' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "परा", correct: false },
            { text: "पर", correct: true },
            { text: "प्र", correct: false },
            { text: "पराध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पराधीन' में 'पर' (दूसरा) उपसर्ग है, जिसका अर्थ 'दूसरे के अधीन' होता है।"
    },
    {
        question: "'प्रवचन' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प्र", correct: true },
            { text: "प्रव", correct: false },
            { text: "प्रच", correct: false },
            { text: "वचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रवचन' में 'प्र' (विशेष) उपसर्ग है।"
    },
    {
        question: "'निःस्वार्थ' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "निः", correct: true },
            { text: "नि", correct: false },
            { text: "निस्", correct: false },
            { text: "निस्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निःस्वार्थ' में 'निः' (बिना) उपसर्ग है।"
    },
    {
        question: "'प्रगति' शब्द में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प्र", correct: true },
            { text: "परा", correct: false },
            { text: "प्रति", correct: false },
            { text: "प्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रगति' में 'प्र' (आगे) उपसर्ग है।"
    },
    {
        question: "'अपमान' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अप", correct: true },
            { text: "अपा", correct: false },
            { text: "अ", correct: false },
            { text: "मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अपमान' में 'अप' (बुरा) उपसर्ग है।"
    },
    {
        question: "'आदेश' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "आ", correct: true },
            { text: "आद", correct: false },
            { text: "देस", correct: false },
            { text: "दे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आदेश' में 'आ' (तक/सहित) उपसर्ग है।"
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