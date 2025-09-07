const questions = [
    {
        topHeading: "दीर्घ संधि पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.10)"
    },
    {
        question: "'विद्या + आलय' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "विद्यालय", correct: true },
            { text: "विद्यलय", correct: false },
            { text: "विदालय", correct: false },
            { text: "विद्यालया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, जब समान स्वर (यहाँ 'आ' + 'आ') आपस में मिलते हैं, तो वे दीर्घ हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'विद्या' के 'आ' और 'आलय' के 'आ' के मेल से 'विद्यालय' बनता है।"
    },
    {
        question: "'कवींद्र' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "कवि + इंद्र", correct: true },
            { text: "कवी + इद्र", correct: false },
            { text: "कवि + इन्द्र", correct: false },
            { text: "कवी + इन्द्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, जब 'इ' और 'इ' आपस में मिलते हैं, तो 'ई' बन जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कवि' के 'इ' और 'इंद्र' के 'इ' के मेल से 'कवींद्र' बनता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द दीर्घ संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "धर्मात्मा", correct: false },
            { text: "रवींद्र", correct: false },
            { text: "महर्षि", correct: true },
            { text: "भानूदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महर्षि' शब्द 'महा + ऋषि' से मिलकर बना है, जो गुण संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द दीर्घ संधि के उदाहरण हैं।"
    },
    {
        question: "'सूर्य + अस्त' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "सूर्यास्त", correct: true },
            { text: "सूरयास्त", correct: false },
            { text: "सूर्यअस्त", correct: false },
            { text: "सूर्योस्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के अनुसार, जब 'अ' के बाद 'अ' आता है, तो दोनों मिलकर 'आ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'सूर्य' के 'अ' और 'अस्त' के 'अ' के मेल से 'सूर्यास्त' बनता है।"
    },
    {
        question: "'लघु + ऊर्मि' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "लघुर्मि", correct: false },
            { text: "लघुऊर्मि", correct: false },
            { text: "लघूर्मि", correct: true },
            { text: "लघुऊमि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, जब 'उ' के बाद 'ऊ' आता है, तो दोनों मिलकर 'ऊ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'लघु' के 'उ' और 'ऊर्मि' के 'ऊ' के मेल से 'लघूर्मि' बनता है।"
    },
    {
        question: "किस विकल्प में 'दीर्घ संधि' का सही उदाहरण है?",
        answers: shuffle([
            { text: "प्रति + उपकार = प्रत्युपकार", correct: false },
            { text: "महा + उत्सव = महोत्सव", correct: false },
            { text: "सदा + एव = सदैव", correct: false },
            { text: "गिरी + ईश = गिरीश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दीर्घ संधि का सही उदाहरण है, जहाँ 'इ' और 'ई' का मेल 'ई' में हुआ है।"
    },
    {
        question: "'मुनि + इंद्र' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "मुनिइंद्र", correct: false },
            { text: "मुनींद्र", correct: true },
            { text: "मुनेंद्र", correct: false },
            { text: "मुनीद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'इ' के बाद 'इ' आने पर दोनों मिलकर 'ई' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'मुनि' के 'इ' और 'इंद्र' के 'इ' के मेल से 'मुनींद्र' बनता है।"
    },
    {
        question: "'विद्यार्थी' शब्द का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "विद्या + अर्थी", correct: true },
            { text: "विद्या + रथी", correct: false },
            { text: "विद्य + अर्थी", correct: false },
            { text: "वि + दार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के अनुसार, 'विद्या' के 'आ' और 'अर्थी' के 'अ' का मेल 'आ' में होता है, जिससे 'विद्यार्थी' बनता है।"
    },
    {
        question: "'भानु + उदय' के मेल से कौन सा शब्द बनता है?",
        answers: shuffle([
            { text: "भानूदय", correct: true },
            { text: "भानुउदय", correct: false },
            { text: "भानोदय", correct: false },
            { text: "भानुदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के अनुसार, 'उ' के बाद 'उ' आने पर दोनों मिलकर 'ऊ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'भानु' के 'उ' और 'उदय' के 'उ' के मेल से 'भानूदय' बनता है।"
    },
    {
        question: "'महात्मा' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "महत + आत्मा", correct: false },
            { text: "महा + आत्मा", correct: true },
            { text: "महान + आत्मा", correct: false },
            { text: "महा + तमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'महा' के 'आ' और 'आत्मा' के 'आ' का मेल 'आ' में होता है, जिससे 'महात्मा' बनता है।"
    },
    {
        question: "'कपि + ईश' का सही संधि शब्द क्या है?",
        answers: shuffle([
            { text: "कपेश", correct: false },
            { text: "कपीश", correct: true },
            { text: "कपईश", correct: false },
            { text: "कपश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'इ' के बाद 'ई' आने पर दोनों मिलकर 'ई' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'कपि' के 'इ' और 'ईश' के 'ई' के मेल से 'कपीश' बनता है।"
    },
    {
        question: "'रजनी + ईश' का संधि रूप है:",
        answers: shuffle([
            { text: "रजनीश", correct: true },
            { text: "रजनीस", correct: false },
            { text: "रजनिश", correct: false },
            { text: "रजनेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'ई' के बाद 'ई' आने पर दोनों मिलकर 'ई' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'रजनी' के 'ई' और 'ईश' के 'ई' के मेल से 'रजनीश' बनता है।"
    },
    {
        question: "'साधूपदेश' में कौन सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "यण संधि", correct: false },
            { text: "अयादि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साधूपदेश' का संधि विच्छेद 'साधु + उपदेश' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'उ' और 'उ' के मेल से 'ऊ' बना है, जो दीर्घ संधि का नियम है।"
    },
    {
        question: "'वधू + उत्सव' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "वधूत्सव", correct: true },
            { text: "वधोत्सव", correct: false },
            { text: "वधुउत्सव", correct: false },
            { text: "वधूउत्सव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दीर्घ संधि का उदाहरण है। इसके नियम के अनुसार, जब दो समान स्वर (यहाँ ऊ + उ) मिलते हैं, तो वे मिलकर दीर्घ स्वर (ऊ) बन जाते हैं। अतः, 'वधू' के 'ऊ' और 'उत्सव' के 'उ' के मेल से 'वधूत्सव' शब्द बनता है।"
    },
    {
        question: "'पृथ्वी + ईश' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "पृथ्वीश", correct: true },
            { text: "पृथिवीश", correct: false },
            { text: "पृथ्वीस", correct: false },
            { text: "पृथ्वेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'ई' के बाद 'ई' आने पर दोनों मिलकर 'ई' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'पृथ्वीश' बनता है।"
    },
    {
        question: "'कवींद्र' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "कवि + इंद्र", correct: true },
            { text: "कवी + इंद्र", correct: false },
            { text: "कवि + इन्द्र", correct: false },
            { text: "कवी + इन्द्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, जब 'इ' और 'इ' आपस में मिलते हैं, तो 'ई' बन जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'कवि' के 'इ' और 'इंद्र' के 'इ' के मेल से 'कवींद्र' बनता है।"
    },
    {
        question: "'देव + आलय' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "देवालय", correct: true },
            { text: "देवल्य", correct: false },
            { text: "देवलय", correct: false },
            { text: "देवाल्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'अ' के बाद 'आ' आने पर दोनों मिलकर 'आ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'देव' के 'अ' और 'आलय' के 'आ' के मेल से 'देवालय' बनता है।"
    },
    {
        question: "'परीक्षार्थी' शब्द का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "परीक्षा + अर्थी", correct: true },
            { text: "परिक्षा + अर्थी", correct: false },
            { text: "परी + क्षार्थी", correct: false },
            { text: "परी + आर्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के अनुसार, 'परीक्षा' के 'आ' और 'अर्थी' के 'अ' का मेल 'आ' में होता है, जिससे 'परीक्षार्थी' बनता है।"
    },
    {
        question: "'अति + इव' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "अतिव", correct: false },
            { text: "अतीव", correct: true },
            { text: "अतिइव", correct: false },
            { text: "अतव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'इ' के बाद 'इ' आने पर दोनों मिलकर 'ई' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'अति' के 'इ' और 'इव' के 'इ' के मेल से 'अतीव' बनता है।"
    },
    {
        question: "'महा + आशय' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "महाशय", correct: true },
            { text: "महोशय", correct: false },
            { text: "माहाशय", correct: false },
            { text: "महशय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के अनुसार, 'आ' के बाद 'आ' आने पर 'आ' हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'महा' के 'आ' और 'आशय' के 'आ' के मेल से 'महाशय' बनता है।"
    },
    {
        question: "'दीर्घ संधि' का क्या नियम है?",
        answers: shuffle([
            { text: "समान स्वर मिलकर दीर्घ हो जाते हैं", correct: true },
            { text: "असमान स्वर मिलकर य, व, र बन जाते हैं", correct: false },
            { text: "अ, आ के बाद इ, ई, उ, ऊ, ऋ आने पर ए, ओ, अर् हो जाते हैं", correct: false },
            { text: "अ, आ के बाद ए, ऐ, ओ, औ आने पर ऐ, औ हो जाते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि में जब समान स्वर (अ-अ, इ-इ, उ-उ) आपस में मिलते हैं तो वे क्रमशः आ, ई, ऊ बन जाते हैं।"
    },
    {
        question: "'विद्याभ्यास' में कौन सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "यण संधि", correct: false },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विद्याभ्यास' का संधि विच्छेद 'विद्या + अभ्यास' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'अ' के मेल से 'आ' बना है, जो दीर्घ संधि का नियम है।"
    },
    {
        question: "'कवि + ईश्वर' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "कवीश्वर", correct: true },
            { text: "कविईश्वर", correct: false },
            { text: "कवीस्वर", correct: false },
            { text: "कवेश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'इ' के बाद 'ई' आने पर दोनों मिलकर 'ई' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'कवीश्वर' बनता है।"
    },
    {
        question: "'लघुत्तर' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "लघु + उत्तर", correct: true },
            { text: "लघु + इतर", correct: false },
            { text: "लघू + तर", correct: false },
            { text: "लघ + उत्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के अनुसार, 'लघु' के 'उ' के बाद 'उत्तर' के 'उ' आने पर दोनों मिलकर 'ऊ' हो जाते हैं, जिससे 'लघुत्तर' बनता है।"
    },
    {
        question: "'कपि + ईश' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "कपीश", correct: true },
            { text: "कपिश", correct: false },
            { text: "कपईश", correct: false },
            { text: "कपश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'इ' के बाद 'ई' आने पर दोनों मिलकर 'ई' हो जाते हैं, जिससे 'कपीश' बनता है।"
    },
    {
        question: "'कटाक्ष' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "कट + आक्ष",correct: false },
            { text: "कट + अक्ष", correct: false },
            { text: "कटा + अक्ष", correct: true },
            { text: "कटा + आक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'आ' के बाद 'अ' आने पर दोनों मिलकर 'आ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'कटा + अक्ष' का मेल 'कटाक्ष' होता है।"
    },
    {
        question: "'रवींद्र' का सही संधि विच्छेद है:",
        answers: shuffle([
            { text: "रवि + इंद्र", correct: true },
            { text: "रव + इंद्र", correct: false },
            { text: "रवि + ईंद्र", correct: false },
            { text: "रवी + इन्द्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'इ' के बाद 'इ' आने पर दोनों मिलकर 'ई' हो जाते हैं, जिससे 'रवींद्र' बनता है।"
    },
    {
        question: "'नदी + ईश' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "नदीश", correct: true },
            { text: "नदश", correct: false },
            { text: "नदीइश", correct: false },
            { text: "नदिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'ई' के बाद 'ई' आने पर दोनों मिलकर 'ई' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'नदी + ईश' का मेल 'नदीश' होता है।"
    },
    {
        question: "'महा + आनंद' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "महानंद", correct: true },
            { text: "महाआनंद", correct: false },
            { text: "महोद", correct: false },
            { text: "महनंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'आ' के बाद 'आ' आने पर दोनों मिलकर 'आ' हो जाते हैं, जिससे 'महानंद' बनता है।"
    },
    {
        question: "'सूक्ति' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "सू + क्ति", correct: false },
            { text: "स + ऊक्ति", correct: false },
            { text: "सु + उक्ति", correct: true },
            { text: "सो + क्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ संधि के नियम के अनुसार, 'उ' के बाद 'उ' आने पर दोनों मिलकर 'ऊ' हो जाते हैं, जिससे 'सूक्ति' बनता है।"
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