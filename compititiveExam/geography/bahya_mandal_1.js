const questions = [
    {
        topHeading: "बाह्यमंडल पर आधारित 50 MCQs part_1  (quiz_no.)"
    },
    {
        question: "बाह्यमंडल (Exosphere) वायुमंडल की कौन सी परत है?",
        answers: shuffle([
            { text: "सबसे निचली परत", correct: false },
            { text: "दूसरी परत", correct: false },
            { text: "मध्य परत", correct: false },
            { text: "सबसे ऊपरी परत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल पृथ्वी के वायुमंडल की सबसे बाहरी और सबसे ऊपरी परत है, जो अंततः अंतरिक्ष में विलीन हो जाती है।"
    },
    {
        question: "बाह्यमंडल की निचली सीमा को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ट्रोपोपॉज़", correct: false },
            { text: "स्ट्रेटोपॉज़", correct: false },
            { text: "मेसोपॉज़", correct: false },
            { text: "थर्मोपॉज़ या एक्सोबेस", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> थर्मोपॉज़ (या एक्सोबेस) वह ऊंचाई है जहाँ से बाह्यमंडल शुरू होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तापमंडल (थर्मोस्फीयर) और बाह्यमंडल के बीच की सीमा है।"
    },
    {
        question: "बाह्यमंडल में मुख्य रूप से कौन सी गैसें पाई जाती हैं?",
        answers: shuffle([
            { text: "ऑक्सीजन और नाइट्रोजन", correct: false },
            { text: "ओजोन और मीथेन", correct: false },
            { text: "हाइड्रोजन और हीलियम", correct: true },
            { text: "कार्बन डाइऑक्साइड और आर्गन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल में हवा अत्यंत विरल होती है और गुरुत्वाकर्षण बहुत कमजोर होता है, इसलिए यहाँ केवल सबसे हल्की गैसें जैसे हाइड्रोजन और हीलियम ही रुक पाती हैं।"
    },
    {
        question: "बाह्यमंडल का घनत्व कैसा होता है?",
        answers: shuffle([
            { text: "बहुत अधिक", correct: false },
            { text: "मध्यम", correct: false },
            { text: "अत्यंत कम", correct: true },
            { text: "पृथ्वी की सतह के बराबर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल में गैस के अणु एक दूसरे से सैकड़ों किलोमीटर दूर हो सकते हैं, जिससे इसका घनत्व लगभग निर्वात (वैक्यूम) जैसा होता है।"
    },
    {
        question: "किस परत के बाद वायुमंडल अंतरिक्ष में विलीन हो जाता है?",
        answers: shuffle([
            { text: "मध्यमंडल", correct: false },
            { text: "तापमंडल", correct: false },
            { text: "बाह्यमंडल", correct: true },
            { text: "समतापमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल की कोई स्पष्ट ऊपरी सीमा नहीं है; यह धीरे-धीरे अंतरग्रहीय अंतरिक्ष (interplanetary space) में मिल जाता है।"
    },
    {
        question: "बाह्यमंडल में तापमान की प्रकृति कैसी होती है?",
        answers: shuffle([
            { text: "ऊंचाई के साथ घटता है", correct: false },
            { text: "ऊंचाई के साथ बढ़ता है", correct: true },
            { text: "स्थिर रहता है", correct: false },
            { text: "पहले घटता है फिर बढ़ता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर विकिरण के सीधे संपर्क में आने के कारण बाह्यमंडल में तापमान बहुत अधिक हो सकता है, जो 1500°C या उससे भी अधिक तक पहुंच सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, कम घनत्व के कारण यह गर्मी महसूस नहीं होती।"
    },
    {
        question: "अधिकांश कृत्रिम उपग्रह पृथ्वी की किस कक्षा में बाह्यमंडल के क्षेत्र में परिक्रमा करते हैं?",
        answers: shuffle([
            { text: "निम्न भू-कक्षा", correct: true },
            { text: "भू-स्थिर कक्षा", correct: false },
            { text: "ध्रुवीय कक्षा", correct: false },
            { text: " सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कई उपग्रह, विशेष रूप से निम्न भू-कक्षा (Low Earth Orbit) वाले, बाह्यमंडल और ऊपरी तापमंडल के क्षेत्र में ही पृथ्वी की परिक्रमा करते हैं।"
    },
    {
        question: "'वायुमंडलीय पलायन' (Atmospheric Escape) की घटना मुख्य रूप से किस परत में होती है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "मध्यमंडल", correct: false },
            { text: "बाह्यमंडल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल में, गैस के कणों की गति इतनी तेज हो सकती है कि वे पृथ्वी के गुरुत्वाकर्षण से मुक्त होकर अंतरिक्ष में पलायन कर जाते हैं।"
    },
    {
        question: "बाह्यमंडल की निचली सीमा (एक्सोबेस) की अनुमानित ऊंचाई क्या है?",
        answers: shuffle([
            { text: "50 से 80 किलोमीटर", correct: false },
            { text: "80 से 100 किलोमीटर", correct: false },
            { text: "100 से 200 किलोमीटर", correct: false },
            { text: "500 से 1000 किलोमीटर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक्सोबेस की ऊंचाई सौर गतिविधि के आधार पर बदलती रहती है, लेकिन यह आमतौर पर 500 से 1000 किलोमीटर के बीच होती है।"
    },
    {
        question: "बाह्यमंडल के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "मौसम विज्ञान", correct: false },
            { text: "वायु-गतिकी", correct: false },
            { text: "एरोनॉमी (वायु-विज्ञान)", correct: true },
            { text: "खगोल विज्ञान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एरोनॉमी विज्ञान की वह शाखा है जो ऊपरी वायुमंडल (जिसमें बाह्यमंडल भी शामिल है) की भौतिकी और रसायन शास्त्र का अध्ययन करती है।"
    },
    {
        question: "पृथ्वी के चुंबकीय क्षेत्र की बाहरी सीमा, जिसे मैग्नेटोपॉज़ कहते हैं, का विस्तार किस परत तक होता है?",
        answers: shuffle([
            { text: "मध्यमंडल", correct: false },
            { text: "तापमंडल", correct: false },
            { text: "बाह्यमंडल", correct: true },
            { text: "समतापमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का चुंबकीय क्षेत्र (मैग्नेटोस्फीयर) बाह्यमंडल में और उससे भी आगे तक फैला होता है और यह सौर पवनों से पृथ्वी की रक्षा करता है।"
    },
    {
        question: "बाह्यमंडल में कणों की गति किस प्रकार की होती है?",
        answers: shuffle([
            { text: "तरल प्रवाह", correct: false },
            { text: "टकराव रहित या बैलिस्टिक", correct: true },
            { text: "भंवरदार प्रवाह", correct: false },
            { text: "स्थिर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कणों के बीच अत्यधिक दूरी के कारण, वे शायद ही कभी एक-दूसरे से टकराते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे गुरुत्वाकर्षण के प्रभाव में बैलिस्टिक प्रक्षेप पथ (ballistic trajectories) में यात्रा करते हैं।"
    },
    {
        question: "'भू-कोरोना' (Geocorona) जो कि हाइड्रोजन परमाणुओं का एक चमकदार प्रभामंडल है, किस परत का हिस्सा है?",
        answers: shuffle([
            { text: "ओजोनमंडल", correct: false },
            { text: "आयनमंडल", correct: false },
            { text: "बाह्यमंडल", correct: true },
            { text: "मध्यमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भू-कोरोना बाह्यमंडल का सबसे बाहरी क्षेत्र है, जो पृथ्वी के चारों ओर फैले तटस्थ हाइड्रोजन परमाणुओं से बना है और यह पराबैंगनी प्रकाश में चमकता है।"
    },
    {
        question: "बाह्यमंडल में हवा का दबाव कैसा होता है?",
        answers: shuffle([
            { text: "समुद्र तल के बराबर", correct: false },
            { text: "लगभग शून्य", correct: true },
            { text: "समुद्र तल से अधिक", correct: false },
            { text: "बहुत परिवर्तनशील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कणों की अत्यधिक कम संख्या के कारण, बाह्यमंडल में वायुमंडलीय दबाव लगभग नगण्य या शून्य के करीब होता है।"
    },
    {
        question: "क्या बाह्यमंडल में मौसम संबंधी घटनाएं होती हैं?",
        answers: shuffle([
            { text: "हाँ, नियमित रूप से", correct: false },
            { text: "कभी-कभी", correct: false },
            { text: "नहीं, बिलकुल नहीं", correct: true },
            { text: "केवल ध्रुवों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादल, बारिश, तूफान जैसी सभी मौसम संबंधी घटनाएं क्षोभमंडल में होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल लगभग निर्वात होने के कारण इन घटनाओं से पूरी तरह मुक्त है।"
    },
    {
        question: "सौर पवन (Solar Wind) का सीधा प्रभाव वायुमंडल की किस परत पर पड़ता है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "बाह्यमंडल और मैग्नेटोस्फीयर", correct: true },
            { text: "मध्यमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल और पृथ्वी का चुंबकीय क्षेत्र (मैग्नेटोस्फीयर) सौर पवन के आवेशित कणों के साथ सीधे संपर्क में आने वाली पहली रक्षा पंक्ति हैं।"
    },
    {
        question: "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन (ISS) किस वायुमंडलीय क्षेत्र में परिक्रमा करता है?",
        answers: shuffle([
            { text: "मध्यमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "तापमंडल और बाह्यमंडल की निचली सीमा", correct: true },
            { text: "पूरी तरह से बाह्यमंडल के बाहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय अंतरिक्ष स्टेशन लगभग 400 किलोमीटर की ऊंचाई पर परिक्रमा करता है, जो तापमंडल का ऊपरी हिस्सा और बाह्यमंडल की शुरुआत के पास है।"
    },
    {
        question: "बाह्यमंडल का नाम 'एक्सोस्फीयर' क्यों रखा गया?",
        answers: shuffle([
            { text: "क्योंकि यहाँ तापमान अधिक है", correct: false },
            { text: "'एक्सो' का अर्थ 'बाहरी' होने के कारण", correct: true },
            { text: "क्योंकि यहाँ उपग्रह रहते हैं", correct: false },
            { text: "एक वैज्ञानिक के नाम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'एक्सो' (Exo) एक ग्रीक शब्द है जिसका अर्थ है 'बाहर' या 'बाहरी'।<br><br><i class='fa-solid fa-angles-right icon'></i> चूँकि यह वायुमंडल की सबसे बाहरी परत है, इसलिए इसे एक्सोस्फीयर या बाह्यमंडल कहा जाता है।"
    },
    {
        question: "बाह्यमंडल में कणों का औसत मुक्त पथ (mean free path) कैसा होता है?",
        answers: shuffle([
            { text: "बहुत छोटा", correct: false },
            { text: "बहुत लंबा", correct: true },
            { text: "शून्य", correct: false },
            { text: "मध्यम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> औसत मुक्त पथ वह औसत दूरी है जो एक कण दूसरे कण से टकराने से पहले तय करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल में घनत्व बहुत कम होने के कारण यह दूरी बहुत लंबी (किलोमीटर में) होती है।"
    },
    {
        question: "पृथ्वी के अलावा, किस अन्य खगोलीय पिंड के पास एक क्षीण बाह्यमंडल है?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "चंद्रमा और बुध", correct: true },
            { text: "शुक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा और बुध जैसे पिंडों का घना वायुमंडल नहीं है, लेकिन उनकी सतह से निकले कणों का एक बहुत ही पतला बाह्यमंडल जैसा आवरण है।"
    },
    {
        question: "बाह्यमंडल में अत्यधिक तापमान के बावजूद अंतरिक्ष यात्रियों को ठंड क्यों महसूस होगी?",
        answers: shuffle([
            { text: "क्योंकि वहाँ हवा नहीं है", correct: false },
            { text: "क्योंकि कणों का घनत्व बहुत कम है", correct: true },
            { text: "क्योंकि अंतरिक्ष सूट ठंडा होता है", correct: false },
            { text: "यह एक मिथक है, उन्हें गर्मी लगेगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तापमान कणों की गति का माप है, जो बहुत तेज हो सकती है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन कण इतने दूर-दूर होते हैं कि वे शरीर से टकराकर गर्मी स्थानांतरित नहीं कर पाते, जिससे ठंडक महसूस होती है।"
    },
    {
        question: "वैन एलन विकिरण बेल्ट (Van Allen radiation belts) का संबंध मुख्यतः किस क्षेत्र से है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "बाह्यमंडल और मैग्नेटोस्फीयर", correct: true },
            { text: "ओजोन परत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैन एलन बेल्ट पृथ्वी के चुंबकीय क्षेत्र द्वारा पकड़े गए आवेशित कणों के क्षेत्र हैं, जो आंतरिक मैग्नेटोस्फीयर में स्थित हैं और बाह्यमंडल के क्षेत्र में फैले हुए हैं।"
    },
    {
        question: "'प्लाज्मास्फीयर' (Plasmasphere) जो ठंडे प्लाज्मा का एक क्षेत्र है, कहाँ स्थित है?",
        answers: shuffle([
            { text: "आयनमंडल के नीचे", correct: false },
            { text: "मैग्नेटोस्फीयर के भीतर, बाह्यमंडल से जुड़ा हुआ", correct: true },
            { text: "समतापमंडल में", correct: false },
            { text: "मध्यमंडल में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लाज्मास्फीयर पृथ्वी के मैग्नेटोस्फीयर का आंतरिक हिस्सा है, जो घने और ठंडे प्लाज्मा से भरा होता है और यह बाह्यमंडल के साथ सह-अस्तित्व में होता है।"
    },
    {
        question: "बाह्यमंडल की मोटाई किस पर निर्भर करती है?",
        answers: shuffle([
            { text: "पृथ्वी के घूर्णन पर", correct: false },
            { text: "चंद्रमा के गुरुत्वाकर्षण पर", correct: false },
            { text: "सौर गतिविधि पर", correct: true },
            { text: "मौसम पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सौर गतिविधि अधिक होती है, तो ऊपरी वायुमंडल गर्म होकर फैलता है, जिससे बाह्यमंडल की निचली सीमा (एक्सोबेस) और ऊपर चली जाती है और इसकी मोटाई बढ़ जाती है।"
    },
    {
        question: "बाह्यमंडल से हाइड्रोजन के पलायन की प्रक्रिया को क्या कहा जाता है?",
        answers: shuffle([
            { text: "जीन्स पलायन (Jeans Escape)", correct: true },
            { text: "फोटो-आयनीकरण", correct: false },
            { text: "संवहन", correct: false },
            { text: "चालन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीन्स पलायन वह तापीय प्रक्रिया है जिसके द्वारा ऊपरी वायुमंडल में गैस के अणु इतनी गति प्राप्त कर लेते हैं कि वे ग्रह के गुरुत्वाकर्षण से बचकर अंतरिक्ष में पलायन कर जाते हैं।"
    },
    {
        question: "बाह्यमंडल में कणों के बीच कौन सा बल प्रमुख होता है?",
        answers: shuffle([
            { text: "आणविक बल", correct: false },
            { text: "गुरुत्वाकर्षण बल", correct: true },
            { text: "नाभिकीय बल", correct: false },
            { text: "चुंबकीय बल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कणों के बीच की अत्यधिक दूरी के कारण, अन्य बल नगण्य हो जाते हैं और उनकी गति मुख्य रूप से पृथ्वी के गुरुत्वाकर्षण बल द्वारा नियंत्रित होती है।"
    },
    {
        question: "बाह्यमंडल की अवधारणा सबसे पहले किसने प्रस्तावित की?",
        answers: shuffle([
            { text: "आइजैक न्यूटन", correct: false },
            { text: "अल्बर्ट आइंस्टीन", correct: false },
            { text: "लाइमैन स्पिट्जर", correct: true },
            { text: "गैलीलियो गैलिली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेरिकी खगोल भौतिकीविद् लाइमैन स्पिट्जर ने 1949 में ऊपरी वायुमंडल के अपने अध्ययन में 'एक्सोस्फीयर' शब्द और इसकी अवधारणा का प्रस्ताव रखा।"
    },
    {
        question: "बाह्यमंडल की ऊपरी सीमा का अनुमानित विस्तार कहाँ तक हो सकता है?",
        answers: shuffle([
            { text: "लगभग 1000 किलोमीटर", correct: false },
            { text: "लगभग 2000 किलोमीटर", correct: false },
            { text: "लगभग 5000 किलोमीटर", correct: false },
            { text: "लगभग 10,000 किलोमीटर या उससे भी अधिक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल की कोई निश्चित ऊपरी सीमा नहीं है, लेकिन इसके प्रभाव को 10,000 किमी तक महसूस किया जा सकता है, जो पृथ्वी और चंद्रमा के बीच की दूरी का एक महत्वपूर्ण हिस्सा है।"
    },
    {
        question: "हबल स्पेस टेलीस्कोप किस क्षेत्र में पृथ्वी की परिक्रमा करता है?",
        answers: shuffle([
            { text: "मध्यमंडल", correct: false },
            { text: "ऊपरी तापमंडल/निचला बाह्यमंडल", correct: true },
            { text: "समतापमंडल", correct: false },
            { text: "पूरी तरह से वायुमंडल के बाहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हबल टेलीस्कोप लगभग 540 किलोमीटर की ऊंचाई पर परिक्रमा करता है, जो पृथ्वी के वायुमंडल के सबसे बाहरी हिस्सों में है, ताकि वायुमंडलीय विकृति से बचा जा सके।"
    },
    {
        question: "क्या बाह्यमंडल में ध्वनि यात्रा कर सकती है?",
        answers: shuffle([
            { text: "हाँ, बहुत तेज गति से", correct: false },
            { text: "हाँ, धीमी गति से", correct: false },
            { text: "नहीं, क्योंकि माध्यम का घनत्व बहुत कम है", correct: true },
            { text: "केवल विशेष आवृत्तियों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्वनि को यात्रा करने के लिए एक माध्यम की आवश्यकता होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल में कण इतने दूर होते हैं कि वे ध्वनि तरंगों को प्रसारित नहीं कर सकते, इसलिए वहाँ पूर्ण शांति होती है।"
    },
    {
        question: "बाह्यमंडल में एक कण के लिए दूसरे कण से टकराए बिना एक पूर्ण कक्षा पूरी करना संभव है। यह कथन है:",
        answers: shuffle([
            { text: "सत्य", correct: true },
            { text: "असत्य", correct: false },
            { text: "आंशिक रूप से सत्य", correct: false },
            { text: "जानकारी अपर्याप्त है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कणों के बीच की विशाल दूरी के कारण, एक परमाणु या अणु बिना किसी टकराव के पृथ्वी के चारों ओर एक उप-कक्षीय या कक्षीय पथ पूरा कर सकता है।"
    },
    {
        question: "'अंतरिक्ष का मौसम' (Space Weather) की घटनाएं, जैसे सौर ज्वालाएं, बाह्यमंडल को कैसे प्रभावित करती हैं?",
        answers: shuffle([
            { text: "वे बाह्यमंडल को ठंडा करती हैं", correct: false },
            { text: "वे बाह्यमंडल को गर्म करती हैं और फैलाती हैं", correct: true },
            { text: "उनका कोई प्रभाव नहीं पड़ता", correct: false },
            { text: "वे बाह्यमंडल के घनत्व को बढ़ाती हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर ज्वालाओं और कोरोनल मास इजेक्शन से ऊर्जा और कणों का प्रवाह बाह्यमंडल और तापमंडल को गर्म करता है, जिससे वे फैलते हैं और उपग्रहों के लिए खिंचाव (drag) बढ़ जाता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा मिशन मुख्य रूप से बाह्यमंडल और मैग्नेटोस्फीयर का अध्ययन करने के लिए बनाया गया था?",
        answers: shuffle([
            { text: "चंद्रयान", correct: false },
            { text: "मार्स रोवर", correct: false },
            { text: "वॉयजर", correct: false },
            { text: "आईबीईएक्स (IBEX) और ट्विन्स (TWINS)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा के आईबीईएक्स (Interstellar Boundary Explorer) और ट्विन्स (Two Wide-angle Imaging Neutral-atom Spectrometers) मिशन विशेष रूप से पृथ्वी के मैग्नेटोस्फीयर और बाह्यमंडल की छवियों को कैप्चर करने और अध्ययन करने के लिए डिजाइन किए गए थे।"
    },
    {
        question: "बाह्यमंडल को वायुमंडल का हिस्सा क्यों माना जाता है, जबकि इसका व्यवहार अंतरिक्ष जैसा है?",
        answers: shuffle([
            { text: "क्योंकि इसमें ऑक्सीजन होती है", correct: false },
            { text: "क्योंकि इसके कण अभी भी पृथ्वी के गुरुत्वाकर्षण से बंधे होते हैं", correct: true },
            { text: "क्योंकि इसमें बादल होते हैं", correct: false },
            { text: "क्योंकि यह रेडियो तरंगों को परावर्तित करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब तक कण पृथ्वी के गुरुत्वाकर्षण क्षेत्र के प्रभाव में हैं और पूरी तरह से अंतरिक्ष में पलायन नहीं कर गए हैं, तब तक उन्हें वायुमंडल का हिस्सा माना जाता है।"
    },
    {
        question: "यदि कोई अंतरिक्ष यान बाह्यमंडल से गुजरता है, तो उसे वायुगतिकीय खिंचाव (aerodynamic drag) का अनुभव क्यों होता है?",
        answers: shuffle([
            { text: "क्योंकि बाह्यमंडल बहुत घना है", correct: false },
            { text: "क्योंकि बाह्यमंडल में हवा बहुत तेज चलती है", correct: false },
            { text: "कणों के अत्यंत कम घनत्व के बावजूद, टकराव होता है", correct: true },
            { text: "उसे कोई खिंचाव महसूस नहीं होता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि बाह्यमंडल बहुत विरल है, फिर भी इसमें कण मौजूद हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> उच्च गति पर यात्रा करने वाले उपग्रहों के लिए, इन कणों के साथ लगातार टकराव एक छोटा लेकिन मापने योग्य खिंचाव पैदा करता है जो समय के साथ उनकी कक्षा को प्रभावित करता है।"
    },
    {
        question: "पृथ्वी के बाह्यमंडल का सबसे प्रचुर तत्व कौन सा है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "हीलियम", correct: false },
            { text: "हाइड्रोजन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोजन सबसे हल्का तत्व है, इसलिए यह गुरुत्वाकर्षण के प्रभाव से सबसे आसानी से बचता है और बाह्यमंडल के सबसे ऊपरी क्षेत्रों में प्रमुखता से पाया जाता है।"
    },
    {
        question: "'उपग्रह खिंचाव' (Satellite Drag) के कारण उपग्रहों पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "उनकी गति बढ़ जाती है", correct: false },
            { text: "उनकी कक्षा धीरे-धीरे क्षय होती है और वे नीचे आते हैं", correct: true },
            { text: "वे अपनी कक्षा में स्थिर रहते हैं", correct: false },
            { text: "वे पृथ्वी से दूर चले जाते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल के कणों से लगातार टकराव उपग्रह की ऊर्जा को कम करता है, जिससे उसकी कक्षा धीरे-धीरे छोटी होती जाती है और अंततः वह वायुमंडल में जलकर नष्ट हो सकता है।"
    },
    {
        question: "बाह्यमंडल और अंतरिक्ष के बीच की सीमा को अक्सर किस रेखा से परिभाषित किया जाता है?",
        answers: shuffle([
            { text: "भूमध्य रेखा", correct: false },
            { text: "कर्क रेखा", correct: false },
            { text: "कारमन रेखा (Kármán line)", correct: false },
            { text: "बाह्यमंडल की कोई स्पष्ट सीमा नहीं होती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कारमन रेखा (100 किमी) को अक्सर अंतरिक्ष की कानूनी और वैमानिकी सीमा माना जाता है, लेकिन बाह्यमंडल इस ऊंचाई से बहुत ऊपर तक फैला हुआ है और इसकी कोई निश्चित भौतिक सीमा नहीं है।"
    },
    {
        question: "बाह्यमंडलीय तापमान (Exospheric Temperature) किसका माप है?",
        answers: shuffle([
            { text: "हवा के ताप का", correct: false },
            { text: "गैस कणों की औसत गतिज ऊर्जा का", correct: true },
            { text: "सौर विकिरण की मात्रा का", correct: false },
            { text: "प्लाज्मा के घनत्व का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भौतिकी में, तापमान कणों की औसत गतिज ऊर्जा का माप होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल में कण बहुत तेजी से चलते हैं (उच्च गतिज ऊर्जा), इसलिए तापमान बहुत अधिक होता है।"
    },
    {
        question: "बाह्यमंडल में मौजूद हीलियम का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "सौर पवन", correct: false },
            { text: "पृथ्वी के भीतर रेडियोधर्मी क्षय", correct: true },
            { text: "ज्वालामुखी विस्फोट", correct: false },
            { text: "औद्योगिक प्रदूषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की पपड़ी और मेंटल में यूरेनियम और थोरियम जैसे तत्वों के रेडियोधर्मी क्षय से अल्फा कण (हीलियम नाभिक) उत्पन्न होते हैं, जो अंततः वायुमंडल के शीर्ष तक पहुँचते हैं।"
    },
    {
        question: "पृथ्वी के बाह्यमंडल के अध्ययन से वैज्ञानिकों को क्या समझने में मदद मिलती है?",
        answers: shuffle([
            { text: "पृथ्वी के आंतरिक कोर को", correct: false },
            { text: "अन्य ग्रहों के वायुमंडल के विकास और पलायन को", correct: true },
            { text: "समुद्र के स्तर को", correct: false },
            { text: "मौसम के पैटर्न को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के वायुमंडलीय पलायन का अध्ययन करके, वैज्ञानिक यह समझ सकते हैं कि मंगल जैसे ग्रहों ने समय के साथ अपना घना वायुमंडल कैसे खो दिया।"
    },
    {
        question: "क्या बाह्यमंडल पृथ्वी को हानिकारक विकिरण से बचाता है?",
        answers: shuffle([
            { text: "हाँ, यह मुख्य सुरक्षा परत है", correct: false },
            { text: "नहीं, यह कार्य मुख्यतः ओजोन परत और मैग्नेटोस्फीयर का है", correct: true },
            { text: "केवल एक्स-रे से बचाता है", correct: false },
            { text: "केवल गामा किरणों से बचाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल अत्यंत विरल होने के कारण विकिरण को रोकने में महत्वपूर्ण भूमिका नहीं निभाता।<br><br><i class='fa-solid fa-angles-right icon'></i> यह कार्य मुख्य रूप से समतापमंडल की ओजोन परत (पराबैंगनी किरणों के लिए) और मैग्नेटोस्फीयर (आवेशित कणों के लिए) द्वारा किया जाता है।"
    },
    {
        question: "सूर्य के शांत काल (Solar Minimum) के दौरान बाह्यमंडल पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "यह फैलता है", correct: false },
            { text: "यह सिकुड़ता है और ठंडा होता है", correct: true },
            { text: "इसका आकार अपरिवर्तित रहता है", correct: false },
            { text: "यह और अधिक घना हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर न्यूनतम के दौरान, कम सौर विकिरण के कारण ऊपरी वायुमंडल ठंडा हो जाता है और सिकुड़ जाता है, जिससे बाह्यमंडल की निचली सीमा और नीचे आ जाती है।"
    },
    {
        question: "'रिंग करंट' (Ring Current) जो पृथ्वी के चारों ओर बहने वाले आयनों की एक धारा है, किस क्षेत्र में स्थित है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "आंतरिक मैग्नेटोस्फीयर, बाह्यमंडल के साथ अतिव्यापी", correct: true },
            { text: "आयनमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रिंग करंट पृथ्वी के चारों ओर एक विद्युत प्रवाह है जो भू-चुंबकीय तूफानों के दौरान पृथ्वी के चुंबकीय क्षेत्र को प्रभावित करता है और यह मैग्नेटोस्फीयर के भीतर बाह्यमंडल के क्षेत्र में मौजूद है।"
    },
    {
        question: "बाह्यमंडल में कणों की संख्या घनत्व की तुलना किससे की जा सकती है?",
        answers: shuffle([
            { text: "समुद्र तल पर हवा से", correct: false },
            { text: "एक प्रयोगशाला में बनाए गए सर्वोत्तम निर्वात से", correct: true },
            { text: "पानी के घनत्व से", correct: false },
            { text: "स्टील के घनत्व से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल का घनत्व इतना कम है कि इसकी तुलना पृथ्वी पर प्रयोगशालाओं में बनाए जा सकने वाले उच्चतम-गुणवत्ता वाले निर्वात से की जा सकती है।"
    },
    {
        question: "कौन सी प्रक्रिया बाह्यमंडल में हाइड्रोजन उत्पन्न करती है?",
        answers: shuffle([
            { text: "ज्वालामुखी से हाइड्रोजन का निकलना", correct: false },
            { text: "मीथेन और जल वाष्प का फोटो-पृथक्करण", correct: true },
            { text: "नाइट्रोजन का विखंडन", correct: false },
            { text: "ऑक्सीजन का आयनीकरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निचले वायुमंडल में मौजूद मीथेन (CH₄) और जल वाष्प (H₂O) जब ऊपरी वायुमंडल में पहुँचते हैं, तो सौर पराबैंगनी विकिरण उन्हें तोड़ देता है, जिससे हाइड्रोजन परमाणु मुक्त होते हैं।"
    },
    {
        question: "बाह्यमंडल की उपस्थिति उपग्रह संचार को कैसे प्रभावित करती है?",
        answers: shuffle([
            { text: "यह संकेतों को मजबूत करती है", correct: false },
            { text: "यह संकेतों को रोकती है", correct: false },
            { text: "इसका नगण्य प्रभाव होता है", correct: true },
            { text: "यह संकेतों को परावर्तित करती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल इतना विरल है कि यह रेडियो तरंगों पर कोई खास प्रभाव नहीं डालता।<br><br><i class='fa-solid fa-angles-right icon'></i> संकेतों का परावर्तन या अवशोषण मुख्य रूप से नीचे स्थित सघन आयनमंडल में होता है।"
    },
    {
        question: "भू-स्थिर उपग्रह (Geostationary Satellites) किस ऊंचाई पर परिक्रमा करते हैं?",
        answers: shuffle([
            { text: "बाह्यमंडल के भीतर", correct: false },
            { text: "बाह्यमंडल से बहुत ऊपर", correct: true },
            { text: "बाह्यमंडल के नीचे", correct: false },
            { text: "बाह्यमंडल की निचली सीमा पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भू-स्थिर उपग्रह लगभग 35,786 किलोमीटर की ऊंचाई पर परिक्रमा करते हैं, जो बाह्यमंडल की सामान्यतः मानी जाने वाली सीमा से बहुत अधिक है।"
    },
    {
        question: "'ध्रुवीय पवन' (Polar Wind) क्या है?",
        answers: shuffle([
            { text: "ध्रुवों पर चलने वाली सतही हवा", correct: false },
            { text: "आयनमंडल से बाह्यमंडल में प्लाज्मा का बहिर्वाह", correct: true },
            { text: "एक प्रकार की जेट स्ट्रीम", correct: false },
            { text: "एक स्थानीय पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुवीय पवन एक स्थायी प्रक्रिया है जिसमें पृथ्वी के ध्रुवीय क्षेत्रों के खुले चुंबकीय क्षेत्र रेखाओं के साथ आयनमंडल से हल्के आयन (जैसे H+ और He+) ऊपर की ओर बाह्यमंडल और मैग्नेटोस्फीयर में प्रवाहित होते हैं।"
    },
    {
        question: "बाह्यमंडल को तापमंडल से क्या अलग करता है?",
        answers: shuffle([
            { text: "तापमान में अचानक गिरावट", correct: false },
            { text: "कणों का व्यवहार: टकराव से बैलिस्टिक गति में परिवर्तन", correct: true },
            { text: "रासायनिक संरचना में परिवर्तन", correct: false },
            { text: "दबाव में अचानक वृद्धि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुख्य अंतर यह है कि तापमंडल में कण अभी भी एक-दूसरे से पर्याप्त रूप से टकराते हैं ताकि उन्हें एक गैस माना जा सके, जबकि बाह्यमंडल में वे लगभग कभी नहीं टकराते और बैलिस्टिक पथ पर यात्रा करते हैं।"
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