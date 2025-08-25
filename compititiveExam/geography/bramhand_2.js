const questions = [ 
    {
        topHeading: " ब्रह्मांड पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 42)."
    },
    {
        question: "सौर मंडल में सबसे बड़ा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "मंगल", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति सौर मंडल का सबसे बड़ा ग्रह है, जिसका व्यास लगभग 1,43,000 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गैस जायंट है और इसकी द्रव्यमान पृथ्वी से लगभग 318 गुना अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> बृहस्पति का विशाल गुरुत्वाकर्षण सौर मंडल में कई छोटे ग्रहों और वस्तुओं के कक्षाओं को प्रभावित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कई चंद्रमाएँ भी हैं, जिनमें गैनिमिड सबसे बड़ा है।",
    },
    {
        question: "ब्रह्मांड की निरंतर विस्तार की प्रक्रिया का वैज्ञानिक नाम क्या है?",
        answers: shuffle([
            { text: "रेडशिफ्ट", correct: false },
            { text: "बिग क्रंच", correct: false },
            { text: "हबल का नियम", correct: true },
            { text: "न्यूटन का नियम", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> हबल का नियम यह बताता है कि ब्रह्मांड में मौजूद आकाशगंगाएँ आपस से दूर जा रही हैं और जितनी दूर आकाशगंगा होगी, उतनी तेज़ वह हमसे दूर जा रही होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मतलब है कि ब्रह्मांड निरंतर विस्तार कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस नियम का नाम खगोलशास्त्री एडविन हबल के नाम पर रखा गया है जिन्होंने यह खोज की।",
    },
    {
        question: "ब्लैक होल का 'सिंगीलेरिटी' (Singularity) क्या है?",
        answers: shuffle([
            { text: "ब्लैक होल के चारों ओर की सीमा", correct: false },
            {
                text: "ब्लैक होल के केंद्र में एक बिंदु जहाँ घनत्व अनंत होता है",
                correct: true,
            },
            { text: "ब्लैक होल के प्रभाव क्षेत्र का नाम", correct: false },
            { text: "ब्लैक होल की चमक", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> ब्लैक होल की सिंगुलैरिटी वह बिंदु है जहाँ सभी द्रव्यमान अत्यंत संकुचित होकर एक अनंत घनत्व और गुरुत्वाकर्षण क्षेत्र उत्पन्न करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वह स्थान है जहां वर्तमान भौतिक नियम काम करना बंद कर देते हैं और क्वांटम गुरुत्वाकर्षण की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस बिंदु को समझना आधुनिक भौतिकी के लिए एक बड़ी चुनौती है।",
    },
    {
        question: "कॉस्मिक माइक्रोवेव बैकग्राउंड (CMB) विकिरण का तापमान लगभग कितना है?",
        answers: shuffle([
            { text: "0 K", correct: false },
            { text: "2.7 K", correct: true },
            { text: "3000 K", correct: false },
            { text: "273 K", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> कॉस्मिक माइक्रोवेव बैकग्राउंड (CMB) विकिरण ब्रह्मांड के प्रारंभिक दिनों से बची हुई अवशिष्ट विकिरण है, जिसका तापमान लगभग 2.7 केल्विन है, यानी -270 डिग्री सेल्सियस के लगभग।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विकिरण लगभग समान रूप से ब्रह्मांड में फैली हुई है और बिग बैंग सिद्धांत का एक मजबूत प्रमाण है।",
    },
    {
        question: "ब्रह्मांड की विस्तार दर मापन में \"रेडशिफ्ट\" का क्या महत्व है?",
        answers: shuffle([
            { text: "यह तारे की चमक मापता है", correct: false },
            { text: "यह ग्रहों की दूरी मापता है", correct: false },
            {
                text: "यह ब्रह्मांड की गति और दूरी की मापन में सहायक होता है",
                correct: true,
            },
            { text: "यह आकाशगंगाओं की संख्या बताता है", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> रेडशिफ्ट उस स्थिति को कहते हैं जब किसी वस्तु का प्रकाश तरंगदैर्ध्य बढ़ जाता है और वह प्रकाश लाल रंग की ओर खिसकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब आकाशगंगाएँ हमसे दूर जा रही होती हैं, तो उनका प्रकाश रेडशिफ्ट होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे उनकी गति और दूरी का अनुमान लगाया जाता है, जिससे ब्रह्मांड के विस्तार को समझा जा सकता है।",
    },
    {
        question: "किस घटना के कारण \"न्यूट्रॉन तारा\" बनता है?",
        answers: shuffle([
            { text: "तारे के जलने की प्रक्रिया पूरी होने पर", correct: false },
            {
                text: "एक मध्यम आकार के तारे के सुपरनोवा विस्फोट के बाद बचा हुआ केंद्र",
                correct: true,
            },
            { text: "ग्रहों के टकराव से", correct: false },
            { text: "काले छिद्र के निकट होने पर", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> जब भारी तारे का जीवन समाप्त होकर सुपरनोवा विस्फोट होता है, तो उसका केंद्र संकुचित होकर एक अत्यंत सघन वस्तु बन जाता है, जिसे न्यूट्रॉन तारा कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तारा लगभग केवल न्यूट्रॉनों से बना होता है, इसका घनत्व इतना अधिक होता है कि एक चम्मच सामग्री का वजन अरबों टन होता है।",
    },
    {
        question:
            "किस खगोलीय उपकरण का उपयोग आकाशगंगाओं और तारा समूहों का अवलोकन करने के लिए किया जाता है?",
        answers: shuffle([
            { text: "माइक्रोस्कोप", correct: false },
            { text: "टेलीस्कोप", correct: true },
            { text: "स्पेक्ट्रोमीटर", correct: false },
            { text: "बैरोमीटर", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> टेलीस्कोप एक उपकरण है जो दूर स्थित खगोलीय पिंडों को देखने और उनका अध्ययन करने के लिए उपयोग किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> आधुनिक टेलीस्कोप न केवल दृश्य प्रकाश बल्कि अन्य विद्युतचुम्बकीय तरंग दैर्ध्यों जैसे रेडियो, इन्फ्रारेड, एक्स-रे आदि का भी अवलोकन कर सकते हैं, जिससे ब्रह्मांड की गहरी समझ मिलती है।",
    },
    {
        question: "गैलेक्सी क्लस्टर किससे बनता है?",
        answers: shuffle([
            { text: "ग्रहों के समूह से", correct: false },
            { text: "तारों के समूह से", correct: false },
            { text: "आकाशगंगाओं के समूह से", correct: true },
            { text: "ब्लैक होल के समूह से", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> गैलेक्सी क्लस्टर आकाशगंगाओं का विशाल समूह होता है, जिनमें सैंकड़ों या हजारों आकाशगंगाएँ एक गुरुत्वाकर्षण क्षेत्र में बंधी होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये क्लस्टर ब्रह्मांड की संरचना का एक प्रमुख हिस्सा हैं और इनके अध्ययन से ब्रह्मांड की विकास प्रक्रिया को समझा जाता है।",
    },
    {
        question: "न्यूट्रॉन तारे का घनत्व कितना अधिक होता है?",
        answers: shuffle([
            { text: "पृथ्वी के घनत्व के बराबर", correct: false },
            { text: "पानी के घनत्व के बराबर", correct: false },
            { text: "लाखों गुना पृथ्वी के घनत्व से अधिक", correct: true },
            { text: "हवा के घनत्व के बराबर", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> न्यूट्रॉन तारे का घनत्व अत्यंत अधिक होता है, आम तौर पर पृथ्वी की तुलना में लाखों गुना अधिक।<br><br><i class='fa-solid fa-angles-right icon'></i> एक चम्मच न्यूट्रॉन तारे की सामग्री का वजन अरबों टन हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घनत्व तारे के सुपरनोवा विस्फोट के बाद उसके कोर के संकुचन के कारण होता है।",
    },
    {
        question: "क्वासर (Quasar) क्या हैं?",
        answers: shuffle([
            { text: "छोटे ग्रह", correct: false },
            { text: "आकाशगंगाओं के केंद्रों में अत्यंत चमकीली वस्तुएं", correct: true },
            { text: "ब्लैक होल के निकट बनने वाले तारें", correct: false },
            { text: "न्यूट्रॉन तारे का एक प्रकार", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> क्वासर ब्रह्मांड में पाए जाने वाले अत्यंत दूर और चमकीले खगोलीय पिंड हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये अक्सर आकाशगंगाओं के केंद्र में मौजूद सुपरमासिव ब्लैक होल के आस-पास के पदार्थों के तीव्र विकिरण के कारण उत्पन्न होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> क्वासर की ऊर्जा सामान्य आकाशगंगाओं से कई गुना अधिक होती है।",
    },
    {
        question: "ब्रह्मांड में “डार्क मैटर” (Dark Matter) का क्या महत्व है?",
        answers: shuffle([
            { text: "यह ब्रह्मांड में दिखाई देने वाला पदार्थ है", correct: false },
            { text: "यह ब्रह्मांड के विस्तार को रोकता है", correct: false },
            {
                text: "यह ब्रह्मांड के गुरुत्वाकर्षण प्रभावों को समझाने में मदद करता है, जबकि यह सीधे दिखाई नहीं देता",
                correct: true,
            },
            { text: "यह केवल सूरज के आसपास पाया जाता है", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> डार्क मैटर एक प्रकार का ऐसा पदार्थ है जो ब्रह्मांड में मौजूद है लेकिन सीधे प्रकाश या किसी अन्य विकिरण को उत्सर्जित, अवशोषित या प्रतिबिंबित नहीं करता, इसलिए इसे हम सीधे नहीं देख सकते।<br><br><i class='fa-solid fa-angles-right icon'></i> फिर भी इसका गुरुत्वाकर्षण प्रभाव आकाशगंगाओं के गतिशील व्यवहार और ब्रह्मांड के बड़े पैमाने के संरचनाओं को समझाने के लिए आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> वैज्ञानिक मानते हैं कि ब्रह्मांड का लगभग 27% भाग डार्क मैटर से बना है।",
    },
    {
        question:
            "ब्रह्मांड के प्रारंभिक विस्तार के मॉडल में 'इन्फ्लेशन' सिद्धांत का क्या योगदान है?",
        answers: shuffle([
            { text: "ब्रह्मांड के ठंडा होने का कारण बताना", correct: false },
            {
                text: "ब्रह्मांड के बहुत तेज और अत्यधिक विस्तार की व्याख्या करना",
                correct: true,
            },
            { text: "तारा बनने की प्रक्रिया बताना", correct: false },
            { text: "ब्लैक होल के गठन को समझाना", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> इन्फ्लेशन थ्योरी बताती है कि बिग बैंग के तुरंत बाद, ब्रह्मांड ने बहुत छोटे क्षण में अत्यंत तेज गति से विस्तार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विस्तार इतनी तीव्र था कि ब्रह्मांड के एकरूप और समता की व्याख्या करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्फ्लेशन ने ब्रह्मांड की वर्तमान बड़ी संरचनाओं और CMB में देखी गई समानताओं को समझने में मदद की।",
    },
    {
        question: "ब्रह्मांड में 'डार्क एनर्जी' का क्या काम है?",
        answers: shuffle([
            { text: "ब्रह्मांड के सिकुड़ने का कारण बनती है", correct: false },
            { text: "ब्रह्मांड के विस्तार को तेज करती है", correct: true },
            { text: "तारों के गठन में भूमिका निभाती है", correct: false },
            { text: "ग्रहों की गति को नियंत्रित करती है", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> डार्क एनर्जी ब्रह्मांड में मौजूद एक रहस्यमय ऊर्जा है जो ब्रह्मांड के विस्तार को तेज करने का कार्य करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा ब्रह्मांड के लगभग 68% हिस्से के बराबर मानी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> डार्क एनर्जी गुरुत्वाकर्षण के विपरीत काम करती है, जिससे ब्रह्मांड तेजी से फैल रहा है।",
    },
    {
        question:
            "\"कृष्ण विवर\" (Black Hole) की घटना क्षितिज (Event Horizon) क्या है?",
        answers: shuffle([
            { text: "ब्लैक होल के केंद्र का बिंदु", correct: false },
            {
                text: "वह सीमा जहाँ से प्रकाश भी ब्लैक होल से बाहर नहीं निकल सकता",
                correct: true,
            },
            { text: "ब्लैक होल के निकटतम ग्रह का नाम", correct: false },
            { text: "एक प्रकार का सुपरनोवा विस्फोट", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> इवेंट होराइजन ब्लैक होल की वह सीमा है जिसके अंदर प्रवेश करने के बाद कोई भी वस्तु, चाहे वह प्रकाश हो या किसी प्रकार की ऊर्जा, ब्लैक होल से बाहर नहीं आ सकती।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे ब्लैक होल का 'बिंदु ऑफ नो रिटर्न' भी कहा जाता है।",
    },
    {
        question: "सौर मंडल की उत्पत्ति कब हुई थी?",
        answers: shuffle([
            { text: "लगभग 4.6 अरब वर्ष पहले", correct: true },
            { text: "लगभग 13.8 अरब वर्ष पहले", correct: false },
            { text: "लगभग 1 अरब वर्ष पहले", correct: false },
            { text: "लगभग 10 लाख वर्ष पहले", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> सौर मंडल की उत्पत्ति लगभग 4.6 अरब वर्ष पहले हुई थी जब एक विशाल गैस और धूल का बादल गुरुत्वाकर्षण के प्रभाव से संकुचित होकर सूरज और उसके चारों ओर ग्रहों का निर्माण हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया नाभिकीय संलयन के कारण सूरज की ऊर्जा उत्पादन की शुरुआत के साथ शुरू हुई।",
    },
    {
        question: "ब्रह्मांड की सबसे पुरानी विकिरण कौन सी है?",
        answers: shuffle([
            { text: "रेडियो तरंगें", correct: false },
            { text: "एक्स-रे विकिरण", correct: false },
            { text: "कॉस्मिक माइक्रोवेव बैकग्राउंड विकिरण (CMB)", correct: true },
            { text: "अल्ट्रावॉयलेट विकिरण", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> CMB विकिरण ब्रह्मांड के बिग बैंग के तुरंत बाद के अवशेष हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विकिरण लगभग 13.8 अरब वर्ष पुराना है और ब्रह्मांड के प्रारंभिक तापमान और संरचना की जानकारी प्रदान करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे ब्रह्मांड की \"प्रत्यक्ष तस्वीर\" माना जाता है।",
    },
    {
        question:
            "ब्रह्मांड के किस सिद्धांत के अनुसार ब्रह्मांड निरंतर बढ़ता और विकसित होता रहता है?",
        answers: shuffle([
            { text: "स्थैतिक ब्रह्मांड सिद्धांत", correct: false },
            { text: "बिग बैंग सिद्धांत", correct: true },
            { text: "सापेक्षता का सिद्धांत", correct: false },
            { text: "क्वांटम सिद्धांत", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग सिद्धांत के अनुसार, ब्रह्मांड लगभग 13.8 अरब वर्ष पहले एक अत्यंत घने और गर्म बिंदु से उत्पन्न हुआ और तब से निरंतर फैलता और ठंडा होता जा रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत ब्रह्मांड की उत्पत्ति और विकास का सर्वमान्य मॉडल है।",
    },
    {
        question: "न्यूट्रॉन तारे में क्या होता है?",
        answers: shuffle([
            { text: "तारों का नया जन्म होता है", correct: false },
            { text: "तारा ऊर्जा उत्सर्जित करता है", correct: false },
            {
                text: "तारे के मृत केंद्र में परमाणु टूटकर न्यूट्रॉन बन जाते हैं",
                correct: true,
            },
            { text: "ब्लैक होल में परिवर्तन होता है", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> जब कोई भारी तारा अपनी ऊर्जा समाप्त करता है, तो उसके कोर में परमाणु टूटकर न्यूट्रॉन बन जाते हैं, जिससे न्यूट्रॉन तारा बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तारा बेहद सघन और छोटा होता है लेकिन भारी द्रव्यमान वाला होता है।",
    },
    {
        question: "आकाशगंगा के प्रकारों में से कौन सा सबसे सामान्य है?",
        answers: shuffle([
            { text: "स्पाइरल आकाशगंगा", correct: true },
            { text: "इलिप्टिकल आकाशगंगा", correct: false },
            { text: "अनियमित आकाशगंगा", correct: false },
            { text: "क्वासर", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> स्पाइरल आकाशगंगा (जैसे हमारी मिल्की वे) ब्रह्मांड में सबसे सामान्य और प्रचलित प्रकार की आकाशगंगाएँ हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इनमें तारों, गैस, और धूल की सर्पिल संरचना होती है जो केंद्रीय बल्ब के चारों ओर घूमती है।",
    },
    {
        question: "गैलेक्सी के केंद्र में अक्सर क्या पाया जाता है?",
        answers: shuffle([
            { text: "ग्रह", correct: false },
            { text: "सुपरमासिव ब्लैक होल", correct: true },
            { text: "न्यूट्रॉन तारे", correct: false },
            { text: "एक्सप्लोडिंग स्टार्स", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> अधिकांश आकाशगंगाओं के केंद्र में एक सुपरमासिव ब्लैक होल पाया जाता है, जिसका द्रव्यमान लाखों से अरबों सूर्य के द्रव्यमान के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्लैक होल आकाशगंगा के तारों और गैस के गतिशीलता को नियंत्रित करता है।",
    },
    {
        question:
            "ब्रह्मांड का कौन सा सिद्धांत कहता है कि ब्रह्मांड हमेशा से था और हमेशा रहेगा?",
        answers: shuffle([
            { text: "बिग बैंग सिद्धांत", correct: false },
            { text: "स्थैतिक ब्रह्मांड सिद्धांत", correct: true },
            { text: "क्वांटम सिद्धांत", correct: false },
            { text: "सापेक्षता का सिद्धांत", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> स्थैतिक ब्रह्मांड सिद्धांत यह मानता है कि ब्रह्मांड का कोई आरंभ या अंत नहीं है, यह हमेशा से मौजूद था और हमेशा मौजूद रहेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका तर्क यह था कि ब्रह्मांड स्थिर और अपरिवर्तनीय है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, बाद में हबल के ब्रह्मांड विस्तार के प्रमाण मिलने के बाद यह सिद्धांत खारिज हो गया और बिग बैंग सिद्धांत को स्वीकार किया गया।",
    },
    {
        question: "सौर मंडल में सबसे छोटी ग्रह कौन सी है?",
        answers: shuffle([
            { text: "बुध", correct: true },
            { text: "शुक्र", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> बुध ग्रह सौर मंडल का सबसे छोटा ग्रह है, जिसका व्यास लगभग 4,880 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सूर्य के सबसे निकटतम ग्रह भी है।<br><br><i class='fa-solid fa-angles-right icon'></i> बुध की सतह का तापमान अत्यधिक बदलता रहता है और वहाँ वायुमंडल लगभग नहीं है।",
    },
    {
        question:
            "किस सिद्धांत ने ब्रह्मांड के प्रारंभ में मौजूद एक अत्यंत घने और गर्म अवस्था की कल्पना की?",
        answers: shuffle([
            { text: "बिग बैंग सिद्धांत", correct: true },
            { text: "स्थैतिक ब्रह्मांड सिद्धांत", correct: false },
            { text: "क्वांटम सिद्धांत", correct: false },
            { text: "तारकीय संलयन सिद्धांत", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग सिद्धांत कहता है कि ब्रह्मांड की उत्पत्ति लगभग 13.8 अरब वर्ष पहले एक अत्यंत गर्म और घने बिंदु से हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद ब्रह्मांड ने विस्तार करना शुरू किया और आज तक फैल रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत ब्रह्मांड की उत्पत्ति की सबसे व्यापक रूप से स्वीकृत व्याख्या है।",
    },
    {
        question: "किस खगोलीय पिंड को 'सिरिअस' के नाम से जाना जाता है?",
        answers: shuffle([
            { text: "सबसे चमकीला तारा पृथ्वी के आसमान में", correct: true },
            { text: "सबसे बड़ा ग्रह", correct: false },
            { text: "निकटतम ब्लैक होल", correct: false },
            { text: "एक उपग्रह", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> सिरिअस आकाश में पृथ्वी से दिखाई देने वाला सबसे चमकीला तारा है, जो हमसे लगभग 8.6 प्रकाश वर्ष दूर है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे 'डॉग स्टार' भी कहा जाता है और यह कनिस मेजर नक्षत्र में स्थित है।",
    },
    {
        question: "हबल टेलीस्कोप के मुख्य उद्देश्य क्या हैं?",
        answers: shuffle([
            { text: "पृथ्वी के भीतर की जांच करना", correct: false },
            {
                text: "दूर के ब्रह्मांडीय पिंडों की छवियाँ लेना और अध्ययन करना",
                correct: true,
            },
            { text: "समुद्र के तल का अध्ययन करना", correct: false },
            { text: "मौसम का पूर्वानुमान लगाना", correct: false },
        ]),
        Explanation:
            "<i class='fa-solid fa-angles-right icon'></i> हबल स्पेस टेलीस्कोप को 1990 में लॉन्च किया गया था, जिसका उद्देश्य पृथ्वी के वायुमंडल से प्रभावित हुए बिना ब्रह्मांड के दूरस्थ क्षेत्रों की उच्च गुणवत्ता वाली तस्वीरें लेना और खगोलीय पिंडों का अध्ययन करना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह टेलीस्कोप ब्रह्मांड की उम्र, विस्तार और संरचना पर गहन जानकारी प्रदान करता है।",
    },
    {
        question: "ब्रह्मांड में \"गैलेक्सी\" का क्या अर्थ है?",
        answers: shuffle([
            { text: "ग्रहों का समूह", correct: false },
            { text: "तारों, गैस, धूल और अंधेरे पदार्थ का विशाल समूह", correct: true },
            { text: "उपग्रहों का समूह", correct: false },
            { text: "ग्रहों की कक्षा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलेक्सी एक विशाल खगोलीय संरचना है जिसमें अरबों तारे, गैस, धूल और डार्क मैटर एक गुरुत्वाकर्षण क्षेत्र में बंधे होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हमारी आकाशगंगा, मिल्की वे, भी एक गैलेक्सी है।"
    },
    {
        question: "सूर्य की ऊर्जा किस प्रक्रिया से उत्पन्न होती है?",
        answers: shuffle([
            { text: "परमाणु संलयन (Nuclear Fusion)", correct: true },
            { text: "विकिरण संलयन", correct: false },
            { text: "रासायनिक प्रतिक्रियाएँ", correct: false },
            { text: "गुरुत्वाकर्षण संपीड़न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य की ऊर्जा परमाणु संलयन प्रक्रिया के द्वारा उत्पन्न होती है, जिसमें हाइड्रोजन के नाभिक जुड़कर हीलियम का निर्माण करते हैं और इस प्रक्रिया में अत्यधिक ऊर्जा निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा प्रकाश और गर्मी के रूप में पृथ्वी तक पहुँचती है।"
    },
    {
        question: "सौर मंडल में कौन सा ग्रह सबसे धीमी गति से सूर्य के चारों ओर घूमता है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "वरुण (नेपच्यून)", correct: true },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौरमंडल में वरुण ग्रह (नेपच्यून) सूर्य से सबसे दूर है, इसलिए यह सबसे धीमी गति से सूर्य के चारों ओर चक्कर लगाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका एक पूर्ण परिक्रमा (ऑर्बिट) लगभग 165 पृथ्वी वर्षों के बराबर होती है।"
    },
    {
        question: "किस ग्रह को ‘लाल ग्रह’ कहा जाता है और क्यों?",
        answers: shuffle([
            { text: "मंगल, क्योंकि इसकी सतह लाल रंग की है", correct: true },
            { text: "बृहस्पति, क्योंकि यह सबसे बड़ा है", correct: false },
            { text: "शुक्र, क्योंकि यह चमकीला है", correct: false },
            { text: "शनि, क्योंकि इसके रिंग्स हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह को ‘लाल ग्रह’ कहा जाता है क्योंकि इसकी सतह पर लोहा ऑक्साइड (जैसे जंग) की वजह से लाल रंग दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी वजह से यह अन्य ग्रहों से अलग दिखता है।"
    },
    {
        question: "ग्रहों के बीच का मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "वे सभी एक जैसे होते हैं", correct: false },
            { text: "उनके आकार, बनावट, वायुमंडल और तापमान में अंतर होता है", correct: true },
            { text: "सभी ग्रहों की कक्षा समान होती है", correct: false },
            { text: "सभी ग्रहों के चंद्रमा समान होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रहों के बीच मुख्य अंतर उनके आकार, भौतिक बनावट (गैसीय या पथरीली), वायुमंडल, तापमान और कक्षा के आधार पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, बृहस्पति और शनि गैस जायंट हैं जबकि पृथ्वी और मंगल पथरीले ग्रह हैं।"
    },
    {
        question: "ब्रह्मांड के विस्तार का प्रमाण किस वैज्ञानिक ने दिया था?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "एडविन हबल", correct: true },
            { text: "अल्बर्ट आइंस्टीन", correct: false },
            { text: "निकोला टेस्ला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एडविन हबल ने 1929 में खोजा कि दूर स्थित आकाशगंगाएँ एक-दूसरे से दूर जा रही हैं और उनकी गति उनकी पृथ्वी से दूरी के अनुपात में है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे हबल का नियम कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस खोज ने यह साबित किया कि ब्रह्मांड निरंतर विस्तार कर रहा है, जो बिग बैंग सिद्धांत के लिए आधार बनी।"
    },
    {
        question: "कॉस्मिक माइक्रोवेव बैकग्राउंड (CMB) विकिरण क्या दर्शाता है?",
        answers: shuffle([
            { text: "ब्रह्मांड के वर्तमान तापमान को", correct: false },
            { text: "बिग बैंग के बाद का बचा हुआ विकिरण", correct: true },
            { text: "सूर्य से निकली ऊर्जा", correct: false },
            { text: "ग्रहों की उत्पत्ति का प्रमाण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CMB विकिरण ब्रह्मांड की शुरुआत के लगभग 3,80,000 वर्ष बाद छोड़ा गया अवशिष्ट विकिरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विकिरण ब्रह्मांड के प्रारंभिक गर्म और घने अवस्था से निकलने वाली ऊर्जा का निशान है और ब्रह्मांड के विकास को समझने में महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "ब्रह्मांड के किस सिद्धांत के अनुसार यह अंततः पुनः संकुचित हो सकता है?",
        answers: shuffle([
            { text: "बिग क्रंच (Big Crunch) सिद्धांत", correct: true },
            { text: "बिग बैंग सिद्धांत", correct: false },
            { text: "क्वांटम सिद्धांत", correct: false },
            { text: "सापेक्षता का सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिग क्रंच सिद्धांत कहता है कि यदि ब्रह्मांड का गुरुत्वाकर्षण शक्तिशाली हो और डार्क एनर्जी के प्रभाव को मात दे दे, तो ब्रह्मांड का विस्तार रुक सकता है और फिर वह पुनः संकुचन की ओर बढ़ सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका परिणाम होगा ब्रह्मांड का अंत एक अत्यंत घने बिंदु में होना।"
    },
    {
        question: "ब्लैक होल के आकार का निर्धारण किस गुण द्वारा होता है?",
        answers: shuffle([
            { text: "तापमान", correct: false },
            { text: "द्रव्यमान", correct: true },
            { text: "चमक", correct: false },
            { text: "रंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्लैक होल का आकार या इवेंट होराइजन का व्यास उसके द्रव्यमान पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अधिक द्रव्यमान वाले ब्लैक होल का इवेंट होराइजन बड़ा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> द्रव्यमान ज्यादा होने पर गुरुत्वाकर्षण भी अधिक होता है।"
    },
    {
        question: "सूर्य से सबसे दूर कौन सा ग्रह है?",
        answers: shuffle([
            { text: "वरुण (नेपच्यून)", correct: true },
            { text: "यूरेनस", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "प्लूटो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौरमंडल में वर्तमान में वरुण ग्रह (नेपच्यून) सूर्य से सबसे दूर है।<br><br><i class='fa-solid fa-angles-right icon'></i> पहले इसे प्लूटो माना जाता था, लेकिन 2006 में प्लूटो को बौना ग्रह घोषित किया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> नेपच्यून सूर्य से लगभग 4.5 अरब किलोमीटर दूर है।"
    },
    {
        question: "किस ग्रह को ‘गैस जायंट’ (Gas Giant) कहा जाता है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति सौरमंडल का सबसे बड़ा ग्रह है और इसे 'गैस जायंट' कहा जाता है क्योंकि यह मुख्य रूप से गैसों (हाइड्रोजन और हीलियम) से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी सतह पथरीली नहीं है और इसका द्रव्यमान सूर्य के बाद सबसे अधिक है।"
    },
    {
        question: "ब्रह्मांड में 'क्वासर' क्या होता है?",
        answers: shuffle([
            { text: "एक नया ग्रह", correct: false },
            { text: "अत्यंत चमकीला और दूरस्थ खगोलीय स्रोत, जो एक सक्रिय गैलेक्सी का केंद्र होता है", correct: true },
            { text: "एक प्रकार का तारा", correct: false },
            { text: "एक उपग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वासर ब्रह्मांड के सबसे अधिक ऊर्जा उत्सर्जित करने वाले खगोलीय स्रोत होते हैं, जो सक्रिय गैलेक्सियों के केंद्र में सुपरमासिव ब्लैक होल के आसपास गैस और धूल के त्वरित संलयन से बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> क्वासर बेहद दूर होते हुए भी बहुत चमकीले दिखते हैं।"
    },
    {
        question: "पृथ्वी के बाहर जीवन की खोज के लिए किस ग्रह को सबसे संभावित माना जाता है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "मंगल", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल ग्रह को पृथ्वी के बाहर जीवन की संभावना के लिए सबसे उपयुक्त ग्रह माना जाता है क्योंकि वहाँ पानी के अतीत में मौजूद होने के सबूत मिले हैं, और वहाँ की मिट्टी में जीवन के संकेत खोजने के प्रयास जारी हैं।"
    },
    {
        question: "'रेडशिफ्ट' (Redshift) का क्या अर्थ है?",
        answers: shuffle([
            { text: "किसी तारे का रंग बदलना", correct: false },
            { text: "ब्रह्मांड में वस्तुओं की दूर जाने की गति के कारण प्रकाश तरंगों का लंबा होना", correct: true },
            { text: "ग्रहों की गति धीमी होना", correct: false },
            { text: "ब्लैक होल का विस्तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई खगोलीय वस्तु पृथ्वी से दूर जा रही होती है, तो उसकी प्रकाश तरंगों की लहरें लंबी हो जाती हैं, जिससे वे लाल रंग की ओर खिसकती हैं, जिसे रेडशिफ्ट कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड के विस्तार का मुख्य प्रमाण है।"
    },
    {
        question: "सूर्य में ऊर्जा के उत्पादन का मुख्य स्रोत कौन सी प्रतिक्रिया है?",
        answers: shuffle([
            { text: "हाइड्रोजन फिशन", correct: false },
            { text: "हाइड्रोजन संलयन (Fusion)", correct: true },
            { text: "ऑक्सीजन जलना", correct: false },
            { text: "कोयला जलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य में ऊर्जा का उत्पादन मुख्य रूप से हाइड्रोजन नाभिकों के संलयन द्वारा होता है, जहाँ चार हाइड्रोजन नाभिक मिलकर एक हीलियम नाभिक बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया में भारी मात्रा में ऊर्जा निकलती है, जो सूर्य की गर्मी और प्रकाश का स्रोत है।"
    },
    {
        question: "डार्क मैटर (Dark Matter) क्या है और इसका ब्रह्मांड में क्या महत्व है?",
        answers: shuffle([
            { text: "एक प्रकार की सामान्य गैस है", correct: false },
            { text: "एक अनदेखी पदार्थ जो ब्रह्मांड के गुरुत्वाकर्षण बल का बड़ा हिस्सा बनाता है", correct: true },
            { text: "सूर्य की किरणें", correct: false },
            { text: "केवल पृथ्वी पर मौजूद तत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्क मैटर वह रहस्यमय पदार्थ है जो सीधे दिखाई नहीं देता क्योंकि यह प्रकाश को न तो उत्सर्जित करता है और न ही अवशोषित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> फिर भी इसका प्रभाव गुरुत्वाकर्षण के माध्यम से महसूस किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड के कुल द्रव्यमान का लगभग 27% हिस्सा माना जाता है और यह गैलेक्सियों के गठन और स्थिरता में महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "ब्रह्मांड के ‘डार्क एनर्जी’ (Dark Energy) की क्या भूमिका है?",
        answers: shuffle([
            { text: "ब्रह्मांड के विस्तार को तेज करने वाली ऊर्जा", correct: true },
            { text: "ग्रहों के घुमाव का कारण", correct: false },
            { text: "सूर्य की ऊर्जा का स्रोत", correct: false },
            { text: "ब्लैक होल को रोकने वाली शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डार्क एनर्जी ब्रह्मांड के 68% से अधिक हिस्से को बनाती है और यह एक ऐसी रहस्यमय ऊर्जा है जो ब्रह्मांड के विस्तार को तेज कर रही है।<br><br><i class='fa-solid fa-angles-right icon'></i> वैज्ञानिकों को इसकी प्रकृति पूरी तरह समझ में नहीं आई है, लेकिन यह ब्रह्मांड के भविष्य को प्रभावित करती है।"
    },
    {
        question: "ब्रह्मांड की उम्र लगभग कितनी मानी जाती है?",
        answers: shuffle([
            { text: "4.5 अरब वर्ष", correct: false },
            { text: "13.8 अरब वर्ष", correct: true },
            { text: "100 अरब वर्ष", correct: false },
            { text: "1 लाख वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विज्ञान के वर्तमान अनुमानों के अनुसार, ब्रह्मांड की उम्र लगभग 13.8 अरब वर्ष है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अनुमान बिग बैंग सिद्धांत, हबल के विस्तार के आंकड़े, और कॉस्मिक माइक्रोवेव बैकग्राउंड विकिरण के अध्ययन से प्राप्त हुआ है।"
    },
    {
        question: "‘सुपरनोवा’ क्या है?",
        answers: shuffle([
            { text: "एक चमकदार तारा जो अपनी ऊर्जा खो चुका है", correct: false },
            { text: "एक बड़े तारे का विस्फोट जो अत्यंत चमकीला और शक्तिशाली होता है", correct: true },
            { text: "एक प्रकार का ग्रह", correct: false },
            { text: "सूर्य का उपग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरनोवा एक विशाल तारे के जीवन के अंत में होने वाला भयंकर विस्फोट होता है, जिसमें तारा अपने अधिकांश द्रव्यमान को अंतरिक्ष में छोड़ देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घटना ब्रह्मांड में भारी तत्वों के निर्माण में महत्वपूर्ण भूमिका निभाती है।"
    },
    {
        question: "गैलेक्सी के केंद्र में क्या पाया जाता है?",
        answers: shuffle([
            { text: "एक सुपरमासिव ब्लैक होल", correct: true },
            { text: "एक छोटा ग्रह", correct: false },
            { text: "धूल के बादल", correct: false },
            { text: "एक उपग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश गैलेक्सियों के केंद्र में एक अत्यंत विशाल सुपरमासिव ब्लैक होल पाया जाता है, जिसका द्रव्यमान लाखों से अरबों सूर्यों के बराबर हो सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्लैक होल गैलेक्सी के तारों और गैस के गतिशीलता को प्रभावित करता है।"
    },
    {
        question: "ब्रह्मांड में ‘सुपरक्लस्टर’ क्या होते हैं?",
        answers: shuffle([
            { text: "छोटे तारे", correct: false },
            { text: "गैलेक्सियों के विशाल समूह जो क्लस्टर से भी बड़े होते हैं", correct: true },
            { text: "ग्रहों का समूह", correct: false },
            { text: "उपग्रहों का समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरक्लस्टर ब्रह्मांड में सबसे बड़े ज्ञात संरचनाएं हैं, जो कई गैलेक्सी क्लस्टर को आपस में जोड़ती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ब्रह्मांड की विशाल संरचनात्मक श्रृंखला का हिस्सा हैं।"
    },
    {
        question: "‘पल्सर’ क्या है?",
        answers: shuffle([
            { text: "एक घूमता हुआ न्यूट्रॉन तारा जो नियमित रूप से रेडियो तरंगें उत्सर्जित करता है", correct: true },
            { text: "एक ग्रह", correct: false },
            { text: "सूर्य की तरह एक तारा", correct: false },
            { text: "एक उपग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्सर एक अत्यंत घना और चुंबकीय न्यूट्रॉन तारा होता है जो बहुत तेज़ी से घूमता है और नियमित रूप से रेडियो, एक्स-रे या गामा किरणें उत्सर्जित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये तारों के जीवन के अंत के बाद बनते हैं।"
    },
    {
        question: "हबल का नियम क्या बताता है?",
        answers: shuffle([
            { text: "गैलेक्सियाँ एक दूसरे से स्थिर दूरी पर हैं", correct: false },
            { text: "गैलेक्सियों की दूरी उनके पलायन वेग के समानुपाती होती है", correct: true },
            { text: "ग्रह सूर्य के चारों ओर घूमते हैं", correct: false },
            { text: "पृथ्वी सूर्य के सबसे करीब है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हबल का नियम यह दर्शाता है कि गैलेक्सियाँ जितनी दूर होंगी, वे उतनी तेज़ी से पृथ्वी से दूर जा रही होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत ब्रह्मांड के विस्तार का मजबूत प्रमाण है।"
    },
    {
        question: "ब्रह्मांड में सबसे प्राचीन पदार्थ कौन सा माना जाता है?",
        answers: shuffle([
            { text: "हाइड्रोजन", correct: true },
            { text: "हीलियम", correct: false },
            { text: "कार्बन", correct: false },
            { text: "ऑक्सीजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोजन ब्रह्मांड में सबसे प्राचीन और सबसे सरल तत्व है, जो बिग बैंग के तुरंत बाद बना।<br><br><i class='fa-solid fa-angles-right icon'></i> लगभग 75% ब्रह्मांड का द्रव्यमान हाइड्रोजन है।"
    },
    {
        question: "ब्रह्मांड में सबसे बड़ा ज्ञात संरचना कौन सी है?",
        answers: shuffle([
            { text: "गैलेक्सी", correct: false },
            { text: "सुपरक्लस्टर", correct: true },
            { text: "तारामंडल (कॉन्स्टेलेशन)", correct: false },
            { text: "ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरक्लस्टर ब्रह्मांड की सबसे बड़ी संरचनाएँ हैं, जो गैलेक्सी क्लस्टर्स के समूह होते हैं और कई करोड़ प्रकाश वर्षों तक फैली होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ब्रह्मांड के विशाल पैमाने पर सामूहिक संरचनाओं का प्रतिनिधित्व करती हैं।"
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