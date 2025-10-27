const questions = [
    {
        topHeading: "संवेग संरक्षण पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. एक खाली और एक भरी हुई बंदूक से समान गोली समान वेग से दागी जाती है। किस मामले में बंदूक का प्रतिक्षेप अधिक होगा?",
        answers: shuffle([
            { text: "खाली बंदूक में", correct: true },
            { text: "भरी हुई बंदूक में", correct: false },
            { text: "दोनों में बराबर होगा", correct: false },
            { text: "प्रतिक्षेप नहीं होगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग संरक्षण के अनुसार, दोनों मामलों में बंदूक को समान संवेग मिलेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि प्रतिक्षेप वेग = संवेग / द्रव्यमान, हल्की (खाली) बंदूक का वेग अधिक होगा।"
    },
    {
        question: "प्रश्न 2. न्यूटन के गति के तीसरे नियम का प्रत्यक्ष परिणाम है:",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण का नियम", correct: false },
            { text: "जड़त्व का नियम", correct: false },
            { text: "संवेग संरक्षण का नियम", correct: true },
            { text: "त्वरण का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया-प्रतिक्रिया बल हमेशा बराबर और विपरीत होते हैं, जो यह सुनिश्चित करता है कि एक विलगित निकाय में आंतरिक बलों के कारण कुल संवेग में कोई परिवर्तन नहीं होता है।"
    },
    {
        question: "प्रश्न 3. एक घूमते हुए मंच पर खड़ा एक व्यक्ति अपनी बाहों को सिकोड़ लेता है। उसका जड़त्व आघूर्ण...",
        answers: shuffle([
            { text: "बढ़ जाता है।", correct: false },
            { text: "घट जाता है।", correct: true },
            { text: "अपरिवर्तित रहता है।", correct: false },
            { text: "उसकी कोणीय चाल पर निर्भर करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब द्रव्यमान घूर्णन अक्ष के करीब आता है, तो जड़त्व आघूर्ण घट जाता है।"
    },
    {
        question: "प्रश्न 4. पिछले प्रश्न की स्थिति में, व्यक्ति की कोणीय चाल...",
        answers: shuffle([
            { text: "बढ़ जाएगी।", correct: true },
            { text: "घट जाएगी।", correct: false },
            { text: "अपरिवर्तित रहेगी।", correct: false },
            { text: "शून्य हो जाएगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय संवेग (L=Iω) को संरक्षित रखने के लिए, यदि जड़त्व आघूर्ण (I) घटता है, तो कोणीय चाल (ω) बढ़ जाएगी।"
    },
    {
        question: "प्रश्न 5. किसी वस्तु के संवेग में परिवर्तन की दर उस पर लगे...",
        answers: shuffle([
            { text: "आवेग के बराबर होती है।", correct: false },
            { text: "बाह्य बल के बराबर होती है।", correct: true },
            { text: "कार्य के बराबर होती है।", correct: false },
            { text: "शक्ति के बराबर होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह न्यूटन के दूसरे नियम की एक और अभिव्यक्ति है।"
    },
    {
        question: "प्रश्न 6. किसी निकाय का संवेग संरक्षित नहीं रहेगा यदि...",
        answers: shuffle([
            { text: "निकाय के कण एक दूसरे से टकराते हैं।", correct: false },
            { text: "निकाय एक बाहरी बल का अनुभव करता है।", correct: true },
            { text: "निकाय की कुल ऊर्जा संरक्षित रहती है।", correct: false },
            { text: "निकाय का आकार बदलता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग संरक्षण के लिए बाहरी बल का शून्य होना आवश्यक है।"
    },
    {
        question: "प्रश्न 7. दो पिंडों के बीच पूर्णतः अप्रत्यास्थ टक्कर में, गतिज ऊर्जा की हानि...",
        answers: shuffle([
            { text: "शून्य होती है।", correct: false },
            { text: "न्यूनतम होती है।", correct: false },
            { text: "अधिकतम होती है।", correct: true },
            { text: "अनंत होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वस्तुएं आपस में जुड़ जाती हैं, तो गतिज ऊर्जा का अधिकतम संभव मात्रा ऊष्मा, ध्वनि और विरूपण में परिवर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 8. एक समान चाल से सीधी सड़क पर चलती कार के लिए, उसका संवेग...",
        answers: shuffle([
            { text: "बदल रहा है।", correct: false },
            { text: "संरक्षित है (स्थिर है)।", correct: true },
            { text: "बढ़ रहा है।", correct: false },
            { text: "घट रहा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि द्रव्यमान और वेग (परिमाण और दिशा दोनों) स्थिर हैं, इसलिए संवेग भी स्थिर या संरक्षित है।"
    },
    {
        question: "प्रश्न 9. यदि एक चलती हुई वस्तु का संवेग p है, तो उसकी गतिज ऊर्जा होगी:",
        answers: shuffle([
            { text: "p²/2m", correct: true },
            { text: "pm/2", correct: false },
            { text: "p²m", correct: false },
            { text: "2p/m", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि p=mv, तो v=p/m।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे गतिज ऊर्जा के सूत्र K=1/2mv² में रखने पर हमें K=p²/2m प्राप्त होता है।"
    },
    {
        question: "प्रश्न 10. एक बंद प्रणाली वह है जिसमें...",
        answers: shuffle([
            { text: "केवल ऊर्जा का आदान-प्रदान हो सकता है।", correct: false },
            { text: "केवल द्रव्यमान का आदान-प्रदान हो सकता है।", correct: false },
            { text: "ऊर्जा और द्रव्यमान दोनों का आदान-प्रदान हो सकता है।", correct: false },
            { text: "न तो ऊर्जा और न ही द्रव्यमान का आदान-प्रदान हो सकता है।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग संरक्षण के लिए आवश्यक विलगित निकाय एक बंद प्रणाली का एक आदर्श उदाहरण है।"
    },
    {
        question: "प्रश्न 11. एक गोताखोर डाइविंग बोर्ड से कूदने के बाद हवा में अपने शरीर को सिकोड़ लेता है। ऐसा वह क्यों करता है?",
        answers: shuffle([
            { text: "अपना वजन कम करने के लिए।", correct: false },
            { text: "अधिक देर तक हवा में रहने के लिए।", correct: false },
            { text: "अपनी घूर्णन गति (कोणीय चाल) को बढ़ाने के लिए।", correct: true },
            { text: "हवा के प्रतिरोध को बढ़ाने के लिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शरीर को सिकोड़ने से उसका जड़त्व आघूर्ण कम हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोणीय संवेग संरक्षण के कारण, उसकी कोणीय चाल बढ़ जाती है, जिससे वह अधिक कलाबाज़ियाँ कर पाता है।"
    },
    {
        question: "प्रश्न 12. ग्रहों की गति में क्या संरक्षित रहता है?",
        answers: shuffle([
            { text: "रैखिक संवेग", correct: false },
            { text: "कोणीय संवेग", correct: true },
            { text: "गतिज ऊर्जा", correct: false },
            { text: "स्थितिज ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि सूर्य द्वारा ग्रह पर लगाया गया गुरुत्वाकर्षण बल हमेशा सूर्य की ओर होता है (एक केंद्रीय बल), यह कोई बल आघूर्ण नहीं लगाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, ग्रह का कोणीय संवेग संरक्षित रहता है।"
    },
    {
        question: "प्रश्न 13. एक चलती हुई बस से उतरते समय, यात्री को बस की दिशा में कुछ दूर तक दौड़ने की सलाह क्यों दी जाती है?",
        answers: shuffle([
            { text: "बस को धक्का देने के लिए।", correct: false },
            { text: "जड़त्व के कारण शरीर के ऊपरी हिस्से की गति को बनाए रखने के लिए।", correct: true },
            { text: "संवेग बढ़ाने के लिए।", correct: false },
            { text: "यह एक अनावश्यक सावधानी है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जमीन के संपर्क में आते ही पैर रुक जाते हैं, लेकिन शरीर का ऊपरी हिस्सा बस की गति के कारण आगे बढ़ता रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दौड़ने से इस गति के साथ समन्वय स्थापित करने और गिरने से बचने में मदद मिलती है।"
    },
    {
        question: "प्रश्न 14. जब कोई बाहरी बल किसी प्रणाली पर कार्य करता है, तो...",
        answers: shuffle([
            { text: "प्रणाली का संवेग हमेशा बढ़ता है।", correct: false },
            { text: "प्रणाली का संवेग हमेशा घटता है।", correct: false },
            { text: "प्रणाली का संवेग बदल सकता है।", correct: true },
            { text: "प्रणाली का संवेग स्थिर रहता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाहरी बल प्रणाली के संवेग में परिवर्तन का कारण बनता है।"
    },
    {
        question: "प्रश्न 15. एक गेंद बिना फिसले एक सतह पर लुढ़क रही है। उसके पास है:",
        answers: shuffle([
            { text: "केवल रैखिक संवेग", correct: false },
            { text: "केवल कोणीय संवेग", correct: false },
            { text: "रैखिक और कोणीय दोनों संवेग", correct: true },
            { text: "शून्य संवेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आगे बढ़ने के कारण उसमें रैखिक संवेग और अपने अक्ष पर घूमने के कारण कोणीय संवेग होता है।"
    },
    {
        question: "प्रश्न 16. किसी वस्तु को रोकने के लिए आवश्यक आवेग निर्भर करता है:",
        answers: shuffle([
            { text: "केवल वस्तु के द्रव्यमान पर", correct: false },
            { text: "केवल वस्तु के वेग पर", correct: false },
            { text: "वस्तु के प्रारंभिक संवेग पर", correct: true },
            { text: "रोकने में लगे समय पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वस्तु को रोकने का मतलब है उसका अंतिम संवेग शून्य करना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए आवेग (Δp) = 0−pinitial​=−pinitial​।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केवल प्रारंभिक संवेग पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 17. कराटे का खिलाड़ी एक ही प्रहार में टाइलों के ढेर को तोड़ देता है। इसमें किस सिद्धांत का उपयोग होता है?",
        answers: shuffle([
            { text: "ऊर्जा संरक्षण", correct: false },
            { text: "बहुत कम समय में एक बड़ा आवेग उत्पन्न करना", correct: true },
            { text: "बर्नूली का सिद्धांत", correct: false },
            { text: "पास्कल का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खिलाड़ी बहुत तेजी से हाथ मारकर संपर्क समय को बहुत कम कर देता है, जिससे एक बहुत बड़ा आवेगी बल उत्पन्न होता है जो टाइलों को तोड़ने के लिए पर्याप्त होता है।"
    },
    {
        question: "प्रश्न 18. एक रॉकेट ऊपर की ओर त्वरित होता है क्योंकि...",
        answers: shuffle([
            { text: "ऊपर की हवा का दबाव कम होता है।", correct: false },
            { text: "गुरुत्वाकर्षण कम हो जाता है।", correct: false },
            { text: "बाहर निकलने वाली गैसों का संवेग रॉकेट के संवेग को संतुलित करता है।", correct: false },
            { text: "बाहर निकलने वाली गैसें रॉकेट पर एक बल लगाती हैं।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के तीसरे नियम के अनुसार, रॉकेट गैसों को नीचे धकेलता है, और गैसें रॉकेट को ऊपर की ओर धकेलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संवेग संरक्षण का ही एक रूप है।"
    },
    {
        question: "प्रश्न 19. यदि किसी गतिशील वस्तु का संवेग दोगुना कर दिया जाए, तो उसकी गतिज ऊर्जा...",
        answers: shuffle([
            { text: "आधी हो जाएगी।", correct: false },
            { text: "दोगुनी हो जाएगी।", correct: false },
            { text: "चार गुनी हो जाएगी।", correct: true },
            { text: "अपरिवर्तित रहेगी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि K=p²/2m, गतिज ऊर्जा संवेग के वर्ग के समानुपाती होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> संवेग को दोगुना करने पर गतिज ऊर्जा 2²=4 गुनी हो जाएगी।"
    },
    {
        question: "प्रश्न 20. एक भारी और एक हल्की वस्तु पर समान बल लगाया जाता है। किसका त्वरण अधिक होगा?",
        answers: shuffle([
            { text: "भारी वस्तु का", correct: false },
            { text: "हल्की वस्तु का", correct: true },
            { text: "दोनों का बराबर होगा", correct: false },
            { text: "उनके संवेग पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के दूसरे नियम (a=F/m) के अनुसार, त्वरण द्रव्यमान के व्युत्क्रमानुपाती होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, हल्की वस्तु का त्वरण अधिक होगा।"
    },
    {
        question: "प्रश्न 21. संवेग संरक्षण का नियम किस समरूपता (Symmetry) का परिणाम है?",
        answers: shuffle([
            { text: "समय में समरूपता", correct: false },
            { text: "स्थान में समरूपता (Translation Invariance)", correct: true },
            { text: "घूर्णन में समरूपता", correct: false },
            { text: "आवेश में समरूपता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोएथर के प्रमेय के अनुसार, भौतिकी के नियमों का स्थान बदलने पर अपरिवर्तनीय रहना (अर्थात, यहाँ और एक मीटर दूर नियम समान हैं) सीधे रैखिक संवेग संरक्षण की ओर ले जाता है।"
    },
    {
        question: "प्रश्न 22. एक फोटॉन (प्रकाश का कण) का संवेग होता है:",
        answers: shuffle([
            { text: "शून्य, क्योंकि इसका विराम द्रव्यमान शून्य होता है।", correct: false },
            { text: "अनंत", correct: false },
            { text: "अशून्य", correct: true },
            { text: "ऋणात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि फोटॉन का विराम द्रव्यमान शून्य होता है, फिर भी उसमें ऊर्जा और संवेग दोनों होते हैं (p=E/c=h/λ)।"
    },
    {
        question: "प्रश्न 23. 'बैलिस्टिक पेंडुलम' का उपयोग क्या मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण", correct: false },
            { text: "समय", correct: false },
            { text: "गोली का वेग", correct: true },
            { text: "हवा का दबाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक उपकरण है जो संवेग संरक्षण (अप्रत्यास्थ टक्कर) और ऊर्जा संरक्षण (पेंडुलम का झूलना) दोनों के सिद्धांतों का उपयोग करके तेज गति वाली वस्तुओं जैसे गोली का वेग मापता है।"
    },
    {
        question: "प्रश्न 24. टक्कर के लिए 'प्रत्यावस्थान गुणांक' (Coefficient of Restitution) का मान 1 होने का क्या अर्थ है?",
        answers: shuffle([
            { text: "टक्कर पूर्णतः अप्रत्यास्थ है।", correct: false },
            { text: "टक्कर प्रत्यास्थ है।", correct: true },
            { text: "गतिज ऊर्जा का अधिकतम क्षय हुआ है।", correct: false },
            { text: "वस्तुएं चिपक गई हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रत्यावस्थान गुणांक (e) का मान 1 एक पूर्णतः प्रत्यास्थ टक्कर को इंगित करता है, जहाँ सापेक्ष वेग का परिमाण संरक्षित रहता है।"
    },
    {
        question: "प्रश्न 25. एक चलती ट्रेन से एक व्यक्ति एक गेंद को सीधे ऊपर फेंकता है। गेंद कहाँ गिरेगी?",
        answers: shuffle([
            { text: "व्यक्ति के हाथ में", correct: true },
            { text: "व्यक्ति के आगे", correct: false },
            { text: "व्यक्ति के पीछे", correct: false },
            { text: "ट्रेन के बाहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जड़त्व के कारण, गेंद में भी ट्रेन के बराबर क्षैतिज वेग होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, जब वह हवा में होती है, तो वह व्यक्ति के साथ-साथ आगे बढ़ती है और वापस उसके हाथ में आ जाती है (वायु प्रतिरोध नगण्य)।"
    },
    {
        question: "प्रश्न 26. संवेग में परिवर्तन को क्या भी कहा जाता है?",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "आवेग", correct: true },
            { text: "कार्य", correct: false },
            { text: "शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग की परिभाषा ही संवेग में परिवर्तन है।"
    },
    {
        question: "प्रश्न 27. दो कणों की एक प्रणाली का कुल संवेग शून्य है। इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "A) दोनों कण स्थिर हैं।", correct: false },
            { text: "B) कणों का संवेग परिमाण में बराबर और दिशा में विपरीत है।", correct: false },
            { text: "C) A या B में से कोई भी सत्य हो सकता है।", correct: true },
            { text: "D) दोनों कणों का द्रव्यमान समान है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> या तो दोनों कण स्थिर हो सकते हैं (जिससे कुल संवेग शून्य हो)<br><br><i class='fa-solid fa-angles-right icon'></i> या वे बराबर और विपरीत संवेग के साथ चल सकते हैं ताकि उनका सदिश योग शून्य हो जाए।"
    },
    {
        question: "प्रश्न 28. एक गेंद एक बल्ले से टकराती है। गेंद और बल्ले के निकाय के लिए, क्या संरक्षित रहता है?",
        answers: shuffle([
            { text: "केवल गेंद का संवेग", correct: false },
            { text: "केवल बल्ले का संवेग", correct: false },
            { text: "गेंद और बल्ले का कुल संवेग", correct: true },
            { text: "उनकी कुल गतिज ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल्ले द्वारा गेंद पर और गेंद द्वारा बल्ले पर लगाया गया बल एक आंतरिक क्रिया-प्रतिक्रिया जोड़ी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि बाहरी बलों (जैसे खिलाड़ी के हाथ से बल) को नगण्य मानें, तो निकाय का कुल संवेग संरक्षित रहेगा।"
    },
    {
        question: "प्रश्न 29. क्या किसी वस्तु की गतिज ऊर्जा बदले बिना उसका संवेग बदल सकता है?",
        answers: shuffle([
            { text: "हाँ, एक समान वृत्तीय गति में", correct: true },
            { text: "नहीं, कभी नहीं", correct: false },
            { text: "केवल यदि बल लंबवत हो", correct: false },
            { text: "केवल अप्रत्यास्थ टक्कर में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक समान वृत्तीय गति में, वस्तु की चाल स्थिर रहती है, इसलिए गतिज ऊर्जा (1/2mv²) स्थिर रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन वेग की दिशा लगातार बदलती रहती है, इसलिए संवेग (p​=mv) भी बदलता रहता है।"
    },
    {
        question: "प्रश्न 30. टक्कर के बाद गतिज ऊर्जा में कमी किस रूप में प्रकट होती है?",
        answers: shuffle([
            { text: "स्थितिज ऊर्जा", correct: false },
            { text: "ऊष्मा, ध्वनि और विरूपण", correct: true },
            { text: "प्रकाश ऊर्जा", correct: false },
            { text: "रासायनिक ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अप्रत्यास्थ टक्करों में, \"खोई हुई\" गतिज ऊर्जा वास्तव में ऊर्जा के अन्य, कम उपयोगी रूपों में परिवर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 31. यदि कोई बल वस्तु के वेग के लंबवत कार्य करता है, तो...",
        answers: shuffle([
            { text: "A) वस्तु का संवेग बदल जाता है।", correct: false },
            { text: "B) वस्तु की गतिज ऊर्जा बदल जाती है।", correct: false },
            { text: "C) वस्तु पर किया गया कार्य शून्य होता है।", correct: false },
            { text: "A) और C) दोनों सही हैं।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल वेग की दिशा बदलता है, जिससे संवेग (एक सदिश) बदल जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन बल वेग के लंबवत होने के कारण कोई कार्य नहीं करता, इसलिए गतिज ऊर्जा नहीं बदलती।"
    },
    {
        question: "प्रश्न 32. 'प्रतिक्षेप वेग' (Recoil Velocity) क्या है?",
        answers: shuffle([
            { text: "गोली का वेग", correct: false },
            { text: "बंदूक का पीछे हटने का वेग", correct: true },
            { text: "लक्ष्य का वेग", correct: false },
            { text: "ध्वनि का वेग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग संरक्षण के कारण गोली दागने पर बंदूक जिस वेग से पीछे हटती है, उसे प्रतिक्षेप वेग कहते हैं।"
    },
    {
        question: "प्रश्न 33. किसी वस्तु पर थोड़े समय के लिए बल लगाने से उसमें उत्पन्न होता है:",
        answers: shuffle([
            { text: "स्थिर त्वरण", correct: false },
            { text: "आवेग", correct: true },
            { text: "स्थिर वेग", correct: false },
            { text: "कार्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बल और समय का गुणनफल आवेग कहलाता है, जो संवेग में परिवर्तन लाता है।"
    },
    {
        question: "प्रश्न 34. एक खुली जीप में बारिश हो रही है और जीप एक समान वेग से चल रही है। जीप के अंदर पानी इकट्ठा हो रहा है। जीप का वेग बनाए रखने के लिए इंजन को...",
        answers: shuffle([
            { text: "कम बल लगाना होगा।", correct: false },
            { text: "अधिक बल लगाना होगा।", correct: true },
            { text: "समान बल लगाना होगा।", correct: false },
            { text: "बल लगाना बंद कर देना होगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे पानी इकट्ठा होता है, निकाय (जीप + पानी) का द्रव्यमान बढ़ता जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> संवेग (p=mv) को स्थिर रखने के लिए, यदि m बढ़ रहा है, तो वेग कम होना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> वेग को स्थिर बनाए रखने के लिए एक बाहरी बल (इंजन द्वारा) लगाना आवश्यक है।"
    },
    {
        question: "प्रश्न 35. संवेग संरक्षण का नियम लागू करने के लिए, प्रणाली को...",
        answers: shuffle([
            { text: "बड़ा होना चाहिए।", correct: false },
            { text: "छोटा होना चाहिए।", correct: false },
            { text: "बाहरी बलों से मुक्त होना चाहिए।", correct: true },
            { text: "स्थिर होना चाहिए।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह इस नियम की सबसे महत्वपूर्ण और मूलभूत शर्त है।"
    },
    {
        question: "प्रश्न 36. यदि दो वस्तुएं समान गतिज ऊर्जा से गति कर रही हैं, तो किसका संवेग अधिक होगा?",
        answers: shuffle([
            { text: "हल्की वस्तु का", correct: false },
            { text: "भारी वस्तु का", correct: true },
            { text: "दोनों का बराबर होगा", correct: false },
            { text: "उनके आकार पर निर्भर करेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूँकि p=√2mK, यदि गतिज ऊर्जा (K) समान है, तो संवेग द्रव्यमान के वर्गमूल के समानुपाती होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, भारी वस्तु का संवेग अधिक होगा।"
    },
    {
        question: "प्रश्न 37. किसी प्रणाली का संवेग किसके संवेगों का सदिश योग होता है?",
        answers: shuffle([
            { text: "केवल सबसे भारी कण के", correct: false },
            { text: "केवल सबसे तेज कण के", correct: false },
            { text: "प्रणाली के सभी कणों के", correct: true },
            { text: "केवल बाहरी कणों के", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुल संवेग व्यक्तिगत कणों के संवेगों का सदिश योग करके पाया जाता है।"
    },
    {
        question: "प्रश्न 38. कौन सा संरक्षण नियम न्यूटन के तीसरे नियम से सबसे निकटता से संबंधित है?",
        answers: shuffle([
            { text: "ऊर्जा का संरक्षण", correct: false },
            { text: "आवेश का संरक्षण", correct: false },
            { text: "रैखिक संवेग का संरक्षण", correct: true },
            { text: "कोणीय संवेग का संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिया-प्रतिक्रिया बलों की जोड़ी एक विलगित निकाय में कुल संवेग को स्थिर रखने के लिए सीधे तौर पर जिम्मेदार है।"
    },
    {
        question: "प्रश्न 39. एक कालीन को छड़ी से पीटने पर धूल के कण बाहर आ जाते हैं। यह किसके कारण होता है?",
        answers: shuffle([
            { text: "संवेग संरक्षण", correct: false },
            { text: "जड़त्व", correct: true },
            { text: "घर्षण", correct: false },
            { text: "ऊर्जा संरक्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कालीन को पीटा जाता है, तो कालीन गति में आ जाता है, लेकिन धूल के कण विराम के जड़त्व के कारण अपनी जगह पर रहने की कोशिश करते हैं और अलग हो जाते हैं।"
    },
    {
        question: "प्रश्न 40. निम्नलिखित में से किस स्थिति में रैखिक संवेग संरक्षित नहीं रहेगा?",
        answers: shuffle([
            { text: "एक बम का विस्फोट", correct: false },
            { text: "दो बिलियर्ड गेंदों की टक्कर", correct: false },
            { text: "एक गेंद का मुक्त पतन (केवल गेंद को निकाय मानने पर)", correct: true },
            { text: "एक बंदूक से गोली चलाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुक्त पतन में, गेंद पर पृथ्वी का गुरुत्वाकर्षण नामक एक बाहरी बल लगातार कार्य करता है, जिससे उसका संवेग बदलता रहता है।"
    },
    {
        question: "प्रश्न 41. एक चलती हुई वस्तु का संवेग उसकी गति की...",
        answers: shuffle([
            { text: "दिशा में होता है।", correct: true },
            { text: "विपरीत दिशा में होता है।", correct: false },
            { text: "लंबवत दिशा में होता है।", correct: false },
            { text: "दिशा पर निर्भर नहीं करता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग एक सदिश राशि है और इसकी दिशा हमेशा वस्तु के वेग की दिशा में होती है।"
    },
    {
        question: "प्रश्न 42. एक अंतरिक्ष यात्री अंतरिक्ष में एक हथौड़ा फेंकता है। इसके परिणामस्वरूप...",
        answers: shuffle([
            { text: "अंतरिक्ष यात्री स्थिर रहेगा।", correct: false },
            { text: "अंतरिक्ष यात्री हथौड़े की विपरीत दिशा में चलेगा।", correct: true },
            { text: "अंतरिक्ष यात्री हथौड़े की दिशा में चलेगा।", correct: false },
            { text: "हथौड़ा वापस आ जाएगा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग संरक्षण के लिए, यदि हथौड़ा एक दिशा में संवेग प्राप्त करता है, तो यात्री को विपरीत दिशा में बराबर संवेग प्राप्त होगा।"
    },
    {
        question: "प्रश्न 43. किसी वस्तु पर बल लगाकर उसका वेग बदलने की प्रक्रिया में, बल द्वारा किया गया कार्य उसकी...",
        answers: shuffle([
            { text: "संवेग को बढ़ाता है।", correct: false },
            { text: "गतिज ऊर्जा को बदलता है।", correct: true },
            { text: "स्थितिज ऊर्जा को बदलता है।", correct: false },
            { text: "आवेग को बढ़ाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कार्य-ऊर्जा प्रमेय के अनुसार, किया गया कार्य गतिज ऊर्जा में परिवर्तन के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बल संवेग को भी बदलता है, लेकिन कार्य ऊर्जा से संबंधित है।"
    },
    {
        question: "प्रश्न 44. जब कोई नाव धारा के साथ चलती है, तो उसका कुल संवेग...",
        answers: shuffle([
            { text: "केवल नाव के संवेग के बराबर होता है।", correct: false },
            { text: "नाव और धारा के संवेगों के योग के बराबर होता है।", correct: true },
            { text: "शून्य होता है।", correct: false },
            { text: "घट जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग एक सदिश राशि है, और कुल संवेग दोनों गतियों के कारण उत्पन्न संवेगों का सदिश योग होगा।"
    },
    {
        question: "प्रश्न 45. एक बंद प्रणाली में अप्रत्यास्थ टक्कर में, कौन सी राशि संरक्षित रहती है?",
        answers: shuffle([
            { text: "केवल गतिज ऊर्जा", correct: false },
            { text: "केवल संवेग", correct: true },
            { text: "गतिज ऊर्जा और संवेग दोनों", correct: false },
            { text: "कुछ भी संरक्षित नहीं रहता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अप्रत्यास्थ टक्कर की परिभाषा ही यह है कि इसमें गतिज ऊर्जा संरक्षित नहीं रहती, लेकिन कुल संवेग हमेशा संरक्षित रहता है।"
    },
    {
        question: "प्रश्न 46. आवेग का प्रभाव किस पर निर्भर करता है?",
        answers: shuffle([
            { text: "केवल बल के परिमाण पर", correct: false },
            { text: "केवल समय अंतराल पर", correct: false },
            { text: "बल के परिमाण और समय अंतराल दोनों पर", correct: true },
            { text: "केवल वस्तु के द्रव्यमान पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवेग की परिभाषा ही बल और उस समय का गुणनफल है जिसके लिए वह कार्य करता है।"
    },
    {
        question: "प्रश्न 47. किसी वस्तु का संवेग उसकी गति का मापक है, जिसे ध्यान में रखा जाता है:",
        answers: shuffle([
            { text: "केवल उसका वेग", correct: false },
            { text: "केवल उसका द्रव्यमान", correct: false },
            { text: "उसका द्रव्यमान और वेग दोनों", correct: true },
            { text: "उसका त्वरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग गति की मात्रा को मापता है और यह वस्तु के द्रव्यमान और वेग दोनों पर निर्भर करता है।"
    },
    {
        question: "प्रश्न 48. एक हल्की और एक भारी वस्तु एक ही संवेग से चल रही हैं। किसे रोकना अधिक कठिन है?",
        answers: shuffle([
            { text: "हल्की वस्तु को", correct: false },
            { text: "भारी वस्तु को", correct: false },
            { text: "दोनों को रोकना समान रूप से कठिन है", correct: true },
            { text: "यह लगाए गए बल पर निर्भर करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी वस्तु को रोकने के लिए आवश्यक आवेग उसके प्रारंभिक संवेग के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि दोनों का संवेग समान है, उन्हें रोकने के लिए समान आवेग की आवश्यकता होगी।"
    },
    {
        question: "प्रश्न 49. कोणीय संवेग की दिशा घूर्णन अक्ष के...",
        answers: shuffle([
            { text: "अनुदिश होती है।", correct: true },
            { text: "विपरीत होती है।", correct: false },
            { text: "लंबवत होती है।", correct: false },
            { text: "समांतर होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोणीय संवेग की दिशा दाहिने हाथ के नियम द्वारा दी जाती है और यह घूर्णन अक्ष के अनुदिश होती है।"
    },
    {
        question: "प्रश्न 50. \"गति में द्रव्यमान\" किसका एक सरल वर्णन है?",
        answers: shuffle([
            { text: "बल", correct: false },
            { text: "ऊर्जा", correct: false },
            { text: "शक्ति", correct: false },
            { text: "संवेग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संवेग को अक्सर किसी वस्तु में निहित गति की मात्रा के रूप में वर्णित किया जाता है, जो उसके द्रव्यमान और वेग पर निर्भर करती है।"
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