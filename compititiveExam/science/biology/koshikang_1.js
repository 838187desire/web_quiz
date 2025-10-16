const questions = [
    {
        topHeading: "कोशिकांग पर आधारित 34 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. कोशिका का 'ऊर्जा घर' (Powerhouse) किसे कहा जाता है?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: true },
            { text: "गॉल्जी काय", correct: false },
            { text: "लाइसोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया में कोशिकीय श्वसन की प्रक्रिया होती है, जिसके द्वारा भोजन के ऑक्सीकरण से ऊर्जा (ATP के रूप में) उत्पन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण इसे कोशिका का ऊर्जा घर कहते हैं।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से किसे 'आत्मघाती थैली' (Suicidal Bag) कहा जाता है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: true },
            { text: "राइबोसोम", correct: false },
            { text: "रिक्तिका (Vacuole)", correct: false },
            { text: "सेंट्रोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइसोसोम में शक्तिशाली पाचन एंजाइम होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> जब कोशिका क्षतिग्रस्त या पुरानी हो जाती है, तो लाइसोसोम फट जाते हैं और अपनी ही कोशिका को पचा लेते हैं, इसलिए इन्हें आत्मघाती थैली कहा जाता है।"
    },
    {
        question: "प्रश्न 3. कोशिका में प्रोटीन संश्लेषण कहाँ होता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया में", correct: false },
            { text: "केंद्रक में", correct: false },
            { text: "राइबोसोम पर", correct: true },
            { text: "लाइसोसोम में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम को कोशिका की 'प्रोटीन फैक्ट्री' भी कहा जाता है क्योंकि यह अमीनो एसिड को जोड़कर प्रोटीन बनाने का कार्य करता है।"
    },
    {
        question: "प्रश्न 4. पादप कोशिका भित्ति (Plant Cell Wall) मुख्य रूप से किससे बनी होती है?",
        answers: shuffle([
            { text: "लिपिड", correct: false },
            { text: "प्रोटीन", correct: false },
            { text: "सेलूलोज", correct: true },
            { text: "स्टार्च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिका भित्ति एक कठोर परत होती है जो मुख्य रूप से सेलूलोज नामक कार्बोहाइड्रेट से बनी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कोशिका को संरचनात्मक सहायता और सुरक्षा प्रदान करती है।"
    },
    {
        question: "प्रश्न 5. कौन सा कोशिकांग केवल पादप कोशिकाओं में पाया जाता है, जंतु कोशिकाओं में नहीं?",
        answers: shuffle([
            { text: "कोशिका झिल्ली", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "लवक (Plastid)", correct: true },
            { text: "राइबोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लवक, जैसे कि क्लोरोप्लास्ट (हरितलवक), केवल पादप कोशिकाओं और कुछ प्रोटिस्टा में पाए जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये प्रकाश संश्लेषण और भोजन भंडारण में मदद करते हैं।"
    },
    {
        question: "प्रश्न 6. कोशिका के किस अंगक में DNA पाया जाता है?",
        answers: shuffle([
            { text: "केवल केंद्रक में", correct: false },
            { text: "केवल माइटोकॉन्ड्रिया में", correct: false },
            { text: "केंद्रक और माइटोकॉन्ड्रिया दोनों में", correct: true },
            { text: "केवल गॉल्जी काय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका का अधिकांश DNA केंद्रक में होता है, लेकिन माइटोकॉन्ड्रिया और क्लोरोप्लास्ट (पादप कोशिकाओं में) का भी अपना वृत्ताकार DNA होता है।"
    },
    {
        question: "प्रश्न 7. गॉल्जी काय (Golgi Apparatus) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "ऊर्जा उत्पादन", correct: false },
            { text: "प्रोटीन संश्लेषण", correct: false },
            { text: "पदार्थों का संवेष्टन (packaging) और स्राव", correct: true },
            { text: "कोशिका विभाजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय एंडोप्लाज्मिक रेटिकुलम से आने वाले प्रोटीन और लिपिड को संसाधित करता है, उन्हें पैक करता है और कोशिका के अंदर या बाहर उनके गंतव्य तक पहुँचाता है।"
    },
    {
        question: "प्रश्न 8. निम्नलिखित में से कौन यूकैरियोटिक कोशिका की विशेषता नहीं है?",
        answers: shuffle([
            { text: "सुसंगठित केंद्रक", correct: false },
            { text: "झिल्ली-बद्ध कोशिकांग", correct: false },
            { text: "80S प्रकार के राइबोसोम", correct: false },
            { text: "न्यूक्लिऑइड", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूक्लिऑइड, जहाँ आनुवंशिक पदार्थ बिना किसी झिल्ली के मौजूद होता है, प्रोकैरियोटिक कोशिकाओं की एक विशेषता है, यूकैरियोटिक कोशिकाओं की नहीं।"
    },
    {
        question: "प्रश्न 9. प्रकाश संश्लेषण की प्रक्रिया कोशिका के किस अंग में होती है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "राइबोसोम", correct: false },
            { text: "हरितलवक (Chloroplast)", correct: true },
            { text: "केंद्रक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरितलवक में क्लोरोफिल नामक वर्णक होता है जो सूर्य के प्रकाश की ऊर्जा को ग्रहण करता है और इसका उपयोग कार्बन डाइऑक्साइड और पानी से भोजन (ग्लूकोज) बनाने के लिए करता है।"
    },
    {
        question: "प्रश्न 10. कोशिका झिल्ली (Cell Membrane) की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "पारगम्य (Permeable)", correct: false },
            { text: "अपारगम्य (Impermeable)", correct: false },
            { text: "अर्ध-पारगम्य (Semi-permeable)", correct: true },
            { text: "कठोर (Rigid)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका झिल्ली चयनात्मक रूप से पारगम्य या अर्ध-पारगम्य होती है, जिसका अर्थ है कि यह कुछ अणुओं को अपने आर-पार जाने देती है जबकि अन्य को रोकती है।"
    },
    {
        question: "प्रश्न 11. चिकनी एंडोप्लाज्मिक रेटिकुलम (Smooth ER) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "प्रोटीन बनाना", correct: false },
            { text: "लिपिड और स्टेरॉयड का संश्लेषण", correct: true },
            { text: "ऊर्जा का उत्पादन", correct: false },
            { text: "कोशिका को पचाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिकनी एंडोप्लाज्मिक रेटिकुलम लिपिड, फॉस्फोलिपिड और स्टेरॉयड के संश्लेषण तथा विषहरण (detoxification) में महत्वपूर्ण भूमिका निभाती है।"
    },
    {
        question: "प्रश्न 12. खुरदरी एंडोप्लाज्मिक रेटिकुलम (Rough ER) की सतह पर क्या चिपके रहते हैं?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "राइबोसोम", correct: true },
            { text: "गॉल्जी काय", correct: false },
            { text: "सेंट्रिओल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खुरदरी एंडोप्लाज्मिक रेटिकुलम की सतह पर राइबोसोम की उपस्थिति के कारण ही यह खुरदरी दिखाई देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये राइबोसोम प्रोटीन संश्लेषण में शामिल होते हैं।"
    },
    {
        question: "प्रश्न 13. कोशिका विभाजन में कौन सा कोशिकांग सहायता करता है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "तारककाय (Centrosome)", correct: true },
            { text: "रिक्तिका", correct: false },
            { text: "गॉल्जी काय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारककाय, जो सेंट्रिओल से बना होता है, जंतु कोशिकाओं में कोशिका विभाजन के दौरान तर्कु तंतु (spindle fibers) के निर्माण में मदद करता है।"
    },
    {
        question: "प्रश्न 14. क्रोमोसोम (गुणसूत्र) कहाँ पाए जाते हैं?",
        answers: shuffle([
            { text: "कोशिका द्रव्य में", correct: false },
            { text: "केंद्रक में", correct: true },
            { text: "लाइसोसोम में", correct: false },
            { text: "गॉल्जी काय में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रोमोसोम, जो DNA और प्रोटीन से बने होते हैं, कोशिका के केंद्रक के भीतर स्थित होते हैं और आनुवंशिक जानकारी को संग्रहीत करते हैं।"
    },
    {
        question: "प्रश्न 15. पादप कोशिका में रिक्तिका (Vacuole) का क्या कार्य है?",
        answers: shuffle([
            { text: "केवल जल का संग्रह", correct: false },
            { text: "कोशिका को स्फीति (turgidity) प्रदान करना और अपशिष्ट संग्रह", correct: true },
            { text: "केवल भोजन का संग्रह", correct: false },
            { text: "प्रकाश संश्लेषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिका में एक बड़ी केंद्रीय रिक्तिका होती है जो जल, रस और अपशिष्ट पदार्थों का भंडारण करती है तथा कोशिका को स्फीति और कठोरता प्रदान करती है।"
    },
    {
        question: "प्रश्न 16. 'प्रोकैरियोटिक' शब्द में 'प्रो' का क्या अर्थ है?",
        answers: shuffle([
            { text: "पहले", correct: true },
            { text: "बाद में", correct: false },
            { text: "सत्य", correct: false },
            { text: "असत्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रोकैरियोटिक' का अर्थ है 'केंद्रक से पहले'।<br><br><i class='fa-solid fa-angles-right icon'></i> इन कोशिकाओं में एक सुसंगठित केंद्रक और झिल्ली-बद्ध कोशिकांग नहीं होते हैं।"
    },
    {
        question: "प्रश्न 17. माइटोकॉन्ड्रिया की आंतरिक झिल्ली वलित होकर क्या बनाती है?",
        answers: shuffle([
            { text: "सिस्टर्नी (Cisternae)", correct: false },
            { text: "थाइलाकोइड (Thylakoid)", correct: false },
            { text: "क्रिस्टी (Cristae)", correct: true },
            { text: "ग्रेना (Grana)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया की भीतरी झिल्ली में कई मोड़ होते हैं जिन्हें क्रिस्टी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सतह क्षेत्र को बढ़ाता है, जिससे ATP उत्पादन के लिए अधिक स्थान मिलता है।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से कौन सा एक झिल्ली-रहित कोशिकांग है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "गॉल्जी काय", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "राइबोसोम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइबोसोम RNA और प्रोटीन से बनी कणिकाएँ हैं और इनके चारों ओर कोई झिल्ली नहीं होती है।"
    },
    {
        question: "प्रश्न 19. कोशिका का 'कंकाल' (Cytoskeleton) किससे बना होता है?",
        answers: shuffle([
            { text: "सेलूलोज तंतुओं से", correct: false },
            { text: "प्रोटीन तंतुओं (फिलामेंट्स) से", correct: true },
            { text: "लिपिड की परतों से", correct: false },
            { text: "कार्बोहाइड्रेट से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> साइटोस्केलेटन प्रोटीन के फिलामेंट्स और नलिकाओं का एक नेटवर्क है जो कोशिका को आकार और संरचनात्मक सहायता प्रदान करता है।"
    },
    {
        question: "प्रश्न 20. केंद्रिका (Nucleolus) का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "DNA का संश्लेषण", correct: false },
            { text: "राइबोसोमल RNA (rRNA) का संश्लेषण", correct: true },
            { text: "प्रोटीन का संश्लेषण", correct: false },
            { text: "कोशिका विभाजन का नियंत्रण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्रिका, जो केंद्रक के अंदर एक सघन संरचना है, राइबोसोम के निर्माण के लिए आवश्यक राइबोसोमल RNA (rRNA) का संश्लेषण करती है।"
    },
    {
        question: "प्रश्न 21. जंतु कोशिका और पादप कोशिका में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "कोशिका झिल्ली की उपस्थिति", correct: false },
            { text: "कोशिका भित्ति की उपस्थिति", correct: true },
            { text: "केंद्रक की उपस्थिति", correct: false },
            { text: "माइटोकॉन्ड्रिया की उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पादप कोशिकाओं में एक कठोर कोशिका भित्ति होती है, जबकि जंतु कोशिकाओं में यह नहीं होती।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सबसे प्रमुख अंतरों में से एक है।"
    },
    {
        question: "प्रश्न 22. परऑक्सिसोम (Peroxisome) का क्या कार्य है?",
        answers: shuffle([
            { text: "प्रोटीन का पाचन", correct: false },
            { text: "विषाक्त पदार्थों का ऑक्सीकरण", correct: true },
            { text: "वसा का संश्लेषण", correct: false },
            { text: "ऊर्जा का उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परऑक्सिसोम में एंजाइम होते हैं जो फैटी एसिड को तोड़ते हैं और हाइड्रोजन परॉक्साइड जैसे विषाक्त पदार्थों का विषहरण करते हैं।"
    },
    {
        question: "प्रश्न 23. कोशिका सिद्धांत (Cell Theory) किसने प्रतिपादित किया?",
        answers: shuffle([
            { text: "रॉबर्ट हुक", correct: false },
            { text: "श्लीडन और श्वान", correct: true },
            { text: "वॉटसन और क्रिक", correct: false },
            { text: "लुई पाश्चर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वनस्पतिशास्त्री मैथियास श्लीडन और जंतुविज्ञानी थियोडोर श्वान ने मिलकर 1839 में कोशिका सिद्धांत प्रस्तुत किया, जिसमें कहा गया कि सभी जीवित जीव कोशिकाओं से बने होते हैं।"
    },
    {
        question: "प्रश्न 24. प्लाज्मा झिल्ली (Plasma Membrane) का फ्लूइड मोजेक मॉडल किसने दिया?",
        answers: shuffle([
            { text: "श्लीडन और श्वान", correct: false },
            { text: "सिंगर और निकोलसन", correct: true },
            { text: "रॉबर्ट ब्राउन", correct: false },
            { text: "कैमिलो गॉल्जी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1972 में सिंगर और निकोलसन ने फ्लूइड मोजेक मॉडल प्रस्तावित किया, जिसके अनुसार कोशिका झिल्ली फॉस्फोलिपिड की एक तरल परत होती है जिसमें प्रोटीन तैरते रहते हैं।"
    },
    {
        question: "प्रश्न 25. हरितलवक के भीतर चपटे, झिल्लीदार थैली जैसी संरचनाओं को क्या कहते हैं?",
        answers: shuffle([
            { text: "स्ट्रोमा (Stroma)", correct: false },
            { text: "क्रिस्टी (Cristae)", correct: false },
            { text: "थाइलाकोइड (Thylakoid)", correct: true },
            { text: "मैट्रिक्स (Matrix)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थाइलाकोइड हरितलवक के अंदर पाए जाते हैं और इनके ढेर को ग्रेना कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> प्रकाशसंश्लेषण की प्रकाश-निर्भर अभिक्रियाएं थाइलाकोइड झिल्ली में होती हैं।"
    },
    {
        question: "प्रश्न 26. कोशिका के यातायात प्रबंधक (Traffic police) के रूप में किसे जाना जाता है?",
        answers: shuffle([
            { text: "माइटोकॉन्ड्रिया", correct: false },
            { text: "गॉल्जी काय", correct: true },
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गॉल्जी काय अणुओं को छाँटने, संशोधित करने और उन्हें सही गंतव्य तक भेजने का कार्य करता है, इसी कारण इसे कोशिका का यातायात प्रबंधक कहा जाता है।"
    },
    {
        question: "प्रश्न 27. किस कोशिकांग में अपना स्वयं का राइबोसोम और DNA होता है?",
        answers: shuffle([
            { text: "लाइसोसोम", correct: false },
            { text: "गॉल्जी काय", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: true },
            { text: "रिक्तिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माइटोकॉन्ड्रिया एक अर्ध-स्वायत्त (semi-autonomous) अंगक है क्योंकि इसमें अपने स्वयं के DNA और राइबोसोम होते हैं, जिससे यह अपने कुछ प्रोटीन स्वयं बना सकता है।"
    },
    {
        question: "प्रश्न 28. प्रोकैरियोटिक कोशिका का आनुवंशिक पदार्थ कहाँ स्थित होता है?",
        answers: shuffle([
            { text: "केंद्रक में", correct: false },
            { text: "न्यूक्लिऑइड में", correct: true },
            { text: "प्लाज्मिड में", correct: false },
            { text: "माइटोकॉन्ड्रिया में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोकैरियोटिक कोशिकाओं में एक वास्तविक केंद्रक नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका आनुवंशिक पदार्थ (DNA) कोशिका द्रव्य के एक अनियमित आकार के क्षेत्र में स्थित होता है जिसे न्यूक्लिऑइड कहते हैं।"
    },
    {
        question: "प्रश्न 29. अमीबा अपने भोजन को किस प्रक्रिया द्वारा ग्रहण करता है?",
        answers: shuffle([
            { text: "विसरण (Diffusion)", correct: false },
            { text: "परासरण (Osmosis)", correct: false },
            { text: "एंडोसाइटोसिस (Endocytosis)", correct: true },
            { text: "एक्सोसाइटोसिस (Exocytosis)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडोसाइटोसिस वह प्रक्रिया है जिसके द्वारा कोशिका अपनी झिल्ली को अंदर की ओर मोड़कर बाहरी पदार्थ को ग्रहण करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> अमीबा इसी प्रक्रिया से भोजन ग्रहण करता है।"
    },
    {
        question: "प्रश्न 30. कोशिका झिल्ली के निर्माण में शामिल मुख्य अणु कौन से हैं?",
        answers: shuffle([
            { text: "प्रोटीन और कार्बोहाइड्रेट", correct: false },
            { text: "लिपिड और प्रोटीन", correct: true },
            { text: "कार्बोहाइड्रेट और लिपिड", correct: false },
            { text: "न्यूक्लिक एसिड और प्रोटीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिका झिल्ली मुख्य रूप से फॉस्फोलिपिड की दोहरी परत (लिपिड बाईलेयर) और उसमें प्रोटीन अणु अंतर्निहित या सतह पर जुड़े होते हैं।"
    },
    {
        question: "प्रश्न 31. श्वसन एंजाइम कोशिका के किस अंग में पाए जाते हैं?",
        answers: shuffle([
            { text: "राइबोसोम", correct: false },
            { text: "लाइसोसोम", correct: false },
            { text: "माइटोकॉन्ड्रिया", correct: true },
            { text: "गॉल्जी काय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोशिकीय श्वसन से संबंधित अधिकांश एंजाइम, विशेष रूप से क्रेब्स चक्र और इलेक्ट्रॉन परिवहन श्रृंखला के एंजाइम माइटोकॉन्ड्रिया में पाए जाते हैं।"
    },
    {
        question: "प्रश्न 32. क्रोमेटिन (Chromatin) किससे बना होता है?",
        answers: shuffle([
            { text: "केवल DNA", correct: false },
            { text: "DNA और प्रोटीन", correct: true },
            { text: "DNA, RNA और प्रोटीन", correct: false },
            { text: "केवल RNA", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रोमेटिन DNA और हिस्टोन नामक प्रोटीन का एक जटिल मिश्रण है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोशिका विभाजन के दौरान यह संघनित होकर गुणसूत्र बनाता है।"
    },
    {
        question: "प्रश्न 33. कौन सा कोशिकांग डिटॉक्सिफिकेशन (विषहरण) में महत्वपूर्ण भूमिका निभाता है?",
        answers: shuffle([
            { text: "खुरदरी एंडोप्लाज्मिक रेटिकुलम", correct: false },
            { text: "गॉल्जी काय", correct: false },
            { text: "चिकनी एंडोप्लाज्मिक रेटिकुलम", correct: true },
            { text: "लाइसोसोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यकृत कोशिकाओं में चिकनी एंडोप्लाज्मिक रेटिकुलम विशेष रूप से दवाओं और जहरीले पदार्थों के विषहरण के लिए उत्तरदायी होती है।"
    },
    {
        question: "प्रश्न 34. दो कोशिकाओं के बीच संचार और पदार्थों का आदान-प्रदान किसके द्वारा होता है?",
        answers: shuffle([
            { text: "कोशिका भित्ति", correct: false },
            { text: "प्लाज्मोडेस्मेटा (Plasmodesmata)", correct: true },
            { text: "लाइसोसोम", correct: false },
            { text: "रिक्तिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लाज्मोडेस्मेटा पादप कोशिकाओं की कोशिका भित्ति में मौजूद सूक्ष्म चैनल होते हैं जो आसन्न कोशिकाओं के कोशिका द्रव्य को जोड़ते हैं, जिससे उनके बीच संचार संभव होता है।"
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