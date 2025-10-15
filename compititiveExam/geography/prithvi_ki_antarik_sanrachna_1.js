const questions = [
    {
        topHeading: "पृथ्वी की आंतरिक संरचना पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "पृथ्वी की आंतरिक संरचना के संबंध में जानकारी का सबसे प्रमुख और विश्वसनीय स्रोत क्या है?",
        answers: shuffle([
            { text: "ज्वालामुखी क्रिया", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: false },
            { text: "भूकंप विज्ञान", correct: true },
            { text: "तापमान और दबाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूकंपीय तरंगों (P, S, L) के व्यवहार और गति के अध्ययन से पृथ्वी की विभिन्न परतों की मोटाई, घनत्व और अवस्था का सबसे सटीक अनुमान लगाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सा एक पृथ्वी के आंतरिक भाग के बारे में जानकारी का प्रत्यक्ष स्रोत है?",
        answers: shuffle([
            { text: "उल्कापिंड", correct: false },
            { text: "चुंबकीय क्षेत्र", correct: false },
            { text: "खनन और प्रवेधन", correct: true },
            { text: "भूकंपीय तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खनन और गहरे समुद्री प्रवेधन जैसी क्रियाओं से हमें पृथ्वी के आंतरिक भाग से सीधे चट्टानों के नमूने मिलते हैं, जो प्रत्यक्ष जानकारी प्रदान करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सी भूकंपीय तरंगें ठोस, तरल और गैस तीनों माध्यमों से गुजर सकती हैं?",
        answers: shuffle([
            { text: "S-तरंगें", correct: false },
            { text: "L-तरंगें", correct: false },
            { text: "P-तरंगें", correct: true },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> P-तरंगें (प्राथमिक तरंगें) अनुदैर्ध्य तरंगें होती हैं और अपनी प्रकृति के कारण वे तीनों माध्यमों (ठोस, तरल, गैस) में यात्रा कर सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस भूकंपीय तरंग को 'अनुप्रस्थ तरंग' भी कहा जाता है?",
        answers: shuffle([
            { text: "P-तरंग", correct: false },
            { text: "S-तरंग", correct: true },
            { text: "L-तरंग", correct: false },
            { text: "R-तरंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> S-तरंगों (द्वितीयक तरंगों) में कणों का कंपन तरंग की दिशा के समकोण पर होता है, इसी कारण इन्हें अनुप्रस्थ तरंग कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का बाह्य क्रोड (Outer Core) तरल अवस्था में है, यह अनुमान किस आधार पर लगाया गया है?",
        answers: shuffle([
            { text: "P-तरंगों के व्यवहार से", correct: false },
            { text: "S-तरंगों के लुप्त हो जाने से", correct: true },
            { text: "ज्वालामुखी उद्गार से", correct: false },
            { text: "अत्यधिक तापमान से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> S-तरंगें तरल माध्यम में यात्रा नहीं कर सकतीं।<br><br><i class='fa-solid fa-angles-right icon'></i> चूंकि ये तरंगें बाह्य क्रोड से नहीं गुजर पातीं, इससे यह सिद्ध होता है कि बाह्य क्रोड तरल अवस्था में है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के भीतर जाने पर औसतन कितनी गहराई पर तापमान 1° सेल्सियस बढ़ जाता है?",
        answers: shuffle([
            { text: "10 मीटर", correct: false },
            { text: "32 मीटर", correct: true },
            { text: "100 मीटर", correct: false },
            { text: "1 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह से नीचे की ओर जाने पर रेडियोधर्मी तत्वों के विखंडन और दबाव के कारण प्रत्येक 32 मीटर पर तापमान में 1°C की वृद्धि होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सियाल' (SIAL) परत का नामकरण किन तत्वों के आधार पर किया गया है?",
        answers: shuffle([
            { text: "सिलिका और एल्युमिनियम", correct: true },
            { text: "सिलिका और मैग्नीशियम", correct: false },
            { text: "सिलिकॉन और लोहा", correct: false },
            { text: "सोना और एल्युमिनियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सियाल' शब्द 'Si' (सिलिका) और 'Al' (एल्युमिनियम) से मिलकर बना है, क्योंकि महाद्वीपीय भूपर्पटी में इन दो तत्वों की प्रचुरता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "महासागरीय भूपर्पटी को किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "सियाल", correct: false },
            { text: "सिमा", correct: true },
            { text: "निफे", correct: false },
            { text: "स्थलमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महासागरीय भूपर्पटी में सिलिका (Si) और मैग्नीशियम (Ma) की अधिकता के कारण इसे 'सिमा' (SIMA) कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के कुल आयतन का लगभग 83% हिस्सा कौन सी परत घेरती है?",
        answers: shuffle([
            { text: "भूपर्पटी (Crust)", correct: false },
            { text: "मैंटल (Mantle)", correct: true },
            { text: "बाह्य क्रोड (Outer Core)", correct: false },
            { text: "आंतरिक क्रोड (Inner Core)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैंटल पृथ्वी की सबसे मोटी परत है, जो कुल आयतन का लगभग 83-84% और द्रव्यमान का लगभग 68% है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'निफे' (NIFE) परत में किन तत्वों की प्रधानता होती है?",
        answers: shuffle([
            { text: "निकल और फेरस (लोहा)", correct: true },
            { text: "नाइट्रोजन और फेरस", correct: false },
            { text: "निकल और पोटैशियम", correct: false },
            { text: "सोडियम और लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का क्रोड (Core) मुख्य रूप से भारी धातुओं से बना है, जिसमें निकल (Ni) और लोहा (Fe) प्रमुख हैं, इसीलिए इसे 'निफे' परत कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मोहोरोविसिक असंबंधता (Mohorovičić Discontinuity) किन दो परतों को अलग करती है?",
        answers: shuffle([
            { text: "ऊपरी मैंटल और निचला मैंटल", correct: false },
            { text: "भूपर्पटी और मैंटल", correct: true },
            { text: "मैंटल और क्रोड", correct: false },
            { text: "बाह्य क्रोड और आंतरिक क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोहो असंबंधता वह सीमा है जहाँ भूकंपीय तरंगों की गति में अचानक परिवर्तन होता है, यह भूपर्पटी (Crust) को मैंटल (Mantle) से अलग करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "गुटेनबर्ग असंबंधता (Gutenberg Discontinuity) किन दो परतों के बीच स्थित है?",
        answers: shuffle([
            { text: "भूपर्पटी और मैंटल", correct: false },
            { text: "ऊपरी और निचले मैंटल", correct: false },
            { text: "मैंटल और क्रोड", correct: true },
            { text: "बाह्य और आंतरिक क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुटेनबर्ग असंबंधता लगभग 2900 किलोमीटर की गहराई पर मैंटल को क्रोड से अलग करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "स्थलमंडल (Lithosphere) में क्या-क्या सम्मिलित है?",
        answers: shuffle([
            { text: "केवल ऊपरी मैंटल", correct: false },
            { text: "केवल भूपर्पटी", correct: false },
            { text: "भूपर्पटी और मैंटल का ऊपरी ठोस भाग", correct: true },
            { text: "संपूर्ण मैंटल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थलमंडल एक कठोर और भंगुर परत है जिसमें संपूर्ण भूपर्पटी और मैंटल का सबसे ऊपरी ठोस हिस्सा शामिल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी मोटाई लगभग 10-200 किमी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "दुर्बलतामंडल (Asthenosphere) की अवस्था कैसी है?",
        answers: shuffle([
            { text: "पूर्ण ठोस", correct: false },
            { text: "पूर्ण तरल", correct: false },
            { text: "गैसीय", correct: false },
            { text: "आंशिक रूप से पिघली हुई (प्लास्टिक)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्बलतामंडल मैंटल का ऊपरी हिस्सा है जो अत्यधिक ताप और दाब के कारण पूरी तरह पिघला हुआ नहीं है, बल्कि एक अर्ध-तरल, प्लास्टिक जैसी अवस्था में है, जिस पर स्थलमंडलीय प्लेटें तैरती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के चुंबकीय क्षेत्र के लिए कौन सी परत मुख्य रूप से जिम्मेदार है?",
        answers: shuffle([
            { text: "आंतरिक क्रोड", correct: false },
            { text: "बाह्य क्रोड", correct: true },
            { text: "मैंटल", correct: false },
            { text: "भूपर्पटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्य क्रोड की तरल धात्विक अवस्था (मुख्यतः लोहा) में संवहन धाराओं के कारण एक 'डायनेमो प्रभाव' उत्पन्न होता है, जो पृथ्वी के चुंबकीय क्षेत्र को जन्म देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "लेहमन असंबंधता (Lehmann Discontinuity) किसे अलग करती है?",
        answers: shuffle([
            { text: "मैंटल और क्रोड को", correct: false },
            { text: "ऊपरी क्रोड और निचले क्रोड को", correct: false },
            { text: "बाह्य क्रोड और आंतरिक क्रोड को", correct: true },
            { text: "भूपर्पटी और मैंटल को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह असंबंधता तरल बाह्य क्रोड और ठोस आंतरिक क्रोड के बीच की सीमा है, जिसकी खोज इंग लेहमन ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के केंद्र (आंतरिक क्रोड) का तापमान लगभग कितना अनुमानित है?",
        answers: shuffle([
            { text: "1000°C", correct: false },
            { text: "2500°C", correct: false },
            { text: "6000°C", correct: true },
            { text: "10000°C", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अत्यधिक दबाव के कारण पृथ्वी के केंद्र का तापमान सूर्य की सतह के तापमान के बराबर, लगभग 5500-6000 डिग्री सेल्सियस तक पहुँच जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "आंतरिक क्रोड (Inner Core) के ठोस होने का क्या कारण है?",
        answers: shuffle([
            { text: "कम तापमान", correct: false },
            { text: "केवल लोहे की उपस्थिति", correct: false },
            { text: "अत्यधिक दबाव", correct: true },
            { text: "चुंबकीय क्षेत्र की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि आंतरिक क्रोड का तापमान बहुत अधिक है, लेकिन उस पर पड़ने वाला अत्यधिक दबाव परमाणुओं को पिघलने नहीं देता और उसे ठोस अवस्था में बनाए रखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कोनराड असंबंधता (Conrad Discontinuity) कहाँ पाई जाती है?",
        answers: shuffle([
            { text: "महाद्वीपीय भूपर्पटी के भीतर", correct: true },
            { text: "मैंटल के भीतर", correct: false },
            { text: "क्रोड के भीतर", correct: false },
            { text: "मैंटल और क्रोड के बीच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह असंबंधता महाद्वीपीय भूपर्पटी की ऊपरी (ग्रेनाइटिक) और निचली (बेसाल्टिक) परतों के बीच पाई जाती है, हालांकि यह हर जगह स्पष्ट नहीं होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का औसत घनत्व कितना है?",
        answers: shuffle([
            { text: "2.7 ग्राम/घन सेमी", correct: false },
            { text: "3.5 ग्राम/घन सेमी", correct: false },
            { text: "5.5 ग्राम/घन सेमी", correct: true },
            { text: "11.0 ग्राम/घन सेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की विभिन्न परतों का घनत्व अलग-अलग है, लेकिन पूरी पृथ्वी का औसत घनत्व लगभग 5.5 ग्राम प्रति घन सेंटीमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की त्रिज्या लगभग कितनी है?",
        answers: shuffle([
            { text: "3670 किलोमीटर", correct: false },
            { text: "6371 किलोमीटर", correct: true },
            { text: "8450 किलोमीटर", correct: false },
            { text: "12742 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की भूमध्यरेखीय त्रिज्या लगभग 6378 किमी और ध्रुवीय त्रिज्या लगभग 6357 किमी है, औसत त्रिज्या 6371 किमी मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूपर्पटी का घनत्व कितना होता है?",
        answers: shuffle([
            { text: "1.5 से 2.0 ग्राम/घन सेमी", correct: false },
            { text: "2.7 से 3.0 ग्राम/घन सेमी", correct: true },
            { text: "4.5 से 5.0 ग्राम/घन सेमी", correct: false },
            { text: "10.0 से 13.0 ग्राम/घन सेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाद्वीपीय भूपर्पटी का घनत्व लगभग 2.7 ग्राम/घन सेमी और महासागरीय भूपर्पटी का घनत्व लगभग 3.0 ग्राम/घन सेमी होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "महाद्वीपीय भूपर्पटी मुख्यतः किन चट्टानों से बनी है?",
        answers: shuffle([
            { text: "बेसाल्ट", correct: false },
            { text: "ग्रेनाइट", correct: true },
            { text: "संगमरमर", correct: false },
            { text: "अवसादी चट्टानें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाद्वीपीय भूपर्पटी की ऊपरी परत मुख्य रूप से ग्रेनाइट और इससे संबंधित आग्नेय और रूपांतरित चट्टानों से बनी है, जो हल्की होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "महासागरीय भूपर्पटी का निर्माण मुख्यतः किन चट्टानों से हुआ है?",
        answers: shuffle([
            { text: "ग्रेनाइट", correct: false },
            { text: "बलुआ पत्थर", correct: false },
            { text: "बेसाल्ट", correct: true },
            { text: "चूना पत्थर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महासागरीय भूपर्पटी सघन और भारी बेसाल्टिक चट्टानों से बनी होती है, जिनका निर्माण समुद्री कटक पर मैग्मा के ठंडा होने से होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "रेपिटी असंबंधता (Repetti Discontinuity) किन दो परतों को अलग करती है?",
        answers: shuffle([
            { text: "बाह्य और आंतरिक क्रोड", correct: false },
            { text: "ऊपरी और निचले मैंटल", correct: true },
            { text: "ऊपरी और निचली भूपर्पटी", correct: false },
            { text: "मैंटल और क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेपिटी असंबंधता लगभग 660 किलोमीटर की गहराई पर ऊपरी मैंटल को निचले मैंटल से अलग करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'P-तरंग छाया क्षेत्र' (P-wave Shadow Zone) का विस्तार भूकंपीय केंद्र से कितनी दूरी पर होता है?",
        answers: shuffle([
            { text: "105° से 145°", correct: true },
            { text: "90° से 120°", correct: false },
            { text: "145° से 180°", correct: false },
            { text: "105° से 180°", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब P-तरंगें तरल बाह्य क्रोड से गुजरती हैं, तो वे अपवर्तित हो जाती हैं, जिससे भूकंप केंद्र से 105° और 145° के बीच का क्षेत्र बनता है जहाँ ये तरंगें सीधे नहीं पहुँच पातीं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'S-तरंग छाया क्षेत्र' (S-wave Shadow Zone) का विस्तार कितना है?",
        answers: shuffle([
            { text: "90° से परे का क्षेत्र", correct: false },
            { text: "105° से परे का क्षेत्र", correct: true },
            { text: "120° से परे का क्षेत्र", correct: false },
            { text: "145° से परे का क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> S-तरंगें तरल बाह्य क्रोड को पार नहीं कर सकतीं, इसलिए भूकंप केंद्र से 105° से आगे के पूरे क्षेत्र में ये तरंगें दर्ज नहीं की जातीं, जो एक बहुत बड़ा छाया क्षेत्र बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के द्रव्यमान का लगभग 68% हिस्सा किस परत में केंद्रित है?",
        answers: shuffle([
            { text: "भूपर्पटी", correct: false },
            { text: "मैंटल", correct: true },
            { text: "बाह्य क्रोड", correct: false },
            { text: "आंतरिक क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैंटल पृथ्वी की सबसे विशाल परत है, जिसमें पृथ्वी का लगभग 68% द्रव्यमान और 83% आयतन समाहित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की सबसे पतली परत कौन सी है?",
        answers: shuffle([
            { text: "भूपर्पटी", correct: true },
            { text: "मैंटल", correct: false },
            { text: "बाह्य क्रोड", correct: false },
            { text: "आंतरिक क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूपर्पटी पृथ्वी की सबसे बाहरी और सबसे पतली परत है, जिसकी मोटाई महासागरों के नीचे केवल 5-10 किमी और महाद्वीपों के नीचे 30-70 किमी तक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ज्वालामुखी उद्गार के दौरान निकलने वाला लावा (मैग्मा) मुख्यतः कहाँ से आता है?",
        answers: shuffle([
            { text: "आंतरिक क्रोड से", correct: false },
            { text: "बाह्य क्रोड से", correct: false },
            { text: "दुर्बलतामंडल (Asthenosphere) से", correct: true },
            { text: "स्थलमंडल से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुर्बलतामंडल आंशिक रूप से पिघली हुई अवस्था में है और यह मैग्मा का मुख्य स्रोत है जो ज्वालामुखी के रूप में सतह पर आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "गहराई के साथ पृथ्वी के आंतरिक भाग में दबाव पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "घटता है", correct: false },
            { text: "बढ़ता है", correct: true },
            { text: "स्थिर रहता है", correct: false },
            { text: "पहले बढ़ता है फिर घटता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊपरी परतों के भार के कारण जैसे-जैसे हम पृथ्वी के केंद्र की ओर जाते हैं, दबाव लगातार बढ़ता जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की परतों का घनत्व के अनुसार सही क्रम (बाहर से अंदर की ओर) क्या है?",
        answers: shuffle([
            { text: "भूपर्पटी < क्रोड < मैंटल", correct: false },
            { text: "भूपर्पटी < मैंटल < क्रोड", correct: true },
            { text: "मैंटल < भूपर्पटी < क्रोड", correct: false },
            { text: "क्रोड < मैंटल < भूपर्पटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सबसे बाहरी परत भूपर्पटी का घनत्व सबसे कम (लगभग 2.7-3.0), मैंटल का अधिक (लगभग 3.3-5.7) और सबसे भीतरी परत क्रोड का घनत्व सर्वाधिक (लगभग 9.5-13.6) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के आंतरिक भाग को तीन मुख्य परतों में विभाजित करने का आधार क्या है?",
        answers: shuffle([
            { text: "तापमान में भिन्नता", correct: false },
            { text: "दबाव में भिन्नता", correct: false },
            { text: "भूकंपीय तरंगों की गति में परिवर्तन", correct: true },
            { text: "रासायनिक संरचना में भिन्नता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूकंपीय तरंगों की गति पदार्थ के घनत्व और अवस्था पर निर्भर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब इन तरंगों की गति में अचानक परिवर्तन होता है, तो उसे एक नई परत की शुरुआत माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "महाद्वीपीय भूपर्पटी की मोटाई सबसे अधिक कहाँ होती है?",
        answers: shuffle([
            { text: "मैदानी क्षेत्रों में", correct: false },
            { text: "तटीय क्षेत्रों में", correct: false },
            { text: "युवा वलित पर्वत श्रृंखलाओं के नीचे", correct: true },
            { text: "ज्वालामुखी द्वीपों के नीचे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संपीड़न बलों के कारण, हिमालय जैसे युवा वलित पर्वतों के नीचे महाद्वीपीय भूपर्पटी की मोटाई 70 किलोमीटर या उससे भी अधिक हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस वैज्ञानिक ने पृथ्वी की परतों को सियाल, सिमा और निफे में वर्गीकृत किया था?",
        answers: shuffle([
            { text: "अल्फ्रेड वेगनर", correct: false },
            { text: "एडवर्ड श्वस", correct: true },
            { text: "ए. होम्स", correct: false },
            { text: "आई. न्यूटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रियाई भूविज्ञानी एडवर्ड श्वस ने रासायनिक संरचना के आधार पर पृथ्वी की तीन संकेंद्रित परतों - सियाल, सिमा और निफे का मॉडल प्रस्तावित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की आंतरिक गर्मी का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "सूर्य का ताप", correct: false },
            { text: "रेडियोधर्मी पदार्थों का विखंडन", correct: true },
            { text: "रासायनिक अभिक्रियाएं", correct: false },
            { text: "ज्वारीय घर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के निर्माण के समय की अवशिष्ट गर्मी और मैंटल तथा क्रोड में मौजूद यूरेनियम, थोरियम और पोटैशियम जैसे रेडियोधर्मी तत्वों का निरंतर विखंडन पृथ्वी की आंतरिक ऊष्मा का प्रमुख स्रोत है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मध्यमंडल' (Mesosphere) शब्द का प्रयोग पृथ्वी की किस परत के लिए किया जाता है?",
        answers: shuffle([
            { text: "स्थलमंडल", correct: false },
            { text: "दुर्बलतामंडल", correct: false },
            { text: "निचला मैंटल", correct: true },
            { text: "बाह्य क्रोड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिक विशेषताओं के आधार पर वर्गीकरण में, दुर्बलतामंडल के नीचे और बाह्य क्रोड के ऊपर स्थित ठोस निचले मैंटल को मध्यमंडल या मेसोस्फीयर कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गुरुमंडल' (Barysphere) पृथ्वी के किस भाग को संदर्भित करता है?",
        answers: shuffle([
            { text: "वायुमंडल", correct: false },
            { text: "जलमंडल", correct: false },
            { text: "पृथ्वी का केंद्रीय भाग (क्रोड)", correct: true },
            { text: "स्थलमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुमंडल शब्द का प्रयोग पृथ्वी के सबसे घने और भारी केंद्रीय भाग, यानी क्रोड (Core) के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के कुल द्रव्यमान में भूपर्पटी का प्रतिशत हिस्सा कितना है?",
        answers: shuffle([
            { text: "1% से भी कम", correct: true },
            { text: "लगभग 5%", correct: false },
            { text: "लगभग 10%", correct: false },
            { text: "लगभग 15%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूपर्पटी पृथ्वी की सबसे बाहरी लेकिन सबसे पतली परत है, जिसका हिस्सा पृथ्वी के कुल द्रव्यमान का 1% से भी कम (लगभग 0.5%) है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सबसे विनाशकारी भूकंपीय तरंगें कौन सी होती हैं?",
        answers: shuffle([
            { text: "P-तरंगें", correct: false },
            { text: "S-तरंगें", correct: false },
            { text: "धरातलीय तरंगें (L-तरंगें)", correct: true },
            { text: "आंतरिक तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धरातलीय तरंगें पृथ्वी की सतह पर चलती हैं, इनकी गति सबसे कम होती है लेकिन इनका आयाम सबसे अधिक होता है, जिसके कारण ये सबसे अधिक विनाश का कारण बनती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के क्रोड का घनत्व पानी के घनत्व से लगभग कितना गुना अधिक है?",
        answers: shuffle([
            { text: "2-3 गुना", correct: false },
            { text: "5-6 गुना", correct: false },
            { text: "10-13 गुना", correct: true },
            { text: "20 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के क्रोड का घनत्व लगभग 10 से 13.6 ग्राम/घन सेमी के बीच है, जबकि पानी का घनत्व 1 ग्राम/घन सेमी होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की आंतरिक संरचना को समझने के लिए उल्कापिंड क्यों महत्वपूर्ण हैं?",
        answers: shuffle([
            { text: "वे पृथ्वी की सतह पर गिरते हैं", correct: false },
            { text: "उनका रासायनिक संघटन पृथ्वी के क्रोड जैसा माना जाता है", correct: true },
            { text: "वे बहुत गर्म होते हैं", correct: false },
            { text: "वे चुंबकीय गुण दर्शाते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐसा माना जाता है कि उल्कापिंड उन्हीं पदार्थों से बने हैं जिनसे हमारी पृथ्वी बनी है।<br><br><i class='fa-solid fa-angles-right icon'></i> लोहे के उल्कापिंडों का संघटन पृथ्वी के धात्विक क्रोड से मिलता-जुलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मैंटल की गहराई लगभग कितनी है?",
        answers: shuffle([
            { text: "33 किमी से 1000 किमी तक", correct: false },
            { text: "100 किमी से 2000 किमी तक", correct: false },
            { text: "33 किमी से 2900 किमी तक", correct: true },
            { text: "2900 किमी से 6371 किमी तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैंटल परत भूपर्पटी के नीचे (लगभग 33 किमी की औसत गहराई) से शुरू होकर 2900 किमी की गहराई तक फैली हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की किस परत में संवहन धाराएँ (Convection Currents) चलती हैं, जो प्लेट विवर्तनिकी के लिए उत्तरदायी हैं?",
        answers: shuffle([
            { text: "भूपर्पटी में", correct: false },
            { text: "मैंटल में (विशेषकर दुर्बलतामंडल में)", correct: true },
            { text: "बाह्य क्रोड में", correct: false },
            { text: "आंतरिक क्रोड में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैंटल में ताप और घनत्व की भिन्नता के कारण संवहन धाराएँ उत्पन्न होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये धाराएँ अपने ऊपर स्थित स्थलमंडलीय प्लेटों को गति प्रदान करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से सबसे अधिक घनत्व वाला पदार्थ पृथ्वी के किस भाग में पाए जाने की संभावना है?",
        answers: shuffle([
            { text: "महाद्वीपीय भूपर्पटी", correct: false },
            { text: "महासागरीय भूपर्पटी", correct: false },
            { text: "मैंटल", correct: false },
            { text: "आंतरिक क्रोड", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के निर्माण के समय भारी पदार्थ (जैसे लोहा, निकल) केंद्र की ओर चले गए, इसलिए आंतरिक क्रोड का घनत्व सबसे अधिक (लगभग 13.6 ग्राम/घन सेमी) है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'व्हाइट ऑफ द अर्थ' (White of the Earth) किस परत को कहा जाता है?",
        answers: shuffle([
            { text: "भूपर्पटी", correct: false },
            { text: "मैंटल", correct: true },
            { text: "क्रोड", correct: false },
            { text: "वायुमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैंटल को 'व्हाइट ऑफ द अर्थ' भी कहा जाता है क्योंकि यह भूपर्पटी (egg shell) और क्रोड (yolk) के बीच स्थित है, जैसे अंडे में सफेदी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के किस भाग का तापमान सर्वाधिक होता है?",
        answers: shuffle([
            { text: "भूपर्पटी", correct: false },
            { text: "मैंटल", correct: false },
            { text: "बाह्य क्रोड", correct: false },
            { text: "आंतरिक क्रोड का केंद्र", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दबाव और रेडियोधर्मी क्षय के कारण पृथ्वी के केंद्र में तापमान उच्चतम, लगभग 6000 डिग्री सेल्सियस तक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मैंटल और क्रोड के बीच की सीमा को क्या कहते हैं?",
        answers: shuffle([
            { text: "मोहो असंबंधता", correct: false },
            { text: "लेहमन असंबंधता", correct: false },
            { text: "गुटेनबर्ग असंबंधता", correct: true },
            { text: "कोनराड असंबंधता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सीमा लगभग 2900 किमी की गहराई पर स्थित है और निचले मैंटल (ठोस) को बाह्य क्रोड (तरल) से अलग करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भूपर्पटी में पाया जाने वाला सबसे प्रचुर तत्व कौन सा है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: true },
            { text: "सिलिकॉन", correct: false },
            { text: "एल्युमिनियम", correct: false },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार के अनुसार, भूपर्पटी में सबसे प्रचुर तत्व ऑक्सीजन (लगभग 46.6%) है, इसके बाद सिलिकॉन (लगभग 27.7%) का स्थान आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की आंतरिक परतों का विभाजन 'भूपर्पटी, मैंटल और क्रोड' किस आधार पर किया गया है?",
        answers: shuffle([
            { text: "केवल रासायनिक संघटन", correct: false },
            { text: "केवल भौतिक गुण", correct: false },
            { text: "रासायनिक संघटन और भौतिक गुण दोनों", correct: true },
            { text: "तापमान प्रवणता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सबसे आम वर्गीकरण है जो परतों के रासायनिक संघटन (जैसे सियाल, सिमा, निफे) और भौतिक अवस्था (ठोस, तरल, प्लास्टिक) दोनों को ध्यान में रखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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