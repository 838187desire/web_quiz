const questions = [
    {
        topHeading: "व्यंजन पर आधारित 20 बहुविकल्पीय प्रश्न part 2 (quiz_no.6)"
    },
    {
        question: "'अनुनासिक' व्यंजन कौन से हैं?",
        answers: shuffle([
            { text: "जिनका उच्चारण केवल मुख से हो", correct: false },
            { text: "जिनका उच्चारण मुख और नाक दोनों से हो", correct: true },
            { text: "जिनका उच्चारण केवल नाक से हो", correct: false },
            { text: "जो स्वतंत्र रूप से बोले जाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का पाँचवाँ वर्ण (ङ, ञ, ण, न, म) अनुनासिक व्यंजन कहलाता है।"
    },
    {
        question: "हिंदी में 'संघर्षी' व्यंजन कौन से हैं?",
        answers: shuffle([
            { text: "य, र, ल, व", correct: false },
            { text: "श, ष, स, ह", correct: true },
            { text: "क्, च्, ट्, त्", correct: false },
            { text: "क, ख, ग, घ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन व्यंजनों के उच्चारण में वायु रगड़ खाकर बाहर निकलती है, इसलिए इन्हें ऊष्म संघर्षी व्यंजन भी कहते हैं।"
    },
    {
        question: "'ष' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: true },
            { text: "दंत", correct: false },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ष' का उच्चारण मूर्धा से होता है, इसलिए इसे मूर्धन्य 'ष' भी कहते हैं।"
    },
    {
        question: "'स' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "मूर्धा", correct: false },
            { text: "तालु", correct: false },
            { text: "दंत", correct: true },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स' का उच्चारण दंत से होता है, इसलिए इसे दंत्य 'स' भी कहते हैं।"
    },
    {
        question: "'श' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श' का उच्चारण तालु से होता है, इसलिए इसे तालव्य 'श' भी कहते हैं。"
    },
    {
        question: "'ह' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false },
            { text: "कंठ", correct: true },
            { text: "तालु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ह' एक कंठ्य व्यंजन है।"
    },
    {
        question: "'अघोष' वर्णों की कुल संख्या कितनी है?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "13", correct: true },
            { text: "15", correct: false },
            { text: "17", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग के पहले और दूसरे व्यंजन (10) + श, ष, स (3) = कुल 13 अघोष व्यंजन।"
    },
    {
        question: "'क', 'ख', 'ग', 'घ', 'ङ' किस वर्ग के व्यंजन हैं?",
        answers: shuffle([
            { text: "च वर्ग", correct: false },
            { text: "ट वर्ग", correct: false },
            { text: "क वर्ग ", correct: true },
            { text: "त वर्ग ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन्हें 'क वर्ग' या 'कंठ्य व्यंजन' भी कहते हैं क्योंकि इनका उच्चारण कंठ से होता है।"
    },
    {
        question: "'संयुक्त व्यंजन' वे होते हैं जो...",
        answers: shuffle([
            { text: "दो समान व्यंजनों से मिलकर बनते हैं", correct: false },
            { text: "दो अलग-अलग व्यंजनों से मिलकर बनते हैं", correct: true },
            { text: "एक व्यंजन और एक स्वर से मिलकर बनते हैं", correct: false },
            { text: "एक ही व्यंजन का दोहराव होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त व्यंजन दो भिन्न व्यंजनों के मेल से बनते हैं।"
    },
    {
        question: "'द्वितीय व्यंजन' (द्वित्व व्यंजन) का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "क्ष", correct: false },
            { text: "बच्चा", correct: true },
            { text: "य", correct: false },
            { text: "ट्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्वितीय व्यंजन तब बनता है जब एक ही व्यंजन दो बार प्रयोग हो, जैसे 'च' का 'च्च'।"
    },
    {
        question: "'क', 'ख', 'ग', 'घ' में 'अघोष महाप्राण' व्यंजन कौन सा है?",
        answers: shuffle([
            { text: "क", correct: false },
            { text: "ख", correct: true },
            { text: "ग", correct: false },
            { text: "घ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ख' अघोष है (वर्ग का दूसरा वर्ण) और महाप्राण भी है (अधिक वायु)।"
    },
    {
        question: "'च', 'छ', 'ज', 'झ' में 'घोष महाप्राण' व्यंजन कौन सा है?",
        answers: shuffle([
            { text: "च", correct: false },
            { text: "छ", correct: false },
            { text: "ज", correct: false },
            { text: "झ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'झ' घोष है (वर्ग का चौथा वर्ण) और महाप्राण भी है (अधिक वायु)।"
    },
    {
        question: "'घ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "तालु", correct: false },
            { text: "कंठ", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घ' कंठ्य व्यंजन है।"
    },
    {
        question: "'ध' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: true },
            { text: "ओष्ठ", correct: false },
            { text: "कंठ", correct: false },
            { text: "तालु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ध' दंत्य व्यंजन है।"
    },
    {
        question: "'फ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: true },
            { text: "कंठ", correct: false },
            { text: "मूर्धा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फ' ओष्ठ्य व्यंजन है।"
    },
    {
        question: "हिंदी में 'ह' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "मूर्धा", correct: false },
            { text: "तालु", correct: false },
            { text: "कंठ", correct: true },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ह' को कंठ्य व्यंजन माना जाता है और इसे 'काकल्य' वर्ण भी कहते हैं।"
    },
    {
        question: "'अघोष अल्पप्राण' व्यंजन कौन सा है?",
        answers: shuffle([
            { text: "ग", correct: false },
            { text: "ज", correct: false },
            { text: "क", correct: true },
            { text: "ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क' अघोष है (पहला वर्ण) और अल्पप्राण भी है (कम वायु)।"
    },
    {
        question: "'घोष अल्पप्राण' व्यंजन कौन सा है?",
        answers: shuffle([
            { text: "ख", correct: false },
            { text: "ग", correct: true },
            { text: "झ", correct: false },
            { text: "ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ग' घोष है (तीसरा वर्ण) और अल्पप्राण भी है (कम वायु)।"
    },
    {
        question: "'य' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'य' का उच्चारण तालु से होता है, इसलिए इसे तालव्य व्यंजन भी कहते हैं।"
    },
    {
        question: "'व' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false },
            { text: "कंठ", correct: false },
            { text: "दंत + ओष्ठ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व' एक दंत्योष्ठ्य व्यंजन है।"
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