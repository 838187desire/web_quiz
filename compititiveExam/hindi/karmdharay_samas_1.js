const questions = [
    {
        topHeading: "कर्मधारय समास पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.15)"
    },
    {
        question: "'नीलकमल' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीलकमल' का विग्रह 'नीला है जो कमल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'नील' विशेषण है और 'कमल' विशेष्य, जो कर्मधारय समास की पहचान है।"
    },
    {
        question: "'महापुरुष' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "महान है जो पुरुष", correct: true },
            { text: "पुरुष है जो महान", correct: false },
            { text: "महा और पुरुष", correct: false },
            { text: "महान और पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महापुरुष' कर्मधारय समास का उदाहरण है, जहाँ 'महान' (विशेषण) 'पुरुष' (विशेष्य) की विशेषता बता रहा है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द कर्मधारय समास का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "कालीमिर्च", correct: false },
            { text: "सज्जन", correct: false },
            { text: "चतुर्भुज", correct: true },
            { text: "चंद्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चतुर्भुज' का अर्थ है 'चार भुजाओं वाला', जो विष्णु को इंगित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बहुव्रीहि समास का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द कर्मधारय समास के उदाहरण हैं।"
    },
    {
        question: "'पीतांबर' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पीतांबर' का विग्रह 'पीत (पीला) है जो अंबर (वस्त्र)' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पीत' विशेषण है और 'अंबर' विशेष्य, जो कर्मधारय समास है।<br><br><i class='fa-solid fa-angles-right icon'></i> (यदि यह विष्णु या कृष्ण के अर्थ में प्रयुक्त हो, तो बहुव्रीहि होता है, लेकिन सामान्य अर्थ में कर्मधारय है)।"
    },
    {
        question: "'कमलनयन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्विगु", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमलनयन' का विग्रह 'कमल के समान नयन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'कमल' उपमान है और 'नयन' उपमेय।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उपमान-उपमेय कर्मधारय का उदाहरण है।"
    },
    {
        question: "किस विकल्प में कर्मधारय समास का सही उदाहरण है?",
        answers: shuffle([
            { text: "दशानन (दश हैं आनन जिसके)", correct: false },
            { text: "नवग्रह (नौ ग्रहों का समूह)", correct: false },
            { text: "घनश्याम (घन के समान श्याम)", correct: true },
            { text: "रामायण (राम का अयन)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घनश्याम' में 'घन' (बादल) उपमान है और 'श्याम' (साँवला रंग) उपमेय।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कर्मधारय समास का सही उदाहरण है।"
    },
    {
        question: "'देहलता' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "देह रूपी लता", correct: true },
            { text: "देह और लता", correct: false },
            { text: "लता और देह", correct: false },
            { text: "देह के लिए लता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देहलता' में 'देह' उपमेय है और 'लता' उपमान।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कर्मधारय समास का उदाहरण है, जहाँ उपमेय को उपमान का रूप दिया गया है।"
    },
    {
        question: "'रक्तपुष्प' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रक्तपुष्प' का विग्रह 'रक्त (लाल) है जो पुष्प' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'रक्त' विशेषण और 'पुष्प' विशेष्य है।"
    },
    {
        question: "'सदैव' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सदैव' शब्द 'सदा + एव' की संधि से बना है और यह संधि का उदाहरण है, न कि समास का।"
    },
    {
        question: "'महादेव' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महादेव' का विग्रह 'महान है जो देव' होता है, जो कर्मधारय समास की पहचान है।<br><br><i class='fa-solid fa-angles-right icon'></i> (बहुव्रीहि तब होता है जब यह शिव के लिए प्रयुक्त हो)।"
    },
    {
        question: "'नीलगाय' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "नीली है जो गाय", correct: true },
            { text: "नील और गाय", correct: false },
            { text: "नीले रंग की गाय", correct: false },
            { text: "नील गाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीलगाय' में 'नीली' विशेषण और 'गाय' विशेष्य है, जो कर्मधारय समास का उदाहरण है।"
    },
    {
        question: "'परमानंद' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परमानंद' का विग्रह 'परम है जो आनंद' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'परम' विशेषण और 'आनंद' विशेष्य है।"
    },
    {
        question: "'चरणकमल' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चरणकमल' का विग्रह 'कमल के समान चरण' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'कमल' उपमान और 'चरण' उपमेय है।"
    },
    {
        question: "'कनकलता' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "कनक और लता", correct: false },
            { text: "कनक के समान लता", correct: true },
            { text: "कनक रूपी लता", correct: false },
            { text: "लता के लिए कनक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कनकलता' में 'कनक' उपमान और 'लता' उपमेय है, जो कर्मधारय समास का उदाहरण है।"
    },
    {
        question: "'सज्जन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सज्जन' का विग्रह 'सत् (अच्छा) है जो जन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'सत्' विशेषण और 'जन' विशेष्य है।"
    },
    {
        question: "किस शब्द में कर्मधारय समास है?",
        answers: shuffle([
            { text: "यथाशक्ति", correct: false },
            { text: "राजकुमार", correct: false },
            { text: "गृह प्रवेश", correct: false },
            { text: "महाजन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाजन' का विग्रह 'महान है जो जन' होता है, जो कर्मधारय समास का उदाहरण है।"
    },
    {
        question: "'चंद्रमुख' का सही समास विग्रह है:",
        answers: shuffle([
            { text: "चंद्रमा के समान मुख", correct: true },
            { text: "चंद्रमा और मुख", correct: false },
            { text: "चंद्रमा का मुख", correct: false },
            { text: "मुख और चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चंद्रमुख' में 'चंद्रमा' उपमान और 'मुख' उपमेय है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कर्मधारय समास है।"
    },
    {
        question: "'नीलगाय' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीलगाय' का विग्रह 'नीली है जो गाय' होता है, जहाँ विशेषण-विशेष्य का संबंध है।"
    },
    {
        question: "'परमेश्वर' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परमेश्वर' का विग्रह 'परम है जो ईश्वर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'परम' विशेषण है और 'ईश्वर' विशेष्य।"
    },
    {
        question: "'लौहपुरुष' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "लोहे का बना पुरुष", correct: false },
            { text: "लोहे के समान पुरुष", correct: true },
            { text: "लोहे और पुरुष", correct: false },
            { text: "लोहे जैसा पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लौहपुरुष' का विग्रह 'लौह (लोहे) के समान पुरुष' होता है, जो उपमान-उपमेय कर्मधारय का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> (यदि यह सरदार पटेल के लिए प्रयुक्त हो, तो बहुव्रीहि होता है)।"
    },
    {
        question: "'कनकलता' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कनकलता' का विग्रह 'कनक के समान लता' होता है।"
    },
    {
        question: "'महादेव' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "महान है जो देव", correct: true },
            { text: "देवों में महान", correct: false },
            { text: "महान और देव", correct: false },
            { text: "महान के देव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महादेव' में 'महान' विशेषण और 'देव' विशेष्य है, जो कर्मधारय समास की पहचान है।"
    },
    {
        question: "'पुरुषसिंह' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पुरुषसिंह' का विग्रह 'पुरुष रूपी सिंह' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'सिंह' (उपमान) को 'पुरुष' (उपमेय) का रूप दिया गया है।"
    },
    {
        question: "'नीलकंठ' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: true },
            { text: "बहुव्रीहि", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीलकंठ' का विग्रह 'नीला है जो कंठ' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> (यह बहुव्रीहि भी हो सकता है, जब यह शिव के लिए प्रयुक्त हो)।"
    },
    {
        question: "'नीलांबर' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "नीला है जो अंबर (वस्त्र)", correct: true },
            { text: "नीला और अंबर", correct: false },
            { text: "अंबर और नीला", correct: false },
            { text: "नीले रंग का अंबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नीलांबर' में 'नीला' विशेषण और 'अंबर' विशेष्य है।"
    },
    {
        question: "'कालीमिर्च' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कालीमिर्च' का विग्रह 'काली है जो मिर्च' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'काली' विशेषण और 'मिर्च' विशेष्य है।"
    },
    {
        question: "'गुरुदेव' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गुरुदेव' का विग्रह 'गुरु रूपी देव' होता है, जो कर्मधारय समास का उदाहरण है।"
    },
    {
        question: "'मुखचंद्र' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "मुख के समान चंद्र", correct: false },
            { text: "मुख और चंद्र", correct: false },
            { text: "मुख रूपी चंद्र", correct: true },
            { text: "मुख का चंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुखचंद्र' में 'मुख' (उपमेय) को 'चंद्र' (उपमान) का रूप दिया गया है, जो कर्मधारय समास का उदाहरण है।"
    },
    {
        question: "'नीलकंठ' का विग्रह 'नीला है कंठ जिसका' हो तो कौन सा समास होगा?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब विग्रह किसी तीसरे अर्थ (शिव) की ओर संकेत करता है, तो वह बहुव्रीहि समास होता है।"
    },
    {
        question: "'मृगनयन' में कौन सा समास है?",
        answers: shuffle([
            { text: "द्वंद्व", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: true },
            { text: "अव्ययीभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृगनयन' का विग्रह 'मृग के समान नयन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'मृग' उपमान और 'नयन' उपमेय है, जो कर्मधारय समास का उदाहरण है।"
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