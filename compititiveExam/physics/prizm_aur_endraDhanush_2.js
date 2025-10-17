const questions = [
    {
        topHeading: "प्रिज्म और इंद्रधनुष पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. पेरिस्कोप में छवि को मोड़ने के लिए दर्पण के स्थान पर प्रिज्म का उपयोग क्यों बेहतर है?",
        answers: shuffle([
            { text: "क्योंकि प्रिज्म सस्ते होते हैं।", correct: false },
            { text: "क्योंकि प्रिज्म पूर्ण आंतरिक परावर्तन के कारण अधिक चमकीली और स्पष्ट छवि बनाते हैं।", correct: true },
            { text: "क्योंकि प्रिज्म हल्के होते हैं।", correct: false },
            { text: "क्योंकि प्रिज्म रंगीन छवि बनाते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दर्पण प्रकाश की पूरी तीव्रता को परावर्तित नहीं करते हैं और समय के साथ खराब हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि प्रिज्म लगभग 100% प्रकाश को पूर्ण आंतरिक परावर्तन के कारण परावर्तित करते हैं।"
    },
    {
        question: "प्रश्न 2. कोहरे के दौरान इंद्रधनुष क्यों नहीं दिखता?",
        answers: shuffle([
            { text: "कोहरे में पानी नहीं होता।", correct: false },
            { text: "कोहरे की बूंदें गोलाकार नहीं होतीं।", correct: false },
            { text: "कोहरे की बूंदें इंद्रधनुष बनाने के लिए बहुत छोटी होती हैं।", correct: true },
            { text: "कोहरे में सूर्य का प्रकाश प्रवेश नहीं कर पाता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोहरे की बहुत छोटी बूंदें प्रकाश का विवर्तन करती हैं, जिससे रंग एक-दूसरे पर चढ़ जाते हैं और एक सफेद धुंधला चाप बनता है जिसे 'फॉगबो' (Fogbow) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> न कि रंगीन इंद्रधनुष।"
    },
    {
        question: "प्रश्न 3. एक प्रिज्म में, यदि आपतन कोण और निर्गत कोण बराबर हों, तो यह कौन सी स्थिति है?",
        answers: shuffle([
            { text: "अधिकतम विचलन की", correct: false },
            { text: "न्यूनतम विचलन की", correct: true },
            { text: "कोई विचलन नहीं", correct: false },
            { text: "विक्षेपण की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूनतम विचलन की स्थिति में, प्रकाश किरण प्रिज्म के सापेक्ष सममित रूप से गुजरती है, जिससे i=e होता है।"
    },
    {
        question: "प्रश्न 4. \"VIBGYOR\" में 'I' किस रंग को दर्शाता है?",
        answers: shuffle([
            { text: "इंडियम", correct: false },
            { text: "अवरक्त", correct: false },
            { text: "जामुनी", correct: true },
            { text: "आईवरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'I' इंडिगो (Indigo) या जामुनी रंग के लिए है, जो नीले और बैंगनी के बीच का रंग है।"
    },
    {
        question: "प्रश्न 5. यदि एक प्रिज्म बहुत पतला है, तो विचलन कोण का सूत्र क्या होता है?",
        answers: shuffle([
            { text: "A(n-1)", correct: true },
            { text: "A(n+1)", correct: false },
            { text: "nA", correct: false },
            { text: "A/n", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पतले प्रिज्म के लिए, विचलन कोण (δ) लगभग प्रिज्म कोण (A) और अपवर्तनांक (n) पर इस सरल सूत्र से निर्भर करता है।"
    },
    {
        question: "प्रश्न 6. द्वितीयक इंद्रधनुष प्रेक्षक की आंख पर कितना कोण बनाता है?",
        answers: shuffle([
            { text: "लगभग 40-42 डिग्री", correct: false },
            { text: "लगभग 50-53 डिग्री", correct: true },
            { text: "लगभग 70-72 डिग्री", correct: false },
            { text: "लगभग 90-92 डिग्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो पूर्ण आंतरिक परावर्तन के कारण, द्वितीयक इंद्रधनुष आकाश में अधिक ऊंचाई पर, लगभग 50° से 53° के कोणीय दायरे में बनता है।"
    },
    {
        question: "प्रश्न 7. एक प्रिज्म के लिए, विचलन कोण किस रंग के लिए अधिकतम होता है?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "पीला", correct: false },
            { text: "हरा", correct: false },
            { text: "बैंगनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि बैंगनी रंग के लिए अपवर्तनांक अधिकतम होता है, इसलिए उसका विचलन भी अधिकतम होता है।"
    },
    {
        question: "प्रश्न 8. न्यूटन की रंग डिस्क को तेजी से घुमाने पर वह सफेद क्यों दिखाई देती है?",
        answers: shuffle([
            { text: "विक्षेपण के कारण", correct: false },
            { text: "अपवर्तन के कारण", correct: false },
            { text: "दृष्टि निर्बंध (Persistence of vision) के कारण", correct: true },
            { text: "पूर्ण आंतरिक परावर्तन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब डिस्क तेजी से घूमती है, तो सभी रंगों के प्रतिबिंब रेटिना पर इतनी तेजी से बनते हैं कि हमारी आंखें उन्हें अलग नहीं कर पातीं और उनका संयोजन हमें सफेद दिखाई देता है।"
    },
    {
        question: "प्रश्न 9. \"क्राउन ग्लास\" और \"फ्लिंट ग्लास\" के प्रिज्मों में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "उनके रंग में", correct: false },
            { text: "उनकी विक्षेपण क्षमता में", correct: true },
            { text: "उनके आकार में", correct: false },
            { text: "उनकी कीमत में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्लिंट ग्लास की विक्षेपण क्षमता क्राउन ग्लास की तुलना में बहुत अधिक होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसका उपयोग विक्षेपण उत्पन्न करने वाले उपकरणों में किया जाता है।"
    },
    {
        question: "प्रश्न 10. यदि हम लाल गुलाब को हरे प्रकाश में देखें तो वह कैसा दिखाई देगा?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "हरा", correct: false },
            { text: "पीला", correct: false },
            { text: "काला", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल गुलाब केवल लाल प्रकाश को परावर्तित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब उस पर हरा प्रकाश डाला जाता है, तो वह उसे पूरी तरह से अवशोषित कर लेता है और कुछ भी परावर्तित नहीं करता, जिससे वह काला दिखाई देता है।"
    },
    {
        question: "प्रश्न 11. एक उल्टे इंद्रधनुष को क्या कहते हैं?",
        answers: shuffle([
            { text: "द्वितीयक इंद्रधनुष", correct: false },
            { text: "परिधि चाप", correct: true },
            { text: "फॉगबो", correct: false },
            { text: "मूनबो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक दुर्लभ वायुमंडलीय घटना है जो सिरस बादलों में मौजूद बर्फ के क्रिस्टल से प्रकाश के अपवर्तन के कारण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> और यह एक मुस्कान की तरह दिखाई देती है।"
    },
    {
        question: "प्रश्न 12. इंद्रधनुष का बनना यह सिद्ध करता है कि सूर्य का प्रकाश...",
        answers: shuffle([
            { text: "एकवर्णी है।", correct: false },
            { text: "अनेक रंगों का मिश्रण है।", correct: true },
            { text: "ध्रुवित है।", correct: false },
            { text: "एक कण है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि सूर्य का प्रकाश केवल एक रंग का होता, तो इंद्रधनुष कभी नहीं बन पाता।<br><br><i class='fa-solid fa-angles-right icon'></i> विक्षेपण की घटना ही यह साबित करती है कि यह बहुरंगी है।"
    },
    {
        question: "प्रश्न 13. प्रिज्म में अपवर्तन कितनी बार होता है?",
        answers: shuffle([
            { text: "एक बार", correct: false },
            { text: "दो बार", correct: true },
            { text: "तीन बार", correct: false },
            { text: "बिल्कुल नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश का अपवर्तन एक बार तब होता है जब वह हवा से प्रिज्म में प्रवेश करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और दूसरी बार तब होता है जब वह प्रिज्म से वापस हवा में निकलता है।"
    },
    {
        question: "प्रश्न 14. आपतित किरण को आगे बढ़ाने और निर्गत किरण को पीछे बढ़ाने पर वे जिस कोण पर मिलती हैं, वह है...",
        answers: shuffle([
            { text: "प्रिज्म कोण", correct: false },
            { text: "विचलन कोण", correct: true },
            { text: "आपतन कोण", correct: false },
            { text: "निर्गत कोण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विचलन कोण को परिभाषित करने का एक ज्यामितीय तरीका है।"
    },
    {
        question: "प्रश्न 15. क्या हम कृत्रिम रूप से इंद्रधनुष बना सकते हैं?",
        answers: shuffle([
            { text: "नहीं, यह केवल प्राकृतिक है।", correct: false },
            { text: "हाँ, बगीचे के फव्वारे या पानी के स्प्रे का उपयोग करके।", correct: true },
            { text: "केवल प्रयोगशाला में।", correct: false },
            { text: "केवल कंप्यूटर ग्राफिक्स से।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाँ, बगीचे के फव्वारे या पानी के स्प्रे का उपयोग करके।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि सूर्य आपकी पीठ के पीछे हो और आप पानी का स्प्रे करें, तो आप पानी की छोटी बूंदों में अपना स्वयं का इंद्रधनुष बना सकते हैं।"
    },
    {
        question: "प्रश्न 16. प्रिज्म से प्राप्त स्पेक्ट्रम के किस रंग की ऊर्जा सबसे अधिक होती है?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "पीला", correct: false },
            { text: "हरा", correct: false },
            { text: "बैंगनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश की ऊर्जा उसकी आवृत्ति के समानुपाती होती है (E=hf)।<br><br><i class='fa-solid fa-angles-right icon'></i> बैंगनी प्रकाश की आवृत्ति सबसे अधिक होती है, इसलिए उसकी ऊर्जा भी सबसे अधिक होती है।"
    },
    {
        question: "प्रश्न 17. प्रिज्म से प्राप्त स्पेक्ट्रम के किस रंग का तरंगदैर्ध्य सबसे लंबा होता है?",
        answers: shuffle([
            { text: "लाल", correct: true },
            { text: "नीला", correct: false },
            { text: "हरा", correct: false },
            { text: "बैंगनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दृश्यमान स्पेक्ट्रम में, लाल प्रकाश का तरंगदैर्ध्य सबसे लंबा (लगभग 700 नैनोमीटर) होता है।"
    },
    {
        question: "प्रश्न 18. \"अवरक्त\" (Infrared) विकिरण स्पेक्ट्रम में कहाँ स्थित होता है?",
        answers: shuffle([
            { text: "लाल रंग के बाद", correct: true },
            { text: "बैंगनी रंग से पहले", correct: false },
            { text: "हरे और नीले रंग के बीच", correct: false },
            { text: "यह स्पेक्ट्रम का हिस्सा नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवरक्त विकिरण की तरंगदैर्ध्य लाल प्रकाश से भी लंबी होती है और यह हमारी आंखों को दिखाई नहीं देती है।"
    },
    {
        question: "प्रश्न 19. \"पराबैंगनी\" (Ultraviolet) विकिरण स्पेक्ट्रम में कहाँ स्थित होता है?",
        answers: shuffle([
            { text: "लाल रंग के बाद", correct: false },
            { text: "बैंगनी रंग से पहले", correct: true },
            { text: "पीले और नारंगी के बीच", correct: false },
            { text: "यह स्पेक्ट्रम में नहीं होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पराबैंगनी विकिरण की तरंगदैर्ध्य बैंगनी प्रकाश से भी छोटी होती है और यह भी अदृश्य होती है।"
    },
    {
        question: "प्रश्न 20. एक तरल में डूबे कांच के प्रिज्म द्वारा प्रकाश का विचलन शून्य है। इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "प्रिज्म खोखला है।", correct: false },
            { text: "तरल और कांच का अपवर्तनांक समान है।", correct: true },
            { text: "प्रकाश लंबवत आपतित हो रहा है।", correct: false },
            { text: "तरल अपारदर्शी है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि दोनों माध्यमों का अपवर्तनांक समान है, तो प्रकाश बिना मुड़े सीधा निकल जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> और कोई विचलन नहीं होगा।"
    },
    {
        question: "प्रश्न 21. कौन सी घटना प्रकाश की तरंग प्रकृति का समर्थन करती है?",
        answers: shuffle([
            { text: "प्रकाश-विद्युत प्रभाव", correct: false },
            { text: "कॉम्पटन प्रभाव", correct: false },
            { text: "विक्षेपण और व्यतिकरण", correct: true },
            { text: "प्रकाश का सीधी रेखा में चलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्षेपण (जो अपवर्तन पर निर्भर करता है) और व्यतिकरण जैसी घटनाओं को केवल प्रकाश को तरंग मानकर ही समझाया जा सकता है।"
    },
    {
        question: "प्रश्न 22. यदि हम प्रिज्म को उल्टा रख दें, तो स्पेक्ट्रम पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "स्पेक्ट्रम भी उल्टा हो जाएगा।", correct: false },
            { text: "स्पेक्ट्रम का क्रम नहीं बदलेगा, केवल उसकी स्थिति बदल जाएगी।", correct: true },
            { text: "कोई स्पेक्ट्रम नहीं बनेगा।", correct: false },
            { text: "केवल लाल रंग दिखाई देगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्षेपण की भौतिकी समान रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> बैंगनी अभी भी सबसे अधिक मुड़ेगा और लाल सबसे कम।<br><br><i class='fa-solid fa-angles-right icon'></i> स्पेक्ट्रम बस आकाश में किसी और जगह बनेगा।"
    },
    {
        question: "प्रश्न 23. एक ही पदार्थ से बने दो प्रिज्म हैं, लेकिन एक का प्रिज्म कोण दूसरे से दोगुना है। किसमें अधिक विचलन होगा?",
        answers: shuffle([
            { text: "छोटे कोण वाले प्रिज्म में", correct: false },
            { text: "बड़े कोण वाले प्रिज्म में", correct: true },
            { text: "दोनों में बराबर होगा", correct: false },
            { text: "यह आपतन कोण पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विचलन कोण सीधे प्रिज्म कोण के समानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बड़ा कोण प्रकाश को अधिक मोड़ेगा।"
    },
    {
        question: "प्रश्न 24. इंद्रधनुष में जामुनी (Indigo) रंग किन दो रंगों के बीच होता है?",
        answers: shuffle([
            { text: "बैंगनी और नीला", correct: true },
            { text: "नीला और हरा", correct: false },
            { text: "हरा और पीला", correct: false },
            { text: "लाल और नारंगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> VIBGYOR क्रम के अनुसार, इंडिगो (जामुनी) वायलेट (बैंगनी) और ब्लू (नीला) के बीच में आता है।"
    },
    {
        question: "प्रश्न 25. पानी की बूंदें गोलाकार क्यों होती हैं, जो इंद्रधनुष के लिए आवश्यक है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण के कारण", correct: false },
            { text: "हवा के दबाव के कारण", correct: false },
            { text: "पृष्ठ तनाव के कारण", correct: true },
            { text: "तापमान के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृष्ठ तनाव पानी के अणुओं के बीच आकर्षण बल है जो तरल की सतह को सिकोड़कर न्यूनतम संभव सतह क्षेत्र (जो एक गोला है) बनाने की कोशिश करता है।"
    },
    {
        question: "प्रश्न 26. प्रिज्म से देखते समय अक्षर ऊपर उठे हुए क्यों दिखाई देते हैं?",
        answers: shuffle([
            { text: "परावर्तन के कारण", correct: false },
            { text: "अपवर्तन के कारण", correct: true },
            { text: "विक्षेपण के कारण", correct: false },
            { text: "विवर्तन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आभासी गहराई वाला प्रभाव है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रिज्म से आने वाली प्रकाश किरणें मुड़ जाती हैं, जिससे हमारी आंखें अक्षरों को उनकी वास्तविक स्थिति से थोड़ा ऊपर देखती हैं।"
    },
    {
        question: "प्रश्न 27. यदि पृथ्वी का वायुमंडल न होता, तो क्या इंद्रधनुष बन सकता था?",
        answers: shuffle([
            { text: "हाँ, यह और भी चमकीला होता।", correct: false },
            { text: "नहीं, क्योंकि वर्षा नहीं होती।", correct: false },
            { text: "हाँ, लेकिन केवल पानी की बूंदों की उपस्थिति में।", correct: true },
            { text: "नहीं, क्योंकि वायुमंडल रंगों को अलग करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष के लिए केवल सूर्य का प्रकाश और पानी की बूंदें आवश्यक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वायुमंडल की भूमिका अप्रत्यक्ष है (मौसम बनाने में)।"
    },
    {
        question: "प्रश्न 28. \"कास्टिक\" (Caustic) क्या है जो इंद्रधनुष से संबंधित है?",
        answers: shuffle([
            { text: "एक रासायनिक पदार्थ", correct: false },
            { text: "पानी की बूंदों द्वारा केंद्रित प्रकाश से बना एक चमकीला किनारा", correct: true },
            { text: "इंद्रधनुष का दूसरा नाम", correct: false },
            { text: "इंद्रधनुष के रंगों का अध्ययन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष का चमकीला भीतरी किनारा वास्तव में एक कास्टिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ कई प्रकाश किरणें एक साथ आकर मिलती हैं।"
    },
    {
        question: "प्रश्न 29. क्या प्रिज्म केवल दृश्य प्रकाश का ही विक्षेपण करता है?",
        answers: shuffle([
            { text: "हाँ, केवल दृश्य प्रकाश का", correct: false },
            { text: "नहीं, यह अवरक्त और पराबैंगनी जैसे अदृश्य विकिरण का भी विक्षेपण करता है।", correct: true },
            { text: "यह केवल अवरक्त का करता है।", correct: false },
            { text: "यह केवल पराबैंगनी का करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रिज्म पूरे विद्युत चुम्बकीय स्पेक्ट्रम का विक्षेपण कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बशर्ते उसका पदार्थ उस विकिरण के लिए पारदर्शी हो।"
    },
    {
        question: "प्रश्न 30. फ्राउनहोफर रेखाएं क्या हैं?",
        answers: shuffle([
            { text: "इंद्रधनुष में दिखाई देने वाली चमकीली रेखाएं", correct: false },
            { text: "सूर्य के स्पेक्ट्रम में दिखाई देने वाली काली अवशोषण रेखाएं", correct: true },
            { text: "प्रिज्म पर बने खरोंच", correct: false },
            { text: "एक प्रकार का ग्राफ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये रेखाएं सूर्य के वायुमंडल में मौजूद विभिन्न तत्वों द्वारा विशिष्ट तरंगदैर्ध्य के प्रकाश के अवशोषण के कारण बनती हैं।"
    },
    {
        question: "प्रश्न 31. न्यूनतम विचलन कोण किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "केवल आपतन कोण पर", correct: false },
            { text: "केवल प्रिज्म कोण पर", correct: false },
            { text: "प्रिज्म के पदार्थ के अपवर्तनांक और प्रिज्म कोण पर", correct: true },
            { text: "केवल प्रकाश के रंग पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूनतम विचलन कोण प्रिज्म के अंतर्निहित गुणों (पदार्थ और ज्यामिति) द्वारा निर्धारित होता है।"
    },
    {
        question: "प्रश्न 32. जब आप इंद्रधनुष की तस्वीर लेते हैं, तो क्या कैमरे का ध्रुवीकरण फिल्टर (polarizing filter) कोई प्रभाव डालता है?",
        answers: shuffle([
            { text: "नहीं, कोई प्रभाव नहीं", correct: false },
            { text: "हाँ, यह इंद्रधनुष को और अधिक चमकीला बना सकता है या उसे गायब कर सकता है।", correct: true },
            { text: "यह केवल रंगों को बदल देता है।", correct: false },
            { text: "यह तस्वीर को काला और सफेद बना देता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष का प्रकाश दृढ़ता से ध्रुवित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक ध्रुवीकरण फिल्टर को घुमाने से आकाश और इंद्रधनुष के बीच का कंट्रास्ट बढ़ सकता है, जिससे यह अधिक स्पष्ट दिखाई देता है।"
    },
    {
        question: "प्रश्न 33. यदि लाल और नीले प्रकाश को मिलाया जाए, तो कौन सा रंग बनता है?",
        answers: shuffle([
            { text: "हरा", correct: false },
            { text: "पीला", correct: false },
            { text: "सियान", correct: false },
            { text: "मैजेंटा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल और नीला प्रकाश के प्राथमिक रंग हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> और उनका योगात्मक मिश्रण मैजेंटा रंग बनाता है।"
    },
    {
        question: "प्रश्न 34. प्रिज्म के आधार का क्या कार्य है?",
        answers: shuffle([
            { text: "यह प्रकाश को अपवर्तित करता है।", correct: false },
            { text: "यह प्रकाश को परावर्तित करता है।", correct: false },
            { text: "यह आमतौर पर अपवर्तन में भाग नहीं लेता है, इसे केवल घिसा जाता है।", correct: true },
            { text: "यह प्रिज्म को सहारा देता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानक उपयोग में, प्रकाश दो झुकी हुई अपवर्तक सतहों से होकर गुजरता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि तीसरी सतह (आधार) पर प्रकाश नहीं पड़ता है।"
    },
    {
        question: "प्रश्न 35. यदि हम एक शक्तिशाली टॉर्च से दीवार पर सफेद रोशनी डालते हैं और उसके सामने एक प्रिज्म रखते हैं, तो दीवार पर क्या दिखाई देगा?",
        answers: shuffle([
            { text: "एक सफेद धब्बा", correct: false },
            { text: "एक इंद्रधनुषी पट्टी (स्पेक्ट्रम)", correct: true },
            { text: "एक काला धब्बा", correct: false },
            { text: "कुछ भी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टॉर्च की सफेद रोशनी भी कई रंगों का मिश्रण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> और प्रिज्म उसे उसके घटक रंगों में विभाजित कर देगा।"
    },
    {
        question: "प्रश्न 36. क्या विक्षेपण केवल प्रिज्म में ही होता है?",
        answers: shuffle([
            { text: "हाँ, केवल प्रिज्म में", correct: false },
            { text: "नहीं, यह लेंस और पानी की बूंदों जैसे किसी भी अपवर्तक माध्यम में हो सकता है।", correct: true },
            { text: "यह केवल लेंस में होता है।", correct: false },
            { text: "यह केवल पानी की बूंदों में होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोई भी पारदर्शी माध्यम जिसका अपवर्तनांक प्रकाश के तरंगदैर्ध्य पर निर्भर करता है, विक्षेपण उत्पन्न कर सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेंसों में इस दोष को 'वर्ण विपथन' कहते हैं।"
    },
    {
        question: "प्रश्न 37. प्रिज्म से गुजरने के बाद, प्रकाश किरण हमेशा किधर मुड़ती है?",
        answers: shuffle([
            { text: "अपने शीर्ष की ओर", correct: false },
            { text: "अपने आधार की ओर", correct: true },
            { text: "आपतित किरण के समानांतर", correct: false },
            { text: "अभिलंब की ओर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो बार अपवर्तन के परिणामस्वरूप, शुद्ध विचलन हमेशा प्रिज्म के मोटे हिस्से, यानी आधार की ओर होता है।"
    },
    {
        question: "प्रश्न 38. यदि सभी वस्तुएं प्रकाश का विक्षेपण करतीं, तो दुनिया कैसी दिखती?",
        answers: shuffle([
            { text: "रंगहीन", correct: false },
            { text: "हर वस्तु के किनारे इंद्रधनुषी होते", correct: true },
            { text: "बिल्कुल वैसी ही जैसी अब है", correct: false },
            { text: "सब कुछ काला दिखाई देता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि सभी लेंस और हमारी आंखें भी प्रकाश को विक्षेपित करतीं, तो हमें हर चीज के चारों ओर रंगीन झालरें (वर्ण विपथन) दिखाई देतीं।"
    },
    {
        question: "प्रश्न 39. इंद्रधनुष में एक रंग का अंत और दूसरे का प्रारंभ इतना स्पष्ट क्यों नहीं होता?",
        answers: shuffle([
            { text: "क्योंकि रंग एक-दूसरे में विलीन हो जाते हैं।", correct: true },
            { text: "हमारी आंखों में दोष के कारण।", correct: false },
            { text: "हवा में धूल के कारण।", correct: false },
            { text: "यह एक भ्रम है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के प्रकाश का स्पेक्ट्रम सतत है, जिसमें एक रंग धीरे-धीरे दूसरे में बदलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रंगों के बीच कोई कठोर सीमा नहीं होती है।"
    },
    {
        question: "प्रश्न 40. \"ग्लोरी\" (Glory) नामक वायुमंडलीय घटना क्या है?",
        answers: shuffle([
            { text: "इंद्रधनुष का दूसरा नाम", correct: false },
            { text: "प्रेक्षक की छाया के चारों ओर दिखाई देने वाले रंगीन छल्ले", correct: true },
            { text: "सूर्य के चारों ओर एक प्रभामंडल", correct: false },
            { text: "ध्रुवीय ज्योति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक प्रकाशिक घटना है जो पानी की बूंदों द्वारा प्रकाश के पश्च-प्रकीर्णन (backscattering) और व्यतिकरण के कारण होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> और आमतौर पर हवाई जहाज से बादलों पर देखी जाती है।"
    },
    {
        question: "प्रश्न 41. एक प्रिज्म द्वारा विक्षेपण की प्रक्रिया में प्रकाश का कौन सा गुण बदलता है?",
        answers: shuffle([
            { text: "आवृत्ति", correct: false },
            { text: "वेग और तरंगदैर्ध्य", correct: true },
            { text: "रंग", correct: false },
            { text: "ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रकाश प्रिज्म में प्रवेश करता है, तो उसकी आवृत्ति स्थिर रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन माध्यम में उसका वेग और तरंगदैर्ध्य बदल जाता है, और यही अपवर्तन और विक्षेपण का कारण है।"
    },
    {
        question: "प्रश्न 42. यदि सूर्य नीला होता, तो इंद्रधनुष कैसा होता?",
        answers: shuffle([
            { text: "अभी भी सात रंगों का होता", correct: false },
            { text: "केवल नीले, हरे और बैंगनी रंगों की छटाओं का होता", correct: true },
            { text: "पूरी तरह से लाल होता", correct: false },
            { text: "अदृश्य होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष केवल उन्हीं रंगों को दिखा सकता है जो प्रकाश स्रोत में मौजूद हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि स्रोत में लाल, पीला, नारंगी नहीं है, तो वे इंद्रधनुष में भी नहीं होंगे।"
    },
    {
        question: "प्रश्न 43. एक तरल प्रिज्म कैसे काम करता है?",
        answers: shuffle([
            { text: "यह काम नहीं कर सकता।", correct: false },
            { text: "एक खोखले कांच के प्रिज्म में एक पारदर्शी तरल भरकर।", correct: true },
            { text: "तरल को जमा कर।", correct: false },
            { text: "यह एक सैद्धांतिक अवधारणा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक खोखले कांच के प्रिज्म में एक पारदर्शी तरल भरकर।<br><br><i class='fa-solid fa-angles-right icon'></i> विक्षेपण तरल के अपवर्तनांक पर निर्भर करेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> विभिन्न तरल पदार्थों का उपयोग करके विक्षेपण क्षमता को बदला जा सकता है।"
    },
    {
        question: "प्रश्न 44. इंद्रधनुष के रंग हमें एक निश्चित क्रम में ही क्यों दिखाई देते हैं?",
        answers: shuffle([
            { text: "यह एक संयोग है।", correct: false },
            { text: "क्योंकि पानी की बूंदें उन्हें इसी क्रम में उत्सर्जित करती हैं।", correct: false },
            { text: "क्योंकि प्रत्येक रंग एक विशिष्ट और निश्चित कोण पर अपवर्तित और परावर्तित होता है।", correct: true },
            { text: "क्योंकि हमारी आंखें उन्हें इसी क्रम में देखती हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्षेपण की भौतिकी और परावर्तन की ज्यामिति यह तय करती है कि लाल हमेशा 42° पर और बैंगनी हमेशा 40° पर दिखाई देगा।<br><br><i class='fa-solid fa-angles-right icon'></i> जिससे क्रम निश्चित हो जाता है।"
    },
    {
        question: "प्रश्न 45. \"स्पेक्ट्रम\" शब्द का पहली बार प्रयोग किसने किया?",
        answers: shuffle([
            { text: "गैलीलियो", correct: false },
            { text: "केपलर", correct: false },
            { text: "आइजैक न्यूटन", correct: true },
            { text: "आइंस्टीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन ने प्रिज्म द्वारा बनाए गए रंगों के बैंड का वर्णन करने के लिए लैटिन शब्द \"स्पेक्ट्रम\" (जिसका अर्थ है \"आभास\" या \"प्रेत\") का उपयोग किया।"
    },
    {
        question: "प्रश्न 46. यदि आप इंद्रधनुष को ध्रुवीकरण वाले धूप के चश्मे से देखें तो क्या होगा?",
        answers: shuffle([
            { text: "कुछ नहीं होगा।", correct: false },
            { text: "इंद्रधनुष अधिक चमकीला दिखाई देगा।", correct: false },
            { text: "चश्मे को घुमाने पर इंद्रधनुष धुंधला या गायब हो सकता है।", correct: true },
            { text: "इंद्रधनुष के रंग बदल जाएंगे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इंद्रधनुष का प्रकाश दृढ़ता से ध्रुवित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ध्रुवीकरण फिल्टर इस ध्रुवित प्रकाश को रोक सकता है।"
    },
    {
        question: "प्रश्न 47. पानी की बूंदों के अलावा, इंद्रधनुष और किससे बन सकता है?",
        answers: shuffle([
            { text: "केवल कांच के मोतियों से", correct: false },
            { text: "किसी भी पारदर्शी गोलाकार वस्तु से", correct: true },
            { text: "बर्फ के क्रिस्टल से", correct: false },
            { text: "तेल की बूंदों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोई भी वस्तु जो प्रकाश को अपवर्तित, विक्षेपित और आंतरिक रूप से परावर्तित कर सकती है, जैसे कांच के गोले, इंद्रधनुष जैसा प्रभाव पैदा कर सकती है।"
    },
    {
        question: "प्रश्न 48. प्रिज्म के पदार्थ के अपवर्तनांक का सूत्र, न्यूनतम विचलन कोण (δm) और प्रिज्म कोण (A) के पदों में क्या है?",
        answers: shuffle([
            { text: "sin(A) / sin(δm)", correct: false },
            { text: "sin((A+δm)/2) / sin(A/2)", correct: true },
            { text: "sin(A/2) / sin((A+δm)/2)", correct: false },
            { text: "A / δm", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रिज्म के पदार्थ का अपवर्तनांक ज्ञात करने के लिए मानक सूत्र है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसे स्पेक्ट्रोमीटर प्रयोगों में उपयोग किया जाता है।"
    },
    {
        question: "प्रश्न 49. क्या एक प्रिज्म प्रकाश उत्पन्न करता है?",
        answers: shuffle([
            { text: "हाँ, यह सफेद प्रकाश से रंग उत्पन्न करता है।", correct: false },
            { text: "नहीं, यह केवल पहले से मौजूद रंगों को अलग करता है।", correct: true },
            { text: "केवल विशेष प्रकार के प्रिज्म।", correct: false },
            { text: "हाँ, यदि उसे गर्म किया जाए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक आम गलतफहमी है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रिज्म कोई रंग नहीं बनाता; यह केवल सफेद प्रकाश में पहले से मिश्रित रंगों को प्रकट करता है।"
    },
    {
        question: "प्रश्न 50. एक प्रिज्म का कार्य निकटतम रूप से किस अन्य प्रकाशिक उपकरण जैसा है?",
        answers: shuffle([
            { text: "समतल दर्पण", correct: false },
            { text: "अवतल लेंस", correct: false },
            { text: "लेंसों का एक जोड़ा", correct: true },
            { text: "कांच का स्लैब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक प्रिज्म को दो लेंसों के हिस्सों (एक आधार की ओर और एक शीर्ष की ओर) से बना हुआ माना जा सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जो प्रकाश को मोड़ते हैं।"
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