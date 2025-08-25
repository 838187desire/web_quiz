const questions = [ 
    {
        topHeading: "विश्व के प्रमुख देशों की राजधानियों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 4  (quiz_no. 83)."
    },
    {
        question: "कोसोवो की राजधानी क्या है?",
        answers: shuffle([
            { text: "प्रिज़्रेन", correct: false },
            { text: "प्रिष्टिना", correct: true },
            { text: "मिट्रोविका", correct: false },
            { text: "पेजा", correct: false }
        ]),
    },
    {
        question: "पुर्तगाल की राजधानी क्या है?",
        answers: shuffle([
            { text: "पोर्टो", correct: false },
            { text: "लिस्बन", correct: true },
            { text: "फातिमा", correct: false },
            { text: "कोइम्ब्रा", correct: false }
        ]),
    },
    {
        question: "अंडोरा की राजधानी क्या है?",
        answers: shuffle([
            { text: "कैनिलो", correct: false },
            { text: "एन्कैम्प", correct: false },
            { text: "अंडोरा लावेला", correct: true },
            { text: "सेंट जूलिया डे लोरिया", correct: false }
        ]),
    },
    {
        question: "माल्टा की राजधानी क्या है?",
        answers: shuffle([
            { text: "वैलेटा", correct: true },
            { text: "बिर्किरकारा", correct: false },
            { text: "स्लीमा", correct: false },
            { text: "हमरून", correct: false }
        ]),
    },
    {
        question: "सैन मैरिनो की राजधानी क्या है?",
        answers: shuffle([
            { text: "बोर्गो मैगियोरे", correct: false },
            { text: "सैन मैरिनो शहर", correct: true },
            { text: "एक्वि लिबेरिया", correct: false },
            { text: "सेरावाले", correct: false }
        ]),
    },
    {
        question: "वेटिकन सिटी की राजधानी क्या है?",
        answers: shuffle([
            { text: "रोम", correct: false },
            { text: "वेटिकन सिटी", correct: true },
            { text: "फ्लोरेंस", correct: false },
            { text: "मिलान", correct: false }
        ]),
    },
    {
        question: "ऑस्ट्रिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "साल्ज़बर्ग", correct: false },
            { text: "ग्राज़", correct: false },
            { text: "वियना", correct: true },
            { text: "इंसब्रुक", correct: false }
        ]),
    },
    {
        question: "लक्समबर्ग की राजधानी क्या है?",
        answers: shuffle([
            { text: "एस्च-सुर-अल्ज़ेट", correct: false },
            { text: "लक्समबर्ग शहर", correct: true },
            { text: "डूडेलान्जे", correct: false },
            { text: "डिफ़र्डेंज", correct: false }
        ]),
    },
    {
        question: "मोल्डोवा की राजधानी क्या है?",
        answers: shuffle([
            { text: "बाल्टी", correct: false },
            { text: "किशिनाउ", correct: true },
            { text: "त्रेरास्पोल", correct: false },
            { text: "बेंडरी", correct: false }
        ]),
    },
    {
        question: "लिचेंस्टीन की राजधानी क्या है?",
        answers: shuffle([
            { text: "श्चान", correct: false },
            { text: "वाडूज़", correct: true },
            { text: "गमप्रिन", correct: false },
            { text: "बाल्ज़र्स", correct: false }
        ]),
    },
    {
        question: "स्लोवाकिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "कोसिसे", correct: false },
            { text: "ब्रातिस्लावा", correct: true },
            { text: "प्रेसोव", correct: false },
            { text: "ज़िलिना", correct: false }
        ]),
    },
    {
        question: "चेक गणराज्य की राजधानी क्या है?",
        answers: shuffle([
            { text: "प्राग", correct: true },
            { text: "ब्रनो", correct: false },
            { text: "ओस्ट्रावा", correct: false },
            { text: "प्लाज़ेन", correct: false }
        ]),
    },
    {
        question: "पोलैंड की राजधानी क्या है?",
        answers: shuffle([
            { text: "वारसॉ", correct: true },
            { text: "क्राको", correct: false },
            { text: "लॉड्ज़", correct: false },
            { text: "व्रोकला", correct: false }
        ]),
    },
    {
        question: "हंगरी की राजधानी क्या है?",
        answers: shuffle([
            { text: "देब्रेसेन", correct: false },
            { text: "सेगेद", correct: false },
            { text: "बुडापेस्ट", correct: true },
            { text: "मिस्कॉलक", correct: false }
        ]),
    },
    {
        question: "बेलारूस की राजधानी क्या है?",
        answers: shuffle([
            { text: "गोमेल", correct: false },
            { text: "मिन्स्क", correct: true },
            { text: "मोहिलेव", correct: false },
            { text: "विटेब्स्क", correct: false }
        ]),
    },
    {
        question: "यूक्रेन की राजधानी क्या है?",
        answers: shuffle([
            { text: "कीव", correct: true },
            { text: "खार्किव", correct: false },
            { text: "ओडेसा", correct: false },
            { text: "लविव", correct: false }
        ]),
    },
    {
        question: "रोमानिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "बुखारेस्ट", correct: true },
            { text: "तिमिसोरा", correct: false },
            { text: "क्लुज-नापोका", correct: false },
            { text: "इयासी", correct: false }
        ]),
    },
    {
        question: "बुल्गारिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "सोफिया", correct: true },
            { text: "वार्ना", correct: false },
            { text: "प्लोवदिव", correct: false },
            { text: "बर्गास", correct: false }
        ]),
    },
    {
        question: "अल्बानिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "तिराना", correct: true },
            { text: "श्कोदर", correct: false },
            { text: "एलबासन", correct: false },
            { text: "दुरी", correct: false }
        ]),
    },
    {
        question: "उत्तरी मैसेडोनिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "स्कोपजे", correct: true },
            { text: "बिटोला", correct: false },
            { text: "कुमानोवो", correct: false },
            { text: "प्रिलेप", correct: false }
        ]),
    },
    {
        question: "बोस्निया और हर्जेगोविना की राजधानी क्या है?",
        answers: shuffle([
            { text: "सारायेवो", correct: true },
            { text: "बनजा लुका", correct: false },
            { text: "तुजला", correct: false },
            { text: "ज़ेनिका", correct: false }
        ]),
    },
    {
        question: "सर्बिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "बेलग्रेड", correct: true },
            { text: "नोवी सैड", correct: false },
            { text: "निस", correct: false },
            { text: "क्रागुजेवैक", correct: false }
        ]),
    },
    {
        question: "क्रोएशिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "ज़ाग्रेब", correct: true },
            { text: "स्प्लिट", correct: false },
            { text: "रिजेका", correct: false },
            { text: "दुब्रोवनिक", correct: false }
        ]),
    },
    {
        question: "स्लोवेनिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "ल्यूबियाना", correct: true },
            { text: "मारिबोर", correct: false },
            { text: "क्रेनज", correct: false },
            { text: "सेलजे", correct: false }
        ]),
    },
    {
        question: "साइप्रस की राजधानी क्या है?",
        answers: shuffle([
            { text: "लिमासोल", correct: false },
            { text: "लार्नाका", correct: false },
            { text: "निकोसिया", correct: true },
            { text: "पफोस", correct: false }
        ]),
    },
    {
        question: "क्यूबा की राजधानी क्या है?",
        answers: shuffle([
            { text: "सैंटियागो डी क्यूबा", correct: false },
            { text: "हवाना", correct: true },
            { text: "कैमागुए", correct: false },
            { text: "होलगुइन", correct: false }
        ]),
    },
    {
        question: "डोमिनिकन गणराज्य की राजधानी क्या है?",
        answers: shuffle([
            { text: "सैंटियागो डी लॉस कैबेलरोस", correct: false },
            { text: "सैंटो डोमिंगो", correct: true },
            { text: "ला रोमाना", correct: false },
            { text: "सैन पेड्रो डी मैकोरिसी", correct: false }
        ]),
    },
    {
        question: "हैती की राजधानी क्या है?",
        answers: shuffle([
            { text: "कैप-हैतियन", correct: false },
            { text: "पोर्ट-ऑ-प्रिंस", correct: true },
            { text: "जकमेल", correct: false },
            { text: "लेस केयेस", correct: false }
        ]),
    },
    {
        question: "जमैका की राजधानी क्या है?",
        answers: shuffle([
            { text: "मोंटेगो बे", correct: false },
            { text: "किंग्स्टन", correct: true },
            { text: "पोर्टमोर", correct: false },
            { text: "स्पेनिश टाउन", correct: false }
        ]),
    },
    {
        question: "बहामास की राजधानी क्या है?",
        answers: shuffle([
            { text: "फ्रीपोर्ट", correct: false },
            { text: "वेस्ट एंड", correct: false },
            { text: "नासाउ", correct: true },
            { text: "क्लेरेंस टाउन", correct: false }
        ]),
    },
    {
        question: "त्रिनिदाद और टोबैगो की राजधानी क्या है?",
        answers: shuffle([
            { text: "सैन फर्नांडो", correct: false },
            { text: "पोर्ट ऑफ स्पेन", correct: true },
            { text: "चगवानस", correct: false },
            { text: "अरीमा", correct: false }
        ]),
    },
    {
        question: "बारबाडोस की राजधानी क्या है?",
        answers: shuffle([
            { text: "ओइस्टिन्स", correct: false },
            { text: "ब्रिगेटाउन", correct: true },
            { text: "स्पाइटस्टाउन", correct: false },
            { text: "होलेटाउन", correct: false }
        ]),
    },
    {
        question: "सेंट लूसिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "कास्ट्रीज", correct: true },
            { text: "ग्रोस आइलेट", correct: false },
            { text: "सोफरिएरे", correct: false },
            { text: "विएक्स फोर्ट", correct: false }
        ]),
    },
    {
        question: "ग्रेनाडा की राजधानी क्या है?",
        answers: shuffle([
            { text: "सेंट जॉर्ज", correct: true },
            { text: "गौयावे", correct: false },
            { text: "विक्टोरिया", correct: false },
            { text: "ग्रेनविले", correct: false }
        ]),
    },
    {
        question: "सेंट विंसेंट और ग्रेनाडाइन्स की राजधानी क्या है?",
        answers: shuffle([
            { text: "जॉर्जटाउन", correct: false },
            { text: "किंग्सटाउन", correct: true },
            { text: "लायू", correct: false },
            { text: "लेयूस", correct: false }
        ]),
    },
    {
        question: "एंटीगुआ और बारबुडा की राजधानी क्या है?",
        answers: shuffle([
            { text: "जॉनसन", correct: false },
            { text: "सेंट जॉन'स", correct: true },
            { text: "लिबर्ता", correct: false },
            { text: "ऑल सेंट्स", correct: false }
        ]),
    },
    {
        question: "डोमिनिका की राजधानी क्या है?",
        answers: shuffle([
            { text: "मेरिएल", correct: false },
            { text: "रोसो", correct: true },
            { text: "पोर्ट्समाउथ", correct: false },
            { text: "लेम्बे", correct: false }
        ]),
    },
    {
        question: "सेंट किट्स और नेविस की राजधानी क्या है?",
        answers: shuffle([
            { text: "चार्ल्सटाउन", correct: false },
            { text: "बस्सेतेर्रे", correct: true },
            { text: "सैमुअल", correct: false },
            { text: "जोंसन", correct: false }
        ]),
    },
    {
        question: "गुयाना की राजधानी क्या है?",
        answers: shuffle([
            { text: "न्यू एम्स्टर्डम", correct: false },
            { text: "जॉर्जटाउन", correct: true },
            { text: "लिंडन", correct: false },
            { text: "अन्ना रेजिना", correct: false }
        ]),
    },
    {
        question: "सूरीनाम की राजधानी क्या है?",
        answers: shuffle([
            { text: "पारामाइबो", correct: true },
            { text: "न्यूनिक्केरी", correct: false },
            { text: "ब्रोनस्विग", correct: false },
            { text: "मोएंगो", correct: false }
        ]),
    },
    {
        question: "फ्रेंच गुयाना की राजधानी क्या है?",
        answers: shuffle([
            { text: "कायेने", correct: true },
            { text: "सेंट-लॉरेंट-डु-मारोनी", correct: false },
            { text: "कोरोउ", correct: false },
            { text: "सिनामेरी", correct: false }
        ]),
    },
    {
        question: "वेनेजुएला की राजधानी क्या है?",
        answers: shuffle([
            { text: "माराकाइबो", correct: false },
            { text: "वालेंसिया", correct: false },
            { text: "काराकास", correct: true },
            { text: "बारकिसिमेतो", correct: false }
        ]),
    },
    {
        question: "कोलंबिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "मेडलिन", correct: false },
            { text: "काली", correct: false },
            { text: "बोगोटा", correct: true },
            { text: "बैरेंक्विला", correct: false }
        ]),
    },
    {
        question: "इक्वाडोर की राजधानी क्या है?",
        answers: shuffle([
            { text: "गुआयाकिल", correct: false },
            { text: "क्विटो", correct: true },
            { text: "कुएंका", correct: false },
            { text: "सैंटो डोमिंगो", correct: false }
        ]),
    },
    {
        question: "पेरू की राजधानी क्या है?",
        answers: shuffle([
            { text: "अरेक्विपा", correct: false },
            { text: "कुज़्को", correct: false },
            { text: "लीमा", correct: true },
            { text: "चिक्लायो", correct: false }
        ]),
    },
    {
        question: "बोलीविया की राजधानी क्या है?",
        answers: shuffle([
            { text: "ला पाज़", correct: false },
            { text: "सुक्रे", correct: true },
            { text: "सांता क्रूज़", correct: false },
            { text: "कोचाबम्बा", correct: false }
        ]),
    },
    {
        question: "चिली की राजधानी क्या है?",
        answers: shuffle([
            { text: "वालपराइसो", correct: false },
            { text: "सैंटियागो", correct: true },
            { text: "कंसेप्शन", correct: false },
            { text: "ला सेरेना", correct: false }
        ]),
    },
    {
        question: "पराग्वे की राजधानी क्या है?",
        answers: shuffle([
            { text: "असुनसियन", correct: true },
            { text: "सिउदाद डेल एस्टे", correct: false },
            { text: "सैन लोरेंजो", correct: false },
            { text: "लामबारे", correct: false }
        ]),
    },
    {
        question: "उरुग्वे की राजधानी क्या है?",
        answers: shuffle([
            { text: "साल्टो", correct: false },
            { text: "मोंटेवीडियो", correct: true },
            { text: "पुंटा डेल एस्टे", correct: false },
            { text: "स्यूदाद दे ला कोस्टा", correct: false }
        ]),
    },
    {
        question: "जॉर्जिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "कुतैसी", correct: false },
            { text: "बटुमी", correct: false },
            { text: "त्बिलिसी", correct: true },
            { text: "रुस्तवी", correct: false }
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