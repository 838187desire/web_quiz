const questions = [
    {
        topHeading: "मंगल ग्रह पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "सौरमंडल में किस ग्रह को 'लाल ग्रह' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "बुध", correct: false },
            { text: "मंगल", correct: true },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह की सतह पर आयरन ऑक्साइड (लौह ऑक्साइड) की प्रचुरता के कारण इसकी मिट्टी और चट्टानें लाल दिखाई देती हैं, इसीलिए इसे 'लाल ग्रह' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य से दूरी के क्रम में मंगल ग्रह का स्थान कौन-सा है?",
        answers: shuffle([
            { text: "दूसरा", correct: false },
            { text: "तीसरा", correct: false },
            { text: "चौथा", correct: true },
            { text: "पाँचवाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य से दूरी के अनुसार ग्रहों का क्रम है: बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि, अरुण और वरुण।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार मंगल चौथे स्थान पर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह के दो प्राकृतिक उपग्रहों के नाम क्या हैं?",
        answers: shuffle([
            { text: "गैनिमीड और कैलिस्टो", correct: false },
            { text: "फोबोस और डीमोस", correct: true },
            { text: "टाइटन और रिया", correct: false },
            { text: "यूरोपा और आयो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह के दो छोटे और अनियमित आकार के चंद्रमा हैं, जिनके नाम फोबोस और डीमोस हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ग्रीक पौराणिक कथाओं में युद्ध के देवता के पुत्रों के नाम पर हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे ऊँचा पर्वत, 'ओलंपस मॉन्स' (Olympus Mons) किस ग्रह पर स्थित है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "मंगल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओलंपस मॉन्स मंगल ग्रह पर स्थित एक विशाल ज्वालामुखी पर्वत है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लगभग 22 किलोमीटर ऊँचा है, जो पृथ्वी के माउंट एवरेस्ट से लगभग तीन गुना ऊँचा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह का वायुमंडल मुख्य रूप से किस गैस से बना है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "हाइड्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का वायुमंडल बहुत पतला है और इसमें लगभग 95% कार्बन डाइऑक्साइड, 3% नाइट्रोजन, 1.6% आर्गन और बहुत कम मात्रा में ऑक्सीजन और जल वाष्प है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो) द्वारा प्रक्षेपित मंगल मिशन का क्या नाम था?",
        answers: shuffle([
            { text: "चंद्रयान", correct: false },
            { text: "आदित्य-एल1", correct: false },
            { text: "मंगलयान", correct: true },
            { text: "गगनयान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसरो ने 5 नवंबर 2013 को मंगल ग्रह की परिक्रमा करने के लिए 'मंगलयान' (मार्स ऑर्बिटर मिशन) का सफलतापूर्वक प्रक्षेपण किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत अपने पहले ही प्रयास में मंगल पर पहुँचने वाला पहला देश बना।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह पर 'वैलेस मैरिनेरिस' (Valles Marineris) क्या है?",
        answers: shuffle([
            { text: "एक ज्वालामुखी", correct: false },
            { text: "एक विशाल घाटी प्रणाली", correct: true },
            { text: "एक बर्फीला ध्रुव", correct: false },
            { text: "एक बड़ा रेगिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैलेस मैरिनेरिस मंगल ग्रह पर स्थित एक बहुत बड़ी और गहरी घाटी प्रणाली है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी लंबाई 4,000 किलोमीटर से अधिक है, जो इसे सौरमंडल की सबसे बड़ी घाटियों में से एक बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह पर एक दिन की अवधि (एक सौर दिवस) लगभग कितनी होती है?",
        answers: shuffle([
            { text: "20 घंटे", correct: false },
            { text: "24.6 घंटे", correct: true },
            { text: "30 घंटे", correct: false },
            { text: "18 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का एक सौर दिवस, जिसे 'सोल' (Sol) कहा जाता है, लगभग 24 घंटे और 39 मिनट का होता है, जो पृथ्वी के दिन की लंबाई के बहुत करीब है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "नासा का 'क्यूरियोसिटी' (Curiosity) रोवर किस वर्ष मंगल ग्रह पर उतरा था?",
        answers: shuffle([
            { text: "2008", correct: false },
            { text: "2012", correct: true },
            { text: "2016", correct: false },
            { text: "2020", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा का मार्स साइंस लेबोरेटरी मिशन, जिसका रोवर 'क्यूरियोसिटी' है, अगस्त 2012 में मंगल के गेल क्रेटर में सफलतापूर्वक उतरा था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उद्देश्य मंगल पर जीवन की संभावनाओं का पता लगाना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह का औसत तापमान पृथ्वी की तुलना में कैसा है?",
        answers: shuffle([
            { text: "बहुत अधिक गर्म", correct: false },
            { text: "बहुत अधिक ठंडा", correct: true },
            { text: "लगभग समान", correct: false },
            { text: "कभी गर्म, कभी ठंडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का पतला वायुमंडल गर्मी को रोक नहीं पाता, इसलिए यह एक बहुत ठंडा ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका औसत तापमान लगभग -63 डिग्री सेल्सियस है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह अपनी धुरी पर कितने अंश झुका हुआ है, जो पृथ्वी के समान ऋतुओं का कारण बनता है?",
        answers: shuffle([
            { text: "15 डिग्री", correct: false },
            { text: "25 डिग्री", correct: true },
            { text: "35 डिग्री", correct: false },
            { text: "45 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल अपनी कक्षीय तल पर लगभग 25.19 डिग्री झुका हुआ है, जो पृथ्वी के 23.5 डिग्री के झुकाव के समान है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी झुकाव के कारण मंगल पर भी पृथ्वी की तरह मौसम बदलते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह सूर्य की एक परिक्रमा करने में लगभग कितना समय लेता है?",
        answers: shuffle([
            { text: "365 पृथ्वी दिवस", correct: false },
            { text: "520 पृथ्वी दिवस", correct: false },
            { text: "687 पृथ्वी दिवस", correct: true },
            { text: "810 पृथ्वी दिवस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का एक वर्ष पृथ्वी के लगभग 1.88 वर्षों के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सूर्य की एक पूरी परिक्रमा करने में लगभग 687 पृथ्वी दिवस लेता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह के ध्रुवों पर जमी बर्फ में जल के अतिरिक्त और कौन-सा पदार्थ पाया जाता है?",
        answers: shuffle([
            { text: "जमी हुई मीथेन", correct: false },
            { text: "जमी हुई अमोनिया", correct: false },
            { text: "सूखी बर्फ (ठोस कार्बन डाइऑक्साइड)", correct: true },
            { text: "जमी हुई नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल के ध्रुवीय बर्फ की टोपी में पानी की बर्फ के साथ-साथ जमी हुई कार्बन डाइऑक्साइड की एक मौसमी परत भी होती है, जिसे 'सूखी बर्फ' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "नासा का 'पर्सिवियरेंस' (Perseverance) रोवर मंगल ग्रह पर जीवन के प्राचीन संकेतों को खोजने के लिए किस उपकरण का उपयोग करता है?",
        answers: shuffle([
            { text: "हबल टेलीस्कोप", correct: false },
            { text: "स्पिट्जर टेलीस्कोप", correct: false },
            { text: "शेरलाक (SHERLOC) और वॉटसन (WATSON)", correct: true },
            { text: "जेम्स वेब टेलीस्कोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पर्सिवियरेंस रोवर पर लगे शेरलाक और वॉटसन नामक कैमरे और स्पेक्ट्रोमीटर चट्टानों और मिट्टी में कार्बनिक यौगिकों और खनिजों का विश्लेषण करते हैं ताकि प्राचीन सूक्ष्मजीवी जीवन के संकेतों का पता लगाया जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मंगल' का नाम किस रोमन देवता के नाम पर रखा गया है?",
        answers: shuffle([
            { text: "समुद्र के देवता", correct: false },
            { text: "प्रेम के देवता", correct: false },
            { text: "युद्ध के देवता", correct: true },
            { text: "कृषि के देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह का नाम युद्ध के रोमन देवता 'मार्स' के नाम पर रखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका लाल रंग रक्त का प्रतीक माना जाता था, जिसके कारण इसका नाम युद्ध के देवता से जोड़ा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह पर उतरने वाला पहला सफल अंतरिक्ष यान कौन-सा था?",
        answers: shuffle([
            { text: "वाइकिंग 1", correct: true },
            { text: "मेरिनर 4", correct: false },
            { text: "मार्स 3", correct: false },
            { text: "स्पिरिट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि सोवियत संघ का मार्स 3 लैंडर 1971 में मंगल पर उतरा था, लेकिन उतरने के कुछ सेकंड बाद ही उसका संपर्क टूट गया।<br><br><i class='fa-solid fa-angles-right icon'></i> नासा का वाइकिंग 1, जो 1976 में उतरा, पहला ऐसा मिशन था जिसने सफलतापूर्वक उतरकर सतह से विस्तृत डेटा भेजा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह का व्यास पृथ्वी के व्यास का लगभग कितना है?",
        answers: shuffle([
            { text: "लगभग बराबर", correct: false },
            { text: "लगभग आधा", correct: true },
            { text: "लगभग दोगुना", correct: false },
            { text: "लगभग एक-चौथाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का व्यास लगभग 6,779 किलोमीटर है, जो पृथ्वी के व्यास (लगभग 12,742 किलोमीटर) का लगभग आधा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह पर चलने वाली धूल भरी आँधियाँ किस पैमाने तक पहुँच सकती हैं?",
        answers: shuffle([
            { text: "केवल स्थानीय क्षेत्रों तक सीमित", correct: false },
            { text: "पूरे ग्रह को ढक सकती हैं", correct: true },
            { text: "केवल ध्रुवीय क्षेत्रों में आती हैं", correct: false },
            { text: "केवल भूमध्य रेखा पर आती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह पर आने वाली धूल भरी आँधियाँ बहुत विशाल हो सकती हैं और कभी-कभी ये इतनी बड़ी हो जाती हैं कि हफ्तों तक पूरे ग्रह को ढक लेती हैं, जिससे सतह अदृश्य हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह के सबसे बड़े चंद्रमा 'फोबोस' के बारे में कौन-सा तथ्य सही है?",
        answers: shuffle([
            { text: "यह धीरे-धीरे मंगल से दूर जा रहा है।", correct: false },
            { text: "यह एक पूर्ण गोलाकार पिंड है।", correct: false },
            { text: "यह धीरे-धीरे मंगल के करीब आ रहा है।", correct: true },
            { text: "इसका अपना वायुमंडल है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फोबोस धीरे-धीरे मंगल की ओर खिंच रहा है और अनुमान है कि करोड़ों वर्षों में या तो यह मंगल की सतह से टकरा जाएगा या ज्वारीय बलों के कारण टूटकर एक वलय (रिंग) बना लेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस खगोलीय घटना के दौरान पृथ्वी, सूर्य और मंगल के बीच आ जाती है?",
        answers: shuffle([
            { text: "युति (Conjunction)", correct: false },
            { text: "वियुति (Opposition)", correct: true },
            { text: "ग्रहण (Eclipse)", correct: false },
            { text: "पारगमन (Transit)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वियुति (अपोजिशन) वह स्थिति है जब मंगल और सूर्य पृथ्वी के विपरीत दिशाओं में होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस समय मंगल पृथ्वी के सबसे करीब होता है और रात में आकाश में सबसे चमकीला दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल पर पाए जाने वाले 'हेलस प्लैनिटिया' (Hellas Planitia) क्या है?",
        answers: shuffle([
            { text: "एक ऊँचा पठार", correct: false },
            { text: "एक सूखा हुआ समुद्र", correct: false },
            { text: "सौरमंडल के सबसे बड़े प्रभाव गड्ढों में से एक", correct: true },
            { text: "एक सक्रिय ज्वालामुखी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलस प्लैनिटिया मंगल के दक्षिणी गोलार्ध में स्थित एक विशाल और बहुत गहरा प्रभाव गर्त (इम्पैक्ट क्रेटर) है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका व्यास लगभग 2,300 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "नासा के 'इनसाइट' (InSight) लैंडर का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "मंगल पर पानी खोजना", correct: false },
            { text: "मंगल की आंतरिक संरचना का अध्ययन करना", correct: true },
            { text: "मंगल के वायुमंडल का विश्लेषण करना", correct: false },
            { text: "मंगल पर जीवन के संकेत खोजना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनसाइट (Interior Exploration using Seismic Investigations, Geodesy and Heat Transport) मिशन को विशेष रूप से मंगल की गहरी आंतरिक संरचना, जैसे कि इसकी परत, मेंटल और कोर का अध्ययन करने के लिए बनाया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह का गुरुत्वाकर्षण पृथ्वी के गुरुत्वाकर्षण का लगभग कितना प्रतिशत है?",
        answers: shuffle([
            { text: "12%", correct: false },
            { text: "38%", correct: true },
            { text: "65%", correct: false },
            { text: "90%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का गुरुत्वाकर्षण पृथ्वी की तुलना में बहुत कम है, यह पृथ्वी के गुरुत्वाकर्षण का केवल 38% है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मतलब है कि 100 किलो का व्यक्ति मंगल पर केवल 38 किलो का महसूस करेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह पर भेजा गया पहला सफल ऑर्बिटर कौन-सा था?",
        answers: shuffle([
            { text: "मार्स 2", correct: false },
            { text: "वाइकिंग 1", correct: false },
            { text: "मेरिनर 9", correct: true },
            { text: "फोबोस 2", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा का मेरिनर 9, जो 1971 में मंगल की कक्षा में पहुँचा, किसी दूसरे ग्रह की परिक्रमा करने वाला पहला अंतरिक्ष यान था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसने मंगल की सतह के विस्तृत नक्शे तैयार किए।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल के चंद्रमा 'डीमोस' का आकार कैसा है?",
        answers: shuffle([
            { text: "लगभग पूर्ण गोलाकार", correct: false },
            { text: "अनियमित और आलू जैसा", correct: true },
            { text: "चपटा और डिस्क जैसा", correct: false },
            { text: "घनाकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीमोस, फोबोस की तरह ही, एक छोटा और अनियमित आकार का पिंड है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका आकार आलू जैसा है और यह माना जाता है कि यह एक पकड़ा हुआ क्षुद्रग्रह (एस्टेरॉयड) हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पर्सिवियरेंस रोवर के साथ मंगल पर भेजे गए छोटे हेलीकॉप्टर का क्या नाम है?",
        answers: shuffle([
            { text: "पाथफाइंडर", correct: false },
            { text: "स्पिरिट", correct: false },
            { text: "ऑपर्च्युनिटी", correct: false },
            { text: "इनजेन्युइटी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इनजेन्युइटी (Ingenuity) एक छोटा, रोबोटिक हेलीकॉप्टर है जो पर्सिवियरेंस रोवर के साथ मंगल पर गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसने 2021 में किसी अन्य ग्रह पर पहली नियंत्रित और संचालित उड़ान का प्रदर्शन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह को स्थलीय ग्रह (Terrestrial Planet) क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि वहाँ तरल पानी है", correct: false },
            { text: "क्योंकि इसका वायुमंडल पृथ्वी जैसा है", correct: false },
            { text: "क्योंकि इसकी सतह चट्टानी और ठोस है", correct: true },
            { text: "क्योंकि इसका आकार बड़ा है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थलीय ग्रह वे ग्रह होते हैं जिनकी सतह मुख्य रूप से सिलिकेट चट्टानों या धातुओं से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> बुध, शुक्र, पृथ्वी और मंगल सौरमंडल के चार स्थलीय ग्रह हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह पर किस खनिज की उपस्थिति इस बात का संकेत देती है कि वहाँ अतीत में पानी मौजूद था?",
        answers: shuffle([
            { text: "हीरा", correct: false },
            { text: "सोना", correct: false },
            { text: "हेमाटाइट और जिप्सम", correct: true },
            { text: "क्वार्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेमाटाइट (विशेषकर गोलाकार रूप में, जिसे 'ब्लूबेरी' कहा जाता है) और जिप्सम जैसे खनिजों का निर्माण आमतौर पर पानी की उपस्थिति में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मंगल पर इनकी खोज अतीत में तरल पानी होने का एक मजबूत सबूत है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मंगल दोष' शब्द का संबंध किससे है?",
        answers: shuffle([
            { text: "खगोल विज्ञान", correct: false },
            { text: "ज्योतिष शास्त्र", correct: true },
            { text: "भूविज्ञान", correct: false },
            { text: "अंतरिक्ष अन्वेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मंगल दोष' भारतीय ज्योतिष शास्त्र की एक अवधारणा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका खगोल विज्ञान या ग्रह के भौतिक गुणों से कोई वैज्ञानिक संबंध नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जन्म कुंडली में मंगल की एक विशेष स्थिति को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल पर एक 'सोल' (Sol) क्या है?",
        answers: shuffle([
            { text: "एक मंगल वर्ष", correct: false },
            { text: "एक मंगल दिवस", correct: true },
            { text: "एक मंगल महीना", correct: false },
            { text: "मंगल पर एक क्रेटर का नाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सोल' शब्द का उपयोग मंगल पर एक सौर दिवस की अवधि को संदर्भित करने के लिए किया जाता है, जो लगभग 24 घंटे, 39 मिनट और 35 सेकंड का होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह की सतह पर दिखाई देने वाली गहरी रेखाओं (Recurring Slope Lineae) को किसका संभावित प्रमाण माना जाता है?",
        answers: shuffle([
            { text: "लावा का प्रवाह", correct: false },
            { text: "बहते हुए खारे पानी का", correct: true },
            { text: "धूल भरी आँधी का मार्ग", correct: false },
            { text: "प्राचीन नदियों का तल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये गहरी, मौसमी रेखाएँ, जो गर्म मौसम में दिखाई देती हैं और ठंडे मौसम में गायब हो जाती हैं, मंगल की सतह पर वर्तमान में बहने वाले अत्यधिक खारे पानी का संकेत हो सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन-सा देश अपने पहले ही प्रयास में मंगल की कक्षा में सफलतापूर्वक पहुँचने वाला एकमात्र देश है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "रूस (सोवियत संघ)", correct: false },
            { text: "चीन", correct: false },
            { text: "भारत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का मंगलयान (मार्स ऑर्बिटर मिशन) 2014 में सफलतापूर्वक मंगल की कक्षा में स्थापित हुआ, जिससे भारत यह उपलब्धि हासिल करने वाला पहला एशियाई देश और अपने पहले प्रयास में सफल होने वाला दुनिया का पहला देश बन गया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह के दो गोलार्धों में क्या मुख्य अंतर है?",
        answers: shuffle([
            { text: "उत्तरी गोलार्ध चिकना और निचला है, जबकि दक्षिणी गोलार्ध ऊबड़-खाबड़ और गड्ढों से भरा है।", correct: true },
            { text: "दक्षिणी गोलार्ध चिकना और निचला है, जबकि उत्तरी गोलार्ध ऊबड़-खाबड़ और गड्ढों से भरा है।", correct: false },
            { text: "दोनों गोलार्ध लगभग एक समान हैं।", correct: false },
            { text: "एक गोलार्ध बर्फीला है और दूसरा चट्टानी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल पर एक स्पष्ट गोलार्धीय द्वंद्व है।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तरी गोलार्ध की सतह दक्षिणी गोलार्ध की तुलना में बहुत छोटी, चिकनी और कम ऊँचाई वाली है, जबकि दक्षिणी गोलार्ध प्राचीन और गड्ढों से भरा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एरीज वैलिस' (Ares Vallis) मंगल पर एक स्थान है जहाँ कौन-सा लैंडर उतरा था?",
        answers: shuffle([
            { text: "क्यूरियोसिटी", correct: false },
            { text: "मार्स पाथफाइंडर", correct: true },
            { text: "वाइकिंग 2", correct: false },
            { text: "फीनिक्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा का मार्स पाथफाइंडर मिशन, जिसमें सोजॉर्नर रोवर भी शामिल था, 1997 में मंगल पर 'एरीज वैलिस' नामक एक प्राचीन बाढ़ के मैदान में उतरा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल के वायुमंडल के पतले होने का मुख्य कारण क्या माना जाता है?",
        answers: shuffle([
            { text: "सूर्य से अधिक दूरी", correct: false },
            { text: "मजबूत गुरुत्वाकर्षण", correct: false },
            { text: "एक मजबूत चुंबकीय क्षेत्र का अभाव", correct: true },
            { text: "ज्वालामुखीय गतिविधि की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के विपरीत, मंगल के पास एक मजबूत, वैश्विक चुंबकीय क्षेत्र नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अभाव में, सौर हवाएँ सीधे मंगल के वायुमंडल से टकराती हैं और धीरे-धीरे इसे अरबों वर्षों में अंतरिक्ष में उड़ा ले गईं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह का रंग लाल होने के लिए उत्तरदायी यौगिक का रासायनिक सूत्र क्या है?",
        answers: shuffle([
            { text: "FeO", correct: false },
            { text: "Fe2O3", correct: true },
            { text: "Fe3O4", correct: false },
            { text: "FeS2", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का लाल रंग मुख्य रूप से आयरन (III) ऑक्साइड, जिसे फेरिक ऑक्साइड या जंग भी कहते हैं, के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका रासायनिक सूत्र Fe2O3 है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "नासा के 'स्पिरिट' और 'ऑपर्च्युनिटी' रोवर किस प्रकार के मिशन थे?",
        answers: shuffle([
            { text: "ऑर्बिटर मिशन", correct: false },
            { text: "फ्लाईबाई मिशन", correct: false },
            { text: "जुड़वां रोवर मिशन", correct: true },
            { text: "सैंपल रिटर्न मिशन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पिरिट और ऑपर्च्युनिटी दो जुड़वां रोवर थे जिन्हें मार्स एक्सप्लोरेशन रोवर मिशन के तहत 2004 में मंगल के अलग-अलग हिस्सों में उतारा गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इनका उद्देश्य पानी की गतिविधि के इतिहास का अध्ययन करना था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "भविष्य में मंगल ग्रह के मानव मिशनों के लिए सबसे बड़ी चुनौती क्या मानी जाती है?",
        answers: shuffle([
            { text: "लंबी यात्रा का समय और अंतरिक्ष यात्रियों पर विकिरण का प्रभाव", correct: true },
            { text: "मंगल पर ऑक्सीजन की कमी", correct: false },
            { text: "मंगल का अत्यधिक तापमान", correct: false },
            { text: "मंगल पर पानी की अनुपलब्धता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सबसे बड़ी बाधाओं में से एक मंगल तक की 6-9 महीने की लंबी यात्रा और इस दौरान अंतरिक्ष यात्रियों को गहरे अंतरिक्ष के हानिकारक विकिरण से बचाना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह पृथ्वी से नग्न आँखों से देखने पर कैसा दिखाई देता है?",
        answers: shuffle([
            { text: "एक नीला तारा", correct: false },
            { text: "एक सफेद चमकता बिंदु", correct: false },
            { text: "एक लाल-नारंगी रंग का तारा जैसा पिंड", correct: true },
            { text: "एक धुंधला धब्बा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने विशिष्ट लाल रंग के कारण, मंगल ग्रह रात के आकाश में आसानी से पहचाना जा सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक चमकीले, लाल-नारंगी तारे की तरह दिखाई देता है जिसकी चमक बदलती रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल पर 'मेडुसे फोसे' (Medusae Fossae) संरचना क्या है?",
        answers: shuffle([
            { text: "एक विशाल नदी डेल्टा", correct: false },
            { text: "एक जमी हुई झील", correct: false },
            { text: "एक विशाल, नरम, आसानी से कटने वाली ज्वालामुखीय चट्टान का जमाव", correct: true },
            { text: "एक क्षुद्रग्रह के टकराने से बनी श्रृंखला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडुसे फोसे फॉर्मेशन मंगल पर एक विशाल भूवैज्ञानिक इकाई है जो संभवतः ज्वालामुखीय राख के जमाव से बनी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मंगल पर सबसे अजीब और रहस्यमयी विशेषताओं में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस देश का अंतरिक्ष यान 'तियानवेन-1' (Tianwen-1) एक ही मिशन में ऑर्बिटर, लैंडर और रोवर लेकर मंगल पर पहुँचा?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "यूरोपीय अंतरिक्ष एजेंसी", correct: false },
            { text: "भारत", correct: false },
            { text: "चीन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन का तियानवेन-1 मिशन 2021 में मंगल पर पहुँचा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें एक ऑर्बिटर, एक लैंडर और एक 'झुरोंग' (Zhurong) नामक रोवर शामिल थे, जो सभी एक ही प्रक्षेपण में भेजे गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह की सतह के नीचे बड़ी मात्रा में बर्फ की उपस्थिति का पता किस मिशन ने लगाया था?",
        answers: shuffle([
            { text: "मेरिनर 4", correct: false },
            { text: "मार्स ओडिसी", correct: true },
            { text: "क्यूरियोसिटी", correct: false },
            { text: "सोवियत मार्स 3", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा के 2001 मार्स ओडिसी ऑर्बिटर के उपकरणों ने मंगल की सतह के ठीक नीचे, विशेष रूप से उच्च अक्षांशों पर, भारी मात्रा में पानी की बर्फ के भंडार का पता लगाया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल के संदर्भ में 'टेराफॉर्मिंग' (Terraforming) की अवधारणा का क्या अर्थ है?",
        answers: shuffle([
            { text: "मंगल की सतह का नक्शा बनाना", correct: false },
            { text: "मंगल पर बस्तियाँ स्थापित करना", correct: false },
            { text: "मंगल ग्रह को जानबूझकर पृथ्वी जैसा बनाने की प्रक्रिया", correct: true },
            { text: "मंगल से नमूने पृथ्वी पर वापस लाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेराफॉर्मिंग एक काल्पनिक प्रक्रिया है जिसमें किसी ग्रह, जैसे मंगल, के वायुमंडल, तापमान और सतह को संशोधित करके उसे मनुष्यों के रहने योग्य बनाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल के वायुमंडल का दाब पृथ्वी के समुद्र तल के दाब का लगभग कितना है?",
        answers: shuffle([
            { text: "लगभग 1%", correct: true },
            { text: "लगभग 10%", correct: false },
            { text: "लगभग 50%", correct: false },
            { text: "लगभग बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का वायुमंडल अत्यंत विरल है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी सतह पर वायुमंडलीय दबाव पृथ्वी के समुद्र तल पर औसत दबाव का 1% से भी कम है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल के उपग्रह फोबोस पर स्थित सबसे बड़े क्रेटर का क्या नाम है?",
        answers: shuffle([
            { text: "स्टिकनी क्रेटर", correct: true },
            { text: "टाइको क्रेटर", correct: false },
            { text: "हर्शेल क्रेटर", correct: false },
            { text: "कोपर्निकस क्रेटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टिकनी क्रेटर फोबोस पर सबसे प्रमुख विशेषता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लगभग 9 किलोमीटर व्यास का एक बड़ा प्रभाव गर्त है, जो फोबोस के आकार की तुलना में बहुत बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह की आंतरिक संरचना में कौन-कौन से भाग शामिल हैं?",
        answers: shuffle([
            { text: "केवल एक ठोस कोर", correct: false },
            { text: "एक क्रस्ट, मेंटल और कोर", correct: true },
            { text: "केवल एक तरल मेंटल और क्रस्ट", correct: false },
            { text: "एक गैसीय कोर और चट्टानी सतह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की तरह, मंगल की आंतरिक संरचना में भी तीन मुख्य परतें हैं: एक केंद्रीय कोर, एक चट्टानी मेंटल, और एक ठोस क्रस्ट (परत)।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"द मार्टियन\" (The Martian) नामक प्रसिद्ध विज्ञान-कथा फिल्म और उपन्यास में एक अंतरिक्ष यात्री किस ग्रह पर फँस जाता है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "मंगल", correct: true },
            { text: "शनि का चंद्रमा टाइटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडी वियर के उपन्यास और उस पर आधारित फिल्म \"द मार्टियन\" की कहानी एक अमेरिकी अंतरिक्ष यात्री के इर्द-गिर्द घूमती है जो एक मिशन के दौरान मंगल ग्रह पर अकेला छूट जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल पर 'नोक्टिस लैबीरिंथस' (Noctis Labyrinthus) या 'रात की भूलभुलैया' क्या है?",
        answers: shuffle([
            { text: "गहरी और आपस में जुड़ी घाटियों का एक जटिल तंत्र", correct: true },
            { text: "एक अंधेरा, रेतीला रेगिस्तान", correct: false },
            { text: "एक विशाल पठार", correct: false },
            { text: "एक बर्फीला मैदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोक्टिस लैबीरिंथस गहरी, खड़ी दीवारों वाली घाटियों और खाइयों का एक विशाल, चक्रव्यूह जैसा नेटवर्क है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सा मिशन मंगल ग्रह पर मीथेन गैस की उपस्थिति का अध्ययन करने के लिए भेजा गया था, जो जैविक या भूवैज्ञानिक गतिविधि का संकेत हो सकता है?",
        answers: shuffle([
            { text: "मार्स ग्लोबल सर्वेयर", correct: false },
            { text: "एक्सोमार्स ट्रेस गैस ऑर्बिटर", correct: true },
            { text: "फीनिक्स लैंडर", correct: false },
            { text: "इनसाइट लैंडर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूरोपीय अंतरिक्ष एजेंसी का एक्सोमार्स ट्रेस गैस ऑर्बिटर (TGO) विशेष रूप से मंगल के वायुमंडल में मीथेन जैसी दुर्लभ गैसों का पता लगाने और उनके स्रोतों को समझने के लिए डिज़ाइन किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह का कोई वैश्विक चुंबकीय क्षेत्र क्यों नहीं है?",
        answers: shuffle([
            { text: "क्योंकि इसका आकार बहुत छोटा है", correct: false },
            { text: "क्योंकि यह बहुत धीरे-धीरे घूमता है", correct: false },
            { text: "क्योंकि इसका कोर अब पर्याप्त रूप से गर्म और संवहित नहीं है", correct: true },
            { text: "क्योंकि यह सूर्य से बहुत दूर है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि मंगल का कोर ठंडा हो गया है, जिससे वह 'डायनेमो' प्रभाव बंद हो गया है जो एक वैश्विक चुंबकीय क्षेत्र उत्पन्न करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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