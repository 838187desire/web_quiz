const questions = [
    {
        topHeading: "बुध ग्रह पर आधारित 50 MCQs, (quiz_no.)"
    },
    {
        question: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध ग्रह आकार में सौरमंडल के सभी ग्रहों में सबसे छोटा है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका व्यास पृथ्वी के चंद्रमा से थोड़ा ही बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के सबसे निकटतम ग्रह कौन सा है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "बुध", correct: true },
            { text: "मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध सूर्य से पहला ग्रह है, जो इसे सौरमंडल का सबसे भीतरी ग्रह बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का एक वर्ष सबसे छोटा होता है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के सबसे निकट होने के कारण, बुध सूर्य की एक परिक्रमा सबसे तेजी से, केवल 88 पृथ्वी दिवस में पूरी कर लेता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह के कुल कितने प्राकृतिक उपग्रह (चंद्रमा) हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "चार", correct: false },
            { text: "शून्य", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध और शुक्र सौरमंडल के एकमात्र ऐसे ग्रह हैं जिनका कोई भी ज्ञात चंद्रमा नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह पर दिन और रात के तापमान में सबसे अधिक अंतर पाया जाता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल न होने के कारण, बुध का दिन का तापमान 430°C तक पहुंच सकता है जबकि रात का तापमान -180°C तक गिर जाता है, जो सौरमंडल में सबसे बड़ा तापांतर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की सतह की तुलना अक्सर किससे की जाती है?",
        answers: shuffle([
            { text: "मंगल की सतह से", correct: false },
            { text: "पृथ्वी के महासागरों से", correct: false },
            { text: "चंद्रमा की सतह से", correct: true },
            { text: "बृहस्पति के बादलों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध की सतह भी चंद्रमा की तरह गड्ढों (क्रेटर्स) से भरी हुई है, क्योंकि यहां भी वायुमंडल के अभाव में उल्कापिंड सीधे सतह से टकराते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'मैसेंजर' (MESSENGER) नामक अंतरिक्ष यान किस ग्रह का अध्ययन करने के लिए भेजा गया था?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा का मैसेंजर मिशन बुध की परिक्रमा करने वाला पहला अंतरिक्ष यान था, जिसने 2011 से 2015 तक ग्रह का विस्तृत अध्ययन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह का नामकरण किस आधार पर किया गया है?",
        answers: shuffle([
            { text: "रोमन युद्ध देवता", correct: false },
            { text: "रोमन संदेशवाहक देवता", correct: true },
            { text: "रोमन कृषि देवता", correct: false },
            { text: "रोमन प्रेम की देवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकाश में इसकी तेज गति के कारण, इसका नाम रोमन देवताओं के संदेशवाहक 'मरकरी' के नाम पर रखा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की सतह पर पाया जाने वाला सबसे बड़ा गड्ढा (इम्पैक्ट बेसिन) कौन सा है?",
        answers: shuffle([
            { text: "टाइको क्रेटर", correct: false },
            { text: "हर्शल क्रेटर", correct: false },
            { text: "कैलोरिस बेसिन", correct: true },
            { text: "साउथ पोल-एटकेन बेसिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैलोरिस बेसिन बुध पर एक विशाल प्रभाव गड्ढा है, जिसका व्यास लगभग 1,550 किलोमीटर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह का वायुमंडल कैसा है?",
        answers: shuffle([
            { text: "बहुत घना और जहरीला", correct: false },
            { text: "नाइट्रोजन और ऑक्सीजन से भरपूर", correct: false },
            { text: "लगभग न के बराबर, एक बहुत पतला बहिर्मंडल", correct: true },
            { text: "हाइड्रोजन और हीलियम से बना हुआ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध का कोई स्थायी वायुमंडल नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका एक बहुत ही पतला बहिर्मंडल (Exosphere) है जो मुख्य रूप से सौर पवन द्वारा लाए गए कणों से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह अपनी धुरी पर एक चक्कर पूरा करने में कितना समय लेता है?",
        answers: shuffle([
            { text: "24 घंटे", correct: false },
            { text: "88 दिन", correct: false },
            { text: "59 पृथ्वी दिवस", correct: true },
            { text: "117 पृथ्वी दिवस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध का घूर्णन काल बहुत धीमा है, जो लगभग 59 पृथ्वी दिवस के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की आंतरिक संरचना में सबसे बड़ा हिस्सा किसका है?",
        answers: shuffle([
            { text: "चट्टानी मेंटल", correct: false },
            { text: "बर्फीली पर्पटी", correct: false },
            { text: "विशाल धात्विक कोर", correct: true },
            { text: "तरल महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध का कोर उसके आकार के अनुपात में असामान्य रूप से बड़ा है, जो ग्रह के व्यास का लगभग 85% हिस्सा घेरता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह का एक सौर दिवस (एक सूर्योदय से दूसरे सूर्योदय तक का समय) कितने पृथ्वी दिवस के बराबर होता है?",
        answers: shuffle([
            { text: "59 दिन", correct: false },
            { text: "88 दिन", correct: false },
            { text: "176 दिन", correct: true },
            { text: "243 दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध के धीमे घूर्णन और तेज परिक्रमण के अनूठे संयोजन के कारण, इसका एक सौर दिवस इसके दो वर्षों के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की यात्रा करने वाला पहला अंतरिक्ष यान कौन सा था?",
        answers: shuffle([
            { text: "मैसेंजर", correct: false },
            { text: "वोयेजर 1", correct: false },
            { text: "मैरिनर 10", correct: true },
            { text: "पायनियर 10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा के मैरिनर 10 ने 1974-75 में तीन बार बुध के पास से उड़ान भरी, जो इस ग्रह का दौरा करने वाला पहला मिशन था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "क्या बुध ग्रह पर पानी की उपस्थिति के प्रमाण मिले हैं?",
        answers: shuffle([
            { text: "नहीं, यह बहुत गर्म है", correct: false },
            { text: "हाँ, तरल महासागरों के रूप में", correct: false },
            { text: "हाँ, ध्रुवों पर स्थायी रूप से छाया वाले गड्ढों में बर्फ के रूप में", correct: true },
            { text: "हाँ, वायुमंडल में जल वाष्प के रूप में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध के ध्रुवों के पास कुछ गहरे गड्ढों में सूर्य का प्रकाश कभी नहीं पहुंचता, जिससे वहां का तापमान इतना कम रहता है कि पानी बर्फ के रूप में मौजूद रह सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह का घनत्व कैसा है?",
        answers: shuffle([
            { text: "सौरमंडल में सबसे कम", correct: false },
            { text: "पानी के घनत्व के बराबर", correct: false },
            { text: "सौरमंडल में पृथ्वी के बाद दूसरा सबसे अधिक", correct: true },
            { text: "सौरमंडल में सबसे अधिक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने विशाल लौह कोर के कारण, बुध बहुत सघन ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह को पृथ्वी से देखना कठिन क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि यह बहुत छोटा है", correct: false },
            { text: "क्योंकि यह सूर्य के बहुत निकट होता है", correct: true },
            { text: "क्योंकि यह बहुत धुंधला है", correct: false },
            { text: "क्योंकि यह हमेशा पृथ्वी से दूर रहता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध आकाश में हमेशा सूर्य के करीब दिखाई देता है, इसलिए यह अक्सर सूर्य की चकाचौंध में खो जाता है और केवल सूर्योदय या सूर्यास्त के समय ही दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की सतह पर पाई जाने वाली लंबी, घुमावदार चट्टानों (cliffs) को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कैन्यन", correct: false },
            { text: "स्कार्प्स या रूपेस", correct: true },
            { text: "रिजेस", correct: false },
            { text: "रिफ्ट वैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि इन चट्टानों का निर्माण तब हुआ जब ग्रह का कोर ठंडा और सिकुड़ गया, जिससे इसकी सतह पर झुर्रियाँ पड़ गईं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह का चुंबकीय क्षेत्र कैसा है?",
        answers: shuffle([
            { text: "पृथ्वी से अधिक शक्तिशाली", correct: false },
            { text: "कोई चुंबकीय क्षेत्र नहीं है", correct: false },
            { text: "एक कमजोर, लेकिन महत्वपूर्ण वैश्विक चुंबकीय क्षेत्र", correct: true },
            { text: "एक बहुत ही अस्थिर चुंबकीय क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध का चुंबकीय क्षेत्र पृथ्वी के चुंबकीय क्षेत्र का केवल 1% शक्तिशाली है, लेकिन इसका होना वैज्ञानिकों के लिए एक रहस्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'बेपिकोलंबो' (BepiColombo) मिशन किस ग्रह के अध्ययन के लिए एक संयुक्त यूरोपीय-जापानी मिशन है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेपिकोलंबो मिशन 2018 में लॉन्च किया गया था और यह 2025 में बुध की कक्षा में पहुंचकर उसका विस्तृत अध्ययन करेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध की कक्षा कैसी है?",
        answers: shuffle([
            { text: "लगभग पूर्ण गोलाकार", correct: false },
            { text: "सभी ग्रहों में सबसे अधिक अंडाकार (उत्केंद्रित)", correct: true },
            { text: "पृथ्वी की कक्षा के समान", correct: false },
            { text: "एक वर्गाकार पथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध की कक्षा सौरमंडल के आठ ग्रहों में सबसे अधिक दीर्घवृत्ताकार (elliptical) है, जिससे सूर्य से इसकी दूरी बहुत बदलती रहती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की सतह का रंग कैसा है?",
        answers: shuffle([
            { text: "लाल", correct: false },
            { text: "नीला", correct: false },
            { text: "गहरा भूरा (चारकोल ग्रे)", correct: true },
            { text: "सफेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध की चट्टानी सतह गहरे भूरे रंग की है, जो देखने में काफी हद तक चंद्रमा जैसी लगती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह के घूर्णन और परिक्रमण में क्या अनोखा संबंध है?",
        answers: shuffle([
            { text: "1:1 का अनुनाद (हमेशा एक ही चेहरा सूर्य की ओर)", correct: false },
            { text: "2:1 का अनुनाद", correct: false },
            { text: "3:2 का अनुनाद (तीन बार घूमना, दो बार परिक्रमा)", correct: true },
            { text: "कोई विशेष संबंध नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध सूर्य के चारों ओर दो चक्कर लगाने में लगने वाले समय में अपनी धुरी पर ठीक तीन बार घूमता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह का कोई वलय (Ring) नहीं है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौरमंडल के सभी चार पार्थिव ग्रहों (बुध, शुक्र, पृथ्वी, मंगल) में से किसी के पास भी वलय प्रणाली नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह किस प्रकार का ग्रह है?",
        answers: shuffle([
            { text: "गैसीय दानव", correct: false },
            { text: "बर्फीला दानव", correct: false },
            { text: "पार्थिव या स्थलीय ग्रह", correct: true },
            { text: "बौना ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पार्थिव ग्रह वे होते हैं जिनकी सतह ठोस और चट्टानी होती है, जैसे पृथ्वी और मंगल।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह का व्यास कितना है?",
        answers: shuffle([
            { text: "लगभग 3,474 किलोमीटर", correct: false },
            { text: "लगभग 4,880 किलोमीटर", correct: true },
            { text: "लगभग 6,779 किलोमीटर", correct: false },
            { text: "लगभग 12,104 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह पृथ्वी के व्यास के 40% से भी कम है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह के पतले बहिर्मंडल में कौन से तत्व पाए जाते हैं?",
        answers: shuffle([
            { text: "हाइड्रोजन और हीलियम", correct: false },
            { text: "ऑक्सीजन और नाइट्रोजन", correct: false },
            { text: "ऑक्सीजन, सोडियम, हाइड्रोजन, हीलियम और पोटेशियम", correct: true },
            { text: "केवल कार्बन डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये कण सौर पवन और सतह पर सूक्ष्म उल्कापिंडों के प्रभाव से उत्पन्न होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की सतह पर गुरुत्वाकर्षण पृथ्वी की तुलना में कितना है?",
        answers: shuffle([
            { text: "लगभग पृथ्वी के बराबर", correct: false },
            { text: "लगभग पृथ्वी का 38%", correct: true },
            { text: "लगभग पृथ्वी का 90%", correct: false },
            { text: "लगभग पृथ्वी से दोगुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इसका मतलब है कि यदि आपका वजन पृथ्वी पर 100 किलोग्राम है, तो बुध पर यह केवल 38 किलोग्राम होगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'संक्रमण' (Transit) की घटना बुध ग्रह के साथ भी होती है। इसका क्या अर्थ है?",
        answers: shuffle([
            { text: "बुध का किसी दूसरे ग्रह के पीछे छिप जाना", correct: false },
            { text: "बुध का सूर्य और पृथ्वी के बीच से गुजरना", correct: true },
            { text: "बुध पर चंद्र ग्रहण होना", correct: false },
            { text: "बुध का अपनी कक्षा बदलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस दौरान बुध सूर्य की सतह पर एक छोटे काले धब्बे के रूप में दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह घटना एक सदी में लगभग 13 बार होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह के विशाल लौह कोर का क्या परिणाम है?",
        answers: shuffle([
            { text: "इसका रंग लाल है", correct: false },
            { text: "इसका घनत्व बहुत अधिक है", correct: true },
            { text: "इसका वायुमंडल बहुत घना है", correct: false },
            { text: "इसके कई चंद्रमा हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकार में छोटा होने के बावजूद, इसका विशाल और भारी कोर इसे सौरमंडल का दूसरा सबसे सघन ग्रह बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मैरिनर 10 मिशन ने बुध के कितने प्रतिशत हिस्से का नक्शा तैयार किया था?",
        answers: shuffle([
            { text: "100%", correct: false },
            { text: "75%", correct: false },
            { text: "लगभग 45%", correct: true },
            { text: "10%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैरिनर 10 ने केवल तीन फ्लाई-बाई किए, जिससे वह ग्रह के केवल एक ही हिस्से को देख पाया।<br><br><i class='fa-solid fa-angles-right icon'></i> पूरे ग्रह का नक्शा मैसेंजर मिशन द्वारा बनाया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की सतह पर तापमान में इतना अधिक उतार-चढ़ाव क्यों होता है?",
        answers: shuffle([
            { text: "सूर्य से इसकी दूरी के कारण", correct: false },
            { text: "इसकी तेज गति के कारण", correct: false },
            { text: "गर्मी को रोकने के लिए वायुमंडल की अनुपस्थिति के कारण", correct: true },
            { text: "इसकी ज्वालामुखी गतिविधि के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक वायुमंडलीय कंबल के बिना, सूर्य की गर्मी दिन में सीधे सतह पर पड़ती है और रात में तेजी से अंतरिक्ष में खो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सी विशेषता बुध ग्रह पर नहीं पाई जाती है?",
        answers: shuffle([
            { text: "क्रेटर (गड्ढे)", correct: false },
            { text: "स्कार्प्स (चट्टानें)", correct: false },
            { text: "सक्रिय ज्वालामुखी", correct: true },
            { text: "समतल मैदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि बुध की सतह ज्वालामुखीय गतिविधि से बनी है, लेकिन वर्तमान में वहां कोई सक्रिय ज्वालामुखी होने का प्रमाण नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह के ध्रुवों पर बर्फ क्यों मौजूद है जबकि यह सूर्य के इतना करीब है?",
        answers: shuffle([
            { text: "बर्फ चट्टानों के नीचे दबी हुई है", correct: false },
            { text: "गहरे गड्ढों के तल तक सूर्य का प्रकाश कभी नहीं पहुंचता", correct: true },
            { text: "यह पानी की बर्फ नहीं, बल्कि कार्बन डाइऑक्साइड की बर्फ है", correct: false },
            { text: "यह एक हालिया खोज है जो अभी तक सिद्ध नहीं हुई है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन स्थायी रूप से छाया वाले क्षेत्रों का तापमान हमेशा हिमांक से बहुत नीचे रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की परिक्रमा करने वाला पहला अंतरिक्ष यान कौन सा था?",
        answers: shuffle([
            { text: "मैरिनर 10", correct: false },
            { text: "मैसेंजर", correct: true },
            { text: "बेपिकोलंबो", correct: false },
            { text: "वोयेजर 2", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैरिनर 10 केवल पास से गुजरा था, जबकि मैसेंजर 2011 में बुध की कक्षा में प्रवेश करने वाला पहला यान बना।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह का अल्बेडो (प्रकाश परावर्तित करने की क्षमता) कैसा है?",
        answers: shuffle([
            { text: "बहुत अधिक, शुक्र के समान", correct: false },
            { text: "बहुत कम, चंद्रमा के समान", correct: true },
            { text: "मध्यम, पृथ्वी के समान", correct: false },
            { text: "परिवर्तनशील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध की सतह बहुत गहरी और गैर-परावर्तक है, जो उस पर पड़ने वाले प्रकाश का बहुत कम हिस्सा (लगभग 10-12%) ही परावर्तित करती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की सतह के नीचे क्या होने का अनुमान है, जो इसके कमजोर चुंबकीय क्षेत्र का कारण हो सकता है?",
        answers: shuffle([
            { text: "एक ठोस लोहे का कोर", correct: false },
            { text: "एक पिघला हुआ बाहरी कोर", correct: true },
            { text: "पानी का एक विशाल भंडार", correct: false },
            { text: "कुछ भी नहीं, यह खोखला है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिकों का मानना है कि एक पिघले हुए या आंशिक रूप से पिघले हुए कोर में गति ही इसके चुंबकीय क्षेत्र को उत्पन्न करती है, जिसे 'डायनेमो प्रभाव' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह पर \"अजीब भूभाग\" (Weird Terrain) का निर्माण कैसे हुआ?",
        answers: shuffle([
            { text: "ज्वालामुखी विस्फोटों से", correct: false },
            { text: "कैलोरिस बेसिन के निर्माण के ठीक विपरीत बिंदु पर भूकंपीय तरंगों के केंद्रित होने से", correct: true },
            { text: "पानी के कटाव से", correct: false },
            { text: "सौर पवन के प्रभाव से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विशाल टक्कर से उत्पन्न शक्तिशाली शॉक वेव पूरे ग्रह से होकर गुजरीं और विपरीत सतह को अस्त-व्यस्त कर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध का कोई वायुमंडल क्यों नहीं है?",
        answers: shuffle([
            { text: "इसका गुरुत्वाकर्षण बहुत कमजोर है", correct: false },
            { text: "सौर पवन गैसों को उड़ा ले जाती है", correct: false },
            { text: "यह सूर्य के बहुत करीब है", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध का कम गुरुत्वाकर्षण, सूर्य से निकटता और शक्तिशाली सौर पवन, ये सभी कारक मिलकर किसी भी महत्वपूर्ण वायुमंडल को बनने से रोकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह पर एक दिन (घूर्णन काल) की अवधि उसके वर्ष (परिक्रमण काल) की अवधि का कितना है?",
        answers: shuffle([
            { text: "आधा", correct: false },
            { text: "बराबर", correct: false },
            { text: "दो-तिहाई", correct: true },
            { text: "दोगुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध का घूर्णन काल (~59 दिन) उसके परिक्रमण काल (~88 दिन) का लगभग 2/3 है, जो 3:2 अनुनाद को दर्शाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "कौन सा पार्थिव ग्रह आकार में सबसे छोटा है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध सभी चट्टानी या पार्थिव ग्रहों में सबसे छोटा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मैसेंजर मिशन ने बुध के बारे में क्या महत्वपूर्ण खोज की थी?",
        answers: shuffle([
            { text: "पानी की बर्फ और कार्बनिक यौगिकों की उपस्थिति", correct: true },
            { text: "सक्रिय ज्वालामुखियों का पता लगाया", correct: false },
            { text: "एक नए चंद्रमा की खोज की", correct: false },
            { text: "एक घने वायुमंडल का प्रमाण मिला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस मिशन ने ध्रुवीय गड्ढों में पानी की बर्फ और सतह पर कार्बन युक्त सामग्री की पुष्टि की, जो एक अप्रत्याशित खोज थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह की सतह पर दिन के समय औसत तापमान क्या होता है?",
        answers: shuffle([
            { text: "100° सेल्सियस", correct: false },
            { text: "250° सेल्सियस", correct: false },
            { text: "430° सेल्सियस", correct: true },
            { text: "600° सेल्सियस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह तापमान सीसा (lead) धातु को भी पिघलाने के लिए पर्याप्त है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध की कक्षा का आकार किस खगोलशास्त्री के सापेक्षता के सामान्य सिद्धांत का एक महत्वपूर्ण प्रमाण था?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "गैलीलियो गैलिली", correct: false },
            { text: "अल्बर्ट आइंस्टीन", correct: true },
            { text: "जोहान्स केप्लर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूटन के गुरुत्वाकर्षण के नियम बुध की कक्षा में एक छोटी सी गड़बड़ी (precession) की व्याख्या नहीं कर सके, जिसे आइंस्टीन के सिद्धांत ने सफलतापूर्वक समझाया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "बुध ग्रह पर रात के समय औसत तापमान क्या होता है?",
        answers: shuffle([
            { text: "0° सेल्सियस", correct: false },
            { text: "-50° सेल्सियस", correct: false },
            { text: "-100° सेल्सियस", correct: false },
            { text: "-180° सेल्सियस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल की अनुपस्थिति के कारण, रात में सतह की सारी गर्मी अंतरिक्ष में चली जाती है, जिससे यह अत्यधिक ठंडा हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "निम्नलिखित में से कौन सा मिशन अभी बुध के रास्ते पर है?",
        answers: shuffle([
            { text: "मैसेंजर", correct: false },
            { text: "जूनो", correct: false },
            { text: "बेपिकोलंबो", correct: true },
            { text: "न्यू होराइजन्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह अंतरिक्ष यान वर्तमान में बुध की ओर अपनी लंबी यात्रा पर है और 2025 में वहां पहुंचेगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे तेज परिक्रमा करने वाला ग्रह कौन सा है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध लगभग 47 किलोमीटर प्रति सेकंड की गति से सूर्य की परिक्रमा करता है, जो अन्य सभी ग्रहों से तेज है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल के किस ग्रह की सतह सबसे पुरानी और सबसे अधिक गड्ढों वाली मानी जाती है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "बुध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी और शुक्र पर ज्वालामुखी और कटाव जैसी प्रक्रियाएं सतह को नया रूप देती रहती हैं, लेकिन बुध की सतह अरबों वर्षों से काफी हद तक अपरिवर्तित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "यदि आप बुध की भूमध्य रेखा पर खड़े होकर सूर्य को देखें, तो यह कैसा प्रतीत होगा?",
        answers: shuffle([
            { text: "पृथ्वी से देखे जाने वाले आकार का ही", correct: false },
            { text: "पृथ्वी से देखे जाने वाले आकार से छोटा", correct: false },
            { text: "पृथ्वी से देखे जाने वाले आकार से तीन गुना बड़ा", correct: true },
            { text: "एक नीले तारे जैसा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य से अत्यधिक निकटता के कारण, बुध के आकाश में सूर्य बहुत बड़ा और चमकीला दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'हॉलो' (Hollows) नामक उथले, अनियमित गड्ढे किस ग्रह की सतह पर खोजी गई एक अनूठी विशेषता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "बुध", correct: true },
            { text: "शुक्र", correct: false },
            { text: "चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैसेंजर मिशन द्वारा खोजी गई ये चमकदार आकृतियाँ संभवतः तब बनती हैं जब सतह के नीचे के अस्थिर पदार्थ अंतरिक्ष में उड़ जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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