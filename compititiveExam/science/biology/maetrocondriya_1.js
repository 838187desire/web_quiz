const questions = [
    {
        topHeading: "माइटोकॉन्ड्रिया पर आधारित 35 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. माइटोकॉन्ड्रिया को कोशिका का 'ऊर्जा गृह' (Powerhouse of the Cell) क्यों कहा जाता है?",
        answers: shuffle([
            { text: "यह प्रोटीन का संश्लेषण करता है।", correct: false },
            { text: "यह कोशिकीय श्वसन द्वारा ATP उत्पन्न करता है।", correct: true },
            { text: "यह कोशिका विभाजन में मदद करता है।", correct: false },
            { text: "यह अपशिष्ट पदार्थों का पाचन करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया में कोशिकीय श्वसन की प्रक्रिया होती है, जिससे ग्लूकोज और ऑक्सीजन का उपयोग करके एडेनोसिन ट्राइफॉस्फेट (ATP) के रूप में ऊर्जा का उत्पादन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका उपयोग कोशिका अपनी विभिन्न गतिविधियों के लिए करती है।"
    },
    {
        question: "प्रश्न 2. माइटोकॉन्ड्रिया की आंतरिक झिल्ली (Inner Membrane) अंदर की ओर मुड़कर जो उंगली जैसी संरचनाएं बनाती है, उन्हें क्या कहते हैं?",
        answers: shuffle([
            { text: "मैट्रिक्स", correct: false },
            { text: "क्रिस्टी (Cristae)", correct: true },
            { text: "ल्यूमेन", correct: false },
            { text: "ग्रेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिस्टी माइटोकॉन्ड्रिया की आंतरिक झिल्ली के वलन होते हैं, जो सतह क्षेत्र को बढ़ाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी सतह पर इलेक्ट्रॉन परिवहन श्रृंखला (ETC) होती है, जहाँ ATP का सर्वाधिक उत्पादन होता है।"
    },
    {
        question: "प्रश्न 3. कोशिकीय श्वसन की क्रेब्स चक्र (Krebs Cycle) की अभिक्रियाएं माइटोकॉन्ड्रिया के किस भाग में होती हैं?",
        answers: shuffle([
            { text: "बाहरी झिल्ली में", correct: false },
            { text: "आंतरिक झिल्ली में", correct: false },
            { text: "मैट्रिक्स में", correct: true },
            { text: "क्रिस्टी पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रेब्स चक्र, जिसे सिट्रिक एसिड चक्र भी कहते हैं, माइटोकॉन्ड्रिया के आंतरिक तरल पदार्थ, यानी मैट्रिक्स में संपन्न होता है।"
    },
    {
        question: "प्रश्न 4. निम्नलिखित में से किस कोशिका में माइटोकॉन्ड्रिया अनुपस्थित होता है?",
        answers: shuffle([
            { text: "यकृत कोशिका", correct: false },
            { text: "तंत्रिका कोशिका", correct: false },
            { text: "परिपक्व लाल रक्त कोशिका (RBC)", correct: true },
            { text: "पेशी कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्तनधारियों की परिपक्व लाल रक्त कोशिकाओं में केंद्रक और माइटोकॉन्ड्रिया सहित अधिकांश कोशिकांग नहीं होते हैं, ताकि वे हीमोग्लोबिन के लिए अधिकतम स्थान प्रदान कर सकें।"
    },
    {
        question: "प्रश्न 5. माइटोकॉन्ड्रिया में अपना स्वयं का क्या होता है?",
        answers: shuffle([
            { text: "केवल राइबोसोम", correct: false },
            { text: "केवल DNA", correct: false },
            { text: "DNA, RNA और राइबोसोम", correct: true },
            { text: "केवल RNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया एक अर्ध-स्वायत्त (semi-autonomous) कोशिकांग है क्योंकि इसमें अपना वृत्ताकार DNA, RNA और 70S प्रकार के राइबोसोम होते हैं, जिससे यह अपने कुछ प्रोटीन स्वयं बना सकता है।"
    },
    {
        question: "प्रश्न 6. माइटोकॉन्ड्रियल DNA (mtDNA) की क्या विशेषता है?",
        answers: shuffle([
            { text: "यह रैखिक होता है।", correct: false },
            { text: "यह माता-पिता दोनों से विरासत में मिलता है।", correct: false },
            { text: "यह केवल माता से विरासत में मिलता है।", correct: true },
            { text: "इसमें हिस्टोन प्रोटीन होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निषेचन के दौरान, शुक्राणु का माइटोकॉन्ड्रिया आमतौर पर अंडे में प्रवेश नहीं कर पाता या नष्ट हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, संतान को माइटोकॉन्ड्रियल डीएनए केवल माँ के अंडे से ही प्राप्त होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे मातृ वंशागति (Maternal Inheritance) कहते हैं।"
    },
    {
        question: "प्रश्न 7. इलेक्ट्रॉन परिवहन श्रृंखला (Electron Transport Chain - ETC) की प्रक्रिया माइटोकॉन्ड्रिया में कहाँ होती है?",
        answers: shuffle([
            { text: "बाहरी झिल्ली पर", correct: false },
            { text: "मैट्रिक्स में", correct: false },
            { text: "आंतरिक झिल्ली (क्रिस्टी) पर", correct: true },
            { text: "अंतर-झिल्ली अवकाश में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉन परिवहन श्रृंखला के सभी प्रोटीन कॉम्प्लेक्स और एंजाइम माइटोकॉन्ड्रिया की आंतरिक झिल्ली पर स्थित होते हैं, जहाँ ATP संश्लेषण की ऑक्सीडेटिव फॉस्फोरिलेशन प्रक्रिया होती है।"
    },
    {
        question: "प्रश्न 8. एंडोसिम्बायोटिक सिद्धांत (Endosymbiotic Theory) के अनुसार माइटोकॉन्ड्रिया की उत्पत्ति किससे हुई है?",
        answers: shuffle([
            { text: "एक प्राचीन यूकैरियोटिक कोशिका से", correct: false },
            { text: "एक प्राचीन वायवीय (aerobic) प्रोकैरियोटिक जीव से", correct: true },
            { text: "एक प्राचीन कवक से", correct: false },
            { text: "कोशिका झिल्ली के अंतर्वलन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस सिद्धांत के अनुसार, माइटोकॉन्ड्रिया की उत्पत्ति एक स्वतंत्र वायवीय जीवाणु से हुई है जिसे एक बड़ी परपोषी कोशिका ने निगल लिया और यह एक सहजीवी संबंध में विकसित हो गया।"
    },
    {
        question: "प्रश्न 9. माइटोकॉन्ड्रिया में पाए जाने वाले राइबोसोम किस प्रकार के होते हैं?",
        answers: shuffle([
            { text: "80S", correct: false },
            { text: "70S", correct: true },
            { text: "60S", correct: false },
            { text: "50S", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया के राइबोसोम 70S प्रकार के होते हैं, जो प्रोकैरियोटिक (जीवाणु) राइबोसोम के समान हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एंडोसिम्बायोटिक सिद्धांत का एक प्रमुख प्रमाण है।"
    },
    {
        question: "प्रश्न 10. 'बायोप्लास्ट' (Bioplasts) शब्द का प्रयोग माइटोकॉन्ड्रिया के लिए सबसे पहले किसने किया था?",
        answers: shuffle([
            { text: "कार्ल बेंडा", correct: false },
            { text: "रॉबर्ट हुक", correct: false },
            { text: "रिचर्ड ऑल्टमैन", correct: true },
            { text: "अल्बर्ट वॉन कोलिकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1890 में रिचर्ड ऑल्टमैन ने इन संरचनाओं को 'बायोप्लास्ट' नाम दिया और उन्हें कोशिका की मौलिक जीवित इकाइयाँ माना।"
    },
    {
        question: "प्रश्न 11. ATP सिंथेज़ (जिसे F1-F0 पार्टिकल भी कहते हैं) माइटोकॉन्ड्रिया के किस भाग में पाया जाता है?",
        answers: shuffle([
            { text: "बाहरी झिल्ली", correct: false },
            { text: "मैट्रिक्स", correct: false },
            { text: "आंतरिक झिल्ली", correct: true },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ATP सिंथेज़ एंजाइम कॉम्प्लेक्स माइटोकॉन्ड्रिया की आंतरिक झिल्ली में धंसा होता है और प्रोटॉन प्रवणता का उपयोग करके ADP और अकार्बनिक फॉस्फेट से ATP का निर्माण करता है।"
    },
    {
        question: "प्रश्न 12. माइटोकॉन्ड्रिया किस महत्वपूर्ण कोशिकीय प्रक्रिया को नियंत्रित करने में भूमिका निभाता है?",
        answers: shuffle([
            { text: "प्रोटीन का पाचन", correct: false },
            { text: "एपोप्टोसिस (क्रमादेशित कोशिका मृत्यु)", correct: true },
            { text: "प्रकाश संश्लेषण", correct: false },
            { text: "लिपिड का भंडारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया साइटोक्रोम-सी जैसे कुछ प्रोटीनों को मैट्रिक्स से बाहर निकालकर एपोप्टोसिस या क्रमादेशित कोशिका मृत्यु की प्रक्रिया को शुरू करने में एक केंद्रीय भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 13. माइटोकॉन्ड्रिया की बाहरी झिल्ली की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "अपारगम्य (Impermeable)", correct: false },
            { text: "चयनात्मक पारगम्य (Selectively permeable)", correct: false },
            { text: "अत्यधिक पारगम्य (Highly permeable)", correct: true },
            { text: "कठोर और मोटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया की बाहरी झिल्ली में पोरिन (Porins) नामक प्रोटीन चैनल होते हैं, जो इसे छोटे अणुओं और आयनों के लिए स्वतंत्र रूप से पारगम्य बनाते हैं।"
    },
    {
        question: "प्रश्न 14. माइटोकॉन्ड्रिया के मैट्रिक्स में क्या-क्या पाया जाता है?",
        answers: shuffle([
            { text: "केवल क्रेब्स चक्र के एंजाइम", correct: false },
            { text: "वृत्ताकार DNA और 80S राइबोसोम", correct: false },
            { text: "क्रेब्स चक्र के एंजाइम, वृत्ताकार DNA, और 70S राइबोसोम", correct: true },
            { text: "केवल साइटोक्रोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया का मैट्रिक्स एक सघन तरल पदार्थ है जिसमें क्रेब्स चक्र के लिए आवश्यक एंजाइम, माइटोकॉन्ड्रियल डीएनए (mtDNA), 70S राइबोसोम और कई अन्य मेटाबोलाइट्स होते हैं।"
    },
    {
        question: "प्रश्न 15. ऊर्जा उत्पादन के अलावा, माइटोकॉन्ड्रिया का एक अन्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रोटीन संश्लेषण का मुख्य स्थल होना", correct: false },
            { text: "कैल्शियम आयनों का भंडारण और नियमन", correct: true },
            { text: "कोशिका को आकार देना", correct: false },
            { text: "वसा का पाचन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया कोशिका के भीतर कैल्शियम आयन (Ca2+) की सांद्रता को नियंत्रित करने में महत्वपूर्ण भूमिका निभाता है, जो कई कोशिकीय संकेतों और प्रक्रियाओं के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 16. भूरे वसा ऊतक (Brown Adipose Tissue) में माइटोकॉन्ड्रिया की क्या विशेष भूमिका होती है?",
        answers: shuffle([
            { text: "अधिक ATP का उत्पादन करना", correct: false },
            { text: "बिना ATP उत्पादन के सीधे ऊष्मा उत्पन्न करना", correct: true },
            { text: "वसा का भंडारण करना", correct: false },
            { text: "हार्मोन का स्राव करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूरे वसा ऊतक के माइटोकॉन्ड्रिया में थर्मोजेनिन (UCP1) नामक एक विशेष प्रोटीन होता है, जो प्रोटॉन प्रवणता को सीधे ऊष्मा में परिवर्तित कर देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया नॉन-शिवरिंग थर्मोजेनेसिस कहलाती है।"
    },
    {
        question: "प्रश्न 17. 'माइटोकॉन्ड्रिया' शब्द किसने गढ़ा था?",
        answers: shuffle([
            { text: "रिचर्ड ऑल्टमैन", correct: false },
            { text: "कार्ल बेंडा", correct: true },
            { text: "अल्बर्ट वॉन कोलिकर", correct: false },
            { text: "रॉबर्ट ब्राउन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1898 में, जर्मन माइक्रोबायोलॉजिस्ट कार्ल बेंडा ने इन संरचनाओं के लिए पहली बार 'माइटोकॉन्ड्रिया' (ग्रीक में मिटोस = धागा, कॉन्ड्रियन = कणिका) शब्द का प्रयोग किया।"
    },
    {
        question: "प्रश्न 18. ग्लाइकोलाइसिस की प्रक्रिया कहाँ होती है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया के मैट्रिक्स में", correct: false },
            { text: "माइटोकॉन्ड्रिया की आंतरिक झिल्ली में", correct: false },
            { text: "कोशिका द्रव्य (Cytosol) में", correct: true },
            { text: "केंद्रक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लाइकोलाइसिस कोशिकीय श्वसन का पहला चरण है, जिसमें ग्लूकोज पाइरूवेट में टूटता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रक्रिया कोशिका द्रव्य में होती है, न कि माइटोकॉन्ड्रिया में।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद पाइरूवेट माइटोकॉन्ड्रिया में प्रवेश करता है।"
    },
    {
        question: "प्रश्न 19. माइटोकॉन्ड्रिया की संख्या किस प्रकार की कोशिकाओं में सर्वाधिक होती है?",
        answers: shuffle([
            { text: "त्वचा की कोशिकाओं में", correct: false },
            { text: "वसा कोशिकाओं में", correct: false },
            { text: "अत्यधिक सक्रिय कोशिकाओं जैसे पेशी और यकृत कोशिकाओं में", correct: true },
            { text: "अस्थि कोशिकाओं में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिन कोशिकाओं को अपनी गतिविधियों के लिए अधिक ऊर्जा की आवश्यकता होती है, जैसे हृदय की पेशी कोशिकाएं, तंत्रिका कोशिकाएं और यकृत कोशिकाएं, उनमें माइटोकॉन्ड्रिया की संख्या बहुत अधिक होती है।"
    },
    {
        question: "प्रश्न 20. माइटोकॉन्ड्रियल रोगों का कारण क्या होता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रियल डीएनए (mtDNA) में उत्परिवर्तन", correct: true },
            { text: "कोशिका द्रव्य में समस्या", correct: false },
            { text: "केंद्रक का ठीक से काम न करना", correct: false },
            { text: "राइबोसोम की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रियल रोग आनुवंशिक स्थितियां हैं जो माइटोकॉन्ड्रिया के डीएनए में उत्परिवर्तन के कारण होती हैं, जिससे ऊर्जा उत्पादन प्रभावित होता है और शरीर के कई अंग प्रभावित हो सकते हैं।"
    },
    {
        question: "प्रश्न 21. माइटोकॉन्ड्रिया की दोनों झिल्लियों के बीच के स्थान को क्या कहते हैं?",
        answers: shuffle([
            { text: "मैट्रिक्स", correct: false },
            { text: "साइटोसोल", correct: false },
            { text: "अंतर-झिल्ली अवकाश (Intermembrane space)", correct: true },
            { text: "ल्यूमेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाहरी और आंतरिक झिल्ली के बीच के स्थान को अंतर-झिल्ली अवकाश कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉन परिवहन के दौरान प्रोटॉन इसी स्थान में पंप किए जाते हैं, जिससे प्रोटॉन प्रवणता बनती है।"
    },
    {
        question: "प्रश्न 22. माइटोकॉन्ड्रिया किस प्रक्रिया द्वारा अपनी संख्या में वृद्धि करते हैं?",
        answers: shuffle([
            { text: "समसूत्री विभाजन", correct: false },
            { text: "द्विखंडन (Binary Fission)", correct: true },
            { text: "अर्धसूत्री विभाजन", correct: false },
            { text: "मुकुलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया जीवाणुओं की तरह ही सरल द्विखंडन प्रक्रिया द्वारा विभाजित होकर अपनी संख्या बढ़ाते हैं, जो उनके प्रोकैरियोटिक मूल का एक और प्रमाण है।"
    },
    {
        question: "प्रश्न 23. ऑक्सीडेटिव फॉस्फोरिलेशन (Oxidative Phosphorylation) का अंतिम उत्पाद क्या है?",
        answers: shuffle([
            { text: "पाइरूवेट और NADH", correct: false },
            { text: "कार्बन डाइऑक्साइड और जल", correct: false },
            { text: "ATP और जल", correct: true },
            { text: "ग्लूकोज और ऑक्सीजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सीडेटिव फॉस्फोरिलेशन वह प्रक्रिया है जिसमें इलेक्ट्रॉन परिवहन श्रृंखला से प्राप्त ऊर्जा का उपयोग करके ADP से ATP बनाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया में ऑक्सीजन अंतिम इलेक्ट्रॉन ग्राही के रूप में कार्य करता है और जल का निर्माण होता है।"
    },
    {
        question: "प्रश्न 24. कौन सा कथन माइटोकॉन्ड्रिया के लिए असत्य है?",
        answers: shuffle([
            { text: "यह दोहरी झिल्ली वाला कोशिकांग है।", correct: false },
            { text: "यह प्रकाश संश्लेषण में भाग लेता है।", correct: true },
            { text: "इसमें अपना वृत्ताकार डीएनए होता है।", correct: false },
            { text: "यह ATP का उत्पादन करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश संश्लेषण की प्रक्रिया क्लोरोप्लास्ट (हरितलवक) में होती है, न कि माइटोकॉन्ड्रिया में।<br><br><i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया कोशिकीय श्वसन के लिए उत्तरदायी है।"
    },
    {
        question: "प्रश्न 25. कीटों की उड़ान पेशियों में माइटोकॉन्ड्रिया का वर्णन करने वाले पहले वैज्ञानिक कौन थे?",
        answers: shuffle([
            { text: "रॉबर्ट हुक", correct: false },
            { text: "कार्ल बेंडा", correct: false },
            { text: "अल्बर्ट वॉन कोलिकर", correct: true },
            { text: "रिचर्ड ऑल्टमैन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1857 में, स्विस शरीर रचनाविज्ञानी अल्बर्ट वॉन कोलिकर ने कीटों की पेशी कोशिकाओं में दानेदार संरचनाओं का अवलोकन किया, जिन्हें बाद में माइटोकॉन्ड्रिया के रूप में पहचाना गया।"
    },
    {
        question: "प्रश्न 26. इलेक्ट्रॉन परिवहन श्रृंखला में अंतिम इलेक्ट्रॉन ग्राही (final electron acceptor) कौन है?",
        answers: shuffle([
            { text: "जल (H2O)", correct: false },
            { text: "NADH", correct: false },
            { text: "ऑक्सीजन (O2)", correct: true },
            { text: "साइटोक्रोम-सी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायवीय श्वसन में, इलेक्ट्रॉन परिवहन श्रृंखला के अंत में इलेक्ट्रॉन ऑक्सीजन द्वारा ग्रहण किए जाते हैं, जो प्रोटॉन के साथ मिलकर जल का अणु बनाता है।"
    },
    {
        question: "प्रश्न 27. माइटोकॉन्ड्रिया का व्यास आमतौर पर कितना होता है?",
        answers: shuffle([
            { text: "10-20 माइक्रोमीटर", correct: false },
            { text: "0.5-1.0 माइक्रोमीटर", correct: true },
            { text: "50-100 माइक्रोमीटर", correct: false },
            { text: "0.1 माइक्रोमीटर से कम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया छोटे कोशिकांग होते हैं जिनका व्यास आमतौर पर 0.5 से 1.0 माइक्रोमीटर की सीमा में होता है।"
    },
    {
        question: "प्रश्न 28. यदि कोशिका में ऑक्सीजन की कमी हो जाए तो माइटोकॉन्ड्रिया में कौन सी प्रक्रिया तुरंत रुक जाएगी?",
        answers: shuffle([
            { text: "ग्लाइकोलाइसिस", correct: false },
            { text: "क्रेब्स चक्र", correct: false },
            { text: "इलेक्ट्रॉन परिवहन श्रृंखला (ETC)", correct: true },
            { text: "फैटी एसिड ऑक्सीकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इलेक्ट्रॉन परिवहन श्रृंखला को कार्य करने के लिए ऑक्सीजन की आवश्यकता होती है जो अंतिम इलेक्ट्रॉन स्वीकर्ता के रूप में कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऑक्सीजन की अनुपस्थिति में, यह श्रृंखला रुक जाती है और ATP का उत्पादन बंद हो जाता है।"
    },
    {
        question: "प्रश्न 29. माइटोकॉन्ड्रिया की आंतरिक झिल्ली बाहरी झिल्ली की तुलना में कम पारगम्य क्यों होती है?",
        answers: shuffle([
            { text: "पोरिन प्रोटीन की अनुपस्थिति के कारण", correct: false },
            { text: "अधिक कोलेस्ट्रॉल की उपस्थिति के कारण", correct: false },
            { text: "कार्डियोलिपिन की उच्च सांद्रता और विशिष्ट ट्रांसपोर्टरों की उपस्थिति के कारण", correct: true },
            { text: "यह अधिक मोटी होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आंतरिक झिल्ली में पोरिन नहीं होते और इसमें कार्डियोलिपिन नामक एक विशेष फॉस्फोलिपिड होता है जो इसे आयनों के लिए अपारगम्य बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पदार्थों का परिवहन केवल विशिष्ट ट्रांसपोर्टर प्रोटीन के माध्यम से होता है, जिससे इसका चयनात्मक नियंत्रण बना रहता है।"
    },
    {
        question: "प्रश्न 30. कोशिका के 'थर्मल पावर प्लांट' के रूप में किसे जाना जाता है, खासकर भूरे वसा ऊतकों में?",
        answers: shuffle([
            { text: "केंद्रक", correct: false },
            { text: "लाइसोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: true },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूरे वसा ऊतकों में माइटोकॉन्ड्रिया ऊर्जा को ATP के बजाय सीधे ऊष्मा में परिवर्तित कर सकते हैं, जिससे शरीर का तापमान नियंत्रित रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस कारण उन्हें कभी-कभी थर्मल पावर प्लांट भी कहा जाता है।"
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