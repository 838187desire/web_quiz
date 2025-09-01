const questions = [
    {
        topHeading: "श्चुत्व संधि पर आधारित 27 बहुविकल्पीय प्रश्न (quiz_no.12)"
    },
    {
        question: "'सत् + चित्' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "सच्चित", correct: true },
            { text: "सचचित", correct: false },
            { text: "सत्चित्", correct: false },
            { text: "सचिचत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्चुत्व संधि के नियम के अनुसार, जब 'स्' या 'त-वर्ग' (त्, थ्, द्, ध्, न्) के बाद 'श्' या 'च-वर्ग' (च्, छ्, ज्, झ्, ञ्) आता है, तो 'स्' का 'श्' और 'त-वर्ग' का 'च-वर्ग' हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'सत्' के 'त्' के बाद 'चित्' का 'च्' आने पर 'त्' का 'च्' हो जाता है, जिससे 'सच्चित' बनता है।"
    },
    {
        question: "'उत् + चारण' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "उच्चारन", correct: false },
            { text: "उच्चारण", correct: true },
            { text: "उत्चारण", correct: false },
            { text: "उच्चरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्' के 'त्' के बाद 'चारण' का 'च्' आने पर 'त्' का 'च्' हो जाता है, जिससे 'उच्चारण' बनता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द श्चुत्व संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "सच्चरित्र", correct: false },
            { text: "सज्जन", correct: false },
            { text: "जगदीश", correct: true },
            { text: "शरच्चंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगदीश' शब्द 'जगत् + ईश' से मिलकर बना है, जो जश्त्व संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द श्चुत्व संधि के उदाहरण हैं।"
    },
    {
        question: "'रामस् + शेते' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "रामश्शेते", correct: true },
            { text: "रामसशेते", correct: false },
            { text: "रामशेते", correct: false },
            { text: "रामश्सेते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्चुत्व संधि के नियम के अनुसार, 'स्' के बाद 'श्' आने पर 'स्' का 'श्' हो जाता है, जिससे 'रामश्शेते' बनता है।"
    },
    {
        question: "'शरत् + चंद्र' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "शरच्चंद्र", correct: true },
            { text: "शरदचंद्र", correct: false },
            { text: "शरत्चंद्र", correct: false },
            { text: "शरतचंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शरत्' के 'त्' के बाद 'चंद्र' का 'च्' आने पर 'त्' का 'च्' हो जाता है, जिससे 'शरच्चंद्र' बनता है।"
    },
    {
        question: "किस विकल्प में 'श्चुत्व संधि' का सही उदाहरण है?",
        answers: shuffle([
            { text: "वाक् + ईश = वागीश", correct: false },
            { text: "सत् + जन = सज्जन", correct: true },
            { text: "तत् + लीन = तल्लीन", correct: false },
            { text: "मनः + हर = मनोहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह श्चुत्व संधि का सही उदाहरण है, जहाँ 'सत्' के 'त्' के बाद 'जन' का 'ज्' आने पर 'त्' का 'ज्' हो गया है।"
    },
    {
        question: "'पश्चात् + च्युत' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "पश्चात्च्युत", correct: false },
            { text: "पश्चाच्च्युत", correct: true },
            { text: "पश्चात्युत", correct: false },
            { text: "पश्चात्च्यत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पश्चात्' के 'त्' के बाद 'च्युत' का 'च्' आने पर 'त्' का 'च्' हो जाता है, जिससे 'पश्चाच्च्युत' बनता है।"
    },
    {
        question: "'सत् + चरित्र' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "सचचरित्र", correct: false },
            { text: "सच्चरित्र", correct: true },
            { text: "सतचरित्र", correct: false },
            { text: "सच्चारित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्' के 'त्' के बाद 'चरित्र' का 'च्' आने पर 'त्' का 'च्' हो जाता है, जिससे 'सच्चरित्र' बनता है।"
    },
    {
        question: "'जगत् + जननी' के मेल से कौन सा शब्द बनता है?",
        answers: shuffle([
            { text: "जगज्जननी", correct: true },
            { text: "जगत्जननी", correct: false },
            { text: "जगज्जनी", correct: false },
            { text: "जगतजननी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगत्' के 'त्' के बाद 'जननी' का 'ज्' आने पर 'त्' का 'ज्' हो जाता है, जिससे 'जगज्जननी' बनता है।"
    },
    {
        question: "'विपत् + जाल' की संधि है:",
        answers: shuffle([
            { text: "विपजजाल", correct: false },
            { text: "विपतजाल", correct: false },
            { text: "विपज्जाल", correct: true },
            { text: "विपजजल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विपत्' के 'त्' के बाद 'जाल' का 'ज्' आने पर 'त्' का 'ज्' हो जाता है, जिससे 'विपज्जाल' बनता है।"
    },
    {
        question: "'उच्चारण' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "उच्च + रण", correct: false },
            { text: "उत् + चारण", correct: true },
            { text: "उच + चारण", correct: false },
            { text: "उ + चारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उच्चारण' का सही संधि विच्छेद 'उत् + चारण' है, क्योंकि 'त्' के बाद 'च्' आने पर 'त्' का 'च्' हो जाता है।"
    },
    {
        question: "'विपत् + जाल' में कौन सी संधि है?",
        answers: shuffle([
            { text: "जश्त्व संधि", correct: false },
            { text: "श्चुत्व संधि", correct: true },
            { text: "ष्टुत्व संधि", correct: false },
            { text: "अनुस्वार संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'त्' के बाद 'ज्' आने पर 'त्' का 'ज्' हुआ है, जो श्चुत्व संधि का नियम है।"
    },
    {
        question: "'कश्चित्' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "क + चित्", correct: false },
            { text: "कस् + चित्", correct: true },
            { text: "कच् + चित्", correct: false },
            { text: "कष + चित्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कस्' के 'स्' के बाद 'चित्' का 'च्' आने पर 'स्' का 'श्' हो जाता है, जिससे 'कश्चित्' बनता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द श्चुत्व संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "सच्चरित्र", correct: false },
            { text: "सज्जन", correct: false },
            { text: "जगदीश", correct: true },
            { text: "शरच्चंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगदीश' शब्द 'जगत् + ईश' से मिलकर बना है, जो जश्त्व संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द श्चुत्व संधि के उदाहरण हैं।"
    },
    {
        question: "'सज्जन' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "सज् + जन", correct: false },
            { text: "सत् + जन", correct: true },
            { text: "स + ज्जन", correct: false },
            { text: "सज + जन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्चुत्व संधि के अनुसार, 'सत्' के 'त्' के बाद 'जन' का 'ज्' आने पर 'त्' का 'ज्' हो जाता है, जिससे 'सज्जन' बनता है।"
    },
    {
        question: "किस विकल्प में संधि विच्छेद सही नहीं है?",
        answers: shuffle([
            { text: "शरच्चंद्र = शरत् + चंद्र", correct: false },
            { text: "सच्चरित्र = सत् + चरित्र", correct: false },
            { text: "सच्चिदानंद = सत् + चित् + आनंद", correct: false },
            { text: "विपज्जाल = विपत् + जाल्", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विपज्जाल' का सही संधि विच्छेद 'विपत् + जाल' है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'जाल्' गलत है।"
    },
    {
        question: "'श्चुत्व संधि' में 'त्' का परिवर्तन किसमें होता है?",
        answers: shuffle([
            { text: "'च्' में", correct: false },
            { text: "'ज्' में", correct: false },
            { text: "'श्' में", correct: false },
            { text: "'अ' और 'ब' दोनों में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्' के बाद 'च्' आने पर 'त्' का 'च्' होता है और 'त्' के बाद 'ज्' आने पर 'त्' का 'ज्' होता है।"
    },
    {
        question: "'कश्चित' शब्द का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "क + श्चित्", correct: false },
            { text: "कश् + चित्", correct: false },
            { text: "कस् + चित्", correct: true },
            { text: "कश्च + इत्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्चुत्व संधि के नियम के अनुसार, 'स्' के बाद 'च्' आने पर 'स्' का 'श्' हो जाता है।"
    },
    {
        question: "'उत् + ज्वल' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "उज्ज्वल", correct: true },
            { text: "उत्ज्वल", correct: false },
            { text: "उज्जल", correct: false },
            { text: "उज्वाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्' के 'त्' के बाद 'ज्वल' का 'ज्' आने पर 'त्' का 'ज्' हो जाता है, जिससे 'उज्ज्वल' बनता है।"
    },
    {
        question: "'यावत् + जीवनम्' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "यावज्जीवनम्", correct: true },
            { text: "यावतजीवनम्", correct: false },
            { text: "यवज्जीवनम्", correct: false },
            { text: "यावजीवनम्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यावत्' के 'त्' के बाद 'जीवनम्' का 'ज्' आने पर 'त्' का 'ज्' हो जाता है, जिससे 'यावज्जीवनम्' बनता है।"
    },
    {
        question: "'जगत् + छाया' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "जगच्छाया", correct: true },
            { text: "जगत्छाया", correct: false },
            { text: "जगत्छछाया", correct: false },
            { text: "जगच्छया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगत्' के 'त्' के बाद 'छाया' का 'छ' आने पर 'त्' का 'च्' हो जाता है, जिससे 'जगच्छाया' बनता है।"
    },
    {
        question: "'विपत् + शंका' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "विपच्छंका", correct: true },
            { text: "विपच्छं", correct: false },
            { text: "विपतशंका", correct: false },
            { text: "विपच्छका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विपत्' के 'त्' के बाद 'शंका' का 'श्' आने पर 'त्' का 'च्' और 'श्' का 'श्' होता है, जिससे 'विपच्छंका' बनता है।"
    },
    {
        question: "'सत् + चित् + आनंद' की संधि क्या होगी?",
        answers: shuffle([
            { text: "सच्चिदानंद", correct: true },
            { text: "सचित्तानंद", correct: false },
            { text: "सत्चिदानंद", correct: false },
            { text: "सच्चिदानद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ दो संधियाँ हुई हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पहले 'सत् + चित्' से 'सच्चित्' (श्चुत्व संधि), फिर 'सच्चित् + आनंद' से 'सच्चिदानंद' (जश्त्व संधि)।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द श्चुत्व संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "सच्चरित्र", correct: false },
            { text: "सज्जन", correct: false },
            { text: "जगदीश", correct: true },
            { text: "शरच्चंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगदीश' शब्द 'जगत् + ईश' से मिलकर बना है, जो जश्त्व संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द श्चुत्व संधि के उदाहरण हैं।"
    },
    {
        question: "'जगत् + जननी' में कौन सी संधि है?",
        answers: shuffle([
            { text: "श्चुत्व संधि", correct: true },
            { text: "जश्त्व संधि", correct: false },
            { text: "अनुनासिक संधि", correct: false },
            { text: "व्यंजन संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहाँ 'त्' के बाद 'ज्' आने पर 'त्' का 'ज्' हुआ है, जो श्चुत्व संधि का नियम है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे व्यंजन संधि का एक प्रकार भी कहा जा सकता है।"
    },
    {
        question: "'सच्छिष्य' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "सच + शिष्य", correct: false },
            { text: "सत + शिष्य", correct: false },
            { text: "सच् + शिष्य", correct: false },
            { text: "सत् + शिष्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्' के 'त्' के बाद 'शिष्य' का 'श्' आने पर 'त्' का 'च्' और 'श्' का 'श्' हो जाता है, जिससे 'सच्छिष्य' बनता है।"
    },
    {
        question: "'एतत् + श्रुत्वा' का सही संधि रूप है:",
        answers: shuffle([
            { text: "एतच्छ्रुत्वा", correct: true },
            { text: "एतश्रुत्वा", correct: false },
            { text: "एतत्श्रुत्वा", correct: false },
            { text: "एतच्छरूत्वा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एतत्' के 'त्' के बाद 'श्रुत्वा' का 'श्' आने पर 'त्' का 'च्' और 'श्' का 'श्' हो जाता है, जिससे 'एतच्छ्रुत्वा' बनता है।"
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