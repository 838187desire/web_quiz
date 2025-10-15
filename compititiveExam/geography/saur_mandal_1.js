const questions = [
    {
        topHeading: "सौरमंडल पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "सौरमंडल का केंद्र कौन है और सभी ग्रह किसकी परिक्रमा करते हैं?",
        answers: shuffle([
            { text: "सूर्य", correct: true },
            { text: "पृथ्वी", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य अपने विशाल गुरुत्वाकर्षण बल के कारण सौरमंडल के सभी पिंडों को अपनी ओर आकर्षित करता है और सभी ग्रह उसकी परिक्रमा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: true },
            { text: "शनि", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "अरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति (Jupiter) का द्रव्यमान सौरमंडल के अन्य सभी ग्रहों के कुल द्रव्यमान से भी अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की ऊर्जा का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "नाभिकीय संलयन", correct: true },
            { text: "नाभिकीय विखंडन", correct: false },
            { text: "गुरुत्वाकर्षण संकुचन", correct: false },
            { text: "रासायनिक अभिक्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के केंद्र में हाइड्रोजन के परमाणु मिलकर हीलियम बनाते हैं, इस प्रक्रिया में अपार ऊर्जा उत्पन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बुध", correct: true },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध (Mercury) सूर्य के सबसे निकट और आकार में सबसे छोटा ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को 'लाल ग्रह' कहा जाता है?",
        answers: shuffle([
            { text: "मंगल", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल की सतह पर आयरन ऑक्साइड की अधिकता के कारण इसका रंग लाल दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे गर्म ग्रह कौन सा है?",
        answers: shuffle([
            { text: "शुक्र", correct: true },
            { text: "बुध", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र (Venus) के घने वायुमंडल में कार्बन डाइऑक्साइड की अधिकता के कारण तीव्र ग्रीनहाउस प्रभाव होता है, जो इसे सबसे गर्म ग्रह बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की 'जुड़वां बहन' किस ग्रह को कहा जाता है?",
        answers: shuffle([
            { text: "शुक्र", correct: true },
            { text: "मंगल", correct: false },
            { text: "बुध", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकार, द्रव्यमान और घनत्व में पृथ्वी से काफी समानता होने के कारण शुक्र को यह नाम दिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के प्रकाश को पृथ्वी तक पहुँचने में औसतन कितना समय लगता है?",
        answers: shuffle([
            { text: "8 मिनट 20 सेकंड", correct: true },
            { text: "5 मिनट 10 सेकंड", correct: false },
            { text: "10 मिनट 30 सेकंड", correct: false },
            { text: "12 मिनट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य और पृथ्वी के बीच की दूरी लगभग 15 करोड़ किलोमीटर है, और प्रकाश को यह दूरी तय करने में लगभग 8.3 मिनट लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह के चारों ओर स्पष्ट वलय (Rings) पाए जाते हैं?",
        answers: shuffle([
            { text: "शनि", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि (Saturn) के वलय बर्फ और चट्टानों के कणों से बने हैं और वे सौरमंडल में सबसे भव्य और स्पष्ट दिखाई देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'भोर का तारा' और 'सांझ का तारा' किस ग्रह का उपनाम है?",
        answers: shuffle([
            { text: "शुक्र", correct: true },
            { text: "मंगल", correct: false },
            { text: "बुध", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ग्रह सूर्योदय से ठीक पहले पूर्व में और सूर्यास्त के तुरंत बाद पश्चिम में दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य से दूरी के अनुसार ग्रहों का सही क्रम क्या है?",
        answers: shuffle([
            { text: "बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि, अरुण, वरुण", correct: true },
            { text: "बुध, शुक्र, मंगल, पृथ्वी, बृहस्पति, शनि, अरुण, वरुण", correct: false },
            { text: "बुध, पृथ्वी, शुक्र, मंगल, बृहस्पति, शनि, अरुण, वरुण", correct: false },
            { text: "बुध, शुक्र, पृथ्वी, मंगल, शनि, बृहस्पति, अरुण, वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सूर्य से बढ़ते हुए दूरी का सही क्रम है, जिसमें पहले चार आंतरिक और बाद के चार बाहरी ग्रह हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "क्षुद्रग्रह (Asteroids) की पट्टी किन दो ग्रहों के बीच स्थित है?",
        answers: shuffle([
            { text: "मंगल और बृहस्पति", correct: true },
            { text: "पृथ्वी और मंगल", correct: false },
            { text: "शनि और बृहस्पति", correct: false },
            { text: "अरुण और वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विशाल क्षेत्र है जिसमें लाखों छोटे-बड़े चट्टानी पिंड सूर्य की परिक्रमा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारे सौर मंडल का एकमात्र ग्रह कौन सा है जहाँ जीवन मौजूद है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: true },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "टाइटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी पर पानी की तरल अवस्था, उपयुक्त वायुमंडल और तापमान जीवन के लिए अनुकूल परिस्थितियाँ प्रदान करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का दूसरा सबसे बड़ा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "शनि", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि आकार और द्रव्यमान में बृहस्पति के बाद दूसरे स्थान पर आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को 'लेटा हुआ ग्रह' कहा जाता है?",
        answers: shuffle([
            { text: "अरुण (यूरेनस)", correct: true },
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "वरुण (नेप्च्यून)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण अपने अक्ष पर लगभग 98 डिग्री झुका हुआ है, जिस कारण यह अपनी कक्षा में लुढ़कता हुआ प्रतीत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के सबसे बाहरी परत को क्या कहते हैं?",
        answers: shuffle([
            { text: "किरीट या कोरोना (Corona)", correct: true },
            { text: "प्रकाशमंडल (Photosphere)", correct: false },
            { text: "वर्णमंडल (Chromosphere)", correct: false },
            { text: "क्रोड (Core)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरोना सूर्य का वायुमंडल है जो केवल पूर्ण सूर्य ग्रहण के दौरान ही नग्न आंखों से दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "फोबोस और डीमोस किस ग्रह के प्राकृतिक उपग्रह हैं?",
        answers: shuffle([
            { text: "मंगल", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों सौरमंडल के सबसे छोटे उपग्रहों में से हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे बड़ा उपग्रह कौन सा है?",
        answers: shuffle([
            { text: "गैनीमेड", correct: true },
            { text: "टाइटन", correct: false },
            { text: "चंद्रमा", correct: false },
            { text: "यूरोपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैनीमेड बृहस्पति का उपग्रह है और यह आकार में बुध ग्रह से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "प्लूटो को 'बौना ग्रह' का दर्जा कब दिया गया?",
        answers: shuffle([
            { text: "2006", correct: true },
            { text: "1996", correct: false },
            { text: "2001", correct: false },
            { text: "2010", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय खगोलीय संघ (IAU) ने ग्रह की परिभाषा में बदलाव करते हुए प्लूटो को इस नई श्रेणी में रखा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की सतह का तापमान लगभग कितना है?",
        answers: shuffle([
            { text: "6000 डिग्री सेल्सियस", correct: true },
            { text: "3000 डिग्री सेल्सियस", correct: false },
            { text: "10000 डिग्री सेल्सियस", correct: false },
            { text: "15000 डिग्री सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की दिखाई देने वाली सतह, जिसे प्रकाशमंडल कहते हैं, का तापमान लगभग 5500 से 6000 डिग्री सेल्सियस के बीच होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन से ग्रह पूर्व से पश्चिम की दिशा में घूमते हैं?",
        answers: shuffle([
            { text: "शुक्र और अरुण", correct: true },
            { text: "शुक्र और मंगल", correct: false },
            { text: "बुध और शुक्र", correct: false },
            { text: "पृथ्वी और मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन दो ग्रहों की घूर्णन दिशा बाकी सभी ग्रहों के विपरीत है, जिसे प्रतिगामी घूर्णन कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस गैस की उपस्थिति के कारण वरुण (नेप्च्यून) ग्रह नीला दिखाई देता है?",
        answers: shuffle([
            { text: "मीथेन", correct: true },
            { text: "हाइड्रोजन", correct: false },
            { text: "हीलियम", correct: false },
            { text: "अमोनिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण के वायुमंडल में मौजूद मीथेन गैस लाल प्रकाश को सोख लेती है, जिससे ग्रह का रंग गहरा नीला प्रतीत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हेली नामक धूमकेतु कितने वर्षों के अंतराल पर दिखाई देता है?",
        answers: shuffle([
            { text: "76 वर्ष", correct: true },
            { text: "56 वर्ष", correct: false },
            { text: "66 वर्ष", correct: false },
            { text: "86 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक प्रसिद्ध धूमकेतु है जो पिछली बार 1986 में देखा गया था और अगली बार 2061 में दिखाई देगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का एकमात्र प्राकृतिक उपग्रह कौन सा है?",
        answers: shuffle([
            { text: "चंद्रमा", correct: true },
            { text: "फोबोस", correct: false },
            { text: "डीमोस", correct: false },
            { text: "टाइटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा पृथ्वी की परिक्रमा करता है और पृथ्वी पर ज्वार-भाटा जैसी घटनाओं को प्रभावित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के केंद्रीय भाग को क्या कहा जाता है?",
        answers: shuffle([
            { text: "क्रोड (कोर)", correct: true },
            { text: "प्रकाशमंडल", correct: false },
            { text: "कोरोना", correct: false },
            { text: "वर्णमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यहीं पर सूर्य का तापमान और दबाव सबसे अधिक होता है और नाभिकीय संलयन की क्रिया होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का घनत्व पानी से भी कम है?",
        answers: shuffle([
            { text: "शनि", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि का औसत घनत्व इतना कम है कि यदि इसे पानी के एक बहुत बड़े पात्र में रखा जाए तो यह तैरने लगेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गैसीय दानव' (Gas Giants) ग्रह कौन-कौन से हैं?",
        answers: shuffle([
            { text: "बृहस्पति, शनि, अरुण, वरुण", correct: true },
            { text: "बुध, शुक्र, पृथ्वी, मंगल", correct: false },
            { text: "केवल बृहस्पति और शनि", correct: false },
            { text: "प्लूटो और एरीज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये चारों ग्रह मुख्य रूप से गैसों से बने हैं और इनकी कोई ठोस सतह नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह बिंदु जहाँ कोई ग्रह अपनी कक्षा में सूर्य से सबसे दूर होता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "अपसौर (Aphelion)", correct: true },
            { text: "उपसौर (Perihelion)", correct: false },
            { text: "उपभू (Perigee)", correct: false },
            { text: "अपभू (Apogee)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपसौर की स्थिति में ग्रह की कक्षीय गति सबसे धीमी होती है ।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "टाइटन किस ग्रह का सबसे बड़ा उपग्रह है?",
        answers: shuffle([
            { text: "शनि", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइटन सौरमंडल का दूसरा सबसे बड़ा उपग्रह है और यह एकमात्र ऐसा उपग्रह है जिसका अपना सघन वायुमंडल है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ग्रहों की गति के नियम किसने प्रतिपादित किए थे?",
        answers: shuffle([
            { text: "केप्लर", correct: true },
            { text: "गैलीलियो", correct: false },
            { text: "न्यूटन", correct: false },
            { text: "कॉपरनिकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोहान्स केप्लर ने ग्रहों की गति के तीन प्रसिद्ध नियम दिए थे, जो उनकी कक्षाओं का वर्णन करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य ग्रहण की घटना कब होती है?",
        answers: shuffle([
            { text: "जब चंद्रमा, सूर्य और पृथ्वी के बीच आ जाता है", correct: true },
            { text: "जब पृथ्वी, सूर्य और चंद्रमा के बीच आ जाती है", correct: false },
            { text: "जब सूर्य, पृथ्वी और चंद्रमा के बीच आ जाता है", correct: false },
            { text: "पूर्णिमा के दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घटना केवल अमावस्या के दिन ही हो सकती है जब चंद्रमा सूर्य के प्रकाश को पृथ्वी तक आने से रोक लेता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "चंद्र ग्रहण की घटना कब होती है?",
        answers: shuffle([
            { text: "जब पृथ्वी, सूर्य और चंद्रमा के बीच आ जाती है", correct: true },
            { text: "जब चंद्रमा, सूर्य और पृथ्वी के बीच आ जाता है", correct: false },
            { text: "अमावस्या के दिन", correct: false },
            { text: "जब सूर्य, पृथ्वी और चंद्रमा के बीच आ जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घटना केवल पूर्णिमा के दिन होती है जब पृथ्वी की छाया चंद्रमा पर पड़ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'विशाल लाल धब्बा' (Great Red Spot) किस ग्रह की विशेषता है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: true },
            { text: "मंगल", correct: false },
            { text: "शनि", correct: false },
            { text: "शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बृहस्पति के वायुमंडल में सदियों से चल रहा एक विशाल प्रतिचक्रवातीय तूफान है, जो पृथ्वी के आकार से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल के 'आंतरिक' या 'पार्थिव' ग्रह कौन से हैं?",
        answers: shuffle([
            { text: "बुध, शुक्र, पृथ्वी, मंगल", correct: true },
            { text: "बृहस्पति, शनि, अरुण, वरुण", correct: false },
            { text: "केवल पृथ्वी और मंगल", correct: false },
            { text: "केवल बुध और शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये ग्रह सूर्य के सबसे निकट हैं और मुख्य रूप से चट्टानों और धातुओं से बने हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य अपनी आकाशगंगा (मंदाकिनी) के केंद्र की परिक्रमा कितने समय में पूरी करता है?",
        answers: shuffle([
            { text: "250 मिलियन वर्ष", correct: true },
            { text: "100 मिलियन वर्ष", correct: false },
            { text: "150 मिलियन वर्ष", correct: false },
            { text: "300 मिलियन वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस एक परिक्रमा की अवधि को एक 'ब्रह्मांडीय वर्ष' या 'गैलेक्टिक वर्ष' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का एक दिन उसके एक वर्ष से भी बड़ा होता है?",
        answers: shuffle([
            { text: "शुक्र", correct: true },
            { text: "बुध", correct: false },
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र को अपनी धुरी पर एक चक्कर लगाने में लगभग 243 पृथ्वी दिवस लगते हैं, जबकि सूर्य की परिक्रमा करने में 225 पृथ्वी दिवस लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे ऊंचा पर्वत 'ओलंपस मॉन्स' कहाँ स्थित है?",
        answers: shuffle([
            { text: "मंगल", correct: true },
            { text: "पृथ्वी", correct: false },
            { text: "चंद्रमा", correct: false },
            { text: "यूरोपा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओलंपस मॉन्स एक विशाल ज्वालामुखी है, जो माउंट एवरेस्ट की ऊंचाई का लगभग तीन गुना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'उपसौर' (Perihelion) क्या है?",
        answers: shuffle([
            { text: "वह स्थिति जब पृथ्वी सूर्य के सबसे निकट होती है", correct: true },
            { text: "वह स्थिति जब पृथ्वी सूर्य से सबसे दूर होती है", correct: false },
            { text: "वह स्थिति जब चंद्रमा पृथ्वी के सबसे निकट होता है", correct: false },
            { text: "चंद्र ग्रहण की स्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थिति हर साल जनवरी की शुरुआत में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'अपसौर' (Aphelion) क्या है?",
        answers: shuffle([
            { text: "वह स्थिति जब पृथ्वी सूर्य से सबसे दूर होती है", correct: true },
            { text: "वह स्थिति जब पृथ्वी सूर्य के सबसे निकट होती है", correct: false },
            { text: "वह स्थिति जब चंद्रमा पृथ्वी से सबसे दूर होता है", correct: false },
            { text: "सूर्य ग्रहण की स्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थिति हर साल जुलाई की शुरुआत में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह के पास सबसे अधिक संख्या में प्राकृतिक उपग्रह हैं?",
        answers: shuffle([
            { text: "शनि", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाल की खोजों के अनुसार, शनि ने बृहस्पति को पीछे छोड़ते हुए सबसे अधिक चंद्रमाओं वाला ग्रह बन गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'कुइपर बेल्ट' (Kuiper Belt) सौरमंडल में कहाँ स्थित है?",
        answers: shuffle([
            { text: "वरुण (नेप्च्यून) की कक्षा के पार", correct: true },
            { text: "मंगल और बृहस्पति के बीच", correct: false },
            { text: "शनि के वलयों में", correct: false },
            { text: "सूर्य के बहुत निकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक बर्फीला क्षेत्र है जिसमें प्लूटो जैसे बौने ग्रह और कई धूमकेतु पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल की आयु लगभग कितनी अनुमानित है?",
        answers: shuffle([
            { text: "4.6 अरब वर्ष", correct: true },
            { text: "2.5 अरब वर्ष", correct: false },
            { text: "8.2 अरब वर्ष", correct: false },
            { text: "13.8 अरब वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिकों का मानना है कि हमारा सौरमंडल लगभग 4.6 अरब साल पहले एक विशाल गैस और धूल के बादल से बना था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य में सबसे प्रचुर मात्रा में पाई जाने वाली गैस कौन सी है?",
        answers: shuffle([
            { text: "हाइड्रोजन", correct: true },
            { text: "हीलियम", correct: false },
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का लगभग 74% द्रव्यमान हाइड्रोजन से बना है, जो उसके ईंधन का काम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर पवन (Solar Wind) क्या है?",
        answers: shuffle([
            { text: "सूर्य के कोरोना से निकलने वाले आवेशित कणों की धारा", correct: true },
            { text: "सूर्य की सतह पर चलने वाली हवा", correct: false },
            { text: "सूर्य के अंदर होने वाले विस्फोट", correct: false },
            { text: "एक प्रकार का धूमकेतु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सौर पवन पूरे सौरमंडल में फैलती है और ग्रहों के चुंबकीय क्षेत्रों को प्रभावित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी अपनी धुरी पर किस दिशा में घूमती है?",
        answers: shuffle([
            { text: "पश्चिम से पूर्व", correct: true },
            { text: "पूर्व से पश्चिम", correct: false },
            { text: "उत्तर से दक्षिण", correct: false },
            { text: "दक्षिण से उत्तर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के इसी घूर्णन के कारण सूर्य हमें पूर्व से उदय होता और पश्चिम में अस्त होता हुआ प्रतीत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गैलीलियन चंद्रमा' किस ग्रह के उपग्रहों को कहा जाता है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: true },
            { text: "शनि", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति के चार सबसे बड़े उपग्रहों - आयो, यूरोपा, गैनीमेड और कैलिस्टो की खोज गैलीलियो ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सेरेस (Ceres) क्या है?",
        answers: shuffle([
            { text: "क्षुद्रग्रह पट्टी में स्थित एक बौना ग्रह", correct: true },
            { text: "एक उपग्रह", correct: false },
            { text: "एक धूमकेतु", correct: false },
            { text: "एक आकाशगंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेरेस क्षुद्रग्रह पट्टी में सबसे बड़ी वस्तु है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर दिन और रात की अवधि लगभग बराबर कहाँ होती है?",
        answers: shuffle([
            { text: "भूमध्य रेखा पर", correct: true },
            { text: "ध्रुवों पर", correct: false },
            { text: "कर्क रेखा पर", correct: false },
            { text: "मकर रेखा पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमध्य रेखा पर सूर्य की किरणें वर्ष भर लगभग सीधी पड़ती हैं, जिससे दिन और रात की अवधि में बहुत कम अंतर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सा ग्रह अपनी धुरी पर सबसे तेज घूमता है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: true },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति अपना एक चक्कर लगभग 9 घंटे 55 मिनट में पूरा कर लेता है, जो सभी ग्रहों में सबसे तेज है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: true },
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का वायुमंडल लगभग 78% नाइट्रोजन, 21% ऑक्सीजन और थोड़ी मात्रा में अन्य गैसों से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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