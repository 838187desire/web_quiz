const questions = [
    {
        topHeading: "अव्ययीभाव समास पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.20)"
    },
    {
        question: "'यथाशक्ति' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अव्ययीभाव समास में पहला पद (पूर्व पद) प्रधान होता है और वह अव्यय होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'यथाशक्ति' का विग्रह 'शक्ति के अनुसार' होता है, जिसमें 'यथा' अव्यय है।"
    },
    {
        question: "'आजन्म' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "जन्म तक", correct: true },
            { text: "जन्म के लिए", correct: false },
            { text: "जन्म से", correct: false },
            { text: "जन्म और मरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आजन्म' का विग्रह 'जन्म तक' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'आ' अव्यय है, जो 'तक' का अर्थ देता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द अव्ययीभाव समास का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "प्रतिदिन", correct: false },
            { text: "भरपेट", correct: false },
            { text: "राजपुत्र", correct: true },
            { text: "अनुरूप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राजपुत्र' का विग्रह 'राजा का पुत्र' होता है, जो तत्पुरुष समास का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी अव्ययीभाव समास के उदाहरण हैं।"
    },
    {
        question: "'निर्विवाद' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्विवाद' का विग्रह 'बिना विवाद के' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'निर्' उपसर्ग अव्यय की तरह प्रयुक्त हुआ है।"
    },
    {
        question: "'प्रत्येक' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्विगु", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रत्येक' का विग्रह 'एक-एक' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'प्रति' अव्यय है।"
    },
    {
        question: "किस विकल्प में अव्ययीभाव समास का सही उदाहरण है?",
        answers: shuffle([
            { text: "दाल-भात", correct: false },
            { text: "आजीवन", correct: true },
            { text: "रोगमुक्त", correct: false },
            { text: "त्रिलोक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आजीवन' का विग्रह 'जीवन भर' होता है, जिसमें 'आ' अव्यय है।"
    },
    {
        question: "'घर-घर' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "घर और घर", correct: false },
            { text: "घर के लिए घर", correct: false },
            { text: "प्रत्येक घर", correct: true },
            { text: "घर का घर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक ही शब्द की पुनरावृत्ति होती है, तो वहाँ अव्ययीभाव समास होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'घर-घर' का अर्थ 'प्रत्येक घर' होता है।"
    },
    {
        question: "'अनुरूप' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुरूप' का विग्रह 'रूप के योग्य' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अनु' उपसर्ग अव्यय की तरह प्रयुक्त हुआ है।"
    },
    {
        question: "अव्ययीभाव समास' की पहचान क्या है?",
        answers: shuffle([
            { text: "पहला पद संख्यावाचक होता है।", correct: false },
            { text: "दोनों पद प्रधान होते हैं।", correct: false },
            { text: "पहला पद प्रधान होता है और अव्यय होता है।", correct: true },
            { text: "तीसरा पद प्रधान होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अव्ययीभाव समास में पूर्व पद प्रधान होता है और वह अव्यय होता है, जिससे पूरा पद भी अव्यय बन जाता है।"
    },
    {
        question: "'यथासंभव' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथासंभव' का विग्रह 'जैसा संभव हो' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'यथा' अव्यय है।"
    },
    {
        question: "'प्रतिकूल' का सही समास विग्रह क्या है?",
        answers: shuffle([
            { text: "कूल के अनुसार", correct: false },
            { text: "कूल के विरुद्ध", correct: true },
            { text: "कूल और प्रति", correct: false },
            { text: "कूल का प्रतिकूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिकूल' का विग्रह 'कूल के विरुद्ध' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'प्रति' उपसर्ग अव्यय की तरह प्रयुक्त हुआ है।"
    },
    {
        question: "'आजीवन' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आजीवन' का विग्रह 'जीवन भर' होता है, जहाँ 'आ' अव्यय है।"
    },
    {
        question: "'हर-घड़ी' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर-घड़ी' का विग्रह 'प्रत्येक घड़ी' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'हर' उपसर्ग अव्यय की तरह प्रयुक्त हुआ है।"
    },
    {
        question: "'प्रतिदिन' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "दिन-दिन", correct: false },
            { text: "दिन के प्रति", correct: false },
            { text: "प्रत्येक दिन", correct: true },
            { text: "दिन और दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिदिन' का विग्रह 'प्रत्येक दिन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'प्रति' अव्यय है।"
    },
    {
        question: "'निडर' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "कर्मधारय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निडर' का विग्रह 'डर के बिना' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'नि' उपसर्ग अव्यय की तरह प्रयुक्त हुआ है।"
    },
    {
        question: "किस शब्द में अव्ययीभाव समास है?",
        answers: shuffle([
            { text: "यथाशक्ति", correct: true },
            { text: "देशभक्ति", correct: false },
            { text: "माता-पिता", correct: false },
            { text: "चौराहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथाशक्ति' का विग्रह 'शक्ति के अनुसार' होता है, जिसमें पहला पद अव्यय है।"
    },
    {
        question: "'भरपेट' का सही समास विग्रह है:",
        answers: shuffle([
            { text: "पेट को भर कर", correct: false },
            { text: "पेट भर", correct: true },
            { text: "पेट के लिए", correct: false },
            { text: "पेट और भर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भरपेट' का विग्रह 'पेट भर' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'भर' अव्यय की तरह प्रयुक्त हुआ है।"
    },
    {
        question: "'आजीवन' शब्द में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आजीवन' का विग्रह 'जीवन भर' होता है, जिसमें 'आ' अव्यय है।"
    },
    {
        question: "'अव्ययीभाव समास' में कौन सा पद प्रधान होता है?",
        answers: shuffle([
            { text: "पहला", correct: true },
            { text: "दूसरा", correct: false },
            { text: "दोनों", correct: false },
            { text: "कोई अन्य पद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अव्ययीभाव समास में पूर्व पद (पहला पद) प्रधान होता है।"
    },
    {
        question: "'यथाविधि' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्विगु", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथाविधि' का विग्रह 'विधि के अनुसार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'यथा' अव्यय है।"
    },
    {
        question: "'बेकाम' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेकाम' का विग्रह 'काम के बिना' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'बे' अव्यय है।"
    },
    {
        question: "'उपगंगा' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "गंगा के ऊपर", correct: false },
            { text: "गंगा के समीप", correct: true },
            { text: "गंगा का", correct: false },
            { text: "गंगा और उप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपगंगा' का विग्रह 'गंगा के समीप' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'उप' उपसर्ग अव्यय की तरह प्रयुक्त हुआ है।"
    },
    {
        question: "'रातोंरात' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रातोंरात' का विग्रह 'रात ही रात में' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अव्ययीभाव समास का उदाहरण है जहाँ एक ही शब्द की पुनरावृत्ति होती है।"
    },
    {
        question: "'बाकायदा' में कौन सा समास है?",
        answers: shuffle([
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बाकायदा' का विग्रह 'कायदे के साथ' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'बा' अव्यय है।"
    },
    {
        question: "'यथारुचि' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "रुचि के अनुसार", correct: true },
            { text: "रुचि और यथा", correct: false },
            { text: "रुचि जैसी", correct: false },
            { text: "रुचि के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथारुचि' का विग्रह 'रुचि के अनुसार' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'यथा' अव्यय है।"
    },
    {
        question: "'दिन-दिन' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "द्वंद्व", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्विगु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिन-दिन' का अर्थ 'प्रत्येक दिन' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ एक ही शब्द की पुनरावृत्ति है।"
    },
    {
        question: "'अकारण' में कौन सा समास है?",
        answers: shuffle([
            { text: "तत्पुरुष", correct: false },
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "द्वंद्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अकारण' का विग्रह 'बिना कारण के' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अ' उपसर्ग अव्यय की तरह प्रयुक्त हुआ है।"
    },
    {
        question: "'बेशक' का समास विग्रह क्या है?",
        answers: shuffle([
            { text: "शक के साथ", correct: false },
            { text: "बिना शक के", correct: true },
            { text: "शक और बे", correct: false },
            { text: "शक जैसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बेशक' का विग्रह 'बिना शक के' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'बे' अव्यय है।"
    },
    {
        question: "'अव्ययीभाव समास' की पहचान क्या है?",
        answers: shuffle([
            { text: "पहला पद संख्यावाचक होता है।", correct: false },
            { text: "दोनों पद प्रधान होते हैं।", correct: false },
            { text: "पहला पद प्रधान होता है और अव्यय होता है।", correct: true },
            { text: "तीसरा पद प्रधान होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अव्ययीभाव समास में पूर्व पद प्रधान होता है और वह अव्यय होता है, जिससे पूरा पद भी अव्यय बन जाता है।"
    },
    {
        question: "'यथोचित' में कौन सा समास है?",
        answers: shuffle([
            { text: "कर्मधारय", correct: false },
            { text: "अव्ययीभाव", correct: true },
            { text: "तत्पुरुष", correct: false },
            { text: "बहुव्रीहि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यथोचित' का विग्रह 'जैसा उचित हो' होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'यथा' अव्यय है।"
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