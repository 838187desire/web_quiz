const questions = [
    {
        topHeading: "बाह्यमंडल पर आधारित 50 MCQs part_3  (quiz_no.)"
    },
    {
        question: "'आयनोस्फेरिक स्किंटिलेशन' क्या है, जो उपग्रह संचार को प्रभावित करता है?",
        answers: shuffle([
            { text: "आयनमंडल का चमकना", correct: false },
            { text: "रेडियो संकेतों के आयाम और चरण में तेजी से उतार-चढ़ाव", correct: true },
            { text: "आयनमंडल का गर्म होना", correct: false },
            { text: "आयनमंडल का विस्तार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह आयनमंडल में इलेक्ट्रॉन घनत्व की अनियमितताओं के कारण होता है, जो रेडियो संकेतों को बिखेरता है, जिससे जीपीएस और संचार संकेतों में व्यवधान उत्पन्न होता है।"
    },
    {
        question: "'लाग्रेंज बिंदु' (Lagrange Points) क्या हैं?",
        answers: shuffle([
            { text: "दो बड़े खगोलीय पिंडों के बीच गुरुत्वाकर्षण संतुलन के बिंदु", correct: true },
            { text: "ब्लैक होल के आसपास के क्षेत्र", correct: false },
            { text: "आकाशगंगा के केंद्र", correct: false },
            { text: "सौर मंडल के किनारे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये ऐसे स्थान हैं जहाँ दो बड़े पिंडों (जैसे सूर्य और पृथ्वी) का गुरुत्वाकर्षण खिंचाव एक छोटी वस्तु को उनके साथ घूमने के लिए आवश्यक केन्द्राभिमुख बल के बराबर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जेम्स वेब स्पेस टेलीस्कोप L2 बिंदु पर स्थित है।"
    },
    {
        question: "'ऊर्ट बादल' (Oort Cloud) क्या है?",
        answers: shuffle([
            { text: "शनि के चारों ओर एक बादल", correct: false },
            { text: "सौर मंडल के सबसे बाहरी किनारे पर बर्फीले पिंडों का एक विशाल गोलाकार खोल", correct: true },
            { text: "बृहस्पति पर एक तूफान", correct: false },
            { text: "एक नेबुला का प्रकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि ऊर्ट बादल लंबी अवधि वाले धूमकेतुओं का स्रोत है और यह सूर्य से बहुत बड़ी दूरी पर स्थित है, जो हीलियोस्फीयर से भी बहुत आगे है।"
    },
    {
        question: "'अंतरिक्ष में मानव शरीर' पर माइक्रोग्रैविटी का क्या प्रभाव पड़ता है?",
        answers: shuffle([
            { text: "हड्डियां मजबूत होती हैं", correct: false },
            { text: "मांसपेशियां मजबूत होती हैं", correct: false },
            { text: "अस्थि घनत्व और मांसपेशियों का द्रव्यमान कम हो जाता है", correct: true },
            { text: "कोई प्रभाव नहीं पड़ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुरुत्वाकर्षण की कमी के कारण, शरीर की भार वहन करने वाली हड्डियों और मांसपेशियों का उपयोग नहीं होता है, जिससे वे समय के साथ कमजोर हो जाती हैं।"
    },
    {
        question: "'आर्टेमिस कार्यक्रम' (Artemis Program) का मुख्य लक्ष्य क्या है?",
        answers: shuffle([
            { text: "मंगल पर मानव भेजना", correct: false },
            { text: "बृहस्पति का अध्ययन करना", correct: false },
            { text: "चंद्रमा पर मनुष्यों को फिर से उतारना और एक स्थायी उपस्थिति स्थापित करना", correct: true },
            { text: "एक नया अंतरिक्ष स्टेशन बनाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नासा के नेतृत्व में आर्टेमिस कार्यक्रम का उद्देश्य चंद्रमा पर पहली महिला और अगले पुरुष को उतारना है, और इसे मंगल पर भविष्य के मिशनों के लिए एक कदम के रूप में उपयोग करना है।"
    },
    {
        question: "'सौर सेल' (Solar Cells) उपग्रहों के लिए ऊर्जा कैसे उत्पन्न करते हैं?",
        answers: shuffle([
            { text: "गर्मी को बिजली में परिवर्तित करके", correct: false },
            { text: "सूर्य के प्रकाश को सीधे बिजली में परिवर्तित करके (फोटोवोल्टिक प्रभाव)", correct: true },
            { text: "सौर पवन से ऊर्जा पकड़कर", correct: false },
            { text: "रासायनिक प्रतिक्रियाओं के माध्यम से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सौर सेल अर्धचालक पदार्थों से बने होते हैं जो सूर्य के प्रकाश (फोटॉन) को अवशोषित करते हैं और इलेक्ट्रॉनों को मुक्त करते हैं, जिससे एक विद्युत प्रवाह उत्पन्न होता है।"
    },
    {
        question: "उपग्रहों के लिए 'प्रणोदन' (Propulsion) प्रणाली क्यों आवश्यक है?",
        answers: shuffle([
            { text: "केवल प्रक्षेपण के लिए", correct: false },
            { text: "कक्षा में अपनी स्थिति बनाए रखने और बदलने के लिए", correct: true },
            { text: "बिजली उत्पन्न करने के लिए", correct: false },
            { text: "संचार के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वायुमंडलीय खिंचाव, गुरुत्वाकर्षण विसंगतियों और कक्षीय युद्धाभ्यास के लिए उपग्रहों को अपनी कक्षा को समायोजित करने के लिए थ्रस्टर्स (प्रणोदन) का उपयोग करने की आवश्यकता होती है।"
    },
    {
        question: "'कक्षा' (Orbit) क्या है?",
        answers: shuffle([
            { text: "एक ग्रह का पथ", correct: false },
            { text: "एक खगोलीय पिंड का दूसरे के चारों ओर गुरुत्वाकर्षण द्वारा निर्धारित घुमावदार पथ", correct: true },
            { text: "एक सीधी रेखा में गति", correct: false },
            { text: "एक स्थिर स्थिति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कक्षा एक पिंड के आगे की गति (जड़ता) और दूसरे पिंड के गुरुत्वाकर्षण खिंचाव के बीच एक संतुलन है।"
    },
    {
        question: "'पेलोड' (Payload) एक रॉकेट या उपग्रह के संदर्भ में क्या है?",
        answers: shuffle([
            { text: "रॉकेट का ईंधन", correct: false },
            { text: "रॉकेट का इंजन", correct: false },
            { text: "वह वस्तु या उपकरण जिसे अंतरिक्ष में ले जाया जा रहा है (जैसे उपग्रह, जांच, या चालक दल)", correct: true },
            { text: "रॉकेट का बाहरी आवरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेलोड प्रक्षेपण यान का मुख्य उद्देश्य है; बाकी सब कुछ (ईंधन, इंजन, संरचना) केवल उस पेलोड को उसकी इच्छित मंजिल तक पहुंचाने के लिए मौजूद है।"
    },
    {
        question: "'टेराफॉर्मिंग' (Terraforming) की अवधारणा क्या है?",
        answers: shuffle([
            { text: "पृथ्वी पर एक नया महाद्वीप बनाना", correct: false },
            { text: "किसी अन्य ग्रह या चंद्रमा को पृथ्वी जैसा बनाने के लिए उसके वायुमंडल, तापमान और पारिस्थितिकी को संशोधित करना", correct: true },
            { text: "एक कृत्रिम ग्रह बनाना", correct: false },
            { text: "पृथ्वी की कक्षा को बदलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक काल्पनिक प्रक्रिया है, जिसमें अक्सर मंगल ग्रह को मनुष्यों के रहने योग्य बनाने के लक्ष्य पर चर्चा की जाती है।"
    },
    {
        question: "'डार्क मैटर' (Dark Matter) क्या है?",
        answers: shuffle([
            { text: "ब्लैक होल के अंदर का पदार्थ", correct: false },
            { text: "एक रहस्यमय पदार्थ जो प्रकाश उत्सर्जित या प्रतिबिंबित नहीं करता है, लेकिन गुरुत्वाकर्षण प्रभाव डालता है", correct: true },
            { text: "अंतरिक्ष में धूल के बादल", correct: false },
            { text: "एक प्रकार का तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि डार्क मैटर ब्रह्मांड के कुल द्रव्यमान का लगभग 27% है, और इसका अस्तित्व आकाशगंगाओं के घूर्णन और संरचना के अवलोकन से अनुमानित है।"
    },
    {
        question: "'डार्क एनर्जी' (Dark Energy) क्या है?",
        answers: shuffle([
            { text: "सूर्य द्वारा उत्सर्जित ऊर्जा", correct: false },
            { text: "एक अज्ञात प्रकार की ऊर्जा जिसे ब्रह्मांड के त्वरित विस्तार के लिए जिम्मेदार माना जाता है", correct: true },
            { text: "एक ब्लैक होल की ऊर्जा", correct: false },
            { text: "भू-तापीय ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि डार्क एनर्जी ब्रह्मांड की कुल ऊर्जा घनत्व का लगभग 68% है और यह गुरुत्वाकर्षण के विपरीत कार्य करती है, जिससे आकाशगंगाएं एक दूसरे से और तेजी से दूर जा रही हैं।"
    },
    {
        question: "'रेडियो खगोल विज्ञान' (Radio Astronomy) क्या है?",
        answers: shuffle([
            { text: "खगोलीय पिंडों द्वारा उत्सर्जित रेडियो तरंगों का अध्ययन", correct: true },
            { text: "अंतरिक्ष में रेडियो बजाना", correct: false },
            { text: "उपग्रहों से रेडियो संकेतों का अध्ययन", correct: false },
            { text: "पृथ्वी के वायुमंडल में रेडियो तरंगों का अध्ययन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडियो दूरबीनें उन खगोलीय घटनाओं का पता लगा सकती हैं जो दृश्य प्रकाश में अदृश्य होती हैं, जैसे पल्सर, क्वासर और ठंडे गैस के बादल।"
    },
    {
        question: "'गुरुत्वाकर्षण लेंसिंग' (Gravitational Lensing) क्या है?",
        answers: shuffle([
            { text: "एक लेंस जो गुरुत्वाकर्षण बनाता है", correct: false },
            { text: "एक विशाल वस्तु (जैसे आकाशगंगा) के गुरुत्वाकर्षण द्वारा उसके पीछे की वस्तु से आने वाले प्रकाश का मुड़ना", correct: true },
            { text: "एक ब्लैक होल द्वारा प्रकाश का अवशोषण", correct: false },
            { text: "प्रकाश की गति में परिवर्तन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह घटना आइंस्टीन के सामान्य सापेक्षता के सिद्धांत की भविष्यवाणी है और खगोलविदों को दूर की आकाशगंगाओं और डार्क मैटर के वितरण का अध्ययन करने की अनुमति देती है।"
    },
    {
        question: "बाह्यमंडल में 'कक्षा क्षय' (Orbital Decay) की दर किस कारक पर सबसे अधिक निर्भर करती है?",
        answers: shuffle([
            { text: "उपग्रह का रंग", correct: false },
            { text: "सौर गतिविधि और उपग्रह का आकार/द्रव्यमान अनुपात", correct: true },
            { text: "उपग्रह की दिशा", correct: false },
            { text: "पृथ्वी का मौसम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उच्च सौर गतिविधि बाह्यमंडल के घनत्व को बढ़ाती है, जिससे खिंचाव बढ़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक बड़े क्षेत्र और कम द्रव्यमान वाले उपग्रह (जैसे एक गुब्बारा) पर अधिक खिंचाव महसूस होगा और उसकी कक्षा तेजी से क्षय होगी।"
    },
    {
        question: "'नोक्टिल्यूसेंट क्लाउड्स' (Noctilucent Clouds) या रात्रिचर बादल कहाँ बनते हैं?",
        answers: shuffle([
            { text: "क्षोभमंडल", correct: false },
            { text: "समतापमंडल", correct: false },
            { text: "मध्यमंडल", correct: true },
            { text: "बाह्यमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये पृथ्वी के वायुमंडल में सबसे ऊंचे बादल हैं, जो मध्यमंडल में लगभग 80-85 किमी की ऊंचाई पर बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे इतने ऊंचे होते हैं कि सूर्य के डूबने के बाद भी सूर्य की रोशनी को प्रतिबिंबित कर सकते हैं।"
    },
    {
        question: "'कॉस्मिक माइक्रोवेव बैकग्राउंड' (CMB) विकिरण क्या है?",
        answers: shuffle([
            { text: "वर्तमान में सितारों द्वारा उत्सर्जित विकिरण", correct: false },
            { text: "बिग बैंग के बाद बची हुई ऊष्मा से उत्पन्न ऊष्मीय विकिरण", correct: true },
            { text: "ब्लैक होल से आने वाला विकिरण", correct: false },
            { text: "हमारी आकाशगंगा का विकिरण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सीएमबी प्रारंभिक ब्रह्मांड की एक तस्वीर है, जो लगभग 13.8 अरब साल पहले की है, और यह बिग बैंग सिद्धांत के लिए एक महत्वपूर्ण सबूत है।"
    },
    {
        question: "मंगल ग्रह के दो चंद्रमाओं, फोबोस और डीमोस की उत्पत्ति का सबसे स्वीकृत सिद्धांत क्या है?",
        answers: shuffle([
            { text: "वे मंगल के टुकड़े हैं", correct: false },
            { text: "वे पकड़े गए क्षुद्रग्रह (captured asteroids) हैं", correct: true },
            { text: "वे कृत्रिम रूप से बनाए गए थे", correct: false },
            { text: "वे एक बड़े चंद्रमा के अवशेष हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उनके छोटे आकार, अनियमित आकार और संरचना के आधार पर, यह व्यापक रूप से माना जाता है कि फोबोस और डीमोस क्षुद्रग्रह बेल्ट से क्षुद्रग्रह हैं जिन्हें मंगल के गुरुत्वाकर्षण ने पकड़ लिया था।"
    },
    {
        question: "'आयन इंजन' (Ion Engine) कैसे काम करता है?",
        answers: shuffle([
            { text: "रासायनिक ईंधन जलाकर", correct: false },
            { text: "चुंबकीय क्षेत्रों का उपयोग करके आयनों को उच्च वेग पर बाहर निकालकर", correct: true },
            { text: "पानी को भाप में बदलकर", correct: false },
            { text: "सौर पवन का उपयोग करके", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयन इंजन बहुत कम मात्रा में प्रणोदक (जैसे क्सीनन गैस) को आयनित करते हैं और उन्हें बहुत तेज गति से बाहर निकालते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> वे बहुत कम जोर पैदा करते हैं लेकिन अत्यधिक ईंधन-कुशल होते हैं, जो लंबे अंतरिक्ष मिशनों के लिए आदर्श हैं।"
    },
    {
        question: "'ब्लैक होल' (Black Hole) क्या है?",
        answers: shuffle([
            { text: "एक अंधेरा तारा", correct: false },
            { text: "अंतरिक्ष-समय का एक क्षेत्र जहां गुरुत्वाकर्षण इतना मजबूत होता है कि कुछ भी, यहां तक कि प्रकाश भी, बच नहीं सकता", correct: true },
            { text: "एक खाली जगह", correct: false },
            { text: "एक आकाशगंगा का केंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्लैक होल तब बनते हैं जब बहुत विशाल तारे अपने जीवन के अंत में ढह जाते हैं।"
    },
    {
        question: "'इवेंट होराइजन' (Event Horizon) क्या है?",
        answers: shuffle([
            { text: "एक ब्लैक होल का केंद्र", correct: false },
            { text: "एक ब्लैक होल के चारों ओर की सीमा, जिसके पार से कोई पलायन नहीं हो सकता", correct: true },
            { text: "एक ब्रह्मांडीय घटना", correct: false },
            { text: "ब्रह्मांड का किनारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इवेंट होराइजन को \"बिना वापसी का बिंदु\" माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> एक बार जब कोई वस्तु इस सीमा को पार कर जाती है, तो वह अनिवार्य रूप से ब्लैक होल के केंद्र (सिंगुलैरिटी) की ओर खींच ली जाती है।"
    },
    {
        question: "'न्यूट्रॉन तारा' (Neutron Star) क्या है?",
        answers: shuffle([
            { text: "न्यूट्रॉन से बना एक ग्रह", correct: false },
            { text: "एक विशाल तारे के सुपरनोवा विस्फोट के बाद बचा हुआ ढह गया कोर", correct: true },
            { text: "एक प्रकार का सफेद बौना", correct: false },
            { text: "एक प्रोटोस्टार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूट्रॉन तारे अविश्वसनीय रूप से घने होते हैं; एक चम्मच न्यूट्रॉन तारे के पदार्थ का वजन पृथ्वी पर अरबों टन होगा।"
    },
    {
        question: "'पल्सर' (Pulsar) क्या है?",
        answers: shuffle([
            { text: "एक स्पंदित तारा", correct: false },
            { text: "एक तेजी से घूमने वाला न्यूट्रॉन तारा जो अपने चुंबकीय ध्रुवों से विकिरण के बीम उत्सर्जित करता है", correct: true },
            { text: "एक प्रकार की आकाशगंगा", correct: false },
            { text: "एक ब्लैक होल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे ही तारा घूमता है, ये बीम एक लाइटहाउस की तरह अंतरिक्ष में घूमते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि बीम पृथ्वी की ओर इशारा करता है, तो हम विकिरण का एक नियमित स्पंद देखते हैं।"
    },
    {
        question: "'सुपरनोवा' (Supernova) क्या है?",
        answers: shuffle([
            { text: "एक नए तारे का जन्म", correct: false },
            { text: "एक विशाल तारे का शक्तिशाली और चमकदार विस्फोट", correct: true },
            { text: "दो तारों का विलय", correct: false },
            { text: "एक ग्रह का विस्फोट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरनोवा विस्फोट के दौरान, तारा कुछ समय के लिए पूरी आकाशगंगा से अधिक चमक सकता है और भारी तत्वों को अंतरिक्ष में बिखेर सकता है।"
    },
    {
        question: "'आकाशगंगा' (Galaxy) क्या है?",
        answers: shuffle([
            { text: "तारों का एक छोटा समूह", correct: false },
            { text: "गुरुत्वाकर्षण से बंधे तारों, तारकीय अवशेषों, अंतरतारकीय गैस, धूल और डार्क मैटर की एक विशाल प्रणाली", correct: true },
            { text: "सौर मंडल का दूसरा नाम", correct: false },
            { text: "एक ब्रह्मांड", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हमारी अपनी आकाशगंगा को मिल्की वे (आकाशगंगा) कहा जाता है और इसमें अरबों तारे हैं।"
    },
    {
        question: "हमारी आकाशगंगा, मिल्की वे, के केंद्र में क्या स्थित है?",
        answers: shuffle([
            { text: "एक विशाल तारा", correct: false },
            { text: "एक नेबुला", correct: false },
            { text: "एक सुपरमैसिव ब्लैक होल (धनु A*)", correct: true },
            { text: "एक न्यूट्रॉन तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लगभग सभी बड़ी आकाशगंगाओं के केंद्र में एक सुपरमैसिव ब्लैक होल होने का अनुमान है, और धनु A* (Sagittarius A*) हमारी आकाशगंगा का ब्लैक होल है।"
    },
    {
        question: "'प्रकाश वर्ष' (Light-year) किसकी इकाई है?",
        answers: shuffle([
            { text: "समय", correct: false },
            { text: "दूरी", correct: true },
            { text: "चमक", correct: false },
            { text: "गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक प्रकाश वर्ष वह दूरी है जो प्रकाश एक वर्ष में निर्वात में तय करता है, जो लगभग 9.46 ट्रिलियन किलोमीटर है।"
    },
    {
        question: "'पारसेक' (Parsec) किसकी इकाई है?",
        answers: shuffle([
            { text: "समय", correct: false },
            { text: "दूरी", correct: true },
            { text: "द्रव्यमान", correct: false },
            { text: "कोण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक पारसेक खगोल विज्ञान में उपयोग की जाने वाली दूरी की एक इकाई है, जो लगभग 3.26 प्रकाश वर्ष के बराबर है।"
    },
    {
        question: "'क्षुद्रग्रह' (Asteroid) क्या हैं?",
        answers: shuffle([
            { text: "छोटे ग्रह", correct: false },
            { text: "चट्टानी, वायुहीन पिंड जो सूर्य की परिक्रमा करते हैं, लेकिन ग्रहों से बहुत छोटे होते हैं", correct: true },
            { text: "बर्फीले पिंड", correct: false },
            { text: "छोटे तारे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अधिकांश क्षुद्रग्रह मंगल और बृहस्पति के बीच मुख्य क्षुद्रग्रह बेल्ट में पाए जाते हैं।"
    },
    {
        question: "'धूमकेतु' (Comet) क्या है?",
        answers: shuffle([
            { text: "एक चट्टानी पिंड", correct: false },
            { text: "बर्फ, धूल और चट्टान का एक छोटा, बर्फीला पिंड जो सूर्य की परिक्रमा करता है", correct: true },
            { text: "एक प्रकार का क्षुद्रग्रह", correct: false },
            { text: "एक छोटा चंद्रमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक धूमकेतु सूर्य के करीब आता है, तो उसकी बर्फ गैस और धूल में बदल जाती है, जिससे एक चमकदार 'कोमा' (सिर) और एक पूंछ बनती है जो सूर्य से दूर की ओर इशारा करती है।"
    },
    {
        question: "'उल्का' (Meteor), 'उल्कापिंड' (Meteoroid), और 'उल्काश्म' (Meteorite) में क्या अंतर है?",
        answers: shuffle([
            { text: "वे सभी एक ही हैं", correct: false },
            { text: "उल्कापिंड अंतरिक्ष में है, उल्का वायुमंडल में है, उल्काश्म जमीन पर है", correct: true },
            { text: "उल्काश्म अंतरिक्ष में है, उल्कापिंड वायुमंडल में है, उल्का जमीन पर है", correct: false },
            { text: "उल्का अंतरिक्ष में है, उल्काश्म वायुमंडल में है, उल्कापिंड जमीन पर है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक उल्कापिंड अंतरिक्ष में एक छोटा चट्टानी या धात्विक पिंड है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब यह पृथ्वी के वायुमंडल में प्रवेश करता है और जलता है, तो प्रकाश की लकीर को उल्का या 'टूटता तारा' कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यदि कोई टुकड़ा बचकर जमीन तक पहुंचता है, तो उसे उल्काश्म कहा जाता है।"
    },
    {
        question: "'जेम्स वेब स्पेस टेलीस्कोप' (JWST) मुख्य रूप से किस प्रकार के प्रकाश का निरीक्षण करता है?",
        answers: shuffle([
            { text: "दृश्य प्रकाश", correct: false },
            { text: "पराबैंगनी प्रकाश", correct: false },
            { text: "अवरक्त (इन्फ्रारेड) प्रकाश", correct: true },
            { text: "एक्स-रे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अवरक्त में देखने से JWST धूल के बादलों के पार देख सकता है और बहुत दूर की, प्रारंभिक आकाशगंगाओं का निरीक्षण कर सकता है, जिनका प्रकाश ब्रह्मांड के विस्तार के कारण अवरक्त में 'रेडशिफ्ट' हो गया है।"
    },
    {
        question: "'रेडशिफ्ट' (Redshift) क्या इंगित करता है?",
        answers: shuffle([
            { text: "कि एक वस्तु ठंडी हो रही है", correct: false },
            { text: "कि एक वस्तु पृथ्वी के करीब आ रही है", correct: false },
            { text: "कि एक वस्तु पृथ्वी से दूर जा रही है", correct: true },
            { text: "कि एक वस्तु घूम रही है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जैसे एक वस्तु दूर जाती है, उससे आने वाली प्रकाश तरंगें खिंच जाती हैं, जिससे उनकी तरंग दैर्ध्य लंबी (लाल स्पेक्ट्रम की ओर) हो जाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्रह्मांड में लगभग सभी आकाशगंगाएं रेडशिफ्ट दिखाती हैं, जो ब्रह्मांड के विस्तार का प्रमाण है।"
    },
    {
        question: "'स्पेक्ट्रोस्कोपी' (Spectroscopy) खगोल विज्ञान में क्यों महत्वपूर्ण है?",
        answers: shuffle([
            { text: "यह तारों की दूरी मापती है", correct: false },
            { text: "यह तारों और ग्रहों की रासायनिक संरचना, तापमान और गति का निर्धारण करने में मदद करती है", correct: true },
            { text: "यह तारों की तस्वीरें लेती है", correct: false },
            { text: "यह तारों का वजन करती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रकाश को उसके घटक रंगों (स्पेक्ट्रम) में तोड़कर, खगोलविद उन तत्वों की विशिष्ट 'उंगलियों के निशान' की पहचान कर सकते हैं जो उस प्रकाश को उत्सर्जित या अवशोषित करते हैं।"
    },
    {
        question: "बृहस्पति के 'ग्रेट रेड स्पॉट' (Great Red Spot) क्या है?",
        answers: shuffle([
            { text: "एक ज्वालामुखी", correct: false },
            { text: "एक विशाल, सदियों पुराना तूफान", correct: true },
            { text: "एक महाद्वीप", correct: false },
            { text: "एक टक्कर का गड्ढा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट रेड स्पॉट बृहस्पति के वायुमंडल में एक विशाल प्रतिचक्रवातीय तूफान है, जो इतना बड़ा है कि इसमें पृथ्वी समा सकती है।"
    },
    {
        question: "शनि के छल्ले मुख्य रूप से किससे बने हैं?",
        answers: shuffle([
            { text: "गैस से", correct: false },
            { text: "चट्टान के बड़े टुकड़ों से", correct: false },
            { text: "बर्फ और चट्टान के अरबों छोटे कणों से", correct: true },
            { text: "तरल पानी से", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये कण धूल के दानों से लेकर पहाड़ों के आकार तक के होते हैं, जो सभी शनि की परिक्रमा करते हैं।"
    },
    {
        question: "'चंद्र ग्रहण' (Lunar Eclipse) कब होता है?",
        answers: shuffle([
            { text: "जब चंद्रमा सूर्य और पृथ्वी के बीच आता है", correct: false },
            { text: "जब पृथ्वी सूर्य और चंद्रमा के बीच आती है", correct: true },
            { text: "जब सूर्य पृथ्वी और चंद्रमा के बीच आता है", correct: false },
            { text: "पूर्णिमा के दौरान हर महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्र ग्रहण केवल पूर्णिमा के दिन हो सकता है, जब पृथ्वी की छाया चंद्रमा पर पड़ती है।"
    },
    {
        question: "'सूर्य ग्रहण' (Solar Eclipse) कब होता है?",
        answers: shuffle([
            { text: "जब चंद्रमा सूर्य और पृथ्वी के बीच आता है", correct: true },
            { text: "जब पृथ्वी सूर्य और चंद्रमा के बीच आती है", correct: false },
            { text: "जब सूर्य पृथ्वी और चंद्रमा के बीच आता है", correct: false },
            { text: "अमावस्या के दौरान हर महीने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सूर्य ग्रहण केवल अमावस्या के दिन हो सकता है, जब चंद्रमा की छाया पृथ्वी के एक छोटे से हिस्से पर पड़ती है।"
    },
    {
        question: "'बाइनरी स्टार सिस्टम' (Binary Star System) क्या है?",
        answers: shuffle([
            { text: "दो ग्रह जो एक तारे की परिक्रमा करते हैं", correct: false },
            { text: "दो तारे जो एक सामान्य गुरुत्वाकर्षण केंद्र की परिक्रमा करते हैं", correct: true },
            { text: "दो आकाशगंगाओं का एक समूह", correct: false },
            { text: "एक तारा जिसके दो ग्रह हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आकाश में अधिकांश तारे वास्तव में बाइनरी या एकाधिक-तारा प्रणालियों का हिस्सा हैं।"
    },
    {
        question: "'सफेद बौना' (White Dwarf) क्या है?",
        answers: shuffle([
            { text: "एक छोटा, गर्म ग्रह", correct: false },
            { text: "एक कम-द्रव्यमान वाले तारे (जैसे हमारा सूर्य) का अवशेष जो अपना सारा ईंधन जला चुका है", correct: true },
            { text: "एक नया तारा", correct: false },
            { text: "एक प्रकार का न्यूट्रॉन तारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक सफेद बौना बहुत घना होता है और धीरे-धीरे ठंडा होकर एक काले बौने (black dwarf) में बदल जाता है, जिसमें खरबों साल लगते हैं।"
    },
    {
        question: "तारे क्यों टिमटिमाते हैं?",
        answers: shuffle([
            { text: "क्योंकि वे अपनी चमक बदलते हैं", correct: false },
            { text: "पृथ्वी के वायुमंडल में अशांति के कारण तारे का प्रकाश मुड़ जाता है और विकृत हो जाता है", correct: true },
            { text: "क्योंकि वे बहुत दूर हैं", correct: false },
            { text: "क्योंकि वे घूमते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तारे का प्रकाश वायुमंडल की विभिन्न घनत्व और तापमान वाली परतों से होकर गुजरता है, जिससे प्रकाश का पथ थोड़ा बदल जाता है, और हमें तारा टिमटिमाता हुआ दिखाई देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ग्रह नहीं टिमटिमाते क्योंकि वे करीब हैं और एक बिंदु के बजाय एक डिस्क के रूप में दिखाई देते हैं।"
    },
    {
        question: "'बिग बैंग थ्योरी' (Big Bang Theory) क्या बताती है?",
        answers: shuffle([
            { text: "ब्रह्मांड का अंत कैसे होगा", correct: false },
            { text: "ब्रह्मांड की उत्पत्ति और विकास", correct: true },
            { text: "तारों का निर्माण", correct: false },
            { text: "ग्रहों का निर्माण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सिद्धांत बताता है कि ब्रह्मांड की शुरुआत लगभग 13.8 अरब साल पहले एक अत्यंत गर्म और घने बिंदु से हुई और तब से यह लगातार फैल रहा है और ठंडा हो रहा है।"
    },
    {
        question: "पृथ्वी का बाह्यमंडल किस प्रकार के ग्रहों के बाह्यमंडल जैसा हो सकता है?",
        answers: shuffle([
            { text: "बृहस्पति जैसे गैस दिग्गजों के", correct: false },
            { text: "शुक्र जैसे घने वायुमंडल वाले ग्रहों के", correct: false },
            { text: "मंगल जैसे पतले वायुमंडल वाले चट्टानी ग्रहों के", correct: true },
            { text: "किसी के जैसा नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि बहुत अलग हैं, लेकिन दोनों ही मामलों में बाह्यमंडल वह क्षेत्र है जहां वायुमंडल अंतरिक्ष में पलायन करता है, और दोनों ही सौर पवन से प्रभावित होते हैं।"
    },
    {
        question: "'हिल स्फीयर' (Hill Sphere) क्या है?",
        answers: shuffle([
            { text: "एक ग्रह का वायुमंडल", correct: false },
            { text: "एक खगोलीय पिंड के आसपास का वह क्षेत्र जिसमें उसका गुरुत्वाकर्षण उपग्रहों को पकड़ने के लिए प्रमुख है", correct: true },
            { text: "एक तारे के चारों ओर का क्षेत्र", correct: false },
            { text: "एक गोलाकार आकाशगंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का हिल स्फीयर वह क्षेत्र है जहाँ पृथ्वी का गुरुत्वाकर्षण सूर्य के गुरुत्वाकर्षण से अधिक मजबूत है, जिससे चंद्रमा पृथ्वी की कक्षा में बना रहता है।"
    },
    {
        question: "'एस्ट्रोबायोलॉजी' (Astrobiology) किसका अध्ययन है?",
        answers: shuffle([
            { text: "केवल पृथ्वी पर जीवन का", correct: false },
            { text: "ब्रह्मांड में जीवन की उत्पत्ति, विकास, वितरण और भविष्य का", correct: true },
            { text: "केवल सितारों का", correct: false },
            { text: "केवल क्षुद्रग्रहों का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह एक अंतःविषय क्षेत्र है जो खगोल विज्ञान, जीव विज्ञान, रसायन विज्ञान और भूविज्ञान को जोड़ता है ताकि यह पता लगाया जा सके कि ब्रह्मांड में कहीं और जीवन मौजूद है।"
    },
    {
        question: "'गोल्डीलॉक्स ज़ोन' (Goldilocks Zone) या रहने योग्य क्षेत्र क्या है?",
        answers: shuffle([
            { text: "एक तारे के चारों ओर का वह क्षेत्र जहाँ पानी तरल अवस्था में मौजूद हो सकता है", correct: true },
            { text: "एक आकाशगंगा का सबसे गर्म हिस्सा", correct: false },
            { text: "एक ग्रह का सबसे ठंडा हिस्सा", correct: false },
            { text: "एक तारे का केंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह क्षेत्र न तो बहुत गर्म होता है और न ही बहुत ठंडा, बल्कि जीवन के लिए 'ठीक' होता है, जैसा कि गोल्डीलॉक्स की कहानी में होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> पृथ्वी हमारे सूर्य के रहने योग्य क्षेत्र में है।"
    },
    {
        question: "'फर्मी विरोधाभास' (Fermi Paradox) क्या है?",
        answers: shuffle([
            { text: "ब्रह्मांड के विस्तार से संबंधित एक समस्या", correct: false },
            { text: "बुद्धिमान अलौकिक जीवन के अस्तित्व के उच्च अनुमानों और उसके लिए सबूतों की कमी के बीच का विरोधाभास", correct: true },
            { text: "डार्क मैटर के बारे में एक सवाल", correct: false },
            { text: "समय यात्रा से संबंधित एक विरोधाभास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह सवाल पूछता है: \"यदि ब्रह्मांड में कई उन्नत सभ्यताएं हैं, तो हमने अभी तक उनका कोई पता या सबूत क्यों नहीं देखा है?\""
    },
    {
        question: "बाह्यमंडल की प्लाज्मा प्रकृति उपग्रहों के 'आवेशन' (charging) का कारण कैसे बनती है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण के कारण", correct: false },
            { text: "उपग्रह की सतह पर आयनों और इलेक्ट्रॉनों के जमा होने से", correct: true },
            { text: "सौर पैनलों के कारण", correct: false },
            { text: "रासायनिक प्रतिक्रियाओं के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाह्यमंडल प्लाज्मा (आयन और इलेक्ट्रॉन) से भरा है।<br><br><i class='fa-solid fa-angles-right icon'></i> जब कोई उपग्रह इससे गुजरता है, तो उसकी सतह पर आवेश जमा हो सकता है, जिससे विद्युत क्षमता में अंतर पैदा होता है जो इलेक्ट्रॉनिक्स को नुकसान पहुंचा सकता है।"
    },
    {
        question: "मंगल पर 'क्यूरियोसिटी' और 'पर्सिवियरेंस' रोवर्स का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "पानी खोजना", correct: false },
            { text: "यह जांचना कि क्या मंगल पर कभी जीवन के लिए उपयुक्त परिस्थितियाँ थीं और प्राचीन जीवन के संकेतों की खोज करना", correct: true },
            { text: "आधार स्थापित करना", correct: false },
            { text: "मंगल के चंद्रमाओं का अध्ययन करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये रोवर भूवैज्ञानिक और रासायनिक विश्लेषण करते हैं ताकि मंगल के अतीत को समझ सकें और भविष्य में पृथ्वी पर लाए जाने वाले नमूनों को इकट्ठा कर सकें।"
    },
    {
        question: "'डबल एस्टेरॉयड रीडायरेक्शन टेस्ट' (DART) मिशन का उद्देश्य क्या था?",
        answers: shuffle([
            { text: "एक क्षुद्रग्रह पर उतरना", correct: false },
            { text: "एक क्षुद्रग्रह से नमूने लाना", correct: false },
            { text: "यह प्रदर्शित करना कि क्या एक अंतरिक्ष यान से टकराकर एक क्षुद्रग्रह के पथ को बदला जा सकता है (ग्रहों की रक्षा)", correct: true },
            { text: "क्षुद्रग्रहों की तस्वीरें लेना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> DART मिशन ने सफलतापूर्वक एक क्षुद्रग्रह से टकराकर उसकी कक्षा को बदल दिया, जो भविष्य में पृथ्वी की ओर आने वाले किसी भी खतरनाक क्षुद्रग्रह से बचाव के लिए एक महत्वपूर्ण तकनीक का प्रदर्शन था।"
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