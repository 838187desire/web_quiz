const questions = [
    {
        topHeading: "वृद्धि संधि पर आधारित 25 बहुविकल्पीय प्रश्न (quiz_no.8)"
    },
    {
        question: "'सदा + एव' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "सदैव", correct: true },
            { text: "सदैव्", correct: false },
            { text: "सदाएव", correct: false },
            { text: "सदव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, जब 'आ' के बाद 'ए' आता है, तो दोनों मिलकर 'ऐ' बन जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'सदा' के 'आ' और 'एव' के 'ए' के मेल से 'सदैव' शब्द बनता है।"
    },
    {
        question: "'एक + एक' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "एकैक", correct: true },
            { text: "एकएक", correct: false },
            { text: "एकेक", correct: false },
            { text: "एकीक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, जब 'अ' के बाद 'ए' आता है, तो दोनों मिलकर 'ऐ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, 'एक' के 'अ' और 'एक' के 'ए' के मेल से 'एकैक' बनता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द वृद्धि संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "महौषध", correct: false },
            { text: "परमोदार्य", correct: false },
            { text: "जलौघ", correct: false },
            { text: "महेश्वर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महेश्वर' शब्द 'महा + ईश्वर' से मिलकर बना है, जो गुण संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'महौषध', 'परमोदार्य' और 'जलौघ' वृद्धि संधि के उदाहरण हैं।"
    },
    {
        question: "'महा + ओजस्वी' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "महोजस्वी", correct: false },
            { text: "महाओजस्वी", correct: false },
            { text: "महौजस्वी", correct: true },
            { text: "महजस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, जब 'आ' के बाद 'ओ' आता है, तो दोनों मिलकर 'औ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'महा' के 'आ' और 'ओजस्वी' के 'ओ' के मेल से 'महौजस्वी' बनता है।"
    },
    {
        question: "'परम + औषध' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "परमोषध", correct: false },
            { text: "परमाोषध", correct: false },
            { text: "परमौषध", correct: true },
            { text: "परमोषधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, जब 'अ' के बाद 'औ' आता है, तो दोनों मिलकर 'औ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, 'परम' के 'अ' और 'औषध' के 'औ' के मेल से 'परमौषध' बनता है।"
    },
    {
        question: "किस विकल्प में 'वृद्धि संधि' का सही उदाहरण है?",
        answers: shuffle([
            { text: "भानु + उदय = भानूदय", correct: false },
            { text: "महा + ऋषि = महर्षि", correct: false },
            { text: "हित + एषी = हितैषी", correct: true },
            { text: "प्रति + उपकार = प्रत्युपकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हितैषी' शब्द 'हित + एषी' से मिलकर बना है, जो वृद्धि संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'ए' का मेल 'ऐ' में हुआ है।"
    },
    {
        question: "'तथा + एव' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "तथाव", correct: false },
            { text: "तथैव", correct: true },
            { text: "तथव", correct: false },
            { text: "तथाएव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, 'आ' के बाद 'ए' आने पर दोनों मिलकर 'ऐ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'तथा' के 'आ' और 'एव' के 'ए' के मेल से 'तथैव' बनता है।"
    },
    {
        question: "'वनौषधि' शब्द का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "वन + औषध", correct: false },
            { text: "वनो + षधि", correct: false },
            { text: "वन + औषधि", correct: true },
            { text: "वना + औषधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के अनुसार, 'वन' के 'अ' और 'औषधि' के 'औ' का मेल 'औ' में होता है, जिससे 'वनौषधि' बनता है।"
    },
    {
        question: "'दंत + ओष्ठ' के मेल से कौन सा शब्द बनता है?",
        answers: shuffle([
            { text: "दंतोष्ठ", correct: false },
            { text: "दंतौष्ठ", correct: true },
            { text: "दन्तोष्ठ", correct: false },
            { text: "दंतऔष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के अनुसार, 'अ' के बाद 'ओ' आने पर दोनों मिलकर 'औ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'दंत' के 'अ' और 'ओष्ठ' के 'ओ' के मेल से 'दंतौष्ठ' बनता है।"
    },
    {
        question: "'वसुधा + एव' की संधि है:",
        answers: shuffle([
            { text: "वसुधैव", correct: true },
            { text: "वसुधैव्", correct: false },
            { text: "वसुधाएव", correct: false },
            { text: "वसुधैस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, 'आ' के बाद 'ए' आने पर दोनों मिलकर 'ऐ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'वसुधा' के 'आ' और 'एव' के 'ए' के मेल से 'वसुधैव' बनता है।"
    },
    {
        question: "'महा + ऐश्वर्य' का सही संधि शब्द क्या है?",
        answers: shuffle([
            { text: "महैश्वर्य", correct: true },
            { text: "महाऐश्वर्य", correct: false },
            { text: "महैश्वरी", correct: false },
            { text: "महैश्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, 'आ' के बाद 'ऐ' आने पर दोनों मिलकर 'ऐ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'महा' के 'आ' और 'ऐश्वर्य' के 'ऐ' के मेल से 'महैश्वर्य' बनता है।"
    },
    {
        question: "'जल + ओघ' का संधि रूप है:",
        answers: shuffle([
            { text: "जलौघ", correct: true },
            { text: "जलोघ", correct: false },
            { text: "जलाघ", correct: false },
            { text: "जलौघा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, 'अ' के बाद 'ओ' आने पर दोनों मिलकर 'औ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'जल' के 'अ' और 'ओघ' के 'ओ' के मेल से 'जलौघ' बनता है।"
    },
    {
        question: "किस शब्द में वृद्धि संधि है?",
        answers: shuffle([
            { text: "लोकेषणा", correct: true },
            { text: "मुनींद्र", correct: false },
            { text: "गिरीश", correct: false },
            { text: "देवेंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लोकेषणा' का संधि विच्छेद 'लोक + एषणा' है, जो वृद्धि संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अ' और 'ए' के मेल से 'ऐ' बना है।"
    },
    {
        question: "'सदा + एव' किस संधि का उदाहरण है?",
        answers: shuffle([
            { text: "दीर्घ संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "वृद्धि संधि", correct: true },
            { text: "यण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सदा + एव' में 'आ' और 'ए' के मेल से 'ऐ' बना है, जो वृद्धि संधि का नियम है।"
    },
    {
        question: "'महा + ऐरावत' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "महैरावत", correct: true },
            { text: "मह + ऐरावत", correct: false },
            { text: "महाऐरावत", correct: false },
            { text: "महैरावत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, 'आ' के बाद 'ऐ' आने पर दोनों मिलकर 'ऐ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'महा' के 'आ' और 'ऐरावत' के 'ऐ' के मेल से 'महैरावत' बनता है।"
    },
    {
        question: "किस विकल्प में संधि विच्छेद सही नहीं है?",
        answers: shuffle([
            { text: "महौदार्य = महा + औदार्य", correct: false },
            { text: "सदैव = सदा + एव", correct: false },
            { text: "जलौघ = जल + ओघ", correct: false },
            { text: "परमोपकार = परम + उपकार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परमोपकार' शब्द 'परम + उपकार' से मिलकर बना है, जो गुण संधि का उदाहरण है, न कि वृद्धि संधि का।"
    },
    {
        question: "'मतैक्य' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "मत + ऐक्य", correct: true },
            { text: "मति + ऐक्य", correct: false },
            { text: "मत + एक्य", correct: false },
            { text: "मते + ऐक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के अनुसार, 'मत' के 'अ' के बाद 'ऐक्य' के 'ऐ' आने पर दोनों मिलकर 'ऐ' हो जाते हैं, जिससे 'मतैक्य' बनता है।"
    },
    {
        question: "'महौषध' शब्द का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "महा + ओषध", correct: false },
            { text: "मह + औषध", correct: false },
            { text: "महा + औषध", correct: true },
            { text: "महो + षध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, 'महा' के 'आ' और 'औषध' के 'औ' के मेल से 'औ' बनता है, जिससे 'महौषध' बनता है।"
    },
    {
        question: "'महा + ऐश्वर्य' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "महेश्वर्य", correct: false },
            { text: "महाऐश्वर्य", correct: false },
            { text: "महैश्वर्य", correct: true },
            { text: "महश्वर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, 'आ' के बाद 'ऐ' आने पर दोनों मिलकर 'ऐ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'महैश्वर्य' शब्द बनता है।"
    },
    {
        question: "'परम + ओज' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "परमौज", correct: true },
            { text: "परमोर्ज", correct: false },
            { text: "परमज़", correct: false },
            { text: "परमोज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के अनुसार, 'अ' के बाद 'ओ' आने पर दोनों मिलकर 'औ' हो जाते हैं, जिससे 'परमौज' बनता है।"
    },
    {
        question: "'वन + औचित्य' का सही संधि विच्छेद है:",
        answers: shuffle([
            { text: "वनोचित्य", correct: false },
            { text: "वनौचित्य", correct: true },
            { text: "वनचित्य", correct: false },
            { text: "वनाचित्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, 'अ' के बाद 'औ' आने पर दोनों मिलकर 'औ' हो जाते हैं, जिससे 'वनौचित्य' बनता है।"
    },
    {
        question: "'सुख + ऐश्वर्य' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "सुखैश्वर्य", correct: true },
            { text: "सुखेश्वर्य", correct: false },
            { text: "सुखऐश्वर्य", correct: false },
            { text: "सुखैश्र्वर्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के नियम के अनुसार, 'अ' के बाद 'ऐ' आने पर दोनों मिलकर 'ऐ' हो जाते हैं, जिससे 'सुखैश्वर्य' बनता है।"
    },
    {
        question: "'महा + ऐरावत' की संधि क्या होगी?",
        answers: shuffle([
            { text: "महैरावत", correct: true },
            { text: "महाऐरावत", correct: false },
            { text: "महैरावात", correct: false },
            { text: "महरावा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के अनुसार, 'आ' के बाद 'ऐ' आने पर दोनों मिलकर 'ऐ' हो जाते हैं, जिससे 'महैरावत' बनता है।"
    },
    {
        question: "'हितोपदेश' में कौन सी संधि है?",
        answers: shuffle([
            { text: "वृद्धि संधि", correct: false },
            { text: "यण संधि", correct: false },
            { text: "गुण संधि", correct: true },
            { text: "दीर्घ संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हितोपदेश' का संधि विच्छेद 'हित + उपदेश' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' के मेल से 'ओ' बना है, जो गुण संधि का नियम है।"
    },
    {
        question: "'मतैक्य' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "मत + ऐक्य", correct: true },
            { text: "मति + ऐक्य", correct: false },
            { text: "मत + एक्य", correct: false },
            { text: "मते + ऐक्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वृद्धि संधि के अनुसार, 'मत' के 'अ' के बाद 'ऐक्य' के 'ऐ' आने पर दोनों मिलकर 'ऐ' हो जाते हैं, जिससे 'मतैक्य' बनता है।"
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