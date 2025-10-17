const questions = [
    {
        topHeading: "दृष्टि दोष और उनके सुधार पर आधारित 50 MCQs part_2"
    },
    {
        question: "प्रश्न 1. एक व्यक्ति अखबार को अपनी आंखों से 50 सेमी दूर रखकर पढ़ता है। वह किस दोष से पीड़ित है?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: false },
            { text: "(b) दूर-दृष्टि दोष", correct: true },
            { text: "(c) दृष्टिवैषम्य", correct: false },
            { text: "(d) कोई दोष नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य निकट-बिंदु 25 सेमी होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि व्यक्ति को पढ़ने के लिए अखबार को दूर रखना पड़ रहा है, तो इसका मतलब है कि उसे पास की वस्तुएं देखने में समस्या है।"
    },
    {
        question: "प्रश्न 2. एक छात्र ब्लैकबोर्ड पर लिखे अक्षरों को ठीक से नहीं पढ़ पाता, लेकिन अपनी किताब में लिखे अक्षरों को पढ़ लेता है। वह किस दोष से पीड़ित है?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: true },
            { text: "(b) दूर-दृष्टि दोष", correct: false },
            { text: "(c) जरा-दूरदृष्टिता", correct: false },
            { text: "(d) कोई दोष नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छात्र को दूर की वस्तुएं (ब्लैकबोर्ड) देखने में समस्या है, लेकिन पास की वस्तुएं (किताब) स्पष्ट हैं, जो निकट-दृष्टि दोष का लक्षण है।"
    },
    {
        question: "प्रश्न 3. किस दोष में नेत्र लेंस की अभिसारी क्षमता कम हो जाती है?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: false },
            { text: "(b) दूर-दृष्टि दोष", correct: true },
            { text: "(c) वर्णांधता", correct: false },
            { text: "(d) दृष्टिवैषम्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूर-दृष्टि दोष में, नेत्र लेंस प्रकाश किरणों को पर्याप्त रूप से मोड़ने में असमर्थ होता है ताकि वे रेटिना पर केंद्रित हो सकें, जिससे प्रतिबिंब रेटिना के पीछे बनता है।"
    },
    {
        question: "प्रश्न 4. किस दोष में नेत्र लेंस की अभिसारी क्षमता बढ़ जाती है?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: true },
            { text: "(b) दूर-दृष्टि दोष", correct: false },
            { text: "(c) जरा-दूरदृष्टिता", correct: false },
            { text: "(d) मोतियाबिंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निकट-दृष्टि दोष में, नेत्र लेंस प्रकाश किरणों को बहुत अधिक मोड़ देता है, जिससे वे रेटिना से पहले ही केंद्रित हो जाती हैं।"
    },
    {
        question: "प्रश्न 5. यदि चश्मे का लेंस ऊपर से देखने पर अक्षरों को छोटा दिखाता है, तो वह कौन सा लेंस है?",
        answers: shuffle([
            { text: "(a) उत्तल", correct: false },
            { text: "(b) अवतल", correct: true },
            { text: "(c) बेलनाकार", correct: false },
            { text: "(d) समतल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल लेंस एक अपसारी लेंस है और यह हमेशा एक छोटा, सीधा और आभासी प्रतिबिंब बनाता है।"
    },
    {
        question: "प्रश्न 6. यदि चश्मे का लेंस ऊपर से देखने पर अक्षरों को बड़ा दिखाता है, तो वह कौन सा लेंस है?",
        answers: shuffle([
            { text: "(a) उत्तल", correct: true },
            { text: "(b) अवतल", correct: false },
            { text: "(c) बेलनाकार", correct: false },
            { text: "(d) समतल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल लेंस एक अभिसारी लेंस है और जब इसे आवर्धक कांच के रूप में उपयोग किया जाता है तो यह एक बड़ा, सीधा और आभासी प्रतिबिंब बनाता है।"
    },
    {
        question: "प्रश्न 7. नेत्र लेंस की फोकस दूरी में परिवर्तन किसके द्वारा किया जाता है?",
        answers: shuffle([
            { text: "(a) पुतली", correct: false },
            { text: "(b) रेटिना", correct: false },
            { text: "(c) पक्ष्माभी मांसपेशियां", correct: true },
            { text: "(d) परितारिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये मांसपेशियां लेंस पर दबाव डालकर या उसे खींचकर उसकी वक्रता को बदलती हैं, जिससे फोकस दूरी समायोजित होती है।"
    },
    {
        question: "प्रश्न 8. नेत्र का कौन सा दोष शल्य चिकित्सा के बिना ठीक नहीं किया जा सकता है?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: false },
            { text: "(b) दूर-दृष्टि दोष", correct: false },
            { text: "(c) दृष्टिवैषम्य", correct: false },
            { text: "(d) मोतियाबिंद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबकि अन्य अपवर्तक दोषों को चश्मे या कॉन्टैक्ट लेंस से ठीक किया जा सकता है, मोतियाबिंद में लेंस को बदलना ही एकमात्र स्थायी उपाय है।"
    },
    {
        question: "प्रश्न 9. रेटिना पर बनने वाले प्रतिबिंब का प्रभाव कितने समय तक रहता है?",
        answers: shuffle([
            { text: "(a) 1/5 सेकंड", correct: false },
            { text: "(b) 1/10 सेकंड", correct: false },
            { text: "(c) 1/16 सेकंड", correct: true },
            { text: "(d) 1/20 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसी दृष्टि निर्बंध के कारण हमें चलती हुई तस्वीरें (मूवी) निरंतर गति में दिखाई देती हैं।"
    },
    {
        question: "प्रश्न 10. नेत्र का प्राकृतिक लेंस किस प्रकार का होता है?",
        answers: shuffle([
            { text: "(a) अवतल", correct: false },
            { text: "(b) उत्तल", correct: true },
            { text: "(c) समतल", correct: false },
            { text: "(d) बेलनाकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव नेत्र का क्रिस्टलीय लेंस एक द्वि-उत्तल (दोनों तरफ से उत्तल) लेंस होता है जो प्रकाश को रेटिना पर अभिसरित करता है।"
    },
    {
        question: "प्रश्न 11. नेत्र की सबसे बाहरी परत को क्या कहते हैं?",
        answers: shuffle([
            { text: "(a) रेटिना", correct: false },
            { text: "(b) कोरॉइड", correct: false },
            { text: "(c) स्क्लेरा (श्वेतपटल)", correct: true },
            { text: "(d) कॉर्निया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेतपटल नेत्र का सफेद, कठोर और सुरक्षात्मक बाहरी आवरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> कॉर्निया इसी का पारदर्शी अगला भाग है।"
    },
    {
        question: "प्रश्न 12. हमारी आंखें किस प्रकार की तरंगों के प्रति संवेदनशील होती हैं?",
        answers: shuffle([
            { text: "(a) अवरक्त विकिरण", correct: false },
            { text: "(b) पराबैंगनी विकिरण", correct: false },
            { text: "(c) दृश्य प्रकाश", correct: true },
            { text: "(d) रेडियो तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानव नेत्र केवल विद्युत चुम्बकीय स्पेक्ट्रम के एक बहुत छोटे हिस्से, जिसे दृश्य प्रकाश कहते हैं, को ही देख सकता है।"
    },
    {
        question: "प्रश्न 13. नेत्र लेंस किसके द्वारा अपनी स्थिति में बना रहता है?",
        answers: shuffle([
            { text: "(a) जलीय द्रव", correct: false },
            { text: "(b) पक्ष्माभी मांसपेशियां", correct: false },
            { text: "(c) निलंबन स्नायु (Suspensory ligaments)", correct: true },
            { text: "(d) प्रकाशिक तंत्रिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये स्नायु नेत्र लेंस को पक्ष्माभी मांसपेशियों से जोड़ते हैं और उसे सही जगह पर रखते हैं।"
    },
    {
        question: "प्रश्न 14. रेटिना की कौन सी कोशिकाएं कम प्रकाश (मंद रोशनी) के प्रति संवेदनशील होती हैं?",
        answers: shuffle([
            { text: "(a) शंकु कोशिकाएं", correct: false },
            { text: "(b) शलाका कोशिकाएं", correct: true },
            { text: "(c) तंत्रिका कोशिकाएं", correct: false },
            { text: "(d) ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शलाका (रॉड) कोशिकाएं प्रकाश की तीव्रता के प्रति बहुत संवेदनशील होती हैं और हमें रात में या कम रोशनी में देखने में मदद करती हैं, लेकिन वे रंग नहीं पहचान सकतीं।"
    },
    {
        question: "प्रश्न 15. \"निकट बिंदु\" क्या है?",
        answers: shuffle([
            { text: "(a) नेत्र से वह अधिकतम दूरी जहाँ वस्तु स्पष्ट दिखे।", correct: false },
            { text: "(b) नेत्र से वह न्यूनतम दूरी जहाँ वस्तु स्पष्ट दिखे।", correct: true },
            { text: "(c) नेत्र लेंस का केंद्र।", correct: false },
            { text: "(d) रेटिना का केंद्र।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्पष्ट दृष्टि की न्यूनतम दूरी है, जहाँ तक नेत्र अपनी समंजन क्षमता का पूरा उपयोग करके वस्तु पर ध्यान केंद्रित कर सकता है।"
    },
    {
        question: "प्रश्न 16. \"दूर बिंदु\" क्या है?",
        answers: shuffle([
            { text: "(a) नेत्र से वह अधिकतम दूरी जहाँ वस्तु स्पष्ट दिखे।", correct: true },
            { text: "(b) नेत्र से वह न्यूनतम दूरी जहाँ वस्तु स्पष्ट दिखे।", correct: false },
            { text: "(c) लेंस और रेटिना के बीच की दूरी।", correct: false },
            { text: "(d) दो आंखों के बीच की दूरी।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सबसे दूर का बिंदु है जिसे नेत्र बिना किसी समंजन के (शिथिल अवस्था में) स्पष्ट रूप से देख सकता है।"
    },
    {
        question: "प्रश्न 17. एक व्यक्ति जो न तो निकट की वस्तुओं को और न ही दूर की वस्तुओं को स्पष्ट रूप से देख सकता है, वह किससे पीड़ित हो सकता है?",
        answers: shuffle([
            { text: "(a) केवल निकट-दृष्टि दोष", correct: false },
            { text: "(b) केवल दूर-दृष्टि दोष", correct: false },
            { text: "(c) जरा-दूरदृष्टिता", correct: true },
            { text: "(d) केवल वर्णांधता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जरा-दूरदृष्टिता में अक्सर व्यक्ति का निकट-बिंदु दूर हो जाता है और कभी-कभी दूर-दृष्टि भी प्रभावित होती है, जिससे दोनों में समस्या होती है।"
    },
    {
        question: "प्रश्न 18. यदि नेत्र लेंस की फोकस दूरी बहुत कम हो जाए तो कौन सा दोष उत्पन्न होगा?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: true },
            { text: "(b) दूर-दृष्टि दोष", correct: false },
            { text: "(c) दृष्टिवैषम्य", correct: false },
            { text: "(d) मोतियाबिंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फोकस दूरी कम होने का मतलब है कि लेंस की अभिसारी क्षमता बढ़ गई है, जिससे किरणें रेटिना से पहले ही केंद्रित हो जाएंगी।"
    },
    {
        question: "प्रश्न 19. यदि नेत्र लेंस की फोकस दूरी बहुत अधिक हो जाए तो कौन सा दोष उत्पन्न होगा?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: false },
            { text: "(b) दूर-दृष्टि दोष", correct: true },
            { text: "(c) दृष्टिवैषम्य", correct: false },
            { text: "(d) मोतियाबिंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फोकस दूरी अधिक होने का मतलब है कि लेंस की अभिसारी क्षमता कम हो गई है, जिससे किरणें रेटिना के पीछे केंद्रित होंगी।"
    },
    {
        question: "प्रश्न 20. कौन सा दृष्टि दोष एक अपवर्तक दोष नहीं है?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: false },
            { text: "(b) दूर-दृष्टि दोष", correct: false },
            { text: "(c) दृष्टिवैषम्य", correct: false },
            { text: "(d) मोतियाबिंद", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवर्तक दोष वे होते हैं जिनमें आंख प्रकाश को सही ढंग से केंद्रित नहीं कर पाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> मोतियाबिंद में लेंस अपारदर्शी हो जाता है, यह अपवर्तन की त्रुटि नहीं है।"
    },
    {
        question: "प्रश्न 21. आंख का रंग किस भाग पर निर्भर करता है?",
        answers: shuffle([
            { text: "(a) कॉर्निया", correct: false },
            { text: "(b) पुतली", correct: false },
            { text: "(c) परितारिका (आइरिस)", correct: true },
            { text: "(d) श्वेतपटल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परितारिका में मौजूद मेलेनिन वर्णक की मात्रा आंख के रंग (नीला, हरा, भूरा) को निर्धारित करती है।"
    },
    {
        question: "प्रश्न 22. जब हम किसी वस्तु को देखते हैं, तो उसकी सूचना मस्तिष्क तक किस रूप में पहुंचती है?",
        answers: shuffle([
            { text: "(a) प्रकाश संकेतों के रूप में", correct: false },
            { text: "(b) ध्वनि संकेतों के रूप में", correct: false },
            { text: "(c) विद्युत संकेतों के रूप में", correct: true },
            { text: "(d) रासायनिक संकेतों के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेटिना की प्रकाश-संवेदी कोशिकाएं प्रकाश ऊर्जा को विद्युत संकेतों में परिवर्तित करती हैं, जिन्हें प्रकाशिक तंत्रिका मस्तिष्क तक ले जाती है।"
    },
    {
        question: "प्रश्न 23. नेत्रदान मृत्यु के कितने घंटे के भीतर हो जाना चाहिए?",
        answers: shuffle([
            { text: "(a) 1-2 घंटे", correct: false },
            { text: "(b) 4-6 घंटे", correct: true },
            { text: "(c) 10-12 घंटे", correct: false },
            { text: "(d) 24 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत्यु के बाद कॉर्निया को जल्द से जल्द निकालना आवश्यक होता है ताकि वह स्वस्थ और प्रत्यारोपण के योग्य बना रहे।"
    },
    {
        question: "प्रश्न 24. स्वस्थ दृष्टि बनाए रखने के लिए कौन सा विटामिन आवश्यक है?",
        answers: shuffle([
            { text: "(a) विटामिन C", correct: false },
            { text: "(b) विटामिन D", correct: false },
            { text: "(c) विटामिन K", correct: false },
            { text: "(d) विटामिन A", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विटामिन A रेटिनॉल का एक प्रमुख घटक है, जो रेटिना में प्रकाश को अवशोषित करने वाले अणु के निर्माण के लिए आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी कमी से रतौंधी हो सकती है।"
    },
    {
        question: "प्रश्न 25. धूप का चश्मा आंखों की सुरक्षा कैसे करता है?",
        answers: shuffle([
            { text: "(a) प्रकाश को केंद्रित करके", correct: false },
            { text: "(b) हानिकारक पराबैंगनी (UV) किरणों को रोककर", correct: true },
            { text: "(c) आंखों को गर्म रखकर", correct: false },
            { text: "(d) दृष्टि को तेज करके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अच्छे धूप के चश्मे सूर्य से आने वाली हानिकारक UV विकिरण को फिल्टर कर देते हैं, जो मोतियाबिंद और अन्य नेत्र रोगों का कारण बन सकती हैं।"
    },
    {
        question: "प्रश्न 26. दूरबीन का उपयोग किस दृष्टि दोष का अनुभव करने जैसा है?",
        answers: shuffle([
            { text: "(a) यह दूर की वस्तुओं को पास लाता है।", correct: true },
            { text: "(b) यह पास की वस्तुओं को दूर दिखाता है।", correct: false },
            { text: "(c) यह दृष्टि को धुंधला कर देता है।", correct: false },
            { text: "(d) इसका दृष्टि दोष से कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूरबीन का कार्य दूर की वस्तुओं का बड़ा कोणीय आवर्धन बनाना है, जिससे वे पास और बड़ी दिखाई देती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह किसी दोष का अनुभव नहीं है, बल्कि दृष्टि का विस्तार है।"
    },
    {
        question: "प्रश्न 27. कंप्यूटर स्क्रीन पर लंबे समय तक काम करने से होने वाली आंखों की थकान को क्या कहते हैं?",
        answers: shuffle([
            { text: "(a) मोतियाबिंद", correct: false },
            { text: "(b) डिजिटल आई स्ट्रेन या कंप्यूटर विजन सिंड्रोम", correct: true },
            { text: "(c) ग्लूकोमा", correct: false },
            { text: "(d) रेटिनाइटिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह स्क्रीन पर ध्यान केंद्रित करने, कम पलक झपकाने और नीली रोशनी के संपर्क में आने के कारण होने वाली आंखों की समस्याओं का एक समूह है।"
    },
    {
        question: "प्रश्न 28. यदि एक व्यक्ति लाल और हरे रंग में भेद नहीं कर पाता है, तो उसे कौन सा दोष है?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: false },
            { text: "(b) दूर-दृष्टि दोष", correct: false },
            { text: "(c) वर्णांधता", correct: true },
            { text: "(d) मोतियाबिंद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाल-हरा वर्णांधता सबसे आम प्रकार है, जिसमें व्यक्ति को इन दोनों रंगों में अंतर करना मुश्किल होता है।"
    },
    {
        question: "प्रश्न 29. क्या चश्मा पहनने से आंखों की शक्ति स्थायी रूप से ठीक हो जाती है?",
        answers: shuffle([
            { text: "(a) हाँ, हमेशा", correct: false },
            { text: "(b) नहीं, यह केवल दृष्टि को अस्थायी रूप से ठीक करता है।", correct: true },
            { text: "(c) केवल बच्चों में", correct: false },
            { text: "(d) केवल वयस्कों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चश्मा एक बाहरी उपकरण है जो प्रकाश को सही ढंग से केंद्रित करने में मदद करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आंख के आकार या लेंस की शक्ति को स्थायी रूप से नहीं बदलता है।"
    },
    {
        question: "प्रश्न 30. रेटिना में कौन सी कोशिकाएं अनुपस्थित होने पर व्यक्ति रात में ठीक से नहीं देख पाता (रतौंधी)?",
        answers: shuffle([
            { text: "(a) शंकु कोशिकाएं", correct: false },
            { text: "(b) शलाका कोशिकाएं", correct: true },
            { text: "(c) तंत्रिका कोशिकाएं", correct: false },
            { text: "(d) पीत कोशिकाएं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शलाका (रॉड) कोशिकाएं मंद प्रकाश के प्रति संवेदनशील होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी कमी या शिथिलता के कारण रतौंधी होती है।"
    },
    {
        question: "प्रश्न 31. नेत्र का कौन सा भाग एक जीवित ऊतक है जिसमें रक्त वाहिकाएं नहीं होती हैं?",
        answers: shuffle([
            { text: "(a) रेटिना", correct: false },
            { text: "(b) कोरॉइड", correct: false },
            { text: "(c) कॉर्निया", correct: true },
            { text: "(d) श्वेतपटल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉर्निया को पोषक तत्व और ऑक्सीजन सीधे आंसू और जलीय द्रव से मिलते हैं, न कि रक्त से।<br><br><i class='fa-solid fa-angles-right icon'></i> यही कारण है कि इसका प्रत्यारोपण अपेक्षाकृत आसान होता है।"
    },
    {
        question: "प्रश्न 32. ग्लूकोमा (काला मोतिया) में नेत्र का कौन सा भाग क्षतिग्रस्त होता है?",
        answers: shuffle([
            { text: "(a) कॉर्निया", correct: false },
            { text: "(b) लेंस", correct: false },
            { text: "(c) रेटिना", correct: false },
            { text: "(d) प्रकाशिक तंत्रिका (Optic nerve)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लूकोमा में आंख के अंदर तरल का दबाव बढ़ जाता है, जो धीरे-धीरे प्रकाशिक तंत्रिका को नुकसान पहुंचाता है, जिससे दृष्टि स्थायी रूप से जा सकती है।"
    },
    {
        question: "प्रश्न 33. चश्मे का नंबर \"+\" में होने का क्या अर्थ है?",
        answers: shuffle([
            { text: "(a) लेंस अवतल है।", correct: false },
            { text: "(b) लेंस उत्तल है।", correct: true },
            { text: "(c) लेंस बेलनाकार है।", correct: false },
            { text: "(d) लेंस द्विफोकसी है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धनात्मक शक्ति उत्तल (अभिसारी) लेंस को इंगित करती है, जिसका उपयोग दूर-दृष्टि दोष के लिए होता है।"
    },
    {
        question: "प्रश्न 34. चश्मे का नंबर \"-\" में होने का क्या अर्थ है?",
        answers: shuffle([
            { text: "(a) लेंस अवतल है।", correct: true },
            { text: "(b) लेंस उत्तल है।", correct: false },
            { text: "(c) लेंस बेलनाकार है।", correct: false },
            { text: "(d) लेंस द्विफोकसी है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऋणात्मक शक्ति अवतल (अपसारी) लेंस को इंगित करती है, जिसका उपयोग निकट-दृष्टि दोष के लिए होता है।"
    },
    {
        question: "प्रश्न 35. कौन सा दोष मुख्य रूप से उम्र से संबंधित है?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: false },
            { text: "(b) दूर-दृष्टि दोष", correct: false },
            { text: "(c) दृष्टिवैषम्य", correct: false },
            { text: "(d) जरा-दूरदृष्टिता", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रेसबायोपिया उम्र बढ़ने की एक प्राकृतिक प्रक्रिया है, जो आमतौर पर 40 वर्ष की आयु के बाद शुरू होती है।"
    },
    {
        question: "प्रश्न 36. एक व्यक्ति की दृष्टि 6/12 है। इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "(a) व्यक्ति की दृष्टि सामान्य से बेहतर है।", correct: false },
            { text: "(b) व्यक्ति की दृष्टि सामान्य है।", correct: false },
            { text: "(c) व्यक्ति 6 मीटर से वह देख सकता है जो सामान्य व्यक्ति 12 मीटर से देख सकता है।", correct: true },
            { text: "(d) व्यक्ति 12 मीटर से वह देख सकता है जो सामान्य व्यक्ति 6 मीटर से देख सकता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 6/6 दृष्टि को सामान्य माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 6/12 का अर्थ है कि व्यक्ति की दृष्टि सामान्य से आधी है।"
    },
    {
        question: "प्रश्न 37. आंसू किस ग्रंथि द्वारा निर्मित होते हैं?",
        answers: shuffle([
            { text: "(a) पीयूष ग्रंथि", correct: false },
            { text: "(b) थायरॉयड ग्रंथि", correct: false },
            { text: "(c) लैक्रिमल ग्रंथि (अश्रु ग्रंथि)", correct: true },
            { text: "(d) लार ग्रंथि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये ग्रंथियां आंखों को नम रखने, साफ करने और संक्रमण से बचाने के लिए आंसू बनाती हैं।"
    },
    {
        question: "प्रश्न 38. आंखों का व्यायाम करने से क्या लाभ होता है?",
        answers: shuffle([
            { text: "(a) दृष्टि दोष ठीक हो जाते हैं।", correct: false },
            { text: "(b) चश्मे का नंबर कम हो जाता है।", correct: false },
            { text: "(c) आंखों की मांसपेशियों को आराम मिलता है और तनाव कम होता है।", correct: true },
            { text: "(d) मोतियाबिंद ठीक हो जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यायाम अपवर्तक दोषों को ठीक नहीं कर सकता, लेकिन यह डिजिटल आई स्ट्रेन जैसी समस्याओं को कम करने में मदद कर सकता है।"
    },
    {
        question: "प्रश्न 39. किस दृष्टि दोष को \"लेजी आई\" (मंददृष्टि) भी कहा जाता है?",
        answers: shuffle([
            { text: "(a) एम्ब्लियोपिया", correct: true },
            { text: "(b) मायोपिया", correct: false },
            { text: "(c) हाइपरमेट्रोपिया", correct: false },
            { text: "(d) एस्टिग्मेटिज्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बचपन में होने वाली एक स्थिति है जिसमें एक आंख में दृष्टि ठीक से विकसित नहीं होती क्योंकि मस्तिष्क उस आंख के संकेतों को अनदेखा करने लगता है।"
    },
    {
        question: "प्रश्न 40. यदि नेत्र लेंस पूरी तरह से अपारदर्शी हो जाए, तो क्या होगा?",
        answers: shuffle([
            { text: "(a) दृष्टि धुंधली हो जाएगी।", correct: false },
            { text: "(b) केवल पास की वस्तुएं दिखेंगी।", correct: false },
            { text: "(c) केवल दूर की वस्तुएं दिखेंगी।", correct: false },
            { text: "(d) व्यक्ति पूरी तरह से अंधा हो जाएगा।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि लेंस अपारदर्शी है, तो कोई भी प्रकाश रेटिना तक नहीं पहुंच पाएगा, जिससे पूर्ण अंधापन हो जाएगा।"
    },
    {
        question: "प्रश्न 41. दृष्टि की तीक्ष्णता (Visual acuity) क्या मापती है?",
        answers: shuffle([
            { text: "(a) रंगों को पहचानने की क्षमता", correct: false },
            { text: "(b) विवरण को स्पष्ट रूप से देखने की क्षमता", correct: true },
            { text: "(c) अंधेरे में देखने की क्षमता", correct: false },
            { text: "(d) गहराई को समझने की क्षमता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसे स्नेलेन चार्ट (अक्षरों वाला चार्ट) का उपयोग करके मापा जाता है और 6/6 जैसे अंशों में व्यक्त किया जाता है।"
    },
    {
        question: "प्रश्न 42. किस दोष में पास और दूर दोनों बिंदुओं पर रखी वस्तुएं धुंधली दिखाई दे सकती हैं?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: false },
            { text: "(b) दूर-दृष्टि दोष", correct: false },
            { text: "(c) दृष्टिवैषम्य", correct: true },
            { text: "(d) वर्णांधता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉर्निया की अनियमितता के कारण, प्रकाश की किरणें कभी भी एक बिंदु पर ठीक से केंद्रित नहीं होती हैं, जिससे सभी दूरियों पर दृष्टि धुंधली हो सकती है।"
    },
    {
        question: "प्रश्न 43. नेत्र लेंस की शक्ति को कौन समायोजित करता है?",
        answers: shuffle([
            { text: "(a) परितारिका", correct: false },
            { text: "(b) पुतली", correct: false },
            { text: "(c) पक्ष्माभी मांसपेशियां", correct: true },
            { text: "(d) रेटिना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये मांसपेशियां लेंस का आकार बदलकर उसकी शक्ति को बदलती हैं ताकि अलग-अलग दूरी पर वस्तुओं को केंद्रित किया जा सके।"
    },
    {
        question: "प्रश्न 44. एक सामान्य नेत्र कितनी दूर तक देख सकता है?",
        answers: shuffle([
            { text: "(a) 1 किलोमीटर", correct: false },
            { text: "(b) 10 किलोमीटर", correct: false },
            { text: "(c) 100 किलोमीटर", correct: false },
            { text: "(d) अनंत तक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ आंख का दूर बिंदु अनंत होता है, जिसका अर्थ है कि वह बहुत दूर की वस्तुओं (जैसे तारे) पर ध्यान केंद्रित कर सकती है।"
    },
    {
        question: "प्रश्न 45. नेत्र गोलक का व्यास लगभग कितना होता है?",
        answers: shuffle([
            { text: "(a) 1.3 सेमी", correct: false },
            { text: "(b) 2.3 सेमी", correct: true },
            { text: "(c) 3.3 सेमी", correct: false },
            { text: "(d) 4.3 सेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वयस्क मानव नेत्र गोलक का व्यास लगभग 2.3 से 2.5 सेंटीमीटर के बीच होता है।"
    },
    {
        question: "प्रश्न 46. रात में जानवरों की आंखें क्यों चमकती हैं?",
        answers: shuffle([
            { text: "(a) उनकी आंखों में प्रकाश होता है।", correct: false },
            { text: "(b) टेपेटम ल्यूसिडम नामक एक परावर्तक परत के कारण।", correct: true },
            { text: "(c) उनकी पुतलियां बड़ी होती हैं।", correct: false },
            { text: "(d) यह एक भ्रम है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह परत रेटिना के पीछे होती है और प्रकाश को वापस परावर्तित करती है, जिससे जानवरों को कम रोशनी में बेहतर देखने में मदद मिलती है और उनकी आंखें चमकती हुई दिखाई देती हैं।"
    },
    {
        question: "प्रश्न 47. एक लेंस की फोकस दूरी उसकी शक्ति के...",
        answers: shuffle([
            { text: "(a) समानुपाती होती है।", correct: false },
            { text: "(b) व्युत्क्रमानुपाती होती है।", correct: true },
            { text: "(c) बराबर होती है।", correct: false },
            { text: "(d) वर्ग के बराबर होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूत्र P=1/f से स्पष्ट है कि शक्ति और फोकस दूरी में व्युत्क्रम संबंध है।"
    },
    {
        question: "प्रश्न 48. कौन सा दोष नेत्र लेंस के लचीलेपन में कमी के कारण होता है?",
        answers: shuffle([
            { text: "(a) निकट-दृष्टि दोष", correct: false },
            { text: "(b) दृष्टिवैषम्य", correct: false },
            { text: "(c) जरा-दूरदृष्टिता", correct: true },
            { text: "(d) वर्णांधता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उम्र के साथ, नेत्र लेंस कठोर हो जाता है और पक्ष्माभी मांसपेशियां उसे आसानी से समायोजित नहीं कर पाती हैं, जिससे पास की वस्तुओं पर ध्यान केंद्रित करना मुश्किल हो जाता है।"
    },
    {
        question: "प्रश्न 49. मानव आंख द्वारा देखे जा सकने वाले रंगों की संख्या लगभग कितनी है?",
        answers: shuffle([
            { text: "(a) 1 हजार", correct: false },
            { text: "(b) 1 लाख", correct: false },
            { text: "(c) 10 लाख", correct: false },
            { text: "(d) 1 करोड़", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सामान्य मानव आंख लगभग 1 करोड़ विभिन्न रंगों और उनकी छटाओं में अंतर कर सकती है।"
    },
    {
        question: "प्रश्न 50. \"फ्लोटर्स\" (Floaters) क्या हैं जो कभी-कभी दृष्टि में दिखाई देते हैं?",
        answers: shuffle([
            { text: "(a) बाहरी धूल के कण", correct: false },
            { text: "(b) काचाभ द्रव में तैरते हुए छोटे ऊतक के टुकड़े", correct: true },
            { text: "(c) रक्त के थक्के", correct: false },
            { text: "(d) हवा के बुलबुले", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये छोटे धब्बे या धागे होते हैं जो दृष्टि क्षेत्र में तैरते हुए दिखाई देते हैं और उम्र बढ़ने की एक सामान्य प्रक्रिया का हिस्सा हैं।"
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