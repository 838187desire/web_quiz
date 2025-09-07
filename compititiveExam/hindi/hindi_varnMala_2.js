const questions = [
    {
        topHeading: "हिंदी वर्णमाला आधारित 25 बहुविकल्पीय प्रश्न part 2 (quiz_no.2)"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण 'महाप्राण' है?",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "ग", correct: false },
            { text: "ख", correct: true },
            { text: "ड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाप्राण वर्णों के उच्चारण में अधिक वायु बाहर निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का दूसरा और चौथा वर्ण (ख, घ, छ, झ, ठ, ढ, थ, ध, फ, भ) महाप्राण होता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण 'अल्पप्राण' है?",
        answers: shuffle([
            { text: "घ", correct: false },
            { text: "झ", correct: false },
            { text: "ढ", correct: false },
            { text: "ग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्पप्राण वर्णों के उच्चारण में कम वायु बाहर निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का पहला, तीसरा और पांचवां वर्ण (क, ग, ङ, च, ज, ञ आदि) अल्पप्राण होता है।"
    },
    {
        question: "हिंदी वर्णमाला में 'स्पर्श व्यंजन' की संख्या कितनी है?",
        answers: shuffle([
            { text: "20", correct: false },
            { text: "25", correct: true },
            { text: "33", correct: false },
            { text: "39", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क' वर्ग से 'प' वर्ग तक के सभी 25 वर्ण स्पर्श व्यंजन कहलाते हैं।"
    },
    {
        question: "'अनुनासिक' ध्वनियों का सही उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "ग", correct: false },
            { text: "ङ", correct: true },
            { text: "स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुनासिक ध्वनियाँ वे हैं जिनका उच्चारण नाक और मुख दोनों से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये प्रत्येक वर्ग के पांचवें वर्ण (ङ, ञ, ण, न, म) होते हैं।"
    },
    {
        question: "'ह' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ह' एक कंठ्य व्यंजन है।"
    },
    {
        question: "'ए' और 'ऐ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: false },
            { text: "कंठ + तालु", correct: true },
            { text: "कंठ + ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ए' (अ + इ) और 'ऐ' (अ + ए) कंठ और तालु दोनों के सहयोग से उच्चरित होते हैं।"
    },
    {
        question: "'ओ' और 'औ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "ओष्ठ", correct: false },
            { text: "कंठ + तालु", correct: false },
            { text: "कंठ + ओष्ठ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओ' (अ + उ) और 'औ' (अ + ओ) कंठ और ओष्ठ के सहयोग से उच्चरित होते हैं।"
    },
    {
        question: "'व्यंजन' का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "परतंत्र", correct: true },
            { text: "स्वर", correct: false },
            { text: "स्वतंत्र", correct: false },
            { text: "अक्षर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यंजन वे वर्ण होते हैं जो स्वरों की सहायता के बिना नहीं बोले जा सकते, इसलिए इन्हें परतंत्र कहा जाता है।"
    },
    {
        question: "'र' का उच्चारण किस प्रकार का होता है?",
        answers: shuffle([
            { text: "पार्श्विक", correct: false },
            { text: "लुंठित", correct: true },
            { text: "उत्क्षिप्त", correct: false },
            { text: "संघर्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'र' के उच्चारण में जीभ तालु से लुढ़क कर आती है, इसलिए इसे लुंठित व्यंजन कहते हैं।"
    },
    {
        question: "'ल' का उच्चारण किस प्रकार का होता है?",
        answers: shuffle([
            { text: "पार्श्विक", correct: true },
            { text: "लुंठित", correct: false },
            { text: "उत्क्षिप्त", correct: false },
            { text: "संघर्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ल' के उच्चारण में हवा जीभ के बगल से निकलती है, इसलिए इसे पार्श्विक व्यंजन कहते हैं।"
    },
    {
        question: "'स', 'श', 'ष' किस प्रकार के व्यंजन हैं?",
        answers: shuffle([
            { text: "स्पर्शी", correct: false },
            { text: "संघर्षी", correct: true },
            { text: "लुंठित", correct: false },
            { text: "पार्श्विक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन्हें ऊष्म संघर्षी व्यंजन भी कहते हैं क्योंकि इनके उच्चारण में वायु मुख से संघर्ष करके बाहर निकलती है।"
    },
    {
        question: "हिंदी वर्णमाला में 'अघोष' वर्णों की कुल संख्या कितनी है?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "13", correct: true },
            { text: "15", correct: false },
            { text: "17", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का पहला और दूसरा वर्ण (25 में से 10) और तीनों 'स' (श, ष, स) अघोष होते हैं, इसलिए कुल संख्या 13 है।"
    },
    {
        question: "'घोष' वर्णों की कुल संख्या कितनी है?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "13", correct: false },
            { text: "20", correct: false },
            { text: "31", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी स्वर (11), प्रत्येक वर्ग का तीसरा, चौथा, पांचवां वर्ण (15), अंतःस्थ व्यंजन (4: य, र, ल, व) और 'ह' (1) मिलाकर कुल 31 घोष वर्ण होते हैं।"
    },
    {
        question: "'स' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: true },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स' का उच्चारण दांतों के सहयोग से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे दंत्य स भी कहते हैं।"
    },
    {
        question: "'अल्पप्राण' वर्णों की कुल संख्या कितनी है?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "14", correct: false },
            { text: "19", correct: false },
            { text: "30", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सभी स्वर (11), प्रत्येक वर्ग का पहला, तीसरा, पांचवां वर्ण (15), और अंतःस्थ व्यंजन (4: य, र, ल, व) मिलाकर कुल 30 अल्पप्राण वर्ण होते हैं।"
    },
    {
        question: "उच्चारण के आधार पर स्वरों के कितने भेद होते हैं?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्चारण के आधार पर स्वरों के तीन भेद हैं: ह्रस्व, दीर्घ और प्लुत।"
    },
    {
        question: "'श्र' संयुक्त व्यंजन किन दो वर्णों से मिलकर बना है?",
        answers: shuffle([
            { text: "श् + र", correct: true },
            { text: "स + र", correct: false },
            { text: "ष + र", correct: false },
            { text: "श + र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्र' का निर्माण श् और र के मेल से होता है।"
    },
    {
        question: "हिंदी वर्णमाला में 'न', 'ण', 'ञ', 'म', 'ङ' किस प्रकार के व्यंजन हैं?",
        answers: shuffle([
            { text: "स्पर्श", correct: false },
            { text: "अनुनासिक", correct: true },
            { text: "संयुक्त", correct: false },
            { text: "ऊष्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी वर्णों के अंतिम पंचमाक्षर हैं जिनका उच्चारण नाक से होता है।"
    },
    {
        question: "'अ' और 'आ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: true },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनका उच्चारण कंठ से होता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण 'दंत्य' है?",
        answers: shuffle([
            { text: "प", correct: false },
            { text: "त", correct: true },
            { text: "च", correct: false },
            { text: "ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त' का उच्चारण जीभ के दांतों को छूने पर होता है।"
    },
    {
        question: "'ष' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: true },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ष' का उच्चारण मूर्धा से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे मूर्धन्य श भी कहते हैं।"
    },
    {
        question: "'स' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: true },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स' का उच्चारण दांतों के सहयोग से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे दंत्य स भी कहते हैं।"
    },
    {
        question: "'श' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श' का उच्चारण तालु के सहयोग से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे तालव्य श भी कहते हैं।"
    },
    {
        question: "'ह' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ह' एक कंठ्य व्यंजन है।"
    },
    {
        question: "'ज्ञ' किन दो वर्णों के मेल से बना है?",
        answers: shuffle([
            { text: "ग् + ञ", correct: false },
            { text: "ज् + ञ", correct: true },
            { text: "ज + य", correct: false },
            { text: "ग् + य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञ' का सही उच्चारण 'ज्' और 'ञ' के मेल से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, हिंदी भाषी क्षेत्रों में इसे 'ग्य' उच्चारित किया जाता है।"
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