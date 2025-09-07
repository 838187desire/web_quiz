const questions = [
    {
        topHeading: "तुगागम संधि पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.11)"
    },
    {
        question: "'वि + छेद' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "विछेद", correct: false },
            { text: "विच्छेद", correct: true },
            { text: "विछद", correct: false },
            { text: "विछेद्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुगागम संधि (जो कि व्यंजन संधि का एक भेद है) के नियम के अनुसार, जब किसी स्वर के बाद 'छ' आता है, तो 'छ' से पहले 'च्' जोड़ दिया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'इ' स्वर के बाद 'छेद' आने पर 'च्' का आगम होता है, जिससे 'विच्छेद' बनता है।"
    },
    {
        question: "'स्व + छंद' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "स्वछंद", correct: false },
            { text: "स्वच्छंद", correct: true },
            { text: "स्वाछंद", correct: false },
            { text: "स्वछद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब 'अ' स्वर के बाद 'छंद' आता है, तो 'छ' से पहले 'च्' का आगम होता है, जिससे 'स्वच्छंद' शब्द बनता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द तुगागम संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "अनुच्छेद", correct: false },
            { text: "तरुच्छाया", correct: false },
            { text: "स्वच्छा", correct: true },
            { text: "परिच्छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वच्छा' शब्द 'सु + अच्छा' से मिलकर बना है, जो यण संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अनुच्छेद', 'तरुच्छाया', और 'परिच्छेद' तुगागम संधि के उदाहरण हैं।"
    },
    {
        question: "'अनुच्छेद' शब्द का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "अनु + छेद", correct: true },
            { text: "अन + छेद", correct: false },
            { text: "अनुच्छ + एद", correct: false },
            { text: "अनु + च्छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनु' के 'उ' स्वर के बाद 'छेद' आने पर 'च्' का आगम होता है, जिससे 'अनुच्छेद' बनता है।"
    },
    {
        question: ": 'परिच्छेद' शब्द में 'इ' के बाद किस वर्ण के आने पर 'च्' का आगम हुआ है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "इ", correct: false },
            { text: "उ", correct: false },
            { text: "छ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परि' के 'इ' के बाद 'छेद' के 'छ' आने पर 'च्' का आगम होता है।"
    },
    {
        question: "किस विकल्प में 'तुगागम संधि' का सही उदाहरण है?",
        answers: shuffle([
            { text: "परम + ईश्वर = परमेश्वर", correct: false },
            { text: "महा + ऋषि = महर्षि", correct: false },
            { text: "प्रति + छाया = प्रतिच्छाया", correct: true },
            { text: "सदा + एव = सदैव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रति' के 'इ' स्वर के बाद 'छाया' आने पर 'च्' का आगम होता है, जो तुगागम संधि का नियम है।"
    },
    {
        question: "'आ + छादन' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "आछादन", correct: false },
            { text: "आच्छादन", correct: true },
            { text: "आचछादन", correct: false },
            { text: "अछ्छादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आ' स्वर के बाद 'छादन' आने पर 'च्' का आगम होता है, जिससे 'आच्छादन' बनता है।"
    },
    {
        question: "'छत्र + छाया' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "छत्रछाया", correct: false },
            { text: "छत्रच्छाया", correct: true },
            { text: "छतरछाया", correct: false },
            { text: "छत्रचछाय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छत्र' के 'अ' स्वर के बाद 'छाया' आने पर 'च्' का आगम होता है, जिससे 'छत्रच्छाया' बनता है।"
    },
    {
        question: "'वृक्ष + छाया' के मेल से कौन सा शब्द बनता है?",
        answers: shuffle([
            { text: "वृक्षछाया", correct: false },
            { text: "वृक्षचछाया", correct: false },
            { text: "वृक्षच्छाया", correct: true },
            { text: "वृक्षछा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वृक्ष' के 'अ' स्वर के बाद 'छाया' आने पर 'च्' का आगम होता है, जिससे 'वृक्षच्छाया' बनता है।"
    },
    {
        question: "'परि + छेद' की संधि है:",
        answers: shuffle([
            { text: "परिच्छेद", correct: true },
            { text: "परिछेद", correct: false },
            { text: "परिक्छेद", correct: false },
            { text: "परिछद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परि' के 'इ' स्वर के बाद 'छेद' आने पर 'च्' का आगम होता है, जिससे 'परिच्छेद' बनता है।"
    },
    {
        question: "'विच्छेद' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "वि + छेद", correct: true },
            { text: "विच्छ + एद", correct: false },
            { text: "वि + च्छेद", correct: false },
            { text: "विच + छेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विच्छेद' का सही संधि विच्छेद 'वि + छेद' है, क्योंकि 'च्' का आगम 'वि' के 'इ' और 'छेद' के 'छ' के बीच होता है।"
    },
    {
        question: "'अनु + छेद' में कौन सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "वृद्धि संधि", correct: false },
            { text: "तुगागम संधि", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनु' के 'उ' स्वर के बाद 'छेद' आने पर 'च्' का आगम होता है, जो तुगागम संधि का नियम है।"
    },
    {
        question: "'वि + छिन्न' का संधि रूप है:",
        answers: shuffle([
            { text: "विछिन्न", correct: false },
            { text: "विच्छिन्न", correct: true },
            { text: "विछिन", correct: false },
            { text: "विचिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वि' के 'इ' स्वर के बाद 'छिन्न' आने पर 'च्' का आगम होता है, जिससे 'विच्छिन्न' बनता है।"
    },
    {
        question: "'तरु + छाया' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "तरुच्छाया", correct: true },
            { text: "तरुछाया", correct: false },
            { text: "तरुच्छया", correct: false },
            { text: "तरुछया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तरु' के 'उ' स्वर के बाद 'छाया' आने पर 'च्' का आगम होता है, जिससे 'तरुच्छाया' बनता है।"
    },
    {
        question: "'पत्र + छाया' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "पत्रछाया", correct: false },
            { text: "पत्रच्छाया", correct: true },
            { text: "पत्राछाय", correct: false },
            { text: "पत्रछया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पत्र' के 'अ' स्वर के बाद 'छाया' आने पर 'च्' का आगम होता है, जिससे 'पत्रच्छाया' बनता है।"
    },
    {
        question: "किस विकल्प में संधि विच्छेद सही नहीं है?",
        answers: shuffle([
            { text: "स्वच्छंद = स्व + छंद", correct: false },
            { text: "आच्छादन = आ + छादन", correct: false },
            { text: "अनुच्छेद = अनु + छेद", correct: false },
            { text: "परिच्छेद = परी + छेद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिच्छेद' का सही संधि विच्छेद 'परि + छेद' है, न कि 'परी + छेद'।<br><br><i class='fa-solid fa-angles-right icon'></i> 'परि' में ह्रस्व 'इ' स्वर होता है।"
    },
    {
        question: "'तुगागम संधि' किस संधि का एक भेद है?",
        answers: shuffle([
            { text: "स्वर संधि", correct: false },
            { text: "व्यंजन संधि", correct: true },
            { text: "विसर्ग संधि", correct: false },
            { text: "अयादि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुगागम संधि, जिसमें 'च्' का आगम होता है, व्यंजन संधि का ही एक उपभेद है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'छ' संबंधी नियम के नाम से भी जाना जाता है।"
    },
    {
        question: "'स्वच्छंद' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "स्वच्छ + छंद", correct: false },
            { text: "स्व + छंद", correct: true },
            { text: "स्वा + छंद", correct: false },
            { text: "स् + वच्छंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वच्छंद' का सही संधि विच्छेद 'स्व + छंद' है, क्योंकि 'स्व' के 'अ' स्वर के बाद 'छंद' आने पर 'च्' का आगम होता है।"
    },
    {
        question: "'संधि + छेद' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "संधच्छेद", correct: false },
            { text: "संछिछेद", correct: false },
            { text: "संधिच्छेद", correct: true },
            { text: "संधच्छद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संधि' के 'इ' स्वर के बाद 'छेद' आने पर 'च्' का आगम होता है, जिससे 'संधिच्छेद' बनता है।"
    },
    {
        question: "'अनु + छाया' का संधि रूप है:",
        answers: shuffle([
            { text: "अनुछाया", correct: false },
            { text: "अनुच्छाया", correct: true },
            { text: "अनुछया", correct: false },
            { text: "अनुचछाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनु' के 'उ' स्वर के बाद 'छाया' आने पर 'च्' का आगम होता है, जिससे 'अनुच्छाया' बनता है."
    },
    {
        question: "'नि + छेद' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "निछेद", correct: false },
            { text: "निचछेद", correct: false },
            { text: "निच्छेद", correct: true },
            { text: "निछे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नि' के 'इ' स्वर के बाद 'छेद' आने पर 'च्' का आगम होता है, जिससे 'निच्छेद' बनता है।"
    },
    {
        question: "'छत्रछाया' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "छत्र + छाया", correct: true },
            { text: "छत् + छाया", correct: false },
            { text: "छत्र + छाय", correct: false },
            { text: "छत्रछा + या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छत्र' के 'अ' स्वर और 'छाया' के 'छ' के बीच 'च्' का आगम होता है।"
    },
    {
        question: "'तुगागम' संधि का नियम क्या है?",
        answers: shuffle([
            { text: "स्वर के बाद 'छ' आने पर 'च्' का आगम", correct: true },
            { text: "'अ' के बाद 'आ' आने पर 'आ'", correct: false },
            { text: "'इ' के बाद 'इ' आने पर 'ई'", correct: false },
            { text: "'त्' के बाद 'श' आने पर 'च्'", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तुगागम संधि का मूल नियम है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब किसी स्वर के बाद 'छ' आता है, तो 'च्' का आगम होता है।"
    },
    {
        question: "'आच्छादन' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "आच + छादन", correct: false },
            { text: "आ + छादन", correct: true },
            { text: "आच्छ + आदन", correct: false },
            { text: "आ + छदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आ' के बाद 'छादन' आने पर 'च्' का आगम होता है।"
    },
    {
        question: "'वि + छिन्न' में कौन सी संधि है?",
        answers: shuffle([
            { text: "गुण संधि", correct: false },
            { text: "दीर्घ संधि", correct: false },
            { text: "तुगागम संधि", correct: true },
            { text: "यण संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वि' के 'इ' स्वर और 'छिन्न' के 'छ' के बीच 'च्' का आगम हुआ है।"
    },
    {
        question: "'स्व + छंद' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "स्वच्छंद", correct: true },
            { text: "स्वछंद", correct: false },
            { text: "स्वचन्द", correct: false },
            { text: "स्वछद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्व' के 'अ' स्वर के बाद 'छंद' आने पर 'च्' का आगम होता है।"
    },
    {
        question: "'तरुच्छाया' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "तरु + छाया", correct: true },
            { text: "तरुछ + आया", correct: false },
            { text: "तर + उच्छाय", correct: false },
            { text: "तरू + छाया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तरु' के 'उ' स्वर और 'छाया' के 'छ' के बीच 'च्' का आगम होता है।"
    },
    {
        question: "'अनुच्छेद' में 'च्' का आगम किस स्वर के कारण हुआ है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "इ", correct: false },
            { text: "उ", correct: true },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनु' के अंतिम स्वर 'उ' के बाद 'छेद' आने पर 'च्' का आगम हुआ है।"
    },
    {
        question: "'मुख + छवि' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "मुखछवि", correct: false },
            { text: "मुखचछवि", correct: false },
            { text: "मुखच्छवि", correct: true },
            { text: "मुखछव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मुख' के 'अ' स्वर के बाद 'छवि' आने पर 'च्' का आगम होता है, जिससे 'मुखच्छवि' बनता है।"
    },
    {
        question: "'परिच्छेद' शब्द में 'इ' के बाद किस वर्ण के आने पर 'च्' का आगम हुआ है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "इ", correct: false },
            { text: "उ", correct: false },
            { text: "छ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परि' के 'इ' के बाद 'छेद' के 'छ' आने पर 'च्' का आगम होता है।"
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