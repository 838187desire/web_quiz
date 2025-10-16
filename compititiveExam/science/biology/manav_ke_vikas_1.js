const questions = [
    {
        topHeading: "मानव के विकास पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1: आधुनिक मानव का वैज्ञानिक नाम क्या है?",
        answers: shuffle([
            { text: "होमो हैबिलिस", correct: false },
            { text: "होमो इरेक्टस", correct: false },
            { text: "होमो सेपियन्स", correct: true },
            { text: "होमो निएंडरथेलेंसिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> \"होमो सेपियन्स\" लैटिन भाषा का शब्द है जिसका अर्थ है 'बुद्धिमान व्यक्ति'।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह आधुनिक मनुष्यों के लिए उपयोग किया जाने वाला वैज्ञानिक नाम है।"
    },
    {
        question: "प्रश्न 2: मानव विकास के क्रम में दो पैरों पर सीधा चलना (द्विपाद गमन) का सबसे महत्वपूर्ण लाभ क्या था?",
        answers: shuffle([
            { text: "तेज दौड़ना", correct: false },
            { text: "बेहतर तैरना", correct: false },
            { text: "हाथों का औजार बनाने और उपयोग करने के लिए स्वतंत्र होना", correct: true },
            { text: "शरीर का वजन कम करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दो पैरों पर चलने से हाथ मुक्त हो गए।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे हमारे पूर्वज औजार बना सकते थे, भोजन ले जा सकते थे और बच्चों को उठा सकते थे, जो विकास में एक महत्वपूर्ण कदम था।"
    },
    {
        question: "प्रश्न 3: किस मानव पूर्वज को 'औजार निर्माता' (Tool Maker) के रूप में जाना जाता है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलोपिथेकस", correct: false },
            { text: "होमो हैबिलिस", correct: true },
            { text: "रामापिथेकस", correct: false },
            { text: "ड्रायोपिथेकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> \"होमो हैबिलिस\" का अर्थ ही 'दक्ष मानव' या 'उपयोगी मानव' (Handy Man) है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह पहली ज्ञात प्रजाति थी जिसने पत्थर के औजार बनाए और उनका इस्तेमाल किया।"
    },
    {
        question: "प्रश्न 4: आग का उपयोग करने वाला प्रथम मानव पूर्वज कौन था?",
        answers: shuffle([
            { text: "होमो हैबिलिस", correct: false },
            { text: "होमो इरेक्टस", correct: true },
            { text: "निएंडरथल मानव", correct: false },
            { text: "क्रो-मैग्नन मानव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होमो इरेक्टस ('सीधा खड़ा होने वाला मानव') ने सबसे पहले आग का नियंत्रित उपयोग सीखा।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका इस्तेमाल वे गर्मी, सुरक्षा और भोजन पकाने के लिए करते थे।"
    },
    {
        question: "प्रश्न 5: प्रसिद्ध जीवाश्म 'लूसी' (Lucy) किस प्रजाति से संबंधित है?",
        answers: shuffle([
            { text: "होमो इरेक्टस", correct: false },
            { text: "ऑस्ट्रेलोपिथेकस एफारेंसिस", correct: true },
            { text: "होमो सेपियन्स", correct: false },
            { text: "निएंडरथल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लूसी' इथियोपिया में खोजा गया एक 3.2 मिलियन वर्ष पुराना आंशिक कंकाल है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह ऑस्ट्रेलोपिथेकस एफारेंसिस प्रजाति का है और इसने प्रारंभिक मानवों के द्विपाद गमन का मजबूत प्रमाण दिया।"
    },
    {
        question: "प्रश्न 6: निएंडरथल मानव के विलुप्त होने का सबसे स्वीकृत सिद्धांत क्या है?",
        answers: shuffle([
            { text: "वे उड़ने लगे", correct: false },
            { text: "होमो सेपियन्स के साथ प्रतिस्पर्धा और आत्मसातीकरण", correct: true },
            { text: "ज्वालामुखी विस्फोट", correct: false },
            { text: "बाढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि जब होमो सेपियन्स अफ्रीका से यूरोप और एशिया में फैले।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो उन्होंने संसाधनों के लिए निएंडरथल के साथ प्रतिस्पर्धा की, और संभवतः उनके साथ अंतःप्रजनन भी किया, जिससे धीरे-धीरे निएंडरथल विलुप्त हो गए।"
    },
    {
        question: "प्रश्न 7: मानव विकास के दौरान किस शारीरिक विशेषता में लगातार वृद्धि हुई है?",
        answers: shuffle([
            { text: "दांतों का आकार", correct: false },
            { text: "जबड़े की मांसपेशियां", correct: false },
            { text: "कपालीय क्षमता (Cranial Capacity)", correct: true },
            { text: "शरीर पर बालों की मात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलोपिथेकस से लेकर होमो सेपियन्स तक, मस्तिष्क के आकार या कपालीय क्षमता में लगातार और महत्वपूर्ण वृद्धि हुई है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो बढ़ी हुई बुद्धिमत्ता से जुड़ी है।"
    },
    {
        question: "प्रश्न 8: 'क्रो-मैग्नन' मानव किसे माना जाता है?",
        answers: shuffle([
            { text: "होमो हैबिलिस का एक प्रकार", correct: false },
            { text: "होमो इरेक्टस का एक प्रकार", correct: false },
            { text: "प्रारंभिक आधुनिक होमो सेपियन्स", correct: true },
            { text: "निएंडरथल मानव का पूर्वज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रो-मैग्नन यूरोप में पाए गए प्रारंभिक आधुनिक होमो सेपियन्स के जीवाश्म हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  वे गुफा कला, उन्नत औजारों और जटिल सामाजिक संरचनाओं के लिए जाने जाते हैं।"
    },
    {
        question: "प्रश्न 9: मानव, चिंपैंजी, गोरिल्ला और ओरंगउटान को एक साथ किस परिवार (Family) में रखा गया है?",
        answers: shuffle([
            { text: "फेलिडे (Felidae)", correct: false },
            { text: "कैनिडे (Canidae)", correct: false },
            { text: "होमोनिडे (Hominidae)", correct: true },
            { text: "सेर्विडे (Cervidae)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> होमोनिडे परिवार में सभी महान वानर (great apes) शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिनमें मनुष्य और उनके निकटतम जीवित रिश्तेदार जैसे चिंपैंजी और गोरिल्ला शामिल हैं।"
    },
    {
        question: "प्रश्न 10: मानव विकास का सही कालानुक्रमिक क्रम क्या है?",
        answers: shuffle([
            { text: "होमो हैबिलिस → होमो इरेक्टस → ऑस्ट्रेलोपिथेकस → होमो सेपियन्स", correct: false },
            { text: "ऑस्ट्रेलोपिथेकस → होमो हैबिलिस → होमो इरेक्टस → होमो सेपियन्स", correct: true },
            { text: "ऑस्ट्रेलोपिथेकस → होमो इरेक्टस → होमो हैबिलिस → होमो सेपियन्स", correct: false },
            { text: "होमो इरेक्टस → होमो हैबिलिस → होमो सेपियन्स → ऑस्ट्रेलोपिथेकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह मानव जीनस 'होमो' के विकास का सामान्यतः स्वीकृत क्रम है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो ऑस्ट्रेलोपिथेकस जैसे पहले के होमिनिन से विकसित हुआ।"
    },
    {
        question: "प्रश्न 11: कौन सा मानव पूर्वज अपने मृतकों को दफनाने वाला पहला था?",
        answers: shuffle([
            { text: "होमो हैबिलिस", correct: false },
            { text: "होमो इरेक्टस", correct: false },
            { text: "निएंडरथल मानव", correct: true },
            { text: "ऑस्ट्रेलोपिथेकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निएंडरथल के पुरातात्विक स्थलों से मृतकों को जानबूझकर दफनाने के शुरुआती प्रमाण मिले हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो प्रतीकात्मक सोच और अनुष्ठान की शुरुआत का संकेत देते हैं।"
    },
    {
        question: "प्रश्न 12: 'आउट ऑफ अफ्रीका' (Out of Africa) सिद्धांत क्या बताता है?",
        answers: shuffle([
            { text: "सभी जीवन की उत्पत्ति अफ्रीका में हुई", correct: false },
            { text: "आधुनिक मानव (होमो सेपियन्स) अफ्रीका में विकसित हुए और फिर दुनिया भर में फैल गए", correct: true },
            { text: "केवल अफ्रीकी लोग ही असली इंसान हैं", correct: false },
            { text: "सभी वानर अफ्रीका से आए हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत, जिसे 'रीसेंट अफ्रीकन ओरिजिन' मॉडल भी कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह बताता है कि होमो सेपियन्स की उत्पत्ति अफ्रीका में हुई और उन्होंने दुनिया के अन्य हिस्सों में पहले से मौजूद होमिनिन प्रजातियों (जैसे निएंडरथल) की जगह ले ली।"
    },
    {
        question: "प्रश्न 13: जावा मानव (Java Man) और पेकिंग मानव (Peking Man) किस प्रजाति से संबंधित हैं?",
        answers: shuffle([
            { text: "होमो हैबिलिस", correct: false },
            { text: "होमो इरेक्टस", correct: true },
            { text: "ऑस्ट्रेलोपिथेकस", correct: false },
            { text: "होमो सेपियन्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जावा मानव और पेकिंग मानव एशिया में पाए गए होमो इरेक्टस के प्रसिद्ध जीवाश्म हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो अफ्रीका से बाहर मानव के प्रवास का प्रमाण देते हैं।"
    },
    {
        question: "प्रश्न 14: किस मानव पूर्वज ने सबसे पहले गुफाओं में चित्रकारी (Cave Painting) की?",
        answers: shuffle([
            { text: "निएंडरथल", correct: false },
            { text: "होमो इरेक्टस", correct: false },
            { text: "क्रो-मैग्नन (होमो सेपियन्स)", correct: true },
            { text: "होमो हैबिलिस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फ्रांस में लास्कॉक्स और स्पेन में अल्तामिरा जैसी गुफाओं में मिली प्रसिद्ध प्रागैतिहासिक कलाकृतियाँ क्रो-मैग्नन मानव द्वारा बनाई गई थीं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उच्च स्तरीय प्रतीकात्मक सोच को दर्शाती हैं।"
    },
    {
        question: "प्रश्न 15: मानव का निकटतम जीवित रिश्तेदार कौन है?",
        answers: shuffle([
            { text: "गोरिल्ला", correct: false },
            { text: "ओरंगउटान", correct: false },
            { text: "बंदर", correct: false },
            { text: "चिंपैंजी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डीएनए विश्लेषण से पता चलता है कि मनुष्यों और चिंपैंजी का डीएनए 98% से अधिक समान है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उन्हें हमारा निकटतम जीवित विकासवादी रिश्तेदार बनाता है।"
    },
    {
        question: "प्रश्न 16: 'ऑस्ट्रेलोपिथेकस' शब्द का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "उत्तरी वानर", correct: false },
            { text: "दक्षिणी वानर (Southern Ape)", correct: true },
            { text: "पूर्वी मानव", correct: false },
            { text: "बुद्धिमान वानर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ऑस्ट्रल' का अर्थ 'दक्षिणी' और 'पिथेकस' का अर्थ 'वानर' है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इनका नाम इसलिए रखा गया क्योंकि शुरुआती जीवाश्म दक्षिणी अफ्रीका में पाए गए थे।"
    },
    {
        question: "प्रश्न 17: मानव विकास में जबड़े और दांतों के आकार में क्या परिवर्तन देखा गया?",
        answers: shuffle([
            { text: "वे बड़े और मजबूत होते गए", correct: false },
            { text: "वे छोटे और कम मजबूत होते गए", correct: true },
            { text: "कोई परिवर्तन नहीं हुआ", correct: false },
            { text: "केवल दांत बड़े हुए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे-जैसे मानव पूर्वजों ने औजारों का उपयोग करना और भोजन पकाना सीखा।<br><br><i class='fa-solid fa-angles-right icon'></i>  भोजन को चबाने के लिए बड़े, मजबूत जबड़ों और दांतों की आवश्यकता कम होती गई, जिससे वे समय के साथ छोटे हो गए।"
    },
    {
        question: "प्रश्न 18: प्रागैतिहासिक मानवों का अध्ययन क्या कहलाता है?",
        answers: shuffle([
            { text: "जीवाश्म विज्ञान (Paleontology)", correct: false },
            { text: "मानवशास्त्र (Anthropology)", correct: false },
            { text: "पुरातत्व विज्ञान (Archaeology)", correct: false },
            { text: "पुरामानवशास्त्र (Paleoanthropology)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुरामानवशास्त्र (Paleoanthropology), मानवशास्त्र और जीवाश्म विज्ञान की एक शाखा है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो जीवाश्मों और पुरातात्विक साक्ष्यों के माध्यम से मानव विकास का अध्ययन करती है।"
    },
    {
        question: "प्रश्न 19: निम्नलिखित में से कौन मानव और कपि (ape) दोनों के लक्षण प्रदर्शित करता था?",
        answers: shuffle([
            { text: "ड्रायोपिथेकस", correct: false },
            { text: "होमो इरेक्टस", correct: false },
            { text: "ऑस्ट्रेलोपिथेकस", correct: true },
            { text: "होमो सेपियन्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलोपिथेकस में कपि जैसे लक्षण (छोटा मस्तिष्क, लंबा चेहरा) और मानव जैसे लक्षण (द्विपाद गमन) दोनों थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो इसे एक महत्वपूर्ण संक्रमणकालीन जीवाश्म बनाता है।"
    },
    {
        question: "प्रश्न 20: सबसे अधिक कपालीय क्षमता किस मानव प्रजाति की थी?",
        answers: shuffle([
            { text: "होमो हैबिलिस (लगभग 650-800 cc)", correct: false },
            { text: "होमो इरेक्टस (लगभग 900 cc)", correct: false },
            { text: "निएंडरथल मानव (लगभग 1400 cc)", correct: true },
            { text: "ऑस्ट्रेलोपिथेकस (लगभग 400-500 cc)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निएंडरथल मानव की औसत कपालीय क्षमता आधुनिक मनुष्यों (लगभग 1350 cc) से थोड़ी अधिक थी।<br><br><i class='fa-solid fa-angles-right icon'></i>  हालांकि मस्तिष्क का संगठन भिन्न था।"
    },
    {
        question: "प्रश्न 21: किस महाद्वीप को 'मानव जाति का पालना' (Cradle of Humankind) कहा जाता है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अफ्रीका", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश शुरुआती होमिनिन जीवाश्म अफ्रीका में पाए गए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और आनुवंशिक साक्ष्य भी इंगित करते हैं कि आधुनिक मानवों की उत्पत्ति इसी महाद्वीप पर हुई।"
    },
    {
        question: "प्रश्न 22: मानव किस गण (Order) के अंतर्गत आता है?",
        answers: shuffle([
            { text: "कार्निवोरा (Carnivora)", correct: false },
            { text: "प्राइमेट (Primates)", correct: true },
            { text: "रोडेंशिया (Rodentia)", correct: false },
            { text: "आर्टियोडैक्टाइला (Artiodactyla)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राइमेट गण में मनुष्य, वानर, कपि और लेमूर जैसे स्तनधारी शामिल हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिनकी विशेषताएं बड़े मस्तिष्क, हाथों से पकड़ने की क्षमता और त्रिविम दृष्टि है।"
    },
    {
        question: "प्रश्न 23: ड्रायोपिथेकस को किसका पूर्वज माना जाता है?",
        answers: shuffle([
            { text: "केवल मनुष्यों का", correct: false },
            { text: "केवल कपियों (Apes) का", correct: false },
            { text: "मनुष्य और कपि दोनों का", correct: true },
            { text: "बंदरों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ड्रायोपिथेकस एक विलुप्त कपि है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसे मनुष्यों और आधुनिक महान कपियों (चिंपैंजी, गोरिल्ला) का एक साझा पूर्वज माना जाता है।"
    },
    {
        question: "प्रश्न 24: कौन सी घटना लगभग 10,000 साल पहले हुई और इसने मानव समाज को स्थायी रूप से बदल दिया?",
        answers: shuffle([
            { text: "आग की खोज", correct: false },
            { text: "पहिये का आविष्कार", correct: false },
            { text: "कृषि का विकास (Neolithic Revolution)", correct: true },
            { text: "भाषा का विकास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नवपाषाण क्रांति के दौरान कृषि और पशुपालन की शुरुआत ने शिकारी-संग्राहक जीवन शैली को समाप्त कर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे स्थायी बस्तियों, गांवों और बाद में सभ्यताओं का विकास हुआ।"
    },
    {
        question: "प्रश्न 25: मानव कशेरुक स्तंभ (vertebral column) में 'S' आकार का वक्र किसके लिए एक अनुकूलन है?",
        answers: shuffle([
            { text: "पेड़ों पर चढ़ने के लिए", correct: false },
            { text: "तैरने के लिए", correct: false },
            { text: "सीधे खड़े होने (द्विपाद गमन) के दौरान शरीर को संतुलित करने के लिए", correct: true },
            { text: "तेजी से दौड़ने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह 'S' आकार का वक्र एक स्प्रिंग की तरह काम करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो चलते समय झटकों को अवशोषित करता है और गुरुत्वाकर्षण केंद्र को स्थिर रखता है, जो सीधे खड़े होने (द्विपाद गमन) के लिए महत्वपूर्ण है।"
    },
    {
        question: "प्रश्न 26: 'रामापिथेकस' के जीवाश्म कहाँ पाए गए थे?",
        answers: shuffle([
            { text: "अफ्रीका और यूरोप", correct: false },
            { text: "भारत की शिवालिक पहाड़ियों और अफ्रीका", correct: true },
            { text: "केवल दक्षिण अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया और एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रामापिथेकस के जीवाश्म भारत के शिवालिक क्षेत्र और अफ्रीका में पाए गए हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और इसे प्रारंभिक होमिनिन वंश का हिस्सा माना जाता था।"
    },
    {
        question: "प्रश्न 27: आधुनिक मानव की कौन सी विशेषता उसे अन्य प्राइमेट से अलग करती है?",
        answers: shuffle([
            { text: "औजारों का उपयोग", correct: false },
            { text: "सामाजिक समूह में रहना", correct: false },
            { text: "जटिल प्रतीकात्मक भाषा और संस्कृति", correct: true },
            { text: "द्विपाद गमन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जबकि अन्य प्राइमेट में संचार और सरल औजारों का उपयोग देखा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  केवल मनुष्यों के पास जटिल व्याकरण वाली भाषा, कला, धर्म और विविध संस्कृतियाँ हैं।"
    },
    {
        question: "प्रश्न 28: कौन सा कारक मानव के विकास में एक प्रमुख प्रेरक शक्ति नहीं था?",
        answers: shuffle([
            { text: "जलवायु परिवर्तन", correct: false },
            { text: "डायनासोरों से प्रतिस्पर्धा", correct: true },
            { text: "भोजन की आदतों में बदलाव", correct: false },
            { text: "प्रवासन और नए वातावरण के लिए अनुकूलन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डायनासोर लगभग 65 मिलियन वर्ष पहले विलुप्त हो गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि मानव का विकास बहुत बाद में, पिछले 6-7 मिलियन वर्षों में हुआ। इसलिए, उनके बीच कोई प्रतिस्पर्धा नहीं थी।"
    },
    {
        question: "प्रश्न 29: तंजानिया में 'लेतोली पदचिह्न' (Laetoli footprints) क्या साबित करते हैं?",
        answers: shuffle([
            { text: "होमो इरेक्टस द्वारा आग का उपयोग", correct: false },
            { text: "लगभग 3.6 मिलियन वर्ष पहले प्रारंभिक होमिनिन द्वारा द्विपाद गमन", correct: true },
            { text: "निएंडरथल द्वारा दफन अनुष्ठान", correct: false },
            { text: "होमो हैबिलिस द्वारा औजार निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वालामुखी की राख में संरक्षित ये पदचिह्न ऑस्ट्रेलोपिथेकस द्वारा बनाए गए थे।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह दिखाते हैं कि वे लगभग 3.6 मिलियन वर्ष पहले आधुनिक मनुष्यों की तरह ही सीधे चलते थे।"
    },
    {
        question: "प्रश्न 30: मानव विकास में सांस्कृतिक विकास, जैविक विकास से तेज क्यों हो गया?",
        answers: shuffle([
            { text: "क्योंकि मानव ने प्रजनन करना बंद कर दिया", correct: false },
            { text: "क्योंकि ज्ञान और कौशल भाषा के माध्यम से एक पीढ़ी से दूसरी पीढ़ी तक तेजी से प्रसारित किए जा सकते हैं", correct: true },
            { text: "क्योंकि जैविक विकास रुक गया है", correct: false },
            { text: "क्योंकि मनुष्य अन्य ग्रहों पर चले गए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैविक विकास धीमी आनुवंशिक परिवर्तनों पर निर्भर करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जबकि सांस्कृतिक विकास (जैसे प्रौद्योगिकी, कला, विज्ञान) शिक्षा और संचार (भाषा) के माध्यम से बहुत तेजी से फैल सकता है और जमा हो सकता है।"
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