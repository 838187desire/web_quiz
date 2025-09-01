const questions = [    
    {
        topHeading: "गुण संधि पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.9)"
    },
    {
        question: "'महा + उत्सव' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "महोत्सव", correct: true },
            { text: "महाउत्सव", correct: false },
            { text: "महतसव", correct: false },
            { text: "महोउत्सव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, जब 'आ' के बाद 'उ' आता है, तो दोनों मिलकर 'ओ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'महा' के 'आ' और 'उत्सव' के 'उ' के मेल से 'महोत्सव' शब्द बनता है।"
    },
    {
        question: "'देवेंद्र' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "देव + इंद्र", correct: true },
            { text: "देवे + इंद्र", correct: false },
            { text: "देवें + द्र", correct: false },
            { text: "दव + इंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, जब 'अ' के बाद 'इ' आता है, तो दोनों मिलकर 'ए' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'देव' के 'अ' और 'इंद्र' के 'इ' के मेल से 'देवेंद्र' बनता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द गुण संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "जलोर्मि", correct: false },
            { text: "महर्षि", correct: false },
            { text: "महौज", correct: true },
            { text: "ज्ञानोपदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महौज' शब्द 'महा + ओज' से मिलकर बना है, जो वृद्धि संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द गुण संधि के उदाहरण हैं।"
    },
    {
        question: "'सूर्य + उदय' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "सूर्योदय", correct: true },
            { text: "सूर्यादय", correct: false },
            { text: "सूर्यउदय", correct: false },
            { text: "सूर्यदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के अनुसार, जब 'अ' के बाद 'उ' आता है, तो दोनों मिलकर 'ओ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'सूर्य' के 'अ' और 'उदय' के 'उ' के मेल से 'सूर्योदय' बनता है।"
    },
    {
        question: "'महा + ऋषि' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "महऋषि", correct: false },
            { text: "महारिषि", correct: false },
            { text: "महर्षि", correct: true },
            { text: "महाऋषि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, जब 'आ' के बाद 'ऋ' आता है, तो दोनों मिलकर 'अर्' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'महा' के 'आ' और 'ऋषि' के 'ऋ' के मेल से 'महर्षि' बनता है।"
    },
    {
        question: "किस विकल्प में 'गुण संधि' का सही उदाहरण है?",
        answers: shuffle([
            { text: "प्रति + उपकार = प्रत्युपकार", correct: false },
            { text: "महा + उत्सव = महोत्सव", correct: true },
            { text: "सदा + एव = सदैव", correct: false },
            { text: "भानु + उदय = भानूदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह गुण संधि का सही उदाहरण है, जहाँ 'आ' और 'उ' का मेल 'ओ' में हुआ है।"
    },
    {
        question: "'परम + ईश्वर' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "परमेस्वर", correct: false },
            { text: "परमेश्वर", correct: true },
            { text: "परमाश्वर", correct: false },
            { text: "परमश्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'अ' के बाद 'ई' आने पर दोनों मिलकर 'ए' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'परम' के 'अ' और 'ईश्वर' के 'ई' के मेल से 'परमेश्वर' बनता है।"
    },
    {
        question: "'सप्तर्षि' शब्द का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "सप्त + ऋषि", correct: true },
            { text: "सप्तर + षि", correct: false },
            { text: "सप्त + ऋषी", correct: false },
            { text: "सप्त + अरिषि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के अनुसार, 'सप्त' के 'अ' और 'ऋषि' के 'ऋ' का मेल 'अर्' में होता है, जिससे 'सप्तर्षि' बनता है।"
    },
    {
        question: "'महा + ईश' के मेल से कौन सा शब्द बनता है?",
        answers: shuffle([
            { text: "महेश", correct: true },
            { text: "महीश", correct: false },
            { text: "महाईश", correct: false },
            { text: "माहेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के अनुसार, 'आ' के बाद 'ई' आने पर दोनों मिलकर 'ए' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'महा' के 'आ' और 'ईश' के 'ई' के मेल से 'महेश' बनता है।"
    },
    {
        question: "'ज्ञानोपदेश' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "ज्ञान + उपदेश", correct: true },
            { text: "ज्ञानो + पदेश", correct: false },
            { text: "ज्ञाना + उपदेश", correct: false },
            { text: "ज्ञ + नोपदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'अ' के बाद 'उ' आने पर दोनों मिलकर 'ओ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 'ज्ञान' के 'अ' और 'उपदेश' के 'उ' के मेल से 'ज्ञानोपदेश' बनता है।"
    },
    {
        question: "'देवर्षि' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "देव + ऋषि", correct: true },
            { text: "देवा + ऋषि", correct: false },
            { text: "दे + वर्षि", correct: false },
            { text: "देवर + षि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'अ' के बाद 'ऋ' आने पर दोनों मिलकर 'अर्' हो जाते हैं, जिससे 'देवर्षि' बनता है।"
    },
    {
        question: "'यथेष्ट' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "वृद्धि संधि", correct: false },
            { text: "गुण संधि", correct: true },
            { text: "यण संधि", correct: false },
            { text: "दीर्घ संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथेष्ट' का संधि विच्छेद 'यथा + इष्ट' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' और 'इ' के मेल से 'ए' बना है, जो गुण संधि का नियम है।"
    },
    {
        question: "'जल + ऊर्मि' का संधि रूप है:",
        answers: shuffle([
            { text: "जलुर्मी", correct: false },
            { text: "जलौर्मि", correct: false },
            { text: "जलोर्मि", correct: true },
            { text: "जलुरमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के अनुसार, 'अ' के बाद 'ऊ' आने पर दोनों मिलकर 'ओ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'जलोर्मि' शब्द बनता है।"
    },
    {
        question: "'सर्व + ईक्षण' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "सर्वेक्षण", correct: true },
            { text: "सर्वईक्षण", correct: false },
            { text: "सर्वोक्षण", correct: false },
            { text: "सर्वक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'अ' के बाद 'ई' आने पर दोनों मिलकर 'ए' हो जाते हैं, जिससे 'सर्वेक्षण' बनता है।"
    },
    {
        question: "'नव + ऊढ़ा' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "नवौढ़ा", correct: false },
            { text: "नवोढ़ा", correct: true },
            { text: "नवउढ़ा", correct: false },
            { text: "नवऊढ़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियमानुसार, 'अ' के बाद 'ऊ' आने पर 'ओ' हो जाता है, जिससे 'नवोढ़ा' बनता है।"
    },
    {
        question: "'महा + उदय' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "महोदय", correct: true },
            { text: "महदय", correct: false },
            { text: "महाउदय", correct: false },
            { text: "महोउदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'आ' के बाद 'उ' आने पर 'ओ' हो जाता है, जिससे 'महोदय' बनता है।"
    },
    {
        question: "'गुण संधि' का क्या नियम है?",
        answers: shuffle([
            { text: "अ/आ + इ/ई = ए", correct: false },
            { text: "अ/आ + उ/ऊ = ओ", correct: false },
            { text: "अ/आ + ऋ = अर्", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के तीनों मुख्य नियम यही हैं: 'अ/आ' का मेल 'इ/ई', 'उ/ऊ' या 'ऋ' से होने पर क्रमशः 'ए', 'ओ', या 'अर्' बनता है।"
    },
    {
        question: "'सहित + ईश' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "सहेतईश", correct: false },
            { text: "सहेतीश", correct: true },
            { text: "सहेतैश", correct: false },
            { text: "सहेतईस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियमानुसार, 'अ' के बाद 'ई' आने पर 'ए' हो जाता है, जिससे 'सहेतीश' बनता है."
    },
    {
        question: "'लोक + उक्ति' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "लोकउक्ति", correct: false },
            { text: "लोकोक्ति", correct: true },
            { text: "लोकौक्ति", correct: false },
            { text: "लोकूक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के अनुसार, 'अ' के बाद 'उ' आने पर 'ओ' हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'लोक' के 'अ' और 'उक्ति' के 'उ' के मेल से 'लोकोक्ति' बनता है।"
    },
    {
        question: "'राजा + ऋषि' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "राजर्षि", correct: true },
            { text: "राजऋषि", correct: false },
            { text: "राजषी", correct: false },
            { text: "राजारिषि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'आ' के बाद 'ऋ' आने पर 'अर्' हो जाता है, जिससे 'राजर्षि' बनता है।"
    },
    {
        question: "'रमेश' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "रमे + श", correct: false },
            { text: "रमा + ईश", correct: true },
            { text: "रम + ईश", correct: false },
            { text: "रा + मेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'आ' के बाद 'ई' आने पर 'ए' हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'रमा' के 'आ' और 'ईश' के 'ई' के मेल से 'रमेश' बनता है।"
    },
    {
        question: "'चंद्र + उदय' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "चंद्रोदय", correct: true },
            { text: "चंद्रादय", correct: false },
            { text: "चंद्रदय", correct: false },
            { text: "चन्दूदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के अनुसार, 'अ' के बाद 'उ' आने पर 'ओ' हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'चंद्रोदय' शब्द बनता है।"
    },
    {
        question: "'नर + ईश' की संधि क्या होगी?",
        answers: shuffle([
            { text: "नरेश", correct: true },
            { text: "नरश", correct: false },
            { text: "नरईश", correct: false },
            { text: "नारेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'अ' के बाद 'ई' आने पर 'ए' हो जाता है, जिससे 'नरेश' बनता है।"
    },
    {
        question: "'सूर्य + उदय' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "सूर्योदय", correct: true },
            { text: "सूर्यदय", correct: false },
            { text: "सूर्यउदय", correct: false },
            { text: "सूर्योदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के अनुसार, जब 'अ' के बाद 'उ' आता है, तो दोनों मिलकर 'ओ' हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'सूर्य' के 'अ' और 'उदय' के 'उ' के मेल से 'सूर्योदय' बनता है।"
    },
    {
        question: "'महोत्सव' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "महो + उत्सव", correct: false },
            { text: "महा + उत्सव", correct: true },
            { text: "महत + उत्सव", correct: false },
            { text: "महा + ओत्सव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के अनुसार, 'महा' के 'आ' के बाद 'उत्सव' के 'उ' आने पर दोनों मिलकर 'ओ' हो जाते हैं, जिससे 'महोत्सव' बनता है।"
    },
    {
        question: "'हितोपदेश' में कौन सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: true },
            { text: "वृद्धि संधि", correct: false },
            { text: "यण संधि", correct: false },
            { text: "अयादि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हितोपदेश' का संधि विच्छेद 'हित + उपदेश' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' और 'उ' के मेल से 'ओ' बना है, जो गुण संधि का नियम है।"
    },
    {
        question: "'रोग + उपचार' का सही संधि रूप है:",
        answers: shuffle([
            { text: "रोगउपचार", correct: false },
            { text: "रोगोपचार", correct: true },
            { text: "रोगपचार", correct: false },
            { text: "रोग + उपचार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'अ' के बाद 'उ' आने पर 'ओ' हो जाता है, जिससे 'रोगोपचार' बनता है।"
    },
    {
        question: "'राजेंद्र' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "राजेंद्र + र", correct: false },
            { text: "राजा + इंद्र", correct: true },
            { text: "राज + इंद्र", correct: false },
            { text: "राज + एंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के अनुसार, 'राजा' के 'आ' के बाद 'इंद्र' के 'इ' आने पर 'ए' हो जाता है, जिससे 'राजेंद्र' बनता है।"
    },
    {
        question: "'महा + उदय' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "महोदय", correct: true },
            { text: "महदय", correct: false },
            { text: "महाउदय", correct: false },
            { text: "महोउदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुण संधि के नियम के अनुसार, 'आ' के बाद 'उ' आने पर 'ओ' हो जाता है, जिससे 'महोदय' बनता है।"
    },
    {
        question: "'कवीश्वर' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "यण संधि", correct: false },
            { text: "दीर्घ संधि", correct: true },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कवीश्वर' का संधि विच्छेद 'कवि + ईश्वर' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'इ' और 'ई' के मेल से 'ई' बना है, जो दीर्घ संधि का नियम है।"
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