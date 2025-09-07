const questions = [
    {
        topHeading: "व्यंजन पर आधारित 25 बहुविकल्पीय प्रश्न part 1 (quiz_no.5)"
    },
    {
        question: "व्यंजन किसे कहते हैं?",
        answers: shuffle([
            { text: "जो स्वतंत्र रूप से बोले जाते हैं", correct: false },
            { text: "जो स्वरों की सहायता से बोले जाते हैं", correct: true },
            { text: "जो केवल नाक से बोले जाते हैं", correct: false },
            { text: "जो बिना किसी अवरोध के बोले जाते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यंजन वे वर्ण हैं जिनका उच्चारण करने के लिए स्वरों की सहायता लेनी पड़ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> हर व्यंजन में 'अ' स्वर निहित होता है।"
    },
    {
        question: "हिंदी वर्णमाला में मूल व्यंजनों की संख्या कितनी है?",
        answers: shuffle([
            { text: "30", correct: false },
            { text: "33", correct: true },
            { text: "35", correct: false },
            { text: "39", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी में कुल 33 मूल व्यंजन हैं, जिनमें 25 स्पर्श, 4 अंतःस्थ और 4 ऊष्म व्यंजन शामिल हैं।"
    },
    {
        question: "'क', 'ख', 'ग', 'घ', 'ङ' किस वर्ग के व्यंजन हैं?",
        answers: shuffle([
            { text: "च वर्ग", correct: false },
            { text: "ट वर्ग", correct: false },
            { text: "त वर्ग", correct: false },
            { text: "क वर्ग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन्हें 'क वर्ग' या 'कंठ्य व्यंजन' भी कहते हैं क्योंकि इनका उच्चारण कंठ से होता है।"
    },
    {
        question: "'च', 'छ', 'ज', 'झ', 'ञ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन व्यंजनों का उच्चारण करते समय जीभ का मध्य भाग तालु से स्पर्श करता है।"
    },
    {
        question: "'ट', 'ठ', 'ड', 'ढ', 'ण' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: true },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनका उच्चारण जीभ के मूर्धा से स्पर्श होने पर होता है।"
    },
    {
        question: "'प', 'फ', 'ब', 'भ', 'म' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "कंठ", correct: false },
            { text: "ओष्ठ", correct: true },
            { text: "तालु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन व्यंजनों का उच्चारण दोनों होंठों के स्पर्श से होता है।"
    },
    {
        question: "'य', 'र', 'ल', 'व' को किस श्रेणी में रखा जाता है?",
        answers: shuffle([
            { text: "स्पर्श व्यंजन", correct: false },
            { text: "ऊष्म व्यंजन", correct: false },
            { text: "अंतःस्थ व्यंजन", correct: true },
            { text: "संयुक्त व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनका उच्चारण स्वर और व्यंजन के मध्य का प्रतीत होता है।"
    },
    {
        question: "'श', 'ष', 'स', 'ह' को किस श्रेणी में रखा जाता है?",
        answers: shuffle([
            { text: "अंतःस्थ व्यंजन", correct: false },
            { text: "स्पर्श व्यंजन", correct: false },
            { text: "ऊष्म व्यंजन", correct: true },
            { text: "संयुक्त व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन व्यंजनों का उच्चारण करते समय वायु मुख में रगड़ खाकर निकलती है, जिससे गर्मी (ऊष्मा) उत्पन्न होती है।"
    },
    {
        question: "हिंदी वर्णमाला में कुल कितने स्पर्श व्यंजन हैं?",
        answers: shuffle([
            { text: "20", correct: false },
            { text: "25", correct: true },
            { text: "30", correct: false },
            { text: "33", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क' वर्ग से 'प' वर्ग तक के सभी 25 व्यंजन स्पर्श व्यंजन कहलाते हैं।"
    },
    {
        question: "'क्ष', 'त्र', 'ज्ञ', 'श्र' किस प्रकार के व्यंजन हैं?",
        answers: shuffle([
            { text: "द्विगुण व्यंजन", correct: false },
            { text: "ऊष्म व्यंजन", correct: false },
            { text: "संयुक्त व्यंजन", correct: true },
            { text: "अंतःस्थ व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दो या दो से अधिक व्यंजनों के मेल से बने हैं।"
    },
    {
        question: "'ज्ञ' किन दो वर्णों के मेल से बना है?",
        answers: shuffle([
            { text: "ग् + ञ", correct: false },
            { text: "ज + ञ", correct: true },
            { text: "ग + ञ", correct: false },
            { text: "ज + न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञ' का सही विच्छेद 'ज् + ञ' है।"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण 'अघोष' है?",
        answers: shuffle([
            { text: "ग", correct: false },
            { text: "ज", correct: false },
            { text: "क", correct: true },
            { text: "द", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अघोष व्यंजन वे हैं जिनके उच्चारण में स्वर तंत्रियों में कंपन नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का पहला और दूसरा वर्ण अघोष होता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण 'घोष' (सघोष) है?",
        answers: shuffle([
            { text: "च", correct: false },
            { text: "ट", correct: false },
            { text: "थ", correct: false },
            { text: "ज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घोष व्यंजन वे हैं जिनके उच्चारण में स्वर तंत्रियों में कंपन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का तीसरा, चौथा और पाँचवाँ वर्ण घोष होता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण 'अल्पप्राण' है?",
        answers: shuffle([
            { text: "ख", correct: false },
            { text: "घ", correct: false },
            { text: "ग", correct: true },
            { text: "झ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अल्पप्राण व्यंजन वे हैं जिनके उच्चारण में कम वायु निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का पहला, तीसरा और पाँचवाँ वर्ण अल्पप्राण होता है।"
    },
    {
        question: "'र' को किस प्रकार का व्यंजन माना जाता है?",
        answers: shuffle([
            { text: "पार्श्विक", correct: false },
            { text: "लुंठित", correct: true },
            { text: "उत्क्षिप्त", correct: false },
            { text: "संघर्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'र' के उच्चारण में जीभ तालु से लुढ़कती है, इसलिए इसे लुंठित व्यंजन कहते हैं।"
    },
    {
        question: "'ल' को किस प्रकार का व्यंजन माना जाता है?",
        answers: shuffle([
            { text: "लुंठित", correct: false },
            { text: "पार्श्विक", correct: true },
            { text: "उत्क्षिप्त", correct: false },
            { text: "संघर्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ल' के उच्चारण में वायु जीभ के बगल से बाहर निकलती है, इसलिए इसे पार्श्विक व्यंजन कहते हैं।"
    },
    {
        question: "'व' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false },
            { text: "दंत + ओष्ठ", correct: true },
            { text: "कंठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व' का उच्चारण करते समय जीभ दांतों को छूती है और होंठों का भी प्रयोग होता है, इसलिए इसे दंत्योष्ठ्य कहते हैं।"
    },
    {
        question: "'क्ष' किन दो वर्णों के मेल से बना है?",
        answers: shuffle([
            { text: "क् + ष", correct: true },
            { text: "क् + स", correct: false },
            { text: "च् + छ", correct: false },
            { text: "श् + र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्ष' का सही विच्छेद 'क् + ष' है।"
    },
    {
        question: "'श्र' किन दो वर्णों के मेल से बना है?",
        answers: shuffle([
            { text: "स + र", correct: false },
            { text: "श् + र", correct: true },
            { text: "ष + र", correct: false },
            { text: "ज्ञ + र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'श्र' का सही विच्छेद 'श् + र' है।"
    },
    {
        question: "'त्र' किन दो वर्णों के मेल से बना है?",
        answers: shuffle([
            { text: "त + र", correct: false },
            { text: "त्र + अ", correct: false },
            { text: "त् + र", correct: true },
            { text: "ट् + र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्र' का सही विच्छेद 'त् + र' है।"
    },
    {
        question: "'ण' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: true },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ण' एक मूर्धन्य व्यंजन है।"
    },
    {
        question: "'न' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: true },
            { text: "कंठ", correct: false },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'न' का उच्चारण जीभ के दांतों को छूने पर होता है।"
    },
    {
        question: "'म' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "कंठ", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "ओष्ठ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म' का उच्चारण ओष्ठ (होंठों) के स्पर्श से होता है।"
    },
    {
        question: "'ङ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: true },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ङ' का उच्चारण कंठ से होता है और यह अनुनासिक भी है।"
    },
    {
        question: "'ञ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ञ' का उच्चारण तालु से होता है और यह अनुनासिक भी है।"
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
