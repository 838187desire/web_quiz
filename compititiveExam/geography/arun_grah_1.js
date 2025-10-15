const questions = [
    {
        topHeading: "अरुण (Uranus) ग्रह पर आधारित 50 MCQs , (quiz_no.)"
    },
    {
        question: "सूर्य से दूरी के अनुसार सौरमंडल में अरुण (Uranus) ग्रह का स्थान कौन-सा है?",
        answers: shuffle([
            { text: "छठा", correct: false },
            { text: "सातवाँ", correct: true },
            { text: "आठवाँ", correct: false },
            { text: "पाँचवाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण सूर्य से दूरी के क्रम में सातवाँ ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका क्रम है: बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि, अरुण और वरुण।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को 'लेटा हुआ ग्रह' (A sideways planet) भी कहा जाता है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: true },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण ग्रह अपनी कक्षा के तल पर लगभग 98 डिग्री तक झुका हुआ है, जिसके कारण यह अपनी कक्षा में एक लुढ़कती हुई गेंद की तरह प्रतीत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण इसे 'लेटा हुआ ग्रह' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह की खोज किस खगोलशास्त्री ने की थी?",
        answers: shuffle([
            { text: "गैलीलियो गैलिली", correct: false },
            { text: "जोहान्स केपलर", correct: false },
            { text: "विलियम हर्शेल", correct: true },
            { text: "निकोलस कोपरनिकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण ग्रह की खोज 1781 में विलियम हर्शेल ने अपनी दूरबीन का उपयोग करके की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह दूरबीन द्वारा खोजा गया पहला ग्रह था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह का हल्का नीला-हरा रंग किस गैस की उपस्थिति के कारण होता है?",
        answers: shuffle([
            { text: "अमोनिया", correct: false },
            { text: "मीथेन", correct: true },
            { text: "हाइड्रोजन", correct: false },
            { text: "हीलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण के वायुमंडल के ऊपरी भाग में मौजूद मीथेन गैस लाल प्रकाश को अवशोषित कर लेती है और नीले-हरे प्रकाश को परावर्तित करती है, जिससे ग्रह का रंग नीला-हरा दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह के सबसे बड़े प्राकृतिक उपग्रह (चंद्रमा) का क्या नाम है?",
        answers: shuffle([
            { text: "मिरांडा", correct: false },
            { text: "एरियल", correct: false },
            { text: "ओबेरॉन", correct: false },
            { text: "टाइटेनिया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइटेनिया अरुण का सबसे बड़ा चंद्रमा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद ओबेरॉन, एरियल, उम्ब्रियल और मिरांडा अरुण के पाँच सबसे बड़े चंद्रमा हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह को सूर्य की एक पूरी परिक्रमा करने में लगभग कितना समय लगता है?",
        answers: shuffle([
            { text: "29 पृथ्वी वर्ष", correct: false },
            { text: "84 पृथ्वी वर्ष", correct: true },
            { text: "165 पृथ्वी वर्ष", correct: false },
            { text: "12 पृथ्वी वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण सूर्य से बहुत दूर है, इसलिए इसकी कक्षा बहुत बड़ी है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे सूर्य का एक चक्कर पूरा करने में लगभग 84 पृथ्वी वर्ष लग जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे ठंडा ग्रह कौन-सा है, जिसके वायुमंडल का तापमान -224 डिग्री सेल्सियस तक गिर जाता है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "अरुण", correct: true },
            { text: "वरुण", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि वरुण सूर्य से सबसे दूर है, लेकिन अरुण का वायुमंडल सौरमंडल में सबसे ठंडा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका न्यूनतम तापमान -224 डिग्री सेल्सियस तक पहुँच सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह के उपग्रहों का नामकरण किनकी साहित्यिक कृतियों के पात्रों के नाम पर किया गया है?",
        answers: shuffle([
            { text: "होमर", correct: false },
            { text: "कालिदास", correct: false },
            { text: "विलियम शेक्सपियर और अलेक्जेंडर पोप", correct: true },
            { text: "लियो टॉल्स्टॉय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अन्य ग्रहों के विपरीत, जिनके चंद्रमाओं का नाम पौराणिक कथाओं पर आधारित है, अरुण के चंद्रमाओं का नाम विलियम शेक्सपियर और अलेक्जेंडर पोप के नाटकों और कविताओं के पात्रों पर रखा गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह के वलय (Rings) की खोज कब और कैसे हुई थी?",
        answers: shuffle([
            { text: "1986 में वोयेजर 2 द्वारा", correct: false },
            { text: "1977 में तारकीय प्रच्छादन द्वारा", correct: true },
            { text: "2005 में हबल दूरबीन द्वारा", correct: false },
            { text: "1930 में पृथ्वी से अवलोकन द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण के वलयों की खोज 1977 में तारकीय प्रच्छादन (Stellar Occultation) की घटना का अवलोकन करते समय हुई थी, जब ग्रह एक तारे के सामने से गुजरा और तारे की रोशनी बार-बार मंद हुई।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अब तक कौन-सा एकमात्र अंतरिक्ष यान अरुण ग्रह के पास से गुजरा है?",
        answers: shuffle([
            { text: "पायनियर 10", correct: false },
            { text: "न्यू होराइजन्स", correct: false },
            { text: "वोयेजर 2", correct: true },
            { text: "कैसिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा का वोयेजर 2 ही एकमात्र अंतरिक्ष यान है जिसने जनवरी 1986 में अरुण ग्रह का दौरा किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसने ग्रह, उसके चंद्रमाओं और वलयों के बारे में बहुमूल्य जानकारी भेजी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह को किस श्रेणी में वर्गीकृत किया गया है?",
        answers: shuffle([
            { text: "स्थलीय ग्रह", correct: false },
            { text: "गैस दानव", correct: false },
            { text: "हिम दानव (बर्फ़ीला दानव)", correct: true },
            { text: "बौना ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण और वरुण को हिम दानव (Ice Giant) कहा जाता है क्योंकि वे मुख्य रूप से पानी, अमोनिया और मीथेन जैसी भारी \"बर्फ़ीली\" सामग्री से बने हैं, जो उनके चट्टानी कोर के ऊपर मौजूद हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह की घूर्णन दिशा क्या है?",
        answers: shuffle([
            { text: "पृथ्वी के समान (वामावर्त)", correct: false },
            { text: "शुक्र के समान (दक्षिणावर्त)", correct: true },
            { text: "कोई घूर्णन नहीं", correct: false },
            { text: "सूर्य की परिक्रमा के लंबवत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण ग्रह की घूर्णन दिशा अधिकांश ग्रहों के विपरीत दक्षिणावर्त (Clockwise) है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार की उल्टी घूर्णन गति को वक्री घूर्णन (Retrograde Rotation) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> शुक्र भी इसी प्रकार घूमता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह का अपनी धुरी पर एक चक्कर पूरा करने में कितना समय लगता है (एक दिन की अवधि)?",
        answers: shuffle([
            { text: "लगभग 9 घंटे", correct: false },
            { text: "लगभग 17 घंटे", correct: true },
            { text: "लगभग 24 घंटे", correct: false },
            { text: "लगभग 36 घंटे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण अपनी धुरी पर काफी तेजी से घूमता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका एक दिन लगभग 17 घंटे 14 मिनट का होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के किस चंद्रमा की सतह सौरमंडल में सबसे विविध और विचित्र मानी जाती है, जिस पर विशाल घाटियाँ और अजीबोगरीब भू-आकृतियाँ हैं?",
        answers: shuffle([
            { text: "टाइटेनिया", correct: false },
            { text: "ओबेरॉन", correct: false },
            { text: "एरियल", correct: false },
            { text: "मिरांडा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिरांडा की सतह बहुत ही ऊबड़-खाबड़ और अस्त-व्यस्त है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऐसा माना जाता है कि अतीत में किसी बड़ी टक्कर के कारण यह टूटकर फिर से जुड़ गया होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह का चुंबकीय क्षेत्र (Magnetic Field) कैसा है?",
        answers: shuffle([
            { text: "पृथ्वी के समान और संरेखित", correct: false },
            { text: "बहुत मजबूत और ध्रुवों पर केंद्रित", correct: false },
            { text: "अत्यंत झुका हुआ और ग्रह के केंद्र से दूर", correct: true },
            { text: "कोई चुंबकीय क्षेत्र नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण का चुंबकीय क्षेत्र बहुत ही असामान्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ग्रह के घूर्णन अक्ष से लगभग 60 डिग्री झुका हुआ है और इसके भौतिक केंद्र से भी काफी दूर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह का व्यास पृथ्वी के व्यास से लगभग कितना गुना बड़ा है?",
        answers: shuffle([
            { text: "लगभग दो गुना", correct: false },
            { text: "लगभग चार गुना", correct: true },
            { text: "लगभग आठ गुना", correct: false },
            { text: "लगभग ग्यारह गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण का व्यास लगभग 51,118 किलोमीटर है, जो पृथ्वी के व्यास (लगभग 12,742 किलोमीटर) से लगभग चार गुना अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सौरमंडल का तीसरा सबसे बड़ा ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अपने अत्यधिक अक्षीय झुकाव के कारण अरुण के ध्रुवों पर कितने समय तक लगातार दिन या रात रहती है?",
        answers: shuffle([
            { text: "24 घंटे", correct: false },
            { text: "6 महीने", correct: false },
            { text: "21 वर्ष", correct: false },
            { text: "42 वर्ष", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण के 84 वर्षीय परिक्रमा काल के दौरान, इसके एक ध्रुव पर 42 वर्षों तक लगातार सूर्य का प्रकाश रहता है और दूसरे ध्रुव पर 42 वर्षों तक अंधेरा छाया रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह के वलय मुख्य रूप से किससे बने हैं?",
        answers: shuffle([
            { text: "चमकीले बर्फ के कणों से", correct: false },
            { text: "गहरे रंग के चट्टानी और धूल कणों से", correct: true },
            { text: "गैस और प्लाज्मा से", correct: false },
            { text: "तरल पानी की बूंदों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शनि के चमकीले वलयों के विपरीत, अरुण के वलय बहुत काले और धुंधले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये मुख्य रूप से गहरे रंग के, संभवतः विकिरण-संसाधित बर्फ और चट्टान के कणों से बने हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण का नाम किस पौराणिक देवता के नाम पर रखा गया है?",
        answers: shuffle([
            { text: "युद्ध के रोमन देवता", correct: false },
            { text: "समुद्र के रोमन देवता", correct: false },
            { text: "आकाश के ग्रीक देवता", correct: true },
            { text: "कृषि के ग्रीक देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण (यूरेनस) एकमात्र ग्रह है जिसका नाम रोमन के बजाय ग्रीक पौराणिक कथाओं से लिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> यूरेनस आकाश के प्राचीन ग्रीक देवता थे।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वोयेजर 2 ने अरुण के कितने नए चंद्रमाओं की खोज की थी?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "5", correct: false },
            { text: "10", correct: true },
            { text: "15", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1986 में अपने फ्लाईबाई के दौरान, वोयेजर 2 ने अरुण के 10 छोटे आंतरिक चंद्रमाओं की खोज की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में दूरबीनों से और भी चंद्रमा खोजे गए।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह की खोज से पहले इसे क्या माना जाता था?",
        answers: shuffle([
            { text: "एक धूमकेतु", correct: false },
            { text: "एक तारा", correct: true },
            { text: "एक क्षुद्रग्रह", correct: false },
            { text: "एक निहारिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपनी धीमी गति और धुंधली उपस्थिति के कारण, विलियम हर्शेल द्वारा इसकी पहचान एक ग्रह के रूप में किए जाने से पहले कई खगोलविदों ने इसे एक तारा समझकर सूचीबद्ध किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "आकार की दृष्टि से सौरमंडल में अरुण का कौन-सा स्थान है?",
        answers: shuffle([
            { text: "पहला", correct: false },
            { text: "दूसरा", correct: false },
            { text: "तीसरा", correct: true },
            { text: "चौथा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> व्यास के आधार पर, अरुण बृहस्पति और शनि के बाद सौरमंडल का तीसरा सबसे बड़ा ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह के वायुमंडल में हाइड्रोजन और हीलियम के बाद तीसरी सबसे प्रचुर गैस कौन-सी है?",
        answers: shuffle([
            { text: "मीथेन", correct: true },
            { text: "अमोनिया", correct: false },
            { text: "जल वाष्प", correct: false },
            { text: "नाइट्रोजन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण का वायुमंडल मुख्य रूप से हाइड्रोजन (~83%) और हीलियम (~15%) से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> तीसरी सबसे प्रचुर गैस मीथेन (~2.3%) है, जो इसे इसका विशिष्ट रंग देती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के सबसे चमकीले वलय (Ring) का क्या नाम है?",
        answers: shuffle([
            { text: "अल्फा वलय", correct: false },
            { text: "बीटा वलय", correct: false },
            { text: "गामा वलय", correct: false },
            { text: "एप्सिलॉन वलय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एप्सिलॉन वलय (Epsilon ring) अरुण का सबसे बाहरी, सबसे बड़ा और सबसे चमकीला वलय है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के अधिकांश चंद्रमा किससे बने हैं?",
        answers: shuffle([
            { text: "मुख्य रूप से चट्टान से", correct: false },
            { text: "मुख्य रूप से धातु से", correct: false },
            { text: "लगभग बराबर मात्रा में बर्फ और चट्टान से", correct: true },
            { text: "जमी हुई गैसों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण के प्रमुख चंद्रमाओं की संरचना में लगभग 50% पानी की बर्फ और 50% चट्टान होने का अनुमान है, जो उन्हें सौर मंडल के कई अन्य बर्फीले पिंडों के समान बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस जुड़वां ग्रह को अक्सर अरुण के साथ 'बर्फ़ीला दानव' कहा जाता है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "वरुण", correct: true },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वरुण (Neptune) और अरुण की संरचना, आकार और द्रव्यमान में काफी समानता है, इसलिए इन दोनों को \"बर्फ़ीला दानव\" जुड़वां कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण का औसत घनत्व कैसा है?",
        answers: shuffle([
            { text: "पानी से अधिक", correct: true },
            { text: "पानी से कम", correct: false },
            { text: "पृथ्वी के बराबर", correct: false },
            { text: "चट्टान के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण का औसत घनत्व लगभग 1.27 ग्राम प्रति घन सेंटीमीटर है, जो पानी (1 ग्राम/सेमी³) से थोड़ा अधिक है।<br><br><i class='fa-solid fa-angles-right icon'></i> शनि एकमात्र ग्रह है जिसका घनत्व पानी से कम है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के वायुमंडल में बादलों की कितनी परतें मानी जाती हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि अरुण के वायुमंडल में बादलों की तीन परतें हैं: सबसे ऊपरी मीथेन बर्फ की, मध्य अमोनिया और हाइड्रोजन सल्फाइड की, और सबसे निचली पानी की बर्फ की।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन-सा तत्व अरुण को हरा रंग और वरुण को अधिक गहरा नीला रंग देता है, जबकि दोनों में मीथेन मौजूद है?",
        answers: shuffle([
            { text: "अमोनिया की मात्रा", correct: false },
            { text: "वायुमंडल की गहराई और एक अज्ञात यौगिक", correct: true },
            { text: "हाइड्रोजन सल्फाइड की उपस्थिति", correct: false },
            { text: "हीलियम का अनुपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह माना जाता है कि वरुण के वायुमंडल में कोई अज्ञात घटक है जो इसे अरुण की तुलना में अधिक गहरा नीला रंग देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, वरुण के वायुमंडल में धुंध की परत पतली हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि आप अरुण ग्रह पर खड़े हो पाते, तो सूर्य पूर्व में उगने के बजाय किस दिशा में उगता हुआ प्रतीत होता?",
        answers: shuffle([
            { text: "उत्तर", correct: false },
            { text: "दक्षिण", correct: false },
            { text: "पश्चिम", correct: true },
            { text: "किसी भी दिशा में नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण के वक्री (उल्टे) घूर्णन के कारण, सूर्य पश्चिम में उगता और पूर्व में अस्त होता हुआ प्रतीत होता है, जो पृथ्वी के बिल्कुल विपरीत है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के अत्यधिक अक्षीय झुकाव का संभावित कारण क्या माना जाता है?",
        answers: shuffle([
            { text: "बृहस्पति का शक्तिशाली गुरुत्वाकर्षण खिंचाव", correct: false },
            { text: "सूर्य से इसकी बहुत अधिक दूरी", correct: false },
            { text: "इसके निर्माण के शुरुआती दौर में किसी विशाल पिंड से टक्कर", correct: true },
            { text: "इसके कोर में असामान्य गतिविधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रमुख सिद्धांत यह है कि सौर मंडल के इतिहास में बहुत पहले, पृथ्वी के आकार के किसी विशाल खगोलीय पिंड ने अरुण से टक्कर मारी, जिससे उसका घूर्णन अक्ष पलट गया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के कुल कितने ज्ञात उपग्रह हैं?",
        answers: shuffle([
            { text: "15", correct: false },
            { text: "27", correct: true },
            { text: "53", correct: false },
            { text: "82", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान जानकारी के अनुसार, अरुण के 27 ज्ञात प्राकृतिक उपग्रह हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह पर हवा की गति कितनी तेज हो सकती है?",
        answers: shuffle([
            { text: "100 किलोमीटर प्रति घंटा", correct: false },
            { text: "300 किलोमीटर प्रति घंटा", correct: false },
            { text: "600 किलोमीटर प्रति घंटा", correct: false },
            { text: "900 किलोमीटर प्रति घंटा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण पर हवाएं बहुत तेज चलती हैं, जिनकी गति 900 किलोमीटर प्रति घंटे (लगभग 560 मील प्रति घंटे) तक पहुंच सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "टाइटेनिया और ओबेरॉन, अरुण के दो सबसे बड़े चंद्रमा, की खोज किसने की थी?",
        answers: shuffle([
            { text: "गैलीलियो गैलिली", correct: false },
            { text: "विलियम हर्शेल", correct: true },
            { text: "जेरार्ड कुइपर", correct: false },
            { text: "कार्ल सागन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण ग्रह की खोज करने के कुछ वर्षों बाद, विलियम हर्शेल ने ही 1787 में इसके दो सबसे बड़े चंद्रमाओं, टाइटेनिया और ओबेरॉन, की भी खोज की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के आंतरिक भाग के बारे में क्या माना जाता है?",
        answers: shuffle([
            { text: "यह पूरी तरह से गैस से बना है", correct: false },
            { text: "इसका एक छोटा, चट्टानी कोर है जो बर्फ की मोटी परत से घिरा है", correct: true },
            { text: "इसका एक विशाल, तरल धात्विक कोर है", correct: false },
            { text: "यह पूरी तरह से ठोस और बर्फीला है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मॉडल के अनुसार, अरुण के केंद्र में एक छोटा चट्टानी कोर है, जो पानी, मीथेन और अमोनिया की बर्फ से बनी एक विशाल, घनी और तरल परत (मेंटल) से ढका हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण की सतह का गुरुत्वाकर्षण पृथ्वी के गुरुत्वाकर्षण की तुलना में कैसा है?",
        answers: shuffle([
            { text: "बहुत अधिक (दोगुना)", correct: false },
            { text: "थोड़ा अधिक", correct: false },
            { text: "लगभग समान (लगभग 90%)", correct: true },
            { text: "बहुत कम (आधा)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने बड़े आकार के बावजूद, अरुण का घनत्व कम है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, इसकी सतह (बादल के शीर्ष पर) का गुरुत्वाकर्षण पृथ्वी के गुरुत्वाकर्षण का लगभग 90% है।<br><br><i class='fa-solid fa-angles-right icon'></i> 100 किलो का व्यक्ति वहां 90 किलो महसूस करेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "\"जॉर्जियन सिडस\" (जॉर्ज का तारा) किस ग्रह का प्रारंभिक नाम था?",
        answers: shuffle([
            { text: "वरुण", correct: false },
            { text: "प्लूटो", correct: false },
            { text: "अरुण", correct: true },
            { text: "सेरेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसके खोजकर्ता, विलियम हर्शेल ने शुरू में इसका नाम अपने संरक्षक, ब्रिटेन के राजा जॉर्ज तृतीय के सम्मान में \"जॉर्जियन सिडस\" रखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> बाद में खगोलीय परंपरा के अनुसार इसका नाम अरुण (यूरेनस) रखा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के वलयों की संरचना कैसी है?",
        answers: shuffle([
            { text: "चौड़े और फैले हुए", correct: false },
            { text: "बहुत संकरे और अलग-अलग", correct: true },
            { text: "केवल एक विशाल वलय", correct: false },
            { text: "कणों के बजाय गैसीय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण के वलय शनि के चौड़े वलयों के विपरीत, अत्यंत संकरे हैं, जिनकी चौड़ाई अक्सर कुछ किलोमीटर ही होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वोयेजर 2 जब अरुण के पास से गुजरा, तब ग्रह का कौन-सा ध्रुव लगभग सीधे सूर्य की ओर था?",
        answers: shuffle([
            { text: "a) उत्तरी ध्रुव", correct: false },
            { text: "b) दक्षिणी ध्रुव", correct: true },
            { text: "a), b) दोनों में से कोई नहीं", correct: false },
            { text: "a) , b) दोनों ध्रुव एक साथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1986 में फ्लाईबाई के समय, अरुण अपनी कक्षा में ऐसी स्थिति में था कि उसका दक्षिणी ध्रुव लगभग सीधे सूर्य का सामना कर रहा था, जिससे उस गोलार्ध में ग्रीष्म अयनांत की स्थिति थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के वायुमंडल की सबसे विशिष्ट विशेषता क्या है?",
        answers: shuffle([
            { text: "बृहस्पति जैसा विशाल लाल धब्बा", correct: false },
            { text: "शनि जैसे षट्कोणीय बादल", correct: false },
            { text: "दृश्यमान बादलों की पट्टियों और तूफानों का लगभग पूर्ण अभाव", correct: true },
            { text: "लगातार और चमकीली औरोरल गतिविधियाँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति और शनि के विपरीत, अरुण का वायुमंडल दृश्य प्रकाश में बहुत शांत और विशेषता रहित दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें बड़े तूफान या स्पष्ट बादल पट्टियाँ नहीं दिखती हैं, जिससे यह एक चिकनी गेंद जैसा लगता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि अरुण का अक्षीय झुकाव 0 डिग्री होता, तो उसका मौसम कैसा होता?",
        answers: shuffle([
            { text: "अभी से भी अधिक चरम", correct: false },
            { text: "कोई मौसम नहीं होता", correct: true },
            { text: "पृथ्वी के समान मौसम", correct: false },
            { text: "अप्रत्याशित रूप से बदलता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रहों पर मौसम का मुख्य कारण उनका अक्षीय झुकाव होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि कोई झुकाव नहीं होता, तो सूर्य की किरणें हमेशा भूमध्य रेखा पर सीधी पड़तीं और ध्रुवों पर तिरछी, जिससे कोई मौसमी बदलाव नहीं होता।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण को कभी-कभी पृथ्वी से बिना दूरबीन के भी देखा जा सकता है, लेकिन ऐसा करना कठिन क्यों है?",
        answers: shuffle([
            { text: "क्योंकि यह बहुत तेजी से चलता है", correct: false },
            { text: "क्योंकि यह बहुत धुंधला है और एक तारे जैसा दिखता है", correct: true },
            { text: "क्योंकि यह हमेशा सूर्य के करीब होता है", correct: false },
            { text: "क्योंकि इसका रंग आकाश में घुलमिल जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आदर्श परिस्थितियों में, अरुण दृश्यता की सीमा पर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बहुत धुंधला दिखाई देता है और आसानी से एक सामान्य तारे के रूप में भ्रमित किया जा सकता है, इसलिए इसकी पहचान करना मुश्किल है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण की संरचना में \"बर्फ\" शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "केवल जमा हुआ पानी", correct: false },
            { text: "पानी, मीथेन और अमोनिया के जमे हुए यौगिक", correct: true },
            { text: "जमी हुई कार्बन डाइऑक्साइड", correct: false },
            { text: "जमी हुई हाइड्रोजन और हीलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खगोल विज्ञान में, \"बर्फ\" का उपयोग केवल पानी की बर्फ के लिए नहीं, बल्कि पानी, मीथेन और अमोनिया जैसे वाष्पशील यौगिकों के लिए भी किया जाता है जो सौर मंडल के ठंडे बाहरी क्षेत्रों में जम जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण के छोटे, आंतरिक चंद्रमाओं को क्या कहा जाता है जो इसके वलयों को स्थिर रखने में मदद करते हैं?",
        answers: shuffle([
            { text: "चरवाहे चंद्रमा (Shepherd Moons)", correct: true },
            { text: "ट्रोजन चंद्रमा", correct: false },
            { text: "ज्वालामुखी चंद्रमा", correct: false },
            { text: "पकड़े गए क्षुद्रग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चरवाहे चंद्रमा, जैसे कि कॉर्डेलिया और ओफेलिया, अपने गुरुत्वाकर्षण से अरुण के संकरे वलयों के किनारों को बनाए रखते हैं और उन्हें फैलने से रोकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की तुलना में अरुण पर सूर्य का प्रकाश कितना तीव्र होता है?",
        answers: shuffle([
            { text: "लगभग आधा", correct: false },
            { text: "लगभग 100 गुना कम", correct: false },
            { text: "लगभग 400 गुना कम", correct: true },
            { text: "लगभग बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण सूर्य से पृथ्वी की तुलना में लगभग 20 गुना अधिक दूर है।<br><br><i class='fa-solid fa-angles-right icon'></i> व्युत्क्रम वर्ग नियम के अनुसार, प्रकाश की तीव्रता दूरी के वर्ग के साथ घटती है (1/20² = 1/400), इसलिए वहां प्रकाश लगभग 400 गुना कम तीव्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वोयेजर 2 के आंकड़ों से पता चला कि अरुण जितनी ऊर्जा सूर्य से प्राप्त करता है, लगभग उतनी ही उत्सर्जित करता है। इसका क्या तात्पर्य है?",
        answers: shuffle([
            { text: "इसका कोर बहुत गर्म है।", correct: false },
            { text: "इसका कोर ठंडा है और इसमें महत्वपूर्ण आंतरिक ताप स्रोत नहीं है।", correct: true },
            { text: "यह एक तारा बनने की प्रक्रिया में है।", correct: false },
            { text: "इस पर लगातार उल्कापिंड गिरते रहते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति, शनि और वरुण के विपरीत, जो सूर्य से प्राप्त ऊर्जा से अधिक ऊर्जा उत्सर्जित करते हैं, अरुण का आंतरिक ताप स्रोत बहुत कमजोर या न के बराबर है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका कोर काफी हद तक ठंडा हो चुका है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण की खोज ने सौरमंडल की ज्ञात सीमा को क्या कर दिया था?",
        answers: shuffle([
            { text: "आधा कर दिया", correct: false },
            { text: "अपरिवर्तित रखा", correct: false },
            { text: "लगभग दोगुना कर दिया", correct: true },
            { text: "दस गुना बढ़ा दिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण की खोज से पहले, शनि को सौरमंडल का अंतिम ग्रह माना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> अरुण की कक्षा शनि की कक्षा से लगभग दोगुनी दूरी पर है, जिससे ज्ञात सौरमंडल का आकार लगभग दोगुना हो गया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण का सबसे भीतरी चंद्रमा कौन-सा है?",
        answers: shuffle([
            { text: "मिरांडा", correct: false },
            { text: "पक", correct: false },
            { text: "कॉर्डेलिया", correct: true },
            { text: "एरियल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉर्डेलिया अरुण के सबसे भीतरी ज्ञात चंद्रमाओं में से एक है और यह एप्सिलॉन वलय के लिए एक चरवाहे चंद्रमा के रूप में भी कार्य करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'विषुव' (Equinox) के दौरान अरुण पर सूर्य कहाँ चमकता है?",
        answers: shuffle([
            { text: "उत्तरी ध्रुव पर", correct: false },
            { text: "दक्षिणी ध्रुव पर", correct: false },
            { text: "भूमध्य रेखा पर", correct: true },
            { text: "पूरे ग्रह पर समान रूप से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी ग्रह पर विषुव के दौरान, सूर्य सीधे भूमध्य रेखा के ऊपर चमकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अरुण के लिए, यह घटना हर 42 साल में होती है जब इसके वलय पृथ्वी की ओर किनारे पर दिखाई देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "अरुण ग्रह पर किस प्रकार की वर्षा होने की संभावना है?",
        answers: shuffle([
            { text: "पानी की वर्षा", correct: false },
            { text: "सल्फ्यूरिक अम्ल की वर्षा", correct: false },
            { text: "मीथेन की वर्षा", correct: false },
            { text: "हीरे की वर्षा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिकों का मानना है कि अरुण और वरुण के वायुमंडल में अत्यधिक दबाव और तापमान के कारण मीथेन के कार्बन परमाणु टूटकर हीरे के क्रिस्टल में बदल सकते हैं, जो फिर ग्रह के गहरे आंतरिक भाग में बरसते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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