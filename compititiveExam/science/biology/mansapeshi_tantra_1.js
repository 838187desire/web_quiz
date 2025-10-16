const questions = [
    {
        topHeading: "मांसपेशी तंत्र पर आधारित 50 MCQs (quiz_no. 55)"
    },
    {
        question: "प्रश्न 1. मानव शरीर में कुल कितनी मांसपेशियाँ होती हैं?",
        answers: shuffle([
            { text: "206", correct: false },
            { text: "300", correct: false },
            { text: "639", correct: true },
            { text: "550", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव शरीर में 600 से अधिक (आमतौर पर 639 मानी जाती हैं) मांसपेशियाँ होती हैं, जो गति और अन्य शारीरिक कार्यों के लिए जिम्मेदार होती हैं।"
    },
    {
        question: "प्रश्न 2. मांसपेशियों के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ऑस्टियोलॉजी (Osteology)", correct: false },
            { text: "मायोलॉजी (Myology)", correct: true },
            { text: "कार्डियोलॉजी (Cardiology)", correct: false },
            { text: "न्यूरोलॉजी (Neurology)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मायोलॉजी या सार्कोलॉजी जीव विज्ञान की वह शाखा है जो मांसपेशियों की संरचना, कार्य और रोगों का अध्ययन करती है।"
    },
    {
        question: "प्रश्न 3. मानव शरीर की सबसे बड़ी मांसपेशी कौन सी है?",
        answers: shuffle([
            { text: "डेल्टोइड (Deltoid)", correct: false },
            { text: "बाइसेप्स (Biceps)", correct: false },
            { text: "ग्लूटस मैक्सिमस (Gluteus Maximus)", correct: true },
            { text: "लैटिसिमस डॉर्सी (Latissimus Dorsi)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लूटस मैक्सिमस कूल्हे की सबसे बड़ी और सबसे शक्तिशाली मांसपेशी है, जो चलने, दौड़ने और खड़े होने में मदद करती है।"
    },
    {
        question: "प्रश्न 4. मानव शरीर की सबसे छोटी मांसपेशी 'स्टेपेडियस' (Stapedius) कहाँ पाई जाती है?",
        answers: shuffle([
            { text: "आँख में", correct: false },
            { text: "कान में", correct: true },
            { text: "नाक में", correct: false },
            { text: "गर्दन में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेपेडियस मध्य कान में स्थित होती है और यह शरीर की सबसे छोटी हड्डी 'स्टेप्स' को स्थिर रखती है, जिससे तेज आवाजों से सुरक्षा मिलती है।"
    },
    {
        question: "प्रश्न 5. कौन सी मांसपेशी अनैच्छिक (Involuntary) नहीं है?",
        answers: shuffle([
            { text: "हृदय की मांसपेशी (Cardiac Muscle)", correct: false },
            { text: "चिकनी मांसपेशी (Smooth Muscle)", correct: false },
            { text: "कंकाल की मांसपेशी (Skeletal Muscle)", correct: true },
            { text: "आंत की मांसपेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंकाल की मांसपेशियाँ ऐच्छिक (Voluntary) होती हैं, जिसका अर्थ है कि हम अपनी इच्छा से उन्हें नियंत्रित कर सकते हैं, जैसे हाथ-पैर हिलाना।"
    },
    {
        question: "प्रश्न 6. हृदय की दीवारें किस प्रकार की मांसपेशियों से बनी होती हैं?",
        answers: shuffle([
            { text: "केवल ऐच्छिक मांसपेशी", correct: false },
            { text: "केवल अनैच्छिक चिकनी मांसपेशी", correct: false },
            { text: "हृदय मांसपेशी (Cardiac Muscle)", correct: true },
            { text: "केवल कंकाल की मांसपेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हृदय की मांसपेशियाँ एक विशेष प्रकार की अनैच्छिक धारीदार मांसपेशियाँ होती हैं जो केवल हृदय में पाई जाती हैं और बिना थके लगातार काम करती हैं।"
    },
    {
        question: "प्रश्न 7. मांसपेशियों को हड्डियों से जोड़ने वाले संयोजी ऊतक को क्या कहते हैं?",
        answers: shuffle([
            { text: "लिगामेंट (Ligament)", correct: false },
            { text: "टेंडन (Tendon)", correct: true },
            { text: "उपास्थि (Cartilage)", correct: false },
            { text: "फैशिया (Fascia)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेंडन (कण्डरा) एक मजबूत, रेशेदार ऊतक है जो मांसपेशियों की शक्ति को हड्डियों तक पहुंचाता है, जिससे गति उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 8. मांसपेशियों में थकान किस अम्ल के जमा होने के कारण होती है?",
        answers: shuffle([
            { text: "एसिटिक अम्ल", correct: false },
            { text: "हाइड्रोक्लोरिक अम्ल", correct: false },
            { text: "लैक्टिक अम्ल", correct: true },
            { text: "यूरिक अम्ल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीव्र व्यायाम के दौरान, जब ऑक्सीजन की आपूर्ति अपर्याप्त होती है, तो मांसपेशियों में अवायवीय श्वसन होता है, जिससे लैक्टिक अम्ल बनता है और थकान महसूस होती है।"
    },
    {
        question: "प्रश्न 9. मांसपेशियों के संकुचन के लिए कौन सा प्रोटीन आवश्यक है?",
        answers: shuffle([
            { text: "एक्टिन और मायोसिन", correct: true },
            { text: "हीमोग्लोबिन", correct: false },
            { text: "केराटिन", correct: false },
            { text: "कोलेजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक्टिन (पतले तंतु) और मायोसिन (मोटे तंतु) मांसपेशी कोशिकाओं के भीतर स्लाइडिंग फिलामेंट सिद्धांत के अनुसार एक-दूसरे पर फिसलते हैं, जिससे संकुचन होता है।"
    },
    {
        question: "प्रश्न 10. मांसपेशी संकुचन के लिए कौन सा खनिज आयन महत्वपूर्ण है?",
        answers: shuffle([
            { text: "सोडियम", correct: false },
            { text: "पोटेशियम", correct: false },
            { text: "कैल्शियम", correct: true },
            { text: "लोहा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैल्शियम आयन (Ca²⁺) सार्कोप्लाज्मिक रेटिकुलम से निकलते हैं और एक्टिन और मायोसिन के बीच क्रॉस-ब्रिज बनाने की प्रक्रिया शुरू करते हैं, जो संकुचन के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 11. किस मांसपेशी को 'टेलर की मांसपेशी' (Tailor's Muscle) कहा जाता है?",
        answers: shuffle([
            { text: "सारटोरियस (Sartorius)", correct: true },
            { text: "क्वाड्रिसेप्स (Quadriceps)", correct: false },
            { text: "बाइसेप्स फेमोरिस (Biceps Femoris)", correct: false },
            { text: "गैस्ट्रोक्नेमियस (Gastrocnemius)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारटोरियस शरीर की सबसे लंबी मांसपेशी है और यह पैर को मोड़ने और क्रॉस-लेग्ड स्थिति में बैठने में मदद करती है, जैसा कि दर्जी करते थे।"
    },
    {
        question: "प्रश्न 12. पेट की दीवारें और रक्त वाहिकाएं किस प्रकार की मांसपेशियों से बनी होती हैं?",
        answers: shuffle([
            { text: "कंकाल की मांसपेशी", correct: false },
            { text: "हृदय की मांसपेशी", correct: false },
            { text: "चिकनी मांसपेशी (Smooth Muscle)", correct: true },
            { text: "धारीदार मांसपेशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिकनी मांसपेशियाँ अनैच्छिक होती हैं और आंतरिक अंगों जैसे आंत, पेट, और रक्त वाहिकाओं की दीवारों में पाई जाती हैं, जहाँ वे क्रमाकुंचन जैसी धीमी गति को नियंत्रित करती हैं।"
    },
    {
        question: "प्रश्न 13. 'मायोग्लोबिन' (Myoglobin) का क्या कार्य है?",
        answers: shuffle([
            { text: "मांसपेशियों को रंग देना", correct: false },
            { text: "मांसपेशियों में ऑक्सीजन का भंडारण करना", correct: true },
            { text: "ऊर्जा का उत्पादन करना", correct: false },
            { text: "मांसपेशियों को हड्डियों से जोड़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मायोग्लोबिन एक प्रोटीन है जो मांसपेशी कोशिकाओं में पाया जाता है और हीमोग्लोबिन से ऑक्सीजन लेकर उसे संग्रहीत करता है, ताकि व्यायाम के दौरान इसका उपयोग किया जा सके।"
    },
    {
        question: "प्रश्न 14. जब हम अपनी बांह को मोड़ते हैं, तो बाइसेप्स मांसपेशी _________ होती है और ट्राइसेप्स मांसपेशी _________ होती है।",
        answers: shuffle([
            { text: "शिथिल, संकुचित", correct: false },
            { text: "संकुचित, शिथिल", correct: true },
            { text: "दोनों संकुचित", correct: false },
            { text: "दोनों शिथिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांसपेशियाँ जोड़े में काम करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बांह मोड़ने के लिए, बाइसेप्स (एगोनिस्ट) सिकुड़ती है जबकि ट्राइसेप्स (एंटागोनिस्ट) शिथिल होती है।"
    },
    {
        question: "प्रश्न 15. 'मांसपेशीय दुर्विकास' (Muscular Dystrophy) क्या है?",
        answers: shuffle([
            { text: "एक जीवाणु संक्रमण", correct: false },
            { text: "एक वायरल संक्रमण", correct: false },
            { text: "एक आनुवंशिक रोग जिसमें मांसपेशियाँ कमजोर हो जाती हैं", correct: true },
            { text: "मांसपेशियों में खिंचाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह रोगों का एक समूह है जिसमें मांसपेशी फाइबर क्षतिग्रस्त हो जाते हैं और समय के साथ उत्तरोत्तर कमजोर होते जाते हैं।"
    },
    {
        question: "प्रश्न 16. डायफ्राम (Diaphragm) क्या है?",
        answers: shuffle([
            { text: "एक हड्डी", correct: false },
            { text: "एक जोड़", correct: false },
            { text: "श्वसन के लिए एक प्रमुख मांसपेशी", correct: true },
            { text: "एक अंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायफ्राम एक बड़ी, गुंबद के आकार की मांसपेशी है जो वक्ष गुहा को उदर गुहा से अलग करती है और सांस लेने (अंतःश्वसन) की प्रक्रिया में महत्वपूर्ण भूमिका निभाती है।"
    },
    {
        question: "प्रश्न 17. मांसपेशियों के लिए ऊर्जा का तत्काल स्रोत क्या है?",
        answers: shuffle([
            { text: "ग्लूकोज", correct: false },
            { text: "वसा", correct: false },
            { text: "एटीपी (ATP - Adenosine Triphosphate)", correct: true },
            { text: "प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एटीपी कोशिका की \"ऊर्जा मुद्रा\" है।<br><br><i class='fa-solid fa-angles-right icon'></i> मांसपेशी संकुचन सहित सभी सेलुलर गतिविधियों के लिए ऊर्जा सीधे एटीपी के टूटने से प्राप्त होती है।"
    },
    {
        question: "प्रश्न 18. 'टिटेनस' (Tetanus) रोग में क्या होता है?",
        answers: shuffle([
            { text: "मांसपेशियाँ कमजोर हो जाती हैं", correct: false },
            { text: "मांसपेशियों में अनियंत्रित और दर्दनाक संकुचन होता है", correct: true },
            { text: "हड्डियों का घनत्व कम हो जाता है", correct: false },
            { text: "रक्त का थक्का नहीं जमता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह क्लोस्ट्रीडियम टेटानी बैक्टीरिया द्वारा उत्पन्न विष के कारण होता है, जो तंत्रिकाओं को प्रभावित करता है और मांसपेशियों में लगातार ऐंठन पैदा करता है, जिसे 'लॉकजॉ' भी कहते हैं।"
    },
    {
        question: "प्रश्न 19. मांसपेशी कोशिका को क्या कहा जाता है?",
        answers: shuffle([
            { text: "नेफ्रॉन", correct: false },
            { text: "न्यूरॉन", correct: false },
            { text: "मांसपेशी फाइबर (Muscle Fiber) या मायोसाइट", correct: true },
            { text: "ओस्टियोसाइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांसपेशी कोशिकाएं लंबी और बेलनाकार होती हैं, इसलिए उन्हें आमतौर पर मांसपेशी फाइबर कहा जाता है।"
    },
    {
        question: "प्रश्न 20. शरीर में गर्मी उत्पन्न करने में कौन सा तंत्र महत्वपूर्ण भूमिका निभाता है?",
        answers: shuffle([
            { text: "पाचन तंत्र", correct: false },
            { text: "श्वसन तंत्र", correct: false },
            { text: "मांसपेशी तंत्र", correct: true },
            { text: "उत्सर्जन तंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांसपेशियों के संकुचन के दौरान ऊर्जा का एक महत्वपूर्ण हिस्सा गर्मी के रूप में निकलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कंपकंपी एक अनैच्छिक मांसपेशी संकुचन है जो शरीर का तापमान बढ़ाने के लिए होता है।"
    },
    {
        question: "प्रश्न 21. 'सारकोमियर' (Sarcomere) क्या है?",
        answers: shuffle([
            { text: "मांसपेशी कोशिका की झिल्ली", correct: false },
            { text: "मांसपेशी कोशिका का कोशिका द्रव्य", correct: false },
            { text: "धारीदार मांसपेशी की कार्यात्मक इकाई", correct: true },
            { text: "एक प्रकार का प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारकोमियर एक धारीदार मांसपेशी फाइबर की सबसे छोटी संकुचनशील इकाई है, जो दो Z-लाइनों के बीच का क्षेत्र है।"
    },
    {
        question: "प्रश्न 22. कौन सा न्यूरोट्रांसमीटर कंकाल की मांसपेशियों को सिकोड़ने का संकेत देता है?",
        answers: shuffle([
            { text: "डोपामाइन", correct: false },
            { text: "सेरोटोनिन", correct: false },
            { text: "एसिटाइलकोलाइन", correct: true },
            { text: "गाबा (GABA)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक मोटर न्यूरॉन से एक तंत्रिका आवेग न्यूरोमस्कुलर जंक्शन पर पहुंचता है, तो यह एसिटाइलकोलाइन छोड़ता है, जो मांसपेशी फाइबर में एक एक्शन पोटेंशियल शुरू करता है।"
    },
    {
        question: "प्रश्न 23. 'आइसोमेट्रिक' (Isometric) संकुचन में क्या होता है?",
        answers: shuffle([
            { text: "मांसपेशी छोटी हो जाती है", correct: false },
            { text: "मांसपेशी लंबी हो जाती है", correct: false },
            { text: "मांसपेशी की लंबाई में कोई परिवर्तन नहीं होता, लेकिन तनाव बढ़ता है", correct: true },
            { text: "मांसपेशी पूरी तरह से शिथिल हो जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका एक उदाहरण दीवार को धकेलना है।<br><br><i class='fa-solid fa-angles-right icon'></i> मांसपेशियां तनाव उत्पन्न कर रही हैं, लेकिन उनकी लंबाई नहीं बदल रही है और कोई गति नहीं हो रही है।"
    },
    {
        question: "प्रश्न 24. मानव शरीर की सबसे मजबूत मांसपेशी (बल उत्पन्न करने के संदर्भ में) कौन सी है?",
        answers: shuffle([
            { text: "जीभ (Tongue)", correct: false },
            { text: "जबड़े की मांसपेशी (Masseter)", correct: true },
            { text: "हृदय (Heart)", correct: false },
            { text: "जांघ की मांसपेशी (Quadriceps)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने आकार के सापेक्ष, मैसेटर मांसपेशी सबसे अधिक बल उत्पन्न कर सकती है, जो हमें भोजन चबाने में सक्षम बनाती है।"
    },
    {
        question: "प्रश्न 25. 'मायस्थेनिया ग्रेविस' (Myasthenia Gravis) क्या है?",
        answers: shuffle([
            { text: "एक ऑटोइम्यून रोग जो न्यूरोमस्कुलर जंक्शन को प्रभावित करता है", correct: true },
            { text: "एक वायरल रोग", correct: false },
            { text: "मांसपेशियों का कैंसर", correct: false },
            { text: "जन्मजात हड्डी का विकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस रोग में, प्रतिरक्षा प्रणाली एसिटाइलकोलाइन के रिसेप्टर्स पर हमला करती है, जिससे तंत्रिका और मांसपेशी के बीच संचार बाधित होता है और गंभीर कमजोरी होती है।"
    },
    {
        question: "प्रश्न 26. मांसपेशियों के बंडल को ढकने वाले संयोजी ऊतक की परत को क्या कहते हैं?",
        answers: shuffle([
            { text: "एपिमाइसियम (Epimysium)", correct: false },
            { text: "पेरिमाइसियम (Perimysium)", correct: true },
            { text: "एंडोमाइसियम (Endomysium)", correct: false },
            { text: "सारकोलेमा (Sarcolemma)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरिमाइसियम मांसपेशी फाइबर के बंडलों (fascicles) को घेरता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एपिमाइसियम पूरी मांसपेशी को और एंडोमाइसियम प्रत्येक फाइबर को घेरता है।"
    },
    {
        question: "प्रश्न 27. पिंडली की मुख्य मांसपेशी (calf muscle) का क्या नाम है?",
        answers: shuffle([
            { text: "A) टिबिअलिस एंटीरियर", correct: false },
            { text: "B) गैस्ट्रोक्नेमियस", correct: false },
            { text: "C) सोलियस", correct: false },
            { text: "B) और C) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैस्ट्रोक्नेमियस और सोलियस मिलकर पिंडली की मुख्य मांसपेशी बनाते हैं, जो पैर के पंजे को नीचे की ओर धकेलने में मदद करते हैं।"
    },
    {
        question: "प्रश्न 28. 'ऑक्सीजन ऋण' (Oxygen Debt) क्या है?",
        answers: shuffle([
            { text: "शरीर में ऑक्सीजन की कमी", correct: false },
            { text: "व्यायाम के बाद सामान्य चयापचय को बहाल करने के लिए आवश्यक अतिरिक्त ऑक्सीजन", correct: true },
            { text: "फेफड़ों की क्षमता", correct: false },
            { text: "रक्त में ऑक्सीजन की मात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तीव्र व्यायाम के दौरान, शरीर ऑक्सीजन की तुलना में तेजी से ऊर्जा का उपयोग करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> व्यायाम के बाद, शरीर को लैक्टिक एसिड को हटाने और एटीपी को फिर से भरने के लिए अतिरिक्त ऑक्सीजन की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 29. वह बिंदु जहाँ एक मोटर न्यूरॉन एक मांसपेशी फाइबर से मिलता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "सिनेप्स", correct: false },
            { text: "न्यूरोमस्कुलर जंक्शन", correct: true },
            { text: "टेंडन", correct: false },
            { text: "लिगामेंट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक विशेष रासायनिक सिनेप्स है जो मोटर न्यूरॉन और मांसपेशी फाइबर के बीच संकेत के संचरण के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 30. धारीदार मांसपेशियाँ (Striated muscles) कौन सी हैं?",
        answers: shuffle([
            { text: "केवल कंकाल की मांसपेशियाँ", correct: false },
            { text: "केवल हृदय की मांसपेशियाँ", correct: false },
            { text: "कंकाल और हृदय दोनों की मांसपेशियाँ", correct: true },
            { text: "केवल चिकनी मांसपेशियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन दोनों प्रकार की मांसपेशियों में माइक्रोस्कोप के नीचे एक्टिन और मायोसिन फिलामेंट्स की नियमित व्यवस्था के कारण धारियाँ या बैंड दिखाई देते हैं।"
    },
    {
        question: "प्रश्न 31. मांसपेशी की कोशिका झिल्ली को क्या कहते हैं?",
        answers: shuffle([
            { text: "सारकोप्लाज्म", correct: false },
            { text: "सारकोलेमा", correct: true },
            { text: "सार्कोप्लाज्मिक रेटिकुलम", correct: false },
            { text: "सारकोमियर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सारकोलेमा मांसपेशी फाइबर की प्लाज्मा झिल्ली है, जबकि सारकोप्लाज्म इसका कोशिका द्रव्य है।"
    },
    {
        question: "प्रश्न 32. 'क्रेम्प' (Cramp) या मांसपेशियों में ऐंठन का क्या कारण हो सकता है?",
        answers: shuffle([
            { text: "निर्जलीकरण (Dehydration)", correct: false },
            { text: "इलेक्ट्रोलाइट असंतुलन", correct: false },
            { text: "अत्यधिक उपयोग", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांसपेशियों में ऐंठन एक अनैच्छिक, दर्दनाक संकुचन है जो निर्जलीकरण, खनिज (जैसे पोटेशियम, कैल्शियम) की कमी या अत्यधिक थकान के कारण हो सकता है।"
    },
    {
        question: "प्रश्न 33. 'एगोनिस्ट' (Agonist) मांसपेशी क्या है?",
        answers: shuffle([
            { text: "वह मांसपेशी जो एक गति के दौरान शिथिल होती है", correct: false },
            { text: "वह मांसपेशी जो एक विशेष गति उत्पन्न करने के लिए मुख्य रूप से जिम्मेदार होती है", correct: true },
            { text: "वह मांसपेशी जो एगोनिस्ट की सहायता करती है", correct: false },
            { text: "वह मांसपेशी जो एक जोड़ को स्थिर करती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एगोनिस्ट या प्राइम मूवर वह मांसपेशी है जो किसी क्रिया के लिए मुख्य बल प्रदान करती है।"
    },
    {
        question: "प्रश्न 34. 'एंटागोनिस्ट' (Antagonist) मांसपेशी क्या है?",
        answers: shuffle([
            { text: "वह मांसपेशी जो एक गति का विरोध करती है", correct: true },
            { text: "वह मांसपेशी जो एक गति उत्पन्न करती है", correct: false },
            { text: "वह मांसपेशी जो गति में सहायता करती है", correct: false },
            { text: "वह मांसपेशी जो हमेशा संकुचित रहती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंटागोनिस्ट मांसपेशी एगोनिस्ट के विपरीत कार्य करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब एगोनिस्ट सिकुड़ता है, तो एंटागोनिस्ट शिथिल होता है।"
    },
    {
        question: "प्रश्न 35. 'रिगोर मॉर्टिस' (Rigor Mortis) या मृत्यु के बाद शरीर का अकड़ जाना क्यों होता है?",
        answers: shuffle([
            { text: "लैक्टिक अम्ल के जमाव के कारण", correct: false },
            { text: "ATP की कमी के कारण", correct: true },
            { text: "कैल्शियम की अधिकता के कारण", correct: false },
            { text: "तंत्रिका संकेतों के बंद होने के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत्यु के बाद, ATP का उत्पादन बंद हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ATP की आवश्यकता एक्टिन से मायोसिन क्रॉस-ब्रिज को अलग करने के लिए होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ATP के बिना, मांसपेशियाँ संकुचित अवस्था में बंद हो जाती हैं।"
    },
    {
        question: "प्रश्न 36. चेहरे की अभिव्यक्तियों के लिए कौन सी मांसपेशियाँ जिम्मेदार हैं?",
        answers: shuffle([
            { text: "मैसेटर", correct: false },
            { text: "ऑर्बिक्युलरिस ओकुलाई", correct: false },
            { text: "जाइगोमेटिकस", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चेहरे पर कई छोटी मांसपेशियाँ होती हैं जो हमें मुस्कुराने, भौंहें सिकोड़ने और अन्य भाव बनाने में सक्षम बनाती हैं।"
    },
    {
        question: "प्रश्न 37. एक मोटर इकाई (Motor Unit) में क्या शामिल होता है?",
        answers: shuffle([
            { text: "केवल एक मांसपेशी फाइबर", correct: false },
            { text: "केवल एक मोटर न्यूरॉन", correct: false },
            { text: "एक मोटर न्यूरॉन और उसके द्वारा नियंत्रित सभी मांसपेशी फाइबर", correct: true },
            { text: "कई मोटर न्यूरॉन और एक मांसपेशी फाइबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मांसपेशी संकुचन की मूल कार्यात्मक इकाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक न्यूरॉन एक साथ कई मांसपेशी फाइबर को नियंत्रित कर सकता है।"
    },
    {
        question: "प्रश्न 38. 'टॉनिक संकुचन' (Tonic Contraction) या मांसपेशी टोन का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक तेज, शक्तिशाली संकुचन", correct: false },
            { text: "आराम की स्थिति में मांसपेशियों में हल्का, निरंतर संकुचन", correct: true },
            { text: "एक दर्दनाक ऐंठन", correct: false },
            { text: "मांसपेशियों का पूर्ण शिथिलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मांसपेशी टोन शरीर की मुद्रा को बनाए रखने और मांसपेशियों को क्रिया के लिए तैयार रखने में मदद करती है, भले ही कोई गति न हो रही हो।"
    },
    {
        question: "प्रश्न 39. कौन सी मांसपेशी हंसने में मदद करती है?",
        answers: shuffle([
            { text: "जाइगोमेटिकस मेजर", correct: true },
            { text: "ऑर्बिक्युलरिस ओरिस", correct: false },
            { text: "मैसेटर", correct: false },
            { text: "टेम्पोरलिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मांसपेशी मुंह के कोनों को ऊपर और बाहर की ओर खींचती है, जिससे मुस्कुराहट या हंसी की अभिव्यक्ति बनती है।"
    },
    {
        question: "प्रश्न 40. जांघ के पिछले हिस्से की मांसपेशियों को सामूहिक रूप से क्या कहते हैं?",
        answers: shuffle([
            { text: "क्वाड्रिसेप्स", correct: false },
            { text: "हैमस्ट्रिंग", correct: true },
            { text: "ग्लूट्स", correct: false },
            { text: "एडक्टर्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हैमस्ट्रिंग समूह में तीन मांसपेशियाँ (बाइसेप्स फेमोरिस, सेमीटेंडिनोसस, सेमीमेम्ब्रानोसस) होती हैं जो घुटने को मोड़ने और कूल्हे को फैलाने में मदद करती हैं।"
    },
    {
        question: "प्रश्न 41. 'एट्रोफी' (Atrophy) का क्या अर्थ है?",
        answers: shuffle([
            { text: "मांसपेशियों के आकार में वृद्धि", correct: false },
            { text: "मांसपेशियों के आकार में कमी या उनका क्षय", correct: true },
            { text: "मांसपेशियों में सूजन", correct: false },
            { text: "मांसपेशियों का फटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपयोग न करने, उम्र बढ़ने या बीमारी के कारण मांसपेशियों के ऊतकों का क्षय हो सकता है, जिसे एट्रोफी कहते हैं।"
    },
    {
        question: "प्रश्न 42. 'हाइपरट्रॉफी' (Hypertrophy) का क्या अर्थ है?",
        answers: shuffle([
            { text: "मांसपेशियों के आकार में कमी", correct: false },
            { text: "मांसपेशियों के आकार में वृद्धि", correct: true },
            { text: "मांसपेशियों में लैक्टिक अम्ल का जमाव", correct: false },
            { text: "मांसपेशियों में ऑक्सीजन की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भार प्रशिक्षण (weight training) जैसे व्यायाम के कारण व्यक्तिगत मांसपेशी फाइबर के आकार में वृद्धि होती है, जिससे समग्र मांसपेशी बड़ी और मजबूत हो जाती है।"
    },
    {
        question: "प्रश्न 43. जीभ मुख्य रूप से किससे बनी होती है?",
        answers: shuffle([
            { text: "हड्डी", correct: false },
            { text: "उपास्थि", correct: false },
            { text: "मांसपेशी", correct: true },
            { text: "वसा ऊतक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीभ कंकाल की मांसपेशियों का एक जटिल समूह है जो हमें बोलने, चबाने और निगलने में सक्षम बनाता है।"
    },
    {
        question: "प्रश्न 44. सार्कोप्लाज्मिक रेटिकुलम का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रोटीन का संश्लेषण", correct: false },
            { text: "ऊर्जा का उत्पादन", correct: false },
            { text: "कैल्शियम आयनों का भंडारण और विमोचन", correct: true },
            { text: "ऑक्सीजन का परिवहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मांसपेशी फाइबर के भीतर एक विशेष प्रकार का चिकना एंडोप्लाज्मिक रेटिकुलम है जो मांसपेशी संकुचन को नियंत्रित करने के लिए कैल्शियम को संग्रहीत करता है।"
    },
    {
        question: "प्रश्न 45. 'मायोसाइटिस' (Myositis) का क्या अर्थ है?",
        answers: shuffle([
            { text: "मांसपेशियों में सूजन", correct: true },
            { text: "मांसपेशियों का कैंसर", correct: false },
            { text: "मांसपेशियों का आनुवंशिक विकार", correct: false },
            { text: "मांसपेशियों का पक्षाघात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मायोसाइटिस एक सामान्य शब्द है जिसका उपयोग मांसपेशियों की सूजन का वर्णन करने के लिए किया जाता है, जो चोट, संक्रमण या ऑटोइम्यून बीमारियों के कारण हो सकती है।"
    },
    {
        question: "प्रश्न 46. कौन सी मांसपेशी कंधे को ऊपर उठाने (shrugging) में मदद करती है?",
        answers: shuffle([
            { text: "डेल्टोइड", correct: false },
            { text: "ट्रेपेजियस", correct: true },
            { text: "लैटिसिमस डॉर्सी", correct: false },
            { text: "पेक्टोरलिस मेजर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ट्रेपेजियस एक बड़ी, त्रिकोणीय मांसपेशी है जो गर्दन के पीछे से कंधों तक फैली होती है और कंधे की गति में कई भूमिकाएँ निभाती है।"
    },
    {
        question: "प्रश्न 47. 'पेरिस्टालसिस' (Peristalsis) या क्रमाकुंचन क्या है?",
        answers: shuffle([
            { text: "हृदय का संकुचन", correct: false },
            { text: "फेफड़ों का फैलना", correct: false },
            { text: "आहार नली में चिकनी मांसपेशियों का तरंग जैसा संकुचन", correct: true },
            { text: "कंकाल की मांसपेशियों का एक तेज झटका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अनैच्छिक क्रिया भोजन को पाचन तंत्र के माध्यम से आगे बढ़ाती है।"
    },
    {
        question: "प्रश्न 48. जांघ के अगले हिस्से की चार मांसपेशियों के समूह को क्या कहते हैं?",
        answers: shuffle([
            { text: "हैमस्ट्रिंग", correct: false },
            { text: "ग्लूटियल समूह", correct: false },
            { text: "क्वाड्रिसेप्स फेमोरिस", correct: true },
            { text: "एडक्टर समूह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'क्वाड' का अर्थ है चार।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शक्तिशाली मांसपेशी समूह घुटने को सीधा करने के लिए जिम्मेदार है।"
    },
    {
        question: "प्रश्न 49. 'ऑल-ऑर-नन' (All-or-None) सिद्धांत का क्या अर्थ है?",
        answers: shuffle([
            { text: "या तो पूरी मांसपेशी सिकुड़ती है या बिल्कुल नहीं", correct: false },
            { text: "या तो एक मांसपेशी फाइबर पूरी तरह से सिकुड़ता है या बिल्कुल नहीं", correct: true },
            { text: "मांसपेशी हमेशा आधी ताकत से सिकुड़ती है", correct: false },
            { text: "मांसपेशी कभी नहीं थकती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि एक मांसपेशी फाइबर को उत्तेजित करने के लिए पर्याप्त संकेत मिलता है (थ्रेशोल्ड तक), तो वह अपनी पूरी क्षमता से सिकुड़ेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि संकेत अपर्याप्त है, तो वह बिल्कुल नहीं सिकुड़ेगा।"
    },
    {
        question: "प्रश्न 50. मांसपेशियों को अपनी क्रिया के लिए ऊर्जा मुख्य रूप से किस प्रक्रिया से मिलती है?",
        answers: shuffle([
            { text: "प्रकाश संश्लेषण", correct: false },
            { text: "कोशिकीय श्वसन", correct: true },
            { text: "वाष्पोत्सर्जन", correct: false },
            { text: "किण्वन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिकीय श्वसन वह प्रक्रिया है जिसमें कोशिकाएं (माइटोकॉन्ड्रिया में) ग्लूकोज और ऑक्सीजन का उपयोग करके एटीपी के रूप में ऊर्जा का उत्पादन करती हैं।"
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