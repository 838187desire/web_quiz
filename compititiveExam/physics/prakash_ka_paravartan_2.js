const questions = [
    {
        topHeading: "प्रकाश के परावर्तन पर आधारित 50 MCQs,part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. नई स्टील की प्लेट चमकदार दिखती है जबकि पुरानी प्लेट नहीं, इसका कारण क्या है?",
        answers: shuffle([
            { text: "नई प्लेट में नियमित परावर्तन और पुरानी में विसरित परावर्तन होता है।", correct: true },
            { text: "पुरानी प्लेट प्रकाश को अवशोषित कर लेती है।", correct: false },
            { text: "नई प्लेट प्रकाश का अपवर्तन करती है।", correct: false },
            { text: "पुरानी प्लेट में जंग लग जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नई प्लेट की सतह चिकनी होने के कारण नियमित परावर्तन करती है, जबकि पुरानी प्लेट की सतह खुरदरी हो जाने के कारण विसरित परावर्तन करती है, जिससे चमक खत्म हो जाती है।"
    },
    {
        question: "प्रश्न 2. एक आवर्धन जिसका मान -1.0 है, क्या दर्शाता है?",
        answers: shuffle([
            { text: "प्रतिबिंब आभासी, सीधा और वस्तु के आकार का है।", correct: false },
            { text: "प्रतिबिंब वास्तविक, उल्टा और वस्तु के आकार का है।", correct: true },
            { text: "प्रतिबिंब वास्तविक, उल्टा और वस्तु से बड़ा है।", correct: false },
            { text: "प्रतिबिंब आभासी, सीधा और वस्तु से छोटा है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '-' चिह्न वास्तविक और उल्टे प्रतिबिंब को दर्शाता है, और '1.0' का मान वस्तु के समान आकार को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तब होता है जब वस्तु अवतल दर्पण के वक्रता केंद्र पर हो।"
    },
    {
        question: "प्रश्न 3. खतरनाक मोड़ों पर ड्राइवरों को दूसरी तरफ से आने वाले वाहनों को देखने में मदद करने के लिए कौन सा दर्पण लगाया जाता है?",
        answers: shuffle([
            { text: "अवतल दर्पण", correct: false },
            { text: "उत्तल दर्पण", correct: true },
            { text: "समतल दर्पण", correct: false },
            { text: "कांच की पट्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण का व्यापक दृष्टि क्षेत्र होता है, जो ड्राइवरों को अंधे मोड़ के आसपास देखने में सक्षम बनाता है, जिससे दुर्घटनाओं को रोकने में मदद मिलती है।"
    },
    {
        question: "प्रश्न 4. यदि आप समतल दर्पण में अपनी घड़ी देखते हैं और समय 3:00 बज रहा है, तो प्रतिबिंब में क्या समय दिखाई देगा?",
        answers: shuffle([
            { text: "3:00", correct: false },
            { text: "9:00", correct: true },
            { text: "6:00", correct: false },
            { text: "12:00", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्श्व व्युत्क्रमण के कारण, दर्पण प्रतिबिंब में समय को 12:00 में से घटाकर (या 11:60 में से) प्राप्त किया जा सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 12:00 - 3:00 = 9:00।"
    },
    {
        question: "प्रश्न 5. प्रकाश का अपनी घटक तरंगों में विभाजित होना क्या कहलाता है?",
        answers: shuffle([
            { text: "परावर्तन", correct: false },
            { text: "विक्षेपण", correct: true },
            { text: "विवर्तन", correct: false },
            { text: "अपवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रश्न सीधे परावर्तन से नहीं है, लेकिन संबंधित है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब सफेद प्रकाश प्रिज्म से गुजरता है तो यह अपने सात रंगों में बंट जाता है, जिसे विक्षेपण कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> परावर्तन में ऐसा नहीं होता।"
    },
    {
        question: "प्रश्न 6. वह बिंदु जिससे उत्तल दर्पण में परावर्तित किरणें आती हुई प्रतीत होती हैं, क्या कहलाता है?",
        answers: shuffle([
            { text: "वास्तविक फोकस", correct: false },
            { text: "आभासी फोकस", correct: true },
            { text: "वक्रता केंद्र", correct: false },
            { text: "ध्रुव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि किरणें वास्तव में नहीं मिलती हैं, इसलिए उत्तल दर्पण का फोकस आभासी होता है और दर्पण के पीछे स्थित होता है।"
    },
    {
        question: "प्रश्न 7. यदि कोई प्रकाश किरण दर्पण की सतह को स्पर्श करते हुए (लगभग समानांतर) निकल जाए, तो आपतन कोण कितना होगा?",
        answers: shuffle([
            { text: "0°", correct: false },
            { text: "45°", correct: false },
            { text: "लगभग 90°", correct: true },
            { text: "180°", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपतन कोण अभिलंब (जो सतह पर लंबवत होता है) से मापा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि किरण सतह के लगभग समानांतर है, तो यह अभिलंब के साथ लगभग 90° का कोण बनाएगी।"
    },
    {
        question: "प्रश्न 8. किस दर्पण का दृष्टि क्षेत्र सबसे बड़ा होता है?",
        answers: shuffle([
            { text: "समतल दर्पण", correct: false },
            { text: "अवतल दर्पण", correct: false },
            { text: "उत्तल दर्पण", correct: true },
            { text: "सभी का समान होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण अपनी बाहरी वक्रता के कारण प्रकाश को बाहर की ओर फैलाता है, जिससे यह एक बहुत बड़े क्षेत्र से प्रकाश को इकट्ठा करके एक छोटे प्रतिबिंब में दिखा सकता है।"
    },
    {
        question: "प्रश्न 9. सिनेमा हॉल के पर्दे पर बनने वाला प्रतिबिंब किस प्रकार का होता है?",
        answers: shuffle([
            { text: "आभासी", correct: false },
            { text: "वास्तविक", correct: true },
            { text: "पार्श्व व्युत्क्रमित", correct: false },
            { text: "काल्पनिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि प्रतिबिंब को पर्दे पर उतारा जा रहा है, इसलिए यह अनिवार्य रूप से एक वास्तविक प्रतिबिंब होना चाहिए, जो आमतौर पर एक प्रोजेक्टर लेंस द्वारा बनाया जाता है।"
    },
    {
        question: "प्रश्न 10. परावर्तन के नियम किस पर लागू होते हैं?",
        answers: shuffle([
            { text: "केवल समतल दर्पणों पर", correct: false },
            { text: "केवल गोलीय दर्पणों पर", correct: false },
            { text: "केवल खुरदरी सतहों पर", correct: false },
            { text: "सभी प्रकार की परावर्तक सतहों पर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परावर्तन के नियम सार्वभौमिक हैं और किसी भी प्रकार की सतह पर लागू होते हैं, चाहे वह समतल, गोलीय या अनियमित हो।"
    },
    {
        question: "प्रश्न 11. यदि दो समतल दर्पणों को एक दूसरे से 90° के कोण पर रखा जाए, तो उनके बीच रखी वस्तु के कितने प्रतिबिंब बनेंगे?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "अनंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रतिबिंबों की संख्या की गणना (360/θ) - 1 सूत्र से की जाती है यदि 360/θ एक सम संख्या है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ (360/90) - 1 = 4 - 1 = 3।"
    },
    {
        question: "प्रश्न 12. अवतल दर्पण से बनने वाला वास्तविक प्रतिबिंब हमेशा कैसा होता है?",
        answers: shuffle([
            { text: "सीधा", correct: false },
            { text: "उल्टा", correct: true },
            { text: "वस्तु से छोटा", correct: false },
            { text: "आभासी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल दर्पण द्वारा बनाए गए सभी वास्तविक प्रतिबिंब हमेशा उल्टे होते हैं।"
    },
    {
        question: "प्रश्न 13. किसी वस्तु को स्पष्ट रूप से देखने के लिए उसका प्रतिबिंब हमारी आंखों में कहाँ बनना चाहिए?",
        answers: shuffle([
            { text: "कॉर्निया पर", correct: false },
            { text: "पुतली पर", correct: false },
            { text: "रेटिना पर", correct: true },
            { text: "लेंस पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेटिना आंख के पीछे एक प्रकाश-संवेदनशील स्क्रीन की तरह काम करता है, जिस पर वास्तविक और उल्टा प्रतिबिंब बनता है, जिसे मस्तिष्क सीधा करके समझता है।"
    },
    {
        question: "प्रश्न 14. कौन सा दर्पण कभी भी वास्तविक प्रतिबिंब नहीं बना सकता?",
        answers: shuffle([
            { text: "a) अवतल दर्पण", correct: false },
            { text: "b) उत्तल दर्पण", correct: false },
            { text: "c) समतल दर्पण", correct: false },
            { text: "(b) और (c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण और समतल दर्पण दोनों ही हमेशा आभासी प्रतिबिंब बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> केवल अवतल दर्पण ही वास्तविक प्रतिबिंब बना सकता है।"
    },
    {
        question: "प्रश्न 15. चम्मच का भीतरी वक्र पृष्ठ किस प्रकार के दर्पण की तरह कार्य करता है?",
        answers: shuffle([
            { text: "अवतल दर्पण", correct: true },
            { text: "उत्तल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चम्मच का अंदर की ओर धँसा हुआ भाग एक अवतल (converging) सतह की तरह होता है।"
    },
    {
        question: "प्रश्न 16. चम्मच का बाहरी उभरा हुआ पृष्ठ किस प्रकार के दर्पण की तरह कार्य करता है?",
        answers: shuffle([
            { text: "अवतल दर्पण", correct: false },
            { text: "उत्तल दर्पण", correct: true },
            { text: "समतल दर्पण", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चम्मच का बाहर की ओर उभरा हुआ भाग एक उत्तल (diverging) सतह की तरह होता है।"
    },
    {
        question: "प्रश्न 17. जब कोई प्रकाश किरण मुख्य अक्ष के समानांतर आती है, तो अवतल दर्पण से परावर्तन के बाद वह कहाँ से गुजरती है?",
        answers: shuffle([
            { text: "वक्रता केंद्र से", correct: false },
            { text: "मुख्य फोकस से", correct: true },
            { text: "ध्रुव से", correct: false },
            { text: "अपने ही पथ पर वापस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अवतल दर्पण के लिए किरण आरेख बनाने का एक मानक नियम है।"
    },
    {
        question: "प्रश्न 18. जब कोई प्रकाश किरण उत्तल दर्पण के मुख्य फोकस की दिशा में जाती है, तो परावर्तन के बाद क्या होता है?",
        answers: shuffle([
            { text: "वह मुख्य अक्ष के समानांतर हो जाती है।", correct: true },
            { text: "वह वक्रता केंद्र से गुजरती है।", correct: false },
            { text: "वह अपने ही पथ पर वापस लौट जाती है।", correct: false },
            { text: "वह ध्रुव से गुजरती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह उत्तल दर्पण के लिए किरण आरेख बनाने का एक नियम है, जो अवतल दर्पण के नियम का विलोम है।"
    },
    {
        question: "प्रश्न 19. अवतल दर्पण की वक्रता त्रिज्या 20 सेमी है। इसकी फोकस दूरी क्या होगी?",
        answers: shuffle([
            { text: "20 सेमी", correct: false },
            { text: "40 सेमी", correct: false },
            { text: "10 सेमी", correct: true },
            { text: "5 सेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फोकस दूरी वक्रता त्रिज्या की आधी होती है (f=R/2), इसलिए f=20/2=10 सेमी।<br><br><i class='fa-solid fa-angles-right icon'></i> चिह्न परिपाटी के अनुसार यह -10 सेमी होगी।"
    },
    {
        question: "प्रश्न 20. \"परावर्तन में ऊर्जा संरक्षित रहती है\"। इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "आपतित प्रकाश की ऊर्जा हमेशा परावर्तित प्रकाश की ऊर्जा से अधिक होती है।", correct: false },
            { text: "आपतित प्रकाश की कुल ऊर्जा, परावर्तित और अवशोषित ऊर्जा के योग के बराबर होती है।", correct: true },
            { text: "परावर्तित प्रकाश की ऊर्जा हमेशा आपतित प्रकाश से अधिक होती है।", correct: false },
            { text: "ऊर्जा का परावर्तन से कोई संबंध नहीं है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊर्जा संरक्षण के नियम के अनुसार, ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है, केवल उसका रूप बदल सकता है या स्थानांतरण हो सकता है।"
    },
    {
        question: "प्रश्न 21. किस रंग के प्रकाश के लिए दर्पण की फोकस दूरी अधिकतम होगी?",
        answers: shuffle([
            { text: "बैंगनी", correct: false },
            { text: "लाल", correct: false },
            { text: "हरा", correct: false },
            { text: "सभी रंगों के लिए समान होगी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दर्पण की फोकस दूरी केवल उसकी ज्यामिति (वक्रता त्रिज्या) पर निर्भर करती है, प्रकाश के रंग (तरंगदैर्ध्य) पर नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लेंसों के मामले में भिन्न होता है।"
    },
    {
        question: "प्रश्न 22. यदि एक दर्पण पानी में डुबो दिया जाए, तो उसकी फोकस दूरी पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "बढ़ जाएगी", correct: false },
            { text: "घट जाएगी", correct: false },
            { text: "अपरिवर्तित रहेगी", correct: true },
            { text: "शून्य हो जाएगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दर्पण की फोकस दूरी परावर्तन पर आधारित है और यह माध्यम पर निर्भर नहीं करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेंस की फोकस दूरी माध्यम बदलने पर बदल जाती है।"
    },
    {
        question: "प्रश्न 23. यदि कोई आपतित किरण अभिलंब के साथ 40° का कोण बनाती है, तो परावर्तित किरण और आपतित किरण के बीच का कुल कोण कितना होगा?",
        answers: shuffle([
            { text: "40°", correct: false },
            { text: "80°", correct: true },
            { text: "90°", correct: false },
            { text: "100°", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपतन कोण 40° है, तो परावर्तन कोण भी 40° होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों किरणों के बीच का कुल कोण (विचलन) 40° + 40° = 80° होगा।"
    },
    {
        question: "प्रश्न 24. एक आवर्धन जिसका मान +3 है, किस दर्पण द्वारा संभव है?",
        answers: shuffle([
            { text: "उत्तल दर्पण", correct: false },
            { text: "अवतल दर्पण", correct: true },
            { text: "समतल दर्पण", correct: false },
            { text: "किसी के द्वारा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '+' का अर्थ है आभासी और सीधा प्रतिबिंब, और '3' (1 से बड़ा) का अर्थ है बड़ा प्रतिबिंब।<br><br><i class='fa-solid fa-angles-right icon'></i> यह संयोजन केवल अवतल दर्पण द्वारा संभव है जब वस्तु को ध्रुव और फोकस के बीच रखा जाता है।"
    },
    {
        question: "प्रश्न 25. दर्पण सूत्र किस संबंध को दर्शाता है?",
        answers: shuffle([
            { text: "आपतन कोण और परावर्तन कोण", correct: false },
            { text: "वस्तु की दूरी, प्रतिबिंब की दूरी और फोकस दूरी", correct: true },
            { text: "फोकस दूरी और वक्रता त्रिज्या", correct: false },
            { text: "आवर्धन और प्रतिबिंब की ऊंचाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दर्पण सूत्र 1/v+1/u=1/f होता है, जो इन तीन राशियों के बीच संबंध स्थापित करता है।"
    },
    {
        question: "प्रश्न 26. एक बड़े यातायात अवतल दर्पण का उपयोग क्यों नहीं किया जाता है?",
        answers: shuffle([
            { text: "a) क्योंकि वे महंगे होते हैं।", correct: false },
            { text: "b) क्योंकि वे एक संकीर्ण दृष्टि क्षेत्र देते हैं।", correct: false },
            { text: "c) क्योंकि वे उल्टे प्रतिबिंब बना सकते हैं जो भ्रामक हो सकते हैं।", correct: false },
            { text: "(b) और (c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवतल दर्पण का दृष्टि क्षेत्र संकीर्ण होता है और यदि वाहन दूर है (C से परे), तो उसका उल्टा प्रतिबिंब बनेगा जो चालक के लिए बहुत खतरनाक और भ्रमित करने वाला हो सकता है।"
    },
    {
        question: "प्रश्न 27. यदि एक समतल दर्पण को θ कोण से घुमाया जाता है, तो परावर्तित किरण कितने कोण से घूम जाएगी?",
        answers: shuffle([
            { text: "θ", correct: false },
            { text: "2θ", correct: true },
            { text: "θ/2", correct: false },
            { text: "4θ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह परावर्तन का एक महत्वपूर्ण गुण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि आपतित किरण को स्थिर रखते हुए दर्पण को θ कोण से घुमाया जाए, तो परावर्तित किरण 2θ कोण से घूम जाती है।"
    },
    {
        question: "प्रश्न 28. कौन सी सतह प्रकाश की सबसे अच्छी परावर्तक मानी जाती है?",
        answers: shuffle([
            { text: "सफेद दीवार", correct: false },
            { text: "लकड़ी की मेज", correct: false },
            { text: "चांदी की पॉलिश वाली सतह", correct: true },
            { text: "काला कपड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चांदी प्रकाश की सबसे अच्छी परावर्तकों में से एक है, यही कारण है कि उच्च गुणवत्ता वाले दर्पणों के पीछे चांदी की परत चढ़ाई जाती है।"
    },
    {
        question: "प्रश्न 29. जब आप नाई की दुकान में दो समानांतर दर्पणों के बीच बैठते हैं तो आपको अपने कई प्रतिबिंब क्यों दिखाई देते हैं?",
        answers: shuffle([
            { text: "प्रकाश के अपवर्तन के कारण", correct: false },
            { text: "प्रकाश के विवर्तन के कारण", correct: false },
            { text: "प्रकाश के बहुल परावर्तन के कारण", correct: true },
            { text: "प्रकाश के प्रकीर्णन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक दर्पण में बना प्रतिबिंब दूसरे दर्पण के लिए वस्तु का काम करता है, और यह प्रक्रिया बार-बार दोहराई जाती है, जिससे प्रतिबिंबों की एक श्रृंखला बनती है।"
    },
    {
        question: "प्रश्न 30. वह कौन सी एकमात्र स्थिति है जिसमें अवतल दर्पण वस्तु के समान आकार का प्रतिबिंब बनाता है?",
        answers: shuffle([
            { text: "जब वस्तु फोकस पर हो", correct: false },
            { text: "जब वस्तु अनंत पर हो", correct: false },
            { text: "जब वस्तु वक्रता केंद्र पर हो", correct: true },
            { text: "जब वस्तु ध्रुव पर हो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब वस्तु वक्रता केंद्र (C) पर रखी जाती है, तो प्रतिबिंब भी C पर ही बनता है और उसका आकार वस्तु के आकार के ठीक बराबर होता है (आवर्धन = -1)।"
    },
    {
        question: "प्रश्न 31. \"आपतन बिंदु\" क्या है?",
        answers: shuffle([
            { text: "वह बिंदु जहां प्रतिबिंब बनता है।", correct: false },
            { text: "दर्पण का केंद्र।", correct: false },
            { text: "वह बिंदु जहां आपतित किरण सतह से टकराती है।", correct: true },
            { text: "लेंस का केंद्र।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपतन बिंदु (Point of Incidence) परावर्तक सतह पर वह विशिष्ट स्थान है जहाँ प्रकाश की किरण आकर गिरती है।"
    },
    {
        question: "प्रश्न 32. प्रकाश की एक किरण पुंज में कई... होती हैं।",
        answers: shuffle([
            { text: "तरंगें", correct: false },
            { text: "किरणें", correct: true },
            { text: "कण", correct: false },
            { text: "आवृत्तियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश किरणों के समूह या बंडल को किरण पुंज (Beam of light) कहा जाता है।"
    },
    {
        question: "प्रश्न 33. प्रतिबिंब की ऊंचाई और वस्तु की ऊंचाई के अनुपात को क्या कहते हैं?",
        answers: shuffle([
            { text: "फोकस दूरी", correct: false },
            { text: "वक्रता त्रिज्या", correct: false },
            { text: "रैखिक आवर्धन", correct: true },
            { text: "शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आवर्धन (m) यह बताता है कि प्रतिबिंब वस्तु की तुलना में कितना गुना बड़ा या छोटा है (m=h′/h)।"
    },
    {
        question: "प्रश्न 34. एक उत्तल दर्पण की वक्रता त्रिज्या 30 सेमी है। चिह्न परिपाटी के अनुसार इसकी फोकस दूरी क्या होगी?",
        answers: shuffle([
            { text: "+30 सेमी", correct: false },
            { text: "-30 सेमी", correct: false },
            { text: "+15 सेमी", correct: true },
            { text: "-15 सेमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तल दर्पण की फोकस दूरी धनात्मक होती है और वक्रता त्रिज्या की आधी होती है, इसलिए f=+30/2=+15 सेमी।"
    },
    {
        question: "प्रश्न 35. यदि कोई किरण अवतल दर्पण के वक्रता केंद्र से होकर गुजरती है, तो परावर्तन के बाद क्या होता है?",
        answers: shuffle([
            { text: "वह फोकस से गुजरती है।", correct: false },
            { text: "वह मुख्य अक्ष के समानांतर हो जाती है।", correct: false },
            { text: "वह अपने ही पथ पर वापस लौट जाती है।", correct: true },
            { text: "वह ध्रुव की ओर मुड़ जाती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वक्रता केंद्र से गुजरने वाली किरण दर्पण की सतह पर लंबवत पड़ती है (अभिलंब के साथ), इसलिए आपतन कोण शून्य होता है और वह उसी पथ पर परावर्तित हो जाती है।"
    },
    {
        question: "प्रश्न 36. एक बिंदु स्रोत से आने वाली प्रकाश किरणें परावर्तन के बाद समानांतर हो जाती हैं। दर्पण कैसा होना चाहिए?",
        answers: shuffle([
            { text: "अवतल दर्पण, और स्रोत उसके फोकस पर होना चाहिए।", correct: true },
            { text: "उत्तल दर्पण, और स्रोत उसके फोकस पर होना चाहिए।", correct: false },
            { text: "समतल दर्पण।", correct: false },
            { text: "इनमें से कोई नहीं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह हेडलाइट और सर्चलाइट का सिद्धांत है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब स्रोत को फोकस पर रखा जाता है, तो किरणें परावर्तन के बाद समानांतर हो जाती हैं।"
    },
    {
        question: "प्रश्न 37. एक आभासी प्रतिबिंब जिसे बड़ा करके देखा जा सकता है, किसके द्वारा बनाया जा सकता है?",
        answers: shuffle([
            { text: "केवल अवतल दर्पण", correct: true },
            { text: "केवल उत्तल दर्पण", correct: false },
            { text: "केवल समतल दर्पण", correct: false },
            { text: "उत्तल और समतल दोनों दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केवल अवतल दर्पण ही एक आवर्धित (बड़ा) आभासी प्रतिबिंब बना सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> समतल दर्पण बराबर आकार का और उत्तल दर्पण छोटा आभासी प्रतिबिंब बनाता है।"
    },
    {
        question: "प्रश्न 38. सभी दूरियाँ गोलीय दर्पण में कहाँ से मापी जाती हैं?",
        answers: shuffle([
            { text: "फोकस से", correct: false },
            { text: "वक्रता केंद्र से", correct: false },
            { text: "ध्रुव से", correct: true },
            { text: "अनंत से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिह्न परिपाटी के अनुसार, सभी दूरियों को मापने के लिए दर्पण के ध्रुव (P) को मूल बिंदु माना जाता है।"
    },
    {
        question: "प्रश्न 39. चंद्रमा हमें क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "क्योंकि यह स्वयं प्रकाश उत्सर्जित करता है।", correct: false },
            { text: "क्योंकि यह सूर्य के प्रकाश को हमारी ओर परावर्तित करता है।", correct: true },
            { text: "क्योंकि यह एक तारा है।", correct: false },
            { text: "वायुमंडलीय अपवर्तन के कारण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा एक गैर-दीप्त वस्तु है; हम इसे इसलिए देखते हैं क्योंकि इसकी सतह सूर्य के प्रकाश का विसरित परावर्तन करती है।"
    },
    {
        question: "प्रश्न 40. पानी के नीचे से देखने पर पानी की सतह चांदी की तरह चमकदार क्यों दिखाई देती है (एक निश्चित कोण पर)?",
        answers: shuffle([
            { text: "परावर्तन के कारण", correct: false },
            { text: "अपवर्तन के कारण", correct: false },
            { text: "पूर्ण आंतरिक परावर्तन के कारण", correct: true },
            { text: "विवर्तन के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब प्रकाश सघन माध्यम (पानी) से विरल माध्यम (हवा) में क्रांतिक कोण से अधिक कोण पर जाने की कोशिश करता है, तो वह पूरी तरह से परावर्तित हो जाता है, जिससे सतह चमकदार दिखती है।"
    },
    {
        question: "प्रश्न 41. प्रकाश की द्वैत प्रकृति का क्या अर्थ है?",
        answers: shuffle([
            { text: "यह परावर्तित और अपवर्तित हो सकता है।", correct: false },
            { text: "यह कण और तरंग दोनों के रूप में व्यवहार करता है।", correct: true },
            { text: "इसके दो रंग होते हैं।", correct: false },
            { text: "यह दो गतियों से चलता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ घटनाओं (जैसे परावर्तन) को तरंग मानकर और कुछ (जैसे प्रकाश-विद्युत प्रभाव) को कण (फोटॉन) मानकर समझाया जा सकता है।"
    },
    {
        question: "प्रश्न 42. समतल दर्पण की वक्रता त्रिज्या कितनी होती है?",
        answers: shuffle([
            { text: "शून्य", correct: false },
            { text: "एक", correct: false },
            { text: "अनंत", correct: true },
            { text: "उसकी लंबाई के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक समतल दर्पण को एक असीम रूप से बड़े गोले का एक हिस्सा माना जा सकता है, इसलिए उसकी वक्रता त्रिज्या और फोकस दूरी दोनों अनंत होती हैं।"
    },
    {
        question: "प्रश्न 43. दर्पण पर \"कोटिंग\" के लिए किस सामग्री का उपयोग किया जाता है ताकि वह परावर्तक बन सके?",
        answers: shuffle([
            { text: "सोना या तांबा", correct: false },
            { text: "चांदी या एल्यूमीनियम", correct: true },
            { text: "लोहा या स्टील", correct: false },
            { text: "सीसा या टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कांच की एक शीट के पीछे चांदी या एल्यूमीनियम की एक पतली परत लगाकर दर्पण बनाया जाता है क्योंकि ये धातुएं प्रकाश की उत्कृष्ट परावर्तक होती हैं।"
    },
    {
        question: "प्रश्न 44. यदि कोई वस्तु अवतल दर्पण के फोकस और ध्रुव के बीच है, तो उसका प्रतिबिंब कहाँ बनेगा?",
        answers: shuffle([
            { text: "दर्पण के सामने", correct: false },
            { text: "दर्पण के पीछे", correct: true },
            { text: "फोकस पर", correct: false },
            { text: "वक्रता केंद्र पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एकमात्र स्थिति है जब अवतल दर्पण एक आभासी प्रतिबिंब बनाता है, और आभासी प्रतिबिंब हमेशा दर्पण के पीछे बनते हैं।"
    },
    {
        question: "प्रश्न 45. पानी में हवा का बुलबुला किस प्रकार के लेंस/दर्पण की तरह व्यवहार करता है?",
        answers: shuffle([
            { text: "उत्तल लेंस", correct: false },
            { text: "अवतल लेंस", correct: true },
            { text: "समतल दर्पण", correct: false },
            { text: "अवतल दर्पण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि इसका आकार उत्तल है, लेकिन क्योंकि यह विरल माध्यम (हवा) का है और सघन माध्यम (पानी) में है, यह प्रकाश को अपसरित करेगा, एक अवतल लेंस की तरह।"
    },
    {
        question: "प्रश्न 46. वह विज्ञान जो प्रकाश की प्रकृति और गुणों का अध्ययन करता है, क्या कहलाता है?",
        answers: shuffle([
            { text: "ध्वनिकी", correct: false },
            { text: "ऊष्मगतिकी", correct: false },
            { text: "प्रकाशिकी", correct: true },
            { text: "इलेक्ट्रॉनिक्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाशिकी (Optics) भौतिकी की वह शाखा है जिसमें प्रकाश के व्यवहार और गुणों का अध्ययन किया जाता है।"
    },
    {
        question: "प्रश्न 47. एक अपारदर्शी वस्तु का रंग हमें क्यों दिखाई देता है?",
        answers: shuffle([
            { text: "क्योंकि वह उस रंग को अवशोषित करती है।", correct: false },
            { text: "क्योंकि वह उस रंग को परावर्तित करती है।", correct: true },
            { text: "क्योंकि वह उस रंग का उत्सर्जन करती है।", correct: false },
            { text: "क्योंकि वह उस रंग का अपवर्तन करती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोई वस्तु हमें उस रंग की दिखाई देती है जिस रंग के प्रकाश को वह परावर्तित करती है; बाकी सभी रंगों को वह अवशोषित कर लेती है।"
    },
    {
        question: "प्रश्न 48. यदि एक वस्तु काली दिखाई देती है, तो इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "यह सभी रंगों को परावर्तित करती है।", correct: false },
            { text: "यह सभी रंगों को अवशोषित कर लेती है।", correct: true },
            { text: "यह केवल काले रंग को परावर्तित करती है।", correct: false },
            { text: "यह किसी भी रंग को परावर्तित नहीं करती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काली वस्तुएं उन पर पड़ने वाले प्रकाश के लगभग सभी रंगों को सोख लेती हैं और लगभग कुछ भी परावर्तित नहीं करतीं, इसलिए वे काली दिखाई देती हैं।"
    },
    {
        question: "प्रश्न 49. प्रकाश की गति किस माध्यम में अधिकतम होती है?",
        answers: shuffle([
            { text: "पानी", correct: false },
            { text: "कांच", correct: false },
            { text: "हीरा", correct: false },
            { text: "निर्वात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश की गति निर्वात (vacuum) में सबसे तेज होती है और किसी भी भौतिक माध्यम में प्रवेश करने पर धीमी हो जाती है।"
    },
    {
        question: "प्रश्न 50. एक आवर्धन जिसका मान -0.25 है, वह किस दर्पण से संभव है?",
        answers: shuffle([
            { text: "केवल अवतल दर्पण", correct: true },
            { text: "केवल उत्तल दर्पण", correct: false },
            { text: "समतल दर्पण", correct: false },
            { text: "अवतल और उत्तल दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> '-' चिह्न का अर्थ है वास्तविक और उल्टा।<br><br><i class='fa-solid fa-angles-right icon'></i> उत्तल और समतल दर्पण कभी भी वास्तविक प्रतिबिंब नहीं बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए यह केवल अवतल दर्पण से ही संभव है (जब वस्तु C से परे हो)।"
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