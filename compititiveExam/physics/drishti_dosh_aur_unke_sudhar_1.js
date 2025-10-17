const questions = [
    {
        topHeading: "दृष्टि दोष और उनके सुधार पर आधारित 50 MCQs,part_1 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. मानव नेत्र किस सिद्धांत पर कार्य करता है?",
        answers: shuffle([
            { text: "प्रकाश के परावर्तन पर", correct: false },
            { text: "प्रकाश के अपवर्तन पर", correct: true },
            { text: "प्रकाश के प्रकीर्णन पर", correct: false },
            { text: "प्रकाश के विवर्तन पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव नेत्र एक कैमरे की तरह है, जिसमें उत्तल लेंस होता है जो प्रकाश को अपवर्तित करके रेटिना पर एक वास्तविक और उल्टा प्रतिबिंब बनाता है।"
    },
    {
        question: "प्रश्न 2. मानव नेत्र का कौन सा भाग प्रकाश की मात्रा को नियंत्रित करता है?",
        answers: shuffle([
            { text: "कॉर्निया", correct: false },
            { text: "परितारिका (आइरिस)", correct: true },
            { text: "पुतली", correct: false },
            { text: "रेटिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परितारिका एक मांसपेशीय डायफ्राम है जो पुतली के आकार को समायोजित करके नेत्र में प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करती है।"
    },
    {
        question: "प्रश्न 3. नेत्र में प्रकाश किस भाग से प्रवेश करता है?",
        answers: shuffle([
            { text: "नेत्र लेंस", correct: false },
            { text: "रेटिना", correct: false },
            { text: "कॉर्निया", correct: true },
            { text: "परितारिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉर्निया नेत्र के सामने का पारदर्शी भाग है, जहाँ से प्रकाश सबसे पहले नेत्र में प्रवेश करता है और अधिकांश अपवर्तन यहीं होता है।"
    },
    {
        question: "प्रश्न 4. मानव नेत्र में किसी वस्तु का प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "कॉर्निया पर", correct: false },
            { text: "परितारिका पर", correct: false },
            { text: "पुतली पर", correct: false },
            { text: "दृष्टिपटल (रेटिना) पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेटिना एक प्रकाश-संवेदी स्क्रीन है, जिस पर नेत्र लेंस द्वारा वस्तु का वास्तविक और उल्टा प्रतिबिंब बनाया जाता है।"
    },
    {
        question: "प्रश्न 5. नेत्र लेंस की फोकस दूरी को समायोजित करने की क्षमता को क्या कहते हैं?",
        answers: shuffle([
            { text: "दृष्टि निर्बंध", correct: false },
            { text: "समंजन क्षमता", correct: true },
            { text: "अपवर्तन क्षमता", correct: false },
            { text: "आवर्धन क्षमता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्ष्माभी मांसपेशियों की सहायता से नेत्र लेंस की फोकस दूरी को बदलकर पास और दूर की वस्तुओं को स्पष्ट रूप से देखने की क्षमता को समंजन क्षमता कहते हैं।"
    },
    {
        question: "प्रश्न 6. एक सामान्य वयस्क के लिए सुस्पष्ट दृष्टि की न्यूनतम दूरी लगभग कितनी होती है?",
        answers: shuffle([
            { text: "25 मीटर", correct: false },
            { text: "2.5 सेंटीमीटर", correct: false },
            { text: "25 सेंटीमीटर", correct: true },
            { text: "2.5 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह न्यूनतम दूरी जिस पर रखी वस्तु को बिना किसी तनाव के स्पष्ट रूप से देखा जा सकता है, उसे सुस्पष्ट दृष्टि की न्यूनतम दूरी या निकट-बिंदु कहते हैं, जो सामान्यतः 25 सेमी होती है।"
    },
    {
        question: "प्रश्न 7. एक सामान्य नेत्र के लिए दूर-बिंदु कहाँ होता है?",
        answers: shuffle([
            { text: "25 सेंटीमीटर पर", correct: false },
            { text: "100 मीटर पर", correct: false },
            { text: "अनंत पर", correct: true },
            { text: "नेत्र के लेंस पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूर-बिंदु वह अधिकतम दूरी है जहाँ तक कोई नेत्र वस्तुओं को स्पष्ट रूप से देख सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक सामान्य नेत्र के लिए यह दूरी अनंत होती है।"
    },
    {
        question: "प्रश्न 8. निकट-दृष्टि दोष (मायोपिया) से पीड़ित व्यक्ति...",
        answers: shuffle([
            { text: "दूर की वस्तुओं को स्पष्ट रूप से नहीं देख सकता।", correct: true },
            { text: "निकट की वस्तुओं को स्पष्ट रूप से नहीं देख सकता।", correct: false },
            { text: "न तो निकट की और न ही दूर की वस्तुओं को स्पष्ट देख सकता है।", correct: false },
            { text: "सभी वस्तुओं को स्पष्ट देख सकता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निकट-दृष्टि दोष में व्यक्ति पास की वस्तुओं को तो स्पष्ट देख लेता है, लेकिन दूर की वस्तुएं धुंधली दिखाई देती हैं।"
    },
    {
        question: "प्रश्न 9. निकट-दृष्टि दोष में प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "रेटिना के पीछे", correct: false },
            { text: "रेटिना के सामने", correct: true },
            { text: "रेटिना पर", correct: false },
            { text: "अंध बिंदु पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस दोष में नेत्र लेंस की अभिसारी क्षमता अधिक हो जाती है या नेत्र गोलक लंबा हो जाता है, जिससे दूर की वस्तुओं का प्रतिबिंब रेटिना से पहले ही बन जाता है।"
    },
    {
        question: "प्रश्न 10. निकट-दृष्टि दोष को ठीक करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "उत्तल लेंस", correct: false },
            { text: "अवतल लेंस", correct: true },
            { text: "बेलनाकार लेंस", correct: false },
            { text: "द्विफोकसी लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल लेंस एक अपसारी लेंस है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रकाश किरणों को थोड़ा फैला देता है ताकि अंतिम प्रतिबिंब सही स्थान, यानी रेटिना पर बन सके।"
    },
    {
        question: "प्रश्न 11. दूर-दृष्टि दोष (हाइपरमेट्रोपिया) से पीड़ित व्यक्ति...",
        answers: shuffle([
            { text: "दूर की वस्तुओं को स्पष्ट रूप से नहीं देख सकता।", correct: false },
            { text: "निकट की वस्तुओं को स्पष्ट रूप से नहीं देख सकता।", correct: true },
            { text: "पास और दूर दोनों जगह की वस्तुएं धुंधली देखता है।", correct: false },
            { text: "रंगों में भेद नहीं कर सकता।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूर-दृष्टि दोष में व्यक्ति दूर की वस्तुओं को तो स्पष्ट देख लेता है, लेकिन पास की वस्तुओं को देखने में कठिनाई होती है।"
    },
    {
        question: "प्रश्न 12. दूर-दृष्टि दोष में प्रतिबिंब कहाँ बनता है?",
        answers: shuffle([
            { text: "रेटिना के पीछे", correct: true },
            { text: "रेटिना के सामने", correct: false },
            { text: "रेटिना पर", correct: false },
            { text: "कॉर्निया पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस दोष में नेत्र लेंस की फोकस दूरी बढ़ जाती है या नेत्र गोलक छोटा हो जाता है, जिससे पास की वस्तुओं का प्रतिबिंब रेटिना के पीछे बनता है।"
    },
    {
        question: "प्रश्न 13. दूर-दृष्टि दोष को ठीक करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "उत्तल लेंस", correct: true },
            { text: "अवतल लेंस", correct: false },
            { text: "समतल लेंस", correct: false },
            { text: "बेलनाकार लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल लेंस एक अभिसारी लेंस है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रकाश किरणों को अतिरिक्त अभिसरण प्रदान करता है ताकि प्रतिबिंब रेटिना पर बन सके।"
    },
    {
        question: "प्रश्न 14. वृद्धावस्था के कारण नेत्र की समंजन क्षमता घट जाने से कौन सा दोष उत्पन्न होता है?",
        answers: shuffle([
            { text: "निकट-दृष्टि दोष", correct: false },
            { text: "दूर-दृष्टि दोष", correct: false },
            { text: "जरा-दूरदृष्टिता", correct: true },
            { text: "दृष्टिवैषम्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उम्र बढ़ने के साथ पक्ष्माभी मांसपेशियां कमजोर हो जाती हैं और नेत्र लेंस का लचीलापन कम हो जाता है, जिससे समंजन क्षमता घट जाती है।"
    },
    {
        question: "प्रश्न 15. जरा-दूरदृष्टिता को ठीक करने के लिए सामान्यतः किस प्रकार के लेंस का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "केवल उत्तल लेंस", correct: false },
            { text: "केवल अवतल लेंस", correct: false },
            { text: "द्विफोकसी लेंस", correct: true },
            { text: "बेलनाकार लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस दोष में व्यक्ति को पास और दूर दोनों जगह देखने में समस्या हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> द्विफोकसी लेंस में दोनों प्रकार के लेंस (ऊपर अवतल, नीचे उत्तल) होते हैं।"
    },
    {
        question: "प्रश्न 16. दृष्टिवैषम्य (एस्टिग्मेटिज्म) दोष का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "नेत्र गोलक का लंबा हो जाना", correct: false },
            { text: "नेत्र गोलक का छोटा हो जाना", correct: false },
            { text: "कॉर्निया या नेत्र लेंस की गोलाई में अनियमितता", correct: true },
            { text: "नेत्र लेंस का धुंधला हो जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कॉर्निया पूरी तरह से गोल नहीं होता, तो प्रकाश की किरणें रेटिना पर एक बिंदु पर केंद्रित नहीं हो पातीं, जिससे दृष्टि धुंधली हो जाती है।"
    },
    {
        question: "प्रश्न 17. दृष्टिवैषम्य दोष के सुधार के लिए किस प्रकार के लेंस का उपयोग होता है?",
        answers: shuffle([
            { text: "गोलीय उत्तल लेंस", correct: false },
            { text: "गोलीय अवतल लेंस", correct: false },
            { text: "बेलनाकार लेंस", correct: true },
            { text: "द्विफोकसी लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेलनाकार लेंस केवल एक दिशा में प्रकाश को अपवर्तित करता है, जिससे कॉर्निया की अनियमितता के कारण होने वाली त्रुटि को ठीक किया जा सकता है।"
    },
    {
        question: "प्रश्न 18. मोतियाबिंद (Cataract) क्या है?",
        answers: shuffle([
            { text: "नेत्र में अतिरिक्त तरल का दबाव", correct: false },
            { text: "नेत्र लेंस का धुंधला या अपारदर्शी हो जाना", correct: true },
            { text: "रेटिना का क्षतिग्रस्त होना", correct: false },
            { text: "प्रकाशिक तंत्रिका का सूखना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उम्र बढ़ने या अन्य कारणों से नेत्र का क्रिस्टलीय लेंस दूधिया और धुंधला हो जाता है, जिससे प्रकाश रेटिना तक नहीं पहुंच पाता।"
    },
    {
        question: "प्रश्न 19. मोतियाबिंद का इलाज कैसे किया जाता है?",
        answers: shuffle([
            { text: "चश्मे से", correct: false },
            { text: "आई ड्रॉप्स से", correct: false },
            { text: "शल्य चिकित्सा (सर्जरी) से", correct: true },
            { text: "इसका कोई इलाज नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मोतियाबिंद के इलाज के लिए सर्जरी द्वारा धुंधले लेंस को हटाकर उसकी जगह एक कृत्रिम लेंस (इंट्राऑक्युलर लेंस) लगा दिया जाता है।"
    },
    {
        question: "प्रश्न 20. नेत्र का कौन सा भाग नेत्रदान में दान किया जाता है?",
        answers: shuffle([
            { text: "पूरा नेत्र गोलक", correct: false },
            { text: "केवल रेटिना", correct: false },
            { text: "केवल कॉर्निया", correct: true },
            { text: "केवल नेत्र लेंस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेत्रदान में केवल कॉर्निया का ही प्रत्यारोपण किया जाता है, जिससे कॉर्निया की अंधता से पीड़ित व्यक्ति को दृष्टि मिल सकती है।"
    },
    {
        question: "प्रश्न 21. मानव नेत्र में कैमरे की फिल्म की तरह कौन कार्य करता है?",
        answers: shuffle([
            { text: "कॉर्निया", correct: false },
            { text: "लेंस", correct: false },
            { text: "रेटिना", correct: true },
            { text: "आइरिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे कैमरे में फिल्म पर प्रतिबिंब बनता है, वैसे ही मानव नेत्र में रेटिना पर प्रतिबिंब बनता है।"
    },
    {
        question: "प्रश्न 22. रेटिना पर बना प्रतिबिंब कैसा होता है?",
        answers: shuffle([
            { text: "आभासी और सीधा", correct: false },
            { text: "वास्तविक और सीधा", correct: false },
            { text: "आभासी और उल्टा", correct: false },
            { text: "वास्तविक और उल्टा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेत्र का उत्तल लेंस रेटिना पर वस्तु का एक वास्तविक और उल्टा प्रतिबिंब बनाता है, जिसे मस्तिष्क सीधा करके समझता है।"
    },
    {
        question: "प्रश्न 23. पक्ष्माभी मांसपेशियां (Ciliary muscles) का क्या कार्य है?",
        answers: shuffle([
            { text: "पुतली का आकार बदलना", correct: false },
            { text: "नेत्र लेंस की वक्रता और फोकस दूरी को बदलना", correct: true },
            { text: "नेत्र को नमी प्रदान करना", correct: false },
            { text: "प्रतिबिंब को मस्तिष्क तक भेजना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये मांसपेशियां सिकुड़कर और शिथिल होकर नेत्र लेंस की मोटाई को बदलती हैं, जिससे उसकी समंजन क्षमता नियंत्रित होती है।"
    },
    {
        question: "प्रश्न 24. जब हम तेज प्रकाश से कम प्रकाश वाले कमरे में जाते हैं, तो पुतली का आकार...",
        answers: shuffle([
            { text: "बढ़ जाता है।", correct: true },
            { text: "घट जाता है।", correct: false },
            { text: "अपरिवर्तित रहता है।", correct: false },
            { text: "पहले बढ़ता है फिर घटता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कम प्रकाश में अधिक प्रकाश को नेत्र में प्रवेश करने देने के लिए, परितारिका पुतली को फैला देती है, जिससे उसका आकार बढ़ जाता है।"
    },
    {
        question: "प्रश्न 25. निकट-दृष्टि दोष होने का एक संभावित कारण क्या है?",
        answers: shuffle([
            { text: "नेत्र लेंस की फोकस दूरी का अत्यधिक हो जाना", correct: false },
            { text: "नेत्र गोलक का लंबा हो जाना", correct: true },
            { text: "नेत्र लेंस का चपटा हो जाना", correct: false },
            { text: "पक्ष्माभी मांसपेशियों का कमजोर हो जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब नेत्र गोलक सामान्य से अधिक लंबा हो जाता है, तो रेटिना लेंस से दूर हो जाती है और प्रतिबिंब रेटिना से पहले ही बन जाता है।"
    },
    {
        question: "प्रश्न 26. दूर-दृष्टि दोष होने का एक संभावित कारण क्या है?",
        answers: shuffle([
            { text: "नेत्र लेंस की वक्रता का बढ़ जाना", correct: false },
            { text: "नेत्र गोलक का लंबा हो जाना", correct: false },
            { text: "नेत्र गोलक का छोटा हो जाना", correct: true },
            { text: "समंजन क्षमता का बढ़ जाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब नेत्र गोलक सामान्य से छोटा हो जाता है, तो रेटिना लेंस के करीब आ जाती है और पास की वस्तुओं का प्रतिबिंब रेटिना के पीछे बनता है।"
    },
    {
        question: "प्रश्न 27. द्विफोकसी लेंस में ऊपरी भाग किस प्रकार का होता है?",
        answers: shuffle([
            { text: "उत्तल", correct: false },
            { text: "अवतल", correct: true },
            { text: "बेलनाकार", correct: false },
            { text: "समतल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> द्विफोकसी लेंस का ऊपरी भाग दूर की वस्तुओं को देखने के लिए उपयोग होता है, इसलिए यह निकट-दृष्टि दोष को ठीक करने वाले अवतल लेंस का होता है।"
    },
    {
        question: "प्रश्न 28. द्विफोकसी लेंस में निचला भाग किस प्रकार का होता है?",
        answers: shuffle([
            { text: "उत्तल", correct: true },
            { text: "अवतल", correct: false },
            { text: "बेलनाकार", correct: false },
            { text: "समतल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निचला भाग पास की वस्तुओं (जैसे पढ़ने के लिए) को देखने के लिए उपयोग होता है, इसलिए यह दूर-दृष्टि दोष को ठीक करने वाले उत्तल लेंस का होता है।"
    },
    {
        question: "प्रश्न 29. रेटिना में मौजूद कौन सी कोशिकाएं रंगों की पहचान करती हैं?",
        answers: shuffle([
            { text: "शलाका कोशिकाएं (Rod cells)", correct: false },
            { text: "शंकु कोशिकाएं (Cone cells)", correct: true },
            { text: "तंत्रिका कोशिकाएं", correct: false },
            { text: "रक्त कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शंकु कोशिकाएं तेज प्रकाश के प्रति संवेदनशील होती हैं और विभिन्न रंगों की पहचान करने में मदद करती हैं।"
    },
    {
        question: "प्रश्न 30. वर्णांधता (Colour blindness) किस प्रकार का दोष है?",
        answers: shuffle([
            { text: "यह एक अपवर्तक दोष है।", correct: false },
            { text: "यह एक आनुवंशिक स्थिति है।", correct: true },
            { text: "यह उम्र बढ़ने के साथ होता है।", correct: false },
            { text: "यह चोट लगने के कारण होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्णांधता में व्यक्ति की आंखों में कुछ विशेष रंगों की पहचान करने वाली शंकु कोशिकाएं नहीं होती हैं, और यह अक्सर वंशानुगत होता है।"
    },
    {
        question: "प्रश्न 31. लेंस की शक्ति का मात्रक क्या है?",
        answers: shuffle([
            { text: "मीटर", correct: false },
            { text: "सेंटीमीटर", correct: false },
            { text: "वाट", correct: false },
            { text: "डायोप्टर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेंस की शक्ति को डायोप्टर (D) में मापा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मीटर में मापी गई फोकस दूरी का व्युत्क्रम होता है (P=1/f)।"
    },
    {
        question: "प्रश्न 32. एक उत्तल लेंस की शक्ति...",
        answers: shuffle([
            { text: "धनात्मक होती है।", correct: true },
            { text: "ऋणात्मक होती है।", correct: false },
            { text: "शून्य होती है।", correct: false },
            { text: "हमेशा एक होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिह्न परिपाटी के अनुसार, अभिसारी (उत्तल) लेंस की फोकस दूरी और शक्ति दोनों धनात्मक होती हैं।"
    },
    {
        question: "प्रश्न 33. एक अवतल लेंस की शक्ति...",
        answers: shuffle([
            { text: "धनात्मक होती है।", correct: false },
            { text: "ऋणात्मक होती है।", correct: true },
            { text: "शून्य होती है।", correct: false },
            { text: "हमेशा एक से कम होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिह्न परिपाटी के अनुसार, अपसारी (अवतल) लेंस की फोकस दूरी और शक्ति दोनों ऋणात्मक होती हैं।"
    },
    {
        question: "प्रश्न 34. यदि किसी व्यक्ति को -2.0 D शक्ति का चश्मा लगा है, तो वह किस दोष से पीड़ित है?",
        answers: shuffle([
            { text: "दूर-दृष्टि दोष", correct: false },
            { text: "निकट-दृष्टि दोष", correct: true },
            { text: "जरा-दूरदृष्टिता", correct: false },
            { text: "दृष्टिवैषम्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋणात्मक शक्ति का अर्थ है कि चश्मे में अवतल लेंस का उपयोग किया गया है, जो निकट-दृष्टि दोष को ठीक करता है।"
    },
    {
        question: "प्रश्न 35. यदि किसी व्यक्ति को +1.5 D शक्ति का चश्मा लगा है, तो वह किस दोष से पीड़ित है?",
        answers: shuffle([
            { text: "दूर-दृष्टि दोष", correct: true },
            { text: "निकट-दृष्टि दोष", correct: false },
            { text: "वर्णांधता", correct: false },
            { text: "दृष्टिवैषम्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धनात्मक शक्ति का अर्थ है कि चश्मे में उत्तल लेंस का उपयोग किया गया है, जो दूर-दृष्टि दोष को ठीक करता है।"
    },
    {
        question: "प्रश्न 36. नेत्र का निकट-बिंदु सामान्य 25 सेमी से दूर हो जाना किस दोष को इंगित करता है?",
        answers: shuffle([
            { text: "निकट-दृष्टि दोष", correct: false },
            { text: "दूर-दृष्टि दोष", correct: true },
            { text: "मोतियाबिंद", correct: false },
            { text: "वर्णांधता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूर-दृष्टि दोष में व्यक्ति को पास की वस्तुएं देखने में कठिनाई होती है, अर्थात उसका निकट-बिंदु सामान्य से अधिक दूर हो जाता है।"
    },
    {
        question: "प्रश्न 37. नेत्र का दूर-बिंदु अनंत से कम दूरी पर आ जाना किस दोष को इंगित करता है?",
        answers: shuffle([
            { text: "निकट-दृष्टि दोष", correct: true },
            { text: "दूर-दृष्टि दोष", correct: false },
            { text: "जरा-दूरदृष्टिता", correct: false },
            { text: "दृष्टिवैषम्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निकट-दृष्टि दोष में व्यक्ति एक निश्चित दूरी से आगे की वस्तुओं को नहीं देख पाता, अर्थात उसका दूर-बिंदु अनंत के बजाय पास आ जाता है।"
    },
    {
        question: "प्रश्न 38. तारों का टिमटिमाना किस घटना का परिणाम है?",
        answers: shuffle([
            { text: "नेत्र दोष", correct: false },
            { text: "वायुमंडलीय अपवर्तन", correct: true },
            { text: "पूर्ण आंतरिक परावर्तन", correct: false },
            { text: "प्रकाश का प्रकीर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह नेत्र का दोष नहीं है, बल्कि वायुमंडल की विभिन्न परतों द्वारा प्रकाश के लगातार अपवर्तन के कारण होता है, जिससे तारों की आभासी स्थिति बदलती रहती है।"
    },
    {
        question: "प्रश्न 39. जब कोई व्यक्ति क्षैतिज और ऊर्ध्वाधर रेखाओं में एक साथ अंतर नहीं कर पाता, तो वह किस दोष से पीड़ित होता है?",
        answers: shuffle([
            { text: "मायोपिया", correct: false },
            { text: "हाइपरमेट्रोपिया", correct: false },
            { text: "प्रेसबायोपिया", correct: false },
            { text: "एस्टिग्मेटिज्म", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दृष्टिवैषम्य में कॉर्निया की असमान वक्रता के कारण अलग-अलग तलों में प्रकाश की किरणें अलग-अलग बिंदुओं पर केंद्रित होती हैं।"
    },
    {
        question: "प्रश्न 40. नेत्र की प्रकाशिक तंत्रिका का क्या कार्य है?",
        answers: shuffle([
            { text: "प्रकाश को केंद्रित करना", correct: false },
            { text: "प्रतिबिंब को सीधा करना", correct: false },
            { text: "रेटिना पर बने प्रतिबिंब के संकेतों को मस्तिष्क तक पहुंचाना", correct: true },
            { text: "नेत्र को पोषण देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशिक तंत्रिका (optic nerve) विद्युत संकेतों को रेटिना से मस्तिष्क के दृष्टि केंद्र तक ले जाती है, जहाँ प्रतिबिंब की व्याख्या होती है।"
    },
    {
        question: "प्रश्न 41. \"प्रगतिशील लेंस\" (Progressive lenses) किस दोष के सुधार में उपयोग होते हैं?",
        answers: shuffle([
            { text: "केवल निकट-दृष्टि दोष", correct: false },
            { text: "केवल दूर-दृष्टि दोष", correct: false },
            { text: "जरा-दूरदृष्टिता", correct: true },
            { text: "केवल दृष्टिवैषम्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रगतिशील लेंस आधुनिक द्विफोकसी लेंस हैं जिनमें अलग-अलग शक्तियों के बीच कोई स्पष्ट विभाजन रेखा नहीं होती है, और शक्ति ऊपर से नीचे तक धीरे-धीरे बदलती है।"
    },
    {
        question: "प्रश्न 42. नेत्र का कौन सा तरल पदार्थ नेत्र गोलक को आकार प्रदान करता है और रेटिना को पोषण देता है?",
        answers: shuffle([
            { text: "जलीय द्रव (Aqueous humour)", correct: false },
            { text: "काचाभ द्रव (Vitreous humour)", correct: true },
            { text: "आंसू", correct: false },
            { text: "रक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काचाभ द्रव एक जैली जैसा पदार्थ है जो नेत्र लेंस और रेटिना के बीच के बड़े हिस्से को भरता है।"
    },
    {
        question: "प्रश्न 43. किसी वस्तु को हटाने के बाद भी रेटिना पर उसका प्रतिबिंब लगभग कितने समय तक बना रहता है?",
        answers: shuffle([
            { text: "1 सेकंड", correct: false },
            { text: "1/10 सेकंड", correct: false },
            { text: "1/16 सेकंड", correct: true },
            { text: "1/25 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस प्रभाव को दृष्टि निर्बंध (persistence of vision) कहते हैं, और इसी सिद्धांत का उपयोग चलचित्र (सिनेमा) में किया जाता है।"
    },
    {
        question: "प्रश्न 44. रेटिना का कौन सा बिंदु सबसे अधिक सुग्राही होता है?",
        answers: shuffle([
            { text: "अंध बिंदु (Blind spot)", correct: false },
            { text: "पीत बिंदु (Yellow spot)", correct: true },
            { text: "पुतली", correct: false },
            { text: "कॉर्निया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पीत बिंदु (मैक्युला) रेटिना का वह क्षेत्र है जहाँ शंकु कोशिकाओं का घनत्व सबसे अधिक होता है और सबसे स्पष्ट प्रतिबिंब यहीं बनता है।"
    },
    {
        question: "प्रश्न 45. अंध बिंदु (Blind spot) पर प्रतिबिंब क्यों नहीं बनता है?",
        answers: shuffle([
            { text: "क्योंकि वहां कोई लेंस नहीं होता।", correct: false },
            { text: "क्योंकि वहां प्रकाश नहीं पहुंचता।", correct: false },
            { text: "क्योंकि वहां कोई प्रकाश-संवेदी कोशिकाएं (शंकु या शलाका) नहीं होती हैं।", correct: true },
            { text: "क्योंकि वह बिंदु अपारदर्शी होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वह स्थान है जहाँ से प्रकाशिक तंत्रिका नेत्र से बाहर निकलती है, इसलिए इस बिंदु पर कोई रॉड या कोन कोशिकाएं नहीं होतीं।"
    },
    {
        question: "प्रश्न 46. दो नेत्र होने का सबसे महत्वपूर्ण लाभ क्या है?",
        answers: shuffle([
            { text: "रंगों को बेहतर ढंग से देखना", correct: false },
            { text: "अधिक चमकीला देखना", correct: false },
            { text: "त्रिविम दृष्टि (गहराई का बोध) और व्यापक दृष्टि क्षेत्र", correct: true },
            { text: "एक आंख खराब होने पर दूसरी से काम चलाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दोनों आंखें किसी वस्तु को थोड़ा अलग कोण से देखती हैं, जिससे हमारा मस्तिष्क दूरी और गहराई का सटीक अनुमान लगा पाता है और हमारा दृष्टि क्षेत्र भी बढ़ जाता है।"
    },
    {
        question: "प्रश्न 47. कॉन्टैक्ट लेंस किस सिद्धांत पर काम करते हैं?",
        answers: shuffle([
            { text: "वे प्रकाश को परावर्तित करते हैं।", correct: false },
            { text: "वे सीधे कॉर्निया पर लगकर प्रकाश को सही ढंग से अपवर्तित करते हैं।", correct: true },
            { text: "वे पुतली का आकार बदलते हैं।", correct: false },
            { text: "वे नेत्र लेंस को बदलते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉन्टैक्ट लेंस चश्मे की तरह ही काम करते हैं, लेकिन वे सीधे आंख की सतह पर रखे जाते हैं और दृष्टि दोष को ठीक करने के लिए आवश्यक अतिरिक्त अपवर्तन प्रदान करते हैं।"
    },
    {
        question: "प्रश्न 48. लेसिक (LASIK) सर्जरी में नेत्र के किस भाग को ठीक किया जाता है?",
        answers: shuffle([
            { text: "रेटिना", correct: false },
            { text: "नेत्र लेंस", correct: false },
            { text: "कॉर्निया", correct: true },
            { text: "प्रकाशिक तंत्रिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेसिक एक लेजर सर्जरी है जिसमें कॉर्निया की वक्रता को बदलकर उसकी अपवर्तक शक्ति को समायोजित किया जाता है, ताकि चश्मे या कॉन्टैक्ट लेंस की आवश्यकता समाप्त हो जाए।"
    },
    {
        question: "प्रश्न 49. सामान्य दृष्टि वाला व्यक्ति बिना समंजन के किस बिंदु पर रखी वस्तु को स्पष्ट देख सकता है?",
        answers: shuffle([
            { text: "निकट-बिंदु", correct: false },
            { text: "दूर-बिंदु (अनंत)", correct: true },
            { text: "25 सेमी", correct: false },
            { text: "1 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब नेत्र शिथिल अवस्था में होता है (बिना समंजन के), तो वह अनंत पर स्थित वस्तुओं पर केंद्रित होता है।"
    },
    {
        question: "प्रश्न 50. कैमरे का द्वारक (aperture) मानव नेत्र के किस भाग के समान है?",
        answers: shuffle([
            { text: "लेंस", correct: false },
            { text: "रेटिना", correct: false },
            { text: "पुतली", correct: true },
            { text: "कॉर्निया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैमरे का द्वारक प्रकाश की मात्रा को नियंत्रित करता है, ठीक उसी तरह जैसे मानव नेत्र में पुतली करती है।"
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