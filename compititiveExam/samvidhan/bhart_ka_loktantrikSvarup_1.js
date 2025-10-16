const questions = [
    {
        topHeading: "भारत के लोकतांत्रिक स्वरूप पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. \"लोकतंत्र\" शब्द की उत्पत्ति किस भाषा से हुई है?",
        answers: shuffle([
            { text: "लैटिन", correct: false },
            { text: "ग्रीक", correct: true },
            { text: "फ्रेंच", correct: false },
            { text: "संस्कृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतंत्र (Democracy) शब्द ग्रीक भाषा के दो शब्दों 'डेमोस' (Demos) जिसका अर्थ 'लोग' है और 'क्रेटोस' (Kratos) जिसका अर्थ 'शासन' है, से मिलकर बना है।"
    },
    {
        question: "प्रश्न 2. \"लोकतंत्र जनता का, जनता के लिए, जनता द्वारा शासन है।\" यह प्रसिद्ध कथन किसका है?",
        answers: shuffle([
            { text: "महात्मा गांधी", correct: false },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "अब्राहम लिंकन", correct: true },
            { text: "बी.आर. अंबेडकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह लोकतंत्र की सबसे प्रसिद्ध परिभाषाओं में से एक है, जिसे अमेरिका के 16वें राष्ट्रपति अब्राहम लिंकन ने दिया था।"
    },
    {
        question: "प्रश्न 3. भारत में किस प्रकार का लोकतंत्र प्रचलित है?",
        answers: shuffle([
            { text: "प्रत्यक्ष लोकतंत्र", correct: false },
            { text: "अध्यक्षीय लोकतंत्र", correct: false },
            { text: "अप्रत्यक्ष या प्रतिनिधि लोकतंत्र", correct: true },
            { text: "राजशाही लोकतंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में अप्रत्यक्ष लोकतंत्र है, जहाँ नागरिक अपने प्रतिनिधियों का चुनाव करते हैं जो उनकी ओर से शासन करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे प्रतिनिधि लोकतंत्र भी कहा जाता है।"
    },
    {
        question: "प्रश्न 4. भारतीय लोकतंत्र का आधार स्तंभ किसे माना जाता है?",
        answers: shuffle([
            { text: "न्यायपालिका", correct: false },
            { text: "कार्यपालिका", correct: false },
            { text: "विधायिका", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक मजबूत लोकतंत्र के लिए स्वतंत्र न्यायपालिका, जवाबदेह कार्यपालिका और निर्वाचित विधायिका, तीनों ही आवश्यक स्तंभ हैं।"
    },
    {
        question: "प्रश्न 5. भारतीय संविधान की प्रस्तावना में 'लोकतांत्रिक गणराज्य' का क्या अर्थ है?",
        answers: shuffle([
            { text: "शासन वंशानुगत है", correct: false },
            { text: "शासनाध्यक्ष का चुनाव जनता द्वारा प्रत्यक्ष या अप्रत्यक्ष रूप से होता है", correct: true },
            { text: "केवल कुछ लोगों को वोट देने का अधिकार है", correct: false },
            { text: "भारत एक ब्रिटिश उपनिवेश है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतांत्रिक गणराज्य का अर्थ है कि भारत का प्रमुख (राष्ट्रपति) वंशानुगत नहीं होगा, बल्कि उसे एक निश्चित अवधि के लिए जनता द्वारा अप्रत्यक्ष रूप से चुना जाएगा।"
    },
    {
        question: "प्रश्न 6. भारत में सार्वभौमिक वयस्क मताधिकार की न्यूनतम आयु क्या है?",
        answers: shuffle([
            { text: "21 वर्ष", correct: false },
            { text: "25 वर्ष", correct: false },
            { text: "18 वर्ष", correct: true },
            { text: "20 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 61वें संविधान संशोधन अधिनियम, 1988 के द्वारा मतदान की आयु को 21 वर्ष से घटाकर 18 वर्ष कर दिया गया था।"
    },
    {
        question: "प्रश्न 7. भारत में स्वतंत्र और निष्पक्ष चुनाव कराने की जिम्मेदारी किस संस्था की है?",
        answers: shuffle([
            { text: "संसद", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "भारत का निर्वाचन आयोग", correct: true },
            { text: "प्रधानमंत्री कार्यालय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के अनुच्छेद 324 के तहत भारत का निर्वाचन आयोग देश में लोकसभा, राज्यसभा, राज्य विधानसभाओं, राष्ट्रपति और उपराष्ट्रपति के चुनावों का संचालन करता है।"
    },
    {
        question: "प्रश्न 8. निम्नलिखित में से कौन सा एक लोकतांत्रिक व्यवस्था का आवश्यक लक्षण नहीं है?",
        answers: shuffle([
            { text: "स्वतंत्र न्यायपालिका", correct: false },
            { text: "नियमित चुनाव", correct: false },
            { text: "एक दलीय प्रणाली", correct: true },
            { text: "कानून का शासन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक दलीय प्रणाली लोकतंत्र के विरुद्ध है क्योंकि यह नागरिकों को राजनीतिक विकल्प प्रदान नहीं करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लोकतंत्र में बहुदलीय प्रणाली होती है।"
    },
    {
        question: "प्रश्न 9. 'प्रेस की स्वतंत्रता' भारतीय संविधान के किस अनुच्छेद में निहित है?",
        answers: shuffle([
            { text: "अनुच्छेद 19(1)(a)", correct: true },
            { text: "अनुच्छेद 21", correct: false },
            { text: "अनुच्छेद 14", correct: false },
            { text: "अनुच्छेद 32", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि सीधे तौर पर उल्लेख नहीं है, सर्वोच्च न्यायालय ने माना है कि प्रेस की स्वतंत्रता, भाषण और अभिव्यक्ति की स्वतंत्रता के अधिकार (अनुच्छेद 19(1)(a)) का एक अभिन्न अंग है।"
    },
    {
        question: "प्रश्न 10. भारत में राजनीतिक दलों को मान्यता कौन प्रदान करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "संसद", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "भारत का निर्वाचन आयोग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का निर्वाचन आयोग पंजीकरण, चुनाव चिह्नों के आवंटन और राष्ट्रीय या राज्य स्तरीय दल के रूप में मान्यता देने के माध्यम से राजनीतिक दलों को नियंत्रित करता है।"
    },
    {
        question: "प्रश्न 11. 'राइट टू रिकॉल' (Right to Recall) का क्या अर्थ है?",
        answers: shuffle([
            { text: "चुनाव परिणामों को अस्वीकार करने का अधिकार", correct: false },
            { text: "निर्वाचित प्रतिनिधि को कार्यकाल पूरा होने से पहले वापस बुलाने का अधिकार", correct: true },
            { text: "किसी भी चुनाव में वोट न देने का अधिकार", correct: false },
            { text: "अपना प्रतिनिधि स्वयं चुनने का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राइट टू रिकॉल मतदाताओं को यह शक्ति देता है कि वे अपने निर्वाचित प्रतिनिधि से असंतुष्ट होने पर उसे कार्यकाल समाप्त होने से पहले ही पद से हटा सकें।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत में राष्ट्रीय स्तर पर लागू नहीं है।"
    },
    {
        question: "प्रश्न 12. लोकपाल और लोकायुक्त अधिनियम का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "चुनाव सुधार", correct: false },
            { text: "केंद्र और राज्य स्तर पर भ्रष्टाचार पर अंकुश लगाना", correct: true },
            { text: "केंद्र-राज्य संबंध सुधारना", correct: false },
            { text: "न्यायिक सुधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस अधिनियम का उद्देश्य सरकारी अधिकारियों और राजनेताओं के खिलाफ भ्रष्टाचार के आरोपों की जांच के लिए एक स्वतंत्र संस्था (लोकपाल और लोकायुक्त) की स्थापना करना है।"
    },
    {
        question: "प्रश्न 13. लोकतंत्र का 'चौथा स्तंभ' (Fourth Estate) किसे कहा जाता है?",
        answers: shuffle([
            { text: "न्यायपालिका", correct: false },
            { text: "नौकरशाही", correct: false },
            { text: "मीडिया या प्रेस", correct: true },
            { text: "राजनीतिक दल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मीडिया को लोकतंत्र का चौथा स्तंभ माना जाता है क्योंकि यह सूचना प्रसारित करने, जनमत बनाने और सरकार के कामकाज पर नजर रखने में महत्वपूर्ण भूमिका निभाता है।"
    },
    {
        question: "प्रश्न 14. भारत में पंचायती राज व्यवस्था किस लोकतांत्रिक सिद्धांत पर आधारित है?",
        answers: shuffle([
            { text: "शक्ति का केंद्रीकरण", correct: false },
            { text: "शक्ति का पृथक्करण", correct: false },
            { text: "सत्ता का विकेंद्रीकरण", correct: true },
            { text: "संसदीय संप्रभुता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंचायती राज व्यवस्था का उद्देश्य स्थानीय स्तर पर स्व-शासन को बढ़ावा देना है, जो सत्ता के विकेंद्रीकरण का एक उत्कृष्ट उदाहरण है।"
    },
    {
        question: "प्रश्न 15. 'सूचना का अधिकार' (RTI) अधिनियम किस वर्ष पारित किया गया था?",
        answers: shuffle([
            { text: "2002", correct: false },
            { text: "2005", correct: true },
            { text: "2009", correct: false },
            { text: "2013", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूचना का अधिकार अधिनियम, 2005 में पारित किया गया था, जो नागरिकों को सरकारी कामकाज में पारदर्शिता और जवाबदेही सुनिश्चित करने के लिए जानकारी प्राप्त करने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 16. दलबदल विरोधी कानून (Anti-Defection Law) संविधान की किस अनुसूची में वर्णित है?",
        answers: shuffle([
            { text: "आठवीं अनुसूची", correct: false },
            { text: "नौवीं अनुसूची", correct: false },
            { text: "दसवीं अनुसूची", correct: true },
            { text: "ग्यारहवीं अनुसूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 52वें संविधान संशोधन, 1985 द्वारा जोड़ी गई दसवीं अनुसूची में दलबदल के आधार पर सांसदों और विधायकों की अयोग्यता से संबंधित प्रावधान हैं।"
    },
    {
        question: "प्रश्न 17. एक लोकतांत्रिक सरकार की सबसे महत्वपूर्ण विशेषता क्या है?",
        answers: shuffle([
            { text: "यह शक्तिशाली होती है", correct: false },
            { text: "यह स्थायी होती है", correct: false },
            { text: "यह जनता के प्रति जवाबदेह होती है", correct: true },
            { text: "यह तीव्र निर्णय लेती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतंत्र में, सरकार जनता द्वारा चुनी जाती है और इसलिए वह अपने सभी कार्यों और निर्णयों के लिए सीधे जनता के प्रति उत्तरदायी और जवाबदेह होती है।"
    },
    {
        question: "प्रश्न 18. भारतीय लोकतंत्र के सामने एक प्रमुख चुनौती क्या है?",
        answers: shuffle([
            { text: "नियमित चुनाव", correct: false },
            { text: "धन और बाहुबल का प्रभाव", correct: true },
            { text: "स्वतंत्र प्रेस", correct: false },
            { text: "बहुदलीय प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुनावों में धन और बाहुबल का बढ़ता प्रयोग भारतीय लोकतंत्र के लिए एक गंभीर चुनौती है क्योंकि यह स्वतंत्र और निष्पक्ष चुनाव की प्रक्रिया को प्रभावित करता है।"
    },
    {
        question: "प्रश्न 19. ग्राम सभा का सदस्य कौन होता है?",
        answers: shuffle([
            { text: "गाँव के सभी निवासी", correct: false },
            { text: "गाँव के केवल पुरुष सदस्य", correct: false },
            { text: "पंचायत क्षेत्र की मतदाता सूची में पंजीकृत सभी वयस्क", correct: true },
            { text: "केवल सरपंच और पंच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्राम सभा में वे सभी वयस्क (18 वर्ष से अधिक) शामिल होते हैं जिनका नाम गाँव की मतदाता सूची में होता है, यह प्रत्यक्ष लोकतंत्र का एक उदाहरण है।"
    },
    {
        question: "प्रश्न 20. 'कानून का शासन' (Rule of Law) का क्या अर्थ है?",
        answers: shuffle([
            { text: "शासक का आदेश ही कानून है", correct: false },
            { text: "कानून सभी नागरिकों पर समान रूप से लागू होता है और कोई भी कानून से ऊपर नहीं है", correct: true },
            { text: "केवल अमीरों के लिए कानून है", correct: false },
            { text: "कानून बनाना संसद का एकमात्र अधिकार है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कानून के शासन का सिद्धांत यह सुनिश्चित करता है कि देश का शासन मनमाने ढंग से नहीं, बल्कि स्थापित कानूनों और प्रक्रियाओं के अनुसार चलता है और कानून की नजर में सब बराबर हैं।"
    },
    {
        question: "प्रश्न 21. इलेक्ट्रॉनिक वोटिंग मशीन (EVM) का प्रयोग भारत में पहली बार किस राज्य के चुनाव में किया गया था?",
        answers: shuffle([
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: true },
            { text: "गोवा", correct: false },
            { text: "दिल्ली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> EVM का पहली बार प्रयोग 1982 में केरल के पारुर विधानसभा क्षेत्र के उपचुनाव में सीमित मतदान केंद्रों पर किया गया था।"
    },
    {
        question: "प्रश्न 22. लोकसभा में विपक्ष के नेता का दर्जा प्राप्त करने के लिए किसी दल के पास कम से कम कितने प्रतिशत सीटें होनी चाहिए?",
        answers: shuffle([
            { text: "5%", correct: false },
            { text: "10%", correct: true },
            { text: "15%", correct: false },
            { text: "20%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विपक्ष के नेता का दर्जा पाने के लिए, किसी राजनीतिक दल को लोकसभा की कुल सीटों का कम से कम 10% (अर्थात 55 सीटें) जीतना आवश्यक है।"
    },
    {
        question: "प्रश्न 23. 'जनहित याचिका' (PIL) की अवधारणा किस देश से उत्पन्न हुई?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "भारत", correct: false },
            { text: "दक्षिण अफ्रीका", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनहित याचिका की अवधारणा 1960 के दशक में संयुक्त राज्य अमेरिका में शुरू हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में न्यायमूर्ति पी.एन. भगवती ने इसे लोकप्रिय बनाया।"
    },
    {
        question: "प्रश्न 24. एक मजबूत लोकतंत्र के लिए क्या आवश्यक है?",
        answers: shuffle([
            { text: "एक मजबूत नेता", correct: false },
            { text: "एक मजबूत सेना", correct: false },
            { text: "जागरूक और शिक्षित नागरिक", correct: true },
            { text: "एक ही धर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतंत्र की सफलता नागरिकों की जागरूकता, शिक्षा और राजनीतिक प्रक्रियाओं में उनकी सक्रिय भागीदारी पर निर्भर करती है।"
    },
    {
        question: "प्रश्न 25. 'NOTA' (None of the Above) विकल्प का उपयोग मतदाताओं को क्या अधिकार देता है?",
        answers: shuffle([
            { text: "चुनाव रद्द करने का", correct: false },
            { text: "चुनाव में खड़े किसी भी उम्मीदवार को पसंद न करने पर उसे अस्वीकार करने का", correct: true },
            { text: "दोबारा चुनाव की मांग करने का", correct: false },
            { text: "अपना उम्मीदवार खड़ा करने का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> NOTA मतदाताओं को यह विकल्प देता है कि यदि वे चुनाव लड़ रहे किसी भी उम्मीदवार को वोट नहीं देना चाहते हैं, तो वे अपनी असहमति दर्ज करा सकते हैं।"
    },
     {
        question: "प्रश्न 26. भारत में पहली बार आम चुनाव कब हुए थे?",
        answers: shuffle([
            { text: "1947-48", correct: false },
            { text: "1950-51", correct: false },
            { text: "1951-52", correct: true },
            { text: "1955-56", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वतंत्र भारत में पहले आम चुनाव अक्टूबर 1951 से फरवरी 1952 के बीच हुए थे, जिसमें भारतीय राष्ट्रीय कांग्रेस ने बहुमत हासिल किया था।"
    },
    {
        question: "प्रश्न 27. किस समिति ने भारत में चुनाव सुधारों पर अपनी रिपोर्ट प्रस्तुत की थी?",
        answers: shuffle([
            { text: "सरकारिया आयोग", correct: false },
            { text: "बलवंत राय मेहता समिति", correct: false },
            { text: "तारकुंडे समिति", correct: true },
            { text: "मंडल आयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जयप्रकाश नारायण द्वारा नियुक्त तारकुंडे समिति (1974-75) ने चुनाव सुधारों पर कई महत्वपूर्ण सिफारिशें की थीं, जैसे मतदान की आयु कम करना और चुनाव खर्चों का लेखा-जोखा।"
    },
    {
        question: "प्रश्न 28. लोकतंत्र में 'नागरिक समाज' (Civil Society) की क्या भूमिका है?",
        answers: shuffle([
            { text: "सरकार बनाना", correct: false },
            { text: "चुनाव लड़ना", correct: false },
            { text: "गैर-सरकारी संगठनों और संघों के माध्यम से नागरिकों के हितों का प्रतिनिधित्व करना", correct: true },
            { text: "कानून लागू करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागरिक समाज में गैर-सरकारी संगठन, सामाजिक समूह और अन्य स्वैच्छिक संघ शामिल होते हैं जो सरकार पर नजर रखते हैं और नागरिकों के अधिकारों और हितों की वकालत करते हैं।"
    },
    {
        question: "प्रश्न 29. भारत में राष्ट्रीय मतदाता दिवस कब मनाया जाता है?",
        answers: shuffle([
            { text: "26 जनवरी", correct: false },
            { text: "15 अगस्त", correct: false },
            { text: "25 जनवरी", correct: true },
            { text: "2 अक्टूबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत निर्वाचन आयोग की स्थापना 25 जनवरी 1950 को हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन को चिह्नित करने और मतदान के महत्व को बढ़ावा देने के लिए 2011 से हर साल 25 जनवरी को राष्ट्रीय मतदाता दिवस मनाया जाता है।"
    },
    {
        question: "प्रश्न 30. 'छाया मंत्रिमंडल' (Shadow Cabinet) किस प्रकार की शासन प्रणाली की एक विशेषता है?",
        answers: shuffle([
            { text: "अध्यक्षीय प्रणाली", correct: false },
            { text: "संसदीय प्रणाली", correct: true },
            { text: "राजशाही", correct: false },
            { text: "तानाशाही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> छाया मंत्रिमंडल संसदीय प्रणाली, विशेष रूप से ब्रिटिश प्रणाली की एक विशेषता है, जहाँ विपक्षी दल सरकार के मंत्रियों पर नजर रखने के लिए अपने 'छाया मंत्रियों' का एक दल बनाता है।"
    },
    {
        question: "प्रश्न 31. निम्नलिखित में से कौन सा प्रत्यक्ष लोकतंत्र का एक उपकरण है?",
        answers: shuffle([
            { text: "चुनाव", correct: false },
            { text: "जनमत संग्रह (Referendum)", correct: true },
            { text: "संसद", correct: false },
            { text: "राजनीतिक दल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनमत संग्रह एक ऐसी प्रक्रिया है जिसमें किसी कानून या नीति पर सीधे मतदाताओं से वोट कराया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रत्यक्ष लोकतंत्र का एक उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्विट्जरलैंड में इसका व्यापक उपयोग होता है।"
    },
    {
        question: "प्रश्न 32. लोकतांत्रिक सरकार का सबसे बुनियादी परिणाम क्या होना चाहिए?",
        answers: shuffle([
            { text: "आर्थिक विकास", correct: false },
            { text: "राष्ट्रीय सुरक्षा", correct: false },
            { text: "नागरिकों के प्रति जवाबदेही", correct: true },
            { text: "क्षेत्रीय विस्तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतंत्र का सबसे बुनियादी परिणाम यह है कि वह एक ऐसी सरकार का गठन करती है जो नागरिकों की जरूरतों और अपेक्षाओं के प्रति उत्तरदायी और जवाबदेह हो।"
    },
    {
        question: "प्रश्न 33. \"राजनीतिक समानता\" का क्या अर्थ है?",
        answers: shuffle([
            { text: "सभी के पास समान संपत्ति हो", correct: false },
            { text: "सभी नागरिकों को एक वोट का समान मूल्य प्राप्त हो", correct: true },
            { text: "सभी को सरकारी नौकरी मिले", correct: false },
            { text: "सभी एक ही राजनीतिक दल के सदस्य हों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजनीतिक समानता का अर्थ है कि देश के सभी वयस्क नागरिकों को जाति, धर्म, लिंग या शिक्षा के भेदभाव के बिना वोट देने और चुनाव लड़ने का समान अधिकार है।"
    },
    {
        question: "प्रश्न 34. गठबंधन सरकार (Coalition Government) का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक ही दल की सरकार", correct: false },
            { text: "जब कई दल मिलकर सरकार बनाते हैं", correct: true },
            { text: "सेना द्वारा संचालित सरकार", correct: false },
            { text: "राष्ट्रपति द्वारा नामित सरकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब किसी एक दल को चुनाव में स्पष्ट बहुमत नहीं मिलता है, तो कई राजनीतिक दल मिलकर सरकार बनाते हैं, जिसे गठबंधन सरकार कहा जाता है।"
    },
    {
        question: "प्रश्न 35. आदर्श आचार संहिता (Model Code of Conduct) कब लागू होती है?",
        answers: shuffle([
            { text: "चुनाव परिणाम घोषित होने के बाद", correct: false },
            { text: "चुनाव आयोग द्वारा चुनाव की तारीखों की घोषणा के साथ", correct: true },
            { text: "मतदान के दिन", correct: false },
            { text: "सरकार बनने के बाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आदर्श आचार संहिता चुनाव आयोग द्वारा चुनाव कार्यक्रम की घोषणा के तुरंत बाद लागू हो जाती है और चुनाव प्रक्रिया पूरी होने तक प्रभावी रहती है।"
    },
    {
        question: "प्रश्न 36. मुख्य निर्वाचन आयुक्त की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "भारत के मुख्य न्यायाधीश", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "लोकसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान के अनुच्छेद 324(2) के अनुसार, मुख्य निर्वाचन आयुक्त और अन्य निर्वाचन आयुक्तों की नियुक्ति भारत के राष्ट्रपति द्वारा की जाती है।"
    },
    {
        question: "प्रश्न 37. लोकतांत्रिक सुधारों का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "लोकतंत्र के सिद्धांतों को मजबूत करना", correct: true },
            { text: "चुनाव प्रक्रिया को जटिल बनाना", correct: false },
            { text: "सरकार को अधिक शक्ति देना", correct: false },
            { text: "राजनीतिक दलों पर प्रतिबंध लगाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतांत्रिक सुधारों का उद्देश्य लोकतंत्र की चुनौतियों का समाधान करना, नागरिकों की भागीदारी बढ़ाना और शासन को अधिक पारदर्शी, जवाबदेह और प्रभावी बनाना है।"
    },
    {
        question: "प्रश्न 38. 'एग्जिट पोल' (Exit Poll) क्या है?",
        answers: shuffle([
            { text: "मतदान से पहले का सर्वेक्षण", correct: false },
            { text: "मतदान केंद्रों से बाहर निकलते ही मतदाताओं से किया गया सर्वेक्षण", correct: true },
            { text: "चुनाव परिणामों की आधिकारिक घोषणा", correct: false },
            { text: "उम्मीदवारों की सूची", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एग्जिट पोल एक चुनावी सर्वेक्षण है जो मतदान करने के तुरंत बाद मतदाताओं से यह पूछकर किया जाता है कि उन्होंने किसे वोट दिया, ताकि परिणामों का अनुमान लगाया जा सके।"
    },
    {
        question: "प्रश्न 39. भारतीय लोकतंत्र में 'सामाजिक लोकतंत्र' से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "केवल सामाजिक मुद्दों पर ध्यान केंद्रित करना", correct: false },
            { text: "जाति, धर्म, लिंग के आधार पर असमानता को समाप्त करना", correct: true },
            { text: "सभी के लिए समान आर्थिक अवसर", correct: false },
            { text: "केवल समाजवादियों को सरकार बनाने का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. अंबेडकर के अनुसार, सामाजिक लोकतंत्र का अर्थ जीवन के उस तरीके से है जो स्वतंत्रता, समानता और बंधुत्व को सिद्धांतों के रूप में मान्यता देता है और सामाजिक असमानताओं को समाप्त करता है।"
    },
    {
        question: "प्रश्न 40. किसी विधेयक को 'धन विधेयक' (Money Bill) कौन प्रमाणित करता है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "वित्त मंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: true },
            { text: "राज्यसभा के सभापति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 110(3) के अनुसार, कोई विधेयक धन विधेयक है या नहीं, इस पर लोकसभा अध्यक्ष का निर्णय अंतिम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह लोकतंत्र में वित्तीय मामलों पर लोकसभा की सर्वोच्चता को दर्शाता है।"
    },
    {
        question: "प्रश्न 41. लोकतंत्र में विपक्ष की क्या भूमिका होती है?",
        answers: shuffle([
            { text: "सरकार की हर नीति का समर्थन करना", correct: false },
            { text: "सरकार की नीतियों की रचनात्मक आलोचना करना और एक वैकल्पिक सरकार प्रदान करना", correct: true },
            { text: "देश में अशांति फैलाना", correct: false },
            { text: "चुनाव प्रक्रिया का बहिष्कार करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्वस्थ लोकतंत्र में विपक्ष सरकार के कामकाज पर नजर रखता है, उसकी गलत नीतियों की आलोचना करता है और जनता के सामने एक वैकल्पिक कार्यक्रम प्रस्तुत करता है।"
    },
    {
        question: "प्रश्न 42. भारतीय संविधान का कौन सा भाग चुनाव से संबंधित है?",
        answers: shuffle([
            { text: "भाग X", correct: false },
            { text: "भाग XV", correct: true },
            { text: "भाग XVIII", correct: false },
            { text: "भाग XX", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का भाग XV (अनुच्छेद 324 से 329A) निर्वाचन से संबंधित है और इसमें निर्वाचन आयोग की स्थापना, संरचना और शक्तियों का वर्णन है।"
    },
    {
        question: "प्रश्न 43. 'फर्स्ट-पास्ट-द-पोस्ट' (First-Past-the-Post) प्रणाली क्या है?",
        answers: shuffle([
            { text: "जिसे 50% से अधिक वोट मिलते हैं, वह जीतता है", correct: false },
            { text: "जिसे अन्य सभी उम्मीदवारों से अधिक वोट मिलते हैं, वह जीतता है", correct: true },
            { text: "आनुपातिक प्रतिनिधित्व प्रणाली", correct: false },
            { text: "केवल दो उम्मीदवार चुनाव लड़ सकते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भारत में लोकसभा और विधानसभा चुनावों में उपयोग की जाने वाली एक चुनावी प्रणाली है, जिसमें जिस उम्मीदवार को अपने निर्वाचन क्षेत्र में सबसे अधिक वोट मिलते हैं, उसे विजेता घोषित किया जाता है, भले ही उसे कुल वोटों का बहुमत न मिला हो।"
    },
    {
        question: "प्रश्न 44. लोकतंत्र में असहमति और विरोध के अधिकार का स्रोत क्या है?",
        answers: shuffle([
            { text: "सरकार का आदेश", correct: false },
            { text: "पुलिस अधिनियम", correct: false },
            { text: "भाषण और अभिव्यक्ति की स्वतंत्रता का मौलिक अधिकार", correct: true },
            { text: "चुनाव आयोग के नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शांतिपूर्ण तरीके से असहमति व्यक्त करने और सरकार की नीतियों का विरोध करने का अधिकार अनुच्छेद 19 के तहत दिए गए भाषण और अभिव्यक्ति की स्वतंत्रता के मौलिक अधिकार का एक हिस्सा है।"
    },
    {
        question: "प्रश्न 45. 'संसदीय विशेषाधिकार' (Parliamentary Privileges) का उद्देश्य क्या है?",
        answers: shuffle([
            { text: "सांसदों को आम नागरिकों से श्रेष्ठ बनाना", correct: false },
            { text: "संसद और उसके सदस्यों को अपने कर्तव्यों का स्वतंत्र रूप से निर्वहन करने में सक्षम बनाना", correct: true },
            { text: "सांसदों को किसी भी कानूनी कार्रवाई से पूर्ण छूट देना", correct: false },
            { text: "विपक्ष को नियंत्रित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संसदीय विशेषाधिकारों का उद्देश्य यह सुनिश्चित करना है कि सांसद बिना किसी भय या बाहरी हस्तक्षेप के संसद में जनता का प्रतिनिधित्व कर सकें और अपने कर्तव्यों का प्रभावी ढंग से निर्वहन कर सकें।"
    },
    {
        question: "प्रश्न 46. दबाव समूह (Pressure Groups) लोकतंत्र में क्या भूमिका निभाते हैं?",
        answers: shuffle([
            { text: "वे चुनाव लड़ते हैं", correct: false },
            { text: "वे सरकार बनाते हैं", correct: false },
            { text: "वे अपने विशिष्ट हितों को बढ़ावा देने के लिए सरकार की नीतियों को प्रभावित करने का प्रयास करते हैं", correct: true },
            { text: "वे राजनीतिक दलों को वित्तीय सहायता नहीं देते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दबाव समूह औपचारिक रूप से सत्ता पर कब्जा करने की कोशिश नहीं करते, बल्कि लॉबिंग, प्रदर्शन और जनमत निर्माण के माध्यम से अपने सदस्यों के हितों की रक्षा के लिए सरकारी निर्णयों को प्रभावित करते हैं।"
    },
    {
        question: "प्रश्न 47. एक \"धर्मनिरपेक्ष राज्य\" का लोकतांत्रिक स्वरूप में क्या महत्व है?",
        answers: shuffle([
            { text: "राज्य केवल एक धर्म को बढ़ावा देता है", correct: false },
            { text: "राज्य सभी नागरिकों को धार्मिक स्वतंत्रता की गारंटी देता है और धर्म के आधार पर भेदभाव नहीं करता", correct: true },
            { text: "राज्य धर्म के मामलों में हस्तक्षेप करता है", correct: false },
            { text: "राज्य नास्तिकता को प्रोत्साहित करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक धर्मनिरपेक्ष लोकतंत्र में, राज्य का कोई आधिकारिक धर्म नहीं होता है और यह सभी धर्मों के प्रति तटस्थ और समान व्यवहार करता है, जिससे सभी नागरिकों को अपने धर्म का पालन करने की स्वतंत्रता मिलती है।"
    },
    {
        question: "प्रश्न 48. भारत में न्यायिक सक्रियता (Judicial Activism) ने लोकतंत्र को कैसे मजबूत किया है?",
        answers: shuffle([
            { text: "कानूनों को लागू करने में देरी करके", correct: false },
            { text: "सरकार के अधिकार को कम करके", correct: false },
            { text: "मानवाधिकारों की रक्षा और शासन में जवाबदेही सुनिश्चित करके", correct: true },
            { text: "चुनाव प्रक्रिया में हस्तक्षेप करके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जनहित याचिकाओं (PIL) जैसे उपकरणों के माध्यम से, न्यायपालिका ने मानवाधिकारों, पर्यावरण और भ्रष्टाचार जैसे मुद्दों पर महत्वपूर्ण निर्णय दिए हैं, जिससे कार्यपालिका और विधायिका को अधिक जवाबदेह बनाया गया है।"
    },
    {
        question: "प्रश्न 49. स्थानीय स्वशासन (Local Self-Government) को किस संविधान संशोधन द्वारा संवैधानिक दर्जा दिया गया?",
        answers: shuffle([
            { text: "42वां और 44वां संशोधन", correct: false },
            { text: "61वां संशोधन", correct: false },
            { text: "73वां और 74वां संशोधन", correct: true },
            { text: "86वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 73वें संशोधन (1992) ने पंचायतों को और 74वें संशोधन (1992) ने नगर पालिकाओं को संवैधानिक दर्जा प्रदान किया, जिससे भारत में लोकतंत्र की जड़ें जमीनी स्तर पर मजबूत हुईं।"
    },
    {
        question: "प्रश्न 50. \"विचार, अभिव्यक्ति, विश्वास, धर्म और उपासना की स्वतंत्रता\" का उल्लेख कहाँ है?",
        answers: shuffle([
            { text: "मौलिक कर्तव्यों में", correct: false },
            { text: "राज्य के नीति निदेशक तत्वों में", correct: false },
            { text: "संविधान की प्रस्तावना में", correct: true },
            { text: "सातवीं अनुसूची में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये पांच स्वतंत्रताएं भारतीय लोकतंत्र के मूल आदर्शों का हिस्सा हैं और इनका स्पष्ट उल्लेख संविधान की प्रस्तावना में किया गया है।"
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