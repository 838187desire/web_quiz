const questions = [
    {
        topHeading: "जैव अणु (Biomolecules) पर आधारित 35 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. तत्काल ऊर्जा (Instant Energy) के लिए किसी एथलीट को क्या दिया जाना चाहिए?",
        answers: shuffle([
            { text: "प्रोटीन", correct: false },
            { text: "वसा", correct: false },
            { text: "विटामिन", correct: false },
            { text: "कार्बोहाइड्रेट", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्बोहाइड्रेट शरीर में सबसे तेजी से पचते हैं और ग्लूकोज में टूटकर तत्काल ऊर्जा प्रदान करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसीलिए खिलाड़ी तुरंत ऊर्जा के लिए ग्लूकोज या अन्य कार्बोहाइड्रेट युक्त पेय पीते हैं।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से कौन सी सबसे मीठी शर्करा है?",
        answers: shuffle([
            { text: "ग्लूकोज", correct: false },
            { text: "सुक्रोज", correct: false },
            { text: "फ्रुक्टोज", correct: true },
            { text: "माल्टोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रुक्टोज, जिसे 'फल शर्करा' भी कहा जाता है, प्राकृतिक रूप से पाई जाने वाली सबसे मीठी शर्करा है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह मुख्य रूप से फलों और शहद में पाई जाती है।"
    },
    {
        question: "प्रश्न 3. पौधों में ऊर्जा किस रूप में संचित रहती है?",
        answers: shuffle([
            { text: "ग्लाइकोजन", correct: false },
            { text: "स्टार्च (मंड)", correct: true },
            { text: "ग्लूकोज", correct: false },
            { text: "सेलूलोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पौधे प्रकाश संश्लेषण द्वारा बनाए गए अतिरिक्त ग्लूकोज को स्टार्च के रूप में अपनी जड़ों, बीजों और फलों में संग्रहीत करते हैं।"
    },
    {
        question: "प्रश्न 4. जंतुओं और कवकों में संचित होने वाला पॉलीसेकेराइड कौन सा है?",
        answers: shuffle([
            { text: "स्टार्च", correct: false },
            { text: "सेलूलोज", correct: false },
            { text: "ग्लाइकोजन", correct: true },
            { text: "काइटिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जंतुओं के शरीर में अतिरिक्त ग्लूकोज यकृत (liver) और मांसपेशियों (muscles) में ग्लाइकोजन के रूप में संग्रहीत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे 'एनिमल स्टार्च' भी कहते हैं।"
    },
    {
        question: "प्रश्न 5. टेबल शुगर (सामान्य चीनी) के नाम से किसे जाना जाता है?",
        answers: shuffle([
            { text: "ग्लूकोज", correct: false },
            { text: "लैक्टोज", correct: false },
            { text: "सुक्रोज", correct: true },
            { text: "फ्रुक्टोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुक्रोज एक डाइसैकेराइड है जो ग्लूकोज और फ्रुक्टोज से मिलकर बना होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह गन्ने और चुकंदर से प्राप्त होता है और इसे ही सामान्य टेबल शुगर कहा जाता है।"
    },
    {
        question: "प्रश्न 6. दूध में पाई जाने वाली शर्करा क्या कहलाती है?",
        answers: shuffle([
            { text: "माल्टोज", correct: false },
            { text: "लैक्टोज", correct: true },
            { text: "सुक्रोज", correct: false },
            { text: "गैलेक्टोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लैक्टोज, जिसे 'दुग्ध शर्करा' भी कहते हैं, एक डाइसैकेराइड है जो दूध और डेयरी उत्पादों में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह ग्लूकोज और गैलेक्टोज से मिलकर बनता है।"
    },
    {
        question: "प्रश्न 7. निम्नलिखित में से कौन सा एक मोनोसैकेराइड नहीं है?",
        answers: shuffle([
            { text: "ग्लूकोज", correct: false },
            { text: "फ्रुक्टोज", correct: false },
            { text: "गैलेक्टोज", correct: false },
            { text: "माल्टोज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माल्टोज एक डाइसैकेराइड है जो ग्लूकोज की दो इकाइयों से मिलकर बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ग्लूकोज, फ्रुक्टोज और गैलेक्टोज मोनोसैकेराइड (सरल शर्करा) हैं।"
    },
    {
        question: "प्रश्न 8. मानव शरीर द्वारा पचाया न जा सकने वाला कार्बोहाइड्रेट कौन सा है?",
        answers: shuffle([
            { text: "स्टार्च", correct: false },
            { text: "ग्लाइकोजन", correct: false },
            { text: "सेलूलोज", correct: true },
            { text: "सुक्रोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेलूलोज पादप कोशिका भित्ति का मुख्य घटक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  मानव पाचन तंत्र में इसे पचाने के लिए आवश्यक एंजाइम (सेल्युलेस) नहीं होते हैं, इसलिए यह आहार रेशे (dietary fiber) के रूप में कार्य करता है।"
    },
    {
        question: "प्रश्न 9. 'रक्त शर्करा' (Blood Sugar) किसे कहा जाता है?",
        answers: shuffle([
            { text: "फ्रुक्टोज", correct: false },
            { text: "सुक्रोज", correct: false },
            { text: "ग्लूकोज", correct: true },
            { text: "लैक्टोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लूकोज रक्त में मौजूद मुख्य शर्करा है, जो कोशिकाओं को ऊर्जा प्रदान करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  रक्त में इसकी मात्रा का नियंत्रण इंसुलिन और ग्लूकागन हार्मोन द्वारा होता है।"
    },
    {
        question: "प्रश्न 10. शहद का प्रमुख घटक क्या है?",
        answers: shuffle([
            { text: "ग्लूकोज", correct: false },
            { text: "सुक्रोज", correct: false },
            { text: "माल्टोज", correct: false },
            { text: "फ्रुक्टोज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शहद में मुख्य रूप से फ्रुक्टोज और ग्लूकोज होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन फ्रुक्टोज की मात्रा अधिक होती है, जो इसे इसका विशिष्ट मीठा स्वाद देती है।"
    },
    {
        question: "प्रश्न 11. कीटों के बाह्य कंकाल (Exoskeleton) में कौन सा पॉलीसेकेराइड पाया जाता है?",
        answers: shuffle([
            { text: "सेलूलोज", correct: false },
            { text: "काइटिन", correct: true },
            { text: "लिग्निन", correct: false },
            { text: "पेक्टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काइटिन एक संरचनात्मक पॉलीसेकेराइड है जो कीटों, मकड़ियों और क्रस्टेशियंस के बाह्य कंकाल तथा कवक की कोशिका भित्ति का निर्माण करता है।"
    },
    {
        question: "प्रश्न 12. आलू में प्रचुर मात्रा में क्या पाया जाता है?",
        answers: shuffle([
            { text: "प्रोटीन", correct: false },
            { text: "वसा", correct: false },
            { text: "स्टार्च (मंड)", correct: true },
            { text: "फ्रुक्टोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आलू एक कंद है जो पौधे के लिए भोजन संग्रहीत करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह भोजन मुख्य रूप से स्टार्च के रूप में होता है।"
    },
    {
        question: "प्रश्न 13. प्रोटीन की मूल इकाई (basic unit) क्या है?",
        answers: shuffle([
            { text: "न्यूक्लियोटाइड", correct: false },
            { text: "अमीनो अम्ल", correct: true },
            { text: "फैटी एसिड", correct: false },
            { text: "ग्लूकोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटीन अमीनो अम्ल नामक छोटी इकाइयों से बने लंबे बहुलक (polymers) होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ये अमीनो अम्ल पेप्टाइड बंधों द्वारा एक-दूसरे से जुड़े रहते हैं।"
    },
    {
        question: "प्रश्न 14. मानव शरीर का 'बिल्डिंग ब्लॉक' (Building Block) किसे कहा जाता है?",
        answers: shuffle([
            { text: "कार्बोहाइड्रेट", correct: false },
            { text: "प्रोटीन", correct: true },
            { text: "वसा", correct: false },
            { text: "विटामिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटीन शरीर की वृद्धि, मरम्मत और नई कोशिकाओं तथा ऊतकों के निर्माण के लिए आवश्यक होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसीलिए इन्हें शरीर का बिल्डिंग ब्लॉक कहा जाता है।"
    },
    {
        question: "प्रश्न 15. एंजाइम मूल रूप से क्या होते हैं?",
        answers: shuffle([
            { text: "कार्बोहाइड्रेट", correct: false },
            { text: "लिपिड", correct: false },
            { text: "प्रोटीन", correct: true },
            { text: "विटामिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग सभी एंजाइम (जैविक उत्प्रेरक) प्रोटीन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो शरीर में रासायनिक अभिक्रियाओं की गति को बढ़ाते हैं।"
    },
    {
        question: "प्रश्न 16. बच्चों में प्रोटीन की कमी से कौन सा रोग होता है?",
        answers: shuffle([
            { text: "स्कर्वी", correct: false },
            { text: "रिकेट्स", correct: false },
            { text: "क्वाशियोरकर", correct: true },
            { text: "बेरी-बेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वाशियोरकर रोग मुख्य रूप से आहार में प्रोटीन की गंभीर कमी के कारण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे बच्चों का विकास रुक जाता है और पेट फूल जाता है।"
    },
    {
        question: "प्रश्न 17. नाखून, बाल और त्वचा में पाया जाने वाला प्रमुख प्रोटीन कौन सा है?",
        answers: shuffle([
            { text: "कोलेजन", correct: false },
            { text: "इलास्टिन", correct: false },
            { text: "केराटिन", correct: true },
            { text: "एक्टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केराटिन एक रेशेदार संरचनात्मक प्रोटीन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बाल, नाखून, सींग और त्वचा की बाहरी परत का निर्माण करता है।"
    },
    {
        question: "प्रश्न 18. रक्त में ऑक्सीजन का परिवहन करने वाला प्रोटीन कौन सा है?",
        answers: shuffle([
            { text: "मायोग्लोबिन", correct: false },
            { text: "हीमोग्लोबिन", correct: true },
            { text: "एल्ब्यूमिन", correct: false },
            { text: "फाइब्रिनोजेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोग्लोबिन लाल रक्त कोशिकाओं में पाया जाने वाला एक प्रोटीन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो फेफड़ों से ऑक्सीजन को शरीर के सभी ऊतकों तक पहुंचाता है।"
    },
    {
        question: "प्रश्न 19. दालों में कौन सा पोषक तत्व प्रचुर मात्रा में होता है?",
        answers: shuffle([
            { text: "वसा", correct: false },
            { text: "प्रोटीन", correct: true },
            { text: "कार्बोहाइड्रेट", correct: false },
            { text: "खनिज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दालें, बीन्स और अन्य फलियां पौधे-आधारित प्रोटीन का एक उत्कृष्ट स्रोत हैं।"
    },
    {
        question: "प्रश्न 20. दो अमीनो अम्लों को जोड़ने वाले बंध को क्या कहते हैं?",
        answers: shuffle([
            { text: "ग्लाइकोसिडिक बंध", correct: false },
            { text: "पेप्टाइड बंध", correct: true },
            { text: "हाइड्रोजन बंध", correct: false },
            { text: "एस्टर बंध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक अमीनो अम्ल का कार्बोक्सिल समूह दूसरे अमीनो अम्ल के अमीनो समूह के साथ जुड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो पेप्टाइड बंध का निर्माण होता है।"
    },
    {
        question: "प्रश्न 21. निम्नलिखित में से कौन सा एक आवश्यक अमीनो अम्ल (Essential Amino Acid) है?",
        answers: shuffle([
            { text: "एलेनिन", correct: false },
            { text: "ग्लाइसिन", correct: false },
            { text: "लाइसिन", correct: true },
            { text: "प्रोलाइन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवश्यक अमीनो अम्ल वे होते हैं जिनका निर्माण हमारा शरीर नहीं कर सकता और उन्हें भोजन के माध्यम से लेना अनिवार्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  लाइसिन उनमें से एक है।"
    },
    {
        question: "प्रश्न 22. शरीर में सबसे प्रचुर मात्रा में पाया जाने वाला प्रोटीन कौन सा है?",
        answers: shuffle([
            { text: "केराटिन", correct: false },
            { text: "हीमोग्लोबिन", correct: false },
            { text: "कोलेजन", correct: true },
            { text: "एल्ब्यूमिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलेजन एक संरचनात्मक प्रोटीन है जो त्वचा, हड्डियों, टेंडन, लिगामेंट्स और संयोजी ऊतकों का मुख्य घटक है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह शरीर का लगभग 30% प्रोटीन बनाता है।"
    },
    {
        question: "प्रश्न 23. सोयाबीन में सबसे अधिक क्या पाया जाता है?",
        answers: shuffle([
            { text: "कार्बोहाइड्रेट", correct: false },
            { text: "वसा", correct: false },
            { text: "प्रोटीन", correct: true },
            { text: "विटामिन सी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोयाबीन को पौधे-आधारित प्रोटीन का सबसे समृद्ध स्रोत माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसमें लगभग 40% प्रोटीन होता है।"
    },
    {
        question: "प्रश्न 24. दूध का सफेद रंग किस प्रोटीन के कारण होता है?",
        answers: shuffle([
            { text: "लैक्टोज", correct: false },
            { text: "केसीन", correct: true },
            { text: "एल्ब्यूमिन", correct: false },
            { text: "कैरोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केसीन दूध में पाया जाने वाला मुख्य प्रोटीन है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसके कण प्रकाश को बिखेरते हैं, जिससे दूध का रंग सफेद दिखाई देता है।"
    },
    {
        question: "प्रश्न 25. वसा की मूल इकाई क्या है?",
        answers: shuffle([
            { text: "अमीनो अम्ल", correct: false },
            { text: "ग्लूकोज", correct: false },
            { text: "ग्लिसरॉल और वसीय अम्ल (फैटी एसिड)", correct: true },
            { text: "न्यूक्लियोटाइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वसा (ट्राइग्लिसराइड्स) ग्लिसरॉल के एक अणु और वसीय अम्ल के तीन अणुओं से मिलकर बनती है।"
    },
    {
        question: "प्रश्न 26. निम्नलिखित में से कौन सा विटामिन वसा में घुलनशील है?",
        answers: shuffle([
            { text: "विटामिन C", correct: false },
            { text: "विटामिन B12", correct: false },
            { text: "विटामिन K", correct: true },
            { text: "विटामिन B6", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विटामिन A, D, E और K वसा में घुलनशील होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि विटामिन B कॉम्प्लेक्स और विटामिन C जल में घुलनशील होते हैं।"
    },
    {
        question: "प्रश्न 27. शरीर में ऊर्जा का दीर्घकालिक भंडारण स्रोत क्या है?",
        answers: shuffle([
            { text: "प्रोटीन", correct: false },
            { text: "ग्लाइकोजन", correct: false },
            { text: "वसा", correct: true },
            { text: "ग्लूकोज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वसा कार्बोहाइड्रेट और प्रोटीन की तुलना में प्रति ग्राम दोगुनी से अधिक ऊर्जा प्रदान करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और शरीर में ऊर्जा के लिए लंबे समय तक संग्रहीत रहती है।"
    },
    {
        question: "प्रश्न 28. संतृप्त वसा (Saturated Fat) का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "जैतून का तेल", correct: false },
            { text: "सूरजमुखी का तेल", correct: false },
            { text: "मछली का तेल", correct: false },
            { text: "मक्खन और घी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संतृप्त वसा मुख्य रूप से जंतु स्रोतों जैसे मक्खन, घी, मांस और डेयरी उत्पादों में पाई जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह कमरे के तापमान पर ठोस होती है।"
    },
    {
        question: "प्रश्न 29. कोशिका झिल्ली (Cell Membrane) का मुख्य लिपिड घटक क्या है?",
        answers: shuffle([
            { text: "ट्राइग्लिसराइड", correct: false },
            { text: "कोलेस्ट्रॉल", correct: false },
            { text: "फॉस्फोलिपिड", correct: true },
            { text: "मोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका झिल्ली मुख्य रूप से फॉस्फोलिपिड की दोहरी परत (बाईलेयर) से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो इसकी संरचना और कार्य के लिए महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 30. निम्नलिखित में से कौन सा एक असंतृप्त वसीय अम्ल (Unsaturated Fatty Acid) है?",
        answers: shuffle([
            { text: "पामिटिक एसिड", correct: false },
            { text: "स्टीयरिक एसिड", correct: false },
            { text: "ओलिक एसिड", correct: true },
            { text: "मिरिस्टिक एसिड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओलिक एसिड एक मोनोअनसैचुरेटेड फैटी एसिड है जो जैतून के तेल में प्रचुर मात्रा में पाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  असंतृप्त वसीय अम्लों में एक या अधिक दोहरे बंध होते हैं।"
    },
    {
        question: "प्रश्न 31. 'खराब कोलेस्ट्रॉल' (Bad Cholesterol) किसे कहा जाता है?",
        answers: shuffle([
            { text: "HDL (हाई-डेंसिटी लिपोप्रोटीन)", correct: false },
            { text: "LDL (लो-डेंसिटी लिपोप्रोटीन)", correct: true },
            { text: "VLDL (वेरी लो-डेंसिटी लिपोप्रोटीन)", correct: false },
            { text: "ट्राइग्लिसराइड्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> LDL कोलेस्ट्रॉल को धमनियों की दीवारों पर जमा कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे प्लाक बनता है और हृदय रोग का खतरा बढ़ता है।"
    },
    {
        question: "प्रश्न 32. 'अच्छा कोलेस्ट्रॉल' (Good Cholesterol) किसे कहा जाता है?",
        answers: shuffle([
            { text: "HDL (हाई-डेंसिटी लिपोप्रोटीन)", correct: true },
            { text: "LDL (लो-डेंसिटी लिपोप्रोटीन)", correct: false },
            { text: "ट्राइग्लिसराइड्स", correct: false },
            { text: "संतृप्त वसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> HDL रक्त से अतिरिक्त कोलेस्ट्रॉल को हटाकर वापस यकृत में ले जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे हृदय रोग का खतरा कम होता है।"
    },
    {
        question: "प्रश्न 33. पौधों से प्राप्त होने वाली वसा आमतौर पर कैसी होती है?",
        answers: shuffle([
            { text: "संतृप्त और ठोस", correct: false },
            { text: "असंतृप्त और तरल", correct: true },
            { text: "संतृप्त और तरल", correct: false },
            { text: "असंतृप्त और ठोस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश वानस्पतिक तेल (जैसे सूरजमुखी, सरसों, जैतून का तेल) असंतृप्त वसा से भरपूर होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और कमरे के तापमान पर तरल रहते हैं।"
    },
    {
        question: "प्रश्न 34. त्वचा के नीचे जमा वसा का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रोटीन का संश्लेषण", correct: false },
            { text: "रक्त का उत्पादन", correct: false },
            { text: "शरीर के ताप को नियंत्रित करना", correct: true },
            { text: "विटामिन C का भंडारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> त्वचा के नीचे जमा वसा की परत एक इन्सुलेटर के रूप में कार्य करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो शरीर की गर्मी को बाहर निकलने से रोकती है और शरीर को गर्म रखती है।"
    },
    {
        question: "प्रश्न 35. वनस्पति तेलों को वनस्पति घी में किस प्रक्रिया द्वारा बदला जाता है?",
        answers: shuffle([
            { text: "ऑक्सीकरण", correct: false },
            { text: "हाइड्रोजनीकरण", correct: true },
            { text: "साबुनीकरण", correct: false },
            { text: "संघनन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोजनीकरण प्रक्रिया में, निकेल उत्प्रेरक की उपस्थिति में वनस्पति तेलों (असंतृप्त वसा) से हाइड्रोजन गुजारी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे वे संतृप्त होकर ठोस वनस्पति घी में बदल जाते हैं।"
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