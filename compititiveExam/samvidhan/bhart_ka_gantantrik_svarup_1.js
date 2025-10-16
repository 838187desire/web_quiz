const questions = [
    {
        topHeading: "भारत के गणतांत्रिक स्वरूप पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'गणतंत्र' (Republic) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "शासक का वंशानुगत होना", correct: false },
            { text: "राष्ट्र का प्रमुख निर्वाचित होता है", correct: true },
            { text: "लोकतंत्र की अनुपस्थिति", correct: false },
            { text: "संसद का सर्वोच्च होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र उस शासन प्रणाली को कहते हैं, जहाँ राष्ट्र का प्रमुख (जैसे राष्ट्रपति) वंशानुगत न होकर प्रत्यक्ष या अप्रत्यक्ष रूप से जनता द्वारा एक निश्चित अवधि के लिए चुना जाता है।"
    },
    {
        question: "प्रश्न 2. भारत को गणतंत्र क्यों कहा जाता है?",
        answers: shuffle([
            { text: "क्योंकि यहाँ संसदीय शासन प्रणाली है", correct: false },
            { text: "क्योंकि यहाँ वयस्क मताधिकार है", correct: false },
            { text: "क्योंकि भारत का राष्ट्राध्यक्ष (राष्ट्रपति) एक निर्वाचित पद है", correct: true },
            { text: "क्योंकि यहाँ एक लिखित संविधान है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में राष्ट्र के प्रमुख, यानी राष्ट्रपति, का चुनाव होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> उनका पद वंशानुगत नहीं है, जैसा कि ब्रिटेन में राजा या रानी का होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण भारत एक गणतंत्र है।"
    },
    {
        question: "प्रश्न 3. भारत किस तिथि को एक संपूर्ण गणराज्य बना?",
        answers: shuffle([
            { text: "15 अगस्त, 1947", correct: false },
            { text: "26 नवंबर, 1949", correct: false },
            { text: "26 जनवरी, 1950", correct: true },
            { text: "14 अगस्त, 1947", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसी दिन भारत का संविधान पूरी तरह से लागू हुआ और भारत ने ब्रिटिश डोमिनियन की स्थिति को समाप्त कर खुद को एक संपूर्ण गणराज्य घोषित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> डॉ. राजेंद्र प्रसाद ने इसी दिन भारत के पहले राष्ट्रपति के रूप में शपथ ली।"
    },
    {
        question: "प्रश्न 4. भारतीय संविधान की प्रस्तावना में 'गणराज्य' शब्द किन अन्य शब्दों के साथ प्रयोग हुआ है?",
        answers: shuffle([
            { text: "समाजवादी, पंथनिरपेक्ष, लोकतांत्रिक", correct: false },
            { text: "संप्रभु, समाजवादी, पंथनिरपेक्ष, लोकतांत्रिक", correct: true },
            { text: "संप्रभु, संघीय, लोकतांत्रिक", correct: false },
            { text: "लोकतांत्रिक, संघीय, समाजवादी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्तावना भारत को एक \"संपूर्ण प्रभुत्व-संपन्न, समाजवादी, पंथनिरपेक्ष, लोकतांत्रिक गणराज्य\" बनाने की घोषणा करती है।"
    },
    {
        question: "प्रश्न 5. भारत के राष्ट्रपति का चुनाव किस पद्धति से होता है?",
        answers: shuffle([
            { text: "प्रत्यक्ष चुनाव (जनता द्वारा)", correct: false },
            { text: "मनोनयन (प्रधानमंत्री द्वारा)", correct: false },
            { text: "आनुपातिक प्रतिनिधित्व प्रणाली के अनुसार एकल संक्रमणीय मत द्वारा", correct: true },
            { text: "सर्वोच्च न्यायालय के न्यायाधीशों द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के राष्ट्रपति का चुनाव एक निर्वाचक मंडल द्वारा अप्रत्यक्ष रूप से किया जाता है, जिसमें संसद के दोनों सदनों और राज्यों की विधानसभाओं के निर्वाचित सदस्य शामिल होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह चुनाव एकल संक्रमणीय मत पद्धति से होता है।"
    },
    {
        question: "प्रश्न 6. एक गणतंत्र में \"सार्वजनिक पद\" (Public Office) की क्या विशेषता होती है?",
        answers: shuffle([
            { text: "यह केवल अभिजात वर्ग के लिए आरक्षित होता है।", correct: false },
            { text: "यह वंशानुगत होता है।", correct: false },
            { text: "यह बिना किसी भेदभाव के सभी योग्य नागरिकों के लिए खुला होता है।", correct: true },
            { text: "इस पर केवल शासक वर्ग का अधिकार होता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र का एक मूल सिद्धांत यह है कि कोई भी सार्वजनिक पद किसी विशेष परिवार या वर्ग की बपौती नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> योग्यता रखने वाला कोई भी नागरिक उस पद तक पहुँच सकता है।"
    },
    {
        question: "प्रश्न 7. भारत में गणतंत्र दिवस (26 जनवरी) क्यों मनाया जाता है?",
        answers: shuffle([
            { text: "इस दिन भारत को स्वतंत्रता मिली थी।", correct: false },
            { text: "इस दिन संविधान को अपनाया गया था।", correct: false },
            { text: "इस दिन भारत का संविधान पूर्ण रूप से लागू हुआ था।", correct: true },
            { text: "इस दिन महात्मा गांधी का जन्म हुआ था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26 जनवरी 1950 को संविधान लागू होने के साथ ही भारत ब्रिटिश राजशाही से पूरी तरह मुक्त होकर एक गणराज्य बना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी ऐतिहासिक दिन की याद में हर साल गणतंत्र दिवस मनाया जाता है।"
    },
    {
        question: "प्रश्न 8. 'गणतंत्र' की अवधारणा किस देश की क्रांति से प्रेरित मानी जाती है?",
        answers: shuffle([
            { text: "रूसी क्रांति", correct: false },
            { text: "फ्रांसीसी क्रांति", correct: true },
            { text: "अमेरिकी क्रांति", correct: false },
            { text: "गौरवशाली क्रांति (इंग्लैंड)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रांसीसी क्रांति (1789) ने 'स्वतंत्रता, समानता और बंधुत्व' के साथ-साथ 'गणतंत्र' के विचार को भी विश्व में लोकप्रिय बनाया, जहाँ राजशाही को समाप्त कर जनता द्वारा चुने गए प्रतिनिधियों का शासन स्थापित हुआ।"
    },
    {
        question: "प्रश्न 9. भारतीय गणतंत्र का प्रमुख कौन होता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "भारत का मुख्य न्यायाधीश", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "लोकसभा अध्यक्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति भारतीय गणराज्य के संवैधानिक प्रमुख और राष्ट्राध्यक्ष होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे भारत के प्रथम नागरिक भी कहलाते हैं।"
    },
    {
        question: "प्रश्न 10. निम्नलिखित में से कौन सा देश एक गणतंत्र नहीं है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "फ्रांस", correct: false },
            { text: "यूनाइटेड किंगडम (ब्रिटेन)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनाइटेड किंगडम एक संवैधानिक राजतंत्र है, जहाँ राष्ट्र का प्रमुख वंशानुगत होता है (राजा या रानी)।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत, अमेरिका और फ्रांस गणतंत्र हैं क्योंकि उनके राष्ट्राध्यक्ष निर्वाचित होते हैं।"
    },
    {
        question: "प्रश्न 11. भारत के गणतंत्र होने का एक निहितार्थ यह है कि...",
        answers: shuffle([
            { text: "a) राजनीतिक संप्रभुता प्रधानमंत्री में निहित है।", correct: false },
            { text: "b) राजनीतिक संप्रभुता जनता में निहित है।", correct: false },
            { text: "c) देश में कोई वंशानुगत शासक नहीं है।", correct: false },
            { text: "b) और c) दोनों", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र का अर्थ है कि सर्वोच्च शक्ति (संप्रभुता) किसी राजा में नहीं, बल्कि जनता में निहित होती है और राष्ट्र का प्रमुख वंशानुगत नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> दोनों ही कथन भारतीय गणतंत्र के संदर्भ में सही हैं।"
    },
    {
        question: "प्रश्न 12. भारत के प्रथम राष्ट्रपति कौन थे?",
        answers: shuffle([
            { text: "सर्वपल्ली राधाकृष्णन", correct: false },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "डॉ. राजेंद्र प्रसाद", correct: true },
            { text: "सी. राजगोपालाचारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉ. राजेंद्र प्रसाद 26 जनवरी 1950 को भारत के पहले राष्ट्रपति बने और उन्होंने इस पद पर 1962 तक सेवा की।"
    },
    {
        question: "प्रश्न 13. \"विधि का शासन\" (Rule of Law) किस शासन व्यवस्था का एक महत्वपूर्ण सिद्धांत है?",
        answers: shuffle([
            { text: "राजतंत्र", correct: false },
            { text: "तानाशाही", correct: false },
            { text: "गणतंत्र", correct: true },
            { text: "कुलीनतंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र में कोई भी व्यक्ति, चाहे वह शासक ही क्यों न हो, कानून से ऊपर नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> सभी नागरिक और सरकार कानून के अधीन होते हैं, जिसे 'विधि का शासन' कहते हैं।"
    },
    {
        question: "प्रश्न 14. भारतीय राष्ट्रपति का कार्यकाल कितना होता है?",
        answers: shuffle([
            { text: "4 वर्ष", correct: false },
            { text: "5 वर्ष", correct: true },
            { text: "6 वर्ष", correct: false },
            { text: "अनिश्चित काल तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत के राष्ट्रपति का चुनाव एक निश्चित अवधि, यानी 5 वर्षों के लिए होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गणतंत्र की एक प्रमुख विशेषता है कि राष्ट्राध्यक्ष का कार्यकाल सीमित होता है।"
    },
    {
        question: "प्रश्न 15. गणतंत्र दिवस परेड का मुख्य उद्देश्य क्या होता है?",
        answers: shuffle([
            { text: "केवल मनोरंजन", correct: false },
            { text: "देश की सैन्य शक्ति, सांस्कृतिक विविधता और उपलब्धियों का प्रदर्शन", correct: true },
            { text: "प्रधानमंत्री का शक्ति प्रदर्शन", correct: false },
            { text: "विदेशी मेहमानों का स्वागत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र दिवस परेड भारत की संप्रभुता, सैन्य ताकत और समृद्ध सांस्कृतिक विरासत को प्रदर्शित करने का एक राष्ट्रीय उत्सव है।"
    },
    {
        question: "प्रश्न 16. संविधान सभा ने किस दिन भारत के संविधान को अंगीकृत, अधिनियमित और आत्मार्पित किया था?",
        answers: shuffle([
            { text: "26 जनवरी, 1950", correct: false },
            { text: "15 अगस्त, 1947", correct: false },
            { text: "26 नवंबर, 1949", correct: true },
            { text: "9 दिसंबर, 1946", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान की प्रस्तावना में स्पष्ट लिखा है कि संविधान को 26 नवंबर 1949 को अपनाया गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी दिन को अब 'संविधान दिवस' के रूप में मनाया जाता है।"
    },
    {
        question: "प्रश्न 17. 26 जनवरी की तिथि को संविधान लागू करने के लिए क्यों चुना गया?",
        answers: shuffle([
            { text: "यह एक शुभ दिन था।", correct: false },
            { text: "इसी दिन 1930 में भारतीय राष्ट्रीय कांग्रेस ने 'पूर्ण स्वराज' दिवस मनाया था।", correct: true },
            { text: "इसी दिन भारत छोड़ो आंदोलन शुरू हुआ था।", correct: false },
            { text: "इसी दिन डॉ. अम्बेडकर का जन्मदिन था।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1929 के लाहौर अधिवेशन में कांग्रेस ने पूर्ण स्वराज का संकल्प लिया था और 26 जनवरी 1930 को पहला स्वतंत्रता दिवस मनाया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी ऐतिहासिक दिन को यादगार बनाने के लिए 26 जनवरी को संविधान लागू किया गया।"
    },
    {
        question: "प्रश्न 18. गणतंत्रात्मक व्यवस्था में राज्य की सभी शक्तियाँ अंततः किसमें निहित होती हैं?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "संसद", correct: false },
            { text: "जनता", correct: true },
            { text: "संविधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र में संप्रभुता (Sovereignty) जनता में निहित होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> जनता ही अपने प्रतिनिधियों को चुनकर शासन करने का अधिकार देती है।"
    },
    {
        question: "प्रश्न 19. भारतीय गणतंत्र की यथार्थ कार्यपालिका शक्ति किसके पास होती है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "मुख्य न्यायाधीश", correct: false },
            { text: "मंत्रिपरिषद, जिसका प्रमुख प्रधानमंत्री होता है", correct: true },
            { text: "राज्यपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि राष्ट्रपति संवैधानिक प्रमुख हैं, वास्तविक कार्यकारी शक्तियाँ प्रधानमंत्री की अध्यक्षता वाली मंत्रिपरिषद के पास होती हैं, जो लोकसभा के प्रति उत्तरदायी होती है।"
    },
    {
        question: "प्रश्न 20. एक 'गणराज्य' का विलोम क्या हो सकता है?",
        answers: shuffle([
            { text: "लोकतंत्र", correct: false },
            { text: "राजतंत्र", correct: true },
            { text: "समाजवाद", correct: false },
            { text: "साम्यवाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणराज्य में राष्ट्राध्यक्ष निर्वाचित होता है, जबकि राजतंत्र (Monarchy) में राष्ट्राध्यक्ष वंशानुगत होता है।"
    },
    {
        question: "प्रश्न 21. भारत के अंतिम गवर्नर-जनरल और प्रथम भारतीय गवर्नर-जनरल कौन थे?",
        answers: shuffle([
            { text: "लॉर्ड माउंटबेटन", correct: false },
            { text: "सी. राजगोपालाचारी", correct: true },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "सरदार पटेल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लॉर्ड माउंटबेटन स्वतंत्र भारत के पहले गवर्नर-जनरल थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके बाद सी. राजगोपालाचारी एकमात्र भारतीय गवर्नर-जनरल बने।<br><br><i class='fa-solid fa-angles-right icon'></i> 26 जनवरी 1950 को राष्ट्रपति पद के सृजन के साथ ही यह पद समाप्त हो गया।"
    },
    {
        question: "प्रश्न 22. भारतीय संविधान में 'गणतंत्र' की अवधारणा किस देश के संविधान से ली गई है?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "फ्रांस", correct: true },
            { text: "आयरलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान में गणतंत्रात्मक ढाँचा और प्रस्तावना में स्वतंत्रता, समता और बंधुता के आदर्श फ्रांस के संविधान से प्रेरित हैं।"
    },
    {
        question: "प्रश्न 23. गणतंत्र दिवस पर राष्ट्रपति को दी जाने वाली 21 तोपों की सलामी का क्या महत्व है?",
        answers: shuffle([
            { text: "यह एक ब्रिटिश परंपरा है।", correct: false },
            { text: "यह भारत के सभी राज्यों का प्रतिनिधित्व करती है।", correct: false },
            { text: "यह राष्ट्र और राष्ट्राध्यक्ष के प्रति सर्वोच्च सम्मान का प्रतीक है।", correct: true },
            { text: "यह सैन्य शक्ति का प्रदर्शन है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तोपों की सलामी एक सैन्य परंपरा है जो किसी राष्ट्राध्यक्ष या राज्य के प्रति उच्चतम सम्मान व्यक्त करने के लिए दी जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> 21 तोपों की सलामी सर्वोच्च सम्मान मानी जाती है।"
    },
    {
        question: "प्रश्न 24. क्या राष्ट्रपति को उनके पद से हटाया जा सकता है?",
        answers: shuffle([
            { text: "नहीं, वे आजीवन पद पर रहते हैं।", correct: false },
            { text: "हाँ, प्रधानमंत्री द्वारा।", correct: false },
            { text: "हाँ, सर्वोच्च न्यायालय द्वारा।", correct: false },
            { text: "हाँ, संसद द्वारा महाभियोग की प्रक्रिया के माध्यम से।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र में कोई भी पद स्थायी नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> संविधान के उल्लंघन के आधार पर अनुच्छेद 61 के तहत महाभियोग की प्रक्रिया द्वारा राष्ट्रपति को भी पद से हटाया जा सकता है।"
    },
    {
        question: "प्रश्न 25. 'लोकतंत्र' और 'गणतंत्र' में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "कोई अंतर नहीं है, दोनों समान हैं।", correct: false },
            { text: "लोकतंत्र सरकार के स्वरूप को बताता है, जबकि गणतंत्र राष्ट्र के प्रमुख के स्वरूप को बताता है।", correct: true },
            { text: "लोकतंत्र में चुनाव नहीं होते हैं।", correct: false },
            { text: "गणतंत्र में संसद नहीं होती है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोकतंत्र का अर्थ है 'जनता का शासन'।<br><br><i class='fa-solid fa-angles-right icon'></i> एक देश लोकतांत्रिक होकर भी गणतंत्र नहीं हो सकता (जैसे ब्रिटेन)।<br><br><i class='fa-solid fa-angles-right icon'></i> गणतंत्र का विशेष अर्थ है कि राष्ट्र का प्रमुख निर्वाचित होगा, वंशानुगत नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत लोकतांत्रिक गणराज्य है।"
    },
    {
        question: "प्रश्न 26. भारत के प्रथम गणतंत्र दिवस (1950) के मुख्य अतिथि कौन थे?",
        answers: shuffle([
            { text: "कोई नहीं", correct: false },
            { text: "इंडोनेशिया के राष्ट्रपति सुकर्णो", correct: true },
            { text: "मिस्र के राष्ट्रपति गमाल अब्देल नासिर", correct: false },
            { text: "पाकिस्तान के गवर्नर-जनरल मुहम्मद अली जिन्ना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26 जनवरी 1950 को आयोजित पहले गणतंत्र दिवस समारोह में इंडोनेशिया के तत्कालीन राष्ट्रपति सुकर्णो मुख्य अतिथि थे।"
    },
    {
        question: "प्रश्न 27. गणतंत्र के विचार में निहित है कि कोई भी व्यक्ति जन्म के आधार पर विशेषाधिकार प्राप्त नहीं करता है। यह किस मौलिक अधिकार को पुष्ट करता है?",
        answers: shuffle([
            { text: "स्वतंत्रता का अधिकार", correct: false },
            { text: "समानता का अधिकार", correct: true },
            { text: "शोषण के विरुद्ध अधिकार", correct: false },
            { text: "धार्मिक स्वतंत्रता का अधिकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र का सिद्धांत वंशानुगत विशेषाधिकारों को समाप्त करता है, जो कानून के समक्ष समानता (अनुच्छेद 14) और सामाजिक समानता (अनुच्छेद 15) के अधिकार को मजबूत करता है।"
    },
    {
        question: "प्रश्न 28. \"सरकार का एक रूप जिसमें सर्वोच्च शक्ति नागरिकों के पास होती है और वे सीधे या प्रतिनिधियों के माध्यम से इसका प्रयोग करते हैं\"। यह परिभाषा किसे सर्वोत्तम रूप से वर्णित करती है?",
        answers: shuffle([
            { text: "केवल लोकतंत्र", correct: false },
            { text: "केवल गणतंत्र", correct: false },
            { text: "लोकतांत्रिक गणतंत्र", correct: true },
            { text: "कुलीनतंत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह परिभाषा लोकतंत्र (नागरिकों की शक्ति) और गणतंत्र (प्रतिनिधियों का चुनाव) दोनों के तत्वों को मिलाती है, जो भारत जैसी प्रणाली का सटीक वर्णन है।"
    },
    {
        question: "प्रश्न 29. भारत में राष्ट्रपति का पद रिक्त होने पर उसे कितने समय के भीतर भरना अनिवार्य है?",
        answers: shuffle([
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: true },
            { text: "1 वर्ष", correct: false },
            { text: "कोई समय सीमा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुसार, यदि मृत्यु, त्यागपत्र या महाभियोग के कारण राष्ट्रपति का पद खाली हो जाता है, तो 6 महीने के भीतर चुनाव कराना अनिवार्य है।"
    },
    {
        question: "प्रश्न 30. गणतंत्रवाद का कौन सा पहलू सामाजिक न्याय से जुड़ा है?",
        answers: shuffle([
            { text: "वंशानुगत शासन का अंत", correct: false },
            { text: "सभी नागरिकों के लिए समान अवसर और सार्वजनिक पदों की सुलभता", correct: true },
            { text: "नियमित चुनाव", correct: false },
            { text: "लिखित संविधान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र यह सुनिश्चित करता है कि जन्म या वंश के आधार पर किसी को विशेष लाभ न मिले, जिससे सभी नागरिकों को अपनी योग्यता के आधार पर आगे बढ़ने का समान अवसर मिलता है, जो सामाजिक न्याय का एक तत्व है।"
    },
    {
        question: "प्रश्न 31. गणतंत्र दिवस पर ध्वजारोहण कौन करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "उपराष्ट्रपति", correct: false },
            { text: "रक्षा मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणतंत्र दिवस (26 जनवरी) पर, भारत के राष्ट्रपति (संवैधानिक प्रमुख) नई दिल्ली में कर्तव्य पथ (पूर्व में राजपथ) पर ध्वजारोहण करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> स्वतंत्रता दिवस (15 अगस्त) पर प्रधानमंत्री ध्वजारोहण करते हैं।"
    },
    {
        question: "प्रश्न 32. निम्नलिखित में से कौन प्राचीन भारत का एक प्रसिद्ध गणराज्य था?",
        answers: shuffle([
            { text: "मगध", correct: false },
            { text: "वज्जि (लिच्छवि)", correct: true },
            { text: "कोसल", correct: false },
            { text: "अवन्ति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन भारत में भी गणतांत्रिक व्यवस्थाएं मौजूद थीं, जिनमें वैशाली का लिच्छवि गणराज्य सबसे प्रसिद्ध उदाहरणों में से एक है।"
    },
    {
        question: "प्रश्न 33. यदि राष्ट्रपति और उपराष्ट्रपति दोनों का पद एक साथ रिक्त हो जाए, तो राष्ट्रपति के कर्तव्यों का निर्वहन कौन करेगा?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "भारत का मुख्य न्यायाधीश", correct: true },
            { text: "सबसे वरिष्ठ राज्यपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति (उत्तराधिकार) अधिनियम, 1969 के अनुसार, ऐसी स्थिति में भारत के मुख्य न्यायाधीश या उनकी अनुपस्थिति में सर्वोच्च न्यायालय के सबसे वरिष्ठ न्यायाधीश राष्ट्रपति के रूप में कार्य करते हैं।"
    },
    {
        question: "प्रश्न 34. \"गणतंत्र\" की अवधारणा का संबंध किससे नहीं है?",
        answers: shuffle([
            { text: "एक निश्चित अवधि के लिए निर्वाचित प्रमुख", correct: false },
            { text: "राजनीतिक संप्रभुता का जनता में निहित होना", correct: false },
            { text: "किसी भी विशेषाधिकार प्राप्त वर्ग की अनुपस्थिति", correct: false },
            { text: "शक्तियों का पूर्ण पृथक्करण", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शक्तियों का पृथक्करण (Separation of Powers) अध्यक्षात्मक प्रणाली (जैसे अमेरिका) की एक प्रमुख विशेषता है, लेकिन यह गणतंत्र होने की अनिवार्य शर्त नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> भारत में संसदीय प्रणाली है जहाँ कार्यपालिका और विधायिका में पूर्ण पृथक्करण नहीं है।"
    },
    {
        question: "प्रश्न 35. भारतीय गणतंत्र की संप्रभुता किसमें प्रकट होती है?",
        answers: shuffle([
            { text: "राष्ट्रपति के आदेशों में", correct: false },
            { text: "संसद द्वारा बनाए गए कानूनों में", correct: false },
            { text: "संविधान की प्रस्तावना के \"हम भारत के लोग\" शब्दों में", correct: true },
            { text: "सर्वोच्च न्यायालय के निर्णयों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रस्तावना के ये शब्द स्पष्ट करते हैं कि संविधान और संपूर्ण शासन प्रणाली का अंतिम स्रोत भारत की जनता है, और संप्रभुता उसी में निहित है।"
    },
    {
        question: "प्रश्न 36. भारत का राष्ट्रपति किसके प्रति उत्तरदायी होता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "संसद", correct: false },
            { text: "जनता", correct: false },
            { text: "संविधान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति संविधान के संरक्षण, प्रतिरक्षण और परिरक्षण की शपथ लेते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे किसी व्यक्ति या संस्था के प्रति नहीं, बल्कि भारत के संविधान के प्रति उत्तरदायी होते हैं।"
    },
    {
        question: "प्रश्न 37. किस अधिनियम ने भारत में ब्रिटिश शासन को समाप्त कर सत्ता हस्तांतरण का मार्ग प्रशस्त किया?",
        answers: shuffle([
            { text: "भारत सरकार अधिनियम, 1935", correct: false },
            { text: "भारतीय स्वतंत्रता अधिनियम, 1947", correct: true },
            { text: "कैबिनेट मिशन योजना, 1946", correct: false },
            { text: "क्रिप्स प्रस्ताव, 1942", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस अधिनियम ने 15 अगस्त, 1947 को भारत को एक स्वतंत्र डोमिनियन के रूप में स्थापित किया, जिसने अंततः 26 जनवरी 1950 को गणतंत्र बनने का मार्ग प्रशस्त किया।"
    },
    {
        question: "प्रश्न 38. एक गणतंत्र में नागरिकों को केवल राजनीतिक अधिकार ही नहीं, बल्कि __________ भी प्राप्त होने चाहिए।",
        answers: shuffle([
            { text: "विशेष वंशानुगत अधिकार", correct: false },
            { text: "असीमित शक्तियाँ", correct: false },
            { text: "नागरिक और सामाजिक अधिकार", correct: true },
            { text: "पूर्ण आर्थिक समानता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सच्चा गणतंत्र केवल राजनीतिक संरचना नहीं है, बल्कि यह अपने नागरिकों को स्वतंत्रता, समानता, और न्याय जैसे नागरिक और सामाजिक अधिकार भी सुनिश्चित करता है।"
    },
    {
        question: "प्रश्न 39. गणतंत्र दिवस समारोह के समापन का प्रतीक क्या है?",
        answers: shuffle([
            { text: "प्रधानमंत्री का भाषण", correct: false },
            { text: "राष्ट्रपति का राष्ट्र के नाम संदेश", correct: false },
            { text: "बीटिंग द रिट्रीट समारोह", correct: true },
            { text: "भारत रत्न पुरस्कारों की घोषणा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बीटिंग द रिट्रीट' समारोह 29 जनवरी को आयोजित किया जाता है और यह गणतंत्र दिवस समारोह के आधिकारिक समापन का प्रतीक है।"
    },
    {
        question: "प्रश्न 40. भारतीय ध्वज संहिता के अनुसार, गणतंत्र दिवस पर ध्वज को कैसे फहराया जाता है?",
        answers: shuffle([
            { text: "ध्वज को नीचे से ऊपर खींचकर फहराया जाता है (ध्वजारोहण)।", correct: false },
            { text: "ध्वज पहले से ही ऊपर बंधा होता है और उसे खोलकर फहराया जाता है (पताका फहराना)।", correct: true },
            { text: "ध्वज को आधा झुका दिया जाता है।", correct: false },
            { text: "ध्वज को उल्टा फहराया जाता है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 26 जनवरी को देश पहले से ही स्वतंत्र और संप्रभु है, इसलिए ध्वज ऊपर ही बंधा रहता है और राष्ट्रपति उसे खोलते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 15 अगस्त को ध्वज को नीचे से ऊपर ले जाकर (Hoisting) फहराया जाता है, जो स्वतंत्रता प्राप्ति का प्रतीक है।"
    },
    {
        question: "प्रश्न 41. संविधान के किस अनुच्छेद में राष्ट्रपति के चुनाव की प्रक्रिया का वर्णन है?",
        answers: shuffle([
            { text: "अनुच्छेद 52", correct: false },
            { text: "अनुच्छेद 54", correct: false },
            { text: "अनुच्छेद 55", correct: true },
            { text: "अनुच्छेद 61", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 55 में राष्ट्रपति के निर्वाचन की रीति (Manner of election) का विस्तार से वर्णन किया गया है, जिसमें एकल संक्रमणीय मत पद्धति का उल्लेख है।"
    },
    {
        question: "प्रश्न 42. भारत में 'एकल नागरिकता' की अवधारणा किस देश से अपनाई गई है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "स्विट्जरलैंड", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "ब्रिटेन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में एकल नागरिकता है, जिसका अर्थ है कि एक व्यक्ति केवल भारत का नागरिक है, किसी राज्य का नहीं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गणतंत्र के सभी नागरिकों को समान दर्जा देने के विचार को मजबूत करता है।"
    },
    {
        question: "प्रश्न 43. संविधान के लागू होने से पहले, भारत का शासन किस कानून के आधार पर चलाया जा रहा था?",
        answers: shuffle([
            { text: "a) भारतीय स्वतंत्रता अधिनियम, 1947", correct: false },
            { text: "b) भारत सरकार अधिनियम, 1935", correct: false },
            { text: "a) और b) दोनों के संशोधित प्रावधानों के अनुसार", correct: true },
            { text: "कोई कानून नहीं था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1947 से 1950 के बीच, भारत का शासन मुख्य रूप से भारत सरकार अधिनियम, 1935 और भारतीय स्वतंत्रता अधिनियम, 1947 के प्रावधानों को संशोधित करके चलाया जा रहा था।"
    },
    {
        question: "प्रश्न 44. निम्नलिखित में से कौन सा तत्व भारत को एक गणराज्य के रूप में परिभाषित करने के लिए सबसे महत्वपूर्ण है?",
        answers: shuffle([
            { text: "एक वयस्क मताधिकार", correct: false },
            { text: "एक स्वतंत्र न्यायपालिका", correct: false },
            { text: "एक निर्वाचित राष्ट्राध्यक्ष", correct: true },
            { text: "एक द्विसदनीय विधायिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गणराज्य की मूल और अनिवार्य शर्त यही है कि राष्ट्र का सर्वोच्च पद वंशानुगत न होकर निर्वाचित होना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य तत्व लोकतंत्र की विशेषताएं हैं, गणतंत्र की नहीं।"
    },
    {
        question: "प्रश्न 45. गणतंत्र दिवस परेड में विदेशी राष्ट्राध्यक्ष को मुख्य अतिथि के रूप में आमंत्रित करने की परंपरा का क्या उद्देश्य है?",
        answers: shuffle([
            { text: "भारत की सैन्य शक्ति दिखाना।", correct: false },
            { text: "उस देश के साथ राजनयिक और मैत्रीपूर्ण संबंधों को मजबूत करना।", correct: true },
            { text: "पर्यटन को बढ़ावा देना।", correct: false },
            { text: "केवल एक औपचारिकता पूरी करना।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भारत की विदेश नीति का एक महत्वपूर्ण हिस्सा है, जो अतिथि देश को दिए जाने वाले सम्मान और उसके साथ द्विपक्षीय संबंधों को मजबूत करने की इच्छा को दर्शाता है।"
    },
    {
        question: "प्रश्न 46. राष्ट्रपति पद के उम्मीदवार के लिए न्यूनतम आयु क्या है?",
        answers: shuffle([
            { text: "25 वर्ष", correct: false },
            { text: "30 वर्ष", correct: false },
            { text: "35 वर्ष", correct: true },
            { text: "40 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 58 के अनुसार, राष्ट्रपति पद के लिए योग्य होने के लिए उम्मीदवार को भारत का नागरिक होना चाहिए और उसकी आयु कम से कम 35 वर्ष होनी चाहिए।"
    },
    {
        question: "प्रश्न 47. भारतीय गणतंत्र में, कानून बनाने की अंतिम शक्ति किसके पास है?",
        answers: shuffle([
            { text: "राष्ट्रपति", correct: false },
            { text: "सर्वोच्च न्यायालय", correct: false },
            { text: "संसद", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि विधेयक राष्ट्रपति की सहमति के बाद ही कानून बनता है, लेकिन कानून बनाने की विधायी शक्ति संसद (लोकसभा और राज्यसभा) में निहित है, जो जनता का प्रतिनिधित्व करती है।"
    },
    {
        question: "प्रश्न 48. \"राज्य का कोई धर्म नहीं होगा\" यह सिद्धांत भारत के किस स्वरूप को दर्शाता है?",
        answers: shuffle([
            { text: "समाजवादी स्वरूप", correct: false },
            { text: "गणतांत्रिक स्वरूप", correct: false },
            { text: "पंथनिरपेक्ष स्वरूप", correct: true },
            { text: "लोकतांत्रिक स्वरूप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह भारत के पंथनिरपेक्ष (Secular) चरित्र को परिभाषित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, पंथनिरपेक्षता एक आधुनिक गणतंत्र का एक महत्वपूर्ण मूल्य माना जाता है।"
    },
    {
        question: "प्रश्न 49. भारत के राष्ट्रपति को शपथ कौन दिलाता है?",
        answers: shuffle([
            { text: "निवर्तमान राष्ट्रपति", correct: false },
            { text: "उपराष्ट्रपति", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "भारत का मुख्य न्यायाधीश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 60 के अनुसार, भारत के राष्ट्रपति को सर्वोच्च न्यायालय के मुख्य न्यायाधीश या उनकी अनुपस्थिति में सबसे वरिष्ठ न्यायाधीश द्वारा पद की शपथ दिलाई जाती है।"
    },
    {
        question: "प्रश्न 50. क्या भारत का राष्ट्रपति दोबारा चुनाव लड़ सकता है?",
        answers: shuffle([
            { text: "नहीं, केवल एक बार।", correct: false },
            { text: "हाँ, केवल दो बार।", correct: false },
            { text: "हाँ, कितनी भी बार।", correct: true },
            { text: "हाँ, लेकिन लगातार दो बार नहीं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय संविधान (अनुच्छेद 57) राष्ट्रपति के पुनर्निर्वाचन पर कोई सीमा नहीं लगाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कोई भी व्यक्ति कितनी भी बार राष्ट्रपति पद के लिए चुना जा सकता है।"
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