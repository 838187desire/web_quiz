const questions = [
    {
        topHeading: "संसद के सत्र और प्रकार पर आधारित 50 बहुविकल्पीय प्रश्न (quiz_no.)"
    },
    {
        question: "प्रश्न 1: भारतीय संविधान के किस अनुच्छेद के तहत राष्ट्रपति संसद का सत्र बुलाता है?",
        answers: shuffle([
            { text: "अनुच्छेद 80", correct: false },
            { text: "अनुच्छेद 85(1)", correct: true },
            { text: "अनुच्छेद 87", correct: false },
            { text: "अनुच्छेद 108", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान का अनुच्छेद 85(1) राष्ट्रपति को समय-समय पर संसद के प्रत्येक सदन को ऐसे समय और स्थान पर, जो वह ठीक समझे, अधिवेशन के लिए बुलाने का अधिकार देता है।"
    },
    {
        question: "प्रश्न 2: संसद के दो सत्रों के बीच अधिकतम स्वीकार्य अंतराल क्या है?",
        answers: shuffle([
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: true },
            { text: "9 महीने", correct: false },
            { text: "12 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 85(1) के अनुसार, संसद के एक सत्र की अंतिम बैठक और अगले सत्र की पहली बैठक के बीच छह महीने से अधिक का अंतर नहीं होना चाहिए।"
    },
    {
        question: "प्रश्न 3: सामान्यतः एक वर्ष में संसद के कितने सत्र होते हैं?",
        answers: shuffle([
            { text: "एक", correct: false },
            { text: "दो", correct: false },
            { text: "तीन", correct: true },
            { text: "चार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में संसदीय परंपरा के अनुसार, एक वर्ष में तीन सत्र होते हैं: बजट सत्र (फरवरी-मई), मानसून सत्र (जुलाई-सितंबर), और शीतकालीन सत्र (नवंबर-दिसंबर)।"
    },
    {
        question: "प्रश्न 4: संसद के सत्र को स्थगित (Adjournment) करने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "भारत के राष्ट्रपति", correct: false },
            { text: "भारत के प्रधानमंत्री", correct: false },
            { text: "सदन के अध्यक्ष/सभापति", correct: true },
            { text: "संसदीय कार्य मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सदन की बैठक को स्थगित करने की शक्ति लोकसभा में अध्यक्ष और राज्यसभा में सभापति के पास होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> स्थगन कुछ घंटों, दिनों या हफ्तों के लिए हो सकता है।"
    },
    {
        question: "प्रश्न 5: 'सत्रावसान' (Prorogation) का क्या अर्थ है?",
        answers: shuffle([
            { text: "सदन की बैठक को अनिश्चित काल के लिए स्थगित करना", correct: false },
            { text: "सदन के सत्र को समाप्त करना", correct: true },
            { text: "लोकसभा का विघटन", correct: false },
            { text: "किसी विधेयक पर मतदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सत्रावसान का अर्थ है राष्ट्रपति द्वारा संसद के एक सत्र की समाप्ति की घोषणा करना।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सदन के अध्यक्ष/सभापति द्वारा किए गए स्थगन से अलग है।"
    },
    {
        question: "प्रश्न 6: निम्नलिखित में से कौन सा सत्र वर्ष का पहला सत्र होता है?",
        answers: shuffle([
            { text: "मानसून सत्र", correct: false },
            { text: "शीतकालीन सत्र", correct: false },
            { text: "बजट सत्र", correct: true },
            { text: "विशेष सत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बजट सत्र, जो आमतौर पर फरवरी में शुरू होता है, वर्ष का पहला और सबसे लंबा सत्र माना जाता है।"
    },
    {
        question: "प्रश्न 7: 'अनिश्चित काल के लिए स्थगन' (Adjournment sine die) का क्या तात्पर्य है?",
        answers: shuffle([
            { text: "सदन को कुछ घंटों के लिए स्थगित करना", correct: false },
            { text: "सदन को अगली बैठक की तारीख बताए बिना स्थगित करना", correct: true },
            { text: "सदन का सत्रावसान करना", correct: false },
            { text: "सदन को एक निश्चित तिथि तक के लिए स्थगित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सदन को दोबारा बुलाने की कोई निश्चित तारीख बताए बिना स्थगित कर दिया जाता है, तो इसे 'अनिश्चित काल के लिए स्थगन' या 'Adjournment sine die' कहा जाता है।"
    },
    {
        question: "प्रश्न 8: संसद के सत्र का सत्रावसान करने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "राज्यसभा के सभापति", correct: false },
            { text: "राष्ट्रपति", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 85(2)(a) के अनुसार, राष्ट्रपति समय-समय पर सदनों या किसी भी सदन का सत्रावसान कर सकते हैं।"
    },
    {
        question: "प्रश्न 9: लोकसभा के विघटन (Dissolution) और सत्रावसान (Prorogation) में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "विघटन केवल राज्यसभा का होता है", correct: false },
            { text: "सत्रावसान से सदन का जीवनकाल समाप्त हो जाता है", correct: false },
            { text: "विघटन से लोकसभा का जीवनकाल समाप्त हो जाता है, जबकि सत्रावसान से केवल सत्र समाप्त होता है", correct: true },
            { text: "दोनों में कोई अंतर नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सत्रावसान केवल एक सत्र को समाप्त करता है, सदन बना रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> विघटन लोकसभा के जीवनकाल को ही समाप्त कर देता है और नए चुनावों की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्यसभा एक स्थायी सदन है, इसलिए इसका विघटन नहीं होता।"
    },
    {
        question: "प्रश्न 10: \"संयुक्त बैठक\" (Joint Sitting) राष्ट्रपति द्वारा कब बुलाई जाती है?",
        answers: shuffle([
            { text: "जब एक सदन द्वारा पारित विधेयक दूसरे सदन द्वारा अस्वीकार कर दिया जाता है", correct: false },
            { text: "जब विधेयक में किए गए संशोधनों पर दोनों सदन असहमत हों", correct: false },
            { text: "जब दूसरे सदन को विधेयक प्राप्त होने की तारीख से छह महीने से अधिक बीत गए हों", correct: false },
            { text: " सभी स्थितियों में", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 108 के तहत, यदि किसी साधारण विधेयक पर दोनों सदनों के बीच गतिरोध उत्पन्न होता है, तो राष्ट्रपति उस गतिरोध को हल करने के लिए दोनों सदनों की संयुक्त बैठक बुला सकते हैं।"
    },
    {
        question: "प्रश्न 11: संयुक्त बैठक की अध्यक्षता कौन करता है?",
        answers: shuffle([
            { text: "भारत के राष्ट्रपति", correct: false },
            { text: "भारत के उपराष्ट्रपति", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान के अनुच्छेद 118(4) के अनुसार, दोनों सदनों की संयुक्त बैठक की अध्यक्षता लोकसभा अध्यक्ष करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी अनुपस्थिति में, लोकसभा के उपाध्यक्ष और उनकी भी अनुपस्थिति में, राज्यसभा के उपसभापति अध्यक्षता करते हैं।"
    },
    {
        question: "प्रश्न 12: किन विधेयकों पर संयुक्त बैठक नहीं बुलाई जा सकती है?",
        answers: shuffle([
            { text: "साधारण विधेयक और वित्त विधेयक", correct: false },
            { text: "धन विधेयक और संविधान संशोधन विधेयक", correct: true },
            { text: "केवल साधारण विधेयक", correct: false },
            { text: "केवल संविधान संशोधन विधेयक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धन विधेयक (अनुच्छेद 110) के मामले में लोकसभा को विशेष शक्तियाँ प्राप्त हैं, और संविधान संशोधन विधेयक (अनुच्छेद 368) को दोनों सदनों द्वारा अलग-अलग विशेष बहुमत से पारित किया जाना आवश्यक है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इन पर संयुक्त बैठक का कोई प्रावधान नहीं है।"
    },
    {
        question: "प्रश्न 13: 'लेम-डक सत्र' (Lame-duck session) किसे कहते हैं?",
        answers: shuffle([
            { text: "नई लोकसभा के चुनाव के बाद मौजूदा लोकसभा का अंतिम सत्र", correct: true },
            { text: "मानसून सत्र", correct: false },
            { text: "जब सत्र में कोई कार्य नहीं होता", correct: false },
            { text: "सबसे छोटा सत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वह सत्र होता है जिसमें मौजूदा लोकसभा के वे सदस्य भाग लेते हैं जो नई लोकसभा के लिए पुनः निर्वाचित नहीं हो पाए हैं।"
    },
    {
        question: "प्रश्न 14: सदन की कार्यवाही शुरू करने के लिए आवश्यक न्यूनतम सदस्यों की संख्या को क्या कहा जाता है?",
        answers: shuffle([
            { text: "कोरम (गणपूर्ति)", correct: true },
            { text: "बहुमत", correct: false },
            { text: "विशेष बहुमत", correct: false },
            { text: "उपस्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरम या गणपूर्ति सदन की बैठक आयोजित करने के लिए आवश्यक सदस्यों की न्यूनतम संख्या है।"
    },
    {
        question: "प्रश्न 15: लोकसभा और राज्यसभा दोनों के लिए कोरम क्या है?",
        answers: shuffle([
            { text: "कुल सदस्यों का 1/5", correct: false },
            { text: "कुल सदस्यों का 1/10", correct: true },
            { text: "कुल सदस्यों का 1/3", correct: false },
            { text: "50 सदस्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 100(3) के अनुसार, प्रत्येक सदन की बैठक के लिए गणपूर्ति सदन के कुल सदस्यों की संख्या का दसवां हिस्सा (1/10) है।"
    },
    {
        question: "प्रश्न 16: सत्रावसान होने पर सदन में लंबित विधेयकों पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "सभी विधेयक समाप्त हो जाते हैं", correct: false },
            { text: "विधेयक समाप्त नहीं होते (Lapse नहीं करते)", correct: true },
            { text: "केवल लोकसभा में प्रस्तुत विधेयक समाप्त होते हैं", correct: false },
            { text: "केवल राज्यसभा में प्रस्तुत विधेयक समाप्त होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सत्रावसान का सदन में लंबित विधेयकों पर कोई प्रभाव नहीं पड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वे अगले सत्र में फिर से उठाए जा सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> विधेयक केवल लोकसभा के विघटन पर ही समाप्त होते हैं।"
    },
    {
        question: "प्रश्न 17: राष्ट्रपति का विशेष अभिभाषण (Special Address) किस सत्र की शुरुआत में होता है?",
        answers: shuffle([
            { text: "a) प्रत्येक वर्ष के पहले सत्र में", correct: false },
            { text: "b) प्रत्येक आम चुनाव के बाद पहले सत्र में", correct: false },
            { text: "(a) और (b) दोनों", correct: true },
            { text: "केवल बजट सत्र में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 87 के अनुसार, राष्ट्रपति लोकसभा के प्रत्येक आम चुनाव के बाद पहले सत्र की शुरुआत में और प्रत्येक वर्ष के पहले सत्र की शुरुआत में संसद के दोनों सदनों को एक साथ संबोधित करते हैं।"
    },
    {
        question: "प्रश्न 18: शून्य काल (Zero Hour) संसदीय प्रक्रिया में किस देश की देन है?",
        answers: shuffle([
            { text: "ब्रिटेन", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "भारत", correct: true },
            { text: "फ्रांस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शून्य काल संसदीय प्रक्रिया में एक भारतीय नवाचार है जो 1962 में शुरू हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> यह प्रश्नकाल के तुरंत बाद शुरू होता है और सदस्य बिना किसी पूर्व सूचना के महत्वपूर्ण मामले उठा सकते हैं।"
    },
    {
        question: "प्रश्न 19: निम्नलिखित में से कौन सा प्रस्ताव सत्रावसान से प्रभावित नहीं होता है?",
        answers: shuffle([
            { text: "स्थगन प्रस्ताव", correct: false },
            { text: "अविश्वास प्रस्ताव", correct: false },
            { text: "सदन के समक्ष लंबित कोई भी नोटिस", correct: false },
            { text: " कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सत्रावसान के कारण न केवल विधेयक बल्कि सदन के समक्ष लंबित सभी नोटिस, प्रस्ताव, संकल्प आदि समाप्त हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्हें अगले सत्र में नए सिरे से लाना पड़ता है।"
    },
    {
        question: "प्रश्न 20: संसद का सबसे लंबा सत्र कौन सा होता है?",
        answers: shuffle([
            { text: "बजट सत्र", correct: true },
            { text: "मानसून सत्र", correct: false },
            { text: "शीतकालीन सत्र", correct: false },
            { text: "सभी सत्र बराबर अवधि के होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बजट सत्र (फरवरी-मई) आमतौर पर सबसे लंबा होता है क्योंकि इसमें रेल और आम बजट की प्रस्तुति, उन पर चर्चा और विभिन्न मंत्रालयों की अनुदान मांगों को पारित करना शामिल होता है।"
    },
    {
        question: "प्रश्न 21: संसद का सबसे छोटा सत्र कौन सा होता है?",
        answers: shuffle([
            { text: "बजट सत्र", correct: false },
            { text: "मानसून सत्र", correct: false },
            { text: "शीतकालीन सत्र", correct: true },
            { text: "कोई निश्चित नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शीतकालीन सत्र (नवंबर-दिसंबर) की अवधि आमतौर पर सबसे कम होती है।"
    },
    {
        question: "प्रश्न 22: कौन सा कथन स्थगन (Adjournment) का सही वर्णन करता है?",
        answers: shuffle([
            { text: "यह एक सत्र को समाप्त करता है", correct: false },
            { text: "यह एक बैठक को समाप्त करता है, न कि सत्र को", correct: true },
            { text: "यह लोकसभा के जीवनकाल को समाप्त करता है", correct: false },
            { text: "यह केवल राष्ट्रपति द्वारा किया जा सकता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थगन केवल एक विशिष्ट बैठक को एक निश्चित समय के लिए निलंबित करता है, जबकि सत्र जारी रहता है।"
    },
    {
        question: "प्रश्न 23: यदि लोकसभा विघटित हो जाती है, तो राज्यसभा में लंबित विधेयक जो लोकसभा द्वारा पारित नहीं किया गया है, उस पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "विधेयक समाप्त (Lapse) हो जाता है", correct: false },
            { text: "विधेयक समाप्त नहीं होता है", correct: true },
            { text: "राष्ट्रपति की अनुमति से विधेयक जीवित रहता है", correct: false },
            { text: "संयुक्त बैठक बुलाई जाती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 107(4) के अनुसार, यदि कोई विधेयक राज्यसभा में उत्पन्न हुआ है और वहीं लंबित है, और लोकसभा द्वारा पारित नहीं किया गया है, तो वह लोकसभा के विघटन पर समाप्त नहीं होगा।"
    },
    {
        question: "प्रश्न 24: यदि लोकसभा विघटित हो जाती है, तो लोकसभा में लंबित विधेयक पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "विधेयक समाप्त हो जाता है", correct: true },
            { text: "विधेयक राज्यसभा को भेज दिया जाता है", correct: false },
            { text: "विधेयक समाप्त नहीं होता", correct: false },
            { text: "नए चुनाव के बाद विधेयक पर विचार किया जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 107(5) के अनुसार, कोई भी विधेयक जो लोकसभा में लंबित है, या जो राज्यसभा द्वारा पारित कर लोकसभा को भेजा गया है, वह लोकसभा के विघटन पर समाप्त हो जाएगा।"
    },
    {
        question: "प्रश्न 25: प्रश्नकाल (Question Hour) के संदर्भ में, 'तारांकित प्रश्न' (Starred Question) क्या होता है?",
        answers: shuffle([
            { text: "जिसका लिखित उत्तर दिया जाता है", correct: false },
            { text: "जिसका मौखिक उत्तर दिया जाता है और पूरक प्रश्न पूछे जा सकते हैं", correct: true },
            { text: "जो बिना किसी पूर्व सूचना के पूछा जाता है", correct: false },
            { text: "जो केवल मंत्रियों से पूछा जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारांकित प्रश्न का उत्तर मंत्री द्वारा सदन में मौखिक रूप से दिया जाता है और सदस्य को अनुपूरक प्रश्न पूछने का अवसर मिलता है।"
    },
     {
        question: "प्रश्न 26. सत्रावसान की घोषणा कौन करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री की सलाह पर राष्ट्रपति", correct: false },
            { text: "मंत्रिपरिषद की सलाह पर राष्ट्रपति", correct: true },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "राज्यसभा के सभापति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति, मंत्रिपरिषद (जिसकी अध्यक्षता प्रधानमंत्री करते हैं) की सलाह पर संसद के सत्र का सत्रावसान करते हैं।"
    },
    {
        question: "प्रश्न 27. संसद सत्र के दौरान उपयोग होने वाला शब्द \"प्रोरोगेशन\" (Prorogation) का क्या अर्थ है?",
        answers: shuffle([
            { text: "सदन को स्थगित करना", correct: false },
            { text: "सत्र का अंत करना", correct: true },
            { text: "विधेयक को अस्वीकार करना", correct: false },
            { text: "सदन का विघटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रोरोगेशन (सत्रावसान) का अर्थ राष्ट्रपति द्वारा एक सत्र को समाप्त करने की औपचारिक घोषणा है।"
    },
    {
        question: "प्रश्न 28. संसद के सत्र को कौन आहूत (Summon) करता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "उपराष्ट्रपति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 85 के तहत, राष्ट्रपति को संसद के दोनों सदनों का सत्र बुलाने का अधिकार है।"
    },
    {
        question: "प्रश्न 29. एक विधेयक जो लोकसभा द्वारा पारित कर दिया गया है लेकिन राज्यसभा में लंबित है, लोकसभा के विघटन पर क्या होगा?",
        answers: shuffle([
            { text: "विधेयक समाप्त हो जाएगा", correct: true },
            { text: "विधेयक समाप्त नहीं होगा", correct: false },
            { text: "विधेयक संयुक्त बैठक के लिए भेजा जाएगा", correct: false },
            { text: "विधेयक राष्ट्रपति को भेजा जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि कोई विधेयक लोकसभा पारित कर देती है और वह राज्यसभा में विचाराधीन है, तो लोकसभा के भंग होने पर वह विधेयक भी समाप्त हो जाता है।"
    },
    {
        question: "प्रश्न 30. जब सदन का पीठासीन अधिकारी कोरम के अभाव में सदन को स्थगित कर देता है, तो उसे क्या कहते हैं?",
        answers: shuffle([
            { text: "सामान्य स्थगन", correct: false },
            { text: "कोरम के कारण स्थगन", correct: true },
            { text: "सत्रावसान", correct: false },
            { text: "विघटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि सदन में कोरम (कुल सदस्यों का 1/10) पूरा नहीं होता, तो पीठासीन अधिकारी का यह कर्तव्य है कि वह या तो सदन को स्थगित कर दे या कोरम पूरा होने तक बैठक को निलंबित कर दे।"
    },
    {
        question: "प्रश्न 31. अब तक कितनी बार संसद की संयुक्त बैठक बुलाई गई है?",
        answers: shuffle([
            { text: "दो बार", correct: false },
            { text: "तीन बार", correct: true },
            { text: "चार बार", correct: false },
            { text: "कभी नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अब तक तीन बार संयुक्त बैठकें बुलाई गई हैं: दहेज निषेध विधेयक, 1961; बैंकिंग सेवा आयोग (निरसन) विधेयक, 1978; और आतंकवाद निवारण विधेयक (पोटा), 2002।"
    },
    {
        question: "प्रश्न 32. राष्ट्रपति द्वारा जारी अध्यादेश संसद का सत्र शुरू होने के बाद कितनी अवधि तक प्रभावी रहता है?",
        answers: shuffle([
            { text: "6 सप्ताह", correct: true },
            { text: "6 महीने", correct: false },
            { text: "1 वर्ष", correct: false },
            { text: "अनिश्चित काल तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 123 के अनुसार, राष्ट्रपति द्वारा जारी अध्यादेश को संसद सत्र के पुनः आरंभ होने के 6 सप्ताह के भीतर दोनों सदनों द्वारा अनुमोदित किया जाना चाहिए, अन्यथा यह समाप्त हो जाता है।"
    },
    {
        question: "प्रश्न 33. \"अविश्वास प्रस्ताव\" (No-Confidence Motion) किस सदन में प्रस्तुत किया जा सकता है?",
        answers: shuffle([
            { text: "केवल लोकसभा", correct: true },
            { text: "केवल राज्यसभा", correct: false },
            { text: "लोकसभा या राज्यसभा किसी में भी", correct: false },
            { text: "संसद की संयुक्त बैठक में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंत्रिपरिषद सामूहिक रूप से केवल लोकसभा के प्रति उत्तरदायी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, अविश्वास प्रस्ताव केवल लोकसभा में ही लाया जा सकता है।"
    },
    {
        question: "प्रश्न 34. संसद के सत्र के संदर्भ में 'विघटन' (Dissolution) शब्द का प्रयोग किसके लिए होता है?",
        answers: shuffle([
            { text: "राज्यसभा", correct: false },
            { text: "लोकसभा", correct: true },
            { text: "संसद के दोनों सदन", correct: false },
            { text: "संसदीय समिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विघटन केवल लोकसभा का होता है क्योंकि यह एक अस्थायी सदन है जिसका कार्यकाल 5 वर्ष का होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्यसभा एक स्थायी सदन है और इसका विघटन नहीं होता।"
    },
    {
        question: "प्रश्न 35. यदि राष्ट्रपति ने संयुक्त बैठक के लिए अपनी मंशा अधिसूचित कर दी है और उसके बाद लोकसभा भंग हो जाती है, तो क्या होगा?",
        answers: shuffle([
            { text: "संयुक्त बैठक नहीं हो सकती", correct: false },
            { text: "संयुक्त बैठक यथावत होगी", correct: true },
            { text: "नए चुनाव के बाद ही बैठक होगी", correct: false },
            { text: "विधेयक समाप्त हो जाएगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि राष्ट्रपति ने संयुक्त बैठक की अधिसूचना जारी कर दी है, तो लोकसभा के भंग होने के बावजूद संयुक्त बैठक होगी और विधेयक समाप्त नहीं होगा।"
    },
    {
        question: "प्रश्न 36. संसद सदस्य अपनी सदस्यता खो सकता है यदि वह सदन की अनुमति के बिना कितने दिनों तक अनुपस्थित रहता है?",
        answers: shuffle([
            { text: "30 दिन", correct: false },
            { text: "60 दिन", correct: true },
            { text: "90 दिन", correct: false },
            { text: "6 महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 101(4) के अनुसार, यदि कोई सदस्य सदन की अनुमति के बिना 60 दिनों की अवधि तक उसकी सभी बैठकों से अनुपस्थित रहता है, तो सदन उसकी सीट को रिक्त घोषित कर सकता है।"
    },
    {
        question: "प्रश्न 37. \"गिलोटिन\" (Guillotine) संसदीय शब्दावली में किसे संदर्भित करता है?",
        answers: shuffle([
            { text: "प्रस्ताव को अस्वीकार करना", correct: false },
            { text: "अध्यक्ष द्वारा सदस्य को बोलने से रोकना", correct: false },
            { text: "सत्र के अंतिम दिन सभी लंबित मांगों पर बिना चर्चा के मतदान करना", correct: true },
            { text: "विधेयक को स्थायी समिति को भेजना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब अनुदान की मांगों पर चर्चा के लिए आवंटित समय समाप्त हो जाता है, तो अध्यक्ष सभी लंबित मांगों को (चाहे उन पर चर्चा हुई हो या नहीं) मतदान के लिए एक साथ रखता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रक्रिया को गिलोटिन कहा जाता है।"
    },
    {
        question: "प्रश्न 38. संसद के किस सत्र में आर्थिक सर्वेक्षण प्रस्तुत किया जाता है?",
        answers: shuffle([
            { text: "बजट सत्र", correct: true },
            { text: "मानसून सत्र", correct: false },
            { text: "शीतकालीन सत्र", correct: false },
            { text: "किसी भी सत्र में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्थिक सर्वेक्षण आमतौर पर केंद्रीय बजट की प्रस्तुति से एक दिन पहले बजट सत्र के दौरान संसद में पेश किया जाता है।"
    },
    {
        question: "प्रश्न 39. एक वर्ष में संसद की बैठकों के न्यूनतम दिन कितने होने चाहिए?",
        answers: shuffle([
            { text: "100 दिन", correct: false },
            { text: "90 दिन", correct: false },
            { text: "120 दिन", correct: false },
            { text: "संविधान में कोई न्यूनतम दिन निर्धारित नहीं हैं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान केवल यह कहता है कि दो सत्रों के बीच 6 महीने से अधिक का अंतराल नहीं होना चाहिए, लेकिन यह एक वर्ष में बैठकों के न्यूनतम दिनों की संख्या निर्दिष्ट नहीं करता है।"
    },
    {
        question: "प्रश्न 40. \"कटौती प्रस्ताव\" (Cut Motion) का संबंध किससे है?",
        answers: shuffle([
            { text: "संविधान संशोधन विधेयक", correct: false },
            { text: "साधारण विधेयक", correct: false },
            { text: "अनुदान की मांगें (बजट)", correct: true },
            { text: "अविश्वास प्रस्ताव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कटौती प्रस्ताव लोकसभा के सदस्यों द्वारा बजट में सरकार द्वारा प्रस्तावित अनुदान की मांगों में कमी करने के लिए पेश किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सरकार की नीति के प्रति असहमति व्यक्त करने का एक तरीका है।"
    },
    {
        question: "प्रश्न 41. 'प्रोटेम स्पीकर' की नियुक्ति कौन करता है?",
        answers: shuffle([
            { text: "निवर्तमान लोकसभा अध्यक्ष", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "मुख्य चुनाव आयुक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राष्ट्रपति आमतौर पर नवनिर्वाचित लोकसभा के सबसे वरिष्ठ सदस्य को प्रोटेम स्पीकर नियुक्त करते हैं।"
    },
    {
        question: "प्रश्न 42. संसद के अवकाश (जब सत्र न चल रहा हो) के दौरान राष्ट्रपति द्वारा जारी अध्यादेश की अधिकतम आयु क्या हो सकती है?",
        answers: shuffle([
            { text: "6 सप्ताह", correct: false },
            { text: "3 महीने", correct: false },
            { text: "6 महीने", correct: false },
            { text: "6 महीने और 6 सप्ताह", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो सत्रों के बीच अधिकतम अंतराल 6 महीने हो सकता है, और सत्र शुरू होने के बाद अध्यादेश को 6 सप्ताह के भीतर अनुमोदित किया जाना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> इस प्रकार, एक अध्यादेश की अधिकतम आयु 6 महीने और 6 सप्ताह हो सकती है।"
    },
    {
        question: "प्रश्न 43. सत्रावसान के बाद सदन को फिर से समवेत (assemble) करने का अधिकार किसे है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "राज्यसभा के सभापति", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "प्रधानमंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जिस प्रकार राष्ट्रपति सत्र का सत्रावसान करते हैं, उसी प्रकार वे अगले सत्र को बुलाने के लिए भी अधिकृत हैं।"
    },
    {
        question: "प्रश्न 44. यदि किसी विधेयक पर दोनों सदनों के बीच गतिरोध उत्पन्न हो गया है, तो संयुक्त बैठक बुलाने का निर्णय कौन लेता है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "प्रधानमंत्री की अध्यक्षता में कैबिनेट", correct: false },
            { text: "राष्ट्रपति", correct: true },
            { text: "भारत के मुख्य न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 108 के तहत संयुक्त बैठक बुलाने का अधिकार केवल राष्ट्रपति के पास है, हालांकि वह यह निर्णय मंत्रिपरिषद की सलाह पर लेते हैं।"
    },
    {
        question: "प्रश्न 45. भारतीय संसदीय प्रणाली में \"लेखानुदान\" (Vote on Account) का क्या उपयोग है?",
        answers: shuffle([
            { text: "बजट के विस्तृत परीक्षण के लिए", correct: false },
            { text: "जब सरकार के पास बहुमत न हो", correct: false },
            { text: "बजट पारित होने तक सरकार के खर्चों के लिए अग्रिम अनुदान", correct: true },
            { text: "किसी अप्रत्याशित खर्च के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चूंकि बजट प्रक्रिया को पूरा होने में समय लगता है, इसलिए सरकार नए वित्तीय वर्ष की शुरुआत में अपने खर्चों को पूरा करने के लिए संसद से लेखानुदान के माध्यम से अग्रिम धनराशि प्राप्त करती है।"
    },
    {
        question: "प्रश्न 46. स्थगन प्रस्ताव (Adjournment Motion) का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "सरकार की आलोचना करना", correct: false },
            { text: "अविलंबनीय लोक महत्व के किसी निश्चित मामले पर चर्चा करना", correct: true },
            { text: "किसी मंत्री के खिलाफ अविश्वास व्यक्त करना", correct: false },
            { text: "बजट में कटौती करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्थगन प्रस्ताव सदन की सामान्य कार्यवाही को बाधित करके तत्काल सार्वजनिक महत्व के एक निश्चित मामले पर ध्यान आकर्षित करने के लिए पेश किया जाता है।"
    },
    {
        question: "प्रश्न 47. राज्यसभा में सत्रावसान और स्थगन की घोषणा कौन करता है?",
        answers: shuffle([
            { text: "सत्रावसान राष्ट्रपति द्वारा, स्थगन सभापति द्वारा", correct: true },
            { text: "दोनों राष्ट्रपति द्वारा", correct: false },
            { text: "दोनों सभापति द्वारा", correct: false },
            { text: "सत्रावसान सभापति द्वारा, स्थगन राष्ट्रपति द्वारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी सदन में, सत्र का सत्रावसान राष्ट्रपति करते हैं, जबकि सदन की बैठक का स्थगन पीठासीन अधिकारी (राज्यसभा में सभापति) करते हैं।"
    },
    {
        question: "प्रश्न 48. लोकसभा का विघटन कौन कर सकता है?",
        answers: shuffle([
            { text: "प्रधानमंत्री", correct: false },
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "मंत्रिपरिषद की सलाह पर राष्ट्रपति", correct: true },
            { text: "मुख्य चुनाव आयुक्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनुच्छेद 85(2)(b) के अनुसार, राष्ट्रपति समय-समय पर लोकसभा का विघटन कर सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह आमतौर पर मंत्रिपरिषद की सलाह पर किया जाता है।"
    },
    {
        question: "प्रश्न 49. किस स्थिति में एक विधेयक जो राष्ट्रपति की स्वीकृति के लिए भेजा गया है, लोकसभा के विघटन से समाप्त नहीं होता है?",
        answers: shuffle([
            { text: "यदि यह केवल लोकसभा द्वारा पारित किया गया हो", correct: false },
            { text: "यदि यह दोनों सदनों द्वारा पारित कर दिया गया हो", correct: true },
            { text: "यदि यह राज्यसभा में लंबित हो", correct: false },
            { text: "ऐसी कोई स्थिति नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि कोई विधेयक संसद के दोनों सदनों द्वारा पारित कर राष्ट्रपति की सहमति के लिए भेजा जा चुका है, तो वह लोकसभा के विघटन से समाप्त नहीं होगा।"
    },
    {
        question: "प्रश्न 50. संसद की \"विशेष सत्र\" बुलाने की शक्ति किसके पास है?",
        answers: shuffle([
            { text: "लोकसभा अध्यक्ष", correct: false },
            { text: "प्रधानमंत्री", correct: false },
            { text: "सरकार की सलाह पर राष्ट्रपति", correct: true },
            { text: "विपक्ष के नेता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> संविधान में \"विशेष सत्र\" का स्पष्ट उल्लेख नहीं है, लेकिन सरकार की सलाह पर राष्ट्रपति किसी भी समय संसद का सत्र बुला सकते हैं, जिसे विशेष सत्र कहा जा सकता है।"
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