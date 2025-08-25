const questions = [ 
  {
      topHeading: "ब्रह्मांड पर आधारित 50 बहुविकल्पीय प्रश्न (MCQs) part 3  (quiz_no. 43)."
  },
    {
        question: "ब्रह्मांड में ‘गामा रे बर्स्ट’ (Gamma Ray Burst) क्या होते हैं?",
        answers: shuffle([
            { text: "पृथ्वी के ऊपर चमकदार बादल", correct: false },
            { text: "ब्रह्मांड में सबसे शक्तिशाली विस्फोट जो गामा किरणें उत्सर्जित करते हैं", correct: true },
            { text: "सूर्य के आसपास की गर्मी", correct: false },
            { text: "ब्लैक होल के सापेक्ष छोटे तारे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गामा रे बर्स्ट (GRBs) ब्रह्मांड में होने वाले सबसे उग्र विस्फोट हैं जो कुछ सेकंड से लेकर मिनटों तक अत्यधिक ऊर्जा वाली गामा किरणों का उत्सर्जन करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये आमतौर पर बड़े तारे के अंत में सुपरनोवा या ब्लैक होल बनने के समय होते हैं।"
    },
    {
        question: "‘मल्टीवर्स’ (Multiverse) सिद्धांत क्या प्रस्तावित करता है?",
        answers: shuffle([
            { text: "एकमात्र ब्रह्मांड है", correct: false },
            { text: "कई ब्रह्मांड मौजूद हो सकते हैं, प्रत्येक अपनी भिन्न विशेषताओं के साथ", correct: true },
            { text: "ब्रह्मांड हमेशा स्थिर रहता है", correct: false },
            { text: "ब्रह्मांड में केवल एक ही आकाशगंगा है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मल्टीवर्स सिद्धांत का सुझाव है कि हमारा ब्रह्मांड अकेला नहीं है, बल्कि अनेक ब्रह्मांड (Multiverse) अस्तित्व में हो सकते हैं, जिनकी भौतिक विशेषताएं भिन्न हो सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विचार अभी सिद्धांतगत और विवादास्पद है।"
    },
    {
        question: "ब्रह्मांड के विस्तार को मापने के लिए किस प्रकार के उपकरण का उपयोग किया जाता है?",
        answers: shuffle([
            { text: "टेलीस्कोप और रेडियो वेधशाला", correct: true },
            { text: "माइक्रोस्कोप", correct: false },
            { text: "इलेक्ट्रॉन माइक्रोस्कोप", correct: false },
            { text: "तापमापक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेलीस्कोप और विशेष रूप से रेडियो वेधशालाएँ ब्रह्मांड में दूर स्थित वस्तुओं से प्रकाश और रेडियो तरंगें ग्रहण कर उनके विस्तार और गति का अध्ययन करती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> हबल टेलीस्कोप इसका एक प्रमुख उदाहरण है।"
    },
    {
        question: "‘क्रिप्टोनाइट’ का ब्रह्मांड विज्ञान से क्या सम्बन्ध है?",
        answers: shuffle([
            { text: "यह ब्रह्मांड में एक असली पदार्थ है", correct: false },
            { text: "यह एक काल्पनिक पदार्थ है जिसका ब्रह्मांड विज्ञान से कोई सम्बन्ध नहीं", correct: true },
            { text: "यह ब्लैक होल से जुड़ा है", correct: false },
            { text: "यह तारे की ऊर्जा है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्रिप्टोनाइट केवल काल्पनिक कहानी (कॉमिक्स) में मौजूद है और इसका वास्तविक ब्रह्मांड विज्ञान से कोई सम्बन्ध नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सुपरमैन के लिए हानिकारक पदार्थ के रूप में वर्णित है।"
    },
    {
        question: "किस सिद्धांत के अनुसार ब्रह्मांड की उत्पत्ति एक अत्यंत घनी और गर्म अवस्था से हुई?",
        answers: shuffle([
            { text: "बिग बैंग सिद्धांत", correct: true },
            { text: "स्थिर अवस्था सिद्धांत", correct: false },
            { text: "पृथ्वी केंद्रित सिद्धांत", correct: false },
            { text: "क्वांटम सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग सिद्धांत ब्रह्मांड की उत्पत्ति को एक अत्यंत गर्म और घने बिंदु से बताता है, जो लगभग 13.8 अरब वर्ष पहले हुआ।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद ब्रह्मांड का विस्तार हुआ और ठंडा होकर वर्तमान स्वरूप में विकसित हुआ।"
    },
    {
        question: "‘हाइड्रोजन’ ब्रह्मांड में कैसे बना?",
        answers: shuffle([
            { text: "सूर्य के अंदर", correct: false },
            { text: "बिग बैंग के तुरंत बाद क्वार्क और ग्लूऑन के संलयन से", correct: true },
            { text: "पृथ्वी पर", correct: false },
            { text: "ब्लैक होल के अंदर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग के तुरंत बाद, ब्रह्मांड में क्वार्क और ग्लूऑन ने मिलकर प्रोटॉन और न्यूट्रॉन बनाए, जो आगे चलकर हाइड्रोजन और हीलियम के नाभिक बने।<br><br><i class='fa-solid fa-angles-right icon'></i> हाइड्रोजन ब्रह्मांड का सबसे प्राचीन और प्रचलित तत्व है।"
    },
    {
        question: "‘हबल टेलीस्कोप’ का मुख्य कार्य क्या है?",
        answers: shuffle([
            { text: "पृथ्वी के अंदर के द्रव्यों का अध्ययन", correct: false },
            { text: "ब्रह्मांड के दूरस्थ तारे और गैलेक्सी का अध्ययन", correct: true },
            { text: "ग्रहों की जलवायु का अध्ययन", correct: false },
            { text: "मानव शरीर की जांच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हबल टेलीस्कोप पृथ्वी की कक्षा में स्थित एक स्पेस टेलीस्कोप है, जिसका मुख्य कार्य ब्रह्मांड के दूरस्थ तारों, ग्रहों और गैलेक्सियों की उच्च गुणवत्ता वाली तस्वीरें लेना और उनका अध्ययन करना है।"
    },
    {
        question: "ब्रह्मांड में ‘क्वांटम फ्लक्टुएशंस’ क्या होते हैं?",
        answers: shuffle([
            { text: "क्वांटम स्तर पर ऊर्जा में अनियमित बदलाव", correct: true },
            { text: "ग्रहों की गति", correct: false },
            { text: "तारों का प्रकाश", correct: false },
            { text: "ब्लैक होल के आकार में बदलाव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वांटम फ्लक्टुएशंस वह अनियमित ऊर्जा के बदलाव हैं जो क्वांटम स्तर पर ब्रह्मांड की न्यूनतम ऊर्जा अवस्था में होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इन्हें बिग बैंग के प्रारंभिक चरण में ब्रह्मांड के विस्तार में महत्वपूर्ण माना जाता है।"
    },
    {
        question: "सौर मंडल में ग्रहों की व्यवस्था किस नियम द्वारा निर्धारित होती है?",
        answers: shuffle([
            { text: "केप्लर का नियम", correct: true },
            { text: "न्यूटन का नियम", correct: false },
            { text: "हबल का नियम", correct: false },
            { text: "ओम का नियम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केप्लर के नियम ग्रहों की गति के तीन नियम हैं जो यह बताते हैं कि ग्रह सूर्य के चारों ओर कैसे घूमते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये नियम ग्रहों की कक्षा की गति, अवधि और दूरी का गणितीय वर्णन करते हैं।"
    },
    {
        question: "‘कॉन्स्टेलेशन’ (Constellation) क्या होता है?",
        answers: shuffle([
            { text: "ब्रह्मांड का सबसे बड़ा तारा", correct: false },
            { text: "आकाश में तारों का एक समूह जो किसी आकृति का रूप लेता है", correct: true },
            { text: "ग्रहों का समूह", correct: false },
            { text: "एक उपग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कॉनस्ट्रेलेशन आकाश में तारों के समूह को कहते हैं जिन्हें मानव ने विशेष आकृतियों जैसे पशु, वस्त्र आदि के रूप में कल्पित किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये नेविगेशन और खगोल विज्ञान में महत्वपूर्ण हैं।"
    },
    {
        question: "‘ब्लैक होल’ क्या होता है?",
        answers: shuffle([
            { text: "एक ऐसा तारा जो अपनी ऊर्जा खो चुका हो", correct: false },
            { text: "अंतरिक्ष का वह क्षेत्र जहाँ से कोई भी वस्तु या प्रकाश बाहर नहीं निकल सकता", correct: true },
            { text: "एक उपग्रह", correct: false },
            { text: "एक गैस का बादल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्लैक होल एक ऐसा खगोलीय पिंड होता है जिसकी गुरुत्वाकर्षण शक्ति इतनी अधिक होती है कि प्रकाश भी इससे बाहर नहीं निकल सकता।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तब बनता है जब एक भारी तारा अपने जीवन के अंत में पतन करता है और एक अत्यंत संकुचित क्षेत्र बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ब्लैक होल की घटना क्षितिज (event horizon) नामक सीमा होती है, जिसके भीतर प्रवेश करने वाली कोई भी वस्तु वापस नहीं आ सकती।"
    },
    {
        question: "ब्रह्मांड का विस्तार कौन सा सिद्धांत समझाता है?",
        answers: shuffle([
            { text: "स्थिर ब्रह्मांड सिद्धांत", correct: false },
            { text: "बिग बैंग सिद्धांत", correct: true },
            { text: "भू-गर्भीय सिद्धांत", correct: false },
            { text: "क्वांटम सिद्धांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग सिद्धांत यह बताता है कि ब्रह्मांड लगभग 13.8 अरब वर्ष पहले एक अत्यंत गर्म और घने बिंदु से उत्पन्न हुआ और तब से निरंतर विस्तार कर रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> हबल के नियम और कॉस्मिक माइक्रोवेव बैकग्राउंड विकिरण ने इस सिद्धांत को पुष्ट किया है।"
    },
    {
        question: "‘कॉस्मिक माइक्रोवेव बैकग्राउंड रेडिएशन’ (CMB) क्या है?",
        answers: shuffle([
            { text: "सूर्य से निकलने वाली ऊर्जा", correct: false },
            { text: "ब्रह्मांड के प्रारंभिक काल से बची हुई अत्यंत ठंडी विकिरण ऊर्जा", correct: true },
            { text: "चंद्रमा की किरणें", correct: false },
            { text: "ब्लैक होल से निकलने वाली ऊर्जा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> CMB वह विकिरण है जो बिग बैंग के लगभग 380,000 वर्ष बाद ब्रह्मांड में फैली और आज भी लगभग 2.7 केल्विन तापमान पर स्थिर है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड के जन्म के समय की गवाही देती है और इसका अध्ययन ब्रह्मांड की संरचना और इतिहास को समझने में मदद करता है।"
    },
    {
        question: "ग्रहों की कक्षा किस प्रकार की होती है?",
        answers: shuffle([
            { text: "वृत्ताकार (Circular)", correct: false },
            { text: "अंडाकार (Elliptical)", correct: true },
            { text: "रेखीय (Linear)", correct: false },
            { text: "त्रिकोणीय (Triangular)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केप्लर के नियम के अनुसार, ग्रहों की कक्षा अंडाकार (ellipse) होती है, जिसमें सूर्य एक फोकस पर स्थित होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका मतलब यह है कि ग्रह सूर्य के समीप और दूर दोनों स्थानों पर अलग-अलग दूरी पर होते हैं।"
    },
    {
        question: "‘सुपरनोवा टाइप Ia’ का क्या महत्व है?",
        answers: shuffle([
            { text: "ये ग्रह हैं", correct: false },
            { text: "ये ब्रह्मांड के विस्तार की दर को मापने में सहायक होते हैं", correct: true },
            { text: "ये ब्लैक होल नहीं बनाते", correct: false },
            { text: "ये सूर्य के समान होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरनोवा टाइप Ia की चमक लगभग समान होती है, इसलिए इन्हें ‘मानक मोमबत्ती’ के रूप में उपयोग किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इनके माध्यम से वैज्ञानिक ब्रह्मांड के विस्तार की दर और डार्क एनर्जी के प्रभाव को माप पाते हैं।"
    },
    {
        question: "‘क्वासर’ क्या हैं?",
        answers: shuffle([
            { text: "छोटे ग्रह", correct: false },
            { text: "बहुत दूर स्थित अत्यंत चमकीले और शक्तिशाली गैलेक्सी के केंद्र में सक्रिय ब्लैक होल", correct: true },
            { text: "चंद्रमा के समान उपग्रह", correct: false },
            { text: "सूर्य के निकटतम तारे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वासर (Quasar) दूरस्थ गैलेक्सियों के केंद्र में स्थित अत्यंत सक्रिय सुपरमासिव ब्लैक होल होते हैं जो भारी मात्रा में ऊर्जा उत्सर्जित करते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ब्रह्मांड के सबसे चमकीले और दूरस्थ वस्तुओं में से एक हैं।"
    },
    {
        question: "‘लाइट ईयर’ (Light Year) क्या मापता है?",
        answers: shuffle([
            { text: "प्रकाश की गति", correct: false },
            { text: "प्रकाश द्वारा एक वर्ष में तय की गई दूरी", correct: true },
            { text: "सूर्य की ऊर्जा", correct: false },
            { text: "तारों की चमक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लाइट ईयर वह दूरी है जो प्रकाश एक वर्ष में तय करता है, जो लगभग 9.46 ट्रिलियन किलोमीटर के बराबर होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे खगोलीय दूरियों को मापने के लिए उपयोग किया जाता है।"
    },
    {
        question: "‘हबल कॉन्स्टेंट’ क्या दर्शाता है?",
        answers: shuffle([
            { text: "ब्रह्मांड की उम्र", correct: false },
            { text: "ब्रह्मांड के विस्तार की दर", correct: true },
            { text: "ग्रहों की गति", correct: false },
            { text: "तारों की संख्या", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हबल कॉन्स्टेंट वह मान है जो बताता है कि गैलेक्सियां एक दूसरे से कितनी तेजी से दूर जा रही हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड के विस्तार की गति को मापने में महत्वपूर्ण है।"
    },
    {
        question: "‘ग्रेविटी वेव’ (Gravitational Wave) क्या हैं?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण द्वारा उत्पन्न तरंगें जो अंतरिक्ष-समय में विकृतियाँ उत्पन्न करती हैं", correct: true },
            { text: "प्रकाश की तरंगें", correct: false },
            { text: "इलेक्ट्रॉनिक तरंगें", correct: false },
            { text: "ध्वनि तरंगें", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेविटी वेव्स अल्बर्ट आइंस्टीन के सामान्य सापेक्षता सिद्धांत से उत्पन्न एक सिद्धांतात्मक अवधारणा हैं, जो विशाल द्रव्यमान वाली वस्तुओं के गतिशील होने पर अंतरिक्ष-समय में फैलती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> 2015 में इनका प्रत्यक्ष साक्ष्य मिला।"
    },
    {
        question: "ब्रह्मांड की संरचना में ‘गैस क्लाउड’ (Gas Cloud) का क्या महत्व है?",
        answers: shuffle([
            { text: "ये तारे और ग्रह बनने का प्राथमिक स्थान होते हैं", correct: true },
            { text: "ये ग्रहों को नष्ट करते हैं", correct: false },
            { text: "ये ब्लैक होल का हिस्सा हैं", correct: false },
            { text: "ये सूर्य के समान होते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैस क्लाउड या मोलिक्यूलर क्लाउड ब्रह्मांड में गैस और धूल के विशाल बादल होते हैं जहां गुरुत्वाकर्षण के कारण घनत्व बढ़कर नए तारों और ग्रहों का निर्माण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ब्रह्मांड के विकास में महत्वपूर्ण भूमिका निभाते हैं।"
    },
    {
        question: "‘डार्क मैटर’ (Dark Matter) क्या है?",
        answers: shuffle([
          { text: "सामान्य पदार्थ जो हम देख सकते हैं", correct: false },
          {
            text: "एक रहस्यमय पदार्थ जो ब्रह्मांड के गुरुत्वाकर्षण में प्रमुख भूमिका निभाता है लेकिन स्वयं प्रकाश नहीं छोड़ता",
            correct: true,
          },
          { text: "ब्रह्मांड का सबसे बड़ा तारा", correct: false },
          { text: "एक प्रकार की ऊर्जा", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> डार्क मैटर वह अज्ञात पदार्थ है जो ब्रह्मांड के कुल द्रव्यमान का लगभग 27% हिस्सा बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह सीधे देखा नहीं जा सकता क्योंकि यह प्रकाश को उत्सर्जित, अवशोषित या प्रतिबिंबित नहीं करता।<br><br><i class='fa-solid fa-angles-right icon'></i> परंतु, इसके गुरुत्वाकर्षण प्रभाव के माध्यम से इसकी उपस्थिति का पता चलता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह गैलेक्सियों की गति को प्रभावित करता है और ब्रह्मांड की संरचना को बनाए रखने में महत्वपूर्ण है।",
      },
      {
        question: "‘डार्क एनर्जी’ (Dark Energy) ब्रह्मांड में क्या भूमिका निभाती है?",
        answers: shuffle([
          { text: "ब्रह्मांड को संकुचित करने वाली ऊर्जा", correct: false },
          {
            text: "ब्रह्मांड के विस्तार को तेज करने वाली रहस्यमय ऊर्जा",
            correct: true,
          },
          { text: "तारे बनने वाली ऊर्जा", correct: false },
          { text: "ग्रहों की ऊर्जा", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> डार्क एनर्जी ब्रह्मांड की कुल ऊर्जा का लगभग 68% हिस्सा बनाती है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक रहस्यमय ऊर्जा है जो ब्रह्मांड के विस्तार को तेजी से बढ़ाने का कारण है।<br><br><i class='fa-solid fa-angles-right icon'></i> वैज्ञानिक अभी भी इसके स्वरूप और प्रकृति को पूरी तरह से समझ नहीं पाए हैं, लेकिन यह ब्रह्मांड की गति पर महत्वपूर्ण प्रभाव डालती है।",
      },
      {
        question: "‘बिग बैंग’ के बाद ब्रह्मांड में सबसे पहले कौन से कण बने थे?",
        answers: shuffle([
          { text: "प्रोटॉन, न्यूट्रॉन और इलेक्ट्रॉन", correct: true },
          { text: "हीलियम और कार्बन", correct: false },
          { text: "हाइड्रोजन और ऑक्सीजन", correct: false },
          { text: "नाइट्रोजन और कार्बन", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग के तुरंत बाद, अत्यंत उच्च तापमान और घनत्व के कारण क्वार्क और ग्लूऑन ने मिलकर प्रोटॉन और न्यूट्रॉन बनाए।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद, ये नाभिकीय कण इलेक्ट्रॉनों के साथ मिलकर ब्रह्मांड में मूलभूत कणों का निर्माण किया।",
      },
      {
        question: "‘क्वांटम ग्रैविटी’ का उद्देश्य क्या है?",
        answers: shuffle([
          { text: "क्वांटम सिद्धांत और गुरुत्वाकर्षण सिद्धांत को एकीकृत करना", correct: true },
          { text: "केवल क्वांटम कणों का अध्ययन", correct: false },
          { text: "पृथ्वी के गुरुत्वाकर्षण का मापन", correct: false },
          { text: "सूर्य की ऊर्जा की गणना", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> क्वांटम ग्रैविटी का उद्देश्य क्वांटम यांत्रिकी और सामान्य सापेक्षता के सिद्धांतों को एकीकृत कर एक ऐसा सैद्धांतिक ढांचा प्रदान करना है जो अत्यंत छोटे पैमानों पर गुरुत्वाकर्षण को समझ सके।<br><br><i class='fa-solid fa-angles-right icon'></i> अभी यह क्षेत्र अनुसंधानाधीन है।",
      },
      {
        question:
          "‘ब्रह्मांडीय सूक्ष्मतरंग पृष्ठभूमि विकिरण’ (Cosmic Microwave Background Radiation) किसने खोजा था?",
        answers: shuffle([
          { text: "आर्नो पेंजियस और रॉबर्ट विल्सन", correct: true },
          { text: "एलन गुथ और डिक पेंजियस", correct: false },
          { text: "आइजैक न्यूटन", correct: false },
          { text: "अल्बर्ट आइंस्टीन", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> कॉस्मिक माइक्रोवेव बैकग्राउंड (CMB) विकिरण की खोज 1964 में आर्नो पेंजियस और रॉबर्ट विल्सन ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> ये दोनों वैज्ञानिक बेल लैब्स में एक नए हॉर्न एंटीना का परीक्षण करते समय गलती से इस विकिरण का पता लगाने में सफल रहे थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उनकी यह खोज बिग बैंग सिद्धांत के समर्थन में एक निर्णायक प्रमाण साबित हुई, क्योंकि CMB ब्रह्मांड की प्रारंभिक, गर्म और घनी अवस्था का अवशेष है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस महत्वपूर्ण खोज के लिए उन्हें 1978 में भौतिकी का नोबेल पुरस्कार प्रदान किया गया था।",
      },
      {
        question: "‘एंड्रोमेडा गैलेक्सी’ का क्या महत्व है?",
        answers: shuffle([
          { text: "यह हमारी सबसे नजदीकी बड़ी गैलेक्सी है", correct: true },
          { text: "यह सूर्य का उपग्रह है", correct: false },
          { text: "यह पृथ्वी के समान ग्रह है", correct: false },
          { text: "यह ब्रह्मांड का सबसे पुराना तारा है", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> एंड्रोमेडा गैलेक्सी लगभग 2.5 मिलियन प्रकाश वर्ष दूर है और यह हमारी अपनी गैलेक्सी, मिल्की वे, के सबसे नजदीकी बड़ी गैलेक्सी है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड में सबसे बड़े निकटतम गैलेक्सियों में से एक है।",
      },
      {
        question: "‘हाइड्रोजन लाइन’ (Hydrogen Line) खगोल विज्ञान में क्यों महत्वपूर्ण है?",
        answers: shuffle([
          { text: "यह आकाशगंगा की दूरी मापने में मदद करता है", correct: false },
          {
            text: "यह हाइड्रोजन गैस के रेडियो तरंगों की आवृत्ति है, जिससे गैस की उपस्थिति और गति का पता चलता है",
            correct: true,
          },
          { text: "यह ग्रहों की चमक मापता है", correct: false },
          { text: "यह सूर्य की ऊर्जा मापता है", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोजन लाइन 21 सेमी लंबी रेडियो तरंग होती है, जो हाइड्रोजन के परमाणु में इलेक्ट्रॉन के स्पिन बदलाव से उत्पन्न होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे रेडियो वेधशालाओं द्वारा ग्रहण कर आकाशगंगा की संरचना, गति और वितरण का अध्ययन किया जाता है।",
      },
      {
        question: "‘पल्सर’ क्या है?",
        answers: shuffle([
          { text: "एक प्रकार का ब्लैक होल", correct: false },
          {
            text: "तीव्र गति से घूमता हुआ न्यूट्रॉन तारा जो रेडियो तरंगें उत्सर्जित करता है",
            correct: true,
          },
          { text: "ग्रह का नाम", correct: false },
          { text: "एक उपग्रह", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> पल्सर न्यूट्रॉन तारे का एक रूप है जो अपने घूमने की गति के कारण नियमित अंतराल पर रेडियो तरंगें और अन्य प्रकार की विकिरण उत्सर्जित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ब्रह्मांड के सबसे सटीक प्राकृतिक घड़ियों के रूप में काम करते हैं।",
      },
      {
        question:
          "ब्रह्मांड के कितने प्रतिशत हिस्से में सामान्य (बैरियोनिक) पदार्थ पाया जाता है?",
        answers: shuffle([
          { text: "लगभग 5%", correct: true },
          { text: "लगभग 27%", correct: false },
          { text: "लगभग 68%", correct: false },
          { text: "लगभग 50%", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> ब्रह्मांड पदार्थ, अर्थात वह पदार्थ जिसे हम देख और महसूस कर सकते हैं (जैसे तारे, ग्रह, गैस, आदि), ब्रह्मांड के कुल द्रव्यमान-ऊर्जा का केवल लगभग 5% हिस्सा बनाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बाकी का अधिकांश हिस्सा डार्क मैटर और डार्क एनर्जी है।",
      },
      {
        question: "‘ग्रहीय नेबुला’ (Planetary Nebula) क्या होता है?",
        answers: shuffle([
          { text: "नवजात तारा", correct: false },
          {
            text: "मृत तारे की परत जो बाहर की ओर फैलती है और रंगीन गैस का बादल बनाती है",
            correct: true,
          },
          { text: "ब्लैक होल", correct: false },
          { text: "एक प्रकार का ग्रह", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जब मध्यम आकार के तारे (जैसे हमारे सूर्य जैसा तारा) अपनी अंतिम अवस्था में पहुंचते हैं, तो वे अपनी बाहरी परतें बाहर फेंक देते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये गैस के रंगीन बादल बनाते हैं जिन्हें ग्रहीय नेबुला कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तारा के मृतप्राय होने की निशानी होती है।",
      },
      {
        question: "‘हबल टेलीस्कोप’ का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
          { text: "पृथ्वी की सतह से दूर ब्रह्मांड का अध्ययन करना", correct: true },
          { text: "पृथ्वी के अंदर भूगर्भीय गतिविधियों को देखना", correct: false },
          { text: "पृथ्वी के चंद्रमा की सतह की खोज करना", correct: false },
          { text: "सूरज की ऊर्जा मापन", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> हबल स्पेस टेलीस्कोप को पृथ्वी की कक्षा में स्थापित किया गया है ताकि पृथ्वी के वायुमंडल के प्रभाव से मुक्त होकर ब्रह्मांड के दूरस्थ और अस्पष्ट खगोलीय पिंडों का अध्ययन किया जा सके।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका डेटा खगोल विज्ञान में क्रांति लेकर आया है और ब्रह्मांड की उत्पत्ति, विकास और संरचना को समझने में मदद करता है।",
      },
      {
        question: "‘बिग क्रंच’ क्या है?",
        answers: shuffle([
          { text: "ब्रह्मांड का स्थिर अवस्था", correct: false },
          {
            text: "ब्रह्मांड के अंत की एक संभावित स्थिति जिसमें ब्रह्मांड का विस्तार रुककर संकुचित होने लगता है",
            correct: true,
          },
          { text: "ब्रह्मांड का विस्तार", correct: false },
          { text: "ब्रह्मांड का प्रारंभिक बिंदु", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> बिग क्रंच वह सिद्धांत है जिसके अनुसार ब्रह्मांड का विस्तार कभी रुक सकता है और उसके बाद गुरुत्वाकर्षण के प्रभाव से ब्रह्मांड संकुचित होने लगेगा, अंततः सभी पदार्थ एक सघन बिंदु में समाहित हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह बिग बैंग के उलट प्रक्रिया के समान है।",
      },
      {
        question: "‘रेडशिफ्ट’ (Redshift) से क्या पता चलता है?",
        answers: shuffle([
          { text: "किसी वस्तु का तापमान", correct: false },
          {
            text: "किसी वस्तु की गति और ब्रह्मांड के विस्तार की दिशा",
            correct: true,
          },
          { text: "किसी ग्रह की दूरी", correct: false },
          { text: "गुरुत्वाकर्षण बल", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जब कोई खगोलीय वस्तु पृथ्वी से दूर हो रही होती है तो उसके द्वारा उत्सर्जित प्रकाश की तरंगदैर्ध्य बढ़ जाती है, जिससे प्रकाश लाल रंग की ओर झुकता है — इसे रेडशिफ्ट कहते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इससे वस्तु की गति और ब्रह्मांड के विस्तार की जानकारी मिलती है।",
      },
      {
        question: "‘ग्रैविटेशनल लेंसिंग’ क्या है?",
        answers: shuffle([
          { text: "गुरुत्वाकर्षण द्वारा प्रकाश की दिशा में परिवर्तन की घटना", correct: true },
          { text: "प्रकाश का प्रतिबिंब", correct: false },
          { text: "प्रकाश का अपवर्तन", correct: false },
          { text: "सौर विकिरण का प्रभाव", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जब कोई विशालकाय वस्तु जैसे गैलेक्सी या ब्लैक होल प्रकाश की किरणों के रास्ते में आता है, तो उसका गुरुत्वाकर्षण प्रकाश को मोड़ देता है, जिससे दूरस्थ वस्तुएं बढ़ी हुई या विकृत दिखाई देती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इस घटना को ग्रैविटेशनल लेंसिंग कहा जाता है।",
      },
      {
        question: "‘मल्टीवर्स’ क्या अवधारणा है?",
        answers: shuffle([
          { text: "एकमात्र ब्रह्मांड का सिद्धांत", correct: false },
          { text: "अनेक ब्रह्मांडों का समूह या समष्टि", correct: true },
          { text: "पृथ्वी का दूसरा नाम", correct: false },
          { text: "सूरज के निकटतम तारे", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> मल्टीवर्स वह सिद्धांत है जिसके अनुसार हमारा ब्रह्मांड एक अकेला नहीं बल्कि कई ब्रह्मांडों में से एक है।<br><br><i class='fa-solid fa-angles-right icon'></i> ये विभिन्न ब्रह्मांड अपने नियम, स्थूल और आयामों में भिन्न हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विचार अभी सिद्धांतात्मक और कल्पनात्मक स्तर पर है।",
      },
      {
        question: "‘स्पेस टाइम’ का क्या अर्थ है?",
        answers: shuffle([
          { text: "केवल अंतरिक्ष", correct: false },
          { text: "केवल समय", correct: false },
          { text: "अंतरिक्ष और समय का एक साथ सम्मिलित मापदंड", correct: true },
          { text: "पृथ्वी का समय", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> आइंस्टीन के सामान्य सापेक्षता सिद्धांत के अनुसार, अंतरिक्ष और समय अलग-अलग नहीं बल्कि एक साथ मिलकर ‘स्पेसटाइम’ बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> यह चौड़ाई, लंबाई, ऊँचाई और समय का चार आयामी ढांचा है, जिसमें गुरुत्वाकर्षण का प्रभाव वस्तुओं की गति और पथ को प्रभावित करता है।",
      },
      {
        question: "‘वाइड फील्ड गैलेक्सी सर्वे’ का उद्देश्य क्या है?",
        answers: shuffle([
          { text: "ग्रहों की खोज", correct: false },
          {
            text: "दूरस्थ गैलेक्सियों का व्यापक सर्वेक्षण कर ब्रह्मांड की संरचना और विकास को समझना",
            correct: true,
          },
          { text: "सूर्य के तापमान की माप", correct: false },
          { text: "पृथ्वी के वातावरण का अध्ययन", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> वाइड फील्ड गैलेक्सी सर्वे एक खगोलीय परियोजना है जो दूर के गैलेक्सियों का सर्वे करती है, जिससे ब्रह्मांड के बड़े पैमाने पर वितरण, संरचना और उसकी विकास प्रक्रिया का अध्ययन किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह ब्रह्मांड विज्ञान में महत्वपूर्ण डेटा प्रदान करता है।",
      },
      {
        question: "‘इन्फ्लेशन थ्योरी’ ब्रह्मांड के किस पहलू को समझाती है?",
        answers: shuffle([
          { text: "ब्रह्मांड का तेजी से प्रारंभिक विस्तार", correct: true },
          { text: "ब्रह्मांड का संकुचन", correct: false },
          { text: "ब्रह्मांड का तापमान", correct: false },
          { text: "ग्रहों का निर्माण", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> इन्फ्लेशन थ्योरी कहती है कि बिग बैंग के तुरंत बाद ब्रह्मांड ने अत्यंत संक्षिप्त समय में तीव्र और तेजी से विस्तार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विस्तार ने ब्रह्मांड की समानता, समता और बड़ी संरचनाओं के गठन को प्रभावित किया।",
      },
      {
        question: "‘सुपरक्लस्टर’ क्या है?",
        answers: shuffle([
          { text: "एक प्रकार का तारा", correct: false },
          {
            text: "गैलेक्सियों के समूह का समूह, जो ब्रह्मांड की सबसे बड़ी संरचनात्मक इकाई है",
            correct: true,
          },
          { text: "सूर्य के निकटतम उपग्रह", correct: false },
          { text: "ब्लैक होल का एक प्रकार", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> सुपरक्लस्टर कई क्लस्टरों के समूह होते हैं जो ब्रह्मांड के सबसे बड़े पैमाने की संरचनाएं बनाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये विशाल संरचनाएं ब्रह्मांड की विशाल संरचना के अध्ययन में महत्वपूर्ण हैं।",
      },
      {
        question: "‘रेड जाइंट’ तारा किस अवस्था में होता है?",
        answers: shuffle([
          { text: "तारे के जन्म के समय", correct: false },
          {
            text: "तारे के जीवन के अंतिम चरण में जब उसका व्यास बढ़ जाता है",
            correct: true,
          },
          { text: "तारे के ब्लैक होल बनने के समय", correct: false },
          { text: "तारे के शांत होने के समय", correct: false },
        ]),
        Explanation:
          "<i class='fa-solid fa-angles-right icon'></i> जब एक मध्यम आकार का तारा अपने जीवन के अंत की ओर बढ़ता है, तो उसका कोर सिकुड़ता है और बाहरी परतें फैलती हैं, जिससे वह ‘रेड जाइंट’ या लाल दानव तारा बन जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका तापमान ठंडा होता है लेकिन इसका आकार बहुत बड़ा हो जाता है।",
      },
      {
        question: "‘स्पेस टेलीस्कोप’ और ज़मीन आधारित टेलीस्कोप में मुख्य अंतर क्या है?",
        answers: shuffle([
          { text: "स्पेस टेलीस्कोप केवल रेडियो तरंगें देखता है", correct: false },
          { text: "स्पेस टेलीस्कोप पृथ्वी के वायुमंडल से ऊपर स्थित होता है, जिससे स्पष्ट और विकृतिमुक्त छवियाँ प्राप्त होती हैं", correct: true },
          { text: "ज़मीन आधारित टेलीस्कोप स्पेस टेलीस्कोप से बड़ा होता है", correct: false },
          { text: "कोई अंतर नहीं है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी के वायुमंडल में हवा और धूल होने के कारण जमीन से देखे गए आकाशीय पिंडों की छवियाँ धुंधली या विकृत हो सकती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> स्पेस टेलीस्कोप, जैसे हबल, पृथ्वी की कक्षा में होते हैं, इसलिए वे वायुमंडल के प्रभाव से मुक्त होकर अत्यंत स्पष्ट और विस्तृत छवियाँ प्रदान करते हैं।"
      },
      {
        question: "‘ब्लैक होल’ किस प्रकार का खगोलीय पिंड है?",
        answers: shuffle([
          { text: "अत्यंत घना क्षेत्र जहाँ से प्रकाश भी निकल नहीं सकता", correct: true },
          { text: "एक चमकीला तारा", correct: false },
          { text: "एक ग्रह जो सूर्य के चारों ओर घूमता है", correct: false },
          { text: "एक उपग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्लैक होल ब्रह्मांड में ऐसा क्षेत्र होता है जिसकी गुरुत्वाकर्षण शक्ति इतनी अधिक होती है कि प्रकाश भी उससे बाहर नहीं निकल पाता।<br><br><i class='fa-solid fa-angles-right icon'></i> यह तब बनता है जब एक विशाल तारा अपने जीवन के अंतिम चरण में अपने कोर के नीचे सिकुड़ जाता है।"
      },
      {
        question: "‘ब्रह्मांड की आयु’ के निर्धारण में किस खगोल भौतिक घटना ने प्रमुख भूमिका निभाई है?",
        answers: shuffle([
          { text: "रेडशिफ्ट का अध्ययन", correct: true },
          { text: "सूर्य का तापमान", correct: false },
          { text: "चंद्रमा की दूरी", correct: false },
          { text: "ग्रहों की गति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> रेडशिफ्ट के अध्ययन से पता चलता है कि ब्रह्मांड लगातार फैल रहा है।<br><br><i class='fa-solid fa-angles-right icon'></i> हबल के नियम के अनुसार, वस्तुएं जितनी दूर होती हैं, उनकी गति भी उतनी तेज होती है।<br><br><i class='fa-solid fa-angles-right icon'></i> इस आधार पर वैज्ञानिकों ने ब्रह्मांड की आयु लगभग 13.8 अरब वर्ष मापी है।"
      },
      {
        question: "‘न्यूट्रॉन स्टार’ क्या है?",
        answers: shuffle([
          { text: "एक प्रकार का तारा जो मुख्य रूप से न्यूट्रॉन से बना होता है और अत्यंत घना होता है", correct: true },
          { text: "एक नवजात तारा", correct: false },
          { text: "एक ब्लैक होल", correct: false },
          { text: "एक ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> न्यूट्रॉन स्टार तब बनता है जब एक विशाल तारा सुपरनोवा विस्फोट के बाद अपने कोर में सिकुड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका घनत्व अत्यंत अधिक होता है और यह लगभग पूरी तरह से न्यूट्रॉन कणों से बना होता है।"
      },
      {
        question: "‘गैलेक्सी क्लस्टर’ का क्या अर्थ है?",
        answers: shuffle([
          { text: "ग्रहों का समूह", correct: false },
          { text: "गैलेक्सियों का समूह जो आपस में गुरुत्वाकर्षण द्वारा बंधे होते हैं", correct: true },
          { text: "एक तारा", correct: false },
          { text: "ब्रह्मांड की सबसे छोटी इकाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गैलेक्सी क्लस्टर गैलेक्सियों के समूह होते हैं, जिनमें हजारों गैलेक्सियाँ आपस में गुरुत्वाकर्षण द्वारा जुड़ी होती हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> ये ब्रह्मांड की बड़ी संरचनाओं में से एक हैं और इनके अध्ययन से ब्रह्मांड की संरचना और इतिहास का पता चलता है।"
      },
      {
        question: "‘क्रिस्मस ट्रि टेल’ वाला तारा कौन सा है?",
        answers: shuffle([
          { text: "तारा जिसकी गहरे रंग की टहनियाँ होती हैं", correct: false },
          { text: "एक तारा जो अपनी मृत अवस्था में रंगीन गैस के बादल छोड़ता है, जिसे ग्रहीय नेबुला कहते हैं", correct: true },
          { text: "सुपरनोवा", correct: false },
          { text: "ब्लैक होल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब मध्यम आकार के तारे अपनी बाहरी परतें छोड़ देते हैं, तो वे रंगीन गैस के बादल बनाते हैं जिन्हें ग्रहीय नेबुला कहा जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इनका आकार कभी-कभी क्रिस्मस ट्री की तरह दिखता है।"
      },
      {
        question: "‘सुपरनोवा’ क्या है?",
        answers: shuffle([
          { text: "एक नवजात तारा", correct: false },
          { text: "एक विशाल तारा विस्फोट जो अत्यंत चमकीला और शक्तिशाली होता है", correct: true },
          { text: "ग्रह का नाम", correct: false },
          { text: "एक प्रकार का ब्लैक होल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपरनोवा तब होता है जब एक भारी तारा अपने जीवन के अंत में विस्फोट कर देता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह विस्फोट इतना शक्तिशाली होता है कि वह पूरी गैलेक्सी में कुछ हफ्तों तक सबसे चमकीली वस्तु बन जाता है।"
      },
      {
        question: "‘क्वासर’ क्या होता है?",
        answers: shuffle([
          { text: "एक ब्लैक होल", correct: false },
          { text: "ब्रह्मांड का एक अत्यंत दूरस्थ और अत्यंत चमकीला सक्रिय गैलेक्सी केन्द्र", correct: true },
          { text: "एक उपग्रह", correct: false },
          { text: "एक ग्रह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> क्वासर एक सक्रिय गैलेक्सी केन्द्र होता है जो अत्यधिक ऊर्जा उत्सर्जित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह अत्यंत दूर होने के कारण ब्रह्मांड के शुरुआती दौर का अध्ययन करने में मदद करता है।"
      },
      {
        question: "‘बिग बैंग थ्योरी’ के मुख्य प्रमाण क्या हैं?",
        answers: shuffle([
          { text: "रेडशिफ्ट, ब्रह्मांडीय सूक्ष्मतरंग पृष्ठभूमि विकिरण, और ब्रह्मांड की विस्तारशीलता", correct: true },
          { text: "सूर्य का तापमान", correct: false },
          { text: "पृथ्वी की गति", correct: false },
          { text: "चंद्रमा की दूरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बिग बैंग सिद्धांत को समर्थन देने वाले मुख्य प्रमाण हैं - दूरस्थ गैलेक्सियों का रेडशिफ्ट, जिससे पता चलता है कि ब्रह्मांड फैल रहा है;<br><br><i class='fa-solid fa-angles-right icon'></i> ब्रह्मांडीय सूक्ष्मतरंग पृष्ठभूमि विकिरण, जो प्रारंभिक ब्रह्मांड से बची हुई गर्माहट है; और ब्रह्मांड की विस्तारशीलता की गणनाएँ।"
      },
      {
        question: "‘विस्फोटकारी बिग बैंग’ की अवधारणा किस वैज्ञानिक ने सबसे पहले प्रस्तुत की थी?",
        answers: shuffle([
          { text: "जॉर्ज लेमैत्रे", correct: true },
          { text: "आइजैक न्यूटन", correct: false },
          { text: "अल्बर्ट आइंस्टीन", correct: false },
          { text: "निकोला टेस्ला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जॉर्ज लेमैत्रे, बेल्जियम के भौतिकविज्ञानी और पादरी, ने सबसे पहले यह सिद्धांत प्रस्तुत किया कि ब्रह्मांड एक \"प्राइमवल एटम\" या \"कोस्मिक एग\" से उत्पन्न हुआ था, जिसे बाद में बिग बैंग थ्योरी के नाम से जाना गया।"
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