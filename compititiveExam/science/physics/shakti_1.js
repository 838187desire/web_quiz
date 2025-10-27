const questions = [
    {
        topHeading: "शक्ति पर आधारित 50 बहुविकल्पीय प्रश्न ,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. कार्य करने की दर को क्या कहते हैं?",
        answers: shuffle([
            { text: "ऊर्जा", correct: false },
            { text: "शक्ति", correct: true },
            { text: "बल", correct: false },
            { text: "संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिकी में, कार्य करने की दर या ऊर्जा के स्थानांतरण की दर को शक्ति कहते हैं।"
    },
    {
        question: "प्रश्न 2. शक्ति का S.I. मात्रक क्या है?",
        answers: shuffle([
            { text: "जूल", correct: false },
            { text: "न्यूटन", correct: false },
            { text: "वाट", correct: true },
            { text: "पास्कल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति का अंतर्राष्ट्रीय मात्रक (S.I. unit) वाट है, जो एक जूल प्रति सेकंड के बराबर होता है।"
    },
    {
        question: "प्रश्न 3. एक अश्वशक्ति (Horsepower) में कितने वाट होते हैं?",
        answers: shuffle([
            { text: "746 वाट", correct: true },
            { text: "1000 वाट", correct: false },
            { text: "550 वाट", correct: false },
            { text: "786 वाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक अश्वशक्ति (HP) लगभग 746 वाट के बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शक्ति मापने की एक पुरानी और प्रचलित इकाई है।"
    },
    {
        question: "प्रश्न 4. यदि कोई कर्ता 't' समय में 'W' कार्य करता है, तो उसकी शक्ति (P) का सूत्र क्या होगा?",
        answers: shuffle([
            { text: "P=W×t", correct: false },
            { text: "P=W/t", correct: true },
            { text: "P=t/W", correct: false },
            { text: "P=W+t", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति, किए गए कार्य और उस कार्य को करने में लगे समय के अनुपात के बराबर होती है।"
    },
    {
        question: "प्रश्न 5. शक्ति किस प्रकार की राशि है?",
        answers: shuffle([
            { text: "सदिश राशि", correct: false },
            { text: "अदिश राशि", correct: true },
            { text: "प्रदेश राशि", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति एक अदिश राशि है क्योंकि इसमें केवल परिमाण होता है, दिशा नहीं होती।"
    },
    {
        question: "प्रश्न 6. 'वाट' किसके नाम पर रखा गया है?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "जेम्स वाट", correct: true },
            { text: "अल्बर्ट आइंस्टीन", correct: false },
            { text: "गैलीलियो गैलिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति की इकाई 'वाट' का नाम स्कॉटिश आविष्कारक जेम्स वाट के सम्मान में रखा गया है,<br><br><i class='fa-solid fa-angles-right icon'></i> जिन्होंने भाप इंजन के विकास में महत्वपूर्ण योगदान दिया।"
    },
    {
        question: "प्रश्न 7. विद्युत उपकरणों की शक्ति को सामान्यतः किस इकाई में व्यक्त किया जाता है?",
        answers: shuffle([
            { text: "किलोवाट-घंटा", correct: false },
            { text: "जूल", correct: false },
            { text: "वाट या किलोवाट", correct: true },
            { text: "एम्पीयर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल्ब, पंखे, मोटर आदि जैसे विद्युत उपकरणों की शक्ति को वाट (W) या किलोवाट (kW) में मापा जाता है।"
    },
    {
        question: "प्रश्न 8. 1 किलोवाट (kW) कितने वाट के बराबर होता है?",
        answers: shuffle([
            { text: "10 वाट", correct: false },
            { text: "100 वाट", correct: false },
            { text: "1000 वाट", correct: true },
            { text: "10000 वाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'किलो' का अर्थ 1000 होता है, इसलिए 1 किलोवाट 1000 वाट के बराबर है।"
    },
    {
        question: "प्रश्न 9. शक्ति की विमा (Dimension) क्या है?",
        answers: shuffle([
            { text: "[MLT⁻²]", correct: false },
            { text: "[ML²T⁻²]", correct: false },
            { text: "[ML²T⁻³]", correct: true },
            { text: "[MLT⁻¹]", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति = कार्य / समय, और कार्य की विमा [ML²T⁻²] तथा समय की विमा [T] होती है, इसलिए शक्ति की विमा [ML²T⁻³] है।"
    },
    {
        question: "प्रश्न 10. यदि किसी मशीन की शक्ति अधिक है, तो इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "वह मशीन अधिक भारी है।", correct: false },
            { text: "वह मशीन अधिक कार्य कर सकती है।", correct: false },
            { text: "वह मशीन तेजी से कार्य कर सकती है या ऊर्जा रूपांतरित कर सकती है।", correct: true },
            { text: "वह मशीन अधिक समय तक चलती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक शक्ति का अर्थ है कि मशीन प्रति इकाई समय में अधिक कार्य कर सकती है, यानी कार्य करने की दर अधिक है।"
    },
    {
        question: "प्रश्न 11. निम्नलिखित में से कौन शक्ति का मात्रक नहीं है?",
        answers: shuffle([
            { text: "वाट", correct: false },
            { text: "जूल/सेकंड", correct: false },
            { text: "अश्वशक्ति", correct: false },
            { text: "किलोवाट-घंटा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किलोवाट-घंटा (kWh) ऊर्जा का मात्रक है, न कि शक्ति का।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 1 घंटे में 1 किलोवाट की दर से खपत की गई ऊर्जा को दर्शाता है।"
    },
    {
        question: "प्रश्न 12. जब कोई वस्तु एक समान वेग से चलती है, तो उसकी शक्ति किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "केवल वेग पर", correct: false },
            { text: "केवल लगाए गए बल पर", correct: false },
            { text: "बल और वेग दोनों पर", correct: true },
            { text: "वस्तु के द्रव्यमान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति (P) को बल (F) और वेग (v) के अदिश गुणनफल के रूप में भी व्यक्त किया जा सकता है, अर्थात P=F⋅v।"
    },
    {
        question: "प्रश्न 13. एक मेगावाट (MW) कितने वाट के बराबर होता है?",
        answers: shuffle([
            { text: "10³ वाट", correct: false },
            { text: "10⁶ वाट", correct: true },
            { text: "10⁹ वाट", correct: false },
            { text: "10¹² वाट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेगा' का अर्थ दस लाख (10⁶) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 1 मेगावाट = 10,00,000 वाट।"
    },
    {
        question: "प्रश्न 14. एक व्यक्ति दीवार को धकेलता है लेकिन दीवार नहीं हिलती। इस स्थिति में व्यक्ति द्वारा दीवार पर खर्च की गई शक्ति क्या है?",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "शून्य", correct: true },
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि दीवार में कोई विस्थापन नहीं होता है, इसलिए किया गया कार्य शून्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> शक्ति = कार्य/समय, इसलिए शक्ति भी शून्य होगी।"
    },
    {
        question: "प्रश्न 15. वाहनों के इंजन की शक्ति को प्रायः किस इकाई में मापा जाता है?",
        answers: shuffle([
            { text: "वाट", correct: false },
            { text: "किलोवाट", correct: false },
            { text: "अश्वशक्ति (हॉर्सपावर)", correct: true },
            { text: "जूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पारंपरिक रूप से, ऑटोमोबाइल और अन्य इंजनों की शक्ति को अश्वशक्ति (HP) में व्यक्त किया जाता है।"
    },
    {
        question: "प्रश्न 16. शक्ति और ऊर्जा में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "दोनों समान हैं।", correct: false },
            { text: "शक्ति कार्य करने की क्षमता है, जबकि ऊर्जा कार्य करने की दर है।", correct: false },
            { text: "ऊर्जा कार्य करने की क्षमता है, जबकि शक्ति कार्य करने की दर है।", correct: true },
            { text: "शक्ति एक सदिश राशि है और ऊर्जा एक अदिश राशि है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा (Energy) कार्य करने की कुल क्षमता को दर्शाती है, जबकि शक्ति (Power) यह बताती है कि वह कार्य कितनी तेजी से किया जा रहा है।"
    },
    {
        question: "प्रश्न 17. यदि समय को दोगुना कर दिया जाए और किया गया कार्य समान रहे, तो शक्ति पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "दोगुनी हो जाएगी", correct: false },
            { text: "आधी हो जाएगी", correct: true },
            { text: "अपरिवर्तित रहेगी", correct: false },
            { text: "चार गुनी हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि P=W/t, यदि W स्थिर है और t दोगुना हो जाता है, तो शक्ति आधी हो जाएगी।"
    },
    {
        question: "प्रश्न 18. एक वाट-घंटा (Wh) कितने जूल के बराबर होता है?",
        answers: shuffle([
            { text: "3600 जूल", correct: true },
            { text: "360 जूल", correct: false },
            { text: "60 जूल", correct: false },
            { text: "1 जूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1 वाट-घंटा का अर्थ है 1 वाट की शक्ति 1 घंटे (3600 सेकंड) तक।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊर्जा = शक्ति × समय = 1 वाट × 3600 सेकंड = 3600 जूल।"
    },
    {
        question: "प्रश्न 19. घूर्णन गति में शक्ति का सूत्र क्या है (जहाँ τ बल आघूर्ण और ω कोणीय वेग है)?",
        answers: shuffle([
            { text: "P=τ/ω", correct: false },
            { text: "P=τ×ω", correct: true },
            { text: "P=ω/τ", correct: false },
            { text: "P=τ+ω", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रैखिक गति में P=F⋅v के अनुरूप, घूर्णन गति में शक्ति, बल आघूर्ण और कोणीय वेग के गुणनफल के बराबर होती है।"
    },
    {
        question: "प्रश्न 20. किसी विद्युत परिपथ में शक्ति (P) का सूत्र क्या होता है (जहाँ V विभवांतर और I धारा है)?",
        answers: shuffle([
            { text: "P = V / I", correct: false },
            { text: "P = I / V", correct: false },
            { text: "P = V × I", correct: true },
            { text: "P = V + I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत शक्ति, विभवांतर (वोल्टेज) और विद्युत धारा (करंट) के गुणनफल के बराबर होती है।"
    },
    {
        question: "प्रश्न 21. यदि किसी वस्तु पर लगाया गया बल शून्य हो, तो उस पर खर्च की गई शक्ति क्या होगी?",
        answers: shuffle([
            { text: "अनंत", correct: false },
            { text: "इकाई", correct: false },
            { text: "शून्य", correct: true },
            { text: "ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि बल शून्य है, तो कार्य भी शून्य होगा (W=F⋅d), जिससे शक्ति (P=W/t) भी शून्य होगी।"
    },
    {
        question: "प्रश्न 22. एक 'किलोवाट-घंटा' किसकी इकाई है?",
        answers: shuffle([
            { text: "विद्युत शक्ति", correct: false },
            { text: "विद्युत ऊर्जा", correct: true },
            { text: "विद्युत धारा", correct: false },
            { text: "विद्युत विभव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किलोवाट-घंटा (kWh) व्यावसायिक रूप से बिजली की खपत को मापने के लिए उपयोग की जाने वाली ऊर्जा की इकाई है, जिसे 'यूनिट' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 23. यदि किसी मोटर की शक्ति अधिक है, तो वह समान भार को...",
        answers: shuffle([
            { text: "अधिक ऊंचाई तक नहीं उठा सकती।", correct: false },
            { text: "कम समय में समान ऊंचाई तक उठा सकती है।", correct: true },
            { text: "अधिक समय में समान ऊंचाई तक उठा सकती है।", correct: false },
            { text: "बिल्कुल नहीं उठा सकती।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिक शक्ति का मतलब है कि समान कार्य (भार को समान ऊंचाई तक उठाना) कम समय में पूरा किया जा सकता है।"
    },
    {
        question: "प्रश्न 24. शक्ति का सीजीएस (CGS) प्रणाली में मात्रक क्या है?",
        answers: shuffle([
            { text: "डाइन", correct: false },
            { text: "अर्ग", correct: false },
            { text: "अर्ग/सेकंड", correct: true },
            { text: "न्यूटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CGS प्रणाली में कार्य का मात्रक 'अर्ग' और समय का मात्रक 'सेकंड' होता है, इसलिए शक्ति का मात्रक अर्ग/सेकंड होगा।"
    },
    {
        question: "प्रश्न 25. किसी उपकरण द्वारा ऊर्जा के व्यय होने की दर को क्या कहते हैं?",
        answers: shuffle([
            { text: "ऊर्जा", correct: false },
            { text: "उसकी विद्युत शक्ति", correct: true },
            { text: "कार्य", correct: false },
            { text: "दक्षता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी उपकरण द्वारा प्रति सेकंड जितनी ऊर्जा खपत की जाती है, उसे उसकी विद्युत शक्ति कहते हैं और इसे वाट में मापा जाता है।"
    },
    {
        question: "प्रश्न 26. एक धावक दौड़ते समय किस प्रकार की शक्ति का उपयोग करता है?",
        answers: shuffle([
            { text: "विद्युत शक्ति", correct: false },
            { text: "यांत्रिक शक्ति", correct: true },
            { text: "नाभिकीय शक्ति", correct: false },
            { text: "सौर शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दौड़ने में मांसपेशियों द्वारा उत्पन्न बल और शरीर की गति शामिल होती है, जो यांत्रिक शक्ति का एक उदाहरण है।"
    },
    {
        question: "प्रश्न 27. यदि बल और वेग एक दूसरे के लंबवत हों, तो तात्कालिक शक्ति का मान क्या होगा?",
        answers: shuffle([
            { text: "अधिकतम", correct: false },
            { text: "न्यूनतम", correct: false },
            { text: "शून्य", correct: true },
            { text: "एक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तात्कालिक शक्ति P=F⋅v⋅cosθ होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि बल और वेग लंबवत हैं, तो उनके बीच का कोण (θ) 90 डिग्री होगा और cos(90∘)=0, इसलिए शक्ति शून्य होगी।"
    },
    {
        question: "प्रश्न 28. किसी मशीन की दक्षता (Efficiency) और उसकी शक्ति में क्या संबंध है?",
        answers: shuffle([
            { text: "कोई संबंध नहीं है।", correct: false },
            { text: "उच्च दक्षता का अर्थ हमेशा उच्च शक्ति होता है।", correct: false },
            { text: "शक्ति आउटपुट और शक्ति इनपुट का अनुपात दक्षता है।", correct: true },
            { text: "उच्च शक्ति का अर्थ हमेशा उच्च दक्षता होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्षता (η) = (निर्गत शक्ति / निवेशित शक्ति)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बताता है कि दी गई शक्ति का कितना हिस्सा उपयोगी कार्य में परिवर्तित हो रहा है।"
    },
    {
        question: "प्रश्न 29. औसत शक्ति को कैसे परिभाषित किया जाता है?",
        answers: shuffle([
            { text: "किसी क्षण पर शक्ति", correct: false },
            { text: "कुल किए गए कार्य और कुल समय का अनुपात", correct: true },
            { text: "अधिकतम शक्ति", correct: false },
            { text: "न्यूनतम शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औसत शक्ति कुल कार्य को उस कार्य को करने में लगे कुल समय से विभाजित करके प्राप्त की जाती है।"
    },
    {
        question: "प्रश्न 30. यदि कोई व्यक्ति सीढ़ियाँ चढ़ता है, तो उसकी शक्ति किस पर निर्भर नहीं करेगी?",
        answers: shuffle([
            { text: "व्यक्ति के द्रव्यमान पर", correct: false },
            { text: "गुरुत्वाकर्षण त्वरण पर", correct: false },
            { text: "सीढ़ियों की ऊंचाई पर", correct: false },
            { text: "सीढ़ियों पर क्षैतिज रूप से चलने की गति पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति गुरुत्वाकर्षण के विरुद्ध किए गए कार्य (जो द्रव्यमान, गुरुत्वीय त्वरण और ऊर्ध्वाधर ऊंचाई पर निर्भर करता है) और लगने वाले समय पर निर्भर करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> क्षैतिज गति इस कार्य को प्रभावित नहीं करती है।"
    },
    {
        question: "प्रश्न 31. एक वाट किसके समतुल्य है?",
        answers: shuffle([
            { text: "1 न्यूटन-मीटर", correct: false },
            { text: "1 जूल/सेकंड", correct: true },
            { text: "1 पास्कल/सेकंड", correct: false },
            { text: "1 किलोग्राम-मीटर/सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति की परिभाषा के अनुसार, 1 वाट शक्ति तब होती है जब 1 सेकंड में 1 जूल कार्य किया जाता है।"
    },
    {
        question: "प्रश्न 32. पवन चक्की हवा की किस ऊर्जा को यांत्रिक शक्ति में बदलती है?",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "गतिज ऊर्जा", correct: true },
            { text: "ऊष्मीय ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पवन चक्की बहती हुई हवा (पवन) की गतिज ऊर्जा का उपयोग करके ब्लेड घुमाती है, जिससे यांत्रिक शक्ति उत्पन्न होती है।"
    },
    {
        question: "प्रश्न 33. समय के साथ शक्ति में परिवर्तन की दर को क्या कहते हैं?",
        answers: shuffle([
            { text: "जर्क (Jerk)", correct: true },
            { text: "ऊर्जा", correct: false },
            { text: "आवेग", correct: false },
            { text: "इसका कोई विशिष्ट नाम नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिकी में, बल के परिवर्तन की दर को जर्क कहा जाता है, जो अप्रत्यक्ष रूप से शक्ति के परिवर्तन से संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, सीधे शक्ति के परिवर्तन की दर का कोई सामान्य नाम नहीं है, लेकिन कुछ संदर्भों में इसे जर्क से जोड़ा जाता है।"
    },
    {
        question: "प्रश्न 34. किसी बल्ब पर '100W - 220V' लिखा है। यहाँ '100W' क्या दर्शाता है?",
        answers: shuffle([
            { text: "बल्ब द्वारा खपत की गई ऊर्जा", correct: false },
            { text: "बल्ब का प्रतिरोध", correct: false },
            { text: "बल्ब की शक्ति (पावर रेटिंग)", correct: true },
            { text: "बल्ब से बहने वाली धारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '100W' यह दर्शाता है कि जब बल्ब को 220V पर चलाया जाता है, तो वह प्रति सेकंड 100 जूल विद्युत ऊर्जा की खपत करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उसकी शक्ति है।"
    },
    {
        question: "प्रश्न 35. यदि किया गया कार्य ऋणात्मक हो, तो शक्ति...",
        answers: shuffle([
            { text: "हमेशा धनात्मक होगी।", correct: false },
            { text: "ऋणात्मक होगी।", correct: true },
            { text: "शून्य होगी।", correct: false },
            { text: "अनंत होगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि समय हमेशा धनात्मक होता है, यदि कार्य (W) ऋणात्मक है, तो शक्ति (P = W/t) भी ऋणात्मक होगी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि निकाय पर कार्य किया जा रहा है, निकाय द्वारा नहीं।"
    },
    {
        question: "प्रश्न 36. कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करके शक्ति उत्पन्न करता है?",
        answers: shuffle([
            { text: "विद्युत मोटर", correct: false },
            { text: "विद्युत जनरेटर (डायनेमो)", correct: true },
            { text: "ट्रांसफार्मर", correct: false },
            { text: "हीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक जनरेटर या डायनेमो यांत्रिक घूर्णन (यांत्रिक ऊर्जा) का उपयोग करके विद्युत शक्ति (विद्युत ऊर्जा) उत्पन्न करता है।"
    },
    {
        question: "प्रश्न 37. शक्ति का संबंध किससे है?",
        answers: shuffle([
            { text: "कार्य की कुल मात्रा से", correct: false },
            { text: "कार्य करने में लगे समय से", correct: false },
            { text: "कार्य करने की गति या दर से", correct: true },
            { text: "केवल ऊर्जा के प्रकार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्ति यह मापती है कि कोई कार्य कितनी जल्दी या धीरे-धीरे किया जा रहा है।"
    },
    {
        question: "प्रश्न 38. एक शक्तिशाली व्यक्ति या मशीन...",
        answers: shuffle([
            { text: "हमेशा बहुत सारा काम करती है।", correct: false },
            { text: "बहुत जल्दी काम करती है।", correct: true },
            { text: "हमेशा भारी होती है।", correct: false },
            { text: "कभी नहीं थकती।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'शक्तिशाली' होने का भौतिक अर्थ है कम समय में अधिक कार्य करने की क्षमता रखना।"
    },
    {
        question: "प्रश्न 39. बड़े बिजली संयंत्रों की शक्ति को आमतौर पर किस इकाई में व्यक्त किया जाता है?",
        answers: shuffle([
            { text: "वाट", correct: false },
            { text: "किलोवाट (kW)", correct: false },
            { text: "मेगावाट (MW) या गीगावाट (GW)", correct: true },
            { text: "अश्वशक्ति (HP)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिजली संयंत्र बहुत बड़ी मात्रा में शक्ति का उत्पादन करते हैं, इसलिए उनकी क्षमता को मापने के लिए मेगावाट (10⁶ वाट) या गीगावाट (10⁹ वाट) जैसी बड़ी इकाइयों का उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 40. तात्क्षणिक शक्ति (Instantaneous Power) क्या है?",
        answers: shuffle([
            { text: "औसत शक्ति", correct: false },
            { text: "किसी विशेष क्षण पर शक्ति", correct: true },
            { text: "अधिकतम शक्ति", correct: false },
            { text: "कुल शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तात्क्षणिक शक्ति समय के एक बहुत छोटे अंतराल में किए गए कार्य की दर को संदर्भित करता है, यानी समय के किसी एक पल में शक्ति।"
    },
    {
        question: "प्रश्न 41. यदि एक मशीन की शक्ति दूसरी मशीन से दोगुनी है, तो समान कार्य करने में वह...",
        answers: shuffle([
            { text: "दोगुना समय लेगी।", correct: false },
            { text: "आधा समय लेगी।", correct: true },
            { text: "समान समय लेगी।", correct: false },
            { text: "चार गुना समय लेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि P=W/t या t=W/P, यदि शक्ति (P) दोगुनी हो जाती है और कार्य (W) समान रहता है, तो समय (t) आधा हो जाएगा।"
    },
    {
        question: "प्रश्न 42. शक्ति की अवधारणा सबसे पहले किसने विकसित की?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "गैलीलियो गैलिली", correct: false },
            { text: "जेम्स वाट", correct: true },
            { text: "माइकल फैराडे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जेम्स वाट ने भाप इंजनों की आउटपुट की तुलना घोड़ों की शक्ति से करने के लिए 'अश्वशक्ति' की अवधारणा विकसित की थी।"
    },
    {
        question: "प्रश्न 43. मानव शरीर में भोजन से प्राप्त ऊर्जा किस दर से व्यय होती है, उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "चयापचय दर (Metabolic Rate)", correct: true },
            { text: "कैलोरी", correct: false },
            { text: "पोषण", correct: false },
            { text: "पाचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चयापचय दर वह दर है जिस पर एक जीव ऊर्जा (कैलोरी) की खपत करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अनिवार्य रूप से शरीर की जैविक शक्ति है।"
    },
    {
        question: "प्रश्न 44. ध्वनि की शक्ति को मापने के लिए किस इकाई का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "हर्ट्ज", correct: false },
            { text: "डेसिबल", correct: false },
            { text: "वाट", correct: true },
            { text: "कैंडिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि तरंगों द्वारा प्रति इकाई समय में स्थानांतरित ऊर्जा, यानी ध्वनि की शक्ति को वाट में मापा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> डेसिबल तीव्रता स्तर की एक लघुगणकीय इकाई है।"
    },
    {
        question: "प्रश्न 45. विद्युत मोटर किस प्रकार का ऊर्जा रूपांतरण करती है?",
        answers: shuffle([
            { text: "यांत्रिक ऊर्जा को विद्युत ऊर्जा में", correct: false },
            { text: "विद्युत ऊर्जा को यांत्रिक शक्ति में", correct: true },
            { text: "ऊष्मीय ऊर्जा को विद्युत ऊर्जा में", correct: false },
            { text: "रासायनिक ऊर्जा को यांत्रिक ऊर्जा में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विद्युत मोटर विद्युत ऊर्जा का उपभोग करती है और इसे घूर्णन गति (यांत्रिक शक्ति) में परिवर्तित करती है।"
    },
    {
        question: "प्रश्न 46. यदि बल वस्तु की गति की विपरीत दिशा में लगाया जाए, तो शक्ति...",
        answers: shuffle([
            { text: "धनात्मक होगी।", correct: false },
            { text: "शून्य होगी।", correct: false },
            { text: "ऋणात्मक होगी।", correct: true },
            { text: "अनंत होगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बल गति के विपरीत होता है (जैसे घर्षण बल), तो किया गया कार्य ऋणात्मक होता है, जिसके परिणामस्वरूप शक्ति भी ऋणात्मक होती है।"
    },
    {
        question: "प्रश्न 47. एक वाट सेकंड किसके बराबर है?",
        answers: shuffle([
            { text: "एक न्यूटन", correct: false },
            { text: "एक पास्कल", correct: false },
            { text: "एक जूल", correct: true },
            { text: "एक एम्पीयर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि शक्ति = ऊर्जा / समय, इसलिए ऊर्जा = शक्ति × समय।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 1 जूल = 1 वाट × 1 सेकंड।"
    },
    {
        question: "प्रश्न 48. सौर पैनलों की शक्ति किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "पैनल के आकार पर", correct: false },
            { text: "सूर्य के प्रकाश की तीव्रता पर", correct: false },
            { text: "पैनल की दक्षता पर", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सौर पैनल की आउटपुट शक्ति उसके सतह क्षेत्र, उस पर पड़ने वाले सूर्य के प्रकाश की तीव्रता और प्रकाश को बिजली में बदलने की उसकी दक्षता पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 49. \"ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है, केवल एक रूप से दूसरे रूप में परिवर्तित किया जा सकता है।\" यह नियम किससे संबंधित है?",
        answers: shuffle([
            { text: "शक्ति संरक्षण का नियम", correct: false },
            { text: "ऊर्जा संरक्षण का नियम", correct: true },
            { text: "संवेग संरक्षण का नियम", correct: false },
            { text: "आवेश संरक्षण का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह ऊर्जा संरक्षण का सिद्धांत है।<br><br><i class='fa-solid fa-angles-right icon'></i> शक्ति ऊर्जा के रूपांतरण की दर को मापती है, लेकिन यह स्वयं संरक्षित नहीं रहती है।"
    },
    {
        question: "प्रश्न 50. किसी पंप की शक्ति उसके द्वारा किए गए किस कार्य की दर को मापती है?",
        answers: shuffle([
            { text: "पानी को ठंडा करने की दर", correct: false },
            { text: "पानी को एक निश्चित ऊंचाई तक उठाने की दर", correct: true },
            { text: "पानी को शुद्ध करने की दर", correct: false },
            { text: "पानी को गर्म करने की दर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पंप की शक्ति यह निर्धारित करती है कि वह कितनी तेजी से एक निश्चित मात्रा में तरल (जैसे पानी) को एक निश्चित ऊंचाई तक उठा सकता है।"
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