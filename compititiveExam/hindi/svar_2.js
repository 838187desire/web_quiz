const questions = [
    {
        topHeading: "स्वर पर आधारित 25 बहुविकल्पीय प्रश्न part 2 (quiz_no.4)"
    },
    {
        question: "जिस स्वर के उच्चारण में जीभ का अगला भाग काम करता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "अग्र स्वर", correct: true },
            { text: "मध्य स्वर", correct: false },
            { text: "पश्च स्वर", correct: false },
            { text: "ह्रस्व स्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्र स्वर हैं: इ, ई, ए, ऐ।"
    },
    {
        question: "जिस स्वर के उच्चारण में जीभ का बीच का भाग काम करता है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "अग्र स्वर", correct: false },
            { text: "मध्य स्वर", correct: true },
            { text: "पश्च स्वर", correct: false },
            { text: "दीर्घ स्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य स्वर केवल 'अ' है।"
    },
    {
        question: "'ए' स्वर का निर्माण किन दो स्वरों से होता है?",
        answers: shuffle([
            { text: "अ + अ", correct: false },
            { text: "अ + इ", correct: true },
            { text: "अ + उ", correct: false },
            { text: "इ + इ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ए' एक संयुक्त स्वर है जो 'अ' और 'इ' के योग से बनता है।"
    },
    {
        question: "'अनुनासिक' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "जिनके उच्चारण में केवल मुख से वायु निकले", correct: false },
            { text: "जिनके उच्चारण में मुख और नासिका दोनों से वायु निकले", correct: true },
            { text: "जिनके उच्चारण में केवल नासिका से वायु निकले", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनासिक स्वरों के ऊपर चंद्रबिंदु (ँ) लगाया जाता है, जैसे: आँख, चाँद।"
    },
    {
        question: "हिंदी में 'स्वर' कितने प्रकार के होते हैं (मात्रा के आधार पर)?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मात्रा के आधार पर स्वर तीन प्रकार के होते हैं: ह्रस्व, दीर्घ और प्लुत्।"
    },
    {
        question: "'जीभ की स्थिति' के आधार पर स्वरों के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीभ की स्थिति के आधार पर स्वर तीन प्रकार के होते हैं: अग्र स्वर, मध्य स्वर, और पश्च स्वर।"
    },
    {
        question: "'मुखाकृति' के आधार पर स्वरों के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुखाकृति के आधार पर स्वर चार प्रकार के होते हैं: विवृत, अर्ध-विवृत, संवृत, और अर्ध-संवृत।"
    },
    {
        question: "'ओष्ठों की स्थिति' के आधार पर स्वरों के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "दो", correct: true },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओष्ठों की स्थिति के आधार पर स्वर दो प्रकार के होते हैं: वर्तुल (गोलाकार) और अवर्तुल (गैर-गोलाकार)।"
    },
    {
        question: "'अ' को 'शहीद वर्ण' क्यों कहते हैं?",
        answers: shuffle([
            { text: "क्योंकि यह शब्द के अंत में आता है", correct: false },
            { text: "क्योंकि यह सभी व्यंजनों में मिला होता है", correct: true },
            { text: "क्योंकि यह एक स्वतंत्र वर्ण है", correct: false },
            { text: "क्योंकि यह सबसे पहले आता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अ' स्वर को 'शहीद वर्ण' कहा जाता है क्योंकि यह सभी व्यंजनों में निहित होता है और उसे पूर्ण रूप देता है।"
    },
    {
        question: "'ए' स्वर का निर्माण किन दो स्वरों से होता है?",
        answers: shuffle([
            { text: "अ + अ", correct: false },
            { text: "अ + इ", correct: true },
            { text: "अ + उ", correct: false },
            { text: "इ + इ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ए' एक संयुक्त स्वर है जो 'अ' और 'इ' के योग से बनता है।"
    },
    {
        question: "'ऐ' स्वर का निर्माण किन दो स्वरों से होता है?",
        answers: shuffle([
            { text: "अ + इ", correct: false },
            { text: "आ + इ", correct: false },
            { text: "अ + ए", correct: true },
            { text: "अ + ऐ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऐ' का निर्माण 'अ' और 'ए' के योग से होता है।"
    },
    {
        question: "हिंदी में स्वरों का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "मात्रा", correct: false },
            { text: "अक्ष", correct: true },
            { text: "व्यंजन", correct: false },
            { text: "अयोगवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वरों को 'अक्ष' भी कहा जाता है, जिसका अर्थ है 'जिसका क्षरण न हो'।"
    },
    {
        question: "निम्नलिखित में से कौन सा स्वर नहीं है?",
        answers: shuffle([
            { text: "आ", correct: false },
            { text: "ऋ", correct: false },
            { text: "ज्ञ", correct: true },
            { text: "औ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञ' एक संयुक्त व्यंजन है।"
    },
    {
        question: "'इ', 'ई', 'ए', 'ऐ' किस प्रकार के स्वर हैं?",
        answers: shuffle([
            { text: "पश्च स्वर", correct: false },
            { text: "अग्र स्वर", correct: true },
            { text: "मध्य स्वर", correct: false },
            { text: "अर्ध-विवृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन स्वरों के उच्चारण में जीभ का अगला भाग काम करता है।"
    },
    {
        question: "'अ' किस प्रकार का स्वर है?",
        answers: shuffle([
            { text: "अग्र स्वर", correct: false },
            { text: "पश्च स्वर", correct: false },
            { text: "मध्य स्वर", correct: true },
            { text: "संवृत स्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अ' एकमात्र ऐसा स्वर है जिसके उच्चारण में जीभ का मध्य भाग क्रियाशील होता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा स्वर 'सजातीय' है?",
        answers: shuffle([
            { text: "ए", correct: false },
            { text: "ओ", correct: false },
            { text: "आ", correct: true },
            { text: "औ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आ' का निर्माण 'अ' और 'अ' के मेल से होता है, इसलिए यह सजातीय है।"
    },
    {
        question: "निम्नलिखित में से कौन सा स्वर 'विजातीय' है?",
        answers: shuffle([
            { text: "ई", correct: false },
            { text: "उ", correct: false },
            { text: "ऐ", correct: true },
            { text: "ऋ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऐ' (अ + ए) दो अलग-अलग स्वरों के मेल से बनता है, इसलिए यह विजातीय है।"
    },
    {
        question: "'अनुनासिकता' का चिह्न क्या है?",
        answers: shuffle([
            { text: "चंद्रबिंदु (ँ)", correct: true },
            { text: "बिंदी (ं)", correct: false },
            { text: "विसर्ग (ः)", correct: false },
            { text: "हलंत (्)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनासिकता को दर्शाने के लिए चंद्रबिंदु का प्रयोग होता है, जैसे: चाँद, गाँव।"
    },
    {
        question: "'अनुस्वार' का चिह्न क्या है?",
        answers: shuffle([
            { text: "चंद्रबिंदु (ँ)", correct: false },
            { text: "बिंदी (ं)", correct: true },
            { text: "विसर्ग (ः)", correct: false },
            { text: "हलंत (्)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुस्वार को बिंदी से दर्शाया जाता है, जैसे: कंघा, जंगल।"
    },
    {
        question: "'अयोगवाह' वर्णों की संख्या कितनी है?",
        answers: shuffle([
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी में दो अयोगवाह वर्ण हैं: अनुस्वार (अं) और विसर्ग (अः)।"
    },
    {
        question: "'अ' स्वर को किसके साथ मिलाकर 'दीर्घ' स्वर नहीं बनाया जा सकता?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "इ", correct: false },
            { text: "उ", correct: false },
            { text: "ऋ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अ' को 'अ', 'इ' या 'उ' के साथ मिलाकर क्रमशः 'आ', 'ए' या 'ओ' बनाया जा सकता है, लेकिन 'ऋ' के साथ इसका मेल नहीं होता।"
    },
    {
        question: "जिस स्वर के उच्चारण में जीभ को कोई विशेष प्रयास नहीं करना पड़ता, वह कौन सा है?",
        answers: shuffle([
            { text: "आ", correct: false },
            { text: "इ", correct: false },
            { text: "अ", correct: true },
            { text: "ओ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अ' एक उदासीन स्वर है, जिसके उच्चारण में जीभ अपनी सामान्य स्थिति में रहती है।"
    },
    {
        question: "'औ' का निर्माण किन दो स्वरों के मेल से होता है?",
        answers: shuffle([
            { text: "अ + इ", correct: false },
            { text: "अ + ओ ", correct: true },
            { text: "आ + उ", correct: false },
            { text: "अ + अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'औ' का निर्माण 'अ + ओ' के मेल से होता है।"
    },
    {
        question: "'वर्तुल' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "अ, इ, ए", correct: false },
            { text: "आ, ई, ऐ", correct: false },
            { text: "उ, ऊ, ओ, औ", correct: true },
            { text: "अ, आ, ओ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन स्वरों के उच्चारण में होंठ गोल हो जाते हैं।"
    },
    {
        question: "'अवर्तुल' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "अ, आ, इ, ई, ए, ऐ, ऋ", correct: true },
            { text: "उ, ऊ, ओ, औ", correct: false },
            { text: "अ, आ, इ, उ", correct: false },
            { text: "ए, ऐ, ओ, औ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन स्वरों के उच्चारण में होंठ गोलाकार नहीं होते।"
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