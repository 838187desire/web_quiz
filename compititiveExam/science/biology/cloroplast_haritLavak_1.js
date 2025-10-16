const questions = [
    {
        topHeading: "क्लोरोप्लास्ट (हरितलवक) पर आधारित 35 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. प्रकाशसंश्लेषण की क्रियात्मक इकाई क्या है?",
        answers: shuffle([
            { text: "स्ट्रोमा", correct: false },
            { text: "ग्रेनम", correct: false },
            { text: "क्वांटासोम", correct: true },
            { text: "थाइलाकोइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वांटासोम थाइलाकोइड की झिल्ली में पाए जाने वाले क्लोरोफिल अणुओं के समूह होते हैं, जो प्रकाश ऊर्जा को ग्रहण करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें प्रकाश संश्लेषण की क्रियात्मक इकाई माना जाता है।"
    },
    {
        question: "प्रश्न 2. हरितलवक (Chloroplast) में प्रकाश-निर्भर अभिक्रियाएं (Light-dependent reactions) कहाँ होती हैं?",
        answers: shuffle([
            { text: "बाहरी झिल्ली में", correct: false },
            { text: "भीतरी झिल्ली में", correct: false },
            { text: "स्ट्रोमा में", correct: false },
            { text: "थाइलाकोइड की झिल्ली में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश-निर्भर अभिक्रियाओं के लिए आवश्यक वर्णक (पिगमेंट) और एंजाइम थाइलाकोइड की झिल्ली पर स्थित होते हैं, जहाँ प्रकाश ऊर्जा को रासायनिक ऊर्जा (ATP और NADPH) में बदला जाता है।"
    },
    {
        question: "प्रश्न 3. हरितलवक का कौन सा भाग प्रकाश-स्वतंत्र अभिक्रियाओं (Light-independent reactions) या केल्विन चक्र का स्थल है?",
        answers: shuffle([
            { text: "ग्रेना", correct: false },
            { text: "स्ट्रोमा", correct: true },
            { text: "लैमेला", correct: false },
            { text: "बाहरी झिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रोमा हरितलवक का तरल मैट्रिक्स है जिसमें केल्विन चक्र के लिए आवश्यक सभी एंजाइम मौजूद होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यहीं पर CO2 का स्थिरीकरण करके शर्करा (ग्लूकोज) का निर्माण होता है।"
    },
    {
        question: "प्रश्न 4. थाइलाकोइड के सिक्कों जैसे ढेर को क्या कहा जाता है?",
        answers: shuffle([
            { text: "स्ट्रोमा", correct: false },
            { text: "क्रिस्टी", correct: false },
            { text: "ग्रेनम (Granum)", correct: true },
            { text: "लैमेला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरितलवक के अंदर, चपटी थैलीनुमा संरचनाएं जिन्हें थाइलाकोइड कहते हैं, एक के ऊपर एक सिक्कों के ढेर की तरह व्यवस्थित होती हैं, इस ढेर को ग्रेनम कहा जाता है।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से कौन सा वर्णक (pigment) सार्वभौमिक प्रकाश संश्लेषक वर्णक कहलाता है?",
        answers: shuffle([
            { text: "क्लोरोफिल b", correct: false },
            { text: "कैरोटीनॉयड", correct: false },
            { text: "क्लोरोफिल a", correct: true },
            { text: "जैन्थोफिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्लोरोफिल a सभी प्रकाश संश्लेषक जीवों (बैक्टीरिया को छोड़कर) में पाया जाने वाला प्राथमिक वर्णक है जो सीधे प्रकाश अभिक्रिया में भाग लेता है।"
    },
    {
        question: "प्रश्न 6. हरितलवक में अपना स्वयं का क्या होता है?",
        answers: shuffle([
            { text: "केवल DNA", correct: false },
            { text: "केवल राइबोसोम", correct: false },
            { text: "DNA, राइबोसोम और एंजाइम", correct: true },
            { text: "केवल एंजाइम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरितलवक एक अर्ध-स्वायत्त कोशिकांग है क्योंकि इसमें अपना वृत्ताकार DNA, 70S प्रकार के राइबोसोम और प्रोटीन संश्लेषण के लिए आवश्यक एंजाइम होते हैं।"
    },
    {
        question: "प्रश्न 7. जल का प्रकाशिक अपघटन (Photolysis of water) कहाँ होता है?",
        answers: shuffle([
            { text: "स्ट्रोमा में", correct: false },
            { text: "थाइलाकोइड के अवकाशिका (lumen) में", correct: true },
            { text: "हरितलवक की बाहरी झिल्ली पर", correct: false },
            { text: "गॉल्जीकाय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश अभिक्रिया के दौरान, जल के अणु थाइलाकोइड की झिल्ली के अंदर (अवकाशिका में) टूटते हैं, जिससे ऑक्सीजन, प्रोटॉन (H+) और इलेक्ट्रॉन निकलते हैं।"
    },
    {
        question: "प्रश्न 8. C4 पौधों में, केल्विन चक्र की अभिक्रियाएं किस प्रकार की कोशिकाओं में होती हैं?",
        answers: shuffle([
            { text: "मीजोफिल (Mesophyll) कोशिकाओं में", correct: false },
            { text: "बंडल शीथ (Bundle sheath) कोशिकाओं में", correct: true },
            { text: "जाइलम कोशिकाओं में", correct: false },
            { text: "फ्लोएम कोशिकाओं में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> C4 पौधों में CO2 का प्रारंभिक स्थिरीकरण मीजोफिल कोशिकाओं में होता है, लेकिन शर्करा निर्माण की मुख्य प्रक्रिया (केल्विन चक्र) बंडल शीथ कोशिकाओं के हरितलवक में संपन्न होती है।"
    },
    {
        question: "प्रश्न 9. हरितलवक की दोहरी झिल्ली संरचना किस सिद्धांत का प्रमाण देती है?",
        answers: shuffle([
            { text: "कोशिका सिद्धांत", correct: false },
            { text: "उत्परिवर्तन सिद्धांत", correct: false },
            { text: "अंतःसहजीविता सिद्धांत (Endosymbiotic theory)", correct: true },
            { text: "लैमार्कवाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सिद्धांत के अनुसार, हरितलवक की उत्पत्ति एक स्वतंत्र प्रकाश संश्लेषक जीवाणु के एक यूकैरियोटिक कोशिका में प्रवेश करने से हुई, जिससे दोहरी झिल्ली बनी।"
    },
    {
        question: "प्रश्न 10. प्रकाश श्वसन (Photorespiration) की प्रक्रिया में कौन सा एंजाइम ऑक्सीजन से बंधता है?",
        answers: shuffle([
            { text: "PEP कार्बोक्सिलेज", correct: false },
            { text: "RuBisCO", correct: true },
            { text: "हेक्सोकाइनेज", correct: false },
            { text: "एमाइलेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब CO2 की सांद्रता कम और O2 की सांद्रता अधिक होती है, तो RuBisCO एंजाइम CO2 के बजाय O2 से बंधकर प्रकाश श्वसन की हानिकारक प्रक्रिया शुरू कर देता है।"
    },
    {
        question: "प्रश्न 11. हरितलवक के राइबोसोम किस प्रकार के होते हैं?",
        answers: shuffle([
            { text: "80S", correct: false },
            { text: "70S", correct: true },
            { text: "60S", correct: false },
            { text: "50S", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरितलवक के राइबोसोम प्रोकैरियोटिक राइबोसोम के समान 70S प्रकार के होते हैं, जो अंतःसहजीविता सिद्धांत का एक और प्रमाण है।"
    },
    {
        question: "प्रश्न 12. दो ग्रेना को जोड़ने वाली नलिकाकार संरचना को क्या कहते हैं?",
        answers: shuffle([
            { text: "थाइलाकोइड", correct: false },
            { text: "स्ट्रोमा लैमेला (Stroma lamellae)", correct: true },
            { text: "सिस्टर्नी", correct: false },
            { text: "क्रिस्टी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्ट्रोमा लैमेला या इंटरग्रेनल थाइलाकोइड वे नलिकाएं हैं जो हरितलवक के स्ट्रोमा में विभिन्न ग्रेना को आपस में जोड़ती हैं।"
    },
    {
        question: "प्रश्न 13. प्रकाश संश्लेषण की दर किस प्रकाश में अधिकतम होती है?",
        answers: shuffle([
            { text: "हरे प्रकाश में", correct: false },
            { text: "नीले और लाल प्रकाश में", correct: true },
            { text: "पीले प्रकाश में", correct: false },
            { text: "बैंगनी प्रकाश में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्लोरोफिल वर्णक नीले-बैंगनी और लाल-नारंगी प्रकाश को सबसे अधिक अवशोषित करते हैं, इसलिए इन रंगों में प्रकाश संश्लेषण की दर सबसे अधिक होती है।"
    },
    {
        question: "प्रश्न 14. हरितलवक के अलावा, DNA और किस कोशिकांग में पाया जाता है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "गॉल्जीकाय", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: true },
            { text: "रिक्तिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया भी हरितलवक की तरह एक अर्ध-स्वायत्त कोशिकांग है जिसमें अपना वृत्ताकार DNA और 70S राइबोसोम होते हैं।"
    },
    {
        question: "प्रश्न 15. वर्णकीलवक (Chromoplast) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "भोजन का भंडारण", correct: false },
            { text: "प्रकाश संश्लेषण", correct: false },
            { text: "फूलों और फलों को रंग प्रदान करना", correct: true },
            { text: "प्रोटीन का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्णकीलवक में कैरोटीनॉयड जैसे वर्णक होते हैं जो फूलों और फलों को पीला, नारंगी या लाल रंग देते हैं, जिससे परागण और बीज प्रकीर्णन में मदद मिलती है।"
    },
    {
        question: "प्रश्न 16. केल्विन चक्र का प्रथम स्थायी उत्पाद क्या है?",
        answers: shuffle([
            { text: "राइबुलोज-1,5-बिस्फॉस्फेट (RuBP)", correct: false },
            { text: "3-फॉस्फोग्लिसरेट (3-PGA)", correct: true },
            { text: "ग्लूकोज", correct: false },
            { text: "ऑक्जेलोएसिटिक एसिड (OAA)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केल्विन चक्र (C3 चक्र) में, CO2 का ग्राही RuBP होता है और इस अभिक्रिया से बनने वाला पहला स्थायी उत्पाद 3-कार्बन वाला यौगिक 3-PGA है।"
    },
    {
        question: "प्रश्न 17. स्टार्च का भंडारण करने वाले लवक (Plastid) को क्या कहते हैं?",
        answers: shuffle([
            { text: "इलियोप्लास्ट (Elaioplast)", correct: false },
            { text: "प्रोटीनoplast", correct: false },
            { text: "एमाइलोप्लास्ट (Amyloplast)", correct: true },
            { text: "क्रोमोप्लास्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एमाइलोप्लास्ट अवर्णीलवक (Leucoplast) का एक प्रकार है जो पौधों के भंडारण अंगों जैसे जड़ों और बीजों में स्टार्च के रूप में भोजन का संचय करता है।"
    },
    {
        question: "प्रश्न 18. प्रकाश अभिक्रिया का अंतिम इलेक्ट्रॉन ग्राही कौन है?",
        answers: shuffle([
            { text: "NADP+", correct: true },
            { text: "ऑक्सीजन", correct: false },
            { text: "क्लोरोफिल", correct: false },
            { text: "जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश-निर्भर अभिक्रियाओं के दौरान इलेक्ट्रॉन परिवहन श्रृंखला से निकलने वाले इलेक्ट्रॉनों को अंत में NADP+ ग्रहण करता है और NADPH में अपचयित हो जाता है।"
    },
    {
        question: "प्रश्न 19. हरितलवक में ATP का संश्लेषण किस प्रक्रिया द्वारा होता है?",
        answers: shuffle([
            { text: "ऑक्सीडेटिव फॉस्फोरिलेशन", correct: false },
            { text: "फोटोफॉस्फोरिलेशन", correct: true },
            { text: "सबस्ट्रेट-लेवल फॉस्फोरिलेशन", correct: false },
            { text: "ग्लाइकोलाइसिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश की ऊर्जा का उपयोग करके ADP और अकार्बनिक फॉस्फेट से ATP बनाने की प्रक्रिया को फोटोफॉस्फोरिलेशन कहते हैं, जो थाइलाकोइड झिल्ली पर होती है।"
    },
    {
        question: "प्रश्न 20. यदि किसी पौधे की पत्तियों को आयोडीन विलयन में रखा जाए तो वे नीली-काली हो जाती हैं। यह किसकी उपस्थिति दर्शाता है?",
        answers: shuffle([
            { text: "प्रोटीन", correct: false },
            { text: "वसा", correct: false },
            { text: "स्टार्च", correct: true },
            { text: "क्लोरोफिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयोडीन विलयन स्टार्च के साथ क्रिया करके नीला-काला रंग देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पत्तियों में प्रकाश संश्लेषण द्वारा बना स्टार्च इस परीक्षण की पुष्टि करता है।"
    },
    {
        question: "प्रश्न 21. कौन सा तत्व क्लोरोफिल अणु की संरचना के केंद्र में स्थित होता है?",
        answers: shuffle([
            { text: "आयरन (Fe)", correct: false },
            { text: "मैग्नीशियम (Mg)", correct: true },
            { text: "मैंगनीज (Mn)", correct: false },
            { text: "जिंक (Zn)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्लोरोफिल की पोरफाइरिन रिंग संरचना के केंद्र में मैग्नीशियम का एक परमाणु होता है, जो इसकी प्रकाश-अवशोषण क्षमता के लिए महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 22. C3 और C4 पौधों में मुख्य अंतर किस एंजाइम की उपस्थिति का है?",
        answers: shuffle([
            { text: "RuBisCO", correct: false },
            { text: "PEP कार्बोक्सिलेज", correct: true },
            { text: "एमाइलेज", correct: false },
            { text: "लाइपेज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> C4 पौधों की मीजोफिल कोशिकाओं में PEP कार्बोक्सिलेज एंजाइम पाया जाता है जो CO2 के लिए उच्च बंधुता रखता है और प्रकाश श्वसन को रोकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह C3 पौधों में नहीं होता।"
    },
    {
        question: "प्रश्न 23. हरितलवक की खोज का श्रेय किसे दिया जाता है?",
        answers: shuffle([
            { text: "रॉबर्ट हुक", correct: false },
            { text: "एंटोनी वॉन ल्यूवेनहॉक", correct: false },
            { text: "ह्यूगो वॉन मोहल", correct: true },
            { text: "रॉबर्ट ब्राउन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि कई वैज्ञानिकों ने योगदान दिया, लेकिन जर्मन वनस्पतिशास्त्री ह्यूगो वॉन मोहल ने 1837 में हरितलवक का विस्तृत विवरण और कार्यप्रणाली पर महत्वपूर्ण शोध किया।"
    },
    {
        question: "प्रश्न 24. प्रकाश संश्लेषण की प्रक्रिया में ऑक्सीजन कहाँ से उत्पन्न होती है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड से", correct: false },
            { text: "जल से", correct: true },
            { text: "ग्लूकोज से", correct: false },
            { text: "क्लोरोफिल से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश अभिक्रिया के दौरान जल के प्रकाशिक अपघटन से ऑक्सीजन एक उप-उत्पाद के रूप में निकलती है।"
    },
    {
        question: "प्रश्न 25. अवर्णीलवक (Leucoplasts) मुख्य रूप से कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "पौधे के हरे भागों में", correct: false },
            { text: "पौधे के गैर-प्रकाश संश्लेषक भागों में", correct: true },
            { text: "केवल फूलों में", correct: false },
            { text: "केवल फलों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवर्णीलवक रंगहीन होते हैं और मुख्य रूप से जड़ों, भूमिगत तनों और बीजों जैसे भंडारण अंगों में पाए जाते हैं जहाँ वे भोजन संचय का कार्य करते हैं।"
    },
    {
        question: "प्रश्न 26. किस प्रक्रिया द्वारा ATP और NADPH का उपयोग करके शर्करा का संश्लेषण होता है?",
        answers: shuffle([
            { text: "ग्लाइकोलाइसिस", correct: false },
            { text: "क्रेब्स चक्र", correct: false },
            { text: "केल्विन चक्र", correct: true },
            { text: "इलेक्ट्रॉन परिवहन श्रृंखला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केल्विन चक्र (प्रकाश-स्वतंत्र अभिक्रिया) में प्रकाश अभिक्रिया में बने ATP और NADPH की ऊर्जा का उपयोग करके CO2 को शर्करा में परिवर्तित किया जाता है।"
    },
    {
        question: "प्रश्न 27. यदि एक हरितलवक को हाइपोटोनिक (अल्पपरासरी) विलयन में रख दिया जाए, तो क्या होगा?",
        answers: shuffle([
            { text: "वह सिकुड़ जाएगा", correct: false },
            { text: "वह फट जाएगा", correct: true },
            { text: "कोई परिवर्तन नहीं होगा", correct: false },
            { text: "वह रंगहीन हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइपोटोनिक विलयन में जल परासरण द्वारा हरितलवक के अंदर प्रवेश करेगा, जिससे वह फूलकर अंततः फट जाएगा।"
    },
    {
        question: "प्रश्न 28. \"लॉ ऑफ लिमिटिंग फैक्टर्स\" (सीमाकारी कारकों का नियम) प्रकाश संश्लेषण के संबंध में किसने दिया था?",
        answers: shuffle([
            { text: "केल्विन", correct: false },
            { text: "ब्लैकमान", correct: true },
            { text: "प्रीस्टले", correct: false },
            { text: "हिल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1905 में एफ.एफ. ब्लैकमान ने यह नियम दिया जिसके अनुसार किसी प्रक्रिया की दर उसके सबसे धीमे कारक (सीमाकारी कारक) द्वारा निर्धारित होती है।"
    },
    {
        question: "प्रश्न 29. CAM (क्रेसुलेशियन एसिड मेटाबॉलिज्म) पौधे रात में रंध्र (stomata) क्यों खोलते हैं?",
        answers: shuffle([
            { text: "अधिक प्रकाश ग्रहण करने के लिए", correct: false },
            { text: "जल की हानि को कम करने के लिए", correct: true },
            { text: "अधिक ऑक्सीजन लेने के लिए", correct: false },
            { text: "तापमान को नियंत्रित करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CAM पौधे शुष्क वातावरण में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे दिन में वाष्पोत्सर्जन द्वारा जल की हानि को रोकने के लिए रंध्र बंद रखते हैं और रात में CO2 ग्रहण करते हैं।"
    },
    {
        question: "प्रश्न 30. हरितलवक का कौन सा भाग प्रोटॉन प्रवणता (proton gradient) के निर्माण में सहायक है?",
        answers: shuffle([
            { text: "बाहरी झिल्ली", correct: false },
            { text: "स्ट्रोमा", correct: false },
            { text: "थाइलाकोइड झिल्ली", correct: true },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश अभिक्रिया के दौरान इलेक्ट्रॉन परिवहन श्रृंखला थाइलाकोइड झिल्ली के आर-पार प्रोटॉन (H+) को पंप करती है, जिससे एक प्रोटॉन प्रवणता उत्पन्न होती है जो ATP संश्लेषण के लिए आवश्यक है।"
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