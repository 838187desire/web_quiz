const questions = [
    {
        topHeading: "एंडोप्लाज्मिक रेटिकुलम पर आधारित 29 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. एंडोप्लाज्मिक रेटिकुलम (ER) कोशिका के किस भाग में स्थित होता है?",
        answers: shuffle([
            { text: "केवल केंद्रक के अंदर", correct: false },
            { text: "कोशिका भित्ति और कोशिका झिल्ली के बीच", correct: false },
            { text: "कोशिका द्रव्य में", correct: true },
            { text: "केवल माइटोकॉन्ड्रिया में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोप्लाज्मिक रेटिकुलम झिल्लियों का एक विशाल नेटवर्क है जो यूकैरियोटिक कोशिका के कोशिका द्रव्य (साइटोप्लाज्म) में फैला रहता है।"
    },
    {
        question: "प्रश्न 2. खुरदरी एंडोप्लाज्मिक रेटिकुलम (Rough ER) की सतह पर क्या उपस्थित होता है, जो उसे खुरदरा बनाता है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "राइबोसोम", correct: true },
            { text: "गॉल्जी उपकरण", correct: false },
            { text: "वसा की बूंदें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुरदरी ER की सतह पर राइबोसोम के कण चिपके होते हैं, जो इसे एक दानेदार या खुरदरी बनावट देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इन्हीं राइबोसोम पर प्रोटीन का संश्लेषण होता है।"
    },
    {
        question: "प्रश्न 3. चिकनी एंडोप्लाज्मिक रेटिकुलम (Smooth ER) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रोटीन संश्लेषण", correct: false },
            { text: "ऊर्जा उत्पादन", correct: false },
            { text: "लिपिड (वसा) और स्टेरॉयड का संश्लेषण", correct: true },
            { text: "आनुवंशिक पदार्थों का भंडारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिकनी ER लिपिड, फॉस्फोलिपिड और स्टेरॉयड हार्मोन के संश्लेषण के लिए प्रमुख स्थल है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसकी सतह पर राइबोसोम नहीं होते हैं।"
    },
    {
        question: "प्रश्न 4. निम्नलिखित में से कौन ER के 'ल्यूमेन' और 'साइटोसोल' को अलग करता है?",
        answers: shuffle([
            { text: "केंद्रक झिल्ली", correct: false },
            { text: "कोशिका झिल्ली", correct: false },
            { text: "ER की झिल्ली", correct: true },
            { text: "टोनोप्लास्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ER की झिल्ली एक भौतिक अवरोध के रूप में कार्य करती है जो ER के आंतरिक भाग (ल्यूमेन) को कोशिका के बाकी कोशिका द्रव्य (साइटोसोल) से अलग करती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे दोनों में अलग-अलग रासायनिक वातावरण बना रहता है।"
    },
    {
        question: "प्रश्न 5. निम्नलिखित में से किस कोशिका में खुरदरी एंडोप्लाज्मिक रेटिकुलम (RER) की मात्रा अधिक होगी?",
        answers: shuffle([
            { text: "वसा कोशिका", correct: false },
            { text: "पेशी कोशिका", correct: false },
            { text: "प्रोटीन स्रावित करने वाली कोशिका (जैसे अग्न्याशय की कोशिका)", correct: true },
            { text: "लाल रक्त कोशिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जो कोशिकाएं बड़ी मात्रा में प्रोटीन (जैसे एंजाइम या हार्मोन) का निर्माण और स्राव करती हैं, उनमें RER बहुत अधिक विकसित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि प्रोटीन संश्लेषण RER पर ही होता है।"
    },
    {
        question: "प्रश्न 6. यकृत (Liver) की कोशिकाओं में दवाओं और विषैले पदार्थों के विषहरण (Detoxification) का कार्य कौन करता है?",
        answers: shuffle([
            { text: "खुरदरी ER (RER)", correct: false },
            { text: "चिकनी ER (SER)", correct: true },
            { text: "लाइसोसोम", correct: false },
            { text: "केंद्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यकृत की कोशिकाओं में मौजूद चिकनी ER में ऐसे एंजाइम होते हैं जो दवाओं, ड्रग्स और अन्य विषैले पदार्थों को हानिरहित बनाकर शरीर से बाहर निकालने में मदद करते हैं।"
    },
    {
        question: "प्रश्न 7. एंडोप्लाज्मिक रेटिकुलम की खोज का श्रेय किस वैज्ञानिक को दिया जाता है?",
        answers: shuffle([
            { text: "कैमिलो गॉल्जी", correct: false },
            { text: "जॉर्ज पलाडे", correct: false },
            { text: "कीथ पोर्टर", correct: true },
            { text: "रॉबर्ट हुक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कीथ पोर्टर ने 1945 में इलेक्ट्रॉन माइक्रोस्कोप का उपयोग करके कोशिका के अंदर इस झिल्लीदार नेटवर्क की खोज की।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इसे एंडोप्लाज्मिक रेटिकुलम नाम दिया।"
    },
    {
        question: "प्रश्न 8. सार्कोप्लाज्मिक रेटिकुलम (Sarcoplasmic Reticulum) किस प्रकार की कोशिकाओं में पाया जाने वाला एक विशेष प्रकार का ER है?",
        answers: shuffle([
            { text: "तंत्रिका कोशिकाओं में", correct: false },
            { text: "पेशी कोशिकाओं (Muscle cells) में", correct: true },
            { text: "यकृत कोशिकाओं में", correct: false },
            { text: "अग्न्याशय की कोशिकाओं में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सार्कोप्लाज्मिक रेटिकुलम पेशी कोशिकाओं में पाया जाने वाला एक विशेष प्रकार का चिकना ER है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो कैल्शियम आयनों (Ca2+) का भंडारण और विमोचन करता है, जो पेशी संकुचन के लिए आवश्यक है।"
    },
    {
        question: "प्रश्न 9. झिल्ली जीजनन (Membrane Biogenesis) की प्रक्रिया में कौन सा कोशिकांग शामिल होता है?",
        answers: shuffle([
            { text: "केवल राइबोसोम", correct: false },
            { text: "एंडोप्लाज्मिक रेटिकुलम और गॉल्जी उपकरण", correct: true },
            { text: "केवल लाइसोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ER द्वारा बनाए गए प्रोटीन और लिपिड कोशिका झिल्ली के निर्माण में मदद करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस प्रक्रिया को झिल्ली जीजनन कहा जाता है, जिसमें गॉल्जी उपकरण भी सहायता करता है।"
    },
    {
        question: "प्रश्न 10. एंडोप्लाज्मिक रेटिकुलम की संरचनात्मक इकाइयों में चपटी, थैली जैसी संरचनाओं को क्या कहा जाता है?",
        answers: shuffle([
            { text: "क्रिस्टी (Cristae)", correct: false },
            { text: "सिस्टर्नी (Cisternae)", correct: true },
            { text: "रिक्तिका (Vacuoles)", correct: false },
            { text: "ल्यूमेन (Lumen)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोप्लाज्मिक रेटिकुलम की संरचना में चपटी, आपस में जुड़ी हुई थैलियों को सिस्टर्नी कहा जाता है।"
    },
    {
        question: "प्रश्न 11. RER पर संश्लेषित प्रोटीन कहाँ भेजे जाते हैं?",
        answers: shuffle([
            { text: "सीधे कोशिका द्रव्य में", correct: false },
            { text: "माइटोकॉन्ड्रिया में", correct: false },
            { text: "आगे की प्रक्रिया के लिए गॉल्जी उपकरण में", correct: true },
            { text: "सीधे केंद्रक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> RER पर बने प्रोटीन को पुटिकाओं (vesicles) में पैक करके गॉल्जी उपकरण में भेजा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जहाँ उनकी छंटाई, संशोधन और अंतिम पैकेजिंग होती है।"
    },
    {
        question: "प्रश्न 12. निम्नलिखित में से कौन-सा कार्य RER द्वारा नहीं किया जाता है?",
        answers: shuffle([
            { text: "प्रोटीन संश्लेषण", correct: false },
            { text: "प्रोटीन फोल्डिंग", correct: false },
            { text: "ग्लाइकोसिलेशन (प्रोटीन में कार्बोहाइड्रेट जोड़ना)", correct: false },
            { text: "स्टेरॉयड संश्लेषण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टेरॉयड का संश्लेषण चिकनी एंडोप्लाज्मिक रेटिकुलम (SER) का कार्य है, न कि खुरदरी एंडोप्लाज्मिक रेटिकुलम (RER) का।"
    },
    {
        question: "प्रश्न 13. किस कोशिकांग की बाहरी झिल्ली सीधे एंडोप्लाज्मिक रेटिकुलम से जुड़ी होती है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "क्लोरोप्लास्ट", correct: false },
            { text: "केंद्रक (Nucleus)", correct: true },
            { text: "लाइसोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रक की बाहरी झिल्ली एंडोप्लाज्मिक रेटिकुलम के साथ निरंतरता में होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे केंद्रक और कोशिका द्रव्य के बीच सीधा संबंध स्थापित होता है।"
    },
    {
        question: "प्रश्न 14. ER के आंतरिक स्थान (internal space) को क्या कहा जाता है?",
        answers: shuffle([
            { text: "मैट्रिक्स", correct: false },
            { text: "स्ट्रोमा", correct: false },
            { text: "ल्यूमेन", correct: true },
            { text: "साइटोसोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोप्लाज्मिक रेटिकुलम की झिल्लियों के भीतर के स्थान को सिस्टर्नल स्पेस या ल्यूमेन कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो कोशिका द्रव्य से अलग होता है।"
    },
    {
        question: "प्रश्न 15. निम्नलिखित में से किसमें एंडोप्लाज्मिक रेटिकुलम अनुपस्थित होता है?",
        answers: shuffle([
            { text: "पादप कोशिका", correct: false },
            { text: "परिपक्व स्तनधारी लाल रक्त कोशिका (RBC)", correct: true },
            { text: "कवक कोशिका", correct: false },
            { text: "प्रोटोजोआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परिपक्व लाल रक्त कोशिकाओं में केंद्रक, माइटोकॉन्ड्रिया और एंडोप्लाज्मिक रेटिकुलम सहित अधिकांश कोशिकांग नहीं होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि हीमोग्लोबिन के लिए अधिक स्थान मिल सके।"
    },
    {
        question: "प्रश्न 16. ग्लाइकोजन के चयापचय (Metabolism of Glycogen) में कौन-सा ER महत्वपूर्ण भूमिका निभाता है?",
        answers: shuffle([
            { text: "A) खुरदरी ER", correct: false },
            { text: "B) चिकनी ER", correct: true },
            { text: "A), B) दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यकृत की कोशिकाओं में, चिकनी ER ग्लाइकोजन को ग्लूकोज में तोड़ने की प्रक्रिया (ग्लाइकोजेनोलिसिस) में शामिल एक महत्वपूर्ण एंजाइम, ग्लूकोज-6-फॉस्फेटेज, को धारण करता है।"
    },
    {
        question: "प्रश्न 17. RER और SER के बीच मुख्य संरचनात्मक अंतर क्या है?",
        answers: shuffle([
            { text: "उनका आकार", correct: false },
            { text: "उनकी झिल्ली की मोटाई", correct: false },
            { text: "सतह पर राइबोसोम की उपस्थिति या अनुपस्थिति", correct: true },
            { text: "उनका रंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> RER की सतह पर राइबोसोम होते हैं, जबकि SER की सतह पर राइबोसोम नहीं होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह उनके बीच का सबसे मौलिक संरचनात्मक अंतर है।"
    },
    {
        question: "प्रश्न 18. ER द्वारा बनाए गए लिपिड और प्रोटीन को गॉल्जी उपकरण तक कैसे पहुंचाया जाता है?",
        answers: shuffle([
            { text: "विसरण द्वारा", correct: false },
            { text: "परासरण द्वारा", correct: false },
            { text: "परिवहन पुटिकाओं (Transport Vesicles) द्वारा", correct: true },
            { text: "सीधे चैनलों द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ER से लिपिड और प्रोटीन छोटी-छोटी झिल्लीदार थैलियों, जिन्हें परिवहन पुटिकाएं कहते हैं, में पैक होकर गॉल्जी उपकरण तक जाते हैं।"
    },
    {
        question: "प्रश्न 19. प्रोटीन की सही फोल्डिंग सुनिश्चित करने में कौन-सा कोशिकांग मदद करता है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "केंद्रक", correct: false },
            { text: "खुरदरी ER (RER)", correct: true },
            { text: "रिक्तिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> RER के ल्यूमेन में 'चैपेरोन' (Chaperones) नामक सहायक प्रोटीन होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो नए संश्लेषित पॉलीपेप्टाइड श्रृंखलाओं को उनकी सही त्रि-आयामी संरचना में मोड़ने में मदद करते हैं।"
    },
    {
        question: "प्रश्न 20. ER को 'कोशिका के भीतर कोशिका' (Cell within the cell) क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि यह कोशिका को ऊर्जा देता है", correct: false },
            { text: "क्योंकि इसका अपना डीएनए होता है", correct: false },
            { text: "क्योंकि यह कोशिका द्रव्य को कई छोटे-छोटे कक्षों में विभाजित करता है", correct: true },
            { text: "क्योंकि यह कोशिका विभाजन को नियंत्रित करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ER का विशाल नेटवर्क कोशिका द्रव्य को कई भागों में बांटता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे विभिन्न रासायनिक अभिक्रियाएं एक-दूसरे से अलग और बिना किसी बाधा के हो सकती हैं।"
    },
    {
        question: "प्रश्न 21. 'एंडोप्लाज्मिक' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "कोशिका के बाहर", correct: false },
            { text: "कोशिका द्रव्य के भीतर", correct: true },
            { text: "केंद्रक के भीतर", correct: false },
            { text: "झिल्ली के ऊपर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एंडो' का अर्थ है 'भीतर' और 'प्लाज्मिक' कोशिका द्रव्य (साइटोप्लाज्म) को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  'रेटिकुलम' का अर्थ है 'छोटा जाल'। अतः, इसका अर्थ है 'कोशिका द्रव्य के भीतर एक छोटा जाल'।"
    },
    {
        question: "प्रश्न 22. कौन सा कथन चिकनी ER (SER) के लिए सही नहीं है?",
        answers: shuffle([
            { text: "यह लिपिड संश्लेषण में मदद करता है।", correct: false },
            { text: "यह विषहरण में मदद करता है।", correct: false },
            { text: "यह प्रोटीन संश्लेषण में सक्रिय रूप से शामिल है।", correct: true },
            { text: "यह कैल्शियम आयनों का भंडारण करता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोटीन संश्लेषण का कार्य मुख्य रूप से खुरदरी ER (RER) पर मौजूद राइबोसोम द्वारा किया जाता है, न कि चिकनी ER द्वारा।"
    },
    {
        question: "प्रश्न 23. एंडोप्लाज्मिक रेटिकुलम किस प्रकार की कोशिकाओं में नहीं पाया जाता है?",
        answers: shuffle([
            { text: "यूकैरियोटिक कोशिकाओं में", correct: false },
            { text: "प्रोकैरियोटिक कोशिकाओं में", correct: true },
            { text: "पादप कोशिकाओं में", correct: false },
            { text: "जंतु कोशिकाओं में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोप्लाज्मिक रेटिकुलम एक झिल्ली-बद्ध कोशिकांग है।<br><br><i class='fa-solid fa-angles-right icon'></i>  प्रोकैरियोटिक कोशिकाओं (जैसे जीवाणु) में केंद्रक सहित कोई भी झिल्ली-बद्ध कोशिकांग नहीं पाया जाता है।"
    },
    {
        question: "प्रश्न 24. RER पर बने प्रोटीन में सिग्नल पेप्टाइड (Signal Peptide) का क्या कार्य है?",
        answers: shuffle([
            { text: "प्रोटीन को ऊर्जा देना", correct: false },
            { text: "प्रोटीन को ER के अंदर निर्देशित करना", correct: true },
            { text: "प्रोटीन को नष्ट करना", correct: false },
            { text: "प्रोटीन को रंग देना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सिग्नल पेप्टाइड अमीनो एसिड का एक छोटा क्रम है जो प्रोटीन के एक सिरे पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह राइबोसोम को ER की झिल्ली तक ले जाने और प्रोटीन को ER के ल्यूमेन में प्रवेश कराने का संकेत देता है।"
    },
    {
        question: "प्रश्न 25. कोशिका की मृत्यु के बाद, ER की झिल्लियां टूटकर छोटी गोल संरचनाएं बनाती हैं, जिन्हें क्या कहते हैं?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "पेरोक्सिसोम", correct: false },
            { text: "माइक्रोसोम", correct: true },
            { text: "स्फेरोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब कोशिकाओं को प्रयोगशाला में तोड़ा (homogenized) जाता है, तो ER की झिल्लियां छोटे-छोटे टुकड़ों में टूट जाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो फिर से जुड़कर छोटी पुटिकाएं बना लेती हैं, जिन्हें माइक्रोसोम कहते हैं।"
    },
    {
        question: "प्रश्न 26. ER, गॉल्जी उपकरण, लाइसोसोम और रिक्तिका मिलकर कोशिका की कौन-सी प्रणाली बनाते हैं?",
        answers: shuffle([
            { text: "श्वसन प्रणाली", correct: false },
            { text: "पाचन प्रणाली", correct: false },
            { text: "अंतःझिल्लिका तंत्र (Endomembrane System)", correct: true },
            { text: "तंत्रिका प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये सभी झिल्लीदार कोशिकांग एक समन्वित इकाई के रूप में कार्य करते हैं, जिसमें पदार्थों का संश्लेषण, संशोधन, पैकेजिंग और परिवहन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इस प्रणाली को अंतःझिल्लिका तंत्र कहते हैं।"
    },
    {
        question: "प्रश्न 27. ER तनाव (ER Stress) क्या है?",
        answers: shuffle([
            { text: "ER का बहुत तेजी से काम करना", correct: false },
            { text: "ER में बिना मुड़े (unfolded) या गलत मुड़े (misfolded) प्रोटीन का जमा होना", correct: true },
            { text: "ER का आकार बढ़ना", correct: false },
            { text: "ER में लिपिड की कमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब ER में गलत तरीके से मुड़े हुए प्रोटीन जमा हो जाते हैं, तो कोशिका में एक तनाव की स्थिति उत्पन्न हो जाती है, जिसे ER तनाव कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह कई बीमारियों से जुड़ा हो सकता है।"
    },
    {
        question: "प्रश्न 28. कौन-सा ER ट्यूब्यूल (नलिकाओं) के रूप में अधिक पाया जाता है?",
        answers: shuffle([
            { text: "A) खुरदरी ER", correct: false },
            { text: "B) चिकनी ER", correct: true },
            { text: "A), B)दोनों समान रूप में", correct: false },
            { text: "यह कोशिका के प्रकार पर निर्भर नहीं करता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आमतौर पर, खुरदरी ER मुख्य रूप से चपटी सिस्टर्नी से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि चिकनी ER मुख्य रूप से नलिकाकार संरचनाओं (tubules) का एक नेटवर्क होती है।"
    },
    {
        question: "प्रश्न 29. RER पर होने वाली प्रोटीन संशोधन की प्रक्रिया 'ग्लाइकोसिलेशन' का क्या अर्थ है?",
        answers: shuffle([
            { text: "प्रोटीन से शर्करा को हटाना", correct: false },
            { text: "प्रोटीन में शर्करा (कार्बोहाइड्रेट) श्रृंखला को जोड़ना", correct: true },
            { text: "प्रोटीन को तोड़ना", correct: false },
            { text: "प्रोटीन में लिपिड जोड़ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्लाइकोसिलेशन एक प्रक्रिया है जिसमें प्रोटीन से एक ओलिगोसैकराइड (शर्करा) श्रृंखला जोड़ी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह प्रक्रिया RER के ल्यूमेन में शुरू होती है और प्रोटीन की स्थिरता और कार्य के लिए महत्वपूर्ण है।"
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