const questions = [
    {
        topHeading: "हिंदी वर्णमाला पर आधारित 25 बहुविकल्पीय प्रश्न part 1 (quiz_no.1)"
    },
    {
        question: "भाषा की सबसे छोटी इकाई क्या है?",
        answers: shuffle([
            { text: "शब्द", correct: false },
            { text: "व्यंजन", correct: false },
            { text: "स्वर", correct: false },
            { text: "वर्ण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्ण भाषा की सबसे छोटी इकाई है जिसके और टुकड़े नहीं किए जा सकते।"
    },
    {
        question: "हिंदी वर्णमाला में कुल कितने वर्ण हैं?",
        answers: shuffle([
            { text: "48", correct: false },
            { text: "50", correct: false },
            { text: "52", correct: true },
            { text: "56", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी वर्णमाला में कुल 52 वर्ण होते हैं, जिनमें 11 स्वर, 33 व्यंजन, 2 अयोगवाह, 4 संयुक्त व्यंजन और 2 द्विगुण व्यंजन शामिल हैं।"
    },
    {
        question: "हिंदी में स्वरों की कुल संख्या कितनी है?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false },
            { text: "13", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी में कुल 11 स्वर हैं: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ।"
    },
    {
        question: "'क्ष', 'त्र', 'ज्ञ' और 'श्र' किस प्रकार के वर्ण हैं?",
        answers: shuffle([
            { text: "संयुक्त व्यंजन", correct: true },
            { text: "द्विगुण व्यंजन", correct: false },
            { text: "ऊष्म व्यंजन", correct: false },
            { text: "अंतःस्थ व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दो या दो से अधिक व्यंजनों के मेल से बने हैं, जैसे: क्ष (क् + ष), त्र (त् + र), ज्ञ (ज् + ञ), श्र (श् + र)।"
    },
    {
        question: "'अं' और 'अः' को क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्वर", correct: false },
            { text: "व्यंजन", correct: false },
            { text: "अयोगवाह", correct: true },
            { text: "संयुक्त व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये न तो स्वर हैं और न ही व्यंजन, लेकिन दोनों के साथ मिलकर इनका प्रयोग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अं' को अनुस्वार और 'अः' को विसर्ग कहते हैं।"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण ऊष्म व्यंजन है?",
        answers: shuffle([
            { text: "य", correct: false },
            { text: "र", correct: false },
            { text: "स", correct: true },
            { text: "ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊष्म व्यंजन वे होते हैं जिनका उच्चारण करते समय मुख से गर्म वायु निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये हैं: श, ष, स, ह।"
    },
    {
        question: "हिंदी वर्णमाला में मूल व्यंजनों की संख्या कितनी है?",
        answers: shuffle([
            { text: "33", correct: true },
            { text: "35", correct: false },
            { text: "39", correct: false },
            { text: "44", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी में कुल 33 मूल व्यंजन हैं, जिनमें स्पर्श, अंतःस्थ और ऊष्म व्यंजन शामिल हैं।"
    },
    {
        question: "निम्नलिखित में से कौन सा स्वर 'ह्रस्व' (लघु) स्वर है?",
        answers: shuffle([
            { text: "आ", correct: false },
            { text: "ई", correct: false },
            { text: "ऊ", correct: false },
            { text: "इ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व स्वर वे होते हैं जिनके उच्चारण में कम समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये हैं: अ, इ, उ, ऋ।"
    },
    {
        question: "'श', 'ष', 'स', 'ह' व्यंजनों को क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्पर्श व्यंजन", correct: false },
            { text: "अंतःस्थ व्यंजन", correct: false },
            { text: "ऊष्म व्यंजन", correct: true },
            { text: "संयुक्त व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनके उच्चारण में वायु रगड़ खाकर निकलती है जिससे ऊष्मा उत्पन्न होती है।"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण अंतःस्थ व्यंजन है?",
        answers: shuffle([
            { text: "श", correct: false },
            { text: "स", correct: false },
            { text: "य", correct: true },
            { text: "ह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतःस्थ व्यंजन वे होते हैं जिनका उच्चारण स्वर और व्यंजन के बीच होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये हैं: य, र, ल, व।"
    },
    {
        question: "'क', 'ख', 'ग', 'घ', 'ङ' किस वर्ग के व्यंजन हैं?",
        answers: shuffle([
            { text: "च वर्ग", correct: false },
            { text: "ट वर्ग", correct: false },
            { text: "त वर्ग", correct: false },
            { text: "क वर्ग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये वर्ण उच्चारण स्थान के अनुसार 'कंठ' से उच्चरित होते हैं और 'क वर्ग' में आते हैं।"
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
        question: "'प्लुत्' स्वर का उदाहरण कौन सा है?",
        answers: shuffle([
            { text: "राम", correct: false },
            { text: "ओम", correct: true },
            { text: "सीता", correct: false },
            { text: "मोहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लुत स्वर के उच्चारण में ह्रस्व से तीन गुना अधिक समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका प्रयोग अक्सर पुकारने या चिल्लाने में होता है।"
    },
    {
        question: "हिंदी वर्णमाला में संयुक्त स्वरों की संख्या कितनी है?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त स्वर वे होते हैं जो दो स्वरों के मेल से बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये हैं: ए (अ + इ), ऐ (अ + ए), ओ (अ + उ), औ (अ + ओ)।"
    },
    {
        question: "'च', 'छ', 'ज', 'झ', 'ञ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन व्यंजनों का उच्चारण जीभ के तालु से स्पर्श होने पर होता है, इसलिए इन्हें तालव्य व्यंजन भी कहते हैं।"
    },
    {
        question: "'ट', 'ठ', 'ड', 'ढ', 'ण' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: true },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनका उच्चारण जीभ के मूर्धा से स्पर्श होने पर होता है, इसलिए इन्हें मूर्धन्य व्यंजन भी कहते हैं।"
    },
    {
        question: "'प', 'फ', 'ब', 'भ', 'म' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "कंठ", correct: false },
            { text: "ओष्ठ", correct: true },
            { text: "मूर्धा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन व्यंजनों का उच्चारण दोनों होंठों के स्पर्श से होता है, इसलिए इन्हें ओष्ठ्य व्यंजन भी कहते हैं।"
    },
    {
        question: "'त्' वर्ग के व्यंजनों का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त', 'थ', 'द', 'ध', 'न' का उच्चारण जीभ के दांतों से स्पर्श होने पर होता है, इसलिए इन्हें दंत्य व्यंजन भी कहते हैं।"
    },
    {
        question: "जिस व्यंजन के उच्चारण में जीभ ऊपर उठकर तालु को स्पर्श करती है, वह कौन सा वर्ग है?",
        answers: shuffle([
            { text: "क वर्ग", correct: false },
            { text: "च वर्ग", correct: true },
            { text: "त वर्ग", correct: false },
            { text: "प वर्ग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> च वर्ग के व्यंजनों (च, छ, ज, झ, ञ) का उच्चारण तालु से होता है।"
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
        question: "हिंदी में 'मात्रा' का प्रयोग किसके लिए होता है?",
        answers: shuffle([
            { text: "व्यंजनों के लिए", correct: false },
            { text: "स्वरों के लिए", correct: true },
            { text: "अयोगवाह के लिए", correct: false },
            { text: "संयुक्त व्यंजनों के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यंजन के साथ स्वरों का जो रूप मिलता है, उसे मात्रा कहते हैं।"
    },
    {
        question: "जिस ध्वनि के उच्चारण में हवा मुख-विवर के किसी भाग से बिना रगड़ खाए निकलती है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "व्यंजन", correct: false },
            { text: "स्वर", correct: true },
            { text: "अंतःस्थ व्यंजन", correct: false },
            { text: "ऊष्म व्यंजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वरों का उच्चारण स्वतंत्र रूप से और बिना किसी बाधा के होता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण 'अघोष' वर्ण है?",
        answers: shuffle([
            { text: "ग", correct: false },
            { text: "घ", correct: false },
            { text: "क", correct: true },
            { text: "ड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अघोष वर्ण वे होते हैं जिनके उच्चारण में स्वरतंत्रियों में कंपन नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का पहला और दूसरा वर्ण (क, ख, च, छ आदि) अघोष होते हैं।"
    },
    {
        question: "निम्नलिखित में से कौन सा वर्ण 'घोष' (सघोष) वर्ण है?",
        answers: shuffle([
            { text: "च", correct: false },
            { text: "ट", correct: false },
            { text: "ज", correct: true },
            { text: "थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घोष वर्ण वे होते हैं जिनके उच्चारण में स्वरतंत्रियों में कंपन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रत्येक वर्ग का तीसरा, चौथा और पांचवां वर्ण (ग, घ, ङ, ज, झ, ञ आदि) घोष होते हैं।"
    },
    {
        question: "'व' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "दंत", correct: false },
            { text: "ओष्ठ", correct: false },
            { text: "दंत + ओष्ठ", correct: true },
            { text: "तालु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'व' का उच्चारण करते समय जीभ दांतों को छूती है और होंठों का भी प्रयोग होता है, इसलिए इसे दंत्योष्ठ्य कहते हैं।"
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