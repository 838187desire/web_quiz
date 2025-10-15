const questions = [
    {
        topHeading: "ब्रह्मांड पर आधारित 50 MCQs, part_1 (quiz_no.)"
    },
    {
        question: "ब्रह्मांड की उत्पत्ति के संबंध में सर्वमान्य सिद्धांत कौन सा है?",
        answers: shuffle([
            { text: "महाविस्फोट सिद्धांत (बिग बैंग थ्योरी)", correct: true },
            { text: "स्फीति सिद्धांत", correct: false },
            { text: "साम्यावस्था सिद्धांत", correct: false },
            { text: "दोलन सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महाविस्फोट सिद्धांत के अनुसार, लगभग 13.8 अरब वर्ष पहले ब्रह्मांड एक अत्यधिक सघन और गर्म बिंदु से विस्तारित होना शुरू हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'बिग बैंग थ्योरी' का प्रतिपादन किसने किया था?",
        answers: shuffle([
            { text: "एडविन हबल", correct: false },
            { text: "जॉर्ज लेमैत्रे", correct: true },
            { text: "अल्बर्ट आइंस्टीन", correct: false },
            { text: "कॉपरनिकस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बेल्जियम के खगोलशास्त्री और पादरी जॉर्ज लेमैत्रे ने 1927 में महाविस्फोट सिद्धांत का प्रस्ताव रखा था।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारी आकाशगंगा का क्या नाम है?",
        answers: shuffle([
            { text: "एंड्रोमेडा", correct: false },
            { text: "प्रॉक्सिमा सेंटॉरी", correct: false },
            { text: "मंदाकिनी (दुग्धमेखला)", correct: true },
            { text: "साइग्नस ए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारा सौर मंडल जिस आकाशगंगा में स्थित है, उसे मंदाकिनी या मिल्की वे (दुग्धमेखला) कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "आकाशगंगा (मंदाकिनी) का आकार कैसा है?",
        answers: shuffle([
            { text: "गोलाकार", correct: false },
            { text: "सर्पिलाकार", correct: true },
            { text: "अंडाकार", correct: false },
            { text: "अनियमित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारी आकाशगंगा एक सर्पिलाकार (Spiral) गैलेक्सी है, जिसके केंद्र में एक पट्टी जैसी संरचना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य हमारी आकाशगंगा के केंद्र की परिक्रमा कितने समय में पूरी करता है?",
        answers: shuffle([
            { text: "250 मिलियन वर्ष", correct: true },
            { text: "25 मिलियन वर्ष", correct: false },
            { text: "100 मिलियन वर्ष", correct: false },
            { text: "500 मिलियन वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस अवधि को एक 'ब्रह्मांडीय वर्ष' या 'गैलेक्टिक वर्ष' कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ब्लैक होल' सिद्धांत किसने प्रस्तुत किया था?",
        answers: shuffle([
            { text: "सी.वी. रमन", correct: false },
            { text: "हरगोबिंद खुराना", correct: false },
            { text: "सत्येंद्र नाथ बोस", correct: false },
            { text: "एस. चंद्रशेखर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारतीय-अमेरिकी खगोलभौतिकविद् सुब्रह्मण्यन् चंद्रशेखर ने 'चंद्रशेखर सीमा' का सिद्धांत दिया, जो ब्लैक होल के निर्माण की व्याख्या करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "चंद्रशेखर सीमा का मान कितना है?",
        answers: shuffle([
            { text: "सूर्य के द्रव्यमान का 1.44 गुना", correct: true },
            { text: "सूर्य के द्रव्यमान का 1.1 गुना", correct: false },
            { text: "सूर्य के द्रव्यमान का 2.1 गुना", correct: false },
            { text: "सूर्य के द्रव्यमान का 3.0 गुना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह वह अधिकतम द्रव्यमान है जिस पर एक तारा सफेद बौने के रूप में स्थिर रह सकता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे अधिक द्रव्यमान होने पर वह न्यूट्रॉन तारे या ब्लैक होल में परिवर्तित हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "तारे का रंग किसका सूचक होता है?",
        answers: shuffle([
            { text: "उसकी दूरी का", correct: false },
            { text: "उसके ताप का", correct: true },
            { text: "उसके आकार का", correct: false },
            { text: "उसकी आयु का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीले रंग के तारे सबसे गर्म होते हैं, जबकि लाल रंग के तारे सबसे ठंडे होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य की ऊर्जा का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "नाभिकीय विखंडन", correct: false },
            { text: "रासायनिक अभिक्रिया", correct: false },
            { text: "नाभिकीय संलयन", correct: true },
            { text: "गुरुत्वाकर्षण संकुचन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य के केंद्र में हाइड्रोजन परमाणु मिलकर हीलियम बनाते हैं, इस प्रक्रिया में भारी मात्रा में ऊर्जा निकलती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "प्रकाश वर्ष किसकी इकाई है?",
        answers: shuffle([
            { text: "दूरी", correct: true },
            { text: "समय", correct: false },
            { text: "प्रकाश की तीव्रता", correct: false },
            { text: "गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक प्रकाश वर्ष वह दूरी है जो प्रकाश एक वर्ष में निर्वात में तय करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारी आकाशगंगा के सबसे निकटतम आकाशगंगा कौन सी है?",
        answers: shuffle([
            { text: "व्हर्लपूल आकाशगंगा", correct: false },
            { text: "त्रिकोणीय आकाशगंगा", correct: false },
            { text: "बौनी आकाशगंगा", correct: false },
            { text: "एंड्रोमेडा आकाशगंगा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंड्रोमेडा गैलेक्सी लगभग 2.5 मिलियन प्रकाश वर्ष की दूरी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के बाद पृथ्वी का सबसे निकटतम तारा कौन सा है?",
        answers: shuffle([
            { text: "प्रॉक्सिमा सेंटॉरी", correct: true },
            { text: "सीरियस", correct: false },
            { text: "वेगा", correct: false },
            { text: "अल्फा सेंटॉरी ए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रॉक्सिमा सेंटॉरी अल्फा सेंटॉरी तारा प्रणाली का हिस्सा है और यह पृथ्वी से लगभग 4.24 प्रकाश वर्ष दूर है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'सुपरनोवा' क्या है?",
        answers: shuffle([
            { text: "एक नए तारे का जन्म", correct: false },
            { text: "एक विस्फोटी तारा", correct: true },
            { text: "एक ब्लैक होल", correct: false },
            { text: "एक धूमकेतु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरनोवा एक विशाल तारे के जीवन के अंत में होने वाला एक शक्तिशाली और चमकदार विस्फोट है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "अरुण (यूरेनस)", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "वरुण (नेप्च्यून)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बृहस्पति (Jupiter) का द्रव्यमान सौर मंडल के अन्य सभी ग्रहों के कुल द्रव्यमान का लगभग ढाई गुना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह को 'लाल ग्रह' कहा जाता है?",
        answers: shuffle([
            { text: "शुक्र", correct: false },
            { text: "मंगल", correct: true },
            { text: "बुध", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल की सतह पर आयरन ऑक्साइड (जंग) की प्रचुरता के कारण इसका रंग लाल दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे गर्म ग्रह कौन सा है?",
        answers: shuffle([
            { text: "बुध", correct: false },
            { text: "पृथ्वी", correct: false },
            { text: "शुक्र", correct: true },
            { text: "मंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र के घने कार्बन डाइऑक्साइड युक्त वायुमंडल के कारण तीव्र ग्रीनहाउस प्रभाव होता है, जो इसे सबसे गर्म ग्रह बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह के चारों ओर वलय (Rings) पाए जाते हैं?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "शनि", correct: false },
            { text: "अरुण", correct: false },
            { text: " सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि शनि के वलय सबसे प्रसिद्ध हैं, लेकिन बृहस्पति, अरुण और वरुण के चारों ओर भी धुंधले वलय मौजूद हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'भोर का तारा' और 'सांझ का तारा' किस ग्रह को कहा जाता है?",
        answers: shuffle([
            { text: "शुक्र", correct: true },
            { text: "मंगल", correct: false },
            { text: "बुध", correct: false },
            { text: "बृहस्पति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र ग्रह सूर्योदय से पहले पूर्व में और सूर्यास्त के बाद पश्चिम में दिखाई देता है, इसलिए इसे यह नाम दिया गया है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "बुध", correct: true },
            { text: "शुक्र", correct: false },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध (Mercury) सौर मंडल का सबसे छोटा और सूर्य के सबसे निकट का ग्रह है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के प्रकाश को पृथ्वी तक पहुँचने में कितना समय लगता है?",
        answers: shuffle([
            { text: "2 मिनट 10 सेकंड", correct: false },
            { text: "12 मिनट 30 सेकंड", correct: false },
            { text: "8 मिनट 20 सेकंड", correct: true },
            { text: "15 मिनट 5 सेकंड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य और पृथ्वी के बीच की दूरी लगभग 150 मिलियन किलोमीटर है, और प्रकाश को यह दूरी तय करने में लगभग 8.3 मिनट लगते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी की 'जुड़वां बहन' किस ग्रह को कहा जाता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: true },
            { text: "बुध", correct: false },
            { text: "चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकार, घनत्व और द्रव्यमान में पृथ्वी से समानता के कारण शुक्र को पृथ्वी की जुड़वां बहन कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "क्षुद्रग्रह (Asteroids) किन ग्रहों की कक्षाओं के बीच पाए जाते हैं?",
        answers: shuffle([
            { text: "पृथ्वी और मंगल", correct: false },
            { text: "बृहस्पति और शनि", correct: false },
            { text: "मंगल और बृहस्पति", correct: true },
            { text: "शनि और अरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगल और बृहस्पति के बीच एक विशाल पट्टी है जिसमें लाखों छोटे-बड़े क्षुद्रग्रह सूर्य की परिक्रमा करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'हेली' नामक धूमकेतु का परिक्रमण काल कितना है?",
        answers: shuffle([
            { text: "66 वर्ष", correct: false },
            { text: "76 वर्ष", correct: true },
            { text: "86 वर्ष", correct: false },
            { text: "96 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेली धूमकेतु प्रत्येक 75-76 वर्षों में पृथ्वी से दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अंतिम बार 1986 में देखा गया था और अगली बार 2061 में दिखाई देगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ब्रह्मांड के अध्ययन को क्या कहा जाता है?",
        answers: shuffle([
            { text: "ज्योतिष (Astrology)", correct: false },
            { text: "खगोल विज्ञान (Astronomy)", correct: false },
            { text: "भूविज्ञान (Geology)", correct: false },
            { text: "ब्रह्मांड विज्ञान (Cosmology)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मांड विज्ञान (कॉस्मोलॉजी) ब्रह्मांड की उत्पत्ति, विकास और अंतिम नियति का अध्ययन है, जबकि खगोल विज्ञान (एस्ट्रोनॉमी) खगोलीय पिंडों का अध्ययन है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के सबसे बाहरी परत को क्या कहते हैं?",
        answers: shuffle([
            { text: "प्रकाशमंडल (Photosphere)", correct: false },
            { text: "किरीट या कोरोना (Corona)", correct: true },
            { text: "वर्णमंडल (Chromosphere)", correct: false },
            { text: "कोर (Core)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरोना सूर्य का वायुमंडल है जो केवल पूर्ण सूर्य ग्रहण के दौरान दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
      {
        question: "'ध्रुव तारा' (पोल स्टार) किस दिशा को इंगित करता है?",
        answers: shuffle([
            { text: "पूर्व", correct: false },
            { text: "उत्तर", correct: true },
            { text: "पश्चिम", correct: false },
            { text: "दक्षिण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ध्रुव तारा पृथ्वी के उत्तरी ध्रुव की धुरी के लगभग सीध में स्थित है, इसलिए यह हमेशा उत्तर दिशा में स्थिर दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस ग्रह के पास सबसे अधिक प्राकृतिक उपग्रह (चंद्रमा) हैं?",
        answers: shuffle([
            { text: "बृहस्पति", correct: false },
            { text: "अरुण", correct: false },
            { text: "शनि", correct: true },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्तमान खोजों के अनुसार, शनि के पास 145 से अधिक ज्ञात उपग्रह हैं, जो सौर मंडल में सबसे अधिक हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "हमारे सौर मंडल का सबसे बड़ा उपग्रह कौन सा है?",
        answers: shuffle([
            { text: "टाइटन", correct: false },
            { text: "गैनीमेड", correct: true },
            { text: "चंद्रमा", correct: false },
            { text: "फोबोस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैनीमेड बृहस्पति का उपग्रह है और यह बुध ग्रह से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह कौन सा ग्रह है जो पूर्व से पश्चिम की ओर घूमता है?",
        answers: shuffle([
            { text: "a) शुक्र", correct: false },
            { text: "b) अरुण", correct: false },
            { text: "a) और b) दोनों", correct: true },
            { text: "पृथ्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शुक्र (Venus) और अरुण (Uranus) की घूर्णन दिशा बाकी ग्रहों के विपरीत है, जिसे प्रतिगामी घूर्णन कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'तारामंडल' (Constellation) क्या है?",
        answers: shuffle([
            { text: "आकाश में एक विशेष आकृति बनाने वाले तारों का समूह", correct: true },
            { text: "तारों का एक विशाल समूह", correct: false },
            { text: "आकाशगंगा का एक हिस्सा", correct: false },
            { text: "एक प्रकार का नेबुला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्राचीन खगोलविदों ने तारों के समूहों को पहचानने के लिए उन्हें विभिन्न आकृतियों के रूप में कल्पित किया, जैसे सप्तर्षि मंडल।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "ब्रह्मांड में सबसे प्रचुर मात्रा में पाया जाने वाला तत्व कौन सा है?",
        answers: shuffle([
            { text: "ऑक्सीजन", correct: false },
            { text: "हाइड्रोजन", correct: true },
            { text: "हीलियम", correct: false },
            { text: "कार्बन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मांड का लगभग 75% द्रव्यमान हाइड्रोजन से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'पल्सर' क्या होते हैं?",
        answers: shuffle([
            { text: "तेजी से घूमने वाले न्यूट्रॉन तारे", correct: true },
            { text: "सफेद बौने तारे", correct: false },
            { text: "नए बन रहे तारे", correct: false },
            { text: "ब्लैक होल का प्रवेश द्वार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्सर अत्यधिक चुंबकीय, तेजी से घूमने वाले न्यूट्रॉन तारे हैं जो अपने ध्रुवों से विकिरण की किरणें उत्सर्जित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'क्वासर' (Quasar) क्या हैं?",
        answers: shuffle([
            { text: "एक प्रकार का धूमकेतु", correct: false },
            { text: "एक अत्यधिक चमकदार सक्रिय गैलेक्टिक नाभिक", correct: true },
            { text: "एक शिशु आकाशगंगा", correct: false },
            { text: "एक तारे का प्रकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वासर प्रारंभिक ब्रह्मांड में पाए जाने वाले अत्यधिक ऊर्जावान और दूरस्थ खगोलीय पिंड हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी सूर्य के चारों ओर किस कक्षा में घूमती है?",
        answers: shuffle([
            { text: "वृत्ताकार", correct: false },
            { text: "परवलयाकार", correct: false },
            { text: "दीर्घवृत्ताकार (अंडाकार)", correct: true },
            { text: "अतिपरवलयाकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केप्लर के ग्रहीय गति के नियम के अनुसार, सभी ग्रह सूर्य के चारों ओर दीर्घवृत्ताकार कक्षाओं में चक्कर लगाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "वह घटना क्या कहलाती है जब पृथ्वी, सूर्य और चंद्रमा के बीच आ जाती है?",
        answers: shuffle([
            { text: "चंद्र ग्रहण", correct: true },
            { text: "सूर्य ग्रहण", correct: false },
            { text: "उपसौर", correct: false },
            { text: "अपसौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्र ग्रहण पूर्णिमा के दिन होता है, जब पृथ्वी की छाया चंद्रमा पर पड़ती है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य ग्रहण कब होता है?",
        answers: shuffle([
            { text: "जब पृथ्वी, सूर्य और चंद्रमा के बीच आती है", correct: false },
            { text: "जब चंद्रमा, सूर्य और पृथ्वी के बीच आता है", correct: true },
            { text: "जब सूर्य, पृथ्वी और चंद्रमा के बीच आता है", correct: false },
            { text: "पूर्णिमा के दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य ग्रहण अमावस्या के दिन होता है, जब चंद्रमा सूर्य को आंशिक या पूर्ण रूप से ढक लेता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य का निकटतम ग्रह बुध, सूर्य की एक परिक्रमा कितने दिनों में पूरी करता है?",
        answers: shuffle([
            { text: "88 दिन", correct: true },
            { text: "58 दिन", correct: false },
            { text: "112 दिन", correct: false },
            { text: "225 दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बुध का एक वर्ष पृथ्वी के 88 दिनों के बराबर होता है, जो सभी ग्रहों में सबसे छोटा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'लेटा हुआ ग्रह' किसे कहा जाता है?",
        answers: shuffle([
            { text: "शनि", correct: false },
            { text: "अरुण (यूरेनस)", correct: true },
            { text: "बृहस्पति", correct: false },
            { text: "वरुण (नेप्च्यून)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरुण अपने अक्ष पर लगभग 98 डिग्री झुका हुआ है, जिसके कारण यह अपनी कक्षा में लुढ़कता हुआ प्रतीत होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'नेबुला' (Nebula) या नीहारिका क्या है?",
        answers: shuffle([
            { text: "एक विस्फोटी तारा", correct: false },
            { text: "एक बौना ग्रह", correct: false },
            { text: "धूल और गैस का एक बादल", correct: true },
            { text: "एक क्षुद्रग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नीहारिका अंतरिक्ष में धूल, हाइड्रोजन, हीलियम और अन्य आयनित गैसों का बादल होती है, और यह तारों का जन्मस्थान भी है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "खगोलीय दूरी मापने की सबसे बड़ी इकाई कौन सी है?",
        answers: shuffle([
            { text: "प्रकाश वर्ष", correct: false },
            { text: "पारसेक", correct: true },
            { text: "खगोलीय इकाई (AU)", correct: false },
            { text: "किलोमीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पारसेक लगभग 3.26 प्रकाश वर्ष के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "पृथ्वी से चंद्रमा का कितना प्रतिशत भाग दिखाई देता है?",
        answers: shuffle([
            { text: "50%", correct: false },
            { text: "75%", correct: false },
            { text: "59%", correct: true },
            { text: "100%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रमा के घूर्णन और परिक्रमण की अवधि लगभग समान होने और उसकी कक्षा के झुकाव के कारण हम पृथ्वी से चंद्रमा का लगभग 59% हिस्सा देख पाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'बिग क्रंच' सिद्धांत किससे संबंधित है?",
        answers: shuffle([
            { text: "ब्रह्मांड की उत्पत्ति से", correct: false },
            { text: "तारों के निर्माण से", correct: false },
            { text: "ब्लैक होल से", correct: false },
            { text: "ब्रह्मांड के अंत से", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक परिकल्पना है जिसके अनुसार ब्रह्मांड का विस्तार एक दिन रुक जाएगा और यह वापस सिकुड़कर एक बिंदु में समा जाएगा।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'डार्क मैटर' (अदृश्य पदार्थ) क्या है?",
        answers: shuffle([
            { text: "एक ऐसा पदार्थ जो गुरुत्वाकर्षण प्रभाव डालता है लेकिन दिखाई नहीं देता", correct: true },
            { text: "एक ऐसा पदार्थ जो प्रकाश उत्सर्जित नहीं करता", correct: false },
            { text: "ब्लैक होल के अंदर का पदार्थ", correct: false },
            { text: "एक प्रकार की ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि ब्रह्मांड का लगभग 27% हिस्सा डार्क मैटर से बना है, जिसका पता केवल उसके गुरुत्वाकर्षण प्रभाव से चलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'ग्रेट रेड स्पॉट' (विशाल लाल धब्बा) किस ग्रह पर पाया जाता है?",
        answers: shuffle([
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "शनि", correct: false },
            { text: "वरुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह बृहस्पति के वायुमंडल में सदियों से चल रहा एक विशाल प्रतिचक्रवातीय तूफान है, जो पृथ्वी के आकार से भी बड़ा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "किस वैज्ञानिक ने पहली बार दूरबीन से रात्रि आकाश को देखा था?",
        answers: shuffle([
            { text: "कॉपरनिकस", correct: false },
            { text: "गैलीलियो गैलिली", correct: true },
            { text: "केप्लर", correct: false },
            { text: "न्यूटन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलीलियो ने 1609 में अपनी बनाई दूरबीन से बृहस्पति के चार चंद्रमाओं, शुक्र की कलाओं और चंद्रमा के क्रेटरों की खोज की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'कॉस्मिक माइक्रोवेव बैकग्राउंड रेडिएशन' (CMB) किसकी पुष्टि करता है?",
        answers: shuffle([
            { text: "ब्लैक होल की", correct: false },
            { text: "डार्क मैटर की", correct: false },
            { text: "महाविस्फोट सिद्धांत की", correct: true },
            { text: "तारों के जीवन चक्र की", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CMB महाविस्फोट के बाद बचे हुए ऊष्मीय विकिरण का अवशेष है, जो पूरे ब्रह्मांड में फैला हुआ है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "सूर्य के बाद आकाश का सबसे चमकीला तारा कौन सा है?",
        answers: shuffle([
            { text: "वेगा", correct: false },
            { text: "केनोपस", correct: false },
            { text: "सीरियस (व्याध तारा)", correct: true },
            { text: "ध्रुव तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीरियस, जिसे 'डॉग स्टार' भी कहते हैं, रात के आकाश में सबसे चमकीला तारा है।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "प्लूटो को 'बौना ग्रह' की श्रेणी में कब रखा गया?",
        answers: shuffle([
            { text: "1999", correct: false },
            { text: "2006", correct: true },
            { text: "2003", correct: false },
            { text: "2009", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंतर्राष्ट्रीय खगोलीय संघ (IAU) ने 2006 में ग्रह की परिभाषा बदलते हुए प्लूटो को बौने ग्रह की श्रेणी में डाल दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "'अपोलो 11' मिशन का क्या महत्व है?",
        answers: shuffle([
            { text: "यह मंगल पर उतरने वाला पहला मिशन था", correct: false },
            { text: "यह पहला अंतरिक्ष स्टेशन था", correct: false },
            { text: "यह चंद्रमा पर मनुष्य को उतारने वाला पहला मिशन था", correct: true },
            { text: "यह बृहस्पति का अध्ययन करने वाला पहला मिशन था", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 1969 में नासा के अपोलो 11 मिशन के तहत नील आर्मस्ट्रांग और बज़ एल्ड्रिन चंद्रमा पर उतरने वाले पहले इंसान बने।<br><br><i class='fa-solid fa-angles-right icon'></i> "
    },
    {
        question: "मंगल ग्रह के दो प्राकृतिक उपग्रह कौन से हैं?",
        answers: shuffle([
            { text: "टाइटन और रिया", correct: false },
            { text: "फोबोस और डीमोस", correct: true },
            { text: "यूरोपा और गैनीमेड", correct: false },
            { text: "ट्राइटन और नेरीड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये दोनों उपग्रह सौर मंडल के सबसे छोटे उपग्रहों में से हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> "
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