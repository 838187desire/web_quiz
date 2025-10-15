const questions = [
    {
        topHeading: "बाह्यमंडल पर आधारित 50 MCQs part_2  (quiz_no.)"
    },
    {
        question: "मैग्नेटोस्फीयर का आकार और आकृति किससे निर्धारित होती है?",
        answers: shuffle([
            { text: "पृथ्वी के घूर्णन से", correct: false },
            { text: "सौर पवन के दबाव से", correct: true },
            { text: "चंद्रमा के गुरुत्वाकर्षण से", correct: false },
            { text: "पृथ्वी के आंतरिक तापमान से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर पवन पृथ्वी के चुंबकीय क्षेत्र को सूर्य की ओर से संपीड़ित करती है और विपरीत दिशा में एक लंबी पूंछ (मैग्नेटोटेल) बनाती है।"
    },
    {
        question: "वह क्षेत्र जहाँ सौर पवन और पृथ्वी का मैग्नेटोस्फीयर मिलते हैं, क्या कहलाता है?",
        answers: shuffle([
            { text: "आयनमंडल", correct: false },
            { text: "मैग्नेटोपॉज़", correct: true },
            { text: "प्लाज्मास्फीयर", correct: false },
            { text: "एक्सोबेस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मैग्नेटोपॉज़ वह सीमा है जो पृथ्वी के चुंबकीय क्षेत्र को सौर पवन के प्लाज्मा से अलग करती है।"
    },
    {
        question: "'बो शॉक' (Bow Shock) क्या है?",
        answers: shuffle([
            { text: "पृथ्वी के वायुमंडल में एक ध्वनि तरंग", correct: false },
            { text: "सौर पवन में एक शॉक वेव जो मैग्नेटोस्फीयर के सामने बनती है", correct: true },
            { text: "एक प्रकार का अरोरा", correct: false },
            { text: "एक उपग्रह का नाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सुपरसोनिक गति से बहने वाली सौर पवन पृथ्वी के चुंबकीय क्षेत्र से टकराती है, तो यह धीमी हो जाती है और एक शॉक वेव बनाती है, जिसे 'बो शॉक' कहते हैं।"
    },
    {
        question: "भू-चुंबकीय तूफान (Geomagnetic Storm) का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "पृथ्वी के कोर में परिवर्तन", correct: false },
            { text: "सौर पवन की ऊर्जा का मैग्नेटोस्फीयर में कुशल हस्तांतरण", correct: true },
            { text: "उल्कापिंडों की बौछार", correct: false },
            { text: "वायुमंडलीय दबाव में गिरावट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब सौर पवन का चुंबकीय क्षेत्र दक्षिण की ओर होता है, तो यह पृथ्वी के चुंबकीय क्षेत्र से जुड़ जाता है, जिससे ऊर्जा और कण मैग्नेटोस्फीयर में प्रवेश कर जाते हैं और तूफान उत्पन्न करते हैं।"
    },
    {
        question: "अरोरा (ध्रुवीय ज्योति) के रंग किस पर निर्भर करते हैं?",
        answers: shuffle([
            { text: "सौर पवन के तापमान पर", correct: false },
            { text: "वायुमंडल में गैसों के प्रकार और ऊंचाई पर जिनसे कण टकराते हैं", correct: true },
            { text: "देखने वाले के स्थान पर", correct: false },
            { text: "दिन के समय पर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑक्सीजन से टकराने पर हरा या लाल प्रकाश उत्पन्न होता है, जबकि नाइट्रोजन से नीला या बैंगनी प्रकाश उत्पन्न होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ऊंचाई भी रंग को प्रभावित करती है।"
    },
    {
        question: "कौन सा ग्रह अपने शक्तिशाली मैग्नेटोस्फीयर के लिए जाना जाता है, जो पृथ्वी से भी बहुत बड़ा है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "बुध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति का चुंबकीय क्षेत्र सौर मंडल में सबसे शक्तिशाली है, जो इसके तेज घूर्णन और धात्विक हाइड्रोजन कोर के कारण है।"
    },
    {
        question: "अंतरिक्ष यात्रियों और उपग्रहों के लिए वैन एलन बेल्ट खतरनाक क्यों हैं?",
        answers: shuffle([
            { text: "अत्यधिक ठंड के कारण", correct: false },
            { text: "उच्च ऊर्जा वाले आवेशित कणों की उपस्थिति के कारण", correct: true },
            { text: "गुरुत्वाकर्षण की कमी के कारण", correct: false },
            { text: "सूक्ष्म उल्कापिंडों के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इन बेल्टों में फंसे उच्च-ऊर्जा कण इलेक्ट्रॉनिक्स को नुकसान पहुंचा सकते हैं और अंतरिक्ष यात्रियों के लिए विकिरण का खतरा पैदा कर सकते हैं।"
    },
    {
        question: "'दक्षिण अटलांटिक विसंगति' (South Atlantic Anomaly) क्या है?",
        answers: shuffle([
            { text: "एक मौसम संबंधी घटना", correct: false },
            { text: "वह क्षेत्र जहाँ पृथ्वी का चुंबकीय क्षेत्र सबसे कमजोर है", correct: true },
            { text: "एक समुद्री धारा", correct: false },
            { text: "एक ज्वालामुखी क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस क्षेत्र में, पृथ्वी का चुंबकीय क्षेत्र कमजोर होता है, जिससे वैन एलन बेल्ट पृथ्वी की सतह के करीब आ जाते हैं, जो इस क्षेत्र से गुजरने वाले उपग्रहों के लिए एक बढ़ा हुआ विकिरण जोखिम पैदा करता है।"
    },
    {
        question: "सौर ज्वाला (Solar Flare) क्या है?",
        answers: shuffle([
            { text: "सूर्य का एक ठंडा स्थान", correct: false },
            { text: "सूर्य के वायुमंडल में ऊर्जा का एक तीव्र विस्फोट", correct: true },
            { text: "सूर्य से प्लाज्मा का एक बड़ा निष्कासन", correct: false },
            { text: "सूर्य की सतह पर एक अंधेरा फिलामेंट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर ज्वालाएं सूर्य पर चुंबकीय ऊर्जा के अचानक रिलीज होने से होती हैं, जो विकिरण के रूप में प्रकाश की गति से यात्रा करती हैं।"
    },
    {
        question: "कोरोनल मास इजेक्शन (CME) क्या है?",
        answers: shuffle([
            { text: "सूर्य से प्रकाश का एक फ्लैश", correct: false },
            { text: "सूर्य के कोरोना से प्लाज्मा और चुंबकीय क्षेत्र का एक विशाल बादल का निष्कासन", correct: true },
            { text: "एक छोटा सौर तूफान", correct: false },
            { text: "सूर्य का एक स्थायी हिस्सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीएमई सौर ज्वालाओं की तुलना में बड़े होते हैं और इनमें अरबों टन पदार्थ हो सकता है, जो अंतरिक्ष में यात्रा करते हैं और पृथ्वी पर पहुंचने पर भू-चुंबकीय तूफान पैदा कर सकते हैं।"
    },
    {
        question: "जीपीएस (GPS) प्रणाली किस अंतरिक्ष मौसम की घटना से सबसे अधिक प्रभावित हो सकती है?",
        answers: shuffle([
            { text: "सौर न्यूनतम", correct: false },
            { text: "उल्का बौछार", correct: false },
            { text: "आयनमंडल में गड़बड़ी", correct: true },
            { text: "चंद्र ग्रहण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर तूफान आयनमंडल में गड़बड़ी पैदा करते हैं, जो जीपीएस उपग्रहों से आने वाले रेडियो संकेतों की गति को बदल सकता है, जिससे स्थिति निर्धारण में त्रुटियां हो सकती हैं।"
    },
    {
        question: "'मैग्नेटोटेल' (Magnetotail) क्या है?",
        answers: shuffle([
            { text: "पृथ्वी के मैग्नेटोस्फीयर का सूर्य की ओर का हिस्सा", correct: false },
            { text: "पृथ्वी के मैग्नेटोस्फीयर का सूर्य से दूर की ओर खिंचा हुआ हिस्सा", correct: true },
            { text: "एक धूमकेतु की पूंछ", correct: false },
            { text: "शनि के छल्लों का एक हिस्सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर पवन पृथ्वी के चुंबकीय क्षेत्र को सूर्य के विपरीत दिशा में एक लंबी, धूमकेतु जैसी पूंछ में खींचती है जिसे मैग्नेटोटेल कहते हैं।"
    },
    {
        question: "किस प्रकार के उपग्रह अंतरिक्ष मौसम की निगरानी के लिए महत्वपूर्ण हैं?",
        answers: shuffle([
            { text: "संचार उपग्रह", correct: false },
            { text: "मौसम उपग्रह (पृथ्वी के लिए)", correct: false },
            { text: "सौर वेधशालाएं (जैसे SOHO, SDO)", correct: true },
            { text: "जासूसी उपग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सोलर एंड हेलिओस्फेरिक ऑब्जर्वेटरी (SOHO) और सोलर डायनेमिक्स ऑब्जर्वेटरी (SDO) जैसे उपग्रह लगातार सूर्य की निगरानी करते हैं, जिससे सौर तूफानों की प्रारंभिक चेतावनी मिलती है।"
    },
    {
        question: "अंतरिक्ष में 'निर्वात' (Vacuum) वास्तव में पूरी तरह से खाली क्यों नहीं है?",
        answers: shuffle([
            { text: "क्योंकि इसमें हवा भरी होती है", correct: false },
            { text: "क्योंकि यह कणों, विकिरण और चुंबकीय क्षेत्रों से भरा होता है", correct: true },
            { text: "क्योंकि इसमें पानी होता है", correct: false },
            { text: "क्योंकि इसमें बादल होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि अंतरिक्ष में पदार्थ का घनत्व बहुत कम है, फिर भी इसमें गैस, प्लाज्मा, धूल, ब्रह्मांडीय किरणें और विद्युत चुम्बकीय विकिरण मौजूद हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल इसी का एक उदाहरण है।"
    },
    {
        question: "'ब्रह्मांडीय किरणें' (Cosmic Rays) क्या हैं?",
        answers: shuffle([
            { text: "सूर्य से आने वाला प्रकाश", correct: false },
            { text: "हमारे सौर मंडल के बाहर से आने वाले उच्च-ऊर्जा कण", correct: true },
            { text: "एक प्रकार का अरोरा", correct: false },
            { text: "पृथ्वी के वायुमंडल में उत्पन्न विकिरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मांडीय किरणें सुपरनोवा जैसे दूर के खगोलीय स्रोतों से उत्पन्न होने वाले अत्यंत ऊर्जावान परमाणु नाभिक या इलेक्ट्रॉन हैं, जो लगभग प्रकाश की गति से यात्रा करते हैं।"
    },
    {
        question: "बाह्यमंडल की सीमा के पास परिक्रमा करने वाले उपग्रह की आयु सौर अधिकतम (Solar Maximum) के दौरान कम क्यों हो जाती है?",
        answers: shuffle([
            { text: "क्योंकि विकिरण बढ़ जाता है", correct: false },
            { text: "क्योंकि वायुमंडलीय खिंचाव (drag) बढ़ जाता है", correct: true },
            { text: "क्योंकि गुरुत्वाकर्षण बढ़ जाता है", correct: false },
            { text: "क्योंकि तापमान कम हो जाता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर अधिकतम के दौरान, वायुमंडल फैलता है, जिससे बाह्यमंडल और तापमंडल का घनत्व बढ़ जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बढ़ा हुआ घनत्व उपग्रहों पर अधिक खिंचाव डालता है, जिससे उनकी कक्षा तेजी से क्षय होती है।"
    },
    {
        question: "वह काल्पनिक सतह जहाँ वायुमंडल इतना पतला हो जाता है कि एक अंतरिक्ष यान बिना वायुगतिकीय सहायता के कक्षा में बना रह सकता है, क्या कहलाती है?",
        answers: shuffle([
            { text: "मेसोपॉज़", correct: false },
            { text: "स्ट्रेटोपॉज़", correct: false },
            { text: "कारमन रेखा", correct: true },
            { text: "ट्रॉपोपॉज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कारमन रेखा, आमतौर पर 100 किमी की ऊंचाई पर, पारंपरिक रूप से पृथ्वी के वायुमंडल और बाहरी अंतरिक्ष के बीच की सीमा के रूप में उपयोग की जाती है, हालांकि बाह्यमंडल इससे बहुत ऊपर तक फैला होता है।"
    },
    {
        question: "ग्रहों के बाह्यमंडल से गैसों का पलायन उनके विकास को कैसे प्रभावित करता है?",
        answers: shuffle([
            { text: "यह ग्रह को गर्म बनाता है", correct: false },
            { text: "यह ग्रह के आकार को बढ़ाता है", correct: false },
            { text: "यह समय के साथ उनके वायुमंडल और जलवायु को बदल सकता है", correct: true },
            { text: "इसका कोई प्रभाव नहीं पड़ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उदाहरण के लिए, मंगल ग्रह से पानी (हाइड्रोजन के रूप में) का पलायन उसके एक गर्म और नम ग्रह से ठंडे और शुष्क ग्रह में बदलने का एक कारण माना जाता है।"
    },
    {
        question: "बाह्यमंडल की अत्यधिक परिवर्तनशील प्रकृति का अध्ययन क्यों महत्वपूर्ण है?",
        answers: shuffle([
            { text: "पृथ्वी के मौसम की भविष्यवाणी के लिए", correct: false },
            { text: "उपग्रह संचालन और अंतरिक्ष मिशनों की सुरक्षा के लिए", correct: true },
            { text: "समुद्री जीवन का अध्ययन करने के लिए", correct: false },
            { text: "ज्वालामुखी गतिविधि को समझने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल के घनत्व में परिवर्तन सीधे उपग्रह खिंचाव को प्रभावित करता है, इसलिए सटीक कक्षीय भविष्यवाणियों और टकराव से बचाव के लिए इसे समझना महत्वपूर्ण है।"
    },
    {
        question: "'हीलियोस्फीयर' (Heliosphere) क्या है?",
        answers: shuffle([
            { text: "सूर्य का वायुमंडल", correct: false },
            { text: "सौर पवन द्वारा बनाया गया अंतरिक्ष में एक विशाल बुलबुला", correct: true },
            { text: "पृथ्वी का बाह्यमंडल", correct: false },
            { text: "एक आकाशगंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीलियोस्फीयर वह विशाल क्षेत्र है जो सूर्य को घेरे हुए है और सौर पवन के प्रभाव में है।<br><br><i class='fa-solid fa-angles-right icon'></i> पृथ्वी का मैग्नेटोस्फीयर और बाह्यमंडल इस बुलबुले के भीतर स्थित हैं।"
    },
    {
        question: "हीलियोस्फीयर की बाहरी सीमा क्या कहलाती है?",
        answers: shuffle([
            { text: "हीलियोपॉज़", correct: true },
            { text: "मैग्नेटोपॉज़", correct: false },
            { text: "क्षुद्रग्रह बेल्ट", correct: false },
            { text: "ऊर्ट बादल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीलियोपॉज़ वह बिंदु है जहां सौर पवन का दबाव अंतरतारकीय माध्यम (interstellar medium) के दबाव से संतुलित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वॉयजर 1 और 2 अंतरिक्ष यान इस सीमा को पार कर चुके हैं।"
    },
    {
        question: "कौन सा मानव निर्मित यान सबसे पहले अंतरतारकीय अंतरिक्ष में प्रवेश कर चुका है?",
        answers: shuffle([
            { text: "न्यू होराइजन्स", correct: false },
            { text: "पायनियर 10", correct: false },
            { text: "वॉयजर 1", correct: true },
            { text: "कैसिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 2012 में, वॉयजर 1 हीलियोपॉज़ को पार करके अंतरतारकीय अंतरिक्ष में प्रवेश करने वाली पहली मानव निर्मित वस्तु बन गया।"
    },
    {
        question: "बाह्यमंडल में हाइड्रोजन परमाणुओं का अध्ययन किस प्रकार के प्रकाश का उपयोग करके किया जाता है?",
        answers: shuffle([
            { text: "दृश्य प्रकाश", correct: false },
            { text: "अवरक्त प्रकाश", correct: false },
            { text: "पराबैंगनी प्रकाश", correct: true },
            { text: "रेडियो तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल में तटस्थ हाइड्रोजन परमाणु सूर्य से आने वाले पराबैंगनी प्रकाश को बिखेरते हैं, जिससे भू-कोरोना (Geocorona) बनता है, जिसे पराबैंगनी दूरबीनों से देखा जा सकता है।"
    },
    {
        question: "बाह्यमंडल के कणों की गति की तुलना किस घटना से की जा सकती है?",
        answers: shuffle([
            { text: "एक नदी का प्रवाह", correct: false },
            { text: "एक फव्वारे से ऊपर जाकर वापस गिरने वाली पानी की बूंदें", correct: true },
            { text: "हवा में उड़ती धूल", correct: false },
            { text: "उबलता हुआ पानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल में कई कण बैलिस्टिक पथ पर यात्रा करते हैं, ठीक उसी तरह जैसे पानी की बूंदें गुरुत्वाकर्षण के तहत ऊपर जाकर वापस गिरती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> कुछ बूंदों (कणों) में इतनी ऊर्जा होती है कि वे पूरी तरह से पलायन कर जाती हैं।"
    },
    {
        question: "मंगल ग्रह का वायुमंडल पतला क्यों है?",
        answers: shuffle([
            { text: "क्योंकि यह सूर्य से बहुत दूर है", correct: false },
            { text: "क्योंकि इसका गुरुत्वाकर्षण कम है और वैश्विक चुंबकीय क्षेत्र नहीं है", correct: true },
            { text: "क्योंकि इसमें ज्वालामुखी नहीं हैं", correct: false },
            { text: "क्योंकि यह बहुत तेजी से घूमता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कमजोर गुरुत्वाकर्षण और एक सुरक्षात्मक वैश्विक चुंबकीय क्षेत्र की कमी के कारण, सौर पवन ने समय के साथ मंगल के वायुमंडल का अधिकांश हिस्सा अंतरिक्ष में उड़ा दिया है।"
    },
    {
        question: "\"अंतरिक्ष मलबा\" (Space Debris) बाह्यमंडल और निम्न भू-कक्षा में एक गंभीर समस्या क्यों है?",
        answers: shuffle([
            { text: "क्योंकि यह पृथ्वी पर गिर सकता है", correct: false },
            { text: "क्योंकि यह सक्रिय उपग्रहों और अंतरिक्ष यान से टकरा सकता है", correct: true },
            { text: "क्योंकि यह रेडियो संचार को बाधित करता है", correct: false },
            { text: "क्योंकि यह वायुमंडल को प्रदूषित करता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> निष्क्रिय उपग्रहों, रॉकेट के टुकड़ों और अन्य मलबे के छोटे टुकड़े भी अत्यधिक उच्च गति पर यात्रा करते हैं और एक कामकाजी उपग्रह के लिए विनाशकारी हो सकते हैं।"
    },
    {
        question: "'केसलर सिंड्रोम' (Kessler Syndrome) क्या है?",
        answers: shuffle([
            { text: "एक अंतरिक्ष यात्री की बीमारी", correct: false },
            { text: "निम्न भू-कक्षा में अंतरिक्ष मलबे के घनत्व के बारे में एक सैद्धांतिक परिदृश्य", correct: true },
            { text: "एक प्रकार का सौर तूफान", correct: false },
            { text: "एक खगोलीय घटना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक ऐसा परिदृश्य है जिसमें कक्षा में मलबे का घनत्व इतना अधिक हो जाता है कि वस्तुओं के बीच टकराव एक श्रृंखलाबद्ध प्रतिक्रिया का कारण बनता है, जिससे और अधिक मलबा पैदा होता है और अंतरिक्ष गतिविधियों को असंभव बना देता है।"
    },
    {
        question: "बाह्यमंडल का अध्ययन करने के लिए किस प्रकार के उपकरणों का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "बैरोमीटर और थर्मामीटर", correct: false },
            { text: "मास स्पेक्ट्रोमीटर और प्लाज्मा एनालाइजर", correct: true },
            { text: "सिस्मोमीटर और मैग्नेटोमीटर", correct: false },
            { text: "रेन गेज और एनीमोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उपग्रहों पर लगे मास स्पेक्ट्रोमीटर कणों की संरचना का विश्लेषण करते हैं, जबकि प्लाज्मा एनालाइजर आवेशित कणों के घनत्व, तापमान और वेग को मापते हैं।"
    },
    {
        question: "पृथ्वी के मैग्नेटोस्फीयर की पूंछ में होने वाली 'पुनः संयोजन' (Reconnection) की घटना का क्या परिणाम होता है?",
        answers: shuffle([
            { text: "यह मैग्नेटोस्फीयर को शांत करती है", correct: false },
            { text: "यह ऊर्जावान कणों को पृथ्वी के ध्रुवीय क्षेत्रों की ओर भेजती है, जिससे अरोरा उत्पन्न होता है", correct: true },
            { text: "यह एक नया वैन एलन बेल्ट बनाती है", correct: false },
            { text: "यह सौर पवन को रोक देती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुंबकीय पुनः संयोजन मैग्नेटोटेल में संग्रहीत ऊर्जा को अचानक रिलीज करता है, जो कणों को तेज करता है और उन्हें वायुमंडल की ओर निर्देशित करता है, जिससे तीव्र अरोरल डिस्प्ले होते हैं।"
    },
    {
        question: "एक्सोबेस की ऊंचाई रात की तुलना में दिन में अधिक क्यों होती है?",
        answers: shuffle([
            { text: "चंद्रमा के प्रभाव के कारण", correct: false },
            { text: "सौर विकिरण द्वारा दिन में ऊपरी वायुमंडल के गर्म होने और फैलने के कारण", correct: true },
            { text: "पृथ्वी के घूर्णन के कारण", correct: false },
            { text: "ज्वारीय बलों के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिन के समय सूर्य की ऊर्जा तापमंडल को गर्म करती है, जिससे यह फैलता है और एक्सोबेस (बाह्यमंडल की शुरुआत) को अधिक ऊंचाई पर धकेल देता है।"
    },
    {
        question: "पृथ्वी का बाह्यमंडल समय के साथ कैसे बदल रहा है?",
        answers: shuffle([
            { text: "यह मोटा हो रहा है", correct: false },
            { text: "यह सिकुड़ रहा है", correct: false },
            { text: "इसमें कोई बदलाव नहीं हो रहा है", correct: false },
            { text: "यह धीरे-धीरे ठंडे और कम घने ऊपरी वायुमंडल के कारण सिकुड़ रहा है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जलवायु परिवर्तन के कारण निचले वायुमंडल में ग्रीनहाउस गैसें गर्मी को रोक रही हैं, जिससे ऊपरी वायुमंडल (तापमंडल और बाह्यमंडल) ठंडा हो रहा है और सिकुड़ रहा है।"
    },
    {
        question: "'आयन ड्रैग' (Ion Drag) क्या है?",
        answers: shuffle([
            { text: "उपग्रहों पर तटस्थ कणों द्वारा लगाया गया खिंचाव", correct: false },
            { text: "तटस्थ वायुमंडल पर आयनों द्वारा लगाया गया बल", correct: true },
            { text: "एक प्रकार का चुंबकीय बल", correct: false },
            { text: "गुरुत्वाकर्षण खिंचाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयनमंडल में, आयन चुंबकीय क्षेत्र रेखाओं का अनुसरण करते हैं, और जब वे तटस्थ कणों से टकराते हैं, तो वे तटस्थ हवा को अपने साथ खींचते हैं, इस प्रक्रिया को आयन ड्रैग कहते हैं।"
    },
    {
        question: "'तारकीय हवा' (Stellar Wind) क्या है?",
        answers: shuffle([
            { text: "केवल हमारे सूर्य से निकलने वाली हवा", correct: false },
            { text: "किसी भी तारे से निकलने वाले आवेशित कणों की धारा", correct: true },
            { text: "एक आकाशगंगा में हवा", correct: false },
            { text: "एक नेबुला में गैस का प्रवाह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर पवन की तरह, अन्य तारे भी अपने वायुमंडल से कणों की एक धारा उत्सर्जित करते हैं, जिसे तारकीय हवा कहा जाता है।"
    },
    {
        question: "'एक्सोप्लैनेट' (Exoplanet) के वायुमंडल का अध्ययन करने के लिए बाह्यमंडल का ज्ञान क्यों उपयोगी है?",
        answers: shuffle([
            { text: "क्योंकि सभी एक्सोप्लैनेट पृथ्वी जैसे हैं", correct: false },
            { text: "यह समझने के लिए कि क्या उन पर जीवन के लिए उपयुक्त वायुमंडल हो सकता है या नहीं", correct: true },
            { text: "पृथ्वी के बाह्यमंडल की नकल करने के लिए", correct: false },
            { text: "उपग्रह भेजने के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किसी एक्सोप्लैनेट के तारे से निकटता, उसके चुंबकीय क्षेत्र की ताकत, और उसके बाह्यमंडल से पलायन की दर यह निर्धारित करने में मदद करती है कि क्या वह ग्रह लंबे समय तक अपना वायुमंडल बनाए रख सकता है।"
    },
    {
        question: "ऊपरी वायुमंडल में 'वायु-चमक' (Airglow) क्या है?",
        answers: shuffle([
            { text: "अरोरा का दूसरा नाम", correct: false },
            { text: "ऊपरी वायुमंडल में परमाणुओं और अणुओं द्वारा उत्सर्जित हल्का, फैला हुआ प्रकाश", correct: true },
            { text: "शहर का प्रकाश प्रदूषण", correct: false },
            { text: "उल्काओं के जलने से उत्पन्न प्रकाश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायु-चमक एक स्थायी घटना है जो दिन के दौरान सौर विकिरण द्वारा उत्तेजित परमाणुओं की रासायनिक प्रतिक्रियाओं के कारण होती है, और यह रात में आकाश को पूरी तरह से अंधेरा होने से रोकती है।"
    },
    {
        question: "बाह्यमंडल के कणों की ऊर्जा कहाँ से आती है?",
        answers: shuffle([
            { text: "पृथ्वी के कोर से", correct: false },
            { text: "मुख्य रूप से सूर्य से (तापीय और फोटो-आयनीकरण द्वारा)", correct: true },
            { text: "चंद्रमा के प्रतिबिंब से", correct: false },
            { text: "मानव गतिविधियों से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य का अत्यधिक पराबैंगनी विकिरण और एक्स-रे ऊपरी वायुमंडल को गर्म करते हैं और कणों को आयनित करते हैं, जिससे उन्हें पलायन के लिए आवश्यक ऊर्जा मिलती है।"
    },
    {
        question: "क्या बाह्यमंडल में जीवन संभव है?",
        answers: shuffle([
            { text: "हाँ, सूक्ष्मजीव मौजूद हैं", correct: false },
            { text: "संभवतः", correct: false },
            { text: "नहीं, अत्यधिक विकिरण, निर्वात और तापमान के कारण", correct: true },
            { text: "केवल हाइड्रोजन आधारित जीवन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल की कठोर परिस्थितियाँ - जिसमें तीव्र विकिरण, लगभग पूर्ण निर्वात, और अत्यधिक तापमान भिन्नता शामिल है - ज्ञात जीवन रूपों के लिए पूरी तरह से प्रतिकूल हैं।"
    },
    {
        question: "बाह्यमंडल के घनत्व में कमी का उपग्रहों के जीवनकाल पर क्या प्रभाव पड़ेगा?",
        answers: shuffle([
            { text: "यह उनके जीवनकाल को कम कर देगा", correct: false },
            { text: "यह उनके जीवनकाल को बढ़ा देगा", correct: true },
            { text: "इसका कोई प्रभाव नहीं पड़ेगा", correct: false },
            { text: "यह उनकी गति को बढ़ा देगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> घनत्व में कमी का मतलब है कम वायुमंडलीय खिंचाव।<br><br><i class='fa-solid fa-angles-right icon'></i> कम खिंचाव के कारण, उपग्रहों की कक्षा धीरे-धीरे क्षय होगी, जिससे वे लंबे समय तक कक्षा में बने रहेंगे।"
    },
    {
        question: "पृथ्वी के वायुमंडल का कुल द्रव्यमान कितना है?",
        answers: shuffle([
            { text: "लगभग 5.15 x 10¹⁸ किलोग्राम", correct: true },
            { text: "लगभग 1.15 x 10¹⁵ किलोग्राम", correct: false },
            { text: "लगभग 9.15 x 10²⁰ किलोग्राम", correct: false },
            { text: "लगभग 3.15 x 10¹² किलोग्राम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के वायुमंडल का कुल द्रव्यमान बहुत बड़ा है, लेकिन इसका लगभग 99.999% हिस्सा बाह्यमंडल के नीचे स्थित है।"
    },
    {
        question: "'चुंबकीय पृथक्करण' (Magnetic Reconnection) की प्रक्रिया ऊर्जा को कैसे छोड़ती है?",
        answers: shuffle([
            { text: "रासायनिक ऊर्जा को तापीय ऊर्जा में बदलकर", correct: false },
            { text: "चुंबकीय ऊर्जा को गतिज और तापीय ऊर्जा में बदलकर", correct: true },
            { text: "गुरुत्वाकर्षण ऊर्जा को चुंबकीय ऊर्जा में बदलकर", correct: false },
            { text: "नाभिकीय ऊर्जा जारी करके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब विपरीत दिशा वाली चुंबकीय क्षेत्र रेखाएं एक साथ आती हैं, तो वे पुनर्व्यवस्थित होती हैं और टूट जाती हैं, जिससे संग्रहीत चुंबकीय ऊर्जा अचानक कणों की गतिज ऊर्जा (त्वरण) और गर्मी के रूप में निकलती है।"
    },
    {
        question: "किस ग्रह का मैग्नेटोस्फीयर सौर पवन के साथ सीधे संपर्क करता है क्योंकि उसका कोई महत्वपूर्ण वायुमंडल नहीं है?",
        answers: shuffle([
            { text: "पृथ्वी", correct: false },
            { text: "बृहस्पति", correct: false },
            { text: "बुध", correct: true },
            { text: "शनि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध का एक वैश्विक चुंबकीय क्षेत्र है, लेकिन इसका वायुमंडल लगभग नगण्य है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए, सौर पवन सीधे ग्रह की सतह के पास उसके मैग्नेटोस्फीयर के साथ संपर्क करती है।"
    },
    {
        question: "शुक्र ग्रह का कोई महत्वपूर्ण आंतरिक चुंबकीय क्षेत्र क्यों नहीं है, लेकिन एक 'प्रेरित मैग्नेटोस्फीयर' (Induced Magnetosphere) है?",
        answers: shuffle([
            { text: "a) क्योंकि यह बहुत धीरे घूमता है", correct: false },
            { text: "b) क्योंकि इसका कोर ठोस है", correct: false },
            { text: "a) और b) दोनों", correct: true },
            { text: "यह जानकारी गलत है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र का घूर्णन बहुत धीमा है और माना जाता है कि इसके कोर में डायनेमो प्रभाव के लिए आवश्यक संवहन नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> हालांकि, सौर पवन का चुंबकीय क्षेत्र इसके घने आयनमंडल के साथ संपर्क करके एक प्रेरित मैग्नेटोस्फीयर बनाता है।"
    },
    {
        question: "'सौर चक्र' (Solar Cycle) की औसत अवधि क्या है?",
        answers: shuffle([
            { text: "5 वर्ष", correct: false },
            { text: "11 वर्ष", correct: true },
            { text: "22 वर्ष", correct: false },
            { text: "50 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर चक्र लगभग 11 वर्षों की अवधि है जिसमें सूर्य की गतिविधि, जैसे सनस्पॉट की संख्या, सौर ज्वालाएं और सीएमई, एक न्यूनतम से अधिकतम और फिर वापस न्यूनतम तक बदलती है।"
    },
    {
        question: "'सनस्पॉट' (Sunspot) सूर्य की सतह पर ठंडे क्षेत्र क्यों होते हैं?",
        answers: shuffle([
            { text: "क्योंकि वे गैस के बादल हैं", correct: false },
            { text: "क्योंकि तीव्र चुंबकीय गतिविधि संवहन को रोकती है", correct: true },
            { text: "क्योंकि वे लोहे से बने हैं", correct: false },
            { text: "क्योंकि वे सूर्य में छेद हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सनस्पॉट में चुंबकीय क्षेत्र इतना मजबूत होता है कि यह सूर्य के आंतरिक भाग से गर्म प्लाज्मा के ऊपर उठने (संवहन) को रोकता है, जिससे वे आसपास के क्षेत्र की तुलना में ठंडे और गहरे दिखाई देते हैं।"
    },
    {
        question: "'अंतरिक्ष लिफ्ट' (Space Elevator) की अवधारणा के लिए केबल को कहाँ तक विस्तारित करने की आवश्यकता होगी?",
        answers: shuffle([
            { text: "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन तक", correct: false },
            { text: "बाह्यमंडल की ऊपरी सीमा तक", correct: false },
            { text: "भू-स्थिर कक्षा (GEO) से भी आगे तक", correct: true },
            { text: "चंद्रमा तक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक स्थिर अंतरिक्ष लिफ्ट के लिए, केबल को भू-स्थिर कक्षा (35,786 किमी) से भी आगे तक फैलाना होगा ताकि केबल का गुरुत्वाकर्षण केंद्र भू-स्थिर कक्षा में बना रहे और केन्द्रापसारक बल केबल को तना हुआ रखे।"
    },
    {
        question: "पृथ्वी के बाह्यमंडल में उपग्रहों के लिए सबसे बड़ा खतरा क्या है?",
        answers: shuffle([
            { text: "हाइड्रोजन गैस", correct: false },
            { text: "हीलियम गैस", correct: false },
            { text: "अंतरिक्ष मलबा", correct: true },
            { text: "ठंडा तापमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल में गैस का घनत्व बहुत कम है, लेकिन मानव निर्मित मलबे के लाखों टुकड़े घूम रहे हैं, जो उच्च गति के टकराव का एक महत्वपूर्ण खतरा पैदा करते हैं।"
    },
    {
        question: "'सुपरसोनिक रिट्रोग्रेड रोटेटर' के रूप में जाना जाने वाला शुक्र का वायुमंडल, ग्रह की सतह से कैसे भिन्न गति करता है?",
        answers: shuffle([
            { text: "यह सतह से धीमा घूमता है", correct: false },
            { text: "यह सतह के समान गति से घूमता है", correct: false },
            { text: "यह सतह से 60 गुना तेज गति से घूमता है", correct: true },
            { text: "यह विपरीत दिशा में घूमता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र की सतह बहुत धीरे-धीरे घूमती है (एक दिन एक वर्ष से लंबा होता है), लेकिन इसके ऊपरी वायुमंडल में हवाएं 360 किमी/घंटा की गति से चलती हैं, जो ग्रह को केवल 4-5 पृथ्वी दिनों में घेर लेती हैं।"
    },
    {
        question: "टाइटन, जो शनि का सबसे बड़ा चंद्रमा है, का वायुमंडल पृथ्वी के वायुमंडल से कैसे भिन्न है?",
        answers: shuffle([
            { text: "यह मुख्य रूप से ऑक्सीजन से बना है", correct: false },
            { text: "यह पृथ्वी से अधिक घना है और मुख्य रूप से नाइट्रोजन से बना है", correct: true },
            { text: "इसका कोई वायुमंडल नहीं है", correct: false },
            { text: "यह हीलियम से बना है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टाइटन सौर मंडल में एकमात्र चंद्रमा है जिसका एक महत्वपूर्ण, घना वायुमंडल है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह पृथ्वी की तरह मुख्य रूप से नाइट्रोजन से बना है, लेकिन इसका सतही दबाव पृथ्वी से लगभग 50% अधिक है।"
    },
    {
        question: "बाह्यमंडल से परे, पृथ्वी के गुरुत्वाकर्षण का प्रभाव कहाँ तक महसूस किया जा सकता है?",
        answers: shuffle([
            { text: "केवल भू-स्थिर कक्षा तक", correct: false },
            { text: "चंद्रमा तक और उससे आगे तक", correct: true },
            { text: "यह सूर्य तक फैला हुआ है", correct: false },
            { text: "इसका प्रभाव नगण्य है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का गुरुत्वाकर्षण क्षेत्र (हिल स्फीयर) लगभग 1.5 मिलियन किलोमीटर तक फैला हुआ है, जिसके भीतर यह सूर्य के गुरुत्वाकर्षण पर हावी रहता है।<br><br><i class='fa-solid fa-angles-right icon'></i> चंद्रमा इस क्षेत्र के भीतर अच्छी तरह से स्थित है।"
    },
    {
        question: "बाह्यमंडल और उससे परे के क्षेत्र का व्यावसायिक उपयोग किस रूप में बढ़ रहा है?",
        answers: shuffle([
            { text: "पर्यटन", correct: false },
            { text: "खनन", correct: false },
            { text: "उपग्रह इंटरनेट तारामंडल (जैसे स्टारलिंक) और पृथ्वी अवलोकन", correct: true },
            { text: "कृषि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्टारलिंक, वनवेब जैसी कंपनियां वैश्विक इंटरनेट कवरेज के लिए निम्न भू-कक्षा में हजारों उपग्रहों को तैनात कर रही हैं, जो बाह्यमंडल के व्यावसायिक उपयोग में एक बड़ी वृद्धि का प्रतिनिधित्व करता है।"
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