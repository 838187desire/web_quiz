const questions = [ 
    {
        topHeading: "विश्व के प्रमुख देशों की राजधानियों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 3  (quiz_no. 82)."
    },
    {
        question: "युगांडा की राजधानी क्या है?",
        answers: shuffle([
            { text: "जीन्जा", correct: false },
            { text: "कंपाला", correct: true },
            { text: "एंटेबे", correct: false },
            { text: "सोरोटी", correct: false }
        ]),
    },
    {
        question: "रवांडा की राजधानी क्या है?",
        answers: shuffle([
            { text: "गिसेंयी", correct: false },
            { text: "किगाली", correct: true },
            { text: "रुहेंगेरी", correct: false },
            { text: "बुतारे", correct: false }
        ]),
    },
    {
        question: "बुरुंडी की राजधानी क्या है?",
        answers: shuffle([
            { text: "रूयीगी", correct: false },
            { text: "गिटेगा", correct: true },
            { text: "बुजुम्बुरा", correct: false },
            { text: "मुरमव्य", correct: false }
        ]),
    },
    {
        question: "सोमालिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "बोसासो", correct: false },
            { text: "मोगादिशु", correct: true },
            { text: "किसमायो", correct: false },
            { text: "बेलेडवेन", correct: false }
        ]),
    },
    {
        question: "जिबूती की राजधानी क्या है?",
        answers: shuffle([
            { text: "अली-सबीह", correct: false },
            { text: "डिगिल", correct: false },
            { text: "जिबूती शहर", correct: true },
            { text: "ताजोरा", correct: false }
        ]),
    },
    {
        question: "इरिट्रिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "केरेन", correct: false },
            { text: "असब", correct: false },
            { text: "असारा", correct: false },
            { text: "अस्मार", correct: true }
        ]),
    },
    {
        question: "सूडान की राजधानी क्या है?",
        answers: shuffle([
            { text: "ओमदुरमान", correct: false },
            { text: "पोर्ट सूडान", correct: false },
            { text: "खारतूम", correct: true },
            { text: "कादुगली", correct: false }
        ]),
    },
    {
        question: "दक्षिण सूडान की राजधानी क्या है?",
        answers: shuffle([
            { text: "जुबा", correct: true },
            { text: "मलकाल", correct: false },
            { text: "बोमो", correct: false },
            { text: "वाऊ", correct: false }
        ]),
    },
    {
        question: "मध्य अफ्रीकी गणराज्य की राजधानी क्या है?",
        answers: shuffle([
            { text: "बंबर", correct: false },
            { text: "बोसानगोआ", correct: false },
            { text: "बंगुई", correct: true },
            { text: "बर्बेराती", correct: false }
        ]),
    },
    {
        question: "चाड की राजधानी क्या है?",
        answers: shuffle([
            { text: "मुंडु", correct: false },
            { text: "अबेशे", correct: false },
            { text: "न'जामेना", correct: true },
            { text: "सार्ह", correct: false }
        ]),
    },
    {
        question: "लीबिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "बेनगाज़ी", correct: false },
            { text: "मिसराता", correct: false },
            { text: "त्रिपोली", correct: true },
            { text: "ज़ुवारा", correct: false }
        ]),
    },
    {
        question: "अल्जीरिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "ऑरन", correct: false },
            { text: "अन्नाबा", correct: false },
            { text: "अल्जीयर्स", correct: true },
            { text: "सेतिफ़", correct: false }
        ]),
    },
    {
        question: "ट्यूनीशिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "स्फाक्स", correct: false },
            { text: "सूसे", correct: false },
            { text: "ट्यूनिस", correct: true },
            { text: "क़ायिरवान", correct: false }
        ]),
    },
    {
        question: "मोरक्को की राजधानी क्या है?",
        answers: shuffle([
            { text: "कासाब्लांका", correct: false },
            { text: "माराकेश", correct: false },
            { text: "रबात", correct: true },
            { text: "फेज", correct: false }
        ]),
    },
    {
        question: "मॉरिटानिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "नोआदिबू", correct: false },
            { text: "केडी", correct: false },
            { text: "ज़ौएरात", correct: false },
            { text: "नुआकशोत", correct: true }
        ]),
    },
    {
        question: "सेनेगल की राजधानी क्या है?",
        answers: shuffle([
            { text: "थिएस", correct: false },
            { text: "जिगुइंचोर", correct: false },
            { text: "डकार", correct: true },
            { text: "सेंट-लुइस", correct: false }
        ]),
    },
    {
        question: "गैबॉन की राजधानी क्या है?",
        answers: shuffle([
            { text: "पोर्ट-जेंटिल", correct: false },
            { text: "ओयेम", correct: false },
            { text: "लिब्रेविले", correct: true },
            { text: "मौइला", correct: false }
        ]),
    },
    {
        question: "अंगोला की राजधानी क्या है?",
        answers: shuffle([
            { text: "लुबिंटो", correct: false },
            { text: "काबinda", correct: false },
            { text: "हुआम्बो", correct: false },
            { text: "लुआंडा", correct: true }
        ]),
    },
    {
        question: "जाम्बिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "कबवे", correct: false },
            { text: "नडोला", correct: false },
            { text: "लुसाका", correct: true },
            { text: "किटवे", correct: false }
        ]),
    },
    {
        question: "जिम्बाब्वे की राजधानी क्या है?",
        answers: shuffle([
            { text: "बुलावायो", correct: false },
            { text: "हारारे", correct: true },
            { text: "चिन्होयी", correct: false },
            { text: "मुतारे", correct: false }
        ]),
    },
    {
        question: "बोत्सवाना की राजधानी क्या है?",
        answers: shuffle([
            { text: "फ्रैंन्सिसटाउन", correct: false },
            { text: "गबोरोन", correct: true },
            { text: "सेरोवे", correct: false },
            { text: "माउन", correct: false }
        ]),
    },
    {
        question: "नामीबिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "स्वाकोपमुंड", correct: false },
            { text: "विंडहोक", correct: true },
            { text: "वाल्विस बे", correct: false },
            { text: "ओशकाटी", correct: false }
        ]),
    },
    {
        question: "मेडागास्कर की राजधानी क्या है?",
        answers: shuffle([
            { text: "तोमासिना", correct: false },
            { text: "अन्ताननरीवो", correct: true },
            { text: "महाजांगा", correct: false },
            { text: "फिआनारंट्सोआ", correct: false }
        ]),
    },
    {
        question: "मॉरीशस की राजधानी क्या है?",
        answers: shuffle([
            { text: "पोर्ट लुइस", correct: true },
            { text: "वाकोआस-फेनिक्स", correct: false },
            { text: "क्युरेपाइप", correct: false },
            { text: "बिया-बैच", correct: false }
        ]),
    },
    {
        question: "केप वर्डे की राजधानी क्या है?",
        answers: shuffle([
            { text: "माइंडेलो", correct: false },
            { text: "पोर्टोनोवो", correct: false },
            { text: "साओ विसेंट", correct: false },
            { text: "प्राया", correct: true }
        ]),
    },
    {
        question: "सेशेल्स की राजधानी क्या है?",
        answers: shuffle([
            { text: "ग्रांड एन्से", correct: false },
            { text: "विक्टोरिया", correct: true },
            { text: "बो वल्लन", correct: false },
            { text: "अन्से रॉयल", correct: false }
        ]),
    },
    {
        question: "कोमोरोस की राजधानी क्या है?",
        answers: shuffle([
            { text: "मोरोनी", correct: true },
            { text: "मुत्सामुदु", correct: false },
            { text: "फोम्बोनी", correct: false },
            { text: "डोमोनी", correct: false }
        ]),
    },
    {
        question: "जिम्बाब्वे की राजधानी क्या है?",
        answers: shuffle([
            { text: "बुलावायो", correct: false },
            { text: "हारारे", correct: true },
            { text: "गुएरु", correct: false },
            { text: "मुतारे", correct: false }
        ]),
    },
    {
        question: "मलावी की राजधानी क्या है?",
        answers: shuffle([
            { text: "ब्लैंटायर", correct: false },
            { text: "लिलोंग्वे", correct: true },
            { text: "मजुज़ु", correct: false },
            { text: "ज़ोम्बा", correct: false }
        ]),
    },
    {
        question: "जाम्बिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "किटवे", correct: false },
            { text: "नडोला", correct: false },
            { text: "लुसाका", correct: true },
            { text: "कबवे", correct: false }
        ]),
    },
    {
        question: "ज़िम्बाब्वे की राजधानी क्या है?",
        answers: shuffle([
            { text: "बुलावायो", correct: false },
            { text: "हारारे", correct: true },
            { text: "गुएरु", correct: false },
            { text: "मुतारे", correct: false }
        ]),
    },
    {
        question: "लेसोथो की राजधानी क्या है?",
        answers: shuffle([
            { text: "तेयातेयान्एंग", correct: false },
            { text: "मासेरू", correct: true },
            { text: "लेरीबे", correct: false },
            { text: "मोहेलेस होक", correct: false }
        ]),
    },
    {
        question: "स्वाजीलैंड (इस्वातिनी) की राजधानी क्या है?",
        answers: shuffle([
            { text: "मानज़िनी", correct: false },
            { text: "मबाने", correct: true },
            { text: "लुबां", correct: false },
            { text: "शीसेलवेनी", correct: false }
        ]),
    },
    {
        question: "मोज़ाम्बिक की राजधानी क्या है?",
        answers: shuffle([
            { text: "मापुटो", correct: true },
            { text: "बेइरा", correct: false },
            { text: "नंपुला", correct: false },
            { text: "क्वेलिमाने", correct: false }
        ]),
    },
    {
        question: "अंगोला की राजधानी क्या है?",
        answers: shuffle([
            { text: "हुआम्बो", correct: false },
            { text: "लुबिंटो", correct: false },
            { text: "लुआंडा", correct: true },
            { text: "मोक्सीको", correct: false }
        ]),
    },
    {
        question: "कांगो गणराज्य (Congo Republic) की राजधानी क्या है?",
        answers: shuffle([
            { text: "डोलिसी", correct: false },
            { text: "पॉइन्टे-नोइरे", correct: false },
            { text: "ब्रेज़ाविल", correct: true },
            { text: "ओवेसो", correct: false }
        ]),
    },
    {
        question: "साओ टोमे और प्रिंसिपे की राजधानी क्या है?",
        answers: shuffle([
            { text: "साओ टोमे", correct: true },
            { text: "प्रिंसिपे", correct: false },
            { text: "सैंटो एंटोनियो", correct: false },
            { text: "ट्रैवासो", correct: false }
        ]),
    },
    {
        question: "इक्वेटोरियल गिनी की राजधानी क्या है?",
        answers: shuffle([
            { text: "मासां", correct: false },
            { text: "लुबा", correct: false },
            { text: "मोंगोमो", correct: false },
            { text: "मालबो", correct: true }
        ]),
    },
    {
        question: "कैमरून की राजधानी क्या है?",
        answers: shuffle([
            { text: "डौआला", correct: false },
            { text: "योऊंडे", correct: true },
            { text: "बाफुसाम", correct: false },
            { text: "गारोउआ", correct: false }
        ]),
    },
    {
        question: "नाइजर की राजधानी क्या है?",
        answers: shuffle([
            { text: "ज़ीन्डर", correct: false },
            { text: "मारादी", correct: false },
            { text: "नियामी", correct: true },
            { text: "ताहुआ", correct: false }
        ]),
    },
    {
        question: "बुर्किना फासो की राजधानी क्या है?",
        answers: shuffle([
            { text: "बोबो डिओलासो", correct: false },
            { text: "काया", correct: false },
            { text: "औगाडौगौ", correct: true },
            { text: "कुदुगू", correct: false }
        ]),
    },
    {
        question: "गिनी-बिसाऊ की राजधानी क्या है?",
        answers: shuffle([
            { text: "बिसाऊ", correct: true },
            { text: "कैचिंगु", correct: false },
            { text: "बिओना", correct: false },
            { text: "गाबु", correct: false }
        ]),
    },
    {
        question: "गैम्बिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "सेरेकुंडा", correct: false },
            { text: "बंजुल", correct: true },
            { text: "ब्रिकमा", correct: false },
            { text: "कनिफिंग", correct: false }
        ]),
    },
    {
        question: "लाइबेरिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "गान्ता", correct: false },
            { text: "बुचनन", correct: false },
            { text: "मोनरोविया", correct: true },
            { text: "हार्पर", correct: false }
        ]),
    },
    {
        question: "सिएरा लियोन की राजधानी क्या है?",
        answers: shuffle([
            { text: "बो", correct: false },
            { text: "केनेमा", correct: false },
            { text: "फ्रीटाउन", correct: true },
            { text: "मैकेनी", correct: false }
        ]),
    },
    {
        question: "मॉरिटानिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "नोआदिबू", correct: false },
            { text: "केडी", correct: false },
            { text: "नुआकशोत", correct: true },
            { text: "ज़ौएरात", correct: false }
        ]),
    },
    {
        question: "माल्टा की राजधानी क्या है?",
        answers: shuffle([
            { text: "बिरगु", correct: false },
            { text: "वैलेटा", correct: true },
            { text: "मदीना", correct: false },
            { text: "गोज़ो", correct: false }
        ]),
    },
    {
        question: "स्लोवेनिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "मारिबोर", correct: false },
            { text: "क्रेनज", correct: false },
            { text: "ल्यूबियाना", correct: true },
            { text: "सेलजे", correct: false }
        ]),
    },
    {
        question: "अल्बेनिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "तिराना", correct: true },
            { text: "श्कोदर", correct: false },
            { text: "दुरी", correct: false },
            { text: "एलबासन", correct: false }
        ]),
    },
    {
        question: "मोंटेनेग्रो की राजधानी क्या है?",
        answers: shuffle([
            { text: "निशिक", correct: false },
            { text: "पोडगोरिका", correct: true },
            { text: "बार", correct: false },
            { text: "कोटर", correct: false }
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