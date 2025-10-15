const questions = [
    {
        topHeading: "वायुमंडल पर आधारित 50 MCQs part_2 (quiz_no.)"
    },
    {
        question: "ओजोन दिवस कब मनाया जाता है?",
        answers: shuffle([
            { text: "5 जून", correct: false },
            { text: "22 अप्रैल", correct: false },
            { text: "16 सितंबर", correct: true },
            { text: "22 मार्च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओजोन परत के संरक्षण के बारे में जागरूकता फैलाने के लिए प्रतिवर्ष 16 सितंबर को विश्व ओजोन दिवस मनाया जाता है।"
    },
    {
        question: "किस प्रकार के मेघों से मूसलाधार वर्षा और ओलावृष्टि होती है?",
        answers: shuffle([
            { text: "पक्षाभ मेघ (Cirrus)", correct: false },
            { text: "स्तरी मेघ (Stratus)", correct: false },
            { text: "कपासी वर्षी मेघ (Cumulonimbus)", correct: true },
            { text: "पक्षाभ कपासी मेघ (Cirrocumulus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपासी वर्षी मेघ बहुत विशाल और घने होते हैं, जो गरज, बिजली, भारी वर्षा, और कभी-कभी ओलावृष्टि से जुड़े होते हैं।"
    },
    {
        question: "फेरल का नियम (Ferrel's Law) किससे संबंधित है?",
        answers: shuffle([
            { text: "a) पवनों की दिशा से", correct: false },
            { text: "b) समुद्री धाराओं की दिशा से", correct: false },
            { text: "c) चक्रवातों की उत्पत्ति से", correct: false },
            { text: "a) और b) दोनों से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फेरल का नियम कोरिऑलिस बल के प्रभाव की व्याख्या करता है, जिसके अनुसार उत्तरी गोलार्ध में पवनें और धाराएं अपनी दाईं ओर तथा दक्षिणी गोलार्ध में अपनी बाईं ओर विक्षेपित हो जाती हैं।"
    },
    {
        question: "समदाब रेखाएँ (Isobars) क्या दर्शाती हैं?",
        answers: shuffle([
            { text: "समान तापमान वाले स्थानों को", correct: false },
            { text: "समान वर्षा वाले स्थानों को", correct: false },
            { text: "समान वायुदाब वाले स्थानों को", correct: true },
            { text: "समान ऊंचाई वाले स्थानों को", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मौसम मानचित्र पर खींची गई वे काल्पनिक रेखाएँ जो समुद्र तल पर समान वायुदाब वाले सभी स्थानों को मिलाती हैं, समदाब रेखाएँ कहलाती हैं।"
    },
    {
        question: "स्मॉग (Smog) किसका मिश्रण है?",
        answers: shuffle([
            { text: "धुआँ और ओस", correct: false },
            { text: "धुआँ और कोहरा", correct: true },
            { text: "कोहरा और ओजोन", correct: false },
            { text: "जलवाष्प और धूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्मॉग (Smoke + Fog) एक प्रकार का वायु प्रदूषण है जो धुएँ और कोहरे के मिलने से बनता है, खासकर सर्दियों में औद्योगिक क्षेत्रों में।"
    },
    {
        question: "पृथ्वी पर आने वाले सौर विकिरण को क्या कहते हैं?",
        answers: shuffle([
            { text: "पार्थिव विकिरण", correct: false },
            { text: "सूर्यातप (Insolation)", correct: true },
            { text: "एल्बिडो", correct: false },
            { text: "संवहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य से पृथ्वी की सतह तक पहुँचने वाली सौर ऊर्जा या विकिरण को सूर्यातप कहा जाता है।"
    },
    {
        question: "एल्बिडो (Albedo) क्या है?",
        answers: shuffle([
            { text: "किसी सतह द्वारा सौर विकिरण को अवशोषित करने की क्षमता", correct: false },
            { text: "किसी सतह द्वारा सौर विकिरण को परावर्तित करने की क्षमता", correct: true },
            { text: "पृथ्वी का औसत तापमान", correct: false },
            { text: "ग्रीनहाउस प्रभाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी भी सतह पर पड़ने वाले सौर विकिरण का वह प्रतिशत जो बिना अवशोषित हुए वापस परावर्तित हो जाता है, एल्बिडो कहलाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बर्फ का एल्बिडो सबसे अधिक होता है।"
    },
    {
        question: "समुद्र समीर (Sea Breeze) कब चलती है?",
        answers: shuffle([
            { text: "दिन के समय", correct: true },
            { text: "रात के समय", correct: false },
            { text: "सुबह के समय", correct: false },
            { text: "शाम के समय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिन में स्थल भाग समुद्र की तुलना में जल्दी गर्म हो जाता है, जिससे स्थल पर निम्न दाब और समुद्र पर उच्च दाब बन जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हवा समुद्र से स्थल की ओर चलती है, जिसे समुद्र समीर कहते हैं।"
    },
    {
        question: "स्थल समीर (Land Breeze) कब चलती है?",
        answers: shuffle([
            { text: "दिन के समय", correct: false },
            { text: "रात के समय", correct: true },
            { text: "पूरे दिन", correct: false },
            { text: "केवल सुबह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रात में स्थल भाग समुद्र की तुलना में जल्दी ठंडा हो जाता है, जिससे स्थल पर उच्च दाब और समुद्र पर निम्न दाब बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> हवा स्थल से समुद्र की ओर चलती है, जिसे स्थल समीर कहते हैं।"
    },
    {
        question: "वायुमंडल में किस दुर्लभ गैस की मात्रा सर्वाधिक है?",
        answers: shuffle([
            { text: "नियॉन", correct: false },
            { text: "हीलियम", correct: false },
            { text: "क्रिप्टन", correct: false },
            { text: "आर्गन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्गन (Ar) एक अक्रिय गैस है और वायुमंडल में लगभग 0.93% की मात्रा के साथ सबसे प्रचुर दुर्लभ गैस है।"
    },
    {
        question: "'एनाबेटिक' पवन किसे कहते हैं?",
        answers: shuffle([
            { text: "घाटी से पर्वत शिखर की ओर चलने वाली पवन", correct: true },
            { text: "पर्वत शिखर से घाटी की ओर चलने वाली पवन", correct: false },
            { text: "समुद्र से स्थल की ओर चलने वाली पवन", correct: false },
            { text: "स्थल से समुद्र की ओर चलने वाली पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिन के समय पर्वतीय ढलान गर्म हो जाते हैं, जिससे हवा गर्म होकर घाटी से ऊपर ढलान के सहारे चढ़ती है, इसे 'एनाबेटिक' या घाटी समीर कहते हैं।"
    },
    {
        question: "'कैटाबेटिक' पवन किसे कहते हैं?",
        answers: shuffle([
            { text: "घाटी से पर्वत शिखर की ओर चलने वाली पवन", correct: false },
            { text: "पर्वत शिखर से घाटी की ओर उतरने वाली पवन", correct: true },
            { text: "गर्म पवन", correct: false },
            { text: "आर्द्र पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रात के समय पर्वतीय ढलान ठंडे हो जाते हैं, जिससे ठंडी और भारी हवा गुरुत्वाकर्षण के कारण ढलान से नीचे घाटी की ओर उतरती है, इसे 'कैटाबेटिक' या पर्वत समीर कहते हैं।"
    },
    {
        question: "हरिकेन (Hurricane) क्या है?",
        answers: shuffle([
            { text: "एशिया में आने वाला उष्णकटिबंधीय चक्रवात", correct: false },
            { text: "ऑस्ट्रेलिया में आने वाला उष्णकटिबंधीय चक्रवात", correct: false },
            { text: "अटलांटिक महासागर में आने वाला उष्णकटिबंधीय चक्रवात", correct: true },
            { text: "अफ्रीका में बहने वाली गर्म हवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हरिकेन, अटलांटिक महासागर और उत्तर-पूर्वी प्रशांत महासागर में उत्पन्न होने वाले शक्तिशाली उष्णकटिबंधीय चक्रवातों का स्थानीय नाम है।"
    },
    {
        question: "टाइफून (Typhoon) कहाँ आते हैं?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "उत्तर-पश्चिमी प्रशांत महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन, जापान, फिलीपींस के आसपास उत्तर-पश्चिमी प्रशांत महासागर में उठने वाले उष्णकटिबंधीय चक्रवातों को टाइफून कहा जाता है।"
    },
    {
        question: "वायुमंडल की आर्द्रता में वृद्धि होने पर वायुदाब पर क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "बढ़ता है", correct: false },
            { text: "घटता है", correct: true },
            { text: "अपरिवर्तित रहता है", correct: false },
            { text: "पहले बढ़ता है फिर घटता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जलवाष्प (आर्द्रता) शुष्क हवा की तुलना में हल्की होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, जब हवा में आर्द्रता बढ़ती है, तो उसका घनत्व कम हो जाता है, जिससे वायुदाब घट जाता है।"
    },
    {
        question: "ओस (Dew) बनने के लिए आदर्श स्थिति क्या है?",
        answers: shuffle([
            { text: "तेज हवा और बादल वाला आकाश", correct: false },
            { text: "शांत हवा और साफ आकाश", correct: true },
            { text: "बारिश का मौसम", correct: false },
            { text: "दिन का गर्म समय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब रात में आकाश साफ होता है, तो पृथ्वी की सतह तेजी से ठंडी होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> शांत हवा के कारण सतह के पास की हवा का तापमान ओसांक बिंदु तक गिर जाता है और जलवाष्प संघनित होकर ओस की बूंदों में बदल जाती है।"
    },
    {
        question: "क्षोभमंडल की औसत ऊंचाई कितनी है?",
        answers: shuffle([
            { text: "लगभग 50 किमी", correct: false },
            { text: "लगभग 80 किमी", correct: false },
            { text: "लगभग 13 किमी", correct: true },
            { text: "लगभग 100 किमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षोभमंडल की ऊंचाई ध्रुवों पर लगभग 8 किमी और भूमध्य रेखा पर लगभग 18 किमी होती है, इसकी औसत ऊंचाई लगभग 13 किमी है।"
    },
    {
        question: "पृथ्वी की धुरी का झुकाव मौसम के परिवर्तन के लिए कैसे जिम्मेदार है?",
        answers: shuffle([
            { text: "यह पृथ्वी और सूर्य के बीच की दूरी को बदलता है", correct: false },
            { text: "यह प्रत्येक गोलार्ध द्वारा प्राप्त होने वाले सीधे सौर विकिरण की मात्रा को बदलता है", correct: true },
            { text: "यह वायुमंडल की मोटाई को बदलता है", correct: false },
            { text: "यह पृथ्वी की घूर्णन गति को बदलता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के 23.5 डिग्री के झुकाव के कारण, वर्ष के अलग-अलग समय में उत्तरी या दक्षिणी गोलार्ध सूर्य की ओर अधिक झुका होता है, जिससे उसे अधिक सीधी धूप और लंबे दिन मिलते हैं, जो गर्मियों का कारण बनता है ।"
    },
    {
        question: "पृथ्वी के वायुमंडल का मुख्य ऊर्जा स्रोत क्या है?",
        answers: shuffle([
            { text: "पृथ्वी का आंतरिक भाग", correct: false },
            { text: "चंद्रमा", correct: false },
            { text: "सूर्य", correct: true },
            { text: "ज्वारीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य पृथ्वी के वायुमंडल और मौसम प्रणाली के लिए ऊर्जा का प्रमुख और लगभग एकमात्र स्रोत है।"
    },
    {
        question: "\"बादलों का घर\" किस भारतीय राज्य को कहा जाता है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true },
            { text: "मिजोरम", correct: false },
            { text: "केरल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मेघालय' शब्द का अर्थ ही \"बादलों का घर\" है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ विश्व में सर्वाधिक वर्षा वाले स्थान (मासिनराम) स्थित हैं, जो घने बादलों से ढके रहते हैं।"
    },
    {
        question: "पवन की दिशा ज्ञात करने के लिए किस उपकरण का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "एनीमोमीटर", correct: false },
            { text: "विंड वेन (वात दिग्दर्शक)", correct: true },
            { text: "बैरोमीटर", correct: false },
            { text: "हाइग्रोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विंड वेन या वात दिग्दर्शक एक उपकरण है जो यह बताता है कि हवा किस दिशा से आ रही है।"
    },
    {
        question: "कौन सा बादल 'भेड़ की ऊन' जैसा दिखता है?",
        answers: shuffle([
            { text: "कपासी मेघ (Cumulus)", correct: false },
            { text: "स्तरी मेघ (Stratus)", correct: false },
            { text: "पक्षाभ कपासी मेघ (Cirrocumulus)", correct: true },
            { text: "पक्षाभ मेघ (Cirrus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पक्षाभ कपासी मेघ छोटे, सफेद और गोलाकार ढेरों के रूप में दिखाई देते हैं, जो अक्सर 'मैकेरल स्काई' (मछली की खाल जैसा आकाश) बनाते हैं और भेड़ की ऊन जैसे दिखते हैं।"
    },
    {
        question: "पाला या तुषार (Frost) कब बनता है?",
        answers: shuffle([
            { text: "जब ओसांक हिमांक से ऊपर हो", correct: false },
            { text: "जब ओसांक हिमांक (0°C) से नीचे हो", correct: true },
            { text: "जब हवा बहुत तेज हो", correct: false },
            { text: "जब आसमान में बादल हों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सतह का तापमान 0°C से नीचे चला जाता है और हवा का ओसांक भी हिमांक से नीचे होता है, तो जलवाष्प सीधे बर्फ के छोटे क्रिस्टल में बदल जाती है, जिसे पाला कहते हैं।"
    },
    {
        question: "मॉन्ट्रियल प्रोटोकॉल (Montreal Protocol) का संबंध किससे है?",
        answers: shuffle([
            { text: "जलवायु परिवर्तन", correct: false },
            { text: "ओजोन परत का संरक्षण", correct: true },
            { text: "अम्ल वर्षा की रोकथाम", correct: false },
            { text: "समुद्री प्रदूषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मॉन्ट्रियल प्रोटोकॉल एक अंतरराष्ट्रीय संधि है जिसे ओजोन परत को नष्ट करने वाले पदार्थों (जैसे CFCs) के उत्पादन को चरणबद्ध तरीके से समाप्त करने के लिए बनाया गया था।"
    },
    {
        question: "टॉरनेडो (Tornado) की तीव्रता मापने के लिए किस पैमाने का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "रिक्टर स्केल", correct: false },
            { text: "फुजिता स्केल", correct: true },
            { text: "ब्यूफोर्ट स्केल", correct: false },
            { text: "मरकली स्केल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फुजिता स्केल (या Enhanced Fujita Scale) का उपयोग टॉरनेडो से होने वाले नुकसान के आधार पर उसकी तीव्रता और हवा की गति का अनुमान लगाने के लिए किया जाता है।"
    },
    {
        question: "प्रकाश-रासायनिक धूम-कोहरा (Photochemical Smog) का मुख्य घटक क्या है?",
        answers: shuffle([
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "सल्फर डाइऑक्साइड", correct: false },
            { text: "ओजोन", correct: true },
            { text: "मीथेन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश-रासायनिक धूम-कोहरा तब बनता है जब सूर्य के प्रकाश की उपस्थिति में नाइट्रोजन ऑक्साइड और वाष्पशील कार्बनिक यौगिक प्रतिक्रिया करते हैं, जिससे जमीनी स्तर पर ओजोन और अन्य प्रदूषक बनते हैं।"
    },
    {
        question: "वायुमंडल की वह परत जो पृथ्वी की सतह के सबसे करीब है, कौन सी है?",
        answers: shuffle([
            { text: "समतापमंडल", correct: false },
            { text: "मध्यमंडल", correct: false },
            { text: "क्षोभमंडल", correct: true },
            { text: "बहिर्मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्षोभमंडल पृथ्वी के वायुमंडल की सबसे निचली परत है, जो ग्रह की सतह से शुरू होती है।"
    },
    {
        question: "ब्यूफोर्ट स्केल (Beaufort Scale) का उपयोग क्या मापने के लिए किया जाता है?",
        answers: shuffle([
            { text: "हवा का तापमान", correct: false },
            { text: "हवा का दाब", correct: false },
            { text: "हवा की गति और उसके प्रभाव", correct: true },
            { text: "वर्षा की मात्रा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्यूफोर्ट स्केल एक अनुभवजन्य माप है जो हवा की गति को समुद्र या जमीन पर देखे गए प्रभावों के आधार पर वर्गीकृत करता है।"
    },
    {
        question: "दो समदाब रेखाओं का पास-पास होना क्या दर्शाता है?",
        answers: shuffle([
            { text: "कमजोर दाब प्रवणता", correct: false },
            { text: "तीव्र दाब प्रवणता और तेज हवाएं", correct: true },
            { text: "शांत मौसम", correct: false },
            { text: "समान तापमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब समदाब रेखाएं एक-दूसरे के करीब होती हैं, तो यह इंगित करता है कि कम दूरी में दाब तेजी से बदल रहा है (तीव्र दाब प्रवणता), जिसके परिणामस्वरूप हवा की गति तेज होती है।"
    },
    {
        question: "ध्रुवीय वाताग्र (Polar Front) कहाँ बनता है?",
        answers: shuffle([
            { text: "भूमध्य रेखा के पास", correct: false },
            { text: "30° से 35° अक्षांशों के पास", correct: false },
            { text: "60° से 65° अक्षांशों के पास", correct: true },
            { text: "ध्रुवों पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुवीय वाताग्र वह क्षेत्र है जहाँ ध्रुवों से आने वाली ठंडी ध्रुवीय हवा और उपोष्ण क्षेत्रों से आने वाली गर्म पछुआ हवा मिलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह शीतोष्ण चक्रवातों की उत्पत्ति का प्रमुख क्षेत्र है।"
    },
    {
        question: "\"ब्लिजार्ड\" (Blizzard) क्या है?",
        answers: shuffle([
            { text: "एक गर्म स्थानीय हवा", correct: false },
            { text: "तेज हवाओं के साथ बर्फीला तूफान", correct: true },
            { text: "एक प्रकार का बादल", correct: false },
            { text: "एक रेगिस्तानी तूफान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्लिजार्ड एक गंभीर बर्फीला तूफान है जिसकी विशेषता तेज हवाएं, गिरती या उड़ती हुई बर्फ और बहुत कम दृश्यता होती है।"
    },
    {
        question: "मानसून किस प्रकार की पवन का उदाहरण है?",
        answers: shuffle([
            { text: "स्थायी पवन", correct: false },
            { text: "स्थानीय पवन", correct: false },
            { text: "मौसमी या सामयिक पवन", correct: true },
            { text: "ध्रुवीय पवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मानसून पवनें वे पवनें हैं जिनकी दिशा मौसम के अनुसार पूरी तरह से उलट जाती है, जैसे भारत में गर्मियों और सर्दियों की मानसून पवनें।"
    },
    {
        question: "ओसांक (Dew Point) क्या है?",
        answers: shuffle([
            { text: "वह तापमान जिस पर पानी उबलता है", correct: false },
            { text: "वह तापमान जिस पर हवा संतृप्त हो जाती है और संघनन शुरू हो जाता है", correct: true },
            { text: "दिन का अधिकतम तापमान", correct: false },
            { text: "रात का न्यूनतम तापमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओसांक वह तापमान है जिस तक हवा को ठंडा करने पर उसमें मौजूद जलवाष्प संघनित होकर पानी की बूंदों में बदलने लगता है।"
    },
    {
        question: "पृथ्वी को कंबल की तरह ढकने वाली वायु की परत को क्या कहते हैं?",
        answers: shuffle([
            { text: "जलमंडल", correct: false },
            { text: "स्थलमंडल", correct: false },
            { text: "वायुमंडल", correct: true },
            { text: "जैवमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल गैसों की एक परत है जो पृथ्वी को चारों ओर से एक कंबल की तरह घेरे रहती है और इसे अत्यधिक गर्म या ठंडा होने से बचाती है।"
    },
    {
        question: "वायुमंडल में विद्यमान अदृश्य जलवाष्प की मात्रा क्या कहलाती है?",
        answers: shuffle([
            { text: "वाष्पीकरण", correct: false },
            { text: "संघनन", correct: false },
            { text: "आर्द्रता", correct: true },
            { text: "ओस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्द्रता (Humidity) वायुमंडल में उपस्थित जलवाष्प की मात्रा को कहते हैं।"
    },
    {
        question: "'करा बुरान' नामक स्थानीय पवन कहाँ चलती है?",
        answers: shuffle([
            { text: "मध्य एशिया", correct: true },
            { text: "सहारा मरुस्थल", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अर्जेंटीना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> करा बुरान मध्य एशिया के टारिम बेसिन में चलने वाली एक धूल भरी और तेज गति की पवन है।"
    },
    {
        question: "पौधों के लिए सबसे महत्वपूर्ण ग्रीनहाउस गैस कौन सी है?",
        answers: shuffle([
            { text: "मीथेन", correct: false },
            { text: "ओजोन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "जल वाष्प", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पौधे प्रकाश संश्लेषण की प्रक्रिया में कार्बन डाइऑक्साइड का उपयोग करके अपना भोजन बनाते हैं, इसलिए यह उनके जीवन के लिए अत्यंत महत्वपूर्ण है।"
    },
    {
        question: "आयनमंडल को और किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "तापमंडल (थर्मोस्फीयर)", correct: true },
            { text: "मध्यमंडल", correct: false },
            { text: "ओजोनमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयनमंडल वास्तव में तापमंडल का एक हिस्सा है, जो लगभग 80 किमी से 400 किमी की ऊंचाई तक फैला हुआ है।"
    },
    {
        question: "वायुमंडल न होता तो दिन की अवधि पर क्या प्रभाव पड़ता?",
        answers: shuffle([
            { text: "बढ़ जाती", correct: false },
            { text: "घट जाती", correct: true },
            { text: "अपरिवर्तित रहती", correct: false },
            { text: "शून्य हो जाती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडल सूर्य के प्रकाश का प्रकीर्णन करता है, जिससे सूर्योदय से कुछ पहले और सूर्यास्त के कुछ बाद तक उजाला रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वायुमंडल के अभाव में यह अतिरिक्त समय नहीं मिलता, जिससे दिन छोटा हो जाता।"
    },
    {
        question: "समशीतोष्ण चक्रवात (Temperate Cyclones) किन पवनों के प्रभाव में पश्चिम से पूर्व की ओर चलते हैं?",
        answers: shuffle([
            { text: "व्यापारिक पवनें", correct: false },
            { text: "पछुआ पवनें", correct: true },
            { text: "ध्रुवीय पवनें", correct: false },
            { text: "मानसून पवनें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समशीतोष्ण चक्रवात मध्य अक्षांशों में उत्पन्न होते हैं और पछुआ पवनों के प्रभाव के कारण पश्चिम से पूर्व दिशा की ओर गति करते हैं।"
    },
    {
        question: "बादलों की दिशा एवं गति को मापने वाला यंत्र क्या कहलाता है?",
        answers: shuffle([
            { text: "एनीमोमीटर", correct: false },
            { text: "रेन गेज", correct: false },
            { text: "नेफोस्कोप", correct: true },
            { text: "हाइग्रोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नेफोस्कोप का उपयोग बादलों की गति और उनकी दिशा को मापने के लिए किया जाता है।"
    },
    {
        question: "हैडली सेल (Hadley Cell) का संबंध किससे है?",
        answers: shuffle([
            { text: "ध्रुवीय परिसंचरण से", correct: false },
            { text: "मध्य अक्षांशीय परिसंचरण से", correct: false },
            { text: "उष्णकटिबंधीय वायुमंडलीय परिसंचरण से", correct: true },
            { text: "महासागरीय परिसंचरण से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हैडली सेल एक वैश्विक वायुमंडलीय परिसंचरण पैटर्न है जिसमें भूमध्य रेखा पर हवा ऊपर उठती है, ध्रुवों की ओर जाती है, लगभग 30° अक्षांश पर नीचे उतरती है, और फिर भूमध्य रेखा की ओर वापस आती है।"
    },
    {
        question: "किस बादल का आकार 'फूलगोभी' जैसा होता है?",
        answers: shuffle([
            { text: "स्तरी मेघ (Stratus)", correct: false },
            { text: "कपासी मेघ (Cumulus)", correct: true },
            { text: "पक्षाभ मेघ (Cirrus)", correct: false },
            { text: "वर्षा स्तरी मेघ (Nimbostratus)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपासी मेघ रुई के ढेर या फूलगोभी जैसे दिखते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये आमतौर पर साफ मौसम का संकेत देते हैं, लेकिन बड़े होकर कपासी वर्षी मेघ में बदल सकते हैं।"
    },
    {
        question: "वायुमंडल की कौन सी गैस सूर्य की पराबैंगनी किरणों को सोख लेती है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "ओजोन", correct: true },
            { text: "हीलियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समतापमंडल में स्थित ओजोन (O₃) परत सूर्य से आने वाली हानिकारक पराबैंगनी (UV) विकिरण का अधिकांश भाग अवशोषित कर लेती है।"
    },
    {
        question: "मिस्ट्रल (Mistral) किस क्षेत्र में बहने वाली ठंडी स्थानीय पवन है?",
        answers: shuffle([
            { text: "इटली", correct: false },
            { text: "स्पेन और फ्रांस", correct: true },
            { text: "मिस्र", correct: false },
            { text: "न्यूजीलैंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिस्ट्रल एक ठंडी, शुष्क और तेज पवन है जो फ्रांस में रोन नदी की घाटी से होकर भूमध्य सागर की ओर बहती है।"
    },
    {
        question: "वायुदाब में अचानक गिरावट किसका संकेत है?",
        answers: shuffle([
            { text: "शांत मौसम", correct: false },
            { text: "तूफानी मौसम", correct: true },
            { text: "शुष्क मौसम", correct: false },
            { text: "ठंडी लहर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैरोमीटर में पारे का स्तर अचानक गिरना यह दर्शाता है कि वायुदाब तेजी से कम हो रहा है, जो चक्रवात या तूफान के आने का संकेत होता है।"
    },
    {
        question: "वायुमंडल में प्राकृतिक रूप से उत्पन्न होने वाली सबसे परिवर्तनशील गैस कौन सी है?",
        answers: shuffle([
            { text: "नाइट्रोजन", correct: false },
            { text: "ऑक्सीजन", correct: false },
            { text: "आर्गन", correct: false },
            { text: "जल वाष्प", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जल वाष्प की मात्रा स्थान और समय के साथ बहुत अधिक बदलती है, जो शुष्क रेगिस्तान में लगभग शून्य से लेकर उष्णकटिबंधीय क्षेत्रों में 4% तक हो सकती है ।"
    },
    {
        question: "वह कौन सी प्रक्रिया है जिसमें जल तरल से गैस अवस्था में परिवर्तित होता है?",
        answers: shuffle([
            { text: "संघनन", correct: false },
            { text: "वाष्पीकरण", correct: true },
            { text: "ऊर्ध्वपातन", correct: false },
            { text: "वर्षण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वाष्पीकरण वह प्रक्रिया है जिसके द्वारा पानी तरल अवस्था से वाष्प (गैस) अवस्था में बदल जाता है, जो जल चक्र का एक महत्वपूर्ण हिस्सा है।"
    },
    {
        question: "क्योटो प्रोटोकॉल (Kyoto Protocol) का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "ओजोन क्षरण को रोकना", correct: false },
            { text: "ग्रीनहाउस गैसों के उत्सर्जन को कम करना", correct: true },
            { text: "जैव विविधता का संरक्षण", correct: false },
            { text: "अम्ल वर्षा को नियंत्रित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्योटो प्रोटोकॉल एक अंतरराष्ट्रीय संधि थी जिसका उद्देश्य ग्लोबल वार्मिंग के लिए जिम्मेदार ग्रीनहाउस गैसों के उत्सर्जन में कमी लाना था।"
    },
    {
        question: "पृथ्वी का औसत एल्बिडो कितना है?",
        answers: shuffle([
            { text: "लगभग 10%", correct: false },
            { text: "लगभग 30%", correct: true },
            { text: "लगभग 50%", correct: false },
            { text: "लगभग 70%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का औसत एल्बिडो लगभग 30-35% है, जिसका अर्थ है कि यह सूर्य से आने वाले कुल विकिरण का लगभग एक-तिहाई हिस्सा बिना अवशोषित किए वापस अंतरिक्ष में परावर्तित कर देती है।"
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