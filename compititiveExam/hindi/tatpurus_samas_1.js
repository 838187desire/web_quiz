const questions = [
    {
        topHeading: "तत्पुरुष समास पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.19)"
    },
    {
        question: "'यशप्राप्त' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संप्रदान तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यशप्राप्त' का विग्रह 'यश को प्राप्त' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' विभक्ति चिह्न का लोप हुआ है, जो कर्म कारक का चिह्न है, इसलिए यह कर्म तत्पुरुष समास है।"
    },
    {
        question: "'मनचाहा' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "मन को चाहा", correct: false },
            { text: "मन से चाहा", correct: true },
            { text: "मन के लिए चाहा", correct: false },
            { text: "मन में चाहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मनचाहा' का विग्रह 'मन से चाहा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' विभक्ति चिह्न का लोप हुआ है, जो करण कारक का चिह्न है, इसलिए यह करण तत्पुरुष समास है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द संप्रदान तत्पुरुष का उदाहरण है?",
        answers: shuffle([
            { text: "रसोईघर", correct: true },
            { text: "रोगमुक्त", correct: false },
            { text: "गुणहीन", correct: false },
            { text: "गंगाजल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रसोईघर' का विग्रह 'रसोई के लिए घर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'के लिए' विभक्ति का लोप हुआ है, जो संप्रदान कारक का चिह्न है।"
    },
    {
        question: "'रोगमुक्त' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संप्रदान तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोगमुक्त' का विग्रह 'रोग से मुक्त' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' विभक्ति (अलग होने के अर्थ में) का लोप हुआ है, जो अपादान कारक का चिह्न है।"
    },
    {
        question: "'राजपुत्र' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: true },
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजपुत्र' का विग्रह 'राजा का पुत्र' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'का' विभक्ति का लोप हुआ है, जो संबंध कारक का चिह्न है।"
    },
    {
        question: "किस विकल्प में अधिकरण तत्पुरुष समास का सही उदाहरण है?",
        answers: shuffle([
            { text: "गृहप्रवेश", correct: false },
            { text: "दानवीर", correct: false },
            { text: "वनवास", correct: false },
            { text: "'अ' और 'स' दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गृहप्रवेश' का विग्रह 'गृह में प्रवेश' और 'वनवास' का विग्रह 'वन में वास' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों में 'में' विभक्ति का लोप है, जो अधिकरण कारक का चिह्न है।"
    },
    {
        question: "'शोकाकुल' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "शोक को आकुल", correct: false },
            { text: "शोक से आकुल", correct: true },
            { text: "शोक के लिए आकुल", correct: false },
            { text: "शोक में आकुल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शोकाकुल' का विग्रह 'शोक से आकुल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' (के द्वारा) करण कारक का चिह्न है, इसलिए यह करण तत्पुरुष है।"
    },
    {
        question: "'राजकुमारी' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: true },
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "संप्रदान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजकुमारी' का विग्रह 'राजा की कुमारी' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'की' विभक्ति का लोप हुआ है, जो संबंध कारक का चिह्न है।"
    },
    {
        question: "'चिड़ीमार' का सही समास विग्रह है:",
        answers: shuffle([
            { text: "चिड़ी को मारने वाला", correct: true },
            { text: "चिड़ी से मारने वाला", correct: false },
            { text: "चिड़ी में मारने वाला", correct: false },
            { text: "चिड़ी के लिए मारने वाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिड़ीमार' का विग्रह 'चिड़ी को मारने वाला' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' विभक्ति का लोप हुआ है, जो कर्म कारक का चिह्न है।"
    },
    {
        question: "'पथभ्रष्ट' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पथभ्रष्ट' का विग्रह 'पथ से भ्रष्ट' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' (अलग होने के अर्थ में) विभक्ति का लोप है।"
    },
    {
        question: "'रोगग्रस्त' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: true },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रोगग्रस्त' का विग्रह 'रोग से ग्रस्त' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' (के द्वारा) करण कारक का चिह्न है।"
    },
    {
        question: "'गंगाजल' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संप्रदान तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गंगाजल' का विग्रह 'गंगा का जल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'का' विभक्ति का लोप है, जो संबंध कारक का चिह्न है।"
    },
    {
        question: "'देशभक्ति' का सही समास विग्रह है:",
        answers: shuffle([
            { text: "देश को भक्ति", correct: false },
            { text: "देश से भक्ति", correct: false },
            { text: "देश के लिए भक्ति", correct: true },
            { text: "देश में भक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'देशभक्ति' का विग्रह 'देश के लिए भक्ति' होता है, जो संप्रदान तत्पुरुष का उदाहरण है।"
    },
    {
        question: "'ग्रामगत' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संप्रदान तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग्रामगत' का विग्रह 'ग्राम को गत' (ग्राम को गया हुआ) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' विभक्ति का लोप है।"
    },
    {
        question: "'जन्मांध' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "करण तत्पुरुष", correct: true },
            { text: "अपादान तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जन्मांध' का विग्रह 'जन्म से अंधा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' (के द्वारा) करण कारक का चिह्न है।"
    },
    {
        question: "'कर्मवीर' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्मवीर' का विग्रह 'कर्म में वीर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' विभक्ति का लोप है।"
    },
    {
        question: "'घुड़सवार' का सही समास विग्रह है:",
        answers: shuffle([
            { text: "घोड़े को सवार", correct: false },
            { text: "घोड़े से सवार", correct: false },
            { text: "घोड़े पर सवार", correct: true },
            { text: "घोड़े का सवार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घुड़सवार' का विग्रह 'घोड़े पर सवार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पर' विभक्ति का लोप है, जो अधिकरण कारक का चिह्न है।"
    },
    {
        question: "'वनवास' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वनवास' का विग्रह 'वन में वास' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' विभक्ति का लोप है।"
    },
    {
        question: "'गगनचुंबी' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "करण तत्पुरुष", correct: false },
            { text: "कर्म तत्पुरुष", correct: true },
            { text: "संप्रदान तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गगनचुंबी' का विग्रह 'गगन को चूमने वाला' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' विभक्ति का लोप है।"
    },
    {
        question: "'युद्धभूमि' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "युद्ध को भूमि", correct: false },
            { text: "युद्ध से भूमि", correct: false },
            { text: "युद्ध की भूमि", correct: false },
            { text: "युद्ध के लिए भूमि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'युद्धभूमि' का विग्रह 'युद्ध के लिए भूमि' होता है, जो संप्रदान तत्पुरुष का उदाहरण है।"
    },
    {
        question: "'आपबीती' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आपबीती' का विग्रह 'आप पर बीती' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'पर' विभक्ति का लोप है, जो अधिकरण कारक का चिह्न है।"
    },
    {
        question: "'मुँहमांगा' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "मुँह को माँगा", correct: false },
            { text: "मुँह से माँगा", correct: true },
            { text: "मुँह के लिए माँगा", correct: false },
            { text: "मुँह में माँगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुँहमांगा' का विग्रह 'मुँह से माँगा' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' (के द्वारा) करण कारक का चिह्न है."
    },
    {
        question: "'ऋणमुक्त' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "करण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: true },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "संप्रदान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऋणमुक्त' का विग्रह 'ऋण से मुक्त' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' (अलग होने के अर्थ में) अपादान कारक का चिह्न है।"
    },
    {
        question: "'स्नेहपूर्ण' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: true },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्नेहपूर्ण' का विग्रह 'स्नेह से पूर्ण' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' (के द्वारा) करण कारक का चिह्न है।"
    },
    {
        question: "'गंगातट' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: true },
            { text: "अधिकरण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गंगातट' का विग्रह 'गंगा का तट' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'का' विभक्ति का लोप है।"
    },
    {
        question: "'कर्मशील' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कर्मशील' का विग्रह 'कर्म में शील' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' विभक्ति का लोप है।"
    },
    {
        question: "'पाकेटमार' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: true },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाकेटमार' का विग्रह 'पाकेट को मारने वाला' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'को' विभक्ति का लोप है।"
    },
    {
        question: "'विद्यालय' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "विद्या को आलय", correct: false },
            { text: "विद्या से आलय", correct: false },
            { text: "विद्या का आलय", correct: false },
            { text: "विद्या के लिए आलय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विद्यालय' का विग्रह 'विद्या के लिए आलय' (घर) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'के लिए' विभक्ति का लोप है, जो संप्रदान तत्पुरुष का चिह्न है।"
    },
    {
        question: "'रणकुशल' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "संबंध तत्पुरुष", correct: false },
            { text: "अधिकरण तत्पुरुष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रणकुशल' का विग्रह 'रण में कुशल' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'में' विभक्ति का लोप है।"
    },
    {
        question: "'दोषमुक्त' में कौन सा तत्पुरुष समास है?",
        answers: shuffle([
            { text: "कर्म तत्पुरुष", correct: false },
            { text: "करण तत्पुरुष", correct: false },
            { text: "अपादान तत्पुरुष", correct: true },
            { text: "अधिकरण तत्पुरुष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दोषमुक्त' का विग्रह 'दोष से मुक्त' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'से' (अलग होने के अर्थ में) अपादान कारक का चिह्न है।"
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