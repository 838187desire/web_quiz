const questions = [
    {
        topHeading: "ध्वनि तरंग पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. ध्वनि तरंगें किस प्रकार की तरंगें हैं?",
        answers: shuffle([
            { text: "अनुप्रस्थ", correct: false },
            { text: "विद्युतचुंबकीय", correct: false },
            { text: "अनुदैर्ध्य", correct: true },
            { text: "ध्रुवित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंगों में माध्यम के कण तरंग संचरण की दिशा के समानांतर कंपन करते हैं, इसलिए ये अनुदैर्ध्य तरंगें हैं।"
    },
    {
        question: "प्रश्न 2. ध्वनि तरंगों के संचरण के लिए किसकी आवश्यकता होती है?",
        answers: shuffle([
            { text: "निर्वात", correct: false },
            { text: "माध्यम", correct: true },
            { text: "प्रकाश", correct: false },
            { text: "ऊष्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि एक यांत्रिक तरंग है, जिसे यात्रा करने के लिए ठोस, द्रव या गैस जैसे किसी भौतिक माध्यम की आवश्यकता होती है।"
    },
    {
        question: "प्रश्न 3. ध्वनि तरंगें किसमें यात्रा नहीं कर सकती हैं?",
        answers: shuffle([
            { text: "ठोस", correct: false },
            { text: "द्रव", correct: false },
            { text: "गैस", correct: false },
            { text: "निर्वात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निर्वात में कोई कण नहीं होते हैं, इसलिए ध्वनि के कंपन आगे नहीं बढ़ सकते हैं।"
    },
    {
        question: "प्रश्न 4. ध्वनि की चाल किस माध्यम में अधिकतम होती है?",
        answers: shuffle([
            { text: "गैस", correct: false },
            { text: "द्रव", correct: false },
            { text: "ठोस", correct: true },
            { text: "निर्वात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ठोस पदार्थों के कण बहुत पास-पास और मजबूती से बंधे होते हैं, जिससे वे कंपनों को बहुत तेजी से स्थानांतरित करते हैं।"
    },
    {
        question: "प्रश्न 5. अनुदैर्ध्य तरंगों में कणों के पास-पास आने की घटना क्या कहलाती है?",
        answers: shuffle([
            { text: "विरलन", correct: false },
            { text: "शृंग", correct: false },
            { text: "गर्त", correct: false },
            { text: "संपीडन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संपीडन एक उच्च दाब और उच्च घनत्व का क्षेत्र है जहाँ माध्यम के कण एक साथ संकुचित होते हैं।"
    },
    {
        question: "प्रश्न 6. अनुदैर्ध्य तरंगों में कणों के दूर-दूर होने की घटना क्या कहलाती है?",
        answers: shuffle([
            { text: "संपीडन", correct: false },
            { text: "शृंग", correct: false },
            { text: "विरलन", correct: true },
            { text: "गर्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विरलन एक निम्न दाब और निम्न घनत्व का क्षेत्र है जहाँ माध्यम के कण फैल जाते हैं।"
    },
    {
        question: "प्रश्न 7. ध्वनि की प्रबलता (Loudness) किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "आवृत्ति", correct: false },
            { text: "तरंगदैर्घ्य", correct: false },
            { text: "आयाम", correct: true },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि की प्रबलता तरंग के आयाम (Amplitude) के वर्ग के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अधिक आयाम का अर्थ है अधिक प्रबल ध्वनि।"
    },
    {
        question: "प्रश्न 8. ध्वनि का तारत्व (Pitch) किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "आयाम", correct: false },
            { text: "वेग", correct: false },
            { text: "आवृत्ति", correct: true },
            { text: "तरंगदैर्घ्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि का तारत्व, यानी आवाज का मोटा या पतला होना, उसकी आवृत्ति (Frequency) पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च आवृत्ति का अर्थ है उच्च तारत्व (पतली आवाज)।"
    },
    {
        question: "प्रश्न 9. मनुष्य के लिए श्रव्य आवृत्ति परास (Audible Range) क्या है?",
        answers: shuffle([
            { text: "20 हर्ट्ज से कम", correct: false },
            { text: "20,000 हर्ट्ज से अधिक", correct: false },
            { text: "20 हर्ट्ज से 20,000 हर्ट्ज", correct: true },
            { text: "0 हर्ट्ज से 20 हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सामान्य मनुष्य लगभग 20 हर्ट्ज से 20 किलोहर्ट्ज (20,000 हर्ट्ज) तक की आवृत्ति वाली ध्वनि को सुन सकता है।"
    },
    {
        question: "प्रश्न 10. 20,000 हर्ट्ज से अधिक आवृत्ति वाली ध्वनि तरंगों को क्या कहते हैं?",
        answers: shuffle([
            { text: "अवश्रव्य", correct: false },
            { text: "श्रव्य", correct: false },
            { text: "पराश्रव्य", correct: true },
            { text: "रेडियो तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 20,000 हर्ट्ज से अधिक आवृत्ति की ध्वनि को पराश्रव्य (Ultrasonic) ध्वनि कहते हैं, जिसे मनुष्य नहीं सुन सकते।"
    },
    {
        question: "प्रश्न 11. 20 हर्ट्ज से कम आवृत्ति वाली ध्वनि तरंगों को क्या कहते हैं?",
        answers: shuffle([
            { text: "पराश्रव्य", correct: false },
            { text: "श्रव्य", correct: false },
            { text: "अवश्रव्य", correct: true },
            { text: "सूक्ष्म तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 20 हर्ट्ज से कम आवृत्ति की ध्वनि को अवश्रव्य (Infrasonic) ध्वनि कहते हैं।"
    },
    {
        question: "प्रश्न 12. ध्वनि तरंगों का परावर्तन क्या कहलाता है?",
        answers: shuffle([
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: false },
            { text: "प्रतिध्वनि (Echo)", correct: true },
            { text: "व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब ध्वनि तरंगें किसी सतह से टकराकर वापस लौटती हैं, तो इस परावर्तित ध्वनि को प्रतिध्वनि कहते हैं।"
    },
    {
        question: "प्रश्न 13. एक स्पष्ट प्रतिध्वनि सुनने के लिए, ध्वनि स्रोत और परावर्तक सतह के बीच न्यूनतम दूरी कितनी होनी चाहिए?",
        answers: shuffle([
            { text: "10 मीटर", correct: false },
            { text: "17 मीटर", correct: true },
            { text: "25 मीटर", correct: false },
            { text: "50 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारे मस्तिष्क में ध्वनि की संवेदना लगभग 0.1 सेकंड तक बनी रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस समय में ध्वनि द्वारा तय की गई दूरी का आधा लगभग 17.2 मीटर होता है।"
    },
    {
        question: "प्रश्न 14. ध्वनि के बार-बार परावर्तन के कारण ध्वनि का बना रहना क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रतिध्वनि", correct: false },
            { text: "अनुरणन (Reverberation)", correct: true },
            { text: "विवर्तन", correct: false },
            { text: "अपवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बड़े हॉल या सभागारों में, ध्वनि स्रोत के बंद होने के बाद भी ध्वनि बार-बार परावर्तन के कारण कुछ समय तक बनी रहती है, जिसे अनुरणन कहते हैं।"
    },
    {
        question: "प्रश्न 15. सोनार (SONAR) में किन तरंगों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "अवश्रव्य", correct: false },
            { text: "श्रव्य", correct: false },
            { text: "पराश्रव्य", correct: true },
            { text: "रेडियो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोनार (Sound Navigation And Ranging) पानी के नीचे वस्तुओं का पता लगाने के लिए पराश्रव्य ध्वनि तरंगों का उपयोग करता है।"
    },
    {
        question: "प्रश्न 16. जब कोई ध्वनि स्रोत प्रेक्षक की ओर आता है, तो ध्वनि की आवृत्ति बढ़ी हुई क्यों प्रतीत होती है?",
        answers: shuffle([
            { text: "अनुरणन के कारण", correct: false },
            { text: "डॉप्लर प्रभाव के कारण", correct: true },
            { text: "व्यतिकरण के कारण", correct: false },
            { text: "विवर्तन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्रोत और प्रेक्षक के बीच सापेक्ष गति के कारण ध्वनि की आवृत्ति में होने वाले आभासी परिवर्तन को डॉप्लर प्रभाव कहते हैं।"
    },
    {
        question: "प्रश्न 17. ध्वनि की चाल पर दाब का क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "दाब बढ़ने से चाल बढ़ती है।", correct: false },
            { text: "दाब बढ़ने से चाल घटती है।", correct: false },
            { text: "कोई प्रभाव नहीं पड़ता (यदि तापमान स्थिर हो)।", correct: true },
            { text: "चाल शून्य हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी गैस में ध्वनि की चाल उसके दाब पर निर्भर नहीं करती है, क्योंकि दाब बढ़ने पर घनत्व भी उसी अनुपात में बढ़ जाता है।"
    },
    {
        question: "प्रश्न 18. हवा में ध्वनि की चाल पर तापमान का क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "तापमान बढ़ने से चाल बढ़ती है।", correct: true },
            { text: "तापमान बढ़ने से चाल घटती है।", correct: false },
            { text: "कोई प्रभाव नहीं पड़ता।", correct: false },
            { text: "चाल दोगुनी हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवा का तापमान बढ़ने पर उसके अणुओं की गति बढ़ जाती है, जिससे वे कंपनों को तेजी से स्थानांतरित करते हैं और ध्वनि की चाल बढ़ जाती है।"
    },
    {
        question: "प्रश्न 19. हवा में ध्वनि की चाल पर आर्द्रता (humidity) का क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "आर्द्रता बढ़ने से चाल घटती है।", correct: false },
            { text: "आर्द्रता बढ़ने से चाल बढ़ती है।", correct: true },
            { text: "कोई प्रभाव नहीं पड़ता।", correct: false },
            { text: "चाल आधी हो जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नम हवा का घनत्व शुष्क हवा से कम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> घनत्व कम होने के कारण नम हवा में ध्वनि की चाल बढ़ जाती है।"
    },
    {
        question: "प्रश्न 20. ध्वनि की प्रबलता को मापने की इकाई क्या है?",
        answers: shuffle([
            { text: "हर्ट्ज", correct: false },
            { text: "मीटर", correct: false },
            { text: "डेसिबल", correct: true },
            { text: "सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि की तीव्रता या प्रबलता के स्तर को डेसिबल (dB) में मापा जाता है, जो एक लघुगणकीय पैमाना है।"
    },
    {
        question: "प्रश्न 21. 'मैक संख्या' (Mach Number) का उपयोग किसकी गति को मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "प्रकाश", correct: false },
            { text: "जलयान", correct: false },
            { text: "ध्वनि", correct: false },
            { text: "अतिध्वनिक (Supersonic) विमान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैक संख्या किसी वस्तु की गति और उस माध्यम में ध्वनि की गति का अनुपात है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका उपयोग विशेष रूप से विमानों की गति के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 22. जब किसी वस्तु की गति ध्वनि की गति से अधिक होती है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "अवश्रव्य", correct: false },
            { text: "पराश्रव्य", correct: false },
            { text: "अध्वनिक (Subsonic)", correct: false },
            { text: "पराध्वनिक (Supersonic)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि की गति से तेज चलने वाली वस्तुओं को पराध्वनिक या सुपरसोनिक कहा जाता है।"
    },
    {
        question: "प्रश्न 23. ध्वनि की गुणता (Timbre/Quality) किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल मूल आवृत्ति पर", correct: false },
            { text: "केवल आयाम पर", correct: false },
            { text: "तरंग के आकार (अधिस्वरकों की उपस्थिति) पर", correct: true },
            { text: "ध्वनि के वेग पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुणता हमें समान तारत्व और प्रबलता वाली दो ध्वनियों (जैसे सितार और वायलिन) के बीच अंतर करने में मदद करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ध्वनि में मौजूद विभिन्न सनादियों (harmonics) पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 24. जब दो ध्वनि तरंगें मिलती हैं, तो ऊर्जा का पुनर्वितरण क्या कहलाता है?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: false },
            { text: "व्यतिकरण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यतिकरण (Interference) वह घटना है जिसमें दो या दो से अधिक तरंगें मिलकर एक नई तरंग बनाती हैं जिसका आयाम भिन्न हो सकता है।"
    },
    {
        question: "प्रश्न 25. एक बंद ऑर्गन पाइप में किस प्रकार की सनादियाँ (harmonics) उत्पन्न होती हैं?",
        answers: shuffle([
            { text: "केवल सम सनादियाँ", correct: false },
            { text: "केवल विषम सनादियाँ", correct: true },
            { text: "सम और विषम दोनों", correct: false },
            { text: "कोई सनादी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सिरे पर बंद पाइप में केवल मूल आवृत्ति की विषम गुणज (जैसे 1, 3, 5, ...) वाली सनादियाँ ही संभव हैं।"
    },
    {
        question: "प्रश्न 26. एक खुले ऑर्गन पाइप में किस प्रकार की सनादियाँ उत्पन्न होती हैं?",
        answers: shuffle([
            { text: "केवल सम सनादियाँ", correct: false },
            { text: "केवल विषम सनादियाँ", correct: false },
            { text: "सभी सनादियाँ (सम और विषम दोनों)", correct: true },
            { text: "कोई सनादी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों सिरों पर खुले पाइप में मूल आवृत्ति की सभी पूर्णांक गुणज (1, 2, 3, 4, ...) वाली सनादियाँ संभव हैं।"
    },
    {
        question: "प्रश्न 27. ध्वनि का कौन सा गुण एक कमरे के कोने में बैठे व्यक्ति को दूसरे कोने से आने वाली आवाज सुनने में मदद करता है?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: true },
            { text: "व्यतिकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विवर्तन (Diffraction) के कारण ध्वनि तरंगें दरवाजों या कोनों जैसे अवरोधों के किनारों से मुड़ जाती हैं और फैल जाती हैं।"
    },
    {
        question: "प्रश्न 28. स्टेथोस्कोप ध्वनि के किस सिद्धांत पर कार्य करता है?",
        answers: shuffle([
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: false },
            { text: "व्यतिकरण", correct: false },
            { text: "बहु-परावर्तन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेथोस्कोप में, शरीर के अंदर की ध्वनि ट्यूब के भीतर बार-बार परावर्तित होकर डॉक्टर के कानों तक पहुँचती है।"
    },
    {
        question: "प्रश्न 29. बादलों की गड़गड़ाहट की आवाज बिजली की चमक के कुछ देर बाद क्यों सुनाई देती है?",
        answers: shuffle([
            { text: "क्योंकि ध्वनि की गति प्रकाश की गति से बहुत कम होती है।", correct: true },
            { text: "क्योंकि प्रकाश की गति ध्वनि की गति से बहुत कम होती है।", correct: false },
            { text: "क्योंकि बादल बहुत दूर होते हैं।", correct: false },
            { text: "क्योंकि ध्वनि को यात्रा करने में समय नहीं लगता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश लगभग तुरंत हम तक पहुँच जाता है, जबकि ध्वनि को वही दूरी तय करने में काफी अधिक समय लगता है।"
    },
    {
        question: "प्रश्न 30. सितार या गिटार का तार खींचने पर, तार में उत्पन्न तरंगें होती हैं:",
        answers: shuffle([
            { text: "अनुदैर्ध्य", correct: false },
            { text: "अनुप्रस्थ", correct: true },
            { text: "विद्युतचुंबकीय", correct: false },
            { text: "पराश्रव्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तार के कण तार की लंबाई के लंबवत कंपन करते हैं, जिससे अनुप्रस्थ तरंगें उत्पन्न होती हैं।"
    },
    {
        question: "प्रश्न 31. पिछले प्रश्न में, तार से हवा में जाने वाली ध्वनि तरंगें होती हैं:",
        answers: shuffle([
            { text: "अनुदैर्ध्य", correct: true },
            { text: "अनुप्रस्थ", correct: false },
            { text: "विद्युतचुंबकीय", correct: false },
            { text: "पराश्रव्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तार के कंपन हवा के कणों को संपीड़ित और विरलित करते हैं, जिससे हवा में अनुदैर्ध्य ध्वनि तरंगें उत्पन्न होती हैं।"
    },
    {
        question: "प्रश्न 32. ध्वनि प्रदूषण को किस इकाई में मापा जाता है?",
        answers: shuffle([
            { text: "हर्ट्ज", correct: false },
            { text: "डेसिबल", correct: true },
            { text: "मीटर", correct: false },
            { text: "पास्कल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवांछित और अत्यधिक प्रबल ध्वनि (शोर) के स्तर को डेसिबल (dB) में मापा जाता है।"
    },
    {
        question: "प्रश्न 33. पानी के अंदर ध्वनि को रिकॉर्ड करने के लिए किस उपकरण का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "माइक्रोफोन", correct: false },
            { text: "हाइड्रोफोन", correct: true },
            { text: "सोनार", correct: false },
            { text: "ऑडियोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोफोन एक विशेष प्रकार का माइक्रोफोन है जिसे पानी के नीचे काम करने के लिए डिज़ाइन किया गया है।"
    },
    {
        question: "प्रश्न 34. किसी वाद्ययंत्र की आवृत्ति को समायोजित करने की प्रक्रिया को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रवर्धन (Amplification)", correct: false },
            { text: "समस्वरण (Tuning)", correct: true },
            { text: "मॉडुलन (Modulation)", correct: false },
            { text: "विरूपण (Distortion)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समस्वरण या ट्यूनिंग में वाद्ययंत्र के घटकों (जैसे तार का तनाव) को समायोजित किया जाता है ताकि वह सही आवृत्ति (नोट) उत्पन्न करे।"
    },
    {
        question: "प्रश्न 35. यदि एक ध्वनि तरंग की आवृत्ति 500 हर्ट्ज है और तरंगदैर्घ्य 2 मीटर है, तो उसकी चाल क्या होगी?",
        answers: shuffle([
            { text: "250 मीटर/सेकंड", correct: false },
            { text: "500 मीटर/सेकंड", correct: false },
            { text: "1000 मीटर/सेकंड", correct: true },
            { text: "2000 मीटर/सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल = आवृत्ति × तरंगदैर्घ्य<br><br><i class='fa-solid fa-angles-right icon'></i> = 500 हर्ट्ज × 2 मीटर = 1000 मीटर/सेकंड।"
    },
    {
        question: "प्रश्न 36. ध्वनि का कौन सा गुण पुरुषों और महिलाओं की आवाज में अंतर करने में मदद करता है?",
        answers: shuffle([
            { text: "केवल प्रबलता", correct: false },
            { text: "तारत्व", correct: true },
            { text: "केवल वेग", correct: false },
            { text: "केवल तरंगदैर्घ्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमतौर पर, महिलाओं की आवाज की मूल आवृत्ति पुरुषों की तुलना में अधिक होती है, जिससे उनकी आवाज का तारत्व अधिक (पतला) होता है।"
    },
    {
        question: "प्रश्न 37. किसी माध्यम में ध्वनि की चाल निर्भर करती है:",
        answers: shuffle([
            { text: "केवल माध्यम के घनत्व पर", correct: false },
            { text: "केवल माध्यम की प्रत्यास्थता पर", correct: false },
            { text: "माध्यम की प्रत्यास्थता और घनत्व दोनों पर", correct: true },
            { text: "स्रोत की आवृत्ति पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि की चाल माध्यम की प्रत्यास्थता (कठोरता) के समानुपाती और घनत्व के व्युत्क्रमानुपाती होती है।"
    },
    {
        question: "प्रश्न 38. 'शॉक वेव' (Shock Wave) का निर्माण कब होता है?",
        answers: shuffle([
            { text: "जब कोई वस्तु ध्वनि की गति से धीरे चलती है।", correct: false },
            { text: "जब कोई वस्तु ध्वनि की गति से तेज चलती है।", correct: true },
            { text: "जब ध्वनि निर्वात में चलती है।", correct: false },
            { text: "जब ध्वनि परावर्तित होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पराध्वनिक गति से चलने वाली वस्तुएं अपने आगे ध्वनि तरंगों का एक शंकु बनाती हैं जिसे शॉक वेव कहते हैं, जो 'सोनिक बूम' के रूप में सुनाई देता है।"
    },
    {
        question: "प्रश्न 39. समुद्र की गहराई मापने के लिए सोनार द्वारा भेजी गई पराश्रव्य तरंग यदि 4 सेकंड बाद वापस आती है, तो गहराई कितनी होगी? (पानी में ध्वनि की चाल = 1500 मी/से)",
        answers: shuffle([
            { text: "1500 मीटर", correct: false },
            { text: "3000 मीटर", correct: true },
            { text: "6000 मीटर", correct: false },
            { text: "750 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तरंग द्वारा तय की गई कुल दूरी = चाल × समय = 1500 × 4 = 6000 मीटर।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दूरी नीचे जाने और वापस आने की है, इसलिए गहराई इसकी आधी, यानी 3000 मीटर होगी।"
    },
    {
        question: "प्रश्न 40. किसी ध्वनि तरंग का आवर्त काल 0.02 सेकंड है। इसकी आवृत्ति क्या होगी?",
        answers: shuffle([
            { text: "20 हर्ट्ज", correct: false },
            { text: "50 हर्ट्ज", correct: true },
            { text: "100 हर्ट्ज", correct: false },
            { text: "200 हर्ट्ज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवृत्ति = 1 / आवर्त काल = 1 / 0.02 = 50 हर्ट्ज।"
    },
    {
        question: "प्रश्न 41. ध्वनि तरंगें किस प्रकार का विरूपण उत्पन्न करती हैं?",
        answers: shuffle([
            { text: "केवल अपरूपण (Shear)", correct: false },
            { text: "केवल आयतन (Bulk)", correct: true },
            { text: "अपरूपण और आयतन दोनों", correct: false },
            { text: "कोई विरूपण नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंगें माध्यम को संपीड़ित और विरलित करके उसके आयतन में परिवर्तन करती हैं।"
    },
    {
        question: "प्रश्न 42. कौन सा जानवर अपने शरीर के अंगों को रगड़कर 'चहचहाने' (stridulation) की ध्वनि उत्पन्न करता है?",
        answers: shuffle([
            { text: "पक्षी", correct: false },
            { text: "मेंढक", correct: false },
            { text: "झींगुर", correct: true },
            { text: "चमगादड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> झींगुर अपने पंखों को एक-दूसरे पर रगड़कर ध्वनि उत्पन्न करते हैं, इस प्रक्रिया को स्ट्रीड्युलेशन कहते हैं।"
    },
    {
        question: "प्रश्न 43. फुसफुसाहट का सामान्य डेसिबल स्तर क्या होता है?",
        answers: shuffle([
            { text: "0 डेसिबल", correct: false },
            { text: "30 डेसिबल", correct: true },
            { text: "60 डेसिबल", correct: false },
            { text: "90 डेसिबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सामान्य फुसफुसाहट लगभग 30 डेसिबल की होती है, जबकि सामान्य बातचीत लगभग 60 डेसिबल की होती है।"
    },
    {
        question: "प्रश्न 44. संगीत के 'नोट्स' (notes) को उनकी किस विशेषता से पहचाना जाता है?",
        answers: shuffle([
            { text: "प्रबलता", correct: false },
            { text: "आवृत्ति", correct: true },
            { text: "गुणता", correct: false },
            { text: "वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संगीत में प्रत्येक नोट (जैसे सा, रे, गा, मा) की एक विशिष्ट मूल आवृत्ति होती है।"
    },
    {
        question: "प्रश्न 45. रेलवे स्टेशनों पर उद्घोषणा के लिए किस प्रकार के लाउडस्पीकर का उपयोग किया जाता है ताकि ध्वनि दूर तक जाए?",
        answers: shuffle([
            { text: "छोटे स्पीकर", correct: false },
            { text: "हॉर्न लाउडस्पीकर", correct: true },
            { text: "सबवूफर", correct: false },
            { text: "ट्वीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हॉर्न लाउडस्पीकर ध्वनि को एक दिशा में केंद्रित करते हैं, जिससे उसकी तीव्रता बढ़ती है और वह कम बिखराव के साथ दूर तक यात्रा करती है।"
    },
    {
        question: "प्रश्न 46. क्या ध्वनि तरंगों का ध्रुवीकरण किया जा सकता है?",
        answers: shuffle([
            { text: "हाँ", correct: false },
            { text: "नहीं", correct: true },
            { text: "केवल पानी में", correct: false },
            { text: "केवल ठोस में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुवीकरण केवल अनुप्रस्थ तरंगों का गुण है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि ध्वनि तरंगें अनुदैर्ध्य होती हैं, उनका ध्रुवीकरण नहीं किया जा सकता।"
    },
    {
        question: "प्रश्न 47. एक तनी हुई डोरी में अनुप्रस्थ तरंग की चाल किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल डोरी की लंबाई पर", correct: false },
            { text: "केवल डोरी के द्रव्यमान पर", correct: false },
            { text: "डोरी में तनाव और उसके रैखिक घनत्व पर", correct: true },
            { text: "कंपन के आयाम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाल, तनाव के वर्गमूल के समानुपाती और रैखिक घनत्व (द्रव्यमान प्रति इकाई लंबाई) के वर्गमूल के व्युत्क्रमानुपाती होती है।"
    },
    {
        question: "प्रश्न 48. 'विस्पंद' (Beats) की घटना कब होती है?",
        answers: shuffle([
            { text: "जब दो समान आवृत्ति की तरंगें मिलती हैं।", correct: false },
            { text: "जब दो लगभग समान आवृत्ति की तरंगें मिलती हैं।", correct: true },
            { text: "जब एक तरंग परावर्तित होती है।", correct: false },
            { text: "जब एक तरंग विवर्तित होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब थोड़ी भिन्न आवृत्तियों वाली दो ध्वनि तरंगें व्यतिकरण करती हैं, तो परिणामी ध्वनि की प्रबलता में एक आवर्ती उतार-चढ़ाव होता है, जिसे विस्पंद कहते हैं।"
    },
    {
        question: "प्रश्न 49. मनुष्यों में, ध्वनि कहाँ उत्पन्न होती है?",
        answers: shuffle([
            { text: "फेफड़ों में", correct: false },
            { text: "मुँह में", correct: false },
            { text: "कंठ (Larynx) में", correct: true },
            { text: "कानों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कंठ या स्वरयंत्र में मौजूद वाक् रज्जुओं (vocal cords) के कंपन से ध्वनि उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 50. एक बंद कमरे में ध्वनि का स्रोत बंद करने पर भी कुछ देर तक सुनाई देना किसका परिणाम है?",
        answers: shuffle([
            { text: "प्रतिध्वनि", correct: false },
            { text: "डॉप्लर प्रभाव", correct: false },
            { text: "अनुरणन", correct: true },
            { text: "विवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दीवारों, छत और फर्श से होने वाले बार-बार के परावर्तनों के कारण होता है।"
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