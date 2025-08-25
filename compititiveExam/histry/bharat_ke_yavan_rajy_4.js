const questions = [
    {
        topHeading: "भारत के यवनराज्य पर आधारित बहुविकल्पी प्रश्न part 4 (quiz_no.76)"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल में किस कला शैली का विकास हुआ, जो भारतीय और यूनानी तत्वों का सम्मिश्रण है?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "गुप्त कला", correct: false },
            { text: "पाल कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला का विकास हिंद-यवन शासकों के संरक्षण में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शैली भारतीय और यूनानी कला का अद्भुत सम्मिश्रण है, जिसे इंडो-ग्रीक कला भी कहते हैं।"
    },
    {
        question: "'मिलिंद पन्हो' ग्रंथ के अनुसार, मिनांडर ने किससे बौद्ध धर्म की दीक्षा ली थी?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "नागार्जुन", correct: false },
            { text: "नागसेन", correct: true },
            { text: "उपगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ 'मिलिंद पन्हो' में राजा मिनांडर और बौद्ध भिक्षु नागसेन के बीच संवाद का वर्णन है, जिसके बाद मिनांडर ने बौद्ध धर्म को अपनाया।"
    },
    {
        question: "भारत में सबसे पहले किस शासकों ने शुद्ध सोने के सिक्के जारी किए थे?",
        answers: shuffle([
            { text: "हिंद-यवन", correct: false },
            { text: "शक", correct: false },
            { text: "कुषाण", correct: true },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सबसे पहले सोने के सिक्के हिंद-यवन शासकों ने जारी किए थे, लेकिन सबसे शुद्ध सोने के सिक्के कुषाण शासक कनिष्क ने जारी किए थे।"
    },
    {
        question: "किस हिंद-यवन शासक ने \"राजा राजा\" की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "यूथीडेमस", correct: false },
            { text: "यूक्रेटाइड्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूक्रेटाइड्स ने अपने सिक्कों पर \"राजा राजा\" की उपाधि अंकित करवाई थी, जो उसके साम्राज्य के विस्तार और शक्ति को दर्शाती है।"
    },
    {
        question: "हिंद-यवन शासकों ने अपने सिक्कों पर किस भारतीय देवता के प्रतीकों का चित्रण करवाया था?",
        answers: shuffle([
            { text: "शिव", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "विष्णु", correct: false },
            { text: "बुद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर जैसे हिंद-यवन शासकों ने बौद्ध धर्म को अपनाया और उनके सिक्कों पर बुद्ध और बौद्ध प्रतीकों, जैसे धर्मचक्र, का चित्रण मिलता है।"
    },
    {
        question: "हिंद-यवन साम्राज्य में राजनीतिक अस्थिरता का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "बाहरी आक्रमण", correct: false },
            { text: "आंतरिक संघर्ष और गृह युद्ध", correct: true },
            { text: "धार्मिक असहिष्णुता", correct: false },
            { text: "आर्थिक संकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन साम्राज्य का पतन बाहरी आक्रमणों के साथ-साथ उत्तराधिकार के लिए आंतरिक संघर्षों और गृह युद्धों के कारण हुआ।"
    },
    {
        question: "'मिलिंद पन्हो' में मिनांडर को किस नाम से संबोधित किया गया है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "मिलिंद", correct: true },
            { text: "धर्म", correct: false },
            { text: "देव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ 'मिलिंद पन्हो' में मिनांडर को \"राजा मिलिंद\" के नाम से संबोधित किया गया है।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के किस क्षेत्र में शासन किया?",
        answers: shuffle([
            { text: "पूर्वी भारत", correct: false },
            { text: "उत्तरी भारत", correct: false },
            { text: "पश्चिमोत्तर भारत", correct: true },
            { text: "दक्षिणी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने मुख्य रूप से पश्चिमोत्तर भारत, जिसमें पंजाब, अफगानिस्तान और सिंध के कुछ हिस्से शामिल थे, पर शासन किया।"
    },
    {
        question: "किस यूनानी राजदूत ने विदिशा में गरुड़ स्तंभ की स्थापना की, जो वैष्णव धर्म के प्रति उसके लगाव को दर्शाता है?",
        answers: shuffle([
            { text: "मेगस्थनीज", correct: false },
            { text: "हेलिओडोरस", correct: true },
            { text: "डायमेकस", correct: false },
            { text: "स्ट्रैबो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलिओडोरस, जो तक्षशिला के यूनानी शासक एंटीआल्किदास का राजदूत था, उसने शुंग शासक भागभद्र के दरबार में विदिशा में गरुड़ स्तंभ की स्थापना की थी।"
    },
    {
        question: "हिंद-यवन शासकों का भारत में सबसे महत्वपूर्ण योगदान क्या था?",
        answers: shuffle([
            { text: "लोहे का उपयोग", correct: false },
            { text: "नगरीय विकास", correct: false },
            { text: "मुद्राशास्त्र और कला", correct: true },
            { text: "कृषि विकास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत में यथार्थवादी पोर्ट्रेट वाले सोने के सिक्के जारी किए और गांधार कला को प्रोत्साहन दिया, जो उनका सबसे महत्वपूर्ण योगदान माना जाता है।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर यूनानी और खरोष्ठी लिपि का उपयोग क्यों किया गया था?",
        answers: shuffle([
            { text: "केवल सजावट के लिए", correct: false },
            { text: "यूनानी और स्थानीय आबादी को संबोधित करने के लिए", correct: true },
            { text: "दोनों लिपियों का प्रचलन था", correct: false },
            { text: "केवल व्यापारियों को आकर्षित करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शासकों ने अपनी यूनानी और भारतीय प्रजा दोनों को संबोधित करने के लिए द्विभाषी सिक्कों का उपयोग किया।"
    },
    {
        question: "हिंद-यवन शासकों के पतन के बाद भारत में कौन से शासक आए जिन्होंने हिंद-यवन कला और संस्कृति के तत्वों को अपनाया?",
        answers: shuffle([
            { text: "गुप्त", correct: false },
            { text: "मौर्य", correct: false },
            { text: "कुषाण", correct: true },
            { text: "सातवाहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने हिंद-यवन शासकों के पतन के बाद उनके क्षेत्रों पर शासन किया और गांधार कला जैसी उनकी कई सांस्कृतिक और कलात्मक परंपराओं को जारी रखा।"
    },
    {
        question: "'पेरिप्लस ऑफ द एरिथ्रियन सी' नामक रोमन-ग्रीक ग्रंथ में किस भारतीय बंदरगाह का उल्लेख है जहाँ हिंद-यवन सिक्के चलते थे?",
        answers: shuffle([
            { text: "मुज़िरिस", correct: false },
            { text: "भड़ोच (ब्यारीगाजा)", correct: true },
            { text: "ताम्रलिप्ति", correct: false },
            { text: "अरिकामेडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरिप्लस ऑफ द एरिथ्रियन सी' में मिनांडर के सिक्कों का उल्लेख है जो पश्चिमी भारत के बंदरगाह भड़ोच (ब्यारीगाजा) में व्यापार में इस्तेमाल होते थे।"
    },
    {
        question: "हिंद-यवन शासकों के साम्राज्य में किस नदी को सीमा माना जाता था?",
        answers: shuffle([
            { text: "सिंधु नदी", correct: false },
            { text: "झेलम नदी", correct: false },
            { text: "गंगा नदी", correct: true },
            { text: "रावी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ इतिहासकारों का मानना ​​है कि हिंद-यवन साम्राज्य की पूर्वी सीमा गंगा नदी के किनारे तक फैली हुई थी।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर \"ज़्यूस\" देवता के साथ अक्सर किस भारतीय प्रतीक को चित्रित किया जाता था?",
        answers: shuffle([
            { text: "गरुड़", correct: true },
            { text: "हाथी", correct: false },
            { text: "बैल", correct: false },
            { text: "धर्मचक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन सिक्कों पर यूनानी देवता ज़्यूस को भारतीय देवता इंद्र के समकक्ष माना जाता था और कभी-कभी उसके साथ गरुड़ का चित्रण किया जाता था।"
    },
    {
        question: "किस ग्रंथ में यवन आक्रमण का उल्लेख मिलता है और शुंग शासक पुष्यमित्र द्वारा उन्हें रोकने का वर्णन है?",
        answers: shuffle([
            { text: "गार्गी संहिता", correct: false },
            { text: "महाभाष्य", correct: false },
            { text: "मालविकाग्निमित्रम्", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन सभी ग्रंथों में यवन आक्रमण और उन्हें रोकने के प्रयास का उल्लेख मिलता है, जो शुंग काल के दौरान हुआ था।"
    },
    {
        question: "किस शासक ने अपनी राजधानी तक्षशिला में स्थापित की, जबकि डेमेट्रियस ने साकल को अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "अपोलोडोटस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "स्ट्रेटो II", correct: false },
            { text: "यूक्रेटाइड्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूक्रेटाइड्स ने बैक्ट्रिया में अपना राज्य स्थापित करने के बाद तक्षशिला को अपनी भारतीय राजधानी बनाया।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल के दौरान भारत में किस कला शैली का विकास हुआ, जो भारतीय और यूनानी तत्वों का सम्मिश्रण है?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "गुप्त कला", correct: false },
            { text: "पाल कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला का विकास हिंद-यवन शासकों के संरक्षण में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शैली भारतीय और यूनानी कला का अद्भुत सम्मिश्रण है, जिसे इंडो-ग्रीक कला भी कहते हैं।"
    },
    {
        question: "किस हिंद-यवन शासक को बौद्ध धर्म का महान संरक्षक माना जाता है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर ने बौद्ध धर्म को अपनाया और उसे संरक्षण दिया, जैसा कि 'मिलिंद पन्हो' में वर्णित है।"
    },
    {
        question: "किस शासक के सिक्कों पर द्विभाषी शिलालेख के साथ-साथ राजा की उपाधि 'अपरजेय' भी अंकित थी?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: true },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: false },
            { text: "यूथीडेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस के कुछ सिक्कों पर उसकी उपाधि 'अपरजेय' अंकित थी।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर \"धर्मचक्र\" और \"हाथी\" दोनों के प्रतीक मिलते हैं?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: true },
            { text: "यूथीडेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलोडोटस I के सिक्कों पर धर्मचक्र और हाथी दोनों के प्रतीक मिलते हैं, जो उसके बौद्ध और भारतीय प्रभाव को दर्शाते हैं।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनान की प्राचीन कला चलाई, जिसे क्या कहते हैं?",
        answers: shuffle([
            { text: "हेलेनिस्टिक आर्ट", correct: true },
            { text: "मथुरा कला", correct: false },
            { text: "गुप्त कला", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनानी कला को बढ़ावा दिया, जिसे हेलेनिस्टिक आर्ट के नाम से जाना जाता है।"
    },
    {
        question: "किस शासक को 'भारत के यवन राज्य' का संस्थापक भी माना जाता है, जिसने 180 ईसा पूर्व में आक्रमण किया था?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस I", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "स्ट्रेटो II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस I को भारत में हिंद-यवन शासन का संस्थापक माना जाता है, जिसने लगभग 180 ईसा पूर्व में भारत पर आक्रमण किया था।"
    },
    {
        question: "'मिलिंद पन्हो' में किस शासक को \"महान और बुद्धिमान\" राजा के रूप में वर्णित किया गया है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' में राजा मिनांडर को एक बुद्धिमान, विद्वान और योग्य राजा के रूप में वर्णित किया गया है।"
    },
    {
        question: "हिंद-यवन शासन के दौरान, कौन से दो प्रमुख केंद्र राजनीतिक और सांस्कृतिक गतिविधियों के लिए महत्वपूर्ण थे?",
        answers: shuffle([
            { text: "मथुरा और पाटलिपुत्र", correct: false },
            { text: "शाकल और तक्षशिला", correct: true },
            { text: "अयोध्या और वाराणसी", correct: false },
            { text: "उज्जैन और कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाकल (मिनांडर की राजधानी) और तक्षशिला (यूक्रेटाइड्स की राजधानी) हिंद-यवन काल के दो सबसे महत्वपूर्ण राजनीतिक और सांस्कृतिक केंद्र थे।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल में किस कला शैली का विकास हुआ, जो भारतीय और यूनानी तत्वों का सम्मिश्रण है?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "गुप्त कला", correct: false },
            { text: "पाल कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला का विकास हिंद-यवन शासकों के संरक्षण में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शैली भारतीय और यूनानी कला का अद्भुत सम्मिश्रण है, जिसे इंडो-ग्रीक कला भी कहते हैं।"
    },
    {
        question: "'मिलिंद पन्हो' ग्रंथ के अनुसार, मिनांडर ने किससे बौद्ध धर्म की दीक्षा ली थी?",
        answers: shuffle([
            { text: "अश्वघोष", correct: false },
            { text: "नागार्जुन", correct: false },
            { text: "नागसेन", correct: true },
            { text: "उपगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ 'मिलिंद पन्हो' में राजा मिनांडर और बौद्ध भिक्षु नागसेन के बीच संवाद का वर्णन है, जिसके बाद मिनांडर ने बौद्ध धर्म को अपनाया।"
    },
    {
        question: "भारत में सबसे पहले किस शासकों ने शुद्ध सोने के सिक्के जारी किए थे?",
        answers: shuffle([
            { text: "हिंद-यवन", correct: false },
            { text: "शक", correct: false },
            { text: "कुषाण", correct: true },
            { text: "गुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत में सबसे पहले सोने के सिक्के हिंद-यवन शासकों ने जारी किए थे, लेकिन सबसे शुद्ध सोने के सिक्के कुषाण शासक कनिष्क ने जारी किए थे।"
    },
    {
        question: "किस हिंद-यवन शासक ने \"राजा राजा\" की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "यूथीडेमस", correct: false },
            { text: "यूक्रेटाइड्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूक्रेटाइड्स ने अपने सिक्कों पर \"राजा राजा\" की उपाधि अंकित करवाई थी, जो उसके साम्राज्य के विस्तार और शक्ति को दर्शाती है।"
    },
    {
        question: "हिंद-यवन शासकों ने अपने सिक्कों पर किस भारतीय देवता के प्रतीकों का चित्रण करवाया था?",
        answers: shuffle([
            { text: "शिव", correct: false },
            { text: "कृष्ण", correct: false },
            { text: "विष्णु", correct: false },
            { text: "बुद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर जैसे हिंद-यवन शासकों ने बौद्ध धर्म को अपनाया और उनके सिक्कों पर बुद्ध और बौद्ध प्रतीकों, जैसे धर्मचक्र, का चित्रण मिलता है।"
    },
    {
        question: "हिंद-यवन साम्राज्य में राजनीतिक अस्थिरता का मुख्य कारण क्या था?",
        answers: shuffle([
            { text: "बाहरी आक्रमण", correct: false },
            { text: "आंतरिक संघर्ष और गृह युद्ध", correct: true },
            { text: "धार्मिक असहिष्णुता", correct: false },
            { text: "आर्थिक संकट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन साम्राज्य का पतन बाहरी आक्रमणों के साथ-साथ उत्तराधिकार के लिए आंतरिक संघर्षों और गृह युद्धों के कारण हुआ।"
    },
    {
        question: "'मिलिंद पन्हो' में मिनांडर को किस नाम से संबोधित किया गया है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "मिलिंद", correct: true },
            { text: "धर्म", correct: false },
            { text: "देव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बौद्ध ग्रंथ 'मिलिंद पन्हो' में मिनांडर को \"राजा मिलिंद\" के नाम से संबोधित किया गया है।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के किस क्षेत्र में शासन किया?",
        answers: shuffle([
            { text: "पूर्वी भारत", correct: false },
            { text: "उत्तरी भारत", correct: false },
            { text: "पश्चिमोत्तर भारत", correct: true },
            { text: "दक्षिणी भारत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने मुख्य रूप से पश्चिमोत्तर भारत, जिसमें पंजाब, अफगानिस्तान और सिंध के कुछ हिस्से शामिल थे, पर शासन किया।"
    },
    {
        question: "किस यूनानी राजदूत ने विदिशा में गरुड़ स्तंभ की स्थापना की, जो वैष्णव धर्म के प्रति उसके लगाव को दर्शाता है?",
        answers: shuffle([
            { text: "मेगस्थनीज", correct: false },
            { text: "हेलिओडोरस", correct: true },
            { text: "डायमेकस", correct: false },
            { text: "स्ट्रैबो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलिओडोरस, जो तक्षशिला के यूनानी शासक एंटीआल्किदास का राजदूत था, उसने शुंग शासक भागभद्र के दरबार में विदिशा में गरुड़ स्तंभ की स्थापना की थी।"
    },
    {
        question: "हिंद-यवन शासकों का भारत में सबसे महत्वपूर्ण योगदान क्या था?",
        answers: shuffle([
            { text: "लोहे का उपयोग", correct: false },
            { text: "नगरीय विकास", correct: false },
            { text: "मुद्राशास्त्र और कला", correct: true },
            { text: "कृषि विकास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत में यथार्थवादी पोर्ट्रेट वाले सोने के सिक्के जारी किए और गांधार कला को प्रोत्साहन दिया, जो उनका सबसे महत्वपूर्ण योगदान माना जाता है।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर यूनानी और खरोष्ठी लिपि का उपयोग क्यों किया गया था?",
        answers: shuffle([
            { text: "केवल सजावट के लिए", correct: false },
            { text: "यूनानी और स्थानीय आबादी को संबोधित करने के लिए", correct: true },
            { text: "दोनों लिपियों का प्रचलन था", correct: false },
            { text: "केवल व्यापारियों को आकर्षित करने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शासकों ने अपनी यूनानी और भारतीय प्रजा दोनों को संबोधित करने के लिए द्विभाषी सिक्कों का उपयोग किया।"
    },
    {
        question: "हिंद-यवन शासकों के पतन के बाद भारत में कौन से शासक आए जिन्होंने हिंद-यवन कला और संस्कृति के तत्वों को अपनाया?",
        answers: shuffle([
            { text: "गुप्त", correct: false },
            { text: "मौर्य", correct: false },
            { text: "कुषाण", correct: true },
            { text: "सातवाहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुषाणों ने हिंद-यवन शासकों के पतन के बाद उनके क्षेत्रों पर शासन किया और गांधार कला जैसी उनकी कई सांस्कृतिक और कलात्मक परंपराओं को जारी रखा।"
    },
    {
        question: "'पेरिप्लस ऑफ द एरिथ्रियन सी' नामक रोमन-ग्रीक ग्रंथ में किस भारतीय बंदरगाह का उल्लेख है जहाँ हिंद-यवन सिक्के चलते थे?",
        answers: shuffle([
            { text: "मुज़िरिस", correct: false },
            { text: "भड़ोच (ब्यारीगाजा)", correct: true },
            { text: "ताम्रलिप्ति", correct: false },
            { text: "अरिकामेडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पेरिप्लस ऑफ द एरिथ्रियन सी' में मिनांडर के सिक्कों का उल्लेख है जो पश्चिमी भारत के बंदरगाह भड़ोच (ब्यारीगाजा) में व्यापार में इस्तेमाल होते थे।"
    },
    {
        question: "हिंद-यवन शासकों के साम्राज्य में किस नदी को सीमा माना जाता था?",
        answers: shuffle([
            { text: "सिंधु नदी", correct: false },
            { text: "झेलम नदी", correct: false },
            { text: "गंगा नदी", correct: false },
            { text: "रावी नदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुछ इतिहासकारों का मानना ​​है कि हिंद-यवन साम्राज्य की पूर्वी सीमा गंगा नदी के किनारे तक फैली हुई थी।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर \"ज़्यूस\" देवता के साथ अक्सर किस भारतीय प्रतीक को चित्रित किया जाता था?",
        answers: shuffle([
            { text: "गरुड़", correct: true },
            { text: "हाथी", correct: false },
            { text: "बैल", correct: false },
            { text: "धर्मचक्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन सिक्कों पर यूनानी देवता ज़्यूस को भारतीय देवता इंद्र के समकक्ष माना जाता था और कभी-कभी उसके साथ गरुड़ का चित्रण किया जाता था।"
    },
    {
        question: "किस ग्रंथ में यवन आक्रमण का उल्लेख मिलता है और शुंग शासक पुष्यमित्र द्वारा उन्हें रोकने का वर्णन है?",
        answers: shuffle([
            { text: "गार्गी संहिता", correct: false },
            { text: "महाभाष्य", correct: false },
            { text: "मालविकाग्निमित्रम्", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन सभी ग्रंथों में यवन आक्रमण और उन्हें रोकने के प्रयास का उल्लेख मिलता है, जो शुंग काल के दौरान हुआ था।"
    },
    {
        question: "किस शासक ने अपनी राजधानी तक्षशिला में स्थापित की, जबकि डेमेट्रियस ने साकल को अपनी राजधानी बनाया?",
        answers: shuffle([
            { text: "अपोलोडोटस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "स्ट्रेटो II", correct: false },
            { text: "यूक्रेटाइड्स", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूक्रेटाइड्स ने बैक्ट्रिया में अपना राज्य स्थापित करने के बाद तक्षशिला को अपनी भारतीय राजधानी बनाया।"
    },
    {
        question: "हिंद-यवन शासकों के शासनकाल के दौरान भारत में किस कला शैली का विकास हुआ, जो भारतीय और यूनानी तत्वों का सम्मिश्रण है?",
        answers: shuffle([
            { text: "मथुरा कला", correct: false },
            { text: "गांधार कला", correct: true },
            { text: "गुप्त कला", correct: false },
            { text: "पाल कला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गांधार कला का विकास हिंद-यवन शासकों के संरक्षण में हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शैली भारतीय और यूनानी कला का अद्भुत सम्मिश्रण है, जिसे इंडो-ग्रीक कला भी कहते हैं।"
    },
    {
        question: "किस हिंद-यवन शासक को बौद्ध धर्म का महान संरक्षक माना जाता है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिनांडर ने बौद्ध धर्म को अपनाया और उसे संरक्षण दिया, जैसा कि 'मिलिंद पन्हो' में वर्णित है।"
    },
    {
        question: "किस शासक के सिक्कों पर द्विभाषी शिलालेख के साथ-साथ राजा की उपाधि 'अपरजेय' भी अंकित थी?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: true },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: false },
            { text: "यूथीडेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस के कुछ सिक्कों पर उसकी उपाधि 'अपरजेय' अंकित थी।"
    },
    {
        question: "हिंद-यवन शासकों के सिक्कों पर \"धर्मचक्र\" और \"हाथी\" दोनों के प्रतीक मिलते हैं?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: false },
            { text: "अपोलोडोटस I", correct: true },
            { text: "यूथीडेमस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपोलोडोटस I के सिक्कों पर धर्मचक्र और हाथी दोनों के प्रतीक मिलते हैं, जो उसके बौद्ध और भारतीय प्रभाव को दर्शाते हैं।"
    },
    {
        question: "हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनान की प्राचीन कला चलाई, जिसे क्या कहते हैं?",
        answers: shuffle([
            { text: "हेलेनिस्टिक आर्ट", correct: true },
            { text: "मथुरा कला", correct: false },
            { text: "गुप्त कला", correct: false },
            { text: "उपरोक्त में से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिंद-यवन शासकों ने भारत के पश्चिमोत्तर सीमा प्रांत में यूनानी कला को बढ़ावा दिया, जिसे हेलेनिस्टिक आर्ट के नाम से जाना जाता है।"
    },
    {
        question: "किस शासक को 'भारत के यवन राज्य' का संस्थापक भी माना जाता है, जिसने 180 ईसा पूर्व में आक्रमण किया था?",
        answers: shuffle([
            { text: "मिनांडर", correct: false },
            { text: "डेमेट्रियस I", correct: true },
            { text: "यूक्रेटाइड्स", correct: false },
            { text: "स्ट्रेटो II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डेमेट्रियस I को भारत में हिंद-यवन शासन का संस्थापक माना जाता है, जिसने लगभग 180 ईसा पूर्व में भारत पर आक्रमण किया था।"
    },
    {
        question: "'मिलिंद पन्हो' में किस शासक को \"महान और बुद्धिमान\" राजा के रूप में वर्णित किया गया है?",
        answers: shuffle([
            { text: "डेमेट्रियस", correct: false },
            { text: "मिनांडर", correct: true },
            { text: "यूथीडेमस", correct: false },
            { text: "अपोलोडोटस I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलिंद पन्हो' में राजा मिनांडर को एक बुद्धिमान, विद्वान और योग्य राजा के रूप में वर्णित किया गया है।"
    },
    {
        question: "हिंद-यवन शासन के दौरान, कौन से दो प्रमुख केंद्र राजनीतिक और सांस्कृतिक गतिविधियों के लिए महत्वपूर्ण थे?",
        answers: shuffle([
            { text: "मथुरा और पाटलिपुत्र", correct: false },
            { text: "शाकल और तक्षशिला", correct: true },
            { text: "अयोध्या और वाराणसी", correct: false },
            { text: "उज्जैन और कन्नौज", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शाकल (मिनांडर की राजधानी) और तक्षशिला (यूक्रेटाइड्स की राजधानी) हिंद-यवन काल के दो सबसे महत्वपूर्ण राजनीतिक और सांस्कृतिक केंद्र थे।"
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