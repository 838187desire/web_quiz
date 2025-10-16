const questions = [
    {
        topHeading: "संविधान के प्रारूप और संरचना पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "प्रश्न 1. संविधान सभा की प्रारूप समिति (Drafting Committee) का गठन कब किया गया था?",
        answers: shuffle([
            { text: "9 दिसंबर, 1946", correct: false },
            { text: "22 जनवरी, 1947", correct: false },
            { text: "15 अगस्त, 1947", correct: false },
            { text: "29 अगस्त, 1947", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का मसौदा तैयार करने के लिए सबसे महत्वपूर्ण समिति, प्रारूप समिति का गठन 29 अगस्त, 1947 को किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इस समिति को संविधान का अंतिम प्रारूप तैयार करने की जिम्मेदारी सौंपी गई थी।"
    },
    {
        question: "प्रश्न 2. प्रारूप समिति के अध्यक्ष कौन थे?",
        answers: shuffle([
            { text: "पं. जवाहरलाल नेहरू", correct: false },
            { text: "सरदार वल्लभभाई पटेल", correct: false },
            { text: "डॉ. बी. आर. अम्बेडकर", correct: true },
            { text: "डॉ. राजेंद्र प्रसाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. भीमराव अम्बेडकर को प्रारूप समिति का अध्यक्ष नियुक्त किया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> संविधान के निर्माण में उनकी केंद्रीय और महत्वपूर्ण भूमिका के कारण उन्हें 'भारतीय संविधान का जनक' या 'मुख्य वास्तुकार' भी कहा जाता है।"
    },
    {
        question: "प्रश्न 3. प्रारूप समिति में अध्यक्ष सहित कुल कितने सदस्य थे?",
        answers: shuffle([
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "9", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रारूप समिति में एक अध्यक्ष और छह अन्य सदस्य थे, जिससे कुल सदस्यों की संख्या सात थी।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सदस्य थे: डॉ. बी. आर. अम्बेडकर (अध्यक्ष), एन. गोपालस्वामी आयंगर, अल्लादी कृष्णास्वामी अय्यर, डॉ. के. एम. मुंशी, सैयद मोहम्मद सादुल्लाह, एन. माधव राव और टी. टी. कृष्णामाचारी।"
    },
    {
        question: "प्रश्न 4. भारतीय संविधान की प्रकृति (Nature) क्या है?",
        answers: shuffle([
            { text: "कठोर (Rigid)", correct: false },
            { text: "लचीला (Flexible)", correct: false },
            { text: "अंशतः कठोर और अंशतः लचीला", correct: true },
            { text: "पूर्णतः संघीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान को कठोरता और लचीलेपन का मिश्रण माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कुछ प्रावधानों में संशोधन करना आसान है (साधारण बहुमत से), जो इसे लचीला बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वहीं, कुछ अन्य प्रावधानों में संशोधन करना बहुत कठिन है (विशेष बहुमत और राज्यों के अनुसमर्थन से), जो इसे कठोर बनाता है।"
    },
    {
        question: "प्रश्न 5. भारतीय संविधान पर सबसे अधिक प्रभाव निम्नलिखित में से किसका माना जाता है?",
        answers: shuffle([
            { text: "ब्रिटेन का संविधान", correct: false },
            { text: "संयुक्त राज्य अमेरिका का संविधान", correct: false },
            { text: "भारत सरकार अधिनियम, 1935", correct: true },
            { text: "आयरलैंड का संविधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान का लगभग दो-तिहाई हिस्सा भारत सरकार अधिनियम, 1935 से लिया गया है या उससे प्रभावित है।<br><br><i class='fa-solid fa-angles-right icon'></i> संघीय व्यवस्था, न्यायपालिका, राज्यपाल का कार्यालय, आपातकालीन प्रावधान और लोक सेवा आयोग जैसे कई प्रशासनिक विवरण इसी अधिनियम से लिए गए हैं।"
    },
    {
        question: "प्रश्न 6. भारतीय संविधान में 'संसदीय शासन प्रणाली' (Parliamentary System) किस देश से प्रेरित है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ब्रिटेन", correct: true },
            { text: "कनाडा", correct: false },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत ने सरकार की संसदीय प्रणाली ब्रिटेन से अपनाई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रणाली में, कार्यपालिका अपनी नीतियों और कार्यों के लिए विधायिका के प्रति उत्तरदायी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें नाममात्र और वास्तविक कार्यकारी प्रमुख होते हैं (राष्ट्रपति और प्रधानमंत्री)।"
    },
    {
        question: "प्रश्न 7. भारतीय संविधान में 'मौलिक अधिकार' (Fundamental Rights) का विचार किस देश के संविधान से लिया गया है?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "कनाडा", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "रूस (सोवियत संघ)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागरिकों के मौलिक अधिकारों की अवधारणा संयुक्त राज्य अमेरिका के संविधान में उल्लिखित 'बिल ऑफ राइट्स' से प्रेरित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अतिरिक्त, न्यायपालिका की स्वतंत्रता, न्यायिक समीक्षा और राष्ट्रपति पर महाभियोग की प्रक्रिया भी अमेरिका से ली गई है।"
    },
    {
        question: "प्रश्न 8. भारत के संविधान की प्रस्तावना (Preamble) में प्रयुक्त 'हम भारत के लोग' (We, the People of India) वाक्यांश क्या दर्शाता है?",
        answers: shuffle([
            { text: "संविधान का निर्माण भारत की जनता द्वारा किया गया है", correct: false },
            { text: "संविधान की अंतिम संप्रभुता भारत की जनता में निहित है", correct: true },
            { text: "भारत एक लोकतांत्रिक देश है", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वाक्यांश इस तथ्य को रेखांकित करता है कि संविधान को किसी बाहरी शक्ति ने नहीं थोपा है, बल्कि इसे भारत के लोगों ने अपने प्रतिनिधियों के माध्यम से बनाया और अपनाया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दर्शाता है कि संप्रभुता अंततः भारत की जनता में निहित है।"
    },
    {
        question: "प्रश्न 9. मूल भारतीय संविधान में कितने भाग, अनुच्छेद और अनुसूचियाँ थीं?",
        answers: shuffle([
            { text: "22 भाग, 395 अनुच्छेद, 8 अनुसूचियाँ", correct: true },
            { text: "24 भाग, 448 अनुच्छेद, 12 अनुसूचियाँ", correct: false },
            { text: "22 भाग, 440 अनुच्छेद, 10 अनुसूचियाँ", correct: false },
            { text: "25 भाग, 470 अनुच्छेद, 12 अनुसूचियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26 नवंबर, 1949 को अपनाए गए मूल संविधान में 22 भाग, 395 अनुच्छेद और 8 अनुसूचियाँ थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> समय के साथ विभिन्न संशोधनों के माध्यम से इनकी संख्या में परिवर्तन हुआ है।"
    },
    {
        question: "प्रश्न 10. भारतीय संविधान की कौन सी विशेषता 'एकात्मक' (Unitary) प्रवृत्ति को दर्शाती है?",
        answers: shuffle([
            { text: "शक्तियों का विभाजन", correct: false },
            { text: "लिखित संविधान", correct: false },
            { text: "एकल नागरिकता", correct: true },
            { text: "स्वतंत्र न्यायपालिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में, राज्यों की अपनी अलग नागरिकता नहीं होती; सभी नागरिक केवल भारत के नागरिक होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'एक राष्ट्र' की भावना को मजबूत करता है और एक शक्तिशाली केंद्र के साथ एकात्मक प्रणाली की ओर झुकाव दिखाता है, जो संघीय देशों (जैसे अमेरिका) के विपरीत है जहाँ दोहरी नागरिकता होती है।"
    },
    {
        question: "प्रश्न 11. भारतीय संघवाद को \"सहकारी संघवाद\" (Cooperative Federalism) किसने कहा था?",
        answers: shuffle([
            { text: "बी. आर. अम्बेडकर", correct: false },
            { text: "के. सी. व्हेयर", correct: false },
            { text: "ग्रैनविले ऑस्टिन", correct: true },
            { text: "आइवर जेनिंग्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेरिकी संविधान विशेषज्ञ ग्रैनविले ऑस्टिन ने भारतीय संघवाद को \"सहकारी संघवाद\" के रूप में वर्णित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि केंद्र और राज्य एक-दूसरे से स्वतंत्र होकर नहीं, बल्कि आपसी सहयोग और समन्वय से काम करते हैं।"
    },
    {
        question: "प्रश्न 12. भारतीय संविधान की प्रस्तावना में 'समाजवादी' और 'पंथनिरपेक्ष' शब्द किस संशोधन द्वारा जोड़े गए?",
        answers: shuffle([
            { text: "44वां संशोधन", correct: false },
            { text: "42वां संशोधन", correct: true },
            { text: "24वां संशोधन", correct: false },
            { text: "61वां संशोधन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1976 में हुए 42वें संविधान संशोधन अधिनियम के माध्यम से प्रस्तावना में तीन नए शब्द जोड़े गए - समाजवादी (Socialist), पंथनिरपेक्ष (Secular), और अखंडता (Integrity)।"
    },
    {
        question: "प्रश्न 13. भारत के संविधान में 'राज्य के नीति निदेशक तत्व' (Directive Principles of State Policy) की अवधारणा किस देश से अपनाई गई है?",
        answers: shuffle([
            { text: "जर्मनी", correct: false },
            { text: "आयरलैंड", correct: true },
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राज्य के नीति निदेशक तत्वों का विचार आयरलैंड के संविधान से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये सिद्धांत देश में सामाजिक और आर्थिक लोकतंत्र स्थापित करने के लिए राज्य के लिए मार्गदर्शक के रूप में कार्य करते हैं।"
    },
    {
        question: "प्रश्न 14. भारतीय संविधान की 'समवर्ती सूची' (Concurrent List) का प्रावधान कहाँ से लिया गया है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "अमेरिका", correct: false },
            { text: "जर्मनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समवर्ती सूची की अवधारणा ऑस्ट्रेलिया के संविधान से ली गई है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस सूची में वे विषय शामिल हैं जिन पर केंद्र और राज्य दोनों सरकारें कानून बना सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, टकराव की स्थिति में केंद्रीय कानून मान्य होता है।"
    },
    {
        question: "प्रश्न 15. संविधान के प्रारूप पर कुल कितने दिन बहस हुई थी?",
        answers: shuffle([
            { text: "114 दिन", correct: true },
            { text: "120 दिन", correct: false },
            { text: "141 दिन", correct: false },
            { text: "165 दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा ने संविधान के मसौदे पर गहन विचार-विमर्श किया।<br><br><i class='fa-solid fa-angles-right icon'></i> कुल मिलाकर, संविधान के प्रारूप पर 114 दिनों तक बहस चली थी।"
    },
    {
        question: "प्रश्न 16. भारतीय संविधान की संरचना के बारे में \"भारतीय संविधान अधिक कठोर तथा अधिक लचीले के मध्य एक अच्छा संतुलन स्थापित करता है\" - यह कथन किसका है?",
        answers: shuffle([
            { text: "डॉ. बी. आर. अम्बेडकर", correct: false },
            { text: "पं. जवाहरलाल नेहरू", correct: false },
            { text: "के. सी. व्हेयर", correct: true },
            { text: "एलेग्जेंड्रोविच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रसिद्ध ब्रिटिश संविधानवेत्ता के. सी. व्हेयर ने भारतीय संविधान की संशोधन प्रक्रिया का विश्लेषण करते हुए यह टिप्पणी की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने भारतीय संविधान को \"अर्ध-संघीय\" (Quasi-federal) भी कहा था।"
    },
    {
        question: "प्रश्न 17. भारतीय संविधान में 'मौलिक कर्तव्य' (Fundamental Duties) का विचार किस देश से लिया गया है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "फ्रांस", correct: false },
            { text: "जापान", correct: false },
            { text: "रूस (पूर्व सोवियत संघ)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौलिक कर्तव्य मूल संविधान का हिस्सा नहीं थे।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें 1976 में 42वें संशोधन द्वारा सरदार स्वर्ण सिंह समिति की सिफारिशों पर पूर्व सोवियत संघ के संविधान से प्रेरित होकर जोड़ा गया था।"
    },
    {
        question: "प्रश्न 18. भारतीय संविधान की प्रस्तावना को 'संविधान की राजनीतिक कुंडली' (Political Horoscope) किसने कहा था?",
        answers: shuffle([
            { text: "डॉ. बी. आर. अम्बेडकर", correct: false },
            { text: "एन. ए. पालकीवाला", correct: false },
            { text: "के. एम. मुंशी", correct: true },
            { text: "अर्नेस्ट बार्कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कन्हैयालाल माणिकलाल मुंशी, जो प्रारूप समिति के एक सदस्य थे, ने प्रस्तावना को \"हमारी संप्रभु, लोकतांत्रिक गणराज्य की राजनीतिक कुंडली\" के रूप में वर्णित किया।"
    },
    {
        question: "प्रश्न 19. संविधान की आठवीं अनुसूची का संबंध किससे है?",
        answers: shuffle([
            { text: "राज्यों के नाम से", correct: false },
            { text: "महत्वपूर्ण पदाधिकारियों के वेतन से", correct: false },
            { text: "मान्यता प्राप्त भाषाओं से", correct: true },
            { text: "दलबदल कानून से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की आठवीं अनुसूची में भारत गणराज्य की आधिकारिक रूप से मान्यता प्राप्त भाषाओं को सूचीबद्ध किया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> वर्तमान में इस सूची में 22 भाषाएँ शामिल हैं।"
    },
    {
        question: "प्रश्न 20. संविधान में 'आपातकालीन उपबंध' (Emergency Provisions) किस देश के संविधान से लिए गए हैं?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "जर्मनी का वाइमर संविधान", correct: true },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "जापान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के संविधान में आपातकाल के दौरान राष्ट्रपति की शक्तियाँ और मौलिक अधिकारों के निलंबन से संबंधित प्रावधान जर्मनी के वाइमर संविधान से प्रेरित हैं।"
    },
    {
        question: "प्रश्न 21. संविधान का पहला प्रारूप किसने तैयार किया था?",
        answers: shuffle([
            { text: "डॉ. बी. आर. अम्बेडकर ने", correct: false },
            { text: "प्रारूप समिति ने", correct: false },
            { text: "बी. एन. राव ने", correct: true },
            { text: "पं. जवाहरलाल नेहरू ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान सभा के संवैधानिक सलाहकार, सर बी. एन. राव ने विभिन्न देशों के संविधानों का अध्ययन करके संविधान का पहला कच्चा प्रारूप तैयार किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी प्रारूप पर विचार-विमर्श करने और उसे परिष्कृत करने के लिए प्रारूप समिति का गठन किया गया था।"
    },
    {
        question: "प्रश्न 22. \"भारत राज्यों का एक संघ (Union of States) है,\" यह संविधान के किस अनुच्छेद में घोषित है?",
        answers: shuffle([
            { text: "अनुच्छेद 1", correct: true },
            { text: "अनुच्छेद 2", correct: false },
            { text: "अनुच्छेद 3", correct: false },
            { text: "अनुच्छेद 4", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का अनुच्छेद 1(1) घोषित करता है, \"इंडिया, अर्थात् भारत, राज्यों का एक संघ होगा।\"<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'संघ' शब्द का प्रयोग यह स्पष्ट करता है कि भारतीय संघ राज्यों के बीच किसी समझौते का परिणाम नहीं है और किसी भी राज्य को संघ से अलग होने का अधिकार नहीं है।"
    },
    {
        question: "प्रश्न 23. भारतीय संविधान का कौन सा भाग 'संविधान की आत्मा' कहलाता है?",
        answers: shuffle([
            { text: "मौलिक अधिकार", correct: false },
            { text: "राज्य के नीति निदेशक तत्व", correct: false },
            { text: "उद्देशिका (प्रस्तावना)", correct: true },
            { text: "संवैधानिक उपचारों का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सामान्य तौर पर, प्रस्तावना को संविधान के दर्शन, आदर्शों और उद्देश्यों को समाहित करने के कारण 'संविधान की आत्मा' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, डॉ. अम्बेडकर ने अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) को 'संविधान का हृदय और आत्मा' कहा था।"
    },
    {
        question: "प्रश्न 24. भारतीय संविधान की दसवीं अनुसूची किससे संबंधित है?",
        answers: shuffle([
            { text: "पंचायती राज से", correct: false },
            { text: "नगरपालिकाओं से", correct: false },
            { text: "दलबदल विरोधी कानून से", correct: true },
            { text: "भूमि सुधार से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दसवीं अनुसूची को 1985 में 52वें संविधान संशोधन के माध्यम से जोड़ा गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें सांसदों और विधायकों द्वारा एक पार्टी से दूसरी पार्टी में दलबदल को रोकने के लिए प्रावधान किए गए हैं।"
    },
    {
        question: "प्रश्न 25. भारतीय संविधान में 'विधि द्वारा स्थापित प्रक्रिया' (Procedure established by Law) की अवधारणा किस देश से ली गई है?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "अमेरिका", correct: false },
            { text: "जापान", correct: true },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 21 में उल्लिखित 'विधि द्वारा स्थापित प्रक्रिया' का वाक्यांश जापान के संविधान से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका अर्थ है कि किसी व्यक्ति को जीवन और व्यक्तिगत स्वतंत्रता से केवल कानून द्वारा निर्धारित प्रक्रिया के अनुसार ही वंचित किया जा सकता है।"
    },
    {
        question: "प्रश्न 26. भारत एक 'गणराज्य' (Republic) है, इसका मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "यहाँ संसदीय शासन है", correct: false },
            { text: "यहाँ वयस्क मताधिकार है", correct: false },
            { text: "यहाँ राज्य का प्रमुख (राष्ट्रपति) वंशानुगत नहीं होता", correct: true },
            { text: "यहाँ एक लिखित संविधान है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणराज्य का अर्थ है एक ऐसी शासन प्रणाली जिसमें राष्ट्र का प्रमुख राजा या रानी की तरह वंशानुगत न होकर, जनता द्वारा प्रत्यक्ष या अप्रत्यक्ष रूप से एक निश्चित अवधि के लिए चुना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत के राष्ट्रपति का चुनाव अप्रत्यक्ष रूप से होता है।"
    },
    {
        question: "प्रश्न 27. संविधान की प्रस्तावना में कितने प्रकार के 'न्याय' का उल्लेख है?",
        answers: shuffle([
            { text: "एक (राजनीतिक)", correct: false },
            { text: "दो (आर्थिक और राजनीतिक)", correct: false },
            { text: "तीन (सामाजिक, आर्थिक और राजनीतिक)", correct: true },
            { text: "चार (सामाजिक, आर्थिक, राजनीतिक और धार्मिक)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान की प्रस्तावना अपने सभी नागरिकों के लिए तीन प्रकार के न्याय को सुरक्षित करने का संकल्प लेती है: सामाजिक न्याय, आर्थिक न्याय और राजनीतिक न्याय।"
    },
    {
        question: "प्रश्न 28. निम्नलिखित में से कौन सी भारतीय संविधान की संघीय (Federal) विशेषता नहीं है?",
        answers: shuffle([
            { text: "शक्तियों का वितरण", correct: false },
            { text: "लिखित संविधान", correct: false },
            { text: "संविधान की सर्वोच्चता", correct: false },
            { text: "अखिल भारतीय सेवाएं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अखिल भारतीय सेवाएं (IAS, IPS, IFS) एकात्मक प्रणाली की विशेषता हैं क्योंकि इनकी भर्ती और प्रशिक्षण केंद्र सरकार द्वारा किया जाता है, लेकिन वे केंद्र और राज्य दोनों सरकारों के अधीन सेवा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह केंद्र को राज्यों के प्रशासन पर महत्वपूर्ण नियंत्रण प्रदान करता है।"
    },
    {
        question: "प्रश्न 29. संविधान सभा द्वारा प्रारूप संविधान का अंतिम वाचन (Third Reading) कब समाप्त हुआ?",
        answers: shuffle([
            { text: "17 अक्टूबर, 1949", correct: false },
            { text: "14 नवंबर, 1949", correct: false },
            { text: "26 नवंबर, 1949", correct: true },
            { text: "24 जनवरी, 1950", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के मसौदे पर तीसरा और अंतिम वाचन 14 नवंबर, 1949 को शुरू हुआ और 26 नवंबर, 1949 को समाप्त हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन डॉ. अम्बेडकर द्वारा पेश किए गए प्रस्ताव, \"The Constitution as settled by the Assembly be passed,\" को पारित कर दिया गया और संविधान को अंगीकृत किया गया।"
    },
    {
        question: "प्रश्न 30. भारतीय संविधान के किस भाग में नागरिकता का उल्लेख है?",
        answers: shuffle([
            { text: "भाग I", correct: false },
            { text: "भाग II", correct: true },
            { text: "भाग III", correct: false },
            { text: "भाग IV", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का भाग II (अनुच्छेद 5 से 11) भारत की नागरिकता से संबंधित प्रावधानों का वर्णन करता है।"
    },
    {
        question: "प्रश्न 31. विश्व का सबसे लंबा लिखित संविधान किस देश का है?",
        answers: shuffle([
            { text: "अमेरिका", correct: false },
            { text: "ब्रिटेन", correct: false },
            { text: "भारत", correct: true },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत का संविधान अपनी व्यापकता, विस्तृत प्रावधानों और केंद्र तथा राज्यों दोनों के लिए एकल संविधान होने के कारण दुनिया का सबसे लंबा लिखित संविधान है।"
    },
    {
        question: "प्रश्न 32. भारतीय संविधान में संशोधन की प्रक्रिया का उल्लेख किस अनुच्छेद में है?",
        answers: shuffle([
            { text: "अनुच्छेद 352", correct: false },
            { text: "अनुच्छेद 360", correct: false },
            { text: "अनुच्छेद 368", correct: true },
            { text: "अनुच्छेद 370", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के भाग XX का एकमात्र अनुच्छेद 368, संसद को संविधान और इसकी प्रक्रियाओं में संशोधन करने की शक्तियाँ प्रदान करता है।"
    },
    {
        question: "प्रश्न 33. भारत की संघात्मक व्यवस्था किस देश से संबंधित है?",
        answers: shuffle([
            { text: "कनाडा", correct: true },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "ब्रिटेन", correct: false },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संघीय मॉडल कनाडा के मॉडल पर आधारित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें एक बहुत शक्तिशाली केंद्र, अवशिष्ट शक्तियों का केंद्र में निहित होना और केंद्र द्वारा राज्यपालों की नियुक्ति जैसी विशेषताएं हैं, जो इसे कनाडाई प्रणाली के करीब लाती हैं।"
    },
    {
        question: "प्रश्न 34. भारतीय संविधान की ग्यारहवीं अनुसूची किससे संबंधित है?",
        answers: shuffle([
            { text: "नगरपालिकाओं की शक्तियों से", correct: false },
            { text: "पंचायतों की शक्तियों, अधिकार और जिम्मेदारियों से", correct: true },
            { text: "केंद्र-राज्य संबंधों से", correct: false },
            { text: "शपथ और प्रतिज्ञान के प्रारूप से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्यारहवीं अनुसूची को 73वें संविधान संशोधन अधिनियम, 1992 द्वारा जोड़ा गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें 29 विषय हैं जिन पर पंचायतों को कानून बनाने और प्रशासन करने की शक्ति दी गई है।"
    },
    {
        question: "प्रश्न 35. संविधान की प्रस्तावना में वर्णित 'बंधुत्व' (Fraternity) का क्या अर्थ है?",
        answers: shuffle([
            { text: "मित्रता का भाव", correct: false },
            { text: "राज्य के प्रति प्रेम", correct: false },
            { text: "भाईचारे की भावना", correct: true },
            { text: "एकता और अखंडता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्तावना में बंधुत्व का अर्थ सभी भारतीय नागरिकों के बीच भाईचारे की एक आम भावना को बढ़ावा देना है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एकल नागरिकता की प्रणाली द्वारा भी प्रोत्साहित होता है।"
    },
    {
        question: "प्रश्न 36. संविधान के किस भाग में पंचायती राज व्यवस्था संबंधी प्रावधान दिए गए हैं?",
        answers: shuffle([
            { text: "भाग IX", correct: true },
            { text: "भाग IX-A", correct: false },
            { text: "भाग X", correct: false },
            { text: "भाग XI", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 73वें संशोधन अधिनियम, 1992 द्वारा एक नया भाग IX जोड़ा गया, जिसमें अनुच्छेद 243 से 243-O तक पंचायती राज संस्थाओं से संबंधित प्रावधान हैं।"
    },
    {
        question: "प्रश्न 37. संविधान की छठी अनुसूची इनमें से किस राज्य में लागू नहीं होती है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: false },
            { text: "त्रिपुरा", correct: false },
            { text: "मणिपुर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की छठी अनुसूची चार उत्तर-पूर्वी राज्यों - असम, मेघालय, त्रिपुरा और मिजोरम - के जनजातीय क्षेत्रों के प्रशासन के लिए विशेष प्रावधान करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> मणिपुर इस सूची में शामिल नहीं है।"
    },
    {
        question: "प्रश्न 38. संविधान के प्रारूप का प्रथम वाचन (First Reading) कब हुआ था?",
        answers: shuffle([
            { text: "4 नवंबर, 1948", correct: true },
            { text: "15 नवंबर, 1948", correct: false },
            { text: "17 अक्टूबर, 1949", correct: false },
            { text: "14 नवंबर, 1949", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. बी.आर. अम्बेडकर ने 4 नवंबर, 1948 को संविधान का अंतिम प्रारूप सभा में पेश किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस दिन संविधान का पहला वाचन हुआ और पांच दिनों तक इस पर सामान्य चर्चा चली।"
    },
    {
        question: "प्रश्न 39. भारतीय संविधान के अंतर्गत 'अवशिष्ट शक्तियों' (Residuary Powers) का क्या अर्थ है?",
        answers: shuffle([
            { text: "वे शक्तियाँ जो राज्य सूची में हैं", correct: false },
            { text: "वे शक्तियाँ जो संघ सूची में हैं", correct: false },
            { text: "वे शक्तियाँ जो तीनों सूचियों (संघ, राज्य, समवर्ती) में उल्लिखित नहीं हैं", correct: true },
            { text: "अंतर्राष्ट्रीय मामलों से संबंधित शक्तियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 248 के अनुसार, ऐसे किसी भी विषय पर कानून बनाने की शक्ति जो राज्य या समवर्ती सूची में नहीं है, संसद में निहित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अवशिष्ट शक्तियाँ कहलाती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रावधान कनाडा से लिया गया है।"
    },
    {
        question: "प्रश्न 40. \"संविधान की प्रस्तावना हमारे दीर्घकालिक सपनों का विचार है।\" - यह कथन किसका है?",
        answers: shuffle([
            { text: "डॉ. बी.आर. अम्बेडकर", correct: false },
            { text: "पं. जवाहरलाल नेहरू", correct: false },
            { text: "सर अल्लादी कृष्णास्वामी अय्यर", correct: true },
            { text: "के.एम. मुंशी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सर अल्लादी कृष्णास्वामी अय्यर, जो प्रारूप समिति के एक प्रमुख सदस्य थे, ने प्रस्तावना के महत्व को दर्शाते हुए यह टिप्पणी की थी।"
    },
    {
        question: "प्रश्न 41. भारतीय संविधान में मूल रूप से कितने मौलिक अधिकार प्रदान किए गए थे?",
        answers: shuffle([
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
            { text: "5", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मूल संविधान ने नागरिकों को सात मौलिक अधिकार प्रदान किए थे।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, 44वें संविधान संशोधन अधिनियम, 1978 द्वारा 'संपत्ति के अधिकार' को मौलिक अधिकारों की सूची से हटाकर अनुच्छेद 300-A के तहत एक कानूनी अधिकार बना दिया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> अब 6 मौलिक अधिकार हैं।"
    },
    {
        question: "प्रश्न 42. संविधान के किस भाग में संघ और राज्यों के बीच संबंध का उल्लेख है?",
        answers: shuffle([
            { text: "भाग X", correct: false },
            { text: "भाग XI", correct: true },
            { text: "भाग XII", correct: false },
            { text: "भाग XIII", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का भाग XI केंद्र और राज्यों के बीच विधायी और प्रशासनिक संबंधों का विस्तृत वर्णन करता है।"
    },
    {
        question: "प्रश्न 43. भारतीय संविधान का प्रारूप किस भाषा में तैयार किया गया था?",
        answers: shuffle([
            { text: "केवल हिंदी में", correct: false },
            { text: "केवल अंग्रेजी में", correct: true },
            { text: "हिंदी और अंग्रेजी दोनों में", correct: false },
            { text: "संस्कृत में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का मूल प्रारूप और उस पर हुई अधिकांश बहसें अंग्रेजी भाषा में थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में, इसका एक आधिकारिक हिंदी अनुवाद भी तैयार किया गया।"
    },
    {
        question: "प्रश्न 44. संविधान की प्रस्तावना में उल्लिखित 'स्वतंत्रता, समता और बंधुता' के आदर्श किस देश की क्रांति से प्रेरित हैं?",
        answers: shuffle([
            { text: "रूस की क्रांति", correct: false },
            { text: "अमेरिकी क्रांति", correct: false },
            { text: "फ्रांस की क्रांति", correct: true },
            { text: "इंग्लैंड की गौरवपूर्ण क्रांति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वतंत्रता (Liberty), समता (Equality) और बंधुता (Fraternity) के आदर्श 1789 की फ्रांसीसी क्रांति के नारे थे, जिन्हें भारतीय संविधान की प्रस्तावना में अपनाया गया है।"
    },
    {
        question: "प्रश्न 45. भारत के मूल संविधान का प्रकाशन कहाँ से किया गया था?",
        answers: shuffle([
            { text: "दिल्ली", correct: false },
            { text: "कोलकाता", correct: false },
            { text: "मुंबई", correct: false },
            { text: "देहरादून", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के मूल संविधान की 1,000 प्रतियाँ सर्वे ऑफ इंडिया प्रेस, देहरादून में फोटोलिथोग्राफिक तकनीक द्वारा प्रकाशित की गई थीं।"
    },
    {
        question: "प्रश्न 46. भारतीय संविधान की मूल प्रतियों को किसने अपनी चित्रकारी से सजाया था?",
        answers: shuffle([
            { text: "नंदलाल बोस", correct: true },
            { text: "अवनींद्रनाथ टैगोर", correct: false },
            { text: "जैमिनी रॉय", correct: false },
            { text: "एम.एफ. हुसैन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शांतिनिकेतन के प्रसिद्ध कलाकार नंदलाल बोस और उनके शिष्यों ने संविधान की मूल हस्तलिखित प्रतियों को भारत के समृद्ध इतिहास और संस्कृति को दर्शाने वाली सुंदर कलाकृतियों से सजाया था।"
    },
    {
        question: "प्रश्न 47. संविधान सभा ने संविधान के प्रारूप को अंतिम रूप से कब पारित किया?",
        answers: shuffle([
            { text: "15 अगस्त, 1947", correct: false },
            { text: "30 जनवरी, 1948", correct: false },
            { text: "26 नवंबर, 1949", correct: true },
            { text: "26 जनवरी, 1950", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26 नवंबर, 1949 को संविधान सभा ने संविधान को अंगीकृत, अधिनियमित और आत्मार्पित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन को अब 'संविधान दिवस' के रूप में मनाया जाता है।"
    },
    {
        question: "प्रश्न 48. संविधान के भाग I का संबंध किससे है?",
        answers: shuffle([
            { text: "नागरिकता", correct: false },
            { text: "मौलिक अधिकार", correct: false },
            { text: "संघ और उसका राज्यक्षेत्र", correct: true },
            { text: "राज्य के नीति निदेशक तत्व", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का भाग I (अनुच्छेद 1 से 4) भारत को \"राज्यों के संघ\" के रूप में परिभाषित करता है और इसके क्षेत्र, नए राज्यों के गठन और मौजूदा राज्यों के क्षेत्रों, सीमाओं या नामों में परिवर्तन से संबंधित है।"
    },
    {
        question: "प्रश्न 49. 'सरकार का वेस्टमिंस्टर मॉडल' किस प्रकार की शासन प्रणाली को संदर्भित करता है?",
        answers: shuffle([
            { text: "अध्यक्षीय प्रणाली", correct: false },
            { text: "संसदीय प्रणाली", correct: true },
            { text: "राजतंत्रीय प्रणाली", correct: false },
            { text: "अर्ध-अध्यक्षीय प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वेस्टमिंस्टर मॉडल' ब्रिटेन की संसदीय प्रणाली का पर्याय है, क्योंकि ब्रिटिश संसद वेस्टमिंस्टर के पैलेस में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत ने इसी मॉडल को अपनाया है, जो विधायिका के प्रति कार्यपालिका की सामूहिक जिम्मेदारी पर आधारित है।"
    },
    {
        question: "प्रश्न 50. भारतीय संविधान की प्रस्तावना किस शब्द से शुरू होती है?",
        answers: shuffle([
            { text: "हम, भारत के नागरिक", correct: false },
            { text: "हम, भारत के लोग", correct: true },
            { text: "ईश्वर के नाम पर", correct: false },
            { text: "संप्रभु, समाजवादी, गणराज्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्तावना \"हम, भारत के लोग...\" (WE, THE PEOPLE OF INDIA...) शब्दों से शुरू होती है, जो यह स्थापित करता है कि संविधान की शक्ति का अंतिम स्रोत भारत की जनता है।"
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