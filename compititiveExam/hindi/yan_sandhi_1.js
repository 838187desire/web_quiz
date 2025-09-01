const questions = [
    {
        topHeading: "यण संधि पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.7)"
    },
    {
        question: "'अति + आवश्यक' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "अत्यावश्यक", correct: true },
            { text: "अत्यावश्याक", correct: false },
            { text: "अतियावश्यक", correct: false },
            { text: "अताआवश्यक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, जब 'इ' के बाद कोई भिन्न स्वर ('आ') आता है, तो 'इ' का 'य' हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'अति' का 'अत्य' और 'आवश्यक' मिलकर 'अत्यावश्यक' बनता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द यण संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "प्रत्येक", correct: false },
            { text: "स्वागत", correct: false },
            { text: "महर्षि", correct: true },
            { text: "अन्वय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महर्षि' शब्द 'महा + ऋषि' से मिलकर बना है, जो गुण संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द यण संधि के उदाहरण हैं।"
    },
    {
        question: "'इति + आदि' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "इत्यादि", correct: true },
            { text: "इतआदि", correct: false },
            { text: "इत्यदि", correct: false },
            { text: "इतादि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'इ' के बाद 'आ' आने पर 'इ' का 'य' में परिवर्तन हो जाता है, जिससे 'इति' का 'इत्य' और 'आदि' का 'आदि' मिलकर 'इत्यादि' बनता है।"
    },
    {
        question: "किस विकल्प में 'यण संधि' का सही उदाहरण है?",
        answers: shuffle([
            { text: "महा + उत्सव = महोत्सव", correct: false },
            { text: "देव + आलय = देवालय", correct: false },
            { text: "सु + आगत = स्वागत", correct: true },
            { text: "सत् + जन = सज्जन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह यण संधि का सही उदाहरण है, जहाँ 'उ' के बाद 'आ' आने पर 'उ' का 'व' हो जाता है।"
    },
    {
        question: "'अनु + एषण' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "अनुएषण", correct: false },
            { text: "अन्वेषण", correct: true },
            { text: "अन्वेषन", correct: false },
            { text: "अनेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'उ' के बाद 'ए' आने पर 'उ' का 'व' हो जाता है, जिससे 'अन्वेषण' बनता है।"
    },
    {
        question: "'नदी + अर्पण' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "नद्यार्पण", correct: true },
            { text: "नदिअर्पण", correct: false },
            { text: "नदर्पण", correct: false },
            { text: "नादीअर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियमानुसार, 'ई' के बाद 'अ' आने पर 'ई' का 'य' हो जाता है, जिससे 'नदी' का 'नद्य' और 'अर्पण' का 'अर्पण' मिलकर 'नद्यार्पण' बनता है।"
    },
    {
        question: "किस शब्द में यण संधि है?",
        answers: shuffle([
            { text: "यद्यपि", correct: true },
            { text: "गवाक्ष", correct: false },
            { text: "पावन", correct: false },
            { text: "विद्यार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यद्यपि' शब्द 'यदि + अपि' से मिलकर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'इ' के बाद 'अ' आने पर 'इ' का 'य' हो जाता है, जो यण संधि का नियम है।"
    },
    {
        question: "'अन्वय' शब्द का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "अन्व + य", correct: false },
            { text: "अनु + आय", correct: false },
            { text: "अन + वय", correct: false },
            { text: "अनु + अय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'उ' के बाद 'अ' आने पर 'उ' का 'व' हो जाता है, जिससे 'अन्वय' बनता है।"
    },
    {
        question: "'अति + उत्तम' के मेल से कौन सा शब्द बनता है?",
        answers: shuffle([
            { text: "अत्युत्तम", correct: true },
            { text: "अत्यउत्तम", correct: false },
            { text: "अतिउत्तम", correct: false },
            { text: "अतुत्तम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के अनुसार, 'इ' के बाद 'उ' आने पर 'इ' का 'य' और 'उ' की मात्रा 'य' पर लग जाती है, जिससे 'अत्युत्तम' बनता है।"
    },
    {
        question: "'मातृ + आज्ञा' की संधि है:",
        answers: shuffle([
            { text: "मात्राज्ञा", correct: true },
            { text: "मातृआज्ञा", correct: false },
            { text: "मातज्ञा", correct: false },
            { text: "मातृग्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'ऋ' के बाद 'आ' आने पर 'ऋ' का 'र' हो जाता है और 'आ' की मात्रा 'र' पर लगती है, जिससे 'मात्राज्ञा' बनता है।"
    },
    {
        question: "'अभि + उदय' का सही संधि शब्द क्या है?",
        answers: shuffle([
            { text: "अभ्युदय", correct: true },
            { text: "अभिउदय", correct: false },
            { text: "अभ्युद", correct: false },
            { text: "अभिदय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'इ' के बाद 'उ' आने पर 'इ' का 'य' हो जाता है और 'उ' की मात्रा 'य' पर लगती है, जिससे 'अभ्युदय' बनता है।"
    },
    {
        question: "'अति + अंत' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "अतिअन्त", correct: false },
            { text: "अतांत ", correct: false },
            { text: "अत्यंत", correct: true },
            { text: "अतींत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'इ' के बाद 'अ' आने पर 'इ' का 'य' हो जाता है, जिससे 'अत्यंत' बनता है।"
    },
    {
        question: "यण संधि का संबंध किस संधि विशेष से है?",
        answers: shuffle([
            { text: "व्यंजन संधि", correct: false },
            { text: "स्वर संधि", correct: true },
            { text: "विसर्ग संधि", correct: false },
            { text: "अयादि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि स्वर संधि का ही एक भेद है, जिसमें स्वर का स्वर से मेल होता है।"
    },
    {
        question: "'प्रत्युपकार' शब्द में कौन सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: false },
            { text: "यण संधि", correct: true },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रत्युपकार' का संधि विच्छेद 'प्रति + उपकार' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'इ' के बाद 'उ' आने पर 'इ' का 'य' हो जाता है, जो यण संधि का नियम है।"
    },
    {
        question: "'स्वागतम' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "स्व + आगतम", correct: false },
            { text: "सु + आगतम", correct: true },
            { text: "सा + आगतम", correct: false },
            { text: "स्वागत + अम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'उ' के बाद 'आ' आने पर 'उ' का 'व' हो जाता है, जिससे 'स्वागतम' बनता है।"
    },
    {
        question: "किस विकल्प में संधि विच्छेद सही नहीं है?",
        answers: shuffle([
            { text: "अत्यल्प = अति + अल्प", correct: false },
            { text: "न्यून = नि + ऊन", correct: false },
            { text: "अन्वेषण = अनु + एषण", correct: false },
            { text: "स्वागत = स्व + गत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वागत' का सही संधि विच्छेद 'सु + आगत' है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'स्व + गत' इसका सही संधि विच्छेद नहीं है।"
    },
    {
        question: "किस शब्द में यण संधि है?",
        answers: shuffle([
            { text: "यद्यपि", correct: true },
            { text: "गवाक्ष", correct: false },
            { text: "पावन", correct: false },
            { text: "विद्यार्थी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यद्यपि' शब्द 'यदि + अपि' से मिलकर बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'इ' के बाद 'अ' आने पर 'इ' का 'य' हो जाता है, जो यण संधि का नियम है।"
    },
    {
        question: "'अत्यधिक' शब्द का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "अती + अधिक", correct: false },
            { text: "अति + अधिक", correct: true },
            { text: "अत्य + अधिक", correct: false },
            { text: "अत + यधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'अति' के 'इ' का 'य' और 'अधिक' के 'अ' का मेल होकर 'अत्यधिक' बनता है।"
    },
    {
        question: "'गुरु + आज्ञा' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "गुरवाज्ञा", correct: true },
            { text: "गुरुवाज्ञा", correct: false },
            { text: "गुरवज्ञा", correct: false },
            { text: "गुरवाग्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'उ' के बाद 'आ' आने पर 'उ' का 'व' हो जाता है, जिससे 'गुरु' का 'गुर्व' और 'आज्ञा' का 'आज्ञा' मिलकर 'गुरवाज्ञा' बनता है।"
    },
    {
        question: "'मातृ + उपदेश' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "मात्रीपदेश", correct: false },
            { text: "मातृउपदेश", correct: false },
            { text: "मातृपदेश", correct: false },
            { text: "मात्रुपदेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'ऋ' के बाद 'उ' आने पर 'ऋ' का 'र' और 'उ' की मात्रा 'र' पर लगती है, जिससे 'मात्रुपदेश' बनता है।"
    },
    {
        question: "'नदी + अर्पण' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "नद्यार्पण", correct: true },
            { text: "नदिअर्पण", correct: false },
            { text: "नदर्पण", correct: false },
            { text: "नादीअर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियमानुसार, 'ई' के बाद 'अ' आने पर 'ई' का 'य' हो जाता है, जिससे 'नदी' का 'नद्य' और 'अर्पण' का 'अर्पण' मिलकर 'नद्यार्पण' बनता है।"
    },
    {
        question: "'सु + अल्प' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "सालप", correct: false },
            { text: "स्वेल्प", correct: false },
            { text: "स्वल्प", correct: true },
            { text: "सुअल्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के अनुसार, 'उ' के बाद 'अ' आने पर 'उ' का 'व' हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'स्वल्प' शब्द बनता है।"
    },
    {
        question: "'पितृ + इच्छा' की संधि क्या होगी?",
        answers: shuffle([
            { text: "पितृइच्छा", correct: false },
            { text: "पित्रेच्छा", correct: false },
            { text: "पितरिच्छा", correct: true },
            { text: "पितृेच्छा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'ऋ' के बाद 'इ' आने पर 'ऋ' का 'र' और 'इ' की मात्रा 'र' पर लगती है, जिससे 'पितरिच्छा' बनता है।"
    },
    {
        question: "'उपर्युक्त' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "उपरि + उक्त", correct: true },
            { text: "उपर + युक्त", correct: false },
            { text: "उपर + उक्त", correct: false },
            { text: "ऊपर + उक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपरि' के 'इ' के बाद 'उ' आने पर 'इ' का 'य' हो जाता है, जिससे 'उपर्युक्त' बनता है।"
    },
    {
        question: "'प्रत्येक' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "प्रति + एक", correct: true },
            { text: "प्रत्य + एक", correct: false },
            { text: "प्रत + येक", correct: false },
            { text: "प्र + त्येक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रति' के 'इ' के बाद 'ए' आने पर 'इ' का 'य' हो जाता है, जिससे 'प्रत्येक' बनता है।"
    },
    {
        question: "'अत्याचार' में कौन सी संधि है?",
        answers: shuffle([
            { text: "दीर्घ संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "यण संधि", correct: true },
            { text: "वृद्धि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अत्याचार' का संधि विच्छेद 'अति + आचार' है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अति' के 'इ' का 'य' में परिवर्तन यण संधि का नियम है।"
    },
    {
        question: "'न्यून' का सही संधि विच्छेद है:",
        answers: shuffle([
            { text: "न्यु + न", correct: false },
            { text: "नि + ऊन", correct: true },
            { text: "नु + अन", correct: false },
            { text: "न + यून", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के अनुसार, 'नि' के 'इ' के बाद 'ऊ' आने पर 'इ' का 'य' हो जाता है और 'ऊ' की मात्रा 'य' पर लगती है, जिससे 'न्यून' बनता है।"
    },
    {
        question: "'स्त्री + उचित' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "स्त्रीउचित", correct: false },
            { text: "स्त्रुचित", correct: false },
            { text: "स्त्र्युचित", correct: true },
            { text: "स्त्रीयोचित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्त्री' के 'ई' के बाद 'उ' आने पर 'ई' का 'य' हो जाता है और 'उ' की मात्रा 'य' पर लगती है, जिससे 'स्त्र्युचित' बनता है।"
    },
    {
        question: "'अति + अंत' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "अतींत", correct: false },
            { text: "अत्यंत", correct: true },
            { text: "अतिअन्त", correct: false },
            { text: "अतांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियम के अनुसार, 'इ' के बाद 'अ' आने पर 'इ' का 'य' हो जाता है, जिससे 'अत्यंत' बनता है।"
    },
    {
        question: "'इति + आदिक' की संधि क्या होगी?",
        answers: shuffle([
            { text: "इत्यादिक", correct: true },
            { text: "इतियादिक", correct: false },
            { text: "इतादिक", correct: false },
            { text: "इत्यदिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यण संधि के नियमानुसार, 'इ' के बाद 'आ' आने पर 'इ' का 'य' हो जाता है, जिससे 'इत्यादिक' बनता है।"
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