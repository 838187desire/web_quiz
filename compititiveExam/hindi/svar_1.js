const questions = [
    {
        topHeading: "स्वर पर आधारित 25 बहुविकल्पीय प्रश्न part 1 (quiz_no.3)"
    },
    {
        question: "हिंदी वर्णमाला में कुल कितने स्वर हैं?",
        answers: shuffle([
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false },
            { text: "13", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंदी में कुल 11 स्वर होते हैं: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ।"
    },
    {
        question: "'ह्रस्व' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "आ, ई, ऊ", correct: false },
            { text: "अ, इ, उ, ऋ", correct: true },
            { text: "ए, ऐ, ओ, औ", correct: false },
            { text: "अ, आ, इ, ई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्रस्व स्वर वे होते हैं जिनके उच्चारण में सबसे कम समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें 'मूल स्वर' भी कहते हैं।"
    },
    {
        question: "'दीर्घ' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "अ, इ, उ, ऋ", correct: false },
            { text: "आ, ई, ऊ, ए, ऐ, ओ, औ", correct: true },
            { text: "अ, आ, इ, ई", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दीर्घ स्वर वे होते हैं जिनके उच्चारण में ह्रस्व स्वरों से दुगुना समय लगता है।"
    },
    {
        question: "'प्लुत्' स्वर का प्रयोग मुख्यतः किसमें होता है?",
        answers: shuffle([
            { text: "शब्दों के बीच में", correct: false },
            { text: "शब्दों के अंत में", correct: false },
            { text: "किसी को पुकारने या दूर से बोलने में", correct: true },
            { text: "कविता में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लुत् स्वर के उच्चारण में ह्रस्व से तीन गुना समय लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका चिह्न 'S' होता है, जैसे: 'ओम्' को 'ओऽम्' भी लिखा जाता है।"
    },
    {
        question: "'अ', 'इ', 'उ' को किस श्रेणी में रखा जाता है?",
        answers: shuffle([
            { text: "दीर्घ स्वर", correct: false },
            { text: "मूल स्वर", correct: true },
            { text: "संयुक्त स्वर", correct: false },
            { text: "अयोगवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन्हें 'ह्रस्व स्वर' या 'मूल स्वर' कहा जाता है क्योंकि ये किसी अन्य स्वर के मेल से नहीं बने हैं।"
    },
    {
        question: "'ए' और 'ऐ' किस प्रकार के स्वर हैं?",
        answers: shuffle([
            { text: "दीर्घ स्वर", correct: false },
            { text: "ह्रस्व स्वर", correct: false },
            { text: "संयुक्त स्वर", correct: true },
            { text: "सजातीय स्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संयुक्त स्वर दो अलग-अलग स्वरों के मेल से बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जैसे: ए (अ + इ) और ऐ (अ + ए)।"
    },
    {
        question: "'ओ' का निर्माण किन स्वरों के मेल से होता है?",
        answers: shuffle([
            { text: "अ + इ", correct: false },
            { text: "अ + उ", correct: true },
            { text: "आ + उ", correct: false },
            { text: "अ + ओ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओ' का निर्माण अ + उ के मेल से और 'औ' का निर्माण अ + ओ के मेल से होता है।"
    },
    {
        question: "'अं' और 'अः' को क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्वर", correct: false },
            { text: "व्यंजन", correct: false },
            { text: "अयोगवाह", correct: true },
            { text: "संयुक्त स्वर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अयोगवाह वे ध्वनियाँ हैं जो न तो पूरी तरह से स्वर हैं और न ही व्यंजन, लेकिन दोनों के साथ प्रयोग में आती हैं।"
    },
    {
        question: "अनुस्वार (अं) का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "मुख", correct: false },
            { text: "नासिका", correct: true },
            { text: "कंठ", correct: false },
            { text: "तालु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुस्वार का उच्चारण करते समय हवा केवल नाक से बाहर निकलती है।"
    },
    {
        question: "विसर्ग (अः) का उच्चारण किस वर्ण के समान होता है?",
        answers: shuffle([
            { text: "ह", correct: true },
            { text: "स", correct: false },
            { text: "य", correct: false },
            { text: "र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विसर्ग का उच्चारण 'ह' की तरह होता है, जैसे 'दुःख' को 'दुहख' के समान उच्चारित किया जाता है।"
    },
    {
        question: "'मात्रा' किसे कहते हैं?",
        answers: shuffle([
            { text: "स्वरों का लिखित रूप", correct: false },
            { text: "व्यंजनों का उच्चारण", correct: false },
            { text: "व्यंजन के साथ लगने वाले स्वरों का चिह्न", correct: true },
            { text: "शब्द की ध्वनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब स्वर किसी व्यंजन के साथ जुड़ते हैं, तो वे मात्रा के रूप में प्रयोग किए जाते हैं।"
    },
    {
        question: "'इ' और 'ई' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: true },
            { text: "मूर्धा", correct: false },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इ' और 'ई' का उच्चारण करते समय जीभ का मध्य भाग तालु से स्पर्श करता है।"
    },
    {
        question: "'अ' और 'आ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: true },
            { text: "तालु", correct: false },
            { text: "ओष्ठ", correct: false },
            { text: "मूर्धा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अ' और 'आ' का उच्चारण कंठ से होता है, इसलिए इन्हें 'कंठ्य स्वर' भी कहते हैं।"
    },
    {
        question: "'उ' और 'ऊ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: false },
            { text: "ओष्ठ", correct: true },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उ' और 'ऊ' का उच्चारण करते समय होंठ गोलाकार हो जाते हैं, इसलिए इन्हें 'ओष्ठ्य स्वर' भी कहते हैं।"
    },
    {
        question: "'ऋ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ", correct: false },
            { text: "तालु", correct: false },
            { text: "मूर्धा", correct: true },
            { text: "दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऋ' का उच्चारण करते समय जीभ मूर्धा से स्पर्श करती है।"
    },
    {
        question: "'ए' और 'ऐ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ-तालु", correct: true },
            { text: "कंठ-ओष्ठ", correct: false },
            { text: "दंत-ओष्ठ", correct: false },
            { text: "मूर्धा-दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ए' और 'ऐ' का उच्चारण कंठ और तालु दोनों के सहयोग से होता है।"
    },
    {
        question: "'ओ' और 'औ' का उच्चारण स्थान क्या है?",
        answers: shuffle([
            { text: "कंठ-तालु", correct: false },
            { text: "कंठ-ओष्ठ", correct: true },
            { text: "दंत-ओष्ठ", correct: false },
            { text: "मूर्धा-दंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ओ' और 'औ' का उच्चारण कंठ और ओष्ठ दोनों के सहयोग से होता है।"
    },
    {
        question: "'स्वरों' को क्या कहा जाता है क्योंकि वे स्वतंत्र रूप से उच्चारित होते हैं?",
        answers: shuffle([
            { text: "परतंत्र", correct: false },
            { text: "स्वतंत्र", correct: true },
            { text: "व्यंजन", correct: false },
            { text: "अयोगवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वरों का उच्चारण बिना किसी अन्य वर्ण की सहायता के होता है, इसलिए इन्हें स्वतंत्र ध्वनि भी कहते हैं।"
    },
    {
        question: "'वर्तुल' या 'गोलाकार' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "अ, आ, इ, ई", correct: false },
            { text: "इ, ई, ए, ऐ", correct: false },
            { text: "उ, ऊ, ओ, औ", correct: true },
            { text: "अ, आ, ओ, औ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन स्वरों के उच्चारण में होंठ गोलाकार या वर्तुल हो जाते हैं।"
    },
    {
        question: "'अर्ध-विवृत' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "अ, इ, उ", correct: false },
            { text: "ए, औ, ओ", correct: false },
            { text: "ऐ, औ, आ", correct: false },
            { text: "अ, ए, ओ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्ध-विवृत' वे स्वर हैं जिनके उच्चारण में मुख द्वार आधा खुला रहता है।"
    },
    {
        question: "'अर्ध-संवृत' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "अ, इ", correct: false },
            { text: "ए, ओ", correct: true },
            { text: "ऐ, औ", correct: false },
            { text: "इ, उ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अर्ध-संवृत' स्वर वे हैं जिनके उच्चारण में मुख द्वार लगभग आधा बंद रहता है।"
    },
    {
        question: "'संवृत' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "इ, ई, उ, ऊ", correct: true },
            { text: "अ, आ", correct: false },
            { text: "ए, ऐ", correct: false },
            { text: "ओ, औ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संवृत' स्वर वे हैं जिनके उच्चारण में मुख द्वार लगभग बंद रहता है।"
    },
    {
        question: "'विवृत' स्वर कौन सा है?",
        answers: shuffle([
            { text: "इ", correct: false },
            { text: "अ", correct: false },
            { text: "आ", correct: true },
            { text: "उ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'विवृत' स्वर के उच्चारण में मुख द्वार पूरा खुला रहता है।"
    },
    {
        question: "'सजातीय' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "अ, आ", correct: true },
            { text: "अ, इ", correct: false },
            { text: "अ, उ", correct: false },
            { text: "अ, ए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सजातीय स्वर एक ही उच्चारण स्थान से उच्चारित होते हैं, जैसे: अ-आ, इ-ई, उ-ऊ।"
    },
    {
        question: "'विजातीय' स्वर कौन से हैं?",
        answers: shuffle([
            { text: "इ, ई", correct: false },
            { text: "उ, ऊ", correct: false },
            { text: "ए, ऐ", correct: true },
            { text: "अ, आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विजातीय स्वर अलग-अलग उच्चारण स्थानों से उच्चारित होते हैं, जैसे: ए (अ + इ), ऐ (अ + ए), ओ (अ + उ)।"
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