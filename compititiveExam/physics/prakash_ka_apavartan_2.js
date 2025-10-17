const questions = [
    {
        topHeading: "प्रकाश के अपवर्तन पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. एक माध्यम जितना अधिक प्रकाशिक रूप से सघन होगा, उसमें प्रकाश की गति उतनी ही...",
        answers: shuffle([
            { text: "अधिक होगी।", correct: false },
            { text: "कम होगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false },
            { text: "शून्य हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशिक सघनता का अर्थ ही प्रकाश की गति को धीमा करने की क्षमता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सघन माध्यम में कण पास-पास होते हैं, जो प्रकाश के संचरण को धीमा कर देते हैं।"
    },
    {
        question: "प्रश्न 2. प्राथमिक इंद्रधनुष में रंगों का क्रम बाहर से अंदर की ओर क्या होता है?",
        answers: shuffle([
            { text: "बैंगनी से लाल", correct: false },
            { text: "लाल से बैंगनी", correct: true },
            { text: "हरा से पीला", correct: false },
            { text: "नीला से लाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राथमिक इंद्रधनुष में, जो अधिक चमकीला होता है, सबसे बाहरी चाप लाल रंग का और सबसे भीतरी चाप बैंगनी रंग का होता है।"
    },
    {
        question: "प्रश्न 3. द्वितीयक इंद्रधनुष, जो प्राथमिक के ऊपर बनता है, क्यों धुंधला होता है?",
        answers: shuffle([
            { text: "क्योंकि वह छोटा होता है।", correct: false },
            { text: "क्योंकि उसमें दो बार पूर्ण आंतरिक परावर्तन होता है।", correct: true },
            { text: "क्योंकि वह दूर होता है।", correct: false },
            { text: "क्योंकि उसमें रंग कम होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्येक परावर्तन में कुछ प्रकाश ऊर्जा का क्षय होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दो बार पूर्ण आंतरिक परावर्तन होने के कारण द्वितीयक इंद्रधनुष कम चमकीला या धुंधला दिखाई देता है।"
    },
    {
        question: "प्रश्न 4. 'आभासी गहराई' का क्या अर्थ है?",
        answers: shuffle([
            { text: "किसी वस्तु की वास्तविक गहराई।", correct: false },
            { text: "वह गहराई जहाँ वस्तु अपवर्तन के कारण दिखाई देती है।", correct: true },
            { text: "प्रकाश द्वारा तय की गई कुल दूरी।", correct: false },
            { text: "माध्यम की कुल मोटाई।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तन के कारण, सघन माध्यम में स्थित वस्तु अपनी वास्तविक स्थिति से कुछ ऊपर उठी हुई प्रतीत होती है, इसी प्रतीत होने वाली गहराई को आभासी गहराई कहते हैं।"
    },
    {
        question: "प्रश्न 5. यदि आपतन कोण क्रांतिक कोण के बराबर हो, तो प्रकाश किरण का क्या होगा?",
        answers: shuffle([
            { text: "वह सीधी निकल जाएगी।", correct: false },
            { text: "वह अभिलंब की ओर मुड़ जाएगी।", correct: false },
            { text: "वह दोनों माध्यमों की सतह के साथ-साथ निकल जाएगी।", correct: true },
            { text: "वह पूर्ण आंतरिक परावर्तित हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में अपवर्तन कोण 90 डिग्री होता है, जिसका अर्थ है कि किरण सतह को छूते हुए (grazing) निकलती है।"
    },
    {
        question: "प्रश्न 6. जरा-दूरदृष्टिता (प्रेस्बायोपिया) को ठीक करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "केवल उत्तल लेंस", correct: false },
            { text: "केवल अवतल लेंस", correct: false },
            { text: "द्विफोकसी लेंस (बाइफोकल)", correct: true },
            { text: "बेलनाकार लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह दोष उम्र बढ़ने के कारण होता है जिसमें पास और दूर दोनों की दृष्टि प्रभावित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> द्विफोकसी लेंस में ऊपरी भाग अवतल (दूर देखने के लिए) और निचला भाग उत्तल (पास देखने के लिए) होता है।"
    },
    {
        question: "प्रश्न 7. लेंस में आवर्धन का धनात्मक चिह्न क्या दर्शाता है?",
        answers: shuffle([
            { text: "प्रतिबिंब वास्तविक और उल्टा है।", correct: false },
            { text: "प्रतिबिंब आभासी और सीधा है।", correct: true },
            { text: "प्रतिबिंब वस्तु से बड़ा है।", correct: false },
            { text: "प्रतिबिंब वस्तु से छोटा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिह्न परिपाटी के अनुसार, धनात्मक आवर्धन का अर्थ है कि प्रतिबिंब मुख्य अक्ष के ऊपर बना है, यानी वह सीधा है, और सीधे प्रतिबिंब हमेशा आभासी होते हैं।"
    },
    {
        question: "प्रश्न 8. यदि कोई उत्तल लेंस सूर्य के प्रकाश को एक बिंदु पर केंद्रित करता है, तो वह बिंदु क्या कहलाता है?",
        answers: shuffle([
            { text: "प्रकाशिक केंद्र", correct: false },
            { text: "वक्रता केंद्र", correct: false },
            { text: "मुख्य फोकस", correct: true },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य अनंत पर स्थित माना जाता है, और अनंत से आने वाली समानांतर किरणें उत्तल लेंस द्वारा अपवर्तन के बाद मुख्य फोकस पर अभिसरित होती हैं।"
    },
    {
        question: "प्रश्न 9. सापेक्ष अपवर्तनांक की इकाई क्या है?",
        answers: shuffle([
            { text: "मीटर", correct: false },
            { text: "डायोप्टर", correct: false },
            { text: "डिग्री", correct: false },
            { text: "इसकी कोई इकाई नहीं होती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तनांक दो समान राशियों (या तो गति का अनुपात या ज्या का अनुपात) का अनुपात होता है, इसलिए यह एक विमाहीन और मात्रकहीन राशि है।"
    },
    {
        question: "प्रश्न 10. कौन सी घटना यह सिद्ध करती है कि प्रकाश की गति हवा की तुलना में पानी में कम होती है?",
        answers: shuffle([
            { text: "प्रकाश का सीधा चलना", correct: false },
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: true },
            { text: "विवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तन की घटना ही इसलिए होती है क्योंकि प्रकाश की गति माध्यम बदलने पर बदल जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> पानी में अभिलंब की ओर झुकना यह दर्शाता है कि गति कम हो गई है।"
    },
    {
        question: "प्रश्न 11. जब एक वस्तु को उत्तल लेंस के प्रकाशिक केंद्र और फोकस के बीच रखा जाता है, तो प्रतिबिंब कैसा बनता है?",
        answers: shuffle([
            { text: "वास्तविक, उल्टा और बड़ा", correct: false },
            { text: "आभासी, सीधा और बड़ा", correct: true },
            { text: "वास्तविक, उल्टा और छोटा", correct: false },
            { text: "आभासी, सीधा और छोटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यही सिद्धांत आवर्धक लेंस (magnifying glass) में उपयोग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रतिबिंब उसी तरफ बनता है जिस तरफ वस्तु होती है।"
    },
    {
        question: "प्रश्न 12. लेंस का कौन सा बिंदु उसके मुख्य अक्ष पर स्थित होता है?",
        answers: shuffle([
            { text: "केवल प्रकाशिक केंद्र", correct: false },
            { text: "केवल मुख्य फोकस", correct: false },
            { text: "केवल वक्रता केंद्र (2F)", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशिक केंद्र, मुख्य फोकस और वक्रता केंद्र, ये सभी बिंदु लेंस के मुख्य अक्ष पर ही स्थित होते हैं।"
    },
    {
        question: "प्रश्न 13. प्रकाश के विक्षेपण की खोज किसने की थी?",
        answers: shuffle([
            { text: "हाइगेंस", correct: false },
            { text: "न्यूटन", correct: true },
            { text: "फैराडे", correct: false },
            { text: "मैक्सवेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर आइजैक न्यूटन ने प्रिज्म का उपयोग करके यह प्रदर्शित किया कि सफेद प्रकाश वास्तव में सात अलग-अलग रंगों का मिश्रण है।"
    },
    {
        question: "प्रश्न 14. कैमरे का लेंस फिल्म या सेंसर पर किस प्रकार का प्रतिबिंब बनाता है?",
        answers: shuffle([
            { text: "वास्तविक, उल्टा और छोटा", correct: true },
            { text: "आभासी, सीधा और बड़ा", correct: false },
            { text: "वास्तविक, सीधा और छोटा", correct: false },
            { text: "आभासी, उल्टा और बड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैमरे में एक उत्तल लेंस होता है जो दूर की वस्तु का एक वास्तविक और छोटा प्रतिबिंब सेंसर पर बनाता है ताकि उसे रिकॉर्ड किया जा सके।"
    },
    {
        question: "प्रश्न 15. पानी के अंदर से देखने पर बाहर की वस्तुएं अपनी वास्तविक स्थिति से कहाँ दिखाई देती हैं?",
        answers: shuffle([
            { text: "अधिक दूर", correct: true },
            { text: "अधिक पास", correct: false },
            { text: "उसी स्थान पर", correct: false },
            { text: "उल्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सामान्य स्थिति का उल्टा है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब प्रेक्षक सघन माध्यम में हो और वस्तु विरल माध्यम में, तो वस्तु अपवर्तन के कारण अपनी वास्तविक स्थिति से अधिक दूर दिखाई देगी।"
    },
    {
        question: "प्रश्न 16. यदि किसी माध्यम का क्रांतिक कोण बहुत छोटा है, तो उसका अपवर्तनांक कैसा होगा?",
        answers: shuffle([
            { text: "बहुत कम", correct: false },
            { text: "बहुत अधिक", correct: true },
            { text: "एक के बराबर", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रांतिक कोण और अपवर्तनांक में व्युत्क्रम संबंध होता है (sinC=1/n)।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि क्रांतिक कोण (C) छोटा है, तो अपवर्तनांक (n) अधिक होगा, जैसा कि हीरे के मामले में होता है।"
    },
    {
        question: "प्रश्न 17. आंख की समंजन क्षमता क्या है?",
        answers: shuffle([
            { text: "रंगों में भेद करने की क्षमता", correct: false },
            { text: "प्रकाश की तीव्रता के अनुसार पुतली को समायोजित करने की क्षमता", correct: false },
            { text: "फोकस दूरी को समायोजित करके पास और दूर की वस्तुओं को स्पष्ट रूप से देखने की क्षमता", correct: true },
            { text: "अंधेरे में देखने की क्षमता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्ष्माभी मांसपेशियां (ciliary muscles) नेत्र लेंस की वक्रता को बदलकर उसकी फोकस दूरी को समायोजित करती हैं, जिससे हम विभिन्न दूरियों पर वस्तुओं को केंद्रित कर पाते हैं।"
    },
    {
        question: "प्रश्न 18. एक मोटा लेंस और एक पतला लेंस (समान पदार्थ के) में से किसकी शक्ति अधिक होगी?",
        answers: shuffle([
            { text: "मोटे लेंस की", correct: true },
            { text: "पतले लेंस की", correct: false },
            { text: "दोनों की बराबर होगी", correct: false },
            { text: "कहा नहीं जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक मोटा उत्तल लेंस अधिक वक्रता वाला होता है, जिससे उसकी फोकस दूरी कम होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि शक्ति फोकस दूरी के व्युत्क्रमानुपाती होती है, इसलिए मोटे लेंस की शक्ति अधिक होगी।"
    },
    {
        question: "प्रश्न 19. प्रकाश की तरंग प्रकृति अपवर्तन की घटना की व्याख्या कैसे करती है?",
        answers: shuffle([
            { text: "यह बताकर कि प्रकाश कणों से बना है।", correct: false },
            { text: "यह बताकर कि विभिन्न माध्यमों में तरंग की गति बदल जाती है।", correct: true },
            { text: "यह बताकर कि प्रकाश ऊर्जा के पैकेट हैं।", correct: false },
            { text: "यह इसकी व्याख्या नहीं कर सकता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइगेंस के तरंग सिद्धांत के अनुसार, जब एक तरंगाग्र (wavefront) एक माध्यम से दूसरे में प्रवेश करता है, तो गति में परिवर्तन के कारण वह मुड़ जाता है, जो अपवर्तन है।"
    },
    {
        question: "प्रश्न 20. यदि हवा के सापेक्ष कांच का अपवर्तनांक 1.5 है, तो कांच के सापेक्ष हवा का अपवर्तनांक कितना होगा?",
        answers: shuffle([
            { text: "1.5", correct: false },
            { text: "1/1.5", correct: true },
            { text: "1", correct: false },
            { text: "0", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक माध्यम का दूसरे के सापेक्ष अपवर्तनांक, दूसरे माध्यम का पहले के सापेक्ष अपवर्तनांक का व्युत्क्रम होता है।"
    },
    {
        question: "प्रश्न 21. 'प्रकाशिक घनत्व' और 'द्रव्यमान घनत्व' में क्या संबंध है?",
        answers: shuffle([
            { text: "वे हमेशा समान होते हैं।", correct: false },
            { text: "वे हमेशा व्युत्क्रमानुपाती होते हैं।", correct: false },
            { text: "उनमें कोई सीधा संबंध होना आवश्यक नहीं है।", correct: true },
            { text: "प्रकाशिक घनत्व हमेशा अधिक होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, तारपीन का तेल पानी से कम घना (द्रव्यमान घनत्व) होता है, लेकिन प्रकाशिक रूप से अधिक सघन (अधिक अपवर्तनांक) होता है।"
    },
    {
        question: "प्रश्न 22. न्यूटन की डिस्क को तेजी से घुमाने पर वह सफेद क्यों दिखाई देती है?",
        answers: shuffle([
            { text: "अपवर्तन के कारण", correct: false },
            { text: "विक्षेपण के कारण", correct: false },
            { text: "दृष्टि निर्बंध (Persistence of vision) के कारण", correct: true },
            { text: "परावर्तन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब डिस्क तेजी से घूमती है, तो सभी सात रंगों के प्रतिबिंब रेटिना पर इतनी तेजी से बनते हैं कि हमारी आंखें उन्हें अलग नहीं कर पातीं और उनका संयोजन हमें सफेद दिखाई देता है।"
    },
    {
        question: "प्रश्न 23. एक अभिसारी लेंस हवा में अभिसारी होता है। यदि इसे ऐसे द्रव में डुबोया जाए जिसका अपवर्तनांक लेंस के पदार्थ से अधिक हो, तो यह कैसा व्यवहार करेगा?",
        answers: shuffle([
            { text: "अभिसारी लेंस की तरह ही", correct: false },
            { text: "अपसारी लेंस की तरह", correct: true },
            { text: "समतल कांच की प्लेट की तरह", correct: false },
            { text: "दर्पण की तरह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब बाहरी माध्यम लेंस के माध्यम से अधिक सघन हो जाता है, तो लेंस की प्रकृति उलट जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तल लेंस अवतल की तरह और अवतल लेंस उत्तल की तरह व्यवहार करने लगता है।"
    },
    {
        question: "प्रश्न 24. अपवर्तन के दूसरे नियम (स्नेल का नियम) में कौन सी राशि नियत रहती है?",
        answers: shuffle([
            { text: "आपतन कोण", correct: false },
            { text: "अपवर्तन कोण", correct: false },
            { text: "आपतन कोण की ज्या और अपवर्तन कोण की ज्या का अनुपात", correct: true },
            { text: "प्रकाश की गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्नेल के नियम के अनुसार, sin(i)/sin(r) का मान दिए गए दो माध्यमों के लिए एक स्थिरांक होता है, जिसे दूसरे माध्यम का पहले के सापेक्ष अपवर्तनांक कहते हैं।"
    },
    {
        question: "प्रश्न 25. कांच का स्लैब प्रकाश किरणों को अभिसरित या अपसरित क्यों नहीं करता है?",
        answers: shuffle([
            { text: "क्योंकि वह बहुत पतला होता है।", correct: false },
            { text: "क्योंकि उसकी दोनों सतहें समानांतर होती हैं।", correct: true },
            { text: "क्योंकि उसका अपवर्तनांक कम होता है।", correct: false },
            { text: "क्योंकि वह प्रकाश को अवशोषित कर लेता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पहली सतह पर होने वाला झुकाव दूसरी समानांतर सतह पर होने वाले विपरीत झुकाव से निरस्त हो जाता है, इसलिए किरणें केवल पार्श्व रूप से विस्थापित होती हैं, मुड़ती नहीं हैं।"
    },
    {
        question: "प्रश्न 26. एक लेंस की फोकस दूरी लाल रंग के लिए अधिक होती है या बैंगनी रंग के लिए?",
        answers: shuffle([
            { text: "लाल रंग के लिए", correct: true },
            { text: "बैंगनी रंग के लिए", correct: false },
            { text: "दोनों के लिए समान होती है।", correct: false },
            { text: "यह लेंस के प्रकार पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि बैंगनी रंग के लिए कांच का अपवर्तनांक अधिक होता है, इसलिए वह उसे अधिक मोड़ता है, जिससे बैंगनी रंग के लिए फोकस दूरी कम हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके विपरीत, लाल रंग के लिए फोकस दूरी अधिक होती है।"
    },
    {
        question: "प्रश्न 27. इस घटना को क्या कहते हैं जिसके कारण लेंस स्पष्ट प्रतिबिंब नहीं बना पाते क्योंकि विभिन्न रंगों के लिए फोकस दूरी अलग-अलग होती है?",
        answers: shuffle([
            { text: "गोलीय विपथन", correct: false },
            { text: "वर्ण विपथन", correct: true },
            { text: "दृष्टिवैषम्य", correct: false },
            { text: "कोमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्ण विपथन (Chromatic Aberration) लेंस का एक दोष है जो विक्षेपण के कारण उत्पन्न होता है, जिससे प्रतिबिंब के किनारों पर रंगीन झालर दिखाई देती है।"
    },
    {
        question: "प्रश्न 28. कौन सी प्रकाशिक घटना केवल अनुप्रस्थ तरंगों में होती है, अनुदैर्ध्य में नहीं?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "अपवर्तन", correct: false },
            { text: "विवर्तन", correct: false },
            { text: "ध्रुवण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुवण (Polarization) तरंग के कंपनों को एक ही तल में सीमित करने की प्रक्रिया है, जो केवल अनुप्रस्थ तरंगों (जैसे प्रकाश) में संभव है, ध्वनि जैसी अनुदैर्ध्य तरंगों में नहीं।"
    },
    {
        question: "प्रश्न 29. यदि किसी उत्तल लेंस का आधा भाग काले कागज से ढक दिया जाए, तो प्रतिबिंब पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "प्रतिबिंब बनना बंद हो जाएगा।", correct: false },
            { text: "प्रतिबिंब का आकार आधा हो जाएगा।", correct: false },
            { text: "प्रतिबिंब की तीव्रता (चमक) कम हो जाएगी।", correct: true },
            { text: "प्रतिबिंब उल्टा हो जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूरा प्रतिबिंब अभी भी बनेगा क्योंकि वस्तु के प्रत्येक बिंदु से आने वाली किरणें लेंस के शेष आधे हिस्से से होकर गुजरेंगी।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, कम प्रकाश गुजरने के कारण प्रतिबिंब धुंधला या कम चमकीला हो जाएगा।"
    },
    {
        question: "प्रश्न 30. दूरबीन का अभिदृश्यक लेंस (objective lens) बड़े द्वारक का क्यों बनाया जाता है?",
        answers: shuffle([
            { text: "आवर्धन क्षमता बढ़ाने के लिए", correct: false },
            { text: "अधिक प्रकाश इकट्ठा करने के लिए ताकि चमकीला प्रतिबिंब बने", correct: true },
            { text: "फोकस दूरी कम करने के लिए", correct: false },
            { text: "दोषों को कम करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूर की वस्तुओं (जैसे तारे) से बहुत कम प्रकाश आता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बड़ा द्वारक अधिक प्रकाश एकत्र करता है, जिससे बनने वाला प्रतिबिंब स्पष्ट और चमकीला होता है।"
    },
    {
        question: "प्रश्न 31. जब हम किसी पुस्तक को आँख के बहुत पास लाते हैं, तो वह धुंधली क्यों दिखाई देती है?",
        answers: shuffle([
            { text: "अपवर्तन कम होने के कारण", correct: false },
            { text: "आँख की समंजन क्षमता की सीमा के कारण", correct: true },
            { text: "प्रकाश की कमी के कारण", correct: false },
            { text: "परावर्तन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारी आँखें एक निश्चित न्यूनतम दूरी (स्पष्ट दृष्टि की न्यूनतम दूरी, लगभग 25 सेमी) से अधिक फोकस दूरी को कम नहीं कर सकतीं।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे पास लाने पर प्रतिबिंब रेटिना पर केंद्रित नहीं हो पाता।"
    },
    {
        question: "प्रश्न 32. विरल माध्यम के सापेक्ष सघन माध्यम का अपवर्तनांक हमेशा कैसा होता है?",
        answers: shuffle([
            { text: "एक से कम", correct: false },
            { text: "एक से अधिक", correct: true },
            { text: "एक के बराबर", correct: false },
            { text: "शून्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योंकि सघन माध्यम में प्रकाश की गति विरल माध्यम से कम होती है, उनका अनुपात (अपवर्तनांक) हमेशा एक से अधिक होता है।"
    },
    {
        question: "प्रश्न 33. अपवर्तन के दौरान, आपतित किरण, अपवर्तित किरण और अभिलंब...",
        answers: shuffle([
            { text: "विभिन्न तलों में होते हैं।", correct: false },
            { text: "एक ही तल में होते हैं।", correct: true },
            { text: "एक दूसरे के समानांतर होते हैं।", correct: false },
            { text: "कभी नहीं मिलते।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अपवर्तन का पहला नियम है, जो परावर्तन के नियम के समान है।"
    },
    {
        question: "प्रश्न 34. पानी में हवा का बुलबुला कैसा व्यवहार करता है?",
        answers: shuffle([
            { text: "उत्तल लेंस की तरह", correct: false },
            { text: "अवतल लेंस की तरह", correct: true },
            { text: "कांच की प्लेट की तरह", correct: false },
            { text: "दर्पण की तरह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि बुलबुले का आकार उत्तल होता है, क्योंकि यह विरल माध्यम (हवा) से बना है और सघन माध्यम (पानी) में है, यह प्रकाश किरणों को अपसरित करता है, इसलिए यह अवतल लेंस की तरह व्यवहार करता है।"
    },
    {
        question: "प्रश्न 35. लेंस की शक्ति का चिह्न क्या बताता है?",
        answers: shuffle([
            { text: "लेंस की सामग्री", correct: false },
            { text: "लेंस का आकार", correct: false },
            { text: "लेंस की प्रकृति (अभिसारी या अपसारी)", correct: true },
            { text: "लेंस की कीमत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धनात्मक शक्ति एक अभिसारी (उत्तल) लेंस को इंगित करती है, जबकि ऋणात्मक शक्ति एक अपसारी (अवतल) लेंस को इंगित करती है।"
    },
    {
        question: "प्रश्न 36. वह बिंदु क्या है जिस पर मुख्य अक्ष के समानांतर किरणें अवतल लेंस से अपवर्तन के बाद आती हुई प्रतीत होती हैं?",
        answers: shuffle([
            { text: "प्रकाशिक केंद्र", correct: false },
            { text: "वक्रता केंद्र", correct: false },
            { text: "मुख्य फोकस", correct: true },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अवतल लेंस के (आभासी) मुख्य फोकस की परिभाषा है।<br><br><i class='fa-solid fa-angles-right icon'></i> किरणें अपवर्तन के बाद फैल जाती हैं और इस बिंदु से आती हुई प्रतीत होती हैं।"
    },
    {
        question: "प्रश्न 37. संयुक्त सूक्ष्मदर्शी में अंतिम प्रतिबिंब कैसा बनता है?",
        answers: shuffle([
            { text: "वास्तविक, सीधा और बड़ा", correct: false },
            { text: "आभासी, उल्टा और बड़ा", correct: true },
            { text: "वास्तविक, उल्टा और छोटा", correct: false },
            { text: "आभासी, सीधा और छोटा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अभिदृश्यक लेंस एक वास्तविक और उल्टा प्रतिबिंब बनाता है, जिसे नेत्रिका लेंस एक आवर्धक के रूप में उपयोग करके एक अंतिम, बड़ा और आभासी प्रतिबिंब बनाता है जो मूल वस्तु के सापेक्ष उल्टा होता है।"
    },
    {
        question: "प्रश्न 38. यदि एक माध्यम का अपवर्तनांक बढ़ता है, तो उस माध्यम में प्रकाश की गति...",
        answers: shuffle([
            { text: "बढ़ती है।", correct: false },
            { text: "घटती है।", correct: true },
            { text: "अपरिवर्तित रहती है।", correct: false },
            { text: "पहले बढ़ती है फिर घटती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तनांक और प्रकाश की गति में व्युत्क्रम संबंध होता है (n=c/v)।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च अपवर्तनांक का अर्थ है कम गति।"
    },
    {
        question: "प्रश्न 39. प्रकाश के प्रकीर्णन की मात्रा किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "प्रकाश की आवृत्ति पर", correct: false },
            { text: "प्रकाश के तरंगदैर्ध्य पर", correct: true },
            { text: "प्रकाश की तीव्रता पर", correct: false },
            { text: "प्रकाश की गति पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रैले के प्रकीर्णन नियम के अनुसार, प्रकीर्णन की मात्रा तरंगदैर्ध्य की चौथी घात के व्युत्क्रमानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> छोटे तरंगदैर्ध्य (जैसे नीला) का प्रकीर्णन अधिक होता है।"
    },
    {
        question: "प्रश्न 40. खतरे के संकेत लाल रंग के क्यों बनाए जाते हैं?",
        answers: shuffle([
            { text: "क्योंकि लाल रंग सुंदर होता है।", correct: false },
            { text: "क्योंकि लाल रंग का प्रकीर्णन सबसे कम होता है और वह दूर से दिखाई देता है।", correct: true },
            { text: "क्योंकि लाल रंग का उत्पादन सस्ता है।", correct: false },
            { text: "क्योंकि यह एक परंपरा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल रंग का तरंगदैर्ध्य सबसे अधिक होता है, इसलिए कोहरे या धुएं में उसका प्रकीर्णन सबसे कम होता है, जिससे वह लंबी दूरी से भी स्पष्ट रूप से देखा जा सकता है।"
    },
    {
        question: "प्रश्न 41. यदि किसी लेंस की शक्ति +2.0 D है, तो उसकी फोकस दूरी कितनी है?",
        answers: shuffle([
            { text: "+2.0 मीटर", correct: false },
            { text: "-2.0 मीटर", correct: false },
            { text: "+0.5 मीटर", correct: true },
            { text: "-0.5 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फोकस दूरी, f=1/P=1/2.0=0.5 मीटर।<br><br><i class='fa-solid fa-angles-right icon'></i> चिह्न धनात्मक रहेगा।"
    },
    {
        question: "प्रश्न 42. लेंस में वस्तु की दूरी (u) को आमतौर पर चिह्न परिपाटी के अनुसार कैसा लिया जाता है?",
        answers: shuffle([
            { text: "धनात्मक", correct: false },
            { text: "ऋणात्मक", correct: true },
            { text: "शून्य", correct: false },
            { text: "यह स्थिति पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश आपतित किरण की दिशा में धनात्मक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूंकि वस्तु आमतौर पर लेंस के बाईं ओर रखी जाती है और प्रकाश बाईं से दाईं ओर आता है, इसलिए वस्तु की दूरी (u) को ऋणात्मक लिया जाता है।"
    },
    {
        question: "प्रश्न 43. खगोलीय दूरबीन द्वारा बनाया गया अंतिम प्रतिबिंब कैसा होता है?",
        answers: shuffle([
            { text: "वास्तविक और सीधा", correct: false },
            { text: "आभासी और उल्टा", correct: true },
            { text: "वास्तविक और उल्टा", correct: false },
            { text: "आभासी और सीधा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूरबीन में, अभिदृश्यक एक वास्तविक और उल्टा प्रतिबिंब बनाता है, और नेत्रिका इसका एक अंतिम आभासी और आवर्धित प्रतिबिंब बनाती है, जो मूल वस्तु के सापेक्ष उल्टा रहता है।"
    },
    {
        question: "प्रश्न 44. सूर्य के प्रकाश से प्राप्त स्पेक्ट्रम में बैंगनी रंग के बाद कौन सा अदृश्य विकिरण होता है?",
        answers: shuffle([
            { text: "अवरक्त", correct: false },
            { text: "पराबैंगनी", correct: true },
            { text: "एक्स-किरणें", correct: false },
            { text: "रेडियो तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेक्ट्रम में, बैंगनी रंग से अधिक आवृत्ति (और कम तरंगदैर्ध्य) वाले विकिरण को पराबैंगनी (Ultraviolet) कहते हैं, जो हमारी आंखों को दिखाई नहीं देता।"
    },
    {
        question: "प्रश्न 45. सूर्य के प्रकाश से प्राप्त स्पेक्ट्रम में लाल रंग के बाद कौन सा अदृश्य विकिरण होता है?",
        answers: shuffle([
            { text: "अवरक्त", correct: true },
            { text: "पराबैंगनी", correct: false },
            { text: "गामा किरणें", correct: false },
            { text: "सूक्ष्म तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्पेक्ट्रम में, लाल रंग से कम आवृत्ति (और अधिक तरंगदैर्ध्य) वाले विकिरण को अवरक्त (Infrared) कहते हैं, जिसे हम गर्मी के रूप में महसूस कर सकते हैं लेकिन देख नहीं सकते।"
    },
    {
        question: "प्रश्न 46. यदि आपतन कोण 45 डिग्री है और अपवर्तन कोण 30 डिग्री है, तो प्रकाश किरण किस माध्यम से किस माध्यम में जा रही है?",
        answers: shuffle([
            { text: "सघन से विरल", correct: false },
            { text: "विरल से सघन", correct: true },
            { text: "समान घनत्व वाले माध्यमों के बीच", correct: false },
            { text: "निर्धारित नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि अपवर्तन कोण (30°) आपतन कोण (45°) से कम है, इसका मतलब है कि किरण अभिलंब की ओर झुक गई है, जो तभी होता है जब प्रकाश विरल से सघन माध्यम में प्रवेश करता है।"
    },
    {
        question: "प्रश्न 47. पूर्ण आंतरिक परावर्तन के लिए सघन माध्यम में आपतन कोण का मान...",
        answers: shuffle([
            { text: "क्रांतिक कोण से कम होना चाहिए।", correct: false },
            { text: "क्रांतिक कोण के बराबर होना चाहिए।", correct: false },
            { text: "क्रांतिक कोण से अधिक होना चाहिए।", correct: true },
            { text: "शून्य होना चाहिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पूर्ण आंतरिक परावर्तन की दूसरी और सबसे महत्वपूर्ण शर्त है।"
    },
    {
        question: "प्रश्न 48. किसी पदार्थ का अपवर्तनांक प्रकाश के किस रंग के लिए न्यूनतम होता है?",
        answers: shuffle([
            { text: "बैंगनी", correct: false },
            { text: "नीला", correct: false },
            { text: "पीला", correct: false },
            { text: "लाल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तनांक तरंगदैर्ध्य के व्युत्क्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूंकि लाल रंग का तरंगदैर्ध्य सबसे अधिक होता है, इसलिए उसका अपवर्तनांक सबसे कम होता है।"
    },
    {
        question: "प्रश्न 49. किसी उत्तल लेंस के लिए, जब वस्तु अनंत और 2F के बीच होती है, तो प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "2F से परे", correct: false },
            { text: "F और 2F के बीच", correct: true },
            { text: "F पर", correct: false },
            { text: "लेंस के पीछे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस स्थिति में, प्रतिबिंब वास्तविक, उल्टा और वस्तु से छोटा बनता है, और इसकी स्थिति फोकस (F) और वक्रता केंद्र (2F) के बीच होती है।"
    },
    {
        question: "प्रश्न 50. कौन सा दोष लेंस की सतहों के पूरी तरह से गोलीय न होने के कारण होता है, जिससे क्षैतिज और ऊर्ध्वाधर रेखाएं एक साथ केंद्रित नहीं हो पातीं?",
        answers: shuffle([
            { text: "निकट दृष्टि दोष", correct: false },
            { text: "दूर दृष्टि दोष", correct: false },
            { text: "दृष्टिवैषम्य (एस्टिग्मेटिज्म)", correct: true },
            { text: "वर्ण विपथन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दृष्टिवैषम्य में कॉर्निया या लेंस की गोलाई में अनियमितता के कारण प्रकाश ठीक से केंद्रित नहीं हो पाता।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे बेलनाकार लेंस से ठीक किया जाता है।"
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