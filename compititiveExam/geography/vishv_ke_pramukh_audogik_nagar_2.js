const questions = [ 
    {
        topHeading: "विश्व के प्रमुख औद्योगिक नगर पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 59)."
    },
    {
        question: "चीन का कौनसा शहर ऑटोमोबाइल और भारी इंजीनियरिंग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "शंघाई", correct: false },
            { text: "बीजिंग", correct: false },
            { text: "चोंगकिंग", correct: true },
            { text: "ग्वांगझू", correct: false },
        ]),
    },
    {
        question: "बेल्जियम का कौनसा शहर हीरा उद्योग (डायमंड कटिंग) का केंद्र है?",
        answers: shuffle([
            { text: "ब्रसेल्स", correct: false },
            { text: "एंटवर्प", correct: true },
            { text: "ब्रुग", correct: false },
            { text: "गेन्ट", correct: false },
        ]),
    },
    {
        question: "भारत का कौनसा शहर पेट्रोकेमिकल और उर्वरक उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "अंकलेश्वर (गुजरात)", correct: true },
            { text: "डिगबोई (असम)", correct: true },
            { text: "हल्दिया (पश्चिम बंगाल)", correct: true },
            { text: "उपरोक्त सभी", correct: true },
        ]),
    },
    {
        question: "तुर्की का कौनसा शहर ऑटोमोबाइल उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "अंकारा", correct: false },
            { text: "इस्तांबुल", correct: false },
            { text: "इज़मिर", correct: false },
            { text: "बर्सा", correct: true },
        ]),
    },
    {
        question: "कनाडा का कौनसा शहर एल्यूमीनियम और जलविद्युत उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "टोरंटो", correct: false },
            { text: "मॉन्ट्रियल", correct: false },
            { text: "किटिमैट", correct: true },
            { text: "वैंकूवर", correct: false },
        ]),
    },
    {
        question: "सऊदी अरब का कौनसा शहर तेल शोधन उद्योग का प्रमुख केंद्र है?",
        answers: shuffle([
            { text: "रियाद", correct: false },
            { text: "जेद्दाह", correct: false },
            { text: "मक्का", correct: false },
            { text: "दम्माम", correct: true },
        ]),
    },
    {
        question: "पुर्तगाल का कौनसा शहर कॉर्क उत्पादन के लिए जाना जाता है?",
        answers: shuffle([
            { text: "लिस्बन", correct: false },
            { text: "पोर्टो", correct: false },
            { text: "अल्गार्वे", correct: false },
            { text: "एवोरा", correct: true },
        ]),
    },
    {
        question: "जापान का कौनसा शहर कंप्यूटर, सॉफ्टवेयर और आईटी उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "टोक्यो", correct: true },
            { text: "ओसाका", correct: false },
            { text: "क्योटो", correct: false },
            { text: "फुकुओका", correct: false },
        ]),
    },
    {
        question: "स्वीडन का कौनसा शहर जहाज निर्माण और समुद्री इंजीनियरिंग का केंद्र है?",
        answers: shuffle([
            { text: "स्टॉकहोम", correct: false },
            { text: "माल्मो", correct: false },
            { text: "गोटेनबर्ग", correct: true },
            { text: "उपसाला", correct: false },
        ]),
    },
    {
        question: "भारत का कौनसा शहर लौह और इस्पात उद्योग का केंद्र है, जिसे 'स्टील सिटी ऑफ इंडिया' कहा जाता है?",
        answers: shuffle([
            { text: "दुर्गापुर", correct: false },
            { text: "भिलाई", correct: false },
            { text: "जमशेदपुर", correct: true },
            { text: "बोकारो", correct: false },
        ]),
    },
    {
        question: "जर्मनी का कौनसा शहर कैमरा और ऑप्टिकल उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कोलोन", correct: false },
            { text: "ड्रेसडेन", correct: true },
            { text: "स्टटगार्ट", correct: false },
            { text: "बर्लिन", correct: false },
        ]),
    },
    {
        question: "ईरान का कौनसा शहर कालीन उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "तेहरान", correct: false },
            { text: "इस्फहान", correct: true },
            { text: "शिराज", correct: false },
            { text: "मशहद", correct: false },
        ]),
    },
    {
        question: "मेक्सिको का कौनसा शहर ऑटोमोबाइल और इलेक्ट्रॉनिक्स उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "मेक्सिको सिटी", correct: false },
            { text: "गुआदालाजारा", correct: false },
            { text: "मॉन्टेरी", correct: false },
            { text: "पुएब्ला", correct: true },
        ]),
    },
    {
        question: "यूनाइटेड किंगडम का कौनसा शहर 'जूता निर्माण' उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "मैनचेस्टर", correct: false },
            { text: "लिवरपूल", correct: false },
            { text: "नॉर्थम्प्टन", correct: true },
            { text: "बर्मिंघम", correct: false },
        ]),
    },
    {
        question: "ऑस्ट्रिया का कौनसा शहर स्की और शीतकालीन खेल उपकरण उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "वियना", correct: false },
            { text: "ग्राज़", correct: false },
            { text: "इंसब्रुक", correct: true },
            { text: "साल्ज़बर्ग", correct: false },
        ]),
    },
    {
        question: "ताइवान का कौनसा शहर कंप्यूटर चिप और इलेक्ट्रॉनिक्स उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "ताइपे", correct: false },
            { text: "ताओयुआन", correct: false },
            { text: "ह्सिंचु", correct: true },
            { text: "ताइचुंग", correct: false },
        ]),
    },
    {
        question: "फिनलैंड का कौनसा शहर कागज और लुगदी उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "हेलसिंकी", correct: false },
            { text: "टेंपरे", correct: false },
            { text: "य्वस्स्क्य्ला", correct: false },
            { text: "कौवोला", correct: true },
        ]),
    },
    {
        question: "संयुक्त राज्य अमेरिका का कौनसा शहर 'पल्प और पेपर' उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "पोर्टलैंड (मेनी)", correct: true },
            { text: "सिएटल", correct: false },
            { text: "सेंट लुइस", correct: false },
            { text: "फिलाडेल्फिया", correct: false },
        ]),
    },
    {
        question: "ग्रीस का कौनसा शहर जैतून का तेल प्रसंस्करण और कपड़ा उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "एथेंस", correct: false },
            { text: "थेसालोनिकी", correct: true },
            { text: "पाटरास", correct: false },
            { text: "हेराक्लिओन", correct: false },
        ]),
    },
    {
        question: "पाकिस्तान का कौनसा शहर खेल के सामान (स्पोर्ट्स गुड्स) उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कराची", correct: false },
            { text: "लाहौर", correct: false },
            { text: "सियालकोट", correct: true },
            { text: "पेशावर", correct: false },
        ]),
    },
    {
        question: "भारत का कौनसा शहर कांच उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "फिरोजाबाद", correct: true },
            { text: "बनारस", correct: false },
            { text: "जयपुर", correct: false },
            { text: "अमृतसर", correct: false },
        ]),
    },
    {
        question: "कोलंबिया का कौनसा शहर कॉफी प्रसंस्करण का प्रमुख केंद्र है?",
        answers: shuffle([
            { text: "बोगोटा", correct: false },
            { text: "मेडेलिन", correct: false },
            { text: "कैली", correct: false },
            { text: "अर्मेनिया", correct: true },
        ]),
    },
    {
        question: "हंगरी का कौनसा शहर ऑटोमोबाइल और इलेक्ट्रॉनिक्स उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "बुडापेस्ट", correct: false },
            { text: "देब्रेसेन", correct: false },
            { text: "ग्यॉर", correct: true },
            { text: "सेगेद", correct: false },
        ]),
    },
    {
        question: "स्लोवाकिया का कौनसा शहर ऑटोमोबाइल उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "ब्रातिस्लावा", correct: true },
            { text: "कोसिसे", correct: false },
            { text: "त्रनावा", correct: false },
            { text: "पोपराड", correct: false },
        ]),
    },
    {
        question: "चेक गणराज्य का कौनसा शहर बीयर उद्योग (पिल्सनर) के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "प्राग", correct: false },
            { text: "ब्रनो", correct: false },
            { text: "ओस्ट्रावा", correct: false },
            { text: "पिल्सेन", correct: true },
        ]),
    },
    {
        question: "स्वीडन का कौनसा शहर फर्नीचर उद्योग (IKEA) के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "स्टॉकहोम", correct: false },
            { text: "एल्महल्ट", correct: true },
            { text: "माल्मो", correct: false },
            { text: "गोटेनबर्ग", correct: false },
        ]),
    },
    {
        question: "भारत का कौनसा शहर एल्यूमीनियम उद्योग का प्रमुख केंद्र है?",
        answers: shuffle([
            { text: "कोरबा (छत्तीसगढ़)", correct: true },
            { text: "रेणुकूट (उत्तरप्रदेश)", correct: true },
            { text: "हीराकुंड (ओडिशा)", correct: true },
            { text: "उपरोक्त सभी", correct: true },
        ]),
    },
    {
        question: "चिली का कौनसा शहर तांबा खनन उद्योग के लिए जाना जाता है?",
        answers: shuffle([
            { text: "सैंटियागो", correct: false },
            { text: "वालपराइसो", correct: false },
            { text: "एंटोफागास्टा", correct: true },
            { text: "ला सेरेना", correct: false },
        ]),
    },
    {
        question: "संयुक्त राज्य अमेरिका का कौनसा शहर कांच और सिरेमिक उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "फिलाडेल्फिया", correct: false },
            { text: "पिट्सबर्ग", correct: false },
            { text: "टोलेडो", correct: true },
            { text: "सैन फ्रांसिस्को", correct: false },
        ]),
    },
    {
        question: "ऑस्ट्रेलिया का कौनसा शहर ऊन प्रसंस्करण उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "मेलबर्न", correct: true },
            { text: "सिडनी", correct: false },
            { text: "पर्थ", correct: false },
            { text: "ब्रिस्बेन", correct: false },
        ]),
    },
    {
        question: "स्पेन का कौनसा शहर जहाज निर्माण उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "बार्सिलोना", correct: false },
            { text: "मैड्रिड", correct: false },
            { text: "सेविले", correct: false },
            { text: "फेरोल", correct: true },
        ]),
    },
    {
        question: "भारत का कौनसा शहर प्लास्टिक उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "मुंबई", correct: true },
            { text: "चेन्नई", correct: false },
            { text: "बेंगलुरु", correct: false },
            { text: "अहमदाबाद", correct: false },
        ]),
    },
    {
        question: "तंजानिया का कौनसा शहर कॉफी और चाय प्रसंस्करण के लिए जाना जाता है?",
        answers: shuffle([
            { text: "डोडोमा", correct: false },
            { text: "दार एस सलाम", correct: false },
            { text: "मोरोर्गोरो", correct: true },
            { text: "अरुषा", correct: false },
        ]),
    },
    {
        question: "रूस का कौनसा शहर हीरे की कटिंग और पॉलिशिंग का केंद्र है?",
        answers: shuffle([
            { text: "मॉस्को", correct: false },
            { text: "याकुत्स्क", correct: true },
            { text: "नोवोसिबिर्स्क", correct: false },
            { text: "कज़ान", correct: false },
        ]),
    },
    {
        question: "फिलीपींस का कौनसा शहर इलेक्ट्रॉनिक्स और सेमीकंडक्टर उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "मनीला", correct: false },
            { text: "सेबू", correct: false },
            { text: "कालाम्बा", correct: true },
            { text: "सुबिक बे", correct: false },
        ]),
    },
    {
        question: "भारत का कौनसा शहर 'भारत की फार्मा घाटी' के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "हैदराबाद", correct: true },
            { text: "अहमदाबाद", correct: false },
            { text: "पुणे", correct: false },
            { text: "बैंगलोर", correct: false },
        ]),
    },
    {
        question: "मिस्र का कौनसा शहर कपड़ा और वस्त्र उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "काहिरा", correct: false },
            { text: "अलेक्जेंड्रिया", correct: true },
            { text: "पोर्ट सईद", correct: false },
            { text: "मेन्सौरा", correct: false },
        ]),
    },
    {
        question: "संयुक्त राज्य अमेरिका का कौनसा शहर कंप्यूटर चिप्स और सेमीकंडक्टर का केंद्र है?",
        answers: shuffle([
            { text: "लॉस एंजेलिस", correct: false },
            { text: "सैन जोस (सिलिकॉन वैली)", correct: true },
            { text: "डलास", correct: false },
            { text: "शिकागो", correct: false },
        ]),
    },
    {
        question: "स्पेन का कौनसा शहर ऑटोमोबाइल और एयरोस्पेस उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "मैड्रिड", correct: false },
            { text: "बार्सिलोना", correct: false },
            { text: "सेविले", correct: true },
            { text: "वालेंसिया", correct: false },
        ]),
    },
    {
        question: "भारत का कौनसा शहर नमक उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "कांडला (गुजरात)", correct: true },
            { text: "गांधीधाम (गुजरात)", correct: true },
            { text: "भावनगर (गुजरात)", correct: true },
            { text: "उपरोक्त सभी", correct: true },
        ]),
    },
    {
        question: "जर्मनी का कौनसा शहर प्रिंटिंग प्रेस उद्योग के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "बर्लिन", correct: false },
            { text: "म्यूनिख", correct: false },
            { text: "हाइडलबर्ग", correct: true },
            { text: "हैम्बर्ग", correct: false },
        ]),
    },
    {
        question: "कनाडा का कौनसा शहर लकड़ी और लुगदी उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "वैंकूवर", correct: true },
            { text: "टोरंटो", correct: false },
            { text: "हैलिफ़ैक्स", correct: false },
            { text: "क्यूबेक सिटी", correct: false },
        ]),
    },
    {
        question: "बेल्जियम का कौनसा शहर कालीन और फर्श कवरिंग उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "ब्रसेल्स", correct: false },
            { text: "एंटवर्प", correct: false },
            { text: "गेन्ट", correct: false },
            { text: "कोर्ट्रिजक", correct: true },
        ]),
    },
    {
        question: "भारत का कौनसा शहर चीनी मिट्टी के बर्तन उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "खुर्जा (उत्तरप्रदेश)", correct: true },
            { text: "जयपुर (राजस्थान)", correct: false },
            { text: "फिरोजाबाद (उत्तरप्रदेश)", correct: false },
            { text: "कन्नौज (उत्तरप्रदेश)", correct: false },
        ]),
    },
    {
        question: "संयुक्त राज्य अमेरिका का कौनसा शहर फर्नीचर उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "शिकागो", correct: false },
            { text: "फिलाडेल्फिया", correct: false },
            { text: "हाई पॉइंट (उत्तरी कैरोलिना)", correct: true },
            { text: "डेट्रॉइट", correct: false },
        ]),
    },
    {
        question: "दक्षिण कोरिया का कौनसा शहर ऑटोमोबाइल और जहाज निर्माण उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "सियोल", correct: false },
            { text: "बुसान", correct: false },
            { text: "उल्सान", correct: true },
            { text: "इंचियोन", correct: false },
        ]),
    },
    {
        question: "मलेशिया का कौनसा शहर रबड़ उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "कुआलालंपुर", correct: false },
            { text: "इपोह", correct: true },
            { text: "सेलांगोर", correct: false },
            { text: "पेनांग", correct: false },
        ]),
    },
    {
        question: "भारत का कौनसा शहर 'कागज उद्योग' का प्रमुख केंद्र है?",
        answers: shuffle([
            { text: "बल्लारपुर (महाराष्ट्र)", correct: true },
            { text: "नेपानगर (मध्यप्रदेश)", correct: true },
            { text: "टीटागढ़ (पश्चिम बंगाल)", correct: true },
            { text: "उपरोक्त सभी", correct: true },
        ]),
    },
    {
        question: "इटली का कौनसा शहर टायर और रबड़ उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "मिलान", correct: true },
            { text: "रोम", correct: false },
            { text: "टोरिनो", correct: false },
            { text: "नेपल्स", correct: false },
        ]),
    },
    {
        question: "जर्मनी का कौनसा शहर खिलौना उद्योग का केंद्र है?",
        answers: shuffle([
            { text: "बर्लिन", correct: false },
            { text: "म्यूनिख", correct: false },
            { text: "न्यूरेमबर्ग", correct: true },
            { text: "कोलोन", correct: false },
        ]),
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