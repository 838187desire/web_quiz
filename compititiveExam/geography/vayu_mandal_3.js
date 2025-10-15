const questions = [
    {
        topHeading: "वायुमंडल पर आधारित 50 MCQs part_3 (quiz_no.)"
    },
    {
        question: "\"पवन की दिशा\" से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "जिस दिशा में पवन जा रही है", correct: false },
            { text: "जिस दिशा से पवन आ रही है", correct: true },
            { text: "पवन का ऊर्ध्वाधर प्रवाह", correct: false },
            { text: "पवन की गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौसम विज्ञान में, पवन की दिशा हमेशा उस दिशा को संदर्भित करती है जहाँ से हवा चल रही है<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, एक 'पश्चिमी' पवन पश्चिम से पूर्व की ओर बहती है।"
    },
    {
        question: "मध्यमंडल और तापमंडल के बीच की सीमा क्या कहलाती है?",
        answers: shuffle([
            { text: "ट्रॉपोपॉज़", correct: false },
            { text: "स्ट्रेटोपॉज़", correct: false },
            { text: "मेसोपॉज़", correct: true },
            { text: "थर्मोपॉज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसोपॉज़ वह संक्रमणकालीन परत है जो मध्यमंडल को उसके ऊपर स्थित तापमंडल (थर्मोस्फीयर) से अलग करती है।"
    },
    {
        question: "वायुमंडल में धूलकणों की क्या भूमिका है?",
        answers: shuffle([
            { text: "वे ग्रीनहाउस प्रभाव पैदा करते हैं", correct: false },
            { text: "वे आर्द्रताग्राही नाभिक के रूप में कार्य करते हैं", correct: true },
            { text: "वे ओजोन परत को नष्ट करते हैं", correct: false },
            { text: "उनका कोई महत्व नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धूलकण, नमक के कण आदि जलवाष्प के संघनन के लिए आधार प्रदान करते हैं<br><br><i class='fa-solid fa-angles-right icon'></i> जलवाष्प इन्हीं कणों के चारों ओर जमा होकर पानी की बूंदों का निर्माण करती है, जिससे बादल बनते हैं।"
    },
    {
        question: "'बोरा' (Bora) नामक ठंडी और शुष्क पवन कहाँ चलती है?",
        answers: shuffle([
            { text: "सहारा मरुस्थल", correct: false },
            { text: "एड्रियाटिक सागर के पूर्वी तट पर", correct: true },
            { text: "कैलिफोर्निया", correct: false },
            { text: "साइबेरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोरा एक बहुत ठंडी और तेज कैटाबेटिक पवन है जो एड्रियाटिक सागर के पूर्वी तट, विशेषकर क्रोएशिया और इटली में, चलती है।"
    },
    {
        question: "समताप रेखा (Isotherm) क्या है?",
        answers: shuffle([
            { text: "मानचित्र पर समान दाब वाले बिंदुओं को मिलाने वाली रेखा", correct: false },
            { text: "मानचित्र पर समान ऊंचाई वाले बिंदुओं को मिलाने वाली रेखा", correct: false },
            { text: "मानचित्र पर समान तापमान वाले बिंदुओं को मिलाने वाली रेखा", correct: true },
            { text: "मानचित्र पर समान वर्षा वाले बिंदुओं को मिलाने वाली रेखा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समताप रेखाएं या इज़ोटेर्म वे काल्पनिक रेखाएं हैं जिनका उपयोग मानचित्र पर समान तापमान वाले क्षेत्रों को दर्शाने के लिए किया जाता है।"
    },
    {
        question: "शीतोष्ण कटिबंधीय चक्रवातों को ऊर्जा कहाँ से मिलती है?",
        answers: shuffle([
            { text: "संघनन की गुप्त ऊष्मा से", correct: false },
            { text: "गर्म और ठंडी वायुराशियों के मिलने से उत्पन्न तापीय ऊर्जा से", correct: true },
            { text: "पृथ्वी के घूर्णन से", correct: false },
            { text: "सौर विकिरण से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शीतोष्ण चक्रवात ध्रुवीय वाताग्र पर गर्म और ठंडी वायुराशियों के मिलने से बनते हैं<br><br><i class='fa-solid fa-angles-right icon'></i> इन वायुराशियों के घनत्व और तापमान में अंतर ही उनकी ऊर्जा का स्रोत होता है।"
    },
    {
        question: "उष्णकटिबंधीय चक्रवातों को ऊर्जा कहाँ से मिलती है?",
        answers: shuffle([
            { text: "संघनन की गुप्त ऊष्मा से", correct: true },
            { text: "पृथ्वी के घूर्णन से", correct: false },
            { text: "वाताग्र के निर्माण से", correct: false },
            { text: "सौर विकिरण से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उष्णकटिबंधीय चक्रवात गर्म समुद्री सतह से ऊर्जा प्राप्त करते हैं<br><br><i class='fa-solid fa-angles-right icon'></i> जब जलवाष्प संघनित होकर बादल और वर्षा बनाता है, तो यह बड़ी मात्रा में गुप्त ऊष्मा छोड़ता है, जो तूफान को और तीव्र करती है।"
    },
    {
        question: "विली-विली (Willy-Willy) क्या है?",
        answers: shuffle([
            { text: "दक्षिण अमेरिका में एक नदी", correct: false },
            { text: "ऑस्ट्रेलिया के उत्तर-पश्चिमी तट पर आने वाला उष्णकटिबंधीय चक्रवात", correct: true },
            { text: "अफ्रीका में एक जनजाति", correct: false },
            { text: "न्यूजीलैंड में एक पक्षी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विली-विली ऑस्ट्रेलिया के पास उत्पन्न होने वाले उष्णकटिबंधीय चक्रवातों का स्थानीय नाम है।"
    },
    {
        question: "पृथ्वी की सतह द्वारा विकीर्ण ऊष्मा को क्या कहा जाता है?",
        answers: shuffle([
            { text: "सूर्यातप", correct: false },
            { text: "एल्बिडो", correct: false },
            { text: "पार्थिव विकिरण (Terrestrial Radiation)", correct: true },
            { text: "संवहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह सूर्य से प्राप्त ऊर्जा को अवशोषित करने के बाद लंबी तरंगों के रूप में ऊष्मा का विकिरण करती है, जिसे पार्थिव विकिरण कहते हैं।"
    },
    {
        question: "गैसों के अलावा, वायुमंडल में और क्या पाया जाता है?",
        answers: shuffle([
            { text: "केवल ऑक्सीजन", correct: false },
            { text: "केवल नाइट्रोजन", correct: false },
            { text: "जलवाष्प और धूलकण", correct: true },
            { text: "केवल बादल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल विभिन्न गैसों के मिश्रण के अलावा जलवाष्प और ठोस कणों जैसे धूलकण, परागकण, और नमक के कणों से भी बना है।"
    },
    {
        question: "किस वायुमंडलीय परत का घनत्व सबसे कम होता है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "मध्यमंडल", correct: false },
            { text: "बहिर्मंडल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहिर्मंडल वायुमंडल की सबसे बाहरी और सबसे विरल परत है, जहाँ गैस के अणु सैकड़ों किलोमीटर दूर-दूर होते हैं, इसलिए इसका घनत्व न्यूनतम होता है।"
    },
    {
        question: "\"चक्रवात की आँख\" (Eye of the Cyclone) क्या है?",
        answers: shuffle([
            { text: "चक्रवात का सबसे विनाशकारी हिस्सा", correct: false },
            { text: "चक्रवात का केंद्र, जहाँ मौसम शांत होता है", correct: true },
            { text: "चक्रवात की बाहरी दीवार", correct: false },
            { text: "वह क्षेत्र जहाँ सर्वाधिक वर्षा होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आँख' एक शक्तिशाली उष्णकटिबंधीय चक्रवात का शांत केंद्रीय क्षेत्र होता है, जहाँ हवा हल्की होती है और आसमान अक्सर साफ होता है।"
    },
    {
        question: "वायुमंडल में कार्बन डाइऑक्साइड की सांद्रता लगभग कितनी है?",
        answers: shuffle([
            { text: "1%", correct: false },
            { text: "0.93%", correct: false },
            { text: "0.04%", correct: true },
            { text: "3%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान में, वायुमंडल में कार्बन डाइऑक्साइड की सांद्रता लगभग 400 पार्ट्स पर मिलियन (ppm) है, जो लगभग 0.04% के बराबर है।"
    },
    {
        question: "ओजोन की सांद्रता मापने की इकाई क्या है?",
        answers: shuffle([
            { text: "डेसीबल", correct: false },
            { text: "डॉबसन यूनिट", correct: true },
            { text: "पास्कल", correct: false },
            { text: "जूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> डॉबसन यूनिट (DU) का उपयोग वायुमंडल के एक स्तंभ में ओजोन की कुल मात्रा को मापने के लिए किया जाता है।"
    },
    {
        question: "वायुमंडल में नाइट्रोजन गैस की क्या भूमिका है?",
        answers: shuffle([
            { text: "यह दहन में सहायता करती है", correct: false },
            { text: "यह दहन को नियंत्रित करती है और पौधों के लिए आवश्यक है", correct: true },
            { text: "यह पराबैंगनी किरणों को अवशोषित करती है", correct: false },
            { text: "यह एक ग्रीनहाउस गैस है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नाइट्रोजन ऑक्सीजन की ज्वलनशीलता को कम करके दहन को नियंत्रित करती है<br><br><i class='fa-solid fa-angles-right icon'></i> साथ ही, यह प्रोटीन का एक आवश्यक घटक है और पौधों की वृद्धि के लिए महत्वपूर्ण है।"
    },
    {
        question: "कौन सी वायुमंडलीय स्थिति उड़ान के दौरान विमान में झटके (Turbulence) का कारण बनती है?",
        answers: shuffle([
            { text: "शांत और स्थिर हवा", correct: false },
            { text: "वायु का तीव्र और अनियमित ऊर्ध्वाधर प्रवाह", correct: true },
            { text: "उच्च आर्द्रता", correct: false },
            { text: "निम्न वायुदाब", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टर्बुलेंस हवा के प्रवाह में अचानक और अनियमित परिवर्तन के कारण होता है, जो विमान को ऊपर-नीचे या साइड में झटका दे सकता है।"
    },
    {
        question: "'नॉरवेस्टर' (Nor'wester) या 'काल बैसाखी' क्या है?",
        answers: shuffle([
            { text: "भारत के उत्तरी मैदानों में चलने वाली लू", correct: false },
            { text: "पूर्वी भारत (बंगाल, असम) में गर्मियों में होने वाली गरज और तूफान के साथ वर्षा", correct: true },
            { text: "दक्षिण भारत का मानसून", correct: false },
            { text: "पश्चिमी विक्षोभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> काल बैसाखी एक स्थानीय तूफान है जो गर्मियों में, विशेषकर बैसाख के महीने में, पूर्वी भारत में गरज, तेज हवाओं और मूसलाधार बारिश के साथ आता है।"
    },
    {
        question: "पृथ्वी के वायुमंडल की उत्पत्ति का मुख्य स्रोत क्या माना जाता है?",
        answers: shuffle([
            { text: "सौर पवन", correct: false },
            { text: "पृथ्वी के निर्माण के समय की आदिम गैसें", correct: false },
            { text: "पृथ्वी के आंतरिक भाग से निकली गैसें (गैस उत्सर्जन)", correct: true },
            { text: "धूमकेतुओं द्वारा लाई गई गैसें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वैज्ञानिकों का मानना है कि पृथ्वी का वर्तमान वायुमंडल मुख्य रूप से ज्वालामुखीय गतिविधियों के माध्यम से पृथ्वी के भीतर से निकली गैसों (जैसे जलवाष्प, कार्बन डाइऑक्साइड, नाइट्रोजन) से बना है।"
    },
    {
        question: "अरोरा ऑस्ट्रेलिस (Aurora Australis) कहाँ दिखाई देता है?",
        answers: shuffle([
            { text: "उत्तरी ध्रुवीय क्षेत्र में", correct: false },
            { text: "दक्षिणी ध्रुवीय क्षेत्र में", correct: true },
            { text: "भूमध्यरेखीय क्षेत्र में", correct: false },
            { text: "कर्क रेखा पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरोरा (ध्रुवीय ज्योति) दक्षिणी गोलार्ध में 'अरोरा ऑस्ट्रेलिस' या 'दक्षिणी ध्रुवीय ज्योति' के रूप में जाना जाता है।"
    },
    {
        question: "मौसम और जलवायु में मुख्य अंतर क्या है?",
        answers: shuffle([
            { text: "मौसम दीर्घकालिक होता है, जलवायु अल्पकालिक", correct: false },
            { text: "मौसम अल्पकालिक वायुमंडलीय दशा है, जबकि जलवायु दीर्घकालिक औसत है", correct: true },
            { text: "दोनों एक ही हैं", correct: false },
            { text: "मौसम केवल तापमान से संबंधित है, जलवायु वर्षा से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौसम किसी स्थान की दिन-प्रतिदिन की वायुमंडलीय स्थितियों को संदर्भित करता है, जबकि जलवायु उस स्थान की लंबी अवधि (आमतौर पर 30 वर्ष या अधिक) की औसत मौसम स्थितियों का वर्णन करती है।"
    },
    {
        question: "किस ऊंचाई पर वायुमंडलीय दाब समुद्र तल के दाब का लगभग आधा रह जाता है?",
        answers: shuffle([
            { text: "1 किलोमीटर", correct: false },
            { text: "5.5 किलोमीटर", correct: true },
            { text: "16 किलोमीटर", correct: false },
            { text: "32 किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडलीय दाब ऊंचाई के साथ तेजी से घटता है, और लगभग 5.5 किमी (18,000 फीट) की ऊंचाई पर यह समुद्र तल के मान का आधा हो जाता है।"
    },
    {
        question: "'आम्र वर्षा' (Mango Shower) भारत के किन राज्यों में होती है?",
        answers: shuffle([
            { text: "पंजाब और हरियाणा", correct: false },
            { text: "राजस्थान और गुजरात", correct: false },
            { text: "केरल और कर्नाटक", correct: true },
            { text: "उत्तर प्रदेश और बिहार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आम्र वर्षा मानसून से पहले होने वाली वर्षा है जो केरल और कर्नाटक के तटीय क्षेत्रों में होती है<br><br><i class='fa-solid fa-angles-right icon'></i> यह आम की फसल को जल्दी पकने में मदद करती है।"
    },
    {
        question: "वायुमंडल की किस परत को 'संवहन मंडल' भी कहा जाता है?",
        answers: shuffle([
            { text: "समतापमंडल", correct: false },
            { text: "क्षोभमंडल", correct: true },
            { text: "मध्यमंडल", correct: false },
            { text: "आयनमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षोभमंडल में तापमान प्रवणता के कारण हवा का संवहन (ऊर्ध्वाधर गति) लगातार होता रहता है, जिससे मौसम संबंधी घटनाएं होती हैं, इसलिए इसे संवहन मंडल भी कहते हैं।"
    },
    {
        question: "हीलियम और हाइड्रोजन जैसी हल्की गैसें मुख्य रूप से किस परत में पाई जाती हैं?",
        answers: shuffle([
            { text: "समतापमंडल", correct: false },
            { text: "मध्यमंडल", correct: false },
            { text: "क्षोभमंडल", correct: false },
            { text: "बहिर्मंडल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बहिर्मंडल में गुरुत्वाकर्षण बहुत कमजोर होता है, जिससे हल्की गैसें जैसे हीलियम और हाइड्रोजन यहां से अंतरिक्ष में पलायन कर जाती हैं।"
    },
    {
        question: "वर्षण (Precipitation) का कौन सा रूप तब बनता है जब वर्षा की बूंदें ठंडी हवा की परत से गुजरते हुए जम जाती हैं?",
        answers: shuffle([
            { text: "ओला (Hail)", correct: false },
            { text: "हिमपात (Snow)", correct: false },
            { text: "सहिम वृष्टि (Sleet)", correct: true },
            { text: "पाला (Frost)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सहिम वृष्टि या स्लीट तब बनती है जब बारिश की बूंदें जमीन पर पहुंचने से पहले हवा की एक उप-हिमांक (sub-freezing) परत से होकर गुजरती हैं और बर्फ के छोटे-छोटे छर्रों में जम जाती हैं।"
    },
    {
        question: "समदाब रेखाओं के वृत्ताकार और पास-पास होने पर किस मौसम परिघटना का निर्माण होता है?",
        answers: shuffle([
            { text: "प्रतिचक्रवात", correct: false },
            { text: "चक्रवात", correct: true },
            { text: "शांत मौसम", correct: false },
            { text: "कोहरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चक्रवातों को मौसम मानचित्र पर केंद्र में निम्न दाब और चारों ओर पास-पास स्थित लगभग गोलाकार समदाब रेखाओं द्वारा दर्शाया जाता है।"
    },
    {
        question: "'सांता एना' (Santa Ana) पवनें कहाँ चलती हैं?",
        answers: shuffle([
            { text: "अर्जेंटीना", correct: false },
            { text: "दक्षिणी कैलिफोर्निया (संयुक्त राज्य अमेरिका)", correct: true },
            { text: "न्यूजीलैंड", correct: false },
            { text: "मिस्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सांता एना पवनें दक्षिणी कैलिफोर्निया में चलने वाली गर्म, शुष्क और तेज हवाएं हैं, जो अक्सर जंगल की आग के खतरे को बढ़ा देती हैं।"
    },
    {
        question: "पृथ्वी के वायुमंडल को बनाए रखने में सबसे महत्वपूर्ण कारक क्या है?",
        answers: shuffle([
            { text: "सूर्य का प्रकाश", correct: false },
            { text: "पृथ्वी का घूर्णन", correct: false },
            { text: "पृथ्वी का गुरुत्वाकर्षण बल", correct: true },
            { text: "चंद्रमा का गुरुत्वाकर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का गुरुत्वाकर्षण बल ही वायुमंडल की गैसों को अंतरिक्ष में जाने से रोकता है और उन्हें पृथ्वी के चारों ओर बनाए रखता है।"
    },
    {
        question: "दाब प्रवणता बल (Pressure Gradient Force) की दिशा क्या होती है?",
        answers: shuffle([
            { text: "निम्न दाब से उच्च दाब की ओर", correct: false },
            { text: "उच्च दाब से निम्न दाब की ओर", correct: true },
            { text: "पवनों की दिशा के समानांतर", correct: false },
            { text: "पवनों की दिशा के लंबवत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हवा हमेशा उच्च वायुदाब वाले क्षेत्र से निम्न वायुदाब वाले क्षेत्र की ओर बहती है<br><br><i class='fa-solid fa-angles-right icon'></i> यह गति जिस बल के कारण होती है, उसे दाब प्रवणता बल कहते हैं।"
    },
    {
        question: "वायुमंडल की संरचना में विभिन्न गैसों का अवरोही क्रम (मात्रा के अनुसार) क्या है?",
        answers: shuffle([
            { text: "नाइट्रोजन > ऑक्सीजन > कार्बन डाइऑक्साइड > आर्गन", correct: false },
            { text: "ऑक्सीजन > नाइट्रोजन > आर्गन > कार्बन डाइऑक्साइड", correct: false },
            { text: "नाइट्रोजन > ऑक्सीजन > आर्गन > कार्बन डाइऑक्साइड", correct: true },
            { text: "नाइट्रोजन > आर्गन > ऑक्सीजन > कार्बन डाइऑक्साइड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल में गैसों का सही अवरोही क्रम है: नाइट्रोजन (~78%), ऑक्सीजन (~21%), आर्गन (~0.93%), और कार्बन डाइऑक्साइड (~0.04%)।"
    },
    {
        question: "निरपेक्ष आर्द्रता (Absolute Humidity) की इकाई क्या है?",
        answers: shuffle([
            { text: "प्रतिशत", correct: false },
            { text: "ग्राम प्रति घन मीटर", correct: true },
            { text: "डिग्री सेल्सियस", correct: false },
            { text: "पास्कल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निरपेक्ष आर्द्रता हवा के प्रति इकाई आयतन (जैसे एक घन मीटर) में मौजूद जलवाष्प के वास्तविक द्रव्यमान (ग्राम में) को संदर्भित करती है।"
    },
    {
        question: "'धूल का कटोरा' (Dust Bowl) की घटना किस वायुमंडलीय प्रक्रिया से संबंधित थी?",
        answers: shuffle([
            { text: "अत्यधिक वर्षा और बाढ़", correct: false },
            { text: "गंभीर सूखा और पवन अपरदन", correct: true },
            { text: "ज्वालामुखी विस्फोट", correct: false },
            { text: "ओजोन क्षरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1930 के दशक में संयुक्त राज्य अमेरिका और कनाडा के मैदानी इलाकों में गंभीर सूखे के कारण मिट्टी सूख गई और तेज हवाओं ने ऊपरी मिट्टी को उड़ा दिया, जिससे भयानक धूल भरी आंधियाँ चलीं<br><br><i class='fa-solid fa-angles-right icon'></i> इस घटना को 'डस्ट बाउल' कहा गया।"
    },
    {
        question: "किस अक्षांश पर वर्ष भर दिन और रात लगभग बराबर होते हैं?",
        answers: shuffle([
            { text: "23.5° उत्तर", correct: false },
            { text: "66.5° दक्षिण", correct: false },
            { text: "0° (भूमध्य रेखा)", correct: true },
            { text: "90° उत्तर (उत्तरी ध्रुव)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भूमध्य रेखा पर सूर्य की किरणें वर्ष भर लगभग सीधी पड़ती हैं, और पृथ्वी के झुकाव का प्रभाव यहाँ न्यूनतम होता है, जिसके कारण दिन और रात की अवधि में बहुत कम अंतर होता है।"
    },
    {
        question: "पश्चिमी विक्षोभ (Western Disturbances) भारत में किस मौसम में वर्षा का कारण बनते हैं?",
        answers: shuffle([
            { text: "ग्रीष्म ऋतु", correct: false },
            { text: "वर्षा ऋतु", correct: false },
            { text: "शरद ऋतु", correct: false },
            { text: "शीत ऋतु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पश्चिमी विक्षोभ भूमध्य सागर से उत्पन्न होने वाले शीतोष्ण चक्रवात हैं जो सर्दियों के महीनों में भारतीय उपमहाद्वीप के उत्तर-पश्चिमी भागों में वर्षा और बर्फबारी लाते हैं।"
    },
    {
        question: "जब गर्म वाताग्र (Warm Front) गुजरता है, तो मौसम में क्या परिवर्तन होता है?",
        answers: shuffle([
            { text: "तापमान अचानक गिरता है और तेज वर्षा होती है", correct: false },
            { text: "तापमान धीरे-धीरे बढ़ता है और हल्की, लंबे समय तक वर्षा होती है", correct: true },
            { text: "मौसम साफ और शांत हो जाता है", correct: false },
            { text: "तेज तूफान और ओलावृष्टि होती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गर्म वाताग्र में, गर्म हवा धीरे-धीरे ठंडी हवा के ऊपर चढ़ती है, जिससे व्यापक बादल बनते हैं और अक्सर स्थिर, हल्की से मध्यम वर्षा होती है ।"
    },
    {
        question: "यदि पृथ्वी अपनी धुरी पर घूमना बंद कर दे, तो पवनों पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "पवनें बहुत तेज हो जाएंगी", correct: false },
            { text: "पवनें चलना बंद कर देंगी", correct: false },
            { text: "पवनें दाब प्रवणता के लंबवत चलेंगी", correct: true },
            { text: "पवनें केवल ध्रुवों पर चलेंगी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यदि पृथ्वी घूमना बंद कर दे, तो कोरिऑलिस बल शून्य हो जाएगा<br><br><i class='fa-solid fa-angles-right icon'></i> तब पवनें विक्षेपित नहीं होंगी और सीधे उच्च दाब से निम्न दाब की ओर, यानी समदाब रेखाओं के लंबवत, चलेंगी।"
    },
    {
        question: "ऊंचाई वाले बादल, जैसे पक्षाभ मेघ, किससे बने होते हैं?",
        answers: shuffle([
            { text: "पानी की बड़ी बूंदों से", correct: false },
            { text: "धूलकणों से", correct: false },
            { text: "बर्फ के छोटे क्रिस्टलों से", correct: true },
            { text: "धूएँ से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षोभमंडल की ऊपरी परतों में तापमान हिमांक से बहुत नीचे होता है, इसलिए इतनी ऊंचाई पर बनने वाले बादल पानी की बूंदों के बजाय बर्फ के छोटे-छोटे क्रिस्टल से बने होते हैं।"
    },
    {
        question: "वायुमंडल द्वारा ऊष्मा के स्थानांतरण की कौन सी विधि में अणु सीधे संपर्क में आते हैं?",
        answers: shuffle([
            { text: "विकिरण (Radiation)", correct: false },
            { text: "संवहन (Convection)", correct: false },
            { text: "चालन (Conduction)", correct: true },
            { text: "अभिवहन (Advection)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चालन ऊष्मा हस्तांतरण की वह प्रक्रिया है जिसमें ऊर्जा एक अणु से दूसरे अणु में सीधे संपर्क के माध्यम से स्थानांतरित होती है<br><br><i class='fa-solid fa-angles-right icon'></i> वायुमंडल में यह केवल सतह के ठीक संपर्क वाली हवा को गर्म करने में प्रभावी है।"
    },
    {
        question: "'अभिवहन' (Advection) क्या है?",
        answers: shuffle([
            { text: "ऊष्मा का ऊर्ध्वाधर स्थानांतरण", correct: false },
            { text: "ऊष्मा का क्षैतिज स्थानांतरण", correct: true },
            { text: "ऊष्मा का विकिरण द्वारा स्थानांतरण", correct: false },
            { text: "ऊष्मा का चालन द्वारा स्थानांतरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब पवनें ऊष्मा को एक स्थान से दूसरे स्थान पर क्षैतिज रूप से ले जाती हैं, तो इस प्रक्रिया को अभिवहन कहते हैं<br><br><i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, गर्म क्षेत्रों से ठंडे क्षेत्रों की ओर चलने वाली हवा।"
    },
    {
        question: "'बादल फटना' (Cloudburst) से क्या तात्पर्य है?",
        answers: shuffle([
            { text: "आसमान में बहुत सारे बादलों का दिखना", correct: false },
            { text: "एक छोटे से क्षेत्र में अचानक और अत्यधिक भारी वर्षा होना", correct: true },
            { text: "बिजली गिरने से बादल का नष्ट हो जाना", correct: false },
            { text: "ओलावृष्टि होना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बादल फटना एक चरम मौसम की घटना है जिसमें एक सीमित क्षेत्र में बहुत कम समय में अत्यधिक मात्रा में वर्षा होती है, जो अक्सर बाढ़ का कारण बनती है।"
    },
    {
        question: "पृथ्वी की सतह के गर्म होने का मुख्य तरीका क्या है?",
        answers: shuffle([
            { text: "सीधे सौर विकिरण से", correct: true },
            { text: "पार्थिव विकिरण द्वारा वायुमंडल के गर्म होने और फिर वायुमंडल से", correct: false },
            { text: "ज्वालामुखी गतिविधि से", correct: false },
            { text: "चालन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी की सतह मुख्य रूप से सूर्य से आने वाले लघु-तरंग सौर विकिरण (सूर्यातप) को अवशोषित करके गर्म होती है।"
    },
    {
        question: "वायुमंडल मुख्य रूप से कैसे गर्म होता है?",
        answers: shuffle([
            { text: "सीधे सौर विकिरण से", correct: false },
            { text: "लंबी-तरंग पार्थिव विकिरण से", correct: true },
            { text: "चालन से", correct: false },
            { text: "संवहन से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल सौर विकिरण के लिए काफी हद तक पारदर्शी है, लेकिन यह पृथ्वी की सतह से उत्सर्जित होने वाले लंबी-तरंग पार्थिव विकिरण को अवशोषित करता है, जिससे यह नीचे से ऊपर की ओर गर्म होता है।"
    },
    {
        question: "जियोस्ट्रोफिक पवन (Geostrophic Wind) क्या है?",
        answers: shuffle([
            { text: "सतह के पास बहने वाली पवन", correct: false },
            { text: "दाब प्रवणता बल और कोरिऑलिस बल के संतुलन से बहने वाली पवन", correct: true },
            { text: "भूमध्य रेखा पर बहने वाली पवन", correct: false },
            { text: "घाटी में बहने वाली पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऊपरी वायुमंडल में, जहाँ घर्षण नगण्य होता है, पवनें समदाब रेखाओं के समानांतर बहती हैं<br><br><i class='fa-solid fa-angles-right icon'></i> यह स्थिति तब उत्पन्न होती है जब दाब प्रवणता बल और कोरिऑलिस बल एक दूसरे को संतुलित कर देते हैं।"
    },
    {
        question: "'पेरिस समझौता' (Paris Agreement) का मुख्य लक्ष्य क्या है?",
        answers: shuffle([
            { text: "वैश्विक तापमान वृद्धि को पूर्व-औद्योगिक स्तर से 2°C से काफी नीचे तक सीमित करना", correct: true },
            { text: "ओजोन परत की रक्षा करना", correct: false },
            { text: "वायु प्रदूषण को कम करना", correct: false },
            { text: "मरुस्थलीकरण को रोकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरिस समझौता जलवायु परिवर्तन पर एक ऐतिहासिक अंतरराष्ट्रीय समझौता है जिसका उद्देश्य ग्रीनहाउस गैस उत्सर्जन को कम करके वैश्विक तापमान वृद्धि को नियंत्रित करना है।"
    },
    {
        question: "वायुमंडल में कौन सी परत 'केमोस्फीयर' (Chemosphere) का हिस्सा है, जहां रासायनिक प्रतिक्रियाएं अधिक होती हैं?",
        answers: shuffle([
            { text: "केवल क्षोभमंडल", correct: false },
            { text: "केवल समतापमंडल", correct: false },
            { text: "ओजोनमंडल और मध्यमंडल", correct: true },
            { text: "केवल बहिर्मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केमोस्फीयर वह क्षेत्र है जहां सौर विकिरण के कारण गहन रासायनिक और फोटोकैमिकल गतिविधियां होती हैं, इसमें ओजोन परत और मध्यमंडल शामिल हैं।"
    },
    {
        question: "'अगोल्हास धारा' (Agulhas Current) के ऊपर से बहने वाली हवा में क्या विशेषता होगी?",
        answers: shuffle([
            { text: "वह ठंडी और शुष्क होगी", correct: false },
            { text: "वह गर्म और आर्द्र होगी", correct: true },
            { text: "वह ठंडी और आर्द्र होगी", correct: false },
            { text: "उस पर कोई प्रभाव नहीं पड़ेगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अगोल्हास एक गर्म महासागरीय धारा है<br><br><i class='fa-solid fa-angles-right icon'></i> इसके ऊपर से गुजरने वाली हवा गर्मी और नमी ग्रहण कर लेगी, जिससे वह गर्म और आर्द्र हो जाएगी।"
    },
    {
        question: "'ध्रुवीय समतापमंडलीय बादल' (Polar Stratospheric Clouds) किस प्रक्रिया में महत्वपूर्ण भूमिका निभाते हैं?",
        answers: shuffle([
            { text: "अरोरा के निर्माण में", correct: false },
            { text: "ओजोन क्षरण की रासायनिक प्रतिक्रियाओं में", correct: true },
            { text: "संवहनीय वर्षा में", correct: false },
            { text: "जेट स्ट्रीम के निर्माण में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये बादल ध्रुवीय सर्दियों के दौरान समतापमंडल में बनते हैं और एक सतह प्रदान करते हैं जहाँ क्लोरीन यौगिक सक्रिय होते हैं, जो सूर्य के प्रकाश की उपस्थिति में ओजोन को तेजी से नष्ट करते हैं।"
    },
    {
        question: "वह रेखा जो समान औसत वार्षिक वर्षा वाले स्थानों को जोड़ती है, क्या कहलाती है?",
        answers: shuffle([
            { text: "आइसोबार (समदाब रेखा)", correct: false },
            { text: "आइसोहाइट (समवर्षा रेखा)", correct: true },
            { text: "आइसोथर्म (समताप रेखा)", correct: false },
            { text: "कंटूर (समोच्च रेखा)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौसम विज्ञान में, आइसोहाइट का उपयोग मानचित्र पर समान मात्रा में वर्षा प्राप्त करने वाले क्षेत्रों को दर्शाने के लिए किया जाता है।"
    },
    {
        question: "'पार्थिव ग्रह' (Terrestrial Planets) में से किस ग्रह का वायुमंडल सबसे सघन है?",
        answers: shuffle([
            { text: "बुध", correct: false },
            { text: "शुक्र", correct: true },
            { text: "पृथ्वी", correct: false },
            { text: "मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का वायुमंडल अत्यंत सघन है, जो मुख्य रूप से कार्बन डाइऑक्साइड से बना है, और इसका सतही दाब पृथ्वी की तुलना में 90 गुना से भी अधिक है ।"
    },
    {
        question: "शुष्क रुद्धोष्म ताप पतन दर (Dry Adiabatic Lapse Rate) क्या है?",
        answers: shuffle([
            { text: "6.5°C प्रति 1000 मीटर", correct: false },
            { text: "10°C प्रति 1000 मीटर", correct: true },
            { text: "5°C प्रति 1000 मीटर", correct: false },
            { text: "यह स्थिर नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब असंतृप्त (शुष्क) हवा का एक पार्सल ऊपर उठता है, तो वह फैलता है और ठंडा होता है<br><br><i class='fa-solid fa-angles-right icon'></i> यह शीतलन दर लगभग 10°C प्रति 1000 मीटर स्थिर होती है।"
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