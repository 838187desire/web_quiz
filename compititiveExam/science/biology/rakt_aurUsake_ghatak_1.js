const questions = [
    {
        topHeading: "रक्त और उसके घटकों पर आधारित 50 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1: मानव रक्त का pH मान कितना होता है?",
        answers: shuffle([
            { text: "7.0", correct: false },
            { text: "6.5", correct: false },
            { text: "7.4", correct: true },
            { text: "8.0", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव रक्त हल्का क्षारीय (slightly alkaline) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका औसत pH मान 7.35 से 7.45 के बीच होता है, जिसे सामान्यतः 7.4 माना जाता है।"
    },
    {
        question: "प्रश्न 2: रक्त का तरल हिस्सा क्या कहलाता है?",
        answers: shuffle([
            { text: "प्लाज्मा", correct: true },
            { text: "सीरम", correct: false },
            { text: "हीमोग्लोबिन", correct: false },
            { text: "लिम्फ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त का लगभग 55% हिस्सा प्लाज्मा होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक पीले रंग का तरल पदार्थ है। इसमें पानी, प्रोटीन, हार्मोन और लवण होते हैं।"
    },
    {
        question: "प्रश्न 3: लाल रक्त कोशिकाओं (RBC) का वैज्ञानिक नाम क्या है?",
        answers: shuffle([
            { text: "एरिथ्रोसाइट्स", correct: true },
            { text: "ल्यूकोसाइट्स", correct: false },
            { text: "थ्रोम्बोसाइट्स", correct: false },
            { text: "लिम्फोसाइट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल रक्त कोशिकाओं को वैज्ञानिक रूप से एरिथ्रोसाइट्स कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  'एरिथ्रो' का अर्थ 'लाल' और 'साइट' का अर्थ 'कोशिका' है।"
    },
    {
        question: "प्रश्न 4: रक्त में हीमोग्लोबिन का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "रोगों से लड़ना", correct: false },
            { text: "ऑक्सीजन का परिवहन करना", correct: true },
            { text: "रक्त का थक्का बनाना", correct: false },
            { text: "ऊर्जा प्रदान करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोग्लोबिन, जो RBC में पाया जाने वाला एक प्रोटीन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  फेफड़ों से ऑक्सीजन को बांधकर शरीर के सभी ऊतकों तक पहुंचाता है।"
    },
    {
        question: "प्रश्न 5: मानव शरीर में लाल रक्त कोशिकाओं का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "यकृत (Liver)", correct: false },
            { text: "हृदय (Heart)", correct: false },
            { text: "अग्न्याशय (Pancreas)", correct: false },
            { text: "अस्थि मज्जा (Bone Marrow)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वयस्कों में लाल रक्त कोशिकाओं का निर्माण मुख्य रूप से लंबी हड्डियों की लाल अस्थि मज्जा में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस प्रक्रिया को एरिथ्रोपोएसिस कहते हैं।"
    },
    {
        question: "प्रश्न 6: एक वयस्क मनुष्य में लाल रक्त कोशिकाओं का जीवन काल कितना होता है?",
        answers: shuffle([
            { text: "60 दिन", correct: false },
            { text: "90 दिन", correct: false },
            { text: "120 दिन", correct: true },
            { text: "150 दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ लाल रक्त कोशिका औसतन 120 दिनों तक रक्तप्रवाह में जीवित रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके बाद इसे प्लीहा (spleen) में नष्ट कर दिया जाता है।"
    },
    {
        question: "प्रश्न 7: रक्त में श्वेत रक्त कोशिकाओं (WBC) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "ऑक्सीजन ले जाना", correct: false },
            { text: "शरीर को संक्रमण से बचाना", correct: true },
            { text: "रक्त का थक्का जमाना", correct: false },
            { text: "पोषक तत्व पहुंचाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेत रक्त कोशिकाएं (ल्यूकोसाइट्स) शरीर की प्रतिरक्षा प्रणाली का महत्वपूर्ण हिस्सा हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और बैक्टीरिया, वायरस जैसे बाहरी हमलावरों से लड़ती हैं।"
    },
    {
        question: "प्रश्न 8: रक्त प्लेटलेट्स (Thrombocytes) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "ऑक्सीजन का परिवहन", correct: false },
            { text: "प्रतिरक्षा प्रदान करना", correct: false },
            { text: "रक्त का थक्का जमने में मदद करना", correct: true },
            { text: "हार्मोन का उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोई रक्त वाहिका क्षतिग्रस्त हो जाती है, तो प्लेटलेट्स उस स्थान पर इकट्ठा होकर एक प्लग बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और रक्तस्राव को रोकने के लिए थक्का बनाने की प्रक्रिया शुरू करते हैं।"
    },
    {
        question: "प्रश्न 9: 'सार्वभौमिक रक्त दाता' (Universal Donor) किस रक्त समूह को कहा जाता है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "AB", correct: false },
            { text: "O", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह O (विशेषकर O नेगेटिव) में कोई एंटीजन (A या B) नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए यह किसी भी रक्त समूह वाले व्यक्ति को दिया जा सकता है।"
    },
    {
        question: "प्रश्न 10: 'सार्वभौमिक प्राप्तकर्ता' (Universal Recipient) किस रक्त समूह को कहा जाता है?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "AB", correct: true },
            { text: "O", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह AB में A और B दोनों एंटीजन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन कोई एंटीबॉडी (anti-A या anti-B) नहीं होती, इसलिए यह किसी भी रक्त समूह से रक्त स्वीकार कर सकता है।"
    },
    {
        question: "प्रश्न 11: रक्त का लाल रंग किस तत्व की उपस्थिति के कारण होता है?",
        answers: shuffle([
            { text: "मैग्नीशियम", correct: false },
            { text: "लोहा (Iron)", correct: true },
            { text: "तांबा (Copper)", correct: false },
            { text: "कोबाल्ट (Cobalt)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोग्लोबिन अणु के केंद्र में आयरन (लौह) परमाणु होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो ऑक्सीजन से जुड़ता है और रक्त को उसका विशिष्ट लाल रंग प्रदान करता है।"
    },
    {
        question: "प्रश्न 12: कौन सी श्वेत रक्त कोशिका संख्या में सबसे अधिक होती है?",
        answers: shuffle([
            { text: "न्यूट्रोफिल्स", correct: true },
            { text: "लिम्फोसाइट्स", correct: false },
            { text: "मोनोसाइट्स", correct: false },
            { text: "इओसिनोफिल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूट्रोफिल्स कुल श्वेत रक्त कोशिकाओं का लगभग 60-70% होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और ये जीवाणु संक्रमण से लड़ने में महत्वपूर्ण भूमिका निभाती हैं।"
    },
    {
        question: "प्रश्न 13: एलर्जी प्रतिक्रियाओं और परजीवी संक्रमणों से कौन सी WBC लड़ती है?",
        answers: shuffle([
            { text: "न्यूट्रोफिल्स", correct: false },
            { text: "बेसोफिल्स", correct: false },
            { text: "इओसिनोफिल्स", correct: true },
            { text: "मोनोसाइट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इओसिनोफिल्स की संख्या एलर्जी की स्थिति और परजीवी संक्रमण के दौरान बढ़ जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये इन स्थितियों के खिलाफ शरीर की रक्षा करते हैं।"
    },
    {
        question: "प्रश्न 14: रक्त का थक्का जमने के लिए कौन सा विटामिन आवश्यक है?",
        answers: shuffle([
            { text: "विटामिन A", correct: false },
            { text: "विटामिन C", correct: false },
            { text: "विटामिन D", correct: false },
            { text: "विटामिन K", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विटामिन K यकृत में प्रोथ्रोम्बिन जैसे कई क्लॉटिंग कारकों के संश्लेषण के लिए आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो रक्त के थक्के जमने की प्रक्रिया के लिए महत्वपूर्ण हैं।"
    },
    {
        question: "प्रश्न 15: Rh फैक्टर का नाम किस पर आधारित है?",
        answers: shuffle([
            { text: "चूहा (Rat)", correct: false },
            { text: "रीसस बंदर (Rhesus monkey)", correct: true },
            { text: "मनुष्य (Human)", correct: false },
            { text: "कुत्ता (Dog)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> Rh फैक्टर की खोज सबसे पहले रीसस बंदर के रक्त में की गई थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसीलिए इसका नाम 'Rh' (Rhesus) रखा गया।"
    },
    {
        question: "प्रश्न 16: यदि किसी व्यक्ति का रक्तचाप 120/80 mmHg है, तो 80 mmHg क्या दर्शाता है?",
        answers: shuffle([
            { text: "सिस्टोलिक दबाव", correct: false },
            { text: "डायस्टोलिक दबाव", correct: true },
            { text: "औसत दबाव", correct: false },
            { text: "पल्स दबाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 80 mmHg डायस्टोलिक दबाव को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो हृदय के धड़कनों के बीच आराम की स्थिति में धमनियों में न्यूनतम दबाव होता है। 120 सिस्टोलिक दबाव है।"
    },
    {
        question: "प्रश्न 17: परिपक्व स्तनधारी की लाल रक्त कोशिका में क्या नहीं पाया जाता है?",
        answers: shuffle([
            { text: "हीमोग्लोबिन", correct: false },
            { text: "प्लाज्मा झिल्ली", correct: false },
            { text: "साइटोप्लाज्म", correct: false },
            { text: "नाभिक (Nucleus)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक हीमोग्लोबिन और ऑक्सीजन ले जाने के लिए जगह बनाने के लिए।<br><br><i class='fa-solid fa-angles-right icon'></i>  परिपक्व स्तनधारी RBC में नाभिक और अन्य कोशिकांग जैसे माइटोकॉन्ड्रिया नहीं होते हैं।"
    },
    {
        question: "प्रश्न 18: 'रक्त कैंसर' को सामान्यतः किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "एनीमिया", correct: false },
            { text: "ल्यूकेमिया", correct: true },
            { text: "हीमोफिलिया", correct: false },
            { text: "थैलेसीमिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ल्यूकेमिया एक प्रकार का रक्त कैंसर है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें अस्थि मज्जा में असामान्य श्वेत रक्त कोशिकाओं का अत्यधिक उत्पादन होता है।"
    },
    {
        question: "प्रश्न 19: रक्त प्लाज्मा में पाया जाने वाला मुख्य प्रोटीन कौन सा है?",
        answers: shuffle([
            { text: "ग्लोब्युलिन", correct: false },
            { text: "फाइब्रिनोजेन", correct: false },
            { text: "एल्ब्यूमिन", correct: true },
            { text: "प्रोथ्रोम्बिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एल्ब्यूमिन प्लाज्मा में सबसे प्रचुर मात्रा में पाया जाने वाला प्रोटीन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह रक्त के ऑस्मोटिक दबाव को बनाए रखने में मदद करता है।"
    },
    {
        question: "प्रश्न 20: \"RBC का कब्रिस्तान\" किसे कहा जाता है?",
        answers: shuffle([
            { text: "यकृत (Liver)", correct: false },
            { text: "अस्थि मज्जा (Bone Marrow)", correct: false },
            { text: "प्लीहा (Spleen)", correct: true },
            { text: "अग्न्याशय (Pancreas)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरानी और क्षतिग्रस्त लाल रक्त कोशिकाओं को रक्तप्रवाह से हटाने और नष्ट करने का काम मुख्य रूप से प्लीहा (तिल्ली) में होता है।"
    },
    {
        question: "प्रश्न 21: कौन सी रक्त कोशिकाएं 'फैगोसाइटोसिस' (भक्षण क्रिया) करती हैं?",
        answers: shuffle([
            { text: "केवल न्यूट्रोफिल्स", correct: false },
            { text: "केवल मोनोसाइट्स", correct: false },
            { text: "न्यूट्रोफिल्स और मोनोसाइट्स", correct: true },
            { text: "लाल रक्त कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूट्रोफिल्स और मोनोसाइट्स (जो ऊतकों में मैक्रोफेज बन जाते हैं) दोनों ही फैगोसाइटिक कोशिकाएं हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बैक्टीरिया और अन्य बाहरी कणों को निगलकर नष्ट कर देती हैं।"
    },
    {
        question: "प्रश्न 22: रक्त के थक्के से प्लाज्मा को अलग करने पर बचा हुआ तरल क्या कहलाता है?",
        answers: shuffle([
            { text: "सीरम", correct: true },
            { text: "लिम्फ", correct: false },
            { text: "प्लेटलेट्स", correct: false },
            { text: "पानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीरम रक्त प्लाज्मा ही है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें से फाइब्रिनोजेन और अन्य क्लॉटिंग कारक हटा दिए जाते हैं, क्योंकि वे थक्के का हिस्सा बन जाते हैं।"
    },
    {
        question: "प्रश्न 23: एंटीबॉडी का निर्माण कौन सी कोशिकाएं करती हैं?",
        answers: shuffle([
            { text: "न्यूट्रोफिल्स", correct: false },
            { text: "प्लेटलेट्स", correct: false },
            { text: "लिम्फोसाइट्स", correct: true },
            { text: "लाल रक्त कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बी-लिम्फोसाइट्स, जो एक प्रकार की श्वेत रक्त कोशिका है।<br><br><i class='fa-solid fa-angles-right icon'></i>  एंटीबॉडी का उत्पादन करती हैं जो विशिष्ट रोगजनकों को पहचानकर उन्हें निष्क्रिय करती हैं।"
    },
    {
        question: "प्रश्न 24: रक्त के थक्के जमने की प्रक्रिया में अंतिम चरण क्या है?",
        answers: shuffle([
            { text: "प्रोथ्रोम्बिन का थ्रोम्बिन में बदलना", correct: false },
            { text: "फाइब्रिनोजेन का फाइब्रिन में बदलना", correct: true },
            { text: "प्लेटलेट प्लग का निर्माण", correct: false },
            { text: "कैल्शियम आयनों का सक्रियण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थ्रोम्बिन एंजाइम घुलनशील प्लाज्मा प्रोटीन फाइब्रिनोजेन को अघुलनशील फाइब्रिन धागों में बदल देता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक जाल बनाकर थक्के को मजबूत करता है।"
    },
    {
        question: "प्रश्न 25: हीमोफिलिया क्या है?",
        answers: shuffle([
            { text: "रक्त की कमी", correct: false },
            { text: "एक आनुवंशिक रोग जिसमें रक्त का थक्का नहीं जमता", correct: true },
            { text: "श्वेत रक्त कोशिकाओं की अधिकता", correct: false },
            { text: "लाल रक्त कोशिकाओं का असामान्य आकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोफिलिया एक वंशानुगत आनुवंशिक विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें रक्त के थक्के बनाने वाले कुछ कारकों की कमी के कारण चोट लगने पर अत्यधिक रक्तस्राव होता है।"
    },
    {
        question: "प्रश्न 26: रक्त वाहिकाओं में रक्त को जमने से रोकने वाला प्राकृतिक प्रतिस्कंदक (anticoagulant) कौन सा है?",
        answers: shuffle([
            { text: "हेपरिन", correct: true },
            { text: "फाइब्रिन", correct: false },
            { text: "थ्रोम्बिन", correct: false },
            { text: "विटामिन K", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेपरिन, जो बेसोफिल्स और मास्ट कोशिकाओं द्वारा निर्मित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  एक शक्तिशाली प्रतिस्कंदक है जो रक्त वाहिकाओं के अंदर रक्त के अनावश्यक थक्के बनने से रोकता है।"
    },
    {
        question: "प्रश्न 27: एनीमिया (रक्ताल्पता) का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "हीमोग्लोबिन की कमी", correct: true },
            { text: "प्लेटलेट्स की कमी", correct: false },
            { text: "श्वेत रक्त कोशिकाओं की कमी", correct: false },
            { text: "प्लाज्मा की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एनीमिया वह स्थिति है जब रक्त में स्वस्थ लाल रक्त कोशिकाओं या हीमोग्लोबिन की मात्रा सामान्य से कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे शरीर में ऑक्सीजन परिवहन क्षमता घट जाती है।"
    },
    {
        question: "प्रश्न 28: रक्त समूह की खोज किसने की थी?",
        answers: shuffle([
            { text: "विलियम हार्वे", correct: false },
            { text: "कार्ल लैंडस्टीनर", correct: true },
            { text: "रॉबर्ट कोच", correct: false },
            { text: "लुई पाश्चर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रियाई वैज्ञानिक कार्ल लैंडस्टीनर ने 1901 में मुख्य रक्त समूहों (A, B, O) की खोज की।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसके लिए उन्हें 1930 में नोबेल पुरस्कार मिला।"
    },
    {
        question: "प्रश्न 29: 'एरिथ्रोब्लास्टोसिस फोएटेलिस' (Erythroblastosis fetalis) की स्थिति कब उत्पन्न होती है?",
        answers: shuffle([
            { text: "जब पिता Rh+ और माता Rh+ हो", correct: false },
            { text: "जब पिता Rh- और माता Rh- हो", correct: false },
            { text: "जब पिता Rh+ और माता Rh- हो", correct: true },
            { text: "जब पिता Rh- और माता Rh+ हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्थिति तब उत्पन्न होती है जब एक Rh- माँ एक Rh+ बच्चे को जन्म देती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे माँ के शरीर में Rh एंटीबॉडी बन जाती हैं जो अगली Rh+ गर्भावस्था के लिए खतरनाक हो सकती हैं।"
    },
    {
        question: "प्रश्न 30: हिस्टामिन का स्राव कौन सी कोशिकाएं करती हैं?",
        answers: shuffle([
            { text: "न्यूट्रोफिल्स", correct: false },
            { text: "लिम्फोसाइट्स", correct: false },
            { text: "बेसोफिल्स", correct: true },
            { text: "मोनोसाइट्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेसोफिल्स और मास्ट कोशिकाएं हिस्टामिन नामक रसायन का स्राव करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एलर्जी और सूजन प्रतिक्रियाओं में वाहिकाविस्फारक (vasodilator) के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 31: रक्त दाब मापने वाले यंत्र को क्या कहते हैं?",
        answers: shuffle([
            { text: "स्फिग्मोमैनोमीटर", correct: true },
            { text: "बैरोमीटर", correct: false },
            { text: "स्पाइरोमीटर", correct: false },
            { text: "थर्मामीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्फिग्मोमैनोमीटर एक चिकित्सा उपकरण है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका उपयोग धमनियों में रक्तचाप को मापने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 32: सिकल-सेल एनीमिया रोग में लाल रक्त कोशिकाओं का आकार कैसा हो जाता है?",
        answers: shuffle([
            { text: "गोलाकार", correct: false },
            { text: "त्रिभुजाकार", correct: false },
            { text: "हँसिया (SICKLE) के आकार का", correct: true },
            { text: "अनियमित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक आनुवंशिक रोग है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें हीमोग्लोबिन की संरचना में दोष के कारण लाल रक्त कोशिकाएं सामान्य उभयावतल डिस्क के बजाय कठोर और हँसिया के आकार की हो जाती हैं।"
    },
    {
        question: "प्रश्न 33: रक्त में बिलीरुबिन का स्तर बढ़ जाने पर कौन सा रोग होता है?",
        answers: shuffle([
            { text: "मलेरिया", correct: false },
            { text: "पीलिया (Jaundice)", correct: true },
            { text: "टाइफाइड", correct: false },
            { text: "हैजा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब पुरानी लाल रक्त कोशिकाएं टूटती हैं, तो हीमोग्लोबिन से बिलीरुबिन बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यदि यकृत इसे ठीक से संसाधित नहीं कर पाता है, तो रक्त में इसका स्तर बढ़ जाता है, जिससे त्वचा और आंखें पीली हो जाती हैं (पीलिया)।"
    },
    {
        question: "प्रश्न 34: प्लाज्मा में जल की मात्रा लगभग कितनी होती है?",
        answers: shuffle([
            { text: "70%", correct: false },
            { text: "80%", correct: false },
            { text: "92%", correct: true },
            { text: "60%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त प्लाज्मा का अधिकांश भाग पानी (लगभग 90-92%) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें प्रोटीन, ग्लूकोज, खनिज आयन, हार्मोन और कार्बन डाइऑक्साइड घुले रहते हैं।"
    },
    {
        question: "प्रश्न 35: सबसे बड़ी श्वेत रक्त कोशिका कौन सी है?",
        answers: shuffle([
            { text: "लिम्फोसाइट", correct: false },
            { text: "न्यूट्रोफिल", correct: false },
            { text: "मोनोसाइट", correct: true },
            { text: "बेसोफिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोनोसाइट आकार में सबसे बड़ी श्वेत रक्त कोशिका होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये रक्तप्रवाह से ऊतकों में जाकर मैक्रोफेज में बदल जाती हैं।"
    },
    {
        question: "प्रश्न 36: रक्त में लाल रक्त कोशिकाओं और श्वेत रक्त कोशिकाओं का अनुपात लगभग कितना होता है?",
        answers: shuffle([
            { text: "1:600", correct: false },
            { text: "600:1", correct: true },
            { text: "1:1", correct: false },
            { text: "100:1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य परिस्थितियों में, रक्त में प्रत्येक श्वेत रक्त कोशिका के लिए लगभग 600 लाल रक्त कोशिकाएं होती हैं।"
    },
    {
        question: "प्रश्न 37: ऊंचाई पर जाने पर RBC की संख्या पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "संख्या घट जाती है", correct: false },
            { text: "संख्या बढ़ जाती है", correct: true },
            { text: "आकार बढ़ जाता है", correct: false },
            { text: "कोई परिवर्तन नहीं होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक ऊंचाई पर हवा में ऑक्सीजन का आंशिक दाब कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसकी भरपाई के लिए, शरीर अधिक लाल रक्त कोशिकाओं का उत्पादन करता है ताकि ऊतकों तक पर्याप्त ऑक्सीजन पहुंच सके। इस स्थिति को पॉलीसाइथीमिया कहते हैं।"
    },
    {
        question: "प्रश्न 38: 'लसीका' (Lymph) क्या है?",
        answers: shuffle([
            { text: "शुद्ध रक्त", correct: false },
            { text: "अशुद्ध रक्त", correct: false },
            { text: "रंगहीन द्रव जिसमें RBC नहीं होते", correct: true },
            { text: "केवल WBC", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लसीका एक अंतरालीय द्रव है जो रक्त केशिकाओं से छनकर ऊतकों के बीच की जगह में आ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसमें लाल रक्त कोशिकाएं और प्लेटलेट्स नहीं होते हैं, लेकिन श्वेत रक्त कोशिकाएं (विशेषकर लिम्फोसाइट्स) होती हैं।"
    },
    {
        question: "प्रश्न 39: किस प्लाज्मा प्रोटीन का संबंध प्रतिरक्षा (Immunity) से है?",
        answers: shuffle([
            { text: "एल्ब्यूमिन", correct: false },
            { text: "फाइब्रिनोजेन", correct: false },
            { text: "ग्लोब्युलिन", correct: true },
            { text: "प्रोथ्रोम्बिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गामा ग्लोब्युलिन, जिन्हें इम्यूनोग्लोबुलिन (एंटीबॉडी) भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  प्रतिरक्षा प्रणाली का एक महत्वपूर्ण हिस्सा हैं और शरीर को संक्रमण से बचाते हैं।"
    },
    {
        question: "प्रश्न 40: रक्त परिसंचरण की खोज किसने की थी?",
        answers: shuffle([
            { text: "कार्ल लैंडस्टीनर", correct: false },
            { text: "एंटनी वॉन ल्यूवेनहॉक", correct: false },
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "विलियम हार्वे", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंग्रेज चिकित्सक विलियम हार्वे ने 1628 में यह प्रदर्शित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i>  कि रक्त शरीर में एक बंद प्रणाली में लगातार घूमता रहता है, जिसमें हृदय एक पंप के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 41: रक्त शर्करा (Blood Sugar) के स्तर को नियंत्रित करने वाला हार्मोन कौन सा है?",
        answers: shuffle([
            { text: "एस्ट्रोजन", correct: false },
            { text: "थायरोक्सिन", correct: false },
            { text: "इंसुलिन", correct: true },
            { text: "टेस्टोस्टेरोन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अग्न्याशय द्वारा स्रावित इंसुलिन हार्मोन रक्त से ग्लूकोज को कोशिकाओं में प्रवेश करने में मदद करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे रक्त शर्करा का स्तर नियंत्रित रहता है।"
    },
    {
        question: "प्रश्न 42: डेंगू बुखार में किस रक्त घटक की संख्या तेजी से घटती है?",
        answers: shuffle([
            { text: "RBC", correct: false },
            { text: "WBC", correct: false },
            { text: "प्लेटलेट्स", correct: true },
            { text: "प्लाज्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेंगू वायरस अस्थि मज्जा को प्रभावित कर सकता है और प्लेटलेट्स के उत्पादन को कम कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और साथ ही मौजूदा प्लेटलेट्स को नष्ट भी कर सकता है, जिससे इनकी संख्या तेजी से गिरती है।"
    },
    {
        question: "प्रश्न 43: यदि माता-पिता दोनों का रक्त समूह 'A' है, तो बच्चे का रक्त समूह क्या नहीं हो सकता?",
        answers: shuffle([
            { text: "A", correct: false },
            { text: "O", correct: false },
            { text: "B", correct: false },
            { text: "B और AB दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि दोनों माता-पिता का जीनोटाइप IAi है, तो बच्चे A (IAIA या IAi) या O (ii) हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन वे B या AB नहीं हो सकते क्योंकि किसी भी माता-पिता से 'B' एलील नहीं मिल सकता।"
    },
    {
        question: "प्रश्न 44: 'थैलेसीमिया' किस प्रकार का रोग है?",
        answers: shuffle([
            { text: "जीवाणु संक्रमण", correct: false },
            { text: "विषाणु संक्रमण", correct: false },
            { text: "आनुवंशिक रोग", correct: true },
            { text: "विटामिन की कमी से होने वाला रोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थैलेसीमिया एक वंशानुगत रक्त विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसमें शरीर सामान्य से कम हीमोग्लोबिन और लाल रक्त कोशिकाओं का उत्पादन करता है, जिससे एनीमिया होता है।"
    },
    {
        question: "प्रश्न 45: कौन सा खनिज लवण RBC के निर्माण में सहायक है?",
        answers: shuffle([
            { text: "कैल्शियम", correct: false },
            { text: "पोटेशियम", correct: false },
            { text: "लोहा (Iron)", correct: true },
            { text: "सोडियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयरन हीमोग्लोबिन का एक आवश्यक घटक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और आयरन की कमी से हीमोग्लोबिन का उत्पादन कम हो जाता है, जिससे आयरन की कमी वाला एनीमिया होता है।"
    },
    {
        question: "प्रश्न 46: रक्त समूह 'A' वाले व्यक्ति के प्लाज्मा में कौन सी एंटीबॉडी होती है?",
        answers: shuffle([
            { text: "एंटी-A", correct: false },
            { text: "एंटी-B", correct: true },
            { text: "एंटी-A और एंटी-B दोनों", correct: false },
            { text: "कोई एंटीबॉडी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रक्त समूह प्रणाली में, व्यक्ति के RBC पर मौजूद एंटीजन के विपरीत एंटीबॉडी प्लाज्मा में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए, 'A' एंटीजन वाले व्यक्ति में 'एंटी-B' एंटीबॉडी होगी।"
    },
    {
        question: "प्रश्न 47: सबसे छोटी रक्त कोशिका कौन सी है?",
        answers: shuffle([
            { text: "मोनोसाइट", correct: false },
            { text: "लाल रक्त कोशिका", correct: false },
            { text: "प्लेटलेट", correct: true },
            { text: "लिम्फोसाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लेटलेट्स वास्तव में कोशिकाएं नहीं बल्कि अस्थि मज्जा में बड़ी कोशिकाओं (मेगाकार्योसाइट्स) के टुकड़े होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और ये RBC और WBC से बहुत छोटे होते हैं।"
    },
    {
        question: "प्रश्न 48: एक हीमोग्लोबिन अणु ऑक्सीजन के कितने अणुओं को बांध सकता है?",
        answers: shuffle([
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक हीमोग्लोबिन अणु में चार हीम समूह होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और प्रत्येक हीम समूह एक आयरन परमाणु के माध्यम से एक ऑक्सीजन अणु को बांध सकता है, जिससे कुल 4 ऑक्सीजन अणु बंध सकते हैं।"
    },
    {
        question: "प्रश्न 49: रक्त में CO2 का अधिकांश परिवहन किस रूप में होता है?",
        answers: shuffle([
            { text: "प्लाज्मा में घुलकर", correct: false },
            { text: "कार्बामिनोहीमोग्लोबिन के रूप में", correct: false },
            { text: "बाइकार्बोनेट आयन के रूप में", correct: true },
            { text: "कार्बोनिक एसिड के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग 70% कार्बन डाइऑक्साइड का परिवहन रक्त में बाइकार्बोनेट आयनों HCO3-के रूप में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो इसे फेफड़ों तक ले जाने का सबसे कुशल तरीका है।"
    },
    {
        question: "प्रश्न 50: 'एरिथ्रोपोएसिस' (RBC निर्माण) को कौन सा हार्मोन उत्तेजित करता है?",
        answers: shuffle([
            { text: "थायरोक्सिन", correct: false },
            { text: "एरिथ्रोपोइटिन", correct: true },
            { text: "एल्डोस्टेरोन", correct: false },
            { text: "एड्रेनालाईन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब शरीर में ऑक्सीजन का स्तर कम होता है, तो गुर्दे (किडनी) एरिथ्रोपोइटिन नामक हार्मोन का स्राव करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो अस्थि मज्जा को अधिक लाल रक्त कोशिकाओं का उत्पादन करने के लिए उत्तेजित करता है।"
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