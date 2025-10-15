const questions = [
    {
        topHeading: "ब्रह्मांड पर आधारित 50 MCQs, part_3 (quiz_no.)"
    },
    {
        question: "कौन सा ग्रह अपनी धुरी पर सबसे तेज घूमता है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: true },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति अपना एक चक्कर 10 घंटे से भी कम समय में पूरा कर लेता है, जिसके कारण यह थोड़ा चपटा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वर्महोल' (Wormhole) क्या है?",
        answers: shuffle([
            { text: "अंतरिक्ष-समय में एक काल्पनिक शॉर्टकट", correct: true },
            { text: "एक प्रकार का ब्लैक होल", correct: false },
            { text: "एक मरता हुआ तारा", correct: false },
            { text: "एक सर्पिल आकाशगंगा का केंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सामान्य सापेक्षता के सिद्धांत पर आधारित एक परिकल्पना है, जो ब्रह्मांड में दो दूरस्थ बिंदुओं को जोड़ सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'रेडशिफ्ट' (Redshift) की घटना किसका प्रमाण देती है?",
        answers: shuffle([
            { text: "ब्रह्मांड का विस्तार हो रहा है", correct: true },
            { text: "ब्रह्मांड सिकुड़ रहा है", correct: false },
            { text: "ब्रह्मांड स्थिर है", correct: false },
            { text: "तारों का तापमान बढ़ रहा है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई खगोलीय पिंड हमसे दूर जाता है, तो उससे आने वाले प्रकाश की तरंग दैर्ध्य लंबी (लाल) हो जाती है, जिसे रेडशिफ्ट कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'न्यूट्रॉन तारा' क्या है?",
        answers: shuffle([
            { text: "एक सुपरनोवा विस्फोट के बाद बचे हुए एक विशाल तारे का सघन कोर", correct: true },
            { text: "एक तारा जो न्यूट्रॉन उत्सर्जित करता है", correct: false },
            { text: "एक ठंडा, मृत तारा", correct: false },
            { text: "एक युवा, गर्म तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूट्रॉन तारे अविश्वसनीय रूप से घने होते हैं; उनके पदार्थ के एक चम्मच का वजन अरबों टन हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ऑरोरा बोरेलिस' (उत्तरी ध्रुवीय ज्योति) का क्या कारण है?",
        answers: shuffle([
            { text: "सौर पवन के आवेशित कणों का पृथ्वी के चुंबकीय क्षेत्र से टकराना", correct: true },
            { text: "चंद्रमा का प्रकाश", correct: false },
            { text: "उल्काओं का जलना", correct: false },
            { text: "वायुमंडलीय प्रदूषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सूर्य से आने वाले आवेशित कण पृथ्वी के ध्रुवीय क्षेत्रों के पास वायुमंडल से टकराते हैं, तो वे रंगीन प्रकाश उत्पन्न करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'उपसौर' (Perihelion) की स्थिति कब होती है?",
        answers: shuffle([
            { text: "जब पृथ्वी सूर्य के सबसे निकट होती है", correct: true },
            { text: "जब पृथ्वी सूर्य से सबसे दूर होती है", correct: false },
            { text: "जब चंद्रमा पृथ्वी के सबसे निकट होता है", correct: false },
            { text: "जब पृथ्वी, सूर्य और चंद्रमा एक रेखा में होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घटना आमतौर पर जनवरी की शुरुआत में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'अपसौर' (Aphelion) की स्थिति कब होती है?",
        answers: shuffle([
            { text: "जब पृथ्वी सूर्य से सबसे दूर होती है", correct: true },
            { text: "जब पृथ्वी सूर्य के सबसे निकट होती है", correct: false },
            { text: "जब चंद्रमा पृथ्वी से सबसे दूर होता है", correct: false },
            { text: "जब चंद्र ग्रहण होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घटना आमतौर पर जुलाई की शुरुआत में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के कोरोना का तापमान कितना होता है?",
        answers: shuffle([
            { text: "1 मिलियन डिग्री सेल्सियस से अधिक", correct: true },
            { text: "लगभग 6,000 डिग्री सेल्सियस", correct: false },
            { text: "लगभग 100,000 डिग्री सेल्सियस", correct: false },
            { text: "सूर्य की सतह के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरोना का तापमान सूर्य की सतह से सैकड़ों गुना अधिक होता है, जिसका कारण अभी भी अनुसंधान का विषय है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'अंतर्राष्ट्रीय अंतरिक्ष स्टेशन' (ISS) कहाँ स्थित है?",
        answers: shuffle([
            { text: "निम्न पृथ्वी कक्षा (Low Earth Orbit) में", correct: true },
            { text: "भू-स्थिर कक्षा में", correct: false },
            { text: "चंद्रमा की कक्षा में", correct: false },
            { text: "मंगल की कक्षा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ISS पृथ्वी की सतह से लगभग 400 किलोमीटर की ऊंचाई पर परिक्रमा करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "शनि के वलय मुख्य रूप से किससे बने हैं?",
        answers: shuffle([
            { text: "बर्फ के कणों और चट्टानी मलबे", correct: true },
            { text: "गैस और धूल", correct: false },
            { text: "चट्टानी क्षुद्रग्रहों", correct: false },
            { text: "तरल धातु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये कण धूल के आकार से लेकर बड़े-बड़े घरों के आकार तक के हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'आदित्य-एल1' मिशन का संबंध किसके अध्ययन से है?",
        answers: shuffle([
            { text: "सूर्य", correct: true },
            { text: "मंगल ग्रह", correct: false },
            { text: "चंद्रमा", correct: false },
            { text: "ब्लैक होल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह इसरो का पहला सौर मिशन है जिसका उद्देश्य सूर्य के कोरोना, सौर ज्वालाओं और सौर पवन का अध्ययन करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ब्रह्मांड में ज्ञात सबसे कठोर पदार्थ कौन सा है?",
        answers: shuffle([
            { text: "न्यूट्रॉन तारे का पदार्थ (न्यूट्रोनियम)", correct: true },
            { text: "हीरा", correct: false },
            { text: "ग्राफीन", correct: false },
            { text: "क्वार्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूट्रॉन तारे का पदार्थ इतना सघन और कठोर होता है कि इसकी तुलना किसी भी स्थलीय पदार्थ से नहीं की जा सकती।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'हब्बल का नियम' क्या कहता है?",
        answers: shuffle([
            { text: "एक आकाशगंगा के दूर जाने की गति उसकी दूरी के समानुपाती होती है", correct: true },
            { text: "ग्रह सूर्य के चारों ओर अंडाकार पथ में घूमते हैं", correct: false },
            { text: "हर क्रिया की समान और विपरीत प्रतिक्रिया होती है", correct: false },
            { text: "गुरुत्वाकर्षण बल द्रव्यमान के गुणनफल के समानुपाती होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि जो आकाशगंगा जितनी दूर है, वह उतनी ही तेजी से हमसे दूर जा रही है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'तुषार रेखा' (Frost Line) सौर मंडल में क्या दर्शाती है?",
        answers: shuffle([
            { text: "वह दूरी जहाँ से पानी बर्फ के रूप में संघनित हो सकता है", correct: true },
            { text: "वह सीमा जहाँ ग्रह समाप्त हो जाते हैं", correct: false },
            { text: "क्षुद्रग्रह पट्टी की बाहरी सीमा", correct: false },
            { text: "और्ट बादल की शुरुआत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसी रेखा के कारण आंतरिक ग्रह चट्टानी और बाहरी ग्रह गैसीय और बर्फीले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गैलीलियन चंद्रमा' किस ग्रह के उपग्रह हैं?",
        answers: shuffle([
            { text: "बृहस्पति", correct: true },
            { text: "शनि", correct: false },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलीलियो द्वारा खोजे गए बृहस्पति के चार सबसे बड़े चंद्रमाओं - आयो, यूरोपा, गैनीमेड और कैलिस्टो को गैलीलियन चंद्रमा कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस खगोलीय पिंड पर 'शांति का सागर' (Sea of Tranquility) स्थित है?",
        answers: shuffle([
            { text: "चंद्रमा", correct: true },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "टाइटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह चंद्रमा पर एक समतल मैदान है जहाँ अपोलो 11 मिशन उतरा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'स्थिर अवस्था सिद्धांत' (Steady State Theory) के अनुसार ब्रह्मांड कैसा है?",
        answers: shuffle([
            { text: "हमेशा से अस्तित्व में है और अपरिवर्तनीय है", correct: true },
            { text: "एक बिंदु से शुरू हुआ और विस्तार कर रहा है", correct: false },
            { text: "बार-बार फैलता और सिकुड़ता है", correct: false },
            { text: "एक बड़े विस्फोट में समाप्त हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत अब काफी हद तक अमान्य हो चुका है क्योंकि महाविस्फोट सिद्धांत के पक्ष में अधिक प्रमाण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह कौन सा ग्रह है जिसके दिन और रात के तापमान में सबसे अधिक अंतर होता है?",
        answers: shuffle([
            { text: "बुध", correct: true },
            { text: "मंगल", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल न होने के कारण बुध का दिन का तापमान 430°C तक पहुंच जाता है जबकि रात का तापमान -180°C तक गिर जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "आकाशगंगा के केंद्र में स्थित विशाल ब्लैक होल का क्या नाम है?",
        answers: shuffle([
            { text: "सेजिटेरियस ए* (Sagittarius A*)", correct: true },
            { text: "साइग्नस एक्स-1", correct: false },
            { text: "मेसियर 87*", correct: false },
            { text: "टोन 618", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सुपरमैसिव ब्लैक होल है जिसका द्रव्यमान सूर्य से लगभग 4 मिलियन गुना अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एस्ट्रोफिजिक्स' (खगोल भौतिकी) किसका अध्ययन है?",
        answers: shuffle([
            { text: "ब्रह्मांड के भौतिक और रासायनिक गुणों का", correct: true },
            { text: "ग्रहों की स्थिति का भविष्य पर प्रभाव", correct: false },
            { text: "पृथ्वी के वायुमंडल का", correct: false },
            { text: "रॉकेट विज्ञान का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह खगोल विज्ञान की वह शाखा है जो खगोलीय पिंडों की प्रकृति को समझने के लिए भौतिकी के सिद्धांतों का उपयोग करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एंटीमैटर' (प्रतिपदार्थ) क्या है?",
        answers: shuffle([
            { text: "सामान्य पदार्थ जिसका आवेश विपरीत होता है", correct: true },
            { text: "डार्क मैटर का दूसरा नाम", correct: false },
            { text: "ब्लैक होल के अंदर का पदार्थ", correct: false },
            { text: "ऊर्जा का एक रूप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, एक इलेक्ट्रॉन का एंटीमैटर पॉज़िट्रॉन होता है, जिसका आवेश धनात्मक होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब पदार्थ और प्रतिपदार्थ मिलते हैं, तो वे एक दूसरे को नष्ट कर देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मिलर-यूरे प्रयोग' का संबंध किससे है?",
        answers: shuffle([
            { text: "पृथ्वी पर जीवन की उत्पत्ति से", correct: true },
            { text: "ब्रह्मांड के विस्तार से", correct: false },
            { text: "ब्लैक होल के निर्माण से", correct: false },
            { text: "तारों की ऊर्जा से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रयोग ने दर्शाया कि प्रारंभिक पृथ्वी की परिस्थितियों में अकार्बनिक पदार्थों से अमीनो एसिड जैसे कार्बनिक अणु बन सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ब्रह्मांड में तारों के बीच की खाली जगह को क्या कहते हैं?",
        answers: shuffle([
            { text: "अंतरतारकीय माध्यम (Interstellar Medium)", correct: true },
            { text: "शून्य स्थान", correct: false },
            { text: "डार्क स्पेस", correct: false },
            { text: "वैक्यूम गैप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थान पूरी तरह से खाली नहीं है, बल्कि इसमें बहुत कम घनत्व वाली गैस, धूल और कॉस्मिक किरणें होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस भारतीय वेधशाला ने गुरुत्वाकर्षण तरंगों का पता लगाने में महत्वपूर्ण भूमिका निभाई?",
        answers: shuffle([
            { text: "लेजर इंटरफेरोमीटर ग्रेविटेशनल-वेव ऑब्जर्वेटरी - इंडिया (LIGO-India)", correct: true },
            { text: "कोडाइकनाल सौर वेधशाला", correct: false },
            { text: "उदयपुर सौर वेधशाला", correct: false },
            { text: "भारतीय खगोलीय वेधशाला, हनले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> LIGO-India परियोजना गुरुत्वाकर्षण तरंगों का पता लगाने के लिए बनाए गए वैश्विक नेटवर्क का हिस्सा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गोल्डीलॉक्स ज़ोन' (Goldilocks Zone) किसे कहते हैं?",
        answers: shuffle([
            { text: "किसी तारे के चारों ओर वह क्षेत्र जहाँ किसी ग्रह की सतह पर तरल पानी मौजूद हो सकता है", correct: true },
            { text: "किसी तारे के चारों ओर वह क्षेत्र जहाँ ग्रह बहुत गर्म होते हैं", correct: false },
            { text: "किसी तारे के चारों ओर वह क्षेत्र जहाँ ग्रह बहुत ठंडे होते हैं", correct: false },
            { text: "आकाशगंगा का सबसे घना क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस क्षेत्र को 'रहने योग्य क्षेत्र' भी कहा जाता है क्योंकि यहाँ जीवन के पनपने की संभावना होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य का व्यास पृथ्वी के व्यास का लगभग कितना गुना है?",
        answers: shuffle([
            { text: "109 गुना", correct: true },
            { text: "59 गुना", correct: false },
            { text: "209 गुना", correct: false },
            { text: "309 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य इतना बड़ा है कि इसमें लगभग 13 लाख पृथ्वी समा सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'टाइडल लॉकिंग' (ज्वारीय रूप से बंद) का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक पिंड का दूसरे पिंड के चारों ओर हमेशा एक ही मुख रखना", correct: true },
            { text: "दो ग्रहों का आपस में टकराना", correct: false },
            { text: "किसी पिंड पर उच्च ज्वार आना", correct: false },
            { text: "किसी पिंड का अपने अक्ष पर न घूमना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का चंद्रमा टाइडल लॉकिंग का एक उत्कृष्ट उदाहरण है, इसीलिए हम हमेशा उसका एक ही पक्ष देखते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मैग्नेटर' (Magnetar) क्या है?",
        answers: shuffle([
            { text: "एक अत्यंत शक्तिशाली चुंबकीय क्षेत्र वाला न्यूट्रॉन तारा", correct: true },
            { text: "एक बहुत बड़ा चुंबक", correct: false },
            { text: "एक प्रकार की आकाशगंगा", correct: false },
            { text: "एक अंतरिक्ष यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैग्नेटर का चुंबकीय क्षेत्र पृथ्वी के चुंबकीय क्षेत्र से खरबों गुना अधिक शक्तिशाली हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल में 'गैसीय दानव' (Gas Giants) ग्रह कौन से हैं?",
        answers: shuffle([
            { text: "बृहस्पति, शनि, अरुण, वरुण", correct: true },
            { text: "बुध, शुक्र, पृथ्वी, मंगल", correct: false },
            { text: "प्लूटो, एरिस, सेरेस", correct: false },
            { text: "केवल बृहस्पति और शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये ग्रह मुख्य रूप से हाइड्रोजन, हीलियम और अन्य गैसों से बने हैं और इनका कोई ठोस सतह नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'भू-समीपक' (Perigee) वह बिंदु है जब...",
        answers: shuffle([
            { text: "चंद्रमा पृथ्वी के सबसे निकट होता है", correct: true },
            { text: "चंद्रमा पृथ्वी से सबसे दूर होता है", correct: false },
            { text: "पृथ्वी सूर्य के सबसे निकट होती है", correct: false },
            { text: "कोई उपग्रह अपने ग्रह के सबसे निकट होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरिगी' शब्द विशेष रूप से पृथ्वी की परिक्रमा करने वाले पिंडों (जैसे चंद्रमा या कृत्रिम उपग्रह) के लिए उपयोग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'भू-दूरस्थ' (Apogee) वह बिंदु है जब...",
        answers: shuffle([
            { text: "चंद्रमा पृथ्वी से सबसे दूर होता है", correct: true },
            { text: "चंद्रमा पृथ्वी के सबसे निकट होता है", correct: false },
            { text: "पृथ्वी सूर्य से सबसे दूर होती है", correct: false },
            { text: "कोई उपग्रह अपने ग्रह से सबसे दूर होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब चंद्रमा अपोजी पर होता है, तो वह आकाश में थोड़ा छोटा दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'लॉन्च व्हीकल' (प्रक्षेपण यान) का क्या कार्य है?",
        answers: shuffle([
            { text: "उपग्रहों को पृथ्वी की कक्षा में स्थापित करना", correct: true },
            { text: "अंतरिक्ष यात्रियों को अंतरिक्ष स्टेशन तक ले जाना", correct: false },
            { text: "अंतरिक्ष का सर्वेक्षण करना", correct: false },
            { text: "ग्रहों पर रोवर उतारना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीएसएलवी (PSLV) और जीएसएलवी (GSLV) इसरो द्वारा उपयोग किए जाने वाले प्रमुख प्रक्षेपण यान हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस घटना के कारण तारे टिमटिमाते हुए प्रतीत होते हैं?",
        answers: shuffle([
            { text: "वायुमंडलीय अपवर्तन के कारण", correct: true },
            { text: "तारों के प्रकाश में परिवर्तन के कारण", correct: false },
            { text: "बादलों की गति के कारण", correct: false },
            { text: "पृथ्वी के घूर्णन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारों से आने वाला प्रकाश पृथ्वी के वायुमंडल की विभिन्न परतों से गुजरते समय लगातार मुड़ता रहता है, जिससे वे टिमटिमाते हुए दिखाई देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'गामा-किरण फटना' (Gamma-Ray Burst) क्या है?",
        answers: shuffle([
            { text: "ब्रह्मांड में होने वाला सबसे ऊर्जावान विस्फोट", correct: true },
            { text: "एक नए तारे का जन्म", correct: false },
            { text: "एक ब्लैक होल का वाष्पीकरण", correct: false },
            { text: "सौर ज्वाला का एक प्रकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये विस्फोट अक्सर तब होते हैं जब एक बहुत विशाल तारा मरता है या जब दो न्यूट्रॉन तारे आपस में विलीन हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'एक्सोप्लैनेट' (Exoplanet) किसे कहते हैं?",
        answers: shuffle([
            { text: "हमारे सौर मंडल के बाहर किसी अन्य तारे की परिक्रमा करने वाले ग्रह को", correct: true },
            { text: "सौर मंडल के बौने ग्रहों को", correct: false },
            { text: "बृहस्पति जैसे गैसीय ग्रहों को", correct: false },
            { text: "पृथ्वी जैसे चट्टानी ग्रहों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब तक हजारों एक्सोप्लैनेट खोजे जा चुके हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "नासा का 'पार्कर सोलर प्रोब' मिशन किसका अध्ययन करने के लिए भेजा गया है?",
        answers: shuffle([
            { text: "सूर्य के कोरोना का", correct: true },
            { text: "मंगल के वायुमंडल का", correct: false },
            { text: "बृहस्पति के चंद्रमाओं का", correct: false },
            { text: "शनि के वलयों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मिशन किसी भी पिछले अंतरिक्ष यान की तुलना में सूर्य के बहुत करीब जाकर उसका अध्ययन कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सा भारतीय गणितज्ञ और खगोलशास्त्री सबसे पहले यह बताने वालों में से था कि पृथ्वी गोल है और अपनी धुरी पर घूमती है?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: true },
            { text: "भास्कर द्वितीय", correct: false },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "वराहमिहिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्यभट्ट ने अपने ग्रंथ 'आर्यभटीय' में सूर्य और चंद्र ग्रहण की वैज्ञानिक व्याख्या भी की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "आकाश का रंग नीला क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "सूर्य के प्रकाश का वायुमंडल द्वारा प्रकीर्णन (Scattering)", correct: true },
            { text: "क्योंकि समुद्र नीला है", correct: false },
            { text: "वायुमंडल में नीली गैस की उपस्थिति", correct: false },
            { text: "ओजोन परत के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल के कण नीले प्रकाश को अन्य रंगों की तुलना में अधिक बिखेरते हैं, जिससे आकाश नीला दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मल्टीवर्स' (Multiverse) की परिकल्पना क्या है?",
        answers: shuffle([
            { text: "यह कि हमारे ब्रह्मांड के समानांतर अन्य ब्रह्मांड भी मौजूद हो सकते हैं", correct: true },
            { text: "यह कि हमारा ब्रह्मांड ही एकमात्र ब्रह्मांड है", correct: false },
            { text: "यह कि ब्रह्मांड एक बड़े ब्लैक होल के अंदर है", correct: false },
            { text: "यह कि ब्रह्मांड हमेशा से ऐसा ही था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक सैद्धांतिक अवधारणा है जिसकी अभी तक कोई प्रयोगात्मक पुष्टि नहीं हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'धूमकेतु' (Comet) की पूंछ हमेशा किस दिशा में होती है?",
        answers: shuffle([
            { text: "सूर्य से विपरीत दिशा में", correct: true },
            { text: "सूर्य की ओर", correct: false },
            { text: "अपनी गति की दिशा में", correct: false },
            { text: "अपनी गति के विपरीत दिशा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर पवन और विकिरण का दबाव धूमकेतु के नाभिक से निकलने वाली गैस और धूल को सूर्य से दूर धकेलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'कन्या नक्षत्र समूह' (Virgo Supercluster) क्या है?",
        answers: shuffle([
            { text: "आकाशगंगाओं का एक विशाल समूह जिसमें हमारी मंदाकिनी भी शामिल है", correct: true },
            { text: "एक तारामंडल", correct: false },
            { text: "एक तारा समूह", correct: false },
            { text: "एक नेबुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आकाशगंगाओं का एक बहुत बड़ा संग्रह है, जो ब्रह्मांड की सबसे बड़ी संरचनाओं में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर दिन और रात होने का क्या कारण है?",
        answers: shuffle([
            { text: "पृथ्वी का अपनी धुरी पर घूर्णन", correct: true },
            { text: "पृथ्वी का सूर्य के चारों ओर परिक्रमण", correct: false },
            { text: "पृथ्वी का अक्षीय झुकाव", correct: false },
            { text: "चंद्रमा का गुरुत्वाकर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के घूमने से उसका जो हिस्सा सूर्य के सामने होता है, वहाँ दिन होता है और जो हिस्सा विपरीत दिशा में होता है, वहाँ रात होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी पर ऋतुओं में परिवर्तन का क्या कारण है?",
        answers: shuffle([
            { text: "पृथ्वी का अपनी धुरी पर 23.5 डिग्री का झुकाव", correct: true },
            { text: "पृथ्वी का सूर्य से दूरी में परिवर्तन", correct: false },
            { text: "सौर ज्वालाओं की गतिविधि", correct: false },
            { text: "चंद्रमा की कलाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस झुकाव के कारण वर्ष के अलग-अलग समय में पृथ्वी के गोलार्धों को सूर्य की सीधी या तिरछी किरणें प्राप्त होती हैं, जिससे मौसम बदलते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वाइपर बेल्ट' (Kuiper Belt) क्या है?",
        answers: shuffle([
            { text: "वरुण (नेप्च्यून) की कक्षा के पार बर्फीले पिंडों का एक क्षेत्र", correct: true },
            { text: "मंगल और बृहस्पति के बीच का क्षेत्र", correct: false },
            { text: "शनि के चारों ओर एक वलय", correct: false },
            { text: "एक सर्पिल आकाशगंगा की भुजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लूटो जैसे बौने ग्रह और कई धूमकेतु इसी क्षेत्र में स्थित हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'रेडियो खगोल विज्ञान' (Radio Astronomy) में किसका उपयोग करके खगोलीय पिंडों का अध्ययन किया जाता है?",
        answers: shuffle([
            { text: "रेडियो दूरबीन", correct: true },
            { text: "दृश्य प्रकाश दूरबीन", correct: false },
            { text: "एक्स-रे डिटेक्टर", correct: false },
            { text: "इन्फ्रारेड सेंसर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड के उन हिस्सों का अध्ययन करने में मदद करता है जो दृश्य प्रकाश में दिखाई नहीं देते, जैसे पल्सर और क्वासर।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'हॉकिंग रेडिएशन' की अवधारणा किससे संबंधित है?",
        answers: shuffle([
            { text: "ब्लैक होल के वाष्पीकरण से", correct: true },
            { text: "तारों के निर्माण से", correct: false },
            { text: "ब्रह्मांड के विस्तार से", correct: false },
            { text: "आकाशगंगाओं के टकराव से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टीफन हॉकिंग के अनुसार, क्वांटम प्रभावों के कारण ब्लैक होल धीरे-धीरे विकिरण उत्सर्जित करते हैं और अंततः लुप्त हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'लाल बौना' (Red Dwarf) तारा क्या है?",
        answers: shuffle([
            { text: "एक छोटा, ठंडा और लंबे समय तक जीवित रहने वाला तारा", correct: true },
            { text: "एक विशाल, गर्म तारा", correct: false },
            { text: "एक मृत तारा", correct: false },
            { text: "तारे के जीवन की एक मध्यवर्ती अवस्था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारी आकाशगंगा में सबसे आम प्रकार के तारे लाल बौने हैं, और इनकी आयु खरबों वर्ष हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारे सौर मंडल का सबसे ऊंचा पर्वत 'ओलंपस मॉन्स' किस ग्रह पर स्थित है?",
        answers: shuffle([
            { text: "मंगल", correct: true },
            { text: "पृथ्वी", correct: false },
            { text: "शुक्र", correct: false },
            { text: "बुध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओलंपस मॉन्स एक ज्वालामुखी पर्वत है जो माउंट एवरेस्ट से लगभग तीन गुना ऊंचा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'लाग्रेंज बिंदु' (Lagrange Point) क्या है?",
        answers: shuffle([
            { text: "अंतरिक्ष में एक ऐसा बिंदु जहाँ दो बड़े पिंडों का गुरुत्वाकर्षण बल संतुलित होता है", correct: true },
            { text: "ब्लैक होल का केंद्र", correct: false },
            { text: "आकाशगंगा का केंद्र", correct: false },
            { text: "सौर मंडल का किनारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन बिंदुओं पर रखी कोई छोटी वस्तु अपनी स्थिति बनाए रख सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जेम्स वेब टेलीस्कोप L2 लाग्रेंज बिंदु पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'वैन एलन बेल्ट' (Van Allen Belt) क्या है?",
        answers: shuffle([
            { text: "पृथ्वी के चुंबकीय क्षेत्र द्वारा फंसे हुए आवेशित कणों का एक क्षेत्र", correct: true },
            { text: "शनि के चारों ओर एक वलय", correct: false },
            { text: "क्षुद्रग्रहों का एक समूह", correct: false },
            { text: "एक प्रकार का नेबुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बेल्ट पृथ्वी को हानिकारक सौर विकिरण से बचाने में मदद करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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