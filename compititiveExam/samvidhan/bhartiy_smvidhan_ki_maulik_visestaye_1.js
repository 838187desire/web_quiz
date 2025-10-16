const questions = [
    {
        topHeading: "संविधान की मौलिक विशेषता पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. भारतीय संविधान की प्रस्तावना में 'धर्मनिरपेक्ष' शब्द किस संशोधन द्वारा जोड़ा गया?",
        answers: shuffle([
            { text: "42वां संशोधन", correct: true },
            { text: "44वां संशोधन", correct: false },
            { text: "24वां संशोधन", correct: false },
            { text: "61वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'धर्मनिरपेक्ष', 'समाजवादी' और 'अखंडता' शब्द 1976 में 42वें संविधान संशोधन अधिनियम द्वारा प्रस्तावना में जोड़े गए थे।"
    },
    {
        question: "प्रश्न 2. भारतीय संविधान में एकल नागरिकता का प्रावधान किस देश के संविधान से लिया गया है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "ब्रिटेन", correct: true },
            { text: "कनाडा", correct: false },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में संसदीय प्रणाली और एकल नागरिकता की अवधारणा ब्रिटेन के संविधान से अपनाई गई है।"
    },
    {
        question: "प्रश्न 3. निम्नलिखित में से कौन भारतीय संविधान की एक प्रमुख विशेषता नहीं है?",
        answers: shuffle([
            { text: "लिखित संविधान और संविधान की सर्वोच्चता", correct: false },
            { text: "सरकार का अध्यक्षीय स्वरूप", correct: true },
            { text: "शक्तियों का विभाजन", correct: false },
            { text: "अर्ध-संघीय संरचना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सरकार का संसदीय स्वरूप है, न कि अध्यक्षीय।<br><br><i class='fa-solid fa-angles-right icon'></i> अध्यक्षीय प्रणाली अमेरिका में है।"
    },
    {
        question: "प्रश्न 4. भारतीय संविधान में मौलिक अधिकारों की अवधारणा किस देश से प्रेरित है?",
        answers: shuffle([
            { text: "सोवियत संघ (अब रूस)", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "जर्मनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के भाग-3 में वर्णित मौलिक अधिकार संयुक्त राज्य अमेरिका के 'बिल ऑफ राइट्स' से प्रेरित हैं।"
    },
    {
        question: "प्रश्न 5. 'कानून का शासन' (Rule of Law) की अवधारणा भारतीय संविधान में कहाँ से ली गई है?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "जापान", correct: false },
            { text: "दक्षिण अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विधि का शासन या 'कानून का शासन' की अवधारणा ब्रिटिश संविधान की एक प्रमुख विशेषता है, जिसे भारत ने अपनाया है।"
    },
    {
        question: "प्रश्न 6. भारतीय संविधान में राज्य के नीति निदेशक तत्व (DPSP) को शामिल करने का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "एक धर्मनिरपेक्ष राज्य की स्थापना करना", correct: false },
            { text: "एक पुलिस राज्य की स्थापना करना", correct: false },
            { text: "एक कल्याणकारी राज्य की स्थापना करना", correct: true },
            { text: "सरकार के मनमाने कार्यों पर रोक लगाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य के नीति निदेशक तत्वों का उद्देश्य सामाजिक और आर्थिक न्याय सुनिश्चित करना और भारत को एक कल्याणकारी राज्य के रूप में स्थापित करना है।"
    },
    {
        question: "प्रश्न 7. भारतीय संविधान को 'अर्ध-संघीय' (Quasi-Federal) किसने कहा था?",
        answers: shuffle([
            { text: "मॉरिस जोन्स", correct: false },
            { text: "आइवर जेनिंग्स", correct: false },
            { text: "के.सी. व्हेयर", correct: true },
            { text: "ग्रानविले ऑस्टिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> के.सी. व्हेयर ने भारतीय संविधान की प्रकृति का वर्णन करते हुए इसे 'अर्ध-संघीय' कहा क्योंकि इसमें संघीय और एकात्मक दोनों प्रणालियों की विशेषताएं हैं।"
    },
    {
        question: "प्रश्न 8. भारतीय संविधान में न्यायिक समीक्षा (Judicial Review) की शक्ति का स्रोत क्या है?",
        answers: shuffle([
            { text: "अनुच्छेद 13", correct: false },
            { text: "अनुच्छेद 32", correct: false },
            { text: "अनुच्छेद 226", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वोच्च न्यायालय (अनुच्छेद 13 और 32) और उच्च न्यायालयों (अनुच्छेद 226) को विधायी और कार्यकारी आदेशों की संवैधानिकता की जांच करने की शक्ति है।"
    },
    {
        question: "प्रश्न 9. विश्व का सबसे लंबा लिखित संविधान किस देश का है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "भारत", correct: true },
            { text: "फ्रांस", correct: false },
            { text: "ब्रिटेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान अपनी व्यापकता, जटिलता और विस्तृत प्रावधानों के कारण दुनिया का सबसे लंबा लिखित संविधान है।"
    },
    {
        question: "प्रश्न 10. भारतीय संविधान में मौलिक कर्तव्यों को किस समिति की सिफारिश पर शामिल किया गया था?",
        answers: shuffle([
            { text: "बलवंत राय मेहता समिति", correct: false },
            { text: "अशोक मेहता समिति", correct: false },
            { text: "स्वर्ण सिंह समिति", correct: true },
            { text: "सरकारिया आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1976 में 42वें संशोधन द्वारा स्वर्ण सिंह समिति की सिफारिशों के आधार पर संविधान में मौलिक कर्तव्यों को जोड़ा गया था।"
    },
    {
        question: "प्रश्न 11. निम्नलिखित में से कौन सी भाषा संविधान की आठवीं अनुसूची में शामिल नहीं है?",
        answers: shuffle([
            { text: "नेपाली", correct: false },
            { text: "सिंधी", correct: false },
            { text: "अंग्रेजी", correct: true },
            { text: "कोंकणी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की आठवीं अनुसूची में 22 आधिकारिक भाषाएं हैं, लेकिन अंग्रेजी इस सूची में शामिल नहीं है।"
    },
    {
        question: "प्रश्न 12. 'पंथनिरपेक्ष' शब्द का सही अर्थ क्या है?",
        answers: shuffle([
            { text: "राज्य का अपना कोई धर्म नहीं है।", correct: false },
            { text: "राज्य सभी धर्मों के साथ समान व्यवहार करता है।", correct: false },
            { text: "राज्य धर्म के आधार पर कोई भेदभाव नहीं करता।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंथनिरपेक्षता का अर्थ है कि राज्य का कोई आधिकारिक धर्म नहीं होगा और राज्य सभी धर्मों का सम्मान करेगा तथा उनके साथ समान व्यवहार करेगा।"
    },
    {
        question: "प्रश्न 13. भारत में वयस्क मताधिकार के लिए न्यूनतम आयु क्या है?",
        answers: shuffle([
            { text: "21 वर्ष", correct: false },
            { text: "20 वर्ष", correct: false },
            { text: "18 वर्ष", correct: true },
            { text: "25 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 61वें संविधान संशोधन अधिनियम, 1988 द्वारा मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष कर दी गई।"
    },
    {
        question: "प्रश्न 14. भारतीय संविधान में संशोधन की प्रक्रिया किस देश से ली गई है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "जर्मनी", correct: false },
            { text: "दक्षिण अफ्रीका", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के अनुच्छेद 368 में वर्णित संशोधन की प्रक्रिया दक्षिण अफ्रीका के संविधान से प्रेरित है।"
    },
    {
        question: "प्रश्न 15. 'शक्तियों के पृथक्करण' का सिद्धांत किससे संबंधित है?",
        answers: shuffle([
            { text: "केंद्र और राज्यों के बीच शक्तियों का विभाजन", correct: false },
            { text: "विधायिका, कार्यपालिका और न्यायपालिका के बीच शक्तियों का विभाजन", correct: true },
            { text: "विभिन्न सामाजिक समूहों के बीच शक्तियों का विभाजन", correct: false },
            { text: " कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत सरकार के तीन अंगों - विधायिका (कानून बनाना), कार्यपालिका (कानून लागू करना) और न्यायपालिका (न्याय करना) - के बीच शक्तियों के स्पष्ट विभाजन पर जोर देता है।"
    },
    {
        question: "प्रश्न 16. भारतीय संविधान की सातवीं अनुसूची किससे संबंधित है?",
        answers: shuffle([
            { text: "भाषाओं से", correct: false },
            { text: "राज्यों और केंद्र शासित प्रदेशों की सूची से", correct: false },
            { text: "केंद्र और राज्यों के बीच शक्तियों के वितरण से", correct: true },
            { text: "दलबदल विरोधी कानून से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सातवीं अनुसूची में तीन सूचियाँ हैं - संघ सूची, राज्य सूची और समवर्ती सूची, जो केंद्र और राज्यों के बीच विधायी शक्तियों का वितरण करती हैं।"
    },
    {
        question: "प्रश्न 17. भारतीय संविधान में आपातकालीन प्रावधान किस देश के संविधान से लिए गए हैं?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "जर्मनी का वाइमर संविधान", correct: true },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आपातकाल के दौरान मौलिक अधिकारों के निलंबन से संबंधित प्रावधान जर्मनी के वाइमर संविधान से लिए गए हैं।"
    },
    {
        question: "प्रश्न 18. निम्नलिखित में से कौन सा तत्व भारतीय संविधान की एकात्मक विशेषता को दर्शाता है?",
        answers: shuffle([
            { text: "शक्तियों का विभाजन", correct: false },
            { text: "स्वतंत्र न्यायपालिका", correct: false },
            { text: "एकल नागरिकता", correct: true },
            { text: "लिखित संविधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एकल नागरिकता, अखिल भारतीय सेवाएं और राज्यपाल की नियुक्ति जैसे प्रावधान संविधान की एकात्मक प्रकृति को दर्शाते हैं।"
    },
    {
        question: "प्रश्न 19. \"भारत, अर्थात इंडिया, राज्यों का संघ होगा।\" यह किस अनुच्छेद में वर्णित है?",
        answers: shuffle([
            { text: "अनुच्छेद 1", correct: true },
            { text: "अनुच्छेद 2", correct: false },
            { text: "अनुच्छेद 3", correct: false },
            { text: "अनुच्छेद 4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का अनुच्छेद 1(1) घोषित करता है कि \"भारत, अर्थात इंडिया, राज्यों का संघ (Union of States) होगा।\""
    },
    {
        question: "प्रश्न 20. 'समवर्ती सूची' का विचार किस देश के संविधान से लिया गया है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "आयरलैंड", correct: false },
            { text: "जापान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समवर्ती सूची, जिसमें केंद्र और राज्य दोनों कानून बना सकते हैं, की अवधारणा ऑस्ट्रेलियाई संविधान से ली गई है।"
    },
    {
        question: "प्रश्न 21. भारतीय संविधान में किस प्रकार की शासन प्रणाली अपनाई गई है?",
        answers: shuffle([
            { text: "अध्यक्षीय और संघीय", correct: false },
            { text: "संसदीय और संघीय", correct: true },
            { text: "अध्यक्षीय और एकात्मक", correct: false },
            { text: "संसदीय और एकात्मक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में ब्रिटेन की तरह संसदीय शासन प्रणाली है और शक्तियों के वितरण के कारण यह एक संघीय प्रणाली भी है।"
    },
    {
        question: "प्रश्न 22. भारतीय संविधान की प्रस्तावना में कितने प्रकार के न्याय का उल्लेख है?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्तावना में तीन प्रकार के न्याय का उल्लेख है - सामाजिक, आर्थिक और राजनीतिक।"
    },
    {
        question: "प्रश्न 23. भारत की संप्रभुता किसमें निहित है?",
        answers: shuffle([
            { text: "संसद में", correct: false },
            { text: "राष्ट्रपति में", correct: false },
            { text: "प्रधानमंत्री में", correct: false },
            { text: "भारत की जनता में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान की प्रस्तावना \"हम, भारत के लोग\" से शुरू होती है, जो स्पष्ट रूप से यह दर्शाती है कि अंतिम संप्रभुता भारत की जनता में निहित है।"
    },
    {
        question: "प्रश्न 24. भारतीय संविधान में 'विधि द्वारा स्थापित प्रक्रिया' (Procedure established by Law) की अवधारणा किस देश से ली गई है?",
        answers: shuffle([
            { text: "जापान", correct: true },
            { text: "ब्रिटेन", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 21 में प्रयुक्त 'विधि द्वारा स्थापित प्रक्रिया' वाक्यांश जापान के संविधान से लिया गया है।"
    },
    {
        question: "प्रश्न 25. निम्नलिखित में से कौन सा मौलिक अधिकार नहीं है?",
        answers: shuffle([
            { text: "समानता का अधिकार", correct: false },
            { text: "स्वतंत्रता का अधिकार", correct: false },
            { text: "संपत्ति का अधिकार", correct: true },
            { text: "शोषण के विरुद्ध अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 44वें संविधान संशोधन अधिनियम, 1978 द्वारा संपत्ति के अधिकार को मौलिक अधिकारों की सूची से हटाकर अनुच्छेद 300-A के तहत एक कानूनी अधिकार बना दिया गया।"
    },
    {
        question: "प्रश्न 26. संविधान की व्याख्या करने का अंतिम अधिकार किसे प्राप्त है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "राष्ट्रपति", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर्वोच्च न्यायालय को भारतीय संविधान का संरक्षक और अंतिम व्याख्याकार माना जाता है।"
    },
    {
        question: "प्रश्न 27. भारतीय संघवाद को 'सहकारी संघवाद' (Cooperative Federalism) किसने कहा?",
        answers: shuffle([
            { text: "के.सी. व्हेयर", correct: false },
            { text: "ग्रानविले ऑस्टिन", correct: true },
            { text: "आइवर जेनिंग्स", correct: false },
            { text: "बी.आर. अंबेडकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रानविले ऑस्टिन ने भारतीय संघवाद की प्रकृति को 'सहकारी संघवाद' के रूप में वर्णित किया है, जहाँ केंद्र और राज्य एक-दूसरे के सहयोग से कार्य करते हैं।"
    },
    {
        question: "प्रश्न 28. भारतीय संविधान की ग्यारहवीं अनुसूची किससे संबंधित है?",
        answers: shuffle([
            { text: "नगर पालिकाओं की शक्तियों से", correct: false },
            { text: "पंचायती राज की शक्तियों और जिम्मेदारियों से", correct: true },
            { text: "दलबदल विरोधी कानून से", correct: false },
            { text: "असम, मेघालय, त्रिपुरा और मिजोरम के जनजातीय क्षेत्रों के प्रशासन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 73वें संविधान संशोधन, 1992 द्वारा जोड़ी गई ग्यारहवीं अनुसूची में पंचायतों के लिए 29 विषय सूचीबद्ध हैं।"
    },
    {
        question: "प्रश्न 29. भारत एक गणतंत्र है, इसका अर्थ है:",
        answers: shuffle([
            { text: "भारत में संसदीय शासन है।", correct: false },
            { text: "भारत में कोई वंशानुगत शासक नहीं है।", correct: true },
            { text: "भारत राज्यों का एक संघ है।", correct: false },
            { text: "भारत में अंतिम सत्ता जनता के पास है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र का अर्थ है कि राष्ट्र का प्रमुख (राष्ट्रपति) वंशानुगत न होकर एक निश्चित अवधि के लिए निर्वाचित होता है।"
    },
    {
        question: "प्रश्न 30. भारतीय संविधान की प्रस्तावना में उल्लिखित 'हम, भारत के लोग' का क्या तात्पर्य है?",
        answers: shuffle([
            { text: "संविधान का निर्माण भारत की जनता की ओर से हुआ है।", correct: false },
            { text: "संप्रभुता अंततः भारत के लोगों में निहित है।", correct: false },
            { text: "भारतीय गणराज्य एक लोकतांत्रिक व्यवस्था है।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वाक्यांश दर्शाता है कि संविधान का स्रोत भारत की जनता है और अंतिम संप्रभुता उसी में निहित है।"
    },
    {
        question: "प्रश्न 31. द्विसदनीय विधायिका की विशेषता किस देश के संविधान से ली गई है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "फ्रांस", correct: false },
            { text: "ब्रिटेन", correct: true },
            { text: "कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्र में लोकसभा और राज्यसभा के रूप में द्विसदनीय विधायिका की व्यवस्था ब्रिटिश संसदीय प्रणाली से प्रेरित है।"
    },
    {
        question: "प्रश्न 32. किस संवैधानिक संशोधन को 'लघु संविधान' (Mini Constitution) कहा जाता है?",
        answers: shuffle([
            { text: "7वां संशोधन", correct: false },
            { text: "24वां संशोधन", correct: false },
            { text: "42वां संशोधन", correct: true },
            { text: "44वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1976 में हुए 42वें संशोधन ने संविधान में व्यापक परिवर्तन किए, जिसके कारण इसे 'लघु संविधान' की संज्ञा दी जाती है।"
    },
    {
        question: "प्रश्न 33. भारतीय संविधान में स्वतंत्रता, समानता और बंधुत्व के आदर्श कहाँ से लिए गए हैं?",
        answers: shuffle([
            { text: "रूसी क्रांति", correct: false },
            { text: "अमेरिकी स्वतंत्रता संग्राम", correct: false },
            { text: "फ्रांसीसी क्रांति", correct: true },
            { text: "जर्मनी का संविधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्तावना में निहित स्वतंत्रता, समानता और बंधुत्व के आदर्श 1789 की फ्रांसीसी क्रांति से प्रेरित हैं।"
    },
    {
        question: "प्रश्न 34. स्वतंत्र न्यायपालिका की विशेषता क्या है?",
        answers: shuffle([
            { text: "न्यायपालिका, कार्यपालिका और विधायिका के नियंत्रण से मुक्त है।", correct: false },
            { text: "न्यायाधीश बिना किसी भय या पक्षपात के निर्णय दे सकते हैं।", correct: false },
            { text: "यह संविधान और नागरिकों के अधिकारों की रक्षा करती है।", correct: false },
            { text: "ये सभी।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वतंत्र न्यायपालिका लोकतंत्र का आधार है, जो सरकार के अन्य अंगों के हस्तक्षेप के बिना कार्य करती है।"
    },
    {
        question: "प्रश्न 35. संविधान का कौन सा अनुच्छेद अस्पृश्यता (Untouchability) के उन्मूलन से संबंधित है?",
        answers: shuffle([
            { text: "अनुच्छेद 15", correct: false },
            { text: "अनुच्छेद 16", correct: false },
            { text: "अनुच्छेद 17", correct: true },
            { text: "अनुच्छेद 18", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 17 अस्पृश्यता को समाप्त करता है और किसी भी रूप में इसके आचरण को निषिद्ध करता है।"
    },
    {
        question: "प्रश्न 36. भारतीय संविधान में 'अखिल भारतीय सेवाओं' का प्रावधान किस विशेषता को दर्शाता है?",
        answers: shuffle([
            { text: "संघीय विशेषता", correct: false },
            { text: "एकात्मक विशेषता", correct: true },
            { text: "लोकतांत्रिक विशेषता", correct: false },
            { text: "गणतंत्रात्मक विशेषता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अखिल भारतीय सेवाएं (IAS, IPS, IFS) केंद्र द्वारा भर्ती की जाती हैं लेकिन राज्यों में सेवा करती हैं, जो केंद्र के मजबूत नियंत्रण को दर्शाती हैं, यह एक एकात्मक विशेषता है।"
    },
    {
        question: "प्रश्न 37. भारतीय संविधान की प्रस्तावना में कितने प्रकार की स्वतंत्रता का उल्लेख है?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: false },
            { text: "पाँच", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्तावना में पाँच प्रकार की स्वतंत्रता का उल्लेख है - विचार, अभिव्यक्ति, विश्वास, धर्म और उपासना।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन सी भारतीय संविधान की संघीय विशेषता है?",
        answers: shuffle([
            { text: "एकल संविधान", correct: false },
            { text: "एकल नागरिकता", correct: false },
            { text: "शक्तियों का विभाजन", correct: true },
            { text: "आपातकालीन प्रावधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केंद्र और राज्यों के बीच शक्तियों का स्पष्ट विभाजन संघवाद का एक मूलभूत सिद्धांत है।"
    },
    {
        question: "प्रश्न 39. संविधान सभा द्वारा भारतीय संविधान को कब अपनाया (Adopt) गया था?",
        answers: shuffle([
            { text: "26 जनवरी 1950", correct: false },
            { text: "26 नवंबर 1949", correct: true },
            { text: "15 अगस्त 1947", correct: false },
            { text: "9 दिसंबर 1946", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान 26 नवंबर 1949 को बनकर तैयार हुआ और संविधान सभा द्वारा अपनाया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन को अब 'संविधान दिवस' के रूप में मनाया जाता है।"
    },
    {
        question: "प्रश्न 40. 'कल्याणकारी राज्य' की अवधारणा संविधान के किस भाग में निहित है?",
        answers: shuffle([
            { text: "प्रस्तावना", correct: false },
            { text: "मौलिक अधिकार (भाग III)", correct: false },
            { text: "राज्य के नीति निदेशक तत्व (भाग IV)", correct: true },
            { text: "मौलिक कर्तव्य (भाग IV-A)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीति निदेशक तत्व सरकार को सामाजिक और आर्थिक लोकतंत्र स्थापित करने और एक कल्याणकारी राज्य की स्थापना के लिए मार्गदर्शन करते हैं।"
    },
    {
        question: "प्रश्न 41. भारतीय संविधान की कठोरता और लचीलेपन का मिश्रण क्या दर्शाता है?",
        answers: shuffle([
            { text: "इसकी संशोधन प्रक्रिया", correct: true },
            { text: "इसकी संघीय संरचना", correct: false },
            { text: "इसकी संसदीय प्रणाली", correct: false },
            { text: "इसकी न्यायिक समीक्षा शक्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान में कुछ प्रावधानों को साधारण बहुमत से (लचीलापन) और कुछ को विशेष बहुमत से (कठोरता) संशोधित किया जा सकता है, जो दोनों का मिश्रण है।"
    },
    {
        question: "प्रश्न 42. भारत में त्रि-स्तरीय सरकार का प्रावधान किस संशोधन द्वारा किया गया?",
        answers: shuffle([
            { text: "42वां और 44वां संशोधन", correct: false },
            { text: "61वां संशोधन", correct: false },
            { text: "73वां और 74वां संशोधन", correct: true },
            { text: "86वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 73वें (पंचायती राज) और 74वें (नगरपालिका) संशोधनों ने स्थानीय स्वशासन को संवैधानिक दर्जा देकर सरकार का तीसरा स्तर जोड़ा।"
    },
    {
        question: "प्रश्न 43. भारतीय संविधान के किस अनुच्छेद के तहत वित्तीय आपातकाल लगाया जा सकता है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 356", correct: false },
            { text: "अनुच्छेद 360", correct: true },
            { text: "अनुच्छेद 368", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 360 राष्ट्रपति को वित्तीय आपातकाल की घोषणा करने का अधिकार देता है यदि देश में वित्तीय स्थिरता का संकट हो।"
    },
    {
        question: "प्रश्न 44. 'सार्वभौमिक वयस्क मताधिकार' क्या सुनिश्चित करता है?",
        answers: shuffle([
            { text: "आर्थिक समानता", correct: false },
            { text: "सामाजिक समानता", correct: false },
            { text: "राजनीतिक समानता", correct: true },
            { text: "धार्मिक स्वतंत्रता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत सुनिश्चित करता है कि धर्म, जाति, लिंग, साक्षरता या धन के आधार पर भेदभाव किए बिना सभी वयस्क नागरिकों को वोट देने का अधिकार है।"
    },
    {
        question: "प्रश्न 45. भारतीय संविधान की प्रस्तावना में संशोधन किया जा सकता है या नहीं?",
        answers: shuffle([
            { text: "हाँ, किया जा सकता है।", correct: true },
            { text: "नहीं, यह संविधान का मूल ढांचा है।", correct: false },
            { text: "केवल राष्ट्रपति के आदेश से।", correct: false },
            { text: "केवल जनमत संग्रह द्वारा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केशवानंद भारती मामले (1973) में सर्वोच्च न्यायालय ने निर्णय दिया कि संसद प्रस्तावना में संशोधन कर सकती है, लेकिन इसके 'मूल ढांचे' में नहीं।"
    },
    {
        question: "प्रश्न 46. भारतीय संविधान में राष्ट्रपति के चुनाव की पद्धति किस देश से ली गई है?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "आयरलैंड", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति के निर्वाचन की पद्धति (एकल संक्रमणीय मत द्वारा आनुपातिक प्रतिनिधित्व) आयरलैंड के संविधान से ली गई है।"
    },
    {
        question: "प्रश्न 47. 'सामाजिक न्याय' की अवधारणा का क्या अर्थ है?",
        answers: shuffle([
            { text: "सभी को समान राजनीतिक अधिकार।", correct: false },
            { text: "धर्म के आधार पर कोई भेदभाव नहीं।", correct: false },
            { text: "जाति, रंग, नस्ल, लिंग आदि के आधार पर बिना किसी भेदभाव के समाज का निर्माण।", correct: true },
            { text: "सभी को समान कानूनी सुरक्षा।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामाजिक न्याय का अर्थ है समाज में किसी भी व्यक्ति के साथ सामाजिक स्थिति के आधार पर कोई भेदभाव न हो।"
    },
    {
        question: "प्रश्न 48. एकीकृत न्यायपालिका (Integrated Judiciary) से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "केंद्र और राज्यों के लिए अलग-अलग न्यायपालिका।", correct: false },
            { text: "सर्वोच्च न्यायालय के शीर्ष पर होने के साथ-साथ राष्ट्रीय स्तर पर एक ही न्यायिक प्रणाली।", correct: true },
            { text: "केवल सर्वोच्च न्यायालय ही कानून की व्याख्या कर सकता है।", correct: false },
            { text: "न्यायपालिका कार्यपालिका के अधीन है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में एक पिरामिड जैसी न्यायिक संरचना है जिसमें सर्वोच्च न्यायालय शीर्ष पर है, उसके नीचे उच्च न्यायालय और फिर अधीनस्थ न्यायालय हैं।"
    },
    {
        question: "प्रश्न 49. भारतीय संविधान के अनुसार, भारत एक:",
        answers: shuffle([
            { text: "धार्मिक राज्य है", correct: false },
            { text: "धर्मनिरपेक्ष राज्य है", correct: true },
            { text: "पूंजीवादी राज्य है", correct: false },
            { text: "कुलीनतंत्र है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की प्रस्तावना और विभिन्न अनुच्छेदों के माध्यम से भारत को एक धर्मनिरपेक्ष राज्य घोषित किया गया है, जिसका अर्थ है कि राज्य का कोई अपना धर्म नहीं है।"
    },
    {
        question: "प्रश्न 50. संविधान के 'मूल ढांचे' (Basic Structure) का सिद्धांत किस मामले में प्रतिपादित किया गया था?",
        answers: shuffle([
            { text: "गोलकनाथ मामला", correct: false },
            { text: "केशवानंद भारती मामला", correct: true },
            { text: "मिनर्वा मिल्स मामला", correct: false },
            { text: "एस.आर. बोम्मई मामला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1973 में ऐतिहासिक केशवानंद भारती बनाम केरल राज्य मामले में, सर्वोच्च न्यायालय ने 'मूल ढांचे' का सिद्धांत दिया, जिसके अनुसार संसद संविधान के मूल ढांचे को नहीं बदल सकती।"
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