const questions = [
    {
        topHeading: "पृथ्वी और उसके सौर्यिक संबंध पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "सौर मंडल का केंद्र कौन है और पृथ्वी किसके चारों ओर घूमती है?",
        answers: shuffle([
            { text: "चंद्रमा", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "सूर्य", correct: true },
            { text: "मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारा सौर मंडल सूर्यकेंद्रीय है, जिसका अर्थ है कि सभी ग्रह, क्षुद्रग्रह और धूमकेतु सूर्य की परिक्रमा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की सूर्य के चारों ओर की गति को क्या कहा जाता है?",
        answers: shuffle([
            { text: "परिभ्रमण", correct: false },
            { text: "परिक्रमण", correct: true },
            { text: "घूर्णन", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई पिंड किसी अन्य पिंड के चारों ओर घूमता है, तो उसे परिक्रमण (Revolution) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> पृथ्वी सूर्य का परिक्रमण करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के अपने अक्ष पर घूमने को क्या कहते हैं?",
        answers: shuffle([
            { text: "परिक्रमण", correct: false },
            { text: "घूर्णन (परिभ्रमण)", correct: true },
            { text: "झुकाव", correct: false },
            { text: "कक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का अपने काल्पनिक अक्ष पर घूमना घूर्णन या परिभ्रमण (Rotation) कहलाता है, जिसके कारण दिन और रात होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर दिन और रात होने का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "पृथ्वी का परिक्रमण", correct: false },
            { text: "पृथ्वी का अपने अक्ष पर घूर्णन", correct: true },
            { text: "पृथ्वी का अक्षीय झुकाव", correct: false },
            { text: "सूर्य का घूर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के घूर्णन के कारण उसका जो भाग सूर्य के सामने होता है, वहाँ दिन होता है और जो भाग विपरीत दिशा में होता है, वहाँ रात होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर ऋतुओं में परिवर्तन का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "सूर्य से पृथ्वी की दूरी में परिवर्तन", correct: false },
            { text: "पृथ्वी का घूर्णन", correct: false },
            { text: "पृथ्वी का अपने अक्ष पर 23.5° का झुकाव", correct: true },
            { text: "चंद्रमा का गुरुत्वाकर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के अपने अक्ष पर झुके होने के कारण, वर्ष के अलग-अलग समयों में सूर्य की किरणें पृथ्वी पर सीधी या तिरछी पड़ती हैं, जिससे ऋतुएँ बदलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य ग्रहण कब होता है?",
        answers: shuffle([
            { text: "जब पृथ्वी, सूर्य और चंद्रमा के बीच आ जाती है।", correct: false },
            { text: "जब सूर्य, पृथ्वी और चंद्रमा के बीच आ जाता है।", correct: false },
            { text: "जब चंद्रमा, सूर्य और पृथ्वी के बीच आ जाता है।", correct: true },
            { text: "पूर्णिमा के दिन।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य ग्रहण अमावस्या के दिन होता है, जब चंद्रमा परिक्रमा करते हुए सूर्य और पृथ्वी के बीच आ जाता है और सूर्य का प्रकाश पृथ्वी तक नहीं पहुँच पाता।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "चंद्र ग्रहण कब होता है?",
        answers: shuffle([
            { text: "जब चंद्रमा, सूर्य और पृथ्वी के बीच आ जाता है।", correct: false },
            { text: "जब पृथ्वी, सूर्य और चंद्रमा के बीच आ जाती है।", correct: true },
            { text: "जब सूर्य, पृथ्वी और चंद्रमा के बीच आ जाता है।", correct: false },
            { text: "अमावस्या के दिन।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्र ग्रहण पूर्णिमा के दिन होता है, जब पृथ्वी सूर्य और चंद्रमा के बीच आ जाती है और पृथ्वी की छाया चंद्रमा पर पड़ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह स्थिति जब पृथ्वी सूर्य के सबसे निकट होती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "अपसौर", correct: false },
            { text: "उपसौर", correct: true },
            { text: "विषुव", correct: false },
            { text: "अयनांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपसौर (Perihelion) की स्थिति में पृथ्वी सूर्य के सबसे करीब होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घटना सामान्यतः 3 जनवरी को होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह स्थिति जब पृथ्वी सूर्य से सबसे दूर होती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "उपसौर", correct: false },
            { text: "विषुव", correct: false },
            { text: "अपसौर", correct: true },
            { text: "ग्रहण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपसौर (Aphelion) की स्थिति में पृथ्वी सूर्य से अधिकतम दूरी पर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घटना सामान्यतः 4 जुलाई को होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "अरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति (Jupiter) सौर मंडल का सबसे बड़ा ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका द्रव्यमान सौर मंडल के अन्य सभी ग्रहों के कुल द्रव्यमान से भी अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"लाल ग्रह\" के नाम से किस ग्रह को जाना जाता है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "मंगल", correct: true },
            { text: "बुध", correct: false },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह की सतह पर आयरन ऑक्साइड की प्रचुरता के कारण इसका रंग लाल दिखाई देता है, इसलिए इसे \"लाल ग्रह\" (Red Planet) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की \"जुड़वां बहन\" किस ग्रह को कहा जाता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: true },
            { text: "बुध", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र (Venus) ग्रह का आकार और द्रव्यमान लगभग पृथ्वी के समान है, इसलिए इसे पृथ्वी की \"जुड़वां बहन\" कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की ऊर्जा का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "नाभिकीय विखंडन", correct: false },
            { text: "नाभिकीय संलयन", correct: true },
            { text: "रासायनिक अभिक्रिया", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के केंद्र में अत्यधिक ताप और दाब के कारण हाइड्रोजन के परमाणु मिलकर हीलियम में परिवर्तित होते हैं, इस प्रक्रिया को नाभिकीय संलयन कहते हैं, जिससे अपार ऊर्जा उत्पन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी को सूर्य की एक परिक्रमा पूरी करने में कितना समय लगता है?",
        answers: shuffle([
            { text: "365 दिन", correct: false },
            { text: "365 दिन और 6 घंटे", correct: true },
            { text: "366 दिन", correct: false },
            { text: "24 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी को सूर्य का एक चक्कर लगाने में लगभग 365.25 दिन (365 दिन, 5 घंटे, 48 मिनट और 46 सेकंड) लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बचे हुए 6 घंटे हर 4 साल में एक दिन बनकर लीप वर्ष बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस तिथि को उत्तरी गोलार्ध में सबसे बड़ा दिन होता है?",
        answers: shuffle([
            { text: "21 मार्च", correct: false },
            { text: "23 सितंबर", correct: false },
            { text: "21 जून", correct: true },
            { text: "22 दिसंबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 21 जून को सूर्य की किरणें कर्क रेखा पर सीधी पड़ती हैं, इसे ग्रीष्म अयनांत (Summer Solstice) कहते हैं और यह उत्तरी गोलार्ध का सबसे बड़ा दिन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस तिथि को दक्षिणी गोलार्ध में सबसे बड़ा दिन होता है?",
        answers: shuffle([
            { text: "21 जून", correct: false },
            { text: "22 दिसंबर", correct: true },
            { text: "21 मार्च", correct: false },
            { text: "23 सितंबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 22 दिसंबर को सूर्य की किरणें मकर रेखा पर सीधी पड़ती हैं, इसे शीत अयनांत (Winter Solstice) कहते हैं और यह दक्षिणी गोलार्ध का सबसे बड़ा दिन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वर्ष में किन दो तिथियों पर दिन और रात बराबर होते हैं?",
        answers: shuffle([
            { text: "21 जून और 22 दिसंबर", correct: false },
            { text: "21 मार्च और 23 सितंबर", correct: true },
            { text: "3 जनवरी और 4 जुलाई", correct: false },
            { text: "केवल 21 मार्च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन दो तिथियों को विषुव (Equinox) कहा जाता है, जब सूर्य की किरणें भूमध्य रेखा पर सीधी पड़ती हैं और पूरी पृथ्वी पर दिन और रात की अवधि बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "क्षुद्रग्रह पट्टी (Asteroid Belt) किन दो ग्रहों के बीच स्थित है?",
        answers: shuffle([
            { text: "पृथ्वी और मंगल", correct: false },
            { text: "मंगल और बृहस्पति", correct: true },
            { text: "बृहस्पति और शनि", correct: false },
            { text: "शनि और अरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर मंडल के अधिकांश क्षुद्रग्रह मंगल और बृहस्पति की कक्षाओं के बीच एक पट्टी में सूर्य की परिक्रमा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल का सबसे गर्म ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बुध", correct: false },
            { text: "शुक्र", correct: true },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का वायुमंडल मुख्य रूप से कार्बन डाइऑक्साइड से बना है, जो एक शक्तिशाली ग्रीनहाउस गैस है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सूर्य की गर्मी को सोख लेता है, जिससे यह सौर मंडल का सबसे गर्म ग्रह बन जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के प्रकाश को पृथ्वी तक पहुँचने में लगभग कितना समय लगता है?",
        answers: shuffle([
            { text: "8 सेकंड", correct: false },
            { text: "8 मिनट 20 सेकंड", correct: true },
            { text: "1 घंटा", correct: false },
            { text: "24 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश की गति लगभग 3 लाख किलोमीटर प्रति सेकंड है।<br><br><i class='fa-solid fa-angles-right icon'></i> सूर्य से पृथ्वी की औसत दूरी लगभग 15 करोड़ किलोमीटर है, इसलिए प्रकाश को यह दूरी तय करने में लगभग 8 मिनट 20 सेकंड लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का एकमात्र प्राकृतिक उपग्रह कौन सा है?",
        answers: shuffle([
            { text: "फोबोस", correct: false },
            { text: "डीमोस", correct: false },
            { text: "चंद्रमा", correct: true },
            { text: "टाइटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा पृथ्वी का एकमात्र प्राकृतिक उपग्रह है जो पृथ्वी की परिक्रमा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर ज्वार-भाटा आने का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "पृथ्वी का घूर्णन", correct: false },
            { text: "पृथ्वी का परिक्रमण", correct: false },
            { text: "सूर्य और चंद्रमा का गुरुत्वाकर्षण बल", correct: true },
            { text: "महासागरीय धाराएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा और सूर्य के गुरुत्वाकर्षण खिंचाव के कारण पृथ्वी के महासागरों का जल स्तर उठता और गिरता है, जिसे ज्वार-भाटा कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> चंद्रमा का प्रभाव अधिक होता है क्योंकि वह पृथ्वी के करीब है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"ब्लू मून\" (Blue Moon) की घटना क्या है?",
        answers: shuffle([
            { text: "जब चंद्रमा नीला दिखाई देता है।", correct: false },
            { text: "जब एक ही कैलेंडर माह में दो पूर्णिमाएँ होती हैं।", correct: true },
            { text: "चंद्र ग्रहण के समय।", correct: false },
            { text: "जब चंद्रमा पृथ्वी के सबसे निकट होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी एक अंग्रेजी कैलेंडर माह में दो पूर्णिमाएँ पड़ती हैं, तो दूसरी पूर्णिमा को \"ब्लू मून\" कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक दुर्लभ खगोलीय घटना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"सुपरमून\" (Supermoon) किसे कहते हैं?",
        answers: shuffle([
            { text: "जब चंद्रमा पृथ्वी से सबसे दूर होता है।", correct: false },
            { text: "जब चंद्रमा पृथ्वी के सबसे निकट होता है और पूर्णिमा होती है।", correct: true },
            { text: "जब एक माह में दो पूर्णिमा हों।", correct: false },
            { text: "पूर्ण चंद्र ग्रहण को।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब चंद्रमा अपनी कक्षा में पृथ्वी के सबसे निकटतम बिंदु (पेरिगी) पर होता है और उसी समय पूर्णिमा होती है, तो वह सामान्य से अधिक बड़ा और चमकीला दिखाई देता है, जिसे सुपरमून कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अंतर्राष्ट्रीय तिथि रेखा किस देशांतर के समानांतर मानी जाती है?",
        answers: shuffle([
            { text: "0° देशांतर", correct: false },
            { text: "90° पूर्व देशांतर", correct: false },
            { text: "180° देशांतर", correct: true },
            { text: "90° पश्चिम देशांतर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय तिथि रेखा (International Date Line) मोटे तौर पर 180° देशांतर का अनुसरण करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे पार करने पर तिथि में एक दिन का परिवर्तन हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की सबसे बाहरी परत को क्या कहा जाता है?",
        answers: shuffle([
            { text: "प्रकाशमंडल (फोटोस्फीयर)", correct: false },
            { text: "वर्णमंडल (क्रोमोस्फीयर)", correct: false },
            { text: "किरीट (कोरोना)", correct: true },
            { text: "कोर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरोना सूर्य के वायुमंडल की सबसे बाहरी परत है, जो केवल पूर्ण सूर्य ग्रहण के समय ही दिखाई देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के वायुमंडल में सर्वाधिक मात्रा में कौन सी गैस पाई जाती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के वायुमंडल में लगभग 78% नाइट्रोजन, 21% ऑक्सीजन और शेष 1% में अन्य गैसें होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल का दूसरा सबसे बड़ा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: true },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि (Saturn) बृहस्पति के बाद सौर मंडल का दूसरा सबसे बड़ा ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अपने छल्लों (rings) के लिए प्रसिद्ध है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के सबसे निकट का तारा कौन सा है?",
        answers: shuffle([
            { text: "ध्रुव तारा", correct: false },
            { text: "प्रॉक्सिमा सेंटॉरी", correct: false },
            { text: "सूर्य", correct: true },
            { text: "साइरस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य एक तारा है और यह पृथ्वी के सबसे निकट स्थित तारा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद दूसरा सबसे निकटतम तारा प्रॉक्सिमा सेंटॉरी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह के पास सबसे अधिक प्राकृतिक उपग्रह (चंद्रमा) हैं?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: true },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवीनतम खोजों के अनुसार, शनि ग्रह के पास सौर मंडल में सबसे अधिक ज्ञात प्राकृतिक उपग्रह हैं, जिनकी संख्या बृहस्पति से अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'भोर का तारा' और 'सांझ का तारा' किस ग्रह को कहा जाता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "बुध", correct: false },
            { text: "शुक्र", correct: true },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र ग्रह सुबह सूर्योदय से पहले पूर्व में और शाम को सूर्यास्त के बाद पश्चिम में दिखाई देता है, इसलिए इसे 'भोर का तारा' (Morning Star) और 'सांझ का तारा' (Evening Star) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का वायुमंडल मुख्य रूप से कार्बन डाइऑक्साइड से बना है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "मंगल", correct: true },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल का वायुमंडल बहुत पतला है और इसमें लगभग 95% कार्बन डाइऑक्साइड है।<br><br><i class='fa-solid fa-angles-right icon'></i> शुक्र का वायुमंडल भी मुख्य रूप से CO2 का है, लेकिन वह बहुत सघन है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का भूमध्यरेखीय व्यास कितना है?",
        answers: shuffle([
            { text: "12,714 किलोमीटर", correct: false },
            { text: "12,756 किलोमीटर", correct: true },
            { text: "6,371 किलोमीटर", correct: false },
            { text: "10,500 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी पूर्ण रूप से गोल नहीं है, यह ध्रुवों पर चपटी है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका भूमध्यरेखीय व्यास लगभग 12,756 किमी और ध्रुवीय व्यास लगभग 12,714 किमी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की सतह का तापमान लगभग कितना होता है?",
        answers: shuffle([
            { text: "6000 डिग्री सेल्सियस", correct: true },
            { text: "1000 डिग्री सेल्सियस", correct: false },
            { text: "15 मिलियन डिग्री सेल्सियस", correct: false },
            { text: "100 डिग्री सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की सतह, जिसे प्रकाशमंडल (फोटोस्फीयर) कहते हैं, का तापमान लगभग 6000 डिग्री सेल्सियस होता है, जबकि इसके केंद्र का तापमान करोड़ों डिग्री सेल्सियस होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"पार्थिव ग्रह\" (Terrestrial Planets) कौन-कौन से हैं?",
        answers: shuffle([
            { text: "बृहस्पति, शनि, अरुण, वरुण", correct: false },
            { text: "बुध, शुक्र, पृथ्वी, मंगल", correct: true },
            { text: "केवल पृथ्वी और मंगल", correct: false },
            { text: "प्लूटो, एरिस, सेरेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के निकट के चार ग्रह - बुध, शुक्र, पृथ्वी और मंगल - चट्टानी सतह वाले हैं, इसलिए इन्हें \"पार्थिव\" या \"स्थलीय\" ग्रह कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"जोवियन ग्रह\" (Jovian Planets) या \"गैस दानव\" कौन-कौन से हैं?",
        answers: shuffle([
            { text: "बुध, शुक्र, पृथ्वी, मंगल", correct: false },
            { text: "पृथ्वी, मंगल, शनि, वरुण", correct: false },
            { text: "बृहस्पति, शनि, अरुण, वरुण", correct: true },
            { text: "केवल बृहस्पति और शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाहरी चार ग्रह - बृहस्पति, शनि, अरुण और वरुण - मुख्य रूप से गैस और बर्फ से बने हैं और बहुत विशाल हैं, इसलिए इन्हें \"जोवियन\" या \"गैस दानव\" कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "एक खगोलीय इकाई (Astronomical Unit - AU) क्या है?",
        answers: shuffle([
            { text: "पृथ्वी और चंद्रमा के बीच की दूरी", correct: false },
            { text: "सूर्य और पृथ्वी के बीच की औसत दूरी", correct: true },
            { text: "प्रकाश द्वारा एक वर्ष में तय की गई दूरी", correct: false },
            { text: "सूर्य और प्लूटो के बीच की दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक खगोलीय इकाई (AU) का उपयोग सौर मंडल के भीतर दूरियों को मापने के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लगभग 15 करोड़ किलोमीटर के बराबर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "प्रकाश वर्ष (Light Year) किसकी इकाई है?",
        answers: shuffle([
            { text: "समय", correct: false },
            { text: "दूरी", correct: true },
            { text: "प्रकाश की तीव्रता", correct: false },
            { text: "गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश वर्ष वह दूरी है जो प्रकाश निर्वात में एक वर्ष में तय करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग तारों और आकाशगंगाओं के बीच की विशाल दूरियों को मापने के लिए किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "लीप वर्ष (Leap Year) में कितने दिन होते हैं?",
        answers: shuffle([
            { text: "365", correct: false },
            { text: "366", correct: true },
            { text: "364", correct: false },
            { text: "365.25", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के परिक्रमण काल (लगभग 365.25 दिन) को समायोजित करने के लिए, हर चार साल में एक अतिरिक्त दिन जोड़ा जाता है, जिससे उस वर्ष में 366 दिन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अतिरिक्त दिन फरवरी में जोड़ा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी के वायुमंडल की कौन सी परत हमें पराबैंगनी किरणों से बचाती है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: true },
            { text: "मध्यमण्डल", correct: false },
            { text: "आयनमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समतापमंडल (Stratosphere) में ओजोन परत (Ozone Layer) स्थित है, जो सूर्य से आने वाली हानिकारक पराबैंगनी (UV) किरणों को अवशोषित कर लेती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हेली का धूमकेतु (Halley's Comet) कितने वर्षों के अंतराल पर दिखाई देता है?",
        answers: shuffle([
            { text: "50 वर्ष", correct: false },
            { text: "76 वर्ष", correct: true },
            { text: "100 वर्ष", correct: false },
            { text: "24 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेली का धूमकेतु एक प्रसिद्ध धूमकेतु है जो लगभग हर 76 साल में पृथ्वी से दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पिछली बार 1986 में देखा गया था और अगली बार 2061 में दिखाई देगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध (Mercury) सौर मंडल का सबसे छोटा और सूर्य के सबसे निकट का ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के बाद पृथ्वी का दूसरा सबसे निकटतम तारा कौन सा है?",
        answers: shuffle([
            { text: "साइरस", correct: false },
            { text: "अल्फा सेंटॉरी A", correct: false },
            { text: "प्रॉक्सिमा सेंटॉरी", correct: true },
            { text: "ध्रुव तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रॉक्सिमा सेंटॉरी, अल्फा सेंटॉरी तारा प्रणाली का एक हिस्सा है और यह सूर्य के बाद पृथ्वी से लगभग 4.24 प्रकाश वर्ष की दूरी पर स्थित सबसे निकटतम तारा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "21 मार्च की स्थिति को क्या कहते हैं, जब दिन-रात बराबर होते हैं?",
        answers: shuffle([
            { text: "ग्रीष्म अयनांत", correct: false },
            { text: "शीत अयनांत", correct: false },
            { text: "शरद विषुव", correct: false },
            { text: "वसंत विषुव", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 21 मार्च को वसंत विषुव (Vernal Equinox) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दिन सूर्य भूमध्य रेखा के ठीक ऊपर होता है और उत्तरी गोलार्ध में वसंत ऋतु की शुरुआत होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "23 सितंबर की स्थिति को क्या कहते हैं, जब दिन-रात बराबर होते हैं?",
        answers: shuffle([
            { text: "वसंत विषुव", correct: false },
            { text: "शरद विषुव", correct: true },
            { text: "ग्रीष्म अयनांत", correct: false },
            { text: "शीत अयनांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 23 सितंबर को शरद विषुव (Autumnal Equinox) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दिन भी सूर्य भूमध्य रेखा के ठीक ऊपर होता है और उत्तरी गोलार्ध में शरद ऋतु की शुरुआत होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस काल्पनिक रेखा के उत्तर में स्थित स्थानों पर सूर्य कभी भी सिर के ऊपर नहीं चमकता है?",
        answers: shuffle([
            { text: "भूमध्य रेखा", correct: false },
            { text: "कर्क रेखा", correct: true },
            { text: "मकर रेखा", correct: false },
            { text: "आर्कटिक वृत्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्क रेखा (23.5° उत्तरी अक्षांश) वह उत्तरी सीमा है जहाँ तक सूर्य की किरणें सीधी पड़ सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके उत्तर में सूर्य कभी भी सीधे सिर के ऊपर नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की आंतरिक संरचना में सबसे बाहरी परत कौन सी है?",
        answers: shuffle([
            { text: "क्रोड (Core)", correct: false },
            { text: "मेंटल (Mantle)", correct: false },
            { text: "भूपर्पटी (Crust)", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की संरचना तीन मुख्य परतों से बनी है: सबसे बाहरी ठोस परत भूपर्पटी (क्रस्ट), बीच की अर्ध-तरल परत मेंटल, और सबसे भीतरी परत क्रोड (कोर)।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी का औसत घनत्व कितना है?",
        answers: shuffle([
            { text: "2.5 ग्राम/सेमी³", correct: false },
            { text: "5.5 ग्राम/सेमी³", correct: true },
            { text: "10.0 ग्राम/सेमी³", correct: false },
            { text: "1.0 ग्राम/सेमी³", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का औसत घनत्व लगभग 5.5 ग्राम प्रति घन सेंटीमीटर है, जो इसे सौर मंडल का सबसे सघन ग्रह बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के बाद, रात में आकाश में सबसे चमकीला तारा कौन सा है?",
        answers: shuffle([
            { text: "ध्रुव तारा", correct: false },
            { text: "वेगा", correct: false },
            { text: "साइरस (Sirius)", correct: true },
            { text: "प्रॉक्सिमा सेंटॉरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइरस, जिसे डॉग स्टार भी कहा जाता है, रात के आकाश में दिखाई देने वाला सबसे चमकीला तारा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "चंद्रमा की सतह का अध्ययन करने वाले विज्ञान को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कॉस्मोलॉजी", correct: false },
            { text: "एस्ट्रोलॉजी", correct: false },
            { text: "सेलेनोलॉजी", correct: true },
            { text: "जियोलॉजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेलेनोलॉजी वह विज्ञान है जिसमें चंद्रमा की उत्पत्ति, संरचना और उसकी सतह की विशेषताओं का अध्ययन किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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